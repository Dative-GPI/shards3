import{G as z}from"./deviceOrganisations.mock-4109c01b.js";import{d as u,g as R,j as J,H as T,I as P,J as w,K as v,S as A,z as a,o as K,a3 as Q,w as C,W,X,x as Y,P as Z,Q as ee,R as te}from"./vue.esm-bundler-72feb788.js";import{u as oe}from"./vue-router-c36f9e85.js";import{a as ae,V as re}from"./FSImage-cea37f0b.js";import{_ as D}from"./FSCol-df85c70b.js";import{_ as h}from"./FSRow-ae483077.js";import{u as ne,C as se}from"./useColors-1fcec14a.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-9ee9e868.js";import{F as le}from"./FSDataTableUI-8ef9aca7.js";import{C as de,a as L}from"./base-a359e707.js";import{S as me}from"./base-3cbdc314.js";import{F as pe}from"./FSGroupTileUI-552d8f32.js";import"./css-a2b3c3ca.js";import"./color-564bd659.js";import"./theme-1fe57d71.js";import"./dimensions-e9edc3f7.js";import"./elevation-2e2adb9f.js";import"./locale-8250cc46.js";import"./useRender-c1d2bc01.js";import"./VImg-0c08cfd1.js";import"./rounded-1c8889d4.js";import"./transition-b3b454fb.js";import"./index-348a046d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCard-692a57a9.js";import"./FSCheckbox-69ba5066.js";import"./FSIcon-f69578a9.js";import"./VIcon-cb64ea3c.js";import"./tag-39781742.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./FSText-74aefad9.js";import"./FSSearchField-c4dc2a8e.js";import"./FSTextField-a3e482ba.js";import"./VField-aa8d0612.js";import"./index-71844868.js";import"./VInput-273bf99c.js";import"./density-9047996c.js";import"./loader-d80eacaf.js";import"./forwardRefs-e658ad70.js";import"./VTextField-4b986ab3.js";import"./FSButton-051e4a14.js";import"./useTranslations-3d964ba1.js";import"./FSSelectField-35680440.js";import"./VSelect-19549f44.js";import"./VOverlay-b54f5de0.js";import"./display-23a66237.js";import"./lazy-5ceada29.js";import"./router-9d57a94c.js";import"./VMenu-de5b29f3.js";import"./VDefaultsProvider-979dcd64.js";import"./ssrBoot-76ac3587.js";import"./border-9f8612cb.js";import"./index-980d11d4.js";import"./VDivider-c862867d.js";import"./resizeObserver-297ec059.js";import"./VSelectionControl-808f9c38.js";import"./VSlideGroup-be21164f.js";import"./group-3c229d66.js";import"./FSFadeOut-3ecced89.js";import"./FSChip-2e6fd25d.js";import"./FSToggleSet-46bf7797.js";import"./FSSlideGroup-2334182c.js";import"./FSButtonNextIcon-6cdd0570.js";import"./FSWrapGroup-8ca5722e.js";import"./VBtn-146a85cd.js";import"./VProgressCircular-1f974666.js";import"./filter-95ebf9d1.js";import"./useOrganisationId-5a91463c.js";import"./lodash-569b8a6d.js";import"./FSColor-5b014c1e.js";import"./FSTile-e6e91e9b.js";class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ce{constructor(t){this.key=t.key,this.order=t.order}}class ge{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ue(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ce(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class be extends ge{constructor(t){super(t)}}const ve=()=>`${de()}/tables`,U=e=>`${ve()}/${encodeURIComponent(e)}`,$=new me("table",be).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),fe=L.get($),Se=L.update($),ye=()=>{const e=u(null),t=(n,l,...g)=>{s(),e.value=setTimeout(()=>n(...g),l)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},V=R({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:h},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,s,n,l,g){const r=T("FSLoader");return P(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(h,{align:"bottom-right"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(V,[["render",he]]);V.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const x=R({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=fe(),{debounce:l,cancel:g}=ye(),{update:r}=Se(),d=oe(),p=u([]),i=u(null),m=u("table"),c=u(10),f=u({}),S=u(1),G=()=>{if(d&&d.currentRoute.value.query[e.tableCode]){const o=JSON.parse(d.currentRoute.value.query[e.tableCode]);p.value=o.columns,c.value=o.rowsPerPage,i.value=o.sortBy,m.value=o.mode,f.value=o.filters,S.value=o.page}else p.value=n.value.columns,c.value=n.value.rowsPerPage,i.value=n.value.sortBy,m.value=n.value.mode},N=o=>{p.value=o,l(b,5e3)},q=o=>{m.value=o,l(b,5e3)},E=o=>{i.value=o,l(b,5e3)},H=o=>{c.value=o,l(b,5e3)},M=o=>{f.value=o,F()},j=o=>{S.value=o,F()},b=()=>{F(),r(e.tableCode,{columns:p.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:i.value,mode:m.value})},F=()=>{d&&d.replace({query:{...d.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:p.value,rowsPerPage:c.value,sortBy:i.value,mode:m.value,filters:f.value,page:S.value})}})};return K(()=>{t(e.tableCode)}),Q(()=>{g(),b()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:s,innerHeaders:p,innerRowsPerPage:c,innerSortBy:i,innerMode:m,innerFilters:f,innerPage:S,updateHeaders:N,updateMode:q,updateSortBy:E,updateRowsPerPage:H,updateFilters:M,updatePage:j}}});function Te(e,t,s,n,l,g){const r=T("FSLoadDataTable"),d=T("FSDataTableUI");return e.getting?(P(),w(r,{key:0})):(P(),w(d,Y({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),W({_:2},[X(e.$slots,(p,i)=>({name:i,fn:v(m=>[Z(e.$slots,i,ee(te(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(x,[["render",Te]]);x.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Mt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:pe},props:Object.keys(t),setup(){return{...e}},template:`
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
