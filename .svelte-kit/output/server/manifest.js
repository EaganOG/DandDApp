export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ArmourImages/armour1.png","ArmourImages/armour2.png","ArmourImages/armour3.png","ArmourImages/armour4.png","ArmourImages/armour5.png","ArmourImages/armour6.png","ArmourImages/armour7.png","ArmourImages/armour8.png","ArmourImages/boots1.png","ArmourImages/boots2.png","ArmourImages/boots3.png","ArmourImages/boots4.png","ArmourImages/boots5.png","ArmourImages/boots6.png","ArmourImages/boots7.png","ArmourImages/boots8.png","ArmourImages/gloves1.png","ArmourImages/gloves2.png","ArmourImages/gloves3.png","ArmourImages/gloves4.png","ArmourImages/gloves5.png","ArmourImages/gloves6.png","ArmourImages/gloves7.png","ArmourImages/gloves8.png","ArmourImages/helmet1.png","ArmourImages/helmet2.png","ArmourImages/helmet3.png","ArmourImages/helmet4.png","ArmourImages/helmet5.png","ArmourImages/helmet6.png","ArmourImages/helmet7.png","ArmourImages/helmet8.png","favicon.png","fonts/Oswald-VariableFont_wght.ttf","logo/DnD-Logo.png","logo/logo-trans-text.PNG","logo/logo-white-text.PNG","logo/Site-Background.png","RaceImages/dra1.jpg","RaceImages/dra10.jpg","RaceImages/dra2.jpg","RaceImages/dra3.jpg","RaceImages/dra4.jpg","RaceImages/dra5.jpg","RaceImages/dra6.jpg","RaceImages/dra7.jpg","RaceImages/dra8.jpg","RaceImages/dra9.jpg","RaceImages/drow1.jpg","RaceImages/drow2.jpg","RaceImages/dwarf1.jpg","RaceImages/dwarf2.jpg","RaceImages/dwarf3.jpg","RaceImages/elf1.jpg","RaceImages/elf2.jpg","RaceImages/elf3.jpg","RaceImages/gith.jpg","RaceImages/half1.jpg","RaceImages/half2.jpg","RaceImages/half3.jpg","RaceImages/halforc.jpg","RaceImages/human.jpg","RaceImages/ling1.jpg","RaceImages/ling2.jpg","RaceImages/ling3.jpg","RaceImages/ling4.jpg","RaceImages/ling5.jpg","RaceImages/tief1.jpg","RaceImages/tief2.jpg","RaceImages/tief3.jpg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".PNG":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.8SAvX24M.js","app":"_app/immutable/entry/app.dS_sYnDe.js","imports":["_app/immutable/entry/start.8SAvX24M.js","_app/immutable/chunks/entry.B5fK4m7Z.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.dS_sYnDe.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.BjQvGqnw.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Spells",
				pattern: /^\/Spells\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
