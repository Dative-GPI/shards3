import{G as z}from"./deviceOrganisations.mock-0893e91a.js";import{d as u,g as R,j as J,H as T,I as P,J as w,K as v,S as A,z as a,o as K,a3 as Q,w as C,W,X,x as Y,P as Z,Q as ee,R as te}from"./vue.esm-bundler-72feb788.js";import{u as oe}from"./vue-router-c36f9e85.js";import{a as ae,V as re}from"./FSImage-6ab5a147.js";import{_ as D}from"./FSCol-df85c70b.js";import{_ as h}from"./FSRow-ae483077.js";import{u as ne,C as se}from"./useColors-6caee65d.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-3481543d.js";import{F as le}from"./FSDataTableUI-d27cb1e2.js";import{C as de,a as L}from"./base-a359e707.js";import{S as pe}from"./base-3cbdc314.js";import{F as me}from"./FSGroupTileUI-4caf5213.js";import"./css-a2b3c3ca.js";import"./color-20078b56.js";import"./theme-dfac1c87.js";import"./dimensions-5bfc9d84.js";import"./elevation-4bc1fa4c.js";import"./locale-6e33b40c.js";import"./useRender-dfda60e7.js";import"./VImg-1614ce10.js";import"./rounded-98e7d656.js";import"./transition-2c0bfa39.js";import"./index-2f035a23.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCard-619e60a0.js";import"./FSCheckbox-939ceb75.js";import"./FSIcon-072b4761.js";import"./VIcon-7b60b4e1.js";import"./tag-4c4a02ef.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./FSText-c27aeba2.js";import"./FSSearchField-d86ece0a.js";import"./FSTextField-a3210dbc.js";import"./VField-127bd01f.js";import"./index-1ae89502.js";import"./VInput-d8a8ef30.js";import"./density-849fb56f.js";import"./loader-dcf07c4a.js";import"./forwardRefs-e658ad70.js";import"./VTextField-6c3de945.js";import"./FSButton-ead951eb.js";import"./useTranslations-3d964ba1.js";import"./FSSelectField-e977292e.js";import"./VSelect-a873d51b.js";import"./VOverlay-d9e6b90e.js";import"./display-b99e0d28.js";import"./lazy-b3876034.js";import"./router-cb1ba247.js";import"./VMenu-b3b1ac01.js";import"./VDefaultsProvider-45b29f9e.js";import"./ssrBoot-76ac3587.js";import"./border-0ea674af.js";import"./index-4726a84c.js";import"./VDivider-6bf45fec.js";import"./resizeObserver-a19810f7.js";import"./VSelectionControl-00322409.js";import"./VSlideGroup-57d46989.js";import"./group-6fcd4563.js";import"./FSFadeOut-2276ef77.js";import"./FSChip-59964093.js";import"./FSToggleSet-6484fcae.js";import"./FSSlideGroup-9a7a32a7.js";import"./FSButtonNextIcon-2ebbb10e.js";import"./FSWrapGroup-51cf1a7c.js";import"./VBtn-226d1c53.js";import"./VProgressCircular-aa529168.js";import"./filter-19562aa6.js";import"./useOrganisationId-5a91463c.js";import"./lodash-569b8a6d.js";import"./FSColor-7faef332.js";import"./FSTile-72e14b6f.js";class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ce{constructor(t){this.key=t.key,this.order=t.order}}class ge{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ue(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ce(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class be extends ge{constructor(t){super(t)}}const ve=()=>`${de()}/tables`,U=e=>`${ve()}/${encodeURIComponent(e)}`,$=new pe("table",be).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),fe=L.get($),Se=L.update($),ye=()=>{const e=u(null),t=(n,l,...g)=>{s(),e.value=setTimeout(()=>n(...g),l)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},x=R({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:h},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,s,n,l,g){const r=T("FSLoader");return P(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:v(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(x,[["render",he]]);x.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=R({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=fe(),{debounce:l,cancel:g}=ye(),{update:r}=Se(),d=oe(),m=u([]),i=u(null),p=u("table"),c=u(10),f=u({}),S=u(1),G=()=>{if(d&&d.currentRoute.value.query[e.tableCode]){const o=JSON.parse(d.currentRoute.value.query[e.tableCode]);m.value=o.columns,c.value=o.rowsPerPage,i.value=o.sortBy,p.value=o.mode,f.value=o.filters,S.value=o.page}else m.value=n.value.columns,c.value=n.value.rowsPerPage,i.value=n.value.sortBy,p.value=n.value.mode},N=o=>{m.value=o,l(b,5e3)},q=o=>{p.value=o,l(b,5e3)},E=o=>{i.value=o,l(b,5e3)},H=o=>{c.value=o,l(b,5e3)},M=o=>{f.value=o,F()},j=o=>{S.value=o,F()},b=()=>{F(),r(e.tableCode,{columns:m.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:i.value,mode:p.value})},F=()=>{d&&d.replace({query:{...d.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:c.value,sortBy:i.value,mode:p.value,filters:f.value,page:S.value})}})};return K(()=>{t(e.tableCode)}),Q(()=>{g(),b()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:s,innerHeaders:m,innerRowsPerPage:c,innerSortBy:i,innerMode:p,innerFilters:f,innerPage:S,updateHeaders:N,updateMode:q,updateSortBy:E,updateRowsPerPage:H,updateFilters:M,updatePage:j}}});function Te(e,t,s,n,l,g){const r=T("FSLoadDataTable"),d=T("FSDataTableUI");return e.getting?(P(),w(r,{key:0})):(P(),w(d,Y({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),W({_:2},[X(e.$slots,(m,i)=>({name:i,fn:v(p=>[Z(e.$slots,i,ee(te(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(V,[["render",Te]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Mt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:me},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :showSelect="true"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #[\`item.tile\`]="{ item, toggleSelect }">
            <FSGroupTileUI
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>`})};var _,k,I;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    args: {
      tableCode: "groups1",
      items: GROUPS,
      value: [],
      itemTo: (item: any) => ({
        name: 'group',
        params: {
          groupId: item.id
        }
      }),
      clickRow: () => {
        console.log("clicked");
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDataTable,
      FSGroupTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :showSelect="true"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #[\\\`item.tile\\\`]="{ item, toggleSelect }">
            <FSGroupTileUI
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>\`
  })
}`,...(I=(k=y.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const jt=["Variations"];export{y as Variations,jt as __namedExportsOrder,Mt as default};
