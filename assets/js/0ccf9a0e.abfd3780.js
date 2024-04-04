"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9692],{1031:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=t(4848),a=t(8453);const n={title:"Source",tags:["providers","data-transfer","experimental"]},o="Local Strapi Source Provider",s={id:"docs/core/data-transfer/providers/local-strapi/source",title:"Source",description:"This provider will retrieve data from an initialized strapi instance using its Entity Service and Query Engine.",source:"@site/docs/docs/01-core/data-transfer/02-providers/04-local-strapi/01-source.md",sourceDirName:"docs/01-core/data-transfer/02-providers/04-local-strapi",slug:"/docs/core/data-transfer/providers/local-strapi/source",permalink:"/docs/core/data-transfer/providers/local-strapi/source",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/data-transfer/02-providers/04-local-strapi/01-source.md",tags:[{label:"providers",permalink:"/tags/providers"},{label:"data-transfer",permalink:"/tags/data-transfer"},{label:"experimental",permalink:"/tags/experimental"}],version:"current",sidebarPosition:1,frontMatter:{title:"Source",tags:["providers","data-transfer","experimental"]},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/core/data-transfer/providers/local-strapi/overview"},next:{title:"Destination",permalink:"/docs/core/data-transfer/providers/local-strapi/destination"}},c={},d=[{value:"Provider Options",id:"provider-options",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"local-strapi-source-provider",children:"Local Strapi Source Provider"}),"\n",(0,i.jsxs)(r.p,{children:["This provider will retrieve data from an initialized ",(0,i.jsx)(r.code,{children:"strapi"})," instance using its Entity Service and Query Engine."]}),"\n",(0,i.jsx)(r.h2,{id:"provider-options",children:"Provider Options"}),"\n",(0,i.jsxs)(r.p,{children:["The accepted options are defined in ",(0,i.jsx)(r.code,{children:"ILocalFileSourceProviderOptions"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"  getStrapi(): Strapi.Strapi | Promise<Strapi.Strapi>; // return an initialized instance of Strapi\n\n  autoDestroy?: boolean; // shut down the instance returned by getStrapi() at the end of the transfer\n"})})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>s});var i=t(6540);const a={},n=i.createContext(a);function o(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);