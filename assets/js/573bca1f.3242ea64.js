"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2869],{8815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(4848),i=n(8453);const s={title:"Templates",tags:["pack-up","generating","template"]},r=void 0,o={id:"docs/utils/pack-up/templates",title:"Templates",description:"Templates are only used for the init api. You can either pass a path to the file containing your template (it's expected to be",source:"@site/docs/docs/05-utils/pack-up/03-templates.mdx",sourceDirName:"docs/05-utils/pack-up",slug:"/docs/utils/pack-up/templates",permalink:"/docs/utils/pack-up/templates",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/05-utils/pack-up/03-templates.mdx",tags:[{label:"pack-up",permalink:"/tags/pack-up"},{label:"generating",permalink:"/tags/generating"},{label:"template",permalink:"/tags/template"}],version:"current",sidebarPosition:3,frontMatter:{title:"Templates",tags:["pack-up","generating","template"]},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/utils/pack-up/config"},next:{title:"Future Flags",permalink:"/docs/future-flags"}},l={},p=[{value:"Interfaces",id:"interfaces",level:2},{value:"Template",id:"template",level:3},{value:"Template Features &amp; Options",id:"template-features--options",level:3},{value:"Template file",id:"template-file",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Templates are only used for the ",(0,a.jsx)(t.code,{children:"init"})," api. You can either pass a path to the file containing your template (it's expected to be\na default export) if you're using the CLI. Or alternatively, if you're using the node functions then you can directly pass your template."]}),"\n",(0,a.jsx)(t.p,{children:"A template can either be an object (defined below) or a function returning said object. The function recieves an initiatialisation context\nto be utilised at the discretion of the template author."}),"\n",(0,a.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsx)(t.h3,{id:"template",children:"Template"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"interface Template {\n  /**\n   * If you're not using a template in a CLI environment,\n   * it's not recommended to use prompts. Instead, you should\n   * just return all the files your template needs in from the\n   * `getFiles` function.\n   */\n  prompts?: Array<TemplateFeature | TemplateOption>;\n  /**\n   * A dictionary of the files that will be created in the\n   * new package. The key is the file name and the value is\n   * the file contents, we prettify the contents before writing\n   * using a default config if there's not one in the package.\n   */\n  getFiles: (answers?: Array<{ name: string; answer: string }>) => Promise<Array<TemplateFile>>;\n}\n\ninterface TemplateContext {\n  cwd: string;\n  logger: Logger;\n  packagePath: string;\n}\n\ntype TemplateResolver = (ctx: TemplateContext) => Promise<Template>;\n"})}),"\n",(0,a.jsx)(t.h3,{id:"template-features--options",children:"Template Features & Options"}),"\n",(0,a.jsxs)(t.p,{children:["Features & options are restricted just ",(0,a.jsx)(t.a,{href:"https://github.com/terkelg/prompts",children:"prompts"}),". All features are boolean\nanswers using the ",(0,a.jsx)(t.code,{children:"confirm"})," type. Options have a lot more flexibility and can be used to capture information."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"interface TemplateFeature<T extends string = string>\n  extends Pick<prompts.PromptObject<T>, 'initial'> {\n  /**\n   * Name of the feature you want to add to your package.\n   * This must be identical to the name of the feature on npm.\n   */\n  name: string;\n  /**\n   * @default true\n   */\n  optional?: boolean;\n}\n\ninterface TemplateOption<T extends string = string>\n  extends Omit<prompts.PromptObject<T>, 'onState' | 'onRender' | 'stdout' | 'stdin' | 'name'> {\n  name: string;\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"template-file",children:"Template file"}),"\n",(0,a.jsxs)(t.p,{children:["Files are just objects with a name and contents. It's advised to use a library like ",(0,a.jsx)(t.code,{children:"outdent"})," to handle indentation in\nyour file contents. Although the API will try to prettyify your files before writing them."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"interface TemplateFile {\n  name: string;\n  contents: string;\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(6540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);