"use strict";window.g_avu=class{constructor(c,a){this.g_ajC=c,this.g_avv=a,this.g_avw=!1,this.g_aiG=()=>this.g_Ja()}g_avx(){}g_avy(e,a,b,c){this.g_ajC.g_avz(this.g_avv,e,a,!!b,c)}g_avA(e,a,b,c){return this.g_ajC.g_avB(this.g_avv,e,a,!!b,c)}g_avC(d,a,b){this.g_ajC.g_avD()?this.g_avy(d,a,b):this.g_ajC.g_avE()._OnMessageFromDOM({type:"event",component:this.g_avv,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_avF(c,a){this.g_ajC.g_avG(this.g_avv,c,a)}g_avH(d){for(const[a,b]of d)this.g_avF(a,b)}g_avI(){return this.g_ajC}g_avJ(){return this.g_avv}g_ZS(){this.g_avw||(this.g_ajC.g_avK(this.g_aiG),this.g_avw=!0)}g_ZF(){this.g_avw&&(this.g_ajC.g_avL(this.g_aiG),this.g_avw=!1)}g_Ja(){}},"use strict",window.g_avM=class extends g_avu{constructor(c,a){super(c,a),this.g_avN=new Map,this.g_avO=!0,this.g_avF("create",b=>this.g_avP(b)),this.g_avF("destroy",b=>this.g_avQ(b)),this.g_avF("set-visible",b=>this.g_avR(b)),this.g_avF("update-position",b=>this.g_avS(b)),this.g_avF("update-state",b=>this.g_avT(b)),this.g_avF("focus",b=>this.g_avU(b)),this.g_avF("set-css-style",b=>this.g_avV(b))}g_avW(b){this.g_avO=!!b}g_avX(c,e){this.g_avF(c,b=>{const a=b.elementId,c=this.g_avN.get(a);return e(c,b)})}g_avP(d){const a=d.elementId,b=this.g__q(a,d);this.g_avN.set(a,b),d.isVisible||(b.style.display="none"),this.g_avO&&document.body.appendChild(b)}g__q(){throw new Error("required override")}g_avY(){}g_avQ(d){const a=d.elementId,b=this.g_avN.get(a);this.g_avY(b),this.g_avO&&b.parentElement.removeChild(b),this.g_avN.delete(a)}g_avZ(d,a,b){b||(b={}),b.elementId=a,this.g_avy(d,b)}g_av_(d,a,b){b||(b={}),b.elementId=a,this.g_avC(d,b)}g_avR(c){if(this.g_avO){const a=this.g_avN.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_avS(d){if(this.g_avO){const a=this.g_avN.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_avT(c){const a=this.g_avN.get(c.elementId);this.g_av$(a,c)}g_av$(){throw new Error("required override")}g_avU(c){const a=this.g_avN.get(c.elementId);c.focus?a.focus():a.blur()}g_avV(c){const a=this.g_avN.get(c.elementId);a.style[c.prop]=c.val}g_awa(b){return this.g_avN.get(b)}},"use strict";{function n(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function o(c){const a=await p(c),b=new TextDecoder("utf-8");return b.decode(a)}function p(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;window.RealFile=window.File;const f=[],i=new Map,g=new Map;let h=0;const j=[];self.g_awb=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");j.push(b)},window.g_awc=class b{constructor(b){this.g_awd=b.g_awe,this.g_awf=null,this.g_ahI="",this.g_awg=b.g_awh,this.g_awi={},this.g_awj=null,this.g_awk=null,this.g_awl=[],this.g_awm=null,this.g_afJ=null,this.g_ajv=null,this.g_agq=-1,this.g_awn=()=>this.g_awo(),this.g_awp=[],this.g_ahN=b.g_awq,"cordova"===this.g_ahN&&this.g_awd&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in Cordova due to crbug.com/939775. Reverting to DOM mode."),this.g_awd=!1),this.g_awr=!1,this.g_aws=null,("html5"===this.g_ahN||"playable-ad"===this.g_ahN)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_avG("runtime","cordova-fetch-local-file",b=>this.g_awt(b)),this.g_avG("runtime","create-job-worker",b=>this.g_awu(b)),"cordova"===this.g_ahN?document.addEventListener("deviceready",()=>this.g_YJ(b)):this.g_YJ(b)}g_en(){this.g_awv(),this.g_awf&&(this.g_awf.onmessage=null,this.g_awf=null),this.g_awj&&(this.g_awj.terminate(),this.g_awj=null),this.g_awk&&(this.g_awk.g_en(),this.g_awk=null),this.g_afJ&&(this.g_afJ.parentElement.removeChild(this.g_afJ),this.g_afJ=null)}g_aww(){return this.g_afJ}g_fh(){return this.g_ahI}g_avD(){return this.g_awd}g_Aj(){return this.g_ahN}g_ajR(){return"cordova"===this.g_ahN&&a}g_awx(){if(!this.g_ajR())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_YJ(d){if("playable-ad"===this.g_ahN){this.g_aws=self.c3_base64files,await this.g_awy();for(let a=0,b=d.g_awz.length;a<b;++a){const b=d.g_awz[a].toLowerCase();this.g_aws.hasOwnProperty(b)&&(d.g_awz[a]=URL.createObjectURL(this.g_aws[b]))}}if(d.g_awA)this.g_ahI=d.g_awA;else{const c=location.origin;this.g_ahI=("null"===c?"file:///":c)+location.pathname;const a=this.g_ahI.lastIndexOf("/");-1!==a&&(this.g_ahI=this.g_ahI.substr(0,a+1))}if(d.g_awB)for(const[a,b]of Object.entries(d.g_awB))this.g_awi[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_awf=a.port1,this.g_awf.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_awC(b)),this.g_ajv=new self.g_awD(this),await this.g_ajv.g_acN(),this.g_awE(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),await this.g_awF(),this.g_awd?await this.g_awG(d,a.port2):await this.g_awH(d,a.port2)}g_awI(b){return this.g_awi.hasOwnProperty(b)?this.g_awi[b]:b.endsWith("/workerMain.js")&&this.g_awi.hasOwnProperty("workerMain.js")?this.g_awi["workerMain.js"]:"playable-ad"===this.g_ahN&&this.g_aws.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aws[b.toLowerCase()]):b}async g_awJ(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_ajR()){const a=await this.g_Af(this.g_awg+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_awE(){if(this.g_awx()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_awK(d){return{baseUrl:this.g_ahI,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_agU(),projectData:d.g_awL,previewImageBlobs:window.cr_previewImageBlobs||this.g_aws,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:d.g_awq,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_awM,jobScheduler:this.g_ajv.g_awN(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_awg+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_awg+"opus.wasm.wasm",isWKWebView:this.g_ajR(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_awG(e,a){const b=this.g_awI(e.g_awO);this.g_awj=await this.g_awJ(b,this.g_ahI,{name:"Runtime"}),this.g_afJ=document.createElement("canvas"),this.g_afJ.style.display="none";const c=this.g_afJ.transferControlToOffscreen();document.body.appendChild(this.g_afJ),window.c3canvas=this.g_afJ,this.g_awj.postMessage(Object.assign(this.g_awK(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_awP||[],engineScripts:e.g_awz,projectScripts:window.g_awQ,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_ajv.g_awR()]),this.g_awl=f.map(b=>new b(this)),this.g_awS(),self.c3_callFunction=(c,a)=>this.g_awm.g_Pv(c,a),"preview"===this.g_ahN&&(self.goToLastErrorScript=()=>this.g_avz("runtime","go-to-last-error-script"))}async g_awH(a,b){if(this.g_afJ=document.createElement("canvas"),this.g_afJ.style.display="none",document.body.appendChild(this.g_afJ),window.c3canvas=this.g_afJ,this.g_awl=f.map(b=>new b(this)),this.g_awS(),a.g_awT&&0<a.g_awT.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_awT.map(a=>n(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_awU(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_awU(b),100)}}const c=a.g_awz.map(b=>new URL(b,this.g_ahI).toString());if(await Promise.all(c.map(a=>n(a))),"preview"===this.g_ahN&&"object"!=typeof self.g_aQ.g_avt)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_awK(a),{isInWorker:!1,messagePort:b,canvas:this.g_afJ,runOnStartupFunctions:j});this.g_awk=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_awk,d)}g_awU(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_awu(){const b=await this.g_ajv.g_awV();return{outputPort:b,transferables:[b]}}g_avE(){if(this.g_awd)throw new Error("not available in worker mode");return this.g_awk}g_avz(f,a,b,c,d){this.g_awf.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},this.g_awr?void 0:d)}g_avB(i,a,b,c,d){const e=h++,f=new Promise((c,a)=>{g.set(e,{resolve:c,reject:a})});return this.g_awf.postMessage({type:"event",component:i,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},this.g_awr?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_awW(c);else if("result"===a)this.g_awX(c);else if("runtime-ready"===a)this.g_awY();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_awW(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_awZ(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_awZ(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_awZ(c,!1,d.toString())}):this.g_awZ(c,!0,f))}g_awZ(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_awf.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_awX(f){const a=f.responseId,b=f.isOk,c=f.result,d=g.get(a);b?d.resolve(c):d.reject(c),g.delete(a)}g_avG(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aw_(b){if(f.includes(b))throw new Error("DOM handler already added");f.push(b)}g_awS(){for(const b of this.g_awl)if("runtime"===b.g_avJ())return void(this.g_awm=b);throw new Error("cannot find runtime DOM handler")}g_awC(b){this.g_avz("debugger","message",b)}g_awY(){for(const b of this.g_awl)b.g_avx()}static g_agU(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aw$(){return await this.g_avB("runtime","get-remote-preview-status-info")}g_avK(b){this.g_awp.push(b),this.g_axa()}g_avL(c){const a=this.g_awp.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_awp.splice(a,1),this.g_awp.length||this.g_awv()}g_axa(){-1===this.g_agq&&this.g_awp.length&&(this.g_agq=requestAnimationFrame(this.g_awn))}g_awv(){-1!==this.g_agq&&(cancelAnimationFrame(this.g_agq),this.g_agq=-1)}g_awo(){this.g_agq=-1;for(const b of this.g_awp)b();this.g_axa()}g_axb(b){this.g_awm.g_axb(b)}g_axc(b){this.g_awm.g_axc(b)}g_axd(){this.g_awm.g_axd()}g_axe(b){this.g_awm.g_axe(b)}g_AB(b){return!!c[b]}async g_ajy(c){const a=await this.g_avB("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_fT(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fU(b){return!this.g_fT(b)}async g_awt(c){const a=c.filename;switch(c.as){case"text":return await this.g_Ad(a);case"buffer":return await this.g_Af(a);default:throw new Error("unsupported type");}}g_axf(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Ad(b){const a=await this.g_axf(b);return await o(a)}g_axg(){if(d.length&&!(8<=e)){e++;const b=d.shift();this.g_axh(b.filename,b.g_axi,b.g_axj)}}g_Af(f){return new Promise((g,b)=>{d.push({filename:f,g_axi:b=>{e--,this.g_axg(),g(b)},g_axj:c=>{e--,this.g_axg(),b(c)}}),this.g_axg()})}async g_axh(c,a,b){try{const b=await this.g_axf(c),d=await p(b);a(d)}catch(c){b(c)}}async g_awy(){const d=[];for(const[a,b]of Object.entries(this.g_aws))d.push(this.g_axk(a,b));await Promise.all(d)}async g_axk(e,a){if("object"==typeof a)this.g_aws[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_aws[e]=c}}g_awF(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_awr=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let c=!1;document.addEventListener("pause",()=>c=!0),document.addEventListener("resume",()=>c=!1);const d=class extends g_avu{constructor(b){super(b,"runtime"),this.g_axl=!0,this.g_axm="any",this.g_axn=!1,this.g_axo=!1,this.g_axp=null,b.g_avG("canvas","update-size",b=>this.g_axq(b)),b.g_avG("runtime","invoke-download",b=>this.g_axr(b)),b.g_avG("runtime","raster-svg-image",b=>this.g_axs(b)),b.g_avG("runtime","set-target-orientation",b=>this.g_axt(b)),b.g_avG("runtime","register-sw",()=>this.g_axu()),b.g_avG("runtime","post-to-debugger",b=>this.g_axv(b)),b.g_avG("runtime","go-to-script",b=>this.g_axv(b)),b.g_avG("runtime","before-start-ticking",()=>this.g_axw()),b.g_avG("runtime","debug-highlight",b=>this.g_axx(b)),b.g_avG("runtime","enable-device-orientation",()=>this.g_axy()),b.g_avG("runtime","enable-device-motion",()=>this.g_axz()),window.addEventListener("contextmenu",b=>b.preventDefault()),window.addEventListener("selectstart",b=>b.preventDefault()),window.addEventListener("gesturehold",b=>b.preventDefault()),window.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g_agH()),this.g_axA=new Set,this.g_axB=new WeakSet,this.g_axC=!1}g_axw(){return document.addEventListener("visibilitychange",()=>this.g_ajx(document.hidden)),document.addEventListener("pause",()=>this.g_ajx(!0)),document.addEventListener("resume",()=>this.g_ajx(!1)),{isSuspended:!!(document.hidden||c)}}g_avx(){window.addEventListener("focus",()=>this.g_axD("window-focus")),window.addEventListener("blur",()=>this.g_axD("window-blur",{parentHasFocus:b()})),window.addEventListener("fullscreenchange",()=>this.g_agI()),window.addEventListener("webkitfullscreenchange",()=>this.g_agI()),window.addEventListener("mozfullscreenchange",()=>this.g_agI()),window.addEventListener("fullscreenerror",b=>this.g_agJ(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_agJ(b)),window.addEventListener("mozfullscreenerror",b=>this.g_agJ(b)),window.addEventListener("keydown",b=>this.g_axE("keydown",b)),window.addEventListener("keyup",b=>this.g_axE("keyup",b)),window.addEventListener("mousemove",b=>this.g_axF("mousemove",b)),window.addEventListener("mousedown",b=>this.g_axF("mousedown",b)),window.addEventListener("mouseup",b=>this.g_axF("mouseup",b)),window.addEventListener("dblclick",b=>this.g_axF("dblclick",b)),window.addEventListener("wheel",b=>this.g_axG("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("touchstart",b=>this.g_axH("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_axH("pointermove",b)),window.addEventListener("touchend",b=>this.g_axH("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_axH("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_axI("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_axI("pointermove",b)),window.addEventListener("pointerup",b=>this.g_axI("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_axI("pointercancel",b)));const c=()=>this.g_axd();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_axy(){this.g_axn||(this.g_axn=!0,window.addEventListener("deviceorientation",b=>this.g_axJ(b)))}g_axz(){this.g_axo||(this.g_axo=!0,window.addEventListener("devicemotion",b=>this.g_axK(b)))}g_axD(c,a){this.g_avy(c,a||null,!0)}g_agH(){this.g_avy("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_axt(b){this.g_axm=b.targetOrientation}g_axL(){const c=this.g_axm;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_agI(){const b=g_awc.g_agU();b&&"any"!==this.g_axm&&this.g_axL(),this.g_avy("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_agJ(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_avy("fullscreenerror",{isFullscreen:g_awc.g_agU(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_ajx(b){b?this.g_ajC.g_awv():this.g_ajC.g_axa(),this.g_avy("visibilitychange",{hidden:b})}g_axE(c,a){this.g_avC(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_axF(a,b){g(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_avC(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_axG(c,a){this.g_avy(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_axI(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_avC(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_axH(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_avC(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_axJ(b){this.g_avy("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_axK(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_avy("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_axq(d){const a=this.g_avI(),b=a.g_aww();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_awE(),this.g_axl&&(b.style.display="",this.g_axl=!1)}g_axr(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_axs(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_axd(){const c=[...this.g_axA];if(this.g_axA.clear(),!this.g_axC)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_axB.has(d)||this.g_axA.add(d)})}}g_axb(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_axB.delete(c);let a;try{a=c.play()}catch(a){return void this.g_axA.add(c)}a&&a.catch(()=>{this.g_axB.has(c)||this.g_axA.add(c)})}g_axc(b){this.g_axA.delete(b),this.g_axB.add(b)}g_axe(b){this.g_axC=!!b}g_axx(d){const a=d.show;if(!a)return void(this.g_axp&&(this.g_axp.style.display="none"));this.g_axp||(this.g_axp=document.createElement("div"),this.g_axp.id="inspectOutline",document.body.appendChild(this.g_axp));const b=this.g_axp;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_axu(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_axv(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Pv(c,a){return this.g_avA("js-invoke-function",{name:c,params:a})}};g_awc.g_aw_(d)}{const c=document.currentScript.src;self.g_awD=class{constructor(a){this.g_axM=a,this.g_ahI=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fh(),this.g_alE=Math.min(navigator.hardwareConcurrency||2,16),this.g_axN=null,this.g_axO=[],this.g_alC=null,this.g_axP=null}async g_acN(){if(this.g_axQ)throw new Error("already initialised");this.g_axQ=!0;const c=this.g_axM.g_awI("dispatchWorker.js");this.g_axN=await this.g_axM.g_awJ(c,this.g_ahI,{name:"DispatchWorker"});const a=new MessageChannel;this.g_alC=a.port1,this.g_axN.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_axP=await this.g_awV()}async g_awV(){const f=this.g_axO.length,a=this.g_axM.g_awI("jobWorker.js"),b=await this.g_axM.g_awJ(a,this.g_ahI,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_axN.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_axO.push(b),d.port1}g_awN(){return{inputPort:this.g_alC,outputPort:this.g_axP,maxNumWorkers:this.g_alE}}g_awR(){return[this.g_alC,this.g_axP]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_awc({g_awe:!1,g_awO:"workerMain.js",g_awz:["scripts/c3runtime.js"],g_awh:"scripts/",g_awq:"html5"})}{const b=class extends g_avu{constructor(b){super(b,"mouse"),this.g_avF("cursor",b=>this.g_axR(b))}g_axR(b){document.body.style.cursor=b}};g_awc.g_aw_(b)}