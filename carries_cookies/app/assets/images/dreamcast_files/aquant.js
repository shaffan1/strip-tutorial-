if(!__qc)var __qc={qs:"quantserve.com",ql:"quantcount.com",pixelcalls:[],pmto:null,pmc:void 0,qcdst:function(){return __qc.qctzoff(0)!=__qc.qctzoff(6)?1:0},qctzoff:function(a){a=new Date(2E3,a,1,0,0,0,0);var b=a.toGMTString(),b=new Date(b.substring(0,b.lastIndexOf(" ")-1));return a-b},qceuc:function(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)},qcrnd:function(){return Math.round(2147483647*Math.random())},qcgc:function(a){var b="",c=document.cookie;if(!c)return b;
var d=c.indexOf(a+"\x3d");a=d+a.length+1;-1<d&&(b=c.indexOf(";",a),0>b&&(b=c.length),b=c.substring(a,b));return b},qcdomain:function(){var a=document.domain;"www."==a.substring(0,4)&&(a=a.substring(4,a.length));var b=a.split("."),c=b.length;return 3>c||3>b[c-1].length?a:a=b[c-2]+"."+b[c-1]},qhash2:function(a,b){for(var c=0;c<b.length;c++)a^=b.charCodeAt(c),a+=(a<<1)+(a<<4)+(a<<7)+(a<<8)+(a<<24);return a},qhash:function(a){var b=__qc.qhash2(2166136261,a);a=__qc.qhash2(3386659096,a);return Math.round(Math.abs(b*
a)/65536).toString(16)},sd:"4dcfa7079941 127fdf7967f31 588ab9292a3f 32f92b0727e5 22f9aa38dfd3 a4abfe8f3e04 18b66bc1325c 958e70ea2f28 bdbf0cb4bbb 65118a0d557 40a1d9db1864 18ae3d985046 3b26460f55d".split(" "),qcsc:function(){var a="",b=__qc.qcdomain();if(1==__qc.qad)return";fpan\x3du;fpa\x3d";for(var c=__qc.qhash(b),d=0;d<__qc.sd.length;d++)if(__qc.sd[d]==c)return";fpan\x3du;fpa\x3d";var c=document,d=new Date,e=__qc.qcgc("__qca");if(0<e.length){try{var g=parseInt(e.split("-")[2],10);339552E5<d-g&&(c.cookie=
"__qca\x3d"+e+"; expires\x3d"+(new Date(g+339552E5)).toGMTString()+"; path\x3d/; domain\x3d"+b)}catch(f){}a+=";fpan\x3d0;fpa\x3d"+e}0==__qc.qcgc("__qca").length&&(e="P0-"+__qc.qcrnd()+"-"+d.getTime(),c.cookie="__qca\x3d"+e+"; expires\x3d"+(new Date(d.getTime()+339552E5)).toGMTString()+"; path\x3d/; domain\x3d"+b,e=__qc.qcgc("__qca"),a=0<e.length?a+(";fpan\x3d1;fpa\x3d"+e):a+";fpan\x3du;fpa\x3d");return a},qcdc:function(a){document.cookie=a+"\x3d; expires\x3dThu, 01 Jan 1970 00:00:01 GMT; path\x3d/; domain\x3d"+
__qc.qcdomain()},qpxload:function(a){a&&"number"==typeof a.width&&3==a.width&&__qc.qcdc("__qca")},qcdnt:function(){var a=!1;"undefined"!==typeof window.external&&null!==window.external&&(a=window.external,a="function"===typeof a.InPrivateFilteringEnabled&&!0===a.InPrivateFilteringEnabled());return a||"1"===navigator.doNotTrack||"yes"===navigator.doNotTrack||"1"===navigator.msDoNotTrack},qcp:function(a,b){var c="",d=null;uh=null;var e="webpage",g="load";if(null!=b)for(var f in b)"string"==typeof f&&
"string"==typeof b[f]&&("uid"==f||"uh"==f?(!1===__qc.qcdnt()&&(uh=__qc.qhash(b[f])),delete b[f]):"qacct"==f?d=b[f]:(c+=";"+f+a+"\x3d"+__qc.qceuc(b[f]),"media"==f&&(e=b[f]),"event"==f&&(g=b[f])));if("string"!=typeof d){if("undefined"==typeof _qacct||0==_qacct.length)return"";d=_qacct}"string"===typeof uh&&(b.uh=uh,c+=";uh"+a+"\x3d"+__qc.qceuc(uh));if("webpage"==e&&"load"==g){for(g=0;g<__qc.qpixelsent.length;g++)if(__qc.qpixelsent[g]==d)return"";__qc.qpixelsent.push(d)}"ad"==e&&(__qc.qad=1);return";a"+
a+"\x3d"+d+c},qcesc:function(a){return a.replace(/\./g,"%2E").replace(/,/g,"%2C")},qcd:function(a){return"undefined"!=typeof a&&null!=a},qcogl:function(){for(var a=document.getElementsByTagName("meta"),b="",c=0;c<a.length;c++){if(1E3<=b.length)return b;if(__qc.qcd(a[c])&&__qc.qcd(a[c].attributes)&&__qc.qcd(a[c].attributes.property)&&__qc.qcd(a[c].attributes.property.value)&&__qc.qcd(a[c].content)){var d=a[c].attributes.property.value,e=a[c].content;if(3<d.length&&"og:"==d.substring(0,3)){0<b.length&&
(b+=",");var g=80<e.length?80:e.length,b=b+(__qc.qcesc(d.substring(3,d.length))+"."+__qc.qcesc(e.substring(0,g)))}}}return __qc.qceuc(b)},qchcr:function(a){if(a.source===window.top){var b=null;try{b="object"===typeof JSON&&JSON.parse(a.data)}catch(c){}b&&"object"===typeof b.PrivacyManagerAPI&&(clearTimeout(__qc.pmto),window.removeEventListener?window.removeEventListener("message",__qc.qchcr,!1):window.detachEvent&&window.detachEvent("onmessage",__qc.qchcr),__qc.pmc=b.PrivacyManagerAPI,__qc.firepixels())}},
qccfp:function(a,b){__qc.pmc=PrivacyManagerAPI.callApi(a,__qc.qs,__qc.qcdomain(),"truste.com",b);__qc.firepixels()},qcctp:function(a,b){var c={PrivacyManagerAPI:{timestamp:(new Date).getTime(),action:a,self:__qc.qs,domain:__qc.qcdomain(),authority:"truste.com",type:b}};if(window.addEventListener)window.addEventListener("message",__qc.qchcr,!1);else if(window.attachEvent)window.attachEvent("onmessage",__qc.qchcr);else{__qc.pmc=!0;__qc.firepixels();return}try{window.top.postMessage(JSON.stringify(c),
"*")}catch(d){}__qc.pmto=setTimeout(function(){void 0===__qc.pmc&&(__qc.pmc=!0,__qc.firepixels())},25)},qc_consent:function(a,b){if(void 0===__qc.pmc){if(window.top===window.self){if("object"===typeof PrivacyManagerAPI&&"function"===typeof PrivacyManagerAPI.callApi){__qc.qccfp(a,b);return}}else if(window.postMessage&&"object"===typeof JSON){__qc.qcctp(a,b);return}__qc.pmc=!0}__qc.firepixels()},qctv:function(a){var b="";"object"===typeof a&&(b="p"+("approved"===a.consent?"a":"d"),b+="asserted"===a.source?
"e":"i");return b},qcenqp:function(a){var b="function"==typeof encodeURIComponent?"n":"s",c=__qc.qcrnd(),d="",e="",g="",f="",l="",m="u",n="1",k=0;__qc.qad=0;"undefined"==typeof __qc.qpixelsent&&(__qc.qpixelsent=[]);if("undefined"!=typeof a&&null!=a){__qc.qopts=a;for(var h in __qc.qopts)if("string"==typeof __qc.qopts[h]){e=__qc.qcp("",__qc.qopts);break}else"object"==typeof __qc.qopts[h]&&null!=__qc.qopts[h]&&(++k,e+=__qc.qcp("."+k,__qc.qopts[h]))}else"string"==typeof _qacct&&(e=__qc.qcp("",null));
if(0!=e.length){var q=navigator.cookieEnabled?"1":"0";"undefined"!=typeof navigator.javaEnabled&&(m=navigator.javaEnabled()?"1":"0");"undefined"!=typeof _qmeta&&null!=_qmeta&&(g=";m\x3d"+__qc.qceuc(_qmeta),_qmeta=null);self.screen&&(d=screen.width+"x"+screen.height+"x"+screen.colorDepth);a=new Date;var k=__qc.qcdst(),r=__qc.qcsc();window.location&&window.location.href&&(f=__qc.qceuc(window.location.href));window.document&&window.document.referrer&&(l=__qc.qceuc(window.document.referrer));self==top&&
(n="0");h=__qc.qcogl();c="/pixel;r\x3d"+c+e+r+";ns\x3d"+n+";ce\x3d"+q;b=";je\x3d"+m+";sr\x3d"+d+";enc\x3d"+b+";dst\x3d"+k+";et\x3d"+a.getTime()+";tzo\x3d"+a.getTimezoneOffset()+g+";ref\x3d"+l+";url\x3d"+f+";ogl\x3d"+h;__qc.pixelcalls.push({p1:c,p2:b});__qc.firepixels()}},fire:function(a){var b="http";"https:"==window.location.protocol&&(b+="s");var b=b+"://pixel."+(!0===__qc.pmc||"approved"===__qc.pmc.consent?__qc.qs:__qc.ql),b=b+a.p1,b=b+(";cm\x3d"+__qc.qctv(__qc.pmc)),b=b+a.p2,c=new Image;c.alt=
"";c.src=b;c.onload=function(){__qc.qpxload(c)}},firepixels:function(){if(__qc.pmc)for(;__qc.pixelcalls.length;)__qc.fire(__qc.pixelcalls.shift());else __qc.qc_consent("getConsent","advertising")},quantserve:function(){"undefined"==typeof _qevents&&(_qevents=[]);"undefined"!=typeof _qoptions&&null!=_qoptions?(__qc.qcenqp(_qoptions),_qoptions=null):_qevents.length||"undefined"==typeof _qacct||__qc.qcenqp(null);if(!__qc.evts){for(var a in _qevents)__qc.qcenqp(_qevents[a]);_qevents={push:function(){for(var a=
arguments,c=0;c<a.length;c++)__qc.qcenqp(a[c])}};__qc.evts=1}}};
if(!__sq)var __sq={events:0,conf:{},labels_to_apply:{},processed:[],qc_data:{},lightningRoutes:{a:"/s/sa/",b:"/s/cda/",c:"/s/ga/"},lightningData:[],and:function(a){i=0;for(len=a.length-1;i<len&&a[i];i++);return a[i]},or:function(a){i=0;for(len=a.length-1;i<len&&!a[i];i++);return a[i]},Label:function(a,b){"undefined"==typeof this.labels_to_apply[this.qc_data.qacct]&&(this.labels_to_apply[this.qc_data.qacct]=[]);this.labels_to_apply[this.qc_data.qacct].push(a)},"Lightning Product Details":function(a,
b){this.labels_to_apply[this.qc_data.qacct].push("_fp.event.product detail");this.buildLightningData("details");this.buildLightning(a,"a")},"Lightning Product List":function(a,b){this.labels_to_apply[this.qc_data.qacct].push("_fp.event.product list");this.buildLightningData("si");this.buildLightning(a,"a")},"Lightning Basket":function(a,b){this.labels_to_apply[this.qc_data.qacct].push("_fp.event.basket");this.buildLightningData("si");this.buildLightning(a,"a")},"Lightning Homepage":function(a,b){this.labels_to_apply[this.qc_data.qacct].push("_fp.event.homepage");
this.buildLightningData("s");this.buildLightning(a,"c")},"Lightning Conversion":function(a,b){var c={title:"summary"};c.oid=this.qc_data.orderid?this.qc_data.orderid:"";c.tot=this.qc_data.revenue?this.qc_data.revenue:"";c.cur=this.qc_data.cur?this.qc_data.cur:"";this.labels_to_apply[this.qc_data.qacct].push("_fp.event.conversion");this.buildLightningData("li");this.lightningData.push(c);this.buildLightning(a,"b")},Lightning:function(a,b){__sq.labels_to_apply[this.qc_data.qacct].push("_fp.event."+
a+",_fp.kind."+a)},ezdt:function(a){for(var b in this.qc_data)switch(b){case "orderid":a.orderid=this.qc_data[b];break;case "revenue":a.revenue=this.qc_data[b];break;case "struqobj":this.fireLightning(this.qc_data[b]),a.stqcd=JSON.stringify(this.qc_data[b])}},buildLightningData:function(a){this.qc_data.pid?this.lightningData.push({title:a,pid:this.qc_data.pid}):this.lightningData.push({title:a})},fireLightning:function(a){var b=["injectTrackingPixel"];b.push(a);window._struqPI=window._struqPI||[];
a=document.createElement("script");a.type="text/javascript";a.src=("https:"==document.location.protocol?"https://":"http://")+"maxcdn.quantserve.com/content/scripts/Struq_Pixel_Injector_min_v1-18.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c);_struqPI.push(b)},buildLightning:function(a,b,c){this.fireLightning({trackingPixelId:a,route:this.lightningRoutes[b],collectData:!1,data:this.lightningData,options:{timeoutMs:2E3,ezTag:1}})},Javascript:function(a,b){(new Function(a))()},
Element:function(){},Click:function(a,b,c){b=JSON.parse(b);b.event="click";return __sq.delayed_bind(b,c)},"Right Click":function(a,b,c){b=JSON.parse(b);b.event="contextmenu";return __sq.delayed_bind(b,c)},"Double Click":function(a,b,c){b=JSON.parse(b);b.event="dblclick";return __sq.delayed_bind(b,c)},"Mouse Over":function(a,b,c){b=JSON.parse(b);b.event="mouseover";return __sq.delayed_bind(b,c)},Equals:function(a,b,c){return a===b},Contains:function(a,b,c){return 0<=a.indexOf(b)},"Starts With":function(a,
b,c){return 0===a.lastIndexOf(b,0)},"Ends With":function(a,b,c){return a.substr(-b.length,a.length)==b},"Does Not Contain":function(a,b,c){return-1===a.indexOf(b)},"Bind Element":function(a,b){var c=function(){_qevents.push({qacct:__sq.conf.pcode,labels:a.label,event:a.event,ezt:"1"})},d=document.getElementById(a.element);if(null!=d){if("function"===typeof d.addEventListener)d.addEventListener(a.event,c,!0);else if("function"===typeof d.attachEvent)d.attachEvent("on"+a.event,c);else if(null===d["on"+
a.event])d["on"+a.event]=c;else{var e=d["on"+a.event];d["on"+a.event]=function(){c();e()}}return!0}return!1},delayed_bind:function(a,b){return null!=document.getElementById(a.element)?(b.actions.push(new Function("return"+JSON.stringify(a))),b.actions.push(__sq["Bind Element"]),!0):!1},parse_referrer:function(a){var b=document.createElement("a");b.href=a;return b},Url:function(){return window.top===window.self?document.location.href:__sq.parse_referrer(document.referrer).href},Domain:function(){return window.top===
window.self?document.location.host:__sq.parse_referrer(document.referrer).host},Scheme:function(){return window.top===window.self?document.location.protocol:__sq.parse_referrer(document.referrer).protocol},Path:function(){return window.top===window.self?document.location.pathname:__sq.parse_referrer(document.referrer).pathname},Query:function(){return window.top===window.self?document.location.search:__sq.parse_referrer(document.referrer).search},process:function(){for(var a=0;a<this.processed.length;a++)if(this.processed[a]===
this.qc_data.qacct){__sq.labels_to_apply[this.qc_data.qacct]=[];__sq.applyLabels();return}for(a=0;a<this.conf.rules.length;a++){var b=this.conf.rules[a];this.evalStack(b.conditions,b)&&this.evalStack(b.actions,b)}this.processed.push(this.qc_data.qacct);this.applyLabels()},evalStack:function(a,b){stack=__sq.innerEvalStack(a,b);return __sq.and(stack)},innerEvalStack:function(a,b){var c,d;c=[];for(i=0;i<a.length;i++){d=a[i];var e=[];for(p=d.length;1<p;p--)e.push(c.pop());e.push(b);c.push(d.apply(this,
e))}return c},qpixelcheck:function(a){for(var b=!1,c=0;c<a.length;c++)a[c]===this.qc_data.qacct&&(b=!0);return b},applyLabels:function(a){""!=this.qc_data.labels&&void 0!=this.qc_data.labels&&__sq.labels_to_apply[this.qc_data.qacct].push(this.qc_data.labels);__sq.conf.marketer&&0===__sq.labels_to_apply[this.qc_data.qacct].length&&__sq.labels_to_apply[this.qc_data.qacct].push("_fp.event.Default");a={qacct:this.qc_data.qacct,ezt:"1"};this.ezdt(a);for(prop in this.qc_data)this.qc_data.hasOwnProperty(prop)&&
(a[prop]=this.qc_data[prop]);a.labels=__sq.labels_to_apply[this.qc_data.qacct].join();void 0!==__qc.qpixelsent&&0!==__qc.qpixelsent.length&&__sq.qpixelcheck(__qc.qpixelsent)&&(a.event="easytag");_qevents.push(a)},enqezt:function(a){this.qc_data=a;__sq.labels_to_apply[this.qc_data.qacct]=[];__sq.process()},receive:function(a){"undefined"==typeof ezt&&(ezt=[]);if(!ezt.loaded)for("undefined"!==typeof smarttagdata&&null!==smarttagdata?ezt.push(smarttagdata):"undefined"!==typeof qcdata&&null!==qcdata&&
ezt.push(qcdata),a=0;a<ezt.length;a++)queueManager.push(ezt[a]),__sq.events++;queueManager.drain(__sq.conf.pcode,function(a){a.hasOwnProperty("event")?_qevents.push(a):__sq.enqezt(a)});ezt={push:function(){for(var a=arguments,c=0;c<a.length;c++)queueManager.push(a[c])},loaded:!0}}},queueManager=function(){return{queues:{},pixels:0,processed:!1,push:function(){for(var a=0;a<arguments.length;a++){var b=arguments[a],c=b.qacct,d=this.queues[c];"undefined"===typeof d&&(d=this.queues[c]=[]);d.push(b)}},
drain:function(a,b){var c=this.queues[a];if("undefined"!==typeof c)for(var d=0;d<c.length;d++)this.pixels++,b(c[d]),this.queues[a].push=b}}}();
__sq.conf={pcode:"p-v6vhDK1Eg0ZDD",marketer:!0,rules:[{conditions:[function(){return"https://soundcloud.com/go/buy/go"},__sq.Url,__sq.Equals],actions:[function(){return"_fp.event.Get SoundCloud Go"},__sq.Label]},{conditions:[function(){return"https://soundcloud.com/go"},__sq.Url,__sq.Equals],actions:[function(){return"_fp.event.Go Page"},__sq.Label]},{conditions:[function(){return"https://soundcloud.com/welcome"},__sq.Url,__sq.Equals],actions:[function(){return"_fp.event.Welcome Page"},__sq.Label]},
{conditions:[function(){return"https://soundcloud.com/"},__sq.Url,__sq.Equals],actions:[function(){return"_fp.event.Homepage"},__sq.Label]},{conditions:[function(){return"https://soundcloud.com/pro/buy/pro-unlimited"},__sq.Url,__sq.Equals],actions:[function(){return"_fp.event.SoundCould Pro Unlimited Landing Page"},__sq.Label]},{conditions:[function(){return"https://soundcloud.com/pro/buy/pro"},__sq.Url,__sq.Equals],actions:[function(){return"_fp.event.SoundCloud Pro Landing Page"},__sq.Label]}]};
function quantserve(){__qc.quantserve();__sq.receive()}quantserve();