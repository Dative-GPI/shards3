var k=Object.defineProperty;var x=(a,e,n)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var u=(a,e,n)=>x(a,typeof e!="symbol"?e+"":e,n);import{b as T,d as C,c as P,y,z as F,A as S,C as f,P as N,N as i,U as q,w as U,B as V,O as A,m as z,K as E,L as K,M}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as G,V as H}from"./FSLoader-PksHGtEK.js";import{F as B}from"./FSCol-D8gLxM2E.js";import{_ as p}from"./FSRow-CSQtiyAx.js";import{u as j,C as J}from"./useColors-DnoeDx-P.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Q}from"./FSDataTableUI-jFJeeCeX.js";import{C as W}from"./base-DCZJTx46.js";import{S as X}from"./serviceFactory-DTTRhbEw.js";import{C as I}from"./composableFactory-H3XPfy7N.js";import{_ as Y}from"./lodash-BiW_TGGX.js";import{u as Z}from"./FSFadeOut-B5r2PNGg.js";class ee{constructor(e){u(this,"columnId");u(this,"text");u(this,"value");u(this,"sortable");u(this,"filterable");u(this,"index");u(this,"hidden");this.columnId=e.columnId,this.text=e.text,this.value=e.value,this.sortable=e.sortable,this.filterable=e.filterable,this.index=e.index,this.hidden=e.hidden}}class ae{constructor(e){u(this,"id");u(this,"code");u(this,"columns");u(this,"mode");u(this,"rowsPerPage");u(this,"sortByKey");u(this,"sortByOrder");var n;this.id=e.id,this.code=e.code,this.mode=e.mode,this.rowsPerPage=e.rowsPerPage,this.sortByKey=e.sortByKey,this.sortByOrder=e.sortByOrder,this.columns=((n=e.columns)==null?void 0:n.map(c=>new ee(c)))??[]}}class te extends ae{constructor(e){super(e)}}class le{constructor(){u(this,"called",!1);u(this,"result",null)}call(e){return this.called?this.result:(this.called=!0,this.result=e(),this.result)}}const g=T({}),oe=new le,se=()=>oe.call(()=>({getTable:n=>g.value[n]!=null?g.value[n]:null,setTable:(n,c)=>{g.value[n]={...c}}})),ne=()=>`${W()}/user-organisation-tables`,h=a=>`${ne()}/${encodeURIComponent(a)}`,re=()=>{const a=T(!1),e=T(null);return{initialized:a,table:e,onTableCodeChange:async(s,o,m,l="table")=>{let d=!1;if(m){const t=o(m);if(t)e.value=t,d=!0;else try{const r=await s(m);r.value&&(e.value={headers:r.value.columns,sortBy:{key:r.value.sortByKey,order:r.value.sortByOrder},mode:r.value.mode??l,rowsPerPage:r.value.rowsPerPage,showFilters:!1,filters:{},page:1},d=!0)}catch{}}d||(e.value={headers:[],mode:null,sortBy:null,rowsPerPage:10,showFilters:!1,filters:{},page:1}),a.value=!0},computeTable:(s,o="table",m=[])=>{var l,d;return{...e.value,mode:((l=e.value)==null?void 0:l.mode)??o,headers:Y.sortBy((d=e.value)==null?void 0:d.headers.concat(m.filter(t=>{var r;return!((r=e.value)!=null&&r.headers.map(v=>v.value).includes(t.value))})),"index").map((t,r)=>({...t,index:r,fixedFilters:t.value&&s[t.value]&&s[t.value].fixedFilters||null,methodFilter:t.value&&s[t.value]&&s[t.value].methodFilter||null,methodFilterRaw:t.value&&s[t.value]&&s[t.value].methodFilterRaw||null,sort:t.value&&s[t.value]&&s[t.value].sort||null,sortRaw:t.value&&s[t.value]&&s[t.value].sortRaw||null,innerValue:t.value&&s[t.value]&&s[t.value].innerValue||null}))}},updateTable:(s,o,m,l="table")=>{var d,t;m&&e.value&&(o(m,e.value),s(m,{columns:e.value.headers.map(r=>({columnId:r.columnId,hidden:r.hidden,index:r.index})),rowsPerPage:e.value.rowsPerPage,sortByKey:((d=e.value.sortBy)==null?void 0:d.key)??null,sortByOrder:((t=e.value.sortBy)==null?void 0:t.order)??null,mode:e.value.mode??l}))}}},L=new X("userOrgansiationTable",te).create(a=>a.build(a.addGet(h),a.addUpdate(h),a.addNotify())),ue=I.get(L),ie=I.update(L),$=C({name:"FSLoadDataTable",components:{FSLoader:G,FSCol:B,FSRow:p},setup(){const{getColors:a}=j(),e=a(J.Background);return{style:P(()=>({"--fs-load-data-table-background-color":e.base}))}}});function de(a,e,n,c,b,s){const o=y("FSLoader");return F(),S(B,{class:"fs-load-data-table",gap:"16px",style:N(a.style)},{default:f(()=>[i(p,{align:"bottom-center"},{default:f(()=>[i(o,{variant:"input"}),i(o,{variant:"button"}),i(p,{align:"center-right"},{default:f(()=>[i(o,{variant:"button"}),i(o,{variant:"button"})]),_:1})]),_:1}),i(p,null,{default:f(()=>[i(o,{variant:"chip"}),i(o,{variant:"chip"}),i(o,{variant:"chip"})]),_:1}),i(H,{type:"table-row-divider@10"}),i(p,{align:"center-right"},{default:f(()=>[i(o,{height:"16px",width:"100px"}),i(o,{width:"120px",height:["40px","36px"]}),i(o,{variant:"button"}),i(o,{variant:"button"}),i(o,{variant:"button"})]),_:1})]),_:1},8,["style"])}const me=D($,[["render",de]]);$.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const O=C({name:"FSDataTable",components:{FSLoadDataTable:me,FSDataTableUI:Q},props:{defaultMode:{type:String,required:!1,default:"table"},tableCode:{type:String,required:!1,default:null},debounceTime:{type:Number,required:!1,default:1e3},extraHeaders:{type:Array,required:!1,default:()=>[]},headersOptions:{type:Object,required:!1,default:()=>({})}},setup(a){const{get:e,getting:n}=ue(),{initialized:c,table:b,updateTable:s,computeTable:o,onTableCodeChange:m}=re(),{update:l}=ie(),{getTable:d,setTable:t}=se(),{debounce:r,cancel:v}=Z(),R=P(()=>o(a.headersOptions,a.defaultMode,a.extraHeaders));q(()=>{v(),w()});const w=()=>{a.tableCode&&s(l,t,a.tableCode,a.defaultMode)};return U(()=>a.tableCode,async()=>{m(e,d,a.tableCode,a.defaultMode)},{immediate:!0}),U(()=>b.value?{...b.value}:null,(be,_)=>{b.value&&_&&c.value&&r(w,a.debounceTime)},{deep:!0}),{gettingUserOrganisationTable:n,computedTable:R,initialized:c,table:b}}});function ce(a,e,n,c,b,s){const o=y("FSLoadDataTable"),m=y("FSDataTableUI");return a.$props.tableCode&&!a.initialized||a.gettingUserOrganisationTable||!a.table?(F(),S(o,{key:0})):(F(),S(m,z({key:1,"onUpdate:rowsPerPage":e[0]||(e[0]=l=>a.table.rowsPerPage=l),"onUpdate:showFilters":e[1]||(e[1]=l=>a.table.showFilters=l),"onUpdate:filters":e[2]||(e[2]=l=>a.table.filters=l),"onUpdate:headers":e[3]||(e[3]=l=>a.table.headers=l),"onUpdate:sortBy":e[4]||(e[4]=l=>a.table.sortBy=l),"onUpdate:mode":e[5]||(e[5]=l=>a.table.mode=l),"onUpdate:page":e[6]||(e[6]=l=>a.table.page=l)},{...a.computedTable,...a.$attrs}),V({_:2},[A(a.$slots,(l,d)=>({name:d,fn:f(t=>[E(a.$slots,d,K(M(t)))])}))]),1040))}const Be=D(O,[["render",ce]]);O.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"defaultMode",values:["table","iterator"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"table"'}},{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"extraHeaders",type:{name:"FSDataTableColumn[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"headersOptions",type:{name:"{ [key: string]: Partial<FSDataTableColumn> }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};export{Be as F};
