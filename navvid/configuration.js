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
		{title: 'Update Your BeagleBone\'s Operating System', short_title: 'Update your OS', time_in: 30,
			notes: "Your Beaglebone runs on Angstrom, a distribution of Linux that is made for embedded devices and microcontrollers. Here's the Angstrom manual, along with resources to learn how to update your Beaglebone's OS.",
			content: [
				{type: 'info', title: 'More About Angstrom', time_offset: 4, content: {url: 'http://www.linuxtogo.org/gowiki/AngstromManual'}},
				{type: 'info', title: 'Updating Angstrom', time_offset: 10, content: {url: 'http://www.angstrom-distribution.org/demo/beaglebone/'}}
			]
		}
	]
}