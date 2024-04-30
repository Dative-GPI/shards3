import{G as z}from"./deviceOrganisations.mock-0d7738ce.js";import{j as k,e as J,I as F,J as w,K as U,L as v,M as W,z as a,d as u,a4 as X,w as O,_ as Y,Y as Q,A as Z,R as ee,W as te,X as oe}from"./vue.esm-bundler-82a4b45a.js";import{u as ae}from"./vue-router-49468917.js";import{F as re,V as ne}from"./FSLoader-5be1941d.js";import{_ as D}from"./FSCol-8326ac62.js";import{_ as S}from"./FSRow-2ccfd21b.js";import{u as se,C as ie}from"./useColors-698e8610.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-dfdceece.js";import{F as pe}from"./FSDataTableUI-d5a0981d.js";import{C as de}from"./base-ec6565f2.js";import{S as me}from"./serviceFactory-7552fe10.js";import{C as x}from"./composableFactory-2f513de5.js";import{u as ue}from"./useDebounce-d5680b13.js";import{F as ce}from"./FSGroupTileUI-c7214263.js";import"./css-c39c4a6e.js";import"./color-616211f8.js";import"./theme-380662da.js";import"./dimensions-7b60e06e.js";import"./elevation-2177f5c6.js";import"./locale-c97048b2.js";import"./proxiedModel-6f61b602.js";import"./useRender-9b5fad83.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-4b8da1d3.js";import"./FSIcon-97799824.js";import"./VIcon-cdae09b0.js";import"./tag-c823df72.js";import"./FSSpan-4bf272e8.js";import"./useSlots-f55d2513.js";import"./useRules-7b0f86fa.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./density-d6a10252.js";import"./index-0f4b4beb.js";import"./VLabel-db8bd06b.js";import"./VInput-6edbe327.js";import"./index-7dc37899.js";import"./transition-0cde2f94.js";import"./FSCard-ebbda5de.js";import"./FSText-4ee7bf26.js";import"./FSSearchField-c7ab8b04.js";import"./FSTextField-ffa06949.js";import"./FSButton-c71cf6ce.js";import"./FSClickable-a4cc0438.js";import"./VProgressCircular-86578fb4.js";import"./resizeObserver-bcc9c76e.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./loader-80aadcba.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./useTranslations-06e4f6c5.js";import"./FSSelectField-91eb2e6d.js";import"./VSelect-fca10f65.js";import"./VOverlay-e517ca89.js";import"./display-8a1f63da.js";import"./lazy-ee12d092.js";import"./router-7318af59.js";import"./VMenu-9dbbffaa.js";import"./ssrBoot-4291a4a7.js";import"./border-7fe0702c.js";import"./VImg-a45e529b.js";import"./VDivider-46910f72.js";import"./VSlideGroup-4309af86.js";import"./group-a18b2437.js";import"./FSFadeOut-180aedd3.js";import"./FSChip-cd8da37e.js";import"./FSOptionGroup-d8d8a796.js";import"./FSSlideGroup-35b11b76.js";import"./FSButtonNextIcon-3fcfc95d.js";import"./FSWrapGroup-727178e5.js";import"./FSToggleSet-7d54313a.js";import"./VBtn-68d719d2.js";import"./filter-4073c1af.js";import"./useAppOrganisationId-8a62b6ee.js";import"./lodash-569b8a6d.js";import"./FSImage-be8cb919.js";import"./base-0de1729e.js";import"./FSColor-fa3a5a9c.js";import"./FSTile-0d1493a0.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const ye=()=>`${de()}/user-organisation-tables`,_=e=>`${ye()}/${encodeURIComponent(e)}`,$=new me("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),fe=x.get($),Se=x.update($),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,h,d){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:v(()=>[a(S,{align:"bottom-center"},{default:v(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:v(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:v(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:pe},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:r}=fe(),{update:h}=Se(),{debounce:d,cancel:n}=ue(),l=ae(),c=u([]),s=u(null),p=u("table"),m=u(10),P=u({}),y=u(1),K=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);m.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,p.value=o.mode,y.value=o.page}else r.value&&(m.value=r.value.rowsPerPage,s.value=r.value.sortByKey?{key:r.value.sortByKey,order:r.value.sortByOrder}:null,p.value=r.value.mode);r.value&&(c.value=r.value.columns)},q=o=>{c.value=o,d(g,5e3)},A=o=>{p.value=o,d(g,5e3)},E=o=>{s.value=o,d(g,5e3)},M=o=>{m.value=o,d(g,5e3)},H=o=>{P.value=o,T()},j=o=>{y.value=o,T()},g=()=>{var o,b;T(),h(e.tableCode,{columns:c.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:m.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value})},T=()=>{var o,b;l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({rowsPerPage:m.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value,page:y.value})}})};return X(()=>{n(),g()}),O(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),O(r,()=>{K()}),{gettingUserOrganisationTable:i,innerRowsPerPage:m,innerFilters:P,innerHeaders:c,innerSortBy:s,innerMode:p,innerPage:y,updateRowsPerPage:M,updateFilters:H,updateHeaders:q,updateSortBy:E,updateMode:A,updatePage:j}}});function Ce(e,t,i,r,h,d){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,Z({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Q(e.$slots,(c,s)=>({name:s,fn:v(p=>[ee(e.$slots,s,te(oe(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const V=L(N,[["render",Ce]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Zt={title:"Foundation/Core/Lists/DataTable",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:V,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var R,B,I;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(B=f.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const eo=["Variations"];export{f as Variations,eo as __namedExportsOrder,Zt as default};
