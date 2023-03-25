"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[1455],{876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7896),a=(r(2784),r(876)),o=r(9817);const i={slug:"dockview-1.5.0-release",title:"Dockview 1.5.0",tags:["release"]},l="Release Notes",c={permalink:"/blog/dockview-1.5.0-release",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-12-dockview-1.5.0.mdx",source:"@site/blog/2022-06-12-dockview-1.5.0.mdx",title:"Dockview 1.5.0",description:"\ud83d\ude80 Features",date:"2022-06-12T00:00:00.000Z",formattedDate:"June 12, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.685,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"dockview-1.5.0-release",title:"Dockview 1.5.0",tags:["release"]},prevItem:{title:"Dockview 1.5.1",permalink:"/blog/dockview-1.5.1-release"},nextItem:{title:"Dockview 1.4.3",permalink:"/blog/dockview-1.4.3-release"}},p={authorsImageUrls:[]},s=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udee0 Miscs",id:"-miscs",level:2},{value:"\ud83d\udd25 Breaking changes",id:"-breaking-changes",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Additional Themes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/commit/1921e170e0b8275e8a10255f616119d36cff80cf"},"commit"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dockview-theme-abyss")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"dockview-theme-dracula")))),(0,a.kt)("li",{parentName:"ul"},"SVG Icons ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/132"},"#132"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use inline SVG icons for the close and chevon icons to allow for easier customization and theming"))),(0,a.kt)("li",{parentName:"ul"},"Dnd improvements ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/136"},"#136"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Components always behaviour independant of one another by default, there is no cross component dnd behaviour unless manually set by user through ",(0,a.kt)("inlineCode",{parentName:"li"},"onDidDrop")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"showDndOverlay")," props."))),(0,a.kt)("li",{parentName:"ul"},"Default tab ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/136"},"#136"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Provide a default React tab implementation to allow for simple changes to tab renderer without rewritting the entire tab"),(0,a.kt)("li",{parentName:"ul"},"Override the default tab in ",(0,a.kt)("inlineCode",{parentName:"li"},"ReactDockview")," with the ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultTabComponent")," prop"))),(0,a.kt)("li",{parentName:"ul"},"Group controls renderer ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/138"},"#138"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Provide the ",(0,a.kt)("inlineCode",{parentName:"li"},"groupControlComponent")," prop in ",(0,a.kt)("inlineCode",{parentName:"li"},"ReactDockview")," to create custom control components for groups. ",(0,a.kt)(o.Z,{to:"../../docs/components/dockview/#group-controls-panel",mdxType:"Link"},"Go"))))),(0,a.kt)("h2",{id:"-miscs"},"\ud83d\udee0 Miscs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Various doc enhancements @ ",(0,a.kt)("a",{parentName:"li",href:"https://dockview.dev"},"dockview.dev"))),(0,a.kt)("h2",{id:"-breaking-changes"},"\ud83d\udd25 Breaking changes"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=4a27f0af.0b0af109.js.map