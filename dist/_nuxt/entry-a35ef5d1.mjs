var Xy=Object.defineProperty,Yy=Object.defineProperties;var Qy=Object.getOwnPropertyDescriptors;var Gu=Object.getOwnPropertySymbols;var Jy=Object.prototype.hasOwnProperty,Zy=Object.prototype.propertyIsEnumerable;var Xu=(t,e,n)=>e in t?Xy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ae=(t,e)=>{for(var n in e||(e={}))Jy.call(e,n)&&Xu(t,n,e[n]);if(Gu)for(var n of Gu(e))Zy.call(e,n)&&Xu(t,n,e[n]);return t},vt=(t,e)=>Yy(t,Qy(e));function rl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ev="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tv=rl(ev);function kd(t){return!!t||t===""}function No(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Pe(r)?sv(r):No(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Pe(t))return t;if(De(t))return t}}const nv=/;(?![^(]*\))/g,rv=/:(.+)/;function sv(t){const e={};return t.split(nv).forEach(n=>{if(n){const r=n.split(rv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xo(t){let e="";if(Pe(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=xo(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function iv(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Pe(e)&&(t.class=xo(e)),n&&(t.style=No(n)),t}const jn=t=>Pe(t)?t:t==null?"":Y(t)||De(t)&&(t.toString===Od||!ee(t.toString))?JSON.stringify(t,Rd,2):String(t),Rd=(t,e)=>e&&e.__v_isRef?Rd(t,e.value):wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Nd(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!Y(e)&&!Pd(e)?String(e):e,_e={},vr=[],Ot=()=>{},ov=()=>!1,av=/^on[^a-z]/,Zs=t=>av.test(t),sl=t=>t.startsWith("onUpdate:"),Ye=Object.assign,il=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cv=Object.prototype.hasOwnProperty,ue=(t,e)=>cv.call(t,e),Y=Array.isArray,wr=t=>Oo(t)==="[object Map]",Nd=t=>Oo(t)==="[object Set]",ee=t=>typeof t=="function",Pe=t=>typeof t=="string",ol=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",xd=t=>De(t)&&ee(t.then)&&ee(t.catch),Od=Object.prototype.toString,Oo=t=>Od.call(t),lv=t=>Oo(t).slice(8,-1),Pd=t=>Oo(t)==="[object Object]",al=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uv=/-(\w)/g,Vt=Po(t=>t.replace(uv,(e,n)=>n?n.toUpperCase():"")),hv=/\B([A-Z])/g,jr=Po(t=>t.replace(hv,"-$1").toLowerCase()),Do=Po(t=>t.charAt(0).toUpperCase()+t.slice(1)),va=Po(t=>t?`on${Do(t)}`:""),Ss=(t,e)=>!Object.is(t,e),_r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Xi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Cs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yu;const fv=()=>Yu||(Yu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Mt;class dv{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Mt&&(this.parent=Mt,this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function pv(t,e=Mt){e&&e.active&&e.effects.push(t)}const cl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Dd=t=>(t.w&In)>0,Md=t=>(t.n&In)>0,gv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=In},mv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Dd(s)&&!Md(s)?s.delete(t):e[n++]=s,s.w&=~In,s.n&=~In}e.length=n}},nc=new WeakMap;let ss=0,In=1;const rc=30;let Rt;const Hn=Symbol(""),sc=Symbol("");class ll{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pv(this,r)}run(){if(!this.active)return this.fn();let e=Rt,n=vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rt,Rt=this,vn=!0,In=1<<++ss,ss<=rc?gv(this):Qu(this),this.fn()}finally{ss<=rc&&mv(this),In=1<<--ss,Rt=this.parent,vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rt===this?this.deferStop=!0:this.active&&(Qu(this),this.onStop&&this.onStop(),this.active=!1)}}function Qu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vn=!0;const Ld=[];function Hr(){Ld.push(vn),vn=!1}function qr(){const t=Ld.pop();vn=t===void 0?!0:t}function pt(t,e,n){if(vn&&Rt){let r=nc.get(t);r||nc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=cl()),Ud(s)}}function Ud(t,e){let n=!1;ss<=rc?Md(t)||(t.n|=In,n=!Dd(t)):n=!t.has(Rt),n&&(t.add(Rt),Rt.deps.push(t))}function Zt(t,e,n,r,s,i){const o=nc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?al(n)&&a.push(o.get("length")):(a.push(o.get(Hn)),wr(t)&&a.push(o.get(sc)));break;case"delete":Y(t)||(a.push(o.get(Hn)),wr(t)&&a.push(o.get(sc)));break;case"set":wr(t)&&a.push(o.get(Hn));break}if(a.length===1)a[0]&&ic(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ic(cl(c))}}function ic(t,e){for(const n of Y(t)?t:[...t])(n!==Rt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const yv=rl("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ol)),vv=ul(),wv=ul(!1,!0),_v=ul(!0),Ju=Ev();function Ev(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=de(this);for(let i=0,o=this.length;i<o;i++)pt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(de)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Hr();const r=de(this)[e].apply(this,n);return qr(),r}}),t}function ul(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Uv:Hd:e?jd:Vd).get(r))return r;const o=Y(r);if(!t&&o&&ue(Ju,s))return Reflect.get(Ju,s,i);const a=Reflect.get(r,s,i);return(ol(s)?Fd.has(s):yv(s))||(t||pt(r,"get",s),e)?a:Le(a)?!o||!al(s)?a.value:a:De(a)?t?qd(a):Ft(a):a}}const bv=Bd(),Tv=Bd(!0);function Bd(t=!1){return function(n,r,s,i){let o=n[r];if(As(o)&&Le(o)&&!Le(s))return!1;if(!t&&!As(s)&&(Kd(s)||(s=de(s),o=de(o)),!Y(n)&&Le(o)&&!Le(s)))return o.value=s,!0;const a=Y(n)&&al(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,s,i);return n===de(i)&&(a?Ss(s,o)&&Zt(n,"set",r,s):Zt(n,"add",r,s)),c}}function Iv(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Zt(t,"delete",e,void 0),r}function Sv(t,e){const n=Reflect.has(t,e);return(!ol(e)||!Fd.has(e))&&pt(t,"has",e),n}function Cv(t){return pt(t,"iterate",Y(t)?"length":Hn),Reflect.ownKeys(t)}const $d={get:vv,set:bv,deleteProperty:Iv,has:Sv,ownKeys:Cv},Av={get:_v,set(t,e){return!0},deleteProperty(t,e){return!0}},kv=Ye({},$d,{get:wv,set:Tv}),hl=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function Ti(t,e,n=!1,r=!1){t=t.__v_raw;const s=de(t),i=de(e);e!==i&&!n&&pt(s,"get",e),!n&&pt(s,"get",i);const{has:o}=Mo(s),a=r?hl:n?gl:ks;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ii(t,e=!1){const n=this.__v_raw,r=de(n),s=de(t);return t!==s&&!e&&pt(r,"has",t),!e&&pt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Si(t,e=!1){return t=t.__v_raw,!e&&pt(de(t),"iterate",Hn),Reflect.get(t,"size",t)}function Zu(t){t=de(t);const e=de(this);return Mo(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function eh(t,e){e=de(e);const n=de(this),{has:r,get:s}=Mo(n);let i=r.call(n,t);i||(t=de(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ss(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function th(t){const e=de(this),{has:n,get:r}=Mo(e);let s=n.call(e,t);s||(t=de(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Zt(e,"delete",t,void 0),i}function nh(){const t=de(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function Ci(t,e){return function(r,s){const i=this,o=i.__v_raw,a=de(o),c=e?hl:t?gl:ks;return!t&&pt(a,"iterate",Hn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ai(t,e,n){return function(...r){const s=this.__v_raw,i=de(s),o=wr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?hl:e?gl:ks;return!e&&pt(i,"iterate",c?sc:Hn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:this}}function Rv(){const t={get(i){return Ti(this,i)},get size(){return Si(this)},has:Ii,add:Zu,set:eh,delete:th,clear:nh,forEach:Ci(!1,!1)},e={get(i){return Ti(this,i,!1,!0)},get size(){return Si(this)},has:Ii,add:Zu,set:eh,delete:th,clear:nh,forEach:Ci(!1,!0)},n={get(i){return Ti(this,i,!0)},get size(){return Si(this,!0)},has(i){return Ii.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Ci(!0,!1)},r={get(i){return Ti(this,i,!0,!0)},get size(){return Si(this,!0)},has(i){return Ii.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Ci(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ai(i,!1,!1),n[i]=Ai(i,!0,!1),e[i]=Ai(i,!1,!0),r[i]=Ai(i,!0,!0)}),[t,n,e,r]}const[Nv,xv,Ov,Pv]=Rv();function fl(t,e){const n=e?t?Pv:Ov:t?xv:Nv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const Dv={get:fl(!1,!1)},Mv={get:fl(!1,!0)},Lv={get:fl(!0,!1)},Vd=new WeakMap,jd=new WeakMap,Hd=new WeakMap,Uv=new WeakMap;function Fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bv(t){return t.__v_skip||!Object.isExtensible(t)?0:Fv(lv(t))}function Ft(t){return As(t)?t:dl(t,!1,$d,Dv,Vd)}function $v(t){return dl(t,!1,kv,Mv,jd)}function qd(t){return dl(t,!0,Av,Lv,Hd)}function dl(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Bv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Er(t){return As(t)?Er(t.__v_raw):!!(t&&t.__v_isReactive)}function As(t){return!!(t&&t.__v_isReadonly)}function Kd(t){return!!(t&&t.__v_isShallow)}function zd(t){return Er(t)||As(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function pl(t){return Xi(t,"__v_skip",!0),t}const ks=t=>De(t)?Ft(t):t,gl=t=>De(t)?qd(t):t;function Wd(t){vn&&Rt&&(t=de(t),Ud(t.dep||(t.dep=cl())))}function Gd(t,e){t=de(t),t.dep&&ic(t.dep)}function Le(t){return!!(t&&t.__v_isRef===!0)}function oc(t){return Xd(t,!1)}function ac(t){return Xd(t,!0)}function Xd(t,e){return Le(t)?t:new Vv(t,e)}class Vv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:ks(e)}get value(){return Wd(this),this._value}set value(e){e=this.__v_isShallow?e:de(e),Ss(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ks(e),Gd(this))}}function us(t){return Le(t)?t.value:t}const jv={get:(t,e,n)=>us(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yd(t){return Er(t)?t:new Proxy(t,jv)}class Hv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function qv(t,e,n){const r=t[e];return Le(r)?r:new Hv(t,e,n)}class Kv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ll(e,()=>{this._dirty||(this._dirty=!0,Gd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=de(this);return Wd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function zv(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=Ot):(r=t.get,s=t.set),new Kv(r,s,i||!s,n)}function wn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ei(i,e,n)}return s}function It(t,e,n,r){if(ee(t)){const i=wn(t,e,n,r);return i&&xd(i)&&i.catch(o=>{ei(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(It(t[i],e,n,r));return s}function ei(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wn(c,null,10,[t,o,a]);return}}Wv(t,n,s,r)}function Wv(t,e,n,r=!0){console.error(t)}let Yi=!1,cc=!1;const dt=[];let Wt=0;const hs=[];let is=null,fr=0;const fs=[];let fn=null,dr=0;const Qd=Promise.resolve();let ml=null,lc=null;function yl(t){const e=ml||Qd;return t?e.then(this?t.bind(this):t):e}function Gv(t){let e=Wt+1,n=dt.length;for(;e<n;){const r=e+n>>>1;Rs(dt[r])<t?e=r+1:n=r}return e}function Jd(t){(!dt.length||!dt.includes(t,Yi&&t.allowRecurse?Wt+1:Wt))&&t!==lc&&(t.id==null?dt.push(t):dt.splice(Gv(t.id),0,t),Zd())}function Zd(){!Yi&&!cc&&(cc=!0,ml=Qd.then(np))}function Xv(t){const e=dt.indexOf(t);e>Wt&&dt.splice(e,1)}function ep(t,e,n,r){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Zd()}function Yv(t){ep(t,is,hs,fr)}function tp(t){ep(t,fn,fs,dr)}function vl(t,e=null){if(hs.length){for(lc=e,is=[...new Set(hs)],hs.length=0,fr=0;fr<is.length;fr++)is[fr]();is=null,fr=0,lc=null,vl(t,e)}}function Qi(t){if(fs.length){const e=[...new Set(fs)];if(fs.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,r)=>Rs(n)-Rs(r)),dr=0;dr<fn.length;dr++)fn[dr]();fn=null,dr=0}}const Rs=t=>t.id==null?1/0:t.id;function np(t){cc=!1,Yi=!0,vl(t),dt.sort((n,r)=>Rs(n)-Rs(r));const e=Ot;try{for(Wt=0;Wt<dt.length;Wt++){const n=dt[Wt];n&&n.active!==!1&&wn(n,null,14)}}finally{Wt=0,dt.length=0,Qi(),Yi=!1,ml=null,(dt.length||hs.length||fs.length)&&np(t)}}function Qv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||_e;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||_e;f?s=n.map(p=>p.trim()):h&&(s=n.map(Cs))}let a,c=r[a=va(e)]||r[a=va(Vt(e))];!c&&i&&(c=r[a=va(jr(e))]),c&&It(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(l,t,6,s)}}function rp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=rp(l,e,!0);u&&(a=!0,Ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):Ye(o,i),r.set(t,o),o)}function Lo(t,e){return!t||!Zs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,jr(e))||ue(t,e))}let bt=null,Uo=null;function Ji(t){const e=bt;return bt=t,Uo=t&&t.type.__scopeId||null,e}function wl(t){Uo=t}function _l(){Uo=null}function El(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gh(-1);const i=Ji(e),o=t(...s);return Ji(i),r._d&&gh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function wa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:v,inheritAttrs:b}=t;let m,w;const y=Ji(t);try{if(n.shapeFlag&4){const T=s||r;m=Et(u.call(T,T,h,i,p,f,v)),w=c}else{const T=e;m=Et(T.length>1?T(i,{attrs:c,slots:a,emit:l}):T(i,null)),w=e.props?c:Zv(c)}}catch(T){gs.length=0,ei(T,t,1),m=$e(ut)}let E=m;if(w&&b!==!1){const T=Object.keys(w),{shapeFlag:L}=E;T.length&&L&7&&(o&&T.some(sl)&&(w=ew(w,o)),E=Sn(E,w))}return n.dirs&&(E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),m=E,Ji(y),m}function Jv(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Ds(r)){if(r.type!==ut||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Zv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zs(n))&&((e||(e={}))[n]=t[n]);return e},ew=(t,e)=>{const n={};for(const r in t)(!sl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?rh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Lo(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?rh(r,o,l):!0:!!o;return!1}function rh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Lo(n,i))return!0}return!1}function bl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nw=t=>t.__isSuspense,rw={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?sw(e,n,r,s,i,o,a,c,l):iw(t,e,n,r,s,o,a,c,l)},hydrate:ow,create:Tl,normalize:aw},sp=rw;function Ns(t,e){const n=t.props&&t.props[e];ee(n)&&n()}function sw(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=Tl(t,s,r,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(Ns(t,"onPending"),Ns(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),br(f,t.ssFallback)):f.resolve()}function iw(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,p=e.ssFallback,{activeBranch:v,pendingBranch:b,isInFallback:m,isHydrating:w}=h;if(b)h.pendingBranch=f,Ut(f,b)?(c(b,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():m&&(c(v,p,n,r,s,null,i,o,a),br(h,p))):(h.pendingId++,w?(h.isHydrating=!1,h.activeBranch=b):l(b,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),m?(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(v,p,n,r,s,null,i,o,a),br(h,p))):v&&Ut(f,v)?(c(v,f,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(v&&Ut(f,v))c(v,f,n,r,s,h,i,o,a),br(h,f);else if(Ns(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:y,pendingId:E}=h;y>0?setTimeout(()=>{h.pendingId===E&&h.fallback(p)},y):y===0&&h.fallback(p)}}function Tl(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:h,m:f,um:p,n:v,o:{parentNode:b,remove:m}}=l,w=Cs(t.props&&t.props.timeout),y={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:T,activeBranch:L,pendingBranch:U,pendingId:k,effects:K,parentComponent:j,container:X}=y;if(y.isHydrating)y.isHydrating=!1;else if(!E){const re=L&&U.transition&&U.transition.mode==="out-in";re&&(L.transition.afterLeave=()=>{k===y.pendingId&&f(U,X,pe,0)});let{anchor:pe}=y;L&&(pe=v(L),p(L,j,y,!0)),re||f(U,X,pe,0)}br(y,U),y.pendingBranch=null,y.isInFallback=!1;let ne=y.parent,R=!1;for(;ne;){if(ne.pendingBranch){ne.effects.push(...K),R=!0;break}ne=ne.parent}R||tp(K),y.effects=[],Ns(T,"onResolve")},fallback(E){if(!y.pendingBranch)return;const{vnode:T,activeBranch:L,parentComponent:U,container:k,isSVG:K}=y;Ns(T,"onFallback");const j=v(L),X=()=>{!y.isInFallback||(h(null,E,k,j,U,null,K,a,c),br(y,E))},ne=E.transition&&E.transition.mode==="out-in";ne&&(L.transition.afterLeave=X),y.isInFallback=!0,p(L,U,null,!0),ne||X()},move(E,T,L){y.activeBranch&&f(y.activeBranch,E,T,L),y.container=E},next(){return y.activeBranch&&v(y.activeBranch)},registerDep(E,T){const L=!!y.pendingBranch;L&&y.deps++;const U=E.vnode.el;E.asyncDep.catch(k=>{ei(k,E,0)}).then(k=>{if(E.isUnmounted||y.isUnmounted||y.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:K}=E;mc(E,k,!1),U&&(K.el=U);const j=!U&&E.subTree.el;T(E,K,b(U||E.subTree.el),U?null:v(E.subTree),y,o,c),j&&m(j),bl(E,K.el),L&&--y.deps===0&&y.resolve()})},unmount(E,T){y.isUnmounted=!0,y.activeBranch&&p(y.activeBranch,n,E,T),y.pendingBranch&&p(y.pendingBranch,n,E,T)}};return y}function ow(t,e,n,r,s,i,o,a,c){const l=e.suspense=Tl(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function aw(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=sh(r?n.default:n),t.ssFallback=r?sh(n.fallback):$e(ut)}function sh(t){let e;if(ee(t)){const n=Ps&&t._c;n&&(t._d=!1,St()),t=t(),n&&(t._d=!0,e=_n,Ip())}return Y(t)&&(t=Jv(t)),t=Et(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function ip(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):tp(t)}function br(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,bl(r,s))}function ds(t,e){if(Be){let n=Be.provides;const r=Be.parent&&Be.parent.provides;r===n&&(n=Be.provides=Object.create(r)),n[t]=e}}function Qt(t,e,n=!1){const r=Be||bt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r.proxy):e}}function ih(t,e){return Il(t,null,e)}const oh={};function ps(t,e,n){return Il(t,e,n)}function Il(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=_e){const a=Be;let c,l=!1,u=!1;if(Le(t)?(c=()=>t.value,l=Kd(t)):Er(t)?(c=()=>t,r=!0):Y(t)?(u=!0,l=t.some(Er),c=()=>t.map(w=>{if(Le(w))return w.value;if(Er(w))return Fn(w);if(ee(w))return wn(w,a,2)})):ee(t)?e?c=()=>wn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),It(t,a,3,[f])}:c=Ot,e&&r){const w=c;c=()=>Fn(w())}let h,f=w=>{h=m.onStop=()=>{wn(w,a,4)}};if(Ms)return f=Ot,e?n&&It(e,a,3,[c(),u?[]:void 0,f]):c(),Ot;let p=u?[]:oh;const v=()=>{if(!!m.active)if(e){const w=m.run();(r||l||(u?w.some((y,E)=>Ss(y,p[E])):Ss(w,p)))&&(h&&h(),It(e,a,3,[w,p===oh?void 0:p,f]),p=w)}else m.run()};v.allowRecurse=!!e;let b;s==="sync"?b=v:s==="post"?b=()=>qe(v,a&&a.suspense):b=()=>{!a||a.isMounted?Yv(v):v()};const m=new ll(c,b);return e?n?v():p=m.run():s==="post"?qe(m.run.bind(m),a&&a.suspense):m.run(),()=>{m.stop(),a&&a.scope&&il(a.scope.effects,m)}}function cw(t,e,n){const r=this.proxy,s=Pe(t)?t.includes(".")?op(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Be;Rr(this);const a=Il(s,i.bind(r),n);return o?Rr(o):qn(),a}function op(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Fn(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))Fn(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Fn(t[n],e);else if(Nd(t)||wr(t))t.forEach(n=>{Fn(n,e)});else if(Pd(t))for(const n in t)Fn(t[n],e);return t}function lw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sl(()=>{t.isMounted=!0}),$o(()=>{t.isUnmounting=!0}),t}const wt=[Function,Array],uw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wt,onEnter:wt,onAfterEnter:wt,onEnterCancelled:wt,onBeforeLeave:wt,onLeave:wt,onAfterLeave:wt,onLeaveCancelled:wt,onBeforeAppear:wt,onAppear:wt,onAfterAppear:wt,onAppearCancelled:wt},setup(t,{slots:e}){const n=ti(),r=lw();let s;return()=>{const i=e.default&&lp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==ut){o=b;break}}const a=de(t),{mode:c}=a;if(r.isLeaving)return _a(o);const l=ah(o);if(!l)return _a(o);const u=uc(l,a,r,n);Zi(l,u);const h=n.subTree,f=h&&ah(h);let p=!1;const{getTransitionKey:v}=l.type;if(v){const b=v();s===void 0?s=b:b!==s&&(s=b,p=!0)}if(f&&f.type!==ut&&(!Ut(l,f)||p)){const b=uc(f,a,r,n);if(Zi(f,b),c==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},_a(o);c==="in-out"&&l.type!==ut&&(b.delayLeave=(m,w,y)=>{const E=cp(r,f);E[String(f.key)]=f,m._leaveCb=()=>{w(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return o}}},ap=uw;function cp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function uc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:b,onAppear:m,onAfterAppear:w,onAppearCancelled:y}=e,E=String(t.key),T=cp(n,t),L=(k,K)=>{k&&It(k,r,9,K)},U={mode:i,persisted:o,beforeEnter(k){let K=a;if(!n.isMounted)if(s)K=b||a;else return;k._leaveCb&&k._leaveCb(!0);const j=T[E];j&&Ut(t,j)&&j.el._leaveCb&&j.el._leaveCb(),L(K,[k])},enter(k){let K=c,j=l,X=u;if(!n.isMounted)if(s)K=m||c,j=w||l,X=y||u;else return;let ne=!1;const R=k._enterCb=re=>{ne||(ne=!0,re?L(X,[k]):L(j,[k]),U.delayedLeave&&U.delayedLeave(),k._enterCb=void 0)};K?(K(k,R),K.length<=1&&R()):R()},leave(k,K){const j=String(t.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return K();L(h,[k]);let X=!1;const ne=k._leaveCb=R=>{X||(X=!0,K(),R?L(v,[k]):L(p,[k]),k._leaveCb=void 0,T[j]===t&&delete T[j])};T[j]=t,f?(f(k,ne),f.length<=1&&ne()):ne()},clone(k){return uc(k,e,n,r)}};return U}function _a(t){if(Fo(t))return t=Sn(t),t.children=null,t}function ah(t){return Fo(t)?t.children?t.children[0]:void 0:t}function Zi(t,e){t.shapeFlag&6&&t.component?Zi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_t?(o.patchFlag&128&&s++,r=r.concat(lp(o.children,e,a))):(e||o.type!==ut)&&r.push(a!=null?Sn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function mt(t){return ee(t)?{setup:t,name:t.name}:t}const xs=t=>!!t.type.__asyncLoader,Fo=t=>t.type.__isKeepAlive,hw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=ti(),r=n.ctx;if(!r.renderer)return e.default;const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(y,E,T,L,U)=>{const k=y.component;l(y,E,T,0,a),c(k.vnode,y,E,T,k,a,L,y.slotScopeIds,U),qe(()=>{k.isDeactivated=!1,k.a&&_r(k.a);const K=y.props&&y.props.onVnodeMounted;K&&ot(K,k.parent,y)},a)},r.deactivate=y=>{const E=y.component;l(y,f,null,1,a),qe(()=>{E.da&&_r(E.da);const T=y.props&&y.props.onVnodeUnmounted;T&&ot(T,E.parent,y),E.isDeactivated=!0},a)};function p(y){Ea(y),u(y,n,a,!0)}function v(y){s.forEach((E,T)=>{const L=yc(E.type);L&&(!y||!y(L))&&b(T)})}function b(y){const E=s.get(y);!o||E.type!==o.type?p(E):o&&Ea(o),s.delete(y),i.delete(y)}ps(()=>[t.include,t.exclude],([y,E])=>{y&&v(T=>os(y,T)),E&&v(T=>!os(E,T))},{flush:"post",deep:!0});let m=null;const w=()=>{m!=null&&s.set(m,ba(n.subTree))};return Sl(w),hp(w),$o(()=>{s.forEach(y=>{const{subTree:E,suspense:T}=n,L=ba(E);if(y.type===L.type){Ea(L);const U=L.component.da;U&&qe(U,T);return}p(y)})}),()=>{if(m=null,!e.default)return null;const y=e.default(),E=y[0];if(y.length>1)return o=null,y;if(!Ds(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let T=ba(E);const L=T.type,U=yc(xs(T)?T.type.__asyncResolved||{}:L),{include:k,exclude:K,max:j}=t;if(k&&(!U||!os(k,U))||K&&U&&os(K,U))return o=T,E;const X=T.key==null?L:T.key,ne=s.get(X);return T.el&&(T=Sn(T),E.shapeFlag&128&&(E.ssContent=T)),m=X,ne?(T.el=ne.el,T.component=ne.component,T.transition&&Zi(T,T.transition),T.shapeFlag|=512,i.delete(X),i.add(X)):(i.add(X),j&&i.size>parseInt(j,10)&&b(i.values().next().value)),T.shapeFlag|=256,o=T,E}}},fw=hw;function os(t,e){return Y(t)?t.some(n=>os(n,e)):Pe(t)?t.split(",").includes(e):t.test?t.test(e):!1}function dw(t,e){up(t,"a",e)}function pw(t,e){up(t,"da",e)}function up(t,e,n=Be){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Bo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Fo(s.parent.vnode)&&gw(r,e,n,s),s=s.parent}}function gw(t,e,n,r){const s=Bo(e,t,r,!0);fp(()=>{il(r[e],s)},n)}function Ea(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function ba(t){return t.shapeFlag&128?t.ssContent:t}function Bo(t,e,n=Be,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Hr(),Rr(n);const a=It(e,n,t,o);return qn(),qr(),a});return r?s.unshift(i):s.push(i),i}}const rn=t=>(e,n=Be)=>(!Ms||t==="sp")&&Bo(t,e,n),mw=rn("bm"),Sl=rn("m"),yw=rn("bu"),hp=rn("u"),$o=rn("bum"),fp=rn("um"),vw=rn("sp"),ww=rn("rtg"),_w=rn("rtc");function hc(t,e=Be){Bo("ec",t,e)}let fc=!0;function Ew(t){const e=pp(t),n=t.proxy,r=t.ctx;fc=!1,e.beforeCreate&&ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:v,activated:b,deactivated:m,beforeDestroy:w,beforeUnmount:y,destroyed:E,unmounted:T,render:L,renderTracked:U,renderTriggered:k,errorCaptured:K,serverPrefetch:j,expose:X,inheritAttrs:ne,components:R,directives:re,filters:pe}=e;if(l&&bw(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const me=o[Ee];ee(me)&&(r[Ee]=me.bind(n))}if(s){const Ee=s.call(n,n);De(Ee)&&(t.data=Ft(Ee))}if(fc=!0,i)for(const Ee in i){const me=i[Ee],ht=ee(me)?me.bind(n,n):ee(me.get)?me.get.bind(n,n):Ot,ar=!ee(me)&&ee(me.set)?me.set.bind(n):Ot,zt=ze({get:ht,set:ar});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>zt.value,set:Pt=>zt.value=Pt})}if(a)for(const Ee in a)dp(a[Ee],r,n,Ee);if(c){const Ee=ee(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(me=>{ds(me,Ee[me])})}u&&ch(u,t,"c");function Re(Ee,me){Y(me)?me.forEach(ht=>Ee(ht.bind(n))):me&&Ee(me.bind(n))}if(Re(mw,h),Re(Sl,f),Re(yw,p),Re(hp,v),Re(dw,b),Re(pw,m),Re(hc,K),Re(_w,U),Re(ww,k),Re($o,y),Re(fp,T),Re(vw,j),Y(X))if(X.length){const Ee=t.exposed||(t.exposed={});X.forEach(me=>{Object.defineProperty(Ee,me,{get:()=>n[me],set:ht=>n[me]=ht})})}else t.exposed||(t.exposed={});L&&t.render===Ot&&(t.render=L),ne!=null&&(t.inheritAttrs=ne),R&&(t.components=R),re&&(t.directives=re)}function bw(t,e,n=Ot,r=!1){Y(t)&&(t=dc(t));for(const s in t){const i=t[s];let o;De(i)?"default"in i?o=Qt(i.from||s,i.default,!0):o=Qt(i.from||s):o=Qt(i),Le(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ch(t,e,n){It(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function dp(t,e,n,r){const s=r.includes(".")?op(n,r):()=>n[r];if(Pe(t)){const i=e[t];ee(i)&&ps(s,i)}else if(ee(t))ps(s,t.bind(n));else if(De(t))if(Y(t))t.forEach(i=>dp(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&ps(s,i,t)}}function pp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>eo(c,l,o,!0)),eo(c,e,o)),i.set(e,c),c}function eo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&eo(t,i,n,!0),s&&s.forEach(o=>eo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Tw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tw={data:lh,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:Dn,directives:Dn,watch:Sw,provide:lh,inject:Iw};function lh(t,e){return e?t?function(){return Ye(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function Iw(t,e){return Dn(dc(t),dc(e))}function dc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?Ye(Ye(Object.create(null),t),e):e}function Sw(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=nt(t[r],e[r]);return n}function Cw(t,e,n,r=!1){const s={},i={};Xi(i,Vo,1),t.propsDefaults=Object.create(null),gp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$v(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Aw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=de(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Lo(t.emitsOptions,f))continue;const p=e[f];if(c)if(ue(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const v=Vt(f);s[v]=pc(c,a,v,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{gp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=jr(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=pc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],l=!0)}l&&Zt(t,"set","$attrs")}function gp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ls(c))continue;const l=e[c];let u;s&&ue(s,u=Vt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Lo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=de(n),l=a||_e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=pc(s,c,h,l[h],t,!ue(l,h))}}return o}function pc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Rr(s),r=l[n]=c.call(null,e),qn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===jr(n))&&(r=!0))}return r}function mp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[f,p]=mp(h,e,!0);Ye(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,vr),vr;if(Y(i))for(let u=0;u<i.length;u++){const h=Vt(i[u]);uh(h)&&(o[h]=_e)}else if(i)for(const u in i){const h=Vt(u);if(uh(h)){const f=i[u],p=o[h]=Y(f)||ee(f)?{type:f}:f;if(p){const v=dh(Boolean,p.type),b=dh(String,p.type);p[0]=v>-1,p[1]=b<0||v<b,(v>-1||ue(p,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function uh(t){return t[0]!=="$"}function hh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function fh(t,e){return hh(t)===hh(e)}function dh(t,e){return Y(e)?e.findIndex(n=>fh(n,t)):ee(e)&&fh(e,t)?0:-1}const yp=t=>t[0]==="_"||t==="$stable",Cl=t=>Y(t)?t.map(Et):[Et(t)],kw=(t,e,n)=>{const r=El((...s)=>Cl(e(...s)),n);return r._c=!1,r},vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yp(s))continue;const i=t[s];if(ee(i))e[s]=kw(s,i,r);else if(i!=null){const o=Cl(i);e[s]=()=>o}}},wp=(t,e)=>{const n=Cl(e);t.slots.default=()=>n},Rw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),Xi(e,"_",n)):vp(e,t.slots={})}else t.slots={},e&&wp(t,e);Xi(t.slots,Vo,1)},Nw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=_e;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ye(s,e),!n&&a===1&&delete s._):(i=!e.$stable,vp(e,s)),o=e}else e&&(wp(t,e),o={default:1});if(i)for(const a in s)!yp(a)&&!(a in o)&&delete s[a]};function QN(t,e){const n=bt;if(n===null)return t;const r=jo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=_e]=e[i];ee(o)&&(o={mounted:o,updated:o}),o.deep&&Fn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Lt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Hr(),It(c,n,8,[t.el,a,t,e]),qr())}}function _p(){return{app:null,config:{isNativeTag:ov,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xw=0;function Ow(t,e){return function(r,s=null){ee(r)||(r=Object.assign({},r)),s!=null&&!De(s)&&(s=null);const i=_p(),o=new Set;let a=!1;const c=i.app={_uid:xw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Qw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=$e(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,jo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function to(t,e,n,r,s=!1){if(Y(t)){t.forEach((f,p)=>to(f,e&&(Y(e)?e[p]:e),n,r,s));return}if(xs(r)&&!s)return;const i=r.shapeFlag&4?jo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):Le(l)&&(l.value=null)),ee(c))wn(c,a,12,[o,u]);else{const f=Pe(c),p=Le(c);if(f||p){const v=()=>{if(t.f){const b=f?u[c]:c.value;s?Y(b)&&il(b,i):Y(b)?b.includes(i)||b.push(i):f?(u[c]=[i],ue(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ue(h,c)&&(h[c]=o)):Le(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,qe(v,n)):v()}}}let on=!1;const ki=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Ta=t=>t.nodeType===8;function Pw(t){const{mt:e,p:n,o:{patchProp:r,nextSibling:s,parentNode:i,remove:o,insert:a,createComment:c}}=t,l=(m,w)=>{if(!w.hasChildNodes()){n(null,m,w),Qi();return}on=!1,u(w.firstChild,m,null,null,null),Qi(),on&&console.error("Hydration completed but contains mismatches.")},u=(m,w,y,E,T,L=!1)=>{const U=Ta(m)&&m.data==="[",k=()=>v(m,w,y,E,T,U),{type:K,ref:j,shapeFlag:X}=w,ne=m.nodeType;w.el=m;let R=null;switch(K){case Os:ne!==3?R=k():(m.data!==w.children&&(on=!0,m.data=w.children),R=s(m));break;case ut:ne!==8||U?R=k():R=s(m);break;case Bi:if(ne!==1)R=k();else{R=m;const re=!w.children.length;for(let pe=0;pe<w.staticCount;pe++)re&&(w.children+=R.outerHTML),pe===w.staticCount-1&&(w.anchor=R),R=s(R);return R}break;case _t:U?R=p(m,w,y,E,T,L):R=k();break;default:if(X&1)ne!==1||w.type.toLowerCase()!==m.tagName.toLowerCase()?R=k():R=h(m,w,y,E,T,L);else if(X&6){w.slotScopeIds=T;const re=i(m);if(e(w,re,null,y,E,ki(re),L),R=U?b(m):s(m),xs(w)){let pe;U?(pe=$e(_t),pe.anchor=R?R.previousSibling:re.lastChild):pe=m.nodeType===3?kl(""):$e("div"),pe.el=m,w.component.subTree=pe}}else X&64?ne!==8?R=k():R=w.type.hydrate(m,w,y,E,T,L,t,f):X&128&&(R=w.type.hydrate(m,w,y,E,ki(i(m)),T,L,t,u))}return j!=null&&to(j,null,E,w),R},h=(m,w,y,E,T,L)=>{L=L||!!w.dynamicChildren;const{type:U,props:k,patchFlag:K,shapeFlag:j,dirs:X}=w,ne=U==="input"&&X||U==="option";if(ne||K!==-1){if(X&&Lt(w,null,y,"created"),k)if(ne||!L||K&48)for(const re in k)(ne&&re.endsWith("value")||Zs(re)&&!ls(re))&&r(m,re,null,k[re],!1,void 0,y);else k.onClick&&r(m,"onClick",null,k.onClick,!1,void 0,y);let R;if((R=k&&k.onVnodeBeforeMount)&&ot(R,y,w),X&&Lt(w,null,y,"beforeMount"),((R=k&&k.onVnodeMounted)||X)&&ip(()=>{R&&ot(R,y,w),X&&Lt(w,null,y,"mounted")},E),j&16&&!(k&&(k.innerHTML||k.textContent))){let re=f(m.firstChild,w,m,y,E,T,L);for(;re;){on=!0;const pe=re;re=re.nextSibling,o(pe)}}else j&8&&m.textContent!==w.children&&(on=!0,m.textContent=w.children)}return m.nextSibling},f=(m,w,y,E,T,L,U)=>{U=U||!!w.dynamicChildren;const k=w.children,K=k.length;for(let j=0;j<K;j++){const X=U?k[j]:k[j]=Et(k[j]);if(m)m=u(m,X,E,T,L,U);else{if(X.type===Os&&!X.children)continue;on=!0,n(null,X,y,null,E,T,ki(y),L)}}return m},p=(m,w,y,E,T,L)=>{const{slotScopeIds:U}=w;U&&(T=T?T.concat(U):U);const k=i(m),K=f(s(m),w,k,y,E,T,L);return K&&Ta(K)&&K.data==="]"?s(w.anchor=K):(on=!0,a(w.anchor=c("]"),k,K),K)},v=(m,w,y,E,T,L)=>{if(on=!0,w.el=null,L){const K=b(m);for(;;){const j=s(m);if(j&&j!==K)o(j);else break}}const U=s(m),k=i(m);return o(m),n(null,w,k,U,y,E,ki(k),T),U},b=m=>{let w=0;for(;m;)if(m=s(m),m&&Ta(m)&&(m.data==="["&&w++,m.data==="]")){if(w===0)return s(m);w--}return m};return[l,u]}const qe=ip;function Dw(t){return Ep(t)}function Mw(t){return Ep(t,Pw)}function Ep(t,e){const n=fv();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Ot,cloneNode:v,insertStaticContent:b}=t,m=(d,g,_,C=null,S=null,P=null,F=!1,x=null,D=!!g.dynamicChildren)=>{if(d===g)return;d&&!Ut(d,g)&&(C=q(d),yt(d,S,P,!0),d=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:A,ref:z,shapeFlag:$}=g;switch(A){case Os:w(d,g,_,C);break;case ut:y(d,g,_,C);break;case Bi:d==null&&E(g,_,C,F);break;case _t:re(d,g,_,C,S,P,F,x,D);break;default:$&1?U(d,g,_,C,S,P,F,x,D):$&6?pe(d,g,_,C,S,P,F,x,D):($&64||$&128)&&A.process(d,g,_,C,S,P,F,x,D,be)}z!=null&&S&&to(z,d&&d.ref,P,g||d,!g)},w=(d,g,_,C)=>{if(d==null)r(g.el=a(g.children),_,C);else{const S=g.el=d.el;g.children!==d.children&&l(S,g.children)}},y=(d,g,_,C)=>{d==null?r(g.el=c(g.children||""),_,C):g.el=d.el},E=(d,g,_,C)=>{[d.el,d.anchor]=b(d.children,g,_,C,d.el,d.anchor)},T=({el:d,anchor:g},_,C)=>{let S;for(;d&&d!==g;)S=f(d),r(d,_,C),d=S;r(g,_,C)},L=({el:d,anchor:g})=>{let _;for(;d&&d!==g;)_=f(d),s(d),d=_;s(g)},U=(d,g,_,C,S,P,F,x,D)=>{F=F||g.type==="svg",d==null?k(g,_,C,S,P,F,x,D):X(d,g,S,P,F,x,D)},k=(d,g,_,C,S,P,F,x)=>{let D,A;const{type:z,props:$,shapeFlag:W,transition:Z,patchFlag:he,dirs:Ce}=d;if(d.el&&v!==void 0&&he===-1)D=d.el=v(d.el);else{if(D=d.el=o(d.type,P,$&&$.is,$),W&8?u(D,d.children):W&16&&j(d.children,D,null,C,S,P&&z!=="foreignObject",F,x),Ce&&Lt(d,null,C,"created"),$){for(const Ie in $)Ie!=="value"&&!ls(Ie)&&i(D,Ie,null,$[Ie],P,d.children,C,S,M);"value"in $&&i(D,"value",null,$.value),(A=$.onVnodeBeforeMount)&&ot(A,C,d)}K(D,d,d.scopeId,F,C)}Ce&&Lt(d,null,C,"beforeMount");const ve=(!S||S&&!S.pendingBranch)&&Z&&!Z.persisted;ve&&Z.beforeEnter(D),r(D,g,_),((A=$&&$.onVnodeMounted)||ve||Ce)&&qe(()=>{A&&ot(A,C,d),ve&&Z.enter(D),Ce&&Lt(d,null,C,"mounted")},S)},K=(d,g,_,C,S)=>{if(_&&p(d,_),C)for(let P=0;P<C.length;P++)p(d,C[P]);if(S){let P=S.subTree;if(g===P){const F=S.vnode;K(d,F,F.scopeId,F.slotScopeIds,S.parent)}}},j=(d,g,_,C,S,P,F,x,D=0)=>{for(let A=D;A<d.length;A++){const z=d[A]=x?dn(d[A]):Et(d[A]);m(null,z,g,_,C,S,P,F,x)}},X=(d,g,_,C,S,P,F)=>{const x=g.el=d.el;let{patchFlag:D,dynamicChildren:A,dirs:z}=g;D|=d.patchFlag&16;const $=d.props||_e,W=g.props||_e;let Z;_&&On(_,!1),(Z=W.onVnodeBeforeUpdate)&&ot(Z,_,g,d),z&&Lt(g,d,_,"beforeUpdate"),_&&On(_,!0);const he=S&&g.type!=="foreignObject";if(A?ne(d.dynamicChildren,A,x,_,C,he,P):F||ht(d,g,x,null,_,C,he,P,!1),D>0){if(D&16)R(x,g,$,W,_,C,S);else if(D&2&&$.class!==W.class&&i(x,"class",null,W.class,S),D&4&&i(x,"style",$.style,W.style,S),D&8){const Ce=g.dynamicProps;for(let ve=0;ve<Ce.length;ve++){const Ie=Ce[ve],kt=$[Ie],cr=W[Ie];(cr!==kt||Ie==="value")&&i(x,Ie,kt,cr,S,d.children,_,C,M)}}D&1&&d.children!==g.children&&u(x,g.children)}else!F&&A==null&&R(x,g,$,W,_,C,S);((Z=W.onVnodeUpdated)||z)&&qe(()=>{Z&&ot(Z,_,g,d),z&&Lt(g,d,_,"updated")},C)},ne=(d,g,_,C,S,P,F)=>{for(let x=0;x<g.length;x++){const D=d[x],A=g[x],z=D.el&&(D.type===_t||!Ut(D,A)||D.shapeFlag&70)?h(D.el):_;m(D,A,z,null,C,S,P,F,!0)}},R=(d,g,_,C,S,P,F)=>{if(_!==C){for(const x in C){if(ls(x))continue;const D=C[x],A=_[x];D!==A&&x!=="value"&&i(d,x,A,D,F,g.children,S,P,M)}if(_!==_e)for(const x in _)!ls(x)&&!(x in C)&&i(d,x,_[x],null,F,g.children,S,P,M);"value"in C&&i(d,"value",_.value,C.value)}},re=(d,g,_,C,S,P,F,x,D)=>{const A=g.el=d?d.el:a(""),z=g.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:Z}=g;Z&&(x=x?x.concat(Z):Z),d==null?(r(A,_,C),r(z,_,C),j(g.children,_,z,S,P,F,x,D)):$>0&&$&64&&W&&d.dynamicChildren?(ne(d.dynamicChildren,W,_,S,P,F,x),(g.key!=null||S&&g===S.subTree)&&bp(d,g,!0)):ht(d,g,_,z,S,P,F,x,D)},pe=(d,g,_,C,S,P,F,x,D)=>{g.slotScopeIds=x,d==null?g.shapeFlag&512?S.ctx.activate(g,_,C,F,D):Kt(g,_,C,S,P,F,D):Re(d,g,D)},Kt=(d,g,_,C,S,P,F)=>{const x=d.component=Kw(d,C,S);if(Fo(d)&&(x.ctx.renderer=be),zw(x),x.asyncDep){if(S&&S.registerDep(x,Ee),!d.el){const D=x.subTree=$e(ut);y(null,D,g,_)}return}Ee(x,d,g,_,S,P,F)},Re=(d,g,_)=>{const C=g.component=d.component;if(tw(d,g,_))if(C.asyncDep&&!C.asyncResolved){me(C,g,_);return}else C.next=g,Xv(C.update),C.update();else g.component=d.component,g.el=d.el,C.vnode=g},Ee=(d,g,_,C,S,P,F)=>{const x=()=>{if(d.isMounted){let{next:z,bu:$,u:W,parent:Z,vnode:he}=d,Ce=z,ve;On(d,!1),z?(z.el=he.el,me(d,z,F)):z=he,$&&_r($),(ve=z.props&&z.props.onVnodeBeforeUpdate)&&ot(ve,Z,z,he),On(d,!0);const Ie=wa(d),kt=d.subTree;d.subTree=Ie,m(kt,Ie,h(kt.el),q(kt),d,S,P),z.el=Ie.el,Ce===null&&bl(d,Ie.el),W&&qe(W,S),(ve=z.props&&z.props.onVnodeUpdated)&&qe(()=>ot(ve,Z,z,he),S)}else{let z;const{el:$,props:W}=g,{bm:Z,m:he,parent:Ce}=d,ve=xs(g);if(On(d,!1),Z&&_r(Z),!ve&&(z=W&&W.onVnodeBeforeMount)&&ot(z,Ce,g),On(d,!0),$&&oe){const Ie=()=>{d.subTree=wa(d),oe($,d.subTree,d,S,null)};ve?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Ie()):Ie()}else{const Ie=d.subTree=wa(d);m(null,Ie,_,C,d,S,P),g.el=Ie.el}if(he&&qe(he,S),!ve&&(z=W&&W.onVnodeMounted)){const Ie=g;qe(()=>ot(z,Ce,Ie),S)}g.shapeFlag&256&&d.a&&qe(d.a,S),d.isMounted=!0,g=_=C=null}},D=d.effect=new ll(x,()=>Jd(d.update),d.scope),A=d.update=D.run.bind(D);A.id=d.uid,On(d,!0),A()},me=(d,g,_)=>{g.component=d;const C=d.vnode.props;d.vnode=g,d.next=null,Aw(d,g.props,C,_),Nw(d,g.children,_),Hr(),vl(void 0,d.update),qr()},ht=(d,g,_,C,S,P,F,x,D=!1)=>{const A=d&&d.children,z=d?d.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:Z}=g;if(W>0){if(W&128){zt(A,$,_,C,S,P,F,x,D);return}else if(W&256){ar(A,$,_,C,S,P,F,x,D);return}}Z&8?(z&16&&M(A,S,P),$!==A&&u(_,$)):z&16?Z&16?zt(A,$,_,C,S,P,F,x,D):M(A,S,P,!0):(z&8&&u(_,""),Z&16&&j($,_,C,S,P,F,x,D))},ar=(d,g,_,C,S,P,F,x,D)=>{d=d||vr,g=g||vr;const A=d.length,z=g.length,$=Math.min(A,z);let W;for(W=0;W<$;W++){const Z=g[W]=D?dn(g[W]):Et(g[W]);m(d[W],Z,_,null,S,P,F,x,D)}A>z?M(d,S,P,!0,!1,$):j(g,_,C,S,P,F,x,D,$)},zt=(d,g,_,C,S,P,F,x,D)=>{let A=0;const z=g.length;let $=d.length-1,W=z-1;for(;A<=$&&A<=W;){const Z=d[A],he=g[A]=D?dn(g[A]):Et(g[A]);if(Ut(Z,he))m(Z,he,_,null,S,P,F,x,D);else break;A++}for(;A<=$&&A<=W;){const Z=d[$],he=g[W]=D?dn(g[W]):Et(g[W]);if(Ut(Z,he))m(Z,he,_,null,S,P,F,x,D);else break;$--,W--}if(A>$){if(A<=W){const Z=W+1,he=Z<z?g[Z].el:C;for(;A<=W;)m(null,g[A]=D?dn(g[A]):Et(g[A]),_,he,S,P,F,x,D),A++}}else if(A>W)for(;A<=$;)yt(d[A],S,P,!0),A++;else{const Z=A,he=A,Ce=new Map;for(A=he;A<=W;A++){const ft=g[A]=D?dn(g[A]):Et(g[A]);ft.key!=null&&Ce.set(ft.key,A)}let ve,Ie=0;const kt=W-he+1;let cr=!1,Ku=0;const es=new Array(kt);for(A=0;A<kt;A++)es[A]=0;for(A=Z;A<=$;A++){const ft=d[A];if(Ie>=kt){yt(ft,S,P,!0);continue}let Dt;if(ft.key!=null)Dt=Ce.get(ft.key);else for(ve=he;ve<=W;ve++)if(es[ve-he]===0&&Ut(ft,g[ve])){Dt=ve;break}Dt===void 0?yt(ft,S,P,!0):(es[Dt-he]=A+1,Dt>=Ku?Ku=Dt:cr=!0,m(ft,g[Dt],_,null,S,P,F,x,D),Ie++)}const zu=cr?Lw(es):vr;for(ve=zu.length-1,A=kt-1;A>=0;A--){const ft=he+A,Dt=g[ft],Wu=ft+1<z?g[ft+1].el:C;es[A]===0?m(null,Dt,_,Wu,S,P,F,x,D):cr&&(ve<0||A!==zu[ve]?Pt(Dt,_,Wu,2):ve--)}}},Pt=(d,g,_,C,S=null)=>{const{el:P,type:F,transition:x,children:D,shapeFlag:A}=d;if(A&6){Pt(d.component.subTree,g,_,C);return}if(A&128){d.suspense.move(g,_,C);return}if(A&64){F.move(d,g,_,be);return}if(F===_t){r(P,g,_);for(let $=0;$<D.length;$++)Pt(D[$],g,_,C);r(d.anchor,g,_);return}if(F===Bi){T(d,g,_);return}if(C!==2&&A&1&&x)if(C===0)x.beforeEnter(P),r(P,g,_),qe(()=>x.enter(P),S);else{const{leave:$,delayLeave:W,afterLeave:Z}=x,he=()=>r(P,g,_),Ce=()=>{$(P,()=>{he(),Z&&Z()})};W?W(P,he,Ce):Ce()}else r(P,g,_)},yt=(d,g,_,C=!1,S=!1)=>{const{type:P,props:F,ref:x,children:D,dynamicChildren:A,shapeFlag:z,patchFlag:$,dirs:W}=d;if(x!=null&&to(x,null,_,d,!0),z&256){g.ctx.deactivate(d);return}const Z=z&1&&W,he=!xs(d);let Ce;if(he&&(Ce=F&&F.onVnodeBeforeUnmount)&&ot(Ce,g,d),z&6)V(d.component,_,C);else{if(z&128){d.suspense.unmount(_,C);return}Z&&Lt(d,null,g,"beforeUnmount"),z&64?d.type.remove(d,g,_,S,be,C):A&&(P!==_t||$>0&&$&64)?M(A,g,_,!1,!0):(P===_t&&$&384||!S&&z&16)&&M(D,g,_),C&&ya(d)}(he&&(Ce=F&&F.onVnodeUnmounted)||Z)&&qe(()=>{Ce&&ot(Ce,g,d),Z&&Lt(d,null,g,"unmounted")},_)},ya=d=>{const{type:g,el:_,anchor:C,transition:S}=d;if(g===_t){I(_,C);return}if(g===Bi){L(d);return}const P=()=>{s(_),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(d.shapeFlag&1&&S&&!S.persisted){const{leave:F,delayLeave:x}=S,D=()=>F(_,P);x?x(d.el,P,D):D()}else P()},I=(d,g)=>{let _;for(;d!==g;)_=f(d),s(d),d=_;s(g)},V=(d,g,_)=>{const{bum:C,scope:S,update:P,subTree:F,um:x}=d;C&&_r(C),S.stop(),P&&(P.active=!1,yt(F,d,g,_)),x&&qe(x,g),qe(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},M=(d,g,_,C=!1,S=!1,P=0)=>{for(let F=P;F<d.length;F++)yt(d[F],g,_,C,S)},q=d=>d.shapeFlag&6?q(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ye=(d,g,_)=>{d==null?g._vnode&&yt(g._vnode,null,null,!0):m(g._vnode||null,d,g,null,null,null,_),Qi(),g._vnode=d},be={p:m,um:yt,m:Pt,r:ya,mt:Kt,mc:j,pc:ht,pbc:ne,n:q,o:t};let ce,oe;return e&&([ce,oe]=e(be)),{render:ye,hydrate:ce,createApp:Ow(ye,ce)}}function On({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function bp(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=dn(s[i]),a.el=o.el),n||bp(o,a))}}function Lw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Uw=t=>t.__isTeleport,Tp="components";function Al(t,e){return Bw(Tp,t,!0,e)||t}const Fw=Symbol();function Bw(t,e,n=!0,r=!1){const s=bt||Be;if(s){const i=s.type;if(t===Tp){const a=yc(i);if(a&&(a===e||a===Vt(e)||a===Do(Vt(e))))return i}const o=ph(s[t]||i[t],e)||ph(s.appContext[t],e);return!o&&r?i:o}}function ph(t,e){return t&&(t[e]||t[Vt(e)]||t[Do(Vt(e))])}const _t=Symbol(void 0),Os=Symbol(void 0),ut=Symbol(void 0),Bi=Symbol(void 0),gs=[];let _n=null;function St(t=!1){gs.push(_n=t?null:[])}function Ip(){gs.pop(),_n=gs[gs.length-1]||null}let Ps=1;function gh(t){Ps+=t}function Sp(t){return t.dynamicChildren=Ps>0?_n||vr:null,Ip(),Ps>0&&_n&&_n.push(t),t}function Tr(t,e,n,r,s,i){return Sp(Ue(t,e,n,r,s,i,!0))}function ms(t,e,n,r,s){return Sp($e(t,e,n,r,s,!0))}function Ds(t){return t?t.__v_isVNode===!0:!1}function Ut(t,e){return t.type===e.type&&t.key===e.key}const Vo="__vInternal",Cp=({key:t})=>t!=null?t:null,$i=({ref:t,ref_key:e,ref_for:n})=>t!=null?Pe(t)||Le(t)||ee(t)?{i:bt,r:t,k:e,f:!!n}:t:null;function Ue(t,e=null,n=null,r=0,s=null,i=t===_t?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cp(e),ref:e&&$i(e),scopeId:Uo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Rl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),Ps>0&&!o&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const $e=$w;function $w(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Fw)&&(t=ut),Ds(t)){const a=Sn(t,e,!0);return n&&Rl(a,n),a}if(Yw(t)&&(t=t.__vccOpts),e){e=Ap(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=xo(a)),De(c)&&(zd(c)&&!Y(c)&&(c=Ye({},c)),e.style=No(c))}const o=Pe(t)?1:nw(t)?128:Uw(t)?64:De(t)?4:ee(t)?2:0;return Ue(t,e,n,r,s,o,i,!0)}function Ap(t){return t?zd(t)||Vo in t?Ye({},t):t:null}function Sn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Vw(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Cp(a),ref:e&&e.ref?n&&s?Y(s)?s.concat($i(e)):[s,$i(e)]:$i(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sn(t.ssContent),ssFallback:t.ssFallback&&Sn(t.ssFallback),el:t.el,anchor:t.anchor}}function kl(t=" ",e=0){return $e(Os,null,t,e)}function mh(t="",e=!1){return e?(St(),ms(ut,null,t)):$e(ut,null,t)}function Et(t){return t==null||typeof t=="boolean"?$e(ut):Y(t)?$e(_t,null,t.slice()):typeof t=="object"?dn(t):$e(Os,null,String(t))}function dn(t){return t.el===null||t.memo?t:Sn(t)}function Rl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Rl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Vo in e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[kl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xo([e.class,r.class]));else if(s==="style")e.style=No([e.style,r.style]);else if(Zs(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ot(t,e,n,r=null){It(t,e,7,[n,r])}function JN(t,e,n,r){let s;const i=n&&n[r];if(Y(t)||Pe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const gc=t=>t?kp(t)?jo(t)||t.proxy:gc(t.parent):null,no=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gc(t.parent),$root:t=>gc(t.root),$emit:t=>t.emit,$options:t=>pp(t),$forceUpdate:t=>()=>Jd(t.update),$nextTick:t=>yl.bind(t.proxy),$watch:t=>cw.bind(t)}),jw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==_e&&ue(r,e))return o[e]=1,r[e];if(s!==_e&&ue(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,i[e];if(n!==_e&&ue(n,e))return o[e]=4,n[e];fc&&(o[e]=0)}}const u=no[e];let h,f;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&ue(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ue(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==_e&&ue(s,e)?(s[e]=n,!0):r!==_e&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&ue(t,o)||e!==_e&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(r,o)||ue(no,o)||ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Hw=_p();let qw=0;function Kw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Hw,i={uid:qw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new dv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mp(r,s),emitsOptions:rp(r,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qv.bind(null,i),t.ce&&t.ce(i),i}let Be=null;const ti=()=>Be||bt,Rr=t=>{Be=t,t.scope.on()},qn=()=>{Be&&Be.scope.off(),Be=null};function kp(t){return t.vnode.shapeFlag&4}let Ms=!1;function zw(t,e=!1){Ms=e;const{props:n,children:r}=t.vnode,s=kp(t);Cw(t,n,s,e),Rw(t,r);const i=s?Ww(t,e):void 0;return Ms=!1,i}function Ww(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pl(new Proxy(t.ctx,jw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Xw(t):null;Rr(t),Hr();const i=wn(r,t,0,[t.props,s]);if(qr(),qn(),xd(i)){if(i.then(qn,qn),e)return i.then(o=>{mc(t,o,e)}).catch(o=>{ei(o,t,0)});t.asyncDep=i}else mc(t,i,e)}else Rp(t,e)}function mc(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Yd(e)),Rp(t,n)}let yh;function Rp(t,e,n){const r=t.type;if(!t.render){if(!e&&yh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ye(Ye({isCustomElement:i,delimiters:a},o),c);r.render=yh(s,l)}}t.render=r.render||Ot}Rr(t),Hr(),Ew(t),qr(),qn()}function Gw(t){return new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}})}function Xw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Gw(t))},slots:t.slots,emit:t.emit,expose:e}}function jo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yd(pl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in no)return no[n](t)}}))}function yc(t){return ee(t)&&t.displayName||t.name}function Yw(t){return ee(t)&&"__vccOpts"in t}const ze=(t,e)=>zv(t,e,Ms);function Tt(t,e,n){const r=arguments.length;return r===2?De(e)&&!Y(e)?Ds(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ds(n)&&(n=[n]),$e(t,e,n))}const Qw="3.2.33",Jw="http://www.w3.org/2000/svg",Ln=typeof document!="undefined"?document:null,vh=Ln&&Ln.createElement("template"),Zw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ln.createElementNS(Jw,t):Ln.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ln.createTextNode(t),createComment:t=>Ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vh.innerHTML=r?`<svg>${t}</svg>`:t;const a=vh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function e_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function t_(t,e,n){const r=t.style,s=Pe(n);if(n&&!s){for(const i in n)vc(r,i,n[i]);if(e&&!Pe(e))for(const i in e)n[i]==null&&vc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const wh=/\s*!important$/;function vc(t,e,n){if(Y(n))n.forEach(r=>vc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=n_(t,e);wh.test(n)?t.setProperty(jr(r),n.replace(wh,""),"important"):t[r]=n}}const _h=["Webkit","Moz","ms"],Ia={};function n_(t,e){const n=Ia[e];if(n)return n;let r=Vt(e);if(r!=="filter"&&r in t)return Ia[e]=r;r=Do(r);for(let s=0;s<_h.length;s++){const i=_h[s]+r;if(i in t)return Ia[e]=i}return e}const Eh="http://www.w3.org/1999/xlink";function r_(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Eh,e.slice(6,e.length)):t.setAttributeNS(Eh,e,n);else{const i=tv(e);n==null||i&&!kd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function s_(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=kd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Np,i_]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let wc=0;const o_=Promise.resolve(),a_=()=>{wc=0},c_=()=>wc||(o_.then(a_),wc=Np());function pr(t,e,n,r){t.addEventListener(e,n,r)}function l_(t,e,n,r){t.removeEventListener(e,n,r)}function u_(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=h_(e);if(r){const l=i[e]=f_(r,s);pr(t,a,l,c)}else o&&(l_(t,a,o,c),i[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function h_(t){let e;if(bh.test(t)){e={};let n;for(;n=t.match(bh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[jr(t.slice(2)),e]}function f_(t,e){const n=r=>{const s=r.timeStamp||Np();(i_||s>=n.attached-1)&&It(d_(r,n.value),e,5,[r])};return n.value=t,n.attached=c_(),n}function d_(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Th=/^on[a-z]/,p_=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?e_(t,r,s):e==="style"?t_(t,n,r):Zs(e)?sl(e)||u_(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):g_(t,e,r,s))?s_(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),r_(t,e,r,s))};function g_(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Th.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Th.test(e)&&Pe(n)?!1:e in t}const an="transition",ts="animation",Nl=(t,{slots:e})=>Tt(ap,m_(t),e);Nl.displayName="Transition";const xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Nl.props=Ye({},ap.props,xp);const Pn=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ih=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function m_(t){const e={};for(const R in t)R in xp||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,v=y_(s),b=v&&v[0],m=v&&v[1],{onBeforeEnter:w,onEnter:y,onEnterCancelled:E,onLeave:T,onLeaveCancelled:L,onBeforeAppear:U=w,onAppear:k=y,onAppearCancelled:K=E}=e,j=(R,re,pe)=>{lr(R,re?u:a),lr(R,re?l:o),pe&&pe()},X=(R,re)=>{lr(R,p),lr(R,f),re&&re()},ne=R=>(re,pe)=>{const Kt=R?k:y,Re=()=>j(re,R,pe);Pn(Kt,[re,Re]),Sh(()=>{lr(re,R?c:i),cn(re,R?u:a),Ih(Kt)||Ch(re,r,b,Re)})};return Ye(e,{onBeforeEnter(R){Pn(w,[R]),cn(R,i),cn(R,o)},onBeforeAppear(R){Pn(U,[R]),cn(R,c),cn(R,l)},onEnter:ne(!1),onAppear:ne(!0),onLeave(R,re){const pe=()=>X(R,re);cn(R,h),__(),cn(R,f),Sh(()=>{lr(R,h),cn(R,p),Ih(T)||Ch(R,r,m,pe)}),Pn(T,[R,pe])},onEnterCancelled(R){j(R,!1),Pn(E,[R])},onAppearCancelled(R){j(R,!0),Pn(K,[R])},onLeaveCancelled(R){X(R),Pn(L,[R])}})}function y_(t){if(t==null)return null;if(De(t))return[Sa(t.enter),Sa(t.leave)];{const e=Sa(t);return[e,e]}}function Sa(t){return Cs(t)}function cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function lr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Sh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let v_=0;function Ch(t,e,n,r){const s=t._endId=++v_,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=w_(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function w_(t,e){const n=window.getComputedStyle(t),r=v=>(n[v]||"").split(", "),s=r(an+"Delay"),i=r(an+"Duration"),o=Ah(s,i),a=r(ts+"Delay"),c=r(ts+"Duration"),l=Ah(a,c);let u=null,h=0,f=0;e===an?o>0&&(u=an,h=o,f=i.length):e===ts?l>0&&(u=ts,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?an:ts:null,f=u?u===an?i.length:c.length:0);const p=u===an&&/\b(transform|all)(,|$)/.test(n[an+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:p}}function Ah(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>kh(n)+kh(t[r])))}function kh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function __(){return document.body.offsetHeight}const Rh=t=>{const e=t.props["onUpdate:modelValue"];return Y(e)?n=>_r(e,n):e};function E_(t){t.target.composing=!0}function Nh(t){const e=t.target;e.composing&&(e.composing=!1,b_(e,"input"))}function b_(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ZN={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Rh(s);const i=r||s.props&&s.props.type==="number";pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Cs(a)),t._assign(a)}),n&&pr(t,"change",()=>{t.value=t.value.trim()}),e||(pr(t,"compositionstart",E_),pr(t,"compositionend",Nh),pr(t,"change",Nh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Rh(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Cs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Op=Ye({patchProp:p_},Zw);let ys,xh=!1;function T_(){return ys||(ys=Dw(Op))}function I_(){return ys=xh?ys:Mw(Op),xh=!0,ys}const S_=(...t)=>{const e=T_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pp(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},C_=(...t)=>{const e=I_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pp(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function Pp(t){return Pe(t)?document.querySelector(t):t}const A_=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,k_=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,R_=/^["{[]|^-?[0-9][0-9.]{0,14}$/;function N_(t,e){if(!(t==="__proto__"||t==="constructor"))return e}function x_(t){if(typeof t!="string")return t;const e=t.toLowerCase();if(e==="true")return!0;if(e==="false")return!1;if(e==="null")return null;if(e==="nan")return NaN;if(e==="infinity")return 1/0;if(e!=="undefined"){if(!R_.test(t))return t;try{return A_.test(t)||k_.test(t)?JSON.parse(t,N_):JSON.parse(t)}catch{return t}}}const O_=/#/g,P_=/&/g,D_=/=/g,Dp=/\+/g,M_=/%5B/gi,L_=/%5D/gi,U_=/%5E/gi,F_=/%60/gi,B_=/%7B/gi,$_=/%7C/gi,V_=/%7D/gi,j_=/%20/gi;function H_(t){return encodeURI(""+t).replace($_,"|").replace(M_,"[").replace(L_,"]")}function _c(t){return H_(t).replace(Dp,"%2B").replace(j_,"+").replace(O_,"%23").replace(P_,"%26").replace(F_,"`").replace(B_,"{").replace(V_,"}").replace(U_,"^")}function Ca(t){return _c(t).replace(D_,"%3D")}function Mp(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function q_(t){return Mp(t.replace(Dp," "))}function K_(t=""){const e={};t[0]==="?"&&(t=t.substr(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=Mp(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=q_(r[2]||"");e[s]?Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]:e[s]=i}return e}function z_(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ca(t)}=${_c(n)}`).join("&"):`${Ca(t)}=${_c(e)}`:Ca(t)}function W_(t){return Object.keys(t).map(e=>z_(e,t[e])).join("&")}const G_=/^\w+:(\/\/)?/,X_=/^\/\/[^/]+/;function Lp(t,e=!1){return G_.test(t)||e&&X_.test(t)}const Y_=/\/$|\/\?/;function Ec(t="",e=!1){return e?Y_.test(t):t.endsWith("/")}function Up(t="",e=!1){if(!e)return(Ec(t)?t.slice(0,-1):t)||"/";if(!Ec(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length?`?${r.join("?")}`:"")}function Q_(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Ec(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length?`?${r.join("?")}`:"")}function J_(t=""){return t.startsWith("/")}function Z_(t=""){return(J_(t)?t.substr(1):t)||"/"}function eE(t,e){if(Fp(e))return t;const n=Up(e);return t.startsWith(n)?t:xl(n,t)}function Oh(t,e){if(Fp(e))return t;const n=Up(e);return t.startsWith(n)?t.substr(n.length)||"/":t}function tE(t,e){const n=Bp(t),r=Ae(Ae({},K_(n.search)),e);return n.search=W_(r),rE(n)}function Fp(t){return!t||t==="/"}function nE(t){return t&&t!=="/"}function xl(t,...e){let n=t||"";for(const r of e.filter(nE))n=n?Q_(n)+Z_(r):r;return n}function Bp(t="",e){if(!Lp(t,!0))return e?Bp(e+t):Ph(t);const[n="",r,s=""]=(t.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",o=""]=(s.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=Ph(o);return{protocol:n,auth:r?r.substr(0,r.length-1):"",host:i,pathname:a,search:c,hash:l}}function Ph(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function rE(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class sE extends Error{constructor(){super(...arguments),this.name="FetchError"}}function iE(t,e,n){let r="";t&&n&&(r=`${n.status} ${n.statusText} (${t.toString()})`),e&&(r=`${e.message} (${r})`);const s=new sE(r);return Object.defineProperty(s,"request",{get(){return t}}),Object.defineProperty(s,"response",{get(){return n}}),Object.defineProperty(s,"data",{get(){return n&&n._data}}),s}const oE=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Dh(t="GET"){return oE.has(t.toUpperCase())}function aE(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const cE=new Set(["image/svg","application/xml","application/xhtml","application/html"]),lE=/^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;function uE(t=""){if(!t)return"json";const e=t.split(";").shift();return lE.test(e)?"json":cE.has(e)||e.startsWith("text/")?"text":"blob"}const hE=new Set([408,409,425,429,500,502,503,504]);function $p(t){const{fetch:e,Headers:n}=t;function r(o){if(o.options.retry!==!1){const c=typeof o.options.retry=="number"?o.options.retry:Dh(o.options.method)?0:1,l=o.response&&o.response.status||500;if(c>0&&hE.has(l))return s(o.request,vt(Ae({},o.options),{retry:c-1}))}const a=iE(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(a,s),a}const s=async function(a,c={}){const l={request:a,options:Ae(Ae({},t.defaults),c),response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=eE(l.request,l.options.baseURL)),l.options.params&&(l.request=tE(l.request,l.options.params)),l.options.body&&Dh(l.options.method)&&aE(l.options.body)&&(l.options.body=JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await e(l.request,l.options).catch(async h=>(l.error=h,l.options.onRequestError&&await l.options.onRequestError(l),r(l)));const u=(l.options.parseResponse?"json":l.options.responseType)||uE(l.response.headers.get("content-type")||"");if(u==="json"){const h=await l.response.text(),f=l.options.parseResponse||x_;l.response._data=f(h)}else l.response._data=await l.response[u]();return l.options.onResponse&&await l.options.onResponse(l),l.response.ok||l.options.onResponseError&&await l.options.onResponseError(l),l.response.ok?l.response:r(l)},i=function(a,c){return s(a,c).then(l=>l._data)};return i.raw=s,i.create=(o={})=>$p(vt(Ae({},t),{defaults:Ae(Ae({},t.defaults),o)})),i}const Vp=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("unable to locate global object")}(),fE=Vp.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),dE=Vp.Headers,pE=$p({fetch:fE,Headers:dE}),gE=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},ro=gE().app,mE=()=>ro.baseURL,yE=()=>ro.buildAssetsDir,vE=(...t)=>xl(wE(),yE(),...t),wE=(...t)=>{const e=ro.cdnURL||ro.baseURL;return t.length?xl(e,...t):e};function bc(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?bc(s,e,i):typeof s=="function"&&(e[i]=s)}return e}function _E(t,e){return t.reduce((n,r)=>n.then(()=>r.apply(void 0,e)),Promise.resolve(null))}function EE(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}class bE{constructor(){this._hooks={},this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];){const i=this._deprecatedHooks[e];typeof i=="string"?s={to:i}:s=i,e=s.to}return s&&(s.message?console.warn(s.message):console.warn(`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:""))),this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=null)}}hookOnce(e,n){let r,s=(...i)=>(r(),r=null,s=null,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=n}deprecateHooks(e){Object.assign(this._deprecatedHooks,e)}addHooks(e){const n=bc(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{r.splice(0,r.length).forEach(s=>s())}}removeHooks(e){const n=bc(e);for(const r in n)this.removeHook(r,n[r])}callHook(e,...n){return _E(this._hooks[e]||[],n)}callHookParallel(e,...n){return EE(this._hooks[e]||[],n)}callHookWith(e,n,...r){return e(this._hooks[n]||[],r)}}function TE(){return new bE}function IE(){let t=null,e=!1;const n=r=>{if(t&&t!==r)throw new Error("Context conflict")};return{use:()=>t,set:(r,s)=>{s||n(r),t=r,e=!0},unset:()=>{t=null,e=!1},call:(r,s)=>{n(r),t=r;try{return s()}finally{e||(t=null)}},async callAsync(r,s){t=r;const i=()=>{t=r},o=()=>t===r?i:void 0;Uh.add(o);try{const a=s();return e||(t=null),await a}finally{Uh.delete(o)}}}}function SE(){const t={};return{get(e){return t[e]||(t[e]=IE()),t[e],t[e]}}}const so=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof global!="undefined"?global:typeof window!="undefined"?window:{},Mh="__unctx__",CE=so[Mh]||(so[Mh]=SE()),AE=t=>CE.get(t),Lh="__unctx_async_handlers__",Uh=so[Lh]||(so[Lh]=new Set);function as(t,e={}){const n=function(){};n.prototype.name=t;const r={};return new Proxy(n,{get(s,i){return i==="caller"?null:i==="__createMock__"?as:i in e?e[i]:r[i]=r[i]||as(`${t}.${i.toString()}`)},apply(s,i,o){return as(`${t}()`)},construct(s,i,o){return as(`[${t}]`)},enumerate(s){return[]}})}var kE=as("mock");function Ri(t){return console.warn(t),kE}const RE=new Set(["store","spa","fetchCounters"]),NE=new Set(["isHMR","base","payload","from","next","error","redirect","redirected","enablePreview","$preview","beforeNuxtRender","beforeSerialize"]),xE=new Set(["req","res","ssrContext"]),OE=["route","params","query"],Fh={isClient:!0,isServer:!1,isDev:!1,isStatic:void 0,target:"server",modern:!1},PE=t=>{t._legacyContext=new Proxy(t,{get(e,n){if(RE.has(n))return Ri(`Accessing ${n} is not supported in Nuxt 3.`);if(NE.has(n))return Ri(`Accessing ${n} is not yet supported in Nuxt 3.`);if(OE.includes(n)){if(!("$router"in t))return Ri("vue-router is not being used in this project.");switch(n){case"route":return e.$router.currentRoute.value;case"params":case"query":return e.$router.currentRoute.value[n]}}if(n==="$config"||n==="env")return qp();if(n in Fh)return Fh[n];if(!xE.has(n))return n==="ssrContext"?e._legacyContext:e.ssrContext&&n in e.ssrContext?e.ssrContext[n]:n==="nuxt"?e.payload:n==="nuxtState"?e.payload.data:n in t.vueApp?t.vueApp[n]:n in t?t[n]:Ri(`Accessing ${n} is not supported in Nuxt3.`)}}),t.hook("app:created",()=>{const e=new Proxy(t.vueApp,{get(n,r){return["$root","constructor"].includes(r)?e:n[r]||t[r]}});window[`$${t.globalName}`]=e})},jp=AE("nuxt-app"),Hp="__nuxt_plugin";function DE(t){const e=Ae({provide:void 0,globalName:"nuxt",payload:Ft(Ae({data:{},state:{},_errors:{}},window.__NUXT__)),isHydrating:!0,_asyncDataPromises:{}},t);e.hooks=TE(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(s,i)=>{const o="$"+s;Ni(e,o,i),Ni(e.vueApp.config.globalProperties,o,i)},Ni(e.vueApp,"$nuxt",e),Ni(e.vueApp.config.globalProperties,"$nuxt",e),e.ssrContext&&(e.ssrContext.nuxt=e);const n=Ft(e.payload.config),r=new Proxy(n,{get(s,i){var o;return i==="public"?s.public:(o=s[i])!=null?o:s.public[i]},set(s,i,o){return i==="public"||i==="app"?!1:(s[i]=o,s.public[i]=o,!0)}});return e.provide("config",r),e}async function ME(t,e){if(typeof e!="function")return;const{provide:n}=await Un(t,e,[t])||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}async function LE(t,e){for(const n of e)await ME(t,n)}function UE(t){let e=!1;const n=t.map(r=>typeof r!="function"?()=>{}:FE(r)?(e=!0,s=>r(s._legacyContext,s.provide)):r);return e&&n.unshift(PE),n}function Ol(t){return t[Hp]=!0,t}function FE(t){return!t[Hp]}function Un(t,e,n){const r=()=>n?e(...n):e();return jp.set(t),r()}function At(){const t=ti();if(!t){const e=jp.use();if(!e)throw new Error("nuxt instance unavailable");return e}return t.appContext.app.$nuxt}function qp(){return At().$config}function Ni(t,e,n){Object.defineProperty(t,e,{get:()=>n})}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Kr=t=>Kp?Symbol(t):"_vr_"+t,BE=Kr("rvlm"),Bh=Kr("rvd"),Pl=Kr("r"),zp=Kr("rl"),Tc=Kr("rvl"),gr=typeof window!="undefined";function $E(t){return t.__esModule||Kp&&t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Aa(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const vs=()=>{},VE=/\/$/,jE=t=>t.replace(VE,"");function ka(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=zE(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function HE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $h(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Nr(e.matched[r],n.matched[s])&&Wp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Nr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!KE(t[n],e[n]))return!1;return!0}function KE(t,e){return Array.isArray(t)?Vh(t,e):Array.isArray(e)?Vh(e,t):t===e}function Vh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ls;(function(t){t.pop="pop",t.push="push"})(Ls||(Ls={}));var ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ws||(ws={}));function WE(t){if(!t)if(gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jE(t)}const GE=/^[^#]+#/;function XE(t,e){return t.replace(GE,"#")+e}function YE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ho=()=>({left:window.pageXOffset,top:window.pageYOffset});function QE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=YE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jh(t,e){return(history.state?history.state.position-e:-1)+t}const Ic=new Map;function JE(t,e){Ic.set(t,e)}function ZE(t){const e=Ic.get(t);return Ic.delete(t),e}let e0=()=>location.protocol+"//"+location.host;function Gp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),$h(c,"")}return $h(n,t)+r+s}function t0(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Gp(t,location),v=n.value,b=e.value;let m=0;if(f){if(n.value=p,e.value=f,o&&o===v){o=null;return}m=b?f.position-b.position:0}else r(p);s.forEach(w=>{w(n.value,v,{delta:m,type:Ls.pop,direction:m?m>0?ws.forward:ws.back:ws.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return i.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(we({},f.state,{scroll:Ho()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Hh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ho():null}}function n0(t){const{history:e,location:n}=window,r={value:Gp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:e0()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=we({},e.state,Hh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=we({},s.value,e.state,{forward:c,scroll:Ho()});i(u.current,u,!0);const h=we({},Hh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function r0(t){t=WE(t);const e=n0(t),n=t0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:XE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function s0(t){return typeof t=="string"||t&&typeof t=="object"}function Xp(t){return typeof t=="string"||typeof t=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yp=Kr("nf");var qh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qh||(qh={}));function xr(t,e){return we(new Error,{type:t,[Yp]:!0},e)}function un(t,e){return t instanceof Error&&Yp in t&&(e==null||!!(t.type&e))}const Kh="[^/]+?",i0={sensitive:!1,strict:!1,start:!0,end:!0},o0=/[.+*?^${}()[\]/\\]/g;function a0(t,e){const n=we({},i0,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(o0,"\\$&"),p+=40;else if(f.type===1){const{value:v,repeatable:b,optional:m,regexp:w}=f;i.push({name:v,repeatable:b,optional:m});const y=w||Kh;if(y!==Kh){p+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+T.message)}}let E=b?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(E=m&&l.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,p+=20,m&&(p+=-8),b&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",v=i[f-1];h[v.name]=p&&v.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:b,optional:m}=p,w=v in l?l[v]:"";if(Array.isArray(w)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=Array.isArray(w)?w.join("/"):w;if(!y)if(m)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=y}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function c0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function l0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=c0(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const u0={type:0,value:""},h0=/[a-zA-Z0-9_]/;function f0(t){if(!t)return[[]];if(t==="/")return[[u0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:h0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function d0(t,e,n){const r=a0(f0(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function p0(t,e){const n=[],r=new Map;e=Wh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,v=m0(u);v.aliasOf=f&&f.record;const b=Wh(e,u),m=[v];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of E)m.push(we({},v,{components:f?f.record.components:v.components,path:T,aliasOf:f?f.record:v}))}let w,y;for(const E of m){const{path:T}=E;if(h&&T[0]!=="/"){const L=h.record.path,U=L[L.length-1]==="/"?"":"/";E.path=h.record.path+(T&&U+T)}if(w=d0(E,h,b),f?f.alias.push(w):(y=y||w,y!==w&&y.alias.push(w),p&&u.name&&!zh(w)&&o(u.name)),"children"in v){const L=v.children;for(let U=0;U<L.length;U++)i(L[U],w,f&&f.children[U])}f=f||w,c(w)}return y?()=>{o(y)}:vs}function o(u){if(Xp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&l0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!zh(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},v,b;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw xr(1,{location:u});b=f.record.name,p=we(g0(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params),v=f.stringify(p)}else if("path"in u)v=u.path,f=n.find(y=>y.re.test(v)),f&&(p=f.parse(v),b=f.record.name);else{if(f=h.name?r.get(h.name):n.find(y=>y.re.test(h.path)),!f)throw xr(1,{location:u,currentLocation:h});b=f.record.name,p=we({},h.params,u.params),v=f.stringify(p)}const m=[];let w=f;for(;w;)m.unshift(w.record),w=w.parent;return{name:b,path:v,params:p,matched:m,meta:v0(m)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function g0(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function m0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:y0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function y0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function zh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function v0(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Wh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Qp(t,e){return e.children.some(n=>n===t||Qp(t,n))}const Jp=/#/g,w0=/&/g,_0=/\//g,E0=/=/g,b0=/\?/g,Zp=/\+/g,T0=/%5B/g,I0=/%5D/g,eg=/%5E/g,S0=/%60/g,tg=/%7B/g,C0=/%7C/g,ng=/%7D/g,A0=/%20/g;function Dl(t){return encodeURI(""+t).replace(C0,"|").replace(T0,"[").replace(I0,"]")}function k0(t){return Dl(t).replace(tg,"{").replace(ng,"}").replace(eg,"^")}function Sc(t){return Dl(t).replace(Zp,"%2B").replace(A0,"+").replace(Jp,"%23").replace(w0,"%26").replace(S0,"`").replace(tg,"{").replace(ng,"}").replace(eg,"^")}function R0(t){return Sc(t).replace(E0,"%3D")}function N0(t){return Dl(t).replace(Jp,"%23").replace(b0,"%3F")}function x0(t){return t==null?"":N0(t).replace(_0,"%2F")}function io(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function O0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Zp," "),o=i.indexOf("="),a=io(o<0?i:i.slice(0,o)),c=o<0?null:io(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Gh(t){let e="";for(let n in t){const r=t[n];if(n=R0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Sc(i)):[r&&Sc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function P0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ns(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(xr(4,{from:n,to:e})):h instanceof Error?a(h):s0(h)?a(xr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ra(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(D0(a)){const l=(a.__vccOpts||a)[e];l&&s.push(pn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=$E(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&pn(f,n,r,i,o)()}))}}return s}function D0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xh(t){const e=Qt(Pl),n=Qt(zp),r=ze(()=>e.resolve(us(t.to))),s=ze(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Nr.bind(null,u));if(f>-1)return f;const p=Yh(c[l-2]);return l>1&&Yh(u)===p&&h[h.length-1].path!==p?h.findIndex(Nr.bind(null,c[l-2])):f}),i=ze(()=>s.value>-1&&F0(n.params,r.value.params)),o=ze(()=>s.value>-1&&s.value===n.matched.length-1&&Wp(n.params,r.value.params));function a(c={}){return U0(c)?e[us(t.replace)?"replace":"push"](us(t.to)).catch(vs):Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const M0=mt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xh,setup(t,{slots:e}){const n=Ft(Xh(t)),{options:r}=Qt(Pl),s=ze(()=>({[Qh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Tt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),L0=M0;function U0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function F0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Yh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qh=(t,e,n)=>t!=null?t:e!=null?e:n,B0=mt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Qt(Tc),s=ze(()=>t.route||r.value),i=Qt(Bh,0),o=ze(()=>s.value.matched[i]);ds(Bh,i+1),ds(BE,o),ds(Tc,s);const a=oc();return ps(()=>[a.value,o.value,t.name],([c,l,u],[h,f,p])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Nr(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Jh(n.default,{Component:u,route:c});const f=l.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=Tt(u,we({},p,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Jh(n.default,{Component:b,route:c})||b}}});function Jh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rg=B0;function $0(t){const e=p0(t.routes,t),n=t.parseQuery||O0,r=t.stringifyQuery||Gh,s=t.history,i=ns(),o=ns(),a=ns(),c=ac(ln);let l=ln;gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Aa.bind(null,I=>""+I),h=Aa.bind(null,x0),f=Aa.bind(null,io);function p(I,V){let M,q;return Xp(I)?(M=e.getRecordMatcher(I),q=V):q=I,e.addRoute(q,M)}function v(I){const V=e.getRecordMatcher(I);V&&e.removeRoute(V)}function b(){return e.getRoutes().map(I=>I.record)}function m(I){return!!e.getRecordMatcher(I)}function w(I,V){if(V=we({},V||c.value),typeof I=="string"){const oe=ka(n,I,V.path),d=e.resolve({path:oe.path},V),g=s.createHref(oe.fullPath);return we(oe,d,{params:f(d.params),hash:io(oe.hash),redirectedFrom:void 0,href:g})}let M;if("path"in I)M=we({},I,{path:ka(n,I.path,V.path).path});else{const oe=we({},I.params);for(const d in oe)oe[d]==null&&delete oe[d];M=we({},I,{params:h(I.params)}),V.params=h(V.params)}const q=e.resolve(M,V),ye=I.hash||"";q.params=u(f(q.params));const be=HE(r,we({},I,{hash:k0(ye),path:q.path})),ce=s.createHref(be);return we({fullPath:be,hash:ye,query:r===Gh?P0(I.query):I.query||{}},q,{redirectedFrom:void 0,href:ce})}function y(I){return typeof I=="string"?ka(n,I,c.value.path):we({},I)}function E(I,V){if(l!==I)return xr(8,{from:V,to:I})}function T(I){return k(I)}function L(I){return T(we(y(I),{replace:!0}))}function U(I){const V=I.matched[I.matched.length-1];if(V&&V.redirect){const{redirect:M}=V;let q=typeof M=="function"?M(I):M;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=y(q):{path:q},q.params={}),we({query:I.query,hash:I.hash,params:I.params},q)}}function k(I,V){const M=l=w(I),q=c.value,ye=I.state,be=I.force,ce=I.replace===!0,oe=U(M);if(oe)return k(we(y(oe),{state:ye,force:be,replace:ce}),V||M);const d=M;d.redirectedFrom=V;let g;return!be&&qE(r,q,M)&&(g=xr(16,{to:d,from:q}),ar(q,q,!0,!1)),(g?Promise.resolve(g):j(d,q)).catch(_=>un(_)?un(_,2)?_:ht(_):Ee(_,d,q)).then(_=>{if(_){if(un(_,2))return k(we(y(_.to),{state:ye,force:be,replace:ce}),V||d)}else _=ne(d,q,!0,ce,ye);return X(d,q,_),_})}function K(I,V){const M=E(I,V);return M?Promise.reject(M):Promise.resolve()}function j(I,V){let M;const[q,ye,be]=V0(I,V);M=Ra(q.reverse(),"beforeRouteLeave",I,V);for(const oe of q)oe.leaveGuards.forEach(d=>{M.push(pn(d,I,V))});const ce=K.bind(null,I,V);return M.push(ce),ur(M).then(()=>{M=[];for(const oe of i.list())M.push(pn(oe,I,V));return M.push(ce),ur(M)}).then(()=>{M=Ra(ye,"beforeRouteUpdate",I,V);for(const oe of ye)oe.updateGuards.forEach(d=>{M.push(pn(d,I,V))});return M.push(ce),ur(M)}).then(()=>{M=[];for(const oe of I.matched)if(oe.beforeEnter&&!V.matched.includes(oe))if(Array.isArray(oe.beforeEnter))for(const d of oe.beforeEnter)M.push(pn(d,I,V));else M.push(pn(oe.beforeEnter,I,V));return M.push(ce),ur(M)}).then(()=>(I.matched.forEach(oe=>oe.enterCallbacks={}),M=Ra(be,"beforeRouteEnter",I,V),M.push(ce),ur(M))).then(()=>{M=[];for(const oe of o.list())M.push(pn(oe,I,V));return M.push(ce),ur(M)}).catch(oe=>un(oe,8)?oe:Promise.reject(oe))}function X(I,V,M){for(const q of a.list())q(I,V,M)}function ne(I,V,M,q,ye){const be=E(I,V);if(be)return be;const ce=V===ln,oe=gr?history.state:{};M&&(q||ce?s.replace(I.fullPath,we({scroll:ce&&oe&&oe.scroll},ye)):s.push(I.fullPath,ye)),c.value=I,ar(I,V,M,ce),ht()}let R;function re(){R||(R=s.listen((I,V,M)=>{const q=w(I),ye=U(q);if(ye){k(we(ye,{replace:!0}),q).catch(vs);return}l=q;const be=c.value;gr&&JE(jh(be.fullPath,M.delta),Ho()),j(q,be).catch(ce=>un(ce,12)?ce:un(ce,2)?(k(ce.to,q).then(oe=>{un(oe,20)&&!M.delta&&M.type===Ls.pop&&s.go(-1,!1)}).catch(vs),Promise.reject()):(M.delta&&s.go(-M.delta,!1),Ee(ce,q,be))).then(ce=>{ce=ce||ne(q,be,!1),ce&&(M.delta?s.go(-M.delta,!1):M.type===Ls.pop&&un(ce,20)&&s.go(-1,!1)),X(q,be,ce)}).catch(vs)}))}let pe=ns(),Kt=ns(),Re;function Ee(I,V,M){ht(I);const q=Kt.list();return q.length?q.forEach(ye=>ye(I,V,M)):console.error(I),Promise.reject(I)}function me(){return Re&&c.value!==ln?Promise.resolve():new Promise((I,V)=>{pe.add([I,V])})}function ht(I){return Re||(Re=!I,re(),pe.list().forEach(([V,M])=>I?M(I):V()),pe.reset()),I}function ar(I,V,M,q){const{scrollBehavior:ye}=t;if(!gr||!ye)return Promise.resolve();const be=!M&&ZE(jh(I.fullPath,0))||(q||!M)&&history.state&&history.state.scroll||null;return yl().then(()=>ye(I,V,be)).then(ce=>ce&&QE(ce)).catch(ce=>Ee(ce,I,V))}const zt=I=>s.go(I);let Pt;const yt=new Set;return{currentRoute:c,addRoute:p,removeRoute:v,hasRoute:m,getRoutes:b,resolve:w,options:t,push:T,replace:L,go:zt,back:()=>zt(-1),forward:()=>zt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Kt.add,isReady:me,install(I){const V=this;I.component("RouterLink",L0),I.component("RouterView",rg),I.config.globalProperties.$router=V,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>us(c)}),gr&&!Pt&&c.value===ln&&(Pt=!0,T(s.location).catch(ye=>{}));const M={};for(const ye in ln)M[ye]=ze(()=>c.value[ye]);I.provide(Pl,V),I.provide(zp,Ft(M)),I.provide(Tc,c);const q=I.unmount;yt.add(I),I.unmount=function(){yt.delete(I),yt.size<1&&(l=ln,R&&R(),R=null,c.value=ln,Pt=!1,Re=!1),q()}}}}function ur(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function V0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Nr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Nr(l,c))||s.push(c))}return[n,r,s]}const j0=(t,e)=>{const n=At(),r=qv(n.payload.state,t);if(r.value===void 0&&e){const s=e();if(Le(s))return n.payload.state[t]=s,s;r.value=s}return r},Us=()=>{const t=At();return j0("error",()=>t.payload.error)},Vi=t=>{const e=At(),n=Us(),r=typeof t=="string"?new Error(t):t;return e.callHook("app:error",r),n.value=n.value||r,r},H0=async(t={})=>{const e=At(),n=Us();e.callHook("app:error:cleared",t),t.redirect&&await e.$router.replace(t.redirect),n.value=null};class Zh extends Error{constructor(){super(...arguments),this.statusCode=500,this.statusMessage="H3Error"}}function q0(t){var n;if(t instanceof Zh)return t;const e=new Zh((n=t.message)!=null?n:t.statusMessage);return t.statusCode&&(e.statusCode=t.statusCode),t.statusMessage&&(e.statusMessage=t.statusMessage),t.data&&(e.data=t.data),e}const sg=()=>{var t;return(t=At())==null?void 0:t.$router},K0=()=>{try{if(At()._processingMiddleware)return!0}catch{return!0}return!1},e1=(t,e={})=>{if(t||(t="/"),K0())return t;const n=sg();return e.replace?n.replace(t):n.push(t)},z0=(...t)=>t.find(e=>e!==void 0),W0="noopener noreferrer";function G0(t){const e=t.componentName||"NuxtLink";return mt({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:r}){const s=sg(),i=ze(()=>n.to||n.href||""),o=ze(()=>n.external||n.target&&n.target!=="_self"?!0:typeof i.value=="object"?!1:i.value===""||Lp(i.value,!0));return()=>{var u,h,f;if(!o.value)return Tt(Al("RouterLink"),{to:i.value,activeClass:n.activeClass||t.activeClass,exactActiveClass:n.exactActiveClass||t.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue},r.default);const a=typeof i.value=="object"?(h=(u=s.resolve(i.value))==null?void 0:u.href)!=null?h:null:i.value||null,c=n.target||null,l=n.noRel?null:z0(n.rel,t.externalRelAttribute,a?W0:"")||null;return Tt("a",{href:a,rel:l,target:c},(f=r.default)==null?void 0:f.call(r))}}})}var X0=G0({componentName:"NuxtLink"});function en(t){const e=ee(t)?ze(t):t;At()._useHead(e)}const Na={};function Y0(t){for(const e in Na)t.vueApp.component(e,Na[e]),t.vueApp.component("Lazy"+e,Na[e])}var Q0=Object.defineProperty,ef=Object.getOwnPropertySymbols,J0=Object.prototype.hasOwnProperty,Z0=Object.prototype.propertyIsEnumerable,tf=(t,e,n)=>e in t?Q0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,eb=(t,e)=>{for(var n in e||(e={}))J0.call(e,n)&&tf(t,n,e[n]);if(ef)for(var n of ef(e))Z0.call(e,n)&&tf(t,n,e[n]);return t},tb="usehead",nf="head:count",xa="data-head-attrs",nb=(t,e,n)=>{const r=n.createElement(t);for(const s of Object.keys(e)){let i=e[s];s==="key"||i===!1||(s==="children"?r.textContent=i:r.setAttribute(s,i))}return r};function rb(t,e){if(t instanceof HTMLElement&&e instanceof HTMLElement){const n=e.getAttribute("nonce");if(n&&!t.getAttribute("nonce")){const r=e.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===t.nonce&&t.isEqualNode(r)}}return t.isEqualNode(e)}var sb=t=>{const e=["key","id","name","property"];for(const n of e){const r=typeof t.getAttribute=="function"?t.hasAttribute(n)?t.getAttribute(n):void 0:t[n];if(r!==void 0)return{name:n,value:r}}},ib=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],ob=t=>{const e=[];for(const n of Object.keys(t))if(t[n]!=null){if(n==="title")e.push({tag:n,props:{children:t[n]}});else if(n==="base")e.push({tag:n,props:eb({key:"default"},t[n])});else if(ib.includes(n)){const r=t[n];Array.isArray(r)?r.forEach(s=>{e.push({tag:n,props:s})}):r&&e.push({tag:n,props:r})}}return e},rf=(t,e)=>{const n=t.getAttribute(xa);if(n)for(const s of n.split(","))s in e||t.removeAttribute(s);const r=[];for(const s in e){const i=e[s];i!=null&&(i===!1?t.removeAttribute(s):t.setAttribute(s,i),r.push(s))}r.length?t.setAttribute(xa,r.join(",")):t.removeAttribute(xa)},ab=(t=window.document,e,n)=>{var r;const s=t.head;let i=s.querySelector(`meta[name="${nf}"]`);const o=i?Number(i.getAttribute("content")):0,a=[];if(i)for(let l=0,u=i.previousElementSibling;l<o;l++,u=(u==null?void 0:u.previousElementSibling)||null)((r=u==null?void 0:u.tagName)==null?void 0:r.toLowerCase())===e&&a.push(u);else i=t.createElement("meta"),i.setAttribute("name",nf),i.setAttribute("content","0"),s.append(i);let c=n.map(l=>nb(l.tag,l.props,t));c=c.filter(l=>{for(let u=0;u<a.length;u++){const h=a[u];if(rb(h,l))return a.splice(u,1),!1}return!0}),a.forEach(l=>{var u;return(u=l.parentNode)==null?void 0:u.removeChild(l)}),c.forEach(l=>{s.insertBefore(l,i)}),i.setAttribute("content",""+(o-a.length+c.length))},cb=()=>{let t=[],e=new Set;const n={install(r){r.config.globalProperties.$head=n,r.provide(tb,n)},get headTags(){const r=[];return t.forEach(s=>{ob(s.value).forEach(o=>{if(o.tag==="meta"||o.tag==="base"||o.tag==="script"){const a=sb(o.props);if(a){let c=-1;for(let l=0;l<r.length;l++){const u=r[l],h=u.props[a.name],f=o.props[a.name];if(u.tag===o.tag&&h===f){c=l;break}}c!==-1&&r.splice(c,1)}}r.push(o)})}),r},addHeadObjs(r){t.push(r)},removeHeadObjs(r){t=t.filter(s=>s!==r)},updateDOM(r=window.document){let s,i={},o={};const a={};for(const l of n.headTags){if(l.tag==="title"){s=l.props.children;continue}if(l.tag==="htmlAttrs"){Object.assign(i,l.props);continue}if(l.tag==="bodyAttrs"){Object.assign(o,l.props);continue}a[l.tag]=a[l.tag]||[],a[l.tag].push(l)}s!==void 0&&(r.title=s),rf(r.documentElement,i),rf(r.body,o);const c=new Set([...Object.keys(a),...e]);for(const l of c)ab(r,l,a[l]||[]);e.clear(),Object.keys(a).forEach(l=>e.add(l))}};return n};function Oa(t){return t!==null&&typeof t=="object"}function Cc(t,e,n=".",r){if(!Oa(e))return Cc(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=o.concat(s[i]):Oa(o)&&Oa(s[i])?s[i]=Cc(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function lb(t){return(...e)=>e.reduce((n,r)=>Cc(n,r,"",t),{})}const ub=lb();var hb=Ol(t=>{const e=cb();t.vueApp.use(e);let n=!1;t.hooks.hookOnce("app:mounted",()=>{ih(()=>{e.updateDOM()}),n=!0});const r=oc();t._useHead=s=>{const i=oc(s);"titleTemplate"in i.value&&(r.value=i.value.titleTemplate);const o=ze(()=>{const c={meta:[]};return r.value&&"title"in i.value&&(c.title=typeof r.value=="function"?r.value(i.value.title):r.value.replace(/%s/g,i.value.title)),i.value.charset&&c.meta.push({key:"charset",charset:i.value.charset}),i.value.viewport&&c.meta.push({name:"viewport",content:i.value.viewport}),ub(c,i.value)});e.addHeadObjs(o),n&&ih(()=>{e.updateDOM()}),ti()&&$o(()=>{e.removeHeadObjs(o),e.updateDOM()})}});const fb=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),Rn=(t,e)=>(n,r)=>(en(()=>t(Ae(Ae({},fb(n)),r.attrs),r)),()=>{var s,i;return e?(i=(s=r.slots).default)==null?void 0:i.call(s):null}),rr={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},db=mt({name:"Script",props:vt(Ae({},rr),{async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String}),setup:Rn(t=>({script:[t]}))}),pb=mt({name:"Link",props:vt(Ae({},rr),{as:String,crossorigin:String,disabled:Boolean,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String}),setup:Rn(t=>({link:[t]}))}),gb=mt({name:"Base",props:vt(Ae({},rr),{href:String,target:String}),setup:Rn(t=>({base:t}))}),mb=mt({name:"Title",setup:Rn((t,{slots:e})=>{var r,s,i;return{title:((i=(s=(r=e.default)==null?void 0:r.call(e))==null?void 0:s[0])==null?void 0:i.children)||null}})}),yb=mt({name:"Meta",props:vt(Ae({},rr),{charset:String,content:String,httpEquiv:String,name:String}),setup:Rn(t=>({meta:[t]}))}),vb=mt({name:"Style",props:vt(Ae({},rr),{type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0}}),setup:Rn((t,{slots:e})=>{var s,i,o;const n=Ae({},t),r=(o=(i=(s=e.default)==null?void 0:s.call(e))==null?void 0:i[0])==null?void 0:o.children;return r&&(n.children=r),{style:[n]}})}),wb=mt({name:"Head",setup:(t,e)=>()=>{var n,r;return(r=(n=e.slots).default)==null?void 0:r.call(n)}}),_b=mt({name:"Html",props:vt(Ae({},rr),{manifest:String,version:String,xmlns:String}),setup:Rn(t=>({htmlAttrs:t}),!0)}),Eb=mt({name:"Body",props:rr,setup:Rn(t=>({bodyAttrs:t}),!0)});var sf=Object.freeze(Object.defineProperty({__proto__:null,Script:db,Link:pb,Base:gb,Title:mb,Meta:yb,Style:vb,Head:wb,Html:_b,Body:Eb},Symbol.toStringTag,{value:"Module"})),bb={globalMeta:{charset:"utf-8",viewport:"width=device-width, initial-scale=1",meta:[],link:[],style:[],script:[]}};const Tb={created(){const t=ti();if(!t)return;const e=t.type;if(!e||!("head"in e))return;const n=At(),r=typeof e.head=="function"?ze(()=>e.head(n)):e.head;en(r)}};var Ib=Ol(t=>{en(pl(bb.globalMeta)),t.vueApp.mixin(Tb);for(const e in sf)t.vueApp.component(e,sf[e])});const Sb=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),of=(t,e)=>{var s;const n=e.route.matched.find(i=>i.components.default===e.Component.type),r=(s=t!=null?t:n==null?void 0:n.meta.key)!=null?s:Sb(e.route,n);return typeof r=="function"?r(e.route):r},Cb=(t,e)=>({default:()=>t?Tt(fw,t===!0?{}:t,e):e}),Ab={setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}},kb=(t,e,n)=>({default:()=>e?Tt(t,e===!0?{}:e,n):Tt(Ab,{},n)}),af=Symbol("isNested");var Pa=mt({name:"NuxtPage",props:{pageKey:{type:[Function,String],default:null}},setup(t){const e=At(),n=Qt(af,!1);return ds(af,!0),()=>Tt(rg,{},{default:r=>{var s;return r.Component&&kb(Nl,(s=r.route.meta.pageTransition)!=null?s:Rb,Cb(r.route.meta.keepalive,n&&e.isHydrating?Tt(r.Component,{key:of(t.pageKey,r)}):Tt(sp,{onPending:()=>e.callHook("page:start",r.Component),onResolve:()=>e.callHook("page:finish",r.Component)},{default:()=>Tt(r.Component,{key:of(t.pageKey,r)})}))).default()}})}});const Rb={name:"page",mode:"out-in"},Nb="modulepreload",cf={},xb=vE(),lf=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${xb}${r}`,r in cf)return;cf[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Nb,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ob=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},og={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ig(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ob(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Pb=function(t){const e=ig(t);return og.encodeByteArray(e,!0)},ag=function(t){return Pb(t).replace(/\./g,"")},Db=function(t){try{return og.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function lg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lb(){return Ve().indexOf("Electron/")>=0}function hg(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ub(){return Ve().indexOf("MSAppHost/")>=0}function Fb(){return typeof indexedDB=="object"}function Bb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$b,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Vb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new sr(s,a,r)}}function Vb(t,e){return t.replace(jb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jb=/\{\$([^}]+)}/g;function Hb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(uf(i)&&uf(o)){if(!oo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function uf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qb(t,e){const n=new Kb(t,e);return n.subscribe.bind(n)}class Kb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Da),s.error===void 0&&(s.error=Da),s.complete===void 0&&(s.complete=Da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Da(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xb(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gb(t){return t===Mn?void 0:t}function Xb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Qb={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Jb=fe.INFO,Zb={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},eT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Zb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ml{constructor(e){this.name=e,this._logLevel=Jb,this._logHandler=eT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const tT=(t,e)=>e.some(n=>t instanceof n);let hf,ff;function nT(){return hf||(hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rT(){return ff||(ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,Ac=new WeakMap,dg=new WeakMap,Ma=new WeakMap,Ll=new WeakMap;function sT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(En(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fg.set(n,t)}).catch(()=>{}),Ll.set(e,t),e}function iT(t){if(Ac.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ac.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oT(t){kc=t(kc)}function aT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(La(this),e,...n);return dg.set(r,e.sort?e.sort():[e]),En(r)}:rT().includes(t)?function(...e){return t.apply(La(this),e),En(fg.get(this))}:function(...e){return En(t.apply(La(this),e))}}function cT(t){return typeof t=="function"?aT(t):(t instanceof IDBTransaction&&iT(t),tT(t,nT())?new Proxy(t,kc):t)}function En(t){if(t instanceof IDBRequest)return sT(t);if(Ma.has(t))return Ma.get(t);const e=cT(t);return e!==t&&(Ma.set(t,e),Ll.set(e,t)),e}const La=t=>Ll.get(t);function lT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=En(o);return r&&o.addEventListener("upgradeneeded",c=>{r(En(o.result),c.oldVersion,c.newVersion,En(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const uT=["get","getKey","getAll","getAllKeys","count"],hT=["put","add","delete","clear"],Ua=new Map;function df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ua.get(e))return Ua.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=hT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ua.set(e,i),i}oT(t=>vt(Ae({},t),{get:(e,n,r)=>df(e,n)||t.get(e,n,r),has:(e,n)=>!!df(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",pf="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new Ml("@firebase/app"),pT="@firebase/app-compat",gT="@firebase/analytics-compat",mT="@firebase/analytics",yT="@firebase/app-check-compat",vT="@firebase/app-check",wT="@firebase/auth",_T="@firebase/auth-compat",ET="@firebase/database",bT="@firebase/database-compat",TT="@firebase/functions",IT="@firebase/functions-compat",ST="@firebase/installations",CT="@firebase/installations-compat",AT="@firebase/messaging",kT="@firebase/messaging-compat",RT="@firebase/performance",NT="@firebase/performance-compat",xT="@firebase/remote-config",OT="@firebase/remote-config-compat",PT="@firebase/storage",DT="@firebase/storage-compat",MT="@firebase/firestore",LT="@firebase/firestore-compat",UT="firebase",FT="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="[DEFAULT]",BT={[Rc]:"fire-core",[pT]:"fire-core-compat",[mT]:"fire-analytics",[gT]:"fire-analytics-compat",[vT]:"fire-app-check",[yT]:"fire-app-check-compat",[wT]:"fire-auth",[_T]:"fire-auth-compat",[ET]:"fire-rtdb",[bT]:"fire-rtdb-compat",[TT]:"fire-fn",[IT]:"fire-fn-compat",[ST]:"fire-iid",[CT]:"fire-iid-compat",[AT]:"fire-fcm",[kT]:"fire-fcm-compat",[RT]:"fire-perf",[NT]:"fire-perf-compat",[xT]:"fire-rc",[OT]:"fire-rc-compat",[PT]:"fire-gcs",[DT]:"fire-gcs-compat",[MT]:"fire-fst",[LT]:"fire-fst-compat","fire-js":"fire-js",[UT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new Map,Nc=new Map;function $T(t,e){try{t.container.addComponent(e)}catch(n){Ul.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Or(t){const e=t.name;if(Nc.has(e))return Ul.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,t);for(const n of ao.values())$T(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Gn=new ni("app","Firebase",VT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=FT;function Bl(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:pg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Gn.create("bad-app-name",{appName:String(r)});const s=ao.get(r);if(s){if(oo(t,s.options)&&oo(n,s.config))return s;throw Gn.create("duplicate-app",{appName:r})}const i=new Yb(r);for(const a of Nc.values())i.addComponent(a);const o=new jT(t,n,i);return ao.set(r,o),o}function gg(t=pg){const e=ao.get(t);if(!e)throw Gn.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=BT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ul.warn(a.join(" "));return}Or(new Wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="firebase-heartbeat-database",qT=1,Fs="firebase-heartbeat-store";let Fa=null;function mg(){return Fa||(Fa=lT(HT,qT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fs)}}}).catch(t=>{throw Gn.create("storage-open",{originalErrorMessage:t.message})})),Fa}async function KT(t){try{return(await mg()).transaction(Fs).objectStore(Fs).get(yg(t))}catch(e){throw Gn.create("storage-get",{originalErrorMessage:e.message})}}async function gf(t,e){try{const r=(await mg()).transaction(Fs,"readwrite");return await r.objectStore(Fs).put(e,yg(t)),r.done}catch(n){throw Gn.create("storage-set",{originalErrorMessage:n.message})}}function yg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=1024,WT=30*24*60*60*1e3;class GT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=WT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mf(),{heartbeatsToSend:n,unsentEntries:r}=XT(this._heartbeatsCache.heartbeats),s=ag(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function mf(){return new Date().toISOString().substring(0,10)}function XT(t,e=zT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fb()?Bb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yf(t){return ag(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){Or(new Wn("platform-logger",e=>new fT(e),"PRIVATE")),Or(new Wn("heartbeat",e=>new GT(e),"PRIVATE")),bn(Rc,pf,t),bn(Rc,pf,"esm2017"),bn("fire-js","")}QT("");var JT="firebase",ZT="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(JT,ZT,"app");function $l(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eI=vg,wg=new ni("auth","Firebase",vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=new Ml("@firebase/auth");function ji(t,...e){vf.logLevel<=fe.ERROR&&vf.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Vl(t,...e)}function Bt(t,...e){return Vl(t,...e)}function _g(t,e,n){const r=Object.assign(Object.assign({},eI()),{[e]:n});return new ni("auth","Firebase",r).create(e,{appName:t.name})}function tI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ht(t,"argument-error"),_g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wg.create(t,...e)}function te(t,e,...n){if(!t)throw Vl(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ji(e),new Error(e)}function tn(t,e){t||Gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new Map;function Xt(t){tn(t instanceof Function,"Expected a class definition");let e=wf.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(oo(i,e!=null?e:{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function rI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sI(){return _f()==="http:"||_f()==="https:"}function _f(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sI()||lg()||"connection"in navigator)?navigator.onLine:!0}function oI(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=cg()||ug()}get(){return iI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new ii(3e4,6e4);function lI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qo(t,e,n,r,s={}){return bg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ri(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Eg.fetch()(Tg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function bg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aI),e);try{const s=new hI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw _g(t,u,l);Ht(t,u)}}catch(s){if(s instanceof sr)throw s;Ht(t,"network-request-failed")}}async function uI(t,e,n,r,s={}){const i=await qo(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Tg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?jl(t.config,s):`${t.config.apiScheme}://${s}`}class hI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),cI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Bt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(t,e){return qo(t,"POST","/v1/accounts:delete",e)}async function dI(t,e){return qo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pI(t,e=!1){const n=jt(t),r=await n.getIdToken(e),s=Hl(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_s($a(s.auth_time)),issuedAtTime:_s($a(s.iat)),expirationTime:_s($a(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $a(t){return Number(t)*1e3}function Hl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ji("JWT malformed, contained fewer than 3 sections"),null;try{const s=Db(n);return s?JSON.parse(s):(ji("Failed to decode base64 JWT payload"),null)}catch(s){return ji("Caught error parsing JWT payload as JSON",s),null}}function gI(t){const e=Hl(t);return te(e,"internal-error"),te(typeof e.exp!="undefined","internal-error"),te(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&mI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bs(t,dI(n,{idToken:r}));te(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_I(i.providerUserInfo):[],a=wI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ig(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function vI(t){const e=jt(t);await co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _I(t){return t.map(e=>{var{providerId:n}=e,r=$l(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){const n=await bg(t,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Tg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Eg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken!="undefined","internal-error"),te(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):gI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await EI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $s;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){te(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ig(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pI(this,e)}reload(){return vI(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bs(this,fI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:T,isAnonymous:L,providerData:U,stsTokenManager:k}=n;te(E&&k,e,"internal-error");const K=$s.fromJSON(this.name,k);te(typeof E=="string",e,"internal-error"),hn(h,e.name),hn(f,e.name),te(typeof T=="boolean",e,"internal-error"),te(typeof L=="boolean",e,"internal-error"),hn(p,e.name),hn(v,e.name),hn(b,e.name),hn(m,e.name),hn(w,e.name),hn(y,e.name);const j=new Kn({uid:E,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:L,photoURL:v,phoneNumber:p,tenantId:b,stsTokenManager:K,createdAt:w,lastLoginAt:y});return U&&Array.isArray(U)&&(j.providerData=U.map(X=>Object.assign({},X))),m&&(j._redirectEventId=m),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new $s;s.updateFromServerResponse(n);const i=new Kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await co(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const Ef=Sg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ir{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ir(Xt(Ef),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Xt(Ef);const o=Hi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Kn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ir(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ir(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(xg(e))return"Webos";if(ql(e))return"Safari";if((e.includes("chrome/")||Ag(e))&&!e.includes("edge/"))return"Chrome";if(Rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cg(t=Ve()){return/firefox\//i.test(t)}function ql(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ag(t=Ve()){return/crios\//i.test(t)}function kg(t=Ve()){return/iemobile/i.test(t)}function Rg(t=Ve()){return/android/i.test(t)}function Ng(t=Ve()){return/blackberry/i.test(t)}function xg(t=Ve()){return/webos/i.test(t)}function Ko(t=Ve()){return/iphone|ipad|ipod/i.test(t)}function bI(t=Ve()){var e;return Ko(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TI(){return hg()&&document.documentMode===10}function Og(t=Ve()){return Ko(t)||Rg(t)||xg(t)||Ng(t)||/windows phone/i.test(t)||kg(t)}function II(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e=[]){let n;switch(t){case"Browser":n=bf(Ve());break;case"Worker":n=`${bf(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new SI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await co(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?jt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Kl(t){return jt(t)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=qb(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t,e){return uI(t,"POST","/v1/accounts:signInWithIdp",lI(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="http://localhost";class Xn extends Dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$l(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sr(e,n)}buildRequest(){const e={requestUri:AI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends zl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends oi{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends oi{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends oi{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kn._fromIdTokenResponse(e,r,s),o=If(r);return new Pr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=If(r);return new Pr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function If(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends sr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lo(e,n,r,s)}}function Mg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lo._fromErrorAndOperation(t,i,e,r):i})}async function kI(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Bs(t,Mg(r,s,e,t),n);te(i.idToken,r,"internal-error");const o=Hl(i.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),Pr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e,n=!1){const r="signIn",s=await Mg(t,r,e),i=await Pr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function xI(t,e,n,r){return jt(t).onAuthStateChanged(e,n,r)}function OI(t){return jt(t).signOut()}const uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uo,"1"),this.storage.removeItem(uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(){const t=Ve();return ql(t)||Ko(t)}const DI=1e3,MI=10;class Ug extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=PI()&&II(),this.fallbackToPolling=Og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);TI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,MI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ug.type="LOCAL";const LI=Ug;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg extends Lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fg.type="SESSION";const Bg=Fg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await UI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Wl("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function BI(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){return typeof $t().WorkerGlobalScope!="undefined"&&typeof $t().importScripts=="function"}async function $I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jI(){return $g()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="firebaseLocalStorageDb",HI=1,ho="firebaseLocalStorage",jg="fbase_key";class ai{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wo(t,e){return t.transaction([ho],e?"readwrite":"readonly").objectStore(ho)}function qI(){const t=indexedDB.deleteDatabase(Vg);return new ai(t).toPromise()}function Oc(){const t=indexedDB.open(Vg,HI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ho,{keyPath:jg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ho)?e(r):(r.close(),await qI(),e(await Oc()))})})}async function Sf(t,e,n){const r=Wo(t,!0).put({[jg]:e,value:n});return new ai(r).toPromise()}async function KI(t,e){const n=Wo(t,!1).get(e),r=await new ai(n).toPromise();return r===void 0?null:r.value}function Cf(t,e){const n=Wo(t,!0).delete(e);return new ai(n).toPromise()}const zI=800,WI=3;class Hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zo._getInstance(jI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $I(),!this.activeServiceWorker)return;this.sender=new FI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oc();return await Sf(e,uo,"1"),await Cf(e,uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wo(s,!1).getAll();return new ai(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hg.type="LOCAL";const GI=Hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function YI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",XI().appendChild(r)})}function QI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ii(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){return e?Xt(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JI(t){return NI(t.auth,new Gl(t),t.bypassAuthState)}function ZI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),RI(n,new Gl(t),t.bypassAuthState)}async function eS(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),kI(n,new Gl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JI;case"linkViaPopup":case"linkViaRedirect":return eS;case"reauthViaPopup":case"reauthViaRedirect":return ZI;default:Ht(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=new ii(2e3,1e4);async function nS(t,e,n){const r=Kl(t);tI(t,e,zl);const s=qg(r,n);return new Bn(r,"signInViaPopup",e,s).executeNotNull()}class Bn extends Kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Wl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tS.get())};e()}}Bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="pendingRedirect",qi=new Map;class sS extends Kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qi.get(this.auth._key());if(!e){try{const r=await iS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qi.set(this.auth._key(),e)}return this.bypassAuthState||qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iS(t,e){const n=cS(e),r=aS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function oS(t,e){qi.set(t._key(),e)}function aS(t){return Xt(t._redirectPersistence)}function cS(t){return Hi(rS,t.config.apiKey,t.name)}async function lS(t,e,n=!1){const r=Kl(t),s=qg(r,e),o=await new sS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=10*60*1e3;class hS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(t,e={}){return qo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gS=/^https?/;async function mS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dS(t);for(const n of e)try{if(yS(n))return}catch{}Ht(t,"unauthorized-domain")}function yS(t){const e=xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gS.test(n))return!1;if(pS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=new ii(3e4,6e4);function kf(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wS(t){return new Promise((e,n)=>{var r,s,i;function o(){kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kf(),n(Bt(t,"network-request-failed"))},timeout:vS.get()})}if(!((s=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=QI("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},YI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ki=null,e})}let Ki=null;function _S(t){return Ki=Ki||wS(t),Ki}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=new ii(5e3,15e3),bS="__/auth/iframe",TS="emulator/auth/iframe",IS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CS(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jl(e,TS):`https://${t.config.authDomain}/${bS}`,r={apiKey:e.apiKey,appName:t.name,v:si},s=SS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ri(r).slice(1)}`}async function AS(t){const e=await _S(t),n=$t().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:CS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},ES.get());function c(){$t().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RS=500,NS=600,xS="_blank",OS="http://localhost";class Rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PS(t,e,n,r=RS,s=NS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ve().toLowerCase();n&&(a=Ag(l)?xS:n),Cg(l)&&(e=e||OS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(bI(l)&&a!=="_self")return DS(e||"",a),new Rf(null);const h=window.open(e||"",a,u);te(h,t,"popup-blocked");try{h.focus()}catch{}return new Rf(h)}function DS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="__/auth/handler",LS="emulator/auth/handler";function Nf(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:s};if(e instanceof zl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof oi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${US(t)}?${ri(a).slice(1)}`}function US({config:t}){return t.emulator?jl(t,LS):`https://${t.authDomain}/${MS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="webStorageSupport";class FS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=lS,this._overrideRedirectResult=oS}async _openPopup(e,n,r,s){var i;tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Nf(e,n,r,xc(),s);return PS(e,o,Wl())}async _openRedirect(e,n,r,s){return await this._originValidation(e),BI(Nf(e,n,r,xc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AS(e),r=new hS(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Va,{type:Va},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Va];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Og()||ql()||Ko()}}const BS=FS;var xf="@firebase/auth",Of="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jS(t){Or(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{te(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),te(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pg(t)},u=new CI(a,c,l);return rI(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Or(new Wn("auth-internal",e=>{const n=Kl(e.getProvider("auth").getImmediate());return(r=>new $S(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(xf,Of,VS(t)),bn(xf,Of,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t=gg()){const e=Fl(t,"auth");return e.isInitialized()?e.getImmediate():nI(t,{popupRedirectResolver:BS,persistence:[GI,LI,Bg]})}jS("Browser");var HS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},B,Yl=Yl||{},J=HS||self;function fo(){}function Pc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ci(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qS(t){return Object.prototype.hasOwnProperty.call(t,ja)&&t[ja]||(t[ja]=++KS)}var ja="closure_uid_"+(1e9*Math.random()>>>0),KS=0;function zS(t,e,n){return t.call.apply(t.bind,arguments)}function WS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=zS:We=WS,We.apply(null,arguments)}function xi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Nn(){this.s=this.s,this.o=this.o}var GS=0;Nn.prototype.s=!1;Nn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),GS!=0)&&qS(this)};Nn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Gg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function XS(t){e:{var e=$C;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Pf(t){return Array.prototype.concat.apply([],arguments)}function Ql(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function po(t){return/^[\s\xa0]*$/.test(t)}var Df=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function rt(t,e){return t.indexOf(e)!=-1}function Ha(t,e){return t<e?-1:t>e?1:0}var st;e:{var Mf=J.navigator;if(Mf){var Lf=Mf.userAgent;if(Lf){st=Lf;break e}}st=""}function Jl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Xg(t){const e={};for(const n in t)e[n]=t[n];return e}var Uf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Uf.length;i++)n=Uf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Zl(t){return Zl[" "](t),t}Zl[" "]=fo;function YS(t){var e=ZS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var QS=rt(st,"Opera"),Dr=rt(st,"Trident")||rt(st,"MSIE"),Qg=rt(st,"Edge"),Dc=Qg||Dr,Jg=rt(st,"Gecko")&&!(rt(st.toLowerCase(),"webkit")&&!rt(st,"Edge"))&&!(rt(st,"Trident")||rt(st,"MSIE"))&&!rt(st,"Edge"),JS=rt(st.toLowerCase(),"webkit")&&!rt(st,"Edge");function Zg(){var t=J.document;return t?t.documentMode:void 0}var go;e:{var qa="",Ka=function(){var t=st;if(Jg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Qg)return/Edge\/([\d\.]+)/.exec(t);if(Dr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JS)return/WebKit\/(\S+)/.exec(t);if(QS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ka&&(qa=Ka?Ka[1]:""),Dr){var za=Zg();if(za!=null&&za>parseFloat(qa)){go=String(za);break e}}go=qa}var ZS={};function eC(){return YS(function(){let t=0;const e=Df(String(go)).split("."),n=Df("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Ha(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Ha(s[2].length==0,i[2].length==0)||Ha(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Mc;if(J.document&&Dr){var Ff=Zg();Mc=Ff||parseInt(go,10)||void 0}else Mc=void 0;var tC=Mc,nC=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",fo,e),J.removeEventListener("test",fo,e)}catch{}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};function Vs(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jg){e:{try{Zl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:rC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vs.Z.h.call(this)}}Je(Vs,et);var rC={2:"touch",3:"pen",4:"mouse"};Vs.prototype.h=function(){Vs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var li="closure_listenable_"+(1e6*Math.random()|0),sC=0;function iC(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++sC,this.ca=this.fa=!1}function Go(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Xo(t){this.src=t,this.g={},this.h=0}Xo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Uc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new iC(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Lc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Wg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Go(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Uc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var eu="closure_lm_"+(1e6*Math.random()|0),Wa={};function em(t,e,n,r,s){if(r&&r.once)return nm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)em(t,e[i],n,r,s);return null}return n=ru(n),t&&t[li]?t.N(e,n,ci(r)?!!r.capture:!!r,s):tm(t,e,n,!1,r,s)}function tm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ci(s)?!!s.capture:!!s,a=nu(t);if(a||(t[eu]=a=new Xo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=oC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nC||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(sm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function oC(){function t(n){return e.call(t.src,t.listener,n)}var e=aC;return t}function nm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)nm(t,e[i],n,r,s);return null}return n=ru(n),t&&t[li]?t.O(e,n,ci(r)?!!r.capture:!!r,s):tm(t,e,n,!0,r,s)}function rm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)rm(t,e[i],n,r,s);else r=ci(r)?!!r.capture:!!r,n=ru(n),t&&t[li]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Uc(i,n,r,s),-1<n&&(Go(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=nu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Uc(e,n,r,s)),(n=-1<t?e[t]:null)&&tu(n))}function tu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[li])Lc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=nu(e))?(Lc(n,t),n.h==0&&(n.src=null,e[eu]=null)):Go(t)}}}function sm(t){return t in Wa?Wa[t]:Wa[t]="on"+t}function aC(t,e){if(t.ca)t=!0;else{e=new Vs(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&tu(t),t=n.call(r,e)}return t}function nu(t){return t=t[eu],t instanceof Xo?t:null}var Ga="__closure_events_fn_"+(1e9*Math.random()>>>0);function ru(t){return typeof t=="function"?t:(t[Ga]||(t[Ga]=function(e){return t.handleEvent(e)}),t[Ga])}function je(){Nn.call(this),this.i=new Xo(this),this.P=this,this.I=null}Je(je,Nn);je.prototype[li]=!0;je.prototype.removeEventListener=function(t,e,n,r){rm(this,t,e,n,r)};function Ge(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var s=e;e=new et(r,t),Yg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Oi(o,r,!0,e)&&s}if(o=e.g=t,s=Oi(o,r,!0,e)&&s,s=Oi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Oi(o,r,!1,e)&&s}je.prototype.M=function(){if(je.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Go(n[r]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Oi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Lc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var su=J.JSON.stringify;function cC(){var t=om;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lC{constructor(){this.h=this.g=null}add(e,n){const r=im.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var im=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new uC,t=>t.reset());class uC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hC(t){J.setTimeout(()=>{throw t},0)}function iu(t,e){Fc||fC(),Bc||(Fc(),Bc=!0),om.add(t,e)}var Fc;function fC(){var t=J.Promise.resolve(void 0);Fc=function(){t.then(dC)}}var Bc=!1,om=new lC;function dC(){for(var t;t=cC();){try{t.h.call(t.g)}catch(n){hC(n)}var e=im;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bc=!1}function Yo(t,e){je.call(this),this.h=t||1,this.g=e||J,this.j=We(this.kb,this),this.l=Date.now()}Je(Yo,je);B=Yo.prototype;B.da=!1;B.S=null;B.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ge(this,"tick"),this.da&&(ou(this),this.start()))}};B.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ou(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}B.M=function(){Yo.Z.M.call(this),ou(this),delete this.g};function au(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function am(t){t.g=au(()=>{t.g=null,t.i&&(t.i=!1,am(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class pC extends Nn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:am(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(t){Nn.call(this),this.h=t,this.g={}}Je(js,Nn);var Bf=[];function cm(t,e,n,r){Array.isArray(n)||(n&&(Bf[0]=n.toString()),n=Bf);for(var s=0;s<n.length;s++){var i=em(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function lm(t){Jl(t.g,function(e,n){this.g.hasOwnProperty(n)&&tu(e)},t),t.g={}}js.prototype.M=function(){js.Z.M.call(this),lm(this)};js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qo(){this.g=!0}Qo.prototype.Aa=function(){this.g=!1};function gC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function mC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function mr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vC(t,n)+(r?" "+r:"")})}function yC(t,e){t.info(function(){return"TIMEOUT: "+e})}Qo.prototype.info=function(){};function vC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return su(n)}catch{return e}}var ir={},$f=null;function Jo(){return $f=$f||new je}ir.Ma="serverreachability";function um(t){et.call(this,ir.Ma,t)}Je(um,et);function Hs(t){const e=Jo();Ge(e,new um(e,t))}ir.STAT_EVENT="statevent";function hm(t,e){et.call(this,ir.STAT_EVENT,t),this.stat=e}Je(hm,et);function it(t){const e=Jo();Ge(e,new hm(e,t))}ir.Na="timingevent";function fm(t,e){et.call(this,ir.Na,t),this.size=e}Je(fm,et);function ui(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Zo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function cu(){}cu.prototype.h=null;function Vf(t){return t.h||(t.h=t.i())}function pm(){}var hi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function lu(){et.call(this,"d")}Je(lu,et);function uu(){et.call(this,"c")}Je(uu,et);var $c;function ea(){}Je(ea,cu);ea.prototype.g=function(){return new XMLHttpRequest};ea.prototype.i=function(){return{}};$c=new ea;function fi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new js(this),this.P=wC,t=Dc?125:void 0,this.W=new Yo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gm}function gm(){this.i=null,this.g="",this.h=!1}var wC=45e3,Vc={},mo={};B=fi.prototype;B.setTimeout=function(t){this.P=t};function jc(t,e,n){t.K=1,t.v=na(nn(e)),t.s=n,t.U=!0,mm(t,null)}function mm(t,e){t.F=Date.now(),di(t),t.A=nn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Tm(n.h,"t",r),t.C=0,n=t.l.H,t.h=new gm,t.g=Hm(t.l,n?e:null,!t.s),0<t.O&&(t.L=new pC(We(t.Ia,t,t.g),t.O)),cm(t.V,t.g,"readystatechange",t.gb),e=t.H?Xg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Hs(1),gC(t.j,t.u,t.A,t.m,t.X,t.s)}B.gb=function(t){t=t.target;const e=this.L;e&&Yt(t)==3?e.l():this.Ia(t)};B.Ia=function(t){try{if(t==this.g)e:{const u=Yt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Dc||this.g&&(this.h.h||this.g.ga()||Kf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Hs(3):Hs(2)),ta(this);var n=this.g.ba();this.N=n;t:if(ym(this)){var r=Kf(this.g);t="";var s=r.length,i=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){$n(this),Es(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,mC(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!po(a)){var l=a;break t}}l=null}if(n=l)mr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hc(this,n);else{this.i=!1,this.o=3,it(12),$n(this),Es(this);break e}}this.U?(vm(this,u,o),Dc&&this.i&&u==3&&(cm(this.V,this.W,"tick",this.fb),this.W.start())):(mr(this.j,this.m,o,null),Hc(this,o)),u==4&&$n(this),this.i&&!this.I&&(u==4?Bm(this.l,this):(this.i=!1,di(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),$n(this),Es(this)}}}catch{}finally{}};function ym(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function vm(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=_C(t,n),s==mo){e==4&&(t.o=4,it(14),r=!1),mr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Vc){t.o=4,it(15),mr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else mr(t.j,t.m,s,null),Hc(t,s);ym(t)&&s!=mo&&s!=Vc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),wu(e),e.L=!0,it(11))):(mr(t.j,t.m,n,"[Invalid Chunked Response]"),$n(t),Es(t))}B.fb=function(){if(this.g){var t=Yt(this.g),e=this.g.ga();this.C<e.length&&(ta(this),vm(this,t,e),this.i&&t!=4&&di(this))}};function _C(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?mo:(n=Number(e.substring(n,r)),isNaN(n)?Vc:(r+=1,r+n>e.length?mo:(e=e.substr(r,n),t.C=r+n,e)))}B.cancel=function(){this.I=!0,$n(this)};function di(t){t.Y=Date.now()+t.P,wm(t,t.P)}function wm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ui(We(t.eb,t),e)}function ta(t){t.B&&(J.clearTimeout(t.B),t.B=null)}B.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(yC(this.j,this.A),this.K!=2&&(Hs(3),it(17)),$n(this),this.o=2,Es(this)):wm(this,this.Y-t)};function Es(t){t.l.G==0||t.I||Bm(t.l,t)}function $n(t){ta(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ou(t.W),lm(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||qc(n.i,t))){if(n.I=t.N,!t.J&&qc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_o(n),ia(n);else break e;vu(n),it(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=ui(We(n.ab,n),6e3));if(1>=Cm(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Vn(n,11)}else if((t.J||n.g==t)&&_o(n),!po(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;!i.g&&(rt(v,"spdy")||rt(v,"quic")||rt(v,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(du(i,i.h),i.h=null))}if(r.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.sa=b,ke(r.F,r.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=jm(r,r.H?r.la:null,r.W),o.J){Am(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(ta(a),di(a)),r.g=o}else Um(r);0<n.l.length&&oa(n)}else l[0]!="stop"&&l[0]!="close"||Vn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vn(n,7):yu(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Hs(4)}catch{}}function EC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Pc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pc(t)||typeof t=="string")Gg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Pc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=EC(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function zr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof zr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}B=zr.prototype;B.R=function(){fu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};B.T=function(){return fu(this),this.g.concat()};function fu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Yn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Yn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}B.get=function(t,e){return Yn(this.h,t)?this.h[t]:e};B.set=function(t,e){Yn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};B.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var _m=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Qn){this.g=e!==void 0?e:t.g,yo(this,t.j),this.s=t.s,vo(this,t.i),wo(this,t.m),this.l=t.l,e=t.h;var n=new qs;n.i=e.i,e.g&&(n.g=new zr(e.g),n.h=e.h),jf(this,n),this.o=t.o}else t&&(n=String(t).match(_m))?(this.g=!!e,yo(this,n[1]||"",!0),this.s=bs(n[2]||""),vo(this,n[3]||"",!0),wo(this,n[4]),this.l=bs(n[5]||"",!0),jf(this,n[6]||"",!0),this.o=bs(n[7]||"")):(this.g=!!e,this.h=new qs(null,this.g))}Qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cs(e,Hf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(cs(e,Hf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(cs(n,n.charAt(0)=="/"?AC:CC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cs(n,RC)),t.join("")};function nn(t){return new Qn(t)}function yo(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vo(t,e,n){t.i=n?bs(e,!0):e}function wo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jf(t,e,n){e instanceof qs?(t.h=e,NC(t.h,t.g)):(n||(e=cs(e,kC)),t.h=new qs(e,t.g))}function ke(t,e,n){t.h.set(e,n)}function na(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function TC(t){return t instanceof Qn?nn(t):new Qn(t,void 0)}function IC(t,e,n,r){var s=new Qn(null,void 0);return t&&yo(s,t),e&&vo(s,e),n&&wo(s,n),r&&(s.l=r),s}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hf=/[#\/\?@]/g,CC=/[#\?:]/g,AC=/[#\?]/g,kC=/[#\?@]/g,RC=/#/g;function qs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new zr,t.h=0,t.i&&bC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=qs.prototype;B.add=function(t,e){xn(this),this.i=null,t=Wr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Em(t,e){xn(t),e=Wr(t,e),Yn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Yn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&fu(t)))}function bm(t,e){return xn(t),e=Wr(t,e),Yn(t.g.h,e)}B.forEach=function(t,e){xn(this),this.g.forEach(function(n,r){Gg(n,function(s){t.call(e,s,r,this)},this)},this)};B.T=function(){xn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};B.R=function(t){xn(this);var e=[];if(typeof t=="string")bm(this,t)&&(e=Pf(e,this.g.get(Wr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Pf(e,t[n])}return e};B.set=function(t,e){return xn(this),this.i=null,t=Wr(this,t),bm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Tm(t,e,n){Em(t,e),0<n.length&&(t.i=null,t.g.set(Wr(t,e),Ql(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Wr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function NC(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Em(this,r),Tm(this,s,n))},t)),t.j=e}var xC=class{constructor(t,e){this.h=t,this.g=e}};function Im(t){this.l=t||OC,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ea&&J.g.Ea()&&J.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var OC=10;function Sm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Cm(t){return t.h?1:t.g?t.g.size:0}function qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function du(t,e){t.g?t.g.add(e):t.h=e}function Am(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Im.prototype.cancel=function(){if(this.i=km(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function km(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ql(t.i)}function pu(){}pu.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};pu.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function PC(){this.g=new pu}function DC(t,e,n){const r=n||"";try{hu(t,function(s,i){let o=s;ci(s)&&(o=su(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function MC(t,e){const n=new Qo;if(J.Image){const r=new Image;r.onload=xi(Pi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xi(Pi,n,r,"TestLoadImage: error",!1,e),r.onabort=xi(Pi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xi(Pi,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Pi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function pi(t){this.l=t.$b||null,this.j=t.ib||!1}Je(pi,cu);pi.prototype.g=function(){return new ra(this.l,this.j)};pi.prototype.i=function(t){return function(){return t}}({});function ra(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(ra,je);var gu=0;B=ra.prototype;B.open=function(t,e){if(this.readyState!=gu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ks(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=gu};B.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof J.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rm(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Rm(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}B.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?gi(this):Ks(this),this.readyState==3&&Rm(this)}};B.Ua=function(t){this.g&&(this.response=this.responseText=t,gi(this))};B.Ta=function(t){this.g&&(this.response=t,gi(this))};B.ha=function(){this.g&&gi(this)};function gi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ks(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ks(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var LC=J.JSON.parse;function Me(t){je.call(this),this.headers=new zr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nm,this.K=this.L=!1}Je(Me,je);var Nm="",UC=/^https?$/i,FC=["POST","PUT"];B=Me.prototype;B.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$c.g(),this.C=this.u?Vf(this.u):Vf($c),this.g.onreadystatechange=We(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){qf(this,i);return}t=n||"";const s=new zr(this.headers);r&&hu(r,function(i,o){s.set(o,i)}),r=XS(s.T()),n=J.FormData&&t instanceof J.FormData,!(0<=Wg(FC,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pm(this),0<this.B&&((this.K=BC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.pa,this)):this.A=au(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qf(this,i)}};function BC(t){return Dr&&eC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function $C(t){return t.toLowerCase()=="content-type"}B.pa=function(){typeof Yl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function qf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xm(t),sa(t)}function xm(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),sa(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sa(this,!0)),Me.Z.M.call(this)};B.Fa=function(){this.s||(this.F||this.v||this.l?Om(this):this.cb())};B.cb=function(){Om(this)};function Om(t){if(t.h&&typeof Yl!="undefined"&&(!t.C[1]||Yt(t)!=4||t.ba()!=2)){if(t.v&&Yt(t)==4)au(t.Fa,0,t);else if(Ge(t,"readystatechange"),Yt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(_m)[1]||null;if(!s&&J.self&&J.self.location){var i=J.self.location.protocol;s=i.substr(0,i.length-1)}r=!UC.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<Yt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",xm(t)}}finally{sa(t)}}}}function sa(t,e){if(t.g){Pm(t);const n=t.g,r=t.C[0]?fo:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Pm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function Yt(t){return t.g?t.g.readyState:0}B.ba=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}};B.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),LC(e)}};function Kf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Da=function(){return this.m};B.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function VC(t){let e="";return Jl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function mu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=VC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dm(t){this.za=0,this.l=[],this.h=new Qo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rs("baseRetryDelayMs",5e3,t),this.$a=rs("retryDelaySeedMs",1e4,t),this.Ya=rs("forwardChannelMaxRetries",2,t),this.ra=rs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Im(t&&t.concurrentRequestLimit),this.Ca=new PC,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}B=Dm.prototype;B.ma=8;B.G=1;function yu(t){if(Mm(t),t.G==3){var e=t.V++,n=nn(t.F);ke(n,"SID",t.J),ke(n,"RID",e),ke(n,"TYPE","terminate"),mi(t,n),e=new fi(t,t.h,e,void 0),e.K=2,e.v=na(nn(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Hm(e.l,null),e.g.ea(e.v)),e.F=Date.now(),di(e)}Vm(t)}B.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ia(t){t.g&&(wu(t),t.g.cancel(),t.g=null)}function Mm(t){ia(t),t.u&&(J.clearTimeout(t.u),t.u=null),_o(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Xa(t,e){t.l.push(new xC(t.Za++,e)),t.G==3&&oa(t)}function oa(t){Sm(t.i)||t.m||(t.m=!0,iu(t.Ha,t),t.C=0)}function jC(t,e){return Cm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ui(We(t.Ha,t,e),$m(t,t.C)),t.C++,!0)}B.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new fi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Xg(i),Yg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Lm(this,s,e),n=nn(this.F),ke(n,"RID",t),ke(n,"CVER",22),this.D&&ke(n,"X-HTTP-Session-Id",this.D),mi(this,n),this.o&&i&&mu(n,this.o,i),du(this.i,s),this.Ra&&ke(n,"TYPE","init"),this.ja?(ke(n,"$req",e),ke(n,"SID","null"),s.$=!0,jc(s,n,null)):jc(s,n,e),this.G=2}}else this.G==3&&(t?zf(this,t):this.l.length==0||Sm(this.i)||zf(this))};function zf(t,e){var n;e?n=e.m:n=t.V++;const r=nn(t.F);ke(r,"SID",t.J),ke(r,"RID",n),ke(r,"AID",t.U),mi(t,r),t.o&&t.s&&mu(r,t.o,t.s),n=new fi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Lm(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),du(t.i,n),jc(n,r,e)}function mi(t,e){t.j&&hu({},function(n,r){ke(e,r,n)})}function Lm(t,e,n){n=Math.min(t.l.length,n);var r=t.j?We(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{DC(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Um(t){t.g||t.u||(t.Y=1,iu(t.Ga,t),t.A=0)}function vu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ui(We(t.Ga,t),$m(t,t.A)),t.A++,!0)}B.Ga=function(){if(this.u=null,Fm(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ui(We(this.bb,this),t)}};B.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,it(10),ia(this),Fm(this))};function wu(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Fm(t){t.g=new fi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=nn(t.oa);ke(e,"RID","rpc"),ke(e,"SID",t.J),ke(e,"CI",t.N?"0":"1"),ke(e,"AID",t.U),mi(t,e),ke(e,"TYPE","xmlhttp"),t.o&&t.s&&mu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=na(nn(e)),n.s=null,n.U=!0,mm(n,t)}B.ab=function(){this.v!=null&&(this.v=null,ia(this),vu(this),it(19))};function _o(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Bm(t,e){var n=null;if(t.g==e){_o(t),wu(t),t.g=null;var r=2}else if(qc(t.i,e))n=e.D,Am(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Jo(),Ge(r,new fm(r,n,e,s)),oa(t)}else Um(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&jC(t,e)||r==2&&vu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}}function $m(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Vn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=We(t.jb,t);n||(n=new Qn("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||yo(n,"https"),na(n)),MC(n.toString(),r)}else it(2);t.G=0,t.j&&t.j.va(e),Vm(t),Mm(t)}B.jb=function(t){t?(this.h.info("Successfully pinged google.com"),it(2)):(this.h.info("Failed to ping google.com"),it(1))};function Vm(t){t.G=0,t.I=-1,t.j&&((km(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ql(t.l),t.l.length=0),t.j.ua())}function jm(t,e,n){let r=TC(n);if(r.i!="")e&&vo(r,e+"."+r.i),wo(r,r.m);else{const s=J.location;r=IC(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Jl(t.aa,function(s,i){ke(r,i,s)}),e=t.D,n=t.sa,e&&n&&ke(r,e,n),ke(r,"VER",t.ma),mi(t,r),r}function Hm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Me(new pi({ib:!0})):new Me(t.qa),e.L=t.H,e}function qm(){}B=qm.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Oa=function(){};function Eo(){if(Dr&&!(10<=Number(tC)))throw Error("Environmental error: no available transport.")}Eo.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){je.call(this),this.g=new Dm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!po(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!po(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gr(this)}Je(gt,je);gt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),iu(We(t.hb,t,e))),it(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=jm(t,null,t.W),oa(t)};gt.prototype.close=function(){yu(this.g)};gt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Xa(this.g,e)}else this.v?(e={},e.__data__=su(t),Xa(this.g,e)):Xa(this.g,t)};gt.prototype.M=function(){this.g.j=null,delete this.j,yu(this.g),delete this.g,gt.Z.M.call(this)};function Km(t){lu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(Km,lu);function zm(){uu.call(this),this.status=1}Je(zm,uu);function Gr(t){this.g=t}Je(Gr,qm);Gr.prototype.xa=function(){Ge(this.g,"a")};Gr.prototype.wa=function(t){Ge(this.g,new Km(t))};Gr.prototype.va=function(t){Ge(this.g,new zm(t))};Gr.prototype.ua=function(){Ge(this.g,"b")};Eo.prototype.createWebChannel=Eo.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;Zo.NO_ERROR=0;Zo.TIMEOUT=8;Zo.HTTP_ERROR=6;dm.COMPLETE="complete";pm.EventType=hi;hi.OPEN="a";hi.CLOSE="b";hi.ERROR="c";hi.MESSAGE="d";je.prototype.listen=je.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.La;Me.prototype.getLastErrorCode=Me.prototype.Da;Me.prototype.getStatus=Me.prototype.ba;Me.prototype.getResponseJson=Me.prototype.Qa;Me.prototype.getResponseText=Me.prototype.ga;Me.prototype.send=Me.prototype.ea;var HC=function(){return new Eo},qC=function(){return Jo()},Ya=Zo,KC=dm,zC=ir,Wf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},WC=pi,Di=pm,GC=Me;const Gf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Ml("@firebase/firestore");function Xf(){return Jn.logLevel}function H(t,...e){if(Jn.logLevel<=fe.DEBUG){const n=e.map(_u);Jn.debug(`Firestore (${Xr}): ${t}`,...n)}}function Cn(t,...e){if(Jn.logLevel<=fe.ERROR){const n=e.map(_u);Jn.error(`Firestore (${Xr}): ${t}`,...n)}}function Yf(t,...e){if(Jn.logLevel<=fe.WARN){const n=e.map(_u);Jn.warn(`Firestore (${Xr}): ${t}`,...n)}}function _u(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function Te(t,e){t||se()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class QC{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new XC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new at(e)}}class JC{constructor(e,n,r){this.type="FirstParty",this.user=at.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class ZC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new JC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.p=n.token,new eA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Eu.A=-1;class Wm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=nA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Mr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new tt(0,0))}static max(){return new ae(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends zs{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const rA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends zs{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return rA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.fields=e,e.sort(ct.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Qe(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const sA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(Te(!!t),typeof t=="string"){let e=0;const n=sA.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ym(t){const e=t.mapValue.fields.__previous_value__;return Xm(e)?Ym(e):e}function Ws(t){const e=An(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ur{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){return t==null}function bo(t){return t===0&&1/t==-1/0}function oA(t){return typeof t=="number"&&Number.isInteger(t)&&!bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ne.fromString(e))}static fromName(e){return new G(Ne.fromString(e).popFirst(5))}static empty(){return new G(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xm(t)?4:aA(t)?9007199254740991:10:se()}function qt(t,e){if(t===e)return!0;const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ws(t).isEqual(Ws(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=An(r.timestampValue),o=An(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Lr(r.bytesValue).isEqual(Lr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Oe(r.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Oe(r.integerValue)===Oe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Oe(r.doubleValue),o=Oe(s.doubleValue);return i===o?bo(i)===bo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Mr(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Qf(i)!==Qf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!qt(i[a],o[a])))return!1;return!0}(t,e);default:return se()}}function Gs(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Fr(t,e){if(t===e)return 0;const n=Zn(t),r=Zn(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Oe(s.integerValue||s.doubleValue),a=Oe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jf(t.timestampValue,e.timestampValue);case 4:return Jf(Ws(t),Ws(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Lr(s),a=Lr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ge(Oe(s.latitude),Oe(i.latitude));return o!==0?o:ge(Oe(s.longitude),Oe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Fr(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Mi.mapValue&&i===Mi.mapValue)return 0;if(s===Mi.mapValue)return 1;if(i===Mi.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const f=Fr(o[a[u]],c[l[u]]);if(f!==0)return f}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw se()}}function Jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=An(t),r=An(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Cr(t){return zc(t)}function zc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=An(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Lr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=zc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${zc(r.fields[a])}`;return i+"}"}(t.mapValue):se();var e,n}function Wc(t){return!!t&&"integerValue"in t}function bu(t){return!!t&&"arrayValue"in t}function Zf(t){return!!t&&"nullValue"in t}function ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zi(t){return!!t&&"mapValue"in t}function Ts(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ts(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ts(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ts(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ts(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());zi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xt(Ts(this.value))}}function Qm(t){const e=[];return Yr(t.fields,(n,r)=>{const s=new ct([n]);if(zi(r)){const i=Qm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kc(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ze(e,0,ae.min(),ae.min(),xt.empty(),0)}static newFoundDocument(e,n,r){return new Ze(e,1,n,ae.min(),r,0)}static newNoDocument(e,n){return new Ze(e,2,n,ae.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,ae.min(),xt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function cA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new er(s,G.empty(),e)}function lA(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(ae.min(),G.empty(),-1)}static max(){return new er(ae.max(),G.empty(),-1)}}function uA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Li(this.root,e,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Li(this.root,e,this.comparator,!0)}}class Li{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ke.RED,this.left=s!=null?s:Ke.EMPTY,this.right=i!=null?i:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ke(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new td(this.data.getIterator())}getIteratorFrom(e){return new td(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class td{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function nd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new hA(t,e,n,r,s,i,o)}function Tu(t){const e=ie(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Cr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),aa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cr(r)).join(",")),e.P=n}return e.P}function fA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Cr(r.value)}`;var r}).join(", ")}]`),aa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Cr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Cr(n)).join(",")),`Target(${e})`}function Iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!_A(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!qt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sd(t.startAt,e.startAt)&&sd(t.endAt,e.endAt)}function Gc(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class lt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new dA(e,n,r):n==="array-contains"?new mA(e,r):n==="in"?new yA(e,r):n==="not-in"?new vA(e,r):n==="array-contains-any"?new wA(e,r):new lt(e,n,r)}static V(e,n,r){return n==="in"?new pA(e,r):new gA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Fr(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.v(Fr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class dA extends lt{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.v(n)}}class pA extends lt{constructor(e,n){super(e,"in",n),this.keys=Jm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gA extends lt{constructor(e,n){super(e,"not-in",n),this.keys=Jm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class mA extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bu(n)&&Gs(n.arrayValue,this.value)}}class yA extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gs(this.value.arrayValue,n)}}class vA extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gs(this.value.arrayValue,n)}}class wA extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gs(this.value.arrayValue,r))}}class To{constructor(e,n){this.position=e,this.inclusive=n}}class Is{constructor(e,n="asc"){this.field=e,this.dir=n}}function _A(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function rd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Fr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function EA(t,e,n,r,s,i,o,a){return new ca(t,e,n,r,s,i,o,a)}function Su(t){return new ca(t)}function bA(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function IA(t){for(const e of t.filters)if(e.S())return e.field;return null}function SA(t){return t.collectionGroup!==null}function Xs(t){const e=ie(t);if(e.D===null){e.D=[];const n=IA(e),r=TA(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Is(n)),e.D.push(new Is(ct.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Is(ct.keyField(),i))}}}return e.D}function tr(t){const e=ie(t);if(!e.C)if(e.limitType==="F")e.C=nd(e.path,e.collectionGroup,Xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Xs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Is(i.field,o))}const r=e.endAt?new To(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new To(e.startAt.position,e.startAt.inclusive):null;e.C=nd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function CA(t,e,n){return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function la(t,e){return Iu(tr(t),tr(e))&&t.limitType===e.limitType}function Zm(t){return`${Tu(tr(t))}|lt:${t.limitType}`}function Xc(t){return`Query(target=${fA(tr(t))}; limitType=${t.limitType})`}function Cu(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):G.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=rd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Xs(n),r)||n.endAt&&!function(s,i,o){const a=rd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Xs(n),r))}(t,e)}function AA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ey(t){return(e,n)=>{let r=!1;for(const s of Xs(t)){const i=kA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kA(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Fr(a,c):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bo(e)?"-0":e}}function ny(t){return{integerValue:""+t}}function RA(t,e){return oA(e)?ny(e):ty(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this._=void 0}}function NA(t,e,n){return t instanceof Io?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ys?sy(t,e):t instanceof Qs?iy(t,e):function(r,s){const i=ry(r,s),o=id(i)+id(r.k);return Wc(i)&&Wc(r.k)?ny(o):ty(r.M,o)}(t,e)}function xA(t,e,n){return t instanceof Ys?sy(t,e):t instanceof Qs?iy(t,e):n}function ry(t,e){return t instanceof So?Wc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Io extends ua{}class Ys extends ua{constructor(e){super(),this.elements=e}}function sy(t,e){const n=oy(e);for(const r of t.elements)n.some(s=>qt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Qs extends ua{constructor(e){super(),this.elements=e}}function iy(t,e){let n=oy(e);for(const r of t.elements)n=n.filter(s=>!qt(s,r));return{arrayValue:{values:n}}}class So extends ua{constructor(e,n){super(),this.M=e,this.k=n}}function id(t){return Oe(t.integerValue||t.doubleValue)}function oy(t){return bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ys&&r instanceof Ys||n instanceof Qs&&r instanceof Qs?Mr(n.elements,r.elements,qt):n instanceof So&&r instanceof So?qt(n.k,r.k):n instanceof Io&&r instanceof Io}(t.transform,e.transform)}class PA{constructor(e,n){this.version=e,this.transformResults=n}}class Ar{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ar}static exists(e){return new Ar(void 0,e)}static updateTime(e){return new Ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ha{}function DA(t,e,n){t instanceof fa?function(r,s,i){const o=r.value.clone(),a=cd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof yi?function(r,s,i){if(!Wi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=cd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(ay(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Yc(t,e,n){t instanceof fa?function(r,s,i){if(!Wi(r.precondition,s))return;const o=r.value.clone(),a=ld(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(ad(s),o).setHasLocalMutations()}(t,e,n):t instanceof yi?function(r,s,i){if(!Wi(r.precondition,s))return;const o=ld(r.fieldTransforms,i,s),a=s.data;a.setAll(ay(r)),a.setAll(o),s.convertToFoundDocument(ad(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Wi(r.precondition,s)&&s.convertToNoDocument(ae.min())}(t,e)}function MA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ry(r.transform,s||null);i!=null&&(n==null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function od(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Mr(n,r,(s,i)=>OA(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ad(t){return t.isFoundDocument()?t.version:ae.min()}class fa extends ha{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class yi extends ha{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function ay(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cd(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,xA(o,a,n[s]))}return r}function ld(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,NA(i,o,e))}return r}class LA extends ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class UA extends ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,le;function BA(t){switch(t){default:return se();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function cy(t){if(t===void 0)return Cn("GRPC error has no .code"),N.UNKNOWN;switch(t){case xe.OK:return N.OK;case xe.CANCELLED:return N.CANCELLED;case xe.UNKNOWN:return N.UNKNOWN;case xe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case xe.INTERNAL:return N.INTERNAL;case xe.UNAVAILABLE:return N.UNAVAILABLE;case xe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case xe.NOT_FOUND:return N.NOT_FOUND;case xe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case xe.ABORTED:return N.ABORTED;case xe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case xe.DATA_LOSS:return N.DATA_LOSS;default:return se()}}(le=xe||(xe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Gm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=new He(G.comparator);function nr(){return $A}const VA=new He(G.comparator);function Qc(...t){let e=VA;for(const n of t)e=e.insert(n.key,n);return e}function Qa(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const jA=new He(G.comparator),HA=new Xe(G.comparator);function Se(...t){let e=HA;for(const n of t)e=e.add(n);return e}const qA=new Xe(ge);function ly(){return qA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,vi.createSynthesizedTargetChangeForCurrentChange(e,n)),new da(ae.min(),r,ly(),nr(),Se())}}class vi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new vi(Qe.EMPTY_BYTE_STRING,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class uy{constructor(e,n){this.targetId=e,this.$=n}}class hy{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ud{constructor(){this.B=0,this.L=fd(),this.U=Qe.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Se(),n=Se(),r=Se();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se()}}),new vi(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=fd()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class KA{constructor(e){this.nt=e,this.st=new Map,this.it=nr(),this.rt=hd(),this.ot=new Xe(ge)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(Gc(i))if(r===0){const o=new G(i.path);this.ct(n,o,Ze.newNoDocument(o,ae.min()))}else Te(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Gc(a.target)){const c=new G(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Ze.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=Se();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new da(e,n,this.ot,this.it,r);return this.it=nr(),this.rt=hd(),this.ot=new Xe(ge),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new ud,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Xe(ge),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ud),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function hd(){return new He(G.comparator)}function fd(){return new He(G.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),WA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class GA{constructor(e,n){this.databaseId=e,this.N=n}}function Co(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fy(t,e){return t.N?e.toBase64():e.toUint8Array()}function XA(t,e){return Co(t,e.toTimestamp())}function Jt(t){return Te(!!t),ae.fromTimestamp(function(e){const n=An(e);return new tt(n.seconds,n.nanos)}(t))}function Au(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dy(t){const e=Ne.fromString(t);return Te(my(e)),e}function Jc(t,e){return Au(t.databaseId,e.path)}function Ja(t,e){const n=dy(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(py(n))}function Zc(t,e){return Au(t.databaseId,e)}function YA(t){const e=dy(t);return e.length===4?Ne.emptyPath():py(e)}function el(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function py(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dd(t,e,n){return{name:Jc(t,e),fields:n.value.mapValue.fields}}function QA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.N?(Te(l===void 0||typeof l=="string"),Qe.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),Qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?N.UNKNOWN:cy(c.code);return new Q(l,c.message||"")}(o);n=new hy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ja(t,r.document.name),i=Jt(r.document.updateTime),o=new xt({mapValue:{fields:r.document.fields}}),a=Ze.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Gi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ja(t,r.document),i=r.readTime?Jt(r.readTime):ae.min(),o=Ze.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Gi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ja(t,r.document),i=r.removedTargetIds||[];n=new Gi([],i,s,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new FA(s),o=r.targetId;n=new uy(o,i)}}return n}function JA(t,e){let n;if(e instanceof fa)n={update:dd(t,e.key,e.value)};else if(e instanceof LA)n={delete:Jc(t,e.key)};else if(e instanceof yi)n={update:dd(t,e.key,e.data),updateMask:ck(e.fieldMask)};else{if(!(e instanceof UA))return se();n={verify:Jc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Io)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ys)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Qs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof So)return{fieldPath:i.field.canonicalString(),increment:o.k};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:XA(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function ZA(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Jt(r.updateTime):Jt(s);return i.isEqual(ae.min())&&(i=Jt(s)),new PA(i,r.transformResults||[])}(n,e))):[]}function ek(t,e){return{documents:[Zc(t,e.path)]}}function tk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(ed(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NAN"}};if(Zf(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ed(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NOT_NAN"}};if(Zf(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(h.field),op:ik(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:hr(u.field),direction:sk(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||aa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function nk(t){let e=YA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=gy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Is(yr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,aa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new To(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new To(f,h)}(n.endAt)),EA(e,s,o,i,a,"F",c,l)}function rk(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gy(t){return t?t.unaryFilter!==void 0?[ak(t)]:t.fieldFilter!==void 0?[ok(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>gy(e)).reduce((e,n)=>e.concat(n)):se():[]}function sk(t){return zA[t]}function ik(t){return WA[t]}function hr(t){return{fieldPath:t.canonicalString()}}function yr(t){return ct.fromServerFormat(t.fieldPath)}function ok(t){return lt.create(yr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}function ak(t){switch(t.unaryFilter.op){case"IS_NAN":const e=yr(t.unaryFilter.field);return lt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=yr(t.unaryFilter.field);return lt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yr(t.unaryFilter.field);return lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=yr(t.unaryFilter.field);return lt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return se()}}function ck(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function my(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&DA(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Yc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Yc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ae.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&Mr(this.mutations,e.mutations,(n,r)=>od(n,r))&&Mr(this.baseMutations,e.baseMutations,(n,r)=>od(n,r))}}class ku{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=jA;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ku(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,r,s,i=ae.min(),o=ae.min(),a=Qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.Jt=e}}function pk(t){const e=nk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?CA(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.qe=new mk}addToCollectionParentIndex(e,n){return this.qe.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(er.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class mk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Br(0)}static yn(){return new Br(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==lk)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return G.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):SA(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new G(n)).next(r=>{let s=Qc();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=Qc();return this.indexManager.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const c=function(l,u){return new ca(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.zs(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=s.get(c);l==null&&(l=Ze.newInvalidDocument(c),s=s.insert(c,l)),Yc(a,l,o.localWriteTime),l.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{Cu(n,o)||(s=s.remove(i))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ru(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,r,s){return this.ti(e,n).next(i=>i||this.ei(e,n,s,r)).next(i=>i||this.ni(e,n))}ti(e,n){return O.resolve(null)}ei(e,n,r,s){return bA(n)||s.isEqual(ae.min())?this.ni(e,n):this.Zs.Ks(e,r).next(i=>{const o=this.si(n,i);return this.ii(n,o,r,s)?this.ni(e,n):(Xf()<=fe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xc(n)),this.ri(e,o,n,cA(s,-1)))})}si(e,n){let r=new Xe(ey(e));return n.forEach((s,i)=>{Cu(e,i)&&(r=r.add(i))}),r}ii(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ni(e,n){return Xf()<=fe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Xc(n)),this.Zs.Qs(e,n,er.min())}ri(e,n,r,s){return this.Zs.Qs(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,s){this.persistence=e,this.oi=n,this.M=s,this.ui=new He(ge),this.ai=new Qr(i=>Tu(i),Iu),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(r)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new vk(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function Ek(t,e,n,r){return new _k(t,e,n,r)}async function yy(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.li(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Se();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.fi.Ks(r,c).next(l=>({di:l,removedBatchIds:o,addedBatchIds:a}))})})}function bk(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(v=>{const b=c.docVersions.get(p);Te(b!==null),v.version.compareTo(b)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),f.next(()=>o.Bs.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.fi.Ks(r,s))})}function vy(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function Tk(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Qe.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(u,f),function(p,v,b){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,f,l)&&a.push(n.fs.updateTargetData(i,f))});let c=nr();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ik(i,o,e.documentUpdates).next(l=>{c=l})),!r.isEqual(ae.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=s,i))}function Ik(t,e,n){let r=Se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=nr();return n.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(ae.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):H("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Sk(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function Ck(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new zn(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ui=n.ui.insert(r.targetId,r),n.ai.set(e,r.targetId)),r})}async function tl(t,e,n){const r=ie(t),s=r.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!wi(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ui=r.ui.remove(e),r.ai.delete(s.target)}function pd(t,e,n){const r=ie(t);let s=ae.min(),i=Se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ie(a),h=u.ai.get(l);return h!==void 0?O.resolve(u.ui.get(h)):u.fs.getTargetData(c,l)}(r,o,tr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.oi.Qs(o,e,n?s:ae.min(),n?i:Se())).next(a=>(Ak(r,AA(e),a),{documents:a,_i:i})))}function Ak(t,e,n){let r=ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ci.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return O.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var r;return this.yi.set(n.id,{id:(r=n).id,version:r.version,createTime:Jt(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(r){return{name:r.name,query:pk(r.bundledQuery),readTime:Jt(r.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.overlays=new He(G.comparator),this.Ii=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ii.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Qa(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Qa(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qa(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return O.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.Ii.get(s.largestBatchId).delete(r.key);this.Ii.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fk(n,r));let i=this.Ii.get(n);i===void 0&&(i=Se(),this.Ii.set(n,i)),this.Ii.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.Ti=new Xe(Fe.Ei),this.Ai=new Xe(Fe.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Ti=this.Ti.add(r),this.Ai=this.Ai.add(r)}bi(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Pi(new Fe(e,n))}Vi(e,n){e.forEach(r=>this.removeReference(r,n))}vi(e){const n=new G(new Ne([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.Ai.forEachInRange([r,s],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new G(new Ne([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=Se();return this.Ai.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.Ti.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return G.comparator(e.key,n.key)||ge(e.Ci,n.Ci)}static Ri(e,n){return ge(e.Ci,n.Ci)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Xe(Fe.Ei)}checkEmpty(e){return O.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new hk(i,n,r,s);this.Bs.push(o);for(const a of s)this.Ni=this.Ni.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Mi(r),i=s<0?0:s;return O.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return O.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([r,s],o=>{const a=this.ki(o.Ci);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(ge);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{r=r.add(a.Ci)})}),O.resolve(this.Oi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new G(i),0);let a=new Xe(ge);return this.Ni.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Ci)),!0)},o),O.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(r=>{const s=this.ki(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let r=this.Ni;return O.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Ni=r})}_n(e){}containsKey(e,n){const r=new Fe(n,0),s=this.Ni.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,O.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.$i=e,this.docs=new He(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.$i(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),O.resolve(r)}getAllFromCollection(e,n,r){let s=nr();const i=new G(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||uA(lA(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,s){se()}Bi(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ok(this)}getSize(e){return O.resolve(this.size)}}class Ok extends yk{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.persistence=e,this.Li=new Qr(n=>Tu(n),Iu),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Nu,this.targetCount=0,this.Ki=Br.gn()}forEachTarget(e,n){return this.Li.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ui&&(this.Ui=n),O.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Br(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Tn(n),O.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Li.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.qi.bi(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.qi.Vi(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qi.Di(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n){this.Gi={},this.overlays={},this.es=new Eu(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Pk(this),this.indexManager=new gk,this.ds=function(r){return new xk(r)}(r=>this.referenceDelegate.Qi(r)),this.M=new dk(n),this._s=new kk(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Rk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Gi[e.toKey()];return r||(r=new Nk(n,this.referenceDelegate),this.Gi[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new Mk(this.es.next());return this.referenceDelegate.ji(),r(s).next(i=>this.referenceDelegate.Wi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zi(e,n){return O.or(Object.values(this.Gi).map(r=>()=>r.containsKey(e,n)))}}class Mk extends uk{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.Hi=new Nu,this.Ji=null}static Yi(e){return new xu(e)}get Xi(){if(this.Ji)return this.Ji;throw se()}addReference(e,n,r){return this.Hi.addReference(r,n),this.Xi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Hi.removeReference(r,n),this.Xi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(s=>this.Xi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xi,r=>{const s=G.fromPath(r);return this.Zi(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(r=>{r?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return O.or([()=>O.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class gd{constructor(){this.activeTargetIds=ly()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lk{constructor(){this.Ur=new gd,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new gd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{Kr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,s,i){const o=this.ho(e,n);H("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(H("RestConnection","Received: ",c),c),c=>{throw Yf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i){return this.co(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=Fk[e];return`${this.uo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new GC;a.listenOnce(KC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ya.NO_ERROR:const l=a.getResponseJson();H("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ya.TIMEOUT:H("Connection",'RPC "'+e+'" timed out'),o(new Q(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ya.HTTP_ERROR:const u=a.getStatus();if(H("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const v=p.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(v)>=0?v:N.UNKNOWN}(h.status);o(new Q(f,h.message))}else o(new Q(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Q(N.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{H("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=HC(),o=qC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new WC({})),this.lo(a.initMessageHeaders,n,r),cg()||ug()||Lb()||hg()||Ub()||lg()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");H("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new Bk({Jr:v=>{h?H("Connection","Not sending because WebChannel is closed:",v):(u||(H("Connection","Opening WebChannel transport."),l.open(),u=!0),H("Connection","WebChannel sending:",v),l.send(v))},Yr:()=>l.close()}),p=(v,b,m)=>{v.listen(b,w=>{try{m(w)}catch(y){setTimeout(()=>{throw y},0)}})};return p(l,Di.EventType.OPEN,()=>{h||H("Connection","WebChannel transport opened.")}),p(l,Di.EventType.CLOSE,()=>{h||(h=!0,H("Connection","WebChannel transport closed"),f.ro())}),p(l,Di.EventType.ERROR,v=>{h||(h=!0,Yf("Connection","WebChannel transport errored:",v),f.ro(new Q(N.UNAVAILABLE,"The operation could not be completed")))}),p(l,Di.EventType.MESSAGE,v=>{var b;if(!h){const m=v.data[0];Te(!!m);const w=m,y=w.error||((b=w[0])===null||b===void 0?void 0:b.error);if(y){H("Connection","WebChannel received error:",y);const E=y.status;let T=function(U){const k=xe[U];if(k!==void 0)return cy(k)}(E),L=y.message;T===void 0&&(T=N.INTERNAL,L="Unknown error status: "+E+" with message "+y.message),h=!0,f.ro(new Q(T,L)),l.close()}else H("Connection","WebChannel received:",m),f.oo(m)}}),p(o,zC.STAT_EVENT,v=>{v.stat===Wf.PROXY?H("Connection","Detected buffering proxy"):v.stat===Wf.NOPROXY&&H("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}function Za(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){return new GA(t,!0)}class wy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,r,s,i,o,a,c){this.Yn=e,this.Vo=r,this.vo=s,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new wy(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Do===n&&this.Qo(r,s)},r=>{e(()=>{const s=new Q(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(s)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(s=>{r(()=>this.jo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vk extends _y{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=QA(this.M,e),r=function(s){if(!("targetChange"in s))return ae.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ae.min():i.readTime?Jt(i.readTime):ae.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=el(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Gc(a)?{documents:ek(s,a)}:{query:tk(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=fy(s,i.resumeToken):i.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=Co(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=rk(this.M,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=el(this.M),n.removeTarget=e,this.Lo(n)}}class jk extends _y{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=ZA(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.tu(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=el(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JA(this.M,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.M=s,this.su=!1}iu(){if(this.su)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(N.UNKNOWN,s.toString())})}_o(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So._o(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(N.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class qk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Cn(n),this.uu=!1):H("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{r.enqueueAndForget(async()=>{or(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ie(a);c.wu.add(4),await Ei(c),c.yu.set("Unknown"),c.wu.delete(4),await ga(c)}(this))})}),this.yu=new qk(r,s)}}async function ga(t){if(or(t))for(const e of t.mu)await e(!0)}async function Ei(t){for(const e of t.mu)await e(!1)}function Ey(t,e){const n=ie(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Du(n)?Pu(n):Jr(n).Mo()&&Ou(n,e))}function by(t,e){const n=ie(t),r=Jr(n);n._u.delete(e),r.Mo()&&Ty(n,e),n._u.size===0&&(r.Mo()?r.$o():or(n)&&n.yu.set("Unknown"))}function Ou(t,e){t.pu.Z(e.targetId),Jr(t).Ho(e)}function Ty(t,e){t.pu.Z(e),Jr(t).Jo(e)}function Pu(t){t.pu=new KA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),Jr(t).start(),t.yu.au()}function Du(t){return or(t)&&!Jr(t).ko()&&t._u.size>0}function or(t){return ie(t).wu.size===0}function Iy(t){t.pu=void 0}async function zk(t){t._u.forEach((e,n)=>{Ou(t,e)})}async function Wk(t,e){Iy(t),Du(t)?(t.yu.lu(e),Pu(t)):t.yu.set("Unknown")}async function Gk(t,e,n){if(t.yu.set("Online"),e instanceof hy&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ao(t,r)}else if(e instanceof Gi?t.pu.ut(e):e instanceof uy?t.pu._t(e):t.pu.ht(e),!n.isEqual(ae.min()))try{const r=await vy(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s._u.get(c);l&&s._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s._u.get(a);if(!c)return;s._u.set(a,c.withResumeToken(Qe.EMPTY_BYTE_STRING,c.snapshotVersion)),Ty(s,a);const l=new zn(c.target,a,1,c.sequenceNumber);Ou(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ao(t,r)}}async function Ao(t,e,n){if(!wi(e))throw e;t.wu.add(1),await Ei(t),t.yu.set("Offline"),n||(n=()=>vy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ga(t)})}function Sy(t,e){return e().catch(n=>Ao(t,n,e))}async function ma(t){const e=ie(t),n=kn(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Xk(e);)try{const s=await Sk(e.localStore,r);if(s===null){e.du.length===0&&n.$o();break}r=s.batchId,Yk(e,s)}catch(s){await Ao(e,s)}Cy(e)&&Ay(e)}function Xk(t){return or(t)&&t.du.length<10}function Yk(t,e){t.du.push(e);const n=kn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Cy(t){return or(t)&&!kn(t).ko()&&t.du.length>0}function Ay(t){kn(t).start()}async function Qk(t){kn(t).nu()}async function Jk(t){const e=kn(t);for(const n of t.du)e.Zo(n.mutations)}async function Zk(t,e,n){const r=t.du.shift(),s=ku.from(r,e,n);await Sy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ma(t)}async function eR(t,e){e&&kn(t).Xo&&await async function(n,r){if(s=r.code,BA(s)&&s!==N.ABORTED){const i=n.du.shift();kn(n).Fo(),await Sy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ma(n)}var s}(t,e),Cy(t)&&Ay(t)}async function yd(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=or(n);n.wu.add(3),await Ei(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ga(n)}async function tR(t,e){const n=ie(t);e?(n.wu.delete(2),await ga(n)):e||(n.wu.add(2),await Ei(n),n.yu.set("Unknown"))}function Jr(t){return t.Iu||(t.Iu=function(e,n,r){const s=ie(e);return s.iu(),new Vk(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:zk.bind(null,t),eo:Wk.bind(null,t),zo:Gk.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Du(t)?Pu(t):t.yu.set("Unknown")):(await t.Iu.stop(),Iy(t))})),t.Iu}function kn(t){return t.Tu||(t.Tu=function(e,n,r){const s=ie(e);return s.iu(),new jk(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:Qk.bind(null,t),eo:eR.bind(null,t),eu:Jk.bind(null,t),tu:Zk.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await ma(t)):(await t.Tu.stop(),t.du.length>0&&(H("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Mu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lu(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),wi(t))return new Q(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Qc(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new kr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.Eu=new He(G.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):se():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class $r{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new $r(e,n,kr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.Ru=void 0,this.listeners=[]}}class rR{constructor(){this.queries=new Qr(e=>Zm(e),la),this.onlineState="Unknown",this.bu=new Set}}async function sR(t,e){const n=ie(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new nR),s)try{i.Ru=await n.onListen(r)}catch(o){const a=Lu(o,`Initialization of query '${Xc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&Uu(n)}async function iR(t,e){const n=ie(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function oR(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(s)&&(r=!0);o.Ru=s}}r&&Uu(n)}function aR(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Uu(t){t.bu.forEach(e=>{e.next()})}class cR{constructor(e,n,r){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $r(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=$r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.key=e}}class Ry{constructor(e){this.key=e}}class lR{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=Se(),this.mutatedKeys=Se(),this.Gu=ey(e),this.Qu=new kr(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new vd,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Cu(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;f&&p?f.data.isEqual(p.data)?v!==b&&(r.track({type:3,doc:p}),m=!0):this.Hu(f,p)||(r.track({type:2,doc:p}),m=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),m=!0):f&&!p&&(r.track({type:1,doc:f}),m=!0,(c||l)&&(a=!0)),m&&(p?(o=o.add(p),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,f){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return p(h)-p(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new $r(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new vd,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Se(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Ry(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new ky(r))}),n}ta(e){this.Uu=e._i,this.Ku=Se();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return $r.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class uR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hR{constructor(e){this.key=e,this.na=!1}}class fR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Qr(a=>Zm(a),la),this.ra=new Map,this.oa=new Set,this.ua=new He(G.comparator),this.aa=new Map,this.ca=new Nu,this.ha={},this.la=new Map,this.fa=Br.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function dR(t,e){const n=TR(t);let r,s;const i=n.ia.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ea();else{const o=await Ck(n.localStore,tr(e));n.isPrimaryClient&&Ey(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await pR(n,e,r,a==="current")}return s}async function pR(t,e,n,r){t._a=(u,h,f)=>async function(p,v,b,m){let w=v.view.Wu(b);w.ii&&(w=await pd(p.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,w)));const y=m&&m.targetChanges.get(v.targetId),E=v.view.applyChanges(w,p.isPrimaryClient,y);return _d(p,v.targetId,E.Xu),E.snapshot}(t,u,h,f);const s=await pd(t.localStore,e,!0),i=new lR(e,s._i),o=i.Wu(s.documents),a=vi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);_d(t,n,c.Xu);const l=new uR(e,n,i);return t.ia.set(e,l),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function gR(t,e){const n=ie(t),r=n.ia.get(e),s=n.ra.get(r.targetId);if(s.length>1)return n.ra.set(r.targetId,s.filter(i=>!la(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await tl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),by(n.remoteStore,r.targetId),nl(n,r.targetId)}).catch(_i)):(nl(n,r.targetId),await tl(n.localStore,r.targetId,!0))}async function mR(t,e,n){const r=IR(t);try{const s=await function(i,o){const a=ie(i),c=tt.now(),l=o.reduce((h,f)=>h.add(f.key),Se());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,l).next(f=>{u=f;const p=[];for(const v of o){const b=MA(v,u.get(v.key));b!=null&&p.push(new yi(v.key,b,Qm(b.value.mapValue),Ar.exists(!0)))}return a.Bs.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new He(ge)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(r,s.batchId,n),await bi(r,s.changes),await ma(r.remoteStore)}catch(s){const i=Lu(s,"Failed to persist write");n.reject(i)}}async function Ny(t,e){const n=ie(t);try{const r=await Tk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.aa.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.na=!0:s.modifiedDocuments.size>0?Te(o.na):s.removedDocuments.size>0&&(Te(o.na),o.na=!1))}),await bi(n,r,e)}catch(r){await _i(r)}}function wd(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ie(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Uu(a)}(r.eventManager,e),s.length&&r.sa.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yR(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.aa.get(e),i=s&&s.key;if(i){let o=new He(G.comparator);o=o.insert(i,Ze.newNoDocument(i,ae.min()));const a=Se().add(i),c=new da(ae.min(),new Map,new Xe(ge),o,a);await Ny(r,c),r.ua=r.ua.remove(i),r.aa.delete(e),Fu(r)}else await tl(r.localStore,e,!1).then(()=>nl(r,e,n)).catch(_i)}async function vR(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await bk(n.localStore,e);Oy(n,r,null),xy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bi(n,s)}catch(s){await _i(s)}}async function wR(t,e,n){const r=ie(t);try{const s=await function(i,o){const a=ie(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(Te(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,l))})}(r.localStore,e);Oy(r,e,n),xy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bi(r,s)}catch(s){await _i(s)}}function xy(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function Oy(t,e,n){const r=ie(t);let s=r.ha[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ha[r.currentUser.toKey()]=s}}function nl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(r=>{t.ca.containsKey(r)||Py(t,r)})}function Py(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(by(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),Fu(t))}function _d(t,e,n){for(const r of n)r instanceof ky?(t.ca.addReference(r.key,e),_R(t,r)):r instanceof Ry?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||Py(t,r.key)):se()}function _R(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.oa.add(r),Fu(t))}function Fu(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new G(Ne.fromString(e)),r=t.fa.next();t.aa.set(r,new hR(n)),t.ua=t.ua.insert(n,r),Ey(t.remoteStore,new zn(tr(Su(n.path)),r,2,Eu.A))}}async function bi(t,e,n){const r=ie(t),s=[],i=[],o=[];r.ia.isEmpty()||(r.ia.forEach((a,c)=>{o.push(r._a(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Ru.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.sa.zo(s),await async function(a,c){const l=ie(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.Hs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.Js,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!wi(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.ui.get(h),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);l.ui=l.ui.insert(h,v)}}}(r.localStore,i))}async function ER(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await yy(n.localStore,e);n.currentUser=e,function(s,i){s.la.forEach(o=>{o.forEach(a=>{a.reject(new Q(N.CANCELLED,i))})}),s.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bi(n,r.di)}}function bR(t,e){const n=ie(t),r=n.aa.get(e);if(r&&r.na)return Se().add(r.key);{let s=Se();const i=n.ra.get(e);if(!i)return s;for(const o of i){const a=n.ia.get(o);s=s.unionWith(a.view.ju)}return s}}function TR(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yR.bind(null,e),e.sa.zo=oR.bind(null,e.eventManager),e.sa.wa=aR.bind(null,e.eventManager),e}function IR(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wR.bind(null,e),e}class SR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=pa(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return Ek(this.persistence,new wk,e.initialUser,this.M)}ya(e){return new Dk(xu.Yi,this.M)}ga(e){return new Lk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ER.bind(null,this.syncEngine),await tR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rR}createDatastore(e){const n=pa(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new $k(s));var s;return function(i,o,a,c){return new Hk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>wd(this.syncEngine,a,0),o=md.vt()?new md:new Uk,new Kk(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new fR(r,s,i,o,a,c);return l&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ie(e);H("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Ei(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=Wm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function RR(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function NR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xR(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>yd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>yd(e.remoteStore,i)),t.onlineComponents=e}async function xR(t){return t.offlineComponents||(H("FirestoreClient","Using default OfflineComponentProvider"),await RR(t,new SR)),t.offlineComponents}async function Dy(t){return t.onlineComponents||(H("FirestoreClient","Using default OnlineComponentProvider"),await NR(t,new CR)),t.onlineComponents}function OR(t){return Dy(t).then(e=>e.syncEngine)}async function PR(t){const e=await Dy(t),n=e.eventManager;return n.onListen=dR.bind(null,e.syncEngine),n.onUnlisten=gR.bind(null,e.syncEngine),n}function DR(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new AR({next:h=>{i.enqueueAndForget(()=>iR(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new Q(N.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new Q(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new cR(Su(o.path),l,{includeMetadataChanges:!0,ku:!0});return sR(s,u)}(await PR(t),t.asyncQueue,e,n,r)),r.promise}const Ed=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t,e,n){if(!n)throw new Q(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LR(t,e,n,r){if(e===!0&&r===!0)throw new Q(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bd(t){if(!G.isDocumentKey(t))throw new Q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function ko(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bu(t);throw new Q(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,LR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Td({}),this._settingsFrozen=!1,e instanceof Ur?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new Q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(s.options.projectId)}(e))}get app(){if(!this._app)throw new Q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Td(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new YC;switch(n.type){case"gapi":const r=n.client;return Te(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new ZC(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new Q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ed.get(e);n&&(H("ComponentProvider","Removing Datastore"),Ed.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Js(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class $u{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $u(this.firestore,e,this._query)}}class Js extends $u{constructor(e,n,r){super(e,n,Su(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new G(e))}withConverter(e){return new Js(this.firestore,e,this._path)}}function t1(t,e,...n){if(t=jt(t),arguments.length===1&&(e=Wm.R()),MR("doc","path",e),t instanceof My){const r=Ne.fromString(e,...n);return bd(r),new Ct(t,null,new G(r))}{if(!(t instanceof Ct||t instanceof Js))throw new Q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return bd(r),new Ct(t.firestore,t instanceof Js?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new wy(this,"async_queue_retry"),this.Qa=()=>{const n=Za();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Za();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Za();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new Tn;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!wi(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(r=>{this.Ua=r,this.qa=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.qa=!1,r))));return this.Fa=n,n}enqueueAfterDelay(e,n,r){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const s=Mu.createAndSchedule(this,e,n,r,i=>this.Ha(i));return this.La.push(s),s}ja(){this.Ua&&se()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class Vu extends My{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new UR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Fy(this),this._firestoreClient.terminate()}}function Ly(t=gg()){return Fl(t,"firestore").getImmediate()}function Uy(t){return t._firestoreClient||Fy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fy(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new iA(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new kR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vr(Qe.fromBase64String(e))}catch(n){throw new Q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vr(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=/^__.*__$/;class BR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new fa(e,this.data,n,this.fieldTransforms)}}function $y(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class qu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.rc(e),s}oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.tc(),s}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return Ro(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if($y(this.ec)&&FR.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class $R{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||pa(e)}lc(e,n,r,s=!1){return new qu({ec:e,methodName:n,hc:r,path:ct.emptyPath(),ic:!1,cc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function VR(t){const e=t._freezeSettings(),n=pa(t._databaseId);return new $R(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jR(t,e,n,r,s,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,s);qy("Data must be an object, but it was:",o,r);const a=jy(r,o);let c,l;if(i.merge)c=new Kc(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=HR(e,h,n);if(!o.contains(f))throw new Q(N.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);KR(u,f)||u.push(f)}c=new Kc(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new BR(new xt(a),c,l)}function Vy(t,e){if(Hy(t=jt(t)))return qy("Unsupported field value:",e,t),jy(t,e);if(t instanceof By)return function(n,r){if(!$y(r.ec))throw r.ac(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ac(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Vy(o,r.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=jt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return RA(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=tt.fromDate(n);return{timestampValue:Co(r.M,s)}}if(n instanceof tt){const s=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Co(r.M,s)}}if(n instanceof Hu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vr)return{bytesValue:fy(r.M,n._byteString)};if(n instanceof Ct){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Au(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ac(`Unsupported field value: ${Bu(n)}`)}(t,e)}function jy(t,e){const n={};return Gm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,(r,s)=>{const i=Vy(s,e.sc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Hy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Hu||t instanceof Vr||t instanceof Ct||t instanceof By)}function qy(t,e,n){if(!Hy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Bu(n);throw r==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function HR(t,e,n){if((e=jt(e))instanceof ju)return e._internalPath;if(typeof e=="string")return Ky(t,e);throw Ro("Field path arguments must be of type string or ",t,!1,void 0,n)}const qR=new RegExp("[~\\*/\\[\\]]");function Ky(t,e,n){if(e.search(qR)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ju(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ro(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Q(N.INVALID_ARGUMENT,a+t+c)}function KR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zR extends zy{data(){return super.data()}}function Wy(t,e){return typeof e=="string"?Ky(t,e):e instanceof ju?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gy extends zy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new GR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class GR extends Gy{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{convertValue(e,n="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){const r={};return Yr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Hu(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ym(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ws(e));default:return null}}convertTimestamp(e){const n=An(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Te(my(r));const s=new Ur(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Cn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){t=ko(t,Ct);const e=ko(t.firestore,Vu);return DR(Uy(e),t._key).then(n=>ZR(e,t,n))}class QR extends XR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function r1(t,e,n){t=ko(t,Ct);const r=ko(t.firestore,Vu),s=YR(t.converter,e,n);return JR(r,[jR(VR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ar.none())])}function JR(t,e){return function(n,r){const s=new Tn;return n.asyncQueue.enqueueAndForget(async()=>mR(await OR(n),r,s)),s.promise}(Uy(t),e)}function ZR(t,e,n){const r=n.docs.get(e._key),s=new QR(t);return new Gy(t,s,e._key,r,new WR(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Xr=n})(si),Or(new Wn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Vu(s,new QC(n.getProvider("auth-internal")),new tA(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),bn(Gf,"3.4.9",t),bn(Gf,"3.4.9","esm2017")})();var Zr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const eN={apiKey:"AIzaSyD9EOSlnmGS-kseGdB2F9nOWG9UIlSBP_E",authDomain:"cookbook-769df.firebaseapp.com",projectId:"cookbook-769df",storageBucket:"cookbook-769df.appspot.com",messagingSenderId:"644720982505",appId:"1:644720982505:web:7ddfea4d742c26c2c23378"},tN=Bl(eN);Xl();new Nt;Ly(tN);const Ui=void 0;const nN={apiKey:"AIzaSyD9EOSlnmGS-kseGdB2F9nOWG9UIlSBP_E",authDomain:"cookbook-769df.firebaseapp.com",projectId:"cookbook-769df",storageBucket:"cookbook-769df.appspot.com",messagingSenderId:"644720982505",appId:"1:644720982505:web:7ddfea4d742c26c2c23378"},rN=Bl(nN);Xl();new Nt;Ly(rN);const Fi=void 0;var sN=[{name:"index",path:"/",file:"C:/Users/izacp/Desktop/dev/cookbook/pages/index.vue",children:[],meta:Ui,alias:(Ui==null?void 0:Ui.alias)||[],component:()=>lf(()=>import("./index-4e7e60a9.mjs"),[])},{name:"newrecipe",path:"/newrecipe",file:"C:/Users/izacp/Desktop/dev/cookbook/pages/newrecipe.vue",children:[],meta:Fi,alias:(Fi==null?void 0:Fi.alias)||[],component:()=>lf(()=>import("./newrecipe-fd412cc2.mjs"),[])}];const iN={};var oN=Ae({},iN);const aN=[],ec={};function cN(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){const a=s.includes(t.slice(i))?t.slice(i).length:1;let c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Oh(c,"")}return Oh(n,t)+r+s}var lN=Ol(async t=>{t.vueApp.component("NuxtPage",Pa),t.vueApp.component("NuxtNestedPage",Pa),t.vueApp.component("NuxtChild",Pa);const e=qp().app.baseURL,n=r0(e),r=cN(e,window.location),s=$0(vt(Ae({},oN),{history:n,routes:sN}));t.vueApp.use(s);const i=ac(s.currentRoute.value);s.afterEach((h,f)=>{i.value=f}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>i.value});const o={};for(const h in s.currentRoute.value)o[h]=ze(()=>s.currentRoute.value[h]);const a=ac(s.resolve(r)),c=()=>{a.value=s.currentRoute.value};t.hook("page:finish",c),s.afterEach((h,f)=>{var p,v,b,m;((v=(p=h.matched[0])==null?void 0:p.components)==null?void 0:v.default)===((m=(b=f.matched[0])==null?void 0:b.components)==null?void 0:m.default)&&c()});const l={};for(const h in a.value)l[h]=ze(()=>a.value[h]);t._route=Ft(o),t._activeRoute=Ft(l),t._middleware=t._middleware||{global:[],named:{}};const u=Us();s.afterEach(async h=>{!t.isHydrating&&u.value&&await Un(t,H0),h.matched.length===0&&Un(t,Vi,[q0({statusCode:404,statusMessage:`Page not found: ${h.fullPath}`})])});try{await s.isReady()}catch(h){Un(t,Vi,[h])}return s.beforeEach(async(h,f)=>{var v;h.meta=Ft(h.meta),t._processingMiddleware=!0;const p=new Set([...aN,...t._middleware.global]);for(const b of h.matched){const m=b.meta.middleware;if(!!m)if(Array.isArray(m))for(const w of m)p.add(w);else p.add(m)}for(const b of p){const m=typeof b=="string"?t._middleware.named[b]||await((v=ec[b])==null?void 0:v.call(ec).then(y=>y.default||y)):b,w=await Un(t,m,[h,f]);if(w||w===!1)return w}}),s.afterEach(async h=>{delete t._processingMiddleware}),t.hooks.hookOnce("app:created",async()=>{try{await s.replace(vt(Ae({},s.resolve(r)),{force:!0}))}catch(h){Un(t,Vi,[h])}}),{provide:{router:s}}}),uN=[Y0,hb,Ib,lN];const hN={props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"404"},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t,{expose:e}){e();const n=t;en({title:`${n.statusCode} - ${n.statusMessage} | ${n.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]});const r={props:n,useHead:en};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},fN=t=>(wl("data-v-011aae6d"),t=t(),_l(),t),dN={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},pN=fN(()=>Ue("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),gN={class:"max-w-520px text-center z-20"},mN=["textContent"],yN=["textContent"],vN={class:"w-full flex items-center justify-center"};function wN(t,e,n,r,s,i){const o=X0;return St(),Tr("div",dN,[pN,Ue("div",gN,[Ue("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:jn(n.statusCode)},null,8,mN),Ue("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:jn(n.description)},null,8,yN),Ue("div",vN,[$e(o,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:El(()=>[kl(jn(n.backHome),1)]),_:1})])])])}var Id=Zr(hN,[["render",wN],["__scopeId","data-v-011aae6d"]]);const _N={props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"500"},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"This page is temporarily unavailable."}},setup(t,{expose:e}){e();const n=t;en({title:`${n.statusCode} - ${n.statusMessage} | ${n.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]});const r={props:n,useHead:en};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},EN=t=>(wl("data-v-6aee6495"),t=t(),_l(),t),bN={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},TN=EN(()=>Ue("div",{class:"fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"},null,-1)),IN={class:"max-w-520px text-center"},SN=["textContent"],CN=["textContent"];function AN(t,e,n,r,s,i){return St(),Tr("div",bN,[TN,Ue("div",IN,[Ue("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:jn(n.statusCode)},null,8,SN),Ue("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:jn(n.description)},null,8,CN)])])}var Sd=Zr(_N,[["render",AN],["__scopeId","data-v-6aee6495"]]);const kN={props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"500"},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."},stack:{type:String,default:""}},setup(t,{expose:e}){e();const n=t;en({title:`${n.statusCode} - ${n.statusMessage} | ${n.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}'}]});const r={props:n,useHead:en};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},RN=t=>(wl("data-v-693cabb2"),t=t(),_l(),t),NN={class:"font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"},xN=RN(()=>Ue("div",{class:"fixed left-0 right-0 spotlight"},null,-1)),ON=["textContent"],PN=["textContent"],DN={class:"bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"},MN=["innerHTML"];function LN(t,e,n,r,s,i){return St(),Tr("div",NN,[xN,Ue("h1",{class:"text-6xl sm:text-8xl font-medium mb-6",textContent:jn(n.statusCode)},null,8,ON),Ue("p",{class:"text-xl sm:text-2xl font-light mb-8 leading-tight",textContent:jn(n.description)},null,8,PN),Ue("div",DN,[Ue("pre",{class:"text-xl font-light leading-tight z-10 p-8",innerHTML:n.stack},null,8,MN)])])}var UN=Zr(kN,[["render",LN],["__scopeId","data-v-693cabb2"]]);const FN={props:{error:Object},setup(t,{expose:e}){var f;e();const n=t,r=n.error,s=(r.stack||"").split(`
`).splice(1).map(p=>({text:p.replace("webpack:/","").replace(".vue",".js").trim(),internal:p.includes("node_modules")&&!p.includes(".cache")||p.includes("internal")||p.includes("new Promise")})).map(p=>`<span class="stack${p.internal?" internal":""}">${p.text}</span>`).join(`
`),i=String(r.statusCode||500),o=i==="404",a=(f=r.statusMessage)!=null?f:o?"Page Not Found":"Internal Server Error",c=r.message||r.toString(),h={props:n,error:r,stacktrace:s,statusCode:i,is404:o,statusMessage:a,description:c,stack:void 0,ErrorTemplate:o?Id:Sd,Error404:Id,Error500:Sd,ErrorDev:UN};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}};function BN(t,e,n,r,s,i){return St(),ms(r.ErrorTemplate,iv(Ap({statusCode:r.statusCode,statusMessage:r.statusMessage,description:r.description,stack:r.stack})),null,16)}var $N=Zr(FN,[["render",BN]]);const VN={setup(t,{expose:e}){e();const n=At(),r=()=>n.callHook("app:suspense:resolve"),s=n.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup"),i=Us();hc((a,c,l)=>{n.hooks.callHook("vue:error",a,c,l).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u))});const o={nuxtApp:n,onResolve:r,results:s,error:i,onErrorCaptured:hc,callWithNuxt:Un,throwError:Vi,useError:Us,useNuxtApp:At,ErrorComponent:$N};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function jN(t,e,n,r,s,i){const o=Al("App");return St(),ms(sp,{onResolve:r.onResolve},{default:El(()=>[r.error?(St(),ms(r.ErrorComponent,{key:0,error:r.error},null,8,["error"])):(St(),ms(o,{key:1}))]),_:1})}var Cd=Zr(VN,[["render",jN]]);const HN={apiKey:"AIzaSyD9EOSlnmGS-kseGdB2F9nOWG9UIlSBP_E",authDomain:"cookbook-769df.firebaseapp.com",projectId:"cookbook-769df",storageBucket:"cookbook-769df.appspot.com",messagingSenderId:"644720982505",appId:"1:644720982505:web:7ddfea4d742c26c2c23378"};Bl(HN);const tc=Xl(),qN=new Nt,KN={data(){return{user:{}}},mounted(){xI(tc,t=>{t&&(this.user=t)})},methods:{loginGoogle(){nS(tc,qN).then(t=>{const e=t.user;console.log(e),this.user=t.user})},logout(){OI(tc).then(()=>{this.user={}}).catch(t=>{})}}},zN=Ue("h1",null,"Cook Book",-1);function WN(t,e,n,r,s,i){const o=Al("NuxtPage");return St(),Tr("div",null,[Ue("header",null,[zN,s.user.email?mh("",!0):(St(),Tr("button",{key:0,onClick:e[0]||(e[0]=(...a)=>i.loginGoogle&&i.loginGoogle(...a))},"Sign in")),s.user.email?(St(),Tr("button",{key:1,onClick:e[1]||(e[1]=(...a)=>i.logout&&i.logout(...a))},"Sign out")):mh("",!0)]),Ue("main",null,[$e(o)])])}var GN=Zr(KN,[["render",WN]]);globalThis.$fetch||(globalThis.$fetch=pE.create({baseURL:mE()}));let Ad;const XN=UE(uN);Ad=async function(){var s;const n=Boolean((s=window.__NUXT__)==null?void 0:s.serverRendered)?C_(Cd):S_(Cd);n.component("App",GN);const r=DE({vueApp:n});r.hooks.hookOnce("app:suspense:resolve",()=>{r.isHydrating=!1});try{await LE(r,XN)}catch(i){await r.callHook("app:error",i),r.payload.error=r.payload.error||i}try{await r.hooks.callHook("app:created",n),await r.hooks.callHook("app:beforeMount",n),n.mount("#__nuxt"),await r.hooks.callHook("app:mounted",n),await yl()}catch(i){await r.callHook("app:error",i),r.payload.error=r.payload.error||i}},Ad().catch(t=>{console.error("Error while mounting app:",t)});export{_t as F,Nt as G,t1 as I,Ly as S,Zr as _,St as a,$e as b,Tr as c,Ue as d,n1 as e,mh as f,Xl as g,X0 as h,Bl as i,r1 as j,QN as k,kl as l,e1 as n,xI as o,JN as r,jn as t,ZN as v,El as w};
