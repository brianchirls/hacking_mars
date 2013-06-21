var configuration = {
	title: 'Greenhouse on Mars', // Used as the text for the html title.
	urls: {
		video: {
			'mp4': 'video/wtf_greenscreen_sm.mp3'
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
		{title: 'Greenhouse Structure', short_title: 'Greenhouse Structure', time_in: 27, camera_position: 'inside',
			notes: "Because a Martian greenhouse will be transported from Earth, it should be a flexible, inflatable structure that can be folded and placed into a capsule for launch.  It should also be strong and durable enough to withstand the Martian environment, and modular so that many more greenhouses can be added in the future.  One such model is the Prototype Lunar Greenhouse (LGH), located at the University of Arizona's Controlled Environment Agriculture Center (CEAC). The LGH is a cylindrical greenhouse chamber that grows plants hydroponically--without any soil! The structure also recycles air and waste.",
			content: [
				{type: 'leaf', title: 'Prototype Lunar Greenhouse', time_offset: 1, content: {url: 'http://www.google.com/url?q=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQ128I9KNY9k%26feature%3Dyoutu.be'}},
				{type: 'leaf', title: 'GET A BEAGLEBONE', time_offset: 3, content: {url: 'http://www.google.com/url?q=http%3A%2F%2Fag.arizona.edu%2Flunargreenhouse%2F&sa=D&sntz=1&usg=AFQjCNFIOgiSaYmlcstAyIzxeT2sU0wx7g'}}
			]
		},
	]
}