(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4996:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2711)}])},891:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var r=n(1527),o=n(1054),l=n.n(o),t=JSON.parse('{"x":[{"slug":"/blog/hello-world","date":"December 23, 2020","title":"Hello World"},{"slug":"/blog/another-one","date":"June 16, 2020","title":"Another one"}]}');function i(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{children:t.x.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(l(),{href:e.slug,children:(0,r.jsx)("span",{className:"block",children:e.title})}),(0,r.jsx)("span",{className:"block",children:e.date})]},e.slug))})})}},7819:function(e,s,n){"use strict";n.d(s,{Z:function(){return u}});var r=n(1527),o=n(716),l=n(1670),t=n.n(l),i=n(1054),a=n.n(i),c=n(313),h=n(795),d=n.n(h);function x(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{id:"toggle-theme",type:"button",className:"flex h-9 w-9 shrink-0 touch-manipulation items-center justify-center rounded-md bg-gray-200 ring-gray-300 transition-all hover:ring-2",title:"Toggle theme",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"h-5 w-5 text-gray-800",children:(0,r.jsx)("path",{className:"inline",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})})}let p=[{name:"Home",href:"/"},{name:"Articles",href:"/blog"},{name:"About",href:"/about"}];function k(){let e=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"navbar py-6 pb-8 sm:py-12 sm:pb-16 flex items-center justify-between",children:[(0,r.jsx)("div",{className:"ml-[-0.60rem]",children:p.map(s=>(0,r.jsx)(a(),{href:s.href,className:function(){for(var e=arguments.length,s=Array(e),n=0;n<e;n++)s[n]=arguments[n];return s.filter(Boolean).join(" ")}("inline-block px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors no-underline","/"===s.href?e.pathname===s.href?"text-gray-900":"":e.asPath.startsWith(s.href)?"text-gray-900":""),"aria-current":e.pathname===s.href?"page":void 0,children:s.name},s.name))}),(0,r.jsx)(x,{})]})}function j(e){let{pageOpts:s,children:n}=e;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,r.jsx)(t(),{children:(0,r.jsx)("title",{children:s.title})}),(0,r.jsxs)("div",{className:"flex flex-col flex-grow prose prose-lg lg:prose-xl prose-stone container px-4 mx-auto mb-6 w-full",children:[(0,r.jsx)(k,{}),(0,r.jsx)("main",{className:"flex-grow",children:(0,r.jsx)("article",{children:(0,r.jsx)(c.Zo,{components:{h1:e=>(0,r.jsx)("h1",{...e}),pre:e=>{let{filename:s,...n}=e;return(0,r.jsxs)("div",{className:d().codeblock,children:[s?(0,r.jsx)("div",{className:d().filename,children:s}):null,(0,r.jsx)("pre",{...n})]})}},children:n})})}),(0,r.jsx)("footer",{className:"mt-auto text-center",children:(0,r.jsx)("p",{children:"2023 \xa9 Aenean Blog"})})]})]})}function u(e){let{route:s}=(0,o.useRouter)(),n=globalThis.__nextra_pageContext__[s];if(!n)throw Error("No content found for ".concat(s,"."));let{pageOpts:l,Content:t}=n;return(0,r.jsx)(j,{pageOpts:l,children:(0,r.jsx)(t,{...e})})}n(891)},2711:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return i.Z}});var r,o=n(1527),l=n(1179),t=n(313);n(9033);var i=n(7819);let a={filePath:"pages/about.md",route:"/about",frontMatter:{title:"Hello",trademark:"Trademark"},pageMap:[{kind:"MdxPage",name:"about",route:"/about",frontMatter:{title:"Hello",trademark:"Trademark"}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"MdxPage",name:"another-one",route:"/blog/another-one",frontMatter:{title:"Another One",slug:"/blog/another-one"}},{kind:"MdxPage",name:"hello-world",route:"/blog/hello-world",frontMatter:{title:"Hello World",slug:"/blog/hello-World"}},{kind:"Meta",data:{"another-one":"Another One","hello-world":"Hello World"}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{title:"Articles"}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"v19",route:"/docs/v19",children:[{kind:"MdxPage",name:"globals",route:"/docs/v19/globals"},{kind:"Meta",data:{globals:"Globals"}}]}]},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Hello",trademark:"Trademark"}},{kind:"Meta",data:{blog:"Blog",docs:"Docs",about:"Hello",index:"Hello"}}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"About",position:{start:{line:2,column:3,offset:3},end:{line:2,column:8,offset:8}}}],position:{start:{line:2,column:1,offset:1},end:{line:2,column:8,offset:8}},value:"About"}],timestamp:168649547e4,flexsearch:{codeblocks:!0}};function c(e){let s=Object.assign({h1:"h1",p:"p",div:"div",pre:"pre",code:"code",span:"span"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{children:"About"}),"\n",(0,o.jsx)(s.p,{children:"SASS, CSS modules, JSX inside Markdown"}),"\n",(0,o.jsx)(s.p,{children:"I am going to the movies today."}),"\n","\n",(0,o.jsx)(s.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(s.pre,{filename:"index.js",children:(0,o.jsxs)(s.code,{"data-language":"javascript","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line highlighted",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"http"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"require"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"hostname"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'127.0.0.1'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line highlighted",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"port"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3000"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line highlighted",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"server"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"http"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".createServer"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((req"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" res) "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"res"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".statusCode "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"res"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".setHeader"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Content-Type'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'text/plain'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"res"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".end"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Hello World'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"server"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".listen"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(port"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" hostname"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`Server running at http://"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"hostname"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"port"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/`"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}globalThis.__nextra_internal__={pageMap:a.pageMap,route:a.route},a.title="Hello";let d=e=>(0,o.jsx)(l.mK.Provider,{value:e,children:(0,o.jsx)(h,{})});(r=globalThis).__nextra_pageContext__||(r.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/about"]={Content:d,pageOpts:a,themeConfig:null}},795:function(){}},function(e){e.O(0,[210,774,888,179],function(){return e(e.s=4996)}),_N_E=e.O()}]);