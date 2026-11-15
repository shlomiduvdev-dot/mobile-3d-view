(()=>{var Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hh=0,Nl=1,Gh=2;var br=1,Vh=2,Cs=3,Ai=0,on=1,Ke=2,Yi=0,Ps=1,Ul=2,Fl=3,Ol=4,Wh=5;var Zi=100,Xh=101,qh=102,Yh=103,Zh=104,Jh=200,Kh=201,$h=202,jh=203,Bl=204,zl=205,Qh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,ou=213,au=214,Mo=0,So=1,bo=2,_s=3,wo=4,To=5,Eo=6,Ao=7,$o=0,lu=1,cu=2,Hn=0,kl=1,Hl=2,Gl=3,Vl=4,Wl=5,Xl=6,ql=7;var Yl=300,Ji=301,Is=302,jo=303,Qo=304,ni=1e3,fn=1001,Hi=1002,Ae=1003,hu=1004;var wr=1005;var Ie=1006,ta=1007;var Mn=1008;var an=1009,Zl=1010,Jl=1011,Ls=1012,ea=1013,In=1014,Ln=1015,Dn=1016,na=1017,ia=1018,Ki=1020,Kl=35902,$l=35899,jl=1021,Ql=1022,Nn=1023,ii=1026,ai=1027,tc=1028,sa=1029,Ri=1030,ra=1031;var oa=1033,Tr=33776,Er=33777,Ar=33778,Rr=33779,aa=35840,la=35841,ca=35842,ha=35843,ua=36196,da=37492,fa=37496,pa=37488,ma=37489,Cr=37490,ga=37491,_a=37808,xa=37809,ya=37810,va=37811,Ma=37812,Sa=37813,ba=37814,wa=37815,Ta=37816,Ea=37817,Aa=37818,Ra=37819,Ca=37820,Pa=37821,Ia=36492,La=36494,Da=36495,Na=36283,Ua=36284,Pr=36285,Fa=36286;var Qs=2300,Ro=2301,yo=2302,wl=2303,Tl=2400,El=2401,Al=2402;var uu=3200;var Ir=0,du=1,li="",Ge="srgb",tr="srgb-linear",er="linear",_e="srgb";var vo=7680;var fu=519,pu=512,mu=513,gu=514,ec=515,_u=516,xu=517,nc=518,ic=519,yu=35044;var sc="300 es",yn=2e3,xs=2001;function Tf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ef(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vu(){let n=ys("canvas");return n.style.display="block",n}var lh={},vs=null;function rc(...n){let t="THREE."+n.shift();vs?vs("log",t,...n):console.log(t,...n)}function Mu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=Mu(n);let t="THREE."+n.shift();if(vs)vs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Jt(...n){n=Mu(n);let t="THREE."+n.shift();if(vs)vs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ks(...n){let t=n.join(" ");t in lh||(lh[t]=!0,Wt(...n))}function Su(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var bu={[Mo]:Mo,[bo]:Eo,[wo]:wo,[_s]:To,[So]:So,[Eo]:bo,[Ao]:Ao,[To]:_s},Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=1234567,$s=Math.PI/180,Ms=180/Math.PI;function Ds(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function se(n,t,e){return Math.max(t,Math.min(e,n))}function oc(n,t){return(n%t+t)%t}function Af(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Rf(n,t,e){return n!==t?(e-n)/(t-n):0}function js(n,t,e){return(1-e)*n+e*t}function Cf(n,t,e,i){return js(n,t,1-Math.exp(-e*i))}function Pf(n,t=1){return t-Math.abs(oc(n,t*2)-t)}function If(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Lf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Df(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Nf(n,t){return n+Math.random()*(t-n)}function Uf(n){return n*(.5-Math.random())}function Ff(n){n!==void 0&&(ch=n);let t=ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Of(n){return n*$s}function Bf(n){return n*Ms}function zf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function kf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ac(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hf(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function lc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wu(n,t){if(t.constructor===Float32Array)return n;let e=lc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Tu(n,t){if(t.constructor===Float32Array)return n;let e=lc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var $e={DEG2RAD:$s,RAD2DEG:Ms,generateUUID:Ds,clamp:se,euclideanModulo:oc,mapLinear:Af,inverseLerp:Rf,lerp:js,damp:Cf,pingpong:Pf,smoothstep:If,smootherstep:Lf,randInt:Df,randFloat:Nf,randFloatSpread:Uf,seededRandom:Ff,degToRad:Of,radToDeg:Bf,isPowerOfTwo:zf,ceilPowerOfTwo:kf,floorPowerOfTwo:ac,setQuaternionFromProperEuler:Hf,normalize:Tu,denormalize:wu},Xt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*x;m<0&&(d=-d,p=-p,g=-g,x=-x,m=-m);let f=1-a;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);f=Math.sin(f*v)/b,a=Math.sin(a*v)/b,l=l*f+d*a,c=c*f+p*a,h=h*f+g*a,u=u*f+x*a}else{l=l*f+d*a,c=c*f+p*a,h=h*f+g*a,u=u*f+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return il.copy(this).projectOnVector(t),this.sub(il)}reflect(t){return this.sub(il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new F,hh=new ke,jt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],v=s[1],b=s[4],S=s[7],E=s[2],T=s[5],_=s[8];return r[0]=o*x+a*v+l*E,r[3]=o*m+a*b+l*T,r[6]=o*f+a*S+l*_,r[1]=c*x+h*v+u*E,r[4]=c*m+h*b+u*T,r[7]=c*f+h*S+u*_,r[2]=d*x+p*v+g*E,r[5]=d*m+p*b+g*T,r[8]=d*f+p*S+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sl.makeScale(t,e)),this}rotate(t){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sl=new jt,uh=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){let n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:t,whitePoint:i,transfer:er,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var le=Gf();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var es,Co=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{es===void 0&&(es=ys("canvas")),es.width=t.width,es.height=t.height;let s=es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=es}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ys("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ei(e[i]/255)*255):e[i]=ei(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vf=0,Ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Co.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var Wf=0,ol=new F,sn=class n extends Cn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=fn,s=fn,r=Ie,o=Mn,a=Nn,l=an,c=n.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Ds(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ni:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case Hi:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ni:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case Hi:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Yl;sn.DEFAULT_ANISOTROPY=1;var we=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,S=(p+1)/2,E=(f+1)/2,T=(h+d)/4,_=(u+x)/4,w=(g+m)/4;return b>S&&b>E?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=_/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=_/r,s=w/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Po=class extends Cn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new sn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Po{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},nr=class extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xe=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,h,u,d,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,p,g,x,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xf,t,qf)}lookAt(t,e,i){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),fi.crossVectors(i,hn),fi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),fi.crossVectors(i,hn)),fi.normalize(),Zr.crossVectors(hn,fi),s[0]=fi.x,s[4]=Zr.x,s[8]=hn.x,s[1]=fi.y,s[5]=Zr.y,s[9]=hn.y,s[2]=fi.z,s[6]=Zr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],v=i[3],b=i[7],S=i[11],E=i[15],T=s[0],_=s[4],w=s[8],L=s[12],R=s[1],P=s[5],z=s[9],q=s[13],C=s[2],D=s[6],H=s[10],k=s[14],et=s[3],V=s[7],rt=s[11],ct=s[15];return r[0]=o*T+a*R+l*C+c*et,r[4]=o*_+a*P+l*D+c*V,r[8]=o*w+a*z+l*H+c*rt,r[12]=o*L+a*q+l*k+c*ct,r[1]=h*T+u*R+d*C+p*et,r[5]=h*_+u*P+d*D+p*V,r[9]=h*w+u*z+d*H+p*rt,r[13]=h*L+u*q+d*k+p*ct,r[2]=g*T+x*R+m*C+f*et,r[6]=g*_+x*P+m*D+f*V,r[10]=g*w+x*z+m*H+f*rt,r[14]=g*L+x*q+m*k+f*ct,r[3]=v*T+b*R+S*C+E*et,r[7]=v*_+b*P+S*D+E*V,r[11]=v*w+b*z+S*H+E*rt,r[15]=v*L+b*q+S*k+E*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15],v=l*p-c*d,b=a*p-c*u,S=a*d-l*u,E=o*p-c*h,T=o*d-l*h,_=o*u-a*h;return e*(x*v-m*b+f*S)-i*(g*v-m*E+f*T)+s*(g*b-x*E+f*_)-r*(g*S-x*T+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],v=e*a-i*o,b=e*l-s*o,S=e*c-r*o,E=i*l-s*a,T=i*c-r*a,_=s*c-r*l,w=h*x-u*g,L=h*m-d*g,R=h*f-p*g,P=u*m-d*x,z=u*f-p*x,q=d*f-p*m,C=v*q-b*z+S*P+E*R-T*L+_*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=(a*q-l*z+c*P)*D,t[1]=(s*z-i*q-r*P)*D,t[2]=(x*_-m*T+f*E)*D,t[3]=(d*T-u*_-p*E)*D,t[4]=(l*R-o*q-c*L)*D,t[5]=(e*q-s*R+r*L)*D,t[6]=(m*S-g*_-f*b)*D,t[7]=(h*_-d*S+p*b)*D,t[8]=(o*z-a*R+c*w)*D,t[9]=(i*R-e*z-r*w)*D,t[10]=(g*T-x*S+f*v)*D,t[11]=(u*S-h*T-p*v)*D,t[12]=(a*L-o*P-l*w)*D,t[13]=(e*P-i*L+s*w)*D,t[14]=(x*b-g*E-m*v)*D,t[15]=(h*E-u*b+d*v)*D,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,v=l*c,b=l*h,S=l*u,E=i.x,T=i.y,_=i.z;return s[0]=(1-(x+f))*E,s[1]=(p+S)*E,s[2]=(g-b)*E,s[3]=0,s[4]=(p-S)*T,s[5]=(1-(d+f))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+b)*_,s[9]=(m-v)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ns.set(s[0],s[1],s[2]).length(),a=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),En.copy(this);let c=1/o,h=1/a,u=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=yn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),p=(i+s)/(i-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=yn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===yn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===xs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ns=new F,En=new xe,Xf=new F(0,0,0),qf=new F(1,1,1),fi=new F,Zr=new F,hn=new F,fh=new xe,ph=new ke,Bn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ph.setFromEuler(this),this.setFromQuaternion(ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yf=0,mh=new F,is=new ke,Jn=new xe,Jr=new F,Xs=new F,Zf=new F,Jf=new ke,gh=new F(1,0,0),_h=new F(0,1,0),xh=new F(0,0,1),yh={type:"added"},Kf={type:"removed"},ss={type:"childadded",child:null},al={type:"childremoved",child:null},Le=class n extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Bn,i=new ke,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new jt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(gh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(xh,t)}translateOnAxis(t,e){return mh.copy(t).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Jr.copy(t):Jr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Xs,Jr,this.up):Jn.lookAt(Jr,Xs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Jn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yh),ss.child=t,this.dispatchEvent(ss),ss.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kf),al.child=t,this.dispatchEvent(al),al.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new F(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($f)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function ll(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=oc(t,1),e=se(e,0,1),i=se(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ll(o,r,t+1/3),this.g=ll(o,r,t),this.b=ll(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=Eu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return le.workingToColorSpace(Ze.copy(this),t),Math.round(se(Ze.r*255,0,255))*65536+Math.round(se(Ze.g*255,0,255))*256+Math.round(se(Ze.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Ze.copy(this),e);let i=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ge){le.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,s=Ze.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Kr);let i=js(pi.h,Kr.h,e),s=js(pi.s,Kr.s,e),r=js(pi.l,Kr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Yt;Yt.NAMES=Eu;var ir=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},An=new F,Kn=new F,cl=new F,$n=new F,rs=new F,os=new F,vh=new F,hl=new F,ul=new F,dl=new F,fl=new we,pl=new we,ml=new we,xi=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),An.subVectors(t,e),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){An.subVectors(s,e),Kn.subVectors(i,e),cl.subVectors(t,e);let o=An.dot(An),a=An.dot(Kn),l=An.dot(cl),c=Kn.dot(Kn),h=Kn.dot(cl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return fl.setScalar(0),pl.setScalar(0),ml.setScalar(0),fl.fromBufferAttribute(t,e),pl.fromBufferAttribute(t,i),ml.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fl,r.x),o.addScaledVector(pl,r.y),o.addScaledVector(ml,r.z),o}static isFrontFacing(t,e,i,s){return An.subVectors(i,e),Kn.subVectors(t,e),An.cross(Kn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,i),os.subVectors(r,i),hl.subVectors(t,i);let l=rs.dot(hl),c=os.dot(hl);if(l<=0&&c<=0)return e.copy(i);ul.subVectors(t,s);let h=rs.dot(ul),u=os.dot(ul);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(rs,o);dl.subVectors(t,r);let p=rs.dot(dl),g=os.dot(dl);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(os,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return vh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(vh,a);let f=1/(m+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),jr.subVectors(this.max,qs),as.subVectors(t.a,qs),ls.subVectors(t.b,qs),cs.subVectors(t.c,qs),mi.subVectors(ls,as),gi.subVectors(cs,ls),Oi.subVectors(as,cs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Oi.z,Oi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Oi.z,0,-Oi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Oi.y,Oi.x,0];return!gl(e,as,ls,cs,jr)||(e=[1,0,0,0,1,0,0,0,1],!gl(e,as,ls,cs,jr))?!1:(Qr.crossVectors(mi,gi),e=[Qr.x,Qr.y,Qr.z],gl(e,as,ls,cs,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},jn=[new F,new F,new F,new F,new F,new F,new F,new F],Rn=new F,$r=new vn,as=new F,ls=new F,cs=new F,mi=new F,gi=new F,Oi=new F,qs=new F,jr=new F,Qr=new F,Bi=new F;function gl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bi.fromArray(n,r);let a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=i.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pe=new F,to=new Xt,jf=0,Se=class extends Cn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yu,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=t!==void 0?lc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Tu(t,this.array)}};var sr=class extends Se{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var rr=class extends Se{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ce=class extends Se{constructor(t,e,i){super(new Float32Array(t),e,i)}},Qf=new vn,Ys=new F,_l=new F,yi=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Qf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ys,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(_l)),this.expandByPoint(Ys.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tp=0,xn=new xe,xl=new Le,hs=new F,un=new vn,Zs=new vn,ze=new F,de=class n extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tf(t)?rr:sr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return xl.lookAt(t),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(un.min,Zs.min),un.expandByPoint(ze),ze.addVectors(un.max,Zs.max),un.expandByPoint(ze)):(un.expandByPoint(Zs.min),un.expandByPoint(Zs.max))}un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),ze.add(hs)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Se(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new F,l[L]=new F;let h=new F,u=new F,d=new F,p=new Xt,g=new Xt,x=new Xt,m=new F,f=new F;function v(L,R,P){c[L]=c[R]=c[P]=1,h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,P),p.fromBufferAttribute(r,L),g.fromBufferAttribute(r,R),x.fromBufferAttribute(r,P),u.sub(h),d.sub(h),g.sub(p),x.sub(p);let z=1/(g.x*x.y-x.x*g.y);isFinite(z)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(z),f.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(z),a[L].add(m),a[R].add(m),a[P].add(m),l[L].add(f),l[R].add(f),l[P].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,R=b.length;L<R;++L){let P=b[L],z=P.start,q=P.count;for(let C=z,D=z+q;C<D;C+=3)v(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let S=new F,E=new F,T=new F,_=new F;function w(L){T.fromBufferAttribute(s,L),_.copy(T);let R=a[L];S.copy(R),S.sub(T.multiplyScalar(T.dot(R))).normalize(),E.crossVectors(_,R);let z=E.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,z)}for(let L=0,R=i.count;L<R;++L)c[L]&&w(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Se(d,h,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yl=new F,ep=new F,np=new jt,dn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=yl.subVectors(i,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(yl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||np.getNormalMatrix(t),s=this.coplanarPoint(yl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ip=0,Pn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Ps,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new dn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Qn=new F,vl=new F,eo=new F,no=new F,si=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){vl.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),no.copy(this.origin).sub(vl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=no.dot(this.direction),l=-no.dot(eo),c=no.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vl).addScaledVector(eo,d),p}intersectSphere(t,e){if(t.radius<0)return null;Qn.subVectors(t.center,this.origin);let i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,p=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,f=i.x-o.x,v=i.y-o.y,b=i.z-o.z,S=Math.abs(l),E=Math.abs(c),T=Math.abs(h),_,w,L,R,P,z,q,C,D,H,k,et;if(S>=E&&S>=T?(L=l,z=u,D=g,et=f,l>=0?(_=c,w=h,R=d,P=p,q=x,C=m,H=v,k=b):(_=h,w=c,R=p,P=d,q=m,C=x,H=b,k=v)):E>=T?(L=c,z=d,D=x,et=v,c>=0?(_=h,w=l,R=p,P=u,q=m,C=g,H=b,k=f):(_=l,w=h,R=u,P=p,q=g,C=m,H=f,k=b)):(L=h,z=p,D=m,et=b,h>=0?(_=l,w=c,R=u,P=d,q=g,C=x,H=f,k=v):(_=c,w=l,R=d,P=u,q=x,C=g,H=v,k=f)),L===0)return null;let V=_/L,rt=w/L,ct=1/L,Pt=R-V*z,kt=P-rt*z,K=q-V*D,ht=C-rt*D,Tt=H-V*et,Dt=k-rt*et,I=Tt*ht-Dt*K,U=Pt*Dt-kt*Tt,j=K*kt-ht*Pt;if(s){if(I<0||U<0||j<0)return null}else if((I<0||U<0||j<0)&&(I>0||U>0||j>0))return null;let G=I+U+j;if(G===0)return null;let J=ct*(I*z+U*D+j*et);return(G>0?J<0:J>0)?null:this.at(J/G,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mh=new xe,zi=new si,io=new yi,Sh=new F,so=new F,ro=new F,oo=new F,Ml=new F,ao=new F,bh=new F,lo=new F,Ee=class extends Le{constructor(t=new de,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ml.fromBufferAttribute(u,t),o?ao.addScaledVector(Ml,h):ao.addScaledVector(Ml.sub(e),h))}e.add(ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(io.containsPoint(zi.origin)===!1&&(zi.intersectSphere(io,Sh)===null||zi.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(Mh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Mh),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,E=b;S<E;S+=3){let T=a.getX(S),_=a.getX(S+1),w=a.getX(S+2);s=co(this,f,t,i,c,h,u,T,_,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);s=co(this,o,t,i,c,h,u,v,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,E=b;S<E;S+=3){let T=S,_=S+1,w=S+2;s=co(this,f,t,i,c,h,u,T,_,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=m,b=m+1,S=m+2;s=co(this,o,t,i,c,h,u,v,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function sp(n,t,e,i,s,r,o,a){let l;if(t.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ai,a),l===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(lo);return c<e.near||c>e.far?null:{distance:c,point:lo.clone(),object:n}}function co(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,so),n.getVertexPosition(l,ro),n.getVertexPosition(c,oo);let h=sp(n,t,e,i,so,ro,oo,bh);if(h){let u=new F;xi.getBarycoord(bh,so,ro,oo,u),s&&(h.uv=xi.getInterpolatedAttribute(s,a,l,c,u,new Xt)),r&&(h.uv1=xi.getInterpolatedAttribute(r,a,l,c,u,new Xt)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};xi.getNormal(so,ro,oo,d.normal),h.face=d,h.barycoord=u}return h}var Lo=class extends sn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ae,h=Ae,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=new yi,rp=new Xt(.5,.5),ho=new F,Mi=class{constructor(t=new dn,e=new dn,i=new dn,s=new dn,r=new dn,o=new dn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],v=r[12],b=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-o,p-h,f-g,E-v).normalize(),s[1].setComponents(c+o,p+h,f+g,E+v).normalize(),s[2].setComponents(c+a,p+u,f+x,E+b).normalize(),s[3].setComponents(c-a,p-u,f-x,E-b).normalize(),i)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,p-d,f-m,E-S).normalize();else if(s[4].setComponents(c-l,p-d,f-m,E-S).normalize(),e===yn)s[5].setComponents(c+l,p+d,f+m,E+S).normalize();else if(e===xs)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);let e=rp.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wh=new xe,Do=class n{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];wh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Mi),i[s].setFromProjectionMatrix(wh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Mi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var zn=class extends Pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},No=new F,Uo=new F,Th=new xe,Js=new si,uo=new yi,Sl=new F,Eh=new F,Gi=class extends Le{constructor(t=new de,e=new zn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)No.fromBufferAttribute(e,s-1),Uo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=No.distanceTo(Uo);t.setAttribute("lineDistance",new ce(i,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,t.ray.intersectsSphere(uo)===!1)return;Th.copy(s).invert(),Js.copy(t.ray).applyMatrix4(Th);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=h.getX(x),v=h.getX(x+1),b=fo(this,t,Js,l,f,v,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=fo(this,t,Js,l,x,m,g-1);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=fo(this,t,Js,l,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){let x=fo(this,t,Js,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fo(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(No.fromBufferAttribute(a,s),Uo.fromBufferAttribute(a,r),e.distanceSqToSegment(No,Uo,Sl,Eh)>i)return;Sl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Sl);if(!(c<t.near||c>t.far))return{distance:c,point:Eh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ah=new F,Rh=new F,Vi=class extends Gi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ah.fromBufferAttribute(e,s),Rh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ah.distanceTo(Rh);t.setAttribute("lineDistance",new ce(i,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Wi=class extends Pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ch=new xe,Rl=new si,po=new yi,mo=new F,Ts=class extends Le{constructor(t=new de,e=new Wi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;Ch.copy(s).invert(),Rl.copy(t.ray).applyMatrix4(Ch);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let m=c.getX(g);mo.fromBufferAttribute(u,m),Ph(mo,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)mo.fromBufferAttribute(u,g),Ph(mo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ph(n,t,e,i,s,r,o){let a=Rl.distanceSqToPoint(n);if(a<e){let l=new F;Rl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var or=class extends sn{constructor(t=[],e=Ji,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ri=class extends sn{constructor(t,e,i=In,s,r,o,a=Ae,l=Ae,c,h=ii,u=1){if(h!==ii&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ar=class extends ri{constructor(t,e=In,i=Ji,s,r,o=Ae,a=Ae,l,c=ii){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},lr=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Es=class n extends de{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(x,m,f,v,b,S,E,T,_,w,L){let R=S/_,P=E/w,z=S/2,q=E/2,C=T/2,D=_+1,H=w+1,k=0,et=0,V=new F;for(let rt=0;rt<H;rt++){let ct=rt*P-q;for(let Pt=0;Pt<D;Pt++){let kt=Pt*R-z;V[x]=kt*v,V[m]=ct*b,V[f]=C,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[f]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(Pt/_),u.push(1-rt/w),k+=1}}for(let rt=0;rt<w;rt++)for(let ct=0;ct<_;ct++){let Pt=d+ct+D*rt,kt=d+ct+D*(rt+1),K=d+(ct+1)+D*(rt+1),ht=d+(ct+1)+D*rt;l.push(Pt,kt,ht),l.push(kt,K,ht),et+=6}a.addGroup(p,et,L),p+=et,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var cr=class n extends de{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=i/2,f=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(p,2));function v(){let S=new F,E=new F,T=0,_=(e-t)/i;for(let w=0;w<=r;w++){let L=[],R=w/r,P=R*(e-t)+t;for(let z=0;z<=s;z++){let q=z/s,C=q*l+a,D=Math.sin(C),H=Math.cos(C);E.x=P*D,E.y=-R*i+m,E.z=P*H,u.push(E.x,E.y,E.z),S.set(D,_,H).normalize(),d.push(S.x,S.y,S.z),p.push(q,1-R),L.push(g++)}x.push(L)}for(let w=0;w<s;w++)for(let L=0;L<r;L++){let R=x[L][w],P=x[L+1][w],z=x[L+1][w+1],q=x[L][w+1];(t>0||L!==0)&&(h.push(R,P,q),T+=3),(e>0||L!==r-1)&&(h.push(P,z,q),T+=3)}c.addGroup(f,T,0),f+=T}function b(S){let E=g,T=new Xt,_=new F,w=0,L=S===!0?t:e,R=S===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*R,0),d.push(0,R,0),p.push(.5,.5),g++;let P=g;for(let z=0;z<=s;z++){let C=z/s*l+a,D=Math.cos(C),H=Math.sin(C);_.x=L*H,_.y=m*R,_.z=L*D,u.push(_.x,_.y,_.z),d.push(0,R,0),T.x=D*.5+.5,T.y=H*.5*R+.5,p.push(T.x,T.y),g++}for(let z=0;z<s;z++){let q=E+z,C=P+z;S===!0?h.push(C,C+1,q):h.push(C+1,C,q),w+=3}c.addGroup(f,w,S===!0?1:2),f+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hr=class n extends de{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let v=f*d-o;for(let b=0;b<c;b++){let S=b*u-r;g.push(S,-v,0),x.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let b=v+c*f,S=v+c*(f+1),E=v+1+c*(f+1),T=v+1+c*f;p.push(b,S,T),p.push(S,E,T)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ur=class n extends de{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,d=new F,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){let v=[],b=f/i,S=o+b*a,E=t*Math.cos(S),T=Math.sqrt(t*t-E*E),_=0;f===0&&o===0?_=.5/e:f===i&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){let L=w/e,R=s+L*r;u.x=-T*Math.cos(R),u.y=E,u.z=T*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(L+_,1-b),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<e;v++){let b=h[f][v+1],S=h[f][v],E=h[f+1][v],T=h[f+1][v+1];(f!==0||o>0)&&p.push(b,S,T),(f!==i-1||l<Math.PI)&&p.push(S,E,T)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function $i(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Ih(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ih(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function je(n){let t={};for(let e=0;e<n.length;e++){let i=$i(n[e]);for(let s in i)t[s]=i[s]}return t}function Ih(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function op(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Au={clone:$i,merge:je},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new we().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fo=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xi=class extends Pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var oi=class extends Pn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=$o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Oo=class extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function us(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function go(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Si=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Si{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tl,endingEnd:Tl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case El:r=t,a=2*e-i;break;case Al:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case El:o=t,l=2*i-e;break;case Al:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*x+.5*g,S=p*m-p*x;for(let E=0;E!==a;++E)r[E]=f*o[h+E]+v*o[c+E]+b*o[l+E]+S*o[u+E];return r}},ko=class extends Si{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ho=class extends Si{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Go=class extends Si{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let d=a*2,p=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],f=p*d+g*2,v=u[f],b=u[f+1],S=t*d+g*2,E=h[S],T=h[S+1],_=hp(i,e,v,E,s);r[g]=Ru(_,x,b,T,m)}return r}};function Ru(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function cp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function hp(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Ru(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=cp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var mn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=us(e,this.TimeBufferType),this.values=us(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:us(t.times,Array),values:us(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),go(t.settings)&&(i.settings={inTangents:us(t.settings.inTangents,Array),outTangents:us(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Go(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Ro:e=this.InterpolantFactoryMethodLinear;break;case yo:e=this.InterpolantFactoryMethodSmooth;break;case wl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return yo;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;go(this.settings)&&(Lh(this.settings.inTangents,t),Lh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;go(this.settings)&&(Dh(this.settings.inTangents,t),Dh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ef(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Dh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Ro;var bi=class extends mn{constructor(t,e,i){super(t,e,i)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Qs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends mn{constructor(t,e,i,s){super(t,e,i,s)}};Vo.prototype.ValueTypeName="color";var Wo=class extends mn{constructor(t,e,i,s){super(t,e,i,s)}};Wo.prototype.ValueTypeName="number";var Xo=class extends Si{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ke.slerpFlat(r,0,o,c-a,o,c,l);return r}},dr=class extends mn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}};dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends mn{constructor(t,e,i){super(t,e,i)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Qs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends mn{constructor(t,e,i,s){super(t,e,i,s)}};qo.prototype.ValueTypeName="vector";var gs={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(Nh(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!Nh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Nh(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Yo=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cu=new Yo,rn=class{constructor(t){this.manager=t!==void 0?t:Cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};rn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ti={},Cl=class extends Error{constructor(t,e){super(t),this.response=e}},qi=class extends rn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=gs.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:i,onError:s});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:i,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Wt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ti[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,x=0,m=new ReadableStream({start(f){v();function v(){u.read().then(({done:b,value:S})=>{if(b)f.close();else{x+=S.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let T=0,_=h.length;T<_;T++){let w=h[T];w.onProgress&&w.onProgress(E)}f.enqueue(S),v()}},b=>{f.error(b)})}}});return new Response(m)}else throw new Cl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{gs.add(`file:${t}`,c);let h=ti[t];delete ti[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=ti[t];if(h===void 0)throw this.manager.itemError(t),c;delete ti[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ds=new WeakMap,Zo=class extends rn{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=gs.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=ds.get(o);u===void 0&&(u=[],ds.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=ys("img");function l(){h(),e&&e(this);let u=ds.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}ds.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),gs.remove(`image:${t}`);let d=ds.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(u)}ds.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),gs.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var fr=class extends rn{constructor(t){super(t)}load(t,e,i,s){let r=new sn,o=new Zo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},pr=class extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},mr=class extends pr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bl=new xe,Uh=new F,Fh=new F,Jo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mi,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(bl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===xs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_o=new F,xo=new ke,On=new F,gr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_o,xo,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(_o,xo,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_i=new F,Oh=new Xt,Bh=new Xt,nn=class extends gr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,Bh),e.subVectors(Bh,Oh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($s*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var _r=class extends gr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Pl=class extends Jo{constructor(){super(new _r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xr=class extends pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Pl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var fs=-90,ps=1,As=class extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(fs,ps,t,e);s.layers=this.layers,this.add(s);let r=new nn(fs,ps,t,e);r.layers=this.layers,this.add(r);let o=new nn(fs,ps,t,e);o.layers=this.layers,this.add(o);let a=new nn(fs,ps,t,e);a.layers=this.layers,this.add(a);let l=new nn(fs,ps,t,e);l.layers=this.layers,this.add(l);let c=new nn(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ko=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var hc="\\[\\]\\.:\\/",up=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",dp="[^"+hc.replace("\\.","")+"]",fp=/((?:WC+[\/:])*)/.source.replace("WC",uc),pp=/(WCOD+)?/.source.replace("WCOD",dp),mp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),gp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),_p=new RegExp("^"+fp+pp+mp+gp+"$"),xp=["material","materials","bones","map"],Il=class{constructor(t,e,i){let s=i||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},be=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(up,"")}static parseTrackName(t){let e=_p.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);xp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Il;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ly=new Float32Array(1);var zh=new xe,yr=class{constructor(t,e,i=0,s=1/0){this.ray=new si(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(t,e=!0,i=[]){return Ll(t,this,i,e),i.sort(kh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ll(t[s],this,i,e);return i.sort(kh),i}};function kh(n,t){return n.distance-t.distance}function Ll(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ll(r[o],t,e,!0)}}var Rs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Dl=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var vr=class extends Vi{constructor(t=10,e=10,i=4473924,s=8947848){i=new Yt(i),s=new Yt(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let x=d===r?i:s;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}let h=new de;h.setAttribute("position",new ce(l,3)),h.setAttribute("color",new ce(c,3));let u=new zn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Mr=class extends Vi{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new de;r.setIndex(new Se(i,1)),r.setAttribute("position",new ce(s,3)),super(r,new zn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Sr=class extends Cn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function dc(n,t,e,i){let s=yp(i);switch(e){case jl:return n*t;case tc:return n*t/s.components*s.byteLength;case sa:return n*t/s.components*s.byteLength;case Ri:return n*t*2/s.components*s.byteLength;case ra:return n*t*2/s.components*s.byteLength;case Ql:return n*t*3/s.components*s.byteLength;case Nn:return n*t*4/s.components*s.byteLength;case oa:return n*t*4/s.components*s.byteLength;case Tr:case Er:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case la:case ha:return Math.max(n,16)*Math.max(t,8)/4;case aa:case ca:return Math.max(n,8)*Math.max(t,8)/2;case ua:case da:case pa:case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fa:case Cr:case ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ia:case La:case Da:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Na:case Ua:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Pr:case Fa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yp(n){switch(n){case an:case Zl:return{byteLength:1,components:1};case Ls:case Jl:case Dn:return{byteLength:2,components:1};case na:case ia:return{byteLength:2,components:4};case In:case ea:case Ln:return{byteLength:4,components:1};case Kl:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $u(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ap(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Em=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ug=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Ip,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Np,aomap_pars_fragment:Up,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:kp,iridescence_fragment:Hp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:Zp,color_pars_vertex:Jp,color_vertex:Kp,common:$p,defaultnormal_vertex:jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:tm,emissivemap_fragment:em,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:lm,envmap_physical_pars_fragment:ym,envmap_vertex:cm,fog_vertex:hm,fog_pars_vertex:um,fog_fragment:dm,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:_m,lights_pars_begin:xm,lights_toon_fragment:vm,lights_toon_pars_fragment:Mm,lights_phong_fragment:Sm,lights_phong_pars_fragment:bm,lights_physical_fragment:wm,lights_physical_pars_fragment:Tm,lights_fragment_begin:Em,lights_fragment_maps:Am,lights_fragment_end:Rm,lightprobes_pars_fragment:Cm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Dm,map_fragment:Nm,map_pars_fragment:Um,map_particle_fragment:Fm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:km,morphcolor_vertex:Hm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:tg,opaque_fragment:eg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:sg,dithering_fragment:rg,dithering_pars_fragment:og,roughnessmap_fragment:ag,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:hg,shadowmap_vertex:ug,shadowmask_pars_fragment:dg,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:_g,specularmap_pars_fragment:xg,tonemapping_fragment:yg,tonemapping_pars_fragment:vg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:bg,uv_pars_vertex:wg,uv_vertex:Tg,worldpos_vertex:Eg,background_vert:Ag,background_frag:Rg,backgroundCube_vert:Cg,backgroundCube_frag:Pg,cube_vert:Ig,cube_frag:Lg,depth_vert:Dg,depth_frag:Ng,distance_vert:Ug,distance_frag:Fg,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:kg,meshbasic_vert:Hg,meshbasic_frag:Gg,meshlambert_vert:Vg,meshlambert_frag:Wg,meshmatcap_vert:Xg,meshmatcap_frag:qg,meshnormal_vert:Yg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:Kg,meshphysical_vert:$g,meshphysical_frag:jg,meshtoon_vert:Qg,meshtoon_frag:t0,points_vert:e0,points_frag:n0,shadow_vert:i0,shadow_frag:s0,sprite_vert:r0,sprite_frag:o0},Ct={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Vn={basic:{uniforms:je([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:je([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:je([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:je([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:je([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:je([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:je([Ct.points,Ct.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:je([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:je([Ct.common,Ct.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:je([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:je([Ct.sprite,Ct.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:je([Ct.common,Ct.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:je([Ct.lights,Ct.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Vn.physical={uniforms:je([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Oa={r:0,b:0,g:0},a0=new xe,ju=new jt;ju.set(-1,0,0,0,1,0,0,0,1);function l0(n,t,e,i,s,r){let o=new Yt(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function p(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let S=v.backgroundBlurriness>0;b=t.get(b,S)}return b}function g(v){let b=!1,S=p(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),b=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,b){let S=p(b);S&&S.isCubeTexture?(c===void 0&&(c=new Ee(new Es(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:$i(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(b.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ju),c.material.toneMapped=le.getTransfer(S.colorSpace)!==_e,(h!==S||u!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ee(new hr(2,2),new kn({name:"BackgroundMaterial",uniforms:$i(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=le.getTransfer(S.colorSpace)!==_e,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(Oa,cc(n)),e.buffers.color.setClear(Oa.r,Oa.g,Oa.b,b,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:f}}function c0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(P,z,q,C,D){let H=!1,k=u(P,C,q,z);r!==k&&(r=k,c(r.object)),H=p(P,C,q,D),H&&g(P,C,q,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(P,z,q,C),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,z,q,C){let D=C.wireframe===!0,H=i[z.id];H===void 0&&(H={},i[z.id]=H);let k=P.isInstancedMesh===!0?P.id:0,et=H[k];et===void 0&&(et={},H[k]=et);let V=et[q.id];V===void 0&&(V={},et[q.id]=V);let rt=V[D];return rt===void 0&&(rt=d(l()),V[D]=rt),rt}function d(P){let z=[],q=[],C=[];for(let D=0;D<e;D++)z[D]=0,q[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:C,object:P,attributes:{},index:null}}function p(P,z,q,C){let D=r.attributes,H=z.attributes,k=0,et=q.getAttributes();for(let V in et)if(et[V].location>=0){let ct=D[V],Pt=H[V];if(Pt===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Pt=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Pt=P.instanceColor)),ct===void 0||ct.attribute!==Pt||Pt&&ct.data!==Pt.data)return!0;k++}return r.attributesNum!==k||r.index!==C}function g(P,z,q,C){let D={},H=z.attributes,k=0,et=q.getAttributes();for(let V in et)if(et[V].location>=0){let ct=H[V];ct===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor));let Pt={};Pt.attribute=ct,ct&&ct.data&&(Pt.data=ct.data),D[V]=Pt,k++}r.attributes=D,r.attributesNum=k,r.index=C}function x(){let P=r.newAttributes;for(let z=0,q=P.length;z<q;z++)P[z]=0}function m(P){f(P,0)}function f(P,z){let q=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;q[P]=1,C[P]===0&&(n.enableVertexAttribArray(P),C[P]=1),D[P]!==z&&(n.vertexAttribDivisor(P,z),D[P]=z)}function v(){let P=r.newAttributes,z=r.enabledAttributes;for(let q=0,C=z.length;q<C;q++)z[q]!==P[q]&&(n.disableVertexAttribArray(q),z[q]=0)}function b(P,z,q,C,D,H,k){k===!0?n.vertexAttribIPointer(P,z,q,D,H):n.vertexAttribPointer(P,z,q,C,D,H)}function S(P,z,q,C){x();let D=C.attributes,H=q.getAttributes(),k=z.defaultAttributeValues;for(let et in H){let V=H[et];if(V.location>=0){let rt=D[et];if(rt===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),rt!==void 0){let ct=rt.normalized,Pt=rt.itemSize,kt=t.get(rt);if(kt===void 0)continue;let K=kt.buffer,ht=kt.type,Tt=kt.bytesPerElement,Dt=ht===n.INT||ht===n.UNSIGNED_INT||rt.gpuType===ea;if(rt.isInterleavedBufferAttribute){let I=rt.data,U=I.isInterleavedBuffer===!0?I.stride:I.itemSize,j=rt.offset;if(I.isInstancedInterleavedBuffer||I.isInstancedBufferAttribute){for(let G=0;G<V.locationSize;G++)f(V.location+G,I.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let G=0;G<V.locationSize;G++)m(V.location+G);n.bindBuffer(n.ARRAY_BUFFER,K);for(let G=0;G<V.locationSize;G++)b(V.location+G,Pt/V.locationSize,ht,ct,U*Tt,(j+Pt/V.locationSize*G)*Tt,Dt)}else{if(rt.isInstancedBufferAttribute){for(let I=0;I<V.locationSize;I++)f(V.location+I,rt.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let I=0;I<V.locationSize;I++)m(V.location+I);n.bindBuffer(n.ARRAY_BUFFER,K);for(let I=0;I<V.locationSize;I++)b(V.location+I,Pt/V.locationSize,ht,ct,Pt*Tt,Pt/V.locationSize*I*Tt,Dt)}}else if(k!==void 0){let ct=k[et];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(V.location,ct);break;case 3:n.vertexAttrib3fv(V.location,ct);break;case 4:n.vertexAttrib4fv(V.location,ct);break;default:n.vertexAttrib1fv(V.location,ct)}}}}v()}function E(){L();for(let P in i){let z=i[P];for(let q in z){let C=z[q];for(let D in C){let H=C[D];for(let k in H)h(H[k].object),delete H[k];delete C[D]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;let z=i[P.id];for(let q in z){let C=z[q];for(let D in C){let H=C[D];for(let k in H)h(H[k].object),delete H[k];delete C[D]}}delete i[P.id]}function _(P){for(let z in i){let q=i[z];for(let C in q){let D=q[C];if(D[P.id]===void 0)continue;let H=D[P.id];for(let k in H)h(H[k].object),delete H[k];delete D[P.id]}}}function w(P){for(let z in i){let q=i[z],C=P.isInstancedMesh===!0?P.id:0,D=q[C];if(D!==void 0){for(let H in D){let k=D[H];for(let et in k)h(k[et].object),delete k[et];delete D[H]}delete q[C],Object.keys(q).length===0&&delete i[z]}}}function L(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function h0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function u0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Nn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let w=_===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==an&&_!==Ln&&!w&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:S,maxSamples:E,samples:T}}function d0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new dn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,b=v*4,S=f.clippingState||null;l.value=S,S=h(g,d,b,p);for(let E=0;E!==b;++E)S[E]=e[E];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,S=p;b!==x;++b,S+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Nr=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Es(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Yi});r.uniforms.tEquirect.value=e;let o=new Ee(s,r),a=e.minFilter;return e.minFilter===Mn&&(e.minFilter=Ie),new As(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Pu=256,f0=3,p0=20,Qu=256,td=16,m0=3,g0=new F,_0=new Yt,za=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new As(1,10,null),this._boxMesh=new Ee(new Es(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=g0}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(_0));let m=new As(i,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Pu,ac(t))}_fromTexture(t,e){t.mapping===Ji||t.mapping===Is?this._setSize(t.image.length===0?Pu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Iu(t,!1,!1),i=Math.log2(t)-f0;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Iu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ji||t.mapping===Is?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=x0(),this._integrationMaterial=y0());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/td);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-m0)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Qu*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=v0());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Iu(n,t,e){return new Nr(n,{minFilter:Mn,generateMipmaps:t,type:Dn,colorSpace:tr,depthBuffer:e})}function Ur(n,t,e){return new kn({name:n,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:on,blending:Yi,depthTest:!1,depthWrite:!1})}function x0(){return Ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function y0(){return Ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:td}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function v0(){return Ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${p0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Lu(){return Ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Du(){return Ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function M0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===jo||p===Qo)if(t.has(d)){let g=t.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new Nr(g.height);return x.fromEquirectangularTexture(n,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,g=p===jo||p===Qo,x=p===Ji||p===Is;if(g||x){let m=e.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new za(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new za(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,p){return p===jo?d.mapping=Ji:p===Qo&&(d.mapping=Is),d}function l(d){let p=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&p++;return p===g}function c(d){let p=d.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function S0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ks("WebGLRenderer: "+i+" extension not supported."),s}}}function b0(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)t.update(x[m],n.ARRAY_BUFFER)}function u(g){let x=g.index,m=g.attributes.position,f=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?rr:sr,S=new b(Math.ceil(v/3)*6,1),E=S.array;if(x!==null){let _=x.array;f=x.version;for(let w=0,L=0;w<v;w+=3){let R=_[w+0],P=_[w+1],z=_[w+2];E[L++]=R,E[L++]=P,E[L++]=P,E[L++]=z,E[L++]=z,E[L++]=R}}else{f=m.version;for(let _=0,w=0;_<v;_+=3){let L=_+0,R=_+1,P=_+2;E[w++]=L,E[w++]=R,E[w++]=R,E[w++]=P,E[w++]=P,E[w++]=L}}S.version=f;let T=r.get(g);T&&t.remove(T),r.set(g,S)}function d(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&u(g)}else u(g);return r.get(g)}function p(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function w0(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,u*o,p),e.update(d,i,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function T0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function E0(n,t,e){let i=new WeakMap,s=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let L=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let S=a.attributes.position.count*b,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*E*4*u),_=new nr(T,S,E,u);_.type=Ln,_.needsUpdate=!0;let w=b*4;for(let R=0;R<u;R++){let P=m[R],z=f[R],q=v[R],C=S*E*4*R;for(let D=0;D<P.count;D++){let H=D*w;p===!0&&(s.fromBufferAttribute(P,D),T[C+H+0]=s.x,T[C+H+1]=s.y,T[C+H+2]=s.z,T[C+H+3]=0),g===!0&&(s.fromBufferAttribute(z,D),T[C+H+4]=s.x,T[C+H+5]=s.y,T[C+H+6]=s.z,T[C+H+7]=0),x===!0&&(s.fromBufferAttribute(q,D),T[C+H+8]=s.x,T[C+H+9]=s.y,T[C+H+10]=s.z,T[C+H+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Xt(S,E)},i.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function A0(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var R0={[kl]:"LINEAR_TONE_MAPPING",[Hl]:"REINHARD_TONE_MAPPING",[Gl]:"CINEON_TONE_MAPPING",[Vl]:"ACES_FILMIC_TONE_MAPPING",[Xl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Wl]:"CUSTOM_TONE_MAPPING"};function C0(n,t,e,i,s,r){let o=new pn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new de;h.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ce([0,2,0,0,2,0],2));let u=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ee(h,u),p=new _r(-1,1,1,-1,0,1),g=null,x=null,m=!1,f,v=null,b=[],S=!1;this.setSize=function(E,T){o.setSize(E,T),a!==null&&a.setSize(E,T),l!==null&&l.setSize(E,T);for(let _=0;_<b.length;_++){let w=b[_];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){b=E,S=b.length>0&&b[0].isRenderPass===!0;let T=o.width,_=o.height;b.length>0&&a===null&&(a=new pn(T,_,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(T,_,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&b.some(L=>L.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new ri(T,_),r===!0&&(c.format=ai,c.type=Ki)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let L=0;L<b.length;L++){let R=b[L];R.setSize&&R.setSize(T,_),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,T){if(m||E.toneMapping===Hn&&b.length===0)return!1;if(v=T,T!==null){let _=T.width,w=T.height;(o.width!==_||o.height!==w)&&this.setSize(_,w)}return S===!1&&E.setRenderTarget(o),f=E.toneMapping,E.toneMapping=Hn,!0},this.hasRenderPass=function(){return S},this.end=function(E,T){E.toneMapping=f,m=!0;let _=o,w=a;for(let L=0;L<b.length;L++){let R=b[L];R.enabled!==!1&&(R.render(E,w,_,T),R.needsSwap!==!1&&(_=w,w=w===a?l:a))}if(g!==E.outputColorSpace||x!==E.toneMapping){g=E.outputColorSpace,x=E.toneMapping,u.defines={},le.getTransfer(g)===_e&&(u.defines.SRGB_TRANSFER="");let L=R0[x];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(v),E.render(d,p),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var ed=new sn,nd=new ri(1,1),id=new ar(1),sd=new nr,rd=new Io,od=new or,Nu=[],Uu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function Us(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ha(n,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function P0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function I0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function L0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function D0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function N0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;Bu.set(i),n.uniformMatrix2fv(this.addr,!1,Bu),Ue(e,i)}}function U0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;Ou.set(i),n.uniformMatrix3fv(this.addr,!1,Ou),Ue(e,i)}}function F0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;Fu.set(i),n.uniformMatrix4fv(this.addr,!1,Fu),Ue(e,i)}}function O0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function B0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function z0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function k0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function H0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function G0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function V0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function W0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function Ga(n){return n.version===0&&(n.compareFunction=ic,n.needsUpdate=!0),n}function X0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ga(nd):r=ed,e.setTexture2D(t||r,s)}function q0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||rd,s)}function Y0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ga(id):r=od,e.setTextureCube(t||r,s)}function Z0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||sd,s)}function J0(n){switch(n){case 5126:return P0;case 35664:return I0;case 35665:return L0;case 35666:return D0;case 35674:return N0;case 35675:return U0;case 35676:return F0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return k0;case 5125:return H0;case 36294:return G0;case 36295:return V0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}function K0(n,t){n.uniform1fv(this.addr,t)}function $0(n,t){let e=Us(t,this.size,2);n.uniform2fv(this.addr,e)}function j0(n,t){let e=Us(t,this.size,3);n.uniform3fv(this.addr,e)}function Q0(n,t){let e=Us(t,this.size,4);n.uniform4fv(this.addr,e)}function t_(n,t){let e=Us(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function e_(n,t){let e=Us(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function n_(n,t){let e=Us(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function i_(n,t){n.uniform1iv(this.addr,t)}function s_(n,t){n.uniform2iv(this.addr,t)}function r_(n,t){n.uniform3iv(this.addr,t)}function o_(n,t){n.uniform4iv(this.addr,t)}function a_(n,t){n.uniform1uiv(this.addr,t)}function l_(n,t){n.uniform2uiv(this.addr,t)}function c_(n,t){n.uniform3uiv(this.addr,t)}function h_(n,t){n.uniform4uiv(this.addr,t)}function u_(n,t,e){let i=this.cache,s=t.length,r=Ha(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ga(nd):o=ed;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function d_(n,t,e){let i=this.cache,s=t.length,r=Ha(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rd,r[o])}function f_(n,t,e){let i=this.cache,s=t.length,r=Ha(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ga(id):o=od;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function p_(n,t,e){let i=this.cache,s=t.length,r=Ha(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sd,r[o])}function m_(n){switch(n){case 5126:return K0;case 35664:return $0;case 35665:return j0;case 35666:return Q0;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}var mc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=J0(e.type)}},gc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m_(e.type)}},_c=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},fc=/(\w+)(\])?(\[|\.)?/g;function zu(n,t){n.seq.push(t),n.map[t.id]=t}function g_(n,t,e){let i=n.name,s=i.length;for(fc.lastIndex=0;;){let r=fc.exec(i),o=fc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zu(e,c===void 0?new mc(a,n,t):new gc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new _c(a),zu(e,u)),e=u}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);g_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function ku(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var __=37297,x_=0;function y_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Hu=new jt;function v_(n){le._getMatrix(Hu,le.workingColorSpace,n);let t=`mat3( ${Hu.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case er:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Gu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+y_(n.getShaderSource(t),a)}else return r}function M_(n,t){let e=v_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var S_={[kl]:"Linear",[Hl]:"Reinhard",[Gl]:"Cineon",[Vl]:"ACESFilmic",[Xl]:"AgX",[ql]:"Neutral",[Wl]:"Custom"};function b_(n,t){let e=S_[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ba=new F;function w_(){le.getLuminanceCoefficients(Ba);let n=Ba.x.toFixed(4),t=Ba.y.toFixed(4),e=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function E_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function A_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Dr(n){return n!==""}function Vu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Wu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(R_,C_)}function C_(n,t){let e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return xc(e)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(P_,I_)}function I_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var L_={[br]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function D_(n){return L_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N_={[Is]:"ENVMAP_MODE_REFRACTION"};function U_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":N_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F_={[$o]:"ENVMAP_BLENDING_MULTIPLY",[lu]:"ENVMAP_BLENDING_MIX",[cu]:"ENVMAP_BLENDING_ADD"};function O_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":F_[n.combine]||"ENVMAP_BLENDING_NONE"}function B_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=D_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=U_(e),u=O_(e),d=T_(e),p=E_(r),g=s.createProgram(),x,m,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Dr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(x=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Hn?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),w_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=xc(o),o=Vu(o,e),o=Wu(o,e),a=xc(a),a=Vu(a,e),a=Wu(a,e),o=Xu(o),a=Xu(a),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=f+x+o,b=f+m+a,S=ku(s,s.VERTEX_SHADER,v),E=ku(s,s.FRAGMENT_SHADER,b);s.attachShader(g,S),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(R){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(S)||"",q=s.getShaderInfoLog(E)||"",C=P.trim(),D=z.trim(),H=q.trim(),k=!0,et=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,S,E);else{let V=Gu(s,S,"vertex"),rt=Gu(s,E,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+V+`
`+rt)}else C!==""?Wt("WebGLProgram: Program Info Log:",C):(D===""||H==="")&&(et=!1);et&&(R.diagnostics={runnable:k,programLog:C,vertexShader:{log:D,prefix:x},fragmentShader:{log:H,prefix:m}})}s.deleteShader(S),s.deleteShader(E),_=new Ns(s,g),w=A_(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,__)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}var z_=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new vc(t),e.set(t,i)),i}},vc=class{constructor(t){this.id=z_++,this.code=t,this.usedTimes=0}};function k_(n){return n===Ri||n===Cr||n===Pr}function H_(n,t,e,i,s,r){let o=new bs,a=new yc,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,w,L,R,P,z){let q=R.fog,C=P.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=t.get(_.envMap||D,H),et=d[_.type],V=i.precision;_.precision!==null&&(V=i.getMaxPrecision(_.precision),V!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let rt=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ct=rt!==void 0?rt.length:0,Pt=0;C.morphAttributes.position!==void 0&&(Pt=1),C.morphAttributes.normal!==void 0&&(Pt=2),C.morphAttributes.color!==void 0&&(Pt=3);let kt,K,ht,Tt;if(et){let Rt=Vn[et];kt=Rt.vertexShader,K=Rt.fragmentShader}else{kt=_.vertexShader,K=_.fragmentShader;let Rt=a.getVertexShaderStage(_),ye=a.getFragmentShaderStage(_);a.update(_,Rt,ye),ht=Rt.id,Tt=ye.id}let Dt=n.getRenderTarget(),I=n.state.buffers.depth.getReversed(),U=P.isInstancedMesh===!0,j=P.isBatchedMesh===!0,G=!!_.map,J=!!_.matcap,Z=!!k,tt=Z&&k.isPMREMTexture===!0,ut=!!_.aoMap,at=!!_.lightMap,dt=!!_.bumpMap&&_.wireframe===!1,Et=!!_.normalMap,pt=!!_.displacementMap,qt=!!_.emissiveMap,Qt=!!_.metalnessMap,re=!!_.roughnessMap,he=_.anisotropy>0,O=_.clearcoat>0,At=_.diffuseRoughness>0,Nt=_.dispersion>0,Zt=_.retroreflectivity>0,_t=_.iridescence>0,fe=_.sheen>0,Bt=_.transmission>0,Ht=he&&!!_.anisotropyMap,A=O&&!!_.clearcoatMap,y=O&&!!_.clearcoatNormalMap,X=O&&!!_.clearcoatRoughnessMap,ft=At&&!!_.diffuseRoughnessMap,lt=_t&&!!_.iridescenceMap,xt=_t&&!!_.iridescenceThicknessMap,bt=fe&&!!_.sheenColorMap,it=fe&&!!_.sheenRoughnessMap,st=!!_.specularMap,vt=!!_.specularColorMap,N=!!_.specularIntensityMap,ot=Bt&&!!_.transmissionMap,nt=Bt&&!!_.thicknessMap,Mt=!!_.gradientMap,gt=!!_.alphaMap,yt=_.alphaTest>0,Gt=!!_.alphaHash,ne=!!_.extensions,mt=Hn;_.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(mt=n.toneMapping);let Vt=tt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,ee={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:K,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:Tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:j,batchingColor:j&&P._colorsTexture!==null,instancing:U,instancingColor:U&&P.instanceColor!==null,instancingMorph:U&&P.morphTexture!==null,outputColorSpace:Dt===null?n.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:G,matcap:J,envMap:Z,envMapMode:Z&&k.mapping,envMapPMREM:tt,envMapMaxLod:tt?Vt.length-1:null,envMapSize:tt?Vt[0].width:null,aoMap:ut,lightMap:at,bumpMap:dt,normalMap:Et,displacementMap:pt,emissiveMap:qt,normalMapObjectSpace:Et&&_.normalMapType===du,normalMapTangentSpace:Et&&_.normalMapType===Ir,packedNormalMap:Et&&_.normalMapType===Ir&&k_(_.normalMap.format),metalnessMap:Qt,roughnessMap:re,anisotropy:he,anisotropyMap:Ht,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:X,diffuseRoughness:At,diffuseRoughnessMap:ft,dispersion:Nt,retroreflection:Zt,iridescence:_t,iridescenceMap:lt,iridescenceThicknessMap:xt,sheen:fe,sheenColorMap:bt,sheenRoughnessMap:it,specularMap:st,specularColorMap:vt,specularIntensityMap:N,transmission:Bt,transmissionMap:ot,thicknessMap:nt,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===Ps&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:yt,alphaHash:Gt,combine:_.combine,mapUv:G&&p(_.map.channel),aoMapUv:ut&&p(_.aoMap.channel),lightMapUv:at&&p(_.lightMap.channel),bumpMapUv:dt&&p(_.bumpMap.channel),normalMapUv:Et&&p(_.normalMap.channel),displacementMapUv:pt&&p(_.displacementMap.channel),emissiveMapUv:qt&&p(_.emissiveMap.channel),metalnessMapUv:Qt&&p(_.metalnessMap.channel),roughnessMapUv:re&&p(_.roughnessMap.channel),anisotropyMapUv:Ht&&p(_.anisotropyMap.channel),clearcoatMapUv:A&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:lt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:it&&p(_.sheenRoughnessMap.channel),specularMapUv:st&&p(_.specularMap.channel),specularColorMapUv:vt&&p(_.specularColorMap.channel),specularIntensityMapUv:N&&p(_.specularIntensityMap.channel),transmissionMapUv:ot&&p(_.transmissionMap.channel),thicknessMapUv:nt&&p(_.thicknessMap.channel),alphaMapUv:gt&&p(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Et||he),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(G||gt),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&Et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:I,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Pt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:G&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:qt&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ke,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||j)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(w,_),f(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function f(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let w=d[_.type],L;if(w){let R=Vn[w];L=Au.clone(R.uniforms)}else L=_.uniforms;return L}function b(_,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new B_(n,w,_,s),c.push(L),h.set(w,L)),L}function S(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:b,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:T}}function G_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function V_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Yu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Zu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,x,m,f){let v=n[t];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:f},n[t]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=f),t++,v}function l(d,p,g,x,m,f,v){v.reversedDepth===!0&&(m=-m);let b=a(d,p,g,x,m,f);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function c(d,p,g,x,m,f){let v=a(d,p,g,x,m,f);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(d,p){e.length>1&&e.sort(d||V_),i.length>1&&i.sort(p||Yu),s.length>1&&s.sort(p||Yu)}function u(){for(let d=t,p=n.length;d<p;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function W_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Zu,n.set(i,[o])):s>=r.length?(o=new Zu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function X_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Yt};break;case"SpotLight":e={position:new F,direction:new F,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function q_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Y_=0;function Z_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function J_(n){let t=new X_,e=q_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new xe,o=new xe;function a(c){let h=0,u=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,v=0,b=0,S=0,E=0,T=0,_=0,w=0,L=0,R=0;c.sort(Z_);for(let z=0,q=c.length;z<q;z++){let C=c[z],D=C.color,H=C.intensity,k=C.distance,et=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ri?et=C.shadow.map.texture:et=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*H,u+=D.g*H,d+=D.b*H;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],H);R++}else if(C.isSunLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let rt=C.shadow,ct=e.get(C);ct.shadowIntensity=rt.intensity,ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),i.sunShadow[g]=ct,i.sunShadowMap[g]=et;let Pt=rt.getViewportCount();for(let kt=0;kt<Pt;kt++)i.sunShadowMatrix[x+kt]=rt.getMatrix(kt),i.sunShadowCascade[x+kt]=rt._cascadeData[kt];x+=Pt,g++}i.sun[p]=V,p++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let rt=C.shadow,ct=e.get(C);ct.shadowIntensity=rt.intensity,ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize=rt.mapSize,i.directionalShadow[m]=ct,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=C.shadow.matrix,E++}i.directional[m]=V,m++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(D).multiplyScalar(H),V.distance=k,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[v]=V;let rt=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,rt.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[v]=rt.matrix,C.castShadow){let ct=e.get(C);ct.shadowIntensity=rt.intensity,ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize=rt.mapSize,i.spotShadow[v]=ct,i.spotShadowMap[v]=et,_++}v++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(D).multiplyScalar(H),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[b]=V,b++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let rt=C.shadow,ct=e.get(C);ct.shadowIntensity=rt.intensity,ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize=rt.mapSize,ct.shadowCameraNear=rt.camera.near,ct.shadowCameraFar=rt.camera.far,i.pointShadow[f]=ct,i.pointShadowMap[f]=et,i.pointShadowMatrix[f]=C.shadow.matrix,T++}i.point[f]=V,f++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(H),V.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[S]=V,S++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==v||P.rectAreaLength!==b||P.hemiLength!==S||P.numSunShadows!==g||P.numDirectionalShadows!==E||P.numPointShadows!==T||P.numSpotShadows!==_||P.numSpotMaps!==w||P.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=f,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=v,P.rectAreaLength=b,P.hemiLength=S,P.numSunShadows=g,P.numDirectionalShadows=E,P.numPointShadows=T,P.numSpotShadows=_,P.numSpotMaps=w,P.numLightProbes=R,i.version=Y_++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0,m=0,f=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let S=c[v];if(S.isSunLight){let E=i.sun[u];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),u++}else if(S.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),d++}else if(S.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function Ju(n){let t=new J_(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function K_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ju(n),t.set(s,[a])):r>=o.length?(a=new Ju(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],tx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ku=new xe,Lr=new F,pc=new F;function ex(n,t,e){let i=new Mi,s=new Xt,r=new Xt,o=new we,a=new Oo,l=new Bo,c={},h=e.maxTextureSize,u={[Ai]:on,[on]:Ai,[Ke]:Ke},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:$_,fragmentShader:j_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=br;let f=this.type;this.render=function(T,_,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Vh&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=br);let L=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Yi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=f!==this.type;q&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=T.length;C<D;C++){let H=T[C],k=H.shadow;if(k===void 0){Wt("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let et=k.getFrameExtents();s.multiply(et),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,k.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=V,k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Cs){if(H.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new pn(s.x,s.y,{format:Ri,type:Dn,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new ri(s.x,s.y,Ln),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ii,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ae,k.map.depthTexture.magFilter=Ae}else H.isPointLight?(k.map=new Nr(s.x),k.map.depthTexture=new ar(s.x,In)):(k.map=new pn(s.x,s.y),k.map.depthTexture=new ri(s.x,s.y,In)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ii,this.type===br?(k.map.depthTexture.compareFunction=V?nc:ec,k.map.depthTexture.minFilter=Ie,k.map.depthTexture.magFilter=Ie):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ae,k.map.depthTexture.magFilter=Ae);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let rt=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();H.isPointLight!==!0&&k.updateMatrices(H,w);let ct=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:w.layers;for(let Pt=0;Pt<rt;Pt++){let kt=k.getCamera(Pt);if(H.isPointLight){let K=k.camera,ht=k.matrix,Tt=H.distance||K.far;Tt!==K.far&&(K.far=Tt,K.updateProjectionMatrix()),Lr.setFromMatrixPosition(H.matrixWorld),K.position.copy(Lr),pc.copy(K.position),pc.add(Q_[Pt]),K.up.copy(tx[Pt]),K.lookAt(pc),K.updateMatrixWorld(),ht.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Ku.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ku,K.coordinateSystem,K.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,Pt),n.clear();else{Pt===0&&(n.setRenderTarget(k.map),n.clear());let K=k.getViewport(Pt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(o)}i=k.getFrustum(Pt),S(_,w,kt,H,ct,this.type)}k.isPointLightShadow!==!0&&this.type===Cs&&v(k,w),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(L,R,P)};function v(T,_){let w=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new pn(s.x,s.y,{format:Ri,type:Dn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,w,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,w,p,x,null)}function b(T,_,w,L){let R=null,P=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=w.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=R.uuid,q=_.uuid,C=c[z];C===void 0&&(C={},c[z]=C);let D=C[q];D===void 0&&(D=R.clone(),C[q]=D,_.addEventListener("dispose",E)),R=D}if(R.visible=_.visible,R.wireframe=_.wireframe,L===Cs?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:u[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=n.properties.get(R);z.light=w}return R}function S(T,_,w,L,R,P){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Cs)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let C=t.update(T),D=T.material;if(Array.isArray(D)){let H=C.groups;for(let k=0,et=H.length;k<et;k++){let V=H[k],rt=D[V.materialIndex];if(rt&&rt.visible){let ct=b(T,rt,L,P);T.onBeforeShadow(n,T,_,w,C,ct,V),n.renderBufferDirect(w,null,C,ct,T,V),T.onAfterShadow(n,T,_,w,C,ct,V)}}}else if(D.visible){let H=b(T,D,L,P);T.onBeforeShadow(n,T,_,w,C,H,null),n.renderBufferDirect(w,null,C,H,T,null),T.onAfterShadow(n,T,_,w,C,H,null)}}let q=T.children;for(let C=0,D=q.length;C<D;C++)S(q[C],_,w,L,R,P)}function E(T){T.target.removeEventListener("dispose",E);for(let w in c){let L=c[w],R=T.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function nx(n,t){function e(){let N=!1,ot=new we,nt=null,Mt=new we(0,0,0,0);return{setMask:function(gt){nt!==gt&&!N&&(n.colorMask(gt,gt,gt,gt),nt=gt)},setLocked:function(gt){N=gt},setClear:function(gt,yt,Gt,ne,mt){mt===!0&&(gt*=ne,yt*=ne,Gt*=ne),ot.set(gt,yt,Gt,ne),Mt.equals(ot)===!1&&(n.clearColor(gt,yt,Gt,ne),Mt.copy(ot))},reset:function(){N=!1,nt=null,Mt.set(-1,0,0,0)}}}function i(){let N=!1,ot=!1,nt=null,Mt=null,gt=null;return{setReversed:function(yt){if(ot!==yt){let Gt=t.get("EXT_clip_control");yt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),ot=yt;let ne=gt;gt=null,this.setClear(ne)}},getReversed:function(){return ot},setTest:function(yt){yt?I(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(yt){nt!==yt&&!N&&(n.depthMask(yt),nt=yt)},setFunc:function(yt){if(ot&&(yt=bu[yt]),Mt!==yt){switch(yt){case Mo:n.depthFunc(n.NEVER);break;case So:n.depthFunc(n.ALWAYS);break;case bo:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case wo:n.depthFunc(n.EQUAL);break;case To:n.depthFunc(n.GEQUAL);break;case Eo:n.depthFunc(n.GREATER);break;case Ao:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=yt}},setLocked:function(yt){N=yt},setClear:function(yt){gt!==yt&&(gt=yt,ot&&(yt=1-yt),n.clearDepth(yt))},reset:function(){N=!1,nt=null,Mt=null,gt=null,ot=!1}}}function s(){let N=!1,ot=null,nt=null,Mt=null,gt=null,yt=null,Gt=null,ne=null,mt=null;return{setTest:function(Vt){N||(Vt?I(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(Vt){ot!==Vt&&!N&&(n.stencilMask(Vt),ot=Vt)},setFunc:function(Vt,ee,Rt){(nt!==Vt||Mt!==ee||gt!==Rt)&&(n.stencilFunc(Vt,ee,Rt),nt=Vt,Mt=ee,gt=Rt)},setOp:function(Vt,ee,Rt){(yt!==Vt||Gt!==ee||ne!==Rt)&&(n.stencilOp(Vt,ee,Rt),yt=Vt,Gt=ee,ne=Rt)},setLocked:function(Vt){N=Vt},setClear:function(Vt){mt!==Vt&&(n.clearStencil(Vt),mt=Vt)},reset:function(){N=!1,ot=null,nt=null,Mt=null,gt=null,yt=null,Gt=null,ne=null,mt=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},p=new WeakMap,g=[],x=null,m=!1,f=null,v=null,b=null,S=null,E=null,T=null,_=null,w=new Yt(0,0,0),L=0,R=!1,P=null,z=null,q=null,C=null,D=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,et=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=et>=2);let rt=null,ct={},Pt=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),K=new we().fromArray(Pt),ht=new we().fromArray(kt);function Tt(N,ot,nt,Mt){let gt=new Uint8Array(4),yt=n.createTexture();n.bindTexture(N,yt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<nt;Gt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ot,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(ot+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return yt}let Dt={};Dt[n.TEXTURE_2D]=Tt(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=Tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[n.TEXTURE_2D_ARRAY]=Tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=Tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(n.DEPTH_TEST),o.setFunc(_s),dt(!1),Et(Nl),I(n.CULL_FACE),ut(Yi);function I(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function U(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function j(N,ot){return d[N]!==ot?(n.bindFramebuffer(N,ot),d[N]=ot,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ot),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ot),!0):!1}function G(N,ot){let nt=g,Mt=!1;if(N){nt=p.get(ot),nt===void 0&&(nt=[],p.set(ot,nt));let gt=N.textures;if(nt.length!==gt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,Gt=gt.length;yt<Gt;yt++)nt[yt]=n.COLOR_ATTACHMENT0+yt;nt.length=gt.length,Mt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(nt)}function J(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let Z={[Zi]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};Z[Yh]=n.MIN,Z[Zh]=n.MAX;let tt={[Jh]:n.ZERO,[Kh]:n.ONE,[$h]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[iu]:n.SRC_ALPHA_SATURATE,[eu]:n.DST_COLOR,[Qh]:n.DST_ALPHA,[jh]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[nu]:n.ONE_MINUS_DST_COLOR,[tu]:n.ONE_MINUS_DST_ALPHA,[su]:n.CONSTANT_COLOR,[ru]:n.ONE_MINUS_CONSTANT_COLOR,[ou]:n.CONSTANT_ALPHA,[au]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(N,ot,nt,Mt,gt,yt,Gt,ne,mt,Vt){if(N===Yi){m===!0&&(U(n.BLEND),m=!1);return}if(m===!1&&(I(n.BLEND),m=!0),N!==Wh){if(N!==f||Vt!==R){if((v!==Zi||E!==Zi)&&(n.blendEquation(n.FUNC_ADD),v=Zi,E=Zi),Vt)switch(N){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFunc(n.ONE,n.ONE);break;case Fl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ol:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Jt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fl:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ol:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",N);break}b=null,S=null,T=null,_=null,w.set(0,0,0),L=0,f=N,R=Vt}return}gt=gt||ot,yt=yt||nt,Gt=Gt||Mt,(ot!==v||gt!==E)&&(n.blendEquationSeparate(Z[ot],Z[gt]),v=ot,E=gt),(nt!==b||Mt!==S||yt!==T||Gt!==_)&&(n.blendFuncSeparate(tt[nt],tt[Mt],tt[yt],tt[Gt]),b=nt,S=Mt,T=yt,_=Gt),(ne.equals(w)===!1||mt!==L)&&(n.blendColor(ne.r,ne.g,ne.b,mt),w.copy(ne),L=mt),f=N,R=!1}function at(N,ot){N.side===Ke?U(n.CULL_FACE):I(n.CULL_FACE);let nt=N.side===on;ot&&(nt=!nt),dt(nt),N.blending===Ps&&N.transparent===!1?ut(Yi):ut(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Mt=N.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),qt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?I(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(N){P!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),P=N)}function Et(N){N!==Hh?(I(n.CULL_FACE),N!==z&&(N===Nl?n.cullFace(n.BACK):N===Gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),z=N}function pt(N){N!==q&&(k&&n.lineWidth(N),q=N)}function qt(N,ot,nt){N?(I(n.POLYGON_OFFSET_FILL),(C!==ot||D!==nt)&&(C=ot,D=nt,o.getReversed()&&(ot=-ot,nt=-nt),n.polygonOffset(ot,nt))):U(n.POLYGON_OFFSET_FILL)}function Qt(N){N?I(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function re(N){N===void 0&&(N=n.TEXTURE0+H-1),rt!==N&&(n.activeTexture(N),rt=N)}function he(N,ot,nt){nt===void 0&&(rt===null?nt=n.TEXTURE0+H-1:nt=rt);let Mt=ct[nt];Mt===void 0&&(Mt={type:void 0,texture:void 0},ct[nt]=Mt),(Mt.type!==N||Mt.texture!==ot)&&(rt!==nt&&(n.activeTexture(nt),rt=nt),n.bindTexture(N,ot||Dt[N]),Mt.type=N,Mt.texture=ot)}function O(){let N=ct[rt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function At(){try{n.compressedTexImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function Nt(){try{n.compressedTexImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function Zt(){try{n.texSubImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function _t(){try{n.texSubImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function Bt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function Ht(){try{n.texStorage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function A(){try{n.texStorage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function y(){try{n.texImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function X(){try{n.texImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function ft(N){return u[N]!==void 0?u[N]:n.getParameter(N)}function lt(N,ot){u[N]!==ot&&(n.pixelStorei(N,ot),u[N]=ot)}function xt(N){K.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function bt(N){ht.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ht.copy(N))}function it(N,ot){let nt=c.get(ot);nt===void 0&&(nt=new WeakMap,c.set(ot,nt));let Mt=nt.get(N);Mt===void 0&&(Mt=n.getUniformBlockIndex(ot,N.name),n.uniformBlockBinding(ot,Mt,Mt),nt.set(N,Mt))}function st(N,ot,nt){let gt=c.get(ot).get(N);l[gt]!==nt&&(n.bindBufferBase(n.UNIFORM_BUFFER,gt,nt),l[gt]=nt)}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},rt=null,ct={},d={},l={},p=new WeakMap,g=[],x=null,m=!1,f=null,v=null,b=null,S=null,E=null,T=null,_=null,w=new Yt(0,0,0),L=0,R=!1,P=null,z=null,q=null,C=null,D=null,K.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:I,disable:U,bindFramebuffer:j,drawBuffers:G,useProgram:J,setBlending:ut,setMaterial:at,setFlipSided:dt,setCullFace:Et,setLineWidth:pt,setPolygonOffset:qt,setScissorTest:Qt,activeTexture:re,bindTexture:he,unbindTexture:O,compressedTexImage2D:At,compressedTexImage3D:Nt,texImage2D:y,texImage3D:X,pixelStorei:lt,getParameter:ft,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:Ht,texStorage3D:A,texSubImage2D:Zt,texSubImage3D:_t,compressedTexSubImage2D:fe,compressedTexSubImage3D:Bt,scissor:xt,viewport:bt,reset:vt}}function ix(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,u=new Set,d,p=new WeakMap,g=new Set,x=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,y){return m?new OffscreenCanvas(A,y):ys("canvas")}function v(A,y,X){let ft=1,lt=Ht(A);if((lt.width>X||lt.height>X)&&(ft=X/Math.max(lt.width,lt.height)),ft<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let xt=Math.floor(ft*lt.width),bt=Math.floor(ft*lt.height);d===void 0&&(d=f(xt,bt));let it=y?f(xt,bt):d;return it.width=xt,it.height=bt,it.getContext("2d").drawImage(A,0,0,xt,bt),Wt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+xt+"x"+bt+")."),it}else return"data"in A&&Wt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function b(A){return A.generateMipmaps}function S(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,y,X,ft,lt,xt=!1){if(A!==null){if(n[A]!==void 0)return n[A];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let bt;ft&&(bt=t.get("EXT_texture_norm16"),bt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=y;if(y===n.RED&&(X===n.FLOAT&&(it=n.R32F),X===n.HALF_FLOAT&&(it=n.R16F),X===n.UNSIGNED_BYTE&&(it=n.R8),X===n.UNSIGNED_SHORT&&bt&&(it=bt.R16_EXT),X===n.SHORT&&bt&&(it=bt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.R8UI),X===n.UNSIGNED_SHORT&&(it=n.R16UI),X===n.UNSIGNED_INT&&(it=n.R32UI),X===n.BYTE&&(it=n.R8I),X===n.SHORT&&(it=n.R16I),X===n.INT&&(it=n.R32I)),y===n.RG&&(X===n.FLOAT&&(it=n.RG32F),X===n.HALF_FLOAT&&(it=n.RG16F),X===n.UNSIGNED_BYTE&&(it=n.RG8),X===n.UNSIGNED_SHORT&&bt&&(it=bt.RG16_EXT),X===n.SHORT&&bt&&(it=bt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RG8UI),X===n.UNSIGNED_SHORT&&(it=n.RG16UI),X===n.UNSIGNED_INT&&(it=n.RG32UI),X===n.BYTE&&(it=n.RG8I),X===n.SHORT&&(it=n.RG16I),X===n.INT&&(it=n.RG32I)),y===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RGB8UI),X===n.UNSIGNED_SHORT&&(it=n.RGB16UI),X===n.UNSIGNED_INT&&(it=n.RGB32UI),X===n.BYTE&&(it=n.RGB8I),X===n.SHORT&&(it=n.RGB16I),X===n.INT&&(it=n.RGB32I)),y===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),X===n.UNSIGNED_INT&&(it=n.RGBA32UI),X===n.BYTE&&(it=n.RGBA8I),X===n.SHORT&&(it=n.RGBA16I),X===n.INT&&(it=n.RGBA32I)),y===n.RGB&&(X===n.UNSIGNED_SHORT&&bt&&(it=bt.RGB16_EXT),X===n.SHORT&&bt&&(it=bt.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(it=n.R11F_G11F_B10F)),y===n.RGBA){let st=xt?er:le.getTransfer(lt);X===n.FLOAT&&(it=n.RGBA32F),X===n.HALF_FLOAT&&(it=n.RGBA16F),X===n.UNSIGNED_BYTE&&(it=st===_e?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&bt&&(it=bt.RGBA16_EXT),X===n.SHORT&&bt&&(it=bt.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function _(A,y){let X;return A?y===null||y===In||y===Ki?X=n.DEPTH24_STENCIL8:y===Ln?X=n.DEPTH32F_STENCIL8:y===Ls&&(X=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===In||y===Ki?X=n.DEPTH_COMPONENT24:y===Ln?X=n.DEPTH_COMPONENT32F:y===Ls&&(X=n.DEPTH_COMPONENT16),X}function w(A,y){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ae&&A.minFilter!==Ie?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function L(A){let y=new WeakRef(A);i.get(A).__ref=y,g.add(y),x.register(A,y,y)}function R(A){let y=i.get(A).__ref;y!==void 0&&(g.delete(y),x.unregister(y))}function P(A){q(A.target)}function z(A){C(A.target)}function q(A){A.removeEventListener("dispose",P),R(A),H(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function C(A){A.removeEventListener("dispose",z),R(A),et(A)}function D(){for(let A of g){let y=A.deref();y!==void 0&&(y.isRenderTarget===!0?C(y):q(y))}g.clear(),u.clear()}function H(A){let y=i.get(A);if(y.__webglInit===void 0)return;let X=A.source,ft=p.get(X);if(ft){let lt=ft[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&k(A),Object.keys(ft).length===0&&p.delete(X)}i.remove(A)}function k(A){let y=i.get(A);n.deleteTexture(y.__webglTexture);let X=A.source,ft=p.get(X);delete ft[y.__cacheKey],o.memory.textures--}function et(A){let y=i.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();let X=A.depthTexture;if(X&&X.renderTarget===A&&q(X),A.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(y.__webglFramebuffer[lt]))for(let xt=0;xt<y.__webglFramebuffer[lt].length;xt++)n.deleteFramebuffer(y.__webglFramebuffer[lt][xt]);else n.deleteFramebuffer(y.__webglFramebuffer[lt]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[lt])}else{if(Array.isArray(y.__webglFramebuffer))for(let lt=0;lt<y.__webglFramebuffer.length;lt++)n.deleteFramebuffer(y.__webglFramebuffer[lt]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let lt=0;lt<y.__webglColorRenderbuffer.length;lt++)y.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[lt]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ft=A.textures;for(let lt=0,xt=ft.length;lt<xt;lt++){let bt=i.get(ft[lt]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(ft[lt])}i.remove(A)}let V=0;function rt(){V=0}function ct(){return V}function Pt(A){V=A}function kt(){let A=V;return A>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,A}function K(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function ht(A,y){let X=i.get(A);if(A.isVideoTexture&&fe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&X.__version!==A.version){let ft=A.image;if(ft===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(X,A,y);return}}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+y)}function Tt(A,y){let X=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){at(X,A,y);return}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+y)}function Dt(A,y){let X=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){at(X,A,y);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+y)}function I(A,y){let X=i.get(A);if(A.version>0&&X.__version!==A.version){dt(X,A,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+y)}let U={[ni]:n.REPEAT,[fn]:n.CLAMP_TO_EDGE,[Hi]:n.MIRRORED_REPEAT},j={[Ae]:n.NEAREST,[hu]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[Ie]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[Mn]:n.LINEAR_MIPMAP_LINEAR},G={[pu]:n.NEVER,[ic]:n.ALWAYS,[mu]:n.LESS,[ec]:n.LEQUAL,[gu]:n.EQUAL,[nc]:n.GEQUAL,[_u]:n.GREATER,[xu]:n.NOTEQUAL};function J(A,y){if(y.type===Ln&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ie||y.magFilter===ta||y.magFilter===wr||y.magFilter===Mn||y.minFilter===Ie||y.minFilter===ta||y.minFilter===wr||y.minFilter===Mn)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,U[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,U[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,U[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,j[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,j[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,G[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ae||y.minFilter!==wr&&y.minFilter!==Mn||y.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Z(A,y){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",P),L(y));let ft=y.source,lt=p.get(ft);lt===void 0&&(lt={},p.set(ft,lt));let xt=K(y);if(xt!==A.__cacheKey){lt[xt]===void 0&&(lt[xt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),lt[xt].usedTimes++;let bt=lt[A.__cacheKey];bt!==void 0&&(lt[A.__cacheKey].usedTimes--,bt.usedTimes===0&&k(y)),A.__cacheKey=xt,A.__webglTexture=lt[xt].texture}return X}function tt(A,y,X){return Math.floor(Math.floor(A/X)/y)}function ut(A,y,X,ft){let xt=A.updateRanges;if(xt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,X,ft,y.data);else{xt.sort((N,ot)=>N.start-ot.start);let bt=0;for(let N=1;N<xt.length;N++){let ot=xt[bt],nt=xt[N],Mt=ot.start+ot.count,gt=tt(nt.start,y.width,4),yt=tt(ot.start,y.width,4);nt.start<=Mt+1&&gt===yt&&tt(nt.start+nt.count-1,y.width,4)===gt?ot.count=Math.max(ot.count,nt.start+nt.count-ot.start):(++bt,xt[bt]=nt)}xt.length=bt+1;let it=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let N=0,ot=xt.length;N<ot;N++){let nt=xt[N],Mt=Math.floor(nt.start/4),gt=Math.ceil(nt.count/4),yt=Mt%y.width,Gt=Math.floor(Mt/y.width),ne=gt,mt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(n.TEXTURE_2D,0,yt,Gt,ne,mt,X,ft,y.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,it),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function at(A,y,X){let ft=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ft=n.TEXTURE_3D);let lt=Z(A,y),xt=y.source;e.bindTexture(ft,A.__webglTexture,n.TEXTURE0+X);let bt=i.get(xt);if(xt.version!==bt.__version||lt===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let mt=le.getPrimaries(le.workingColorSpace),Vt=y.colorSpace===li?null:le.getPrimaries(y.colorSpace),ee=y.colorSpace===li||mt===Vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let st=v(y.image,!1,s.maxTextureSize);st=Bt(y,st);let vt=r.convert(y.format,y.colorSpace),N=r.convert(y.type),ot=T(y.internalFormat,vt,N,y.normalized,y.colorSpace,y.isVideoTexture);J(ft,y);let nt,Mt=y.mipmaps,gt=y.isVideoTexture!==!0,yt=bt.__version===void 0||lt===!0,Gt=xt.dataReady,ne=w(y,st);if(y.isDepthTexture)ot=_(y.format===ai,y.type),yt&&(gt?e.texStorage2D(n.TEXTURE_2D,1,ot,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,ot,st.width,st.height,0,vt,N,null));else if(y.isDataTexture)if(Mt.length>0){gt&&yt&&e.texStorage2D(n.TEXTURE_2D,ne,ot,Mt[0].width,Mt[0].height);for(let mt=0,Vt=Mt.length;mt<Vt;mt++)nt=Mt[mt],gt?Gt&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,nt.width,nt.height,vt,N,nt.data):e.texImage2D(n.TEXTURE_2D,mt,ot,nt.width,nt.height,0,vt,N,nt.data);y.generateMipmaps=!1}else gt?(yt&&e.texStorage2D(n.TEXTURE_2D,ne,ot,st.width,st.height),Gt&&ut(y,st,vt,N)):e.texImage2D(n.TEXTURE_2D,0,ot,st.width,st.height,0,vt,N,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){gt&&yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ne,ot,Mt[0].width,Mt[0].height,st.depth);for(let mt=0,Vt=Mt.length;mt<Vt;mt++)if(nt=Mt[mt],y.format!==Nn)if(vt!==null)if(gt){if(Gt)if(y.layerUpdates.size>0){let ee=dc(nt.width,nt.height,y.format,y.type);for(let Rt of y.layerUpdates){let ye=nt.data.subarray(Rt*ee/nt.data.BYTES_PER_ELEMENT,(Rt+1)*ee/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,Rt,nt.width,nt.height,1,vt,ye)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,nt.width,nt.height,st.depth,vt,nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,ot,nt.width,nt.height,st.depth,0,nt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?Gt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,nt.width,nt.height,st.depth,vt,N,nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,ot,nt.width,nt.height,st.depth,0,vt,N,nt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{gt&&yt&&e.texStorage2D(n.TEXTURE_2D,ne,ot,Mt[0].width,Mt[0].height);for(let mt=0,Vt=Mt.length;mt<Vt;mt++)nt=Mt[mt],y.format!==Nn?vt!==null?gt?Gt&&e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,nt.width,nt.height,vt,nt.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,ot,nt.width,nt.height,0,nt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Gt&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,nt.width,nt.height,vt,N,nt.data):e.texImage2D(n.TEXTURE_2D,mt,ot,nt.width,nt.height,0,vt,N,nt.data)}else if(y.isDataArrayTexture)if(gt){if(yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ne,ot,st.width,st.height,st.depth),Gt)if(y.layerUpdates.size>0){let mt=dc(st.width,st.height,y.format,y.type);for(let Vt of y.layerUpdates){let ee=st.data.subarray(Vt*mt/st.data.BYTES_PER_ELEMENT,(Vt+1)*mt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Vt,st.width,st.height,1,vt,N,ee)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,N,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ot,st.width,st.height,st.depth,0,vt,N,st.data);else if(y.isData3DTexture)gt?(yt&&e.texStorage3D(n.TEXTURE_3D,ne,ot,st.width,st.height,st.depth),Gt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,N,st.data)):e.texImage3D(n.TEXTURE_3D,0,ot,st.width,st.height,st.depth,0,vt,N,st.data);else if(y.isFramebufferTexture){if(yt)if(gt)e.texStorage2D(n.TEXTURE_2D,ne,ot,st.width,st.height);else{let mt=st.width,Vt=st.height;for(let ee=0;ee<ne;ee++)e.texImage2D(n.TEXTURE_2D,ee,ot,mt,Vt,0,vt,N,null),mt>>=1,Vt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let mt=n.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),st.parentNode!==mt){mt.appendChild(st),u.add(y),mt.onpaint=Vt=>{let ee=Vt.changedElements;for(let Rt of u)ee.includes(Rt.image)&&(Rt.needsUpdate=!0)},mt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{let ee=n.RGBA,Rt=n.RGBA,ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ee,Rt,ye,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(gt&&yt){let mt=Ht(Mt[0]);e.texStorage2D(n.TEXTURE_2D,ne,ot,mt.width,mt.height)}for(let mt=0,Vt=Mt.length;mt<Vt;mt++)nt=Mt[mt],gt?Gt&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,vt,N,nt):e.texImage2D(n.TEXTURE_2D,mt,ot,vt,N,nt);y.generateMipmaps=!1}else if(gt){if(yt){let mt=Ht(st);e.texStorage2D(n.TEXTURE_2D,ne,ot,mt.width,mt.height)}Gt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,N,st)}else e.texImage2D(n.TEXTURE_2D,0,ot,vt,N,st);b(y)&&y.mipmapsAutoUpdate===!0&&S(ft),bt.__version=xt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function dt(A,y,X){if(y.image.length!==6)return;let ft=Z(A,y),lt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+X);let xt=i.get(lt);if(lt.version!==xt.__version||ft===!0){e.activeTexture(n.TEXTURE0+X);let bt=le.getPrimaries(le.workingColorSpace),it=y.colorSpace===li?null:le.getPrimaries(y.colorSpace),st=y.colorSpace===li||bt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let vt=y.isCompressedTexture||y.image[0].isCompressedTexture,N=y.image[0]&&y.image[0].isDataTexture,ot=[];for(let Rt=0;Rt<6;Rt++)!vt&&!N?ot[Rt]=v(y.image[Rt],!0,s.maxCubemapSize):ot[Rt]=N?y.image[Rt].image:y.image[Rt],ot[Rt]=Bt(y,ot[Rt]);let nt=ot[0],Mt=r.convert(y.format,y.colorSpace),gt=r.convert(y.type),yt=T(y.internalFormat,Mt,gt,y.normalized,y.colorSpace),Gt=y.isVideoTexture!==!0,ne=xt.__version===void 0||ft===!0,mt=lt.dataReady,Vt=w(y,nt);J(n.TEXTURE_CUBE_MAP,y);let ee;if(y.isDepthTexture){if(yt=_(y.format===ai,y.type),ne)if(Gt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,yt,nt.width,nt.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,yt,nt.width,nt.height,0,Mt,gt,null)}else if(vt){Gt&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,yt,nt.width,nt.height);for(let Rt=0;Rt<6;Rt++){ee=ot[Rt].mipmaps;for(let ye=0;ye<ee.length;ye++){let Oe=ee[ye];y.format!==Nn?Mt!==null?Gt?mt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye,0,0,Oe.width,Oe.height,Mt,Oe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye,yt,Oe.width,Oe.height,0,Oe.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye,0,0,Oe.width,Oe.height,Mt,gt,Oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye,yt,Oe.width,Oe.height,0,Mt,gt,Oe.data)}}}else{if(ee=y.mipmaps,Gt&&ne){ee.length>0&&Vt++;let Rt=Ht(ot[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,yt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(N){Gt?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,ot[Rt].width,ot[Rt].height,Mt,gt,ot[Rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,yt,ot[Rt].width,ot[Rt].height,0,Mt,gt,ot[Rt].data);for(let ye=0;ye<ee.length;ye++){let ui=ee[ye].image[Rt].image;Gt?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye+1,0,0,ui.width,ui.height,Mt,gt,ui.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye+1,yt,ui.width,ui.height,0,Mt,gt,ui.data)}}else{Gt?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Mt,gt,ot[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,yt,Mt,gt,ot[Rt]);for(let ye=0;ye<ee.length;ye++){let Oe=ee[ye];Gt?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye+1,0,0,Mt,gt,Oe.image[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye+1,yt,Mt,gt,Oe.image[Rt])}}}b(y)&&y.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),xt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Et(A,y,X,ft,lt,xt){let bt=r.convert(X.format,X.colorSpace),it=r.convert(X.type),st=T(X.internalFormat,bt,it,X.normalized,X.colorSpace),vt=i.get(y),N=i.get(X);if(N.__renderTarget=y,!vt.__hasExternalTextures){let ot=Math.max(1,y.width>>xt),nt=Math.max(1,y.height>>xt);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,xt,st,ot,nt,y.depth,0,bt,it,null):e.texImage2D(lt,xt,st,ot,nt,0,bt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),_t(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,lt,N.__webglTexture,0,Zt(y)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,lt,N.__webglTexture,xt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(A,y,X){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){let ft=y.depthTexture,lt=ft&&ft.isDepthTexture?ft.type:null,xt=_(y.stencilBuffer,lt),bt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_t(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt(y),xt,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt(y),xt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,xt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,A)}else{let ft=y.textures;for(let lt=0;lt<ft.length;lt++){let xt=ft[lt],bt=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),st=T(xt.internalFormat,bt,it,xt.normalized,xt.colorSpace);_t(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt(y),st,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt(y),st,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,st,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qt(A,y,X){let ft=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=i.get(y.depthTexture);lt.__renderTarget=y;let xt=ft?y.depthTexture.image[0]:y.depthTexture.image;(!lt.__webglTexture||xt.width!==y.width||xt.height!==y.height)&&(xt.width=y.width,xt.height=y.height,y.depthTexture.needsUpdate=!0),ft?I(y.depthTexture,0):ht(y.depthTexture,0);let bt=lt.__webglTexture,it=Zt(y),st=ft?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,vt=y.depthTexture.format===ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===ii)_t(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,st,bt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,vt,st,bt,0);else if(y.depthTexture.format===ai)_t(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,st,bt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,vt,st,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(A){let y=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let ft=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ft){let lt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ft.removeEventListener("dispose",lt)};ft.addEventListener("dispose",lt),y.__depthDisposeCallback=lt}y.__boundDepthTexture=ft}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let ft=0;ft<6;ft++)qt(y.__webglFramebuffer[ft],A,ft);else A.texture.mipmaps.length>0?qt(y.__webglFramebuffer[0],A,0):qt(y.__webglFramebuffer,A,0);else if(X){y.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ft]),y.__webglDepthbuffer[ft]===void 0)y.__webglDepthbuffer[ft]=n.createRenderbuffer(),pt(y.__webglDepthbuffer[ft],A,!1);else{let lt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=y.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,xt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),pt(y.__webglDepthbuffer,A,!1);else{let lt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,xt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function re(A,y,X){let ft=i.get(A);y!==void 0&&Et(ft.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Qt(A)}function he(A){let y=A.texture,X=i.get(A),ft=i.get(y);A.addEventListener("dispose",z),L(A);let lt=A.textures,xt=A.isWebGLCubeRenderTarget===!0,bt=lt.length>1;if(bt||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=y.version,o.memory.textures++),xt){X.__webglFramebuffer=[];for(let it=0;it<6;it++)if(y.mipmaps.length>0){X.__webglFramebuffer[it]=[];for(let st=0;st<y.mipmaps.length;st++)X.__webglFramebuffer[it][st]=n.createFramebuffer()}else X.__webglFramebuffer[it]=n.createFramebuffer()}else{if(y.mipmaps.length>0){X.__webglFramebuffer=[];for(let it=0;it<y.mipmaps.length;it++)X.__webglFramebuffer[it]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(bt)for(let it=0,st=lt.length;it<st;it++){let vt=i.get(lt[it]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&_t(A)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let it=0;it<lt.length;it++){let st=lt[it];X.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[it]);let vt=r.convert(st.format,st.colorSpace),N=r.convert(st.type),ot=T(st.internalFormat,vt,N,st.normalized,st.colorSpace,A.isXRRenderTarget===!0),nt=Zt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,ot,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,X.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xt){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),J(n.TEXTURE_CUBE_MAP,y);for(let it=0;it<6;it++)if(y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)Et(X.__webglFramebuffer[it][st],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,st);else Et(X.__webglFramebuffer[it],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);b(y)?S(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(bt){for(let it=0,st=lt.length;it<st;it++){let vt=lt[it],N=i.get(vt),ot=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,N.__webglTexture),J(ot,vt),Et(X.__webglFramebuffer,A,vt,n.COLOR_ATTACHMENT0+it,ot,0),b(vt)&&S(ot)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,ft.__webglTexture),J(it,y),y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)Et(X.__webglFramebuffer[st],A,y,n.COLOR_ATTACHMENT0,it,st);else Et(X.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,it,0);b(y)?S(it):y.mipmaps.length>0&&n.texParameteri(it,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Qt(A)}function O(A){let y=A.textures;for(let X=0,ft=y.length;X<ft;X++){let lt=y[X];if(b(lt)&&lt.mipmapsAutoUpdate===!0){let xt=E(A),bt=i.get(lt).__webglTexture;e.bindTexture(xt,bt),S(xt),e.unbindTexture()}}}let At=[];function Nt(A){if(A.samples>0){if(_t(A)===!1){let y=A.textures,X=A.width,ft=A.height,lt=n.COLOR_BUFFER_BIT,xt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(A),it=y.length>1;if(it)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);let N=i.get(y[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,X,ft,0,0,X,ft,lt,n.NEAREST),l===!0&&(At.length=0,At.push(n.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&At.push(xt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);let N=i.get(y[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Zt(A){return Math.min(s.maxSamples,A.samples)}function _t(A){let y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(A){let y=o.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Bt(A,y){let X=A.colorSpace,ft=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==tr&&X!==li&&(le.getTransfer(X)===_e?(ft!==Nn||lt!==an)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",X)),y}function Ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=rt,this.getTextureUnits=ct,this.setTextureUnits=Pt,this.setTexture2D=ht,this.setTexture2DArray=Tt,this.setTexture3D=Dt,this.setTextureCube=I,this.rebindTextures=re,this.setupRenderTarget=he,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=_t,this.dispose=D}function sx(n,t){function e(i,s=li){let r,o=le.getTransfer(s);if(i===an)return n.UNSIGNED_BYTE;if(i===na)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ia)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$l)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zl)return n.BYTE;if(i===Jl)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===ea)return n.INT;if(i===In)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Dn)return n.HALF_FLOAT;if(i===jl)return n.ALPHA;if(i===Ql)return n.RGB;if(i===Nn)return n.RGBA;if(i===ii)return n.DEPTH_COMPONENT;if(i===ai)return n.DEPTH_STENCIL;if(i===tc)return n.RED;if(i===sa)return n.RED_INTEGER;if(i===Ri)return n.RG;if(i===ra)return n.RG_INTEGER;if(i===oa)return n.RGBA_INTEGER;if(i===Tr||i===Er||i===Ar||i===Rr)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===aa||i===la||i===ca||i===ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ua||i===da||i===fa||i===pa||i===ma||i===Cr||i===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ua||i===da)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===pa)return r.COMPRESSED_R11_EAC;if(i===ma)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Cr)return r.COMPRESSED_RG11_EAC;if(i===ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_a||i===xa||i===ya||i===va||i===Ma||i===Sa||i===ba||i===wa||i===Ta||i===Ea||i===Aa||i===Ra||i===Ca||i===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_a)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ya)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===va)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ma)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ea)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Aa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ca)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===La||i===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ia)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Na||i===Ua||i===Pr||i===Fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ki?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ox=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new kn({vertexShader:rx,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new hr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sc=class extends Cn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Mc,f={},v=e.getContextAttributes(),b=null,S=null,E=[],T=[],_=new Xt,w=null,L=null,R=new nn;R.viewport=new we;let P=new nn;P.viewport=new we;let z=[R,P],q=new Ko,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=E[K];return ht===void 0&&(ht=new ws,E[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=E[K];return ht===void 0&&(ht=new ws,E[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=E[K];return ht===void 0&&(ht=new ws,E[K]=ht),ht.getHandSpace()};function H(K){let ht=T.indexOf(K.inputSource);if(ht===-1)return;let Tt=E[ht];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,c||o),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",et);for(let K=0;K<E.length;K++){let ht=T[K];ht!==null&&(T[K]=null,E[K].disconnect(ht))}C=null,D=null,m.reset();for(let K in f)delete f[K];if(t.setRenderTarget(b),p=null,d=null,u=null,s=null,S=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Dt=null,I=null;v.depth&&(I=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=v.stencil?ai:ii,Dt=v.stencil?Ki:In);let U={colorFormat:e.RGBA8,depthFormat:I,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(U),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new pn(d.textureWidth,d.textureHeight,{format:Nn,type:an,depthTexture:new ri(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new pn(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(K){for(let ht=0;ht<K.removed.length;ht++){let Tt=K.removed[ht],Dt=T.indexOf(Tt);Dt>=0&&(T[Dt]=null,E[Dt].disconnect(Tt))}for(let ht=0;ht<K.added.length;ht++){let Tt=K.added[ht],Dt=T.indexOf(Tt);if(Dt===-1){for(let U=0;U<E.length;U++)if(U>=T.length){T.push(Tt),Dt=U;break}else if(T[U]===null){T[U]=Tt,Dt=U;break}if(Dt===-1)break}let I=E[Dt];I&&I.connect(Tt)}}function V(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ht=K.near,Tt=K.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),q.near=P.near=R.near=ht,q.far=P.far=R.far=Tt,(C!==q.near||D!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),C=q.near,D=q.far),q.layers.mask=K.layers.mask|6,R.layers.mask=q.layers.mask&-5,P.layers.mask=q.layers.mask&-3;let Dt=K.parent,I=q.cameras;V(q,Dt);for(let U=0;U<I.length;U++)V(I[U],Dt);q.projectionMatrix.copy(R.projectionMatrix),q.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),rt(K,q,Dt)};function rt(K,ht,Tt){Tt===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ms*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(K){return f[K]};let ct=null;function Pt(K,ht){if(h=ht.getViewerPose(c||o),g=ht,h!==null){let Tt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Dt=!1;Tt.length!==q.cameras.length&&(q.cameras.length=0,Dt=!0);for(let G=0;G<Tt.length;G++){let J=Tt[G],Z=null;if(p!==null)Z=p.getViewport(J);else{let ut=u.getViewSubImage(d,J);Z=ut.viewport,G===0&&(t.setRenderTargetTextures(S,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(S))}let tt=z[G];tt===void 0&&(tt=new nn,tt.layers.enable(G),tt.viewport=new we,z[G]=tt),tt.matrix.fromArray(J.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(J.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Z.x,Z.y,Z.width,Z.height),G===0&&(q.matrix.copy(tt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Dt===!0&&q.cameras.push(tt)}let I=s.enabledFeatures;if(I&&I.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let G=u.getDepthInformation(Tt[0]);G&&G.isValid&&G.texture&&m.init(G,s.renderState)}if(I&&I.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let G=0;G<Tt.length;G++){let J=Tt[G].camera;if(J){let Z=f[J];Z||(Z=new lr,f[J]=Z);let tt=u.getCameraImage(J);Z.sourceTexture=tt}}}}for(let Tt=0;Tt<E.length;Tt++){let Dt=T[Tt],I=E[Tt];Dt!==null&&I!==void 0&&I.update(Dt,ht,c||o)}ct&&ct(K,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}let kt=new $u;kt.setAnimationLoop(Pt),this.setAnimationLoop=function(K){ct=K},this.dispose=function(){}}},ax=new xe,ad=new jt;ad.set(-1,0,0,0,1,0,0,0,1);function lx(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,cc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,b,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f),b=v.envMap,S=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(S)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ad),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cx(n,t,e,i){let s={},r={};function o(v,b){let S=b.program;i.uniformBlockBinding(v,S,s[v.id])}function a(v,b){let S=s[v.id];S===void 0&&(g(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",m));let E=b.program;i.updateUBOMapping(v,E);let T=t.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let b=n.createBuffer(),S=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(v){let b=s[v.id],S=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,_=S.length;T<_;T++){let w=S[T];if(Array.isArray(w))for(let L=0,R=w.length;L<R;L++)h(w[L],T,L,E);else h(w,T,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,b,S,E){if(d(v,b,S,E)===!0){let T=v.__offset,_=v.value;if(Array.isArray(_)){let w=0;for(let L=0;L<_.length;L++){let R=_[L],P=x(R,!0);u(R,v.__data,w),w+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function u(v,b,S){typeof v=="number"||typeof v=="boolean"?b[S]=v:v.isMatrix3?(b[S]=v.elements[0],b[S+1]=v.elements[1],b[S+2]=v.elements[2],b[S+3]=0,b[S+4]=v.elements[3],b[S+5]=v.elements[4],b[S+6]=v.elements[5],b[S+7]=0,b[S+8]=v.elements[6],b[S+9]=v.elements[7],b[S+10]=v.elements[8],b[S+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-S),S):v.toArray(b,S)}function d(v,b,S,E){let T=v.value,_=b+"_"+S;if(Array.isArray(T)){E[_]===void 0&&(E[_]=[]);let w=E[_],L=!1;for(let R=0;R<T.length;R++)p(T[R],w,R)===!0&&(L=!0);return L}return p(T,E,_)}function p(v,b,S){if(b[S]===void 0)return typeof v=="number"||typeof v=="boolean"?b[S]=v:ArrayBuffer.isView(v)?b[S]=v.slice():b[S]=v.clone(),!0;{let E=b[S];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return b[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function g(v){let b=v.uniforms,S=0,E=16;for(let _=0,w=b.length;_<w;_++){let L=Array.isArray(b[_])?b[_]:[b[_]];for(let R=0,P=L.length;R<P;R++){let z=L[R],q=Array.isArray(z.value)?z.value:[z.value],C=Array.isArray(b[_])||Array.isArray(z.value),D=S;for(let k=0,et=q.length;k<et;k++){let V=q[k],rt=x(V,C),ct=S%E,Pt=ct%rt.boundary,kt=ct+Pt;S+=Pt,kt!==0&&E-kt<rt.storage&&(S+=E-kt),k===0&&(D=S),S+=rt.storage}let H=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new H((S-D)/Float32Array.BYTES_PER_ELEMENT),z.__offset=D}}let T=S%E;return T>0&&(S+=E-T),v.__size=S,v.__cache={},this}function x(v,b){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(v){let b=v.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:f}}var hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function ux(){return Gn===null&&(Gn=new Lo(hx,16,16,Ri,Dn),Gn.name="DFG_LUT",Gn.minFilter=Ie,Gn.magFilter=Ie,Gn.wrapS=fn,Gn.wrapT=fn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var ka=class{constructor(t={}){let{canvas:e=vu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=an}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=p,m=new Set([oa,ra,sa]),f=new Set([an,In,Ls,Ki,na,ia]),v=new Uint32Array(4),b=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},E=null,T=null,_=[],w=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,z=null,q=null,C=null,D=null;this._outputColorSpace=Ge;let H=0,k=0,et=null,V=-1,rt=null,ct=new we,Pt=new we,kt=null,K=new Yt(0),ht=0,Tt=e.width,Dt=e.height,I=1,U=null,j=null,G=new we(0,0,Tt,Dt),J=new we(0,0,Tt,Dt),Z=!1,tt=new Mi,ut=new Do,at=!1,dt=!1,Et=new xe,pt=new F,qt=new we,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function he(){return et===null?I:1}let O=i;function At(M,B){return e.getContext(M,B)}let Nt,Zt,_t,fe,Bt,Ht,A,y,X,ft,lt,xt,bt,it,st,vt,N,ot,nt,Mt,gt,yt,Gt;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Vt,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),O===null){let B="webgl2";if(O=At(B,M),O===null)throw At(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(M){throw e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Jt("WebGLRenderer: "+M.message),M}function ne(){Nt=new S0(O),Nt.init(),gt=new sx(O,Nt),Zt=new u0(O,Nt,t,gt),_t=new nx(O,Nt),Zt.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),q=O.createFramebuffer(),C=O.createFramebuffer(),D=O.createFramebuffer(),fe=new T0(O),Bt=new G_,Ht=new ix(O,Nt,_t,Bt,Zt,gt,fe),A=new M0(R),y=new Ap(O),yt=new c0(O,y),X=new b0(O,y,fe,yt),ft=new A0(O,X,y,yt,fe),ot=new E0(O,Zt,Ht),st=new d0(Bt),lt=new H_(R,A,Nt,Zt,yt,st),xt=new lx(R,Bt),bt=new W_,it=new K_(Nt),N=new l0(R,A,_t,ft,g,l),vt=new ex(R,ft,Zt),Gt=new cx(O,fe,Zt,_t),nt=new h0(O,Nt,fe),Mt=new w0(O,Nt,fe),fe.programs=lt.programs,R.capabilities=Zt,R.extensions=Nt,R.properties=Bt,R.renderLists=bt,R.shadowMap=vt,R.state=_t,R.info=fe}x!==an&&(L=new C0(x,e.width,e.height,a,s,r));let mt=new Sc(R,O);this.xr=mt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=Nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize(Tt,Dt,!1))},this.getSize=function(M){return M.set(Tt,Dt)},this.setSize=function(M,B,$=!0){if(mt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=M,Dt=B,e.width=Math.floor(M*I),e.height=Math.floor(B*I),$===!0&&(e.style.width=M+"px",e.style.height=B+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(Tt*I,Dt*I).floor()},this.setDrawingBufferSize=function(M,B,$){Tt=M,Dt=B,I=$,e.width=Math.floor(M*$),e.height=Math.floor(B*$),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(x===an){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ct)},this.getViewport=function(M){return M.copy(G)},this.setViewport=function(M,B,$,W){M.isVector4?G.set(M.x,M.y,M.z,M.w):G.set(M,B,$,W),_t.viewport(ct.copy(G).multiplyScalar(he()).round())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,B,$,W){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,B,$,W),_t.scissor(Pt.copy(J).multiplyScalar(he()).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(M){_t.setScissorTest(Z=M)},this.setOpaqueSort=function(M){U=M},this.setTransparentSort=function(M){j=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,$=!0){let W=0;if(M){let Y=!1;if(et!==null){let wt=et.texture.format;Y=m.has(wt)}if(Y){let wt=et.texture.type,Ut=f.has(wt),St=N.getClearColor(),It=N.getClearAlpha(),zt=St.r,te=St.g,oe=St.b;Ut?(v[0]=zt,v[1]=te,v[2]=oe,v[3]=It,O.clearBufferuiv(O.COLOR,0,v)):(b[0]=zt,b[1]=te,b[2]=oe,b[3]=It,O.clearBufferiv(O.COLOR,0,b))}else W|=O.COLOR_BUFFER_BIT}B&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),N.dispose(),bt.dispose(),it.dispose(),Ht.dispose(),Bt.dispose(),A.dispose(),ft.dispose(),X.dispose(),yt.dispose(),Gt.dispose(),lt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",jc),mt.removeEventListener("sessionend",Qc),Ni.stop()};function Vt(M){M.preventDefault(),rc("WebGLRenderer: Context Lost."),P=!0}function ee(){rc("WebGLRenderer: Context Restored."),P=!1;let M=fe.autoReset,B=vt.enabled,$=vt.autoUpdate,W=vt.needsUpdate,Y=vt.type;ne(),fe.autoReset=M,vt.enabled=B,vt.autoUpdate=$,vt.needsUpdate=W,vt.type=Y}function Rt(M){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ye(M){let B=M.target;B.removeEventListener("dispose",ye),Oe(B)}function Oe(M){ui(M),Bt.remove(M)}function ui(M){let B=Bt.get(M).programs;B!==void 0&&(B.forEach(function($){lt.releaseProgram($)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,$,W,Y,wt){B===null&&(B=Qt);let Ut=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,St=Sf(M,B,$,W,Y);_t.setMaterial(W,Ut);let It=$.index,zt=1;if(W.wireframe===!0){if(It=X.getWireframeAttribute($),It===void 0)return;zt=2}let te=$.drawRange,oe=$.attributes.position,Ft=te.start*zt,ae=(te.start+te.count)*zt;wt!==null&&(Ft=Math.max(Ft,wt.start*zt),ae=Math.min(ae,(wt.start+wt.count)*zt)),It!==null?(Ft=Math.max(Ft,0),ae=Math.min(ae,It.count)):oe!=null&&(Ft=Math.max(Ft,0),ae=Math.min(ae,oe.count));let Ce=ae-Ft;if(Ce<0||Ce===1/0)return;yt.setup(Y,W,St,$,It);let Me,ve=nt;if(It!==null&&(Me=y.get(It),ve=Mt,ve.setIndex(Me)),Y.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*he()),ve.setMode(O.LINES)):ve.setMode(O.TRIANGLES);else if(Y.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),_t.setLineWidth(Xe*he()),Y.isLineSegments?ve.setMode(O.LINES):Y.isLineLoop?ve.setMode(O.LINE_LOOP):ve.setMode(O.LINE_STRIP)}else Y.isPoints?ve.setMode(O.POINTS):Y.isSprite&&ve.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))ve.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Xe=Y._multiDrawStarts,Ot=Y._multiDrawCounts,en=Y._multiDrawCount,pe=It?y.get(It).bytesPerElement:1,Ui=Bt.get(W).currentProgram.getUniforms();for(let qe=0;qe<en;qe++)Ui.setValue(O,"_gl_DrawID",qe),ve.render(Xe[qe]/pe,Ot[qe])}else if(Y.isInstancedMesh)ve.renderInstances(Ft,Ce,Y.count);else if($.isInstancedBufferGeometry){let Xe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ot=Math.min($.instanceCount,Xe);ve.renderInstances(Ft,Ce,Ot)}else ve.render(Ft,Ce)};function $c(M,B,$,W){z!==null&&M.isNodeMaterial&&z.setObject(W,M),at===!0&&st.setState(M,$,!1),M.transparent===!0&&M.side===Ke&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,Ws(M,B,W),M.side=Ai,M.needsUpdate=!0,Ws(M,B,W),M.side=Ke):Ws(M,B,W)}this.compile=function(M,B,$=null){$===null&&($=M),z!==null&&z.renderStart(M,B,$),T=it.get($),T.init(B),w.push(T),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),M!==$&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),dt=this.localClippingEnabled,at=st.init(this.clippingPlanes,dt),at===!0&&st.setGlobalState(this.clippingPlanes,B),z!==null&&vt.render(T.state.shadowsArray,$,B);let W=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let wt=Y.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){let St=wt[Ut];$c(St,$,B,Y),W.add(St)}else $c(wt,$,B,Y),W.add(wt)}),T=w.pop(),z!==null&&z.renderEnd(),W},this.compileAsync=function(M,B,$=null){let W=this.compile(M,B,$);return new Promise(Y=>{function wt(){if(W.forEach(function(Ut){let It=Bt.get(Ut).currentProgram;(It===void 0||It.isReady())&&W.delete(Ut)}),W.size===0){Y(M);return}setTimeout(wt,10)}Nt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let el=null;function vf(M){el&&el(M)}function jc(){Ni.stop()}function Qc(){Ni.start()}let Ni=new $u;Ni.setAnimationLoop(vf),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(M){el=M,mt.setAnimationLoop(M),M===null?Ni.stop():Ni.start()},mt.addEventListener("sessionstart",jc),mt.addEventListener("sessionend",Qc),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;z!==null&&z.renderStart(M,B);let $=mt.enabled===!0&&mt.isPresenting===!0,W=L!==null&&(et===null||$)&&L.begin(R,et);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(B),B=mt.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,B,et),T=it.get(M,w.length),T.init(B),T.state.textureUnits=Ht.getTextureUnits(),w.push(T),Et.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?ut.setFromArrayCamera(B):tt.setFromProjectionMatrix(Et,yn,B.reversedDepth),dt=this.localClippingEnabled,at=st.init(this.clippingPlanes,dt),E=bt.get(M,_.length),E.init(),_.push(E),this.info.render.frame++,mt.enabled===!0&&mt.isPresenting===!0){let Ut=R.xr.getDepthSensingMesh();Ut!==null&&nl(Ut,B,-1/0,R.sortObjects)}nl(M,B,0,R.sortObjects),E.finish(),z!==null&&z.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(U,j),re=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,re&&N.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),at===!0&&st.beginShadows();let Y=T.state.shadowsArray;if(vt.render(Y,M,B),at===!0&&st.endShadows(),(W&&L.hasRenderPass())===!1){let Ut=E.opaque,St=E.transmissive;if(T.setupLights(),B.isArrayCamera){let It=B.cameras;if(St.length>0)for(let zt=0,te=It.length;zt<te;zt++){let oe=It[zt];eh(Ut,St,M,oe)}re&&N.render(M);for(let zt=0,te=It.length;zt<te;zt++){let oe=It[zt];th(E,M,oe,oe.viewport)}}else St.length>0&&eh(Ut,St,M,B),re&&N.render(M),th(E,M,B)}et!==null&&k===0&&(Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et)),W&&L.end(R),M.isScene===!0&&M.onAfterRender(R,M,B),yt.resetDefaultState(),V=-1,rt=null,w.pop(),w.length>0?(T=w[w.length-1],Ht.setTextureUnits(T.state.textureUnits),at===!0&&st.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,z!==null&&z.renderEnd()};function nl(M,B,$,W){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let Ut=B.isArrayCamera?ut:tt;if(!M.frustumCulled||M.intersectsFrustum(Ut)){W&&qt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Et);let St=ft.update(M),It=M.material;It.visible&&E.push(M,St,It,$,qt.z,null,B)}}else if(M.isMesh||M.isLine||M.isPoints){let Ut=B.isArrayCamera?ut:tt;if(!M.frustumCulled||M.intersectsFrustum(Ut)){let St=ft.update(M),It=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qt.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),qt.copy(St.boundingSphere.center)),qt.applyMatrix4(M.matrixWorld).applyMatrix4(Et)),Array.isArray(It)){let zt=St.groups;for(let te=0,oe=zt.length;te<oe;te++){let Ft=zt[te],ae=It[Ft.materialIndex];ae&&ae.visible&&E.push(M,St,ae,$,qt.z,Ft,B)}}else It.visible&&E.push(M,St,It,$,qt.z,null,B)}}}let wt=M.children;for(let Ut=0,St=wt.length;Ut<St;Ut++)nl(wt[Ut],B,$,W)}function th(M,B,$,W){let{opaque:Y,transmissive:wt,transparent:Ut}=M;T.setupLightsView($),at===!0&&st.setGlobalState(R.clippingPlanes,$),W&&_t.viewport(ct.copy(W)),Y.length>0&&qr(Y,B,$),wt.length>0&&qr(wt,B,$),Ut.length>0&&qr(Ut,B,$),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function eh(M,B,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Ft=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new pn(1,1,{generateMipmaps:!0,type:Ft?Dn:an,minFilter:Mn,samples:Math.max(4,Zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let wt=T.state.transmissionRenderTarget[W.id],Ut=W.viewport||ct;wt.setSize(Ut.z*R.transmissionResolutionScale,Ut.w*R.transmissionResolutionScale);let St=R.getRenderTarget(),It=R.getActiveCubeFace(),zt=R.getActiveMipmapLevel();R.setRenderTarget(wt),R.getClearColor(K),ht=R.getClearAlpha(),ht<1&&R.setClearColor(16777215,.5),R.clear(),re&&N.render($);let te=R.toneMapping;R.toneMapping=Hn;let oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),at===!0&&st.setGlobalState(R.clippingPlanes,W),qr(M,$,W),Ht.updateMultisampleRenderTarget(wt),Ht.updateRenderTargetMipmap(wt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ae=0,Ce=B.length;ae<Ce;ae++){let Me=B[ae],{object:ve,geometry:Xe,material:Ot,group:en}=Me;if(Ot.side===Ke&&ve.layers.test(W.layers)){let pe=Ot.side;Ot.side=on,Ot.needsUpdate=!0,nh(ve,$,W,Xe,Ot,en),Ot.side=pe,Ot.needsUpdate=!0,Ft=!0}}Ft===!0&&(Ht.updateMultisampleRenderTarget(wt),Ht.updateRenderTargetMipmap(wt))}R.setRenderTarget(St,It,zt),R.setClearColor(K,ht),oe!==void 0&&(W.viewport=oe),R.toneMapping=te}function qr(M,B,$){let W=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,wt=M.length;Y<wt;Y++){let Ut=M[Y],{object:St,geometry:It,group:zt}=Ut,te=Ut.material;te.allowOverride===!0&&W!==null&&(te=W),St.layers.test($.layers)&&nh(St,B,$,It,te,zt)}}function nh(M,B,$,W,Y,wt){z!==null&&Y.isNodeMaterial&&z.setObject(M,Y),M.onBeforeRender(R,B,$,W,Y,wt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(R,B,$,W,M,wt),Y.transparent===!0&&Y.side===Ke&&Y.forceSinglePass===!1?(Y.side=on,Y.needsUpdate=!0,R.renderBufferDirect($,B,W,Y,M,wt),Y.side=Ai,Y.needsUpdate=!0,R.renderBufferDirect($,B,W,Y,M,wt),Y.side=Ke):R.renderBufferDirect($,B,W,Y,M,wt),M.onAfterRender(R,B,$,W,Y,wt)}function ih(M){let B=0;for(let $ of M)$.texture!==null&&B++;return B}function Ws(M,B,$){B.isScene!==!0&&(B=Qt);let W=Bt.get(M),Y=T.state.lights,wt=T.state.shadowsArray,Ut=Y.state.version,St=lt.getParameters(M,Y.state,wt,B,$,T.state.lightProbeGridArray),It=lt.getProgramCacheKey(St),zt=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let te=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=A.get(M.envMap||W.environment,te),W.envMapRotation=W.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,zt===void 0&&(M.addEventListener("dispose",ye),zt=new Map,W.programs=zt,W.programVariants=new Map);let oe=zt.get(It);if(oe!==void 0){if(W.currentProgram===oe&&W.lightsStateVersion===Ut)return rh(M,St),oe}else St.uniforms=lt.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,$,St),M.onBeforeCompile(St,R),oe=lt.acquireProgram(St,It),zt.set(It,oe),W.uniforms=St.uniforms;let Ft=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ft.clippingPlanes=st.uniform),rh(M,St),W.needsLights=wf(M),W.lightsStateVersion=Ut,W.needsLights&&(Ft.ambientLightColor.value=Y.state.ambient,Ft.lightProbe.value=Y.state.probe,Ft.sunLights.value=Y.state.sun,Ft.sunLightShadows.value=Y.state.sunShadow,Ft.directionalLights.value=Y.state.directional,Ft.directionalLightShadows.value=Y.state.directionalShadow,Ft.spotLights.value=Y.state.spot,Ft.spotLightShadows.value=Y.state.spotShadow,Ft.rectAreaLights.value=Y.state.rectArea,Ft.ltc_1.value=Y.state.rectAreaLTC1,Ft.ltc_2.value=Y.state.rectAreaLTC2,Ft.pointLights.value=Y.state.point,Ft.pointLightShadows.value=Y.state.pointShadow,Ft.hemisphereLights.value=Y.state.hemi,Ft.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ft.sunShadowCascade.value=Y.state.sunShadowCascade,Ft.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ft.spotLightMatrix.value=Y.state.spotLightMatrix,Ft.spotLightMap.value=Y.state.spotLightMap,Ft.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.numLightProbeGrids=ih(T.state.lightProbeGridArray),W.currentProgram=oe,W.uniformsList=null,oe}function Mf(M,B,$,W,Y){let wt=Bt.get(M),Ut=wt.currentProgram.id+","+W+","+Y,St=wt.programVariants.get(Ut);return St===void 0?(St=Ws(M,B,$),wt.programVariants.set(Ut,St)):(wt.currentProgram=St,wt.uniformsList=null,wt.outputColorSpace=W,wt.toneMapping=Y),St}function sh(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=Ns.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function rh(M,B){let $=Bt.get(M);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Sf(M,B,$,W,Y){B.isScene!==!0&&(B=Qt),Ht.resetTextureUnits();let wt=B.fog,Ut=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,St=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:le.workingColorSpace,It=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,zt=A.get(W.envMap||Ut,It),te=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,oe=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ft=!!$.morphAttributes.position,ae=!!$.morphAttributes.normal,Ce=!!$.morphAttributes.color,Me=Hn;W.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Me=R.toneMapping);let ve=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Xe=ve!==void 0?ve.length:0,Ot=Bt.get(W),en=T.state.lights;if(at===!0&&(dt===!0||M!==rt)){let Te=M===rt&&W.id===V;st.setState(W,M,Te)}let pe=!1,Ui=!1;W.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==en.state.version||Y.isBatchedMesh&&Ot.batching===!1||!Y.isBatchedMesh&&Ot.batching===!0||Y.isBatchedMesh&&Ot.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ot.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ot.instancing===!1||!Y.isInstancedMesh&&Ot.instancing===!0||Y.isSkinnedMesh&&Ot.skinning===!1||!Y.isSkinnedMesh&&Ot.skinning===!0||Y.isInstancedMesh&&Ot.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ot.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ot.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ot.instancingMorph===!1&&Y.morphTexture!==null||Ot.envMap!==zt||W.fog===!0&&Ot.fog!==wt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==st.numPlanes||Ot.numIntersection!==st.numIntersection)||Ot.vertexAlphas!==te||Ot.vertexTangents!==oe||Ot.morphTargets!==Ft||Ot.morphNormals!==ae||Ot.morphColors!==Ce||Ot.morphTargetsCount!==Xe||Ot.numLightProbeGrids!==ih(T.state.lightProbeGridArray)?pe=!0:(Ot.outputColorSpace!==St||Ot.toneMapping!==Me)&&(Ui=!0):(pe=!0,Ot.__version=W.version);let qe=Ot.currentProgram;(pe===!0||Ui===!0)&&(qe=Ui===!0?Mf(W,B,Y,St,Me):Ws(W,B,Y),z&&W.isNodeMaterial&&z.onUpdateProgram(W,qe,Ot));let Yr=!1,di=!1,Fi=!1,ue=qe.getUniforms(),He=Ot.uniforms;if(_t.useProgram(qe.program)&&(Yr=!0,di=!0,Fi=!0),W.id!==V&&(V=W.id,di=!0),Yr||rt!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ue.setValue(O,"projectionMatrix",M.projectionMatrix),ue.setValue(O,"viewMatrix",M.matrixWorldInverse);let Be=ue.map.cameraPosition;Be!==void 0&&Be.setValue(O,pt.setFromMatrixPosition(M.matrixWorld)),Zt.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),rt!==M&&(rt=M,di=!0,Fi=!0)}if(Ot.needsLights&&(en.state.sunShadowMap.length>0&&ue.setValue(O,"sunShadowMap",en.state.sunShadowMap,Ht),en.state.directionalShadowMap.length>0&&ue.setValue(O,"directionalShadowMap",en.state.directionalShadowMap,Ht),en.state.spotShadowMap.length>0&&ue.setValue(O,"spotShadowMap",en.state.spotShadowMap,Ht),en.state.pointShadowMap.length>0&&ue.setValue(O,"pointShadowMap",en.state.pointShadowMap,Ht)),Y.isSkinnedMesh){ue.setOptional(O,Y,"bindMatrix"),ue.setOptional(O,Y,"bindMatrixInverse");let Te=Y.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ue.setValue(O,"boneTexture",Te.boneTexture,Ht))}Y.isBatchedMesh&&(ue.setOptional(O,Y,"batchingTexture"),ue.setValue(O,"batchingTexture",Y._matricesTexture,Ht),ue.setOptional(O,Y,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",Y._indirectTexture,Ht),ue.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",Y._colorsTexture,Ht));let Tn=$.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&ot.update(Y,$,qe),(di||Ot.receiveShadow!==Y.receiveShadow)&&(Ot.receiveShadow=Y.receiveShadow,ue.setValue(O,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(He.envMapIntensity.value=B.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=ux()),di){if(ue.setValue(O,"toneMappingExposure",R.toneMappingExposure),Ot.needsLights&&bf(He,Fi),wt&&W.fog===!0&&xt.refreshFogUniforms(He,wt),xt.refreshMaterialUniforms(He,W,I,Dt,T.state.transmissionRenderTarget[M.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let Te=S,Be=0;for(let Zn of T.state.lightProbeGridArray)Zn.texture!==null&&(Te.textures[Be]=Zn.texture,Te.min[Be]=Zn.boundingBox.min,Te.max[Be]=Zn.boundingBox.max,Te.resolution[Be]=Zn.resolution,Be++);for(let Zn in Te)Te[Zn].length=Be;He.probesSH.value=Te.textures,He.probesMin.value=Te.min,He.probesMax.value=Te.max,He.probesResolution.value=Te.resolution}Ns.upload(O,sh(Ot),He,Ht)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ns.upload(O,sh(Ot),He,Ht),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(O,"center",Y.center),ue.setValue(O,"modelViewMatrix",Y.modelViewMatrix),ue.setValue(O,"normalMatrix",Y.normalMatrix),ue.setValue(O,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){let Te=W.uniformsGroups;for(let Be=0,Zn=Te.length;Be<Zn;Be++){let ah=Te[Be];Gt.update(ah,qe),Gt.bind(ah,qe)}}return qe}function bf(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.sunLights.needsUpdate=B,M.sunLightShadows.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function wf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(M,B,$){let W=Bt.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Bt.get(M.texture).__webglTexture=B,Bt.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let $=Bt.get(M);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,$=0){et=M,H=B,k=$;let W=null,Y=!1,wt=!1;if(M){let St=Bt.get(M);if(St.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(O.FRAMEBUFFER,St.__webglFramebuffer),ct.copy(M.viewport),Pt.copy(M.scissor),kt=M.scissorTest,_t.viewport(ct),_t.scissor(Pt),_t.setScissorTest(kt),V=-1;return}else if(St.__webglFramebuffer===void 0)Ht.setupRenderTarget(M);else if(St.__hasExternalTextures)Ht.rebindTextures(M,Bt.get(M.texture).__webglTexture,Bt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let te=M.depthTexture;if(St.__boundDepthTexture!==te){if(te!==null&&Bt.has(te)&&(M.width!==te.image.width||M.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(M)}}let It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);let zt=Bt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[B])?W=zt[B][$]:W=zt[B],Y=!0):M.samples>0&&Ht.useMultisampledRTT(M)===!1?W=Bt.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?W=zt[$]:W=zt,ct.copy(M.viewport),Pt.copy(M.scissor),kt=M.scissorTest}else ct.copy(G).multiplyScalar(I).floor(),Pt.copy(J).multiplyScalar(I).floor(),kt=Z;if($!==0&&(W=q),_t.bindFramebuffer(O.FRAMEBUFFER,W)&&_t.drawBuffers(M,W),_t.viewport(ct),_t.scissor(Pt),_t.setScissorTest(kt),Y){let St=Bt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,St.__webglTexture,$)}else if(wt){let St=B;for(let It=0;It<M.textures.length;It++){let zt=Bt.get(M.textures[It]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+It,zt.__webglTexture,$,St)}}else if(M!==null&&$!==0){let St=Bt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,St.__webglTexture,$)}V=-1};function oh(M){let B=Bt.get(M);return(B.__readFormat!==M.format||B.__readType!==M.type)&&(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=Zt.textureFormatReadable(M.format),B.__typeReadable=Zt.textureTypeReadable(M.type)),B}this.readRenderTargetPixels=function(M,B,$,W,Y,wt,Ut,St=0){if(!(M&&M.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It){_t.bindFramebuffer(O.FRAMEBUFFER,It);try{let zt=M.textures[St],te=zt.format,oe=zt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+St);let Ft=oh(zt);if(Ft.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-W&&$>=0&&$<=M.height-Y&&O.readPixels(B,$,W,Y,gt.convert(te),gt.convert(oe),wt)}finally{let zt=et!==null?Bt.get(et).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(M,B,$,W,Y,wt,Ut,St=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It)if(B>=0&&B<=M.width-W&&$>=0&&$<=M.height-Y){_t.bindFramebuffer(O.FRAMEBUFFER,It);let zt=M.textures[St],te=zt.format,oe=zt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+St);let Ft=oh(zt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.bufferData(O.PIXEL_PACK_BUFFER,wt.byteLength,O.STREAM_READ),O.readPixels(B,$,W,Y,gt.convert(te),gt.convert(oe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ce=et!==null?Bt.get(et).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,Ce);let Me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Su(O,Me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,wt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ae),O.deleteSync(Me),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,$=0){let W=Math.pow(2,-$),Y=Math.floor(M.image.width*W),wt=Math.floor(M.image.height*W),Ut=B!==null?B.x:0,St=B!==null?B.y:0;Ht.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Ut,St,Y,wt),_t.unbindTexture()},this.copyTextureToTexture=function(M,B,$=null,W=null,Y=0,wt=0){let Ut,St,It,zt,te,oe,Ft,ae,Ce,Me=M.isCompressedTexture?M.mipmaps[wt]:M.image;if($!==null)Ut=$.max.x-$.min.x,St=$.max.y-$.min.y,It=$.isBox3?$.max.z-$.min.z:1,zt=$.min.x,te=$.min.y,oe=$.isBox3?$.min.z:0;else{let ue=Math.pow(2,-Y);Ut=Math.floor(Me.width*ue),St=Math.floor(Me.height*ue),M.isDataArrayTexture?It=Me.depth:M.isData3DTexture?It=Math.floor(Me.depth*ue):It=1,zt=0,te=0,oe=0}W!==null?(Ft=W.x,ae=W.y,Ce=W.z):(Ft=0,ae=0,Ce=0);let ve=gt.convert(B.format),Xe=gt.convert(B.type),Ot;B.isData3DTexture?(Ht.setTexture3D(B,0),Ot=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ht.setTexture2DArray(B,0),Ot=O.TEXTURE_2D_ARRAY):(Ht.setTexture2D(B,0),Ot=O.TEXTURE_2D),_t.activeTexture(O.TEXTURE0),_t.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),_t.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_t.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let en=_t.getParameter(O.UNPACK_ROW_LENGTH),pe=_t.getParameter(O.UNPACK_IMAGE_HEIGHT),Ui=_t.getParameter(O.UNPACK_SKIP_PIXELS),qe=_t.getParameter(O.UNPACK_SKIP_ROWS),Yr=_t.getParameter(O.UNPACK_SKIP_IMAGES);_t.pixelStorei(O.UNPACK_ROW_LENGTH,Me.width),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me.height),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,zt),_t.pixelStorei(O.UNPACK_SKIP_ROWS,te),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,oe);let di=M.isDataArrayTexture||M.isData3DTexture,Fi=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let ue=Bt.get(M),He=Bt.get(B),Tn=Bt.get(ue.__renderTarget),Te=Bt.get(He.__renderTarget);_t.bindFramebuffer(O.READ_FRAMEBUFFER,Tn.__webglFramebuffer),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Be=0;Be<It;Be++)di&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.get(M).__webglTexture,Y,oe+Be),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.get(B).__webglTexture,wt,Ce+Be)),O.blitFramebuffer(zt,te,zt+Ut,te+St,Ft,ae,Ft+Ut,ae+St,O.DEPTH_BUFFER_BIT,O.NEAREST);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||Bt.has(M)){let ue=Bt.get(M),He=Bt.get(B);_t.bindFramebuffer(O.READ_FRAMEBUFFER,C),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,D);for(let Tn=0;Tn<It;Tn++)di?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ue.__webglTexture,Y,oe+Tn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ue.__webglTexture,Y),Fi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.__webglTexture,wt,Ce+Tn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,He.__webglTexture,wt),Y!==0?O.blitFramebuffer(zt,te,zt+Ut,te+St,Ft,ae,Ft+Ut,ae+St,O.COLOR_BUFFER_BIT,O.NEAREST):Fi?O.copyTexSubImage3D(Ot,wt,Ft,ae,Ce+Tn,zt,te,Ut,St):O.copyTexSubImage2D(Ot,wt,Ft,ae,zt,te,Ut,St);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Fi?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Ot,wt,Ft,ae,Ce,Ut,St,It,ve,Xe,Me.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Ot,wt,Ft,ae,Ce,Ut,St,It,ve,Me.data):O.texSubImage3D(Ot,wt,Ft,ae,Ce,Ut,St,It,ve,Xe,Me):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,wt,Ft,ae,Ut,St,ve,Xe,Me.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,wt,Ft,ae,Me.width,Me.height,ve,Me.data):O.texSubImage2D(O.TEXTURE_2D,wt,Ft,ae,Ut,St,ve,Xe,Me);_t.pixelStorei(O.UNPACK_ROW_LENGTH,en),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,Ui),_t.pixelStorei(O.UNPACK_SKIP_ROWS,qe),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,Yr),wt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&O.generateMipmap(Ot),_t.unbindTexture()},this.initRenderTarget=function(M){Bt.get(M).__webglFramebuffer===void 0&&Ht.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ht.setTextureCube(M,0):M.isData3DTexture?Ht.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ht.setTexture2DArray(M,0):Ht.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){H=0,k=0,et=null,_t.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var ld={type:"change"},wc={type:"start"},hd={type:"end"},Va=new si,cd=new dn,dx=Math.cos(70*$e.DEG2RAD),Fe=new F,ln=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bc=1e-6,Wa=class extends Sr{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new ke,this._lastTargetPosition=new F,this._quat=new ke().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rs,this._sphericalDelta=new Rs,this._scale=1,this._panOffset=new F,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new F,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=px.bind(this),this._onPointerDown=fx.bind(this),this._onPointerUp=mx.bind(this),this._onContextMenu=Sx.bind(this),this._onMouseWheel=xx.bind(this),this._onKeyDown=yx.bind(this),this._onTouchStart=vx.bind(this),this._onTouchMove=Mx.bind(this),this._onMouseDown=gx.bind(this),this._onMouseMove=_x.bind(this),this._interceptControlDown=bx.bind(this),this._interceptControlUp=wx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ld),this.update(),this.state=me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Fe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Va.origin.copy(this.object.position),Va.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Va.direction))<dx?this.object.lookAt(this.target):(cd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Va.intersectPlane(cd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bc||this._lastTargetPosition.distanceToSquared(this.target)>bc?(this.dispatchEvent(ld),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ln/60*this.autoRotateSpeed*t:ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Fe.copy(s).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function fx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function px(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function mx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hd),this.state=me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case Ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case Ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(wc)}function _x(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function xx(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(wc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(hd))}function yx(n){this.enabled!==!1&&this._handleKeyDown(n)}function vx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1){this.state=me.NONE;break}this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1){this.state=me.NONE;break}this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(wc)}function Mx(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function Sx(n){this.enabled!==!1&&n.preventDefault()}function bx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Xa=class extends rn{constructor(t){super(t)}load(t,e,i,s){let r=this,o=new qi(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},i,s)}parse(t){function e(c){let h=new DataView(c),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;let g=[115,111,108,105,100];for(let x=0;x<5;x++)if(i(g,h,x))return!1;return!0}function i(c,h,u){for(let d=0,p=c.length;d<p;d++)if(c[d]!==h.getUint8(u+d))return!1;return!0}function s(c){let h=new DataView(c),u=h.getUint32(80,!0),d,p,g,x=!1,m,f,v,b,S;for(let P=0;P<=70;P++)h.getUint32(P,!1)==1129270351&&h.getUint8(P+4)==82&&h.getUint8(P+5)==61&&(x=!0,m=new Float32Array(u*3*3),f=h.getUint8(P+6)/255,v=h.getUint8(P+7)/255,b=h.getUint8(P+8)/255,S=h.getUint8(P+9)/255);let E=84,T=50,_=new de,w=new Float32Array(u*3*3),L=new Float32Array(u*3*3),R=new Yt;for(let P=0;P<u;P++){let z=E+P*T,q=h.getFloat32(z,!0),C=h.getFloat32(z+4,!0),D=h.getFloat32(z+8,!0);if(x){let H=h.getUint16(z+48,!0);(H&32768)===0?(d=(H&31)/31,p=(H>>5&31)/31,g=(H>>10&31)/31):(d=f,p=v,g=b)}for(let H=1;H<=3;H++){let k=z+H*12,et=P*3*3+(H-1)*3;w[et]=h.getFloat32(k,!0),w[et+1]=h.getFloat32(k+4,!0),w[et+2]=h.getFloat32(k+8,!0),L[et]=q,L[et+1]=C,L[et+2]=D,x&&(R.setRGB(d,p,g,Ge),m[et]=R.r,m[et+1]=R.g,m[et+2]=R.b)}}return _.setAttribute("position",new Se(w,3)),_.setAttribute("normal",new Se(L,3)),x&&(_.setAttribute("color",new Se(m,3)),_.hasColors=!0,_.alpha=S),_}function r(c){let h=new de,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/,g=0,x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),f=new RegExp("normal"+x+x+x,"g"),v=[],b=[],S=[],E=new F,T,_=0,w=0,L=0;for(;(T=u.exec(c))!==null;){w=L;let R=T[0],P=(T=p.exec(R))!==null?T[1]:"";for(S.push(P);(T=d.exec(R))!==null;){let C=0,D=0,H=T[0];for(;(T=f.exec(H))!==null;)E.x=parseFloat(T[1]),E.y=parseFloat(T[2]),E.z=parseFloat(T[3]),D++;for(;(T=m.exec(H))!==null;)v.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),b.push(E.x,E.y,E.z),C++,L++;D!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),C!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let z=w,q=L-w;h.userData.groupNames=S,h.addGroup(z,q,_),_++}return h.setAttribute("position",new ce(v,3)),h.setAttribute("normal",new ce(b,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){let h=new Uint8Array(c.length);for(let u=0;u<c.length;u++)h[u]=c.charCodeAt(u)&255;return h.buffer||h}else return c}let l=a(t);return e(l)?s(l):r(o(t))}};var _n=Uint8Array,Fs=Uint16Array,Tx=Int32Array,ud=new _n([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dd=new _n([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ex=new _n([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),fd=function(n,t){for(var e=new Fs(31),i=0;i<31;++i)e[i]=t+=1<<n[i-1];for(var s=new Tx(e[30]),i=1;i<30;++i)for(var r=e[i];r<e[i+1];++r)s[r]=r-e[i]<<5|i;return{b:e,r:s}},pd=fd(ud,2),md=pd.b,Ax=pd.r;md[28]=258,Ax[258]=28;var gd=fd(dd,0),Rx=gd.b,JS=gd.r,Rc=new Fs(32768);for(ge=0;ge<32768;++ge)ci=(ge&43690)>>1|(ge&21845)<<1,ci=(ci&52428)>>2|(ci&13107)<<2,ci=(ci&61680)>>4|(ci&3855)<<4,Rc[ge]=((ci&65280)>>8|(ci&255)<<8)>>1;var ci,ge,Or=(function(n,t,e){for(var i=n.length,s=0,r=new Fs(t);s<i;++s)n[s]&&++r[n[s]-1];var o=new Fs(t);for(s=1;s<t;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(e){a=new Fs(1<<t);var l=15-t;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],h=t-n[s],u=o[n[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[Rc[u]>>l]=c}else for(a=new Fs(i),s=0;s<i;++s)n[s]&&(a[s]=Rc[o[n[s]-1]++]>>15-n[s]);return a}),Br=new _n(288);for(ge=0;ge<144;++ge)Br[ge]=8;var ge;for(ge=144;ge<256;++ge)Br[ge]=9;var ge;for(ge=256;ge<280;++ge)Br[ge]=7;var ge;for(ge=280;ge<288;++ge)Br[ge]=8;var ge,_d=new _n(32);for(ge=0;ge<32;++ge)_d[ge]=5;var ge;var Cx=Or(Br,9,1);var Px=Or(_d,5,1),Tc=function(n){for(var t=n[0],e=1;e<n.length;++e)n[e]>t&&(t=n[e]);return t},Un=function(n,t,e){var i=t/8|0;return(n[i]|n[i+1]<<8)>>(t&7)&e},Ec=function(n,t){var e=t/8|0;return(n[e]|n[e+1]<<8|n[e+2]<<16)>>(t&7)},Ix=function(n){return(n+7)/8|0},Pc=function(n,t,e){return(t==null||t<0)&&(t=0),(e==null||e>n.length)&&(e=n.length),new _n(n.subarray(t,e))};var Lx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],gn=function(n,t,e){var i=new Error(t||Lx[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,gn),!e)throw i;return i},Dx=function(n,t,e,i){var s=n.length,r=i?i.length:0;if(!s||t.f&&!t.l)return e||new _n(0);var o=!e,a=o||t.i!=2,l=t.i;o&&(e=new _n(s*3));var c=function(G){var J=e.length;if(G>J){var Z=new _n(Math.max(J*2,G));Z.set(e),e=Z}},h=t.f||0,u=t.p||0,d=t.b||0,p=t.l,g=t.d,x=t.m,m=t.n,f=s*8;do{if(!p){h=Un(n,u,1);var v=Un(n,u+1,3);if(u+=3,v)if(v==1)p=Cx,g=Px,x=9,m=5;else if(v==2){var T=Un(n,u,31)+257,_=Un(n,u+10,15)+4,w=T+Un(n,u+5,31)+1;u+=14;for(var L=new _n(w),R=new _n(19),P=0;P<_;++P)R[Ex[P]]=Un(n,u+P*3,7);u+=_*3;for(var z=Tc(R),q=(1<<z)-1,C=Or(R,z,1),P=0;P<w;){var D=C[Un(n,u,q)];u+=D&15;var b=D>>4;if(b<16)L[P++]=b;else{var H=0,k=0;for(b==16?(k=3+Un(n,u,3),u+=2,H=L[P-1]):b==17?(k=3+Un(n,u,7),u+=3):b==18&&(k=11+Un(n,u,127),u+=7);k--;)L[P++]=H}}var et=L.subarray(0,T),V=L.subarray(T);x=Tc(et),m=Tc(V),p=Or(et,x,1),g=Or(V,m,1)}else gn(1);else{var b=Ix(u)+4,S=n[b-4]|n[b-3]<<8,E=b+S;if(E>s){l&&gn(0);break}a&&c(d+S),e.set(n.subarray(b,E),d),t.b=d+=S,t.p=u=E*8,t.f=h;continue}if(u>f){l&&gn(0);break}}a&&c(d+131072);for(var rt=(1<<x)-1,ct=(1<<m)-1,Pt=u;;Pt=u){var H=p[Ec(n,u)&rt],kt=H>>4;if(u+=H&15,u>f){l&&gn(0);break}if(H||gn(2),kt<256)e[d++]=kt;else if(kt==256){Pt=u,p=null;break}else{var K=kt-254;if(kt>264){var P=kt-257,ht=ud[P];K=Un(n,u,(1<<ht)-1)+md[P],u+=ht}var Tt=g[Ec(n,u)&ct],Dt=Tt>>4;Tt||gn(3),u+=Tt&15;var V=Rx[Dt];if(Dt>3){var ht=dd[Dt];V+=Ec(n,u)&(1<<ht)-1,u+=ht}if(u>f){l&&gn(0);break}a&&c(d+131072);var I=d+K;if(d<V){var U=r-V,j=Math.min(V,I);for(U+d<0&&gn(3);d<j;++d)e[d]=i[U+d]}for(;d<I;++d)e[d]=e[d-V]}}t.l=p,t.p=Pt,t.b=d,t.f=h,p&&(h=1,t.m=x,t.d=g,t.n=m)}while(!h);return d!=e.length&&o?Pc(e,0,d):e.subarray(0,d)};var Nx=new _n(0);var Wn=function(n,t){return n[t]|n[t+1]<<8},Sn=function(n,t){return(n[t]|n[t+1]<<8|n[t+2]<<16|n[t+3]<<24)>>>0},Ac=function(n,t){return Sn(n,t)+Sn(n,t+4)*4294967296};function Ux(n,t){return Dx(n,{i:2},t&&t.out,t&&t.dictionary)}var Cc=typeof TextDecoder<"u"&&new TextDecoder,Fx=0;try{Cc.decode(Nx,{stream:!0}),Fx=1}catch{}var Ox=function(n){for(var t="",e=0;;){var i=n[e++],s=(i>127)+(i>223)+(i>239);if(e+s>n.length)return{s:t,r:Pc(n,e-1)};s?s==3?(i=((i&15)<<18|(n[e++]&63)<<12|(n[e++]&63)<<6|n[e++]&63)-65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023)):s&1?t+=String.fromCharCode((i&31)<<6|n[e++]&63):t+=String.fromCharCode((i&15)<<12|(n[e++]&63)<<6|n[e++]&63):t+=String.fromCharCode(i)}};function Ic(n,t){if(t){for(var e="",i=0;i<n.length;i+=16384)e+=String.fromCharCode.apply(null,n.subarray(i,i+16384));return e}else{if(Cc)return Cc.decode(n);var s=Ox(n),r=s.s,e=s.r;return e.length&&gn(8),r}}var Bx=function(n,t){return t+30+Wn(n,t+26)+Wn(n,t+28)},zx=function(n,t,e){var i=Wn(n,t+28),s=Wn(n,t+30),r=Ic(n.subarray(t+46,t+46+i),!(Wn(n,t+8)&2048)),o=t+46+i,a=kx(n,o,s,e,Sn(n,t+20),Sn(n,t+24),Sn(n,t+42)),l=a[0],c=a[1],h=a[2];return[Wn(n,t+10),l,c,r,o+s+Wn(n,t+32),h]},kx=function(n,t,e,i,s,r,o){var a=s==4294967295,l=r==4294967295,c=o==4294967295,h=t+e,u=a+l+c;if(i&&u){for(;t+4<h;t+=4+Wn(n,t+2))if(Wn(n,t)==1)return[a?Ac(n,t+4+8*l):s,l?Ac(n,t+4):r,c?Ac(n,t+4+8*(l+a)):o,1];i<2&&gn(13)}return[s,r,o,0]};function qa(n,t){for(var e={},i=n.length-22;Sn(n,i)!=101010256;--i)(!i||n.length-i>65558)&&gn(13);var s=Wn(n,i+8);if(!s)return{};var r=Sn(n,i+16),o=Sn(n,i-20)==117853008;if(o){var a=Sn(n,i-12);o=Sn(n,a)==101075792,o&&(s=Sn(n,a+32),r=Sn(n,a+48))}for(var l=t&&t.filter,c=0;c<s;++c){var h=zx(n,r,o),u=h[0],d=h[1],p=h[2],g=h[3],x=h[4],m=h[5],f=Bx(n,m);r=x,(!l||l({name:g,size:d,originalSize:p,compression:u}))&&(u?u==8?e[g]=Ux(n.subarray(f,f+d),{out:new _n(p)}):gn(14,"unknown compression type "+u):e[g]=Pc(n,f,f+d))}return e}function yd(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new de;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0,p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(u.morphAttributes[g]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=xd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][d]);let g=xd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function xd(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Se(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Lc=Ge,vd="http://schemas.microsoft.com/3dmanufacturing/beamlattice/2017/02",Dc="http://schemas.microsoft.com/3dmanufacturing/beamlattice/balls/2020/07",Ya=class extends rn{constructor(t){super(t),this.availableExtensions=[]}load(t,e,i,s){let r=this,o=new qi(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},i,s)}parse(t){let e=this,i=new fr(this.manager);i.setPriority(this.priority),i.setCache(this.cache);function s(I){let U=null,j=null,G,J,Z=[],tt=[],ut,at={},dt={},Et={},pt=new TextDecoder;try{U=qa(new Uint8Array(I))}catch(O){if(O instanceof ReferenceError)return console.error("THREE.3MFLoader: fflate missing and file is compressed."),null}let qt=null;for(j in U)j.match(/\_rels\/.rels$/)?G=j:j.match(/3D\/_rels\/.*\.model\.rels$/)?J=j:j.match(/^3D\/[^\/]*\.model$/)?qt=j:j.match(/^3D\/.*\/[^\/]*\.model$/)?Z.push(j):j.match(/^3D\/Textures?\/.*/)&&tt.push(j);if(Z.push(qt),G===void 0)throw new Error("THREE.ThreeMFLoader: Cannot find relationship file `rels` in 3MF archive.");let Qt=U[G],re=pt.decode(Qt),he=r(re);if(J){let O=U[J],At=pt.decode(O);ut=r(At)}for(let O=0;O<Z.length;O++){let At=Z[O],Nt=U[At],Zt=pt.decode(Nt),_t=new DOMParser().parseFromString(Zt,"application/xml");_t.documentElement.nodeName.toLowerCase()!=="model"&&console.error("THREE.3MFLoader: Error loading 3MF - no 3MF document found: ",At);let fe=_t.querySelector("model"),Bt={};for(let A=0;A<fe.attributes.length;A++){let y=fe.attributes[A];y.name.match(/^xmlns:(.+)$/)&&(Bt[y.value]=RegExp.$1)}let Ht=_(fe);Ht.xml=fe,0<Object.keys(Bt).length&&(Ht.extensions=Bt),at[At]=Ht}for(let O=0;O<tt.length;O++){let At=tt[O];Et[At]=U[At].buffer}return{rels:he,modelRels:ut,model:at,printTicket:dt,texture:Et}}function r(I){let U=[],G=new DOMParser().parseFromString(I,"application/xml").querySelectorAll("Relationship");for(let J=0;J<G.length;J++){let Z=G[J],tt={target:Z.getAttribute("Target"),id:Z.getAttribute("Id"),type:Z.getAttribute("Type")};U.push(tt)}return U}function o(I){let U={};for(let j=0;j<I.length;j++){let G=I[j],J=G.getAttribute("name");0<=["Title","Designer","Description","Copyright","LicenseTerms","Rating","CreationDate","ModificationDate"].indexOf(J)&&(U[J]=G.textContent)}return U}function a(I){let U={id:I.getAttribute("id"),basematerials:[]},j=I.querySelectorAll("base");for(let G=0;G<j.length;G++){let J=j[G],Z=g(J);Z.index=G,U.basematerials.push(Z)}return U}function l(I){return{id:I.getAttribute("id"),path:I.getAttribute("path"),contenttype:I.getAttribute("contenttype"),tilestyleu:I.getAttribute("tilestyleu"),tilestylev:I.getAttribute("tilestylev"),filter:I.getAttribute("filter")}}function c(I){let U={id:I.getAttribute("id"),texid:I.getAttribute("texid"),displaypropertiesid:I.getAttribute("displaypropertiesid")},j=I.querySelectorAll("tex2coord"),G=[];for(let J=0;J<j.length;J++){let Z=j[J],tt=Z.getAttribute("u"),ut=Z.getAttribute("v");G.push(parseFloat(tt),parseFloat(ut))}return U.uvs=new Float32Array(G),U}function h(I){let U={id:I.getAttribute("id"),displaypropertiesid:I.getAttribute("displaypropertiesid")},j=I.querySelectorAll("color"),G=[],J=new Yt;for(let Z=0;Z<j.length;Z++){let ut=j[Z].getAttribute("color");J.setStyle(ut.substring(0,7),Lc),G.push(J.r,J.g,J.b)}return U.colors=new Float32Array(G),U}function u(I){let U=I.children,j={};for(let G=0;G<U.length;G++){let J={type:U[G].nodeName.substring(2)};for(let Z=0;Z<U[G].attributes.length;Z++){let tt=U[G].attributes[Z];tt.specified&&(J[tt.name]=tt.value)}j[U[G].getAttribute("identifier")]=J}return j}function d(I){let U={id:I.getAttribute("id"),displayname:I.getAttribute("displayname")},j=I.children,G={};for(let J=0;J<j.length;J++){let Z=j[J];if(Z.nodeName==="i:in"||Z.nodeName==="i:out")G[Z.nodeName==="i:in"?"inputs":"outputs"]=u(Z);else{let tt=Z.children,ut={op:Z.nodeName.substring(2),identifier:Z.getAttribute("identifier")};for(let at=0;at<tt.length;at++)ut[tt[at].nodeName.substring(2)]=u(tt[at]);G[ut.identifier]=ut}}return U.operations=G,U}function p(I){let U={id:I.getAttribute("id")},j=I.querySelectorAll("pbmetallic"),G=[];for(let J=0;J<j.length;J++){let Z=j[J];G.push({name:Z.getAttribute("name"),metallicness:parseFloat(Z.getAttribute("metallicness")),roughness:parseFloat(Z.getAttribute("roughness"))})}return U.data=G,U}function g(I){let U={};return U.name=I.getAttribute("name"),U.displaycolor=I.getAttribute("displaycolor"),U.displaypropertiesid=I.getAttribute("displaypropertiesid"),U}function x(I){let U={},j=[],G=I.querySelectorAll("vertices vertex");for(let at=0;at<G.length;at++){let dt=G[at],Et=dt.getAttribute("x"),pt=dt.getAttribute("y"),qt=dt.getAttribute("z");j.push(parseFloat(Et),parseFloat(pt),parseFloat(qt))}U.vertices=new Float32Array(j);let J=[],Z=[],tt=I.querySelectorAll("triangles triangle");for(let at=0;at<tt.length;at++){let dt=tt[at],Et=dt.getAttribute("v1"),pt=dt.getAttribute("v2"),qt=dt.getAttribute("v3"),Qt=dt.getAttribute("p1"),re=dt.getAttribute("p2"),he=dt.getAttribute("p3"),O=dt.getAttribute("pid"),At={};At.v1=parseInt(Et,10),At.v2=parseInt(pt,10),At.v3=parseInt(qt,10),Z.push(At.v1,At.v2,At.v3),Qt&&(At.p1=parseInt(Qt,10)),re&&(At.p2=parseInt(re,10)),he&&(At.p3=parseInt(he,10)),O&&(At.pid=O),0<Object.keys(At).length&&J.push(At)}U.triangleProperties=J,U.triangles=new Uint32Array(Z);let ut=I.getElementsByTagNameNS(vd,"beamlattice")[0];return ut!==void 0&&(U.beamlattice=m(ut)),U}function m(I){let U={radius:parseFloat(I.getAttribute("radius")),minLength:parseFloat(I.getAttribute("minlength")),cap:I.getAttribute("cap")||"sphere",ballMode:I.getAttributeNS(Dc,"ballmode")||"none",ballRadius:parseFloat(I.getAttributeNS(Dc,"ballradius")),beams:[],balls:[]},j=I.getAttribute("clippingmode")||I.getAttribute("clipping");j!==null&&j!=="none"&&console.warn("THREE.3MFLoader: Beam lattice clipping is not supported. The lattice is rendered unclipped.");let G=I.getElementsByTagNameNS(vd,"beam");for(let Z=0;Z<G.length;Z++){let tt=G[Z],ut={v1:parseInt(tt.getAttribute("v1"),10),v2:parseInt(tt.getAttribute("v2"),10)},at=tt.getAttribute("r1"),dt=tt.getAttribute("r2");at!==null&&(ut.r1=parseFloat(at)),dt!==null&&(ut.r2=parseFloat(dt)),U.beams.push(ut)}let J=I.getElementsByTagNameNS(Dc,"ball");for(let Z=0;Z<J.length;Z++){let tt=J[Z],ut={vindex:parseInt(tt.getAttribute("vindex"),10)},at=tt.getAttribute("r");at!==null&&(ut.r=parseFloat(at)),U.balls.push(ut)}return U}function f(I){let U=[],j=I.querySelectorAll("component");for(let G=0;G<j.length;G++){let J=j[G],Z=v(J);U.push(Z)}return U}function v(I){let U={};U.objectId=I.getAttribute("objectid");let j=I.getAttribute("transform");return j&&(U.transform=b(j)),U}function b(I){let U=[];I.split(" ").forEach(function(G){U.push(parseFloat(G))});let j=new xe;return j.set(U[0],U[3],U[6],U[9],U[1],U[4],U[7],U[10],U[2],U[5],U[8],U[11],0,0,0,1),j}function S(I){let U={type:I.getAttribute("type")},j=I.getAttribute("id");j&&(U.id=j);let G=I.getAttribute("pid");G&&(U.pid=G);let J=I.getAttribute("pindex");J&&(U.pindex=J);let Z=I.getAttribute("thumbnail");Z&&(U.thumbnail=Z);let tt=I.getAttribute("partnumber");tt&&(U.partnumber=tt);let ut=I.getAttribute("name");ut&&(U.name=ut);let at=I.querySelector("mesh");at&&(U.mesh=x(at));let dt=I.querySelector("components");return dt&&(U.components=f(dt)),U}function E(I){let U={};U.basematerials={};let j=I.querySelectorAll("basematerials");for(let dt=0;dt<j.length;dt++){let Et=j[dt],pt=a(Et);U.basematerials[pt.id]=pt}U.texture2d={};let G=I.querySelectorAll("texture2d");for(let dt=0;dt<G.length;dt++){let Et=G[dt],pt=l(Et);U.texture2d[pt.id]=pt}U.colorgroup={};let J=I.querySelectorAll("colorgroup");for(let dt=0;dt<J.length;dt++){let Et=J[dt],pt=h(Et);U.colorgroup[pt.id]=pt}let Z=I.querySelectorAll("implicitfunction");Z.length>0&&(U.implicitfunction={});for(let dt=0;dt<Z.length;dt++){let Et=Z[dt],pt=d(Et);U.implicitfunction[pt.id]=pt}U.pbmetallicdisplayproperties={};let tt=I.querySelectorAll("pbmetallicdisplayproperties");for(let dt=0;dt<tt.length;dt++){let Et=tt[dt],pt=p(Et);U.pbmetallicdisplayproperties[pt.id]=pt}U.texture2dgroup={};let ut=I.querySelectorAll("texture2dgroup");for(let dt=0;dt<ut.length;dt++){let Et=ut[dt],pt=c(Et);U.texture2dgroup[pt.id]=pt}U.object={};let at=I.querySelectorAll("object");for(let dt=0;dt<at.length;dt++){let Et=at[dt],pt=S(Et);U.object[pt.id]=pt}return U}function T(I){let U=[],j=I.querySelectorAll("item");for(let G=0;G<j.length;G++){let J=j[G],Z={objectId:J.getAttribute("objectid")},tt=J.getAttribute("transform");tt&&(Z.transform=b(tt)),U.push(Z)}return U}function _(I){let U={unit:I.getAttribute("unit")||"millimeter"},j=I.querySelectorAll("metadata");j&&(U.metadata=o(j));let G=I.querySelector("resources");G&&(U.resources=E(G));let J=I.querySelector("build");return J&&(U.build=T(J)),U}function w(I,U,j,G){let J=I.texid,tt=j.resources.texture2d[J];if(tt){let ut=G[tt.path],at=tt.contenttype,dt=new Blob([ut],{type:at}),Et=URL.createObjectURL(dt),pt=i.load(Et,function(){URL.revokeObjectURL(Et)});switch(pt.colorSpace=Lc,tt.tilestyleu){case"wrap":pt.wrapS=ni;break;case"mirror":pt.wrapS=Hi;break;case"none":case"clamp":pt.wrapS=fn;break;default:pt.wrapS=ni}switch(tt.tilestylev){case"wrap":pt.wrapT=ni;break;case"mirror":pt.wrapT=Hi;break;case"none":case"clamp":pt.wrapT=fn;break;default:pt.wrapT=ni}switch(tt.filter){case"auto":pt.magFilter=Ie,pt.minFilter=Mn;break;case"linear":pt.magFilter=Ie,pt.minFilter=Ie,pt.generateMipmaps=!1;break;case"nearest":pt.magFilter=Ae,pt.minFilter=Ae,pt.generateMipmaps=!1;break;default:pt.magFilter=Ie,pt.minFilter=Mn}return pt}else return null}function L(I,U,j,G,J,Z,tt){let ut=tt.pindex,at={};for(let pt=0,qt=U.length;pt<qt;pt++){let Qt=U[pt],re=Qt.p1!==void 0?Qt.p1:ut;at[re]===void 0&&(at[re]=[]),at[re].push(Qt)}let dt=Object.keys(at),Et=[];for(let pt=0,qt=dt.length;pt<qt;pt++){let Qt=dt[pt],re=at[Qt],he=I.basematerials[Qt],O=V(he,G,J,Z,tt,rt),At=new de,Nt=[],Zt=j.vertices;for(let fe=0,Bt=re.length;fe<Bt;fe++){let Ht=re[fe];Nt.push(Zt[Ht.v1*3+0]),Nt.push(Zt[Ht.v1*3+1]),Nt.push(Zt[Ht.v1*3+2]),Nt.push(Zt[Ht.v2*3+0]),Nt.push(Zt[Ht.v2*3+1]),Nt.push(Zt[Ht.v2*3+2]),Nt.push(Zt[Ht.v3*3+0]),Nt.push(Zt[Ht.v3*3+1]),Nt.push(Zt[Ht.v3*3+2])}At.setAttribute("position",new ce(Nt,3));let _t=new Ee(At,O);Et.push(_t)}return Et}function R(I,U,j,G,J,Z,tt){let ut=new de,at=[],dt=[],Et=j.vertices,pt=I.uvs;for(let he=0,O=U.length;he<O;he++){let At=U[he];at.push(Et[At.v1*3+0]),at.push(Et[At.v1*3+1]),at.push(Et[At.v1*3+2]),at.push(Et[At.v2*3+0]),at.push(Et[At.v2*3+1]),at.push(Et[At.v2*3+2]),at.push(Et[At.v3*3+0]),at.push(Et[At.v3*3+1]),at.push(Et[At.v3*3+2]),dt.push(pt[At.p1*2+0]),dt.push(pt[At.p1*2+1]),dt.push(pt[At.p2*2+0]),dt.push(pt[At.p2*2+1]),dt.push(pt[At.p3*2+0]),dt.push(pt[At.p3*2+1])}ut.setAttribute("position",new ce(at,3)),ut.setAttribute("uv",new ce(dt,2));let qt=V(I,G,J,Z,tt,w),Qt=new oi({map:qt,flatShading:!0});return new Ee(ut,Qt)}function P(I,U,j,G){let J=new de,Z=[],tt=[],ut=j.vertices,at=I.colors;for(let pt=0,qt=U.length;pt<qt;pt++){let Qt=U[pt],re=Qt.v1,he=Qt.v2,O=Qt.v3;Z.push(ut[re*3+0]),Z.push(ut[re*3+1]),Z.push(ut[re*3+2]),Z.push(ut[he*3+0]),Z.push(ut[he*3+1]),Z.push(ut[he*3+2]),Z.push(ut[O*3+0]),Z.push(ut[O*3+1]),Z.push(ut[O*3+2]);let At=Qt.p1!==void 0?Qt.p1:G.pindex,Nt=Qt.p2!==void 0?Qt.p2:At,Zt=Qt.p3!==void 0?Qt.p3:At;tt.push(at[At*3+0]),tt.push(at[At*3+1]),tt.push(at[At*3+2]),tt.push(at[Nt*3+0]),tt.push(at[Nt*3+1]),tt.push(at[Nt*3+2]),tt.push(at[Zt*3+0]),tt.push(at[Zt*3+1]),tt.push(at[Zt*3+2])}J.setAttribute("position",new ce(Z,3)),J.setAttribute("color",new ce(tt,3));let dt=new oi({vertexColors:!0,flatShading:!0});return new Ee(J,dt)}function z(I){let U=new de;U.setIndex(new Se(I.triangles,1)),U.setAttribute("position",new Se(I.vertices,3));let j=new oi({name:rn.DEFAULT_MATERIAL_NAME,color:16777215,flatShading:!0});return new Ee(U,j)}function q(I){let U=I.beamlattice,j=I.vertices,G=[],J=new F,Z=new F,tt=new F,ut=new F(0,1,0),at=new ke,dt=new xe,Et=U.beams,pt=U.cap!=="butt",qt=new Map;for(let At=0;At<Et.length;At++){let Nt=Et[At];J.fromArray(j,Nt.v1*3),Z.fromArray(j,Nt.v2*3);let Zt=J.distanceTo(Z);if(Zt<U.minLength)continue;let _t=Nt.r1!==void 0?Nt.r1:U.radius,fe=Nt.r2!==void 0?Nt.r2:_t,Bt=new cr(fe,_t,Zt,8,1,pt);tt.subVectors(Z,J).divideScalar(Zt),at.setFromUnitVectors(ut,tt),dt.makeRotationFromQuaternion(at),dt.setPosition(J.add(Z).multiplyScalar(.5)),Bt.applyMatrix4(dt),G.push(Bt),pt&&(qt.set(Nt.v1,Math.max(_t,qt.get(Nt.v1)||0)),qt.set(Nt.v2,Math.max(fe,qt.get(Nt.v2)||0))),U.ballMode==="all"&&(qt.set(Nt.v1,Math.max(U.ballRadius,qt.get(Nt.v1)||0)),qt.set(Nt.v2,Math.max(U.ballRadius,qt.get(Nt.v2)||0)))}let Qt=U.balls;for(let At=0;At<Qt.length;At++){let Nt=Qt[At],Zt=Nt.r!==void 0?Nt.r:U.ballRadius;qt.set(Nt.vindex,Math.max(Zt,qt.get(Nt.vindex)||0))}for(let[At,Nt]of qt){let Zt=new ur(Nt,8,6);J.fromArray(j,At*3),Zt.translate(J.x,J.y,J.z),G.push(Zt)}let re=yd(G),he=new oi({name:rn.DEFAULT_MATERIAL_NAME,color:16777215});return new Ee(re,he)}function C(I,U,j,G,J,Z){let tt=Object.keys(I),ut=[];for(let at=0,dt=tt.length;at<dt;at++){let Et=tt[at],pt=I[Et];switch(D(Et,G)){case"material":let Qt=G.resources.basematerials[Et],re=L(Qt,pt,U,j,G,J,Z);for(let At=0,Nt=re.length;At<Nt;At++)ut.push(re[At]);break;case"texture":let he=G.resources.texture2dgroup[Et];ut.push(R(he,pt,U,j,G,J,Z));break;case"vertexColors":let O=G.resources.colorgroup[Et];ut.push(P(O,pt,U,Z));break;case"default":ut.push(z(U));break;default:console.error("THREE.3MFLoader: Unsupported resource type.")}}if(Z.name)for(let at=0;at<ut.length;at++)ut[at].name=Z.name;return ut}function D(I,U){return U.resources.texture2dgroup[I]!==void 0?"texture":U.resources.basematerials[I]!==void 0?"material":U.resources.colorgroup[I]!==void 0?"vertexColors":I==="default"?"default":void 0}function H(I,U){let j={},G=I.triangleProperties,J=U.pid;for(let Z=0,tt=G.length;Z<tt;Z++){let ut=G[Z],at=ut.pid!==void 0?ut.pid:J;at===void 0&&(at="default"),j[at]===void 0&&(j[at]=[]),j[at].push(ut)}return j}function k(I,U,j,G,J){let Z=new Je,tt=H(I,J),ut=C(tt,I,U,j,G,J);if(I.beamlattice!==void 0){let at=q(I);J.name&&(at.name=J.name),ut.push(at)}for(let at=0,dt=ut.length;at<dt;at++)Z.add(ut[at]);return Z}function et(I,U,j){if(!I)return;let G=[],J=Object.keys(I);for(let Z=0;Z<J.length;Z++){let tt=J[Z];for(let ut=0;ut<e.availableExtensions.length;ut++){let at=e.availableExtensions[ut];at.ns===tt&&G.push(at)}}for(let Z=0;Z<G.length;Z++){let tt=G[Z];tt.apply(j,I[tt.ns],U)}}function V(I,U,j,G,J,Z){return I.build!==void 0||(I.build=Z(I,U,j,G,J)),I.build}function rt(I,U,j){let G,J=I.displaypropertiesid,Z=j.resources.pbmetallicdisplayproperties;if(J!==null&&Z[J]!==void 0){let dt=Z[J].data[I.index];G=new Xi({flatShading:!0,roughness:dt.roughness,metalness:dt.metallicness})}else G=new oi({flatShading:!0});G.name=I.name;let tt=I.displaycolor,ut=tt.substring(0,7);return G.color.setStyle(ut,Lc),tt.length===9&&(G.opacity=parseInt(tt.charAt(7)+tt.charAt(8),16)/255),G}function ct(I,U,j,G){let J=new Je;for(let Z=0;Z<I.length;Z++){let tt=I[Z],ut=U[tt.objectId];ut===void 0&&(Pt(tt.objectId,U,j,G),ut=U[tt.objectId]);let at=ut.clone(),dt=tt.transform;dt&&at.applyMatrix4(dt),J.add(at)}return J}function Pt(I,U,j,G){let J=j.resources.object[I];if(J.mesh){let Z=J.mesh,tt=j.extensions,ut=j.xml;et(tt,Z,ut),U[J.id]=V(Z,U,j,G,J,k)}else{let Z=J.components;U[J.id]=V(Z,U,j,G,J,ct)}J.name&&(U[J.id].name=J.name),j.resources.implicitfunction&&console.warn("THREE.ThreeMFLoader: Implicit Functions are implemented in data-only.",j.resources.implicitfunction)}function kt(I){let U=I.model,j=I.modelRels,G={},J=Object.keys(U),Z={};if(j)for(let tt=0,ut=j.length;tt<ut;tt++){let at=j[tt],dt=at.target.substring(1);I.texture[dt]&&(Z[at.target]=I.texture[dt])}for(let tt=0;tt<J.length;tt++){let ut=J[tt],at=U[ut],dt=Object.keys(at.resources.object);for(let Et=0;Et<dt.length;Et++){let pt=dt[Et];Pt(pt,G,at,Z)}}return G}function K(I){for(let U=0;U<I.length;U++){let j=I[U];if(j.target.split(".").pop().toLowerCase()==="model")return j}}function ht(I,U){let j=new Je,G=K(U.rels),J=U.model[G.target.substring(1)].build;for(let Z=0;Z<J.length;Z++){let tt=J[Z],ut=I[tt.objectId].clone(),at=tt.transform;at&&ut.applyMatrix4(at),j.add(ut)}return j}let Tt=s(t),Dt=kt(Tt);return ht(Dt,Tt)}addExtension(t){this.availableExtensions.push(t)}};var Md=Math.cos($e.degToRad(.25)),Hx=Math.cos($e.degToRad(50)),zr=new WeakMap;function wd(){zr=new WeakMap}var Td=3e6;function Za(n){let t=n.geometry;return Math.floor((t.index?t.index.count:t.attributes.position.count)/3)}var Ed=n=>zr.has(n.geometry);function Gx(n,t){let e=n.geometry;if(zr.has(e))return zr.get(e);let i=e.attributes.position,s=e.index,r=Za(n),o=new Float64Array(9*r),a=new Float64Array(3*r),l=new Uint32Array(3*r),c=new F,h=n.matrixWorld,u=t.getSize(new F),d=131071/Math.max(u.x,u.y,u.z,1e-9),p=new Map;for(let b=0;b<3*r;b++){c.fromBufferAttribute(i,s?s.getX(b):b).applyMatrix4(h),o[3*b]=c.x,o[3*b+1]=c.y,o[3*b+2]=c.z;let S=(Math.round((c.x-t.min.x)*d)*131072+Math.round((c.y-t.min.y)*d))*131072+Math.round((c.z-t.min.z)*d),E=p.get(S);E===void 0&&(E=p.size,p.set(S,E)),l[b]=E}for(let b=0;b<r;b++){let S=9*b,E=o[S+3]-o[S],T=o[S+4]-o[S+1],_=o[S+5]-o[S+2],w=o[S+6]-o[S],L=o[S+7]-o[S+1],R=o[S+8]-o[S+2],P=T*R-_*L,z=_*w-E*R,q=E*L-T*w,C=Math.hypot(P,z,q);C>0&&(a[3*b]=P/C,a[3*b+1]=z/C,a[3*b+2]=q/C)}let g=p.size,x=new Uint32Array(g+1);for(let b=0;b<3*r;b++)x[l[b]+1]++;for(let b=0;b<g;b++)x[b+1]+=x[b];let m=x.slice(0,g),f=new Uint32Array(3*r);for(let b=0;b<3*r;b++)f[m[l[b]]++]=b/3|0;let v={T:r,P:o,N:a,vid:l,vStart:x,vTris:f};return zr.set(e,v),v}function Vx(n,t,e,i){let{vid:s,vStart:r,vTris:o}=n;for(let a=r[e];a<r[e+1];a++){let l=o[a];if(l!==t&&(s[3*l]===i||s[3*l+1]===i||s[3*l+2]===i))return l}return-1}var Sd=(n,t)=>new F(n.N[3*t],n.N[3*t+1],n.N[3*t+2]);function Ad(n,t,e){if(t.mark[e])return t.facets[t.mark[e]];let i=t.facets.length,s=Sd(n,e),r={id:i,n:s,tris:[e],groups:[]};t.facets.push(r),t.mark[e]=i;let{N:o,vid:a}=n;for(let l=0;l<r.tris.length;l++){let c=r.tris[l];for(let h=0;h<3;h++){let u=a[3*c+h],d=a[3*c+(h+1)%3];if(u===d)continue;let p=Vx(n,c,u,d);if(p<0||t.mark[p]===i)continue;let g=o[3*p]*s.x+o[3*p+1]*s.y+o[3*p+2]*s.z;if(g>Md)!t.mark[p]&&r.tris.length<2e4&&(t.mark[p]=i,r.tris.push(p));else if(g>Hx){let x=Sd(n,p),m=r.groups.find(f=>f.n.dot(x)>Md);m||(m={n:x,u:p,count:0},r.groups.push(m)),m.count++}}}return r}function bd(n,t,e,i,s){let r=new F().crossVectors(e,t.n).normalize(),o=1/0,a=-1/0,l=null,c=null,h=new F;for(let u of t.tris)for(let d=0;d<3;d++){h.fromArray(n.P,9*u+3*d);let p=h.dot(r);p<o&&(o=p,l=[h.dot(i),h.dot(s)]),p>a&&(a=p,c=[h.dot(i),h.dot(s)])}return{w:a-o,pts:[l,c]}}function Wx(n){let t=0,e=0;for(let f of n)t+=f[0],e+=f[1];t/=n.length,e/=n.length;let i=0,s=0,r=0,o=0,a=0,l=0,c=0;for(let f of n){let v=f[0]-t,b=f[1]-e;i+=v*v,s+=v*b,r+=b*b,o+=v*v*v,a+=b*b*b,l+=v*b*b,c+=b*v*v}let h=i*r-s*s;if(Math.abs(h)<1e-12*(i+r)*(i+r)||h===0)return null;let u=(o+l)/2,d=(a+c)/2,p=(u*r-d*s)/h,g=(d*i-u*s)/h,x=Math.sqrt(p*p+g*g+(i+r)/n.length),m=0;for(let f of n){let v=Math.hypot(f[0]-t-p,f[1]-e-g)-x;m+=v*v}return{cx:t+p,cy:e+g,r:x,rms:Math.sqrt(m/n.length)}}function Xx(n,t,e,i,s){let r=e.n.clone(),o=new F().crossVectors(i,e.n).normalize(),a=(_,w)=>{let L=null;for(let R of _.groups){if(Math.abs(R.n.dot(i))>.03)continue;let P=new F().crossVectors(_.n,R.n).dot(i);Math.sign(P)===w&&(!L||R.count>L.count)&&(L=R)}return L?{g:L,ang:Math.acos(Math.min(1,_.n.dot(L.n)))}:null},l=[a(e,1),a(e,-1)],c=Math.max(l[0]?l[0].ang:0,l[1]?l[1].ang:0);if(!c)return null;let h=bd(n,e,i,o,r),u=new Set([e.id]),d=[e],p=[...h.pts],g=!1,x=c;for(let _ of[1,-1]){let w=e;for(let L=0;L<1440;L++){let R=a(w,_);if(!R||R.ang<.7*c||R.ang>1.45*c)break;let P=Ad(n,t,R.g.u);if(P.id===e.id){g=!0;break}if(u.has(P.id))break;let z=bd(n,P,i,o,r);if(z.w<.6*h.w||z.w>1.6*h.w)break;u.add(P.id),d.push(P),p.push(...z.pts),x+=R.ang,w=P}if(g)break}if(d.length<2)return null;let m=Wx(p);if(!m||!(m.r>0)||m.rms>.03*m.r)return null;let f=s.dot(i),v=o.clone().multiplyScalar(m.cx).addScaledVector(r,m.cy).addScaledVector(i,f),b=s.clone().sub(v).dot(e.n)<0,S=0;for(let _ of d)S+=_.tris.length;let E=new Float32Array(9*S),T=0;for(let _ of d)for(let w of _.tris)for(let L=0;L<9;L++)E[T++]=n.P[9*w+L];return{r:m.r,closed:g,arc:g?360:$e.radToDeg(x),concave:b,center:v,d:i,e1:o,e2:r,tris:E,facets:d.length}}function Rd(n,t,e,i){let s=Gx(n,i),r={mark:new Int32Array(s.T),facets:[null]},o=Ad(s,r,t);if(o.n.lengthSq()===0)return null;let a=null,l=[];for(let c of o.groups){let h=new F().crossVectors(o.n,c.n);if(h.lengthSq()<1e-12||(h.normalize(),l.some(d=>Math.abs(d.dot(h))>.9999)))continue;l.push(h);let u=Xx(s,r,o,h,e);u&&(!a||u.facets>a.facets)&&(a=u)}return a}var Cd=1.24,qx=.9,Pd=.15,Yx=-Math.SQRT1_2,Zx=.3;function Nc(n,t){let e=t.getSize(new F),i=Math.max(e.x,e.y,1e-6)/200,s=Math.max(1,Math.ceil(e.x/i)),r=Math.max(1,Math.ceil(e.y/i)),o=t.min.x,a=t.min.y,l=t.min.z,c=new Int32Array(s*r).fill(-1),h=[],u=[],d=[],p=0,g=0,x=new F,m=new F,f=new F;n.updateMatrixWorld(!0),n.traverse(S=>{if(!S.isMesh)return;let E=S.geometry.attributes.position,T=S.geometry.index,_=S.matrixWorld,w=T?T.count:E.count;for(let L=0;L+2<w;L+=3){x.fromBufferAttribute(E,T?T.getX(L):L).applyMatrix4(_),m.fromBufferAttribute(E,T?T.getX(L+1):L+1).applyMatrix4(_),f.fromBufferAttribute(E,T?T.getX(L+2):L+2).applyMatrix4(_),p+=(x.x*(m.y*f.z-m.z*f.y)-x.y*(m.x*f.z-m.z*f.x)+x.z*(m.x*f.y-m.y*f.x))/6;let R=m.x-x.x,P=m.y-x.y,z=m.z-x.z,q=f.x-x.x,C=f.y-x.y,D=f.z-x.z,H=P*D-z*C,k=z*q-R*D,et=R*C-P*q,V=Math.hypot(H,k,et);if(g+=V/2,V===0||Math.abs(et)<1e-9*V)continue;let rt=et/V,ct=Math.max(0,Math.ceil((Math.min(x.x,m.x,f.x)-o)/i-.5)),Pt=Math.min(s-1,Math.floor((Math.max(x.x,m.x,f.x)-o)/i-.5)),kt=Math.max(0,Math.ceil((Math.min(x.y,m.y,f.y)-a)/i-.5)),K=Math.min(r-1,Math.floor((Math.max(x.y,m.y,f.y)-a)/i-.5));for(let ht=kt;ht<=K;ht++){let Tt=a+(ht+.5)*i;for(let Dt=ct;Dt<=Pt;Dt++){let I=o+(Dt+.5)*i,U=(m.x-x.x)*(Tt-x.y)-(m.y-x.y)*(I-x.x),j=(f.x-m.x)*(Tt-m.y)-(f.y-m.y)*(I-m.x),G=(x.x-f.x)*(Tt-f.y)-(x.y-f.y)*(I-f.x);if(!(U>=0&&j>=0&&G>=0||U<=0&&j<=0&&G<=0))continue;let J=x.z-(H*(I-x.x)+k*(Tt-x.y))/et,Z=ht*s+Dt;h.push(J),u.push(rt),d.push(c[Z]),c[Z]=h.length-1}}}});let v=0,b=[];for(let S=0;S<c.length;S++){b.length=0;for(let T=c[S];T>=0;T=d[T])b.push(T);if(!b.length)continue;b.sort((T,_)=>h[T]-h[_]||u[_]-u[T]);let E=l;for(let T of b)u[T]>0?E=h[T]:u[T]<Yx&&h[T]-E>Zx&&(v+=(h[T]-E)*i*i)}return{volume:Math.abs(p),area:g,supportVol:v,height:e.z}}function Id(n,t){if(!(n.volume>0)||!(n.area>0))return null;let e=Math.max(0,1-qx/(3*n.volume/n.area)),i=n.volume*e*e*e,s=(n.volume-i+t*i)*Cd/1e3,r=n.supportVol*Pd*Cd/1e3,o=r>=.1&&n.supportVol>.005*n.volume;return{part:s,support:r,needsSupport:o,seconds:ey(n,n.volume-i,t*i,o?n.supportVol*Pd:0)}}var Jx=.2,Kx=390,$x=3,jx=9,Qx=14,ty=8;function ey(n,t,e,i){let s=Math.ceil((n.height||0)/Jx);return Kx+t/jx+e/Qx+i/ty+s*$x}function ny(){let n="";try{n=new URLSearchParams(location.search).get("lang")||""}catch{}try{!n&&window.AndroidHost&&window.AndroidHost.lang&&(n=window.AndroidHost.lang())}catch{}return n||(n=navigator.language||"en"),n=n.toLowerCase(),n.startsWith("he")||n.startsWith("iw")?"he":"en"}var Ci=ny(),iy={he:{open:"\u05E4\u05EA\u05D7 \u05E7\u05D5\u05D1\u05E5",choose:"\u05D1\u05D7\u05E8 \u05E7\u05D5\u05D1\u05E5",intro:"\u05E4\u05EA\u05D7 \u05E7\u05D5\u05D1\u05E5 STL, 3MF \u05D0\u05D5 STEP \u05DB\u05D3\u05D9 \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05D4\u05DE\u05D5\u05D3\u05DC \u05D5\u05D0\u05EA \u05D4\u05DE\u05D9\u05D3\u05D5\u05EA \u05D4\u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA \u05E9\u05DC\u05D5.",hint:"\u05D0\u05E6\u05D1\u05E2 \u05D0\u05D7\u05EA \u2013 \u05E1\u05D9\u05D1\u05D5\u05D1 \xB7 \u05E6\u05D1\u05D9\u05D8\u05D4 \u2013 \u05D6\u05D5\u05DD \xB7 \u05E9\u05EA\u05D9 \u05D0\u05E6\u05D1\u05E2\u05D5\u05EA \u2013 \u05D4\u05D6\u05D6\u05D4",modeGroup:"\u05E1\u05D5\u05D2 \u05DE\u05D3\u05D9\u05D3\u05D4",mFace:"\u05D1\u05D9\u05DF \u05E4\u05D0\u05D5\u05EA",mPoint:"\u05D1\u05D9\u05DF \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA",mRound:"\u05E7\u05D5\u05D8\u05E8/\u05E8\u05D3\u05D9\u05D5\u05E1",clear:"\u05E0\u05E7\u05D4",layReset:"\u05D4\u05D7\u05D6\u05E8 \u05DC\u05DE\u05E7\u05D5\u05E8",xw:"X \u05E8\u05D5\u05D7\u05D1",yd:"Y \u05E2\u05D5\u05DE\u05E7",zh:"Z \u05D2\u05D5\u05D1\u05D4",mm:"\u05DE\u05F4\u05DE",g:"\u05D2\u05E8\u05DD",wTitle:"\u05D4\u05E2\u05E8\u05DB\u05D4 \u05DC-PLA, \u05E9\u05DB\u05D1\u05D4 0.2 \u05DE\u05F4\u05DE",wModel:"\u05D4\u05DE\u05D5\u05D3\u05DC",wSupports:"\u05EA\u05DE\u05D9\u05DB\u05D5\u05EA",wTotal:"\u05E1\u05D4\u05F4\u05DB",wTime:"\u05D6\u05DE\u05DF \u05D4\u05D3\u05E4\u05E1\u05D4",minutes:"\u05D3\u05E7\u05F3",hours:"\u05E9\u05E2\u05F3",infill:"\u05DE\u05D9\u05DC\u05D5\u05D9",vReset:"\u05D0\u05D9\u05E4\u05D5\u05E1",vTop:"\u05DE\u05E2\u05DC",vFront:"\u05D7\u05D6\u05D9\u05EA",vSide:"\u05E6\u05D3",box:"\u05EA\u05D9\u05D1\u05D4",measure:"\u05DE\u05D3\u05D9\u05D3\u05D4",lay:"\u05D4\u05E0\u05D7 \u05E2\u05DC \u05E4\u05D0\u05D4",lightBg:"\u05E8\u05E7\u05E2 \u05D1\u05D4\u05D9\u05E8",check:"\u05D1\u05D3\u05D9\u05E7\u05D4",checkTitle:"\u05D1\u05D3\u05D9\u05E7\u05EA \u05D4\u05DE\u05D5\u05D3\u05DC \u05DC\u05D4\u05D3\u05E4\u05E1\u05D4",checkRunning:"\u05D1\u05D5\u05D3\u05E7 \u05D0\u05EA \u05D4\u05DE\u05D5\u05D3\u05DC\u2026",checkFailed:"\u05D4\u05D1\u05D3\u05D9\u05E7\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4",checkOk:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05D1\u05E2\u05D9\u05D5\u05EA",checkWarn:"\u05D9\u05E9 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05E9\u05E9\u05D5\u05D5\u05D4 \u05DC\u05D1\u05D3\u05D5\u05E7",checkBad:"\u05E0\u05DE\u05E6\u05D0\u05D4 \u05D1\u05E2\u05D9\u05D4 \u05E9\u05DB\u05D3\u05D0\u05D9 \u05DC\u05EA\u05E7\u05DF \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D4\u05D3\u05E4\u05E1\u05D4",checkNote:"\u05D4\u05D1\u05D3\u05D9\u05E7\u05D4 \u05E0\u05E2\u05E9\u05D9\u05EA \u05E2\u05DC \u05D4\u05E8\u05E9\u05EA \u05D1\u05DC\u05D1\u05D3 \u05D5\u05D0\u05D9\u05E0\u05D4 \u05DE\u05D7\u05DC\u05D9\u05E4\u05D4 \u05D7\u05D9\u05EA\u05D5\u05DA \u05D1\u05E1\u05DC\u05D9\u05D9\u05E1\u05E8.",bedLabel:"\u05DE\u05E9\u05D8\u05D7 \u05D4\u05D3\u05E4\u05E1\u05D4",ckClosed:"\u05D4\u05E8\u05E9\u05EA \u05E1\u05D2\u05D5\u05E8\u05D4",ckOpen:"\u05D4\u05E8\u05E9\u05EA \u05DC\u05D0 \u05E1\u05D2\u05D5\u05E8\u05D4",ckOpenD:n=>n+" \u05E7\u05E6\u05D5\u05D5\u05EA \u05E4\u05EA\u05D5\u05D7\u05D9\u05DD, \u05DE\u05E1\u05D5\u05DE\u05E0\u05D9\u05DD \u05D1\u05D5\u05D5\u05E8\u05D5\u05D3 \u05E2\u05DC \u05D4\u05DE\u05D5\u05D3\u05DC. \u05E1\u05DC\u05D9\u05D9\u05E1\u05E8 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05EA\u05E7\u05DF \u05D7\u05D5\u05E8\u05D9\u05DD \u05E7\u05D8\u05E0\u05D9\u05DD, \u05D0\u05D1\u05DC \u05D4\u05EA\u05D5\u05E6\u05D0\u05D4 \u05DC\u05D0 \u05DE\u05D5\u05D1\u05D8\u05D7\u05EA.",ckNonManifold:"\u05E7\u05E6\u05D5\u05D5\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D9\u05DD",ckNonManifoldD:n=>n+" \u05E7\u05E6\u05D5\u05D5\u05EA \u05E9\u05D1\u05D4\u05DD \u05E0\u05E4\u05D2\u05E9\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8 \u05DE\u05E9\u05E0\u05D9 \u05DE\u05E9\u05D8\u05D7\u05D9\u05DD.",ckInverted:"\u05D4\u05DE\u05E9\u05D8\u05D7\u05D9\u05DD \u05D4\u05E4\u05D5\u05DB\u05D9\u05DD",ckInvertedD:"\u05D4\u05E4\u05E0\u05D9\u05DD \u05D5\u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05DE\u05D5\u05D3\u05DC \u05DE\u05D5\u05D7\u05DC\u05E4\u05D9\u05DD. \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05E4\u05D5\u05DA \u05D0\u05EA \u05D4\u05E0\u05D5\u05E8\u05DE\u05DC\u05D9\u05DD \u05D1\u05EA\u05D5\u05DB\u05E0\u05EA \u05D4\u05EA\u05DB\u05E0\u05D5\u05DF.",ckInconsistent:"\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05DE\u05E9\u05D8\u05D7\u05D9\u05DD \u05DC\u05D0 \u05D0\u05D7\u05D9\u05D3",ckInconsistentD:n=>"\u05D1-"+n+" \u05E7\u05E6\u05D5\u05D5\u05EA \u05E9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05D8\u05D7\u05D9\u05DD \u05D4\u05E1\u05DE\u05D5\u05DB\u05D9\u05DD \u05E4\u05D5\u05E0\u05D9\u05DD \u05DC\u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD \u05DE\u05E0\u05D5\u05D2\u05D3\u05D9\u05DD.",ckOriented:"\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05DE\u05E9\u05D8\u05D7\u05D9\u05DD \u05EA\u05E7\u05D9\u05DF",ckDegenerate:n=>n+" \u05DE\u05E9\u05D5\u05DC\u05E9\u05D9\u05DD \u05D1\u05E9\u05D8\u05D7 \u05D0\u05E4\u05E1",ckDegenerateD:"\u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05DC\u05D0 \u05DE\u05E4\u05E8\u05D9\u05E2, \u05D0\u05D1\u05DC \u05DE\u05E2\u05D9\u05D3 \u05E2\u05DC \u05D9\u05D9\u05E6\u05D5\u05D0 \u05DC\u05D0 \u05E0\u05E7\u05D9.",ckBodies:n=>n+" \u05D2\u05D5\u05E4\u05D9\u05DD \u05E0\u05E4\u05E8\u05D3\u05D9\u05DD \u05D1\u05E7\u05D5\u05D1\u05E5",ckBodiesD:"\u05EA\u05E7\u05D9\u05DF \u05D1\u05DE\u05D5\u05D3\u05DC \u05DE\u05E8\u05D5\u05D1\u05D4 \u05D7\u05DC\u05E7\u05D9\u05DD. \u05D5\u05D3\u05D0 \u05E8\u05E7 \u05E9\u05DC\u05D0 \u05E0\u05E9\u05D0\u05E8 \u05D7\u05DC\u05E7 \u05E7\u05D8\u05DF \u05D1\u05D8\u05E2\u05D5\u05EA.",ckOneBody:"\u05D2\u05D5\u05E3 \u05D0\u05D7\u05D3",ckTiny:"\u05D4\u05DE\u05D5\u05D3\u05DC \u05E7\u05D8\u05DF \u05DE\u05D0\u05D5\u05D3",ckTinyD:n=>n+". \u05D9\u05D9\u05EA\u05DB\u05DF \u05E9\u05D4\u05E7\u05D5\u05D1\u05E5 \u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05DE\u05D9\u05DC\u05D9\u05DE\u05D8\u05E8\u05D9\u05DD.",ckHuge:"\u05D4\u05DE\u05D5\u05D3\u05DC \u05D2\u05D3\u05D5\u05DC \u05DE\u05D0\u05D5\u05D3",ckHugeD:n=>n+". \u05D9\u05D9\u05EA\u05DB\u05DF \u05E9\u05D4\u05E7\u05D5\u05D1\u05E5 \u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05DE\u05D9\u05DC\u05D9\u05DE\u05D8\u05E8\u05D9\u05DD.",ckSize:"\u05D2\u05D5\u05D3\u05DC \u05E1\u05D1\u05D9\u05E8",ckFits:n=>"\u05E0\u05DB\u05E0\u05E1 \u05DC\u05DE\u05E9\u05D8\u05D7 \u05E9\u05DC "+n+" \u05DE\u05F4\u05DE",ckNoFit:n=>"\u05DC\u05D0 \u05E0\u05DB\u05E0\u05E1 \u05DC\u05DE\u05E9\u05D8\u05D7 \u05E9\u05DC "+n+" \u05DE\u05F4\u05DE",ckNoFitD:n=>"\u05D4\u05DE\u05DE\u05D3 \u05D4\u05D2\u05D3\u05D5\u05DC \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D4\u05D5\u05D0 "+n+" \u05DE\u05F4\u05DE.",ckDiagonal:n=>"\u05D4\u05DE\u05DE\u05D3 \u05D4\u05D2\u05D3\u05D5\u05DC \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D4\u05D5\u05D0 "+n+" \u05DE\u05F4\u05DE. \u05D9\u05D9\u05EA\u05DB\u05DF \u05E9\u05D9\u05D9\u05DB\u05E0\u05E1 \u05D1\u05D0\u05DC\u05DB\u05E1\u05D5\u05DF.",ckThin:n=>"\u05E0\u05DE\u05E6\u05D0\u05D5 \u05D3\u05E4\u05E0\u05D5\u05EA \u05D3\u05E7\u05D5\u05EA \u05DE-"+n+" \u05DE\u05F4\u05DE",ckThinD:n=>"\u05D4\u05D3\u05E7 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E9\u05E0\u05DE\u05D3\u05D3: "+n+" \u05DE\u05F4\u05DE. \u05D4\u05D0\u05D6\u05D5\u05E8\u05D9\u05DD \u05DE\u05E1\u05D5\u05DE\u05E0\u05D9\u05DD \u05D1\u05E6\u05D4\u05D5\u05D1 \u05E2\u05DC \u05D4\u05DE\u05D5\u05D3\u05DC.",ckNoThin:n=>"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05D3\u05E4\u05E0\u05D5\u05EA \u05D3\u05E7\u05D5\u05EA \u05DE-"+n+" \u05DE\u05F4\u05DE",ckSampled:"\u05D1\u05D3\u05D9\u05E7\u05D4 \u05DE\u05D3\u05D2\u05DE\u05D9\u05EA, \u05DC\u05D0 \u05E9\u05DC \u05DB\u05DC \u05D4\u05DE\u05E9\u05D8\u05D7.",ckThinSkipped:"\u05E2\u05D5\u05D1\u05D9 \u05D4\u05D3\u05E4\u05E0\u05D5\u05EA \u05DC\u05D0 \u05E0\u05D1\u05D3\u05E7",ckThinSkippedOpen:"\u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05DE\u05D3\u05D5\u05D3 \u05E2\u05D5\u05D1\u05D9 \u05DB\u05E9\u05D4\u05E8\u05E9\u05EA \u05DC\u05D0 \u05E1\u05D2\u05D5\u05E8\u05D4.",ckThinSkippedInverted:"\u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05DE\u05D3\u05D5\u05D3 \u05E2\u05D5\u05D1\u05D9 \u05DB\u05E9\u05D4\u05DE\u05E9\u05D8\u05D7\u05D9\u05DD \u05D4\u05E4\u05D5\u05DB\u05D9\u05DD.",ckThinSkippedBig:"\u05D4\u05DE\u05D5\u05D3\u05DC \u05DE\u05E4\u05D5\u05E8\u05D8 \u05DE\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D9\u05E7\u05D4 \u05D4\u05D6\u05D5.",ckTopoSkipped:"\u05E9\u05DC\u05DE\u05D5\u05EA \u05D4\u05E8\u05E9\u05EA \u05DC\u05D0 \u05E0\u05D1\u05D3\u05E7\u05D4",ckTopoSkippedD:"\u05D4\u05DE\u05D5\u05D3\u05DC \u05DE\u05E4\u05D5\u05E8\u05D8 \u05DE\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D9\u05E7\u05D4 \u05D4\u05D6\u05D5.",overhang:"\u05D0\u05D6\u05D5\u05E8\u05D9\u05DD \u05EA\u05DC\u05D5\u05D9\u05D9\u05DD",share:"\u05E9\u05D9\u05EA\u05D5\u05E3",recent:"\u05E7\u05D1\u05E6\u05D9\u05DD \u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD",recentEmpty:"\u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05E0\u05E4\u05EA\u05D7\u05D5 \u05E7\u05D1\u05E6\u05D9\u05DD.",recentGone:"\u05D4\u05E7\u05D5\u05D1\u05E5 \u05DB\u05D1\u05E8 \u05DC\u05D0 \u05E9\u05DE\u05D5\u05E8 \u05D1\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4",recentRemove:"\u05D4\u05E1\u05E8 \u05DE\u05D4\u05E8\u05E9\u05D9\u05DE\u05D4",mAngle:"\u05D6\u05D5\u05D5\u05D9\u05EA",angleParallel:"\u05D4\u05E4\u05D0\u05D5\u05EA \u05DE\u05E7\u05D1\u05D9\u05DC\u05D5\u05EA",angleNote:n=>"\u05D4\u05D6\u05D5\u05D5\u05D9\u05EA \u05D1\u05D9\u05DF \u05E9\u05EA\u05D9 \u05D4\u05E4\u05D0\u05D5\u05EA \xB7 \u05D4\u05DE\u05E9\u05DC\u05D9\u05DE\u05D4: "+n+"\xB0",layAuto:"\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9",autoWorking:"\u05DE\u05D7\u05E4\u05E9 \u05D0\u05EA \u05D4\u05DB\u05D9\u05D5\u05D5\u05DF \u05E2\u05DD \u05D4\u05DB\u05D9 \u05DE\u05E2\u05D8 \u05EA\u05DE\u05D9\u05DB\u05D5\u05EA\u2026",autoDone:"\u05E0\u05D1\u05D7\u05E8 \u05D4\u05DB\u05D9\u05D5\u05D5\u05DF \u05E2\u05DD \u05D4\u05DB\u05D9 \u05DE\u05E2\u05D8 \u05EA\u05DE\u05D9\u05DB\u05D5\u05EA.",autoSame:"\u05D4\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05DB\u05D1\u05E8 \u05D3\u05D5\u05E8\u05E9 \u05D4\u05DB\u05D9 \u05DE\u05E2\u05D8 \u05EA\u05DE\u05D9\u05DB\u05D5\u05EA.",shareHint:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4 \u05E2\u05DC \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05E9\u05DE\u05D5\u05E8 \u05D0\u05D5 \u05DC\u05E9\u05EA\u05E3 \u05D0\u05D5\u05EA\u05D4",shareFail:"\u05D4\u05E9\u05D9\u05EA\u05D5\u05E3 \u05E0\u05DB\u05E9\u05DC",shareWeight:(n,t,e)=>"\u05DE\u05E9\u05E7\u05DC PLA \u05DE\u05E9\u05D5\u05E2\u05E8: "+n+" \u05D2\u05E8\u05DD"+(t?" (\u05DB\u05D5\u05DC\u05DC "+t+" \u05D2\u05E8\u05DD \u05EA\u05DE\u05D9\u05DB\u05D5\u05EA)":"")+" \xB7 \u05DE\u05D9\u05DC\u05D5\u05D9 "+e+"%",shareTime:n=>"\u05D6\u05DE\u05DF \u05D4\u05D3\u05E4\u05E1\u05D4 \u05DE\u05E9\u05D5\u05E2\u05E8: "+n,noGeom:"\u05D4\u05E7\u05D5\u05D1\u05E5 \u05DC\u05D0 \u05DE\u05DB\u05D9\u05DC \u05D2\u05D9\u05D0\u05D5\u05DE\u05D8\u05E8\u05D9\u05D4",meta:(n,t)=>n+" \u05DE\u05E9\u05D5\u05DC\u05E9\u05D9\u05DD \xB7 \u05E8\u05E9\u05EA "+t+" \u05DE\u05F4\u05DE",layDone:"\u05D4\u05DE\u05D5\u05D3\u05DC \u05D4\u05D5\u05E0\u05D7 \u05E2\u05DC \u05D4\u05E4\u05D0\u05D4. \u05D4\u05E7\u05E9 \u05E2\u05DC \u05E4\u05D0\u05D4 \u05D0\u05D7\u05E8\u05EA \u05DB\u05D3\u05D9 \u05DC\u05E9\u05E0\u05D5\u05EA.",layPrompt:"\u05D4\u05E7\u05E9 \u05E2\u05DC \u05D4\u05E4\u05D0\u05D4 \u05E9\u05EA\u05D5\u05E0\u05D7 \u05E2\u05DC \u05D4\u05DE\u05E9\u05D8\u05D7",noVol:"\u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D7\u05E9\u05D1 \u05DE\u05E9\u05E7\u05DC \u2013 \u05D4\u05E8\u05E9\u05EA \u05DC\u05D0 \u05E1\u05D2\u05D5\u05E8\u05D4",notNeeded:"\u05DC\u05D0 \u05E0\u05D3\u05E8\u05E9\u05D5\u05EA",stepEngineFail:"\u05D8\u05E2\u05D9\u05E0\u05EA \u05DE\u05E0\u05D5\u05E2 \u05D4-STEP \u05E0\u05DB\u05E9\u05DC\u05D4",stepLoading:"\u05D8\u05D5\u05E2\u05DF \u05DE\u05E0\u05D5\u05E2 STEP (\u05DB-7MB, \u05E4\u05E2\u05DD \u05D0\u05D7\u05EA)\u2026",stepConvert:"\u05DE\u05DE\u05D9\u05E8 STEP \u05DC\u05E8\u05E9\u05EA\u2026",stepFail:"\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05EA\u05D9 \u05DC\u05E7\u05E8\u05D5\u05D0 \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4-STEP",roundPrompt:"\u05D4\u05E7\u05E9 \u05E2\u05DC \u05D3\u05D5\u05E4\u05DF \u05E9\u05DC \u05D7\u05D5\u05E8 \u05D0\u05D5 \u05E2\u05DC \u05E4\u05D9\u05DC\u05D8",hole:"\u05D7\u05D5\u05E8",cylinder:"\u05D2\u05DC\u05D9\u05DC",radius:"\u05E8\u05D3\u05D9\u05D5\u05E1",innerR:"\u05E8\u05D3\u05D9\u05D5\u05E1 \u05E4\u05E0\u05D9\u05DE\u05D9",outerR:"\u05E8\u05D3\u05D9\u05D5\u05E1 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9",arc:"\u05E7\u05E9\u05EA",diameter:"\u05E7\u05D5\u05D8\u05E8",tapFirst:{face:"\u05D4\u05E7\u05E9 \u05E2\u05DC \u05E4\u05D0\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05DE\u05D5\u05D3\u05DC",angle:"\u05D4\u05E7\u05E9 \u05E2\u05DC \u05E4\u05D0\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05DE\u05D5\u05D3\u05DC",point:"\u05D4\u05E7\u05E9 \u05E2\u05DC \u05E0\u05E7\u05D5\u05D3\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05DE\u05D5\u05D3\u05DC"},tapSecond:{face:"\u05D4\u05E7\u05E9 \u05E2\u05DC \u05E4\u05D0\u05D4 \u05E9\u05E0\u05D9\u05D9\u05D4",angle:"\u05D4\u05E7\u05E9 \u05E2\u05DC \u05E4\u05D0\u05D4 \u05E9\u05E0\u05D9\u05D9\u05D4",point:"\u05D4\u05E7\u05E9 \u05E2\u05DC \u05E0\u05E7\u05D5\u05D3\u05D4 \u05E9\u05E0\u05D9\u05D9\u05D4"},parallel:"\u05DE\u05E8\u05D7\u05E7 \u05E0\u05D9\u05E6\u05D1 \u05D1\u05D9\u05DF \u05E4\u05D0\u05D5\u05EA \u05DE\u05E7\u05D1\u05D9\u05DC\u05D5\u05EA",notParallel:n=>"\u05D4\u05E4\u05D0\u05D5\u05EA \u05DC\u05D0 \u05DE\u05E7\u05D1\u05D9\u05DC\u05D5\u05EA (\u05D6\u05D5\u05D5\u05D9\u05EA "+n+"\xB0) \u2013 \u05DE\u05E8\u05D7\u05E7 \u05DE\u05E0\u05E7\u05D5\u05D3\u05EA \u05D4\u05D4\u05E7\u05E9\u05D4 \u05DC\u05DE\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E4\u05D0\u05D4 \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4",tooBig:"\u05D4\u05E8\u05E9\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4 \u05DE\u05D3\u05D9 \u05DC\u05DE\u05D3\u05D9\u05D3\u05EA \u05E7\u05D5\u05D8\u05E8",analyzing:"\u05DE\u05E0\u05EA\u05D7 \u05D0\u05EA \u05D4\u05E8\u05E9\u05EA\u2026",noRound:"\u05DC\u05D0 \u05D6\u05D5\u05D4\u05D4 \u05DB\u05D0\u05DF \u05DE\u05E9\u05D8\u05D7 \u05E2\u05D2\u05D5\u05DC \u2013 \u05E0\u05E1\u05D4 \u05DC\u05D4\u05E7\u05D9\u05E9 \u05E2\u05DC \u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05E8 \u05D1\u05E7\u05D9\u05DE\u05D5\u05E8",unsupported:n=>"\u05E1\u05D5\u05D2 \u05E7\u05D5\u05D1\u05E5 \u05DC\u05D0 \u05E0\u05EA\u05DE\u05DA: "+n+". \u05E0\u05EA\u05DE\u05DB\u05D9\u05DD STL, 3MF, STEP",opening:n=>"\u05E4\u05D5\u05EA\u05D7 \u05D0\u05EA "+n+"\u2026",openErr:"\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5",pendingErr:"\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05EA\u05D9 \u05DC\u05E7\u05E8\u05D5\u05D0 \u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 \u05E9\u05E0\u05E9\u05DC\u05D7 \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4",trialLeft:n=>n===1?"\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D7\u05D9\u05E0\u05DD: \u05E0\u05D5\u05EA\u05E8 \u05D9\u05D5\u05DD \u05D0\u05D7\u05D3":"\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D7\u05D9\u05E0\u05DD: \u05E0\u05D5\u05EA\u05E8\u05D5 "+n+" \u05D9\u05DE\u05D9\u05DD",trialBuy:"\u05DC\u05E8\u05DB\u05D9\u05E9\u05D4",payTitleExpired:"\u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D4\u05E1\u05EA\u05D9\u05D9\u05DE\u05D4",payBody:"\u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1-Mobile 3D View \u05E0\u05D3\u05E8\u05E9 \u05EA\u05E9\u05DC\u05D5\u05DD \u05D7\u05D3-\u05E4\u05E2\u05DE\u05D9. \u05D1\u05DC\u05D9 \u05DE\u05E0\u05D5\u05D9 \u05D5\u05D1\u05DC\u05D9 \u05E4\u05E8\u05E1\u05D5\u05DE\u05D5\u05EA.",payBuy:"\u05E8\u05DB\u05D9\u05E9\u05D4",payRestore:"\u05E9\u05D7\u05D6\u05E8 \u05E8\u05DB\u05D9\u05E9\u05D4",payChecking:"\u05D1\u05D5\u05D3\u05E7\u2026",payRestoreNone:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D4 \u05E8\u05DB\u05D9\u05E9\u05D4 \u05D1\u05D7\u05E9\u05D1\u05D5\u05DF Google \u05D4\u05D6\u05D4.",payPending:"\u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05DE\u05EA\u05D9\u05DF \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8. \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05EA\u05D9\u05E4\u05EA\u05D7 \u05DB\u05E9\u05D4\u05D5\u05D0 \u05D9\u05D0\u05D5\u05E9\u05E8.",payUnavailable:"\u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05DC\u05D0 \u05D6\u05DE\u05D9\u05E0\u05D4 \u05DB\u05E8\u05D2\u05E2. \u05D5\u05D3\u05D0 \u05E9\u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D4\u05D5\u05EA\u05E7\u05E0\u05D4 \u05DE-Google Play \u05D5\u05E9\u05D9\u05E9 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8.",lockedOpen:"\u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D4\u05E1\u05EA\u05D9\u05D9\u05DE\u05D4",contact:"\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8",contactTitle:"\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8",contactText:"\u05E0\u05EA\u05E7\u05DC\u05EA \u05D1\u05D1\u05E2\u05D9\u05D4, \u05D0\u05D5 \u05E9\u05D9\u05E9 \u05DC\u05DA \u05E8\u05E2\u05D9\u05D5\u05DF \u05DC\u05E9\u05D9\u05E4\u05D5\u05E8? \u05E0\u05E9\u05DE\u05D7 \u05DC\u05E9\u05DE\u05D5\u05E2.",contactSend:"\u05E9\u05DC\u05D7 \u05DC\u05E0\u05D5 \u05DE\u05D9\u05D9\u05DC",contactSubject:"Mobile 3D View \u2013 \u05DE\u05E9\u05D5\u05D1",contactNoApp:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D4 \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05D3\u05D5\u05D0\u05E8. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05DC\u05E0\u05D5 \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA:",about:"\u05D0\u05D5\u05D3\u05D5\u05EA \u05D5\u05E8\u05D9\u05E9\u05D9\u05D5\u05E0\u05D5\u05EA",aboutClose:"\u05E1\u05D2\u05D5\u05E8",aboutBack:"\u05D7\u05D6\u05E8\u05D4",aboutText:"\u05D4\u05E7\u05D1\u05E6\u05D9\u05DD \u05E9\u05D0\u05EA\u05D4 \u05E4\u05D5\u05EA\u05D7 \u05E0\u05E9\u05D0\u05E8\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D5\u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7\u05D9\u05DD \u05DC\u05E9\u05D5\u05DD \u05E9\u05E8\u05EA. \u05D0\u05D9\u05DF \u05E4\u05E8\u05E1\u05D5\u05DE\u05D5\u05EA \u05D5\u05D0\u05D9\u05DF \u05DE\u05E2\u05E7\u05D1. \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D3\u05E8\u05DA Google Play.",aboutOss:"\u05E8\u05DB\u05D9\u05D1\u05D9 \u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7",aboutView:"\u05D4\u05E6\u05D2 \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF",tourHelp:"\u05DE\u05D3\u05E8\u05D9\u05DA",tourNext:"\u05D4\u05D1\u05D0",tourBack:"\u05D4\u05E7\u05D5\u05D3\u05DD",tourSkip:"\u05D3\u05DC\u05D2",tourDone:"\u05D1\u05D5\u05D0 \u05E0\u05EA\u05D7\u05D9\u05DC",tourOpenWith:"\u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05E7\u05D5\u05D1\u05E5 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4, \u05D1\u05DE\u05D9\u05D9\u05DC \u05D0\u05D5 \u05D1\u05DE\u05E0\u05D4\u05DC \u05D4\u05E7\u05D1\u05E6\u05D9\u05DD \u05D5\u05DC\u05D1\u05D7\u05D5\u05E8 \u05D1\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D1\u05F4\u05E4\u05EA\u05D7 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA\u05F4.",tour:[["\u05E4\u05D5\u05EA\u05D7\u05D9\u05DD \u05DE\u05D5\u05D3\u05DC","\u05DC\u05D7\u05E5 \u05E2\u05DC \u05F4\u05E4\u05EA\u05D7 \u05E7\u05D5\u05D1\u05E5\u05F4 \u05D5\u05D1\u05D7\u05E8 \u05E7\u05D5\u05D1\u05E5 STL, \u200F3MF \u05D0\u05D5 STEP. \u05D4\u05E7\u05D5\u05D1\u05E5 \u05E0\u05E9\u05D0\u05E8 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D5\u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7 \u05DC\u05E9\u05D5\u05DD \u05DE\u05E7\u05D5\u05DD. \u05DB\u05E4\u05EA\u05D5\u05E8 \u05D4\u05E9\u05E2\u05D5\u05DF \u05E4\u05D5\u05EA\u05D7 \u05DE\u05D7\u05D3\u05E9 \u05E7\u05D1\u05E6\u05D9\u05DD \u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD."],["\u05DE\u05E1\u05EA\u05DB\u05DC\u05D9\u05DD \u05DE\u05DB\u05DC \u05DB\u05D9\u05D5\u05D5\u05DF","\u05D0\u05E6\u05D1\u05E2 \u05D0\u05D7\u05EA \u05DE\u05E1\u05D5\u05D1\u05D1\u05EA, \u05E6\u05D1\u05D9\u05D8\u05D4 \u05DE\u05E7\u05E8\u05D1\u05EA \u05D5\u05DE\u05E8\u05D7\u05D9\u05E7\u05D4, \u05E9\u05EA\u05D9 \u05D0\u05E6\u05D1\u05E2\u05D5\u05EA \u05DE\u05D6\u05D9\u05D6\u05D5\u05EA. \u05D4\u05DB\u05E4\u05EA\u05D5\u05E8\u05D9\u05DD \u05DE\u05E2\u05DC, \u05D7\u05D6\u05D9\u05EA \u05D5\u05E6\u05D3 \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05DC\u05DE\u05D1\u05D8 \u05D9\u05E9\u05E8, \u05D5\u05F4\u05D0\u05D9\u05E4\u05D5\u05E1\u05F4 \u05DE\u05D7\u05D6\u05D9\u05E8 \u05DC\u05DE\u05D1\u05D8 \u05D4\u05D4\u05EA\u05D7\u05DC\u05EA\u05D9. \u05DE\u05D5\u05D3\u05DC \u05DB\u05D4\u05D4 \u05DE\u05D5\u05E6\u05D2 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05E2\u05DC \u05E8\u05E7\u05E2 \u05D1\u05D4\u05D9\u05E8, \u05D5\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D7\u05DC\u05D9\u05E3 \u05E2\u05DD \u05F4\u05E8\u05E7\u05E2 \u05D1\u05D4\u05D9\u05E8\u05F4."],["\u05DE\u05D9\u05D3\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA","\u05E8\u05D5\u05D7\u05D1, \u05E2\u05D5\u05DE\u05E7 \u05D5\u05D2\u05D5\u05D1\u05D4 \u05E9\u05DC \u05D4\u05DE\u05D5\u05D3\u05DC \u05D1\u05DE\u05D9\u05DC\u05D9\u05DE\u05D8\u05E8\u05D9\u05DD \u05DE\u05D5\u05E6\u05D2\u05D9\u05DD \u05EA\u05DE\u05D9\u05D3 \u05DC\u05DE\u05D8\u05D4. \u05D4\u05DB\u05E4\u05EA\u05D5\u05E8 \u05F4\u05EA\u05D9\u05D1\u05D4\u05F4 \u05DE\u05E6\u05D9\u05D2 \u05D0\u05D5 \u05DE\u05E1\u05EA\u05D9\u05E8 \u05D0\u05EA \u05D4\u05DE\u05E1\u05D2\u05E8\u05EA \u05E9\u05E1\u05D1\u05D9\u05D1 \u05D4\u05DE\u05D5\u05D3\u05DC."],["\u05DE\u05D5\u05D3\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D5\u05D3\u05DC","\u05DC\u05D7\u05E5 \u05E2\u05DC \u05F4\u05DE\u05D3\u05D9\u05D3\u05D4\u05F4 \u05D5\u05D1\u05D7\u05E8 \u05E1\u05D5\u05D2: \u05DE\u05E8\u05D7\u05E7 \u05E0\u05D9\u05E6\u05D1 \u05D1\u05D9\u05DF \u05E9\u05EA\u05D9 \u05E4\u05D0\u05D5\u05EA, \u05DE\u05E8\u05D7\u05E7 \u05D1\u05D9\u05DF \u05E9\u05EA\u05D9 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA, \u05E7\u05D5\u05D8\u05E8 \u05E9\u05DC \u05D7\u05D5\u05E8 \u05D5\u05E8\u05D3\u05D9\u05D5\u05E1 \u05E9\u05DC \u05E4\u05D9\u05DC\u05D8 \u05D1\u05D4\u05E7\u05E9\u05D4 \u05D0\u05D7\u05EA, \u05D0\u05D5 \u05D6\u05D5\u05D5\u05D9\u05EA \u05D1\u05D9\u05DF \u05E9\u05EA\u05D9 \u05E4\u05D0\u05D5\u05EA."],["\u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05D3\u05E4\u05E1\u05D4","\u05DC\u05D7\u05E5 \u05E2\u05DC \u05F4\u05D4\u05E0\u05D7 \u05E2\u05DC \u05E4\u05D0\u05D4\u05F4 \u05D5\u05D4\u05E7\u05E9 \u05E2\u05DC \u05D4\u05E4\u05D0\u05D4 \u05E9\u05EA\u05E9\u05D1 \u05E2\u05DC \u05D4\u05DE\u05E9\u05D8\u05D7, \u05D0\u05D5 \u05E2\u05DC \u05F4\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05F4 \u05DB\u05D3\u05D9 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05DB\u05D9\u05D5\u05D5\u05DF \u05E2\u05DD \u05D4\u05DB\u05D9 \u05DE\u05E2\u05D8 \u05EA\u05DE\u05D9\u05DB\u05D5\u05EA. \u05D4\u05D0\u05D6\u05D5\u05E8\u05D9\u05DD \u05E9\u05D3\u05D5\u05E8\u05E9\u05D9\u05DD \u05EA\u05DE\u05D9\u05DB\u05D4 \u05DE\u05E1\u05D5\u05DE\u05E0\u05D9\u05DD \u05D1\u05D0\u05D3\u05D5\u05DD. \u05F4\u05D1\u05D3\u05D9\u05E7\u05D4\u05F4 \u05DE\u05D5\u05D5\u05D3\u05D0\u05EA \u05E9\u05D4\u05DE\u05D5\u05D3\u05DC \u05EA\u05E7\u05D9\u05DF \u05DC\u05D4\u05D3\u05E4\u05E1\u05D4."],["\u05DE\u05E9\u05E7\u05DC \u05D5\u05D6\u05DE\u05DF \u05D4\u05D3\u05E4\u05E1\u05D4 \u05DE\u05E9\u05D5\u05E2\u05E8\u05D9\u05DD","\u05DC\u05DB\u05DC \u05DE\u05D5\u05D3\u05DC \u05DE\u05D5\u05E6\u05D2\u05D9\u05DD \u05DE\u05E9\u05E7\u05DC \u05D4\u05DE\u05D5\u05D3\u05DC \u05D1-PLA, \u05DE\u05E9\u05E7\u05DC \u05D4\u05EA\u05DE\u05D9\u05DB\u05D5\u05EA, \u05D4\u05E1\u05DA \u05D4\u05DB\u05D5\u05DC \u05D5\u05D6\u05DE\u05DF \u05D4\u05D4\u05D3\u05E4\u05E1\u05D4, \u05DC\u05E4\u05D9 \u05D4\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05D1\u05D5 \u05D4\u05E0\u05D7\u05EA \u05D0\u05D5\u05EA\u05D5 \u05D5\u05D0\u05D7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DC\u05D5\u05D9 \u05E9\u05D1\u05D7\u05E8\u05EA. \u05D6\u05D5 \u05D4\u05E2\u05E8\u05DB\u05D4 \u05DC\u05EA\u05DE\u05D7\u05D5\u05E8 \u05DE\u05D4\u05D9\u05E8, \u05DC\u05D0 \u05EA\u05D7\u05DC\u05D9\u05E3 \u05DC\u05E1\u05DC\u05D9\u05D9\u05E1\u05E8. \u05F4\u05E9\u05D9\u05EA\u05D5\u05E3\u05F4 \u05E9\u05D5\u05DC\u05D7 \u05EA\u05DE\u05D5\u05E0\u05D4 \u05E9\u05DC \u05D4\u05DE\u05D5\u05D3\u05DC \u05E2\u05DD \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD."]]},en:{open:"Open file",choose:"Choose file",intro:"Open an STL, 3MF or STEP file to view the model and its outer dimensions.",hint:"One finger \u2013 rotate \xB7 Pinch \u2013 zoom \xB7 Two fingers \u2013 pan",modeGroup:"Measurement type",mFace:"Faces",mPoint:"Points",mRound:"Dia./radius",clear:"Clear",layReset:"Reset",xw:"X width",yd:"Y depth",zh:"Z height",mm:"mm",g:"g",wTitle:"PLA estimate, 0.2 mm layers",wModel:"Model",wSupports:"Supports",wTotal:"Total",wTime:"Print time",minutes:"min",hours:"h",infill:"Infill",vReset:"Reset",vTop:"Top",vFront:"Front",vSide:"Side",box:"Box",measure:"Measure",lay:"Lay on face",lightBg:"Light backdrop",check:"Check",checkTitle:"Print check",checkRunning:"Checking the model\u2026",checkFailed:"The check failed",checkOk:"No problems found",checkWarn:"A few things worth a look",checkBad:"Found a problem to fix before printing",checkNote:"The check looks at the mesh only and does not replace slicing.",bedLabel:"Print bed",ckClosed:"The mesh is closed",ckOpen:"The mesh is not closed",ckOpenD:n=>n+" open edges, marked in pink on the model. A slicer may repair small holes, but the result is not guaranteed.",ckNonManifold:"Invalid edges",ckNonManifoldD:n=>n+" edges where more than two faces meet.",ckInverted:"The faces are inside out",ckInvertedD:"Inside and outside are swapped. Flip the normals in your design software.",ckInconsistent:"Face direction is inconsistent",ckInconsistentD:n=>"At "+n+" edges the two neighbouring faces point opposite ways.",ckOriented:"Face direction is consistent",ckDegenerate:n=>n+" zero-area triangles",ckDegenerateD:"Usually harmless, but a sign of an unclean export.",ckBodies:n=>n+" separate bodies in the file",ckBodiesD:"Normal for a multi-part model. Just make sure no small leftover part remains.",ckOneBody:"One body",ckTiny:"The model is very small",ckTinyD:n=>n+". The file may not be in millimetres.",ckHuge:"The model is very large",ckHugeD:n=>n+". The file may not be in millimetres.",ckSize:"Reasonable size",ckFits:n=>"Fits a "+n+" mm bed",ckNoFit:n=>"Does not fit a "+n+" mm bed",ckNoFitD:n=>"The largest dimension is "+n+" mm.",ckDiagonal:n=>"The largest dimension is "+n+" mm. It may fit diagonally.",ckThin:n=>"Found walls thinner than "+n+" mm",ckThinD:n=>"Thinnest measured: "+n+" mm. The areas are marked in yellow on the model.",ckNoThin:n=>"No walls thinner than "+n+" mm found",ckSampled:"Sampled check, not the whole surface.",ckThinSkipped:"Wall thickness was not checked",ckThinSkippedOpen:"Thickness cannot be measured on an open mesh.",ckThinSkippedInverted:"Thickness cannot be measured when the faces are inside out.",ckThinSkippedBig:"The model is too detailed for this check.",ckTopoSkipped:"Mesh integrity was not checked",ckTopoSkippedD:"The model is too detailed for this check.",overhang:"Overhangs",share:"Share",recent:"Recent files",recentEmpty:"No files opened yet.",recentGone:"This file is no longer stored in the app",recentRemove:"Remove from list",mAngle:"Angle",angleParallel:"The faces are parallel",angleNote:n=>"Angle between the two faces \xB7 supplement: "+n+"\xB0",layAuto:"Auto",autoWorking:"Looking for the orientation with the least support\u2026",autoDone:"Picked the orientation with the least support.",autoSame:"The current orientation already needs the least support.",shareHint:"Press and hold the picture to save or share it",shareFail:"Sharing failed",shareWeight:(n,t,e)=>"Estimated PLA weight: "+n+" g"+(t?" (incl. "+t+" g supports)":"")+" \xB7 "+e+"% infill",shareTime:n=>"Estimated print time: "+n,noGeom:"The file contains no geometry",meta:(n,t)=>n+" triangles \xB7 grid "+t+" mm",layDone:"Model laid on that face. Tap another face to change.",layPrompt:"Tap the face that should sit on the bed",noVol:"Cannot estimate weight \u2013 the mesh is not closed",notNeeded:"None needed",stepEngineFail:"Failed to load the STEP engine",stepLoading:"Loading STEP engine (about 7 MB, first time only)\u2026",stepConvert:"Converting STEP to mesh\u2026",stepFail:"Could not read the STEP file",roundPrompt:"Tap the wall of a hole, or a fillet",hole:"Hole",cylinder:"Cylinder",radius:"radius",innerR:"Inner radius",outerR:"Outer radius",arc:"arc",diameter:"diameter",tapFirst:{face:"Tap the first face on the model",angle:"Tap the first face on the model",point:"Tap the first point on the model"},tapSecond:{face:"Tap the second face",angle:"Tap the second face",point:"Tap the second point"},parallel:"Perpendicular distance between parallel faces",notParallel:n=>"Faces are not parallel (angle "+n+"\xB0) \u2013 distance from the tapped point to the plane of the first face",tooBig:"Mesh is too large for diameter measurement",analyzing:"Analysing mesh\u2026",noRound:"No round surface found here \u2013 try tapping elsewhere on the curve",unsupported:n=>"Unsupported file type: "+n+". Supported: STL, 3MF, STEP",opening:n=>"Opening "+n+"\u2026",openErr:"Error opening the file",pendingErr:"Could not read the file sent to the app",trialLeft:n=>n===1?"Free trial: 1 day left":"Free trial: "+n+" days left",trialBuy:"Buy",payTitleExpired:"Your free trial has ended",payBody:"To keep using Mobile 3D View, a one-time purchase is required. No subscription and no ads.",payBuy:"Buy",payRestore:"Restore purchase",payChecking:"Checking\u2026",payRestoreNone:"No purchase was found on this Google account.",payPending:"Your payment is pending. The app will unlock once it is approved.",payUnavailable:"Purchase is not available right now. Make sure the app was installed from Google Play and you are online.",lockedOpen:"Your free trial has ended",contact:"Contact us",contactTitle:"Contact",contactText:"Found a problem, or have an idea for an improvement? We would love to hear from you.",contactSend:"Send us an email",contactSubject:"Mobile 3D View feedback",contactNoApp:"No email app was found. You can write to us at:",about:"About & licences",aboutClose:"Close",aboutBack:"Back",aboutText:"Files you open stay on your device and are not sent to any server. No ads and no tracking. Purchases are handled by Google Play.",aboutOss:"Open-source components",aboutView:"View licence",tourHelp:"Guide",tourNext:"Next",tourBack:"Back",tourSkip:"Skip",tourDone:"Let's start",tourOpenWith:'You can also tap a file in WhatsApp, email or your file manager and pick this app under "Open with".',tour:[["Open a model",'Tap "Open file" and choose an STL, 3MF or STEP file. The file stays on your device and is not sent anywhere. The clock button reopens recent files.'],["Look from any angle",'One finger rotates, pinch zooms, two fingers pan. Top, Front and Side jump to a straight-on view, and Reset returns to the starting view. A dark model is shown on a light backdrop automatically, and "Light backdrop" switches it.'],["Outer dimensions","The width, depth and height of the model in millimetres are always shown at the bottom. Box shows or hides the frame around the model."],["Measure on the model","Tap Measure and pick a type: perpendicular distance between two faces, distance between two points, the diameter of a hole and radius of a fillet in one tap, or the angle between two faces."],["Choose print orientation",'Tap "Lay on face", then tap the face that should sit on the bed, or tap Auto to find the orientation with the least support. Areas that need support are marked in red. Check verifies that the model is fit to print.'],["Estimated weight and print time","Every model shows the PLA weight of the model, of its supports, the total, and the print time, for the way you laid it and the infill you chose. It is an estimate for quick pricing, not a replacement for a slicer. Share sends a picture of the model with these figures."]]}},Q=iy[Ci];function Ld(){document.documentElement.lang=Ci,document.documentElement.dir=Ci==="he"?"rtl":"ltr",document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=Q[n.dataset.i18n]}),document.querySelectorAll("[data-i18n-label]").forEach(n=>{n.setAttribute("aria-label",Q[n.dataset.i18nLabel])})}var Os=n=>'<svg viewBox="0 0 48 48" width="72" height="72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+n+"</svg>",sy=[Os('<path d="M10 8h18l10 10v22H10z"/><path d="M28 8v10h10"/><path d="M24 36V24m-5 5 5-5 5 5"/>'),Os('<path d="M24 6 8 15v18l16 9 16-9V15z"/><path d="M8 15l16 9 16-9M24 24v18"/><path d="M38 6a10 10 0 0 1 5 6m0-6v6h-6" stroke-width="2"/>'),Os('<path d="M6 30 30 6l12 12-24 24z"/><path d="m13 23 4 4m2-10 4 4m2-10 4 4"/>'),Os('<circle cx="24" cy="24" r="14"/><path d="M14 34 34 14"/><circle cx="14" cy="34" r="2.5" fill="currentColor"/><circle cx="34" cy="14" r="2.5" fill="currentColor"/>'),Os('<path d="M4 40h40"/><path d="M12 40V22l12-8 12 8v18z"/><path d="M40 10a12 12 0 0 0-8-6m0 0v6m0-6h6" stroke-width="2"/>'),Os('<path d="M24 8v6m-14 4h28M10 18l-5 14a7 7 0 0 0 12 0zm28 0-5 14a7 7 0 0 0 12 0z" transform="translate(0 2) scale(.92) translate(2 0)"/><path d="M16 42h16M24 14v28"/>')],Ud="m3dv-tour-seen",Kt=n=>document.getElementById(n),bn=0;function Uc(){let n=Q.tour[bn];Kt("touricon").innerHTML=sy[bn],Kt("tourtitle").textContent=n[0],Kt("tourbody").textContent=n[1]+(bn===0&&window.AndroidHost?" "+Q.tourOpenWith:""),Kt("tourdots").innerHTML=Q.tour.map((t,e)=>"<i"+(e===bn?' class="on"':"")+"></i>").join(""),Kt("tourback").style.visibility=bn?"visible":"hidden",Kt("tournext").textContent=bn===Q.tour.length-1?Q.tourDone:Q.tourNext,Kt("tourcount").textContent=bn+1+" / "+Q.tour.length}function Dd(){bn=0,Uc(),Kt("tour").hidden=!1,Kt("tournext").focus()}function Nd(){Kt("tour").hidden=!0;try{localStorage.setItem(Ud,"1")}catch{}}function Fd(){Kt("tourback").textContent=Q.tourBack,Kt("tourskip").textContent=Q.tourSkip,Kt("help").setAttribute("aria-label",Q.tourHelp),Kt("tour").setAttribute("aria-label",Q.tourHelp),Kt("tournext").addEventListener("click",()=>{bn<Q.tour.length-1?(bn++,Uc()):Nd()}),Kt("tourback").addEventListener("click",()=>{bn&&(bn--,Uc())}),Kt("tourskip").addEventListener("click",Nd),Kt("help").addEventListener("click",Dd);let n=[["three.js","MIT","three"],["fflate","MIT","fflate"],["occt-import-js","LGPL-2.1","occt-import-js"],["Open CASCADE Technology","LGPL-2.1 + exception","opencascade"]];Kt("aboutlink").textContent=Q.about,Kt("abouttitle").textContent=Q.about,Kt("abouttext").textContent=Q.aboutText,Kt("aboutoss").textContent=Q.aboutOss,Kt("aboutclose").textContent=Q.aboutClose,Kt("aboutlibs").innerHTML=n.map(o=>"<li><span><b>"+o[0]+"</b> \xB7 "+o[1]+'</span><button data-lic="'+o[2]+'">'+Q.aboutView+"</button></li>").join("");let t=o=>{Kt("aboutmain").hidden=!o,Kt("lictext").hidden=o,Kt("aboutclose").textContent=o?Q.aboutClose:Q.aboutBack};Kt("aboutlink").addEventListener("click",()=>{Kt("tour").hidden=!0,t(!0),Kt("about").hidden=!1}),Kt("aboutclose").addEventListener("click",()=>{Kt("lictext").hidden?Kt("about").hidden=!0:t(!0)}),Kt("aboutlibs").addEventListener("click",async o=>{let a=o.target.closest("[data-lic]");if(a){Kt("lictext").textContent="\u2026",t(!1);try{let l=await fetch("licenses/"+a.dataset.lic+".txt");Kt("lictext").textContent=l.ok?await l.text():"\u2013"}catch{Kt("lictext").textContent="\u2013"}}});let e=Kt("contactmail").textContent.trim(),i=()=>{Kt("tour").hidden=!0,t(!0),Kt("about").hidden=!1},s=()=>{let o=Q.contactSubject,a=`


--
`+document.querySelector(".ver").textContent+" \xB7 "+navigator.userAgent;Kt("contactnote").textContent="";try{if(window.AndroidHost&&window.AndroidHost.contact){window.AndroidHost.contact(e,o,a);return}}catch{}location.href="mailto:"+e+"?subject="+encodeURIComponent(o)+"&body="+encodeURIComponent(a)};window.__contactFailed=()=>{i(),Kt("contactnote").textContent=Q.contactNoApp+" "+e},Kt("contactlink").textContent=Q.contact,Kt("contacttitle").textContent=Q.contactTitle,Kt("contacttext").textContent=Q.contactText,Kt("contactsend").textContent=Q.contactSend,Kt("contactlink").addEventListener("click",i),Kt("contactsend").addEventListener("click",s);let r=!1;try{r=localStorage.getItem(Ud)==="1"}catch{}r||Dd()}var Re=n=>document.getElementById(n),Xn={state:"free"};function Od(){let n=window.AndroidHost;if(!n||!n.access)return Xn={state:"free"};try{Xn=JSON.parse(n.access())}catch{Xn={state:"trial",daysLeft:14,price:""}}return Xn}var Bd=()=>Xn.state==="expired";function Fc(n){let t=Xn,e=Re("trialbar");e.hidden=t.state!=="trial",t.state==="trial"&&(Re("trialtext").textContent=Q.trialLeft(t.daysLeft));let i=Re("paywall");if(t.state==="owned"||t.state==="free"){i.hidden=!0;return}t.state==="expired"&&(i.hidden=!1),Re("paytitle").textContent=t.state==="expired"?Q.payTitleExpired:Q.trialLeft(t.daysLeft),Re("paybody").textContent=Q.payBody,Re("paybuy").textContent=t.price?Q.payBuy+" \xB7 "+t.price:Q.payBuy,Re("payclose").hidden=t.state==="expired",Re("paynote").textContent=n||""}function zd(n){Re("trialbuy").textContent=Q.trialBuy,Re("payrestore").textContent=Q.payRestore,Re("payclose").textContent=Q.aboutClose,Re("trialbuy").addEventListener("click",()=>{Fc(),Re("paywall").hidden=!1}),Re("payclose").addEventListener("click",()=>{Re("paywall").hidden=!0}),Re("paybuy").addEventListener("click",()=>{Re("paynote").textContent="";try{window.AndroidHost.buy()}catch{Re("paynote").textContent=Q.payUnavailable}}),Re("payrestore").addEventListener("click",()=>{Re("paynote").textContent=Q.payChecking;try{window.AndroidHost.restore()}catch{Re("paynote").textContent=Q.payUnavailable}}),window.__access=t=>{let e=Xn.state;Od();let i="";t==="unavailable"?i=Q.payUnavailable:t==="restore"&&Xn.state!=="owned"?i=Q.payRestoreNone:t==="pending"&&(i=Q.payPending),Fc(i),e!==Xn.state&&n&&n(Xn)},Od(),Fc()}var ry="m3dv-files",Fn="meta",hi="data";function Ja(){return new Promise((n,t)=>{let e=indexedDB.open(ry,1);e.onupgradeneeded=()=>{e.result.createObjectStore(Fn,{keyPath:"name"}),e.result.createObjectStore(hi)},e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}var Oc=n=>new Promise((t,e)=>{n.oncomplete=()=>t(),n.onerror=()=>e(n.error),n.onabort=()=>e(n.error)}),Bc=n=>new Promise((t,e)=>{n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)});async function zc(){try{let n=await Ja(),t=await Bc(n.transaction(Fn).objectStore(Fn).getAll());return n.close(),t.sort((e,i)=>i.time-e.time)}catch{return[]}}async function kd(n,t){try{if(!t||t.byteLength>5e7)return;let e=await Ja(),i=e.transaction([Fn,hi],"readwrite");i.objectStore(Fn).put({name:n,size:t.byteLength,time:Date.now()}),i.objectStore(hi).put(t,n),await Oc(i);let s=(await Bc(e.transaction(Fn).objectStore(Fn).getAll())).sort((a,l)=>l.time-a.time),r=0,o=[];s.forEach((a,l)=>{r+=a.size,(l>=8||r>15e7)&&o.push(a.name)}),o.length&&(i=e.transaction([Fn,hi],"readwrite"),o.forEach(a=>{i.objectStore(Fn).delete(a),i.objectStore(hi).delete(a)}),await Oc(i)),e.close()}catch{}}async function Hd(n){try{let t=await Ja(),e=await Bc(t.transaction(hi).objectStore(hi).get(n));return t.close(),e||null}catch{return null}}async function Gd(n){try{let t=await Ja(),e=t.transaction([Fn,hi],"readwrite");e.objectStore(Fn).delete(n),e.objectStore(hi).delete(n),await Oc(e),t.close()}catch{}}var oy=-Math.SQRT1_2,ay=.3;function Vd(n,t){let e=new F,i=new F,s=new F;n.traverse(r=>{if(!r.isMesh)return;let o=r.geometry.attributes.position,a=r.geometry.index,l=r.matrixWorld,c=a?a.count:o.count;for(let h=0;h+2<c;h+=3){e.fromBufferAttribute(o,a?a.getX(h):h).applyMatrix4(l),i.fromBufferAttribute(o,a?a.getX(h+1):h+1).applyMatrix4(l),s.fromBufferAttribute(o,a?a.getX(h+2):h+2).applyMatrix4(l);let u=i.x-e.x,d=i.y-e.y,p=i.z-e.z,g=s.x-e.x,x=s.y-e.y,m=s.z-e.z,f=d*m-p*x,v=p*g-u*m,b=u*x-d*g,S=Math.hypot(f,v,b);S>0&&t(e,i,s,f/S,v/S,b/S,S/2)}})}function Wd(n,t){let e=[],i=t.min.z;return Vd(n,(s,r,o,a,l,c)=>{c>=oy||(s.z+r.z+o.z)/3-i<=ay||e.push(s.x,s.y,s.z,r.x,r.y,r.z,o.x,o.y,o.z)}),new Float32Array(e)}function Xd(n,t){let e=[[0,0,-1],[0,0,1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]].map(a=>new F(...a)),i=new Map;Vd(n,(a,l,c,h,u,d,p)=>{let g=Math.round(h*25)+","+Math.round(u*25)+","+Math.round(d*25),x=i.get(g);x||(x={x:0,y:0,z:0,area:0},i.set(g,x)),x.x+=h*p,x.y+=u*p,x.z+=d*p,x.area+=p});let s=Array.from(i.values()).sort((a,l)=>l.area-a.area),r=Math.cos($e.degToRad(4)),o=0;for(let a of s){if(o>=t)break;let l=new F(a.x,a.y,a.z);l.lengthSq()!==0&&(l.normalize(),!e.some(c=>c.dot(l)>r)&&(e.push(l),o++))}return e}function qd(n,{title:t,lines:e,brand:i,rtl:s}){let r=n.width,o=n.height,a=r/1080,l=48*a,c=46*a,h=34*a,u=18*a,d=28*a,p=l+c+e.length*(h+u)+u+d+l,g=document.createElement("canvas");g.width=r,g.height=Math.round(o+p);let x=g.getContext("2d");x.fillStyle="#1d2128",x.fillRect(0,0,g.width,g.height),x.drawImage(n,0,0),x.fillStyle="#2c323b",x.fillRect(0,o,r,Math.max(1,2*a));let m='system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans Hebrew", sans-serif';x.direction=s?"rtl":"ltr",x.textAlign=s?"right":"left",x.textBaseline="top";let f=s?r-l:l,v=r-2*l,b=o+l;x.font="700 "+c+"px "+m,x.fillStyle="#eef1f5";let S=t;for(;S.length>4&&x.measureText(S).width>v;)S=S.slice(0,-2);x.direction="ltr",x.fillText(S===t?S:S+"\u2026",f,b),x.direction=s?"rtl":"ltr",b+=c+u,x.font="400 "+h+"px "+m,x.fillStyle="#cfd6df";for(let E of e)x.fillText(E,f,b,v),b+=h+u;return x.font="700 "+d+"px "+m,x.fillStyle="#f2a33a",x.direction="ltr",x.textAlign=s?"left":"right",x.fillText(i,s?l:r-l,b+u*.3),g.toDataURL("image/jpeg",.92)}var ly=12e5,cy=6e7,hy=300,Yd=40,Ka=.8;function uy(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Zd(n,t){let e=0;n.traverse(f=>{if(f.isMesh){let v=f.geometry;e+=Math.floor((v.index?v.index.count:v.attributes.position.count)/3)}});let i=new Float32Array(9*e),s=new F,r=0;n.traverse(f=>{if(!f.isMesh)return;let v=f.geometry.attributes.position,b=f.geometry.index,S=f.matrixWorld,E=Math.floor((b?b.count:v.count)/3)*3;for(let T=0;T<E;T++)s.fromBufferAttribute(v,b?b.getX(T):T).applyMatrix4(S),i[r++]=s.x,i[r++]=s.y,i[r++]=s.z});let o=t.getSize(new F),a=o.length()||1,l=new Float32Array(3*e),c=new Float32Array(e),h=0,u=0,d=0,p=a*a*1e-12;for(let f=0;f<e;f++){let v=9*f,b=i[v],S=i[v+1],E=i[v+2],T=i[v+3],_=i[v+4],w=i[v+5],L=i[v+6],R=i[v+7],P=i[v+8],z=(_-S)*(P-E)-(w-E)*(R-S),q=(w-E)*(L-b)-(T-b)*(P-E),C=(T-b)*(R-S)-(_-S)*(L-b),D=Math.hypot(z,q,C);if(D<=p){d++;continue}l[3*f]=z/D,l[3*f+1]=q/D,l[3*f+2]=C/D,c[f]=D/2,u+=D/2,h+=(b*(_*P-w*R)-S*(T*P-w*L)+E*(T*R-_*L))/6}let g={tris:e,degenerate:d,inverted:h<0,size:[o.x,o.y,o.z],topo:null,thin:null,openSegments:null,thinTris:null};if(e>0&&e<=ly){let f=131071/Math.max(o.x,o.y,o.z,1e-9),v=t.min,b=new Float64Array(3*e);for(let D=0;D<3*e;D++)b[D]=(Math.round((i[3*D]-v.x)*f)*131072+Math.round((i[3*D+1]-v.y)*f))*131072+Math.round((i[3*D+2]-v.z)*f);let S=b.slice().sort(),E=0;for(let D=0;D<S.length;D++)(D===0||S[D]!==S[D-1])&&(S[E++]=S[D]);let T=new Uint32Array(3*e),_=new Float32Array(3*E);for(let D=0;D<3*e;D++){let H=b[D],k=0,et=E-1;for(;k<et;){let V=k+et>>1;S[V]<H?k=V+1:et=V}T[D]=k,_[3*k]=i[3*D],_[3*k+1]=i[3*D+1],_[3*k+2]=i[3*D+2]}let w=new Uint32Array(E);for(let D=0;D<E;D++)w[D]=D;let L=D=>{for(;w[D]!==D;)w[D]=w[w[D]],D=w[D];return D};for(let D=0;D<e;D++){if(!c[D])continue;let H=L(T[3*D]),k=L(T[3*D+1]),et=L(T[3*D+2]);k!==H&&(w[k]=H);let V=L(et);V!==H&&(w[V]=H)}let R=new Set;for(let D=0;D<e;D++)c[D]&&R.add(L(T[3*D]));for(let D=0;D<e;D++)for(let H=0;H<3;H++){let k=T[3*D+H],et=T[3*D+(H+1)%3];b[3*D+H]=!c[D]||k===et?1/0:(k<et?k*E+et:et*E+k)*2+(k<et?1:0)}b.sort();let P=0,z=0,q=0,C=[];for(let D=0;D<b.length&&b[D]!==1/0;){let H=Math.floor(b[D]/2),k=0,et=0,V=D;for(;V<b.length&&Math.floor(b[V]/2)===H;)k++,et+=b[V]%2,V++;if(k===1){if(P++,C.length<6*2e4){let rt=Math.floor(H/E),ct=H-rt*E;C.push(_[3*rt],_[3*rt+1],_[3*rt+2],_[3*ct],_[3*ct+1],_[3*ct+2])}}else k>2?z++:et!==1&&q++;D=V}b=null,g.topo={open:P,nonManifold:z,inconsistent:q,bodies:R.size},C.length&&(g.openSegments=new Float32Array(C))}let x=Math.min(hy,Math.floor(cy/Math.max(e,1))),m=g.topo&&g.topo.open===0;if(g.thinSkip=m?g.inverted?"inverted":x<Yd?"big":null:g.topo?"open":"big",m&&!g.inverted&&x>=Yd&&u>0){let f=new Float64Array(e),v=0;for(let R=0;R<e;R++)v+=c[R],f[R]=v;let b=uy(12345),S=a*1e-5,E=new Set,T=0,_=1/0,w=0,L=[];for(let R=0;R<x;R++){let P=b()*v,z=0,q=e-1;for(;z<q;){let K=z+q>>1;f[K]<P?z=K+1:q=K}let C=z;if(E.has(C)||!c[C])continue;E.add(C),w++;let D=9*C,H=-l[3*C],k=-l[3*C+1],et=-l[3*C+2],V=(i[D]+i[D+3]+i[D+6])/3+H*S,rt=(i[D+1]+i[D+4]+i[D+7])/3+k*S,ct=(i[D+2]+i[D+5]+i[D+8])/3+et*S,Pt=1/0;for(let K=0;K<e;K++){if(K===C||l[3*K]*H+l[3*K+1]*k+l[3*K+2]*et<=0)continue;let ht=9*K,Tt=i[ht+3]-i[ht],Dt=i[ht+4]-i[ht+1],I=i[ht+5]-i[ht+2],U=i[ht+6]-i[ht],j=i[ht+7]-i[ht+1],G=i[ht+8]-i[ht+2],J=k*G-et*j,Z=et*U-H*G,tt=H*j-k*U,ut=Tt*J+Dt*Z+I*tt;if(ut>-1e-12&&ut<1e-12)continue;let at=1/ut,dt=V-i[ht],Et=rt-i[ht+1],pt=ct-i[ht+2],qt=at*(dt*J+Et*Z+pt*tt);if(qt<0||qt>1)continue;let Qt=Et*I-pt*Dt,re=pt*Tt-dt*I,he=dt*Dt-Et*Tt,O=at*(H*Qt+k*re+et*he);if(O<0||qt+O>1)continue;let At=at*(U*Qt+j*re+G*he);At>0&&At<Pt&&(Pt=At)}if(Pt===1/0)continue;let kt=Pt+S;if(kt<_&&(_=kt),kt<Ka){T++;for(let K=0;K<9;K++)L.push(i[D+K])}}g.thin={samples:w,thinCount:T,min:_===1/0?null:_},L.length&&(g.thinTris=new Float32Array(L))}return g}Ld();var Lt=n=>document.getElementById(n),Gr=Lt("stage");Le.DEFAULT_UP.set(0,0,1);var wn=new ka({antialias:!0});wn.setPixelRatio(Math.min(window.devicePixelRatio,2));Gr.appendChild(wn.domElement);var tn=new ir;tn.background=new Yt(1316636);var Ve=new nn(40,1,.1,1e4);Ve.up.set(0,0,1);Ve.position.set(120,-120,90);tn.add(Ve);tn.add(new mr(16777215,3817544,1.1));var Qd=new xr(16777215,1.6);Qd.position.set(1,1.5,2);Ve.add(Qd);var Ii=new Wa(Ve,wn.domElement);Ii.enableDamping=!0;Ii.dampingFactor=.12;Ii.zoomToCursor=!0;var $t=null,Yn=null,qn=null,cn=null,Pi=null,Jd={dark:{bg:1316636,gridMain:4937059,gridFine:2764856,box:7328767},light:{bg:15330802,gridMain:9082019,gridFine:13028565,box:753592}},zs=!1,Bs=null,Gc=()=>zs?Jd.light:Jd.dark;function tf(){let n=Gc(),t=new vr(Bs.cells*Bs.step,Bs.cells,n.gridMain,n.gridFine);return t.rotation.x=Math.PI/2,t.position.copy(Bs.pos),t}function ef(){let n=Gc();tn.background.setHex(n.bg),Gr.classList.toggle("light",zs),Lt("bgToggle").setAttribute("aria-pressed",zs),Yn&&Yn.material.color.setHex(n.box),qn&&Bs&&(tn.remove(qn),Vc(qn),qn=tf(),tn.add(qn))}function dy(){let n=0,t=0;return $t.traverse(e=>{if(!e.isMesh)return;let i=e.geometry,s=(i.index?i.index.count:i.attributes.position.count)/3,r=[].concat(e.material);r.forEach(o=>{let l=o.color&&!o.vertexColors&&!o.map?.2126*o.color.r+.7152*o.color.g+.0722*o.color.b:.5;n+=l*s/r.length,t+=s/r.length})}),t>0&&n/t<.12}function Wr(){let n=Gr.clientWidth,t=Gr.clientHeight;!n||!t||(wn.setSize(n,t,!1),Ve.aspect=n/t,Ve.updateProjectionMatrix())}new ResizeObserver(Wr).observe(Gr);Wr();wn.setAnimationLoop(()=>{Ii.update(),wn.render(tn,Ve)});var Qa=()=>new Xi({color:15901498,roughness:.55,metalness:.05,side:Ke});function Vc(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&[].concat(t.material).forEach(e=>e.dispose())})}function Kd(){Xr(),af(),Wc(),Qi=!1,Lt("lay")&&Vs();for(let n of[$t,Yn,qn])n&&(tn.remove(n),Vc(n));$t=Yn=qn=null}function nf(n){if(!cn)return;let t=cn.getCenter(new F),e=cn.getSize(new F).length()/2||1,i=$e.degToRad(Ve.fov),s=Math.min(i,2*Math.atan(Math.tan(i/2)*Ve.aspect)),r=e/Math.sin(s/2)*1.1;Ve.near=r/200,Ve.far=r*50,Ve.updateProjectionMatrix();let o=new F(...n).normalize();Ve.position.copy(t).addScaledVector(o,r),Ii.target.copy(t),Ii.minDistance=e/50,Ii.maxDistance=r*10,Ii.update()}var sf={iso:[1,-1,.8],top:[0,-1e-4,1],front:[0,-1,0],side:[1,0,0]},Qe=n=>n>=100?n.toFixed(1):n.toFixed(2);function fy(n,t){if(Kd(),$t=n,tn.add($t),$t.updateMatrixWorld(!0),new vn().setFromObject($t).isEmpty())throw Kd(),new Error(Q.noGeom);zs=dy(),cf=$t.quaternion.clone(),hf=$t.position.clone(),Lt("fname").textContent=t,document.body.classList.add("loaded"),tl()}function tl(){for(let l of[Yn,qn])l&&(tn.remove(l),Vc(l));Xr(),wd(),$t.updateMatrixWorld(!0),cn=new vn().setFromObject($t,!0);let n=cn.getSize(new F),t=0;$t.traverse(l=>{if(l.isMesh){let c=l.geometry;t+=(c.index?c.index.count:c.attributes.position.count)/3}}),Yn=new Mr(cn,Gc().box),Yn.visible=Lt("boxToggle").getAttribute("aria-pressed")==="true",tn.add(Yn);let e=Math.max(n.x,n.y)*2,i=Math.pow(10,Math.floor(Math.log10(e/4||1))),s=Math.max(2,Math.ceil(e/i/2)*2),r=cn.getCenter(new F);Bs={cells:s,step:i,pos:new F(r.x,r.y,cn.min.z)},qn=tf(),tn.add(qn),ef(),lf(),Wc(),Lt("dx").textContent=Qe(n.x),Lt("dy").textContent=Qe(n.y),Lt("dz").textContent=Qe(n.z),Lt("meta").textContent=Q.meta(Math.round(t).toLocaleString(Ci==="he"?"he-IL":"en-US"),i),Wr(),nf(sf.iso),Pi=null,Hc();let o=$t,a=$t.quaternion.clone();setTimeout(()=>{if(!($t!==o||!$t.quaternion.equals(a))){try{Pi=Nc($t,cn)}catch(l){console.error(l),Pi={volume:0,area:0,supportVol:0}}Hc()}},60)}var ks=new Je;tn.add(ks);function Wc(){for(;ks.children.length;){let n=ks.children.pop();n.geometry.dispose(),n.material.dispose()}}function rf(){let n=256;try{n=Number(localStorage.getItem("m3dv-bed"))||256}catch{}return n}async function py(){if(!$t)return;Lt("checksum").textContent=Q.checkRunning,Lt("checksum").className="",Lt("checklist").innerHTML="",Lt("check").hidden=!1,await new Promise(t=>setTimeout(t,50));let n;try{n=Zd($t,cn)}catch(t){console.error(t),Lt("checksum").textContent=Q.checkFailed;return}if(Wc(),n.openSegments){let t=new de;t.setAttribute("position",new Se(n.openSegments,3));let e=new Vi(t,new zn({color:16722902,depthTest:!1,transparent:!0}));e.renderOrder=12,ks.add(e)}if(n.thinTris){let t=new de;t.setAttribute("position",new Se(n.thinTris,3));let e=new Ee(t,new vi({color:16766474,transparent:!0,opacity:.9,side:Ke,depthTest:!1}));e.renderOrder=12,ks.add(e)}of(n)}var kc=null;function of(n){kc=n;let t=[],e=u=>u.toLocaleString(Ci==="he"?"he-IL":"en-US"),i=(u,d,p)=>t.push({level:u,title:d,detail:p||""}),s=n.topo;s?(s.open?i("bad",Q.ckOpen,Q.ckOpenD(e(s.open))):i("ok",Q.ckClosed),s.nonManifold&&i("bad",Q.ckNonManifold,Q.ckNonManifoldD(e(s.nonManifold)))):i("info",Q.ckTopoSkipped,Q.ckTopoSkippedD),n.inverted&&s&&!s.open?i("bad",Q.ckInverted,Q.ckInvertedD):s&&s.inconsistent?i("warn",Q.ckInconsistent,Q.ckInconsistentD(e(s.inconsistent))):s&&i("ok",Q.ckOriented),n.degenerate&&i("warn",Q.ckDegenerate(e(n.degenerate)),Q.ckDegenerateD),s&&(s.bodies>1?i("info",Q.ckBodies(e(s.bodies)),Q.ckBodiesD):i("ok",Q.ckOneBody));let r=n.size.slice().sort((u,d)=>d-u),o=r[0],a=n.size.map(u=>Qe(u)).join(" \xD7 ")+" "+Q.mm;o<2?i("warn",Q.ckTiny,Q.ckTinyD(a)):o>1e3?i("warn",Q.ckHuge,Q.ckHugeD(a)):i("ok",Q.ckSize,a);let l=rf();o<=l?i("ok",Q.ckFits(l)):r[1]<=l*.5&&o<=l*1.3?i("warn",Q.ckNoFit(l),Q.ckDiagonal(Qe(o))):i("bad",Q.ckNoFit(l),Q.ckNoFitD(Qe(o))),n.thin?n.thin.thinCount>=2||n.thin.thinCount===1&&n.thin.samples<100?i("warn",Q.ckThin(Ka),Q.ckThinD(Qe(n.thin.min))):i("ok",Q.ckNoThin(Ka),Q.ckSampled):i("info",Q.ckThinSkipped,{open:Q.ckThinSkippedOpen,inverted:Q.ckThinSkippedInverted}[n.thinSkip]||Q.ckThinSkippedBig);let c=t.some(u=>u.level==="bad")?"bad":t.some(u=>u.level==="warn")?"warn":"ok";Lt("checksum").textContent={bad:Q.checkBad,warn:Q.checkWarn,ok:Q.checkOk}[c],Lt("checksum").className=c;let h=Lt("checklist");h.innerHTML="";for(let u of t){let d=document.createElement("li");d.className=u.level;let p=document.createElement("b");if(p.textContent=u.title,d.append(p),u.detail){let g=document.createElement("span");g.textContent=u.detail,d.append(g)}h.append(d)}}var Hs=new Je;tn.add(Hs);var ja=!0;function af(){for(;Hs.children.length;){let n=Hs.children.pop();n.geometry.dispose(),n.material.dispose()}}function lf(){if(af(),!ja||!$t||!cn)return;let n=Wd($t,cn);if(!n.length)return;let t=new de;t.setAttribute("position",new Se(n,3));let e=new Ee(t,new vi({color:16726832,transparent:!0,opacity:.8,side:Ke,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));e.renderOrder=5,Hs.add(e)}var Vr=!1,cf=null,hf=null,Qi=!1,Gs="";function Vs(){Lt("lay").hidden=!Vr,Lt("layToggle").setAttribute("aria-pressed",Vr),Lt("laytext").textContent=Gs||(Qi?Q.layDone:Q.layPrompt),Lt("layreset").disabled=!Qi}function my(n,t){let e=We;We="face";let i=xf(n,t);if(We=e,!i)return;let s=new ke().setFromUnitVectors(i.normal,new F(0,0,-1));$t.quaternion.premultiply(s),$t.position.applyQuaternion(s),Qi=!0,Gs="",tl(),Vs()}async function gy(){if(!$t)return;Gs=Q.autoWorking,Vs(),await new Promise(l=>setTimeout(l,40));let n=$t,t=0;$t.traverse(l=>{if(l.isMesh){let c=l.geometry;t+=(c.index?c.index.count:c.attributes.position.count)/3}});let e=Xd($t,t>4e5?3:8),i=$t.quaternion.clone(),s=$t.position.clone(),r=new F(0,0,-1),o=null,a=0;for(let l of e){let c=new ke().setFromUnitVectors(l,r);$t.quaternion.copy(i).premultiply(c),$t.position.copy(s).applyQuaternion(c),$t.updateMatrixWorld(!0);let h=Nc($t,new vn().setFromObject($t,!0));o||(a=Math.max(h.volume*.01,20));let u={q:c,support:h.supportVol,height:h.height,first:!o};(!o||u.support<o.support-a||Math.abs(u.support-o.support)<=a&&u.height<o.height-.01)&&(o=u)}$t===n&&($t.quaternion.copy(i).premultiply(o.q),$t.position.copy(s).applyQuaternion(o.q),o.first||(Qi=!0),Gs=o.first?Q.autoSame:Q.autoDone,tl(),Vs())}function _y(){!$t||!Qi||($t.quaternion.copy(cf),$t.position.copy(hf),Qi=!1,Gs="",tl(),Vs())}var kr=n=>n>=100?Math.round(n).toString():n.toFixed(1),uf=null;function Hc(){let n=Pi&&Id(Pi,Number(Lt("infill").value)/100);uf=n||null;let t=(i,s,r)=>{Lt(i).textContent=s,Lt(i+"u").hidden=!r};if(Lt("wsupcard").classList.remove("dim-off"),document.querySelector(".whead").classList.toggle("err",!!Pi&&!n),Lt("wtitle").textContent=Pi&&!n?Q.noVol:Q.wTitle,!n){let i=Pi?"\u2013":"\u2026";t("wpart",i,!1),t("wsup",i,!1),t("wtotal",i,!1),t("wtime",i,!1);return}t("wpart",kr(n.part),!0),n.needsSupport?t("wsup",kr(n.support),!0):(t("wsup",Q.notNeeded,!1),Lt("wsupcard").classList.add("dim-off")),t("wtotal",kr(n.part+(n.needsSupport?n.support:0)),!0);let e=Math.round(n.seconds/60);if(e<60)t("wtime",String(e),!0),Lt("wtimeu").textContent=Q.minutes;else{let i=Math.round(e/5)*5;t("wtime",Math.floor(i/60)+":"+String(i%60).padStart(2,"0"),!0),Lt("wtimeu").textContent=Q.hours}}function xy(n){let t=new Xa().parse(n);t.computeVertexNormals();let e=Qa();return t.hasColors&&(e.vertexColors=!0),new Ee(t,e)}function yy(n,t){let e;try{e=qa(new Uint8Array(n),{filter:m=>/^(Metadata\/(model_settings|project_settings)\.config|3D\/3dmodel\.model)$/i.test(m.name)})}catch{return!1}let i=m=>{let f=Object.keys(e).find(v=>v.toLowerCase()===m);return f?Ic(e[f]):null},s=i("metadata/model_settings.config"),r=i("metadata/project_settings.config"),o=i("3d/3dmodel.model");if(!s||!r||!o)return!1;let a;try{a=JSON.parse(r).filament_colour}catch{return!1}if(!Array.isArray(a)||!a.length)return!1;let l=m=>new DOMParser().parseFromString(m,"application/xml"),c=m=>{let f=Array.from(m.children).find(v=>v.tagName==="metadata"&&v.getAttribute("key")==="extruder");return f?parseInt(f.getAttribute("value"),10):NaN},h={};Array.from(l(s).getElementsByTagName("object")).forEach(m=>{let f={};Array.from(m.getElementsByTagName("part")).forEach(v=>{f[v.getAttribute("id")]=c(v)}),h[m.getAttribute("id")]={ext:c(m),parts:f}});let u=l(o),d={};Array.from(u.getElementsByTagName("object")).forEach(m=>{d[m.getAttribute("id")]=Array.from(m.getElementsByTagName("component")).map(f=>f.getAttribute("objectid"))});let p=Array.from(u.getElementsByTagName("item")).map(m=>m.getAttribute("objectid"));if(p.length!==t.children.length)return!1;let g=(m,f)=>{let v=a[(f||1)-1];return typeof v!="string"||!/^#[0-9a-f]{6}/i.test(v)?!1:(m.traverse(b=>{b.isMesh&&([].concat(b.material).forEach(S=>S.dispose()),b.material=Qa(),b.material.flatShading=!0,b.material.color.set(v.slice(0,7)))}),!0)},x=!1;return p.forEach((m,f)=>{let v=h[m],b=t.children[f],S=d[m]||[];v&&(S.length&&S.length===b.children.length?S.forEach((E,T)=>{x=g(b.children[T],v.parts[E]||v.ext)||x}):x=g(b,v.ext)||x)}),x}function vy(n){let t=new Ya().parse(n),e=!1;try{e=yy(n,t)}catch(i){console.error(i)}return t.traverse(i=>{if(!i.isMesh)return;i.geometry.attributes.normal||i.geometry.computeVertexNormals();let s=[].concat(i.material);!e&&s.every(o=>(!o.name||o.name===rn.DEFAULT_MATERIAL_NAME)&&!o.map&&!o.vertexColors&&o.color&&o.color.getHex()===16777215)&&(s.forEach(o=>o.dispose()),i.material=Qa(),i.material.flatShading=!0),[].concat(i.material).forEach(o=>{o.side=Ke})}),t}var $a=null;function My(){return $a||($a=new Promise((n,t)=>{let e=document.createElement("script");e.src="occt-import-js.js",e.onload=()=>window.occtimportjs({locateFile:i=>i}).then(n,t),e.onerror=()=>t(new Error(Q.stepEngineFail)),document.head.appendChild(e)}).catch(n=>{throw $a=null,n})),$a}async function Sy(n){Li(Q.stepLoading);let t=await My();Li(Q.stepConvert),await new Promise(s=>setTimeout(s,30));let e=t.ReadStepFile(new Uint8Array(n),{linearUnit:"millimeter"});if(!e||!e.success||!e.meshes.length)throw new Error(Q.stepFail);let i=new Je;for(let s of e.meshes){let r=new de;r.setAttribute("position",new ce(s.attributes.position.array,3)),s.attributes.normal&&r.setAttribute("normal",new ce(s.attributes.normal.array,3)),s.index&&r.setIndex(new Se(Uint32Array.from(s.index.array),1)),s.attributes.normal||r.computeVertexNormals();let o=Qa();s.color&&o.color.setRGB(s.color[0],s.color[1],s.color[2]),i.add(new Ee(r,o))}return i}function Li(n,t){let e=Lt("status");e.textContent=n||"",e.hidden=!n,e.classList.toggle("error",!!t)}var ts=new Je;tn.add(ts);var Di=!1,We="face",De=[],Hr="",$d=new yr,by=16,df=Math.cos($e.degToRad(1.5)),ff=[4054167,5088255];function pf(){for(;ts.children.length;){let n=ts.children.pop();n.geometry.dispose(),n.material.dispose()}}function Xr(){De=[],Hr="",pf(),Xc()}function mf(){let[n,t]=De,e=Math.abs(n.normal.dot(t.normal)),i=t.point.clone().sub(n.point).dot(n.normal),s=t.point.clone().addScaledVector(n.normal,-i);return{parallel:e>=df,angle:$e.radToDeg(Math.acos(Math.min(1,e))),dist:Math.abs(i),from:s,to:t.point}}function Xc(){let n=Lt("measure");if(!n||(n.hidden=!Di,document.querySelectorAll("[data-mode]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.mode===We)),!Di))return;let t=Lt("mtext");if(We==="round"){let e=De[0];e?e.closed?t.innerHTML="<b>\xD8 "+Qe(2*e.r)+"</b> "+Q.mm+' <span class="rtl">'+(e.concave?Q.hole:Q.cylinder)+" \xB7 "+Q.radius+" "+Qe(e.r)+" "+Q.mm+"</span>":t.innerHTML="<b>R "+Qe(e.r)+"</b> "+Q.mm+' <span class="rtl">'+(e.concave?Q.innerR:Q.outerR)+" \xB7 "+Q.arc+" "+Math.round(e.arc)+"\xB0 \xB7 "+Q.diameter+" "+Qe(2*e.r)+" "+Q.mm+"</span>":t.textContent=Hr||Q.roundPrompt}else if(De.length===0)t.textContent=Q.tapFirst[We];else if(De.length===1)t.textContent=Q.tapSecond[We];else if(We==="angle"){let e=$e.radToDeg(Math.acos($e.clamp(De[0].normal.dot(De[1].normal),-1,1)));e<.5||e>179.5?t.innerHTML='<b>0\xB0</b> <span class="rtl">'+Q.angleParallel+"</span>":t.innerHTML="<b>"+(180-e).toFixed(1)+'\xB0</b> <span class="rtl">'+Q.angleNote(e.toFixed(1))+"</span>"}else if(We==="face"){let e=mf();t.innerHTML="<b>"+Qe(e.dist)+"</b> "+Q.mm+' <span class="rtl">'+(e.parallel?Q.parallel:Q.notParallel(e.angle.toFixed(1)))+"</span>"}else{let e=De[1].point.clone().sub(De[0].point);t.innerHTML="<b>"+Qe(e.length())+"</b> "+Q.mm+" <span>X "+Qe(Math.abs(e.x))+" \xB7 Y "+Qe(Math.abs(e.y))+" \xB7 Z "+Qe(Math.abs(e.z))+"</span>"}}function gf(n,t){let e=new de;e.setAttribute("position",new Se(n,3));let i=new Ee(e,new vi({color:t,transparent:!0,opacity:.6,side:Ke,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));i.renderOrder=10,ts.add(i)}function wy(n){gf(n.tris,ff[0]);let t=[];for(let r=0;r<=96;r++){let o=r/96*Math.PI*2;t.push(n.center.clone().addScaledVector(n.e1,Math.cos(o)*n.r).addScaledVector(n.e2,Math.sin(o)*n.r))}let e={color:16731501,depthTest:!1,transparent:!0},i=new Gi(new de().setFromPoints(t),new zn(e)),s=new Ts(new de().setFromPoints([n.center]),new Wi({...e,size:10,sizeAttenuation:!1}));i.renderOrder=s.renderOrder=11,ts.add(i,s)}function jd(n){let t=new de().setFromPoints(n),e=new Ts(t,new Wi({color:16731501,size:12,sizeAttenuation:!1,depthTest:!1,transparent:!0}));if(e.renderOrder=11,ts.add(e),n.length===2){let i=new Gi(t.clone(),new zn({color:16731501,depthTest:!1,transparent:!0}));i.renderOrder=11,ts.add(i)}}function Ty(){if(pf(),!!De.length)if(We==="round")wy(De[0]);else if(We==="face"||We==="angle"){if(De.forEach((n,t)=>gf(n.tris,ff[t])),We==="face"&&De.length===2){let n=mf();jd([n.from,n.to])}}else jd(De.map(n=>n.point))}function _f(n,t){let e=n.clone().project(Ve);return new Xt((e.x+1)/2*t.width,(1-e.y)/2*t.height)}function Ey(n,t,e){let i=n.geometry,s=i.attributes.position,r=i.index,o=r?r.count:s.count,a=Math.max(cn.getSize(new F).length()*1e-4,1e-5),l=n.matrixWorld,c=new F,h=new F,u=new F,d=new F,p=new F,g=[];for(let x=0;x<o;x+=3){let m=r?r.getX(x):x,f=r?r.getX(x+1):x+1,v=r?r.getX(x+2):x+2;if(c.fromBufferAttribute(s,m).applyMatrix4(l),Math.abs((c.x-t.x)*e.x+(c.y-t.y)*e.y+(c.z-t.z)*e.z)>a)continue;h.fromBufferAttribute(s,f).applyMatrix4(l),u.fromBufferAttribute(s,v).applyMatrix4(l),d.subVectors(h,c),p.subVectors(u,c),d.cross(p);let b=d.length();b===0||Math.abs(d.dot(e))/b<df||g.push(c.x,c.y,c.z,h.x,h.y,h.z,u.x,u.y,u.z)}return new Float32Array(g)}function xf(n,t){if(!$t)return null;let e=wn.domElement.getBoundingClientRect(),i=n-e.left,s=t-e.top;$d.setFromCamera(new Xt(i/e.width*2-1,-(s/e.height)*2+1),Ve);let r=$d.intersectObject($t,!0)[0];if(!r||!r.face)return null;if(We==="round")return{round:!0,mesh:r.object,faceIndex:r.faceIndex,point:r.point.clone()};let o=r.object.geometry.attributes.position,a=r.object.matrixWorld,l=new F().fromBufferAttribute(o,r.face.a).applyMatrix4(a),c=new F().fromBufferAttribute(o,r.face.b).applyMatrix4(a),h=new F().fromBufferAttribute(o,r.face.c).applyMatrix4(a);if(We==="face"||We==="angle"){let p=c.clone().sub(l).cross(h.clone().sub(l)).normalize();return p.lengthSq()===0?null:{point:r.point.clone(),normal:p,tris:Ey(r.object,r.point,p)}}let u=r.point.clone(),d=by;for(let p of[l,c,h]){let g=_f(p,e).distanceTo(new Xt(i,s));g<d&&(d=g,u=p)}return{point:u}}async function Ay(n,t){let e=xf(n,t);if(e){if(e.round)if(De=[],Hr="",Za(e.mesh)>Td)Hr=Q.tooBig;else{!Ed(e.mesh)&&Za(e.mesh)>15e4&&(Lt("mtext").textContent=Q.analyzing,await new Promise(s=>setTimeout(s,40)));let i=null;try{i=Rd(e.mesh,e.faceIndex,e.point,cn)}catch(s){console.error(s)}i?De=[i]:Hr=Q.noRound}else De.length>=2&&(De=[]),De.push(e);Ty(),Xc()}}var ji=null;wn.domElement.addEventListener("pointerdown",n=>{ji=n.isPrimary?{x:n.clientX,y:n.clientY,t:performance.now(),id:n.pointerId}:null});wn.domElement.addEventListener("pointerup",n=>{if(!ji||n.pointerId!==ji.id)return;let t=Math.hypot(n.clientX-ji.x,n.clientY-ji.y),e=performance.now()-ji.t<500;ji=null,t<8&&e&&(Vr?my(n.clientX,n.clientY):Di&&Ay(n.clientX,n.clientY))});function Ry(n,t){let e=(t.includes(".")?t.split(".").pop():"").toLowerCase();if(e==="stl"||e==="3mf")return e;if(e==="step"||e==="stp")return"step";let i=new Uint8Array(n,0,Math.min(n.byteLength,64)),s=String.fromCharCode.apply(null,i);if(s.startsWith("PK"))return"3mf";if(s.includes("ISO-10303-21"))return"step";if(e===""||e==="bin")return"stl";throw new Error(Q.unsupported(e))}async function Cy(n,t){let e=Ry(n,t),i;e==="stl"?i=xy(n):e==="3mf"?i=vy(n):i=await Sy(n),fy(i,t),Li("")}async function qc(n,t){if(Bd()){Li(Q.lockedOpen,!0);return}Li(Q.opening(n));try{let e=await t();await Cy(e,n),kd(n,e).then(Yc)}catch(e){console.error(e),Li(e.message||Q.openErr,!0)}}var Py=n=>n>=1e6?(n/1e6).toFixed(1)+" MB":Math.max(1,Math.round(n/1e3))+" KB";async function Yc(){let n=(await zc()).length>0;Lt("recentEmptyBtn").hidden=!n}async function Zc(){let n=await zc(),t=Lt("recentlist");t.innerHTML="",Lt("recentempty").hidden=n.length>0;for(let e of n){let i=document.createElement("li"),s=document.createElement("button");s.className="ropen";let r=document.createElement("b");r.textContent=e.name;let o=document.createElement("span");o.textContent=Py(e.size)+" \xB7 "+new Date(e.time).toLocaleDateString(Ci==="he"?"he-IL":"en-GB"),s.append(r,o),s.addEventListener("click",()=>{Lt("recent").hidden=!0,qc(e.name,async()=>{let l=await Hd(e.name);if(!l)throw new Error(Q.recentGone);return l})});let a=document.createElement("button");a.className="rdel",a.textContent="\xD7",a.setAttribute("aria-label",Q.recentRemove+" "+e.name),a.addEventListener("click",async()=>{await Gd(e.name),Zc(),Yc()}),i.append(s,a),t.append(i)}Lt("recent").hidden=!1}function Iy(){if(!$t)return;wn.render(tn,Ve);let n=["X "+Lt("dx").textContent+" \xB7 Y "+Lt("dy").textContent+" \xB7 Z "+Lt("dz").textContent+" "+Q.mm],t=uf;t&&(n.push(Q.shareWeight(kr(t.part+(t.needsSupport?t.support:0)),t.needsSupport?kr(t.support):"",Lt("infill").value)),n.push(Q.shareTime(Lt("wtime").textContent+" "+Lt("wtimeu").textContent))),Di&&De.length&&Lt("mtext").textContent&&n.push(Q.measure+": "+Lt("mtext").textContent.replace(/\s+/g," ").replace(/°/g,"\xB0\u200E").trim());let e=Lt("fname").textContent,i=qd(wn.domElement,{title:e,lines:n,brand:"Mobile 3D View",rtl:Ci==="he"}),s=window.AndroidHost;if(s&&s.shareImage)try{s.shareImage(i.slice(i.indexOf(",")+1),e+`
`+n.join(`
`));return}catch(r){console.error(r)}Lt("shareimg").src=i,Lt("shareview").hidden=!1}function Jc(n){if(n)return qc(n.name,()=>n.arrayBuffer())}function Kc(){let n=window.AndroidHost;if(!n)return;let t=n.pendingName();if(t)return qc(t,async()=>{let e=await fetch("/__opened?t="+Date.now());if(!e.ok)throw new Error(Q.pendingErr);return e.arrayBuffer()})}document.querySelectorAll("input.file").forEach(n=>n.addEventListener("change",()=>{Jc(n.files[0]),n.value=""}));document.querySelectorAll("[data-view]").forEach(n=>n.addEventListener("click",()=>nf(sf[n.dataset.view])));Lt("boxToggle").addEventListener("click",n=>{let t=n.currentTarget.getAttribute("aria-pressed")!=="true";n.currentTarget.setAttribute("aria-pressed",t),Yn&&(Yn.visible=t)});function yf(n){Di=n==="measure",Vr=n==="lay",Gs="",Lt("measureToggle").setAttribute("aria-pressed",Di),Di||Xr(),Xc(),Vs(),Wr()}Lt("measureToggle").addEventListener("click",()=>yf(Di?null:"measure"));Lt("layToggle").addEventListener("click",()=>yf(Vr?null:"lay"));Lt("bgToggle").addEventListener("click",()=>{zs=!zs,ef()});Lt("layreset").addEventListener("click",_y);Lt("layauto").addEventListener("click",gy);Lt("ohToggle").addEventListener("click",n=>{ja=!ja,n.currentTarget.setAttribute("aria-pressed",ja),lf()});Lt("share").addEventListener("click",Iy);Lt("checkBtn").addEventListener("click",py);Lt("checkclose").addEventListener("click",()=>{Lt("check").hidden=!0});Lt("bed").value=String(rf());Lt("bed").addEventListener("change",()=>{try{localStorage.setItem("m3dv-bed",Lt("bed").value)}catch{}kc&&of(kc)});Lt("shareclose").addEventListener("click",()=>{Lt("shareview").hidden=!0});Lt("recentBtn").addEventListener("click",Zc);Lt("recentEmptyBtn").addEventListener("click",Zc);Lt("recentclose").addEventListener("click",()=>{Lt("recent").hidden=!0});window.__shareFailed=()=>Li(Q.shareFail,!0);Yc();Lt("mclear").addEventListener("click",()=>{Xr()});document.querySelectorAll("[data-mode]").forEach(n=>n.addEventListener("click",()=>{We=n.dataset.mode,Xr()}));Lt("infill").addEventListener("change",Hc);window.addEventListener("dragover",n=>n.preventDefault());window.addEventListener("drop",n=>{n.preventDefault(),Jc(n.dataTransfer.files[0])});window.__viewer={openFile:Jc,openPending:Kc,checkMarks:()=>ks.children.map(n=>n.type+":"+n.geometry.attributes.position.count).join(","),overhangTris:()=>Hs.children[0]?Hs.children[0].geometry.attributes.position.count/3:0,tree:()=>{let n=[],t=(e,i)=>{n.push("  ".repeat(i)+e.type+" name="+JSON.stringify(e.name)+" ud="+JSON.stringify(e.userData)+(e.isMesh?" tris="+(e.geometry.index?e.geometry.index.count:e.geometry.attributes.position.count)/3+" groups="+e.geometry.groups.length:"")),e.children.forEach(s=>t(s,i+1))};return $t&&t($t,0),n.join(`
`)},colors:()=>{let n=[];return $t&&$t.traverse(t=>{t.isMesh&&[].concat(t.material).forEach(e=>n.push("#"+e.color.getHexString()+(e.vertexColors?"+vc":"")))}),n.join(" ")},project:(n,t,e)=>{let i=wn.domElement.getBoundingClientRect(),s=_f(new F(n,t,e),i);return[s.x+i.left,s.y+i.top]}};Kc();zd(n=>{n.state==="owned"&&(Li(""),Kc()),Wr()});Fd();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.3
  *)
*/
