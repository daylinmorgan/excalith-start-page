const mocha = {
	rosewater: "#f5e0dc",
	flamingo: "#f2cdcd",
	pink: "#f5c2e7",
	mauve: "#cba6f7",
	red: "#f38ba8",
	maroon: "#eba0ac",
	peach: "#fab387",
	yellow: "#f9e2af",
	green: "#a6e3a1",
	teal: "#94e2d5",
	sky: "#89dceb",
	sapphire: "#74c7ec",
	blue: "#89b4fa",
	lavender: "#b4befe",
	text: "#cdd6f4",
	subtext1: "#bac2de",
	subtext0: "#a6adc8",
	overlay2: "#9399b2",
	overlay1: "#7f849c",
	overlay0: "#6c7086",
	surface2: "#585b70",
	surface1: "#45475a",
	surface0: "#313244",
	base: "#1e1e2e",
	mantle: "#181825",
	crust: "#11111b"
}

const defaultConfig = {
	username: "daylin",
	terminal: {
		fixedHeight: true,
		backgroundColor: mocha.mantle,
		windowColor: mocha.base,
		glowColor: mocha.mantle
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		userColor: "green",
		atColor: "white",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: mocha.rosewater,
		selectionFg: mocha.sky
	},
	colors: {
		gray: mocha.surface0,
		white: mocha.text,
		black: mocha.mantle,
		red: mocha.red,
		green: mocha.green,
		yellow: mocha.yellow,
		blue: mocha.blue,
		cyan: mocha.sky,
		magenta: mocha.flamingo,
		purple: mocha.mauve,
		orange: mocha.peach
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "YYYY.MM.DD",
		titleColor: "yellow"
	},
	urlLaunch: {
		target: "_self"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
			// {
			// 	alias: "d",
			// 	name: "DuckDuckGo Search",
			// 	url: "https://duckduckgo.com/?q={}"
			// },
			// {
			// 	alias: "b",
			// 	name: "Brave Search",
			// 	url: "https://search.brave.com/search?q={}"
			// },
			// {
			// 	alias: "s",
			// 	name: "Stack Overflow Search",
			// 	url: "https://stackoverflow.com/search?q={}"
			// },
		]
	},
	sections: [
		{
			title: "Dev",
			color: "magenta",
			links: [
				{
					name: "GitHub",
					url: "https://github.com",
					icon: "mdi:github"
				},
				{
					name: "GitLab",
					url: "https://gitlab.com",
					icon: "ph:gitlab-logo-simple-fill"
				},
				{
					name: "Daylin's Git Server",
					url: "https://git.dayl.in",
					icon: "mdi:github"
				}
			]
		},
		{
			title: "Storage",
			color: "orange",
			links: [
				{
					name: "Drive",
					url: "https://drive.google.com",
					icon: "mdi:google-drive"
				},
				{
					name: "Box",
					url: "https://utbox.utexas.edu",
					icon: "carbon:volume-file-storage"
				}
			]
		},
		{
			title: "Social",
			color: "purple",
			links: [
				{
					name: "Twitter",
					url: "https://twitter.com",
					icon: "mdi:twitter"
				},
				{
					name: "Reddit",
					url: "https://reddit.com",
					icon: "mdi:reddit"
				}
			]
		},
		{
			title: "Lab",
			color: "green",
			links: [
				{
					name: "ClonMapper Protocol",
					url: "https://docs.brocklab.com/clonmapper",
					icon: "mdi:dna"
				}
			]
		}
	]
}

let config
const getConfig = function () {
	if (config) return config

	let localSettings
	if (typeof localStorage !== "undefined") {
		localSettings = localStorage.getItem("settings")
	}
	config = localSettings ? JSON.parse(localSettings) : defaultConfig

	return config
}

export default getConfig()
