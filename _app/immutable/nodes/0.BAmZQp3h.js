import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{h as q,f as aa,K as G,E as ta,aD as ea,aE as ra,ay as sa,aF as ia,aG as na,aH as oa,aI as ca,an as da,n as S,aq as H,ar as J,as as fa,z as la,J as ua,t as va,p as j,a6 as pa,a as Q,s as C,ap as V,g as E,a7 as y,a9 as F,a8 as w,Q as ma,aJ as ha}from"../chunks/Bmqx7hSh.js";import{t as D,a as x}from"../chunks/M9bci9X9.js";import{i as _a}from"../chunks/Css74oad.js";import{a as ga,w as ba,e as $a}from"../chunks/BxRszCg6.js";import{i as X}from"../chunks/CgDGGq6V.js";import{s as A}from"../chunks/B9uV-pQw.js";import{s as ya,a as wa}from"../chunks/CZEdDBqc.js";import{s as Fa,b as T,o as Ta}from"../chunks/Bk3hNepy.js";import{o as Na}from"../chunks/BpStKUaE.js";function ka(t,a,s,e,i){var o;q&&aa();var r=(o=a.$$slots)==null?void 0:o[s],n=!1;r===!0&&(r=a.children,n=!0),r===void 0||r(t,n?()=>e:e)}const K=[...` 	
\r\f \v\uFEFF`];function Sa(t,a,s){var e=""+t;if(s){for(var i in s)if(s[i])e=e?e+" "+i:i;else if(e.length)for(var r=i.length,n=0;(n=e.indexOf(i,n))>=0;){var o=n+r;(n===0||K.includes(e[n-1]))&&(o===e.length||K.includes(e[o]))?e=(n===0?"":e.substring(0,n))+e.substring(o+1):n=o}}return e===""?null:e}function M(t,a,s,e,i,r){var n=t.__className;if(q||n!==s){var o=Sa(s,e,r);(!q||o!==t.getAttribute("class"))&&(o==null?t.removeAttribute("class"):t.className=o),t.__className=s}else if(r&&i!==r)for(var m in r){var c=!!r[m];(i==null||c!==!!i[m])&&t.classList.toggle(m,c)}return r}const Aa=()=>performance.now(),$={tick:t=>requestAnimationFrame(t),now:()=>Aa(),tasks:new Set};function Y(){const t=$.now();$.tasks.forEach(a=>{a.c(t)||($.tasks.delete(a),a.f())}),$.tasks.size!==0&&$.tick(Y)}function Ea(t){let a;return $.tasks.size===0&&$.tick(Y),{promise:new Promise(s=>{$.tasks.add(a={c:t,f:s})}),abort(){$.tasks.delete(a)}}}function O(t,a){ba(()=>{t.dispatchEvent(new CustomEvent(a))})}function Ca(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const a=t.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function P(t){const a={},s=t.split(";");for(const e of s){const[i,r]=e.split(":");if(!i||r===void 0)break;const n=Ca(i.trim());a[n]=r.trim()}return a}const Ia=t=>t;function k(t,a,s,e){var i=(t&na)!==0,r=(t&oa)!==0,n=i&&r,o=(t&ia)!==0,m=n?"both":i?"in":"out",c,d=a.inert,g=a.style.overflow,f,l;function p(){var h=fa,N=G;H(null),J(null);try{return c??(c=s()(a,(e==null?void 0:e())??{},{direction:m}))}finally{H(h),J(N)}}var v={is_global:o,in(){var h;if(a.inert=d,!i){l==null||l.abort(),(h=l==null?void 0:l.reset)==null||h.call(l);return}r||f==null||f.abort(),O(a,"introstart"),f=z(a,p(),l,1,()=>{O(a,"introend"),f==null||f.abort(),f=c=void 0,a.style.overflow=g})},out(h){if(!r){h==null||h(),c=void 0;return}a.inert=!0,O(a,"outrostart"),l=z(a,p(),f,0,()=>{O(a,"outroend"),h==null||h()})},stop:()=>{f==null||f.abort(),l==null||l.abort()}},b=G;if((b.transitions??(b.transitions=[])).push(v),i&&ga){var u=o;if(!u){for(var _=b.parent;_&&(_.f&ta)!==0;)for(;(_=_.parent)&&(_.f&ea)===0;);u=!_||(_.f&ra)!==0}u&&sa(()=>{la(()=>v.in())})}}function z(t,a,s,e,i){var r=e===1;if(ca(a)){var n,o=!1;return da(()=>{if(!o){var b=a({direction:r?"in":"out"});n=z(t,b,s,e,i)}}),{abort:()=>{o=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(s==null||s.deactivate(),!(a!=null&&a.duration))return i(),{abort:S,deactivate:S,reset:S,t:()=>e};const{delay:m=0,css:c,tick:d,easing:g=Ia}=a;var f=[];if(r&&s===void 0&&(d&&d(0,1),c)){var l=P(c(0,1));f.push(l,l)}var p=()=>1-e,v=t.animate(f,{duration:m});return v.onfinish=()=>{var b=(s==null?void 0:s.t())??1-e;s==null||s.abort();var u=e-b,_=a.duration*Math.abs(u),h=[];if(_>0){var N=!1;if(c)for(var U=Math.ceil(_/16.666666666666668),L=0;L<=U;L+=1){var W=b+u*g(L/U),B=P(c(W,1-W));h.push(B),N||(N=B.overflow==="hidden")}N&&(t.style.overflow="hidden"),p=()=>{var I=v.currentTime;return b+u*g(I/_)},d&&Ea(()=>{if(v.playState!=="running")return!1;var I=p();return d(I,1-I),!0})}v=t.animate(h,{duration:_,fill:"forwards"}),v.onfinish=()=>{p=()=>e,d==null||d(e,1-e),i()}},{abort:()=>{v&&(v.cancel(),v.effect=null,v.onfinish=S)},deactivate:()=>{i=S},reset:()=>{e===0&&(d==null||d(1,0))},t:()=>p()}}function Oa(t,a,s){var e=ua(t,a);e&&e.set&&(t[a]=s,va(()=>{t[a]=null}))}const Ra=()=>{const t=Fa;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},La={subscribe(t){return Ra().page.subscribe(t)}};var Ma=D('<div class="header-container"><header class="header"><a class="logo-button"><span class="logo-icon"></span></a> <div class="nav-buttons"><a>stills</a> <a>designs</a> <a>me</a></div> <button class="theme-toggle"></button></header></div>');function qa(t,a){j(a,!1);const[s,e]=ya(),i=()=>wa(La,"$page",s);let r=V("dark");Na(()=>{const _=localStorage.getItem("theme");if(_)C(r,_);else{const h=window.matchMedia("(prefers-color-scheme: dark)").matches;C(r,h?"dark":"light")}document.body.setAttribute("data-theme",E(r))});function n(){C(r,E(r)==="dark"?"light":"dark"),document.body.setAttribute("data-theme",E(r))}X();var o=Ma(),m=y(o),c=y(m);A(c,"href",`${T??""}/`);var d=F(c,2),g=y(d);A(g,"href",`${T??""}/stills`);let f;var l=F(g,2);A(l,"href",`${T??""}/designs`);let p;var v=F(l,2);A(v,"href",`${T??""}/me`);let b;w(d);var u=F(d,2);w(m),w(o),pa((_,h,N)=>{f=M(g,1,"nav-button",null,f,_),p=M(l,1,"nav-button",null,p,h),b=M(v,1,"nav-button",null,b,N),A(u,"aria-label",E(r)==="dark"?"Switch to light mode":"Switch to dark mode")},[()=>({active:i().url.pathname===`${T}/stills`}),()=>({active:i().url.pathname===`${T}/designs`}),()=>({active:i().url.pathname===`${T}/me`})],ma),$a("click",u,n),x(t,o),Q(),e()}const xa=t=>t;function Z(t){const a=t-1;return a*a*a+1}function R(t,{delay:a=0,duration:s=400,easing:e=xa}={}){const i=+getComputedStyle(t).opacity;return{delay:a,duration:s,easing:e,css:r=>`opacity: ${r*i}`}}function za(t,{delay:a=0,duration:s=400,easing:e=Z,axis:i="y"}={}){const r=getComputedStyle(t),n=+r.opacity,o=i==="y"?"height":"width",m=parseFloat(r[o]),c=i==="y"?["top","bottom"]:["left","right"],d=c.map(u=>`${u[0].toUpperCase()}${u.slice(1)}`),g=parseFloat(r[`padding${d[0]}`]),f=parseFloat(r[`padding${d[1]}`]),l=parseFloat(r[`margin${d[0]}`]),p=parseFloat(r[`margin${d[1]}`]),v=parseFloat(r[`border${d[0]}Width`]),b=parseFloat(r[`border${d[1]}Width`]);return{delay:a,duration:s,easing:e,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*n};${o}: ${u*m}px;padding-${c[0]}: ${u*g}px;padding-${c[1]}: ${u*f}px;margin-${c[0]}: ${u*l}px;margin-${c[1]}: ${u*p}px;border-${c[0]}-width: ${u*v}px;border-${c[1]}-width: ${u*b}px;min-${o}: 0`}}function Da(t,{delay:a=0,duration:s=400,easing:e=Z,start:i=0,opacity:r=0}={}){const n=getComputedStyle(t),o=+n.opacity,m=n.transform==="none"?"":n.transform,c=1-i,d=o*(1-r);return{delay:a,duration:s,easing:e,css:(g,f)=>`
			transform: ${m} scale(${1-c*f});
			opacity: ${o-d*f}
		`}}var Ua=D('<div class="loading-indicator"><div class="loading-spinner"></div></div>'),Wa=D('<div class="app"><!> <!> <main><div class="content-container"><!></div></main> <footer class="footer"><div class="footer-content">Designed with <span>🤗</span>, by me.</div></footer></div>');function Za(t,a){j(a,!1);const s=!0;let e=V(!1);Ta(p=>(p.to&&p.to.url&&(console.log("Navigating to",p.to.url.pathname),C(e,!0)),()=>{setTimeout(()=>{C(e,!1)},300)})),X();var i=Wa(),r=y(i);qa(r,{});var n=F(r,2);{var o=p=>{var v=Ua();k(1,v,()=>R,()=>({duration:200})),k(2,v,()=>R,()=>({duration:200})),x(p,v)};_a(n,p=>{E(e)&&p(o)})}var m=F(n,2),c=y(m),d=y(c);ka(d,a,"default",{}),w(c),w(m);var g=F(m,2),f=y(g),l=F(y(f));return ha(),w(f),w(g),w(i),k(1,c,()=>R,()=>({duration:600,delay:300})),k(2,c,()=>R,()=>({duration:300})),k(1,l,()=>Da,()=>({start:.5,duration:500,delay:1e3})),k(1,g,()=>za,()=>({duration:400,delay:600})),x(t,i),Oa(a,"prerender",s),Q({prerender:s})}export{Za as component};
