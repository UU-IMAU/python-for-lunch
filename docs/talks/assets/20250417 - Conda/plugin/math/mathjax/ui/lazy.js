!function(){"use strict";var t,e,r={335:function(t,e,r){var a,n=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var a,n,o=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(a=o.next()).done;)i.push(a.value)}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i},i=this&&this.__spreadArray||function(t,e){for(var r=0,a=e.length,n=t.length;r<a;r++,n++)t[n]=e[r];return t},l=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],a=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&a>=t.length&&(t=void 0),{value:t&&t[a++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.LazyHandler=e.LazyMathDocumentMixin=e.LazyMathItemMixin=e.LAZYID=e.LazyList=void 0;var s=r(769),y=r(239),u=function(){function t(){this.id=0,this.items=new Map}return t.prototype.add=function(t){var e=String(this.id++);return this.items.set(e,t),e},t.prototype.get=function(t){return this.items.get(t)},t.prototype.delete=function(t){return this.items.delete(t)},t}();function c(t){return function(t){function r(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var a=t.apply(this,i([],o(e)))||this;return a.lazyCompile=!0,a.lazyTypeset=!0,a.lazyTex=!1,a.end.node||(a.lazyCompile=a.lazyTypeset=!1),a}return n(r,t),r.prototype.compile=function(e){this.lazyCompile?this.state()<s.STATE.COMPILED&&(this.lazyTex="TeX"===this.inputJax.name,this.root=e.mmlFactory.create("math"),this.state(s.STATE.COMPILED)):t.prototype.compile.call(this,e)},r.prototype.typeset=function(r){var a;if(this.lazyTypeset){if(this.state()<s.STATE.TYPESET){var n=r.adaptor;if(!this.lazyMarker){var o=r.lazyList.add(this);this.lazyMarker=n.node("mjx-lazy",((a={})[e.LAZYID]=o,a)),this.typesetRoot=n.node("mjx-container",{},[this.lazyMarker])}this.state(s.STATE.TYPESET)}}else t.prototype.typeset.call(this,r)},r.prototype.updateDocument=function(e){t.prototype.updateDocument.call(this,e),this.lazyTypeset&&e.lazyObserver.observe(this.lazyMarker)},r.prototype.state=function(e,r){return void 0===e&&(e=void 0),void 0===r&&(r=!1),null===r?this._state:t.prototype.state.call(this,e,r)},r}(t)}function h(t){return function(t){function r(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var a=t.apply(this,i([],o(e)))||this;a.lazyPromise=Promise.resolve(),a.lazyIdle=!1,a.lazySet=new Set,a.options.MathItem=c(a.options.MathItem),a.lazyObserver=new IntersectionObserver(a.lazyObserve.bind(a)),a.lazyList=new u;var n=a.lazyHandleSet.bind(a);return a.lazyProcessSet="undefined"!=typeof window&&window.requestIdleCallback?function(){return window.requestIdleCallback(n)}:function(){return setTimeout(n,10)},a}return n(r,t),r.prototype.lazyObserve=function(t){var r,a;try{for(var n=l(t),o=n.next();!o.done;o=n.next()){var i=o.value,s=this.adaptor.getAttribute(i.target,e.LAZYID);this.lazyList.get(s)&&(i.isIntersecting?(this.lazySet.add(s),this.lazyIdle||(this.lazyIdle=!0,this.lazyProcessSet())):this.lazySet.delete(s))}}catch(t){r={error:t}}finally{try{o&&!o.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}},r.prototype.lazyHandleSet=function(){var t=this,e=this.lazySet;this.lazySet=new Set,this.lazyPromise=this.lazyPromise.then((function(){var r=t.compileEarlierItems(e)?s.STATE.COMPILED:s.STATE.TYPESET;return r=t.resetStates(e,r),t.state(r-1,null),y.handleRetriesFor((function(){t.render(),t.lazyIdle=!1}))}))},r.prototype.resetStates=function(t,e){var r,a;try{for(var n=l(t.values()),o=n.next();!o.done;o=n.next()){var i=o.value,y=this.lazyList.get(i);y.lazyCompile?(y.state(s.STATE.COMPILED-1),e=s.STATE.COMPILED):y.state(s.STATE.TYPESET-1),y.lazyCompile=y.lazyTypeset=!1,y.lazyMarker&&this.lazyObserver.unobserve(y.lazyMarker)}}catch(t){r={error:t}}finally{try{o&&!o.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return e},r.prototype.compileEarlierItems=function(t){var e,r,a=this.earliestTex(t);if(!a)return!1;var n=!1;try{for(var o=l(this.math),i=o.next();!i.done;i=o.next()){var y=i.value;if(y===a||!(null==y?void 0:y.lazyCompile))break;y.lazyCompile=!1,y.lazyMarker&&this.lazyObserver.unobserve(y.lazyMarker),y.state(s.STATE.COMPILED-1),n=!0}}catch(t){e={error:t}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}return n},r.prototype.earliestTex=function(t){var e,r,a=null,n=null;try{for(var o=l(t.values()),i=o.next();!i.done;i=o.next()){var s=i.value,y=this.lazyList.get(s);y.lazyTex&&((null===a||parseInt(s)<a)&&(a=parseInt(s),n=y))}}catch(t){e={error:t}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}return n},r.prototype.clearMathItemsWithin=function(r){var a,n,o=t.prototype.clearMathItemsWithin.call(this,r);try{for(var i=l(o),s=i.next();!s.done;s=i.next()){var y=s.value.lazyMarker;y&&(this.lazyObserver.unobserve(y),this.lazyList.delete(this.adaptor.getAttribute(y,e.LAZYID)))}}catch(t){a={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o},r}(t)}e.LazyList=u,e.LAZYID="data-mjx-lazy",e.LazyMathItemMixin=c,e.LazyMathDocumentMixin=h,e.LazyHandler=function(t){return"undefined"!=typeof IntersectionObserver&&(t.documentClass=h(t.documentClass)),t}},723:function(t,e){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,e.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},769:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.protoItem=MathJax._.core.MathItem.protoItem,e.AbstractMathItem=MathJax._.core.MathItem.AbstractMathItem,e.STATE=MathJax._.core.MathItem.STATE,e.newState=MathJax._.core.MathItem.newState},239:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.handleRetriesFor=MathJax._.util.Retries.handleRetriesFor,e.retryAfter=MathJax._.util.Retries.retryAfter}},a={};function n(t){var e=a[t];if(void 0!==e)return e.exports;var o=a[t]={exports:{}};return r[t].call(o.exports,o,o.exports,n),o.exports}t=n(723),e=n(335),(0,t.r8)({_:{ui:{lazy:{LazyHandler:e}}}}),MathJax.startup&&MathJax.startup.extendHandler((function(t){return(0,e.LazyHandler)(t)}))}();
