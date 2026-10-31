"use strict";var s=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var q=s(function(L,l){"use strict";var A=require("@stdlib/math-base-special-copysignf"),C=require("@stdlib/math-base-special-sincosf").assign,P=require("@stdlib/math-base-assert-is-nanf"),R=require("@stdlib/math-base-assert-is-infinitef"),u=require("@stdlib/math-base-special-expf"),p=require("@stdlib/number-float64-base-to-float32"),E=require("@stdlib/constants-float32-pinf"),x=require("@stdlib/constants-float32-ninf"),N=[0,0];function K(i,e,r,n,a){var v;return P(i)?(r[a]=NaN,r[a+n]=e===0?e:NaN,r):R(e)?i===E?(r[a]=x,r[a+n]=NaN,r):i===x?(r[a]=-0,r[a+n]=A(0,e),r):(r[a]=NaN,r[a+n]=NaN,r):(v=u(i),e===0?(r[a]=v,r[a+n]=e,r):(C(e,N,1,0),r[a]=p(N[1]*v),r[a+n]=p(N[0]*v),r))}l.exports=K});var F=s(function(M,y){"use strict";var S=require("@stdlib/complex-float32-ctor"),W=require("@stdlib/array-float32"),b=require("@stdlib/complex-float32-real"),h=require("@stdlib/complex-float32-imag"),j=q(),c=new W(2);function k(i){return j(b(i),h(i),c,1,0),new S(c[0],c[1])}y.exports=k});var d=s(function(Q,I){"use strict";var B=q();function D(i,e,r,n,a,v){return B(i[r],i[r+e],n,a,v)}I.exports=D});var w=require("@stdlib/utils-define-nonenumerable-read-only-property"),g=F(),G=q(),H=d();w(g,"assign",G);w(g,"strided",H);module.exports=g;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
