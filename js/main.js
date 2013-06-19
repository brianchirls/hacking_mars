var WIDTH = $(window).width(),
    HEIGHT = $(window).height();

var VIEW_ANGLE = 45;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 1;
var FAR = 100000;

var stats, scene, camera, renderer, controls, tween;

var dae;
var terrain;
var time = 0;

var clock = new THREE.Clock();
var delta = clock.getDelta();

/********************************
	PAGE LOADING
********************************/

function setLoadMessage( msg ){
  $('#loadtext').html(msg + "...");
}

function onTextures() {
  init();
  animate();
  $("#loadtext").hide();
};

function init() {

  /********************************
    SCENE, CAMERA, LIGHTS, COLLADA
  ********************************/

  $container = $("#container");

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog( 0x6B7DA0, 0, 22000 );

  camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
  camera.position.set( 10, 2, 20 );

  camTarget = dae.position.clone();

  /// LIGHTS!!
  var directionalLight = new THREE.DirectionalLight( 0x6B7DA0, 1.5 );
  directionalLight.position.set( -10, 10, 0 );
  directionalLight.castShadow = true;
  scene.add( directionalLight );
  
  // Greenhouse Frame
  dae.scale.set( .25,.25,.25);
  dae.position.set( 0, 2, 0);
  scene.add( dae );
  
  // Cylinder Geometry = radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded
  var glassMaterial = new THREE.MeshLambertMaterial( { color: "rgb(255,0,0)", opacity: .25 } );
  var glass = new THREE.Mesh( new THREE.CylinderGeometry(8, 8, 46.5, 10, 10, false), glassMaterial );
  glass.rotation.x = 90 * Math.PI / 180;
  dae.add(glass);
  
  // Terrain Collada
  scene.add( terrain );
  
  var sideScale = 0.5;
  var sideSize = 1024;

  var skybox = new THREE.Object3D();

  var sides = [
    {
      name: 'front',
      url: 'textures/skybox/skybox_07.jpg',
      position: new THREE.Vector3( 0, 0,  sideSize ),
      rotation: new THREE.Vector3( 0, Math.PI, 0 ),
      scale: new THREE.Vector3( sideScale, sideScale, sideScale )
    },
    {
      name: 'back',
      url: 'textures/skybox/skybox_05.jpg', 
      position: new THREE.Vector3( 0, 0, -sideSize ),
      rotation: new THREE.Vector3( 0, 0, 0 ),
      scale: new THREE.Vector3( sideScale, sideScale, sideScale )
    },
    {
      name: 'left',
      url: 'textures/skybox/skybox_04.jpg',
      position: new THREE.Vector3( -sideSize, 0, 0 ),
      rotation: new THREE.Vector3( 0, Math.PI / 2, 0 ),
      scale: new THREE.Vector3( sideScale, sideScale, sideScale )
    },
    {
      name: 'right',
      url: 'textures/skybox/skybox_06.jpg',
      position: new THREE.Vector3( sideSize, 0, 0 ),
      rotation: new THREE.Vector3( 0, -Math.PI / 2, 0 ),
      scale: new THREE.Vector3( sideScale, sideScale, sideScale )
    },
    {
      name: 'top',
      url: 'textures/skybox/skybox_02.jpg',
      position: new THREE.Vector3( 0, -sideSize, 0 ),
      rotation: new THREE.Vector3( - Math.PI / 2, 0, Math.PI ),
      scale: new THREE.Vector3( sideScale, sideScale, sideScale )
    },
    {
      name: 'bottom',
      url: 'textures/skybox/skybox_09.jpg',
      position: new THREE.Vector3( 0,  sideSize, 0 ),
      rotation: new THREE.Vector3( Math.PI / 2, 0, Math.PI ),
      scale: new THREE.Vector3( sideScale, sideScale, sideScale )
    }
  ];
  
  for ( var i = 0; i < sides.length; i ++ ) {
    
    var side = sides[ i ];
    
    var plane = new THREE.PlaneGeometry( sideSize,  sideSize );
    var mat = new THREE.MeshBasicMaterial( {
      map: THREE.ImageUtils.loadTexture( sides[i].url ),
      overdraw: true
    });
    
    var object = new THREE.Mesh( plane, mat );
    object.frustumCulled = false;
    
    var vec = new THREE.Vector3();
    vec.multiplyVectors( side.position, side.scale );
    
    object.position = vec;
    object.rotation = side.rotation;
    object.scale.x = side.scale.x * 2;
    object.scale.y = side.scale.y * 2;
    object.scale.z = side.scale.z * 2;
    
    skybox.add( object );
  }
  
  skybox.scale.set( 10, 10, 10);
  scene.add(skybox);


  /********************************
  RENDERER
  ********************************/

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( WIDTH, HEIGHT );

  $container.append( renderer.domElement );
  renderer.autoClear = false;

  controls = new THREE.OrbitControls( camera, $container[0] );
  controls.addEventListener( 'change', render );
  controls.maxPolarAngle = Math.PI / 2 + ( -1 * Math.PI / 180 ); 
  controls.minDistance = 2.5;
  controls.maxDistance = 50;

  /********************************
  STATS
  ********************************/
  
  // Load stats if on development server
  var hostname = location.hostname;
  if (hostname === '0.0.0.0' || hostname === 'localhost') {
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    $container.append( stats.domElement );
  }
  
  /********************************
  EVENTS
  ********************************/


  window.addEventListener('resize', onWindowResize, false );

  /********************************
  BUILD GUI
  ********************************/

  var camTweens = { 
    one: new CAMTWEEN( { x:5, y:5, z:5 }, { x:0, y:0, z:0 }, 1 ),
    two: new CAMTWEEN( { x:0, y:2, z:10 }, { x:0, y:0, z:0 }, 1 ),
    three: new CAMTWEEN( { x:-5, y:3, z:-2 }, { x:0, y:0, z:0 }, 1 ),
    four: new CAMTWEEN( { x:0, y:4, z:-6 }, { x:0, y:0, z:0 }, 1 )
  };

  var gui = new dat.GUI();

  var camFolder = gui.addFolder( 'Camera Positions' );
  camFolder.open();
  camFolder.add( camTweens.one, 'tween' ).name( 'Camera One' );
  camFolder.add( camTweens.two, 'tween' ).name( 'Camera Two' );
  camFolder.add( camTweens.three, 'tween' ).name( 'Camera Three' );
  camFolder.add( camTweens.four, 'tween' ).name( 'Camera Four' );
}


