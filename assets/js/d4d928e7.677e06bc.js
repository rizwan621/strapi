"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7076],{811:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const n={title:"Destination Providers",tags:["providers","data-transfer","experimental"]},o="Destination Providers",a={id:"docs/core/data-transfer/providers/destination-providers",title:"Destination Providers",description:"Destination provider structure",source:"@site/docs/docs/01-core/data-transfer/02-providers/02-destination-providers.md",sourceDirName:"docs/01-core/data-transfer/02-providers",slug:"/docs/core/data-transfer/providers/destination-providers",permalink:"/docs/core/data-transfer/providers/destination-providers",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/data-transfer/02-providers/02-destination-providers.md",tags:[{label:"providers",permalink:"/tags/providers"},{label:"data-transfer",permalink:"/tags/data-transfer"},{label:"experimental",permalink:"/tags/experimental"}],version:"current",sidebarPosition:2,frontMatter:{title:"Destination Providers",tags:["providers","data-transfer","experimental"]},sidebar:"docs",previous:{title:"Source Providers",permalink:"/docs/core/data-transfer/providers/source-providers"},next:{title:"Overview",permalink:"/docs/core/data-transfer/providers/strapi-file/overview"}},d={},c=[{value:"Destination provider structure",id:"destination-provider-structure",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"destination-providers",children:"Destination Providers"}),"\n",(0,s.jsx)(r.h2,{id:"destination-provider-structure",children:"Destination provider structure"}),"\n",(0,s.jsxs)(r.p,{children:["A destination provider must implement the interface IDestinationProvider found in ",(0,s.jsx)(r.code,{children:"packages/core/data-transfer/types/providers.d.ts"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["In short, it provides a set of ",(0,s.jsx)(r.code,{children:"create{_stage_}WriteStream()"})," methods for each stage that provide a Writable stream, which will be passed each entity, link (relation), asset (file), configuration entity, or content type schema (depending on the stage) piped from the Readable source provider stream."]})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var s=t(6540);const i={},n=s.createContext(i);function o(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);