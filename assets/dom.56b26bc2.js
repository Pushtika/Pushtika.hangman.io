import{a as g,c as z,h as u,g as B,D as _}from"./index.82598c16.js";const M={xs:18,sm:24,md:32,lg:38,xl:46},j={size:String};function k(t,n=M){return g(()=>t.size!==void 0?{fontSize:t.size in n?`${n[t.size]}px`:t.size}:null)}function F(t,n){return t!==void 0&&t()||n}function P(t,n){if(t!==void 0){const s=t();if(s!=null)return s.slice()}return n}function c(t,n){return t!==void 0?n.concat(t()):n}const m="0 0 24 24",h=t=>t,d=t=>`ionicons ${t}`,b={"mdi-":t=>`mdi ${t}`,"icon-":h,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":d,"ion-ios":d,"ion-logo":d,"iconfont ":h,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},x={o_:"-outlined",r_:"-round",s_:"-sharp"},S={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},q=new RegExp("^("+Object.keys(b).join("|")+")"),I=new RegExp("^("+Object.keys(x).join("|")+")"),y=new RegExp("^("+Object.keys(S).join("|")+")"),O=/^[Mm]\s?[-+]?\.?\d/,Q=/^img:/,C=/^svguse:/,D=/^ion-/,U=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var V=z({name:"QIcon",props:{...j,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:n}){const{proxy:{$q:s}}=B(),a=k(t),E=g(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),r=g(()=>{let o,e=t.name;if(e==="none"||!e)return{none:!0};if(s.iconMapFn!==null){const i=s.iconMapFn(e);if(i!==void 0)if(i.icon!==void 0){if(e=i.icon,e==="none"||!e)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(O.test(e)===!0){const[i,f=m]=e.split("|");return{svg:!0,viewBox:f,nodes:i.split("&&").map($=>{const[R,p,w]=$.split("@@");return u("path",{style:p,d:R,transform:w})})}}if(Q.test(e)===!0)return{img:!0,src:e.substring(4)};if(C.test(e)===!0){const[i,f=m]=e.split("|");return{svguse:!0,src:i.substring(7),viewBox:f}}let l=" ";const v=e.match(q);if(v!==null)o=b[v[1]](e);else if(U.test(e)===!0)o=e;else if(D.test(e)===!0)o=`ionicons ion-${s.platform.is.ios===!0?"ios":"md"}${e.substring(3)}`;else if(y.test(e)===!0){o="notranslate material-symbols";const i=e.match(y);i!==null&&(e=e.substring(6),o+=S[i[1]]),l=e}else{o="notranslate material-icons";const i=e.match(I);i!==null&&(e=e.substring(2),o+=x[i[1]]),l=e}return{cls:o,content:l}});return()=>{const o={class:E.value,style:a.value,"aria-hidden":"true",role:"presentation"};return r.value.none===!0?u(t.tag,o,F(n.default)):r.value.img===!0?u(t.tag,o,c(n.default,[u("img",{src:r.value.src})])):r.value.svg===!0?u(t.tag,o,c(n.default,[u("svg",{viewBox:r.value.viewBox||"0 0 24 24"},r.value.nodes)])):r.value.svguse===!0?u(t.tag,o,c(n.default,[u("svg",{viewBox:r.value.viewBox},[u("use",{"xlink:href":r.value.src})])])):(r.value.cls!==void 0&&(o.class+=" "+r.value.cls),u(t.tag,o,c(n.default,[r.value.content])))}}});function A(t,n){const s=t.style;for(const a in n)s[a]=n[a]}function G(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const n=_(t);if(n)return n.$el||n}function J(t,n){if(t==null||t.contains(n)===!0)return!0;for(let s=t.nextElementSibling;s!==null;s=s.nextElementSibling)if(s.contains(n))return!0;return!1}export{V as Q,c as a,j as b,P as c,A as d,J as e,M as f,G as g,F as h,k as u};
