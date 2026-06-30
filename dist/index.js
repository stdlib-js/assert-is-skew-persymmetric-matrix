"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var u=f(function(m,s){
var n=require('@stdlib/assert-is-square-matrix/dist');function o(e){var r,t,i,a;if(!n(e))return!1;for(r=e.shape[0]-1,i=0;i<r;i++)for(t=r-i,a=0;a<=t;a++)if(e.get(i,a)!==-e.get(r-a,t))return!1;return!0}s.exports=o
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
