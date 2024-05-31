import{G as z}from"./deviceOrganisations.mock-d3d292fb.js";import{f as k,g as W,D as C,E as U,F as w,G as b,W as Z,M as o,j as c,Z as J,w as R,U as Q,V as X,A as Y,R as ee,N as te,O as ae}from"./vue.esm-bundler-838daa40.js";import{u as oe}from"./vue-router-06cd44be.js";import{F as re,V as ne}from"./FSLoader-b364a14e.js";import{_ as D}from"./FSCol-44fe82a9.js";import{_ as y}from"./FSRow-753b58e5.js";import{u as se,C as ie}from"./useColors-95e93720.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-7ad9c022.js";import{F as me}from"./FSDataTableUI-0efbbd4e.js";import{C as pe}from"./base-ef43f4ed.js";import{S as de}from"./serviceFactory-2dfad3af.js";import{C as L}from"./composableFactory-5509dfbf.js";import{u as ue}from"./FSFadeOut-498299d0.js";import{F as ce}from"./FSGroupTileUI-91f57971.js";import{F as ge}from"./FSSlideGroup-f3252564.js";import{F as be}from"./FSTagGroup-e95e2bc5.js";import"./css-67cfec15.js";import"./color-3e53cf3d.js";import"./theme-f9f3e2d4.js";import"./dimensions-be952165.js";import"./elevation-c2192325.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./useRender-f6a4770d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./uuid-08309875.js";import"./FSCheckbox-ee47ff76.js";import"./FSIcon-1edeb40e.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./useRules-cda8e231.js";import"./VSelectionControl-b5e8c167.js";import"./density-e1cdced2.js";import"./index-a755b9d6.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./FSCard-f7958fe9.js";import"./FSText-204f6595.js";import"./FSSearchField-ebe32d86.js";import"./FSTextField-eda7ef73.js";import"./VField-2385223f.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./FSButton-919146d7.js";import"./FSClickable-427d6a9e.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSSelectField-a93f6613.js";import"./FSDialogMenu-722a6878.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-b8d7aeee.js";import"./VSelect-5b0f61d5.js";import"./VMenu-ec057191.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSDivider-baa39339.js";import"./FSChip-b7103f7b.js";import"./FSOptionGroup-489cbb39.js";import"./FSWrapGroup-51212cff.js";import"./FSToggleSet-e8a8c190.js";import"./VBtn-a5dad0d3.js";import"./filter-e8ac40d9.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-569b8a6d.js";import"./FSImage-5d8436c5.js";import"./base-0de1729e.js";import"./FSColor-4a9c9b96.js";import"./FSTile-a05697ca.js";import"./FSTag-b82cea55.js";class ve{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class fe{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ve(r)))??[]}}class Se extends fe{constructor(t){super(t)}}const ye=()=>`${pe()}/user-organisation-tables`,_=e=>`${ye()}/${encodeURIComponent(e)}`,x=new de("userOrgansiationTable",Se).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),Te=L.get(x),Fe=L.update(x),$=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:y},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:W(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,T,d){const n=C("FSLoader");return U(),w(D,{class:"fs-load-data-table",gap:"16px",style:Z(e.style)},{default:b(()=>[o(y,{align:"bottom-center"},{default:b(()=>[o(n,{variant:"input"}),o(n,{variant:"button"}),o(le),o(n,{variant:"button"}),o(n,{variant:"button"})]),_:1}),o(y,null,{default:b(()=>[o(n,{variant:"chip"}),o(n,{variant:"chip"}),o(n,{variant:"chip"})]),_:1}),o(ne,{type:"table-row-divider@10"}),o(y,{align:"center-right"},{default:b(()=>[o(n,{height:"16px",width:"100px"}),o(n,{width:"120px",height:["40px","36px"]}),o(n,{variant:"button"}),o(n,{variant:"button"}),o(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Ce=G($,[["render",he]]);$.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=k({name:"FSDataTable",components:{FSLoadDataTable:Ce,FSDataTableUI:me},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3}},setup(e){const{get:t,getting:i,entity:r}=Te(),{update:T}=Fe(),{debounce:d,cancel:n}=ue(),l=oe(),p=c([]),s=c(null),m=c("table"),u=c(10),v=c({}),f=c(1),E=()=>{if(l.currentRoute.value.meta.tables&&l.currentRoute.value.meta.tables[e.tableCode]){const a=l.currentRoute.value.meta.tables[e.tableCode];p.value=a.columns,u.value=a.rowsPerPage,s.value=a.sortBy,m.value=a.mode,v.value=a.filters,f.value=a.page}else r.value&&(p.value=r.value.columns,u.value=r.value.rowsPerPage,r.value.sortByKey&&r.value.sortByOrder&&(s.value={key:r.value.sortByKey,order:r.value.sortByOrder}),m.value=r.value.mode)},A=a=>{p.value=a,d(g,e.debounceTime)},K=a=>{m.value=a,d(g,e.debounceTime)},M=a=>{s.value=a,d(g,e.debounceTime)},q=a=>{u.value=a,d(g,e.debounceTime)},H=a=>{v.value=a,F()},j=a=>{f.value=a,F()},g=()=>{var a,P;F(),T(e.tableCode,{columns:p.value.map(h=>({columnId:h.columnId,hidden:h.hidden,index:h.index})),rowsPerPage:u.value,sortByKey:((a=s.value)==null?void 0:a.key)??null,sortByOrder:((P=s.value)==null?void 0:P.order)??null,mode:m.value})},F=()=>{l&&(l.currentRoute.value.meta.tables={...l.currentRoute.value.meta.tables,[e.tableCode]:{columns:p.value,filters:v.value,rowsPerPage:u.value,sortBy:s.value,mode:m.value,page:f.value}})};return J(()=>{n(),g()}),R(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),R(r,()=>{E()}),{gettingUserOrganisationTable:i,innerRowsPerPage:u,innerFilters:v,innerHeaders:p,innerSortBy:s,innerMode:m,innerPage:f,updateRowsPerPage:q,updateFilters:H,updateHeaders:A,updateSortBy:M,updateMode:K,updatePage:j}}});function Ue(e,t,i,r,T,d){const n=C("FSLoadDataTable"),l=C("FSDataTableUI");return e.gettingUserOrganisationTable?(U(),w(n,{key:0})):(U(),w(l,Y({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Q({_:2},[X(e.$slots,(p,s)=>({name:s,fn:b(m=>[ee(e.$slots,s,te(ae(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const N=G(V,[["render",Ue]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ia={title:"Foundation/Core/Lists/DataTable",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:N,FSGroupTileUI:ce,FSSlideGroup:ge,FSTagGroup:be},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          rowGap="4px"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              variant="standard"
              :color="getColor(item)"
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>`})};var O,I,B;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      FSGroupTileUI,
      FSSlideGroup,
      FSTagGroup
    },
    props: Object.keys(argTypes),
    setup() {
      const getColor = (row: any) => {
        if (row) {
          if (row.code === "number1") {
            return "primary";
          } else {
            return "success";
          }
        }
      };
      return {
        ...args,
        getColor
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          rowGap="4px"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              variant="standard"
              :color="getColor(item)"
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
}`,...(B=(I=S.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const la=["Variations"];export{S as Variations,la as __namedExportsOrder,ia as default};
