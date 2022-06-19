"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[1414],{7455:function(t,e,n){n.d(e,{M:function(){return l}});var a=n(7294),l=function(t){var e=a.useRef();return a.useLayoutEffect((function(){e.current&&(e.current.scrollTop=Math.max(0,e.current.scrollHeight-e.current.clientHeight))}),[t.lines]),a.createElement("div",{ref:e,className:"console-container"},t.lines.map((function(t,e){return a.createElement("div",{key:e,className:"console-line"},a.createElement("span",{className:"console-line-timestamp"},(n=t.timestamp,(l=function(t){return t<10?"0"+t:""+t})(n.getHours())+":"+l(n.getMinutes())+":"+l(n.getSeconds())+"."+n.getMilliseconds())),a.createElement("span",{className:"console-line-text",style:t.css},t.text));var n,l})))}},525:function(t,e,n){n.d(e,{R:function(){return d}});var a=n(268),l=n(7294),r=n(7455),i={default:function(t){return l.createElement("div",{style:{padding:"20px"}},t.params.title)}},d=function(){var t=l.useState([]),e=t[0],n=t[1],d=l.useState(!1),p=d[0],o=d[1],m=l.useState(),u=m[0],k=m[1];l.useEffect((function(){if(!u)return function(){};var t=[u.onDidAddPanel((function(t){n((function(e){return[].concat(e,[{timestamp:new Date,text:"onDidAddPanel: "+t.id}])}))})),u.onDidRemovePanel((function(t){n((function(e){return[].concat(e,[{timestamp:new Date,text:"onDidRemovePanel: "+t.id}])}))})),u.onDidActivePanelChange((function(t){n((function(e){return[].concat(e,[{timestamp:new Date,text:"onDidActivePanelChange: "+(null==t?void 0:t.id)}])}))})),u.onDidLayoutChange((function(t){n((function(t){return[].concat(t,[{timestamp:new Date,text:"onDidLayoutChange"}])}))})),u.onDidLayoutFromJSON((function(t){n((function(t){return[].concat(t,[{timestamp:new Date,text:"onDidLayoutFromJSON"}])}))}))];return function(){t.forEach((function(t){return t.dispose()}))}}),[u]),l.useEffect((function(){u&&(n((function(t){return[].concat(t,[{timestamp:new Date,text:"Rebuilding view fromJSON:"+p,css:{color:"yellow",backgroundColor:"grey"}}])})),p?u.fromJSON({grid:{root:{type:"branch",data:[{type:"branch",data:[{type:"leaf",data:{id:"panel_3",component:"default",params:{title:"Panel 3"},snap:!1},size:394},{type:"branch",data:[{type:"leaf",data:{id:"panel_5",component:"default",params:{title:"Panel 5"},snap:!1},size:50},{type:"branch",data:[{type:"leaf",data:{id:"panel_6",component:"default",params:{title:"Panel 6"},minimumWidth:10,snap:!1},size:131},{type:"leaf",data:{id:"panel_8",component:"default",params:{title:"Panel 8"},minimumWidth:10,snap:!1},size:131},{type:"leaf",data:{id:"panel_7",component:"default",params:{title:"Panel 7"},minimumWidth:10,snap:!1},size:132}],size:50}],size:394}],size:100},{type:"leaf",data:{id:"panel_2",component:"default",params:{title:"Panel 2"},snap:!1},size:100},{type:"branch",data:[{type:"leaf",data:{id:"panel_1",component:"default",params:{title:"Panel 1"},snap:!1},size:394},{type:"leaf",data:{id:"panel_4",component:"default",params:{title:"Panel 4"},snap:!1},size:394}],size:100}],size:788},width:788,height:300,orientation:a.i5.VERTICAL},activePanel:"panel_8"}):(u.clear(),u.orientation=a.i5.VERTICAL,u.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),u.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),u.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),console.log("sdf"),u.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}}),u.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}}),u.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"},minimumWidth:10}),u.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10}),u.addPanel({id:"panel_8",component:"default",params:{title:"Panel 8"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10})))}),[u,p]);return l.createElement(l.Fragment,null,l.createElement("label",null,l.createElement("input",{type:"checkbox",checked:p,onChange:function(t){return o(t.target.checked)}}),l.createElement("span",null,"fromJSON")),l.createElement("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},l.createElement(a.$R,{components:i,onReady:function(t){k(t.api)},proportionalLayout:!1,orientation:a.i5.VERTICAL,className:"dockview-theme-abyss"})),l.createElement(r.M,{lines:e}))}},645:function(t,e,n){n.d(e,{X:function(){return i}});var a=n(268),l=n(7294),r={default:function(t){return l.createElement("div",{style:{padding:"20px"}},t.params.title)}},i=function(){return l.createElement(a.$R,{components:r,onReady:function(t){t.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),t.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),t.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),t.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}}),t.api.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}}),t.api.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"},minimumWidth:10}),t.api.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10}),t.api.addPanel({id:"panel_8",component:"default",params:{title:"Panel 8"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10})},proportionalLayout:!1,orientation:a.i5.VERTICAL,className:"dockview-theme-abyss"})}},9736:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return N}});var a=n(7462),l=n(3366),r=(n(7294),n(876)),i=n(645),d=n(525),p=n(3095),o=["components"],m={description:"Gridview Documentation"},u="Gridview",k={unversionedId:"components/gridview",id:"version-1.5.0/components/gridview",title:"Gridview",description:"Gridview Documentation",source:"@site/versioned_docs/version-1.5.0/components/gridview.mdx",sourceDirName:"components",slug:"/components/gridview",permalink:"/docs/components/gridview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.5.0/components/gridview.mdx",tags:[],version:"1.5.0",frontMatter:{description:"Gridview Documentation"},sidebar:"tutorialSidebar",previous:{title:"Dockview",permalink:"/docs/components/dockview"},next:{title:"Paneview",permalink:"/docs/components/paneview"}},s={},N=[{value:"Introduction",id:"introduction",level:2},{value:"GridviewReact Component",id:"gridviewreact-component",level:2},{value:"Gridview API",id:"gridview-api",level:2},{value:"Gridview Panel API",id:"gridview-panel-api",level:2},{value:"Events",id:"events",level:2}],g={toc:N};function c(t){var e=t.components,n=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gridview"},"Gridview"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,r.kt)(i.X,{mdxType:"SimpleGridview"})),(0,r.kt)("h2",{id:"gridviewreact-component"},"GridviewReact Component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ReactGridview } from 'dockview';\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onReady"),(0,r.kt)("td",{parentName:"tr",align:null},"(event: SplitviewReadyEvent) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"components"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orientation"),(0,r.kt)("td",{parentName:"tr",align:null},"Orientation"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Orientation.HORIZONTAL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proportionalLayout"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)(p.Z,{to:"../basics/#proportional-layout",mdxType:"Link"},"Proportional layout"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hideBorders"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"className"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"''"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableAutoResizing"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)(p.Z,{to:"../basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))))),(0,r.kt)("h2",{id:"gridview-api"},"Gridview API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: IGridviewPanelProps<{ title: string }>) => {\n    // props.containerApi...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const onReady = (event: GridviewReadyEvent) => {\n    // event.api...\n};\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Component pixel height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Component pixel width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minimumHeight"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maximumHeight"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maximumWidth"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maximumWidth"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"length"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of panels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"panels"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ISplitviewPanel[]")),(0,r.kt)("td",{parentName:"tr",align:null},"all panels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orientation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Orientation")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidLayoutChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,r.kt)("td",{parentName:"tr",align:null},"Fires on layout change")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidLayoutFromJSON"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,r.kt)("td",{parentName:"tr",align:null},"Fires of layout change caused by a fromJSON deserialization call")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidAddPanel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Event<IGridviewPanel>")),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a view is added")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidRemovePanel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Event<IGridviewPanel>")),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a view is removed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidActivePanelChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Event<IGridviewPanel \\| undefined>")),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when the active group changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addPanel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addPanel(options: AddComponentOptions): IGridviewPanel")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"removePanel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(panel: IGridviewPanel, sizing?: Sizing): void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"movePanel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(panel: IGridviewPanel, options: {direction: Direction, refernece:string, size?: number}): void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getPanel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(id: string) \\| IGridviewPanel \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updateOptions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(options:SplitviewComponentUpdateOptions): void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"focus"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(): void")),(0,r.kt)("td",{parentName:"tr",align:null},"Focus the active panel, if exists")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(width: number, height:number): void")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(p.Z,{to:"../basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fromJSON"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(data: SerializedGridview): void")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(p.Z,{to:"../basics/#serialization",mdxType:"Link"},"Serialization"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toJSON"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(): SerializedGridview")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(p.Z,{to:"../basics/#serialization",mdxType:"Link"},"Serialization"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clear"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(): void")),(0,r.kt)("td",{parentName:"tr",align:null},"Clears the current layout")))),(0,r.kt)("h2",{id:"gridview-panel-api"},"Gridview Panel API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: IGridviewPanelProps<{ title: string }>) => {\n    // props.api...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Panel id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isFocused"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Is panel focsed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isActive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Is panel active")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isVisible"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Is panel visible")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Panel width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Panel height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidDimensionsChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Event<PanelDimensionChangeEvent>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidFocusChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Event<FocusEvent>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidVisibilityChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Event<VisibilityEvent>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidActiveChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Event<ActiveEvent>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDidConstraintsChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onDidConstraintsChange: Event<PanelConstraintChangeEvent>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setVisible"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(isVisible: boolean): void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setActive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(): void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setConstraints"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(value: PanelConstraintChangeEvent2): void;")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setSize"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(event: SizeEvent): void")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GridviewReact")," exposes a number of events that the developer can listen to and below is a simple example with a log panel showing those events that occur."),(0,r.kt)(d.R,{mdxType:"EventsGridview"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=212a7e66.b470ca5f.js.map