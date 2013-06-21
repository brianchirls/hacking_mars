var configuration = {
	title: 'Greenhouse on Mars', // Used as the text for the html title.
	urls: {
		video: {
			'mp4': 'video/wtf_greenscreen_sm_final.mp4'
			/*'ogv': 'video/make_beaglebone_480.ogv',
			'webm': 'video/make_beaglebone_480.webm'*/
		},
		time_stamp_play: 'image/play_button.svg'
	},
	tip_templates: {
		leaf: {
			icon_color: 'transparent', //#058ef8',
			icon_url: 'image/leaf.svg'
		},
		sun: {
			icon_color: 'transparent', //#058ef8',
			icon_url: 'image/sun.svg'
		},
		water: {
			icon_color: 'transparent', //#058ef8',
			icon_url: 'image/water.svg'
		},
		link:{
			/*icon_url: 'linkbox_padding.svg'*/
		}/*,
		code:{
			icon_color: 'transparent',
			icon_url: 'utilities-terminal.svg',
			code_display: true
		}*/
	},
	instructions: [
		{title: 'Greenhouse Structure', short_title: 'Greenhouse Structure', time_in: 25, camera_position: 'inside',
			notes: "Because a Martian greenhouse will be transported from Earth, it should be a flexible, inflatable structure that can be folded and placed into a capsule for launch.  It should also be strong and durable enough to withstand the Martian environment, and modular so that many more greenhouses can be added in the future.  One such model is the Prototype Lunar Greenhouse (LGH), located at the University of Arizona's Controlled Environment Agriculture Center (CEAC). The LGH is a cylindrical greenhouse chamber that grows plants hydroponically--without any soil! The structure also recycles air and waste.",
			content: [
				{type: 'leaf', title: 'Prototype Lunar Greenhouse', time_offset: 1, content: {url: 'http://www.google.com/url?q=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQ128I9KNY9k%26feature%3Dyoutu.be'}},
				{type: 'sun', title: 'Controlled Environment', time_offset: 3, content: {url: 'http://www.google.com/url?q=http%3A%2F%2Fag.arizona.edu%2Flunargreenhouse%2F&sa=D&sntz=1&usg=AFQjCNFIOgiSaYmlcstAyIzxeT2sU0wx7g'}}
			]
		},
		{title: 'Cosmic Cuisine', short_title: 'Cosmic Cuisine', time_in: 30,
			notes: "Without fertile soil or access to supplies, the task of providing nutritious and tasty food is a challenge for future colonists on Mars. Scientists are hard at work addressing many issues, such as how to extend shelf life of stored food and improve packaging, shield against the effects of radiation on stored food, which crops are ideal for growing in harsh environments, and how best to make a complete meal.",
			content: [
				{type: 'leaf', title: 'Roasted Spiced Sweet Potatoes', time_offset: 4, content: {url: 'http://www.yummly.com/recipe/Roasted-spiced-sweet-potatoes-307230'}},
				{type: 'water', title: 'The Challenges of Developing a Food System for a Mars Mission', time_offset: 10, content: {url: 'http://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20080012587_2008010050.pdf'}},
				{type: 'sun', title: 'Food on Mars', time_offset: 4, content: {url: 'http://www.youtube.com/watch?v=UpnKh9Ny2E8'}},
				{type: 'leaf', title: 'The Menu on Mars', time_offset: 10, content: {url: 'http://www.space.com/16269-mock-mars-mission-food-photos.html'}}
			]
		},
		{title: 'DIY Greenhouse!', short_title: 'DIY Greenhouse!', time_in: 30,
			notes: "If you wanted to build your own hydroponic inflatable greenhouse at home, where would you start? A few things to consider might be how to grow plants with controlled light and air, or how to transport a light and strong structure. LEDs like the ones used in a Martian greenhouse could be purchased at your neighborhood hardware store. Think about building materials that can withstand new environments too!  Check out other DIY greenhouses for more inspiration. Your ideas could be the greenhouses of the future!",
			content: [
				{type: 'water', title: 'Build Your Own Hydroponic Garden', time_offset: 4, content: {url: 'http://www.youtube.com/watch?feature=player_embedded&v=0KcFFnuG2Hc#at=16'}},
				{type: 'sun', title: 'Hydroponic growing offers students a green alternative', time_offset: 10, content: {url: 'http://goinggreenondelmarva.com/articles/hydroponic-growing-offers-students-a-green-alternative'}},
				{type: 'leaf', title: 'Exploring Classroom Hydroponics', time_offset: 10, content: {url: 'http://www.kidsgardening.org/node/3760'}},
				{type: 'sun', title: 'Portable automated greenhouse', time_offset: 10, content: {url: 'http://makezine.com/2010/07/10/portable-automated-greenhouse/'}}
			]
		}
	]
}