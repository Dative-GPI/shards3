import{G as j}from"./deviceOrganisations.mock-4109c01b.js";import{d as u,E as R,e as z,G as T,H as P,I as w,J as v,P as A,q as a,o as Q,U as W,w as C,W as X,X as K,n as Y,O as Z,Q as ee,R as te}from"./vue.esm-bundler-7e157d2d.js";import{F as oe,u as ae}from"./FSDataTableUI-ae900ce8.js";import{a as re,V as ne}from"./FSImage-e59bbb4d.js";import{_ as D}from"./FSCol-7c29272b.js";import{_ as h}from"./FSRow-db172e67.js";import{u as se,C as ie}from"./useColors-4000b712.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-5057dcd1.js";import{C as de,a as L}from"./base-af34dbfa.js";import{S as me}from"./base-3cbdc314.js";import{F as pe}from"./FSGroupTileUI-9f2af696.js";import"./FSCard-38a28c75.js";import"./css-b03ad87d.js";import"./FSCheckbox-dbe8bba8.js";import"./FSIcon-0a8a35f6.js";import"./VIcon-f6cc7834.js";import"./color-e501cff3.js";import"./theme-67ffe9ae.js";import"./useRender-91b27a68.js";import"./tag-831e49a1.js";import"./FSSpan-225601c1.js";import"./useSlots-db3342e3.js";import"./FSText-de47605c.js";import"./FSSearchField-83b580ef.js";import"./FSTextField-f103263d.js";import"./VField-483d98e3.js";import"./index-bda29209.js";import"./transition-b4c159ac.js";import"./VInput-1a2cc3a3.js";import"./locale-c9528b1a.js";import"./density-c657e4cb.js";import"./loader-7867d039.js";import"./rounded-fe596c98.js";import"./forwardRefs-e658ad70.js";import"./VTextField-85193af7.js";import"./index-37e9655b.js";import"./FSButton-e381f01a.js";import"./useTranslations-cd0b055a.js";import"./FSSelectField-a97544c4.js";import"./VSelect-4be08003.js";import"./VOverlay-91bdeda0.js";import"./dimensions-a1a728d7.js";import"./display-84f7fe10.js";import"./lazy-55c06103.js";import"./router-cc531cb0.js";import"./VMenu-047a272f.js";import"./VDefaultsProvider-dcab85c0.js";import"./ssrBoot-ead68af0.js";import"./border-a826ffcd.js";import"./elevation-7fca9761.js";import"./index-feab7f97.js";import"./VImg-0bee75cb.js";import"./VDivider-4e0b4ac3.js";import"./resizeObserver-8feda973.js";import"./VSelectionControl-cccaa946.js";import"./VSlideGroup-89f382d0.js";import"./group-5cfad0cd.js";import"./FSFadeOut-c0d2154b.js";import"./FSChip-b6ff165a.js";import"./FSToggleSet-a8c51b34.js";import"./FSSlideGroup-d872c853.js";import"./FSButtonNextIcon-aa5b134f.js";import"./FSWrapGroup-040b0764.js";import"./VBtn-ca188bc5.js";import"./VProgressCircular-b2622fdf.js";import"./filter-bafbc75c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useOrganisationId-04f7e204.js";import"./lodash-569b8a6d.js";import"./FSColor-11036026.js";import"./FSTile-6194ff4d.js";class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ce{constructor(t){this.key=t.key,this.order=t.order}}class ge{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ue(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ce(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class be extends ge{constructor(t){super(t)}}const ve=()=>`${de()}/tables`,U=e=>`${ve()}/${encodeURIComponent(e)}`,$=new me("table",be).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),fe=L.get($),Se=L.update($),ye=()=>{const e=u(null),t=(n,l,...g)=>{s(),e.value=setTimeout(()=>n(...g),l)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},O=R({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:h},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,s,n,l,g){const r=T("FSLoader");return P(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(le),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(h,{align:"bottom-right"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(O,[["render",he]]);O.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=R({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:oe},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=fe(),{debounce:l,cancel:g}=ye(),{update:r}=Se(),d=ae(),p=u([]),i=u(null),m=u("table"),c=u(10),f=u({}),S=u(1),G=()=>{if(d&&d.currentRoute.value.query[e.tableCode]){const o=JSON.parse(d.currentRoute.value.query[e.tableCode]);p.value=o.columns,c.value=o.rowsPerPage,i.value=o.sortBy,m.value=o.mode,f.value=o.filters,S.value=o.page}else p.value=n.value.columns,c.value=n.value.rowsPerPage,i.value=n.value.sortBy,m.value=n.value.mode},q=o=>{p.value=o,l(b,5e3)},N=o=>{m.value=o,l(b,5e3)},E=o=>{i.value=o,l(b,5e3)},H=o=>{c.value=o,l(b,5e3)},M=o=>{f.value=o,F()},J=o=>{S.value=o,F()},b=()=>{F(),r(e.tableCode,{columns:p.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:i.value,mode:m.value})},F=()=>{d&&d.replace({query:{...d.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:p.value,rowsPerPage:c.value,sortBy:i.value,mode:m.value,filters:f.value,page:S.value})}})};return Q(()=>{t(e.tableCode)}),W(()=>{g(),b()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:s,innerHeaders:p,innerRowsPerPage:c,innerSortBy:i,innerMode:m,innerFilters:f,innerPage:S,updateHeaders:q,updateMode:N,updateSortBy:E,updateRowsPerPage:H,updateFilters:M,updatePage:J}}});function Te(e,t,s,n,l,g){const r=T("FSLoadDataTable"),d=T("FSDataTableUI");return e.getting?(P(),w(r,{key:0})):(P(),w(d,Y({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),X({_:2},[K(e.$slots,(p,i)=>({name:i,fn:v(m=>[Z(e.$slots,i,ee(te(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const x=B(V,[["render",Te]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Ht={title:"Foundation/Core/Lists/DataTable",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:j,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:x,FSGroupTileUI:pe},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(I=(k=y.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const Mt=["Variations"];export{y as Variations,Mt as __namedExportsOrder,Ht as default};
