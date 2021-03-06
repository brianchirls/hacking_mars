/* This code written in whole by Jacob A Brennan. */
var main_lab = {
	create_label: function (tip_json){
		/* This function currently is not used by the instruction lab.
		 * Future refactors will lead to this, or another similar central
		 * function, being used by all label making functions in the labs.
		 */
		var label = document.createElement('a');
		label.label_icon = document.createElement('div');
		label.label_content = document.createElement('div');
		label.label_header = document.createElement('div');
		label.label_title = document.createElement('div');
		label.appendChild(label.label_icon);
		label.label_header.appendChild(label.label_title);
		label.label_content.appendChild(label.label_header);
		label.appendChild(label.label_content);
		label.setAttribute('class', 'label');
		label.label_icon.setAttribute('class', 'icon');
		label.label_content.setAttribute('class', 'content');
		label.label_header.setAttribute('class', 'header');
		label.label_title.setAttribute('class', 'title');
		return label;
	},
    create_player: function (media){
        // media_type: video | audio
        var player = {
            media: undefined,
            popcorn: undefined,
            controls: undefined,
            currentDuration: 0,
            dispose: function (){
                this.media = null;
                Popcorn.destroy(this.popcorn);
                this.popcorn = null;
                //this.controls.distroy();
                this.controls = null;
            }
        }
        if((typeof media) === 'string'){
            player.media = document.createElement(media);
        } else if(media){
			player.media = media;
		}
        player.popcorn = Popcorn(player.media);
        player.controls = this.create_controls(player);
        return player;
    },
    create_controls: function (player){
        var self = this;
		player.currentDuration = player.popcorn.duration();
        var controls = document.createElement('div');
        controls.setAttribute('class', 'controls');
        var svgNs = 'http://www.w3.org/2000/svg';
        var controlPanel = document.createElementNS(svgNs, 'svg');
        controlPanel.setAttribute('class', 'control_panel');
        controlPanel.setAttribute('viewBox', '0 0 128 9');
        /*control_panel.setAttributeNS(null, 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
        control_panel.setAttributeNS(null, 'xmlns:ev', 'http://www.w3.org/2001/xml-events');*/
        //var big_play = document.createElement('svg');
        /*
        big_play.outerHTML = '\
            <svg id="control_big_play" width="100" height="100" viewBox="0 0 100 100"\
                xmlns="http://www.w3.org/2000/svg"\
                xmlns:xlink="http://www.w3.org/1999/xlink"\
                xmlns:ev="http://www.w3.org/2001/xml-events">\
                <style>\
                    #big_play{\
                        fill: grey;\
                    }\
                    #big_play:hover{\
                        fill: red;\
                    }\
                </style>\
                <title>Play</title>\
                <path id="big_play" d="m10,10l80,40l-80,40l0,-80" />\
            </svg>\
        ';*/
        var playPause = document.createElementNS(svgNs, 'svg');
        playPause.setAttribute('class', 'icon toggle_play');
        playPause.setAttribute('stroke-linejoin', 'round');
        playPause.setAttribute('fill', 'rgb(102,102,102)');
        playPause.setAttribute('stroke', '#000000');
        playPause.setAttribute('stroke-width', '0');
        playPause.setAttribute('x', '7');
        playPause.setAttribute('y', '1');
        playPause.setAttribute('width', '7');
        playPause.setAttribute('height', '7');
        playPause.setAttribute('viewBox', '0 0 100 100');
        var play = document.createElementNS(svgNs, 'path');
        play.setAttribute('class', 'play');
        play.setAttribute('d', 'm5,5l81,45l-81,45l0,-90z');
        var pause = document.createElementNS(svgNs, 'path');
        pause.setAttribute('class', 'pause');
        pause.setAttribute('d', 'm12,86 l0,-72 l20,0 l0,71.20879 l-20,0.79121 M45,86 l0,-72 l20,0 l0,71.20879 l-20,0.79121z');
        pause.style.opacity = '0';
        playPause.appendChild(play);
        playPause.appendChild(pause);
        controlPanel.appendChild(playPause);
        /*
            <style>\
                #pause{\
                    opacity: 0;\
                }\
                .icon:hover{\
                    fill: red;\
                }\
            </style>\
        */
        var progressBar = document.createElementNS(svgNs, 'g');
        progressBar.setAttribute('class', 'progress_bar');
        progressBar.setAttribute('transform', 'translate(17,3)');
        progressBar.setAttribute('width', '75');
        progressBar.setAttribute('height', '3');
        var buffered = document.createElementNS(svgNs, 'rect');
        buffered.setAttribute('class', 'buffered');
        buffered.setAttribute('height', '3');
        progressBar.appendChild(buffered);
        var elapsed = document.createElementNS(svgNs, 'rect');
        elapsed.setAttribute('class', 'elapsed');
        elapsed.setAttribute('height', '3');
        progressBar.appendChild(elapsed);
        controlPanel.appendChild(progressBar);
        var mute = document.createElementNS(svgNs, 'svg');
        mute.setAttribute('class', 'icon mute');
        mute.setAttribute('stroke-linejoin', 'round');
        mute.setAttribute('fill', 'rgb(102,102,102)');
        mute.setAttribute('stroke', '#000000');
        mute.setAttribute('stroke-width', '0');
        mute.setAttribute('x', '114');
        mute.setAttribute('y', '1');
        mute.setAttribute('width', '7');
        mute.setAttribute('height', '7');
        mute.setAttribute('viewBox', '0 0 100 100');
        var muteSpeaker = document.createElementNS(svgNs, 'path');
        var muteSound = document.createElementNS(svgNs, 'path');
        muteSpeaker.setAttribute('class', 'mute_speaker');
        muteSpeaker.setAttribute('d', 'm8,30l0,40l20,0l25,25l0,-90l-25,25l-20,0z');
        muteSound.setAttribute('class', 'mute_sound');
        muteSound.setAttribute('d', 'm65,20a50,50 0 0 10,60 M75,10a50,50 0 0 10,80');
        mute.appendChild(muteSpeaker);
        mute.appendChild(muteSound);
        controlPanel.appendChild(mute);
        var timer = document.createElementNS(svgNs, 'svg');
        timer.setAttribute('class', 'timer');
        timer.setAttribute('x', '93');
        timer.setAttribute('y', '1');
        timer.setAttribute('width', '21');
        timer.setAttribute('height', '7');
        timer.setAttribute('viewBox', '0 0 225 100');
        var timeText = document.createElementNS(svgNs, 'text');
        timeText.setAttribute('class', 'time_text');
        timeText.setAttribute('text-anchor', 'left');
        timeText.setAttribute('font-family', 'sans-serif');
        timeText.setAttribute('font-size', '24');
        timeText.setAttribute('y', '22');
        timeText.setAttribute('x', '0');
        timeText.setAttribute('stroke', '#000000');
        timeText.setAttribute('transform', 'matrix(2.0294, 0, 0, 2.0294, 4.73115, 22.9506)');
        timer.appendChild(timeText);
        controlPanel.appendChild(timer);
        /*
        controls.appendChild(big_play);
        */
        // Capture standard play events.
        player.popcorn.media.addEventListener("click", function (){
            if(player.popcorn.paused()){
                player.popcorn.play()
            } else{
                player.popcorn.pause();
            }
        }, false);
        /*
        // Big Play Button
        big_play.addEventListener("click", function (){
            player.popcorn.play();
        }, false)
        */
        // Play/Pause Button
        playPause.addEventListener("click", function (){
            if(player.popcorn.currentTime() == player.popcorn.duration()){
                player.popcorn.currentTime(0);
                player.popcorn.play();
                return;
            }
            if(player.popcorn.paused()){ player.popcorn.play();}
            else{player.popcorn.pause();}
        }, false);
        player.popcorn.on("playing", function (){
            /*big_play.style.opacity = "0";
            setTimeout(function (){
                big_play.style.display = "none";
            }, 1000)*/
            play.style.opacity = "0";
            pause.style.opacity = "1";
        });
        player.popcorn.on("pause", function (){
            play.style.opacity = "1";
            pause.style.opacity = "0";
        });
        player.popcorn.on("ended", function (){
            play.style.opacity = "1";
            pause.style.opacity = "0";
        });
        // Progress Bar and Timer
        progressBar.addEventListener('click', function (event){
            var duration = player.popcorn.duration();
            if(!duration){ return;}
            var progressRect = progressBar.getBoundingClientRect();
            var progressWidth = progressRect.right - progressRect.left;
            var offsetX = event.pageX - progressRect.left;
            var offsetPercent = offsetX / progressWidth;
            var seekTime = duration * offsetPercent;
            elapsed.style.width = ''+(offsetPercent*100)+'%';
            player.popcorn.currentTime(seekTime);
        });
        var maxBarMidth = parseInt(progressBar.getAttribute('width'));
		
        player.popcorn.on("timeupdate", function (){
            var duration = player.popcorn.duration();
            if(!duration){ return;}
            var currentTime = player.popcorn.currentTime();
            var elapsedPercent = currentTime / duration;
            elapsed.setAttribute('width', ''+(elapsedPercent*maxBarMidth));
            var extra0 = ((currentTime%60) < 10)? "0" : "";
            currentTime = ""+Math.floor(currentTime/60)+":"+extra0+Math.floor(currentTime%60);
            if(player.currentDuration !== undefined){
                timeText.textContent = ""+currentTime+"/"+player.currentDuration;
            } else{
                timeText.textContent = ""+currentTime;
            }
        });
        player.popcorn.on("progress", function (){
            player.currentDuration = player.popcorn.duration();
            if(!player.currentDuration){ return;}
            var bufferedRange = player.popcorn.buffered();
			if(bufferedRange.length <= 0){ return;}
            var bufferEnd = bufferedRange.end(0);
            if(!bufferEnd){ bufferEnd = 0}
            buffered.setAttribute('width', ''+((bufferEnd/player.currentDuration)*maxBarMidth));
            var currentTime = player.popcorn.currentTime()
            var extra0 = ((currentTime%60) < 10)? "0" : "";
            currentTime = ""+Math.floor(currentTime/60)+":"+extra0+Math.floor(currentTime%60);
            player.currentDuration = ""+Math.floor(player.currentDuration/60)+":"+Math.floor(player.currentDuration%60);
            if(player.currentDuration){
                timeText.textContent = ""+currentTime+"/"+player.currentDuration;
            } else{
                timeText.textContent = ""+currentTime;
            }
        });
		player.popcorn.emit('progress');
        // Volume:
        mute.addEventListener("click", function (){
            if(player.popcorn.muted()){
                player.popcorn.unmute();
                muteSound.style.opacity = "1";
            } else{
                player.popcorn.muted(true);
                muteSound.style.opacity = "0";
            }
        }, false);
		if(player.popcorn.muted()){
            muteSound.style.opacity = "0";
		} else{
            muteSound.style.opacity = "1";
		}
        return controlPanel;
    },
    setup: function (){
        var self = this;
        //document.title = configuration.title;
        this.seeking = false;
        //this.setup_popcorn(configuration);
        window.addEventListener("resize", function (e){ self.resize()}, false);
        window.addEventListener("keydown", function (e){ self.control_interface.key_down(e);}, false);
        window.addEventListener('mousemove', function (e){ self.control_interface.mouse_control(e);}, false);
        window.addEventListener('mousedown', function (e){ self.control_interface.mouse_control(e);}, false);
        window.addEventListener('mouseup', function (e){ self.control_interface.mouse_control(e);}, false);
        // Setup frame slider:
        this.frame = document.getElementById("frame");
        this.slider = document.getElementById("slider");
        this.middle = document.getElementById("frame_middle");
        this.right  = document.getElementById("frame_right" );
        this.left   = document.getElementById("frame_left"  );
        this.video_width = 1280;
        this.video_height = 720;
        this.slider_state = "middle";
        this.arrow_left  = document.getElementById("arrow_left" );
        this.arrow_right = document.getElementById("arrow_right");
        this.arrow_left.addEventListener("click", function (){
            main_lab.transition("left");
        }, false)
        this.arrow_right.addEventListener("click", function (){
            main_lab.transition("right");
        }, false)
        this.resize();
        // Finished
    },
    /*registerLab: function (lab_type, configuration){
        this.lab = Object.create(lab_type);
        this.lab.setup(configuration);
    },
	cancelLab: function (old_lab){
		this.lab = null;
		old_lab.dispose();
	},*/
    frame_left: undefined,
    frame_middle: undefined,
    frame_right: undefined,
    register_frame: function (frame_loc, new_frame){
        var container_element;
        switch(frame_loc){
		case 'left':
			if(this.frame_left){
				this.left.removeChild(this.frame_left);
			}
			this.frame_left = new_frame;
			container_element = this.left;
		break;
		case 'middle':
			if(this.frame_middle){
				this.middle.removeChild(this.frame_middle);
			}
			this.frame_middle = new_frame;
			container_element = this.middle;
		break;
		case 'right':
			if(this.frame_right){
				this.right.removeChild(this.frame_right);
			}
			this.frame_right = new_frame;
			container_element = this.right;
		break;
        }
        this.transition(null, true);
        if(!container_element){
            return null;
        } else{
            return container_element.appendChild(new_frame);
        }
    },
    cancel_frame: function (oldFrame){
        var container_element;
        if(oldFrame == this.frame_left){
            this.frame_left = null;
            container_element = this.left;
        }
        if(oldFrame == this.frame_middle){
            this.frame_middle = null;
            container_element = this.middle;
        }
        if(oldFrame == this.frame_right){
            this.frame_right = null;
            container_element = this.right;
        }
        if(container_element){
            container_element.removeChild(oldFrame);
        }
        this.transition(null, true);
    },
    control_interface: {
        focus: undefined,
        dragged_element: undefined,
        last_click: undefined,
        key_down: function (e){
            var key_code;
            if(window.event){ key_code = e.keyCode} // IE 8 and earlier compatibility.
            else{
                key_code = e.which// | e.keyCode;
            }
            switch(key_code){
			case 37:
				main_lab.transition("left");
			break;
			case 39:
				main_lab.transition("right");
			break;
			/*
			case 38:
				main_lab.scroll("up");
			break;
			case 40:
				main_lab.scroll("down");
			break;
			*/
            }
        },
        mouse_control: function (e){
            if(window.event){ e = window.event} // IE 8 and earlier compatibility.
            switch(e.type.toLowerCase()){
			case 'mousedown':
				this.dragged_element = e.target;
				this.last_click = {
					x: e.pageX,
					y: e.pageY,
					offset_x: e.pageX - e.target.offsetLeft,
					offset_y: e.pageY - e.target.offsetTop
				};
			break;
			case 'blur':
			case 'mouseup':
				this.dragged_element = undefined;
				main_lab.right.className = '';
			break;
			case 'mousemove':
				if(this.dragged_element && (typeof this.dragged_element.drag === 'function')){
					this.dragged_element.drag(e);
				}
			break;
            }
        }
    },
    viewport_size: function (){
        var e  = document.documentElement;
        var g  = document.getElementsByTagName('body')[0];
        var _x = window.innerWidth  || e.clientWidth  || g.clientWidth;
        var _y = window.innerHeight || e.clientHeight || g.clientHeight;
        return {width: _x, height: _y};
    },
    resize: function (){
        this.slider.style.transition       = "";
        this.slider.style.MozTransition    = "";
        this.slider.style.WebkitTransition = "";
        this.slider.style.OTransition      = "";
        var size = this.viewport_size();
        var monitor_aspect_ratio = size.width / size.height;
        var video_aspect_ratio = 16 / 9;
        var modified_width;
        var modified_height;
        if(monitor_aspect_ratio >= video_aspect_ratio){
            // Center Horizontally
            modified_height = size.height;
            modified_width = video_aspect_ratio * modified_height;
            this.frame.style.top = "0px";
            this.frame.style.left = ""+Math.floor((size.width-modified_width)/2)+"px";
        } else{
            // Center Vertically
            modified_width = size.width;
            modified_height = modified_width / video_aspect_ratio;
            this.frame.style.top = ""+Math.floor((size.height-modified_height)/2)+"px";
            this.frame.style.left = "0px";
        }
        this.frame.style.width  = modified_width +"px";
        this.frame.style.height = modified_height+"px";
        document.body.style.fontSize = Math.round(modified_height/20)+"px";
        this.left.style.fontSize = Math.round(modified_height/16)+"px";
        this.middle.style.top     = "0px";
        this.left.style.top       = "0px";
        this.right.style.top      = "0px";
        this.slider.style.top     = "0px";
        this.middle.style.left    = ( modified_width  )+"px";
        this.left.style.left      = "0px";
        this.right.style.left     = ( modified_width*2)+"px";
        switch(this.slider_state){
		case "middle":
			this.slider.style.left = "-100%";
		break;
		case "left":
			this.slider.style.left = "0%";
		break;
		case "right":
			this.slider.style.left = "-200%"
		break;
        }
        this.middle.style.width   = modified_width+"px";
        this.left.style.width     = modified_width+"px";
        this.right.style.width    = modified_width+"px";
        this.slider.style.width   = (modified_width*3)+"px";
        this.middle.style.height  = modified_height+"px";
        this.left.style.height    = modified_height+"px";
        this.right.style.height   = modified_height+"px";
        this.slider.style.height  = modified_height+"px";
		if(this.frame_left && ((typeof this.frame_left.resize) === 'function')){
			this.frame_left.resize();
		}
		if(this.frame_middle && ((typeof this.frame_middle.resize) === 'function')){
			this.frame_middle.resize();
		}
		if(this.frame_right && ((typeof this.frame_right.resize) === 'function')){
			this.frame_right.resize();
		}
    },
    transition: function (direction, force){
        var self = this;
		var current_frame;
		var destination_frame;
        var destination_state = this.slider_state;
        switch(this.slider_state){
		case 'left':
			current_frame = this.frame_left;
		break;
		case 'middle':
			current_frame = this.frame_middle;
		break;
		case 'right':
			current_frame = this.frame_right;
		break;
		}
        if(direction){
            this.slider.style.transition       = "left 1s";
            this.slider.style.MozTransition    = "left 1s";
            this.slider.style.WebkitTransition = "left 1s";
            this.slider.style.OTransition      = "left 1s";
            switch(direction){
			case "left":2
				switch(this.slider_state){
				case "middle":
					destination_state = 'left';
				break;
				case "right":
					destination_state = 'middle';
				break;
				}
			break;
			case "right":
				switch(this.slider_state){
				case "middle":
					destination_state = "right";
				break;
				case "left":
					destination_state = "middle";
				break;
				}
			break;
            }
            switch(destination_state){
			case 'left':
				if(this.frame_left){
					this.slider_state = destination_state;
					destination_frame = this.frame_left;
					
				}
			break;
			case 'middle':
				if(this.frame_middle){
					this.slider_state = destination_state;
					destination_frame = this.frame_middle;
				}
			break;
			case 'right':
				if(this.frame_right){
					this.slider_state = destination_state;
					destination_frame = this.frame_right;
				}
			break;
            }
        }
        switch(this.slider_state){
		case "left":
			//this.tip_manager.clear_tips();
			this.slider.style.left = "0%";
			this.arrow_left.style.opacity = "0";
			if(this.frame_middle){
				this.arrow_right.style.opacity = "1";
			} else{
				this.arrow_right.style.opacity = "0";
			}
			//this.popcorn.pause()
		break;
		case "middle":
			this.slider.style.left = "-100%";
			if(this.frame_left){
				this.arrow_left.style.opacity = "1";
			} else{
				this.arrow_left.style.opacity = "0";
			}
			if(this.frame_right){
				this.arrow_right.style.opacity = "1";
			} else{
				this.arrow_right.style.opacity = "0";
			}
			//this.tip_manager.populate();
		break;
		case "right":
			//this.tip_manager.clear_tips();
			this.slider.style.left = "-200%";
			this.arrow_right.style.opacity = "0";
			if(this.frame_middle){
				this.arrow_left.style.opacity = "1";
			} else{
				this.arrow_left.style.opacity = "0";
			}
			//this.popcorn.pause()
		break;
        }
		if(current_frame != destination_frame){
			if(current_frame && (typeof current_frame.transition_away) === 'function'){
				current_frame.transition_away();
			}
			if(destination_frame && (typeof destination_frame.transition) === 'function'){
				destination_frame.transition();
			}
		}
    },
};

document.addEventListener("DOMContentLoaded", function (){
	main_lab.setup();
	instruction_lab.setup(configuration);
}, false);