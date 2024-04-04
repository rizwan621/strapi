"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4180],{9137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var s=n(4848),i=n(8453);const a={title:"Init",tags:["pack-up","CLI"]},c=void 0,l={id:"docs/utils/pack-up/commands/init",title:"Init",description:"Usage",source:"@site/docs/docs/05-utils/pack-up/01-commands/01-init.mdx",sourceDirName:"docs/05-utils/pack-up/01-commands",slug:"/docs/utils/pack-up/commands/init",permalink:"/docs/utils/pack-up/commands/init",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/05-utils/pack-up/01-commands/01-init.mdx",tags:[{label:"pack-up",permalink:"/tags/pack-up"},{label:"CLI",permalink:"/tags/cli"}],version:"current",sidebarPosition:1,frontMatter:{title:"Init",tags:["pack-up","CLI"]},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/utils/pack-up/commands/overview"},next:{title:"Build",permalink:"/docs/utils/pack-up/commands/build"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"API",id:"api",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Typescript",id:"typescript",level:2}];function r(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ npx @strapi/pack-up init my-package\n"})}),"\n",(0,s.jsx)(t.p,{children:"Creates a new package at the given path, by default uses the inbuilt template sensible options for your package to choose from."}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"--template [path]"})," \u2013 path to a custom template of type ",(0,s.jsx)(t.code,{children:"TemplateOrTemplateResolver"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.h3,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { init } from '@strapi/pack-up';\n\ninit({\n  path: 'my-package',\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"typescript",children:"Typescript"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"interface InitOptions {\n  cwd?: string;\n  debug?: boolean;\n  path: string;\n  silent?: boolean;\n  template?: TemplateOrTemplateResolver | string;\n}\n\ntype Init = (options: InitOptions) => Promise<void>;\n\ntype TemplateOrTemplateResolver = Template | TemplateResolver;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can see ",(0,s.jsx)(t.code,{children:"Template"})," and ",(0,s.jsx)(t.code,{children:"TemplateResolver"})," in on ",(0,s.jsx)(t.a,{href:"/docs/utils/pack-up/templates#template",children:"Templates"})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var s=n(6540);const i={},a=s.createContext(i);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);