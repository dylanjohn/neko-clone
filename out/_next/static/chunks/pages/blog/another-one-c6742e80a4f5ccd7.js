(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{5413:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/another-one",function(){return n(4036)}])},891:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(1527),o=n(1054),l=n.n(o),a=JSON.parse('{"x":[{"slug":"/blog/hello-world","date":"December 23, 2020","title":"Hello World"},{"slug":"/blog/another-one","date":"June 16, 2020","title":"Another one"}]}');function s(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{children:a.x.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(l(),{href:e.slug,children:(0,r.jsx)("span",{className:"block",children:e.title})}),(0,r.jsx)("span",{className:"block",children:e.date})]},e.slug))})})}},7819:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(1527),o=n(716),l=n(1670),a=n.n(l),s=n(1054),i=n.n(s),d=n(313),c=n(795),h=n.n(c);function u(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{id:"toggle-theme",type:"button",className:"flex h-9 w-9 shrink-0 touch-manipulation items-center justify-center rounded-md bg-gray-200 ring-gray-300 transition-all hover:ring-2",title:"Toggle theme",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"h-5 w-5 text-gray-800 dark:text-gray-200",children:(0,r.jsx)("path",{className:"inline",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})})}let g=[{name:"Home",href:"/"},{name:"Articles",href:"/blog"},{name:"About",href:"/about"}];function x(){let e=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"navbar py-6 pb-8 sm:py-12 sm:pb-16 flex items-center justify-between",children:[(0,r.jsx)("div",{className:"ml-[-0.60rem]",children:g.map(t=>(0,r.jsx)(i(),{href:t.href,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("inline-block px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors no-underline","/"===t.href?e.pathname===t.href?"text-gray-900 font-semibold":"text-gray-500":e.asPath.startsWith(t.href)?"text-gray-900 font-semibold":"text-gray-500"),"aria-current":e.pathname===t.href?"page":void 0,children:t.name},t.name))}),(0,r.jsx)(u,{})]})}function m(e){let{pageOpts:t,children:n}=e;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-100",children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:t.title})}),(0,r.jsxs)("div",{className:"flex flex-col flex-grow prose lg:prose-lg prose-stone container px-4 mx-auto mb-6 w-full",children:[(0,r.jsx)(x,{}),(0,r.jsx)("main",{className:"flex-grow",children:(0,r.jsx)("article",{children:(0,r.jsx)(d.Zo,{components:{h1:e=>(0,r.jsx)("h1",{...e}),pre:e=>{let{filename:t,...n}=e;return(0,r.jsxs)("div",{className:h().codeblock,children:[t?(0,r.jsx)("div",{className:h().filename,children:t}):null,(0,r.jsx)("pre",{...n})]})}},children:n})})}),(0,r.jsx)("footer",{className:"mt-auto text-center",children:(0,r.jsx)("p",{children:"2023 \xa9 Aenean Blog"})})]})]})}function f(e){let{route:t}=(0,o.useRouter)(),n=globalThis.__nextra_pageContext__[t];if(!n)throw Error("No content found for ".concat(t,"."));let{pageOpts:l,Content:a}=n;return(0,r.jsx)(m,{pageOpts:l,children:(0,r.jsx)(a,{...e})})}n(891)},4036:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s.Z}});var r,o=n(1527),l=n(1179),a=n(313);n(9033);var s=n(7819);let i={filePath:"pages/blog/another-one.mdx",route:"/blog/another-one",frontMatter:{title:"Another One",slug:"/blog/another-one"},pageMap:[{kind:"MdxPage",name:"about",route:"/about",frontMatter:{title:"Hello",trademark:"Trademark"}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"MdxPage",name:"another-one",route:"/blog/another-one",frontMatter:{title:"Another One",slug:"/blog/another-one"}},{kind:"MdxPage",name:"hello-world",route:"/blog/hello-world",frontMatter:{title:"Hello World",slug:"/blog/hello-World"}},{kind:"Meta",data:{"another-one":"Another One","hello-world":"Hello World"}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{title:"Articles"}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"v19",route:"/docs/v19",children:[{kind:"MdxPage",name:"globals",route:"/docs/v19/globals"},{kind:"Meta",data:{globals:"Globals"}}]}]},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Hello",trademark:"Trademark"}},{kind:"Meta",data:{blog:"Blog",docs:"Docs",about:"Hello",index:"Hello"}}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Another post",position:{start:{line:2,column:3,offset:3},end:{line:2,column:15,offset:15}}}],position:{start:{line:2,column:1,offset:1},end:{line:2,column:15,offset:15}},value:"Another post"}],timestamp:1685719505e3,flexsearch:{codeblocks:!0}};function d(e){let t=Object.assign({h1:"h1",p:"p"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"Another post"}),"\n",(0,o.jsx)(t.p,{children:"This is another MDX post"})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}globalThis.__nextra_internal__={pageMap:i.pageMap,route:i.route},i.title="Another One";let h=e=>(0,o.jsx)(l.mK.Provider,{value:e,children:(0,o.jsx)(c,{})});(r=globalThis).__nextra_pageContext__||(r.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/blog/another-one"]={Content:h,pageOpts:i,themeConfig:null}},795:function(){}},function(e){e.O(0,[210,774,888,179],function(){return e(e.s=5413)}),_N_E=e.O()}]);