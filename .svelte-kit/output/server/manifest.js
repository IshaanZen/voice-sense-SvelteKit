export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.CpRn2Kz5.js","app":"_app/immutable/entry/app.BHHKAynd.js","imports":["_app/immutable/entry/start.CpRn2Kz5.js","_app/immutable/chunks/entry.DemABWH3.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/entry/app.BHHKAynd.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/chunks/index.B0pGoJ8j.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/api/preview/_server.js'))
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
			const { match: preview } = await import ('./entries/matchers/preview.js')
			return { preview };
		},
		server_assets: {}
	}
}
})();
