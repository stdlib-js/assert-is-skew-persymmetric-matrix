"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=f(function(m,s){
var n=require('@stdlib/assert-is-square-matrix/dist');function o(e){var r,a,t,i;if(!n(e))return!1;for(r=e.shape[0]-1,t=0;t<r;t++)for(a=r-t,i=0;i<=a;i++)if(e.get(t,i)!==-e.get(r-i,a))return!1;return!0}s.exports=o
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
