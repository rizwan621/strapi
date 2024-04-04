"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5484],{9167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=n(4848),o=n(8453),c=n(3514),i=n(1754);const s={title:"Introduction",tags:["content-manager"]},a="Content Manager",d={id:"docs/core/content-manager/intro",title:"Introduction",description:"This section is an overview of all the features related to the Content Manager:",source:"@site/docs/docs/01-core/content-manager/00-intro.md",sourceDirName:"docs/01-core/content-manager",slug:"/docs/core/content-manager/intro",permalink:"/docs/core/content-manager/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/content-manager/00-intro.md",tags:[{label:"content-manager",permalink:"/tags/content-manager"}],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",tags:["content-manager"]},sidebar:"docs",previous:{title:"NPS",permalink:"/docs/core/admin/features/nps"},next:{title:"Relations",permalink:"/docs/core/content-manager/relations"}},l={},m=[];function u(e){const t={h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"content-manager",children:"Content Manager"}),"\n",(0,r.jsx)(t.p,{children:"This section is an overview of all the features related to the Content Manager:"}),"\n","\n","\n",(0,r.jsx)(c.A,{items:(0,i.$S)().items})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var r=n(8215),o=n(1754),c=n(8774),i=n(6654),s=n(1312),a=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function m(e){let{href:t,children:n}=e;return(0,l.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:o,description:c}=e;return(0,l.jsxs)(m,{href:t,children:[(0,l.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),c&&(0,l.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:c,children:c})]})}function h(e){let{item:t}=e;const n=(0,o.Nr)(t);return n?(0,l.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,l.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.$S)();return(0,l.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(g,{...e});const c=(0,o.d1)(t);return(0,l.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(6540);const o={},c=r.createContext(o);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);