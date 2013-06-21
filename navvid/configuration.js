var configuration = {
	title: 'Greenhouse on Mars', // Used as the text for the html title.
	urls: {
		video: {
			'mp4': 'video/wtf_greenscreen_sm1.mp4'
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
		{title: 'Software Defined Networking', short_title: 'Example', time_in: 3,
			notes: "Your Beaglebone is a microcontroller. If you don't have one already, you can score one in the Makershed. It's customary to get started with a microcontroller by making an LED blink, just like in the Arduino video below. It's kind of like the \"Hello World\" of microcontrollers.",
			content: [
				{type: 'leaf', title: 'GET A BEAGLEBONE', time_offset: 1, content: {url: 'http://www.makershed.com/ProductDetails.asp?ProductCode=MKCCE1&Click=37845'}},
				{type: 'sun', title: 'GET A BEAGLEBONE', time_offset: 3, content: {url: 'http://www.makershed.com/ProductDetails.asp?ProductCode=MKCCE1&Click=37845'}},
				{type: 'leaf', title: 'ARDUINO EXAMPLE', time_offset: 5, content: {url: 'http://www.youtube-nocookie.com/embed/pMV2isNm8JU?rel=0'}},
				
			]
		},
		{title: 'Cosmic Cuisine', short_title: 'Cosmic Cuisine', time_in: 30,
			notes: "Without fertile soil or access to supplies, the task of providing nutritious and tasty food is a challenge for future colonists on Mars. Scientists are hard at work addressing many issues, such as how to extend shelf life of stored food and improve packaging, shield against the effects of radiation on stored food, which crops are ideal for growing in harsh environments, and how best to make a complete meal.",
			content: [
				{type: 'info', title: 'Roasted Spiced Sweet Potatoes', time_offset: 4, content: {url: 'http://www.yummly.com/recipe/Roasted-spiced-sweet-potatoes-307230'}},
				{type: 'info', title: 'The Challenges of Developing a Food System for a Mars Mission', time_offset: 10, content: {url: 'http://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20080012587_2008010050.pdf'}},
				{type: 'info', title: 'Food on Mars', time_offset: 4, content: {url: 'http://www.youtube.com/watch?v=UpnKh9Ny2E8'}},
				{type: 'info', title: 'The Menu on Mars', time_offset: 10, content: {url: 'http://www.space.com/16269-mock-mars-mission-food-photos.html'}}
			]
		},
		{title: 'DIY Greenhouse!', short_title: 'DIY Greenhouse!', time_in: 30,
			notes: "If you wanted to build your own hydroponic inflatable greenhouse at home, where would you start? A few things to consider might be how to grow plants with controlled light and air, or how to transport a light and strong structure. LEDs like the ones used in a Martian greenhouse could be purchased at your neighborhood hardware store. Think about building materials that can withstand new environments too!  Check out other DIY greenhouses for more inspiration. Your ideas could be the greenhouses of the future!",
			content: [
				{type: 'info', title: 'Build Your Own Hydroponic Garden', time_offset: 4, content: {url: 'http://www.youtube.com/watch?feature=player_embedded&v=0KcFFnuG2Hc#at=16'}},
				{type: 'info', title: 'Hydroponic growing offers students a green alternative', time_offset: 10, content: {url: 'http://goinggreenondelmarva.com/articles/hydroponic-growing-offers-students-a-green-alternative'}},
				{type: 'info', title: 'Exploring Classroom Hydroponics', time_offset: 10, content: {url: 'http://www.kidsgardening.org/node/3760'}},
				{type: 'info', title: 'Portable automated greenhouse', time_offset: 10, content: {url: 'http://makezine.com/2010/07/10/portable-automated-greenhouse/'}}
			]
		}
	]
}