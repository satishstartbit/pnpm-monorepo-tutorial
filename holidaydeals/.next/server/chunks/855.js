"use strict";exports.id=855,exports.ids=[855],exports.modules={7318:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return n},getImageProps:function(){return l}});let r=a(91840),i=a(81988),s=a(57644),o=r._(a(64450));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let n=s.Image},49691:(e,t,a)=>{a.d(t,{l$:()=>ed,Ay:()=>ec});var r,i=a(32647);let s={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let a="",r="",i="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+o+";":r+="f"==s[1]?c(o,s):s+"{"+c(o,"k"==s[1]?"":t)+"}":"object"==typeof o?r+=c(o,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=c.p?c.p(s,o):s+":"+o+";")}return a+(t&&i?t+"{"+i+"}":i)+r},p={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e},m=(e,t,a,r,i)=>{let s=u(e),o=p[s]||(p[s]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(s));if(!p[o]){let t=s!==e?e:(e=>{let t,a,r=[{}];for(;t=l.exec(e.replace(n,""));)t[4]?r.shift():t[3]?(a=t[3].replace(d," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);p[o]=c(i?{["@keyframes "+o]:t}:t,a?"":"."+o)}let m=a&&p.g?p.g:null;return a&&(p.g=p[o]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(p[o],t,r,m),o},f=(e,t,a)=>e.reduce((e,r,i)=>{let s=t[i];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"");function g(e){let t=this||{},a=e.call?e(t.p):e;return m(a.unshift?a.raw?f(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,o(t.target),t.g,t.o,t.k)}g.bind({g:1});let h,x,y,b=g.bind({k:1});function v(e,t){let a=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),n=l.className||i.className;a.p=Object.assign({theme:x&&x()},l),a.o=/ *go\d+/.test(n),l.className=g.apply(a,r)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),y&&d[0]&&y(l),h(d,l)}return t?t(i):i}}var w=e=>"function"==typeof e,k=(e,t)=>w(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),N=(()=>{let e;return()=>e})(),E=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return E(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},$=[],O={toasts:[],pausedAt:void 0},z=e=>{O=E(O,e),$.forEach(e=>{e(O)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},A=(e={})=>{let[t,a]=(0,i.useState)(O),r=(0,i.useRef)(O);(0,i.useEffect)(()=>(r.current!==O&&a(O),$.push(a),()=>{let e=$.indexOf(a);e>-1&&$.splice(e,1)}),[]);let s=t.toasts.map(t=>{var a,r,i;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...t,toasts:s}},C=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||j()}),P=e=>(t,a)=>{let r=C(t,e,a);return z({type:2,toast:r}),r.id},I=(e,t)=>P("blank")(e,t);I.error=P("error"),I.success=P("success"),I.loading=P("loading"),I.custom=P("custom"),I.dismiss=e=>{z({type:3,toastId:e})},I.remove=e=>z({type:4,toastId:e}),I.promise=(e,t,a)=>{let r=I.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?k(t.success,e):void 0;return i?I.success(i,{id:r,...a,...null==a?void 0:a.success}):I.dismiss(r),e}).catch(e=>{let i=t.error?k(t.error,e):void 0;i?I.error(i,{id:r,...a,...null==a?void 0:a.error}):I.dismiss(r)}),e};var _=(e,t)=>{z({type:1,toast:{id:e,height:t}})},S=()=>{z({type:5,time:Date.now()})},H=new Map,M=1e3,T=(e,t=M)=>{if(H.has(e))return;let a=setTimeout(()=>{H.delete(e),z({type:4,toastId:e})},t);H.set(e,a)},F=e=>{let{toasts:t,pausedAt:a}=A(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&I.dismiss(t.id);return}return setTimeout(()=>I.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&z({type:6,time:Date.now()})},[a]),s=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:s}=a||{},o=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return(0,i.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)T(e.id,e.removeDelay);else{let t=H.get(e.id);t&&(clearTimeout(t),H.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:_,startPause:S,endPause:r,calculateOffset:s}}},L=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,V=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Z=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,J=v("div")`
  position: absolute;
`,K=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(W,null,t):t:"blank"===a?null:i.createElement(K,null,i.createElement(G,{...r}),"loading"!==a&&i.createElement(J,null,"error"===a?i.createElement(U,{...r}):i.createElement(Z,{...r})))},ee=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,et=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ea=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,er=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=(e,t)=>{let a=e.includes("top")?1:-1,[r,i]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ee(a),et(a)];return{animation:t?`${b(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},es=i.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?ei(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(X,{toast:e}),l=i.createElement(er,{...e.ariaProps},k(e.message,e));return i.createElement(ea,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:l}):i.createElement(i.Fragment,null,o,l))});r=i.createElement,c.p=void 0,h=r,x=void 0,y=void 0;var eo=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let o=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:o,className:t,style:a},s)},el=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},en=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:o,containerClassName:l})=>{let{toasts:n,handlers:d}=F(a);return i.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(a=>{let o=a.position||t,l=el(o,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(eo,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?en:"",style:l},"custom"===a.type?k(a.message,a):s?s(a):i.createElement(es,{toast:a,position:o}))}))},ec=I},68931:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(83820),i=a(45775),s=a.n(i);let o=({pageName:e,pageDescription:t})=>(0,r.jsxs)("div",{className:"dark:bg-darkmode relative z-10 overflow-hidden pb-[60px] pt-[120px] md:pt-[130px] lg:pt-[160px]",children:[(0,r.jsx)("div",{className:"from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-linear-to-r"}),(0,r.jsx)("div",{className:"container mx-auto",children:(0,r.jsx)("div",{className:"-mx-4 flex flex-wrap items-center",children:(0,r.jsx)("div",{className:"w-full px-4",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h1",{className:"text-black mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2] dark:text-white",children:e}),(0,r.jsx)("p",{className:"text-black dark:text-black-6 mb-5 text-base",children:t}),(0,r.jsxs)("ul",{className:"flex items-center justify-center gap-[10px]",children:[(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/",className:"text-black flex items-center gap-[10px] text-base font-medium dark:text-white dark:text-opacity-50",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{className:"text-body-color flex items-center gap-[10px] text-base font-medium",children:[(0,r.jsx)("span",{className:"text-body-color dark:text-white dark:text-opacity-50",children:" / "}),e]})})]})]})})})})]})},72149:(e,t,a)=>{a.d(t,{default:()=>i.a});var r=a(7318),i=a.n(r)},91203:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(65190),i=a(72149),s=a(12093),o=a.n(s);let l=()=>(0,r.jsxs)(o(),{href:"/",children:[(0,r.jsx)(i.default,{src:"/images/logo/logo.svg",alt:"logo",width:160,height:50,style:{width:"auto",height:"auto"},quality:100,className:"dark:hidden"}),(0,r.jsx)(i.default,{src:"/images/logo/logo-white.svg",alt:"logo",width:160,height:50,style:{width:"auto",height:"auto"},quality:100,className:"dark:block hidden"})]})}};