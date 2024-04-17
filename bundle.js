(()=>{"use strict";var e,n,t,r,o,a,i,s,c,l,u,d,p,f,g={365:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"\nbody {\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100vh;\n  margin: 0;\n  overflow: hidden;\n}\n\n.container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.draggable {\n  width: 600px;\n  max-width: 60vw;\n  padding: 1rem;\n  background-color: white;\n  border-top: 1px solid rgb(30, 30, 30);\n  border-bottom: 1px solid black;\n  cursor: move;\n  user-select: none;\n}\n\n.draggable:first-of-type {\n  border-top: 2px solid rgb(30, 30, 30);\n}\n\n.draggable:last-of-type {\n  border-bottom: 2px solid rgb(30, 30, 30);\n}\n\n.draggable:hover {\n  background-color: #f9f9f9;\n}\n\n.draggable .number {\n  margin-right: 1rem;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n\n.dummy-draggable {\n  position: absolute;\n}",""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var g=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},m={};function v(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return g[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),v.nc=void 0,e=v(72),n=v.n(e),t=v(825),r=v.n(t),o=v(659),a=v.n(o),i=v(56),s=v.n(i),c=v(540),l=v.n(c),u=v(113),d=v.n(u),p=v(365),(f={}).styleTagTransform=d(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(p.A,f),p.A&&p.A.locals&&p.A.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementsByTagName("body")[0],n=document.getElementById("container"),t=document.getElementById("dummy-draggable"),r="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,o=r?"touchstart":"mousedown",a=r?"touchend":"mouseup",i=r?"touchmove":"mousemove",s=["Авокадо","Апельсин","Арбуз","Банан","Виноград","Грейпфрут"],c=function(){const e=[];return[...s].forEach(((t,r)=>{const o=document.createElement("div");o.classList.add("draggable"),o.innerHTML=`\n                <span class="number">${r+1}</span>\n                <span class="fruit-name">${t}</span>\n            `,e.push(o),n.appendChild(o)})),e}();let l=0,u=0,d=null;function p(e){const{x:r,y:o}=f(e);Object.assign(t.style,{top:o-u+"px",left:r-l+"px"});const a=function(e,n){return[...e.querySelectorAll(".draggable:not(.dragging)")].reduce(((e,t)=>{const r=t.getBoundingClientRect(),o=n-r.top-r.height/2;return o<0&&o>e.offset?{offset:o,element:t}:e}),{offset:Number.NEGATIVE_INFINITY}).element}(n,o);null!=d&&(null==a?n.appendChild(d):n.insertBefore(d,a))}function f(e){let n=0,t=0;return r?(n=e.touches[0].clientX,t=e.touches[0].clientY):(n=e.clientX,t=e.clientY),{x:n,y:t}}!function(r){r.forEach((n=>{n.addEventListener(o,(r=>{r.preventDefault(),d=n,function(e,n){const r=e.cloneNode(!0),o=e.getBoundingClientRect(),{x:a,y:i}=f(n);l=a-o.left,u=i-o.top,t.appendChild(r),Object.assign(t.style,{display:"block",top:i-u+"px",left:a-l+"px",width:`${o.width}px`,height:`${o.height}px`})}(n,r),n.classList.add("dragging"),e.addEventListener(i,p)}))})),e.addEventListener(a,(()=>{null!=d&&(d.classList.remove("dragging"),d=null,e.removeEventListener(i,p),t.style.display="none",t.innerHTML="",[...n.querySelectorAll(".draggable")].forEach(((e,n)=>{e.querySelector(".number").textContent=n+1})))}))}(c)}))})();