(function(e){function t(t){for(var a,r,i=t[0],o=t[1],s=t[2],g=0,u=[];g<i.length;g++)r=i[g],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);b&&b(t);while(u.length)u.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(a=!1)}a&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},c={app:0},l=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=o;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d9b":function(e,t,n){e.exports=n.p+"img/MailIcon.98133dc2.png"},2575:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=n("b7ed"),l=n.n(c),r=n("0d9b"),i=n.n(r);const o={class:"navbar navbar-inverse navbar-static-top"},s={class:"container"},b={class:"navbar-header"},g=Object(a["g"])("button",{type:"button",class:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-collapse"},[Object(a["g"])("span",{class:"icon-bar"}),Object(a["g"])("span",{class:"icon-bar"}),Object(a["g"])("span",{class:"icon-bar"})],-1),u=Object(a["i"])("Quinten HENRY - Freelance Game Programmer"),d={class:"navbar-collapse collapse"},j={class:"nav navbar-nav navbar-right"},O=Object(a["i"])("Home"),m=Object(a["g"])("li",null,[Object(a["g"])("a",{href:"HENRY_Quinten_Resume.pdf",target:"_blank"},"CV")],-1),h=Object(a["i"])("Contact"),p={class:"languagedropdown"},f={key:0},y=Object(a["i"])("Dutch "),v=Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",style:{"padding-top":"5px"},fill:"white",class:"bi bi-caret-down",viewBox:"0 0 16 16"},[Object(a["g"])("path",{d:"M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"})],-1),k=[y,v],w={key:1},E=Object(a["i"])("English "),x=Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",style:{"padding-top":"5px"},fill:"white",class:"bi bi-caret-down",viewBox:"0 0 16 16"},[Object(a["g"])("path",{d:"M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"})],-1),B=[E,x],C={class:"dropdown-content"},T=Object(a["i"])("English"),_=Object(a["i"])("Dutch"),I=Object(a["h"])('<div id="footer"><div class="container"><div style="text-align:center;"><a href="https://www.linkedin.com/in/quinten-henry-aba467136/" target="_blank"><img class="ico" src="'+l.a+'" width="50" height="50" alt="LinkedIn"></a><a href="mailto:quintenhenry@hotmail.be"><img class="ico" src="'+i.a+'" width="50" height="50" alt="Mail"></a></div></div></div>',1);function H(e,t,n,c,l,r){const i=Object(a["z"])("router-link"),y=Object(a["z"])("router-view");return Object(a["u"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",o,[Object(a["g"])("div",s,[Object(a["g"])("div",b,[g,Object(a["j"])(i,{class:"navbar-brand",to:"/"+e.$route.params.lang},{default:Object(a["F"])(()=>[u]),_:1},8,["to"])]),Object(a["g"])("div",d,[Object(a["g"])("ul",j,[Object(a["g"])("li",null,[Object(a["j"])(i,{to:"/"+e.$route.params.lang},{default:Object(a["F"])(()=>[O]),_:1},8,["to"])]),m,Object(a["g"])("li",null,[Object(a["j"])(i,{to:"/contact/"+e.$route.params.lang},{default:Object(a["F"])(()=>[h]),_:1},8,["to"])]),Object(a["g"])("li",null,[Object(a["g"])("div",p,["nl"==e.$route.params.lang?(Object(a["u"])(),Object(a["f"])("a",f,k)):(Object(a["u"])(),Object(a["f"])("a",w,B)),Object(a["g"])("div",C,["nl"==e.$route.params.lang?(Object(a["u"])(),Object(a["d"])(i,{key:0,to:"en"},{default:Object(a["F"])(()=>[T]),_:1})):(Object(a["u"])(),Object(a["d"])(i,{key:1,to:"nl"},{default:Object(a["F"])(()=>[_]),_:1}))])])])])])])]),Object(a["j"])(y,Object(a["q"])(Object(a["m"])({tagList:l.tagList,blogEntries:l.blogEntries})),null,16),I],64)}class N{constructor(e){let t=new DOMParser,n=t.parseFromString(e,"text/xml");this.title=n.getElementsByTagName("Title")[0].childNodes[0].nodeValue,this.coverImage=n.getElementsByTagName("CoverImage")[0].childNodes[0].nodeValue,this.hidden=!1,n.getElementsByTagName("Hidden").length>0&&(this.hidden=!0);var a=n.getElementsByTagName("Tag");this.tags=[];for(var c=0;c<a.length;c++)this.tags.push(a[c].textContent);this.tags=this.tags.sort();var l=n.getElementsByTagName("p");this.paragraphs=[],this.paragraphsnl=[];for(c=0;c<l.length;c++){let e=l[c].getAttribute("inline"),t=!1;null!==e&&(t=e);let n=l[c].getAttribute("href"),a="";null!==n&&(a=n);let r=l[c].getAttribute("nl"),i=!0;null!==r&&(i=!1),i?this.paragraphs.push({isInline:t,href:a,text:l[c].textContent}):this.paragraphsnl.push({isInline:t,href:a,text:l[c].textContent})}var r=n.getElementsByTagName("Video");this.videos=[];for(c=0;c<r.length;c++)this.videos.push(r[c].textContent);var i=n.getElementsByTagName("Image");this.images=[];for(c=0;c<i.length;c++)this.images.push(i[c].textContent);var o=n.getElementsByTagName("Skill");this.skills=[];for(c=0;c<o.length;c++)this.skills.push(o[c].textContent);var s=n.getElementsByTagName("Contribution");this.hasContributions=!1,this.contributions=[];for(c=0;c<s.length;c++)this.contributions.push(s[c].textContent),this.hasContributions=!0}sharesTag(e){if("All"===e)return!0;for(let t=0;t<this.tags.length;t++)if(e===this.tags[t])return!0;return!1}}const q=n("bc3a").default;function A(e){const t=[];for(const n of e)t.push(n);e.clear(),e.add("All");for(const n of t.sort())e.add(n);return e}var L={data(){return{blogEntries:[],tagList:[]}},mounted:function(){let e=new Set,t=[];this.RequestBlogEntry(1,e,t)},methods:{RequestBlogEntry:function(e,t,n){console.log(e),q.get("../entries/Blog"+e+".xml").then(a=>{if(200==a.status){let l=new N(a.data);if(!l.hidden)for(var c in l.tags)t.add(l.tags[c]);n.push(l),this.RequestBlogEntry(e+1,t,n)}}).catch(e=>{A(t),this.blogEntries=n,this.tagList=Array.from(t)})}}},S=(n("f16c"),n("6b0d")),P=n.n(S);const F=P()(L,[["render",H]]);var z=F,$=n("6c02");const G={id:"ww"},M={class:"container"},Q={class:"row"},D={class:"col-lg-8 col-lg-offset-2 centered"},V=Object(a["g"])("h1",null,"Quinten Henry - Freelance Game Programmer",-1),U=Object(a["g"])("p",null,[Object(a["i"])(" Ik ben een freelance game en simulatie programmeur die afgestudeerd is als bachelor game development op "),Object(a["g"])("a",{href:"http://www.digitalartsandentertainment.be/",target:"_blank"},"Howest DAE"),Object(a["i"])(". Ik heb veel ervaring met zowel Unity en Unreal Engine en heb mezelf volledig verdiept in het ontwikkelings process van AAA games. Graphics programming and gameplay programming zijn mijn specialiteiten. ")],-1),R=Object(a["g"])("p",null," Ik woon momenteel in België en focus de laatste jaren op mijn werk als freelancer aan games en simulaties voor mijn klanten. ",-1),Y=Object(a["g"])("p",null,"Op zoek naar een programmeur die je ideeën ontwikkeld?",-1),J=Object(a["g"])("p",null,[Object(a["i"])("I am a freelance game and simulation programmer who graduated as bachelor game development at "),Object(a["g"])("a",{href:"http://www.digitalartsandentertainment.be/",target:"_blank"},"Howest DAE"),Object(a["i"])(". I have a lot of experience with both Unity and Unreal Engine and immersed myself in the full production process of AAA games. Graphics programming and gameplay programming are my speciality. ")],-1),K=Object(a["g"])("p",null," I am currently living in Belgium and over the past years I've been focussing on working as a freelance programmer on games and simulations for my clients. ",-1),W=Object(a["g"])("p",null,"Looking for a programmer to develop your ideas?",-1),X=Object(a["g"])("button",null,"Get in touch!",-1),Z={class:"tagcontainer container"},ee={key:0,class:"active"},te=["onClick"],ne={class:"container pt"},ae={class:"row mt centered portfoliogrid"},ce={key:0,class:"col-lg-4"},le=["src"],re={class:"tagcontaineroverlay"};function ie(e,t,n,c,l,r){const i=Object(a["z"])("router-link"),o=Object(a["z"])("diV");return Object(a["u"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",G,[Object(a["g"])("div",M,[Object(a["g"])("div",Q,[Object(a["g"])("div",D,[V,"nl"==e.$route.params.lang?(Object(a["u"])(),Object(a["f"])(a["a"],{key:0},[U,R,Y],64)):(Object(a["u"])(),Object(a["f"])(a["a"],{key:1},[J,K,W],64)),Object(a["j"])(i,{to:"/Contact/"+e.$route.params.lang},{default:Object(a["F"])(()=>[X]),_:1},8,["to"])])])])]),Object(a["g"])("div",Z,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(n.tagList,e=>(Object(a["u"])(),Object(a["f"])(a["a"],{key:e},[l.selectedTag==e?(Object(a["u"])(),Object(a["f"])("div",ee,Object(a["B"])(e),1)):(Object(a["u"])(),Object(a["f"])("div",{key:1,onClick:t=>r.ClickTag(e)},Object(a["B"])(e),9,te))],64))),128))]),Object(a["g"])("div",ne,[Object(a["g"])("div",ae,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(n.blogEntries,(t,n)=>(Object(a["u"])(),Object(a["f"])(a["a"],{key:t},[t.sharesTag(l.selectedTag)&&!t.hidden?(Object(a["u"])(),Object(a["f"])("div",ce,[Object(a["j"])(i,{class:"zoom green",to:{path:"/Post/"+e.$route.params.lang,query:{id:n}}},{default:Object(a["F"])(()=>[Object(a["g"])("img",{class:"img-responsive",src:t.coverImage,alt:""},null,8,le),Object(a["g"])("div",re,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(t.tags,e=>(Object(a["u"])(),Object(a["f"])("div",{key:e},Object(a["B"])(e),1))),128))]),Object(a["j"])(o,{class:"overlay"})]),_:2},1032,["to"]),Object(a["g"])("p",null,Object(a["B"])(t.title),1)])):Object(a["e"])("",!0)],64))),128))])])],64)}var oe={props:{tagList:{type:Array,required:!0},blogEntries:{type:Array,required:!0}},data(){return{selectedTag:""}},mounted:function(){this.tagList.length>0&&(this.selectedTag=this.tagList[0])},methods:{ClickTag:function(e){console.log(e),this.selectedTag=e}},watch:{tagList:function(){this.selectedTag=this.tagList[0]}}};const se=P()(oe,[["render",ie]]);var be=se;const ge={id:"ww"},ue={class:"formcontainer small"},de=Object(a["h"])('<div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 centered"><h1>Contact Info</h1><p>quintenhenry@hotmail.be</p><p>+3491297415</p><a href="https://www.linkedin.com/in/quinten-henry-aba467136/" target="_blank">LinkedIn</a><p></p><a href="https://github.com/QuintenHenry" target="_blank"><img class="ico">GitHub</a><p></p><p>Ghent, Belgium</p></div></div></div>',1),je={class:"container"},Oe=Object(a["g"])("h1",null,"Send a message",-1),me={class:"form-group"},he={class:"form-row"},pe={class:"col"},fe={class:"col"},ye=Object(a["g"])("br",null,null,-1),ve={class:"form-group"},ke=Object(a["g"])("button",{type:"submit",class:"SendButton"},"Send",-1),we={key:0,id:"SuccessButton"};function Ee(e,t,n,c,l,r){return Object(a["u"])(),Object(a["f"])("div",ge,[Object(a["g"])("div",ue,[de,Object(a["g"])("div",je,[Oe,Object(a["g"])("form",{onSubmit:t[3]||(t[3]=(...e)=>r.SendForm&&r.SendForm(...e))},[Object(a["g"])("div",me,[Object(a["g"])("div",he,[Object(a["g"])("div",pe,[Object(a["G"])(Object(a["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.fullName=e),type:"text",name:"name",class:"form-control",placeholder:"Full Name",required:""},null,512),[[a["D"],l.fullName]])]),Object(a["g"])("div",fe,[ye,Object(a["G"])(Object(a["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.email=e),type:"email",name:"email",class:"form-control",placeholder:"Email Address",required:""},null,512),[[a["D"],l.email]])])])]),Object(a["g"])("div",ve,[Object(a["G"])(Object(a["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.message=e),placeholder:"Your Message",class:"form-control",name:"message",rows:"10",required:""},null,512),[[a["D"],l.message]])]),ke,!0===l.success?(Object(a["u"])(),Object(a["f"])("p",we,"Your message has been received!")):Object(a["e"])("",!0)],32)])])])}const xe=n("bc3a").default;var Be={data(){return{fullName:"",email:"",message:"",success:!1}},methods:{SendForm:function(e){e.preventDefault(),console.log("Send called"),xe.defaults.headers.post["Content-Type"]="application/json",xe.post("https://formsubmit.co/ajax/quintenhenry@hotmail.be",{name:this.fullName,message:this.message,email:this.email}).then(()=>{this.message="",this.fullName="",this.email="",this.success=!0}).catch(e=>console.log(e))}}};const Ce=P()(Be,[["render",Ee]]);var Te=Ce;const _e={class:"container pt postcontainer"},Ie={class:"row mt"},He={class:"col-lg-6 col-lg-offset-3 centered"},Ne=Object(a["g"])("hr",null,null,-1),qe=["href"],Ae={key:1,style:{display:"inline"}},Le={key:2},Se=["href"],Pe={key:1,style:{display:"inline"}},Fe={key:2},ze={key:2},$e={key:3},Ge={key:0},Me={key:1},Qe={class:"row mt centered"},De={class:"col-lg-8 col-lg-offset-2"},Ve=["src"],Ue=["src"],Re={id:"ww"},Ye={class:"container"},Je={class:"row"},Ke={class:"col-lg-8 col-lg-offset-2 centered"},We=Object(a["g"])("h1",null,"Quinten Henry - Freelance Game Programmer",-1),Xe={key:0},Ze={key:1},et=Object(a["g"])("button",null,"Get in touch!",-1);function tt(e,t,n,c,l,r){const i=Object(a["z"])("router-link");return Object(a["u"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",_e,[Object(a["g"])("div",Ie,[Object(a["g"])("div",He,[Object(a["g"])("h3",null,Object(a["B"])(l.blogEntry.title),1),Ne,"nl"==e.$route.params.lang?(Object(a["u"])(!0),Object(a["f"])(a["a"],{key:0},Object(a["y"])(l.blogEntry.paragraphsnl,e=>(Object(a["u"])(),Object(a["f"])(a["a"],{key:e},[""!==e.href?(Object(a["u"])(),Object(a["f"])("a",{key:0,href:e.href,target:"_blank"},Object(a["B"])(e.text),9,qe)):e.isInline?(Object(a["u"])(),Object(a["f"])("p",Ae,Object(a["B"])(e.text),1)):(Object(a["u"])(),Object(a["f"])("p",Le,Object(a["B"])(e.text),1))],64))),128)):(Object(a["u"])(!0),Object(a["f"])(a["a"],{key:1},Object(a["y"])(l.blogEntry.paragraphs,e=>(Object(a["u"])(),Object(a["f"])(a["a"],{key:e},[""!==e.href?(Object(a["u"])(),Object(a["f"])("a",{key:0,href:e.href,target:"_blank"},Object(a["B"])(e.text),9,Se)):e.isInline?(Object(a["u"])(),Object(a["f"])("p",Pe,Object(a["B"])(e.text),1)):(Object(a["u"])(),Object(a["f"])("p",Fe,Object(a["B"])(e.text),1))],64))),128)),"nl"==e.$route.params.lang?(Object(a["u"])(),Object(a["f"])("h1",ze,"Vaardigheden en technologieën")):(Object(a["u"])(),Object(a["f"])("h1",$e,"Skills and technologies used:")),Object(a["g"])("ul",null,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(l.blogEntry.skills,e=>(Object(a["u"])(),Object(a["f"])("li",{key:e},Object(a["B"])(e),1))),128))]),!0===l.blogEntry.hasContributions?(Object(a["u"])(),Object(a["f"])(a["a"],{key:4},["nl"==e.$route.params.lang?(Object(a["u"])(),Object(a["f"])("h1",Ge," Mijn bijdragen: ")):(Object(a["u"])(),Object(a["f"])("h1",Me," My contributions: "))],64)):Object(a["e"])("",!0),Object(a["g"])("ul",null,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(l.blogEntry.contributions,e=>(Object(a["u"])(),Object(a["f"])("li",{key:e},Object(a["B"])(e),1))),128))])])]),Object(a["g"])("div",Qe,[Object(a["g"])("div",De,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(l.blogEntry.videos,e=>(Object(a["u"])(),Object(a["f"])("iframe",{key:e,width:"750",height:"420",src:e,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,Ve))),128)),(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(l.blogEntry.images,e=>(Object(a["u"])(),Object(a["f"])("p",{key:e},[Object(a["g"])("img",{class:"img-responsive",src:e,alt:""},null,8,Ue)]))),128))])])]),Object(a["g"])("div",Re,[Object(a["g"])("div",Ye,[Object(a["g"])("div",Je,[Object(a["g"])("div",Ke,[We,"nl"==e.$route.params.lang?(Object(a["u"])(),Object(a["f"])("p",Xe," Op zoek naar een programmeur die je ideeën ontwikkeld? ")):(Object(a["u"])(),Object(a["f"])("p",Ze," Looking for an experienced programmer to develop you ideas? ")),Object(a["j"])(i,{to:"/Contact/"+e.$route.params.lang},{default:Object(a["F"])(()=>[et]),_:1},8,["to"])])])])])],64)}var nt={data(){return{blogEntry:{}}},props:{blogEntries:{type:Array,required:!0}},mounted:function(){if(this.blogEntries.length>0){const e=this.$route.query.id;this.blogEntry=this.blogEntries[e],document.title="Quinten Henry - "+this.blogEntry.title}window.scrollTo(0,0)},watch:{blogEntries:function(){const e=this.$route.query.id;this.blogEntry=this.blogEntries[e],document.title="Quinten Henry - "+this.blogEntry.title}}};const at=P()(nt,[["render",tt]]);var ct=at;const lt=[{path:"/:lang",name:"Home Lang",component:be,meta:{name:"Quinten Henry - Portfolio"}},{path:"/",name:"Home",redirect:"/en",meta:{name:"Quinten Henry - Portfolio"}},{path:"/Contact/:lang",name:"Contact",component:Te,meta:{name:"Quinten Henry - Contact"}},{path:"/Post/:lang",name:"Post",component:ct,meta:{name:"Quinten Henry - Portfolio"}}],rt=Object($["a"])({history:Object($["b"])(),routes:lt});rt.beforeEach((e,t,n)=>{document.title=e.meta.name,n()});var it=rt;n("bc3a").default;let ot=Object(a["c"])(z);ot.use(it).mount("#app")},b7ed:function(e,t,n){e.exports=n.p+"img/LinkedInIcon.cc288114.png"},f16c:function(e,t,n){"use strict";n("2575")}});
//# sourceMappingURL=app.c3724963.js.map