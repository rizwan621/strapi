"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6215],{8164:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=o(4848),s=o(8453);const a={title:"Develop",tags:["commands","admin","develop"]},i=void 0,r={id:"docs/core/admin/commands/develop",title:"Develop",description:"How it works",source:"@site/docs/docs/01-core/admin/04-commands/02-develop.md",sourceDirName:"docs/01-core/admin/04-commands",slug:"/docs/core/admin/commands/develop",permalink:"/docs/core/admin/commands/develop",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/04-commands/02-develop.md",tags:[{label:"commands",permalink:"/tags/commands"},{label:"admin",permalink:"/tags/admin"},{label:"develop",permalink:"/tags/develop"}],version:"current",sidebarPosition:2,frontMatter:{title:"Develop",tags:["commands","admin","develop"]},sidebar:"docs",previous:{title:"Build",permalink:"/docs/core/admin/commands/build"},next:{title:"Authentication",permalink:"/docs/core/admin/features/authentication"}},d={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"CLI Usage",id:"cli-usage",level:2},{value:"Options",id:"options",level:3},{value:"Node Usage",id:"node-usage",level:2},{value:"Options",id:"options-1",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsxs)(n.p,{children:["The develop command sets itself up much like the ",(0,t.jsx)(n.a,{href:"build",children:"build"})," command. Once we've injected our middlewares, we load the strapi instance and then generate the types based off the user's instance as well as potentially compiling any TS server code if we're in a TS project. The final step is to watch the project directory so we can restart the strapi instance in real-time as a user is developing their project & being the actual strapi instance."]}),"\n",(0,t.jsx)(n.h2,{id:"cli-usage",children:"CLI Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"strapi develop\n"})}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Start your Strapi application in development mode\n\nOptions:\n  --polling         Watch for file changes (default: false) \u2013 Whether to use fs.watchFile (backed by polling), or fs.watch, this is passed directly to chokidar\n  --no-build        [deprecated]: there is middleware for the server, it is no longer a separate process\n  --watch-admin     Watch the admin for changes (default: false)\n  --browser <name>  [deprecated]: use open instead\n  --open            Open the admin in your browser (default: true)\n  -h, --help        Display help for command\n"})}),"\n",(0,t.jsx)(n.h2,{id:"node-usage",children:"Node Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { develop, DevelopOptions } from '@strapi/admin/_internal';\n\nconst args: DevelopOptions = {\n  // ...\n};\n\nawait develop(args);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"options-1",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface DevelopOptions extends CLIContext {\n  /**\n   * The directory to build the command was ran from\n   */\n  cwd: string;\n  /**\n   * The logger to use.\n   */\n  logger: Logger;\n  /**\n   * Whether or not to open the browser after the build is complete.\n   */\n  open?: boolean;\n  /**\n   * Watch for file changes in network directories\n   */\n  polling?: boolean;\n  /**\n   * The tsconfig to use for the build. If undefined, this is not a TS project.\n   */\n  tsconfig?: TsConfig;\n  /**\n   * Watch the admin for changes\n   */\n  watchAdmin?: boolean;\n}\n\ninterface Logger {\n  warnings: number;\n  errors: number;\n  debug: (...args: unknown[]) => void;\n  info: (...args: unknown[]) => void;\n  warn: (...args: unknown[]) => void;\n  error: (...args: unknown[]) => void;\n  log: (...args: unknown[]) => void;\n  spinner: (text: string) => Pick<ora.Ora, 'succeed' | 'fail' | 'start' | 'text'>;\n}\n\ninterface TsConfig {\n  config: ts.ParsedCommandLine;\n  path: string;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);