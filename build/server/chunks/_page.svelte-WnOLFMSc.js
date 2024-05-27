import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from './ssr-DGfTPAIz.js';
import { g as getDefaultExportFromCjs, c as components, S as SliceZone } from './index2-BnwUEJ5A.js';
import '@prismicio/client';
import './Header.svelte_svelte_type_style_lang-Xht2EKzl.js';
import 'clsx';
import './Bounded-DqFwmi-8.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';
import 'tty';
import 'path';
import 'url';
import 'fs';

const throttle = (fn, delay = 16) => {
  let lastExec = 0;
  let timer = null;
  return function(...args) {
    const now = Date.now();
    const delta = now - lastExec;
    if (delta >= delay) {
      fn.apply(this, args);
      lastExec = now;
    } else {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, args);
        lastExec = Date.now();
      }, delay - delta);
    }
  };
};

var APIRequestType;
(function(APIRequestType2) {
  APIRequestType2["SetActiveSlice"] = "setActiveSlice";
  APIRequestType2["SetSliceZoneSize"] = "setSliceZoneSize";
})(APIRequestType || (APIRequestType = {}));
var ClientRequestType;
(function(ClientRequestType2) {
  ClientRequestType2["Ping"] = "ping";
  ClientRequestType2["SetSliceZone"] = "setSliceZone";
  ClientRequestType2["ScrollToSlice"] = "scrollToSlice";
})(ClientRequestType || (ClientRequestType = {}));

var StateEventType;
(function(StateEventType2) {
  StateEventType2["Slices"] = "slices";
  StateEventType2["ActiveSlice"] = "activeSlice";
  StateEventType2["Message"] = "message";
})(StateEventType || (StateEventType = {}));

var require$$0 = {
	"100": "Continue",
	"101": "Switching Protocols",
	"102": "Processing",
	"103": "Early Hints",
	"200": "OK",
	"201": "Created",
	"202": "Accepted",
	"203": "Non-Authoritative Information",
	"204": "No Content",
	"205": "Reset Content",
	"206": "Partial Content",
	"207": "Multi-Status",
	"208": "Already Reported",
	"226": "IM Used",
	"300": "Multiple Choices",
	"301": "Moved Permanently",
	"302": "Found",
	"303": "See Other",
	"304": "Not Modified",
	"305": "Use Proxy",
	"307": "Temporary Redirect",
	"308": "Permanent Redirect",
	"400": "Bad Request",
	"401": "Unauthorized",
	"402": "Payment Required",
	"403": "Forbidden",
	"404": "Not Found",
	"405": "Method Not Allowed",
	"406": "Not Acceptable",
	"407": "Proxy Authentication Required",
	"408": "Request Timeout",
	"409": "Conflict",
	"410": "Gone",
	"411": "Length Required",
	"412": "Precondition Failed",
	"413": "Payload Too Large",
	"414": "URI Too Long",
	"415": "Unsupported Media Type",
	"416": "Range Not Satisfiable",
	"417": "Expectation Failed",
	"418": "I'm a Teapot",
	"421": "Misdirected Request",
	"422": "Unprocessable Entity",
	"423": "Locked",
	"424": "Failed Dependency",
	"425": "Too Early",
	"426": "Upgrade Required",
	"428": "Precondition Required",
	"429": "Too Many Requests",
	"431": "Request Header Fields Too Large",
	"451": "Unavailable For Legal Reasons",
	"500": "Internal Server Error",
	"501": "Not Implemented",
	"502": "Bad Gateway",
	"503": "Service Unavailable",
	"504": "Gateway Timeout",
	"505": "HTTP Version Not Supported",
	"506": "Variant Also Negotiates",
	"507": "Insufficient Storage",
	"508": "Loop Detected",
	"509": "Bandwidth Limit Exceeded",
	"510": "Not Extended",
	"511": "Network Authentication Required"
};

/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

var statuses$1;
var hasRequiredStatuses;

