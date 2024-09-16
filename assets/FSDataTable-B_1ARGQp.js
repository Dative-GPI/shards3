var k=Object.defineProperty;var N=(a,e,o)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;var r=(a,e,o)=>N(a,typeof e!="symbol"?e+"":e,o);import{b as v,d as w,c as O,y,z as T,A as h,B as p,O as _,L as n,V as x,w as F,M as V,N as q,m as A,I as z,J as E,K}from"./vue.esm-bundler-BSyvBTC9.js";import{F as G,V as J}from"./FSLoader-CtbqJzfZ.js";import{F as P}from"./FSCol-DZA6pxA1.js";import{F as b}from"./FSRow-CA1vgNXx.js";import{u as j,C as M}from"./useColors-DlnF7i6T.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VSpacer-C4plVoTE.js";import{F as Q}from"./FSDataTableUI-CfEIni24.js";import{C as W}from"./base-1FyQZYnT.js";import{S as X}from"./serviceFactory-Bd5jifNi.js";import{C}from"./composableFactory-wHNy9kQa.js";import{u as Y}from"./FSFadeOut-D96pvLZm.js";class Z{constructor(){r(this,"called",!1);r(this,"result",null)}call(e){return this.called?this.result:(this.called=!0,this.result=e(),this.result)}}const g=v({}),ee=new Z,ae=()=>ee.call(()=>({getTable:o=>g.value[o]!=null?g.value[o]:null,setTable:(o,u)=>{g.value[o]={...u}}}));class te{constructor(e){r(this,"columnId");r(this,"text");r(this,"value");r(this,"sortable");r(this,"filterable");r(this,"index");r(this,"hidden");this.columnId=e.columnId,this.text=e.text,this.value=e.value,this.sortable=e.sortable,this.filterable=e.filterable,this.index=e.index,this.hidden=e.hidden}}class se{constructor(e){r(this,"id");r(this,"code");r(this,"columns");r(this,"mode");r(this,"rowsPerPage");r(this,"sortByKey");r(this,"sortByOrder");var o;this.id=e.id,this.code=e.code,this.mode=e.mode,this.rowsPerPage=e.rowsPerPage,this.sortByKey=e.sortByKey,this.sortByOrder=e.sortByOrder,this.columns=((o=e.columns)==null?void 0:o.map(u=>new te(u)))??[]}}class oe extends se{constructor(e){super(e)}}const re=()=>`${W()}/user-organisation-tables`,U=a=>`${re()}/${encodeURIComponent(a)}`,ne=()=>{const a=v(!1),e=v({headers:[],mode:"iterator",sortBy:null,rowsPerPage:10,filters:{},page:1});return{initialized:a,table:e,onTableCodeChange:async(d,t,l)=>{if(l){const s=t(l);if(s)e.value=s;else try{const i=await d(l);i.value&&(e.value={headers:i.value.columns,sortBy:{key:i.value.sortByKey,order:i.value.sortByOrder},mode:i.value.mode,rowsPerPage:i.value.rowsPerPage,filters:{},page:1})}catch{}}a.value=!0},computeTable:(d,t)=>({...e.value,headers:e.value.headers.map(l=>({...l,sort:l.value&&d[l.value]||null,sortRaw:l.value&&t[l.value]||null}))}),updateTable:(d,t,l)=>{var s,i;e.value&&(t(l,e.value),d(l,{columns:e.value.headers.map(c=>({columnId:c.columnId,hidden:c.hidden,index:c.index})),rowsPerPage:e.value.rowsPerPage,sortByKey:((s=e.value.sortBy)==null?void 0:s.key)??null,sortByOrder:((i=e.value.sortBy)==null?void 0:i.order)??null,mode:e.value.mode}))}}},I=new X("userOrgansiationTable",oe).create(a=>a.build(a.addGet(U),a.addUpdate(U),a.addNotify())),le=C.get(I),ie=C.update(I),L=w({name:"FSLoadDataTable",components:{FSLoader:G,FSCol:P,FSRow:b},setup(){const{getColors:a}=j(),e=a(M.Background);return{style:O(()=>({"--fs-load-data-table-background-color":e.base}))}}});function ue(a,e,o,u,m,d){const t=y("FSLoader");return T(),h(P,{class:"fs-load-data-table",gap:"16px",style:_(a.style)},{default:p(()=>[n(b,{align:"bottom-center"},{default:p(()=>[n(t,{variant:"input"}),n(t,{variant:"button"}),n(H),n(t,{variant:"button"}),n(t,{variant:"button"})]),_:1}),n(b,null,{default:p(()=>[n(t,{variant:"chip"}),n(t,{variant:"chip"}),n(t,{variant:"chip"})]),_:1}),n(J,{type:"table-row-divider@10"}),n(b,{align:"center-right"},{default:p(()=>[n(t,{height:"16px",width:"100px"}),n(t,{width:"120px",height:["40px","36px"]}),n(t,{variant:"button"}),n(t,{variant:"button"}),n(t,{variant:"button"})]),_:1})]),_:1},8,["style"])}const de=B(L,[["render",ue]]);L.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const D=w({name:"FSDataTable",components:{FSLoadDataTable:de,FSDataTableUI:Q},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})},customSortRaws:{type:Object,required:!1,default:()=>({})}},setup(a){const{get:e,getting:o}=le(),{initialized:u,table:m,updateTable:d,computeTable:t,onTableCodeChange:l}=ne(),{update:s}=ie(),{getTable:i,setTable:c}=ae(),{debounce:$,cancel:R}=Y(),f=O(()=>t(a.customSorts,a.customSortRaws));console.log(JSON.stringify(f.value)),x(()=>{R(),S()});const S=()=>{d(s,c,a.tableCode)};return F(()=>a.tableCode,async()=>{l(e,i,a.tableCode),console.log(JSON.stringify(f.value))},{immediate:!0}),F(()=>m.value,()=>{m.value&&u.value&&$(S,a.debounceTime)},{deep:!0}),{gettingUserOrganisationTable:o,computedTable:f,initialized:u,table:m}}});function ce(a,e,o,u,m,d){const t=y("FSLoadDataTable"),l=y("FSDataTableUI");return!a.initialized||a.gettingUserOrganisationTable?(T(),h(t,{key:0})):(T(),h(l,A({key:1,"onUpdate:rowsPerPage":e[0]||(e[0]=s=>a.table.rowsPerPage=s),"onUpdate:filters":e[1]||(e[1]=s=>a.table.filters=s),"onUpdate:headers":e[2]||(e[2]=s=>a.table.headers=s),"onUpdate:sortBy":e[3]||(e[3]=s=>a.table.sortBy=s),"onUpdate:mode":e[4]||(e[4]=s=>a.table.mode=s),"onUpdate:page":e[5]||(e[5]=s=>a.table.page=s)},{...a.computedTable,...a.$attrs}),V({_:2},[q(a.$slots,(s,i)=>({name:i,fn:p(c=>[z(a.$slots,i,E(K(c)))])}))]),1040))}const Oe=B(D,[["render",ce]]);D.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"customSortRaws",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};export{Oe as F};
