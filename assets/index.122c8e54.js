var pe=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))me.call(t,o)&&H(e,o,t[o]);return e};import{d as N,u as ge,r as f,o as G,a as K,b as v,c as Y,w as c,e as n,f as r,N as _e,g as he,h as fe,z as ve,i as ke,j as ye,k as q,l as Ee,m as we,n as Fe,p as Ae,q as xe,s as y,t as De,v as Ce,x as Ie,y as E,A as b,B as Ne,C as be,D as C,E as _,F as Z,G as Pe,H as Le,I as P,L as Se,J as X,K as $e,M as Be,O as Oe,P as Te,Q as Ve,R as Re,S as Me,T as je,U as Q,V as ze,W as Je,X as Ue,Y as He,Z as We,_ as Ge,$ as Ke,a0 as Ye,a1 as qe,a2 as Ze,a3 as Xe}from"./vendor.d16f60d7.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Qe();const et=N({setup(e){return window.$message=ge(),(t,o)=>null}}),tt=["https://picpak.tklirui.workers.dev"],ot=N({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return G(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(tt))}),(o,a)=>{const s=K("router-view");return v(),Y(r(ye),{locale:r(ve),"date-locale":r(ke),"theme-overrides":t.value},{default:c(()=>[n(r(fe),null,{default:c(()=>[n(r(_e),null,{default:c(()=>[n(r(he),null,{default:c(()=>[n(et),n(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),st="modulepreload",ee={},at="/pikpak/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${at}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":st,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((x,g)=>{u.addEventListener("load",x),u.addEventListener("error",g)})})).then(()=>t())};var rt="/pikpak/assets/logo1.08eb9157.png";const m=q.create({});m.interceptors.request.use(e=>{const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`);const o=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(o.length>0){const a=Math.floor(Math.random()*o.length);e.url=o[a]+"/"+e.url}return e});let F=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const s=window.localStorage.getItem("pikpakLoginData"),i=s?JSON.parse(s):{};return i.username&&i.password&&!F?(console.log("wait",o.url),F=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},i)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),F=!1,m(o))).catch(()=>(I.push("/login"),!1))):i.username&&i.password&&F?new Promise((u,x)=>{const g=setInterval(()=>{F||(clearInterval(g),u(m(o)))},100)}):(I.push("/login"),!1);default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const te=q.create({});te.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const Ct=te,oe=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const nt=_("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[_("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),_("div",{class:"logo-box__text"},"PikPak")],-1),it={key:0,class:"content-bottom"},ut=E("\u4F1A\u5458\u7801"),lt={style:{"margin-bottom":"0"}},ct=_("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\uFFE5119\u8D2D\u4E70\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),pt=E(" \u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),dt={class:"bottom-user-info"},mt={key:0,src:rt,class:"user-info-avatar"},gt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},_t={class:"user-info-name"},ht={key:0},ft={class:"action"},vt=E(" \u9000\u51FA\u767B\u5F55 "),kt=_("p",null,[_("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),yt=E("\u6DFB\u52A0"),Et=N({setup(e){const t=f(!1),o=l=>()=>Q(P,null,{default:()=>Q(l)}),a=Ee(),s=we(),i=f([{label:"\u6587\u4EF6",key:"list",icon:o(Ge)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(He)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(We)}]),u=f(),x=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},g=f(),L=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{g.value=l.data}).catch(l=>{console.log(l)})},k=f(),se=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;k.value=(p=l.data)==null?void 0:p.data})},ae=(l,p)=>{console.log(p),a.push("/"+p.key)};G(()=>{x(),L(),se()});const D=f(),w=f(!1),re=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:D.value}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),L()}).catch(l=>{console.log(l)}).finally(()=>{w.value=!1})},S=f(!1),ne=l=>{S.value=l<800,t.value||(t.value=l<800)};Fe(s,()=>{S.value&&(t.value=!0)});const ie=Ae(),ue=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const le=K("router-view"),ce=xe("resize");return v(),y(je,null,[De(n(r(X),{"has-sider":"",onResize:ne},{default:c(()=>[n(r(Ce),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=h=>t.value=!0),onExpand:p[2]||(p[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,$,B,O,T,V,R,M,j,z,J;return[nt,n(r(Ie),{options:i.value,value:String(r(s).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?C("",!0):(v(),y("div",it,[E(b(r(oe)((h=g.value)==null?void 0:h.quota.usage))+" / "+b(r(oe)(($=g.value)==null?void 0:$.quota.limit))+" ",1),n(r(Ne),{type:"primary",onClick:p[0]||(p[0]=At=>w.value=!0)},{default:c(()=>[ut]),_:1}),((B=g.value)==null?void 0:B.quota)?(v(),Y(r(be),{key:0,type:"line",percentage:Number((((O=g.value)==null?void 0:O.quota.usage)/((T=g.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):C("",!0),_("p",lt,[n(r(Z),{placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[pt]),_:1})])])),t.value?C("",!0):(v(),y("div",{key:1,class:Pe(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[_("div",dt,[((M=k.value)==null?void 0:M.status)==="ok"?(v(),y("img",mt)):(v(),y("img",gt)),_("div",_t,[E(b((j=u.value)==null?void 0:j.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",ht,[n(r(Le),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):C("",!0)]),_("div",ft,[n(r(Z),null,{trigger:c(()=>[n(r(P),{onClick:ue},{default:c(()=>[n(r(Se))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(r(X),null,{default:c(()=>[n(r($e),{style:{height:"100vh"}},{default:c(()=>[n(r(Be),{style:{"max-height":"100vh"}},{default:c(()=>[n(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ce]]),n(r(Me),{show:w.value,"onUpdate:show":p[5]||(p[5]=h=>w.value=h)},{default:c(()=>[n(r(Oe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[n(r(P),{onClick:p[3]||(p[3]=h=>w.value=!1)},{default:c(()=>[n(r(Te))]),_:1})]),action:c(()=>[n(r(Ve),{block:!0,type:"primary",disabled:!D.value,onClick:re},{default:c(()=>[yt]),_:1},8,["disabled"])]),default:c(()=>[n(r(Re),{placeholder:"\u4F1A\u5458\u7801",value:D.value,"onUpdate:value":p[4]||(p[4]=h=>D.value=h)},null,8,["value"]),kt]),_:1})]),_:1},8,["show"])],64)}}}),wt=[{path:"/",name:"home",component:Et,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.674d5225.js"),["assets/list.674d5225.js","assets/list.764e0448.css","assets/vendor.d16f60d7.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.674d5225.js"),["assets/list.674d5225.js","assets/list.764e0448.css","assets/vendor.d16f60d7.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.674d5225.js"),["assets/list.674d5225.js","assets/list.764e0448.css","assets/vendor.d16f60d7.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.965052d1.js"),["assets/trash.965052d1.js","assets/trash.99a3677d.css","assets/vendor.d16f60d7.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.ef02a9ef.js"),["assets/setting.ef02a9ef.js","assets/setting.f947579c.css","assets/vendor.d16f60d7.js"])},{path:"share",name:"share",component:()=>d(()=>import("./share.7db6b968.js"),["assets/share.7db6b968.js","assets/share.4f9c11c6.css","assets/vendor.d16f60d7.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.4bf6c00b.js"),["assets/test.4bf6c00b.js","assets/vendor.d16f60d7.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.71e5b895.js"),["assets/shareInfo.71e5b895.js","assets/shareInfo.678356c6.css","assets/vendor.d16f60d7.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.67227d16.js"),["assets/login.67227d16.js","assets/login.a8b45006.css","assets/vendor.d16f60d7.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.db838c3c.js"),["assets/sms.db838c3c.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.d16f60d7.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.4312c822.js"),["assets/register.4312c822.js","assets/register.5588ce76.css","assets/vendor.d16f60d7.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.027aea21.js"),["assets/testtest.027aea21.js","assets/vendor.d16f60d7.js"])}],Ft=Ke({history:Ye(),routes:wt});var I=Ft;const A=qe(ot);A.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,i=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=m;A.use(I);A.use(Xe,{router:I,siteIdList:[1280510106]});A.mount("#app");export{oe as b,m as i,Ct as n,tt as p};
