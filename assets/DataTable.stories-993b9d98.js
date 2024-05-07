import{G as J}from"./deviceOrganisations.mock-ce959f60.js";import{j as k,e as z,I as F,J as w,K as U,L as v,M as W,A as a,d as u,a2 as X,w as O,Y,Z,B as Q,R as ee,W as te,X as oe}from"./vue.esm-bundler-41eda46b.js";import{u as ae}from"./vue-router-14708880.js";import{F as re,V as ne}from"./FSLoader-b9d57263.js";import{_ as D}from"./FSCol-282cc158.js";import{_ as S}from"./FSRow-1508d56d.js";import{u as se,C as ie}from"./useColors-c08b974a.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-b889274d.js";import{F as pe}from"./FSDataTableUI-128e869e.js";import{C as me}from"./base-72a78366.js";import{S as de}from"./serviceFactory-7552fe10.js";import{C as x}from"./composableFactory-00c2f0ee.js";import{u as ue}from"./useDebounce-c713d9ff.js";import{F as ce}from"./FSGroupTileUI-61c6f0f5.js";import"./css-35e8563f.js";import"./color-7b12579a.js";import"./theme-d4a333d5.js";import"./dimensions-dbe989d9.js";import"./elevation-74b749d9.js";import"./locale-396b54fa.js";import"./proxiedModel-ebe72836.js";import"./useRender-b120e115.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-9aa0fdbb.js";import"./FSIcon-6dc797d3.js";import"./VIcon-7bb7bc51.js";import"./tag-585bbcbd.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-6bfa0431.js";import"./density-23ec5fb8.js";import"./index-35b22454.js";import"./VLabel-674db0eb.js";import"./VInput-1f6e9963.js";import"./index-ad5199eb.js";import"./transition-87ba966b.js";import"./FSCard-dc76bdb2.js";import"./FSText-e9a7e0f6.js";import"./FSSearchField-f602e1c0.js";import"./FSTextField-53a1ad95.js";import"./VField-7c3f9689.js";import"./loader-912691d5.js";import"./VProgressCircular-e304a31d.js";import"./resizeObserver-ea3ec7d1.js";import"./rounded-d3e26840.js";import"./VDefaultsProvider-9f290faa.js";import"./forwardRefs-e658ad70.js";import"./FSButton-cdb730f5.js";import"./FSClickable-fa1cff73.js";import"./VTextField-414d8177.js";import"./index-2b17760e.js";import"./useTranslations-3bd97805.js";import"./FSSelectField-4d468f00.js";import"./FSDialogMenu-58b27c41.js";import"./VDialog-fd66d168.js";import"./VOverlay-aedbdfa0.js";import"./display-40264291.js";import"./lazy-c18d183e.js";import"./router-c7b42b5f.js";import"./FSRadioGroup-d55c6657.js";import"./FSFadeOut-d6aa1547.js";import"./VSelect-994061f1.js";import"./VMenu-40d1577e.js";import"./ssrBoot-5c61be23.js";import"./border-520a2ee2.js";import"./VImg-d6020fb6.js";import"./VDivider-50e3f59d.js";import"./VSlideGroup-d28ddfe3.js";import"./goto-e7ba55f0.js";import"./group-53103ce4.js";import"./FSChip-0962e240.js";import"./FSOptionGroup-865edb6f.js";import"./FSSlideGroup-515ac5df.js";import"./FSButtonNextIcon-ad2979e7.js";import"./FSWrapGroup-8ef956e3.js";import"./FSToggleSet-ddc99f4f.js";import"./VBtn-6a9dd5a0.js";import"./filter-fb6ce324.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./FSImage-9950e339.js";import"./base-0de1729e.js";import"./FSColor-1b3ef09e.js";import"./FSTile-d893437a.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const ye=()=>`${me()}/user-organisation-tables`,_=e=>`${ye()}/${encodeURIComponent(e)}`,$=new de("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),fe=x.get($),Se=x.update($),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,h,m){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:v(()=>[a(S,{align:"bottom-center"},{default:v(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:v(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:v(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:pe},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:r}=fe(),{update:h}=Se(),{debounce:m,cancel:n}=ue(),l=ae(),c=u([]),s=u(null),p=u("table"),d=u(10),P=u({}),y=u(1),K=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);d.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,p.value=o.mode,y.value=o.page}else r.value&&(d.value=r.value.rowsPerPage,s.value=r.value.sortByKey?{key:r.value.sortByKey,order:r.value.sortByOrder}:null,p.value=r.value.mode);r.value&&(c.value=r.value.columns)},q=o=>{c.value=o,m(g,5e3)},A=o=>{p.value=o,m(g,5e3)},E=o=>{s.value=o,m(g,5e3)},M=o=>{d.value=o,m(g,5e3)},H=o=>{P.value=o,T()},j=o=>{y.value=o,T()},g=()=>{var o,b;T(),h(e.tableCode,{columns:c.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:d.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value})},T=()=>{var o,b;l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({rowsPerPage:d.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value,page:y.value})}})};return X(()=>{n(),g()}),O(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),O(r,()=>{K()}),{gettingUserOrganisationTable:i,innerRowsPerPage:d,innerFilters:P,innerHeaders:c,innerSortBy:s,innerMode:p,innerPage:y,updateRowsPerPage:M,updateFilters:H,updateHeaders:q,updateSortBy:E,updateMode:A,updatePage:j}}});function Ce(e,t,i,r,h,m){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,Q({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Z(e.$slots,(c,s)=>({name:s,fn:v(p=>[ee(e.$slots,s,te(oe(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const V=L(N,[["render",Ce]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const oo={title:"Foundation/Core/Lists/DataTable",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{tableCode:"groups1",items:J,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:V,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
}`,...(I=(R=f.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const ao=["Variations"];export{f as Variations,ao as __namedExportsOrder,oo as default};
