!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.indexDotCo=e():t.indexDotCo=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t){t||(t=window.indexDotCoSettings?window.indexDotCoSettings:{});var e=window.document.createElement("style");e.type="text/css",e.innerHTML=c["default"];var n={attach:function(){this.event.trigger("significantDomChange")},event:{trigger:function(t){"significantDomChange"===t&&window.document.body.dispatchEvent(new window.Event(a["default"].prefix+"significantDomChange"))}}};return document.body.addEventListener(a["default"].prefix+"significantDomChange",function(){(0,f["default"])(function(){window.jQuery(function(){(0,u["default"])(["icon","card","list","hoverable"])})})}),t.disableCss||window.document.body.appendChild(e),t.delay||n.attach(),n}var i=n(1),a=o(i),d=n(2),c=o(d),l=n(3),f=o(l),s=n(4),u=o(s);t.exports=r},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};n.prefix="idc-",n.cardPrefix=n.prefix+"card-",n.version="0.0.2",n.endpoint="https://index.co/api/",e["default"]=n},function(t,e){t.exports='.idc-card *, .idc-popover, .idc-card, .idc-cardStandalone {\n\tclear: none;\n\tfloat: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-shadow: none;\n\tborder: none;\n\ttext-align: inherit;\n\tlist-style: none;\n\ttext-decoration: none;\n\tfont-family: inherit;\n\tbox-sizing: border-box;\n\tcolor: inherit;\n}\n\n.idc-hasIcon {\n\ttext-decoration: none!important;\n\tborder: none!important;\n\tcursor: pointer!important;\n\tbox-shadow:none!important;\n\twidth: 16px;\n\theight: 16px;\n\tbackground: url("https://index.tnwcdn.com/favicon.png") center center no-repeat;\n\tbackground-size: 16px 16px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tmargin-right: .1em;\n\tmargin-right: .2em;\n\tmargin-left: .2em;\n\tposition: relative;\n\ttop: -2px;\n}\n\n.idc-popover {\n\tposition: absolute;\n\tborder-radius: 2px;\n\tbackground-color: #000;\n\tbackground-color: rgba(51, 51, 51, 0.98);\n\tcolor: #fff;\n\ttext-align: center;\n\tline-height: 1.2;\n\tz-index: 99999;\n\twidth: 18em;\n\tpointer-events: none;\n}\n.idc-popover:before {\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n\tmargin-bottom: -5px;\n\twidth: 0;\n\tborder-top: 5px solid #000;\n\tborder-top: 5px solid rgba(51, 51, 51, 0.98);\n\tborder-right: 5px solid transparent;\n\tborder-left: 5px solid transparent;\n\tcontent: " ";\n\tfont-size: 0;\n\tline-height: 0;\n}\n\n.idc-popover.idc-popover--in {\n\tanimation: idc-hovercardFade 100ms forwards ease-in-out;\n}\n\n.idc-popover.idc-popover--out {\n\tanimation: idc-hovercardFade 100ms forwards ease-in-out reverse;\n}\n\n.idc-cardStandalone {\n\tborder: 1px solid rgba(0,0,0,.075);\n\tborder-radius: 2px;\n\twidth: 18em;\n\theight: 18em;\n\tdisplay: inline-block;\n}\n\n.idc-card {\n\tfont-family: sans-serif;\n\tcolor: inherit;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbackground: transparent;\n}\n\n.idc-cardStandalone .idc-card {\n\theight: 100%;\n\twidth: 100%;\n\tbackground: #fff;\n}\n\n.idc-card.idc-card--dark {\n\tbackground-color: #222;\n\tcolor: #fff;\n}\n\n.idc-card-header {\n\theight: 5.7em;\n\tpadding: 1em;\n\tborder-bottom: 1px solid rgba(0,0,0,.075);\n\ttext-align: left;\n\toverflow: hidden;\n\tflex: 0 0 auto;\n}\n\n.idc-card-header-avatar {\n\twidth: 3.8em;\n\theight: 3.8em;\n\tmin-width: 3.8em;\n\tmin-height: 3.8em;\n\tmax-width: 3.8em;\n\tmax-height: 3.8em;\n\n\tborder-radius: 2px;\n\tmargin-right: 1em;\n\tdisplay: block;\n\tfloat: left;\n\tbox-shadow: 0 0 0 1px rgba(0,0,0,.075);\n}\n.idc-card-header-meta {\n\tdisplay: block;\n\tfloat: left;\n}\n.idc-card-header-title {\n\tfont-size: 1em;\n\tfont-weight: bold;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.idc-card-header-tags {\n\tmax-height: 1.2em;\n\tfont-size: .7em;\n\toverflow: hidden;\n\tmargin-top: .33em;\n\twhite-space: nowrap;\n}\n.idc-card-header-tags li {\n\tdisplay: block;\n\tfloat: left;\n\tmargin-right: .25em;\n\theight: 1.2em;\n\tline-height: 1.2em;\n\tfont-style: normal;\n\topacity: .5;\n}\n.idc-card-header-tags li:not(:last-child):after {\n\tcontent:\', \';\n}\n.idc-card-header-tags li:before {\n\tfont-size: .8em;\n}\n\n.idc-card-header:hover .idc-card-header-title {\n\tcolor: #3af;\n}\n\n.idc-card-tagline {\n\tmargin: 1em;\n\tfont-size: 0.9em;\n\tline-height: 1.4em;\n\tmax-height: 8.2em;\n\ttext-align: left;\n\tfont-weight: 300;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n\n.idc-card-expando {\n\tflex: 1 1 0;\n\tdisplay: block;\n}\n\n.idc-card-facts {\n\tfont-size: .7em;\n\tmax-height: 2em;\n\toverflow: hidden;\n\tmargin-left: -.2rem;\n\tmargin-top: .5em;\n}\n\n.idc-card-facts li {\n\tbackground: #3af;\n\tcolor: #fff;\n\tborder-radius: 999999em;\n\topacity: .9;\n\ttext-align: left;\n\tfloat: left;\n\tpadding: .2rem .4rem;\n\tmargin: .1rem;\n\theight: 1.6em;\n\tline-height: 1em;\n}\n\n.idc-card-footer {\n\ttext-transform: uppercase;\n\tfont-size: 0.7em;\n\tpadding: 1em;\n\tborder-top: 1px solid rgba(0,0,0,.075);\n}\n\n.idc-card-footer {\n\ttext-align: left;\n}\n\n.idc-card-footer-blurrable {\n\topacity: .5;\n}\n\n.idc-card-footer-logo {\n\tfont-weight: 800;\n\tcolor: #3af;\n}\n\n@keyframes idc-hovercardFade {\n\t0% {\n\t\ttransform: translateY(1em);\n\t\topacity: 0;\n\t}\n\t100% {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t}\n}\n'},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){if(window.jQuery)t();else{var e=document.createElement("script");e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!=e.readyState&&"complete"!=e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()},e.src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js",document.getElementsByTagName("head")[0].appendChild(e)}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},i=n(1),a=o(i),d=n(5),c=o(d),l=n(9),f=o(l),s=n(10),u=o(s),p=n(11),h=o(p),m=n(12),v=o(m),y=new Event(a["default"].prefix+"elementCreated",{bubbles:!0}),g=new Event(a["default"].prefix+"popoverCreated",{bubbles:!0}),b=function(t){var e=(0,u["default"])(t),n=(0,h["default"])(e.entity),o=window.jQuery("<div></div>").addClass(a["default"].prefix+"cardStandalone"),r=t.hasClass(a["default"].prefix+"hasCard--dark");t.replaceWith(o),t=o,n.done(function(n){try{var i=new c["default"]({data:n,actionable:!0,dark:r});o.append(i.domElement),t[0].dispatchEvent(y)}catch(a){console.error("[index] error building card for "+e.entity)}})},w=function(t){var e=(0,u["default"])(t),n=(0,v["default"])(e.entity),o=window.jQuery("<div></div>").addClass(a["default"].prefix+"cardStandalone");t.replaceWith(o),n.done(function(t){try{var n=o.clone(),r=!0,i=!1,a=void 0;try{for(var d,l=t[Symbol.iterator]();!(r=(d=l.next()).done);r=!0){var f=d.value,s=new c["default"]({data:f,actionable:!0});o.append(s.domElement);var u=n.clone();o.after(u),o=u}}catch(p){i=!0,a=p}finally{try{!r&&l["return"]&&l["return"]()}finally{if(i)throw a}}o.remove()}catch(h){console.error("[index] error building list for "+e.entity)}})},x=function(t){var e=(0,u["default"])(t),n=(0,h["default"])(e.entity);t.attr("target","_blank").attr({href:e.href+"?utm_source=thenextweb.com&utm_medium=referral&utm_campaign=hover-"+e.entity}),t.on("mouseover",function(o){!t.data(a["default"].prefix+"hasIndexPopover")==!0&&(t.data(a["default"].prefix+"hasIndexPopover",!0),n.done(function(n){try{var o=new c["default"]({data:n}),r=new f["default"]({html:o.domElement,top:t.offset().top,left:t.offset().left+t.outerWidth()/2});r.on("close",function(){t.data(a["default"].prefix+"hasIndexPopover",!1)}),r.place(),t[0].dispatchEvent(y)}catch(i){console.error("[index] error building popover for "+e.entity)}}))}),t.on("mouseout",function(e){"resolved"!==n.state()&&(t.data(a["default"].prefix+"hasIndexPopover",!1),n.abort())}),t[0].dispatchEvent(g),"function"==typeof window.callPhantom&&t.trigger("mouseover")},j=function k(t){if("object"===("undefined"==typeof t?"undefined":r(t)))t.map(function(t){k(t)});else{var e=t;if("icon"===e)window.jQuery("a."+a["default"].prefix+"hasIcon:not(.idc-attached)").each(function(){window.jQuery(this).addClass("idc-attached"),x(window.jQuery(this))});else if("card"===e)window.jQuery("a."+a["default"].prefix+"hasCard:not(.idc-attached)").each(function(){window.jQuery(this).addClass("idc-attached"),b(window.jQuery(this))});else if("hoverable"===e)window.jQuery("a."+a["default"].prefix+"hasHover:not(.idc-attached)").each(function(){window.jQuery(this).addClass("idc-attached"),x(window.jQuery(this))});else{if("list"!==e)throw"Invalid object type ("+e+")";window.jQuery("a."+a["default"].prefix+"hasList:not(.idc-attached)").each(function(){window.jQuery(this).addClass("idc-attached"),w(window.jQuery(this))})}}};e["default"]=j},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var d=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n(1),l=o(c),f=n(6),s=o(f),u=n(7),p=o(u),h=n(8),m=o(h),v=function(t){function e(){return r(this,e),i(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),d(e,[{key:"makeElement",value:function(t){var e=t.data;if(!e||!e.profile||!e.info)throw"BAD_STRUCTURE";var n=p["default"].render(m["default"],{data:e,config:l["default"],params:t});return n}}]),e}(s["default"]);e["default"]=v},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(1),d=o(a),c=function(){function t(e){if(r(this,t),!e)var e={};this.$element=this.makeElement(e)}return i(t,[{key:"on",value:function(t,e){this.$element.on("internal-"+d["default"].prefix+t,e)}},{key:"trigger",value:function(t,e){this.$element.trigger("internal-"+d["default"].prefix+t,e)}},{key:"makeElement",value:function(t){return window.jQuery("<div></div>")}},{key:"place",value:function(t){t||(t=window.jQuery("body")),t.append(this.domElement)}},{key:"domElement",get:function(){return this.$element}}]),t}();e["default"]=c},function(t,e,n){var o,r,i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(n,d){"object"===a(e)&&e&&"string"!=typeof e.nodeName?d(e):(r=[e],o=d,i="function"==typeof o?o.apply(e,r):o,!(void 0!==i&&(t.exports=i)))}(void 0,function(t){function e(t){return"function"==typeof t}function n(t){return v(t)?"array":"undefined"==typeof t?"undefined":a(t)}function o(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(t,e){return null!=t&&"object"===("undefined"==typeof t?"undefined":a(t))&&e in t}function i(t,e){return y.call(t,e)}function d(t){return!i(g,t)}function c(t){return String(t).replace(/[&<>"'`=\/]/g,function(t){return b[t]})}function l(e,n){function r(){if(y&&!g)for(;m.length;)delete h[m.pop()];else m=[];y=!1,g=!1}function i(t){if("string"==typeof t&&(t=t.split(x,2)),!v(t)||2!==t.length)throw new Error("Invalid tags: "+t);a=new RegExp(o(t[0])+"\\s*"),c=new RegExp("\\s*"+o(t[1])),l=new RegExp("\\s*"+o("}"+t[1]))}if(!e)return[];var a,c,l,p=[],h=[],m=[],y=!1,g=!1;i(n||t.tags);for(var b,_,P,C,O,S,Q=new u(e);!Q.eos();){if(b=Q.pos,P=Q.scanUntil(a))for(var T=0,M=P.length;T<M;++T)C=P.charAt(T),d(C)?m.push(h.length):g=!0,h.push(["text",C,b,b+1]),b+=1,"\n"===C&&r();if(!Q.scan(a))break;if(y=!0,_=Q.scan(E)||"name",Q.scan(w),"="===_?(P=Q.scanUntil(j),Q.scan(j),Q.scanUntil(c)):"{"===_?(P=Q.scanUntil(l),Q.scan(k),Q.scanUntil(c),_="&"):P=Q.scanUntil(c),!Q.scan(c))throw new Error("Unclosed tag at "+Q.pos);if(O=[_,P,b,Q.pos],h.push(O),"#"===_||"^"===_)p.push(O);else if("/"===_){if(S=p.pop(),!S)throw new Error('Unopened section "'+P+'" at '+b);if(S[1]!==P)throw new Error('Unclosed section "'+S[1]+'" at '+b)}else"name"===_||"{"===_||"&"===_?g=!0:"="===_&&i(P)}if(S=p.pop())throw new Error('Unclosed section "'+S[1]+'" at '+Q.pos);return s(f(h))}function f(t){for(var e,n,o=[],r=0,i=t.length;r<i;++r)e=t[r],e&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(o.push(e),n=e));return o}function s(t){for(var e,n,o=[],r=o,i=[],a=0,d=t.length;a<d;++a)switch(e=t[a],e[0]){case"#":case"^":r.push(e),i.push(e),r=e[4]=[];break;case"/":n=i.pop(),n[5]=e[2],r=i.length>0?i[i.length-1][4]:o;break;default:r.push(e)}return o}function u(t){this.string=t,this.tail=t,this.pos=0}function p(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function h(){this.cache={}}var m=Object.prototype.toString,v=Array.isArray||function(t){return"[object Array]"===m.call(t)},y=RegExp.prototype.test,g=/\S/,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},w=/\s*/,x=/\s+/,j=/\s*=/,k=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;u.prototype.eos=function(){return""===this.tail},u.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},u.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},p.prototype.push=function(t){return new p(t,this)},p.prototype.lookup=function(t){var n,o=this.cache;if(o.hasOwnProperty(t))n=o[t];else{for(var i,a,d=this,c=!1;d;){if(t.indexOf(".")>0)for(n=d.view,i=t.split("."),a=0;null!=n&&a<i.length;)a===i.length-1&&(c=r(n,i[a])),n=n[i[a++]];else n=d.view[t],c=r(d.view,t);if(c)break;d=d.parent}o[t]=n}return e(n)&&(n=n.call(this.view)),n},h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(t,e){var n=this.cache,o=n[t];return null==o&&(o=n[t]=l(t,e)),o},h.prototype.render=function(t,e,n){var o=this.parse(t),r=e instanceof p?e:new p(e);return this.renderTokens(o,r,n,t)},h.prototype.renderTokens=function(t,e,n,o){for(var r,i,a,d="",c=0,l=t.length;c<l;++c)a=void 0,r=t[c],i=r[0],"#"===i?a=this.renderSection(r,e,n,o):"^"===i?a=this.renderInverted(r,e,n,o):">"===i?a=this.renderPartial(r,e,n,o):"&"===i?a=this.unescapedValue(r,e):"name"===i?a=this.escapedValue(r,e):"text"===i&&(a=this.rawValue(r)),void 0!==a&&(d+=a);return d},h.prototype.renderSection=function(t,n,o,r){function i(t){return d.render(t,n,o)}var d=this,c="",l=n.lookup(t[1]);if(l){if(v(l))for(var f=0,s=l.length;f<s;++f)c+=this.renderTokens(t[4],n.push(l[f]),o,r);else if("object"===("undefined"==typeof l?"undefined":a(l))||"string"==typeof l||"number"==typeof l)c+=this.renderTokens(t[4],n.push(l),o,r);else if(e(l)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");l=l.call(n.view,r.slice(t[3],t[5]),i),null!=l&&(c+=l)}else c+=this.renderTokens(t[4],n,o,r);return c}},h.prototype.renderInverted=function(t,e,n,o){var r=e.lookup(t[1]);if(!r||v(r)&&0===r.length)return this.renderTokens(t[4],e,n,o)},h.prototype.renderPartial=function(t,n,o){if(o){var r=e(o)?o(t[1]):o[t[1]];return null!=r?this.renderTokens(this.parse(r),n,o,r):void 0}},h.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return n},h.prototype.escapedValue=function(e,n){var o=n.lookup(e[1]);if(null!=o)return t.escape(o)},h.prototype.rawValue=function(t){return t[1]},t.name="mustache.js",t.version="2.2.1",t.tags=["{{","}}"];var _=new h;t.clearCache=function(){return _.clearCache()},t.parse=function(t,e){return _.parse(t,e)},t.render=function(t,e,o){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+n(t)+'" was given as the first argument for mustache#render(template, view, partials)');return _.render(t,e,o)},t.to_html=function(n,o,r,i){var a=t.render(n,o,r);return e(i)?void i(a):a},t.escape=c,t.Scanner=u,t.Context=p,t.Writer=h})},function(t,e){t.exports='<div class="\n\t{{config.prefix}}card\n\t{{#params.actionable}}\n\t\t{{config.prefix}}card--actionable\n\t{{/params.actionable}}\n\t{{#params.dark}}\n\t\t{{config.prefix}}card--dark\n\t{{/params.dark}}\n">\n\t<a\n\t\tclass="{{config.cardPrefix}}header"\n\t\thref="{{data.profile.index_url}}"\n\t\ttarget="_blank"\n\t>\n\t\t<div class="{{config.cardPrefix}}header-meta">\n\t\t\t<h2 class="{{config.cardPrefix}}header-title">{{data.profile.name}}</h2>\n\t\t\t{{#data.info.markets.length}}\n\t\t\t\t<ul class="{{config.cardPrefix}}header-tags">\n\t\t\t\t\t{{#data.info.markets}}\n\t\t\t\t\t\t<li>{{.}}</li>\n\t\t\t\t\t{{/data.info.markets}}\n\t\t\t\t</ul>\n\t\t\t{{/data.info.markets.length}}\n\t\t\t<div class="{{config.cardPrefix}}facts">\n\t\t\t\t<ul class="{{config.cardPrefix}}facts-tags">\n\t\t\t\t\t{{#data.info.founded}}\n\t\t\t\t\t\t<li>Founded in {{.}}</li>\n\t\t\t\t\t{{/data.info.founded}}\n\t\t\t\t\t{{#data.info.raised}}\n\t\t\t\t\t\t<li>Raised {{.}}</li>\n\t\t\t\t\t{{/data.info.raised}}\n\t\t\t\t\t{{#data.info.employees}}\n\t\t\t\t\t\t<li>{{.}} employees</li>\n\t\t\t\t\t{{/data.info.employees}}\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</a>\n\t<div class="{{config.cardPrefix}}tagline">\n\t\t<img\n\t\t\tclass="{{config.cardPrefix}}header-avatar"\n\t\t\tsrc="{{data.profile.avatar}}"\n\t\t>\n\t\t<p>{{data.profile.tagline}}</p>\n\t</div>\n\t<div class="{{config.cardPrefix}}expando"></div>\n\t<a\n\t\tclass="{{config.cardPrefix}}footer"\n\t\thref= "{{data.profile.index_url}}"\n\t\ttarget="_blank"\n\t>\n\t\t{{#params.actionable}}\n\t\t\t<span class="{{config.cardPrefix}}footer-blurrable">\n\t\t\t\tView this company on\n\t\t\t</span>\n\t\t\t<span class="{{config.cardPrefix}}footer-logo">Index</span>\n\t\t{{/params.actionable}}\n\t\t{{^params.actionable}}\n\t\t\t<span class="{{config.cardPrefix}}footer-blurrable">\n\t\t\t\tClick to view this company on\n\t\t\t</span>\n\t\t\t<span class="{{config.cardPrefix}}footer-logo">Index</span>\n\t\t{{/params.actionable}}\n\t</a>\n</div>\n'},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var d=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function h(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:h(r,e,n)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(n)},l=n(1),f=o(l),s=n(6),u=o(s),p=function(t){function e(){return r(this,e),i(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),d(e,[{key:"calculateShouldClose",value:function(){var t,e=this,n=function(t,e,n){return Math.floor(Math.sqrt(Math.pow(e-(t.offset().left+t.width()/2),2)+Math.pow(n-(t.offset().top+t.height()/2),2)))},o=0,r=e.$element;window.jQuery(document).on("mousemove.popoverCloser",function(i){var a=n(r,i.pageX,i.pageY);a=Math.round(a/5),0===o?o=a:o-a<-4&&!r.is(window.jQuery(i.target))&&!r.has(window.jQuery(i.target)).length>0&&(t=setTimeout(function(){e.remove()},100))}),r.on("mouseenter.popoverCloser",function(e){try{clearTimeout(t)}catch(n){}}),r.on("mouseleave.popoverCloser",function(n){t=setTimeout(function(){e.remove()},300)})}},{key:"remove",value:function(){var t=this;this.$element.addClass(f["default"].prefix+"popover--out"),this.$element.one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(){t.trigger("close"),t.$element.remove()})}},{key:"place",value:function(){var t=this;t.domElement.css({visibility:"hidden"}),c(Object.getPrototypeOf(e.prototype),"place",this).call(this),t.domElement.css({top:this.position.top-t.domElement.outerHeight()-5,left:this.position.left-t.domElement.outerWidth()/2,visibility:"visible"}),t.domElement.addClass(f["default"].prefix+"popover--in"),t.domElement.one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(){t.domElement.removeClass(f["default"].prefix+"popover--in")}),t.calculateShouldClose()}},{key:"makeElement",value:function(t){var e=window.jQuery("<div></div>");return this.position={top:t.top,left:t.left},e.attr("class",f["default"].prefix+"popover"),e.html(t.html),e}}]),e}(u["default"]);e["default"]=p},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=document.createElement("a");return e.href=t.attr("href"),{entity:e.pathname.split("/")[2].split("-")[0],href:e.href}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=i["default"].endpoint+"company/"+t+"?version="+i["default"].version;window.jQuery.support.cors=!0;var n=window.jQuery.ajax({dataType:"json",type:"GET",url:e});return n.fail(function(n,o){"abort"!==o&&console.error("[index Popovers] http error ("+o+') loading Popover for "'+t+'" at endpoint "'+e+'"')}),n};var r=n(1),i=o(r)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=i["default"].endpoint+"list/"+t+"?version="+i["default"].version,n=window.jQuery.ajax({dataType:"json",type:"GET",url:e});return n.fail(function(n,o){"abort"!==o&&console.error("[index Popovers] http error ("+o+') loading Popover for "'+t+'" at endpoint "'+e+'"')}),n};var r=n(1),i=o(r)}])}),window.indexDotCo&&"function"==typeof window.indexDotCo&&(window.indexDotCo=window.indexDotCo());