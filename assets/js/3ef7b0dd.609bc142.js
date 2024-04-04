"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3728],{6866:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var s=i(4848),n=i(8453),t=i(9434);const d={title:"Strapi server (WIP)",slug:"/api/strapi-server",tags:["module","public"],toc_min_heading_level:2,toc_max_heading_level:5},l="Strapi Server",a={id:"api/strapi-server",title:"Strapi server (WIP)",description:"Current state: Stable",source:"@site/docs/api/strapi-server.mdx",sourceDirName:"api",slug:"/api/strapi-server",permalink:"/api/strapi-server",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/api/strapi-server.mdx",tags:[{label:"module",permalink:"/tags/module"},{label:"public",permalink:"/tags/public"}],version:"current",frontMatter:{title:"Strapi server (WIP)",slug:"/api/strapi-server",tags:["module","public"],toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"api",previous:{title:"StrapiFS (WIP)",permalink:"/api/StrapiFS"},next:{title:"Telemetry Service",permalink:"/api/Telemetry"}},c={},o=[{value:"Module: Strapi server",id:"module-strapi-server",level:2},{value:"<code>createServer(strapi)</code>",id:"createserverstrapi",level:3},{value:"<code>StrapiServer.app</code>",id:"strapiserverapp",level:3},{value:"<code>StrapiServer.router</code>",id:"strapiserverrouter",level:3},{value:"<code>StrapiServer.httpServer</code>",id:"strapiserverhttpserver",level:3},{value:"<code>StrapiServer.api(name)</code>",id:"strapiserverapiname",level:3},{value:"<code>StrapiServer.use(...args)</code>",id:"strapiserveruseargs",level:3},{value:"<code>StrapiServer.routes(routes)</code>",id:"strapiserverroutesroutes",level:3},{value:"<code>StrapiServer.mount()</code>",id:"strapiservermount",level:3},{value:"<code>StrapiServer.initRouting()</code>",id:"strapiserverinitrouting",level:3},{value:"<code>StrapiServer.initMiddlewares()</code>",id:"strapiserverinitmiddlewares",level:3},{value:"<code>StrapiServer.listRoutes()</code>",id:"strapiserverlistroutes",level:3},{value:"<code>StrapiServer.listen(...args)</code>",id:"strapiserverlistenargs",level:3},{value:"<code>StrapiServer.destroy()</code>",id:"strapiserverdestroy",level:3},{value:"<code>StrapiAPIs</code>",id:"strapiapis",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"strapi-server",children:"Strapi Server"}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["Current state: ",(0,s.jsx)(r.strong,{children:"Stable"})]})}),"\n",(0,s.jsx)(r.p,{children:"The Strapi server module permits to generate a Strapi http server."}),"\n",(0,s.jsx)(r.h2,{id:"module-strapi-server",children:"Module: Strapi server"}),"\n",(0,s.jsx)(r.h3,{id:"createserverstrapi",children:(0,s.jsx)(r.code,{children:"createServer(strapi)"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"strapi"}),": ",(0,s.jsx)(r.a,{href:"Strapi",children:(0,s.jsx)(t.A,{children:"Strapi"})})]}),"\n",(0,s.jsxs)(r.li,{children:["Returns: ",(0,s.jsx)(t.A,{children:"StrapiServer"})]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"const server = createServer(strapi);\n\nserver.listRoutes();\n"})}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverapp",children:(0,s.jsx)(r.code,{children:"StrapiServer.app"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://devdocs.io/koa/index",children:(0,s.jsx)(t.A,{children:"KoaJS"})})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Strapi projects are using KoaJS to run the NodeJS server."}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverrouter",children:(0,s.jsx)(r.code,{children:"StrapiServer.router"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/ZijianHe/koa-router#router-",children:(0,s.jsx)(t.A,{children:"@koa/router"})})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Strapi projects are using a dependency of KoaJS called @koa/router."}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverhttpserver",children:(0,s.jsx)(r.code,{children:"StrapiServer.httpServer"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v18.x/api/http.html",children:(0,s.jsx)(t.A,{children:"http.Server"})})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"The Strapi's HTTP server."}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverapiname",children:(0,s.jsx)(r.code,{children:"StrapiServer.api(name)"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"name"}),": ",(0,s.jsx)(t.A,{children:"String"})]}),"\n",(0,s.jsxs)(r.li,{children:["Returns: ",(0,s.jsx)(r.a,{href:"#strapiapis",children:(0,s.jsx)(t.A,{children:"StrapiAPIs"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Getter for apis available in Strapi"}),"\n",(0,s.jsx)(r.h3,{id:"strapiserveruseargs",children:(0,s.jsx)(r.code,{children:"StrapiServer.use(...args)"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://devdocs.io/koa/index#appusefunction",children:(0,s.jsx)(t.A,{children:"KoaApp.use"})})}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Shortcut for Koa ",(0,s.jsx)(r.code,{children:"app.use(...args)"})," method."]}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverroutesroutes",children:(0,s.jsx)(r.code,{children:"StrapiServer.routes(routes)"})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"TODO"})}),"\n",(0,s.jsx)(r.h3,{id:"strapiservermount",children:(0,s.jsx)(r.code,{children:"StrapiServer.mount()"})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"TODO"})}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverinitrouting",children:(0,s.jsx)(r.code,{children:"StrapiServer.initRouting()"})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"TODO"})}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverinitmiddlewares",children:(0,s.jsx)(r.code,{children:"StrapiServer.initMiddlewares()"})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"TODO"})}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverlistroutes",children:(0,s.jsx)(r.code,{children:"StrapiServer.listRoutes()"})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"TODO"})}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverlistenargs",children:(0,s.jsx)(r.code,{children:"StrapiServer.listen(...args)"})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"TODO"})}),"\n",(0,s.jsx)(r.h3,{id:"strapiserverdestroy",children:(0,s.jsx)(r.code,{children:"StrapiServer.destroy()"})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"TODO"})}),"\n",(0,s.jsx)(r.h3,{id:"strapiapis",children:(0,s.jsx)(r.code,{children:"StrapiAPIs"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(t.A,{children:"Object"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"content-api"}),": ",(0,s.jsx)(r.a,{href:"API",children:(0,s.jsx)(t.A,{children:"API"})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"API used by external requesters"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"admin"}),": ",(0,s.jsx)(r.a,{href:"API",children:(0,s.jsx)(t.A,{children:"API"})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"API used by admin panel"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Strapi APIs is a map of all APIs available inside the Strapi project."})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},9434:(e,r,i)=>{i.d(r,{A:()=>n});i(6540);var s=i(4848);function n(e){let{children:r}=e;return(0,s.jsxs)("span",{style:{color:"#017501"},children:["<",r,">"]})}},8453:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>l});var s=i(6540);const n={},t=s.createContext(n);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);