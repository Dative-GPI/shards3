var $=Object.defineProperty;var k=(a,e,s)=>e in a?$(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var r=(a,e,s)=>k(a,typeof e!="symbol"?e+"":e,s);import{b as v,d as U,c as O,y,z as T,A as S,B as p,O as N,L as n,V as x,w,M as V,N as q,m as A,I as z,J as E,K}from"./vue.esm-bundler-BSyvBTC9.js";import{F as G,V as J}from"./FSLoader-DIRgKG_M.js";import{_ as C}from"./FSCol-YmDykHL-.js";import{_ as b}from"./FSRow-CVY2l52N.js";import{u as j,C as M}from"./useColors-B5ivMAr9.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VSpacer-C4plVoTE.js";import{F as Q}from"./FSDataTableUI-CVMKV-c_.js";import{C as W}from"./base-1FyQZYnT.js";import{S as X}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-wHNy9kQa.js";import{u as Y}from"./FSFadeOut-I9nnIcBb.js";class Z{constructor(){r(this,"called",!1);r(this,"result",null)}call(e){return this.called?this.result:(this.called=!0,this.result=e(),this.result)}}const g=v({}),ee=new Z,ae=()=>ee.call(()=>({getTable:s=>g.value[s]!=null?g.value[s]:null,setTable:(s,u)=>{g.value[s]={...u}}}));class te{constructor(e){r(this,"columnId");r(this,"text");r(this,"value");r(this,"sortable");r(this,"filterable");r(this,"index");r(this,"hidden");this.columnId=e.columnId,this.text=e.text,this.value=e.value,this.sortable=e.sortable,this.filterable=e.filterable,this.index=e.index,this.hidden=e.hidden}}class oe{constructor(e){r(this,"id");r(this,"code");r(this,"columns");r(this,"mode");r(this,"rowsPerPage");r(this,"sortByKey");r(this,"sortByOrder");var s;this.id=e.id,this.code=e.code,this.mode=e.mode,this.rowsPerPage=e.rowsPerPage,this.sortByKey=e.sortByKey,this.sortByOrder=e.sortByOrder,this.columns=((s=e.columns)==null?void 0:s.map(u=>new te(u)))??[]}}class se extends oe{constructor(e){super(e)}}const re=()=>`${W()}/user-organisation-tables`,F=a=>`${re()}/${encodeURIComponent(a)}`,ne=()=>{const a=v(!1),e=v({headers:[],mode:"iterator",sortBy:null,rowsPerPage:10,filters:{},page:1});return{initialized:a,table:e,onTableCodeChange:async(d,t,l)=>{if(l){const o=t(l);if(o)e.value=o;else try{const i=await d(l);i.value&&(e.value={headers:i.value.columns,sortBy:{key:i.value.sortByKey,order:i.value.sortByOrder},mode:i.value.mode,rowsPerPage:i.value.rowsPerPage,filters:{},page:1})}catch{}}a.value=!0},computeTable:(d,t)=>({...e.value,headers:e.value.headers.map(l=>({...l,sort:l.value&&d[l.value]||null,sortRaw:l.value&&t[l.value]||null}))}),updateTable:(d,t,l)=>{var o,i;e.value&&(t(l,e.value),d(l,{columns:e.value.headers.map(c=>({columnId:c.columnId,hidden:c.hidden,index:c.index})),rowsPerPage:e.value.rowsPerPage,sortByKey:((o=e.value.sortBy)==null?void 0:o.key)??null,sortByOrder:((i=e.value.sortBy)==null?void 0:i.order)??null,mode:e.value.mode}))}}},_=new X("userOrgansiationTable",se).create(a=>a.build(a.addGet(F),a.addUpdate(F),a.addNotify())),le=B.get(_),ie=B.update(_),I=U({name:"FSLoadDataTable",components:{FSLoader:G,FSCol:C,FSRow:b},setup(){const{getColors:a}=j(),e=a(M.Background);return{style:O(()=>({"--fs-load-data-table-background-color":e.base}))}}});function ue(a,e,s,u,m,d){const t=y("FSLoader");return T(),S(C,{class:"fs-load-data-table",gap:"16px",style:N(a.style)},{default:p(()=>[n(b,{align:"bottom-center"},{default:p(()=>[n(t,{variant:"input"}),n(t,{variant:"button"}),n(H),n(t,{variant:"button"}),n(t,{variant:"button"})]),_:1}),n(b,null,{default:p(()=>[n(t,{variant:"chip"}),n(t,{variant:"chip"}),n(t,{variant:"chip"})]),_:1}),n(J,{type:"table-row-divider@10"}),n(b,{align:"center-right"},{default:p(()=>[n(t,{height:"16px",width:"100px"}),n(t,{width:"120px",height:["40px","36px"]}),n(t,{variant:"button"}),n(t,{variant:"button"}),n(t,{variant:"button"})]),_:1})]),_:1},8,["style"])}const de=P(I,[["render",ue]]);I.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const L=U({name:"FSDataTable",components:{FSLoadDataTable:de,FSDataTableUI:Q},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})},customSortRaws:{type:Object,required:!1,default:()=>({})}},setup(a){const{get:e,getting:s}=le(),{initialized:u,table:m,updateTable:d,computeTable:t,onTableCodeChange:l}=ne(),{update:o}=ie(),{getTable:i,setTable:c}=ae(),{debounce:D,cancel:R}=Y(),f=O(()=>t(a.customSorts,a.customSortRaws));console.log(JSON.stringify(f.value)),x(()=>{R(),h()});const h=()=>{d(o,c,a.tableCode)};return w(()=>a.tableCode,async()=>{l(e,i,a.tableCode),console.log(JSON.stringify(f.value))},{immediate:!0}),w(()=>m.value,()=>{m.value&&u.value&&D(h,a.debounceTime)},{deep:!0}),{gettingUserOrganisationTable:s,computedTable:f,initialized:u,table:m}}});function ce(a,e,s,u,m,d){const t=y("FSLoadDataTable"),l=y("FSDataTableUI");return!a.initialized||a.gettingUserOrganisationTable?(T(),S(t,{key:0})):(T(),S(l,A({key:1,"onUpdate:rowsPerPage":e[0]||(e[0]=o=>a.table.rowsPerPage=o),"onUpdate:filters":e[1]||(e[1]=o=>a.table.filters=o),"onUpdate:headers":e[2]||(e[2]=o=>a.table.headers=o),"onUpdate:sortBy":e[3]||(e[3]=o=>a.table.sortBy=o),"onUpdate:mode":e[4]||(e[4]=o=>a.table.mode=o),"onUpdate:page":e[5]||(e[5]=o=>a.table.page=o)},{...a.computedTable,...a.$attrs}),V({_:2},[q(a.$slots,(o,i)=>({name:i,fn:p(c=>[z(a.$slots,i,E(K(c)))])}))]),1040))}const Oe=P(L,[["render",ce]]);L.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"customSortRaws",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};export{Oe as F};
