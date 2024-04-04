"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6578],{1272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(4848),s=a(8453);const r={title:"Data Transfer",tags:["testing","e2e","data-transfer","infrastructure"]},i=void 0,o={id:"guides/e2e/data-transfer",title:"Data Transfer",description:"Overview",source:"@site/docs/guides/e2e/02-data-transfer.md",sourceDirName:"guides/e2e",slug:"/guides/e2e/data-transfer",permalink:"/guides/e2e/data-transfer",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/guides/e2e/02-data-transfer.md",tags:[{label:"testing",permalink:"/tags/testing"},{label:"e2e",permalink:"/tags/e-2-e"},{label:"data-transfer",permalink:"/tags/data-transfer"},{label:"infrastructure",permalink:"/tags/infrastructure"}],version:"current",sidebarPosition:2,frontMatter:{title:"Data Transfer",tags:["testing","e2e","data-transfer","infrastructure"]},sidebar:"guides",previous:{title:"App Template",permalink:"/guides/e2e/app-template"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Why use Data Transfer?",id:"why-use-data-transfer",level:2},{value:"Using Data Transfer",id:"using-data-transfer",level:2},{value:"Creating a data packet",id:"creating-a-data-packet",level:3},{value:"Exporting a data packet",id:"exporting-a-data-packet",level:3},{value:"Importing in test scenarios",id:"importing-in-test-scenarios",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["This document looks particularly at the ",(0,n.jsx)(t.code,{children:"@strapi/data-transfer"})," package framed around how we use it with our test instances in the e2e test suite. It is not a comprehensive explanation of how to use ",(0,n.jsx)(t.code,{children:"@strapi/data-transfer"}),". For that information you should ",(0,n.jsx)(t.a,{href:"https://docs.strapi.io/developer-docs/latest/developer-resources/data-management.html",children:"view the documentation"})," surrounding it."]}),"\n",(0,n.jsx)(t.h2,{id:"why-use-data-transfer",children:"Why use Data Transfer?"}),"\n",(0,n.jsx)(t.p,{children:"Each test should be isolated and contained e.g. if you edit an entity in one test, the next test shouldn't know or care about it otherwise your tests need to run in a specific order and become flakey quite quickly."}),"\n",(0,n.jsxs)(t.p,{children:["So to solve this, you could use custom API endpoints of the application and whilst this isn't a poor solution it would ",(0,n.jsx)(t.em,{children:"most likely"})," require some code writing to set up the data for the schema entries. However, in ",(0,n.jsx)(t.code,{children:"4.6.0"})," Strapi released the ",(0,n.jsx)(t.code,{children:"DTS"})," feature (DTS \u2013 Data Transfer System). This means any member of Strapi can export the data of their instance producing a ",(0,n.jsx)(t.code,{children:".tar"}),' that we can then import programatically restoring the database to this point in time and ensuring a "pure" test environment.']}),"\n",(0,n.jsx)(t.h2,{id:"using-data-transfer",children:"Using Data Transfer"}),"\n",(0,n.jsxs)(t.p,{children:["The full documentation of the feature can be seen ",(0,n.jsx)(t.a,{href:"https://docs.strapi.io/developer-docs/latest/developer-resources/data-management.html",children:"here"}),". Below are a couple of scenarios you might find yourself."]}),"\n",(0,n.jsx)(t.h3,{id:"creating-a-data-packet",children:"Creating a data packet"}),"\n",(0,n.jsx)(t.p,{children:"Because we're using a Strapi template for the test instance, it makes the most sense to add/edit the dataset in said templated instance. Begin by creating the instance:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"yarn test:e2e\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then, you should be able to navigate to the app \u2013 ",(0,n.jsx)(t.code,{children:"cd ./test-apps/test-app-XX"}),", the current content schemas should already be defined in there so you will be able to instantly import the current data packet to bring to life the test instance (instead of it being fresh):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"yarn strapi import --file ../../../e2e/data/<backup-file-name>.tar\n"})}),"\n",(0,n.jsx)(t.p,{children:"Once that's completed, you should be able to run your Strapi instance as usual:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"yarn develop\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you change any of the content schemas (including adding new ones) be sure to ",(0,n.jsxs)(t.a,{href:"/guides/e2e/app-template",children:["update the ",(0,n.jsx)(t.code,{children:"app-template"})]})," otherwise DTS will fail to import the data for schemas that do not exist."]}),"\n",(0,n.jsx)(t.h3,{id:"exporting-a-data-packet",children:"Exporting a data packet"}),"\n",(0,n.jsxs)(t.p,{children:["Once you've created your new data from the test instance, you'll need to export\nit. Since the Strapi CLI will use ",(0,n.jsx)(t.code,{children:"@strapi/data-transfer"})," directly it will by default not export admin users, API tokens, or any other features that have been included in its exclusion list. For this reason, do not use the export command on the strapi test instance. A DTS engine has been created specifically for our tests cases. This allows us to redefine what should be included in the export for our tests. The script can be found in ",(0,n.jsx)(t.code,{children:"/e2e/scripts/dts-export.js"})]}),"\n",(0,n.jsxs)(t.p,{children:["Be sure to include the content types you would like exported in the ",(0,n.jsx)(t.code,{children:"ALLOWED_CONTENT_TYPES"})," array found in ",(0,n.jsx)(t.code,{children:"e2e/constants.js"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The script accepts the backup destination filename as a parameter. Run it from the directory\nof your strapi test insance to create the backup."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"node <PATH_TO_SCRIPT>/dts-export.js backup-with-admin-user\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you are exporting data for an EE feature you will need to run the script with the ",(0,n.jsx)(t.code,{children:"STRAPI_LICENSE"})," env"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"STRAPI_LICENSE=<license-with-ee-feature> node <PATH_TO_SCRIPT>/dts-export.js backup-with-admin-user\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Once this has been done, add the ",(0,n.jsx)(t.code,{children:".tar"})," backup to ",(0,n.jsx)(t.code,{children:"/e2e/data"})," so the helper\nfunctions can import it correctly."]}),"\n",(0,n.jsx)(t.p,{children:"As our suite of e2e tests grows we may hold more DTS backups in order to restore\nthe Strapi application to a desired state prior to testing."}),"\n",(0,n.jsx)(t.h3,{id:"importing-in-test-scenarios",children:"Importing in test scenarios"}),"\n",(0,n.jsxs)(t.p,{children:["There's an abstraction for importing the data programmatically during tests named ",(0,n.jsx)(t.code,{children:"resetDatabaseAndImportDataFromPath"})," found in ",(0,n.jsx)(t.code,{children:"e2e/scripts/dts-import.js"}),". Typically, you'll want to run this ",(0,n.jsx)(t.strong,{children:"before"})," each test:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"{2,5-8}",children:"import { test } from '@playwright/test';\nimport { resetDatabaseAndImportDataFromPath } from './scripts/dts-import';\n\ntest.describe('Strapi Application', () => {\n  test.beforeEach(async ({ page }) => {\n    await resetDatabaseAndImportDataFromPath('./e2e/data/backup.tar');\n    await page.goto('/admin');\n  });\n\n  test('a user should be able to...', async ({ page }) => {\n    // my test\n  });\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The path is relative to the root of the strapi project where you called ",(0,n.jsx)(t.code,{children:"yarn test:e2e"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(6540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);