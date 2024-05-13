import{G as J}from"./deviceOrganisations.mock-ce959f60.js";import{j as k,e as z,I as F,J as w,K as U,L as v,M as W,A as a,d as u,a2 as X,w as O,Y,Z,B as Q,R as ee,W as te,X as oe}from"./vue.esm-bundler-41eda46b.js";import{u as ae}from"./vue-router-14708880.js";import{F as re,V as ne}from"./FSLoader-f72d1bee.js";import{_ as D}from"./FSCol-282cc158.js";import{_ as S}from"./FSRow-1508d56d.js";import{u as se,C as ie}from"./useColors-c7c61044.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-19440644.js";import{F as pe}from"./FSDataTableUI-137ac24b.js";import{C as me}from"./base-72a78366.js";import{S as de}from"./serviceFactory-7552fe10.js";import{C as x}from"./composableFactory-00c2f0ee.js";import{u as ue}from"./useDebounce-c713d9ff.js";import{F as ce}from"./FSGroupTileUI-2d791346.js";import"./css-35e8563f.js";import"./color-92f22fcc.js";import"./theme-720d9fd7.js";import"./dimensions-9ac12c80.js";import"./elevation-c799c3f5.js";import"./locale-850d67a0.js";import"./proxiedModel-a34e17b7.js";import"./useRender-55bb8ab6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-fb1efdda.js";import"./FSIcon-33b1b769.js";import"./VIcon-1fd71622.js";import"./tag-984e6215.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-09c80f59.js";import"./density-a7a72377.js";import"./index-1668950c.js";import"./VLabel-484dc627.js";import"./VInput-8f2c12b1.js";import"./index-3d73431e.js";import"./transition-a4f3f1b4.js";import"./FSCard-5c9795f4.js";import"./FSText-833d800f.js";import"./FSSearchField-de6698b4.js";import"./FSTextField-aa274a38.js";import"./VField-095c5517.js";import"./loader-0baaac91.js";import"./VProgressCircular-9cdac648.js";import"./resizeObserver-5b9bfd59.js";import"./rounded-e85715e4.js";import"./VDefaultsProvider-b40931ed.js";import"./forwardRefs-e658ad70.js";import"./FSButton-143ca8d1.js";import"./FSClickable-142208e2.js";import"./VTextField-459f9fbf.js";import"./index-8f606737.js";import"./useTranslations-3bd97805.js";import"./FSSelectField-3d0ab411.js";import"./FSDialogMenu-848f1e87.js";import"./VDialog-84dcd607.js";import"./VOverlay-d8fd5084.js";import"./display-a55575e0.js";import"./lazy-5500c0d6.js";import"./router-4498b821.js";import"./scopeId-862e559a.js";import"./FSRadioGroup-06f5aad9.js";import"./FSFadeOut-134fdb27.js";import"./VSelect-343e1eb1.js";import"./VMenu-9445716e.js";import"./ssrBoot-5c61be23.js";import"./border-ac5393da.js";import"./VImg-8e58296a.js";import"./VDivider-6afe813a.js";import"./VSlideGroup-be2a9962.js";import"./goto-e333168a.js";import"./group-4938f20b.js";import"./FSChip-7cac3bef.js";import"./FSOptionGroup-e460c7a3.js";import"./FSSlideGroup-cf9a62df.js";import"./FSButtonNextIcon-c3cd7043.js";import"./FSWrapGroup-548245bc.js";import"./FSToggleSet-4a72ef42.js";import"./VBtn-3461afbb.js";import"./filter-ee19de16.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./FSImage-764aaae4.js";import"./base-0de1729e.js";import"./FSColor-a2958f4a.js";import"./FSTile-7453d1a4.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const ye=()=>`${me()}/user-organisation-tables`,_=e=>`${ye()}/${encodeURIComponent(e)}`,$=new de("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),fe=x.get($),Se=x.update($),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,h,m){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:v(()=>[a(S,{align:"bottom-center"},{default:v(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:v(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:v(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:pe},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:r}=fe(),{update:h}=Se(),{debounce:m,cancel:n}=ue(),l=ae(),c=u([]),s=u(null),p=u("table"),d=u(10),P=u({}),y=u(1),K=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);d.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,p.value=o.mode,y.value=o.page}else r.value&&(d.value=r.value.rowsPerPage,s.value=r.value.sortByKey?{key:r.value.sortByKey,order:r.value.sortByOrder}:null,p.value=r.value.mode);r.value&&(c.value=r.value.columns)},q=o=>{c.value=o,m(g,5e3)},A=o=>{p.value=o,m(g,5e3)},E=o=>{s.value=o,m(g,5e3)},M=o=>{d.value=o,m(g,5e3)},H=o=>{P.value=o,T()},j=o=>{y.value=o,T()},g=()=>{var o,b;T(),h(e.tableCode,{columns:c.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:d.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value})},T=()=>{var o,b;l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({rowsPerPage:d.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value,page:y.value})}})};return X(()=>{n(),g()}),O(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),O(r,()=>{K()}),{gettingUserOrganisationTable:i,innerRowsPerPage:d,innerFilters:P,innerHeaders:c,innerSortBy:s,innerMode:p,innerPage:y,updateRowsPerPage:M,updateFilters:H,updateHeaders:q,updateSortBy:E,updateMode:A,updatePage:j}}});function Ce(e,t,i,r,h,m){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,Q({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Z(e.$slots,(c,s)=>({name:s,fn:v(p=>[ee(e.$slots,s,te(oe(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const V=L(N,[["render",Ce]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ao={title:"Foundation/Core/Lists/DataTable",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{tableCode:"groups1",items:J,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:V,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var B,R,I;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(R=f.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const ro=["Variations"];export{f as Variations,ro as __namedExportsOrder,ao as default};
