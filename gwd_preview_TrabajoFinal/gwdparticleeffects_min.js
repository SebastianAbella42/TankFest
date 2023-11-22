(function(){'use strict';var e,g="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var m={a:!0},n={};try{n.__proto__=m;l=n.a;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=k;function t(a,b,c){a=parseInt(a.getAttribute(b),10);isNaN(a)&&(a=c);return a}function u(a){a=parseFloat(a.getAttribute("time-limit"));isFinite(a)||(a=-1);return 0<a?a:-1};var v=/[^\d]+$/;function w(a,b,c){if(!a.hasAttribute(b))return 0;b=a.getAttribute(b);if(isNaN(parseFloat(b)))c=0;else{a=parseFloat(b);(b=(b=b.match(v))&&b[0]||null)&&(b=b.trim());var d=a;"%"==b&&(d=Number((a/100*c).toFixed(2)));c=d}return c};function x(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")}function y(a){if(x(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&x(a))return a;return null};function z(a,b){var c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d)};function A(){var a=HTMLElement.call(this)||this;a.canvas=null;a.u=!1;a.g=[];a.B=a.M.bind(a);a.L=a.N.bind(a);a.m=a.O.bind(a);a.v=[];a.C=a.H.bind(a);a.h=null;a.i=2;a.A=null;a.o=-1;a.s=null;a.D=!1;return a}var B=HTMLElement;A.prototype=g(B.prototype);A.prototype.constructor=A;if(r)r(A,B);else for(var C in B)if("prototype"!=C)if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(B,C);E&&Object.defineProperty(A,C,E)}else A[C]=B[C];e=A.prototype;
e.connectedCallback=function(){var a=this;this.width=this.clientWidth;this.height=this.clientHeight;this.l=window.devicePixelRatio;this.canvas||(this.canvas=this.ownerDocument.createElement("canvas"),this.appendChild(this.canvas));this.canvas.style.width=this.width+"px";this.canvas.style.height=this.height+"px";this.canvas.width=this.width*this.l;this.canvas.height=this.height*this.l;this.j=this.canvas.getContext("2d");this.K=this.hasAttribute("autoplay");null===this.s?this.o=1E3*u(this):this.D&&
this.play();setTimeout(function(){if(!a.gwdIsLoaded()){var b=y(a);b?b.gwdIsLoaded()&&a.gwdLoad():a.gwdLoad()}},1)};e.disconnectedCallback=function(){this.gwdIsLoaded()?(this.D=0==this.i,this.pause(!1)):F(this)};
e.gwdLoad=function(){if(!this.gwdIsLoaded()){F(this);for(var a=0,b=0;b<this.children.length;b++){var c=this.children[b];if(G(c))c.gwdIsLoaded()||H(this,c),this.addEventListener("request-reload",this.L,!1);else if("image"==c.getAttribute("assettype")){var d=c.getAttribute("source"),f=w(c,"left",this.width),h=w(c,"top",this.height),p=w(c,"width",this.width),q=w(c,"height",this.height),D=t(c,"opacity",100);d={canvas:null,src:d,G:f*this.l,I:h*this.l,J:p*this.l,F:q*this.l,opacity:Math.min((0<=D?D:100)/
100,1)};f=this.ownerDocument.createElement("img");this.g.push(f);f.addEventListener("load",this.m,!1);f.addEventListener("error",this.m,!1);this.v[a]=d;c.setAttribute("image-index",a);f.setAttribute("image-index",a++);f.width=d.J;f.height=d.F;f.src=d.src}}this.u=!0;I(this)}};e.gwdIsLoaded=function(){return this.u&&0==this.g.length};function H(a,b){-1==a.g.indexOf(b)&&(a.g.push(b),b.addEventListener("ready",a.B,!1));b.gwdLoad()}
function F(a){for(;a.g.length;){var b=a.g.pop();b.removeEventListener("ready",a.B,!1);b.removeEventListener("load",a.m,!1);b.removeEventListener("error",a.m,!1)}a.u=!1;a.v.length=0}function I(a){a.u&&0==a.g.length&&(z("ready",a),a.K?a.play(!0):null!=a.A&&a.play(a.A),a.A=null)}e.M=function(a){a=a.target;var b=this.g.indexOf(a);0<=b&&(this.g.splice(b,1),a.removeEventListener("ready",this.B,!1),I(this))};e.N=function(a){H(this,a.target)};
e.O=function(a){var b=this,c=a.target;c.removeEventListener("load",this.m,!1);c.removeEventListener("error",this.m,!1);var d=this.g.indexOf(c);if(0<=d){var f=parseInt(c.getAttribute("image-index"),10);if("load"==a.type){var h=this.ownerDocument.createElement("canvas");h.width=c.width;h.height=c.height;var p=this.v[f],q=h.getContext("2d");q.globalAlpha=p.opacity;setTimeout(function(){d=b.g.indexOf(c);b.g.splice(d,1);q.drawImage(c,0,0,c.width,c.height);p.canvas=h;I(b)},50)}else this.g.splice(d,1),I(this)}};
function G(a){return"gwd-particles"==a.tagName.toLowerCase()}e.play=function(a){a=void 0===a?!0:a;if(!this.gwdIsLoaded())this.A=0!=a;else if(0!=this.i){null==this.s&&(this.s=Date.now());if(2==this.i)for(var b=0;b<this.children.length;b++){var c=this.children[b].hasAttribute("autoplay");G(this.children[b])&&c&&this.children[b].play()}0==a?this.H(!1):this.h=requestAnimationFrame(this.C);this.i=0}};
e.pause=function(a){a=void 0===a?!0:a;this.h&&(cancelAnimationFrame(this.h),this.h=null,a&&(this.o=-1),this.i=1)};e.stop=function(){if(2!=this.i){for(var a=0;a<this.children.length;a++)G(this.children[a])&&this.children[a].stop();this.h&&(cancelAnimationFrame(this.h),this.h=null,this.o=-1);this.i=2;this.j.clearRect(0,0,this.canvas.width,this.canvas.height)}};
e.H=function(a){if(0!=a&&0<this.o&&Date.now()-this.s>this.o)this.pause(),z("timelimitreached",this);else{this.j.clearRect(0,0,this.canvas.width,this.canvas.height);for(var b=0;b<this.children.length;b++){var c=this.children[b];c.hasAttribute("hidden")||(G(c)&&c.gwdIsLoaded()?c.updateAndDraw():"image"==c.getAttribute("assettype")&&(c=t(c,"image-index",-1),-1!=c&&(c=this.v[c],c.canvas?this.j.drawImage(c.canvas,c.G,c.I):this.hasAttribute("data-gwd-node")&&(this.j.strokeStyle="#c0c0c0",this.j.lineWidth=
1,this.j.strokeRect(c.G,c.I,c.J,c.F)))))}0!=a&&(this.h=requestAnimationFrame(this.C))}};customElements.define("gwd-particleeffects",A);}).call(this);
