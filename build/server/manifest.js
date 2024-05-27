const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/noise-texture.svg","assets/voice-sense.png","assets/vs_logo.png","favicon.png","recorded_audio.wav","recorded_audio1715153236782.wav"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".wav":"audio/wav"},
	_: {
		client: {"start":"_app/immutable/entry/start.C8mJ1HNA.js","app":"_app/immutable/entry/app.B5zgHzEV.js","imports":["_app/immutable/entry/start.C8mJ1HNA.js","_app/immutable/chunks/entry.DrlEW8Lw.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/entry/app.B5zgHzEV.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/chunks/index.B0pGoJ8j.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CW8hXxzQ.js')),
			__memo(() => import('./chunks/1-Bn971lsf.js')),
			__memo(() => import('./chunks/2-BVo1qCjA.js')),
			__memo(() => import('./chunks/3-BcotELaF.js')),
			__memo(() => import('./chunks/4-VeuScZRr.js')),
			__memo(() => import('./chunks/5-pC7TGb9t.js')),
			__memo(() => import('./chunks/6-BR2c7uXL.js'))
		],
		routes: [
			{
				id: "/Feature-Record",
				pattern: /^\/Feature-Record\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Percieved-Emotion",
				pattern: /^\/Percieved-Emotion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/preview",
				pattern: /^\/api\/preview\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DJcnicAY.js'))
			},
			{
				id: "/slice-simulator",
				pattern: /^\/slice-simulator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/[uid]",
				pattern: /^(?:\/([^/]+))?\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: preview } = await import ('./chunks/preview-B5dmEu3G.js');
			return { preview };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/Percieved-Emotion","/Percieved-Emotion/__data.json","/slice-simulator","/slice-simulator/__data.json","/","/__data.json","/about-us-page","/about-us-page/__data.json","/documentation","/documentation/__data.json","/home","/home/__data.json","/feature-extraction-page","/feature-extraction-page/__data.json"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
