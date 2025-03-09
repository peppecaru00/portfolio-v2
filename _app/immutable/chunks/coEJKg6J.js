import{l as lt,t as Kt}from"./DIeogL5L.js";const _t=!1;var Pn=Array.isArray,Zt=Array.prototype.indexOf,bn=Array.from,Fn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Mn=Array.prototype,zt=Object.getPrototypeOf;function qn(t){return typeof t=="function"}const Hn=()=>{};function Yn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,J=8,st=16,x=32,P=64,B=128,E=256,U=512,d=1024,O=2048,b=4096,C=8192,W=16384,Jt=32768,Tt=65536,jn=1<<17,Wt=1<<19,gt=1<<20,vt=Symbol("$state"),Bn=Symbol("legacy props"),Un=Symbol("");function At(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Xt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const $n=1,zn=2,Jn=4,Wn=8,Xn=16,Qn=1,tr=2,nr=4,rr=8,er=16,ar=1,lr=2,sr=4,ur=1,or=2,ln="[",sn="[!",un="]",It={},fr=Symbol(),ir="http://www.w3.org/1999/xhtml";function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function pt(t){i=t}function _r(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},lt&&!n&&(i.l={s:null,u:null,r1:[],r2:ut(!1)})}function cr(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Z(a.effect),K(a.reaction),bt(a.fn)}}finally{Z(r),K(e)}}i=n.p,n.m=!0}return{}}function X(){return!lt||i!==null&&i.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:At,rv:0,wv:0};return r}function vr(t){return Ot(ut(t))}function on(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),lt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function pr(t,n=!1){return Ot(on(t,n))}function Ot(t){return u!==null&&!w&&(u.f&y)!==0&&(A===null?gn([t]):A.push(t)),t}function hr(t,n){return u!==null&&!w&&X()&&(u.f&(y|st))!==0&&(A===null||!A.includes(t))&&an(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),Rt(t,O),X()&&o!==null&&(o.f&d)!==0&&(o.f&(x|P))===0&&(I===null?An([t]):I.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=X(),l=r.length,a=0;a<l;a++){var s=r[a],f=s.f;(f&O)===0&&(!e&&s===o||(m(s,n),(f&(d|E))!==0&&((f&y)!==0?Rt(s,b):tt(s))))}}let N=!1;function dr(t){N=t}let T;function M(t){if(t===null)throw xt(),It;return T=t}function Er(){return M(k(T))}function wr(t){if(N){if(k(T)!==null)throw xt(),It;T=t}}function yr(t=1){if(N){for(var n=t,r=T;n--;)r=k(r);T=r}}function Tr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===sn)&&(t+=1)}var e=k(n);n.remove(),n=e}}var ht,_n,St,Nt;function gr(){if(ht===void 0){ht=window,_n=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;St=ct(n,"firstChild").get,Nt=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return St.call(t)}function k(t){return Nt.call(t)}function Ar(t,n){if(!N)return rt(t);var r=rt(T);if(r===null)r=T.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),M(e),e}return M(r),r}function mr(t,n){if(!N){var r=rt(t);return r instanceof Comment&&r.data===""?k(r):r}return T}function Ir(t,n=1,r=!1){let e=N?T:t;for(var l;n--;)l=e,e=k(e);if(!N)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=nt();return e===null?l==null||l.after(s):e.before(s),M(s),s}return M(e),e}function xr(t){t.textContent=""}function Dt(t){var n=y|O,r=u!==null&&(u.f&y)!==0?u:null;return o===null||r!==null&&(r.f&E)!==0?n|=E:o.f|=gt,{ctx:i,deps:null,effects:null,equals:At,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function Or(t){const n=Dt(t);return n.equals=mt,n}function kt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)D(n[r])}}function cn(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function vn(t){var n,r=o;Z(cn(t));try{kt(t),n=Gt(t)}finally{Z(r)}return n}function Ct(t){var n=vn(t),r=(R||(t.f&E)!==0)&&t.deps!==null?b:d;m(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function Pt(t){o===null&&u===null&&nn(),u!==null&&(u.f&E)!==0&&o===null&&tn(),ot&&Qt()}function pn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=o,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(a),a.f|=Jt}catch(_){throw D(a),_}else n!==null&&tt(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(gt|B))===0;if(!s&&e&&(l!==null&&pn(a,l),u!==null&&(u.f&y)!==0)){var f=u;(f.effects??(f.effects=[])).push(a)}return a}function Rr(t){const n=F(J,null,!1);return m(n,d),n.teardown=t,n}function Sr(t){Pt();var n=o!==null&&(o.f&x)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=bt(t);return e}}function Nr(t){return Pt(),hn(t)}function Dr(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?wn(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function bt(t){return F(yt,t,!1)}function hn(t){return F(J,t,!0)}function kr(t,n=[],r=Dt){const e=n.map(r);return dn(()=>t(...e.map(Dn)))}function dn(t,n=0){return F(J|st|n,t,!0)}function Cr(t,n=!0){return F(J|x,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=ot,e=u;Et(!0),K(null);try{n.call(null)}finally{Et(r),K(e)}}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:D(r,n),r=e}}function En(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&x)===0&&D(n),n=r}}function D(t,n=!0){var r=!1;if((n||(t.f&Wt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:k(e);e.remove(),e=a}r=!0}Lt(t,n&&!r),z(t,0),m(t,W);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Ft(t);var f=t.parent;f!==null&&f.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wn(t,n){var r=[];qt(t,r,!0),yn(r,()=>{D(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if((t.f&C)===0){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&Tt)!==0||(e.f&x)!==0;qt(e,n,a?r:!1),e=l}}}function Pr(t){Ht(t,!0)}function Ht(t,n){if((t.f&C)!==0){t.f^=C,(t.f&d)===0&&(t.f^=d),H(t)&&(m(t,O),tt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&x)!==0;Ht(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let q=[],et=[];function Yt(){var t=q;q=[],wt(t)}function Tn(){var t=et;et=[],wt(t)}function br(t){q.length===0&&queueMicrotask(Yt),q.push(t)}function dt(){q.length>0&&Yt(),et.length>0&&Tn()}let j=!1,G=!1,V=null,S=!1,ot=!1;function Et(t){ot=t}let L=[];let u=null,w=!1;function K(t){u=t}let o=null;function Z(t){o=t}let A=null;function gn(t){A=t}let c=null,h=0,I=null;function An(t){I=t}let jt=1,$=0,R=!1;function Bt(){return++jt}function H(t){var v;var n=t.f;if((n&O)!==0)return!0;if((n&b)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var l,a,s=(n&U)!==0,f=e&&o!==null&&!R,_=r.length;if(s||f){var g=t,Y=g.parent;for(l=0;l<_;l++)a=r[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(g)))&&(a.reactions??(a.reactions=[])).push(g);s&&(g.f^=U),f&&Y!==null&&(Y.f&E)===0&&(g.f^=E)}for(l=0;l<_;l++)if(a=r[l],H(a)&&Ct(a),a.wv>t.wv)return!0}(!e||o!==null&&!R)&&m(t,d)}return!1}function mn(t,n){for(var r=n;r!==null;){if((r.f&B)!==0)try{r.fn(t);return}catch{r.f^=B}r=r.parent}throw j=!1,t}function In(t){return(t.f&W)===0&&(t.parent===null||(t.parent.f&B)===0)}function Q(t,n,r,e){if(j){if(r===null&&(j=!1),In(n))throw t;return}r!==null&&(j=!0);{mn(t,n);return}}function Ut(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&y)!==0?Ut(a,n,!1):n===a&&(r?m(a,O):(a.f&d)!==0&&m(a,b),tt(a))}}function Gt(t){var it;var n=c,r=h,e=I,l=u,a=R,s=A,f=i,_=w,g=t.f;c=null,h=0,I=null,R=(g&E)!==0&&(w||!S||u===null),u=(g&(x|P))===0?t:null,A=null,pt(t.ctx),w=!1,$++;try{var Y=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(z(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!R)for(p=h;p<v.length;p++)((it=v[p]).reactions??(it.reactions=[])).push(t)}else v!==null&&h<v.length&&(z(t,h),v.length=h);if(X()&&I!==null&&!w&&v!==null&&(t.f&(y|b|O))===0)for(p=0;p<I.length;p++)Ut(I[p],t);return l!==null&&$++,Y}finally{c=n,h=r,I=e,u=l,R=a,A=s,pt(f),w=_}}function xn(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(m(n,b),(n.f&(E|U))===0&&(n.f^=U),kt(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function ft(t){var n=t.f;if((n&W)===0){m(t,d);var r=o,e=i,l=S;o=t,S=!0;try{(n&st)!==0?En(t):Lt(t),Ft(t);var a=Gt(t);t.teardown=typeof a=="function"?a:null,t.wv=jt;var s=t.deps,f;_t&&Kt&&t.f&O}catch(_){Q(_,t,r,e||t.ctx)}finally{S=l,o=r}}}function On(){try{rn()}catch(t){if(V!==null)Q(t,V,null);else throw t}}function Vt(){var t=S;try{var n=0;for(S=!0;L.length>0;){n++>1e3&&On();var r=L,e=r.length;L=[];for(var l=0;l<e;l++){var a=Sn(r[l]);Rn(a)}}}finally{G=!1,S=t,V=null}}function Rn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(W|C))===0)try{H(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){Q(l,e,null,e.ctx)}}}function tt(t){G||(G=!0,queueMicrotask(Vt));for(var n=V=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|x))!==0){if((r&d)===0)return;n.f^=d}}L.push(n)}function Sn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(x|P))!==0,a=l&&(e&d)!==0;if(!a&&(e&C)===0){if((e&yt)!==0)n.push(r);else if(l)r.f^=d;else{var s=u;try{u=r,H(r)&&ft(r)}catch(g){Q(g,r,null,r.ctx)}finally{u=s}}var f=r.first;if(f!==null){r=f;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Nn(t){var n;for(dt();L.length>0;)G=!0,Vt(),dt();return n}async function Fr(){await Promise.resolve(),Nn()}function Dn(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!w){A!==null&&A.includes(t)&&en();var e=u.deps;t.rv<$&&(t.rv=$,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&E)===0&&(l.f^=E)}return r&&(l=t,H(l)&&Ct(l)),t.v}function Lr(t){var n=w;try{return w=!0,t()}finally{w=n}}const kn=-7169;function m(t,n){t.f=t.f&kn|n}function Mr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{Xt as $,Yn as A,Mr as B,Dt as C,Ln as D,Tt as E,Mn as F,ut as G,ln as H,Zn as I,ct as J,o as K,Un as L,Kn as M,ir as N,Pn as O,jn as P,Or as Q,Bn as R,vt as S,tr as T,fr as U,rr as V,Vn as W,nr as X,mt as Y,er as Z,Qn as _,cr as a,rt as a0,_n as a1,ur as a2,or as a3,nt as a4,mr as a5,kr as a6,Ar as a7,wr as a8,Ir as a9,Nn as aA,vr as aB,Fr as aC,st as aD,Jt as aE,sr as aF,ar as aG,lr as aH,qn as aI,yr as aJ,un as aa,bn as ab,C as ac,zn as ad,fn as ae,qt as af,xr as ag,yn as ah,D as ai,$n as aj,Xn as ak,k as al,Jn as am,br as an,Wn as ao,pr as ap,K as aq,Z as ar,u as as,gr as at,It as au,xt as av,Gn as aw,Dr as ax,bt as ay,hn as az,zt as b,$t as c,Fn as d,dn as e,Er as f,Dn as g,N as h,sn as i,M as j,dr as k,Pr as l,on as m,Hn as n,Cr as o,_r as p,wn as q,Tr as r,hr as s,Rr as t,T as u,i as v,Nr as w,Sr as x,wt as y,Lr as z};
