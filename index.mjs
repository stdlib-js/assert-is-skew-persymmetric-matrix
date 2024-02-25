// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@v0.2.0-esm/index.mjs";function t(t){var e,s,i,n;if(!r(t))return!1;for(e=t.shape[0]-1,i=0;i<e;i++)for(s=e-i,n=0;n<=s;n++)if(t.get(i,n)!==-t.get(e-n,s))return!1;return!0}export{t as default};
//# sourceMappingURL=index.mjs.map
