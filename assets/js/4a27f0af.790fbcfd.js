"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[1455],{7962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(984),n=(r(6204),r(6575));r(2515);const o={slug:"dockview-1.5.0-release",title:"Dockview 1.5.0",tags:["release"]},i="Release Notes",l={permalink:"/blog/dockview-1.5.0-release",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-12-dockview-1.5.0.mdx",source:"@site/blog/2022-06-12-dockview-1.5.0.mdx",title:"Dockview 1.5.0",description:"\ud83d\ude80 Features",date:"2022-06-12T00:00:00.000Z",formattedDate:"June 12, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.675,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"dockview-1.5.0-release",title:"Dockview 1.5.0",tags:["release"]},prevItem:{title:"Dockview 1.5.1",permalink:"/blog/dockview-1.5.1-release"},nextItem:{title:"Dockview 1.4.3",permalink:"/blog/dockview-1.4.3-release"}},c={authorsImageUrls:[]},u=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udee0 Miscs",id:"-miscs",level:2},{value:"\ud83d\udd25 Breaking changes",id:"-breaking-changes",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Additional Themes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/commit/1921e170e0b8275e8a10255f616119d36cff80cf"},"commit"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dockview-theme-abyss")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"dockview-theme-dracula")))),(0,n.kt)("li",{parentName:"ul"},"SVG Icons ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/132"},"#132"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use inline SVG icons for the close and chevon icons to allow for easier customization and theming"))),(0,n.kt)("li",{parentName:"ul"},"Dnd improvements ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/136"},"#136"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Components always behaviour independant of one another by default, there is no cross component dnd behaviour unless manually set by user through ",(0,n.kt)("inlineCode",{parentName:"li"},"onDidDrop")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"showDndOverlay")," props."))),(0,n.kt)("li",{parentName:"ul"},"Default tab ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/136"},"#136"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Provide a default React tab implementation to allow for simple changes to tab renderer without rewritting the entire tab"),(0,n.kt)("li",{parentName:"ul"},"Override the default tab in ",(0,n.kt)("inlineCode",{parentName:"li"},"ReactDockview")," with the ",(0,n.kt)("inlineCode",{parentName:"li"},"defaultTabComponent")," prop"))),(0,n.kt)("li",{parentName:"ul"},"Group controls renderer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/138"},"#138"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Provide the ",(0,n.kt)("inlineCode",{parentName:"li"},"groupControlComponent")," prop in ",(0,n.kt)("inlineCode",{parentName:"li"},"ReactDockview")," to create custom control components for groups.")))),(0,n.kt)("h2",{id:"-miscs"},"\ud83d\udee0 Miscs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Various doc enhancements @ ",(0,n.kt)("a",{parentName:"li",href:"https://dockview.dev"},"dockview.dev"))),(0,n.kt)("h2",{id:"-breaking-changes"},"\ud83d\udd25 Breaking changes"))}m.isMDXComponent=!0},6575:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(6204);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=4a27f0af.790fbcfd.js.map