function requireStatuses () {
	if (hasRequiredStatuses) return statuses$1;
	hasRequiredStatuses = 1;

	/**
	 * Module dependencies.
	 * @private
	 */

	var codes = require$$0;

	/**
	 * Module exports.
	 * @public
	 */

	statuses$1 = status;

	// status code to message map
	status.message = codes;

	// status message (lower-case) to code map
	status.code = createMessageToStatusCodeMap(codes);

	// array of status codes
	status.codes = createStatusCodeList(codes);

	// status codes for redirects
	status.redirect = {
	  300: true,
	  301: true,
	  302: true,
	  303: true,
	  305: true,
	  307: true,
	  308: true
	};

	// status codes for empty bodies
	status.empty = {
	  204: true,
	  205: true,
	  304: true
	};

	// status codes for when you should retry the request
	status.retry = {
	  502: true,
	  503: true,
	  504: true
	};

	/**
	 * Create a map of message to status code.
	 * @private
	 */

	function createMessageToStatusCodeMap (codes) {
	  var map = {};

	  Object.keys(codes).forEach(function forEachCode (code) {
	    var message = codes[code];
	    var status = Number(code);

	    // populate map
	    map[message.toLowerCase()] = status;
	  });

	  return map
	}

	/**
	 * Create a list of all status codes.
	 * @private
	 */

	function createStatusCodeList (codes) {
	  return Object.keys(codes).map(function mapCode (code) {
	    return Number(code)
	  })
	}

	/**
	 * Get the status code for given message.
	 * @private
	 */

	function getStatusCode (message) {
	  var msg = message.toLowerCase();

	  if (!Object.prototype.hasOwnProperty.call(status.code, msg)) {
	    throw new Error('invalid status message: "' + message + '"')
	  }

	  return status.code[msg]
	}

	/**
	 * Get the status message for given code.
	 * @private
	 */

	function getStatusMessage (code) {
	  if (!Object.prototype.hasOwnProperty.call(status.message, code)) {
	    throw new Error('invalid status code: ' + code)
	  }

	  return status.message[code]
	}

	/**
	 * Get the status code.
	 *
	 * Given a number, this will throw if it is not a known status
	 * code, otherwise the code will be returned. Given a string,
	 * the string will be parsed for a number and return the code
	 * if valid, otherwise will lookup the code assuming this is
	 * the status message.
	 *
	 * @param {string|number} code
	 * @returns {number}
	 * @public
	 */

	function status (code) {
	  if (typeof code === 'number') {
	    return getStatusMessage(code)
	  }

	  if (typeof code !== 'string') {
	    throw new TypeError('code must be a number or string')
	  }

	  // '403'
	  var n = parseInt(code, 10);
	  if (!isNaN(n)) {
	    return getStatusMessage(n)
	  }

	  return getStatusCode(code)
	}
	return statuses$1;
}

var statusesExports = requireStatuses();
var statuses = /*@__PURE__*/getDefaultExportFromCjs(statusesExports);

var InternalEmitterRequestType;
(function(InternalEmitterRequestType2) {
  InternalEmitterRequestType2["Connect"] = "connect";
})(InternalEmitterRequestType || (InternalEmitterRequestType = {}));
var InternalReceiverRequestType;
(function(InternalReceiverRequestType2) {
  InternalReceiverRequestType2["Ready"] = "ready";
})(InternalReceiverRequestType || (InternalReceiverRequestType = {}));

