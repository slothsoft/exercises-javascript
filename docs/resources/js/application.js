(function(){function e(t,n,r){function o(a,i){if(!n[a]){if(!t[a]){var h="function"==typeof require&&require;if(!i&&h)return h(a,!0);if(s)return s(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return o(n||e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}return e})()({1:[function(e,t,n){(function(e){!function(r){var o=typeof n=='object'&&n&&!n.nodeType&&n,s=typeof t=='object'&&t&&!t.nodeType&&t,a=typeof e=='object'&&e;(a.global===a||a.window===a||a.self===a)&&(r=a);var i,h=2147483647,c=36,l=1,u=26,p=38,f=700,m=72,d=128,g='-',x=/^xn--/,y=/[^\x20-\x7E]/,b=/[\x2E\u3002\uFF0E\uFF61]/g,w={'overflow':'Overflow: input needs wider integers to process','not-basic':'Illegal input >= 0x80 (not a basic code point)','invalid-input':'Invalid input'},j=c-l,v=Math.floor,O=String.fromCharCode,E;function q(e){throw new RangeError(w[e])}function I(e,t){var n=e.length,r=[];while(n--)r[n]=t(e[n]);return r}function A(e,t){var n=e.split('@'),r='';n.length>1&&(r=n[0]+'@',e=n[1]);e=e.replace(b,'\x2E');var o=e.split('.'),s=I(o,t).join('.');return r+s}function C(e){var t=[],n=0,r=e.length,o,s;while(n<r)o=e.charCodeAt(n++),o>=55296&&o<=56319&&n<r?(s=e.charCodeAt(n++),(s&64512)==56320?t.push(((o&1023)<<10)+(s&1023)+65536):(t.push(o),n--)):t.push(o);return t}function k(e){return I(e,function(e){var t='';e>65535&&(e-=65536,t+=O(e>>>10&1023|55296),e=56320|e&1023);t+=O(e);return t}).join('')}function L(e){if(e-48<10){return e-22}if(e-65<26){return e-65}if(e-97<26){return e-97}return c}function N(e,t){return e+22+75*(e<26)-((t!=0)<<5)}function T(e,t,n){var r=0;e=n?v(e/f):e>>1;e+=v(e/t);for(;e>j*u>>1;r+=c)e=v(e/j);return v(r+(j+1)*e/(e+p))}function D(e){var t=[],n=e.length,r,o=0,s=d,a=m,i,p,f,x,y,b,w,j,O;i=e.lastIndexOf(g);i<0&&(i=0);for(p=0;p<i;++p)e.charCodeAt(p)>=128&&q('not-basic'),t.push(e.charCodeAt(p));for(f=i>0?i+1:0;f<n;){for(x=o, y=1, b=c;;b+=c){f>=n&&q('invalid-input');w=L(e.charCodeAt(f++));(w>=c||w>v((h-o)/y))&&q('overflow');o+=w*y;j=b<=a?l:(b>=a+u?u:b-a);if(w<j){break}O=c-j;y>v(h/O)&&q('overflow');y*=O}r=t.length+1;a=T(o-x,r,x==0);v(o/r)>h-s&&q('overflow');s+=v(o/r);o%=r;t.splice(o++,0,s)}return k(t)}function S(e){var t,n,r,o,s,a,i,p,f,x,y,b=[],w,j,E,I;e=C(e);w=e.length;t=d;n=0;s=m;for(a=0;a<w;++a)y=e[a],y<128&&b.push(O(y));r=o=b.length;o&&b.push(g);while(r<w){for(i=h, a=0;a<w;++a)y=e[a],y>=t&&y<i&&(i=y);j=r+1;i-t>v((h-n)/j)&&q('overflow');n+=(i-t)*j;t=i;for(a=0;a<w;++a){y=e[a];y<t&&++n>h&&q('overflow');if(y==t){for(p=n, f=c;;f+=c){x=f<=s?l:(f>=s+u?u:f-s);if(p<x){break}I=p-x;E=c-x;b.push(O(N(x+I%E,0)));p=v(I/E)}b.push(O(N(p,0)));s=T(n,j,r==o);n=0;++r}}++n;++t}return b.join('')}function B(e){return A(e,function(e){return x.test(e)?D(e.slice(4).toLowerCase()):e})}function H(e){return A(e,function(e){return y.test(e)?'xn--'+S(e):e})}i={'version':'1.4.1','ucs2':{'decode':C,'encode':k},'decode':D,'encode':S,'toASCII':H,'toUnicode':B};if(typeof define=='function'&&typeof define.amd=='object'&&define.amd)define('punycode',function(){return i});else if(o&&s){if(t.exports==o)s.exports=i;else{for(E in i)i.hasOwnProperty(E)&&(o[E]=i[E])}}else r.punycode=i}(this)}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],2:[function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,n,s){t=t||'&';n=n||'=';var a={};if(typeof e!=='string'||e.length===0){return a}var i=/\+/g;e=e.split(t);var h=1e3;s&&typeof s.maxKeys==='number'&&(h=s.maxKeys);var c=e.length;h>0&&c>h&&(c=h);for(var l=0;l<c;++l){var u=e[l].replace(i,'%20'),p=u.indexOf(n),f,m,d,g;p>=0?(f=u.substr(0,p),m=u.substr(p+1)):(f=u,m='');d=decodeURIComponent(f);g=decodeURIComponent(m);r(a,d)?o(a[d])?a[d].push(g):(a[d]=[a[d],g]):(a[d]=g)}return a};var o=Array.isArray||function(e){return Object.prototype.toString.call(e)==='[object Array]'}},{}],3:[function(e,t,n){"use strict";var r=function(e){switch(typeof e){case 'string':return e;case 'boolean':return e?'true':'false';case 'number':return isFinite(e)?e:'';default:return''}};t.exports=function(e,t,n,i){t=t||'&';n=n||'=';e===null&&(e=void 0);if(typeof e==='object'){return s(a(e),function(a){var i=encodeURIComponent(r(a))+n;if(o(e[a])){return s(e[a],function(e){return i+encodeURIComponent(r(e))}).join(t)}else{return i+encodeURIComponent(r(e[a]))}}).join(t)}if(!i)return'';return encodeURIComponent(r(i))+n+encodeURIComponent(r(e))};var o=Array.isArray||function(e){return Object.prototype.toString.call(e)==='[object Array]'};function s(e,t){if(e.map)return e.map(t);var n=[];for(var r=0;r<e.length;r++)n.push(t(e[r],r));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],4:[function(e,t,n){"use strict";n.decode=n.parse=e('./decode');n.encode=n.stringify=e('./encode')},{"./decode":2,"./encode":3}],5:[function(e,t,n){"use strict";var r=e('punycode'),o=e('./util');n.parse=j;n.resolve=O;n.resolveObject=E;n.format=v;n.Url=s;function s(){this.protocol=null;this.slashes=null;this.auth=null;this.host=null;this.port=null;this.hostname=null;this.hash=null;this.search=null;this.query=null;this.pathname=null;this.path=null;this.href=null}var a=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=['<','>','"','`',' ','\r','\n','\t'],l=['{','}','|','\\','^','`'].concat(c),u=['\''].concat(l),p=['%','/','?',';','#'].concat(u),f=['/','?','#'],m=255,d=/^[+a-z0-9A-Z_-]{0,63}$/,g=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,x={'javascript':!0,'javascript:':!0},y={'javascript':!0,'javascript:':!0},b={'http':!0,'https':!0,'ftp':!0,'gopher':!0,'file':!0,'http:':!0,'https:':!0,'ftp:':!0,'gopher:':!0,'file:':!0},w=e('querystring');function j(e,t,n){if(e&&o.isObject(e)&&e instanceof s)return e;var r=new s;r.parse(e,t,n);return r}s.prototype.parse=function(e,t,n){if(!o.isString(e)){throw new TypeError("Parameter 'url' must be a string, not "+typeof e)}var s=e.indexOf('?'),i=s!==-1&&s<e.indexOf('#')?'?':'#',c=e.split(i),l=/\\/g;c[0]=c[0].replace(l,'/');e=c.join(i);var j=e;j=j.trim();if(!n&&e.split('#').length===1){var v=h.exec(j);if(v){this.path=j;this.href=j;this.pathname=v[1];v[2]?(this.search=v[2],t?(this.query=w.parse(this.search.substr(1))):(this.query=this.search.substr(1))):t&&(this.search='',this.query={});return this}}var O=a.exec(j);if(O){O=O[0];var E=O.toLowerCase();this.protocol=E;j=j.substr(O.length)}if(n||O||j.match(/^\/\/[^@\/]+@[^@\/]+/)){var q=j.substr(0,2)==='//';q&&!(O&&y[O])&&(j=j.substr(2),this.slashes=!0)}if(!y[O]&&(q||O&&!b[O])){var I=-1;for(var A=0;A<f.length;A++){var C=j.indexOf(f[A]);C!==-1&&(I===-1||C<I)&&(I=C)}var k,L;I===-1?(L=j.lastIndexOf('@')):(L=j.lastIndexOf('@',I));L!==-1&&(k=j.slice(0,L),j=j.slice(L+1),this.auth=decodeURIComponent(k));I=-1;for(A=0;A<p.length;A++){C=j.indexOf(p[A]);C!==-1&&(I===-1||C<I)&&(I=C)}I===-1&&(I=j.length);this.host=j.slice(0,I);j=j.slice(I);this.parseHost();this.hostname=this.hostname||'';var N=this.hostname[0]==='['&&this.hostname[this.hostname.length-1]===']';if(!N){var T=this.hostname.split(/\./);for(var A=0,D=T.length;A<D;A++){var S=T[A];if(!S)continue;if(!S.match(d)){var B='';for(var H=0,P=S.length;H<P;H++)S.charCodeAt(H)>127?(B+='x'):(B+=S[H]);if(!B.match(d)){var U=T.slice(0,A),W=T.slice(A+1),F=S.match(g);F&&(U.push(F[1]),W.unshift(F[2]));W.length&&(j='/'+W.join('.')+j);this.hostname=U.join('.');break}}}}this.hostname.length>m?(this.hostname=''):(this.hostname=this.hostname.toLowerCase());N||(this.hostname=r.toASCII(this.hostname));var G=this.port?':'+this.port:'',M=this.hostname||'';this.host=M+G;this.href+=this.host;N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),j[0]!=='/'&&(j='/'+j))}if(!x[E]){for(A=0,D=u.length;A<D;A++){var R=u[A];if(j.indexOf(R)===-1)continue;var _=encodeURIComponent(R);_===R&&(_=escape(R));j=j.split(R).join(_)}}var K=j.indexOf('#');K!==-1&&(this.hash=j.substr(K),j=j.slice(0,K));var z=j.indexOf('?');z!==-1?(this.search=j.substr(z),this.query=j.substr(z+1),t&&(this.query=w.parse(this.query)),j=j.slice(0,z)):t&&(this.search='',this.query={});j&&(this.pathname=j);b[E]&&this.hostname&&!this.pathname&&(this.pathname='/');if(this.pathname||this.search){var G=this.pathname||'',J=this.search||'';this.path=G+J}this.href=this.format();return this};function v(e){o.isString(e)&&(e=j(e));if(!(e instanceof s))return s.prototype.format.call(e);return e.format()}s.prototype.format=function(){var e=this.auth||'';e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,':'),e+='@');var t=this.protocol||'',n=this.pathname||'',r=this.hash||'',s=!1,a='';this.host?(s=e+this.host):this.hostname&&(s=e+(this.hostname.indexOf(':')===-1?this.hostname:'['+this.hostname+']'),this.port&&(s+=':'+this.port));this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(a=w.stringify(this.query));var i=this.search||a&&'?'+a||'';t&&t.substr(-1)!==':'&&(t+=':');this.slashes||(!t||b[t])&&s!==!1?(s='//'+(s||''),n&&n.charAt(0)!=='/'&&(n='/'+n)):s||(s='');r&&r.charAt(0)!=='#'&&(r='#'+r);i&&i.charAt(0)!=='?'&&(i='?'+i);n=n.replace(/[?#]/g,function(e){return encodeURIComponent(e)});i=i.replace('#','%23');return t+s+n+i+r};function O(e,t){return j(e,!1,!0).resolve(t)}s.prototype.resolve=function(e){return this.resolveObject(j(e,!1,!0)).format()};function E(e,t){if(!e)return t;return j(e,!1,!0).resolveObject(t)}s.prototype.resolveObject=function(e){if(o.isString(e)){var t=new s;t.parse(e,!1,!0);e=t}var n=new s,r=Object.keys(this);for(var a=0;a<r.length;a++){var i=r[a];n[i]=this[i]}n.hash=e.hash;if(e.href===''){n.href=n.format();return n}if(e.slashes&&!e.protocol){var h=Object.keys(e);for(var c=0;c<h.length;c++){var l=h[c];l!=='protocol'&&(n[l]=e[l])}b[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname='/');n.href=n.format();return n}if(e.protocol&&e.protocol!==n.protocol){if(!b[e.protocol]){var u=Object.keys(e);for(var p=0;p<u.length;p++){var f=u[p];n[f]=e[f]}n.href=n.format();return n}n.protocol=e.protocol;if(!e.host&&!y[e.protocol]){var m=(e.pathname||'').split('/');while(m.length&&!(e.host=m.shift()));;e.host||(e.host='');e.hostname||(e.hostname='');m[0]!==''&&m.unshift('');m.length<2&&m.unshift('');n.pathname=m.join('/')}else n.pathname=e.pathname;n.search=e.search;n.query=e.query;n.host=e.host||'';n.auth=e.auth;n.hostname=e.hostname||e.host;n.port=e.port;if(n.pathname||n.search){var d=n.pathname||'',g=n.search||'';n.path=d+g}n.slashes=n.slashes||e.slashes;n.href=n.format();return n}var x=n.pathname&&n.pathname.charAt(0)==='/',w=e.host||e.pathname&&e.pathname.charAt(0)==='/',j=w||x||n.host&&e.pathname,v=j,O=n.pathname&&n.pathname.split('/')||[],m=e.pathname&&e.pathname.split('/')||[],E=n.protocol&&!b[n.protocol];E&&(n.hostname='',n.port=null,n.host&&(O[0]===''?(O[0]=n.host):O.unshift(n.host)),n.host='',e.protocol&&(e.hostname=null,e.port=null,e.host&&(m[0]===''?(m[0]=e.host):m.unshift(e.host)),e.host=null),j=j&&(m[0]===''||O[0]===''));if(w)n.host=e.host||e.host===''?e.host:n.host,n.hostname=e.hostname||e.hostname===''?e.hostname:n.hostname,n.search=e.search,n.query=e.query,O=m;else if(m.length)O||(O=[]),O.pop(),O=O.concat(m),n.search=e.search,n.query=e.query;else if(!o.isNullOrUndefined(e.search)){if(E){n.hostname=n.host=O.shift();var q=n.host&&n.host.indexOf('@')>0?n.host.split('@'):!1;q&&(n.auth=q.shift(),n.host=n.hostname=q.shift())}n.search=e.search;n.query=e.query;(!o.isNull(n.pathname)||!o.isNull(n.search))&&(n.path=(n.pathname?n.pathname:'')+(n.search?n.search:''));n.href=n.format();return n}if(!O.length){n.pathname=null;n.search?(n.path='/'+n.search):(n.path=null);n.href=n.format();return n}var I=O.slice(-1)[0],A=(n.host||e.host||O.length>1)&&(I==='.'||I==='..')||I==='',C=0;for(var k=O.length;k>=0;k--)I=O[k],I==='.'?O.splice(k,1):I==='..'?(O.splice(k,1),C++):C&&(O.splice(k,1),C--);if(!j&&!v){for(;C--;)O.unshift('..')}j&&O[0]!==''&&(!O[0]||O[0].charAt(0)!=='/')&&O.unshift('');A&&O.join('/').substr(-1)!=='/'&&O.push('');var L=O[0]===''||O[0]&&O[0].charAt(0)==='/';if(E){n.hostname=n.host=L?'':O.length?O.shift():'';q=n.host&&n.host.indexOf('@')>0?n.host.split('@'):!1;q&&(n.auth=q.shift(),n.host=n.hostname=q.shift())}j=j||n.host&&O.length;j&&!L&&O.unshift('');O.length?(n.pathname=O.join('/')):(n.pathname=null,n.path=null);(!o.isNull(n.pathname)||!o.isNull(n.search))&&(n.path=(n.pathname?n.pathname:'')+(n.search?n.search:''));n.auth=e.auth||n.auth;n.slashes=n.slashes||e.slashes;n.href=n.format();return n};s.prototype.parseHost=function(){var e=this.host,t=i.exec(e);t&&(t=t[0],t!==':'&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length));e&&(this.hostname=e)}},{"./util":6,"punycode":1,"querystring":4}],6:[function(e,t,n){"use strict";t.exports={isString:function(e){return typeof e==='string'},isObject:function(e){return typeof e==='object'&&e!==null},isNull:function(e){return e===null},isNullOrUndefined:function(e){return e==null}}},{}],7:[function(e,t,n){o=e("./exercise.js");let r=[];var o=e("./exercise-data/framed-words.js");r.push(new o);o=e("./exercise-data/pig-latin.js");r.push(new o);o=e("./exercise-data/löffelsprache.js");r.push(new o);r.sort(function(e,t){return e.getDisplayName()<t.getDisplayName()?-1:1});t.exports=r},{"./exercise-data/framed-words.js":8,"./exercise-data/löffelsprache.js":9,"./exercise-data/pig-latin.js":10,"./exercise.js":12}],8:[function(e,t,n){Exercise=e("../exercise.js");class r extends Exercise{constructor(){super('Framed Words','Write a function that takes a list of strings an prints them, one per line, in a rectangular frame.');this.description='<p>Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list <code>["Hello", "World", "in", "a", "frame"]</code> gets printed as:</p><img src=\"resources/images/framed-words.png\"/>';this.source='https://adriann.github.io/programming_problems.html';this.script="var input = document.getElementById('input').value.split(/[\\r\\n]+/);\nvar result = executeFramedWords(input);\ndocument.getElementById('output').value = result.join('\\n');\n";this.html="<h2>Input</h2>\n<textarea id=\"input\" rows=\"4\" cols=\"50\" onkeyup=\"executeExercise()\">Hello\nWorld\nin\na\nframe</textarea>\n<br />\n<button onclick=\"executeExercise()\">Execute</button>\n<h2>Output</h2>\n<textarea id=\"output\" rows=\"6\" cols=\"50\" readonly style=\"background-color:#DDDDDD;\"></textarea>"}}t.exports=r},{"../exercise.js":12}],9:[function(e,t,n){Exercise=e("../exercise.js");class r extends Exercise{constructor(){super('Spoon Language','The spoon language is the German pig latin. The language is based on the exchange of the vowels of a word by fixed abbreviations, whereby the consonants of the word remain untouched.');this.id='löffelsprache';this.description='<p>The spoon language (German: <i>Löffelsprache</i> is the German pig latin. The language is based on the exchange of the vowels of a word by fixed abbreviations, whereby the consonants of the word remain untouched.</p><p>Basically it is about inserting the syllable lew after each vowel (a, e, i, o, u), diphthong (au, ie, ei etc.) or umlaut (ä, ö, ü) and then the vowel, diphthong or Use umlaut again. For example, the noun Uhu becomes ulewu-h-ulewu. The vowel u was replaced by ulewu, whereas the consonant, that is, the h, remained untouched. From car, for example, would become aulewau-t-olewo.</p>';this.source='https://monsterliterature.com/spoon-language/';this.script="var input = document.getElementById('input').value;\nvar result = executeLöffelsprache(input);\ndocument.getElementById('output').value = result;\n";this.html="<h2>Input</h2>\n<textarea id=\"input\" rows=\"4\" cols=\"50\" onkeyup=\"executeExercise()\">Das ist die Löffelsprache</textarea>\n<br />\n<button onclick=\"executeExercise()\">Execute</button>\n<h2>Output</h2>\n<textarea id=\"output\" rows=\"6\" cols=\"50\" readonly style=\"background-color:#DDDDDD;\"></textarea>"}}t.exports=r},{"../exercise.js":12}],10:[function(e,t,n){Exercise=e("../exercise.js");class r extends Exercise{constructor(){super('Pig Latin','Write function that translates a text to Pig Latin and back.');this.id='pig-latin';this.description='Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay". "The quick brown fox" becomes "Hetay uickqay rownbay oxfay".';this.source="https://adriann.github.io/programming_problems.html";this.script="var input = document.getElementById('input').value;\nvar result = executePigLatin(input);\ndocument.getElementById('output').value = result;\n";this.html="<h2>Input</h2>\n<textarea id=\"input\" rows=\"4\" cols=\"50\" onkeyup=\"executeExercise()\">The quick brown fox</textarea>\n<br />\n<button onclick=\"executeExercise()\">Execute</button>\n<h2>Output</h2>\n<textarea id=\"output\" rows=\"6\" cols=\"50\" readonly style=\"background-color:#DDDDDD;\"></textarea>"}}t.exports=r},{"../exercise.js":12}],11:[function(e,t,n){class r{constructor(){this.exercises=e("./exercise-data.js")}createExerciseOverview(){var e="<ul id='header-links'>";e+="<li><a href='https://github.com/slothsoft/exercises-javascript/'>GitHub</a></li>";e+="<li><a href='"+window.location.pathname+"?exercise=random'>Random</a></li>";e+="</ul>";this.exercises.forEach(function(t){e+="<a href=\""+o(t)+"\"><h2>"+t.getDisplayName()+"</h2></a>";e+="<p>"+t.getShortDescription()+"</p>"});return e}createExerciseList(){var e="<ul id='sidebar'>";e+="<li><a href=\""+window.location.pathname+"\"><b>Overview</b></a></li>";e+="<li><a href=\"https://github.com/slothsoft/exercises-javascript/\"><b>GitHub</b></a></li>";e+="<li><a href='"+window.location.pathname+"?exercise=random'><b>Random</b></a></li>";e+="<li><a href='test.html'><b>Test Results</b></a></li>";e+="<br>";this.exercises.forEach(function(t){var n="href=\""+o(t)+"\"";e+="<li><a "+n+">"+t.getDisplayName()+"</a></li>"});e+="</ul>";return e}createExerciseById(e){var t=null;this.exercises.forEach(function(n){n.getId()==e&&t==null&&(t=n)});if(t==null){var n=Math.random()*this.exercises.length,r=this.exercises[Math.floor(n)],t=this.createExercise(r);window.document.title="Random Exercise";return t}return this.createExercise(t)}createExercise(e){window.document.title=e.getDisplayName();var t="<ul id='header-links'>";e.getSource()!=null&&(t+="<li><a href='"+e.getSource()+"'>Exercise Source</a></li>");t+="<li><a href='http://github.com/slothsoft/exercises-javascript/blob/master/src/exercise/"+e.getId()+".js'>Source Code</a></li>";t+="<li><a href='http://github.com/slothsoft/exercises-javascript/blob/master/test/exercise/"+e.getId()+"-test.js'>Tests</a></li>";t+="</ul>";t+="<h1>"+e.getDisplayName()+"</h1>";t+="<p>"+e.getDescription()+"</p>";t+=e.getHtml();var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.innerHTML='function executeExercise() { '+e.script+'\n}';n.appendChild(r);return t}}function o(e){return window.location.pathname+'?exercise='+e.getId()}t.exports=r},{"./exercise-data.js":7}],12:[function(e,t,n){class r{constructor(e,t){this.displayName=e;this.shortDescription=t}getId(){if(this.id!=null)return this.id;var e=this.getDisplayName();return e.replace(" ","-").toLowerCase()}getDisplayName(){return this.displayName}getDescription(){return this.description==null?this.shortDescription:this.description}getShortDescription(){return this.shortDescription}getSource(){return this.source}getHtml(){return this.html==null?"":this.html}getScript(){return this.script==null?"":this.script}}t.exports=r},{}],13:[function(e,t,n){let r=e("./exercise-gui.js"),o=e('url');var s=new r;document.getElementById('exercise-list').innerHTML=s.createExerciseList();var a=o.parse(window.location.href,!0).query;a.exercise==null?(document.getElementById('selected-exercise').innerHTML=s.createExerciseOverview()):(document.getElementById('selected-exercise').innerHTML=s.createExerciseById(a.exercise),executeExercise())},{"./exercise-gui.js":11,"url":5}]},{},[13])
