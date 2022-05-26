"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[397],{876:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6706:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(876)),i=["components"],l={slug:"dockview-1.4.3-release",title:"Dockview 1.4.3",tags:["release"]},c="Release Notes",u={permalink:"/blog/dockview-1.4.3-release",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-26-dockview-1.4.3.mdx",source:"@site/blog/2022-05-26-dockview-1.4.3.mdx",title:"Dockview 1.4.3",description:"\ud83d\ude80 Features",date:"2022-05-26T00:00:00.000Z",formattedDate:"May 26, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.515,truncated:!1,authors:[],frontMatter:{slug:"dockview-1.4.3-release",title:"Dockview 1.4.3",tags:["release"]},nextItem:{title:"Dockview 1.4.2",permalink:"/blog/dockview-1.4.2-release"}},p={authorsImageUrls:[]},s=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udee0 Miscs",id:"-miscs",level:2},{value:"\ud83d\udd25 Breaking changes",id:"-breaking-changes",level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Small adjusted to behaviours of default paneview header componnet ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/116"},"#116")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/120"},"#120")),(0,o.kt)("li",{parentName:"ul"},"Improved support for external dnd events in the dockview component. ",(0,o.kt)("inlineCode",{parentName:"li"},"showDndOverlay")," prop on ",(0,o.kt)("inlineCode",{parentName:"li"},"DockviewReact")," exposes more parameters to interact with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/110"},"#110")),(0,o.kt)("li",{parentName:"ul"},"Improved to underlying events exposes through all components ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/114"},"#114")),(0,o.kt)("li",{parentName:"ul"},"Add .clear() to the component APIs providing an easy way to clear a layout ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/119"},"#119")),(0,o.kt)("li",{parentName:"ul"},"Udate orientation via componnet APIs is now working correctly ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/119"},"#119"))),(0,o.kt)("h2",{id:"-miscs"},"\ud83d\udee0 Miscs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Documentation enhancements ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/101"},"#101")),(0,o.kt)("li",{parentName:"ul"},"Move documentation to ",(0,o.kt)("a",{parentName:"li",href:"https://dockview.dev"},"dockview.dev"))),(0,o.kt)("h2",{id:"-breaking-changes"},"\ud83d\udd25 Breaking changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix typo by renaming ",(0,o.kt)("inlineCode",{parentName:"li"},"onDidLayoutfromJSON")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"onDidLayoutFromJSON")," in dockview component api ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/112/files"},"#112"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=baa6b714.a3e638c0.js.map