var __defProp$6 = Object.defineProperty;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$6 = (obj, key, value) => {
  __defNormalProp$6(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class ResponseError extends Error {
  constructor(errorResponse) {
    super(errorResponse.msg);
    __publicField$6(this, "response");
    this.response = errorResponse;
  }
}
class TooManyConcurrentRequestsError extends Error {
  constructor(request) {
    super(`Too many concurrent requests`);
    __publicField$6(this, "request");
    this.request = request;
  }
}
class RequestTimeoutError extends Error {
  constructor(request) {
    super(`Request \`${request.requestID}\` timed out`);
    __publicField$6(this, "request");
    this.request = request;
  }
}
class NotReadyError extends Error {
}
class PortNotSetError extends Error {
  constructor() {
    super("Port is not set");
  }
}

let requestID = 0;
const createRequestMessage = (type, data, prefix = "") => {
  return {
    requestID: `${prefix}${requestID++}`,
    type,
    data
  };
};
const createSuccessResponseMessage = (requestID2, data, status = 200) => {
  var _a;
  if (status >= 400) {
    throw new TypeError(`Invalid success status code, expected status to be within \`[100;400[\`, got \`${status}\``);
  }
  return {
    requestID: requestID2,
    status,
    msg: ((_a = statuses.message[status]) == null ? void 0 : _a.replace(/\.$/, "").toLowerCase()) ?? "",
    data
  };
};
const createErrorResponseMessage = (requestID2, error, status = 400) => {
  var _a;
  if (status < 400) {
    throw new TypeError(`Invalid error status code, expected status to be within \`[500;600[\`, got \`${status}\``);
  }
  return {
    requestID: requestID2,
    status,
    msg: ((_a = statuses.message[status]) == null ? void 0 : _a.replace(/\.$/, "").toLowerCase()) ?? "",
    error
  };
};
const validateMessage = (message) => {
  if (typeof message !== "object" || message === null) {
    throw new TypeError(`Invalid message received, expected message to be of type \`object\`, got \`${typeof message}\``);
  } else if (!Object.keys(message).every((key) => ["requestID", "type", "data", "status", "msg", "error"].includes(key))) {
    throw new TypeError(`Invalid message received: ${JSON.stringify(message)}`);
  } else if (typeof message.requestID !== "string") {
    throw new TypeError(`Invalid message received, expected \`message.requestID\` to be of type \`string\`, got \`${typeof message.id}\``);
  }
  return message;
};
const isRequestMessage = (message) => {
  return "type" in message;
};
const isResponseMessage = (message) => {
  return !("type" in message);
};
const isSuccessResponseMessage = (message) => {
  return isResponseMessage(message) && !("error" in message);
};

var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$5 = (obj, key, value) => {
  __defNormalProp$5(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const channelNetworkDefaultOptions = {
  debug: false,
  maximumRequestConcurrency: 20,
  defaultTimeout: 5e3,
  requestIDPrefix: "channel-"
};
class ChannelNetwork {
  constructor(requestHandlers, options) {
    __publicField$5(this, "requestHandlers");
    __publicField$5(this, "options");
    __publicField$5(this, "_port", null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __publicField$5(this, "_pendingRequests", /* @__PURE__ */ new Map());
    this.requestHandlers = requestHandlers;
    this.options = { ...channelNetworkDefaultOptions, ...options };
  }
  get port() {
    if (!this._port) {
      throw new PortNotSetError();
    }
    return this._port;
  }
  set port(port) {
    if (this._port) {
      this._port.onmessage = null;
    }
    this._port = port;
    if (this._port) {
      this._port.onmessage = this.onMessage.bind(this);
    }
  }
  createRequestMessage(type, data) {
    return createRequestMessage(type, data, this.options.requestIDPrefix);
  }
  async onMessage(event) {
    if (this.options.debug) {
      console.debug(event.data);
    }
    try {
      const message = validateMessage(event.data);
      if (isRequestMessage(message)) {
        if (!this.requestHandlers[message.type]) {
          this.postResponse(createErrorResponseMessage(message.requestID, void 0, 501));
        } else {
          try {
            const response = await this.requestHandlers[message.type](message, {
              success: createSuccessResponseMessage.bind(this, message.requestID),
              error: createErrorResponseMessage.bind(this, message.requestID)
            });
            this.postResponse(response);
          } catch (error) {
            this.postResponse(createErrorResponseMessage(message.requestID, error, 500));
          }
        }
      } else {
        if (!this._pendingRequests.has(message.requestID)) {
          console.error(`Unknown request ID received in response: ${JSON.stringify(message)}`);
        } else {
          this._pendingRequests.get(message.requestID)(message);
          this._pendingRequests.delete(message.requestID);
        }
      }
    } catch (error) {
      if (error instanceof TypeError) {
        console.warn(error.message);
      } else {
        throw error;
      }
    }
  }
  postRequest(request, postMessage = (request2) => this.port.postMessage(request2), options = {}) {
    if (this.options.debug) {
      console.debug(request);
    }
    if (this._pendingRequests.size >= this.options.maximumRequestConcurrency) {
      throw new TooManyConcurrentRequestsError(request);
    }
    return new Promise((resolve, reject) => {
      const requestTimeout = setTimeout(() => {
        if (this._pendingRequests.has(request.requestID)) {
          this._pendingRequests.delete(request.requestID);
        }
        reject(new RequestTimeoutError(request));
      }, options.timeout || this.options.defaultTimeout);
      this._pendingRequests.set(request.requestID, (response) => {
        clearTimeout(requestTimeout);
        isSuccessResponseMessage(response) ? resolve(response) : reject(new ResponseError(response));
      });
      postMessage(request);
    });
  }
  postResponse(response, postMessage = (response2) => this.port.postMessage(response2)) {
    if (this.options.debug) {
      console.debug(response);
    }
    postMessage(response);
    return response;
  }
}

var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => {
  __defNormalProp$4(obj, key + "" , value);
  return value;
};
const channelReceiverDefaultOptions = {
  readyTimeout: 2e4,
  requestIDPrefix: "receiver-"
};
class ChannelReceiver extends ChannelNetwork {
  constructor(requestHandlers, options) {
    super(requestHandlers, { ...channelReceiverDefaultOptions, ...options });
    __publicField$4(this, "_ready", false);
    window.addEventListener("message", (event) => {
      this._onPublicMessage(event);
    });
  }
  /**
   * Tells the emitter that receiver is ready
   */
  async ready() {
    if (window.parent === window) {
      throw new Error("Receiver is currently not embedded as an iframe");
    }
    this._ready = false;
    const request = this.createRequestMessage(InternalReceiverRequestType.Ready, void 0);
    const response = await this.postRequest(request, (request2) => {
      window.parent.postMessage(request2, "*");
    }, {
      timeout: this.options.readyTimeout
    });
    this._ready = true;
    return response;
  }
  /**
   * Handles public messages
   */
  _onPublicMessage(event) {
    try {
      const message = validateMessage(event.data);
      if (isRequestMessage(message)) {
        if (this.options.debug) {
          console.debug(event.data);
        }
        switch (message.type) {
          case InternalEmitterRequestType.Connect:
            this.port = event.ports[0];
            const { data } = message;
            this.options = {
              ...this.options,
              ...data,
              // Ensure core options remain the same
              debug: this.options.debug,
              requestIDPrefix: this.options.requestIDPrefix,
              readyTimeout: this.options.readyTimeout
            };
            const response = createSuccessResponseMessage(message.requestID, void 0);
            this.postResponse(response);
            break;
          default:
            this.postResponse(createErrorResponseMessage(message.requestID, void 0), (response2) => {
              event.source.postMessage(response2, event.origin);
            });
            break;
        }
      } else {
        if (!this._ready) {
          this.onMessage(event);
        }
      }
    } catch (error) {
      if (error instanceof TypeError)
        ;
      else {
        throw error;
      }
    }
  }
  postFormattedRequest(type, data, options = {}) {
    if (!this._ready) {
      throw new NotReadyError("Receiver is not ready, use `ChannelReceiver.ready()` first");
    }
    return this.postRequest(this.createRequestMessage(type, data), void 0, options);
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => {
  __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _a, _b;
const simulatorAPIDefaultOptions = {
  requestIDPrefix: "api-",
  activeSliceAPI: false,
  sliceZoneSizeAPI: false
};
class SimulatorAPI extends ChannelReceiver {
  constructor(requestHandlers, options) {
    var _a2, _b2;
    const debug = (options == null ? void 0 : options.debug) || /[?&]debug=true/i.test(decodeURIComponent(window.location.search));
    super({
      [ClientRequestType.Ping]: (_req, res) => {
        return res.success("pong");
      },
      ...requestHandlers
    }, {
      ...simulatorAPIDefaultOptions,
      ...options,
      debug
    });
    __publicField$3(this, _a, async (data) => {
      return await this.postFormattedRequest(APIRequestType.SetActiveSlice, data);
    });
    __publicField$3(this, _b, async (data) => {
      return await this.postFormattedRequest(APIRequestType.SetSliceZoneSize, data);
    });
    if (debug) {
      window.prismic || (window.prismic = {});
      (_a2 = window.prismic).sliceSimulator || (_a2.sliceSimulator = {});
      (_b2 = window.prismic.sliceSimulator).api || (_b2.api = []);
      window.prismic.sliceSimulator.api.push(this);
    }
  }
}
_a = APIRequestType.SetActiveSlice, _b = APIRequestType.SetSliceZoneSize;

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, key + "" , value);
  return value;
};
class EventEmitter {
  constructor() {
    __publicField$2(this, "_listeners", {});
  }
  on(event, listener, key = null) {
    this._listeners[event] = [
      ...this._listeners[event] ?? [],
      [listener, key]
    ];
  }
  off(event, listenerOrKey) {
    this._listeners[event] = (this._listeners[event] ?? []).filter(([listener, key]) => typeof listenerOrKey === "function" ? listener !== listenerOrKey : key !== listenerOrKey);
  }
  emit(event, payload) {
    (this._listeners[event] ?? []).forEach((listener) => listener[0](payload));
  }
}

const simulatorClass = "slice-simulator";
const simulatorRootClass = "slice-simulator--root";
const getSimulatorDOM = () => {
  return document.querySelector(`.${simulatorClass}`);
};
const getSimulatorRootDOM = () => {
  return document.querySelector(`.${simulatorRootClass}`);
};
const getSliceZoneDOM = (expectedNumberOfChildren) => {
  let node = document.querySelector(`.${simulatorClass} [data-slice-zone]`);
  if (node) {
    if (node.children.length !== expectedNumberOfChildren) {
      console.warn(`Flagged SliceZone has an unexpected number of children, found ${node.children.length} but expected ${expectedNumberOfChildren}. This might lead to unexpected behaviors. Are you sure you tagged the right element?`);
    }
    return node;
  }
  node = document.querySelector(`.${simulatorClass} .${simulatorRootClass}`);
  if (!node) {
    return null;
  }
  const searchDepth = 5;
  for (let i = 0; i < searchDepth; i++) {
    if (node.children.length === expectedNumberOfChildren) {
      return node;
    } else if (node.children.length) {
      node = node.children[0];
    } else {
      break;
    }
  }
  return null;
};
const getActiveSliceDOM = ($sliceZone, mouse) => {
  const raycast = document.elementsFromPoint(mouse.x, mouse.y).reverse();
  const sliceZoneIndex = raycast.indexOf($sliceZone);
  if (sliceZoneIndex === -1) {
    return null;
  }
  const $slice = raycast[sliceZoneIndex + 1];
  if (!$slice) {
    return null;
  }
  return $slice;
};

const getDefaultProps = () => ({
  zIndex: 100,
  background: "#ffffff"
});
const getDefaultSlices = () => {
  return [];
};
const getDefaultMessage = () => {
  return "";
};

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class State extends EventEmitter {
  constructor(args) {
    super();
    __publicField$1(this, "_slices");
    __publicField$1(this, "_activeSlice");
    __publicField$1(this, "_message");
    __publicField$1(this, "_mouse");
    __publicField$1(this, "_setActiveSlice", () => {
      if (this.slices.length === 0) {
        this.activeSlice = null;
        return;
      }
      const $sliceZone = getSliceZoneDOM(this.slices.length);
      if (!$sliceZone) {
        this.activeSlice = null;
        return;
      }
      const $activeSlice = getActiveSliceDOM($sliceZone, this._mouse);
      if (!$activeSlice) {
        this.activeSlice = null;
        return;
      }
      const activeSliceIndex = Array.prototype.indexOf.call($sliceZone.children, $activeSlice);
      this.activeSlice = {
        rect: $activeSlice.getBoundingClientRect(),
        sliceID: this.slices[activeSliceIndex].slice_type,
        variationID: this.slices[activeSliceIndex].variation,
        index: activeSliceIndex
      };
    });
    __publicField$1(this, "setActiveSlice", throttle(this._setActiveSlice, 16));
    this._slices = (args == null ? void 0 : args.slices) || getDefaultSlices();
    this._activeSlice = null;
    this._message = "";
    this._mouse = { x: 0, y: 0 };
  }
  set slices(slices) {
    this._slices = slices;
    this.message = "";
    this.emit(StateEventType.Slices, slices);
  }
  get slices() {
    return this._slices;
  }
  set activeSlice(activeSlice) {
    this._activeSlice = activeSlice;
    this.emit(StateEventType.ActiveSlice, activeSlice);
  }
  get activeSlice() {
    return this._activeSlice;
  }
  set message(message) {
    this._message = message;
    this.emit(StateEventType.Message, message);
  }
  get message() {
    return this._message;
  }
  async init() {
    window.addEventListener("mousemove", (event) => {
      this._mouse = { x: event.clientX, y: event.clientY };
    });
  }
  setSliceZone(slices) {
    this.slices = slices;
  }
}

const div = (content) => `<div style="word-spacing: initial; white-space: pre; line-height: initial; font-family: monospace; color: #ffffff; mix-blend-mode: difference; padding: 1rem; font-size: 1rem;">${content}</div>`;
const a = (href, label) => `<a href="${href}" style="text-decoration: underline;">${href}<a>`;
const header = "   _____ ___          _____ _                 __      __            \n  / ___// (_)_______ / ___/(_)___ ___  __  __/ /___ _/ /_____  _____\n  \\__ \\/ / / ___/ _ \\\\__ \\/ / __ `__ \\/ / / / / __ `/ __/ __ \\/ ___/\n ___/ / / / /__/  __/__/ / / / / / / / /_/ / / /_/ / /_/ /_/ / /    \n/____/_/_/\\___/\\___/____/_/_/ /_/ /_/\\__,_/_/\\__,_/\\__/\\____/_/     \n                  / /_  __  __   / __ \\_____(_)________ ___  (_)____\n                 / __ \\/ / / /  / /_/ / ___/ / ___/ __ `__ \\/ / ___/\n                / /_/ / /_/ /  / ____/ /  / (__  ) / / / / / / /__  \n               /_.___/\\__, /  /_/   /_/  /_/____/_/ /_/ /_/_/\\___/  \n                     /____/\n\n";
const footer = "\n\n\n\n\n\n                                                - The Prismic team";
const sliceSimulatorAccessedDirectly = div([
  header,
  `You're seeing this page because you're accessing Slice simulator
directly, e.g:

  - ${a("http://localhost:3000/slice-simulator")}



The Slice simulator can only be accessed through Slice Machine or the
Page Builder. To preview your Slices, head over to Slice Machine:

  - ${a("http://localhost:9999")}



If you believe this is an error, please reach out to us:

  - ${a("https://github.com/prismicio/slice-machine/issues/new/choose")}`,
  footer
].join(""));

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class SimulatorManager {
  constructor(args) {
    __publicField(this, "state");
    __publicField(this, "_api");
    __publicField(this, "_initialized");
    this.state = new State(args);
    this._api = null;
    this._initialized = false;
  }
  async init() {
    if (this._initialized) {
      return;
    } else {
      this._initialized = true;
    }
    await this.state.init();
    try {
      await this._initAPI();
    } catch (error) {
      if (error instanceof Error && error.message === "Receiver is currently not embedded as an iframe" && !this.state.slices.length) {
        this.state.message = sliceSimulatorAccessedDirectly;
      }
      console.error(error);
      return;
    }
    this._initListeners();
  }
  async _initAPI() {
    this._api = new SimulatorAPI({
      [ClientRequestType.SetSliceZone]: (req, res) => {
        this.state.setSliceZone(req.data);
        return res.success();
      },
      [ClientRequestType.ScrollToSlice]: (req, res) => {
        var _a;
        if (req.data.sliceIndex < 0) {
          return res.error("`sliceIndex` must be > 0", 400);
        } else if (req.data.sliceIndex >= this.state.slices.length) {
          return res.error(`\`sliceIndex\` must be < ${this.state.slices.length} (\`<SliceZone />\` current length)`, 400);
        }
        const $sliceZone = getSliceZoneDOM(this.state.slices.length);
        if (!$sliceZone) {
          return res.error("Failed to find `<SliceZone />`", 500);
        }
        this.state.activeSlice = null;
        const $slice = $sliceZone.children[req.data.sliceIndex];
        if (!$slice) {
          return res.error(`Failed fo find slice at index $\`{req.data.sliceIndex}\` in \`<SliceZone />\``, 500);
        }
        $slice.scrollIntoView({
          behavior: req.data.behavior,
          block: req.data.block,
          inline: req.data.inline
        });
        ((_a = this._api) == null ? void 0 : _a.options.activeSliceAPI) && setTimeout(this.state.setActiveSlice, 750);
        return res.success();
      }
    });
    await this._api.ready();
  }
  _initListeners() {
    var _a, _b;
    if ((_a = this._api) == null ? void 0 : _a.options.activeSliceAPI) {
      window.addEventListener("mousemove", () => {
        this.state.setActiveSlice();
      });
      window.addEventListener("resize", () => {
        this.state.setActiveSlice();
      });
      window.addEventListener("mousewheel", () => {
        setTimeout(this.state.setActiveSlice, 200);
      });
      this.state.on(StateEventType.Slices, () => {
        this.state.setActiveSlice();
      });
      this.state.on(StateEventType.ActiveSlice, async (activeSlice) => {
        if (this._api) {
          try {
            await this._api.setActiveSlice(activeSlice);
          } catch (error) {
            if (error instanceof ResponseError && error.response.status === 400) {
              console.error(error.response);
            } else {
              throw error;
            }
          }
        }
      });
    }
    if ((_b = this._api) == null ? void 0 : _b.options.sliceZoneSizeAPI) {
      const resizeObserver = new ResizeObserver(throttle(async (entries) => {
        const [entry] = entries;
        if (this._api && entry) {
          try {
            await this._api.setSliceZoneSize({ rect: entry.contentRect });
          } catch (error) {
            if (error instanceof ResponseError && error.response.status === 400) {
              console.error(error.response);
            } else {
              throw error;
            }
          }
        }
      }, 16));
      const observeSimulatorRoot = () => {
        const simulatorRootDOM = getSimulatorRootDOM();
        resizeObserver.disconnect();
        if (simulatorRootDOM) {
          resizeObserver.observe(simulatorRootDOM);
        }
      };
      const mutationObserver = new MutationObserver(observeSimulatorRoot);
      mutationObserver.observe(getSimulatorDOM(), {
        subtree: false,
        childList: true
      });
    }
  }
}

const SliceSimulator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultProps = getDefaultProps();
  let { zIndex = defaultProps.zIndex } = $$props;
  let { background = defaultProps.background } = $$props;
  let slices = getDefaultSlices();
  let message = getDefaultMessage();
  if (typeof window !== "undefined") {
    const simulatorManager = new SimulatorManager();
    simulatorManager.state.on(
      StateEventType.Slices,
      (newSlices) => {
        slices = newSlices;
      },
      "simulator-slices"
    );
    simulatorManager.state.on(
      StateEventType.Message,
      (newMessage) => {
        message = newMessage;
      },
      "simulator-message"
    );
    simulatorManager.init();
  }
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  return `<div class="${escape(simulatorClass, true) + " " + escape($$props.class, true)}" style="${"z-index: " + escape(zIndex, true) + "; position: fixed; top: 0; left: 0; width: 100%; height: 100vh; overflow: auto; background: " + escape(background, true)}">${message ? `<article> <!-- HTML_TAG_START -->${message}<!-- HTML_TAG_END --></article>` : `${slices.length ? ` <div id="root"${add_attribute("class", simulatorRootClass, 0)}>${slots.default ? slots.default({ slices }) : ``}</div>` : ``}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SliceSimulator, "SliceSimulator").$$render($$result, { background: "#030712" }, {}, {
    default: ({ slices }) => {
      return `${validate_component(SliceZone, "SliceZone").$$render($$result, { slices, components }, {}, {})}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-WnOLFMSc.js.map
