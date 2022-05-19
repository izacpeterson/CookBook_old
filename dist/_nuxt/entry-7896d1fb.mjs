var Xy=Object.defineProperty,Yy=Object.defineProperties;var Qy=Object.getOwnPropertyDescriptors;var Yu=Object.getOwnPropertySymbols;var Jy=Object.prototype.hasOwnProperty,Zy=Object.prototype.propertyIsEnumerable;var Qu=(t,e,n)=>e in t?Xy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ae=(t,e)=>{for(var n in e||(e={}))Jy.call(e,n)&&Qu(t,n,e[n]);if(Yu)for(var n of Yu(e))Zy.call(e,n)&&Qu(t,n,e[n]);return t},vt=(t,e)=>Yy(t,Qy(e));function il(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ev="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tv=il(ev);function kd(t){return!!t||t===""}function Oo(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Pe(r)?sv(r):Oo(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Pe(t))return t;if(De(t))return t}}const nv=/;(?![^(]*\))/g,rv=/:(.+)/;function sv(t){const e={};return t.split(nv).forEach(n=>{if(n){const r=n.split(rv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Po(t){let e="";if(Pe(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=Po(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function iv(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Pe(e)&&(t.class=Po(e)),n&&(t.style=Oo(n)),t}const jn=t=>Pe(t)?t:t==null?"":Y(t)||De(t)&&(t.toString===Od||!ee(t.toString))?JSON.stringify(t,Rd,2):String(t),Rd=(t,e)=>e&&e.__v_isRef?Rd(t,e.value):_r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Nd(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!Y(e)&&!Pd(e)?String(e):e,we={},vr=[],xt=()=>{},ov=()=>!1,av=/^on[^a-z]/,Js=t=>av.test(t),ol=t=>t.startsWith("onUpdate:"),Ye=Object.assign,al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cv=Object.prototype.hasOwnProperty,ue=(t,e)=>cv.call(t,e),Y=Array.isArray,_r=t=>Do(t)==="[object Map]",Nd=t=>Do(t)==="[object Set]",ee=t=>typeof t=="function",Pe=t=>typeof t=="string",cl=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",xd=t=>De(t)&&ee(t.then)&&ee(t.catch),Od=Object.prototype.toString,Do=t=>Od.call(t),lv=t=>Do(t).slice(8,-1),Pd=t=>Do(t)==="[object Object]",ll=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cs=il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uv=/-(\w)/g,Vt=Mo(t=>t.replace(uv,(e,n)=>n?n.toUpperCase():"")),hv=/\B([A-Z])/g,Vr=Mo(t=>t.replace(hv,"-$1").toLowerCase()),Lo=Mo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ea=Mo(t=>t?`on${Lo(t)}`:""),Is=(t,e)=>!Object.is(t,e),wr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ss=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ju;const fv=()=>Ju||(Ju=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Dt;class dv{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Dt&&(this.parent=Dt,this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function pv(t,e=Dt){e&&e.active&&e.effects.push(t)}const ul=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Dd=t=>(t.w&In)>0,Md=t=>(t.n&In)>0,gv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=In},mv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Dd(s)&&!Md(s)?s.delete(t):e[n++]=s,s.w&=~In,s.n&=~In}e.length=n}},sc=new WeakMap;let rs=0,In=1;const ic=30;let kt;const Hn=Symbol(""),oc=Symbol("");class hl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pv(this,r)}run(){if(!this.active)return this.fn();let e=kt,n=vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,vn=!0,In=1<<++rs,rs<=ic?gv(this):Zu(this),this.fn()}finally{rs<=ic&&mv(this),In=1<<--rs,kt=this.parent,vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(Zu(this),this.onStop&&this.onStop(),this.active=!1)}}function Zu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vn=!0;const Ld=[];function jr(){Ld.push(vn),vn=!1}function Hr(){const t=Ld.pop();vn=t===void 0?!0:t}function pt(t,e,n){if(vn&&kt){let r=sc.get(t);r||sc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ul()),Ud(s)}}function Ud(t,e){let n=!1;rs<=ic?Md(t)||(t.n|=In,n=!Dd(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function Jt(t,e,n,r,s,i){const o=sc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?ll(n)&&a.push(o.get("length")):(a.push(o.get(Hn)),_r(t)&&a.push(o.get(oc)));break;case"delete":Y(t)||(a.push(o.get(Hn)),_r(t)&&a.push(o.get(oc)));break;case"set":_r(t)&&a.push(o.get(Hn));break}if(a.length===1)a[0]&&ac(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ac(ul(c))}}function ac(t,e){for(const n of Y(t)?t:[...t])(n!==kt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const yv=il("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(cl)),vv=fl(),_v=fl(!1,!0),wv=fl(!0),eh=Ev();function Ev(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=de(this);for(let i=0,o=this.length;i<o;i++)pt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(de)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jr();const r=de(this)[e].apply(this,n);return Hr(),r}}),t}function fl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Uv:Hd:e?jd:Vd).get(r))return r;const o=Y(r);if(!t&&o&&ue(eh,s))return Reflect.get(eh,s,i);const a=Reflect.get(r,s,i);return(cl(s)?Fd.has(s):yv(s))||(t||pt(r,"get",s),e)?a:Le(a)?!o||!ll(s)?a.value:a:De(a)?t?qd(a):Ut(a):a}}const bv=Bd(),Tv=Bd(!0);function Bd(t=!1){return function(n,r,s,i){let o=n[r];if(Cs(o)&&Le(o)&&!Le(s))return!1;if(!t&&!Cs(s)&&(Kd(s)||(s=de(s),o=de(o)),!Y(n)&&Le(o)&&!Le(s)))return o.value=s,!0;const a=Y(n)&&ll(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,s,i);return n===de(i)&&(a?Is(s,o)&&Jt(n,"set",r,s):Jt(n,"add",r,s)),c}}function Iv(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Jt(t,"delete",e,void 0),r}function Sv(t,e){const n=Reflect.has(t,e);return(!cl(e)||!Fd.has(e))&&pt(t,"has",e),n}function Cv(t){return pt(t,"iterate",Y(t)?"length":Hn),Reflect.ownKeys(t)}const $d={get:vv,set:bv,deleteProperty:Iv,has:Sv,ownKeys:Cv},Av={get:wv,set(t,e){return!0},deleteProperty(t,e){return!0}},kv=Ye({},$d,{get:_v,set:Tv}),dl=t=>t,Uo=t=>Reflect.getPrototypeOf(t);function bi(t,e,n=!1,r=!1){t=t.__v_raw;const s=de(t),i=de(e);e!==i&&!n&&pt(s,"get",e),!n&&pt(s,"get",i);const{has:o}=Uo(s),a=r?dl:n?yl:As;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ti(t,e=!1){const n=this.__v_raw,r=de(n),s=de(t);return t!==s&&!e&&pt(r,"has",t),!e&&pt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Ii(t,e=!1){return t=t.__v_raw,!e&&pt(de(t),"iterate",Hn),Reflect.get(t,"size",t)}function th(t){t=de(t);const e=de(this);return Uo(e).has.call(e,t)||(e.add(t),Jt(e,"add",t,t)),this}function nh(t,e){e=de(e);const n=de(this),{has:r,get:s}=Uo(n);let i=r.call(n,t);i||(t=de(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Is(e,o)&&Jt(n,"set",t,e):Jt(n,"add",t,e),this}function rh(t){const e=de(this),{has:n,get:r}=Uo(e);let s=n.call(e,t);s||(t=de(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Jt(e,"delete",t,void 0),i}function sh(){const t=de(this),e=t.size!==0,n=t.clear();return e&&Jt(t,"clear",void 0,void 0),n}function Si(t,e){return function(r,s){const i=this,o=i.__v_raw,a=de(o),c=e?dl:t?yl:As;return!t&&pt(a,"iterate",Hn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ci(t,e,n){return function(...r){const s=this.__v_raw,i=de(s),o=_r(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?dl:e?yl:As;return!e&&pt(i,"iterate",c?oc:Hn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:this}}function Rv(){const t={get(i){return bi(this,i)},get size(){return Ii(this)},has:Ti,add:th,set:nh,delete:rh,clear:sh,forEach:Si(!1,!1)},e={get(i){return bi(this,i,!1,!0)},get size(){return Ii(this)},has:Ti,add:th,set:nh,delete:rh,clear:sh,forEach:Si(!1,!0)},n={get(i){return bi(this,i,!0)},get size(){return Ii(this,!0)},has(i){return Ti.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Si(!0,!1)},r={get(i){return bi(this,i,!0,!0)},get size(){return Ii(this,!0)},has(i){return Ti.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Si(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ci(i,!1,!1),n[i]=Ci(i,!0,!1),e[i]=Ci(i,!1,!0),r[i]=Ci(i,!0,!0)}),[t,n,e,r]}const[Nv,xv,Ov,Pv]=Rv();function pl(t,e){const n=e?t?Pv:Ov:t?xv:Nv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const Dv={get:pl(!1,!1)},Mv={get:pl(!1,!0)},Lv={get:pl(!0,!1)},Vd=new WeakMap,jd=new WeakMap,Hd=new WeakMap,Uv=new WeakMap;function Fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bv(t){return t.__v_skip||!Object.isExtensible(t)?0:Fv(lv(t))}function Ut(t){return Cs(t)?t:gl(t,!1,$d,Dv,Vd)}function $v(t){return gl(t,!1,kv,Mv,jd)}function qd(t){return gl(t,!0,Av,Lv,Hd)}function gl(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Bv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Er(t){return Cs(t)?Er(t.__v_raw):!!(t&&t.__v_isReactive)}function Cs(t){return!!(t&&t.__v_isReadonly)}function Kd(t){return!!(t&&t.__v_isShallow)}function zd(t){return Er(t)||Cs(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function ml(t){return Qi(t,"__v_skip",!0),t}const As=t=>De(t)?Ut(t):t,yl=t=>De(t)?qd(t):t;function Wd(t){vn&&kt&&(t=de(t),Ud(t.dep||(t.dep=ul())))}function Gd(t,e){t=de(t),t.dep&&ac(t.dep)}function Le(t){return!!(t&&t.__v_isRef===!0)}function cc(t){return Xd(t,!1)}function lc(t){return Xd(t,!0)}function Xd(t,e){return Le(t)?t:new Vv(t,e)}class Vv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:As(e)}get value(){return Wd(this),this._value}set value(e){e=this.__v_isShallow?e:de(e),Is(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:As(e),Gd(this))}}function ls(t){return Le(t)?t.value:t}const jv={get:(t,e,n)=>ls(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yd(t){return Er(t)?t:new Proxy(t,jv)}class Hv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function qv(t,e,n){const r=t[e];return Le(r)?r:new Hv(t,e,n)}class Kv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new hl(e,()=>{this._dirty||(this._dirty=!0,Gd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=de(this);return Wd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function zv(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=xt):(r=t.get,s=t.set),new Kv(r,s,i||!s,n)}function _n(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Zs(i,e,n)}return s}function It(t,e,n,r){if(ee(t)){const i=_n(t,e,n,r);return i&&xd(i)&&i.catch(o=>{Zs(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(It(t[i],e,n,r));return s}function Zs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){_n(c,null,10,[t,o,a]);return}}Wv(t,n,s,r)}function Wv(t,e,n,r=!0){console.error(t)}let Ji=!1,uc=!1;const dt=[];let zt=0;const us=[];let ss=null,fr=0;const hs=[];let fn=null,dr=0;const Qd=Promise.resolve();let vl=null,hc=null;function _l(t){const e=vl||Qd;return t?e.then(this?t.bind(this):t):e}function Gv(t){let e=zt+1,n=dt.length;for(;e<n;){const r=e+n>>>1;ks(dt[r])<t?e=r+1:n=r}return e}function Jd(t){(!dt.length||!dt.includes(t,Ji&&t.allowRecurse?zt+1:zt))&&t!==hc&&(t.id==null?dt.push(t):dt.splice(Gv(t.id),0,t),Zd())}function Zd(){!Ji&&!uc&&(uc=!0,vl=Qd.then(np))}function Xv(t){const e=dt.indexOf(t);e>zt&&dt.splice(e,1)}function ep(t,e,n,r){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Zd()}function Yv(t){ep(t,ss,us,fr)}function tp(t){ep(t,fn,hs,dr)}function wl(t,e=null){if(us.length){for(hc=e,ss=[...new Set(us)],us.length=0,fr=0;fr<ss.length;fr++)ss[fr]();ss=null,fr=0,hc=null,wl(t,e)}}function Zi(t){if(hs.length){const e=[...new Set(hs)];if(hs.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,r)=>ks(n)-ks(r)),dr=0;dr<fn.length;dr++)fn[dr]();fn=null,dr=0}}const ks=t=>t.id==null?1/0:t.id;function np(t){uc=!1,Ji=!0,wl(t),dt.sort((n,r)=>ks(n)-ks(r));const e=xt;try{for(zt=0;zt<dt.length;zt++){const n=dt[zt];n&&n.active!==!1&&_n(n,null,14)}}finally{zt=0,dt.length=0,Zi(),Ji=!1,vl=null,(dt.length||us.length||hs.length)&&np(t)}}function Qv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||we;f?s=n.map(p=>p.trim()):h&&(s=n.map(Ss))}let a,c=r[a=Ea(e)]||r[a=Ea(Vt(e))];!c&&i&&(c=r[a=Ea(Vr(e))]),c&&It(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(l,t,6,s)}}function rp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=rp(l,e,!0);u&&(a=!0,Ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):Ye(o,i),r.set(t,o),o)}function Fo(t,e){return!t||!Js(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,Vr(e))||ue(t,e))}let bt=null,Bo=null;function eo(t){const e=bt;return bt=t,Bo=t&&t.type.__scopeId||null,e}function El(t){Bo=t}function bl(){Bo=null}function Tl(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&yh(-1);const i=eo(e),o=t(...s);return eo(i),r._d&&yh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ba(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:v,inheritAttrs:b}=t;let m,_;const y=eo(t);try{if(n.shapeFlag&4){const T=s||r;m=Et(u.call(T,T,h,i,p,f,v)),_=c}else{const T=e;m=Et(T.length>1?T(i,{attrs:c,slots:a,emit:l}):T(i,null)),_=e.props?c:Zv(c)}}catch(T){ps.length=0,Zs(T,t,1),m=$e(ut)}let E=m;if(_&&b!==!1){const T=Object.keys(_),{shapeFlag:L}=E;T.length&&L&7&&(o&&T.some(ol)&&(_=e_(_,o)),E=Sn(E,_))}return n.dirs&&(E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),m=E,eo(y),m}function Jv(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Ps(r)){if(r.type!==ut||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Zv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Js(n))&&((e||(e={}))[n]=t[n]);return e},e_=(t,e)=>{const n={};for(const r in t)(!ol(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function t_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ih(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Fo(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ih(r,o,l):!0:!!o;return!1}function ih(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Fo(n,i))return!0}return!1}function Il({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const n_=t=>t.__isSuspense,r_={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?s_(e,n,r,s,i,o,a,c,l):i_(t,e,n,r,s,o,a,c,l)},hydrate:o_,create:Sl,normalize:a_},sp=r_;function Rs(t,e){const n=t.props&&t.props[e];ee(n)&&n()}function s_(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=Sl(t,s,r,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(Rs(t,"onPending"),Rs(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),br(f,t.ssFallback)):f.resolve()}function i_(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,p=e.ssFallback,{activeBranch:v,pendingBranch:b,isInFallback:m,isHydrating:_}=h;if(b)h.pendingBranch=f,Lt(f,b)?(c(b,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():m&&(c(v,p,n,r,s,null,i,o,a),br(h,p))):(h.pendingId++,_?(h.isHydrating=!1,h.activeBranch=b):l(b,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),m?(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(v,p,n,r,s,null,i,o,a),br(h,p))):v&&Lt(f,v)?(c(v,f,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(v&&Lt(f,v))c(v,f,n,r,s,h,i,o,a),br(h,f);else if(Rs(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:y,pendingId:E}=h;y>0?setTimeout(()=>{h.pendingId===E&&h.fallback(p)},y):y===0&&h.fallback(p)}}function Sl(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:h,m:f,um:p,n:v,o:{parentNode:b,remove:m}}=l,_=Ss(t.props&&t.props.timeout),y={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:T,activeBranch:L,pendingBranch:U,pendingId:k,effects:K,parentComponent:j,container:X}=y;if(y.isHydrating)y.isHydrating=!1;else if(!E){const re=L&&U.transition&&U.transition.mode==="out-in";re&&(L.transition.afterLeave=()=>{k===y.pendingId&&f(U,X,pe,0)});let{anchor:pe}=y;L&&(pe=v(L),p(L,j,y,!0)),re||f(U,X,pe,0)}br(y,U),y.pendingBranch=null,y.isInFallback=!1;let ne=y.parent,R=!1;for(;ne;){if(ne.pendingBranch){ne.effects.push(...K),R=!0;break}ne=ne.parent}R||tp(K),y.effects=[],Rs(T,"onResolve")},fallback(E){if(!y.pendingBranch)return;const{vnode:T,activeBranch:L,parentComponent:U,container:k,isSVG:K}=y;Rs(T,"onFallback");const j=v(L),X=()=>{!y.isInFallback||(h(null,E,k,j,U,null,K,a,c),br(y,E))},ne=E.transition&&E.transition.mode==="out-in";ne&&(L.transition.afterLeave=X),y.isInFallback=!0,p(L,U,null,!0),ne||X()},move(E,T,L){y.activeBranch&&f(y.activeBranch,E,T,L),y.container=E},next(){return y.activeBranch&&v(y.activeBranch)},registerDep(E,T){const L=!!y.pendingBranch;L&&y.deps++;const U=E.vnode.el;E.asyncDep.catch(k=>{Zs(k,E,0)}).then(k=>{if(E.isUnmounted||y.isUnmounted||y.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:K}=E;vc(E,k,!1),U&&(K.el=U);const j=!U&&E.subTree.el;T(E,K,b(U||E.subTree.el),U?null:v(E.subTree),y,o,c),j&&m(j),Il(E,K.el),L&&--y.deps===0&&y.resolve()})},unmount(E,T){y.isUnmounted=!0,y.activeBranch&&p(y.activeBranch,n,E,T),y.pendingBranch&&p(y.pendingBranch,n,E,T)}};return y}function o_(t,e,n,r,s,i,o,a,c){const l=e.suspense=Sl(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function a_(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=oh(r?n.default:n),t.ssFallback=r?oh(n.fallback):$e(ut)}function oh(t){let e;if(ee(t)){const n=Os&&t._c;n&&(t._d=!1,Ft()),t=t(),n&&(t._d=!0,e=wn,Ip())}return Y(t)&&(t=Jv(t)),t=Et(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function ip(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):tp(t)}function br(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Il(r,s))}function fs(t,e){if(Be){let n=Be.provides;const r=Be.parent&&Be.parent.provides;r===n&&(n=Be.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=Be||bt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r.proxy):e}}function ah(t,e){return Cl(t,null,e)}const ch={};function ds(t,e,n){return Cl(t,e,n)}function Cl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){const a=Be;let c,l=!1,u=!1;if(Le(t)?(c=()=>t.value,l=Kd(t)):Er(t)?(c=()=>t,r=!0):Y(t)?(u=!0,l=t.some(Er),c=()=>t.map(_=>{if(Le(_))return _.value;if(Er(_))return Fn(_);if(ee(_))return _n(_,a,2)})):ee(t)?e?c=()=>_n(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),It(t,a,3,[f])}:c=xt,e&&r){const _=c;c=()=>Fn(_())}let h,f=_=>{h=m.onStop=()=>{_n(_,a,4)}};if(Ds)return f=xt,e?n&&It(e,a,3,[c(),u?[]:void 0,f]):c(),xt;let p=u?[]:ch;const v=()=>{if(!!m.active)if(e){const _=m.run();(r||l||(u?_.some((y,E)=>Is(y,p[E])):Is(_,p)))&&(h&&h(),It(e,a,3,[_,p===ch?void 0:p,f]),p=_)}else m.run()};v.allowRecurse=!!e;let b;s==="sync"?b=v:s==="post"?b=()=>qe(v,a&&a.suspense):b=()=>{!a||a.isMounted?Yv(v):v()};const m=new hl(c,b);return e?n?v():p=m.run():s==="post"?qe(m.run.bind(m),a&&a.suspense):m.run(),()=>{m.stop(),a&&a.scope&&al(a.scope.effects,m)}}function c_(t,e,n){const r=this.proxy,s=Pe(t)?t.includes(".")?op(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Be;kr(this);const a=Cl(s,i.bind(r),n);return o?kr(o):qn(),a}function op(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Fn(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))Fn(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Fn(t[n],e);else if(Nd(t)||_r(t))t.forEach(n=>{Fn(n,e)});else if(Pd(t))for(const n in t)Fn(t[n],e);return t}function l_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Al(()=>{t.isMounted=!0}),jo(()=>{t.isUnmounting=!0}),t}const _t=[Function,Array],u_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},setup(t,{slots:e}){const n=ei(),r=l_();let s;return()=>{const i=e.default&&lp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==ut){o=b;break}}const a=de(t),{mode:c}=a;if(r.isLeaving)return Ta(o);const l=lh(o);if(!l)return Ta(o);const u=fc(l,a,r,n);to(l,u);const h=n.subTree,f=h&&lh(h);let p=!1;const{getTransitionKey:v}=l.type;if(v){const b=v();s===void 0?s=b:b!==s&&(s=b,p=!0)}if(f&&f.type!==ut&&(!Lt(l,f)||p)){const b=fc(f,a,r,n);if(to(f,b),c==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},Ta(o);c==="in-out"&&l.type!==ut&&(b.delayLeave=(m,_,y)=>{const E=cp(r,f);E[String(f.key)]=f,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return o}}},ap=u_;function cp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function fc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:b,onAppear:m,onAfterAppear:_,onAppearCancelled:y}=e,E=String(t.key),T=cp(n,t),L=(k,K)=>{k&&It(k,r,9,K)},U={mode:i,persisted:o,beforeEnter(k){let K=a;if(!n.isMounted)if(s)K=b||a;else return;k._leaveCb&&k._leaveCb(!0);const j=T[E];j&&Lt(t,j)&&j.el._leaveCb&&j.el._leaveCb(),L(K,[k])},enter(k){let K=c,j=l,X=u;if(!n.isMounted)if(s)K=m||c,j=_||l,X=y||u;else return;let ne=!1;const R=k._enterCb=re=>{ne||(ne=!0,re?L(X,[k]):L(j,[k]),U.delayedLeave&&U.delayedLeave(),k._enterCb=void 0)};K?(K(k,R),K.length<=1&&R()):R()},leave(k,K){const j=String(t.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return K();L(h,[k]);let X=!1;const ne=k._leaveCb=R=>{X||(X=!0,K(),R?L(v,[k]):L(p,[k]),k._leaveCb=void 0,T[j]===t&&delete T[j])};T[j]=t,f?(f(k,ne),f.length<=1&&ne()):ne()},clone(k){return fc(k,e,n,r)}};return U}function Ta(t){if($o(t))return t=Sn(t),t.children=null,t}function lh(t){return $o(t)?t.children?t.children[0]:void 0:t}function to(t,e){t.shapeFlag&6&&t.component?to(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===wt?(o.patchFlag&128&&s++,r=r.concat(lp(o.children,e,a))):(e||o.type!==ut)&&r.push(a!=null?Sn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function mt(t){return ee(t)?{setup:t,name:t.name}:t}const Ns=t=>!!t.type.__asyncLoader,$o=t=>t.type.__isKeepAlive,h_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=ei(),r=n.ctx;if(!r.renderer)return e.default;const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(y,E,T,L,U)=>{const k=y.component;l(y,E,T,0,a),c(k.vnode,y,E,T,k,a,L,y.slotScopeIds,U),qe(()=>{k.isDeactivated=!1,k.a&&wr(k.a);const K=y.props&&y.props.onVnodeMounted;K&&ot(K,k.parent,y)},a)},r.deactivate=y=>{const E=y.component;l(y,f,null,1,a),qe(()=>{E.da&&wr(E.da);const T=y.props&&y.props.onVnodeUnmounted;T&&ot(T,E.parent,y),E.isDeactivated=!0},a)};function p(y){Ia(y),u(y,n,a,!0)}function v(y){s.forEach((E,T)=>{const L=_c(E.type);L&&(!y||!y(L))&&b(T)})}function b(y){const E=s.get(y);!o||E.type!==o.type?p(E):o&&Ia(o),s.delete(y),i.delete(y)}ds(()=>[t.include,t.exclude],([y,E])=>{y&&v(T=>is(y,T)),E&&v(T=>!is(E,T))},{flush:"post",deep:!0});let m=null;const _=()=>{m!=null&&s.set(m,Sa(n.subTree))};return Al(_),hp(_),jo(()=>{s.forEach(y=>{const{subTree:E,suspense:T}=n,L=Sa(E);if(y.type===L.type){Ia(L);const U=L.component.da;U&&qe(U,T);return}p(y)})}),()=>{if(m=null,!e.default)return null;const y=e.default(),E=y[0];if(y.length>1)return o=null,y;if(!Ps(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let T=Sa(E);const L=T.type,U=_c(Ns(T)?T.type.__asyncResolved||{}:L),{include:k,exclude:K,max:j}=t;if(k&&(!U||!is(k,U))||K&&U&&is(K,U))return o=T,E;const X=T.key==null?L:T.key,ne=s.get(X);return T.el&&(T=Sn(T),E.shapeFlag&128&&(E.ssContent=T)),m=X,ne?(T.el=ne.el,T.component=ne.component,T.transition&&to(T,T.transition),T.shapeFlag|=512,i.delete(X),i.add(X)):(i.add(X),j&&i.size>parseInt(j,10)&&b(i.values().next().value)),T.shapeFlag|=256,o=T,E}}},f_=h_;function is(t,e){return Y(t)?t.some(n=>is(n,e)):Pe(t)?t.split(",").includes(e):t.test?t.test(e):!1}function d_(t,e){up(t,"a",e)}function p_(t,e){up(t,"da",e)}function up(t,e,n=Be){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$o(s.parent.vnode)&&g_(r,e,n,s),s=s.parent}}function g_(t,e,n,r){const s=Vo(e,t,r,!0);fp(()=>{al(r[e],s)},n)}function Ia(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function Sa(t){return t.shapeFlag&128?t.ssContent:t}function Vo(t,e,n=Be,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jr(),kr(n);const a=It(e,n,t,o);return qn(),Hr(),a});return r?s.unshift(i):s.push(i),i}}const rn=t=>(e,n=Be)=>(!Ds||t==="sp")&&Vo(t,e,n),m_=rn("bm"),Al=rn("m"),y_=rn("bu"),hp=rn("u"),jo=rn("bum"),fp=rn("um"),v_=rn("sp"),__=rn("rtg"),w_=rn("rtc");function dc(t,e=Be){Vo("ec",t,e)}let pc=!0;function E_(t){const e=pp(t),n=t.proxy,r=t.ctx;pc=!1,e.beforeCreate&&uh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:v,activated:b,deactivated:m,beforeDestroy:_,beforeUnmount:y,destroyed:E,unmounted:T,render:L,renderTracked:U,renderTriggered:k,errorCaptured:K,serverPrefetch:j,expose:X,inheritAttrs:ne,components:R,directives:re,filters:pe}=e;if(l&&b_(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const me=o[Ee];ee(me)&&(r[Ee]=me.bind(n))}if(s){const Ee=s.call(n,n);De(Ee)&&(t.data=Ut(Ee))}if(pc=!0,i)for(const Ee in i){const me=i[Ee],ht=ee(me)?me.bind(n,n):ee(me.get)?me.get.bind(n,n):xt,ar=!ee(me)&&ee(me.set)?me.set.bind(n):xt,Kt=ze({get:ht,set:ar});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:Ot=>Kt.value=Ot})}if(a)for(const Ee in a)dp(a[Ee],r,n,Ee);if(c){const Ee=ee(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(me=>{fs(me,Ee[me])})}u&&uh(u,t,"c");function Re(Ee,me){Y(me)?me.forEach(ht=>Ee(ht.bind(n))):me&&Ee(me.bind(n))}if(Re(m_,h),Re(Al,f),Re(y_,p),Re(hp,v),Re(d_,b),Re(p_,m),Re(dc,K),Re(w_,U),Re(__,k),Re(jo,y),Re(fp,T),Re(v_,j),Y(X))if(X.length){const Ee=t.exposed||(t.exposed={});X.forEach(me=>{Object.defineProperty(Ee,me,{get:()=>n[me],set:ht=>n[me]=ht})})}else t.exposed||(t.exposed={});L&&t.render===xt&&(t.render=L),ne!=null&&(t.inheritAttrs=ne),R&&(t.components=R),re&&(t.directives=re)}function b_(t,e,n=xt,r=!1){Y(t)&&(t=gc(t));for(const s in t){const i=t[s];let o;De(i)?"default"in i?o=Yt(i.from||s,i.default,!0):o=Yt(i.from||s):o=Yt(i),Le(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function uh(t,e,n){It(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function dp(t,e,n,r){const s=r.includes(".")?op(n,r):()=>n[r];if(Pe(t)){const i=e[t];ee(i)&&ds(s,i)}else if(ee(t))ds(s,t.bind(n));else if(De(t))if(Y(t))t.forEach(i=>dp(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&ds(s,i,t)}}function pp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>no(c,l,o,!0)),no(c,e,o)),i.set(e,c),c}function no(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&no(t,i,n,!0),s&&s.forEach(o=>no(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=T_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const T_={data:hh,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:Dn,directives:Dn,watch:S_,provide:hh,inject:I_};function hh(t,e){return e?t?function(){return Ye(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function I_(t,e){return Dn(gc(t),gc(e))}function gc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?Ye(Ye(Object.create(null),t),e):e}function S_(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=nt(t[r],e[r]);return n}function C_(t,e,n,r=!1){const s={},i={};Qi(i,qo,1),t.propsDefaults=Object.create(null),gp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$v(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function A_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=de(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Fo(t.emitsOptions,f))continue;const p=e[f];if(c)if(ue(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const v=Vt(f);s[v]=mc(c,a,v,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{gp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=Vr(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=mc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],l=!0)}l&&Jt(t,"set","$attrs")}function gp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(cs(c))continue;const l=e[c];let u;s&&ue(s,u=Vt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Fo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=de(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=mc(s,c,h,l[h],t,!ue(l,h))}}return o}function mc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(kr(s),r=l[n]=c.call(null,e),qn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Vr(n))&&(r=!0))}return r}function mp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[f,p]=mp(h,e,!0);Ye(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,vr),vr;if(Y(i))for(let u=0;u<i.length;u++){const h=Vt(i[u]);fh(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Vt(u);if(fh(h)){const f=i[u],p=o[h]=Y(f)||ee(f)?{type:f}:f;if(p){const v=gh(Boolean,p.type),b=gh(String,p.type);p[0]=v>-1,p[1]=b<0||v<b,(v>-1||ue(p,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function fh(t){return t[0]!=="$"}function dh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ph(t,e){return dh(t)===dh(e)}function gh(t,e){return Y(e)?e.findIndex(n=>ph(n,t)):ee(e)&&ph(e,t)?0:-1}const yp=t=>t[0]==="_"||t==="$stable",kl=t=>Y(t)?t.map(Et):[Et(t)],k_=(t,e,n)=>{const r=Tl((...s)=>kl(e(...s)),n);return r._c=!1,r},vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yp(s))continue;const i=t[s];if(ee(i))e[s]=k_(s,i,r);else if(i!=null){const o=kl(i);e[s]=()=>o}}},_p=(t,e)=>{const n=kl(e);t.slots.default=()=>n},R_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),Qi(e,"_",n)):vp(e,t.slots={})}else t.slots={},e&&_p(t,e);Qi(t.slots,qo,1)},N_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ye(s,e),!n&&a===1&&delete s._):(i=!e.$stable,vp(e,s)),o=e}else e&&(_p(t,e),o={default:1});if(i)for(const a in s)!yp(a)&&!(a in o)&&delete s[a]};function WN(t,e){const n=bt;if(n===null)return t;const r=Ko(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];ee(o)&&(o={mounted:o,updated:o}),o.deep&&Fn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(jr(),It(c,n,8,[t.el,a,t,e]),Hr())}}function wp(){return{app:null,config:{isNativeTag:ov,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let x_=0;function O_(t,e){return function(r,s=null){ee(r)||(r=Object.assign({},r)),s!=null&&!De(s)&&(s=null);const i=wp(),o=new Set;let a=!1;const c=i.app={_uid:x_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Q_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=$e(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ko(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function ro(t,e,n,r,s=!1){if(Y(t)){t.forEach((f,p)=>ro(f,e&&(Y(e)?e[p]:e),n,r,s));return}if(Ns(r)&&!s)return;const i=r.shapeFlag&4?Ko(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):Le(l)&&(l.value=null)),ee(c))_n(c,a,12,[o,u]);else{const f=Pe(c),p=Le(c);if(f||p){const v=()=>{if(t.f){const b=f?u[c]:c.value;s?Y(b)&&al(b,i):Y(b)?b.includes(i)||b.push(i):f?(u[c]=[i],ue(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ue(h,c)&&(h[c]=o)):Le(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,qe(v,n)):v()}}}let on=!1;const Ai=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Ca=t=>t.nodeType===8;function P_(t){const{mt:e,p:n,o:{patchProp:r,nextSibling:s,parentNode:i,remove:o,insert:a,createComment:c}}=t,l=(m,_)=>{if(!_.hasChildNodes()){n(null,m,_),Zi();return}on=!1,u(_.firstChild,m,null,null,null),Zi(),on&&console.error("Hydration completed but contains mismatches.")},u=(m,_,y,E,T,L=!1)=>{const U=Ca(m)&&m.data==="[",k=()=>v(m,_,y,E,T,U),{type:K,ref:j,shapeFlag:X}=_,ne=m.nodeType;_.el=m;let R=null;switch(K){case xs:ne!==3?R=k():(m.data!==_.children&&(on=!0,m.data=_.children),R=s(m));break;case ut:ne!==8||U?R=k():R=s(m);break;case Vi:if(ne!==1)R=k();else{R=m;const re=!_.children.length;for(let pe=0;pe<_.staticCount;pe++)re&&(_.children+=R.outerHTML),pe===_.staticCount-1&&(_.anchor=R),R=s(R);return R}break;case wt:U?R=p(m,_,y,E,T,L):R=k();break;default:if(X&1)ne!==1||_.type.toLowerCase()!==m.tagName.toLowerCase()?R=k():R=h(m,_,y,E,T,L);else if(X&6){_.slotScopeIds=T;const re=i(m);if(e(_,re,null,y,E,Ai(re),L),R=U?b(m):s(m),Ns(_)){let pe;U?(pe=$e(wt),pe.anchor=R?R.previousSibling:re.lastChild):pe=m.nodeType===3?Nl(""):$e("div"),pe.el=m,_.component.subTree=pe}}else X&64?ne!==8?R=k():R=_.type.hydrate(m,_,y,E,T,L,t,f):X&128&&(R=_.type.hydrate(m,_,y,E,Ai(i(m)),T,L,t,u))}return j!=null&&ro(j,null,E,_),R},h=(m,_,y,E,T,L)=>{L=L||!!_.dynamicChildren;const{type:U,props:k,patchFlag:K,shapeFlag:j,dirs:X}=_,ne=U==="input"&&X||U==="option";if(ne||K!==-1){if(X&&Mt(_,null,y,"created"),k)if(ne||!L||K&48)for(const re in k)(ne&&re.endsWith("value")||Js(re)&&!cs(re))&&r(m,re,null,k[re],!1,void 0,y);else k.onClick&&r(m,"onClick",null,k.onClick,!1,void 0,y);let R;if((R=k&&k.onVnodeBeforeMount)&&ot(R,y,_),X&&Mt(_,null,y,"beforeMount"),((R=k&&k.onVnodeMounted)||X)&&ip(()=>{R&&ot(R,y,_),X&&Mt(_,null,y,"mounted")},E),j&16&&!(k&&(k.innerHTML||k.textContent))){let re=f(m.firstChild,_,m,y,E,T,L);for(;re;){on=!0;const pe=re;re=re.nextSibling,o(pe)}}else j&8&&m.textContent!==_.children&&(on=!0,m.textContent=_.children)}return m.nextSibling},f=(m,_,y,E,T,L,U)=>{U=U||!!_.dynamicChildren;const k=_.children,K=k.length;for(let j=0;j<K;j++){const X=U?k[j]:k[j]=Et(k[j]);if(m)m=u(m,X,E,T,L,U);else{if(X.type===xs&&!X.children)continue;on=!0,n(null,X,y,null,E,T,Ai(y),L)}}return m},p=(m,_,y,E,T,L)=>{const{slotScopeIds:U}=_;U&&(T=T?T.concat(U):U);const k=i(m),K=f(s(m),_,k,y,E,T,L);return K&&Ca(K)&&K.data==="]"?s(_.anchor=K):(on=!0,a(_.anchor=c("]"),k,K),K)},v=(m,_,y,E,T,L)=>{if(on=!0,_.el=null,L){const K=b(m);for(;;){const j=s(m);if(j&&j!==K)o(j);else break}}const U=s(m),k=i(m);return o(m),n(null,_,k,U,y,E,Ai(k),T),U},b=m=>{let _=0;for(;m;)if(m=s(m),m&&Ca(m)&&(m.data==="["&&_++,m.data==="]")){if(_===0)return s(m);_--}return m};return[l,u]}const qe=ip;function D_(t){return Ep(t)}function M_(t){return Ep(t,P_)}function Ep(t,e){const n=fv();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=xt,cloneNode:v,insertStaticContent:b}=t,m=(d,g,w,C=null,S=null,P=null,F=!1,x=null,D=!!g.dynamicChildren)=>{if(d===g)return;d&&!Lt(d,g)&&(C=q(d),yt(d,S,P,!0),d=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:A,ref:z,shapeFlag:$}=g;switch(A){case xs:_(d,g,w,C);break;case ut:y(d,g,w,C);break;case Vi:d==null&&E(g,w,C,F);break;case wt:re(d,g,w,C,S,P,F,x,D);break;default:$&1?U(d,g,w,C,S,P,F,x,D):$&6?pe(d,g,w,C,S,P,F,x,D):($&64||$&128)&&A.process(d,g,w,C,S,P,F,x,D,be)}z!=null&&S&&ro(z,d&&d.ref,P,g||d,!g)},_=(d,g,w,C)=>{if(d==null)r(g.el=a(g.children),w,C);else{const S=g.el=d.el;g.children!==d.children&&l(S,g.children)}},y=(d,g,w,C)=>{d==null?r(g.el=c(g.children||""),w,C):g.el=d.el},E=(d,g,w,C)=>{[d.el,d.anchor]=b(d.children,g,w,C,d.el,d.anchor)},T=({el:d,anchor:g},w,C)=>{let S;for(;d&&d!==g;)S=f(d),r(d,w,C),d=S;r(g,w,C)},L=({el:d,anchor:g})=>{let w;for(;d&&d!==g;)w=f(d),s(d),d=w;s(g)},U=(d,g,w,C,S,P,F,x,D)=>{F=F||g.type==="svg",d==null?k(g,w,C,S,P,F,x,D):X(d,g,S,P,F,x,D)},k=(d,g,w,C,S,P,F,x)=>{let D,A;const{type:z,props:$,shapeFlag:W,transition:Z,patchFlag:he,dirs:Ce}=d;if(d.el&&v!==void 0&&he===-1)D=d.el=v(d.el);else{if(D=d.el=o(d.type,P,$&&$.is,$),W&8?u(D,d.children):W&16&&j(d.children,D,null,C,S,P&&z!=="foreignObject",F,x),Ce&&Mt(d,null,C,"created"),$){for(const Ie in $)Ie!=="value"&&!cs(Ie)&&i(D,Ie,null,$[Ie],P,d.children,C,S,M);"value"in $&&i(D,"value",null,$.value),(A=$.onVnodeBeforeMount)&&ot(A,C,d)}K(D,d,d.scopeId,F,C)}Ce&&Mt(d,null,C,"beforeMount");const ve=(!S||S&&!S.pendingBranch)&&Z&&!Z.persisted;ve&&Z.beforeEnter(D),r(D,g,w),((A=$&&$.onVnodeMounted)||ve||Ce)&&qe(()=>{A&&ot(A,C,d),ve&&Z.enter(D),Ce&&Mt(d,null,C,"mounted")},S)},K=(d,g,w,C,S)=>{if(w&&p(d,w),C)for(let P=0;P<C.length;P++)p(d,C[P]);if(S){let P=S.subTree;if(g===P){const F=S.vnode;K(d,F,F.scopeId,F.slotScopeIds,S.parent)}}},j=(d,g,w,C,S,P,F,x,D=0)=>{for(let A=D;A<d.length;A++){const z=d[A]=x?dn(d[A]):Et(d[A]);m(null,z,g,w,C,S,P,F,x)}},X=(d,g,w,C,S,P,F)=>{const x=g.el=d.el;let{patchFlag:D,dynamicChildren:A,dirs:z}=g;D|=d.patchFlag&16;const $=d.props||we,W=g.props||we;let Z;w&&On(w,!1),(Z=W.onVnodeBeforeUpdate)&&ot(Z,w,g,d),z&&Mt(g,d,w,"beforeUpdate"),w&&On(w,!0);const he=S&&g.type!=="foreignObject";if(A?ne(d.dynamicChildren,A,x,w,C,he,P):F||ht(d,g,x,null,w,C,he,P,!1),D>0){if(D&16)R(x,g,$,W,w,C,S);else if(D&2&&$.class!==W.class&&i(x,"class",null,W.class,S),D&4&&i(x,"style",$.style,W.style,S),D&8){const Ce=g.dynamicProps;for(let ve=0;ve<Ce.length;ve++){const Ie=Ce[ve],At=$[Ie],cr=W[Ie];(cr!==At||Ie==="value")&&i(x,Ie,At,cr,S,d.children,w,C,M)}}D&1&&d.children!==g.children&&u(x,g.children)}else!F&&A==null&&R(x,g,$,W,w,C,S);((Z=W.onVnodeUpdated)||z)&&qe(()=>{Z&&ot(Z,w,g,d),z&&Mt(g,d,w,"updated")},C)},ne=(d,g,w,C,S,P,F)=>{for(let x=0;x<g.length;x++){const D=d[x],A=g[x],z=D.el&&(D.type===wt||!Lt(D,A)||D.shapeFlag&70)?h(D.el):w;m(D,A,z,null,C,S,P,F,!0)}},R=(d,g,w,C,S,P,F)=>{if(w!==C){for(const x in C){if(cs(x))continue;const D=C[x],A=w[x];D!==A&&x!=="value"&&i(d,x,A,D,F,g.children,S,P,M)}if(w!==we)for(const x in w)!cs(x)&&!(x in C)&&i(d,x,w[x],null,F,g.children,S,P,M);"value"in C&&i(d,"value",w.value,C.value)}},re=(d,g,w,C,S,P,F,x,D)=>{const A=g.el=d?d.el:a(""),z=g.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:Z}=g;Z&&(x=x?x.concat(Z):Z),d==null?(r(A,w,C),r(z,w,C),j(g.children,w,z,S,P,F,x,D)):$>0&&$&64&&W&&d.dynamicChildren?(ne(d.dynamicChildren,W,w,S,P,F,x),(g.key!=null||S&&g===S.subTree)&&bp(d,g,!0)):ht(d,g,w,z,S,P,F,x,D)},pe=(d,g,w,C,S,P,F,x,D)=>{g.slotScopeIds=x,d==null?g.shapeFlag&512?S.ctx.activate(g,w,C,F,D):qt(g,w,C,S,P,F,D):Re(d,g,D)},qt=(d,g,w,C,S,P,F)=>{const x=d.component=K_(d,C,S);if($o(d)&&(x.ctx.renderer=be),z_(x),x.asyncDep){if(S&&S.registerDep(x,Ee),!d.el){const D=x.subTree=$e(ut);y(null,D,g,w)}return}Ee(x,d,g,w,S,P,F)},Re=(d,g,w)=>{const C=g.component=d.component;if(t_(d,g,w))if(C.asyncDep&&!C.asyncResolved){me(C,g,w);return}else C.next=g,Xv(C.update),C.update();else g.component=d.component,g.el=d.el,C.vnode=g},Ee=(d,g,w,C,S,P,F)=>{const x=()=>{if(d.isMounted){let{next:z,bu:$,u:W,parent:Z,vnode:he}=d,Ce=z,ve;On(d,!1),z?(z.el=he.el,me(d,z,F)):z=he,$&&wr($),(ve=z.props&&z.props.onVnodeBeforeUpdate)&&ot(ve,Z,z,he),On(d,!0);const Ie=ba(d),At=d.subTree;d.subTree=Ie,m(At,Ie,h(At.el),q(At),d,S,P),z.el=Ie.el,Ce===null&&Il(d,Ie.el),W&&qe(W,S),(ve=z.props&&z.props.onVnodeUpdated)&&qe(()=>ot(ve,Z,z,he),S)}else{let z;const{el:$,props:W}=g,{bm:Z,m:he,parent:Ce}=d,ve=Ns(g);if(On(d,!1),Z&&wr(Z),!ve&&(z=W&&W.onVnodeBeforeMount)&&ot(z,Ce,g),On(d,!0),$&&oe){const Ie=()=>{d.subTree=ba(d),oe($,d.subTree,d,S,null)};ve?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Ie()):Ie()}else{const Ie=d.subTree=ba(d);m(null,Ie,w,C,d,S,P),g.el=Ie.el}if(he&&qe(he,S),!ve&&(z=W&&W.onVnodeMounted)){const Ie=g;qe(()=>ot(z,Ce,Ie),S)}g.shapeFlag&256&&d.a&&qe(d.a,S),d.isMounted=!0,g=w=C=null}},D=d.effect=new hl(x,()=>Jd(d.update),d.scope),A=d.update=D.run.bind(D);A.id=d.uid,On(d,!0),A()},me=(d,g,w)=>{g.component=d;const C=d.vnode.props;d.vnode=g,d.next=null,A_(d,g.props,C,w),N_(d,g.children,w),jr(),wl(void 0,d.update),Hr()},ht=(d,g,w,C,S,P,F,x,D=!1)=>{const A=d&&d.children,z=d?d.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:Z}=g;if(W>0){if(W&128){Kt(A,$,w,C,S,P,F,x,D);return}else if(W&256){ar(A,$,w,C,S,P,F,x,D);return}}Z&8?(z&16&&M(A,S,P),$!==A&&u(w,$)):z&16?Z&16?Kt(A,$,w,C,S,P,F,x,D):M(A,S,P,!0):(z&8&&u(w,""),Z&16&&j($,w,C,S,P,F,x,D))},ar=(d,g,w,C,S,P,F,x,D)=>{d=d||vr,g=g||vr;const A=d.length,z=g.length,$=Math.min(A,z);let W;for(W=0;W<$;W++){const Z=g[W]=D?dn(g[W]):Et(g[W]);m(d[W],Z,w,null,S,P,F,x,D)}A>z?M(d,S,P,!0,!1,$):j(g,w,C,S,P,F,x,D,$)},Kt=(d,g,w,C,S,P,F,x,D)=>{let A=0;const z=g.length;let $=d.length-1,W=z-1;for(;A<=$&&A<=W;){const Z=d[A],he=g[A]=D?dn(g[A]):Et(g[A]);if(Lt(Z,he))m(Z,he,w,null,S,P,F,x,D);else break;A++}for(;A<=$&&A<=W;){const Z=d[$],he=g[W]=D?dn(g[W]):Et(g[W]);if(Lt(Z,he))m(Z,he,w,null,S,P,F,x,D);else break;$--,W--}if(A>$){if(A<=W){const Z=W+1,he=Z<z?g[Z].el:C;for(;A<=W;)m(null,g[A]=D?dn(g[A]):Et(g[A]),w,he,S,P,F,x,D),A++}}else if(A>W)for(;A<=$;)yt(d[A],S,P,!0),A++;else{const Z=A,he=A,Ce=new Map;for(A=he;A<=W;A++){const ft=g[A]=D?dn(g[A]):Et(g[A]);ft.key!=null&&Ce.set(ft.key,A)}let ve,Ie=0;const At=W-he+1;let cr=!1,Wu=0;const Zr=new Array(At);for(A=0;A<At;A++)Zr[A]=0;for(A=Z;A<=$;A++){const ft=d[A];if(Ie>=At){yt(ft,S,P,!0);continue}let Pt;if(ft.key!=null)Pt=Ce.get(ft.key);else for(ve=he;ve<=W;ve++)if(Zr[ve-he]===0&&Lt(ft,g[ve])){Pt=ve;break}Pt===void 0?yt(ft,S,P,!0):(Zr[Pt-he]=A+1,Pt>=Wu?Wu=Pt:cr=!0,m(ft,g[Pt],w,null,S,P,F,x,D),Ie++)}const Gu=cr?L_(Zr):vr;for(ve=Gu.length-1,A=At-1;A>=0;A--){const ft=he+A,Pt=g[ft],Xu=ft+1<z?g[ft+1].el:C;Zr[A]===0?m(null,Pt,w,Xu,S,P,F,x,D):cr&&(ve<0||A!==Gu[ve]?Ot(Pt,w,Xu,2):ve--)}}},Ot=(d,g,w,C,S=null)=>{const{el:P,type:F,transition:x,children:D,shapeFlag:A}=d;if(A&6){Ot(d.component.subTree,g,w,C);return}if(A&128){d.suspense.move(g,w,C);return}if(A&64){F.move(d,g,w,be);return}if(F===wt){r(P,g,w);for(let $=0;$<D.length;$++)Ot(D[$],g,w,C);r(d.anchor,g,w);return}if(F===Vi){T(d,g,w);return}if(C!==2&&A&1&&x)if(C===0)x.beforeEnter(P),r(P,g,w),qe(()=>x.enter(P),S);else{const{leave:$,delayLeave:W,afterLeave:Z}=x,he=()=>r(P,g,w),Ce=()=>{$(P,()=>{he(),Z&&Z()})};W?W(P,he,Ce):Ce()}else r(P,g,w)},yt=(d,g,w,C=!1,S=!1)=>{const{type:P,props:F,ref:x,children:D,dynamicChildren:A,shapeFlag:z,patchFlag:$,dirs:W}=d;if(x!=null&&ro(x,null,w,d,!0),z&256){g.ctx.deactivate(d);return}const Z=z&1&&W,he=!Ns(d);let Ce;if(he&&(Ce=F&&F.onVnodeBeforeUnmount)&&ot(Ce,g,d),z&6)V(d.component,w,C);else{if(z&128){d.suspense.unmount(w,C);return}Z&&Mt(d,null,g,"beforeUnmount"),z&64?d.type.remove(d,g,w,S,be,C):A&&(P!==wt||$>0&&$&64)?M(A,g,w,!1,!0):(P===wt&&$&384||!S&&z&16)&&M(D,g,w),C&&wa(d)}(he&&(Ce=F&&F.onVnodeUnmounted)||Z)&&qe(()=>{Ce&&ot(Ce,g,d),Z&&Mt(d,null,g,"unmounted")},w)},wa=d=>{const{type:g,el:w,anchor:C,transition:S}=d;if(g===wt){I(w,C);return}if(g===Vi){L(d);return}const P=()=>{s(w),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(d.shapeFlag&1&&S&&!S.persisted){const{leave:F,delayLeave:x}=S,D=()=>F(w,P);x?x(d.el,P,D):D()}else P()},I=(d,g)=>{let w;for(;d!==g;)w=f(d),s(d),d=w;s(g)},V=(d,g,w)=>{const{bum:C,scope:S,update:P,subTree:F,um:x}=d;C&&wr(C),S.stop(),P&&(P.active=!1,yt(F,d,g,w)),x&&qe(x,g),qe(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},M=(d,g,w,C=!1,S=!1,P=0)=>{for(let F=P;F<d.length;F++)yt(d[F],g,w,C,S)},q=d=>d.shapeFlag&6?q(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ye=(d,g,w)=>{d==null?g._vnode&&yt(g._vnode,null,null,!0):m(g._vnode||null,d,g,null,null,null,w),Zi(),g._vnode=d},be={p:m,um:yt,m:Ot,r:wa,mt:qt,mc:j,pc:ht,pbc:ne,n:q,o:t};let ce,oe;return e&&([ce,oe]=e(be)),{render:ye,hydrate:ce,createApp:O_(ye,ce)}}function On({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function bp(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=dn(s[i]),a.el=o.el),n||bp(o,a))}}function L_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const U_=t=>t.__isTeleport,Tp="components";function Rl(t,e){return B_(Tp,t,!0,e)||t}const F_=Symbol();function B_(t,e,n=!0,r=!1){const s=bt||Be;if(s){const i=s.type;if(t===Tp){const a=_c(i);if(a&&(a===e||a===Vt(e)||a===Lo(Vt(e))))return i}const o=mh(s[t]||i[t],e)||mh(s.appContext[t],e);return!o&&r?i:o}}function mh(t,e){return t&&(t[e]||t[Vt(e)]||t[Lo(Vt(e))])}const wt=Symbol(void 0),xs=Symbol(void 0),ut=Symbol(void 0),Vi=Symbol(void 0),ps=[];let wn=null;function Ft(t=!1){ps.push(wn=t?null:[])}function Ip(){ps.pop(),wn=ps[ps.length-1]||null}let Os=1;function yh(t){Os+=t}function Sp(t){return t.dynamicChildren=Os>0?wn||vr:null,Ip(),Os>0&&wn&&wn.push(t),t}function Ho(t,e,n,r,s,i){return Sp(Ue(t,e,n,r,s,i,!0))}function gs(t,e,n,r,s){return Sp($e(t,e,n,r,s,!0))}function Ps(t){return t?t.__v_isVNode===!0:!1}function Lt(t,e){return t.type===e.type&&t.key===e.key}const qo="__vInternal",Cp=({key:t})=>t!=null?t:null,ji=({ref:t,ref_key:e,ref_for:n})=>t!=null?Pe(t)||Le(t)||ee(t)?{i:bt,r:t,k:e,f:!!n}:t:null;function Ue(t,e=null,n=null,r=0,s=null,i=t===wt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cp(e),ref:e&&ji(e),scopeId:Bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(xl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),Os>0&&!o&&wn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wn.push(c),c}const $e=$_;function $_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===F_)&&(t=ut),Ps(t)){const a=Sn(t,e,!0);return n&&xl(a,n),a}if(Y_(t)&&(t=t.__vccOpts),e){e=Ap(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=Po(a)),De(c)&&(zd(c)&&!Y(c)&&(c=Ye({},c)),e.style=Oo(c))}const o=Pe(t)?1:n_(t)?128:U_(t)?64:De(t)?4:ee(t)?2:0;return Ue(t,e,n,r,s,o,i,!0)}function Ap(t){return t?zd(t)||qo in t?Ye({},t):t:null}function Sn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?V_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Cp(a),ref:e&&e.ref?n&&s?Y(s)?s.concat(ji(e)):[s,ji(e)]:ji(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sn(t.ssContent),ssFallback:t.ssFallback&&Sn(t.ssFallback),el:t.el,anchor:t.anchor}}function Nl(t=" ",e=0){return $e(xs,null,t,e)}function GN(t="",e=!1){return e?(Ft(),gs(ut,null,t)):$e(ut,null,t)}function Et(t){return t==null||typeof t=="boolean"?$e(ut):Y(t)?$e(wt,null,t.slice()):typeof t=="object"?dn(t):$e(xs,null,String(t))}function dn(t){return t.el===null||t.memo?t:Sn(t)}function xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(qo in e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[Nl(e)]):n=8);t.children=e,t.shapeFlag|=n}function V_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Po([e.class,r.class]));else if(s==="style")e.style=Oo([e.style,r.style]);else if(Js(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ot(t,e,n,r=null){It(t,e,7,[n,r])}function XN(t,e,n,r){let s;const i=n&&n[r];if(Y(t)||Pe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const yc=t=>t?kp(t)?Ko(t)||t.proxy:yc(t.parent):null,so=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yc(t.parent),$root:t=>yc(t.root),$emit:t=>t.emit,$options:t=>pp(t),$forceUpdate:t=>()=>Jd(t.update),$nextTick:t=>_l.bind(t.proxy),$watch:t=>c_.bind(t)}),j_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==we&&ue(r,e))return o[e]=1,r[e];if(s!==we&&ue(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,i[e];if(n!==we&&ue(n,e))return o[e]=4,n[e];pc&&(o[e]=0)}}const u=so[e];let h,f;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ue(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ue(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==we&&ue(s,e)?(s[e]=n,!0):r!==we&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ue(t,o)||e!==we&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(r,o)||ue(so,o)||ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},H_=wp();let q_=0;function K_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||H_,i={uid:q_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new dv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mp(r,s),emitsOptions:rp(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qv.bind(null,i),t.ce&&t.ce(i),i}let Be=null;const ei=()=>Be||bt,kr=t=>{Be=t,t.scope.on()},qn=()=>{Be&&Be.scope.off(),Be=null};function kp(t){return t.vnode.shapeFlag&4}let Ds=!1;function z_(t,e=!1){Ds=e;const{props:n,children:r}=t.vnode,s=kp(t);C_(t,n,s,e),R_(t,r);const i=s?W_(t,e):void 0;return Ds=!1,i}function W_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ml(new Proxy(t.ctx,j_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?X_(t):null;kr(t),jr();const i=_n(r,t,0,[t.props,s]);if(Hr(),qn(),xd(i)){if(i.then(qn,qn),e)return i.then(o=>{vc(t,o,e)}).catch(o=>{Zs(o,t,0)});t.asyncDep=i}else vc(t,i,e)}else Rp(t,e)}function vc(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Yd(e)),Rp(t,n)}let vh;function Rp(t,e,n){const r=t.type;if(!t.render){if(!e&&vh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ye(Ye({isCustomElement:i,delimiters:a},o),c);r.render=vh(s,l)}}t.render=r.render||xt}kr(t),jr(),E_(t),Hr(),qn()}function G_(t){return new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}})}function X_(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=G_(t))},slots:t.slots,emit:t.emit,expose:e}}function Ko(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yd(ml(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in so)return so[n](t)}}))}function _c(t){return ee(t)&&t.displayName||t.name}function Y_(t){return ee(t)&&"__vccOpts"in t}const ze=(t,e)=>zv(t,e,Ds);function Tt(t,e,n){const r=arguments.length;return r===2?De(e)&&!Y(e)?Ps(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ps(n)&&(n=[n]),$e(t,e,n))}const Q_="3.2.33",J_="http://www.w3.org/2000/svg",Ln=typeof document!="undefined"?document:null,_h=Ln&&Ln.createElement("template"),Z_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ln.createElementNS(J_,t):Ln.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ln.createTextNode(t),createComment:t=>Ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{_h.innerHTML=r?`<svg>${t}</svg>`:t;const a=_h.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ew(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function tw(t,e,n){const r=t.style,s=Pe(n);if(n&&!s){for(const i in n)wc(r,i,n[i]);if(e&&!Pe(e))for(const i in e)n[i]==null&&wc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const wh=/\s*!important$/;function wc(t,e,n){if(Y(n))n.forEach(r=>wc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nw(t,e);wh.test(n)?t.setProperty(Vr(r),n.replace(wh,""),"important"):t[r]=n}}const Eh=["Webkit","Moz","ms"],Aa={};function nw(t,e){const n=Aa[e];if(n)return n;let r=Vt(e);if(r!=="filter"&&r in t)return Aa[e]=r;r=Lo(r);for(let s=0;s<Eh.length;s++){const i=Eh[s]+r;if(i in t)return Aa[e]=i}return e}const bh="http://www.w3.org/1999/xlink";function rw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bh,e.slice(6,e.length)):t.setAttributeNS(bh,e,n);else{const i=tv(e);n==null||i&&!kd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function sw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=kd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Np,iw]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ec=0;const ow=Promise.resolve(),aw=()=>{Ec=0},cw=()=>Ec||(ow.then(aw),Ec=Np());function pr(t,e,n,r){t.addEventListener(e,n,r)}function lw(t,e,n,r){t.removeEventListener(e,n,r)}function uw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=hw(e);if(r){const l=i[e]=fw(r,s);pr(t,a,l,c)}else o&&(lw(t,a,o,c),i[e]=void 0)}}const Th=/(?:Once|Passive|Capture)$/;function hw(t){let e;if(Th.test(t)){e={};let n;for(;n=t.match(Th);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Vr(t.slice(2)),e]}function fw(t,e){const n=r=>{const s=r.timeStamp||Np();(iw||s>=n.attached-1)&&It(dw(r,n.value),e,5,[r])};return n.value=t,n.attached=cw(),n}function dw(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ih=/^on[a-z]/,pw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?ew(t,r,s):e==="style"?tw(t,n,r):Js(e)?ol(e)||uw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gw(t,e,r,s))?sw(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),rw(t,e,r,s))};function gw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ih.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ih.test(e)&&Pe(n)?!1:e in t}const an="transition",es="animation",Ol=(t,{slots:e})=>Tt(ap,mw(t),e);Ol.displayName="Transition";const xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ol.props=Ye({},ap.props,xp);const Pn=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sh=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function mw(t){const e={};for(const R in t)R in xp||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,v=yw(s),b=v&&v[0],m=v&&v[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:E,onLeave:T,onLeaveCancelled:L,onBeforeAppear:U=_,onAppear:k=y,onAppearCancelled:K=E}=e,j=(R,re,pe)=>{lr(R,re?u:a),lr(R,re?l:o),pe&&pe()},X=(R,re)=>{lr(R,p),lr(R,f),re&&re()},ne=R=>(re,pe)=>{const qt=R?k:y,Re=()=>j(re,R,pe);Pn(qt,[re,Re]),Ch(()=>{lr(re,R?c:i),cn(re,R?u:a),Sh(qt)||Ah(re,r,b,Re)})};return Ye(e,{onBeforeEnter(R){Pn(_,[R]),cn(R,i),cn(R,o)},onBeforeAppear(R){Pn(U,[R]),cn(R,c),cn(R,l)},onEnter:ne(!1),onAppear:ne(!0),onLeave(R,re){const pe=()=>X(R,re);cn(R,h),ww(),cn(R,f),Ch(()=>{lr(R,h),cn(R,p),Sh(T)||Ah(R,r,m,pe)}),Pn(T,[R,pe])},onEnterCancelled(R){j(R,!1),Pn(E,[R])},onAppearCancelled(R){j(R,!0),Pn(K,[R])},onLeaveCancelled(R){X(R),Pn(L,[R])}})}function yw(t){if(t==null)return null;if(De(t))return[ka(t.enter),ka(t.leave)];{const e=ka(t);return[e,e]}}function ka(t){return Ss(t)}function cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function lr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ch(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vw=0;function Ah(t,e,n,r){const s=t._endId=++vw,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=_w(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function _w(t,e){const n=window.getComputedStyle(t),r=v=>(n[v]||"").split(", "),s=r(an+"Delay"),i=r(an+"Duration"),o=kh(s,i),a=r(es+"Delay"),c=r(es+"Duration"),l=kh(a,c);let u=null,h=0,f=0;e===an?o>0&&(u=an,h=o,f=i.length):e===es?l>0&&(u=es,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?an:es:null,f=u?u===an?i.length:c.length:0);const p=u===an&&/\b(transform|all)(,|$)/.test(n[an+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:p}}function kh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Rh(n)+Rh(t[r])))}function Rh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ww(){return document.body.offsetHeight}const Nh=t=>{const e=t.props["onUpdate:modelValue"];return Y(e)?n=>wr(e,n):e};function Ew(t){t.target.composing=!0}function xh(t){const e=t.target;e.composing&&(e.composing=!1,bw(e,"input"))}function bw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const YN={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Nh(s);const i=r||s.props&&s.props.type==="number";pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Ss(a)),t._assign(a)}),n&&pr(t,"change",()=>{t.value=t.value.trim()}),e||(pr(t,"compositionstart",Ew),pr(t,"compositionend",xh),pr(t,"change",xh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Nh(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ss(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Op=Ye({patchProp:pw},Z_);let ms,Oh=!1;function Tw(){return ms||(ms=D_(Op))}function Iw(){return ms=Oh?ms:M_(Op),Oh=!0,ms}const Sw=(...t)=>{const e=Tw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pp(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Cw=(...t)=>{const e=Iw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pp(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function Pp(t){return Pe(t)?document.querySelector(t):t}const Aw=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,kw=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Rw=/^["{[]|^-?[0-9][0-9.]{0,14}$/;function Nw(t,e){if(!(t==="__proto__"||t==="constructor"))return e}function xw(t){if(typeof t!="string")return t;const e=t.toLowerCase();if(e==="true")return!0;if(e==="false")return!1;if(e==="null")return null;if(e==="nan")return NaN;if(e==="infinity")return 1/0;if(e!=="undefined"){if(!Rw.test(t))return t;try{return Aw.test(t)||kw.test(t)?JSON.parse(t,Nw):JSON.parse(t)}catch{return t}}}const Ow=/#/g,Pw=/&/g,Dw=/=/g,Dp=/\+/g,Mw=/%5B/gi,Lw=/%5D/gi,Uw=/%5E/gi,Fw=/%60/gi,Bw=/%7B/gi,$w=/%7C/gi,Vw=/%7D/gi,jw=/%20/gi;function Hw(t){return encodeURI(""+t).replace($w,"|").replace(Mw,"[").replace(Lw,"]")}function bc(t){return Hw(t).replace(Dp,"%2B").replace(jw,"+").replace(Ow,"%23").replace(Pw,"%26").replace(Fw,"`").replace(Bw,"{").replace(Vw,"}").replace(Uw,"^")}function Ra(t){return bc(t).replace(Dw,"%3D")}function Mp(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function qw(t){return Mp(t.replace(Dp," "))}function Kw(t=""){const e={};t[0]==="?"&&(t=t.substr(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=Mp(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=qw(r[2]||"");e[s]?Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]:e[s]=i}return e}function zw(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ra(t)}=${bc(n)}`).join("&"):`${Ra(t)}=${bc(e)}`:Ra(t)}function Ww(t){return Object.keys(t).map(e=>zw(e,t[e])).join("&")}const Gw=/^\w+:(\/\/)?/,Xw=/^\/\/[^/]+/;function Lp(t,e=!1){return Gw.test(t)||e&&Xw.test(t)}const Yw=/\/$|\/\?/;function Tc(t="",e=!1){return e?Yw.test(t):t.endsWith("/")}function Up(t="",e=!1){if(!e)return(Tc(t)?t.slice(0,-1):t)||"/";if(!Tc(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length?`?${r.join("?")}`:"")}function Qw(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Tc(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length?`?${r.join("?")}`:"")}function Jw(t=""){return t.startsWith("/")}function Zw(t=""){return(Jw(t)?t.substr(1):t)||"/"}function eE(t,e){if(Fp(e))return t;const n=Up(e);return t.startsWith(n)?t:Pl(n,t)}function Ph(t,e){if(Fp(e))return t;const n=Up(e);return t.startsWith(n)?t.substr(n.length)||"/":t}function tE(t,e){const n=Bp(t),r=Ae(Ae({},Kw(n.search)),e);return n.search=Ww(r),rE(n)}function Fp(t){return!t||t==="/"}function nE(t){return t&&t!=="/"}function Pl(t,...e){let n=t||"";for(const r of e.filter(nE))n=n?Qw(n)+Zw(r):r;return n}function Bp(t="",e){if(!Lp(t,!0))return e?Bp(e+t):Dh(t);const[n="",r,s=""]=(t.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",o=""]=(s.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=Dh(o);return{protocol:n,auth:r?r.substr(0,r.length-1):"",host:i,pathname:a,search:c,hash:l}}function Dh(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function rE(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class sE extends Error{constructor(){super(...arguments),this.name="FetchError"}}function iE(t,e,n){let r="";t&&n&&(r=`${n.status} ${n.statusText} (${t.toString()})`),e&&(r=`${e.message} (${r})`);const s=new sE(r);return Object.defineProperty(s,"request",{get(){return t}}),Object.defineProperty(s,"response",{get(){return n}}),Object.defineProperty(s,"data",{get(){return n&&n._data}}),s}const oE=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Mh(t="GET"){return oE.has(t.toUpperCase())}function aE(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const cE=new Set(["image/svg","application/xml","application/xhtml","application/html"]),lE=/^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;function uE(t=""){if(!t)return"json";const e=t.split(";").shift();return lE.test(e)?"json":cE.has(e)||e.startsWith("text/")?"text":"blob"}const hE=new Set([408,409,425,429,500,502,503,504]);function $p(t){const{fetch:e,Headers:n}=t;function r(o){if(o.options.retry!==!1){const c=typeof o.options.retry=="number"?o.options.retry:Mh(o.options.method)?0:1,l=o.response&&o.response.status||500;if(c>0&&hE.has(l))return s(o.request,vt(Ae({},o.options),{retry:c-1}))}const a=iE(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(a,s),a}const s=async function(a,c={}){const l={request:a,options:Ae(Ae({},t.defaults),c),response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=eE(l.request,l.options.baseURL)),l.options.params&&(l.request=tE(l.request,l.options.params)),l.options.body&&Mh(l.options.method)&&aE(l.options.body)&&(l.options.body=JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await e(l.request,l.options).catch(async h=>(l.error=h,l.options.onRequestError&&await l.options.onRequestError(l),r(l)));const u=(l.options.parseResponse?"json":l.options.responseType)||uE(l.response.headers.get("content-type")||"");if(u==="json"){const h=await l.response.text(),f=l.options.parseResponse||xw;l.response._data=f(h)}else l.response._data=await l.response[u]();return l.options.onResponse&&await l.options.onResponse(l),l.response.ok||l.options.onResponseError&&await l.options.onResponseError(l),l.response.ok?l.response:r(l)},i=function(a,c){return s(a,c).then(l=>l._data)};return i.raw=s,i.create=(o={})=>$p(vt(Ae({},t),{defaults:Ae(Ae({},t.defaults),o)})),i}const Vp=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("unable to locate global object")}(),fE=Vp.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),dE=Vp.Headers,pE=$p({fetch:fE,Headers:dE}),gE=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},io=gE().app,mE=()=>io.baseURL,yE=()=>io.buildAssetsDir,vE=(...t)=>Pl(_E(),yE(),...t),_E=(...t)=>{const e=io.cdnURL||io.baseURL;return t.length?Pl(e,...t):e};function Ic(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Ic(s,e,i):typeof s=="function"&&(e[i]=s)}return e}function wE(t,e){return t.reduce((n,r)=>n.then(()=>r.apply(void 0,e)),Promise.resolve(null))}function EE(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}class bE{constructor(){this._hooks={},this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];){const i=this._deprecatedHooks[e];typeof i=="string"?s={to:i}:s=i,e=s.to}return s&&(s.message?console.warn(s.message):console.warn(`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:""))),this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=null)}}hookOnce(e,n){let r,s=(...i)=>(r(),r=null,s=null,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=n}deprecateHooks(e){Object.assign(this._deprecatedHooks,e)}addHooks(e){const n=Ic(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{r.splice(0,r.length).forEach(s=>s())}}removeHooks(e){const n=Ic(e);for(const r in n)this.removeHook(r,n[r])}callHook(e,...n){return wE(this._hooks[e]||[],n)}callHookParallel(e,...n){return EE(this._hooks[e]||[],n)}callHookWith(e,n,...r){return e(this._hooks[n]||[],r)}}function TE(){return new bE}function IE(){let t=null,e=!1;const n=r=>{if(t&&t!==r)throw new Error("Context conflict")};return{use:()=>t,set:(r,s)=>{s||n(r),t=r,e=!0},unset:()=>{t=null,e=!1},call:(r,s)=>{n(r),t=r;try{return s()}finally{e||(t=null)}},async callAsync(r,s){t=r;const i=()=>{t=r},o=()=>t===r?i:void 0;Fh.add(o);try{const a=s();return e||(t=null),await a}finally{Fh.delete(o)}}}}function SE(){const t={};return{get(e){return t[e]||(t[e]=IE()),t[e],t[e]}}}const oo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof global!="undefined"?global:typeof window!="undefined"?window:{},Lh="__unctx__",CE=oo[Lh]||(oo[Lh]=SE()),AE=t=>CE.get(t),Uh="__unctx_async_handlers__",Fh=oo[Uh]||(oo[Uh]=new Set);function os(t,e={}){const n=function(){};n.prototype.name=t;const r={};return new Proxy(n,{get(s,i){return i==="caller"?null:i==="__createMock__"?os:i in e?e[i]:r[i]=r[i]||os(`${t}.${i.toString()}`)},apply(s,i,o){return os(`${t}()`)},construct(s,i,o){return os(`[${t}]`)},enumerate(s){return[]}})}var kE=os("mock");function ki(t){return console.warn(t),kE}const RE=new Set(["store","spa","fetchCounters"]),NE=new Set(["isHMR","base","payload","from","next","error","redirect","redirected","enablePreview","$preview","beforeNuxtRender","beforeSerialize"]),xE=new Set(["req","res","ssrContext"]),OE=["route","params","query"],Bh={isClient:!0,isServer:!1,isDev:!1,isStatic:void 0,target:"server",modern:!1},PE=t=>{t._legacyContext=new Proxy(t,{get(e,n){if(RE.has(n))return ki(`Accessing ${n} is not supported in Nuxt 3.`);if(NE.has(n))return ki(`Accessing ${n} is not yet supported in Nuxt 3.`);if(OE.includes(n)){if(!("$router"in t))return ki("vue-router is not being used in this project.");switch(n){case"route":return e.$router.currentRoute.value;case"params":case"query":return e.$router.currentRoute.value[n]}}if(n==="$config"||n==="env")return qp();if(n in Bh)return Bh[n];if(!xE.has(n))return n==="ssrContext"?e._legacyContext:e.ssrContext&&n in e.ssrContext?e.ssrContext[n]:n==="nuxt"?e.payload:n==="nuxtState"?e.payload.data:n in t.vueApp?t.vueApp[n]:n in t?t[n]:ki(`Accessing ${n} is not supported in Nuxt3.`)}}),t.hook("app:created",()=>{const e=new Proxy(t.vueApp,{get(n,r){return["$root","constructor"].includes(r)?e:n[r]||t[r]}});window[`$${t.globalName}`]=e})},jp=AE("nuxt-app"),Hp="__nuxt_plugin";function DE(t){const e=Ae({provide:void 0,globalName:"nuxt",payload:Ut(Ae({data:{},state:{},_errors:{}},window.__NUXT__)),isHydrating:!0,_asyncDataPromises:{}},t);e.hooks=TE(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(s,i)=>{const o="$"+s;Ri(e,o,i),Ri(e.vueApp.config.globalProperties,o,i)},Ri(e.vueApp,"$nuxt",e),Ri(e.vueApp.config.globalProperties,"$nuxt",e),e.ssrContext&&(e.ssrContext.nuxt=e);const n=Ut(e.payload.config),r=new Proxy(n,{get(s,i){var o;return i==="public"?s.public:(o=s[i])!=null?o:s.public[i]},set(s,i,o){return i==="public"||i==="app"?!1:(s[i]=o,s.public[i]=o,!0)}});return e.provide("config",r),e}async function ME(t,e){if(typeof e!="function")return;const{provide:n}=await Un(t,e,[t])||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}async function LE(t,e){for(const n of e)await ME(t,n)}function UE(t){let e=!1;const n=t.map(r=>typeof r!="function"?()=>{}:FE(r)?(e=!0,s=>r(s._legacyContext,s.provide)):r);return e&&n.unshift(PE),n}function Dl(t){return t[Hp]=!0,t}function FE(t){return!t[Hp]}function Un(t,e,n){const r=()=>n?e(...n):e();return jp.set(t),r()}function Ct(){const t=ei();if(!t){const e=jp.use();if(!e)throw new Error("nuxt instance unavailable");return e}return t.appContext.app.$nuxt}function qp(){return Ct().$config}function Ri(t,e,n){Object.defineProperty(t,e,{get:()=>n})}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",qr=t=>Kp?Symbol(t):"_vr_"+t,BE=qr("rvlm"),$h=qr("rvd"),Ml=qr("r"),zp=qr("rl"),Sc=qr("rvl"),gr=typeof window!="undefined";function $E(t){return t.__esModule||Kp&&t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Na(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const ys=()=>{},VE=/\/$/,jE=t=>t.replace(VE,"");function xa(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=zE(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function HE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Rr(e.matched[r],n.matched[s])&&Wp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!KE(t[n],e[n]))return!1;return!0}function KE(t,e){return Array.isArray(t)?jh(t,e):Array.isArray(e)?jh(e,t):t===e}function jh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ms;(function(t){t.pop="pop",t.push="push"})(Ms||(Ms={}));var vs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vs||(vs={}));function WE(t){if(!t)if(gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jE(t)}const GE=/^[^#]+#/;function XE(t,e){return t.replace(GE,"#")+e}function YE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zo=()=>({left:window.pageXOffset,top:window.pageYOffset});function QE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=YE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hh(t,e){return(history.state?history.state.position-e:-1)+t}const Cc=new Map;function JE(t,e){Cc.set(t,e)}function ZE(t){const e=Cc.get(t);return Cc.delete(t),e}let e0=()=>location.protocol+"//"+location.host;function Gp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Vh(c,"")}return Vh(n,t)+r+s}function t0(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Gp(t,location),v=n.value,b=e.value;let m=0;if(f){if(n.value=p,e.value=f,o&&o===v){o=null;return}m=b?f.position-b.position:0}else r(p);s.forEach(_=>{_(n.value,v,{delta:m,type:Ms.pop,direction:m?m>0?vs.forward:vs.back:vs.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return i.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(_e({},f.state,{scroll:zo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function qh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zo():null}}function n0(t){const{history:e,location:n}=window,r={value:Gp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:e0()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=_e({},e.state,qh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=_e({},s.value,e.state,{forward:c,scroll:zo()});i(u.current,u,!0);const h=_e({},qh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function r0(t){t=WE(t);const e=n0(t),n=t0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:XE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function s0(t){return typeof t=="string"||t&&typeof t=="object"}function Xp(t){return typeof t=="string"||typeof t=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yp=qr("nf");var Kh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kh||(Kh={}));function Nr(t,e){return _e(new Error,{type:t,[Yp]:!0},e)}function un(t,e){return t instanceof Error&&Yp in t&&(e==null||!!(t.type&e))}const zh="[^/]+?",i0={sensitive:!1,strict:!1,start:!0,end:!0},o0=/[.+*?^${}()[\]/\\]/g;function a0(t,e){const n=_e({},i0,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(o0,"\\$&"),p+=40;else if(f.type===1){const{value:v,repeatable:b,optional:m,regexp:_}=f;i.push({name:v,repeatable:b,optional:m});const y=_||zh;if(y!==zh){p+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+T.message)}}let E=b?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(E=m&&l.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,p+=20,m&&(p+=-8),b&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",v=i[f-1];h[v.name]=p&&v.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:b,optional:m}=p,_=v in l?l[v]:"";if(Array.isArray(_)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=Array.isArray(_)?_.join("/"):_;if(!y)if(m)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=y}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function c0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function l0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=c0(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const u0={type:0,value:""},h0=/[a-zA-Z0-9_]/;function f0(t){if(!t)return[[]];if(t==="/")return[[u0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:h0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function d0(t,e,n){const r=a0(f0(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function p0(t,e){const n=[],r=new Map;e=Gh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,v=m0(u);v.aliasOf=f&&f.record;const b=Gh(e,u),m=[v];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of E)m.push(_e({},v,{components:f?f.record.components:v.components,path:T,aliasOf:f?f.record:v}))}let _,y;for(const E of m){const{path:T}=E;if(h&&T[0]!=="/"){const L=h.record.path,U=L[L.length-1]==="/"?"":"/";E.path=h.record.path+(T&&U+T)}if(_=d0(E,h,b),f?f.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),p&&u.name&&!Wh(_)&&o(u.name)),"children"in v){const L=v.children;for(let U=0;U<L.length;U++)i(L[U],_,f&&f.children[U])}f=f||_,c(_)}return y?()=>{o(y)}:ys}function o(u){if(Xp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&l0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Wh(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},v,b;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Nr(1,{location:u});b=f.record.name,p=_e(g0(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params),v=f.stringify(p)}else if("path"in u)v=u.path,f=n.find(y=>y.re.test(v)),f&&(p=f.parse(v),b=f.record.name);else{if(f=h.name?r.get(h.name):n.find(y=>y.re.test(h.path)),!f)throw Nr(1,{location:u,currentLocation:h});b=f.record.name,p=_e({},h.params,u.params),v=f.stringify(p)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:b,path:v,params:p,matched:m,meta:v0(m)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function g0(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function m0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:y0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function y0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Wh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function v0(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function Gh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Qp(t,e){return e.children.some(n=>n===t||Qp(t,n))}const Jp=/#/g,_0=/&/g,w0=/\//g,E0=/=/g,b0=/\?/g,Zp=/\+/g,T0=/%5B/g,I0=/%5D/g,eg=/%5E/g,S0=/%60/g,tg=/%7B/g,C0=/%7C/g,ng=/%7D/g,A0=/%20/g;function Ll(t){return encodeURI(""+t).replace(C0,"|").replace(T0,"[").replace(I0,"]")}function k0(t){return Ll(t).replace(tg,"{").replace(ng,"}").replace(eg,"^")}function Ac(t){return Ll(t).replace(Zp,"%2B").replace(A0,"+").replace(Jp,"%23").replace(_0,"%26").replace(S0,"`").replace(tg,"{").replace(ng,"}").replace(eg,"^")}function R0(t){return Ac(t).replace(E0,"%3D")}function N0(t){return Ll(t).replace(Jp,"%23").replace(b0,"%3F")}function x0(t){return t==null?"":N0(t).replace(w0,"%2F")}function ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function O0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Zp," "),o=i.indexOf("="),a=ao(o<0?i:i.slice(0,o)),c=o<0?null:ao(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Xh(t){let e="";for(let n in t){const r=t[n];if(n=R0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ac(i)):[r&&Ac(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function P0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ts(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Nr(4,{from:n,to:e})):h instanceof Error?a(h):s0(h)?a(Nr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Oa(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(D0(a)){const l=(a.__vccOpts||a)[e];l&&s.push(pn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=$E(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&pn(f,n,r,i,o)()}))}}return s}function D0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yh(t){const e=Yt(Ml),n=Yt(zp),r=ze(()=>e.resolve(ls(t.to))),s=ze(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Rr.bind(null,u));if(f>-1)return f;const p=Qh(c[l-2]);return l>1&&Qh(u)===p&&h[h.length-1].path!==p?h.findIndex(Rr.bind(null,c[l-2])):f}),i=ze(()=>s.value>-1&&F0(n.params,r.value.params)),o=ze(()=>s.value>-1&&s.value===n.matched.length-1&&Wp(n.params,r.value.params));function a(c={}){return U0(c)?e[ls(t.replace)?"replace":"push"](ls(t.to)).catch(ys):Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const M0=mt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yh,setup(t,{slots:e}){const n=Ut(Yh(t)),{options:r}=Yt(Ml),s=ze(()=>({[Jh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Jh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Tt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),L0=M0;function U0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function F0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Qh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jh=(t,e,n)=>t!=null?t:e!=null?e:n,B0=mt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Yt(Sc),s=ze(()=>t.route||r.value),i=Yt($h,0),o=ze(()=>s.value.matched[i]);fs($h,i+1),fs(BE,o),fs(Sc,s);const a=cc();return ds(()=>[a.value,o.value,t.name],([c,l,u],[h,f,p])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Rr(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Zh(n.default,{Component:u,route:c});const f=l.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=Tt(u,_e({},p,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Zh(n.default,{Component:b,route:c})||b}}});function Zh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rg=B0;function $0(t){const e=p0(t.routes,t),n=t.parseQuery||O0,r=t.stringifyQuery||Xh,s=t.history,i=ts(),o=ts(),a=ts(),c=lc(ln);let l=ln;gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Na.bind(null,I=>""+I),h=Na.bind(null,x0),f=Na.bind(null,ao);function p(I,V){let M,q;return Xp(I)?(M=e.getRecordMatcher(I),q=V):q=I,e.addRoute(q,M)}function v(I){const V=e.getRecordMatcher(I);V&&e.removeRoute(V)}function b(){return e.getRoutes().map(I=>I.record)}function m(I){return!!e.getRecordMatcher(I)}function _(I,V){if(V=_e({},V||c.value),typeof I=="string"){const oe=xa(n,I,V.path),d=e.resolve({path:oe.path},V),g=s.createHref(oe.fullPath);return _e(oe,d,{params:f(d.params),hash:ao(oe.hash),redirectedFrom:void 0,href:g})}let M;if("path"in I)M=_e({},I,{path:xa(n,I.path,V.path).path});else{const oe=_e({},I.params);for(const d in oe)oe[d]==null&&delete oe[d];M=_e({},I,{params:h(I.params)}),V.params=h(V.params)}const q=e.resolve(M,V),ye=I.hash||"";q.params=u(f(q.params));const be=HE(r,_e({},I,{hash:k0(ye),path:q.path})),ce=s.createHref(be);return _e({fullPath:be,hash:ye,query:r===Xh?P0(I.query):I.query||{}},q,{redirectedFrom:void 0,href:ce})}function y(I){return typeof I=="string"?xa(n,I,c.value.path):_e({},I)}function E(I,V){if(l!==I)return Nr(8,{from:V,to:I})}function T(I){return k(I)}function L(I){return T(_e(y(I),{replace:!0}))}function U(I){const V=I.matched[I.matched.length-1];if(V&&V.redirect){const{redirect:M}=V;let q=typeof M=="function"?M(I):M;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=y(q):{path:q},q.params={}),_e({query:I.query,hash:I.hash,params:I.params},q)}}function k(I,V){const M=l=_(I),q=c.value,ye=I.state,be=I.force,ce=I.replace===!0,oe=U(M);if(oe)return k(_e(y(oe),{state:ye,force:be,replace:ce}),V||M);const d=M;d.redirectedFrom=V;let g;return!be&&qE(r,q,M)&&(g=Nr(16,{to:d,from:q}),ar(q,q,!0,!1)),(g?Promise.resolve(g):j(d,q)).catch(w=>un(w)?un(w,2)?w:ht(w):Ee(w,d,q)).then(w=>{if(w){if(un(w,2))return k(_e(y(w.to),{state:ye,force:be,replace:ce}),V||d)}else w=ne(d,q,!0,ce,ye);return X(d,q,w),w})}function K(I,V){const M=E(I,V);return M?Promise.reject(M):Promise.resolve()}function j(I,V){let M;const[q,ye,be]=V0(I,V);M=Oa(q.reverse(),"beforeRouteLeave",I,V);for(const oe of q)oe.leaveGuards.forEach(d=>{M.push(pn(d,I,V))});const ce=K.bind(null,I,V);return M.push(ce),ur(M).then(()=>{M=[];for(const oe of i.list())M.push(pn(oe,I,V));return M.push(ce),ur(M)}).then(()=>{M=Oa(ye,"beforeRouteUpdate",I,V);for(const oe of ye)oe.updateGuards.forEach(d=>{M.push(pn(d,I,V))});return M.push(ce),ur(M)}).then(()=>{M=[];for(const oe of I.matched)if(oe.beforeEnter&&!V.matched.includes(oe))if(Array.isArray(oe.beforeEnter))for(const d of oe.beforeEnter)M.push(pn(d,I,V));else M.push(pn(oe.beforeEnter,I,V));return M.push(ce),ur(M)}).then(()=>(I.matched.forEach(oe=>oe.enterCallbacks={}),M=Oa(be,"beforeRouteEnter",I,V),M.push(ce),ur(M))).then(()=>{M=[];for(const oe of o.list())M.push(pn(oe,I,V));return M.push(ce),ur(M)}).catch(oe=>un(oe,8)?oe:Promise.reject(oe))}function X(I,V,M){for(const q of a.list())q(I,V,M)}function ne(I,V,M,q,ye){const be=E(I,V);if(be)return be;const ce=V===ln,oe=gr?history.state:{};M&&(q||ce?s.replace(I.fullPath,_e({scroll:ce&&oe&&oe.scroll},ye)):s.push(I.fullPath,ye)),c.value=I,ar(I,V,M,ce),ht()}let R;function re(){R||(R=s.listen((I,V,M)=>{const q=_(I),ye=U(q);if(ye){k(_e(ye,{replace:!0}),q).catch(ys);return}l=q;const be=c.value;gr&&JE(Hh(be.fullPath,M.delta),zo()),j(q,be).catch(ce=>un(ce,12)?ce:un(ce,2)?(k(ce.to,q).then(oe=>{un(oe,20)&&!M.delta&&M.type===Ms.pop&&s.go(-1,!1)}).catch(ys),Promise.reject()):(M.delta&&s.go(-M.delta,!1),Ee(ce,q,be))).then(ce=>{ce=ce||ne(q,be,!1),ce&&(M.delta?s.go(-M.delta,!1):M.type===Ms.pop&&un(ce,20)&&s.go(-1,!1)),X(q,be,ce)}).catch(ys)}))}let pe=ts(),qt=ts(),Re;function Ee(I,V,M){ht(I);const q=qt.list();return q.length?q.forEach(ye=>ye(I,V,M)):console.error(I),Promise.reject(I)}function me(){return Re&&c.value!==ln?Promise.resolve():new Promise((I,V)=>{pe.add([I,V])})}function ht(I){return Re||(Re=!I,re(),pe.list().forEach(([V,M])=>I?M(I):V()),pe.reset()),I}function ar(I,V,M,q){const{scrollBehavior:ye}=t;if(!gr||!ye)return Promise.resolve();const be=!M&&ZE(Hh(I.fullPath,0))||(q||!M)&&history.state&&history.state.scroll||null;return _l().then(()=>ye(I,V,be)).then(ce=>ce&&QE(ce)).catch(ce=>Ee(ce,I,V))}const Kt=I=>s.go(I);let Ot;const yt=new Set;return{currentRoute:c,addRoute:p,removeRoute:v,hasRoute:m,getRoutes:b,resolve:_,options:t,push:T,replace:L,go:Kt,back:()=>Kt(-1),forward:()=>Kt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:qt.add,isReady:me,install(I){const V=this;I.component("RouterLink",L0),I.component("RouterView",rg),I.config.globalProperties.$router=V,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>ls(c)}),gr&&!Ot&&c.value===ln&&(Ot=!0,T(s.location).catch(ye=>{}));const M={};for(const ye in ln)M[ye]=ze(()=>c.value[ye]);I.provide(Ml,V),I.provide(zp,Ut(M)),I.provide(Sc,c);const q=I.unmount;yt.add(I),I.unmount=function(){yt.delete(I),yt.size<1&&(l=ln,R&&R(),R=null,c.value=ln,Ot=!1,Re=!1),q()}}}}function ur(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function V0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Rr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Rr(l,c))||s.push(c))}return[n,r,s]}const j0=(t,e)=>{const n=Ct(),r=qv(n.payload.state,t);if(r.value===void 0&&e){const s=e();if(Le(s))return n.payload.state[t]=s,s;r.value=s}return r},Ls=()=>{const t=Ct();return j0("error",()=>t.payload.error)},Hi=t=>{const e=Ct(),n=Ls(),r=typeof t=="string"?new Error(t):t;return e.callHook("app:error",r),n.value=n.value||r,r},H0=async(t={})=>{const e=Ct(),n=Ls();e.callHook("app:error:cleared",t),t.redirect&&await e.$router.replace(t.redirect),n.value=null};class ef extends Error{constructor(){super(...arguments),this.statusCode=500,this.statusMessage="H3Error"}}function q0(t){var n;if(t instanceof ef)return t;const e=new ef((n=t.message)!=null?n:t.statusMessage);return t.statusCode&&(e.statusCode=t.statusCode),t.statusMessage&&(e.statusMessage=t.statusMessage),t.data&&(e.data=t.data),e}const sg=()=>{var t;return(t=Ct())==null?void 0:t.$router},K0=()=>{try{if(Ct()._processingMiddleware)return!0}catch{return!0}return!1},QN=(t,e={})=>{if(t||(t="/"),K0())return t;const n=sg();return e.replace?n.replace(t):n.push(t)},z0=(...t)=>t.find(e=>e!==void 0),W0="noopener noreferrer";function G0(t){const e=t.componentName||"NuxtLink";return mt({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:r}){const s=sg(),i=ze(()=>n.to||n.href||""),o=ze(()=>n.external||n.target&&n.target!=="_self"?!0:typeof i.value=="object"?!1:i.value===""||Lp(i.value,!0));return()=>{var u,h,f;if(!o.value)return Tt(Rl("RouterLink"),{to:i.value,activeClass:n.activeClass||t.activeClass,exactActiveClass:n.exactActiveClass||t.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue},r.default);const a=typeof i.value=="object"?(h=(u=s.resolve(i.value))==null?void 0:u.href)!=null?h:null:i.value||null,c=n.target||null,l=n.noRel?null:z0(n.rel,t.externalRelAttribute,a?W0:"")||null;return Tt("a",{href:a,rel:l,target:c},(f=r.default)==null?void 0:f.call(r))}}})}var X0=G0({componentName:"NuxtLink"});function Zt(t){const e=ee(t)?ze(t):t;Ct()._useHead(e)}const Pa={};function Y0(t){for(const e in Pa)t.vueApp.component(e,Pa[e]),t.vueApp.component("Lazy"+e,Pa[e])}var Q0=Object.defineProperty,tf=Object.getOwnPropertySymbols,J0=Object.prototype.hasOwnProperty,Z0=Object.prototype.propertyIsEnumerable,nf=(t,e,n)=>e in t?Q0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,eb=(t,e)=>{for(var n in e||(e={}))J0.call(e,n)&&nf(t,n,e[n]);if(tf)for(var n of tf(e))Z0.call(e,n)&&nf(t,n,e[n]);return t},tb="usehead",rf="head:count",Da="data-head-attrs",nb=(t,e,n)=>{const r=n.createElement(t);for(const s of Object.keys(e)){let i=e[s];s==="key"||i===!1||(s==="children"?r.textContent=i:r.setAttribute(s,i))}return r};function rb(t,e){if(t instanceof HTMLElement&&e instanceof HTMLElement){const n=e.getAttribute("nonce");if(n&&!t.getAttribute("nonce")){const r=e.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===t.nonce&&t.isEqualNode(r)}}return t.isEqualNode(e)}var sb=t=>{const e=["key","id","name","property"];for(const n of e){const r=typeof t.getAttribute=="function"?t.hasAttribute(n)?t.getAttribute(n):void 0:t[n];if(r!==void 0)return{name:n,value:r}}},ib=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],ob=t=>{const e=[];for(const n of Object.keys(t))if(t[n]!=null){if(n==="title")e.push({tag:n,props:{children:t[n]}});else if(n==="base")e.push({tag:n,props:eb({key:"default"},t[n])});else if(ib.includes(n)){const r=t[n];Array.isArray(r)?r.forEach(s=>{e.push({tag:n,props:s})}):r&&e.push({tag:n,props:r})}}return e},sf=(t,e)=>{const n=t.getAttribute(Da);if(n)for(const s of n.split(","))s in e||t.removeAttribute(s);const r=[];for(const s in e){const i=e[s];i!=null&&(i===!1?t.removeAttribute(s):t.setAttribute(s,i),r.push(s))}r.length?t.setAttribute(Da,r.join(",")):t.removeAttribute(Da)},ab=(t=window.document,e,n)=>{var r;const s=t.head;let i=s.querySelector(`meta[name="${rf}"]`);const o=i?Number(i.getAttribute("content")):0,a=[];if(i)for(let l=0,u=i.previousElementSibling;l<o;l++,u=(u==null?void 0:u.previousElementSibling)||null)((r=u==null?void 0:u.tagName)==null?void 0:r.toLowerCase())===e&&a.push(u);else i=t.createElement("meta"),i.setAttribute("name",rf),i.setAttribute("content","0"),s.append(i);let c=n.map(l=>nb(l.tag,l.props,t));c=c.filter(l=>{for(let u=0;u<a.length;u++){const h=a[u];if(rb(h,l))return a.splice(u,1),!1}return!0}),a.forEach(l=>{var u;return(u=l.parentNode)==null?void 0:u.removeChild(l)}),c.forEach(l=>{s.insertBefore(l,i)}),i.setAttribute("content",""+(o-a.length+c.length))},cb=()=>{let t=[],e=new Set;const n={install(r){r.config.globalProperties.$head=n,r.provide(tb,n)},get headTags(){const r=[];return t.forEach(s=>{ob(s.value).forEach(o=>{if(o.tag==="meta"||o.tag==="base"||o.tag==="script"){const a=sb(o.props);if(a){let c=-1;for(let l=0;l<r.length;l++){const u=r[l],h=u.props[a.name],f=o.props[a.name];if(u.tag===o.tag&&h===f){c=l;break}}c!==-1&&r.splice(c,1)}}r.push(o)})}),r},addHeadObjs(r){t.push(r)},removeHeadObjs(r){t=t.filter(s=>s!==r)},updateDOM(r=window.document){let s,i={},o={};const a={};for(const l of n.headTags){if(l.tag==="title"){s=l.props.children;continue}if(l.tag==="htmlAttrs"){Object.assign(i,l.props);continue}if(l.tag==="bodyAttrs"){Object.assign(o,l.props);continue}a[l.tag]=a[l.tag]||[],a[l.tag].push(l)}s!==void 0&&(r.title=s),sf(r.documentElement,i),sf(r.body,o);const c=new Set([...Object.keys(a),...e]);for(const l of c)ab(r,l,a[l]||[]);e.clear(),Object.keys(a).forEach(l=>e.add(l))}};return n};function Ma(t){return t!==null&&typeof t=="object"}function kc(t,e,n=".",r){if(!Ma(e))return kc(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=o.concat(s[i]):Ma(o)&&Ma(s[i])?s[i]=kc(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function lb(t){return(...e)=>e.reduce((n,r)=>kc(n,r,"",t),{})}const ub=lb();var hb=Dl(t=>{const e=cb();t.vueApp.use(e);let n=!1;t.hooks.hookOnce("app:mounted",()=>{ah(()=>{e.updateDOM()}),n=!0});const r=cc();t._useHead=s=>{const i=cc(s);"titleTemplate"in i.value&&(r.value=i.value.titleTemplate);const o=ze(()=>{const c={meta:[]};return r.value&&"title"in i.value&&(c.title=typeof r.value=="function"?r.value(i.value.title):r.value.replace(/%s/g,i.value.title)),i.value.charset&&c.meta.push({key:"charset",charset:i.value.charset}),i.value.viewport&&c.meta.push({name:"viewport",content:i.value.viewport}),ub(c,i.value)});e.addHeadObjs(o),n&&ah(()=>{e.updateDOM()}),ei()&&jo(()=>{e.removeHeadObjs(o),e.updateDOM()})}});const fb=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),Rn=(t,e)=>(n,r)=>(Zt(()=>t(Ae(Ae({},fb(n)),r.attrs),r)),()=>{var s,i;return e?(i=(s=r.slots).default)==null?void 0:i.call(s):null}),rr={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},db=mt({name:"Script",props:vt(Ae({},rr),{async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String}),setup:Rn(t=>({script:[t]}))}),pb=mt({name:"Link",props:vt(Ae({},rr),{as:String,crossorigin:String,disabled:Boolean,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String}),setup:Rn(t=>({link:[t]}))}),gb=mt({name:"Base",props:vt(Ae({},rr),{href:String,target:String}),setup:Rn(t=>({base:t}))}),mb=mt({name:"Title",setup:Rn((t,{slots:e})=>{var r,s,i;return{title:((i=(s=(r=e.default)==null?void 0:r.call(e))==null?void 0:s[0])==null?void 0:i.children)||null}})}),yb=mt({name:"Meta",props:vt(Ae({},rr),{charset:String,content:String,httpEquiv:String,name:String}),setup:Rn(t=>({meta:[t]}))}),vb=mt({name:"Style",props:vt(Ae({},rr),{type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0}}),setup:Rn((t,{slots:e})=>{var s,i,o;const n=Ae({},t),r=(o=(i=(s=e.default)==null?void 0:s.call(e))==null?void 0:i[0])==null?void 0:o.children;return r&&(n.children=r),{style:[n]}})}),_b=mt({name:"Head",setup:(t,e)=>()=>{var n,r;return(r=(n=e.slots).default)==null?void 0:r.call(n)}}),wb=mt({name:"Html",props:vt(Ae({},rr),{manifest:String,version:String,xmlns:String}),setup:Rn(t=>({htmlAttrs:t}),!0)}),Eb=mt({name:"Body",props:rr,setup:Rn(t=>({bodyAttrs:t}),!0)});var of=Object.freeze(Object.defineProperty({__proto__:null,Script:db,Link:pb,Base:gb,Title:mb,Meta:yb,Style:vb,Head:_b,Html:wb,Body:Eb},Symbol.toStringTag,{value:"Module"})),bb={globalMeta:{charset:"utf-8",viewport:"width=device-width, initial-scale=1",meta:[],link:[],style:[],script:[]}};const Tb={created(){const t=ei();if(!t)return;const e=t.type;if(!e||!("head"in e))return;const n=Ct(),r=typeof e.head=="function"?ze(()=>e.head(n)):e.head;Zt(r)}};var Ib=Dl(t=>{Zt(ml(bb.globalMeta)),t.vueApp.mixin(Tb);for(const e in of)t.vueApp.component(e,of[e])});const Sb=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),af=(t,e)=>{var s;const n=e.route.matched.find(i=>i.components.default===e.Component.type),r=(s=t!=null?t:n==null?void 0:n.meta.key)!=null?s:Sb(e.route,n);return typeof r=="function"?r(e.route):r},Cb=(t,e)=>({default:()=>t?Tt(f_,t===!0?{}:t,e):e}),Ab={setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}},kb=(t,e,n)=>({default:()=>e?Tt(t,e===!0?{}:e,n):Tt(Ab,{},n)}),cf=Symbol("isNested");var La=mt({name:"NuxtPage",props:{pageKey:{type:[Function,String],default:null}},setup(t){const e=Ct(),n=Yt(cf,!1);return fs(cf,!0),()=>Tt(rg,{},{default:r=>{var s;return r.Component&&kb(Ol,(s=r.route.meta.pageTransition)!=null?s:Rb,Cb(r.route.meta.keepalive,n&&e.isHydrating?Tt(r.Component,{key:af(t.pageKey,r)}):Tt(sp,{onPending:()=>e.callHook("page:start",r.Component),onResolve:()=>e.callHook("page:finish",r.Component)},{default:()=>Tt(r.Component,{key:af(t.pageKey,r)})}))).default()}})}});const Rb={name:"page",mode:"out-in"},Nb="modulepreload",lf={},xb=vE(),Ni=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${xb}${r}`,r in lf)return;lf[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Nb,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
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
 */const $b="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$b,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Vb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new sr(s,a,r)}}function Vb(t,e){return t.replace(jb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jb=/\{\$([^}]+)}/g;function Hb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function co(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(uf(i)&&uf(o)){if(!co(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function uf(t){return t!==null&&typeof t=="object"}/**
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
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qb(t,e){const n=new Kb(t,e);return n.subscribe.bind(n)}class Kb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ua(){}/**
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
 */function en(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Qb={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Jb=fe.INFO,Zb={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},eT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Zb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=Jb,this._logHandler=eT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const tT=(t,e)=>e.some(n=>t instanceof n);let hf,ff;function nT(){return hf||(hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rT(){return ff||(ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,Rc=new WeakMap,dg=new WeakMap,Fa=new WeakMap,Fl=new WeakMap;function sT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(En(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fg.set(n,t)}).catch(()=>{}),Fl.set(e,t),e}function iT(t){if(Rc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let Nc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oT(t){Nc=t(Nc)}function aT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ba(this),e,...n);return dg.set(r,e.sort?e.sort():[e]),En(r)}:rT().includes(t)?function(...e){return t.apply(Ba(this),e),En(fg.get(this))}:function(...e){return En(t.apply(Ba(this),e))}}function cT(t){return typeof t=="function"?aT(t):(t instanceof IDBTransaction&&iT(t),tT(t,nT())?new Proxy(t,Nc):t)}function En(t){if(t instanceof IDBRequest)return sT(t);if(Fa.has(t))return Fa.get(t);const e=cT(t);return e!==t&&(Fa.set(t,e),Fl.set(e,t)),e}const Ba=t=>Fl.get(t);function lT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=En(o);return r&&o.addEventListener("upgradeneeded",c=>{r(En(o.result),c.oldVersion,c.newVersion,En(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const uT=["get","getKey","getAll","getAllKeys","count"],hT=["put","add","delete","clear"],$a=new Map;function df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=hT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return $a.set(e,i),i}oT(t=>vt(Ae({},t),{get:(e,n,r)=>df(e,n)||t.get(e,n,r),has:(e,n)=>!!df(e,n)||t.has(e,n)}));/**
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
 */class fT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",pf="0.7.24";/**
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
 */const Bl=new Ul("@firebase/app"),pT="@firebase/app-compat",gT="@firebase/analytics-compat",mT="@firebase/analytics",yT="@firebase/app-check-compat",vT="@firebase/app-check",_T="@firebase/auth",wT="@firebase/auth-compat",ET="@firebase/database",bT="@firebase/database-compat",TT="@firebase/functions",IT="@firebase/functions-compat",ST="@firebase/installations",CT="@firebase/installations-compat",AT="@firebase/messaging",kT="@firebase/messaging-compat",RT="@firebase/performance",NT="@firebase/performance-compat",xT="@firebase/remote-config",OT="@firebase/remote-config-compat",PT="@firebase/storage",DT="@firebase/storage-compat",MT="@firebase/firestore",LT="@firebase/firestore-compat",UT="firebase",FT="9.8.1";/**
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
 */const pg="[DEFAULT]",BT={[xc]:"fire-core",[pT]:"fire-core-compat",[mT]:"fire-analytics",[gT]:"fire-analytics-compat",[vT]:"fire-app-check",[yT]:"fire-app-check-compat",[_T]:"fire-auth",[wT]:"fire-auth-compat",[ET]:"fire-rtdb",[bT]:"fire-rtdb-compat",[TT]:"fire-fn",[IT]:"fire-fn-compat",[ST]:"fire-iid",[CT]:"fire-iid-compat",[AT]:"fire-fcm",[kT]:"fire-fcm-compat",[RT]:"fire-perf",[NT]:"fire-perf-compat",[xT]:"fire-rc",[OT]:"fire-rc-compat",[PT]:"fire-gcs",[DT]:"fire-gcs-compat",[MT]:"fire-fst",[LT]:"fire-fst-compat","fire-js":"fire-js",[UT]:"fire-js-all"};/**
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
 */const lo=new Map,Oc=new Map;function $T(t,e){try{t.container.addComponent(e)}catch(n){Bl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(Oc.has(e))return Bl.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of lo.values())$T(n,t);return!0}function $l(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const VT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Gn=new ti("app","Firebase",VT);/**
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
 */const ri=FT;function Vl(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:pg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Gn.create("bad-app-name",{appName:String(r)});const s=lo.get(r);if(s){if(co(t,s.options)&&co(n,s.config))return s;throw Gn.create("duplicate-app",{appName:r})}const i=new Yb(r);for(const a of Oc.values())i.addComponent(a);const o=new jT(t,n,i);return lo.set(r,o),o}function gg(t=pg){const e=lo.get(t);if(!e)throw Gn.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=BT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bl.warn(a.join(" "));return}xr(new Wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const HT="firebase-heartbeat-database",qT=1,Us="firebase-heartbeat-store";let Va=null;function mg(){return Va||(Va=lT(HT,qT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Us)}}}).catch(t=>{throw Gn.create("storage-open",{originalErrorMessage:t.message})})),Va}async function KT(t){try{return(await mg()).transaction(Us).objectStore(Us).get(yg(t))}catch(e){throw Gn.create("storage-get",{originalErrorMessage:e.message})}}async function gf(t,e){try{const r=(await mg()).transaction(Us,"readwrite");return await r.objectStore(Us).put(e,yg(t)),r.done}catch(n){throw Gn.create("storage-set",{originalErrorMessage:n.message})}}function yg(t){return`${t.name}!${t.options.appId}`}/**
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
 */function QT(t){xr(new Wn("platform-logger",e=>new fT(e),"PRIVATE")),xr(new Wn("heartbeat",e=>new GT(e),"PRIVATE")),bn(xc,pf,t),bn(xc,pf,"esm2017"),bn("fire-js","")}QT("");var JT="firebase",ZT="9.8.1";/**
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
 */bn(JT,ZT,"app");function jl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eI=vg,_g=new ti("auth","Firebase",vg());/**
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
 */const vf=new Ul("@firebase/auth");function qi(t,...e){vf.logLevel<=fe.ERROR&&vf.error(`Auth (${ri}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw Hl(t,...e)}function Bt(t,...e){return Hl(t,...e)}function wg(t,e,n){const r=Object.assign(Object.assign({},eI()),{[e]:n});return new ti("auth","Firebase",r).create(e,{appName:t.name})}function tI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),wg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _g.create(t,...e)}function te(t,e,...n){if(!t)throw Hl(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qi(e),new Error(e)}function tn(t,e){t||Wt(e)}/**
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
 */const _f=new Map;function Gt(t){tn(t instanceof Function,"Expected a class definition");let e=_f.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_f.set(t,e),e)}/**
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
 */function nI(t,e){const n=$l(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(co(i,e!=null?e:{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function rI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Pc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sI(){return wf()==="http:"||wf()==="https:"}function wf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */class si{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=cg()||ug()}get(){return iI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ql(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Eg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cI=new si(3e4,6e4);function lI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wo(t,e,n,r,s={}){return bg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ni(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Eg.fetch()(Tg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function bg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aI),e);try{const s=new hI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ja(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wg(t,u,l);jt(t,u)}}catch(s){if(s instanceof sr)throw s;jt(t,"network-request-failed")}}async function uI(t,e,n,r,s={}){const i=await Wo(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Tg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ql(t.config,s):`${t.config.apiScheme}://${s}`}class hI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),cI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Bt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function fI(t,e){return Wo(t,"POST","/v1/accounts:delete",e)}async function dI(t,e){return Wo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _s(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pI(t,e=!1){const n=en(t),r=await n.getIdToken(e),s=Kl(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_s(Ha(s.auth_time)),issuedAtTime:_s(Ha(s.iat)),expirationTime:_s(Ha(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ha(t){return Number(t)*1e3}function Kl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Db(n);return s?JSON.parse(s):(qi("Failed to decode base64 JWT payload"),null)}catch(s){return qi("Caught error parsing JWT payload as JSON",s),null}}function gI(t){const e=Kl(t);return te(e,"internal-error"),te(typeof e.exp!="undefined","internal-error"),te(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&mI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */async function uo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fs(t,dI(n,{idToken:r}));te(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wI(i.providerUserInfo):[],a=_I(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ig(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function vI(t){const e=en(t);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _I(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wI(t){return t.map(e=>{var{providerId:n}=e,r=jl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function EI(t,e){const n=await bg(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Tg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Eg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken!="undefined","internal-error"),te(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):gI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await EI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bs;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function hn(t,e){te(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=jl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ig(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pI(this,e)}reload(){return vI(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fs(this,fI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:T,isAnonymous:L,providerData:U,stsTokenManager:k}=n;te(E&&k,e,"internal-error");const K=Bs.fromJSON(this.name,k);te(typeof E=="string",e,"internal-error"),hn(h,e.name),hn(f,e.name),te(typeof T=="boolean",e,"internal-error"),te(typeof L=="boolean",e,"internal-error"),hn(p,e.name),hn(v,e.name),hn(b,e.name),hn(m,e.name),hn(_,e.name),hn(y,e.name);const j=new Kn({uid:E,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:L,photoURL:v,phoneNumber:p,tenantId:b,stsTokenManager:K,createdAt:_,lastLoginAt:y});return U&&Array.isArray(U)&&(j.providerData=U.map(X=>Object.assign({},X))),m&&(j._redirectEventId=m),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bs;s.updateFromServerResponse(n);const i=new Kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await uo(i),i}}/**
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
 */function Ki(t,e,n){return`firebase:${t}:${e}:${n}`}class Tr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ki("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Tr(Gt(Ef),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Gt(Ef);const o=Ki(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Kn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Tr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Tr(i,e,r))}}/**
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
 */function bf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(xg(e))return"Webos";if(zl(e))return"Safari";if((e.includes("chrome/")||Ag(e))&&!e.includes("edge/"))return"Chrome";if(Rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cg(t=Ve()){return/firefox\//i.test(t)}function zl(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ag(t=Ve()){return/crios\//i.test(t)}function kg(t=Ve()){return/iemobile/i.test(t)}function Rg(t=Ve()){return/android/i.test(t)}function Ng(t=Ve()){return/blackberry/i.test(t)}function xg(t=Ve()){return/webos/i.test(t)}function Go(t=Ve()){return/iphone|ipad|ipod/i.test(t)}function bI(t=Ve()){var e;return Go(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TI(){return hg()&&document.documentMode===10}function Og(t=Ve()){return Go(t)||Rg(t)||xg(t)||Ng(t)||/windows phone/i.test(t)||kg(t)}function II(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Pg(t,e=[]){let n;switch(t){case"Browser":n=bf(Ve());break;case"Worker":n=`${bf(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
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
 */class CI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new SI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_g,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Tr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?en(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Tr.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Wl(t){return en(t)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=qb(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Dg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
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
 */async function Ir(t,e){return uI(t,"POST","/v1/accounts:signInWithIdp",lI(t,e))}/**
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
 */const AI="http://localhost";class Xn extends Dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=jl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:AI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
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
 */class Gl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ii extends Gl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends ii{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class mn extends ii{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class yn extends ii{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */class Or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kn._fromIdTokenResponse(e,r,s),o=If(r);return new Or({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=If(r);return new Or({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function If(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ho extends sr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ho(e,n,r,s)}}function Mg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(t,i,e,r):i})}async function kI(t,e,n=!1){const r=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Or._forOperation(t,"link",r)}/**
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
 */async function RI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Fs(t,Mg(r,s,e,t),n);te(i.idToken,r,"internal-error");const o=Kl(i.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),Or._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
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
 */async function NI(t,e,n=!1){const r="signIn",s=await Mg(t,r,e),i=await Or._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function JN(t,e,n,r){return en(t).onAuthStateChanged(e,n,r)}const fo="__sak";/**
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
 */class Lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xI(){const t=Ve();return zl(t)||Go(t)}const OI=1e3,PI=10;class Ug extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xI()&&II(),this.fallbackToPolling=Og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);TI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,PI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ug.type="LOCAL";const DI=Ug;/**
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
 */function MI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await MI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
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
 */function Xl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class LI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Xl("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $t(){return window}function UI(t){$t().location.href=t}/**
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
 */function $g(){return typeof $t().WorkerGlobalScope!="undefined"&&typeof $t().importScripts=="function"}async function FI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $I(){return $g()?self:null}/**
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
 */const Vg="firebaseLocalStorageDb",VI=1,po="firebaseLocalStorage",jg="fbase_key";class oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yo(t,e){return t.transaction([po],e?"readwrite":"readonly").objectStore(po)}function jI(){const t=indexedDB.deleteDatabase(Vg);return new oi(t).toPromise()}function Dc(){const t=indexedDB.open(Vg,VI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(po,{keyPath:jg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(po)?e(r):(r.close(),await jI(),e(await Dc()))})})}async function Sf(t,e,n){const r=Yo(t,!0).put({[jg]:e,value:n});return new oi(r).toPromise()}async function HI(t,e){const n=Yo(t,!1).get(e),r=await new oi(n).toPromise();return r===void 0?null:r.value}function Cf(t,e){const n=Yo(t,!0).delete(e);return new oi(n).toPromise()}const qI=800,KI=3;class Hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance($I()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FI(),!this.activeServiceWorker)return;this.sender=new LI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await Sf(e,fo,"1"),await Cf(e,fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Yo(s,!1).getAll();return new oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hg.type="LOCAL";const zI=Hg;/**
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
 */function WI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function GI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",WI().appendChild(r)})}function XI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new si(3e4,6e4);/**
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
 */function qg(t,e){return e?Gt(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yl extends Dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YI(t){return NI(t.auth,new Yl(t),t.bypassAuthState)}function QI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),RI(n,new Yl(t),t.bypassAuthState)}async function JI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),kI(n,new Yl(t),t.bypassAuthState)}/**
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
 */class Kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YI;case"linkViaPopup":case"linkViaRedirect":return JI;case"reauthViaPopup":case"reauthViaRedirect":return QI;default:jt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZI=new si(2e3,1e4);async function ZN(t,e,n){const r=Wl(t);tI(t,e,Gl);const s=qg(r,n);return new Bn(r,"signInViaPopup",e,s).executeNotNull()}class Bn extends Kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ZI.get())};e()}}Bn.currentPopupAction=null;/**
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
 */const eS="pendingRedirect",zi=new Map;class tS extends Kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await nS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nS(t,e){const n=iS(e),r=sS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rS(t,e){zi.set(t._key(),e)}function sS(t){return Gt(t._redirectPersistence)}function iS(t){return Ki(eS,t.config.apiKey,t.name)}async function oS(t,e,n=!1){const r=Wl(t),s=qg(r,e),o=await new tS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const aS=10*60*1e3;class cS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zg(t);default:return!1}}/**
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
 */async function uS(t,e={}){return Wo(t,"GET","/v1/projects",e)}/**
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
 */const hS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fS=/^https?/;async function dS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uS(t);for(const n of e)try{if(pS(n))return}catch{}jt(t,"unauthorized-domain")}function pS(t){const e=Pc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fS.test(n))return!1;if(hS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gS=new si(3e4,6e4);function kf(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mS(t){return new Promise((e,n)=>{var r,s,i;function o(){kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kf(),n(Bt(t,"network-request-failed"))},timeout:gS.get()})}if(!((s=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=XI("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},GI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function yS(t){return Wi=Wi||mS(t),Wi}/**
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
 */const vS=new si(5e3,15e3),_S="__/auth/iframe",wS="emulator/auth/iframe",ES={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TS(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ql(e,wS):`https://${t.config.authDomain}/${_S}`,r={apiKey:e.apiKey,appName:t.name,v:ri},s=bS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ni(r).slice(1)}`}async function IS(t){const e=await yS(t),n=$t().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:TS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ES,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},vS.get());function c(){$t().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const SS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CS=500,AS=600,kS="_blank",RS="http://localhost";class Rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NS(t,e,n,r=CS,s=AS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},SS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ve().toLowerCase();n&&(a=Ag(l)?kS:n),Cg(l)&&(e=e||RS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(bI(l)&&a!=="_self")return xS(e||"",a),new Rf(null);const h=window.open(e||"",a,u);te(h,t,"popup-blocked");try{h.focus()}catch{}return new Rf(h)}function xS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OS="__/auth/handler",PS="emulator/auth/handler";function Nf(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:s};if(e instanceof Gl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ii){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${DS(t)}?${ni(a).slice(1)}`}function DS({config:t}){return t.emulator?ql(t,PS):`https://${t.authDomain}/${OS}`}/**
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
 */const qa="webStorageSupport";class MS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=oS,this._overrideRedirectResult=rS}async _openPopup(e,n,r,s){var i;tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Nf(e,n,r,Pc(),s);return NS(e,o,Xl())}async _openRedirect(e,n,r,s){return await this._originValidation(e),UI(Nf(e,n,r,Pc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IS(e),r=new cS(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qa,{type:qa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qa];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Og()||zl()||Go()}}const LS=MS;var xf="@firebase/auth",Of="0.20.1";/**
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
 */class US{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function BS(t){xr(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{te(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),te(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pg(t)},u=new CI(a,c,l);return rI(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new Wn("auth-internal",e=>{const n=Wl(e.getProvider("auth").getImmediate());return(r=>new US(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(xf,Of,FS(t)),bn(xf,Of,"esm2017")}/**
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
 */function Ql(t=gg()){const e=$l(t,"auth");return e.isInitialized()?e.getImmediate():nI(t,{popupRedirectResolver:LS,persistence:[zI,DI,Bg]})}BS("Browser");var Kr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const $S={apiKey:"AIzaSyD9EOSlnmGS-kseGdB2F9nOWG9UIlSBP_E",authDomain:"cookbook-769df.firebaseapp.com",projectId:"cookbook-769df",storageBucket:"cookbook-769df.appspot.com",messagingSenderId:"644720982505",appId:"1:644720982505:web:7ddfea4d742c26c2c23378"};Vl($S);Ql();new Rt;const xi=void 0;var VS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},B,Jl=Jl||{},J=VS||self;function go(){}function Mc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ai(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jS(t){return Object.prototype.hasOwnProperty.call(t,Ka)&&t[Ka]||(t[Ka]=++HS)}var Ka="closure_uid_"+(1e9*Math.random()>>>0),HS=0;function qS(t,e,n){return t.call.apply(t.bind,arguments)}function KS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=qS:We=KS,We.apply(null,arguments)}function Oi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Nn(){this.s=this.s,this.o=this.o}var zS=0;Nn.prototype.s=!1;Nn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zS!=0)&&jS(this)};Nn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Gg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function WS(t){e:{var e=FC;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Pf(t){return Array.prototype.concat.apply([],arguments)}function Zl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function mo(t){return/^[\s\xa0]*$/.test(t)}var Df=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function rt(t,e){return t.indexOf(e)!=-1}function za(t,e){return t<e?-1:t>e?1:0}var st;e:{var Mf=J.navigator;if(Mf){var Lf=Mf.userAgent;if(Lf){st=Lf;break e}}st=""}function eu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Xg(t){const e={};for(const n in t)e[n]=t[n];return e}var Uf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Uf.length;i++)n=Uf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function tu(t){return tu[" "](t),t}tu[" "]=go;function GS(t){var e=QS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var XS=rt(st,"Opera"),Pr=rt(st,"Trident")||rt(st,"MSIE"),Qg=rt(st,"Edge"),Lc=Qg||Pr,Jg=rt(st,"Gecko")&&!(rt(st.toLowerCase(),"webkit")&&!rt(st,"Edge"))&&!(rt(st,"Trident")||rt(st,"MSIE"))&&!rt(st,"Edge"),YS=rt(st.toLowerCase(),"webkit")&&!rt(st,"Edge");function Zg(){var t=J.document;return t?t.documentMode:void 0}var yo;e:{var Wa="",Ga=function(){var t=st;if(Jg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Qg)return/Edge\/([\d\.]+)/.exec(t);if(Pr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YS)return/WebKit\/(\S+)/.exec(t);if(XS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ga&&(Wa=Ga?Ga[1]:""),Pr){var Xa=Zg();if(Xa!=null&&Xa>parseFloat(Wa)){yo=String(Xa);break e}}yo=Wa}var QS={};function JS(){return GS(function(){let t=0;const e=Df(String(yo)).split("."),n=Df("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=za(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||za(s[2].length==0,i[2].length==0)||za(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Uc;if(J.document&&Pr){var Ff=Zg();Uc=Ff||parseInt(yo,10)||void 0}else Uc=void 0;var ZS=Uc,eC=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",go,e),J.removeEventListener("test",go,e)}catch{}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};function $s(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jg){e:{try{tu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:tC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$s.Z.h.call(this)}}Je($s,et);var tC={2:"touch",3:"pen",4:"mouse"};$s.prototype.h=function(){$s.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ci="closure_listenable_"+(1e6*Math.random()|0),nC=0;function rC(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++nC,this.ca=this.fa=!1}function Qo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Jo(t){this.src=t,this.g={},this.h=0}Jo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Bc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new rC(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Fc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Wg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Qo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var nu="closure_lm_"+(1e6*Math.random()|0),Ya={};function em(t,e,n,r,s){if(r&&r.once)return nm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)em(t,e[i],n,r,s);return null}return n=iu(n),t&&t[ci]?t.N(e,n,ai(r)?!!r.capture:!!r,s):tm(t,e,n,!1,r,s)}function tm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ai(s)?!!s.capture:!!s,a=su(t);if(a||(t[nu]=a=new Jo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=sC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)eC||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(sm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sC(){function t(n){return e.call(t.src,t.listener,n)}var e=iC;return t}function nm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)nm(t,e[i],n,r,s);return null}return n=iu(n),t&&t[ci]?t.O(e,n,ai(r)?!!r.capture:!!r,s):tm(t,e,n,!0,r,s)}function rm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)rm(t,e[i],n,r,s);else r=ai(r)?!!r.capture:!!r,n=iu(n),t&&t[ci]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Bc(i,n,r,s),-1<n&&(Qo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=su(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bc(e,n,r,s)),(n=-1<t?e[t]:null)&&ru(n))}function ru(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ci])Fc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=su(e))?(Fc(n,t),n.h==0&&(n.src=null,e[nu]=null)):Qo(t)}}}function sm(t){return t in Ya?Ya[t]:Ya[t]="on"+t}function iC(t,e){if(t.ca)t=!0;else{e=new $s(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ru(t),t=n.call(r,e)}return t}function su(t){return t=t[nu],t instanceof Jo?t:null}var Qa="__closure_events_fn_"+(1e9*Math.random()>>>0);function iu(t){return typeof t=="function"?t:(t[Qa]||(t[Qa]=function(e){return t.handleEvent(e)}),t[Qa])}function je(){Nn.call(this),this.i=new Jo(this),this.P=this,this.I=null}Je(je,Nn);je.prototype[ci]=!0;je.prototype.removeEventListener=function(t,e,n,r){rm(this,t,e,n,r)};function Ge(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var s=e;e=new et(r,t),Yg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Pi(o,r,!0,e)&&s}if(o=e.g=t,s=Pi(o,r,!0,e)&&s,s=Pi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Pi(o,r,!1,e)&&s}je.prototype.M=function(){if(je.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qo(n[r]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Pi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Fc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ou=J.JSON.stringify;function oC(){var t=om;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class aC{constructor(){this.h=this.g=null}add(e,n){const r=im.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var im=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new cC,t=>t.reset());class cC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lC(t){J.setTimeout(()=>{throw t},0)}function au(t,e){$c||uC(),Vc||($c(),Vc=!0),om.add(t,e)}var $c;function uC(){var t=J.Promise.resolve(void 0);$c=function(){t.then(hC)}}var Vc=!1,om=new aC;function hC(){for(var t;t=oC();){try{t.h.call(t.g)}catch(n){lC(n)}var e=im;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vc=!1}function Zo(t,e){je.call(this),this.h=t||1,this.g=e||J,this.j=We(this.kb,this),this.l=Date.now()}Je(Zo,je);B=Zo.prototype;B.da=!1;B.S=null;B.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ge(this,"tick"),this.da&&(cu(this),this.start()))}};B.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}B.M=function(){Zo.Z.M.call(this),cu(this),delete this.g};function lu(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function am(t){t.g=lu(()=>{t.g=null,t.i&&(t.i=!1,am(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fC extends Nn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:am(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(t){Nn.call(this),this.h=t,this.g={}}Je(Vs,Nn);var Bf=[];function cm(t,e,n,r){Array.isArray(n)||(n&&(Bf[0]=n.toString()),n=Bf);for(var s=0;s<n.length;s++){var i=em(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function lm(t){eu(t.g,function(e,n){this.g.hasOwnProperty(n)&&ru(e)},t),t.g={}}Vs.prototype.M=function(){Vs.Z.M.call(this),lm(this)};Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ea(){this.g=!0}ea.prototype.Aa=function(){this.g=!1};function dC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function pC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function mr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mC(t,n)+(r?" "+r:"")})}function gC(t,e){t.info(function(){return"TIMEOUT: "+e})}ea.prototype.info=function(){};function mC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ou(n)}catch{return e}}var ir={},$f=null;function ta(){return $f=$f||new je}ir.Ma="serverreachability";function um(t){et.call(this,ir.Ma,t)}Je(um,et);function js(t){const e=ta();Ge(e,new um(e,t))}ir.STAT_EVENT="statevent";function hm(t,e){et.call(this,ir.STAT_EVENT,t),this.stat=e}Je(hm,et);function it(t){const e=ta();Ge(e,new hm(e,t))}ir.Na="timingevent";function fm(t,e){et.call(this,ir.Na,t),this.size=e}Je(fm,et);function li(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var na={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function uu(){}uu.prototype.h=null;function Vf(t){return t.h||(t.h=t.i())}function pm(){}var ui={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function hu(){et.call(this,"d")}Je(hu,et);function fu(){et.call(this,"c")}Je(fu,et);var jc;function ra(){}Je(ra,uu);ra.prototype.g=function(){return new XMLHttpRequest};ra.prototype.i=function(){return{}};jc=new ra;function hi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Vs(this),this.P=yC,t=Lc?125:void 0,this.W=new Zo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gm}function gm(){this.i=null,this.g="",this.h=!1}var yC=45e3,Hc={},vo={};B=hi.prototype;B.setTimeout=function(t){this.P=t};function qc(t,e,n){t.K=1,t.v=ia(nn(e)),t.s=n,t.U=!0,mm(t,null)}function mm(t,e){t.F=Date.now(),fi(t),t.A=nn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Tm(n.h,"t",r),t.C=0,n=t.l.H,t.h=new gm,t.g=Hm(t.l,n?e:null,!t.s),0<t.O&&(t.L=new fC(We(t.Ia,t,t.g),t.O)),cm(t.V,t.g,"readystatechange",t.gb),e=t.H?Xg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),js(1),dC(t.j,t.u,t.A,t.m,t.X,t.s)}B.gb=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.Ia(t)};B.Ia=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Lc||this.g&&(this.h.h||this.g.ga()||Kf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?js(3):js(2)),sa(this);var n=this.g.ba();this.N=n;t:if(ym(this)){var r=Kf(this.g);t="";var s=r.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){$n(this),ws(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,pC(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mo(a)){var l=a;break t}}l=null}if(n=l)mr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Kc(this,n);else{this.i=!1,this.o=3,it(12),$n(this),ws(this);break e}}this.U?(vm(this,u,o),Lc&&this.i&&u==3&&(cm(this.V,this.W,"tick",this.fb),this.W.start())):(mr(this.j,this.m,o,null),Kc(this,o)),u==4&&$n(this),this.i&&!this.I&&(u==4?Bm(this.l,this):(this.i=!1,fi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),$n(this),ws(this)}}}catch{}finally{}};function ym(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function vm(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=vC(t,n),s==vo){e==4&&(t.o=4,it(14),r=!1),mr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Hc){t.o=4,it(15),mr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else mr(t.j,t.m,s,null),Kc(t,s);ym(t)&&s!=vo&&s!=Hc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eu(e),e.L=!0,it(11))):(mr(t.j,t.m,n,"[Invalid Chunked Response]"),$n(t),ws(t))}B.fb=function(){if(this.g){var t=Xt(this.g),e=this.g.ga();this.C<e.length&&(sa(this),vm(this,t,e),this.i&&t!=4&&fi(this))}};function vC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?vo:(n=Number(e.substring(n,r)),isNaN(n)?Hc:(r+=1,r+n>e.length?vo:(e=e.substr(r,n),t.C=r+n,e)))}B.cancel=function(){this.I=!0,$n(this)};function fi(t){t.Y=Date.now()+t.P,_m(t,t.P)}function _m(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=li(We(t.eb,t),e)}function sa(t){t.B&&(J.clearTimeout(t.B),t.B=null)}B.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gC(this.j,this.A),this.K!=2&&(js(3),it(17)),$n(this),this.o=2,ws(this)):_m(this,this.Y-t)};function ws(t){t.l.G==0||t.I||Bm(t.l,t)}function $n(t){sa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,cu(t.W),lm(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Kc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||zc(n.i,t))){if(n.I=t.N,!t.J&&zc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)bo(n),ca(n);else break e;wu(n),it(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=li(We(n.ab,n),6e3));if(1>=Cm(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Vn(n,11)}else if((t.J||n.g==t)&&bo(n),!mo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;!i.g&&(rt(v,"spdy")||rt(v,"quic")||rt(v,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(gu(i,i.h),i.h=null))}if(r.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.sa=b,ke(r.F,r.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=jm(r,r.H?r.la:null,r.W),o.J){Am(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(sa(a),fi(a)),r.g=o}else Um(r);0<n.l.length&&la(n)}else l[0]!="stop"&&l[0]!="close"||Vn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vn(n,7):_u(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}js(4)}catch{}}function _C(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Mc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function du(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mc(t)||typeof t=="string")Gg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Mc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=_C(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function zr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof zr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}B=zr.prototype;B.R=function(){pu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};B.T=function(){return pu(this),this.g.concat()};function pu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Yn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Yn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}B.get=function(t,e){return Yn(this.h,t)?this.h[t]:e};B.set=function(t,e){Yn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};B.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var wm=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Qn){this.g=e!==void 0?e:t.g,_o(this,t.j),this.s=t.s,wo(this,t.i),Eo(this,t.m),this.l=t.l,e=t.h;var n=new Hs;n.i=e.i,e.g&&(n.g=new zr(e.g),n.h=e.h),jf(this,n),this.o=t.o}else t&&(n=String(t).match(wm))?(this.g=!!e,_o(this,n[1]||"",!0),this.s=Es(n[2]||""),wo(this,n[3]||"",!0),Eo(this,n[4]),this.l=Es(n[5]||"",!0),jf(this,n[6]||"",!0),this.o=Es(n[7]||"")):(this.g=!!e,this.h=new Hs(null,this.g))}Qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(as(e,Hf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(as(e,Hf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(as(n,n.charAt(0)=="/"?SC:IC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",as(n,AC)),t.join("")};function nn(t){return new Qn(t)}function _o(t,e,n){t.j=n?Es(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wo(t,e,n){t.i=n?Es(e,!0):e}function Eo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jf(t,e,n){e instanceof Hs?(t.h=e,kC(t.h,t.g)):(n||(e=as(e,CC)),t.h=new Hs(e,t.g))}function ke(t,e,n){t.h.set(e,n)}function ia(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function EC(t){return t instanceof Qn?nn(t):new Qn(t,void 0)}function bC(t,e,n,r){var s=new Qn(null,void 0);return t&&_o(s,t),e&&wo(s,e),n&&Eo(s,n),r&&(s.l=r),s}function Es(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function as(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hf=/[#\/\?@]/g,IC=/[#\?:]/g,SC=/[#\?]/g,CC=/[#\?@]/g,AC=/#/g;function Hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new zr,t.h=0,t.i&&wC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=Hs.prototype;B.add=function(t,e){xn(this),this.i=null,t=Wr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Em(t,e){xn(t),e=Wr(t,e),Yn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Yn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&pu(t)))}function bm(t,e){return xn(t),e=Wr(t,e),Yn(t.g.h,e)}B.forEach=function(t,e){xn(this),this.g.forEach(function(n,r){Gg(n,function(s){t.call(e,s,r,this)},this)},this)};B.T=function(){xn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};B.R=function(t){xn(this);var e=[];if(typeof t=="string")bm(this,t)&&(e=Pf(e,this.g.get(Wr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Pf(e,t[n])}return e};B.set=function(t,e){return xn(this),this.i=null,t=Wr(this,t),bm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Tm(t,e,n){Em(t,e),0<n.length&&(t.i=null,t.g.set(Wr(t,e),Zl(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Wr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kC(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Em(this,r),Tm(this,s,n))},t)),t.j=e}var RC=class{constructor(t,e){this.h=t,this.g=e}};function Im(t){this.l=t||NC,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ea&&J.g.Ea()&&J.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NC=10;function Sm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Cm(t){return t.h?1:t.g?t.g.size:0}function zc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gu(t,e){t.g?t.g.add(e):t.h=e}function Am(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Im.prototype.cancel=function(){if(this.i=km(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function km(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zl(t.i)}function mu(){}mu.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};mu.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function xC(){this.g=new mu}function OC(t,e,n){const r=n||"";try{du(t,function(s,i){let o=s;ai(s)&&(o=ou(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function PC(t,e){const n=new ea;if(J.Image){const r=new Image;r.onload=Oi(Di,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Oi(Di,n,r,"TestLoadImage: error",!1,e),r.onabort=Oi(Di,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Oi(Di,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Di(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function di(t){this.l=t.$b||null,this.j=t.ib||!1}Je(di,uu);di.prototype.g=function(){return new oa(this.l,this.j)};di.prototype.i=function(t){return function(){return t}}({});function oa(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=yu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(oa,je);var yu=0;B=oa.prototype;B.open=function(t,e){if(this.readyState!=yu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qs(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=yu};B.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof J.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rm(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Rm(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}B.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pi(this):qs(this),this.readyState==3&&Rm(this)}};B.Ua=function(t){this.g&&(this.response=this.responseText=t,pi(this))};B.Ta=function(t){this.g&&(this.response=t,pi(this))};B.ha=function(){this.g&&pi(this)};function pi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qs(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var DC=J.JSON.parse;function Me(t){je.call(this),this.headers=new zr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nm,this.K=this.L=!1}Je(Me,je);var Nm="",MC=/^https?$/i,LC=["POST","PUT"];B=Me.prototype;B.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():jc.g(),this.C=this.u?Vf(this.u):Vf(jc),this.g.onreadystatechange=We(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){qf(this,i);return}t=n||"";const s=new zr(this.headers);r&&du(r,function(i,o){s.set(o,i)}),r=WS(s.T()),n=J.FormData&&t instanceof J.FormData,!(0<=Wg(LC,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pm(this),0<this.B&&((this.K=UC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.pa,this)):this.A=lu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qf(this,i)}};function UC(t){return Pr&&JS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function FC(t){return t.toLowerCase()=="content-type"}B.pa=function(){typeof Jl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function qf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xm(t),aa(t)}function xm(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),aa(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),aa(this,!0)),Me.Z.M.call(this)};B.Fa=function(){this.s||(this.F||this.v||this.l?Om(this):this.cb())};B.cb=function(){Om(this)};function Om(t){if(t.h&&typeof Jl!="undefined"&&(!t.C[1]||Xt(t)!=4||t.ba()!=2)){if(t.v&&Xt(t)==4)lu(t.Fa,0,t);else if(Ge(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(wm)[1]||null;if(!s&&J.self&&J.self.location){var i=J.self.location.protocol;s=i.substr(0,i.length-1)}r=!MC.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",xm(t)}}finally{aa(t)}}}}function aa(t,e){if(t.g){Pm(t);const n=t.g,r=t.C[0]?go:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Pm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}B.ba=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};B.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),DC(e)}};function Kf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Da=function(){return this.m};B.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function BC(t){let e="";return eu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function vu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=BC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dm(t){this.za=0,this.l=[],this.h=new ea,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ns("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ns("baseRetryDelayMs",5e3,t),this.$a=ns("retryDelaySeedMs",1e4,t),this.Ya=ns("forwardChannelMaxRetries",2,t),this.ra=ns("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Im(t&&t.concurrentRequestLimit),this.Ca=new xC,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}B=Dm.prototype;B.ma=8;B.G=1;function _u(t){if(Mm(t),t.G==3){var e=t.V++,n=nn(t.F);ke(n,"SID",t.J),ke(n,"RID",e),ke(n,"TYPE","terminate"),gi(t,n),e=new hi(t,t.h,e,void 0),e.K=2,e.v=ia(nn(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Hm(e.l,null),e.g.ea(e.v)),e.F=Date.now(),fi(e)}Vm(t)}B.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ca(t){t.g&&(Eu(t),t.g.cancel(),t.g=null)}function Mm(t){ca(t),t.u&&(J.clearTimeout(t.u),t.u=null),bo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Ja(t,e){t.l.push(new RC(t.Za++,e)),t.G==3&&la(t)}function la(t){Sm(t.i)||t.m||(t.m=!0,au(t.Ha,t),t.C=0)}function $C(t,e){return Cm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=li(We(t.Ha,t,e),$m(t,t.C)),t.C++,!0)}B.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new hi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Xg(i),Yg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Lm(this,s,e),n=nn(this.F),ke(n,"RID",t),ke(n,"CVER",22),this.D&&ke(n,"X-HTTP-Session-Id",this.D),gi(this,n),this.o&&i&&vu(n,this.o,i),gu(this.i,s),this.Ra&&ke(n,"TYPE","init"),this.ja?(ke(n,"$req",e),ke(n,"SID","null"),s.$=!0,qc(s,n,null)):qc(s,n,e),this.G=2}}else this.G==3&&(t?zf(this,t):this.l.length==0||Sm(this.i)||zf(this))};function zf(t,e){var n;e?n=e.m:n=t.V++;const r=nn(t.F);ke(r,"SID",t.J),ke(r,"RID",n),ke(r,"AID",t.U),gi(t,r),t.o&&t.s&&vu(r,t.o,t.s),n=new hi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Lm(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),gu(t.i,n),qc(n,r,e)}function gi(t,e){t.j&&du({},function(n,r){ke(e,r,n)})}function Lm(t,e,n){n=Math.min(t.l.length,n);var r=t.j?We(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{OC(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Um(t){t.g||t.u||(t.Y=1,au(t.Ga,t),t.A=0)}function wu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=li(We(t.Ga,t),$m(t,t.A)),t.A++,!0)}B.Ga=function(){if(this.u=null,Fm(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=li(We(this.bb,this),t)}};B.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,it(10),ca(this),Fm(this))};function Eu(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Fm(t){t.g=new hi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=nn(t.oa);ke(e,"RID","rpc"),ke(e,"SID",t.J),ke(e,"CI",t.N?"0":"1"),ke(e,"AID",t.U),gi(t,e),ke(e,"TYPE","xmlhttp"),t.o&&t.s&&vu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ia(nn(e)),n.s=null,n.U=!0,mm(n,t)}B.ab=function(){this.v!=null&&(this.v=null,ca(this),wu(this),it(19))};function bo(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Bm(t,e){var n=null;if(t.g==e){bo(t),Eu(t),t.g=null;var r=2}else if(zc(t.i,e))n=e.D,Am(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ta(),Ge(r,new fm(r,n,e,s)),la(t)}else Um(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&$C(t,e)||r==2&&wu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}}function $m(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Vn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=We(t.jb,t);n||(n=new Qn("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||_o(n,"https"),ia(n)),PC(n.toString(),r)}else it(2);t.G=0,t.j&&t.j.va(e),Vm(t),Mm(t)}B.jb=function(t){t?(this.h.info("Successfully pinged google.com"),it(2)):(this.h.info("Failed to ping google.com"),it(1))};function Vm(t){t.G=0,t.I=-1,t.j&&((km(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Zl(t.l),t.l.length=0),t.j.ua())}function jm(t,e,n){let r=EC(n);if(r.i!="")e&&wo(r,e+"."+r.i),Eo(r,r.m);else{const s=J.location;r=bC(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&eu(t.aa,function(s,i){ke(r,i,s)}),e=t.D,n=t.sa,e&&n&&ke(r,e,n),ke(r,"VER",t.ma),gi(t,r),r}function Hm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Me(new di({ib:!0})):new Me(t.qa),e.L=t.H,e}function qm(){}B=qm.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Oa=function(){};function To(){if(Pr&&!(10<=Number(ZS)))throw Error("Environmental error: no available transport.")}To.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){je.call(this),this.g=new Dm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!mo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gr(this)}Je(gt,je);gt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),au(We(t.hb,t,e))),it(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=jm(t,null,t.W),la(t)};gt.prototype.close=function(){_u(this.g)};gt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ja(this.g,e)}else this.v?(e={},e.__data__=ou(t),Ja(this.g,e)):Ja(this.g,t)};gt.prototype.M=function(){this.g.j=null,delete this.j,_u(this.g),delete this.g,gt.Z.M.call(this)};function Km(t){hu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(Km,hu);function zm(){fu.call(this),this.status=1}Je(zm,fu);function Gr(t){this.g=t}Je(Gr,qm);Gr.prototype.xa=function(){Ge(this.g,"a")};Gr.prototype.wa=function(t){Ge(this.g,new Km(t))};Gr.prototype.va=function(t){Ge(this.g,new zm(t))};Gr.prototype.ua=function(){Ge(this.g,"b")};To.prototype.createWebChannel=To.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;na.NO_ERROR=0;na.TIMEOUT=8;na.HTTP_ERROR=6;dm.COMPLETE="complete";pm.EventType=ui;ui.OPEN="a";ui.CLOSE="b";ui.ERROR="c";ui.MESSAGE="d";je.prototype.listen=je.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.La;Me.prototype.getLastErrorCode=Me.prototype.Da;Me.prototype.getStatus=Me.prototype.ba;Me.prototype.getResponseJson=Me.prototype.Qa;Me.prototype.getResponseText=Me.prototype.ga;Me.prototype.send=Me.prototype.ea;var VC=function(){return new To},jC=function(){return ta()},Za=na,HC=dm,qC=ir,Wf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},KC=di,Mi=pm,zC=Me;const Gf="@firebase/firestore";/**
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
 */const Jn=new Ul("@firebase/firestore");function Xf(){return Jn.logLevel}function H(t,...e){if(Jn.logLevel<=fe.DEBUG){const n=e.map(bu);Jn.debug(`Firestore (${Xr}): ${t}`,...n)}}function Cn(t,...e){if(Jn.logLevel<=fe.ERROR){const n=e.map(bu);Jn.error(`Firestore (${Xr}): ${t}`,...n)}}function Yf(t,...e){if(Jn.logLevel<=fe.WARN){const n=e.map(bu);Jn.warn(`Firestore (${Xr}): ${t}`,...n)}}function bu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */class WC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class XC{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new WC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new at(e)}}class YC{constructor(e,n,r){this.type="FirstParty",this.user=at.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class QC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new YC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZC{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.p=n.token,new JC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Tu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function eA(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Tu.A=-1;class Wm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=eA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Dr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ks{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ks.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ks?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Ks{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const tA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ks{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return tA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class Wc{constructor(e){this.fields=e,e.sort(ct.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Qe(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const nA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(Te(!!t),typeof t=="string"){let e=0;const n=nA.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */function Xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ym(t){const e=t.mapValue.fields.__previous_value__;return Xm(e)?Ym(e):e}function zs(t){const e=An(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class rA{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ua(t){return t==null}function Io(t){return t===0&&1/t==-1/0}function sA(t){return typeof t=="number"&&Number.isInteger(t)&&!Io(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xm(t)?4:iA(t)?9007199254740991:10:se()}function Ht(t,e){if(t===e)return!0;const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zs(t).isEqual(zs(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=An(r.timestampValue),o=An(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Mr(r.bytesValue).isEqual(Mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Oe(r.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Oe(r.integerValue)===Oe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Oe(r.doubleValue),o=Oe(s.doubleValue);return i===o?Io(i)===Io(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Dr(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Qf(i)!==Qf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ht(i[a],o[a])))return!1;return!0}(t,e);default:return se()}}function Ws(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function Ur(t,e){if(t===e)return 0;const n=Zn(t),r=Zn(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Oe(s.integerValue||s.doubleValue),a=Oe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jf(t.timestampValue,e.timestampValue);case 4:return Jf(zs(t),zs(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Mr(s),a=Mr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ge(Oe(s.latitude),Oe(i.latitude));return o!==0?o:ge(Oe(s.longitude),Oe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ur(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Li.mapValue&&i===Li.mapValue)return 0;if(s===Li.mapValue)return 1;if(i===Li.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const f=Ur(o[a[u]],c[l[u]]);if(f!==0)return f}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw se()}}function Jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=An(t),r=An(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Sr(t){return Gc(t)}function Gc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=An(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Gc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Gc(r.fields[a])}`;return i+"}"}(t.mapValue):se();var e,n}function Xc(t){return!!t&&"integerValue"in t}function Iu(t){return!!t&&"arrayValue"in t}function Zf(t){return!!t&&"nullValue"in t}function ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gi(t){return!!t&&"mapValue"in t}function bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bs(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=bs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(bs(this.value))}}function Qm(t){const e=[];return Yr(t.fields,(n,r)=>{const s=new ct([n]);if(Gi(r)){const i=Qm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wc(e)}/**
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
 */class Ze{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ze(e,0,ae.min(),ae.min(),Nt.empty(),0)}static newFoundDocument(e,n,r){return new Ze(e,1,n,ae.min(),r,0)}static newNoDocument(e,n){return new Ze(e,2,n,ae.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,ae.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function oA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new er(s,G.empty(),e)}function aA(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(ae.min(),G.empty(),-1)}static max(){return new er(ae.max(),G.empty(),-1)}}function cA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ui(this.root,e,this.comparator,!0)}}class Ui{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ke.RED,this.left=s!=null?s:Ke.EMPTY,this.right=i!=null?i:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ke(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function nd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new lA(t,e,n,r,s,i,o)}function Su(t){const e=ie(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Sr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Sr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Sr(r)).join(",")),e.P=n}return e.P}function uA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Sr(r.value)}`;var r}).join(", ")}]`),ua(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Sr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Sr(n)).join(",")),`Target(${e})`}function Cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!vA(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Ht(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sd(t.startAt,e.startAt)&&sd(t.endAt,e.endAt)}function Yc(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class lt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new hA(e,n,r):n==="array-contains"?new pA(e,r):n==="in"?new gA(e,r):n==="not-in"?new mA(e,r):n==="array-contains-any"?new yA(e,r):new lt(e,n,r)}static V(e,n,r){return n==="in"?new fA(e,r):new dA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Ur(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.v(Ur(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hA extends lt{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.v(n)}}class fA extends lt{constructor(e,n){super(e,"in",n),this.keys=Jm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dA extends lt{constructor(e,n){super(e,"not-in",n),this.keys=Jm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class pA extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Iu(n)&&Ws(n.arrayValue,this.value)}}class gA extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ws(this.value.arrayValue,n)}}class mA extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ws(this.value.arrayValue,n)}}class yA extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ws(this.value.arrayValue,r))}}class So{constructor(e,n){this.position=e,this.inclusive=n}}class Ts{constructor(e,n="asc"){this.field=e,this.dir=n}}function vA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function rd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Ur(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ha{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function _A(t,e,n,r,s,i,o,a){return new ha(t,e,n,r,s,i,o,a)}function Au(t){return new ha(t)}function wA(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function EA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bA(t){for(const e of t.filters)if(e.S())return e.field;return null}function TA(t){return t.collectionGroup!==null}function Gs(t){const e=ie(t);if(e.D===null){e.D=[];const n=bA(e),r=EA(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Ts(n)),e.D.push(new Ts(ct.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ts(ct.keyField(),i))}}}return e.D}function tr(t){const e=ie(t);if(!e.C)if(e.limitType==="F")e.C=nd(e.path,e.collectionGroup,Gs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Gs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ts(i.field,o))}const r=e.endAt?new So(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new So(e.startAt.position,e.startAt.inclusive):null;e.C=nd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function IA(t,e,n){return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fa(t,e){return Cu(tr(t),tr(e))&&t.limitType===e.limitType}function Zm(t){return`${Su(tr(t))}|lt:${t.limitType}`}function Qc(t){return`Query(target=${uA(tr(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):G.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=rd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Gs(n),r)||n.endAt&&!function(s,i,o){const a=rd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Gs(n),r))}(t,e)}function SA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ey(t){return(e,n)=>{let r=!1;for(const s of Gs(t)){const i=CA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function CA(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Ur(a,c):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
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
 */function ty(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Io(e)?"-0":e}}function ny(t){return{integerValue:""+t}}function AA(t,e){return sA(e)?ny(e):ty(t,e)}/**
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
 */class da{constructor(){this._=void 0}}function kA(t,e,n){return t instanceof Co?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Xs?sy(t,e):t instanceof Ys?iy(t,e):function(r,s){const i=ry(r,s),o=id(i)+id(r.k);return Xc(i)&&Xc(r.k)?ny(o):ty(r.M,o)}(t,e)}function RA(t,e,n){return t instanceof Xs?sy(t,e):t instanceof Ys?iy(t,e):n}function ry(t,e){return t instanceof Ao?Xc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Co extends da{}class Xs extends da{constructor(e){super(),this.elements=e}}function sy(t,e){const n=oy(e);for(const r of t.elements)n.some(s=>Ht(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ys extends da{constructor(e){super(),this.elements=e}}function iy(t,e){let n=oy(e);for(const r of t.elements)n=n.filter(s=>!Ht(s,r));return{arrayValue:{values:n}}}class Ao extends da{constructor(e,n){super(),this.M=e,this.k=n}}function id(t){return Oe(t.integerValue||t.doubleValue)}function oy(t){return Iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Xs&&r instanceof Xs||n instanceof Ys&&r instanceof Ys?Dr(n.elements,r.elements,Ht):n instanceof Ao&&r instanceof Ao?Ht(n.k,r.k):n instanceof Co&&r instanceof Co}(t.transform,e.transform)}class xA{constructor(e,n){this.version=e,this.transformResults=n}}class Cr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cr}static exists(e){return new Cr(void 0,e)}static updateTime(e){return new Cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pa{}function OA(t,e,n){t instanceof ga?function(r,s,i){const o=r.value.clone(),a=cd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof mi?function(r,s,i){if(!Xi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=cd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(ay(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Jc(t,e,n){t instanceof ga?function(r,s,i){if(!Xi(r.precondition,s))return;const o=r.value.clone(),a=ld(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(ad(s),o).setHasLocalMutations()}(t,e,n):t instanceof mi?function(r,s,i){if(!Xi(r.precondition,s))return;const o=ld(r.fieldTransforms,i,s),a=s.data;a.setAll(ay(r)),a.setAll(o),s.convertToFoundDocument(ad(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Xi(r.precondition,s)&&s.convertToNoDocument(ae.min())}(t,e)}function PA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ry(r.transform,s||null);i!=null&&(n==null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function od(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Dr(n,r,(s,i)=>NA(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ad(t){return t.isFoundDocument()?t.version:ae.min()}class ga extends pa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class mi extends pa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function ay(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cd(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,RA(o,a,n[s]))}return r}function ld(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kA(i,o,e))}return r}class DA extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class MA extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class LA{constructor(e){this.count=e}}/**
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
 */var xe,le;function UA(t){switch(t){default:return se();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function cy(t){if(t===void 0)return Cn("GRPC error has no .code"),N.UNKNOWN;switch(t){case xe.OK:return N.OK;case xe.CANCELLED:return N.CANCELLED;case xe.UNKNOWN:return N.UNKNOWN;case xe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case xe.INTERNAL:return N.INTERNAL;case xe.UNAVAILABLE:return N.UNAVAILABLE;case xe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case xe.NOT_FOUND:return N.NOT_FOUND;case xe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case xe.ABORTED:return N.ABORTED;case xe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case xe.DATA_LOSS:return N.DATA_LOSS;default:return se()}}(le=xe||(xe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const FA=new He(G.comparator);function nr(){return FA}const BA=new He(G.comparator);function Zc(...t){let e=BA;for(const n of t)e=e.insert(n.key,n);return e}function ec(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const $A=new He(G.comparator),VA=new Xe(G.comparator);function Se(...t){let e=VA;for(const n of t)e=e.add(n);return e}const jA=new Xe(ge);function ly(){return jA}/**
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
 */class ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,yi.createSynthesizedTargetChangeForCurrentChange(e,n)),new ma(ae.min(),r,ly(),nr(),Se())}}class yi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new yi(Qe.EMPTY_BYTE_STRING,n,Se(),Se(),Se())}}/**
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
 */class Yi{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class uy{constructor(e,n){this.targetId=e,this.$=n}}class hy{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ud{constructor(){this.B=0,this.L=fd(),this.U=Qe.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Se(),n=Se(),r=Se();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se()}}),new yi(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=fd()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class HA{constructor(e){this.nt=e,this.st=new Map,this.it=nr(),this.rt=hd(),this.ot=new Xe(ge)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(Yc(i))if(r===0){const o=new G(i.path);this.ct(n,o,Ze.newNoDocument(o,ae.min()))}else Te(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Yc(a.target)){const c=new G(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Ze.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=Se();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new ma(e,n,this.ot,this.it,r);return this.it=nr(),this.rt=hd(),this.ot=new Xe(ge),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new ud,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Xe(ge),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ud),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function hd(){return new He(G.comparator)}function fd(){return new He(G.comparator)}/**
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
 */const qA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),KA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class zA{constructor(e,n){this.databaseId=e,this.N=n}}function ko(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fy(t,e){return t.N?e.toBase64():e.toUint8Array()}function WA(t,e){return ko(t,e.toTimestamp())}function Qt(t){return Te(!!t),ae.fromTimestamp(function(e){const n=An(e);return new tt(n.seconds,n.nanos)}(t))}function Ru(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dy(t){const e=Ne.fromString(t);return Te(my(e)),e}function el(t,e){return Ru(t.databaseId,e.path)}function tc(t,e){const n=dy(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(py(n))}function tl(t,e){return Ru(t.databaseId,e)}function GA(t){const e=dy(t);return e.length===4?Ne.emptyPath():py(e)}function nl(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function py(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dd(t,e,n){return{name:el(t,e),fields:n.value.mapValue.fields}}function XA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.N?(Te(l===void 0||typeof l=="string"),Qe.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),Qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?N.UNKNOWN:cy(c.code);return new Q(l,c.message||"")}(o);n=new hy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tc(t,r.document.name),i=Qt(r.document.updateTime),o=new Nt({mapValue:{fields:r.document.fields}}),a=Ze.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Yi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tc(t,r.document),i=r.readTime?Qt(r.readTime):ae.min(),o=Ze.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Yi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tc(t,r.document),i=r.removedTargetIds||[];n=new Yi([],i,s,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new LA(s),o=r.targetId;n=new uy(o,i)}}return n}function YA(t,e){let n;if(e instanceof ga)n={update:dd(t,e.key,e.value)};else if(e instanceof DA)n={delete:el(t,e.key)};else if(e instanceof mi)n={update:dd(t,e.key,e.data),updateMask:ok(e.fieldMask)};else{if(!(e instanceof MA))return se();n={verify:el(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Co)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ys)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ao)return{fieldPath:i.field.canonicalString(),increment:o.k};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:WA(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function QA(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Qt(r.updateTime):Qt(s);return i.isEqual(ae.min())&&(i=Qt(s)),new xA(i,r.transformResults||[])}(n,e))):[]}function JA(t,e){return{documents:[tl(t,e.path)]}}function ZA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=tl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=tl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(ed(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NAN"}};if(Zf(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ed(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NOT_NAN"}};if(Zf(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(h.field),op:rk(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:hr(u.field),direction:nk(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||ua(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ek(t){let e=GA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=gy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ts(yr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ua(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new So(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new So(f,h)}(n.endAt)),_A(e,s,o,i,a,"F",c,l)}function tk(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gy(t){return t?t.unaryFilter!==void 0?[ik(t)]:t.fieldFilter!==void 0?[sk(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>gy(e)).reduce((e,n)=>e.concat(n)):se():[]}function nk(t){return qA[t]}function rk(t){return KA[t]}function hr(t){return{fieldPath:t.canonicalString()}}function yr(t){return ct.fromServerFormat(t.fieldPath)}function sk(t){return lt.create(yr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}function ik(t){switch(t.unaryFilter.op){case"IS_NAN":const e=yr(t.unaryFilter.field);return lt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=yr(t.unaryFilter.field);return lt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yr(t.unaryFilter.field);return lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=yr(t.unaryFilter.field);return lt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return se()}}function ok(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function my(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const ak="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ck{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function vi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OA(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Jc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Jc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ae.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&Dr(this.mutations,e.mutations,(n,r)=>od(n,r))&&Dr(this.baseMutations,e.baseMutations,(n,r)=>od(n,r))}}class Nu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=$A;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Nu(e,n,r,s)}}/**
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
 */class uk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hk{constructor(e){this.Jt=e}}function fk(t){const e=ek({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?IA(e,e.limit,"L"):e}/**
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
 */class dk{constructor(){this.qe=new pk}addToCollectionParentIndex(e,n){return this.qe.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(er.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class pk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Ne.comparator)).toArray()}}/**
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
 */class Fr{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Fr(0)}static yn(){return new Fr(-1)}}/**
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
 */async function _i(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==ak)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class gk{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mk{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return G.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):TA(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new G(n)).next(r=>{let s=Zc();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=Zc();return this.indexManager.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const c=function(l,u){return new ha(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.zs(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=s.get(c);l==null&&(l=Ze.newInvalidDocument(c),s=s.insert(c,l)),Jc(a,l,o.localWriteTime),l.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{ku(n,o)||(s=s.remove(i))}),s))}}/**
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
 */class xu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xu(e,n.fromCache,r,s)}}/**
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
 */class yk{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,r,s){return this.ti(e,n).next(i=>i||this.ei(e,n,s,r)).next(i=>i||this.ni(e,n))}ti(e,n){return O.resolve(null)}ei(e,n,r,s){return wA(n)||s.isEqual(ae.min())?this.ni(e,n):this.Zs.Ks(e,r).next(i=>{const o=this.si(n,i);return this.ii(n,o,r,s)?this.ni(e,n):(Xf()<=fe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qc(n)),this.ri(e,o,n,oA(s,-1)))})}si(e,n){let r=new Xe(ey(e));return n.forEach((s,i)=>{ku(e,i)&&(r=r.add(i))}),r}ii(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ni(e,n){return Xf()<=fe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Qc(n)),this.Zs.Qs(e,n,er.min())}ri(e,n,r,s){return this.Zs.Qs(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class vk{constructor(e,n,r,s){this.persistence=e,this.oi=n,this.M=s,this.ui=new He(ge),this.ai=new Qr(i=>Su(i),Cu),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(r)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new mk(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function _k(t,e,n,r){return new vk(t,e,n,r)}async function yy(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.li(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Se();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.fi.Ks(r,c).next(l=>({di:l,removedBatchIds:o,addedBatchIds:a}))})})}function wk(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(v=>{const b=c.docVersions.get(p);Te(b!==null),v.version.compareTo(b)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),f.next(()=>o.Bs.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.fi.Ks(r,s))})}function vy(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function Ek(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Qe.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(u,f),function(p,v,b){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,f,l)&&a.push(n.fs.updateTargetData(i,f))});let c=nr();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(bk(i,o,e.documentUpdates).next(l=>{c=l})),!r.isEqual(ae.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=s,i))}function bk(t,e,n){let r=Se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=nr();return n.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(ae.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):H("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Tk(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function Ik(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new zn(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ui=n.ui.insert(r.targetId,r),n.ai.set(e,r.targetId)),r})}async function rl(t,e,n){const r=ie(t),s=r.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!vi(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ui=r.ui.remove(e),r.ai.delete(s.target)}function pd(t,e,n){const r=ie(t);let s=ae.min(),i=Se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ie(a),h=u.ai.get(l);return h!==void 0?O.resolve(u.ui.get(h)):u.fs.getTargetData(c,l)}(r,o,tr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.oi.Qs(o,e,n?s:ae.min(),n?i:Se())).next(a=>(Sk(r,SA(e),a),{documents:a,_i:i})))}function Sk(t,e,n){let r=ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ci.set(e,r)}/**
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
 */class Ck{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return O.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var r;return this.yi.set(n.id,{id:(r=n).id,version:r.version,createTime:Qt(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(r){return{name:r.name,query:fk(r.bundledQuery),readTime:Qt(r.readTime)}}(n)),O.resolve()}}/**
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
 */class Ak{constructor(){this.overlays=new He(G.comparator),this.Ii=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ii.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=ec(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ec(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ec(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return O.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.Ii.get(s.largestBatchId).delete(r.key);this.Ii.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uk(n,r));let i=this.Ii.get(n);i===void 0&&(i=Se(),this.Ii.set(n,i)),this.Ii.set(n,i.add(r.key))}}/**
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
 */class Ou{constructor(){this.Ti=new Xe(Fe.Ei),this.Ai=new Xe(Fe.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Ti=this.Ti.add(r),this.Ai=this.Ai.add(r)}bi(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Pi(new Fe(e,n))}Vi(e,n){e.forEach(r=>this.removeReference(r,n))}vi(e){const n=new G(new Ne([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.Ai.forEachInRange([r,s],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new G(new Ne([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=Se();return this.Ai.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.Ti.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return G.comparator(e.key,n.key)||ge(e.Ci,n.Ci)}static Ri(e,n){return ge(e.Ci,n.Ci)||G.comparator(e.key,n.key)}}/**
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
 */class kk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Xe(Fe.Ei)}checkEmpty(e){return O.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new lk(i,n,r,s);this.Bs.push(o);for(const a of s)this.Ni=this.Ni.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Mi(r),i=s<0?0:s;return O.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return O.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([r,s],o=>{const a=this.ki(o.Ci);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(ge);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{r=r.add(a.Ci)})}),O.resolve(this.Oi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new G(i),0);let a=new Xe(ge);return this.Ni.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Ci)),!0)},o),O.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(r=>{const s=this.ki(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let r=this.Ni;return O.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Ni=r})}_n(e){}containsKey(e,n){const r=new Fe(n,0),s=this.Ni.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,O.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class Rk{constructor(e){this.$i=e,this.docs=new He(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.$i(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),O.resolve(r)}getAllFromCollection(e,n,r){let s=nr();const i=new G(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||cA(aA(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,s){se()}Bi(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Nk(this)}getSize(e){return O.resolve(this.size)}}class Nk extends gk{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class xk{constructor(e){this.persistence=e,this.Li=new Qr(n=>Su(n),Cu),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Ou,this.targetCount=0,this.Ki=Fr.gn()}forEachTarget(e,n){return this.Li.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ui&&(this.Ui=n),O.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Fr(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Tn(n),O.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Li.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.qi.bi(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.qi.Vi(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qi.Di(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.qi.containsKey(n))}}/**
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
 */class Ok{constructor(e,n){this.Gi={},this.overlays={},this.es=new Tu(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new xk(this),this.indexManager=new dk,this.ds=function(r){return new Rk(r)}(r=>this.referenceDelegate.Qi(r)),this.M=new hk(n),this._s=new Ck(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ak,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Gi[e.toKey()];return r||(r=new kk(n,this.referenceDelegate),this.Gi[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new Pk(this.es.next());return this.referenceDelegate.ji(),r(s).next(i=>this.referenceDelegate.Wi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zi(e,n){return O.or(Object.values(this.Gi).map(r=>()=>r.containsKey(e,n)))}}class Pk extends ck{constructor(e){super(),this.currentSequenceNumber=e}}class Pu{constructor(e){this.persistence=e,this.Hi=new Ou,this.Ji=null}static Yi(e){return new Pu(e)}get Xi(){if(this.Ji)return this.Ji;throw se()}addReference(e,n,r){return this.Hi.addReference(r,n),this.Xi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Hi.removeReference(r,n),this.Xi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(s=>this.Xi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xi,r=>{const s=G.fromPath(r);return this.Zi(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(r=>{r?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return O.or([()=>O.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class gd{constructor(){this.activeTargetIds=ly()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dk{constructor(){this.Ur=new gd,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new gd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mk{Kr(e){}shutdown(){}}/**
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
 */const Lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Uk{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
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
 */class Fk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,s,i){const o=this.ho(e,n);H("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(H("RestConnection","Received: ",c),c),c=>{throw Yf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i){return this.co(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=Lk[e];return`${this.uo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new zC;a.listenOnce(HC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Za.NO_ERROR:const l=a.getResponseJson();H("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Za.TIMEOUT:H("Connection",'RPC "'+e+'" timed out'),o(new Q(N.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const u=a.getStatus();if(H("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const v=p.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(v)>=0?v:N.UNKNOWN}(h.status);o(new Q(f,h.message))}else o(new Q(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Q(N.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{H("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=VC(),o=jC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new KC({})),this.lo(a.initMessageHeaders,n,r),cg()||ug()||Lb()||hg()||Ub()||lg()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");H("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new Uk({Jr:v=>{h?H("Connection","Not sending because WebChannel is closed:",v):(u||(H("Connection","Opening WebChannel transport."),l.open(),u=!0),H("Connection","WebChannel sending:",v),l.send(v))},Yr:()=>l.close()}),p=(v,b,m)=>{v.listen(b,_=>{try{m(_)}catch(y){setTimeout(()=>{throw y},0)}})};return p(l,Mi.EventType.OPEN,()=>{h||H("Connection","WebChannel transport opened.")}),p(l,Mi.EventType.CLOSE,()=>{h||(h=!0,H("Connection","WebChannel transport closed"),f.ro())}),p(l,Mi.EventType.ERROR,v=>{h||(h=!0,Yf("Connection","WebChannel transport errored:",v),f.ro(new Q(N.UNAVAILABLE,"The operation could not be completed")))}),p(l,Mi.EventType.MESSAGE,v=>{var b;if(!h){const m=v.data[0];Te(!!m);const _=m,y=_.error||((b=_[0])===null||b===void 0?void 0:b.error);if(y){H("Connection","WebChannel received error:",y);const E=y.status;let T=function(U){const k=xe[U];if(k!==void 0)return cy(k)}(E),L=y.message;T===void 0&&(T=N.INTERNAL,L="Unknown error status: "+E+" with message "+y.message),h=!0,f.ro(new Q(T,L)),l.close()}else H("Connection","WebChannel received:",m),f.oo(m)}}),p(o,qC.STAT_EVENT,v=>{v.stat===Wf.PROXY?H("Connection","Detected buffering proxy"):v.stat===Wf.NOPROXY&&H("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}function nc(){return typeof document!="undefined"?document:null}/**
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
 */function ya(t){return new zA(t,!0)}class _y{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class wy{constructor(e,n,r,s,i,o,a,c){this.Yn=e,this.Vo=r,this.vo=s,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new _y(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Do===n&&this.Qo(r,s)},r=>{e(()=>{const s=new Q(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(s)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(s=>{r(()=>this.jo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bk extends wy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=XA(this.M,e),r=function(s){if(!("targetChange"in s))return ae.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ae.min():i.readTime?Qt(i.readTime):ae.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=nl(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Yc(a)?{documents:JA(s,a)}:{query:ZA(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=fy(s,i.resumeToken):i.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=ko(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=tk(this.M,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=nl(this.M),n.removeTarget=e,this.Lo(n)}}class $k extends wy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=QA(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.tu(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=nl(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YA(this.M,r))};this.Lo(n)}}/**
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
 */class Vk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.M=s,this.su=!1}iu(){if(this.su)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(N.UNKNOWN,s.toString())})}_o(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So._o(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(N.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class jk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Hk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{r.enqueueAndForget(async()=>{or(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ie(a);c.wu.add(4),await wi(c),c.yu.set("Unknown"),c.wu.delete(4),await va(c)}(this))})}),this.yu=new jk(r,s)}}async function va(t){if(or(t))for(const e of t.mu)await e(!0)}async function wi(t){for(const e of t.mu)await e(!1)}function Ey(t,e){const n=ie(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Lu(n)?Mu(n):Jr(n).Mo()&&Du(n,e))}function by(t,e){const n=ie(t),r=Jr(n);n._u.delete(e),r.Mo()&&Ty(n,e),n._u.size===0&&(r.Mo()?r.$o():or(n)&&n.yu.set("Unknown"))}function Du(t,e){t.pu.Z(e.targetId),Jr(t).Ho(e)}function Ty(t,e){t.pu.Z(e),Jr(t).Jo(e)}function Mu(t){t.pu=new HA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),Jr(t).start(),t.yu.au()}function Lu(t){return or(t)&&!Jr(t).ko()&&t._u.size>0}function or(t){return ie(t).wu.size===0}function Iy(t){t.pu=void 0}async function qk(t){t._u.forEach((e,n)=>{Du(t,e)})}async function Kk(t,e){Iy(t),Lu(t)?(t.yu.lu(e),Mu(t)):t.yu.set("Unknown")}async function zk(t,e,n){if(t.yu.set("Online"),e instanceof hy&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ro(t,r)}else if(e instanceof Yi?t.pu.ut(e):e instanceof uy?t.pu._t(e):t.pu.ht(e),!n.isEqual(ae.min()))try{const r=await vy(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s._u.get(c);l&&s._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s._u.get(a);if(!c)return;s._u.set(a,c.withResumeToken(Qe.EMPTY_BYTE_STRING,c.snapshotVersion)),Ty(s,a);const l=new zn(c.target,a,1,c.sequenceNumber);Du(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ro(t,r)}}async function Ro(t,e,n){if(!vi(e))throw e;t.wu.add(1),await wi(t),t.yu.set("Offline"),n||(n=()=>vy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await va(t)})}function Sy(t,e){return e().catch(n=>Ro(t,n,e))}async function _a(t){const e=ie(t),n=kn(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Wk(e);)try{const s=await Tk(e.localStore,r);if(s===null){e.du.length===0&&n.$o();break}r=s.batchId,Gk(e,s)}catch(s){await Ro(e,s)}Cy(e)&&Ay(e)}function Wk(t){return or(t)&&t.du.length<10}function Gk(t,e){t.du.push(e);const n=kn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Cy(t){return or(t)&&!kn(t).ko()&&t.du.length>0}function Ay(t){kn(t).start()}async function Xk(t){kn(t).nu()}async function Yk(t){const e=kn(t);for(const n of t.du)e.Zo(n.mutations)}async function Qk(t,e,n){const r=t.du.shift(),s=Nu.from(r,e,n);await Sy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await _a(t)}async function Jk(t,e){e&&kn(t).Xo&&await async function(n,r){if(s=r.code,UA(s)&&s!==N.ABORTED){const i=n.du.shift();kn(n).Fo(),await Sy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await _a(n)}var s}(t,e),Cy(t)&&Ay(t)}async function yd(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=or(n);n.wu.add(3),await wi(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await va(n)}async function Zk(t,e){const n=ie(t);e?(n.wu.delete(2),await va(n)):e||(n.wu.add(2),await wi(n),n.yu.set("Unknown"))}function Jr(t){return t.Iu||(t.Iu=function(e,n,r){const s=ie(e);return s.iu(),new Bk(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:qk.bind(null,t),eo:Kk.bind(null,t),zo:zk.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Lu(t)?Mu(t):t.yu.set("Unknown")):(await t.Iu.stop(),Iy(t))})),t.Iu}function kn(t){return t.Tu||(t.Tu=function(e,n,r){const s=ie(e);return s.iu(),new $k(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:Xk.bind(null,t),eo:Jk.bind(null,t),eu:Yk.bind(null,t),tu:Qk.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await _a(t)):(await t.Tu.stop(),t.du.length>0&&(H("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class Uu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Uu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fu(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),vi(t))return new Q(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ar{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Zc(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class vd{constructor(){this.Eu=new He(G.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):se():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Br{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Br(e,n,Ar.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class eR{constructor(){this.Ru=void 0,this.listeners=[]}}class tR{constructor(){this.queries=new Qr(e=>Zm(e),fa),this.onlineState="Unknown",this.bu=new Set}}async function nR(t,e){const n=ie(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new eR),s)try{i.Ru=await n.onListen(r)}catch(o){const a=Fu(o,`Initialization of query '${Qc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&Bu(n)}async function rR(t,e){const n=ie(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function sR(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(s)&&(r=!0);o.Ru=s}}r&&Bu(n)}function iR(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Bu(t){t.bu.forEach(e=>{e.next()})}class oR{constructor(e,n,r){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
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
 */class ky{constructor(e){this.key=e}}class Ry{constructor(e){this.key=e}}class aR{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=Se(),this.mutatedKeys=Se(),this.Gu=ey(e),this.Qu=new Ar(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new vd,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=ku(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;f&&p?f.data.isEqual(p.data)?v!==b&&(r.track({type:3,doc:p}),m=!0):this.Hu(f,p)||(r.track({type:2,doc:p}),m=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),m=!0):f&&!p&&(r.track({type:1,doc:f}),m=!0,(c||l)&&(a=!0)),m&&(p?(o=o.add(p),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,f){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return p(h)-p(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Br(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new vd,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Se(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Ry(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new ky(r))}),n}ta(e){this.Uu=e._i,this.Ku=Se();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return Br.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class cR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lR{constructor(e){this.key=e,this.na=!1}}class uR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Qr(a=>Zm(a),fa),this.ra=new Map,this.oa=new Set,this.ua=new He(G.comparator),this.aa=new Map,this.ca=new Ou,this.ha={},this.la=new Map,this.fa=Fr.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function hR(t,e){const n=ER(t);let r,s;const i=n.ia.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ea();else{const o=await Ik(n.localStore,tr(e));n.isPrimaryClient&&Ey(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await fR(n,e,r,a==="current")}return s}async function fR(t,e,n,r){t._a=(u,h,f)=>async function(p,v,b,m){let _=v.view.Wu(b);_.ii&&(_=await pd(p.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,_)));const y=m&&m.targetChanges.get(v.targetId),E=v.view.applyChanges(_,p.isPrimaryClient,y);return wd(p,v.targetId,E.Xu),E.snapshot}(t,u,h,f);const s=await pd(t.localStore,e,!0),i=new aR(e,s._i),o=i.Wu(s.documents),a=yi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);wd(t,n,c.Xu);const l=new cR(e,n,i);return t.ia.set(e,l),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function dR(t,e){const n=ie(t),r=n.ia.get(e),s=n.ra.get(r.targetId);if(s.length>1)return n.ra.set(r.targetId,s.filter(i=>!fa(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await rl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),by(n.remoteStore,r.targetId),sl(n,r.targetId)}).catch(_i)):(sl(n,r.targetId),await rl(n.localStore,r.targetId,!0))}async function pR(t,e,n){const r=bR(t);try{const s=await function(i,o){const a=ie(i),c=tt.now(),l=o.reduce((h,f)=>h.add(f.key),Se());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,l).next(f=>{u=f;const p=[];for(const v of o){const b=PA(v,u.get(v.key));b!=null&&p.push(new mi(v.key,b,Qm(b.value.mapValue),Cr.exists(!0)))}return a.Bs.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new He(ge)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(r,s.batchId,n),await Ei(r,s.changes),await _a(r.remoteStore)}catch(s){const i=Fu(s,"Failed to persist write");n.reject(i)}}async function Ny(t,e){const n=ie(t);try{const r=await Ek(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.aa.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.na=!0:s.modifiedDocuments.size>0?Te(o.na):s.removedDocuments.size>0&&(Te(o.na),o.na=!1))}),await Ei(n,r,e)}catch(r){await _i(r)}}function _d(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ie(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Bu(a)}(r.eventManager,e),s.length&&r.sa.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gR(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.aa.get(e),i=s&&s.key;if(i){let o=new He(G.comparator);o=o.insert(i,Ze.newNoDocument(i,ae.min()));const a=Se().add(i),c=new ma(ae.min(),new Map,new Xe(ge),o,a);await Ny(r,c),r.ua=r.ua.remove(i),r.aa.delete(e),$u(r)}else await rl(r.localStore,e,!1).then(()=>sl(r,e,n)).catch(_i)}async function mR(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await wk(n.localStore,e);Oy(n,r,null),xy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ei(n,s)}catch(s){await _i(s)}}async function yR(t,e,n){const r=ie(t);try{const s=await function(i,o){const a=ie(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(Te(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,l))})}(r.localStore,e);Oy(r,e,n),xy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ei(r,s)}catch(s){await _i(s)}}function xy(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function Oy(t,e,n){const r=ie(t);let s=r.ha[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ha[r.currentUser.toKey()]=s}}function sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(r=>{t.ca.containsKey(r)||Py(t,r)})}function Py(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(by(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),$u(t))}function wd(t,e,n){for(const r of n)r instanceof ky?(t.ca.addReference(r.key,e),vR(t,r)):r instanceof Ry?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||Py(t,r.key)):se()}function vR(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.oa.add(r),$u(t))}function $u(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new G(Ne.fromString(e)),r=t.fa.next();t.aa.set(r,new lR(n)),t.ua=t.ua.insert(n,r),Ey(t.remoteStore,new zn(tr(Au(n.path)),r,2,Tu.A))}}async function Ei(t,e,n){const r=ie(t),s=[],i=[],o=[];r.ia.isEmpty()||(r.ia.forEach((a,c)=>{o.push(r._a(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=xu.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.sa.zo(s),await async function(a,c){const l=ie(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.Hs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.Js,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!vi(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.ui.get(h),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);l.ui=l.ui.insert(h,v)}}}(r.localStore,i))}async function _R(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await yy(n.localStore,e);n.currentUser=e,function(s,i){s.la.forEach(o=>{o.forEach(a=>{a.reject(new Q(N.CANCELLED,i))})}),s.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ei(n,r.di)}}function wR(t,e){const n=ie(t),r=n.aa.get(e);if(r&&r.na)return Se().add(r.key);{let s=Se();const i=n.ra.get(e);if(!i)return s;for(const o of i){const a=n.ia.get(o);s=s.unionWith(a.view.ju)}return s}}function ER(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gR.bind(null,e),e.sa.zo=sR.bind(null,e.eventManager),e.sa.wa=iR.bind(null,e.eventManager),e}function bR(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yR.bind(null,e),e}class TR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=ya(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return _k(this.persistence,new yk,e.initialUser,this.M)}ya(e){return new Ok(Pu.Yi,this.M)}ga(e){return new Dk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class IR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_d(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_R.bind(null,this.syncEngine),await Zk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tR}createDatastore(e){const n=ya(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Fk(s));var s;return function(i,o,a,c){return new Vk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>_d(this.syncEngine,a,0),o=md.vt()?new md:new Mk,new Hk(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new uR(r,s,i,o,a,c);return l&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ie(e);H("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await wi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */class SR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class CR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=Wm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function AR(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function kR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RR(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>yd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>yd(e.remoteStore,i)),t.onlineComponents=e}async function RR(t){return t.offlineComponents||(H("FirestoreClient","Using default OfflineComponentProvider"),await AR(t,new TR)),t.offlineComponents}async function Dy(t){return t.onlineComponents||(H("FirestoreClient","Using default OnlineComponentProvider"),await kR(t,new IR)),t.onlineComponents}function NR(t){return Dy(t).then(e=>e.syncEngine)}async function xR(t){const e=await Dy(t),n=e.eventManager;return n.onListen=hR.bind(null,e.syncEngine),n.onUnlisten=dR.bind(null,e.syncEngine),n}function OR(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new SR({next:h=>{i.enqueueAndForget(()=>rR(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new Q(N.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new Q(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new oR(Au(o.path),l,{includeMetadataChanges:!0,ku:!0});return nR(s,u)}(await xR(t),t.asyncQueue,e,n,r)),r.promise}const Ed=new Map;/**
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
 */function PR(t,e,n){if(!n)throw new Q(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DR(t,e,n,r){if(e===!0&&r===!0)throw new Q(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bd(t){if(!G.isDocumentKey(t))throw new Q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function No(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vu(t);throw new Q(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Td{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,DR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class My{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Td({}),this._settingsFrozen=!1,e instanceof Lr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new Q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(s.options.projectId)}(e))}get app(){if(!this._app)throw new Q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Td(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GC;switch(n.type){case"gapi":const r=n.client;return Te(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new QC(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new Q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ed.get(e);n&&(H("ComponentProvider","Removing Datastore"),Ed.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class ju{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ju(this.firestore,e,this._query)}}class Qs extends ju{constructor(e,n,r){super(e,n,Au(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new G(e))}withConverter(e){return new Qs(this.firestore,e,this._path)}}function e1(t,e,...n){if(t=en(t),arguments.length===1&&(e=Wm.R()),PR("doc","path",e),t instanceof My){const r=Ne.fromString(e,...n);return bd(r),new St(t,null,new G(r))}{if(!(t instanceof St||t instanceof Qs))throw new Q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return bd(r),new St(t.firestore,t instanceof Qs?t.converter:null,new G(r))}}/**
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
 */class MR{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new _y(this,"async_queue_retry"),this.Qa=()=>{const n=nc();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=nc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new Tn;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!vi(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(r=>{this.Ua=r,this.qa=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.qa=!1,r))));return this.Fa=n,n}enqueueAfterDelay(e,n,r){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const s=Uu.createAndSchedule(this,e,n,r,i=>this.Ha(i));return this.La.push(s),s}ja(){this.Ua&&se()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class Hu extends My{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new MR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Fy(this),this._firestoreClient.terminate()}}function Ly(t=gg()){return $l(t,"firestore").getImmediate()}function Uy(t){return t._firestoreClient||Fy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fy(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new rA(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new CR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class qu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $r(Qe.fromBase64String(e))}catch(n){throw new Q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $r(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ku{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const LR=/^__.*__$/;class UR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ga(e,this.data,n,this.fieldTransforms)}}function $y(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class zu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.rc(e),s}oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.tc(),s}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return xo(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if($y(this.ec)&&LR.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class FR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||ya(e)}lc(e,n,r,s=!1){return new zu({ec:e,methodName:n,hc:r,path:ct.emptyPath(),ic:!1,cc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function BR(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new FR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $R(t,e,n,r,s,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,s);qy("Data must be an object, but it was:",o,r);const a=jy(r,o);let c,l;if(i.merge)c=new Wc(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=VR(e,h,n);if(!o.contains(f))throw new Q(N.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);HR(u,f)||u.push(f)}c=new Wc(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new UR(new Nt(a),c,l)}function Vy(t,e){if(Hy(t=en(t)))return qy("Unsupported field value:",e,t),jy(t,e);if(t instanceof By)return function(n,r){if(!$y(r.ec))throw r.ac(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ac(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Vy(o,r.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=en(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return AA(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=tt.fromDate(n);return{timestampValue:ko(r.M,s)}}if(n instanceof tt){const s=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ko(r.M,s)}}if(n instanceof Ku)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $r)return{bytesValue:fy(r.M,n._byteString)};if(n instanceof St){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ru(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ac(`Unsupported field value: ${Vu(n)}`)}(t,e)}function jy(t,e){const n={};return Gm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,(r,s)=>{const i=Vy(s,e.sc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Hy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Ku||t instanceof $r||t instanceof St||t instanceof By)}function qy(t,e,n){if(!Hy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Vu(n);throw r==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function VR(t,e,n){if((e=en(e))instanceof qu)return e._internalPath;if(typeof e=="string")return Ky(t,e);throw xo("Field path arguments must be of type string or ",t,!1,void 0,n)}const jR=new RegExp("[~\\*/\\[\\]]");function Ky(t,e,n){if(e.search(jR)>=0)throw xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qu(...e.split("."))._internalPath}catch{throw xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Q(N.INVALID_ARGUMENT,a+t+c)}function HR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class zy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qR extends zy{data(){return super.data()}}function Wy(t,e){return typeof e=="string"?Ky(t,e):e instanceof qu?e._internalPath:e._delegate._internalPath}/**
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
 */class KR{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gy extends zy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zR extends Gy{data(e={}){return super.data(e)}}/**
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
 */class WR{convertValue(e,n="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){const r={};return Yr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ku(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ym(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const n=An(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Te(my(r));const s=new Lr(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Cn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function GR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */function t1(t){t=No(t,St);const e=No(t.firestore,Hu);return OR(Uy(e),t._key).then(n=>QR(e,t,n))}class XR extends WR{constructor(e){super(),this.firestore=e}convertBytes(e){return new $r(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function n1(t,e,n){t=No(t,St);const r=No(t.firestore,Hu),s=GR(t.converter,e,n);return YR(r,[$R(BR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Cr.none())])}function YR(t,e){return function(n,r){const s=new Tn;return n.asyncQueue.enqueueAndForget(async()=>pR(await NR(n),r,s)),s.promise}(Uy(t),e)}function QR(t,e,n){const r=n.docs.get(e._key),s=new XR(t);return new Gy(t,s,e._key,r,new KR(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Xr=n})(ri),xr(new Wn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Hu(s,new XC(n.getProvider("auth-internal")),new ZC(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),bn(Gf,"3.4.9",t),bn(Gf,"3.4.9","esm2017")})();const JR={apiKey:"AIzaSyD9EOSlnmGS-kseGdB2F9nOWG9UIlSBP_E",authDomain:"cookbook-769df.firebaseapp.com",projectId:"cookbook-769df",storageBucket:"cookbook-769df.appspot.com",messagingSenderId:"644720982505",appId:"1:644720982505:web:7ddfea4d742c26c2c23378"},ZR=Vl(JR);Ql();new Rt;Ly(ZR);const Fi=void 0,Bi=void 0;const eN={apiKey:"AIzaSyD9EOSlnmGS-kseGdB2F9nOWG9UIlSBP_E",authDomain:"cookbook-769df.firebaseapp.com",projectId:"cookbook-769df",storageBucket:"cookbook-769df.appspot.com",messagingSenderId:"644720982505",appId:"1:644720982505:web:7ddfea4d742c26c2c23378"},tN=Vl(eN);Ql();new Rt;Ly(tN);const $i=void 0;var nN=[{name:"account",path:"/account",file:"C:/Users/izacp/Desktop/dev/cookbook/pages/account.vue",children:[],meta:xi,alias:(xi==null?void 0:xi.alias)||[],component:()=>Ni(()=>import("./account-0700ef85.mjs"),[])},{name:"index",path:"/",file:"C:/Users/izacp/Desktop/dev/cookbook/pages/index.vue",children:[],meta:Fi,alias:(Fi==null?void 0:Fi.alias)||[],component:()=>Ni(()=>import("./index-66a9e6d0.mjs"),[])},{name:"mycookbook",path:"/mycookbook",file:"C:/Users/izacp/Desktop/dev/cookbook/pages/mycookbook.vue",children:[],meta:Bi,alias:(Bi==null?void 0:Bi.alias)||[],component:()=>Ni(()=>import("./mycookbook-4b93a71e.mjs"),[])},{name:"newrecipe",path:"/newrecipe",file:"C:/Users/izacp/Desktop/dev/cookbook/pages/newrecipe.vue",children:[],meta:$i,alias:($i==null?void 0:$i.alias)||[],component:()=>Ni(()=>import("./newrecipe-e6c6e52e.mjs"),[])}];const rN={};var sN=Ae({},rN);const iN=[],rc={};function oN(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){const a=s.includes(t.slice(i))?t.slice(i).length:1;let c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ph(c,"")}return Ph(n,t)+r+s}var aN=Dl(async t=>{t.vueApp.component("NuxtPage",La),t.vueApp.component("NuxtNestedPage",La),t.vueApp.component("NuxtChild",La);const e=qp().app.baseURL,n=r0(e),r=oN(e,window.location),s=$0(vt(Ae({},sN),{history:n,routes:nN}));t.vueApp.use(s);const i=lc(s.currentRoute.value);s.afterEach((h,f)=>{i.value=f}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>i.value});const o={};for(const h in s.currentRoute.value)o[h]=ze(()=>s.currentRoute.value[h]);const a=lc(s.resolve(r)),c=()=>{a.value=s.currentRoute.value};t.hook("page:finish",c),s.afterEach((h,f)=>{var p,v,b,m;((v=(p=h.matched[0])==null?void 0:p.components)==null?void 0:v.default)===((m=(b=f.matched[0])==null?void 0:b.components)==null?void 0:m.default)&&c()});const l={};for(const h in a.value)l[h]=ze(()=>a.value[h]);t._route=Ut(o),t._activeRoute=Ut(l),t._middleware=t._middleware||{global:[],named:{}};const u=Ls();s.afterEach(async h=>{!t.isHydrating&&u.value&&await Un(t,H0),h.matched.length===0&&Un(t,Hi,[q0({statusCode:404,statusMessage:`Page not found: ${h.fullPath}`})])});try{await s.isReady()}catch(h){Un(t,Hi,[h])}return s.beforeEach(async(h,f)=>{var v;h.meta=Ut(h.meta),t._processingMiddleware=!0;const p=new Set([...iN,...t._middleware.global]);for(const b of h.matched){const m=b.meta.middleware;if(!!m)if(Array.isArray(m))for(const _ of m)p.add(_);else p.add(m)}for(const b of p){const m=typeof b=="string"?t._middleware.named[b]||await((v=rc[b])==null?void 0:v.call(rc).then(y=>y.default||y)):b,_=await Un(t,m,[h,f]);if(_||_===!1)return _}}),s.afterEach(async h=>{delete t._processingMiddleware}),t.hooks.hookOnce("app:created",async()=>{try{await s.replace(vt(Ae({},s.resolve(r)),{force:!0}))}catch(h){Un(t,Hi,[h])}}),{provide:{router:s}}}),cN=[Y0,hb,Ib,aN];const lN={props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"404"},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t,{expose:e}){e();const n=t;Zt({title:`${n.statusCode} - ${n.statusMessage} | ${n.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]});const r={props:n,useHead:Zt};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},uN=t=>(El("data-v-011aae6d"),t=t(),bl(),t),hN={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},fN=uN(()=>Ue("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),dN={class:"max-w-520px text-center z-20"},pN=["textContent"],gN=["textContent"],mN={class:"w-full flex items-center justify-center"};function yN(t,e,n,r,s,i){const o=X0;return Ft(),Ho("div",hN,[fN,Ue("div",dN,[Ue("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:jn(n.statusCode)},null,8,pN),Ue("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:jn(n.description)},null,8,gN),Ue("div",mN,[$e(o,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:Tl(()=>[Nl(jn(n.backHome),1)]),_:1})])])])}var Id=Kr(lN,[["render",yN],["__scopeId","data-v-011aae6d"]]);const vN={props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"500"},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"This page is temporarily unavailable."}},setup(t,{expose:e}){e();const n=t;Zt({title:`${n.statusCode} - ${n.statusMessage} | ${n.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]});const r={props:n,useHead:Zt};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},_N=t=>(El("data-v-6aee6495"),t=t(),bl(),t),wN={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},EN=_N(()=>Ue("div",{class:"fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"},null,-1)),bN={class:"max-w-520px text-center"},TN=["textContent"],IN=["textContent"];function SN(t,e,n,r,s,i){return Ft(),Ho("div",wN,[EN,Ue("div",bN,[Ue("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:jn(n.statusCode)},null,8,TN),Ue("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:jn(n.description)},null,8,IN)])])}var Sd=Kr(vN,[["render",SN],["__scopeId","data-v-6aee6495"]]);const CN={props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"500"},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."},stack:{type:String,default:""}},setup(t,{expose:e}){e();const n=t;Zt({title:`${n.statusCode} - ${n.statusMessage} | ${n.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}'}]});const r={props:n,useHead:Zt};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},AN=t=>(El("data-v-693cabb2"),t=t(),bl(),t),kN={class:"font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"},RN=AN(()=>Ue("div",{class:"fixed left-0 right-0 spotlight"},null,-1)),NN=["textContent"],xN=["textContent"],ON={class:"bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"},PN=["innerHTML"];function DN(t,e,n,r,s,i){return Ft(),Ho("div",kN,[RN,Ue("h1",{class:"text-6xl sm:text-8xl font-medium mb-6",textContent:jn(n.statusCode)},null,8,NN),Ue("p",{class:"text-xl sm:text-2xl font-light mb-8 leading-tight",textContent:jn(n.description)},null,8,xN),Ue("div",ON,[Ue("pre",{class:"text-xl font-light leading-tight z-10 p-8",innerHTML:n.stack},null,8,PN)])])}var MN=Kr(CN,[["render",DN],["__scopeId","data-v-693cabb2"]]);const LN={props:{error:Object},setup(t,{expose:e}){var f;e();const n=t,r=n.error,s=(r.stack||"").split(`
`).splice(1).map(p=>({text:p.replace("webpack:/","").replace(".vue",".js").trim(),internal:p.includes("node_modules")&&!p.includes(".cache")||p.includes("internal")||p.includes("new Promise")})).map(p=>`<span class="stack${p.internal?" internal":""}">${p.text}</span>`).join(`
`),i=String(r.statusCode||500),o=i==="404",a=(f=r.statusMessage)!=null?f:o?"Page Not Found":"Internal Server Error",c=r.message||r.toString(),h={props:n,error:r,stacktrace:s,statusCode:i,is404:o,statusMessage:a,description:c,stack:void 0,ErrorTemplate:o?Id:Sd,Error404:Id,Error500:Sd,ErrorDev:MN};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}};function UN(t,e,n,r,s,i){return Ft(),gs(r.ErrorTemplate,iv(Ap({statusCode:r.statusCode,statusMessage:r.statusMessage,description:r.description,stack:r.stack})),null,16)}var FN=Kr(LN,[["render",UN]]);const BN={setup(t,{expose:e}){e();const n=Ct(),r=()=>n.callHook("app:suspense:resolve"),s=n.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup"),i=Ls();dc((a,c,l)=>{n.hooks.callHook("vue:error",a,c,l).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u))});const o={nuxtApp:n,onResolve:r,results:s,error:i,onErrorCaptured:dc,callWithNuxt:Un,throwError:Hi,useError:Ls,useNuxtApp:Ct,ErrorComponent:FN};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function $N(t,e,n,r,s,i){const o=Rl("App");return Ft(),gs(sp,{onResolve:r.onResolve},{default:Tl(()=>[r.error?(Ft(),gs(r.ErrorComponent,{key:0,error:r.error},null,8,["error"])):(Ft(),gs(o,{key:1}))]),_:1})}var Cd=Kr(BN,[["render",$N]]);const VN={},jN=Ue("header",null,[Ue("h1",null,"Cook Book")],-1);function HN(t,e){const n=Rl("NuxtPage");return Ft(),Ho("div",null,[jN,Ue("main",null,[$e(n)])])}var qN=Kr(VN,[["render",HN]]);globalThis.$fetch||(globalThis.$fetch=pE.create({baseURL:mE()}));let Ad;const KN=UE(cN);Ad=async function(){var s;const n=Boolean((s=window.__NUXT__)==null?void 0:s.serverRendered)?Cw(Cd):Sw(Cd);n.component("App",qN);const r=DE({vueApp:n});r.hooks.hookOnce("app:suspense:resolve",()=>{r.isHydrating=!1});try{await LE(r,KN)}catch(i){await r.callHook("app:error",i),r.payload.error=r.payload.error||i}try{await r.hooks.callHook("app:created",n),await r.hooks.callHook("app:beforeMount",n),n.mount("#__nuxt"),await r.hooks.callHook("app:mounted",n),await _l()}catch(i){await r.callHook("app:error",i),r.payload.error=r.payload.error||i}},Ad().catch(t=>{console.error("Error while mounting app:",t)});export{wt as F,Rt as G,e1 as I,Ly as S,Kr as _,Ue as a,JN as b,Ho as c,$e as d,t1 as e,X0 as f,Ql as g,n1 as h,Vl as i,WN as j,GN as k,Nl as l,QN as n,Ft as o,XN as r,ZN as s,jn as t,YN as v,Tl as w};
