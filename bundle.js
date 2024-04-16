(()=>{"use strict";var e,n,t,r,o,a,i,s,c,l,d,u,p,f,g={365:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"\nbody {\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100vh;\n  margin: 0;\n  overflow: hidden;\n}\n\n.container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.draggable {\n  width: 600px;\n  padding: 1rem;\n  background-color: white;\n  border-top: 1px solid rgb(30, 30, 30);\n  border-bottom: 1px solid black;\n  cursor: move;\n  user-select: none;\n}\n\n.draggable:first-of-type {\n  border-top: 2px solid rgb(30, 30, 30);\n}\n\n.draggable:last-of-type {\n  border-bottom: 2px solid rgb(30, 30, 30);\n}\n\n.draggable:hover {\n  background-color: #f9f9f9;\n}\n\n.draggable .number {\n  margin-right: 1rem;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n\n.dummy-draggable {\n  position: absolute;\n}",""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var g=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},m={};function v(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return g[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),v.nc=void 0,e=v(72),n=v.n(e),t=v(825),r=v.n(t),o=v(659),a=v.n(o),i=v(56),s=v.n(i),c=v(540),l=v.n(c),d=v(113),u=v.n(d),p=v(365),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(p.A,f),p.A&&p.A.locals&&p.A.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementsByTagName("body")[0],n=document.getElementById("container"),t=document.getElementById("dummy-draggable"),r=["Авокадо","Апельсин","Арбуз","Банан","Виноград","Грейпфрут"],o=function(){const e=[];return[...r].forEach(((t,r)=>{const o=document.createElement("div");o.classList.add("draggable"),o.innerHTML=`\n                <span class="number">${r+1}</span>\n                <span class="fruit-name">${t}</span>\n            `,e.push(o),n.appendChild(o)})),e}();let a=0,i=0,s=null;function c(e){e.preventDefault(),Object.assign(t.style,{top:e.clientY-i+"px",left:e.clientX-a+"px"});const r=function(e,n){return[...e.querySelectorAll(".draggable:not(.dragging)")].reduce(((e,t)=>{const r=t.getBoundingClientRect(),o=n-r.top-r.height/2;return o<0&&o>e.offset?{offset:o,element:t}:e}),{offset:Number.NEGATIVE_INFINITY}).element}(n,e.clientY);null!=s&&(null==r?n.appendChild(s):n.insertBefore(s,r))}!function(r){r.forEach((n=>{n.addEventListener("mousedown",(r=>{s=n,function(e,n){const r=e.cloneNode(!0),o=e.getBoundingClientRect();a=n.clientX-o.left,i=n.clientY-o.top,t.appendChild(r),Object.assign(t.style,{display:"block",top:n.clientY-i+"px",left:n.clientX-a+"px",width:`${o.width}px`,height:`${o.height}px`})}(n,r),n.classList.add("dragging"),e.addEventListener("mousemove",c)}))})),e.addEventListener("mouseup",(()=>{s.classList.remove("dragging"),s=null,e.removeEventListener("mousemove",c),t.style.display="none",t.innerHTML="",[...n.querySelectorAll(".draggable")].forEach(((e,n)=>{e.querySelector(".number").textContent=n+1}))}))}(o)}))})();