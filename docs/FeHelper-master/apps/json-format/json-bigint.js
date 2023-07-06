var TRbignumber=function(e){return function(n){"use strict";var t,r=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,i=Math.ceil,o=Math.floor,u=" not a boolean or binary digit",s="rounding mode",f="number type has more than 15 significant digits",c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",l=1e14,a=14,h=9007199254740991,g=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],p=1e7,d=1e9;function m(e){var n=0|e;return e>0||e===n?n:n-1}function w(e){for(var n,t,r=1,i=e.length,o=e[0]+"";r<i;){for(n=e[r++]+"",t=a-n.length;t--;n="0"+n);o+=n}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function v(e,n){var t,r,i=e.c,o=n.c,u=e.s,s=n.s,f=e.e,c=n.e;if(!u||!s)return null;if(t=i&&!i[0],r=o&&!o[0],t||r)return t?r?0:-s:u;if(u!=s)return u;if(t=u<0,r=f==c,!i||!o)return r?0:!i^t?1:-1;if(!r)return f>c^t?1:-1;for(s=(f=i.length)<(c=o.length)?f:c,u=0;u<s;u++)if(i[u]!=o[u])return i[u]>o[u]^t?1:-1;return f==c?0:f>c^t?1:-1}function y(e,n,t){return(e=x(e))>=n&&e<=t}function b(e){return"[object Array]"==Object.prototype.toString.call(e)}function N(e,n,t){for(var r,i,o=[0],u=0,s=e.length;u<s;){for(i=o.length;i--;o[i]*=n);for(o[r=0]+=c.indexOf(e.charAt(u++));r<o.length;r++)o[r]>t-1&&(null==o[r+1]&&(o[r+1]=0),o[r+1]+=o[r]/t|0,o[r]%=t)}return o.reverse()}function O(e,n){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(n<0?"e":"e+")+n}function S(e,n){var t,r;if(n<0){for(r="0.";++n;r+="0");e=r+e}else if(++n>(t=e.length)){for(r="0",n-=t;--n;r+="0");e+=r}else n<t&&(e=e.slice(0,n)+"."+e.slice(n));return e}function x(e){return(e=parseFloat(e))<0?i(e):o(e)}(t=function e(n){var t,R,A,E,j,_,F,B,D=0,I=J.prototype,T=new J(1),C=20,U=4,L=-7,k=21,M=-1e7,P=1e7,q=!0,$=Z,G=!1,z=1,V=0,H={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0};function J(e,n){var t,i,u,s,l,g,p=this;if(!(p instanceof J))return q&&Q(26,"constructor call without new",e),new J(e,n);if(null!=n&&$(n,2,64,D,"base")){if(g=e+"",10==(n|=0))return ee(p=new J(e instanceof J?e:g),C+p.e+1,U);if((s="number"==typeof e)&&0*e!=0||!new RegExp("^-?"+(t="["+c.slice(0,n)+"]+")+"(?:\\."+t+")?$",n<37?"i":"").test(g))return R(p,g,s,n);s?(p.s=1/e<0?(g=g.slice(1),-1):1,q&&g.replace(/^0\.0*|\./,"").length>15&&Q(D,f,e),s=!1):p.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1,g=W(g,10,n,p.s)}else{if(e instanceof J)return p.s=e.s,p.e=e.e,p.c=(e=e.c)?e.slice():e,void(D=0);if((s="number"==typeof e)&&0*e==0){if(p.s=1/e<0?(e=-e,-1):1,e===~~e){for(i=0,u=e;u>=10;u/=10,i++);return p.e=i,p.c=[e],void(D=0)}g=e+""}else{if(!r.test(g=e+""))return R(p,g,s);p.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1}}for((i=g.indexOf("."))>-1&&(g=g.replace(".","")),(u=g.search(/e/i))>0?(i<0&&(i=u),i+=+g.slice(u+1),g=g.substring(0,u)):i<0&&(i=g.length),u=0;48===g.charCodeAt(u);u++);for(l=g.length;48===g.charCodeAt(--l););if(g=g.slice(u,l+1))if(l=g.length,s&&q&&l>15&&(e>h||e!==o(e))&&Q(D,f,p.s*e),(i=i-u-1)>P)p.c=p.e=null;else if(i<M)p.c=[p.e=0];else{if(p.e=i,p.c=[],u=(i+1)%a,i<0&&(u+=a),u<l){for(u&&p.c.push(+g.slice(0,u)),l-=a;u<l;)p.c.push(+g.slice(u,u+=a));g=g.slice(u),u=a-g.length}else u-=l;for(;u--;g+="0");p.c.push(+g)}else p.c=[p.e=0];D=0}function W(e,n,r,i){var o,u,s,f,l,a,h,g=e.indexOf("."),p=C,d=U;for(r<37&&(e=e.toLowerCase()),g>=0&&(s=V,V=0,e=e.replace(".",""),l=(h=new J(r)).pow(e.length-g),V=s,h.c=N(S(w(l.c),l.e),10,n),h.e=h.c.length),u=s=(a=N(e,r,n)).length;0==a[--s];a.pop());if(!a[0])return"0";if(g<0?--u:(l.c=a,l.e=u,l.s=i,a=(l=t(l,h,p,d,n)).c,f=l.r,u=l.e),g=a[o=u+p+1],s=n/2,f=f||o<0||null!=a[o+1],f=d<4?(null!=g||f)&&(0==d||d==(l.s<0?3:2)):g>s||g==s&&(4==d||f||6==d&&1&a[o-1]||d==(l.s<0?8:7)),o<1||!a[0])e=f?S("1",-p):"0";else{if(a.length=o,f)for(--n;++a[--o]>n;)a[o]=0,o||(++u,a=[1].concat(a));for(s=a.length;!a[--s];);for(g=0,e="";g<=s;e+=c.charAt(a[g++]));e=S(e,u)}return e}function X(e,n,t,r){var i,o,u,f,c;if(t=null!=t&&$(t,0,8,r,s)?0|t:U,!e.c)return e.toString();if(i=e.c[0],u=e.e,null==n)c=w(e.c),c=19==r||24==r&&u<=L?O(c,u):S(c,u);else if(o=(e=ee(new J(e),n,t)).e,f=(c=w(e.c)).length,19==r||24==r&&(n<=o||o<=L)){for(;f<n;c+="0",f++);c=O(c,o)}else if(n-=u,c=S(c,o),o+1>f){if(--n>0)for(c+=".";n--;c+="0");}else if((n+=o-f)>0)for(o+1==f&&(c+=".");n--;c+="0");return e.s<0&&i?"-"+c:c}function Y(e,n){var t,r,i=0;for(b(e[0])&&(e=e[0]),t=new J(e[0]);++i<e.length;){if(!(r=new J(e[i])).s){t=r;break}n.call(t,r)&&(t=r)}return t}function Z(e,n,t,r,i){return(e<n||e>t||e!=x(e))&&Q(r,(i||"decimal places")+(e<n||e>t?" out of range":" not an integer"),e),!0}function K(e,n,t){for(var r=1,i=n.length;!n[--i];n.pop());for(i=n[0];i>=10;i/=10,r++);return(t=r+t*a-1)>P?e.c=e.e=null:t<M?e.c=[e.e=0]:(e.e=t,e.c=n),e}function Q(e,n,t){var r=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][e]+"() "+n+": "+t);throw r.name="BigNumber Error",D=0,r}function ee(e,n,t,r){var u,s,f,c,h,p,d,m=e.c,w=g;if(m){e:{for(u=1,c=m[0];c>=10;c/=10,u++);if((s=n-u)<0)s+=a,f=n,d=(h=m[p=0])/w[u-f-1]%10|0;else if((p=i((s+1)/a))>=m.length){if(!r)break e;for(;m.length<=p;m.push(0));h=d=0,u=1,f=(s%=a)-a+1}else{for(h=c=m[p],u=1;c>=10;c/=10,u++);d=(f=(s%=a)-a+u)<0?0:h/w[u-f-1]%10|0}if(r=r||n<0||null!=m[p+1]||(f<0?h:h%w[u-f-1]),r=t<4?(d||r)&&(0==t||t==(e.s<0?3:2)):d>5||5==d&&(4==t||r||6==t&&(s>0?f>0?h/w[u-f]:0:m[p-1])%10&1||t==(e.s<0?8:7)),n<1||!m[0])return m.length=0,r?(n-=e.e+1,m[0]=w[(a-n%a)%a],e.e=-n||0):m[0]=e.e=0,e;if(0==s?(m.length=p,c=1,p--):(m.length=p+1,c=w[a-s],m[p]=f>0?o(h/w[u-f]%w[f])*c:0),r)for(;;){if(0==p){for(s=1,f=m[0];f>=10;f/=10,s++);for(f=m[0]+=c,c=1;f>=10;f/=10,c++);s!=c&&(e.e++,m[0]==l&&(m[0]=1));break}if(m[p]+=c,m[p]!=l)break;m[p--]=0,c=1}for(s=m.length;0===m[--s];m.pop());}e.e>P?e.c=e.e=null:e.e<M&&(e.c=[e.e=0])}return e}return J.another=e,J.ROUND_UP=0,J.ROUND_DOWN=1,J.ROUND_CEIL=2,J.ROUND_FLOOR=3,J.ROUND_HALF_UP=4,J.ROUND_HALF_DOWN=5,J.ROUND_HALF_EVEN=6,J.ROUND_HALF_CEIL=7,J.ROUND_HALF_FLOOR=8,J.EUCLID=9,J.config=J.set=function(){var e,n,t=0,r={},i=arguments,o=i[0],s=o&&"object"==typeof o?function(){if(o.hasOwnProperty(n))return null!=(e=o[n])}:function(){if(i.length>t)return null!=(e=i[t++])};return s(n="DECIMAL_PLACES")&&$(e,0,d,2,n)&&(C=0|e),r[n]=C,s(n="ROUNDING_MODE")&&$(e,0,8,2,n)&&(U=0|e),r[n]=U,s(n="EXPONENTIAL_AT")&&(b(e)?$(e[0],-d,0,2,n)&&$(e[1],0,d,2,n)&&(L=0|e[0],k=0|e[1]):$(e,-d,d,2,n)&&(L=-(k=0|(e<0?-e:e)))),r[n]=[L,k],s(n="RANGE")&&(b(e)?$(e[0],-d,-1,2,n)&&$(e[1],1,d,2,n)&&(M=0|e[0],P=0|e[1]):$(e,-d,d,2,n)&&(0|e?M=-(P=0|(e<0?-e:e)):q&&Q(2,n+" cannot be zero",e))),r[n]=[M,P],s(n="ERRORS")&&(e===!!e||1===e||0===e?(D=0,$=(q=!!e)?Z:y):q&&Q(2,n+u,e)),r[n]=q,s(n="CRYPTO")&&(!0===e||!1===e||1===e||0===e?e?!(e="undefined"==typeof crypto)&&crypto&&(crypto.getRandomValues||crypto.randomBytes)?G=!0:q?Q(2,"crypto unavailable",e?void 0:crypto):G=!1:G=!1:q&&Q(2,n+u,e)),r[n]=G,s(n="MODULO_MODE")&&$(e,0,9,2,n)&&(z=0|e),r[n]=z,s(n="POW_PRECISION")&&$(e,0,d,2,n)&&(V=0|e),r[n]=V,s(n="FORMAT")&&("object"==typeof e?H=e:q&&Q(2,n+" not an object",e)),r[n]=H,r},J.max=function(){return Y(arguments,I.lt)},J.min=function(){return Y(arguments,I.gt)},J.random=(A=9007199254740992*Math.random()&2097151?function(){return o(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var n,t,r,u,s,f=0,c=[],l=new J(T);if(e=null!=e&&$(e,0,d,14)?0|e:C,u=i(e/a),G)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(u*=2));f<u;)(s=131072*n[f]+(n[f+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[f]=t[0],n[f+1]=t[1]):(c.push(s%1e14),f+=2);f=u/2}else if(crypto.randomBytes){for(n=crypto.randomBytes(u*=7);f<u;)(s=281474976710656*(31&n[f])+1099511627776*n[f+1]+4294967296*n[f+2]+16777216*n[f+3]+(n[f+4]<<16)+(n[f+5]<<8)+n[f+6])>=9e15?crypto.randomBytes(7).copy(n,f):(c.push(s%1e14),f+=7);f=u/7}else G=!1,q&&Q(14,"crypto unavailable",crypto);if(!G)for(;f<u;)(s=A())<9e15&&(c[f++]=s%1e14);for(u=c[--f],e%=a,u&&e&&(s=g[a-e],c[f]=o(u/s)*s);0===c[f];c.pop(),f--);if(f<0)c=[r=0];else{for(r=-1;0===c[0];c.splice(0,1),r-=a);for(f=1,s=c[0];s>=10;s/=10,f++);f<a&&(r-=a-f)}return l.e=r,l.c=c,l}),t=function(){function e(e,n,t){var r,i,o,u,s=0,f=e.length,c=n%p,l=n/p|0;for(e=e.slice();f--;)s=((i=c*(o=e[f]%p)+(r=l*o+(u=e[f]/p|0)*c)%p*p+s)/t|0)+(r/p|0)+l*u,e[f]=i%t;return s&&(e=[s].concat(e)),e}function n(e,n,t,r){var i,o;if(t!=r)o=t>r?1:-1;else for(i=o=0;i<t;i++)if(e[i]!=n[i]){o=e[i]>n[i]?1:-1;break}return o}function t(e,n,t,r){for(var i=0;t--;)e[t]-=i,i=e[t]<n[t]?1:0,e[t]=i*r+e[t]-n[t];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(r,i,u,s,f){var c,h,g,p,d,w,v,y,b,N,O,S,x,R,A,E,j,_=r.s==i.s?1:-1,F=r.c,B=i.c;if(!(F&&F[0]&&B&&B[0]))return new J(r.s&&i.s&&(F?!B||F[0]!=B[0]:B)?F&&0==F[0]||!B?0*_:_/0:NaN);for(b=(y=new J(_)).c=[],_=u+(h=r.e-i.e)+1,f||(f=l,h=m(r.e/a)-m(i.e/a),_=_/a|0),g=0;B[g]==(F[g]||0);g++);if(B[g]>(F[g]||0)&&h--,_<0)b.push(1),p=!0;else{for(R=F.length,E=B.length,g=0,_+=2,(d=o(f/(B[0]+1)))>1&&(B=e(B,d,f),F=e(F,d,f),E=B.length,R=F.length),x=E,O=(N=F.slice(0,E)).length;O<E;N[O++]=0);j=B.slice(),j=[0].concat(j),A=B[0],B[1]>=f/2&&A++;do{if(d=0,(c=n(B,N,E,O))<0){if(S=N[0],E!=O&&(S=S*f+(N[1]||0)),(d=o(S/A))>1)for(d>=f&&(d=f-1),v=(w=e(B,d,f)).length,O=N.length;1==n(w,N,v,O);)d--,t(w,E<v?j:B,v,f),v=w.length,c=1;else 0==d&&(c=d=1),v=(w=B.slice()).length;if(v<O&&(w=[0].concat(w)),t(N,w,O,f),O=N.length,-1==c)for(;n(B,N,E,O)<1;)d++,t(N,E<O?j:B,O,f),O=N.length}else 0===c&&(d++,N=[0]);b[g++]=d,N[0]?N[O++]=F[x]||0:(N=[F[x]],O=1)}while((x++<R||null!=N[0])&&_--);p=null!=N[0],b[0]||b.splice(0,1)}if(f==l){for(g=1,_=b[0];_>=10;_/=10,g++);ee(y,u+(y.e=g+h*a-1)+1,s,p)}else y.e=h,y.r=+p;return y}}(),E=/^(-?)0([xbo])(?=\w[\w.]*$)/i,j=/^([^.]+)\.$/,_=/^\.([^.]+)$/,F=/^-?(Infinity|NaN)$/,B=/^\s*\+(?=[\w.])|^\s+|\s+$/g,R=function(e,n,t,r){var i,o=t?n:n.replace(B,"");if(F.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!t&&(o=o.replace(E,function(e,n,t){return i="x"==(t=t.toLowerCase())?16:"b"==t?2:8,r&&r!=i?e:n}),r&&(i=r,o=o.replace(j,"$1").replace(_,"0.$1")),n!=o))return new J(o,i);q&&Q(D,"not a"+(r?" base "+r:"")+" number",n),e.s=null}e.c=e.e=null,D=0},I.absoluteValue=I.abs=function(){var e=new J(this);return e.s<0&&(e.s=1),e},I.ceil=function(){return ee(new J(this),this.e+1,2)},I.comparedTo=I.cmp=function(e,n){return D=1,v(this,new J(e,n))},I.decimalPlaces=I.dp=function(){var e,n,t=this.c;if(!t)return null;if(e=((n=t.length-1)-m(this.e/a))*a,n=t[n])for(;n%10==0;n/=10,e--);return e<0&&(e=0),e},I.dividedBy=I.div=function(e,n){return D=3,t(this,new J(e,n),C,U)},I.dividedToIntegerBy=I.divToInt=function(e,n){return D=4,t(this,new J(e,n),0,1)},I.equals=I.eq=function(e,n){return D=5,0===v(this,new J(e,n))},I.floor=function(){return ee(new J(this),this.e+1,3)},I.greaterThan=I.gt=function(e,n){return D=6,v(this,new J(e,n))>0},I.greaterThanOrEqualTo=I.gte=function(e,n){return D=7,1===(n=v(this,new J(e,n)))||0===n},I.isFinite=function(){return!!this.c},I.isInteger=I.isInt=function(){return!!this.c&&m(this.e/a)>this.c.length-2},I.isNaN=function(){return!this.s},I.isNegative=I.isNeg=function(){return this.s<0},I.isZero=function(){return!!this.c&&0==this.c[0]},I.lessThan=I.lt=function(e,n){return D=8,v(this,new J(e,n))<0},I.lessThanOrEqualTo=I.lte=function(e,n){return D=9,-1===(n=v(this,new J(e,n)))||0===n},I.minus=I.sub=function(e,n){var t,r,i,o,u=this,s=u.s;if(D=10,n=(e=new J(e,n)).s,!s||!n)return new J(NaN);if(s!=n)return e.s=-n,u.plus(e);var f=u.e/a,c=e.e/a,h=u.c,g=e.c;if(!f||!c){if(!h||!g)return h?(e.s=-n,e):new J(g?u:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-n,e):new J(h[0]?u:3==U?-0:0)}if(f=m(f),c=m(c),h=h.slice(),s=f-c){for((o=s<0)?(s=-s,i=h):(c=f,i=g),i.reverse(),n=s;n--;i.push(0));i.reverse()}else for(r=(o=(s=h.length)<(n=g.length))?s:n,s=n=0;n<r;n++)if(h[n]!=g[n]){o=h[n]<g[n];break}if(o&&(i=h,h=g,g=i,e.s=-e.s),(n=(r=g.length)-(t=h.length))>0)for(;n--;h[t++]=0);for(n=l-1;r>s;){if(h[--r]<g[r]){for(t=r;t&&!h[--t];h[t]=n);--h[t],h[r]+=l}h[r]-=g[r]}for(;0==h[0];h.splice(0,1),--c);return h[0]?K(e,h,c):(e.s=3==U?-1:1,e.c=[e.e=0],e)},I.modulo=I.mod=function(e,n){var r,i,o=this;return D=11,e=new J(e,n),!o.c||!e.s||e.c&&!e.c[0]?new J(NaN):!e.c||o.c&&!o.c[0]?new J(o):(9==z?(i=e.s,e.s=1,r=t(o,e,0,3),e.s=i,r.s*=i):r=t(o,e,0,z),o.minus(r.times(e)))},I.negated=I.neg=function(){var e=new J(this);return e.s=-e.s||null,e},I.plus=I.add=function(e,n){var t,r=this,i=r.s;if(D=12,n=(e=new J(e,n)).s,!i||!n)return new J(NaN);if(i!=n)return e.s=-n,r.minus(e);var o=r.e/a,u=e.e/a,s=r.c,f=e.c;if(!o||!u){if(!s||!f)return new J(i/0);if(!s[0]||!f[0])return f[0]?e:new J(s[0]?r:0*i)}if(o=m(o),u=m(u),s=s.slice(),i=o-u){for(i>0?(u=o,t=f):(i=-i,t=s),t.reverse();i--;t.push(0));t.reverse()}for((i=s.length)-(n=f.length)<0&&(t=f,f=s,s=t,n=i),i=0;n;)i=(s[--n]=s[n]+f[n]+i)/l|0,s[n]=l===s[n]?0:s[n]%l;return i&&(s=[i].concat(s),++u),K(e,s,u)},I.precision=I.sd=function(e){var n,t,r=this,i=r.c;if(null!=e&&e!==!!e&&1!==e&&0!==e&&(q&&Q(13,"argument"+u,e),e!=!!e&&(e=null)),!i)return null;if(n=(t=i.length-1)*a+1,t=i[t]){for(;t%10==0;t/=10,n--);for(t=i[0];t>=10;t/=10,n++);}return e&&r.e+1>n&&(n=r.e+1),n},I.round=function(e,n){var t=new J(this);return(null==e||$(e,0,d,15))&&ee(t,~~e+this.e+1,null!=n&&$(n,0,8,15,s)?0|n:U),t},I.shift=function(e){var n=this;return $(e,-h,h,16,"argument")?n.times("1e"+x(e)):new J(n.c&&n.c[0]&&(e<-h||e>h)?n.s*(e<0?0:1/0):n)},I.squareRoot=I.sqrt=function(){var e,n,r,i,o,u=this,s=u.c,f=u.s,c=u.e,l=C+4,a=new J("0.5");if(1!==f||!s||!s[0])return new J(!f||f<0&&(!s||s[0])?NaN:s?u:1/0);if(0==(f=Math.sqrt(+u))||f==1/0?(((n=w(s)).length+c)%2==0&&(n+="0"),f=Math.sqrt(n),c=m((c+1)/2)-(c<0||c%2),r=new J(n=f==1/0?"1e"+c:(n=f.toExponential()).slice(0,n.indexOf("e")+1)+c)):r=new J(f+""),r.c[0])for((f=(c=r.e)+l)<3&&(f=0);;)if(o=r,r=a.times(o.plus(t(u,o,l,1))),w(o.c).slice(0,f)===(n=w(r.c)).slice(0,f)){if(r.e<c&&--f,"9999"!=(n=n.slice(f-3,f+1))&&(i||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(ee(r,r.e+C+2,1),e=!r.times(r).eq(u));break}if(!i&&(ee(o,o.e+C+2,0),o.times(o).eq(u))){r=o;break}l+=4,f+=4,i=1}return ee(r,r.e+C+1,U,e)},I.times=I.mul=function(e,n){var t,r,i,o,u,s,f,c,h,g,d,w,v,y,b,N=this,O=N.c,S=(D=17,e=new J(e,n)).c;if(!(O&&S&&O[0]&&S[0]))return!N.s||!e.s||O&&!O[0]&&!S||S&&!S[0]&&!O?e.c=e.e=e.s=null:(e.s*=N.s,O&&S?(e.c=[0],e.e=0):e.c=e.e=null),e;for(r=m(N.e/a)+m(e.e/a),e.s*=N.s,(f=O.length)<(g=S.length)&&(v=O,O=S,S=v,i=f,f=g,g=i),i=f+g,v=[];i--;v.push(0));for(y=l,b=p,i=g;--i>=0;){for(t=0,d=S[i]%b,w=S[i]/b|0,o=i+(u=f);o>i;)t=((c=d*(c=O[--u]%b)+(s=w*c+(h=O[u]/b|0)*d)%b*b+v[o]+t)/y|0)+(s/b|0)+w*h,v[o--]=c%y;v[o]=t}return t?++r:v.splice(0,1),K(e,v,r)},I.toDigits=function(e,n){var t=new J(this);return e=null!=e&&$(e,1,d,18,"precision")?0|e:null,n=null!=n&&$(n,0,8,18,s)?0|n:U,e?ee(t,e,n):t},I.toExponential=function(e,n){return X(this,null!=e&&$(e,0,d,19)?1+~~e:null,n,19)},I.toFixed=function(e,n){return X(this,null!=e&&$(e,0,d,20)?~~e+this.e+1:null,n,20)},I.toFormat=function(e,n){var t=X(this,null!=e&&$(e,0,d,21)?~~e+this.e+1:null,n,21);if(this.c){var r,i=t.split("."),o=+H.groupSize,u=+H.secondaryGroupSize,s=H.groupSeparator,f=i[0],c=i[1],l=this.s<0,a=l?f.slice(1):f,h=a.length;if(u&&(r=o,o=u,u=r,h-=r),o>0&&h>0){for(r=h%o||o,f=a.substr(0,r);r<h;r+=o)f+=s+a.substr(r,o);u>0&&(f+=s+a.slice(r)),l&&(f="-"+f)}t=c?f+H.decimalSeparator+((u=+H.fractionGroupSize)?c.replace(new RegExp("\\d{"+u+"}\\B","g"),"$&"+H.fractionGroupSeparator):c):f}return t},I.toFraction=function(e){var n,r,i,o,u,s,f,c,l,h=q,p=this,d=p.c,m=new J(T),v=r=new J(T),y=f=new J(T);if(null!=e&&(q=!1,s=new J(e),q=h,(h=s.isInt())&&!s.lt(T)||(q&&Q(22,"max denominator "+(h?"out of range":"not an integer"),e),e=!h&&s.c&&ee(s,s.e+1,1).gte(T)?s:null)),!d)return p.toString();for(l=w(d),o=m.e=l.length-p.e-1,m.c[0]=g[(u=o%a)<0?a+u:u],e=!e||s.cmp(m)>0?o>0?m:v:s,u=P,P=1/0,s=new J(l),f.c[0]=0;c=t(s,m,0,1),1!=(i=r.plus(c.times(y))).cmp(e);)r=y,y=i,v=f.plus(c.times(i=v)),f=i,m=s.minus(c.times(i=m)),s=i;return i=t(e.minus(r),y,0,1),f=f.plus(i.times(v)),r=r.plus(i.times(y)),f.s=v.s=p.s,n=t(v,y,o*=2,U).minus(p).abs().cmp(t(f,r,o,U).minus(p).abs())<1?[v.toString(),y.toString()]:[f.toString(),r.toString()],P=u,n},I.toNumber=function(){return+this},I.toPower=I.pow=function(e,n){var t,r,u,s=o(e<0?-e:+e),f=this;if(null!=n&&(D=23,n=new J(n)),!$(e,-h,h,23,"exponent")&&(!isFinite(e)||s>h&&(e/=0)||parseFloat(e)!=e&&!(e=NaN))||0==e)return t=Math.pow(+f,e),new J(n?t%n:t);for(n?e>1&&f.gt(T)&&f.isInt()&&n.gt(T)&&n.isInt()?f=f.mod(n):(u=n,n=null):V&&(t=i(V/a+2)),r=new J(T);;){if(s%2){if(!(r=r.times(f)).c)break;t?r.c.length>t&&(r.c.length=t):n&&(r=r.mod(n))}if(!(s=o(s/2)))break;f=f.times(f),t?f.c&&f.c.length>t&&(f.c.length=t):n&&(f=f.mod(n))}return n?r:(e<0&&(r=T.div(r)),u?r.mod(u):t?ee(r,V,U):r)},I.toPrecision=function(e,n){return X(this,null!=e&&$(e,1,d,24,"precision")?0|e:null,n,24)},I.toString=function(e){var n,t=this,r=t.s,i=t.e;return null===i?r?(n="Infinity",r<0&&(n="-"+n)):n="NaN":(n=w(t.c),n=null!=e&&$(e,2,64,25,"base")?W(S(n,i),0|e,10,r):i<=L||i>=k?O(n,i):S(n,i),r<0&&t.c[0]&&(n="-"+n)),n},I.truncated=I.trunc=function(){return ee(new J(this),this.e+1,1)},I.valueOf=I.toJSON=function(){var e,n=this,t=n.e;return null===t?n.toString():(e=w(n.c),e=t<=L||t>=k?O(e,t):S(e,t),n.s<0?"-"+e:e)},I.isBigNumber=!0,null!=n&&J.config(n),J}()).default=t.BigNumber=t,"function"==typeof define&&define.amd?define(function(){return t}):void 0!==e&&e.exports?e.exports=t:(n||(n="undefined"!=typeof self?self:Function("return this")()),n.BigNumber=t)}(this),e.exports}({exports:{}}),TRstringify=function(e){var n={};return function(){"use strict";var e,t,r,i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function u(e){return i.lastIndex=0,i.test(e)?'"'+e.replace(i,function(e){var n=o[e];return"string"==typeof n?n:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}"function"!=typeof n.stringify&&(n.stringify=function(n,i,o){var s;if(e="",t="","number"==typeof o)for(s=0;s<o;s+=1)t+=" ";else"string"==typeof o&&(t=o);if(r=i,i&&"function"!=typeof i&&("object"!=typeof i||"number"!=typeof i.length))throw new Error("JSON.stringify");return function n(i,o){var s,f,c,l,a,h=e,g=o[i],p=null!=g&&(g instanceof BigNumber||g.isBigNumber);switch(g&&"object"==typeof g&&"function"==typeof g.toJSON&&(g=g.toJSON(i)),"function"==typeof r&&(g=r.call(o,i,g)),typeof g){case"string":return p?g:u(g);case"number":return isFinite(g)?String(g):"null";case"boolean":case"null":return String(g);case"object":if(!g)return"null";if(e+=t,a=[],"[object Array]"===Object.prototype.toString.apply(g)){for(l=g.length,s=0;s<l;s+=1)a[s]=n(s,g)||"null";return c=0===a.length?"[]":e?"[\n"+e+a.join(",\n"+e)+"\n"+h+"]":"["+a.join(",")+"]",e=h,c}if(r&&"object"==typeof r)for(l=r.length,s=0;s<l;s+=1)"string"==typeof r[s]&&(c=n(f=r[s],g))&&a.push(u(f)+(e?": ":":")+c);else Object.keys(g).forEach(function(t){var r=n(t,g);r&&a.push(u(t)+(e?": ":":")+r)});return c=0===a.length?"{}":e?"{\n"+e+a.join(",\n"+e)+"\n"+h+"}":"{"+a.join(",")+"}",e=h,c}}("",{"":n})})}(),e.exports=n.stringify,e.exports}({exports:{}}),TRparse=function(e){return e.exports=function(e){"use strict";var n={strict:!1,storeAsString:!1};void 0!==e&&null!==e&&(!0===e.strict&&(n.strict=!0),!0===e.storeAsString&&(n.storeAsString=!0));var t,r,i,o,u={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},s=function(e){throw{name:"SyntaxError",message:e,at:t,text:i}},f=function(e){return e&&e!==r&&s("Expected '"+e+"' instead of '"+r+"'"),r=i.charAt(t),t+=1,r},c=function(){var e,t="";for("-"===r&&(t="-",f("-"));r>="0"&&r<="9";)t+=r,f();if("."===r)for(t+=".";f()&&r>="0"&&r<="9";)t+=r;if("e"===r||"E"===r)for(t+=r,f(),"-"!==r&&"+"!==r||(t+=r,f());r>="0"&&r<="9";)t+=r,f();if(e=+t,isFinite(e))return t.length>15?!0===n.storeAsString?t:new BigNumber(t):e;s("Bad number")},l=function(){var e,n,t,i="";if('"'===r)for(;f();){if('"'===r)return f(),i;if("\\"===r)if(f(),"u"===r){for(t=0,n=0;n<4&&(e=parseInt(f(),16),isFinite(e));n+=1)t=16*t+e;i+=String.fromCharCode(t)}else{if("string"!=typeof u[r])break;i+=u[r]}else i+=r}s("Bad string")},a=function(){for(;r&&r<=" ";)f()};return o=function(){switch(a(),r){case"{":return function(){var e,t={};if("{"===r){if(f("{"),a(),"}"===r)return f("}"),t;for(;r;){if(e=l(),a(),f(":"),!0===n.strict&&Object.hasOwnProperty.call(t,e)&&s('Duplicate key "'+e+'"'),t[e]=o(),a(),"}"===r)return f("}"),t;f(","),a()}}s("Bad object")}();case"[":return function(){var e=[];if("["===r){if(f("["),a(),"]"===r)return f("]"),e;for(;r;){if(e.push(o()),a(),"]"===r)return f("]"),e;f(","),a()}}s("Bad array")}();case'"':return l();case"-":return c();default:return r>="0"&&r<="9"?c():function(){switch(r){case"t":return f("t"),f("r"),f("u"),f("e"),!0;case"f":return f("f"),f("a"),f("l"),f("s"),f("e"),!1;case"n":return f("n"),f("u"),f("l"),f("l"),null}s("Unexpected '"+r+"'")}()}},function(e,n){var u;return i=e+"",t=0,r=" ",u=o(),a(),r&&s("Syntax error"),"function"==typeof n?function e(t,r){var i,o=t[r];return o&&"object"==typeof o&&Object.keys(o).forEach(function(n){void 0!==(i=e(o,n))?o[n]=i:delete o[n]}),n.call(t,r,o)}({"":u},""):u}},e.exports}({exports:{}});var BigNumber=TRbignumber,json_stringify=TRstringify,json_parse=TRparse;
let Jb=function(e){return{parse:json_parse(e),stringify:json_stringify}};
JSON.parse = json_parse();
JSON.stringify = json_stringify;
JSON.BigNumber = BigNumber;
