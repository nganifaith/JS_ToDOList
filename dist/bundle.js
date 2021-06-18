(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Muli&display=swap);"]),o.push([n.id,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),o.push([n.id,"* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Muli', sans-serif;\n  background: linear-gradient(45deg, #4782b4, transparent);\n}\n\n.wrapper {\n  max-width: 300px;\n  margin: 30px auto;\n  overflow: auto;\n  height: calc(100vh - 60px);\n  background: #4782b4;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.add {\n  text-align: right;\n}\n\n.hidden {\n  display: none;\n}\n\n.main {\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 20px 40px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.main h1 {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.main a {\n  text-decoration: none;\n  color: lightblue;\n}\n\n.close-button {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  cursor: pointer;\n  color: #fff;\n}\n\n/* Add styles to Add Project form */\n\n.add-project {\n  position: relative;\n  margin: 20px 0 40px;\n}\n\n.add-project .project-field {\n  background-color: transparent;\n  border: 0;\n  border-bottom: 2px solid #fff;\n  display: block;\n  padding: 15px 0;\n  width: 100%;\n  font-size: 18px;\n  color: #fff;\n}\n\n.add-project .project-field:focus,\n.add-project .project-field:valid {\n  outline: 0;\n  border-bottom-color: lightblue;\n}\n\n.add-project label {\n  position: absolute;\n  top: 15px;\n  left: 0;\n}\n\n.add-project span {\n  display: inline-block;\n  font-size: 18px;\n  min-width: 5px;\n  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.555);\n}\n\n.add-project .project-field:focus + label span,\n.add-project .project-field:valid + label span {\n  color: lightblue;\n  transform: translateY(-30px);\n}\n\n.save-project {\n  cursor: pointer;\n  display: inline-block;\n  background-color: lightblue;\n  padding: 15px;\n  font-family: inherit;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 0;\n  width: 100%;\n}\n\n.save-project:focus {\n  outline: 0;\n}\n\n.save-project:active {\n  transform: scale(0.98);\n}\n\n.low {\n  background-color: #12caf0;\n}\n\n.medium {\n  background-color: #ffc007;\n}\n\n.high {\n  background-color: #d83746;\n}\n\n.priority {\n  font-size: 16px;\n  color: #fff;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-todos i {\n  cursor: pointer;\n}\n",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var s=n[o],c=e.base?s[0]+e.base:s[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:h(p,e),references:1}),r.push(l)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(n,e){var t,r,o;if(e.singleton){var i=m++;t=f||(f=c(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var c=s(n,e),d=0;d<t.length;d++){var l=a(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(426);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=function n(e,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=e,this.summary=t,this.todos=[]},i=function n(e,t,r,o,i){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.title=e,this.dueDate=t,this.description=r,this.notes=o,this.priority=i};function a(n){localStorage.setItem("projects",JSON.stringify(n))}var s=function(){var n=localStorage.getItem("projects");return n&&JSON.parse(n)}()||[new o("Code Review","Microverse code review process")],c=null,d=null;function l(n){c=n}function u(){return c}function p(n){d=n}document.querySelectorAll(".add-project label").forEach((function(n){n.innerHTML=n.innerText.split("").map((function(n,e){return'<span style="transition-delay:'.concat(50*e,'ms">').concat(n,"\n      </span>")})).join("")}));var f=document.querySelector("form"),m=document.querySelector(".add button"),h=document.querySelector(".project"),v=document.querySelector(".main-section"),y=document.querySelector(".all-todos"),b=document.querySelector(".add-todos form"),g=document.querySelector(".add-todos button"),L=document.querySelector(".add-todos");function x(){y.innerHTML="",u().todos.forEach((function(n,e){var t=document.createElement("div");t.classList.add("card","mb-2"),t.innerHTML='\n  <div class="card-header">'.concat(n.title,'</div>\n    <div class="card-body">\n      <h5 class="card-title">').concat(n.dueDate,'</h5>\n      <p class="card-text">').concat(n.description,'</p>\n      <p class="card-text hidden">').concat(n.notes,'</p>\n      <a href="#" class="read-more"><span class="material-icons">\n      read_more\n      </span></a>\n      <a href="#" class="edit-todo"><span class="material-icons">\n          edit\n          </span>\n      </a>\n      <a href="#" class="delete-todo"><span class="material-icons card-link">\n      delete\n      </span></a>\n    </div>\n    <div class="card-footer ').concat(n.priority,'">\n      <small class="priority">').concat(n.priority,"</small>\n    </div>\n"),y.appendChild(t),t.querySelector(".read-more").addEventListener("click",(function(){t.querySelector("p:nth-child(3)").classList.toggle("hidden")})),t.querySelector(".edit-todo").addEventListener("click",(function(){b.classList.remove("hidden"),g.classList.add("hidden"),y.classList.add("hidden"),p(n),b.title.value=n.title,b.dueDate.value=n.dueDate,b.description.value=n.description,b.notes.value=n.notes,b.priority.value=n.priority})),t.querySelector(".delete-todo").addEventListener("click",(function(){!function(n){c.todos.splice(n,1),a(s)}(e),x()}))}))}function j(){h.classList.remove("hidden"),h.innerHTML="",s.forEach((function(n,e){var t=document.createElement("div");t.classList.add("card","m-2"),t.innerHTML='\n  <div class="card-body">\n    <h5 class="card-title">'.concat(n.name,'</h5>\n    <p class="card-text">').concat(n.summary,'</p>\n    <a href="#" class="add-todo"><span class="material-icons">\n    add_circle\n    </span>\n    </a>\n    <a href="#" class="edit-project"><span class="material-icons">\n    edit\n    </span></a>\n    <a href="#" class="delete-project"><span class="material-icons card-link">\n    delete\n    </span></a>\n  </div>\n'),h.appendChild(t),t.querySelector(".add-todo").addEventListener("click",(function(){v.classList.add("hidden"),function(n){L.classList.remove("hidden"),L.querySelector("h2").innerHTML=n.name,l(n),x()}(n)})),t.querySelector(".edit-project").addEventListener("click",(function(){f.classList.remove("hidden"),m.classList.add("hidden"),h.classList.add("hidden"),l(n),f["project-name"].value=n.name,f.summary.value=n.summary})),t.querySelector(".delete-project").addEventListener("click",(function(){!function(n){s.splice(n,1),a(s)}(e),j()}))}))}document.querySelector(".close-button").addEventListener("click",(function(){f.reset(),l(null),f.classList.add("hidden"),h.classList.remove("hidden"),m.classList.remove("hidden")})),m.addEventListener("click",(function(){f.classList.remove("hidden"),m.classList.add("hidden")})),f.addEventListener("submit",(function(n){n.preventDefault();var e=f["project-name"].value,t=f.summary.value;u()?(function(n){var e=n.name,t=n.summary;c.name=e,c.summary=t,a(s)}({name:e,summary:t}),l(null)):function(n,e){s.push(new o(n,e)),a(s)}(e,t),f.reset(),f.classList.add("hidden"),m.classList.remove("hidden"),j()})),b.querySelector(".close-button").addEventListener("click",(function(){b.reset(),p(null),b.classList.add("hidden"),y.classList.remove("hidden"),g.classList.remove("hidden")})),L.querySelector("i").addEventListener("click",(function(){L.classList.add("hidden"),v.classList.remove("hidden")})),g.addEventListener("click",(function(){b.classList.remove("hidden"),g.classList.add("hidden")})),b.addEventListener("submit",(function(n){n.preventDefault();var e=b.title.value,t=b.dueDate.value,r=b.description.value,o=b.notes.value,l=b.priority.value;d?(function(n){var e=n.title,t=n.dueDate,r=n.description,o=n.notes,i=n.priority;d.title=e,d.dueDate=t,d.description=r,d.notes=o,d.priority=i,a(s)}({title:e,dueDate:t,description:r,notes:o,priority:l}),p(null)):function(n,e,t,r,o){c.todos.push(new i(n,e,t,r,o)),a(s)}(e,t,r,o,l),b.reset(),b.classList.add("hidden"),g.classList.remove("hidden"),y.classList.remove("hidden"),x()})),{renderProjects:j}.renderProjects()})()})();