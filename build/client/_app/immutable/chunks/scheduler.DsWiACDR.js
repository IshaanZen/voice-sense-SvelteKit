function y(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function S(){return Object.create(null)}function j(t){t.forEach(E)}function O(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function B(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function C(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function D(t,n,e){t.$$.on_destroy.push(q(n,e))}function F(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function U(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)l[u]=n.dirty[u]|o[u];return l}return n.dirty|o}return n.dirty}function G(t,n,e,r,o,l){if(o){const _=m(n,e,r,l);t.p(_,o)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function I(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function J(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function K(t){return t??""}const L=(t,n)=>Object.prototype.hasOwnProperty.call(t,n);function N(t){return t&&O(t.destroy)?t.destroy:y}let f;function h(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function Q(t){k().$$.on_mount.push(t)}function R(t){k().$$.after_update.push(t)}function T(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const a=[],b=[];let s=[];const g=[],x=Promise.resolve();let p=!1;function v(){p||(p=!0,x.then(M))}function V(){return v(),x}function z(t){s.push(t)}const d=new Set;let c=0;function M(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,h(n),P(n.$$)}}catch(n){throw a.length=0,c=0,n}for(h(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(a.length);for(;g.length;)g.pop()();p=!1,d.clear(),h(t)}function P(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function W(t){const n=[],e=[];s.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),s=n}export{E as A,a as B,v as C,T as D,K as E,J as a,w as b,D as c,F as d,I as e,U as f,H as g,N as h,b as i,B as j,R as k,L as l,S as m,y as n,Q as o,M as p,O as q,j as r,A as s,V as t,G as u,C as v,z as w,W as x,f as y,h as z};