(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4996:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2711)}])},5819:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(1527),o=n(1054),l=n.n(o),a=n(145);function s(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{className:"flat",children:a.x.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(l(),{href:e.slug,children:(0,r.jsx)("span",{className:"block",children:e.title})}),(0,r.jsx)("span",{className:"block",children:e.date})]},e.slug))})})}},7819:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(1527),o=n(716),l=n(1670),a=n.n(l),s=n(1054),i=n.n(s),c=n(313);function d(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{id:"toggle-theme",type:"button",className:"flex h-9 w-9 shrink-0 touch-manipulation items-center justify-center rounded-md bg-gray-100 hover:bg-gray-100 ring-gray-200 transition-all hover:ring-2",title:"Toggle theme",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"h-5 w-5 text-gray-800",children:(0,r.jsx)("path",{className:"inline",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})})}let u=[{name:"Home",href:"/"},{name:"Blog",href:"/blog"},{name:"Projects",href:"/projects"},{name:"About",href:"/about"}];function h(){let e=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"navbar py-6 pb-12 sm:py-12 sm:pb-16 flex justify-between items-center",children:[(0,r.jsx)("div",{className:"ml-[-0.75rem] mr-4",children:u.map(t=>(0,r.jsx)(i(),{href:t.href,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("inline-block px-3 py-2 rounded-md lg:hover:bg-gray-100 transition-colors no-underline","/"===t.href?e.pathname===t.href?"text-gray-950 font-semibold hover:text-gray-950":"text-gray-500 hover:text-gray-600":e.asPath.startsWith(t.href)?"text-gray-950 font-semibold hover:text-gray-950":"text-gray-500 hover:text-gray-600"),"aria-current":e.pathname===t.href?"page":void 0,children:t.name},t.name))}),(0,r.jsx)(d,{})]})}function g(e){let{pageOpts:t,children:n}=e;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:t.title}),(0,r.jsx)("link",{rel:"icon",href:"./favicon.png"})]}),(0,r.jsxs)("div",{className:"flex flex-col flex-grow prose prose-lg prose-neutral container px-5 mx-auto mb-6 w-full",children:[(0,r.jsx)(h,{}),(0,r.jsx)("main",{className:"flex-grow",children:(0,r.jsx)("article",{children:(0,r.jsx)(c.Zo,{components:{h1:e=>(0,r.jsx)("h1",{...e}),pre:e=>{let{filename:t,...n}=e;return(0,r.jsxs)("div",{className:"{styles.codeblock}",children:[t?(0,r.jsx)("div",{className:"prose-none",children:t}):null,(0,r.jsx)("pre",{...n})]})}},children:n})})}),(0,r.jsx)("footer",{className:"mt-auto text-center",children:(0,r.jsx)("p",{className:"text-gray-400",children:"2023 \xa9 Dylan Prehn"})})]})]})}function x(e){let{route:t}=(0,o.useRouter)(),n=globalThis.__nextra_pageContext__[t];if(!n)throw Error("No content found for ".concat(t,"."));let{pageOpts:l,Content:a}=n;return(0,r.jsx)(g,{pageOpts:l,children:(0,r.jsx)(a,{...e})})}n(5819)},2711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s.Z}});var r,o=n(1527),l=n(1179),a=n(313);n(9033);var s=n(7819);let i={filePath:"pages/about.md",route:"/about",frontMatter:{title:"Hello",trademark:"Trademark"},pageMap:[{kind:"MdxPage",name:"about",route:"/about",frontMatter:{title:"Hello",trademark:"Trademark"}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"MdxPage",name:"another-one",route:"/blog/another-one",frontMatter:{title:"Another One",slug:"/blog/another-one"}},{kind:"MdxPage",name:"hello-world",route:"/blog/hello-world",frontMatter:{title:"Hello World",slug:"/blog/hello-World"}},{kind:"Meta",data:{"another-one":"Another One","hello-world":"Hello World"}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{title:"Posts"}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"v19",route:"/docs/v19",children:[{kind:"MdxPage",name:"globals",route:"/docs/v19/globals"},{kind:"Meta",data:{globals:"Globals"}}]}]},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Hello",trademark:"Trademark"}},{kind:"MdxPage",name:"projects",route:"/projects",frontMatter:{title:"Projects"}},{kind:"Meta",data:{blog:"Posts",docs:"Docs",about:"Hello",index:"Hello",projects:"Projects"}}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"About",position:{start:{line:2,column:3,offset:3},end:{line:2,column:8,offset:8}}}],position:{start:{line:2,column:1,offset:1},end:{line:2,column:8,offset:8}},value:"About"}],timestamp:168649547e4,flexsearch:{codeblocks:!0}};function c(e){let t=Object.assign({h1:"h1",p:"p"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"About"}),"\n",(0,o.jsx)(t.p,{children:"SASS, CSS modules, JSX inside Markdown"}),"\n",(0,o.jsx)(t.p,{children:"I am going to the movies today."})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}globalThis.__nextra_internal__={pageMap:i.pageMap,route:i.route},i.title="Hello";let u=e=>(0,o.jsx)(l.mK.Provider,{value:e,children:(0,o.jsx)(d,{})});(r=globalThis).__nextra_pageContext__||(r.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/about"]={Content:u,pageOpts:i,themeConfig:null}},145:function(e){"use strict";e.exports=JSON.parse('{"x":[{"slug":"/blog/hello-world","date":"December 23, 2020","title":"Hello World"},{"slug":"/blog/another-one","date":"June 16, 2020","title":"How to configure Nextra theme"}]}')}},function(e){e.O(0,[210,774,888,179],function(){return e(e.s=4996)}),_N_E=e.O()}]);