function onWindowResize() {
  camera.aspect = $(window).width() / $(window).height();
  camera.updateProjectionMatrix();
  renderer.setSize( $(window).width(), $(window).height() );
}

function animate() {
  requestAnimationFrame( animate );
  
  camera.updateProjectionMatrix();
  camera.lookAt( camTarget );
  
  controls.update();
  
  if (stats)
    stats.update();
    
  TWEEN.update();
  
  time += .01;
  
  camera.lookAt( camTarget );
  render();
}

function render() {
  renderer.clear();
  renderer.render( scene, camera );
}

$(document).ready( function() {
  
  // Detect WebGL
  if (!Detector.webgl)
    Detector.addGetWebGLMessage();
  
  // Show message while textures load
  $('#loadtext').show();
  setLoadMessage("Loading Martian Greenhouse");
  
  // Load terrain texture
  var terrainTexture = THREE.ImageUtils.loadTexture('./textures/TerrainSurface.png');
  
  // Create deferred objects for texture loading
  var dfd1 = new $.Deferred();
  var dfd2 = new $.Deferred();
  
  // Callback for when all textures loaded
  $.when(dfd1, dfd2).done(onTextures);
  
  // Initialize new Collada loaders
  var greenhouseLoader = new THREE.ColladaLoader();
  greenhouseLoader.options.convertUpAxis = true;
  greenhouseLoader.load( './models/greenhouseStructure.dae', function (collada) {
    
    dae = collada.scene;
    daeAnimation = collada.animations;
    
    dae.scale.set( 1, 1, 1 );
    
    dae.updateMatrix();
    dfd1.resolve();
  });
  
  var terrainLoader = new THREE.ColladaLoader();
  terrainLoader.options.convertUpAxis = true;
  terrainLoader.load('./models/terrain.dae', function( collada) {
    
    terrain = collada.scene;
    terrain.scale.set(1,1,1);
    
    terrainTexture.wrapS = terrainTexture.wrapT = THREE.RepeatWrapping;
    terrainTexture.repeat.set(30, 30);
    
    terrain.children[0].material = new THREE.MeshLambertMaterial({ 
      map: terrainTexture
    })
    
    terrain.children[0].receiveShadow = true;
    dfd2.resolve();
  });

});
