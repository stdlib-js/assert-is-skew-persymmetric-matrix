// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@esm/index.mjs";var t=r;var e=function(r){var e,s,a,i;if(!t(r))return!1;for(e=r.shape[0]-1,a=0;a<e;a++)for(s=e-a,i=0;i<=s;i++)if(r.get(a,i)!==-r.get(e-i,s))return!1;return!0};export{e as default};
//# sourceMappingURL=index.mjs.map
