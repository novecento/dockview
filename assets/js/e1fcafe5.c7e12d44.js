"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[3854],{7363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(984),i=(n(6204),n(6575));const r={slug:"dockview-1.4.1-release",title:"Dockview 1.4.1",tags:["release"]},o="Release Notes",l={permalink:"/blog/dockview-1.4.1-release",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-11-dockview-1.4.1.mdx",source:"@site/blog/2022-05-11-dockview-1.4.1.mdx",title:"Dockview 1.4.1",description:"\ud83d\ude80 Features",date:"2022-05-11T00:00:00.000Z",formattedDate:"May 11, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.635,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"dockview-1.4.1-release",title:"Dockview 1.4.1",tags:["release"]},prevItem:{title:"Dockview 1.4.2",permalink:"/blog/dockview-1.4.2-release"}},c={authorsImageUrls:[]},s=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udee0 Miscs",id:"-miscs",level:2},{value:"\ud83d\udd25 Breaking changes",id:"-breaking-changes",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix Drag and Drop issues in Dockview on Firefox ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/103"},"#103"))),(0,i.kt)("h2",{id:"-miscs"},"\ud83d\udee0 Miscs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Documentation enhancements ",(0,i.kt)("a",{parentName:"li",href:"https://mathuo.github.io/dockview/docs/"},"https://mathuo.github.io/dockview/docs/"))),(0,i.kt)("h2",{id:"-breaking-changes"},"\ud83d\udd25 Breaking changes"),(0,i.kt)("p",null,"All breaking changes here are designed to simplify the library with only one way to do something."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"setVisible")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"setActive")," from the Splitview API. You can still achieve the same behaviors through calling ",(0,i.kt)("inlineCode",{parentName:"li"},"setVisible")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"setActive")," on the Splitview Panel API. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/105"},"#105")),(0,i.kt)("li",{parentName:"ul"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"setVisible"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"setActive")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"toggleVisiblity")," from Gridview API. You can still achieve the same behaviors through calling ",(0,i.kt)("inlineCode",{parentName:"li"},"setVisible")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"setActive")," on the Gridview Panel API ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/105"},"#105")),(0,i.kt)("li",{parentName:"ul"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"onFocusEvent")," from Panel API as this was not intended to be a public method. You can use ",(0,i.kt)("inlineCode",{parentName:"li"},"onDidFocusChange")," instead ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/105"},"#105")),(0,i.kt)("li",{parentName:"ul"},"Remove HOC ",(0,i.kt)("inlineCode",{parentName:"li"},"<DockviewComponents.Panel\\>"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<DockviewComponents.Content>"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<DockviewComponents.Tab>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<DockviewComponents.Actions>")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mathuo/dockview/pull/105"},"#105"))))}m.isMDXComponent=!0},6575:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(6204);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,k=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=e1fcafe5.c7e12d44.js.map