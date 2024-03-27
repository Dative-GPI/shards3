import{G as z}from"./deviceOrganisations.mock-89cf74cf.js";import{g as I,j as J,J as P,K as T,L as w,M as b,V as A,z as a,d as c,o as K,a1 as X,w as C,X as Y,Y as Q,x as W,R as Z,S as ee,U as te}from"./vue.esm-bundler-e580dd1f.js";import{u as oe}from"./vue-router-092e674d.js";import{a as ae,V as re}from"./FSImage-01457e3f.js";import{_ as D}from"./FSCol-fcea4dc1.js";import{_ as y}from"./FSRow-50904d6e.js";import{u as ne,C as se}from"./useColors-b2cb658b.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-9103d4e2.js";import{F as le}from"./FSDataTableUI-afd32312.js";import{C as pe}from"./base-660ee373.js";import{S as me}from"./base-7f65d26c.js";import{C as L}from"./composableFactory-a83bc1a8.js";import{u as de}from"./FSFadeOut-091b3ab3.js";import{F as ue}from"./FSGroupTileUI-03b2d35c.js";import"./css-ca36ed75.js";import"./color-0af6d6f5.js";import"./theme-a3bb880e.js";import"./dimensions-10c7935e.js";import"./elevation-02492a14.js";import"./locale-405fbfb1.js";import"./proxiedModel-3aca154f.js";import"./useRender-16acb9c4.js";import"./VImg-07ac5889.js";import"./rounded-2552fce2.js";import"./transition-7d6b8783.js";import"./index-e90df875.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-29a29c7b.js";import"./FSIcon-4fed0819.js";import"./VIcon-bb9e7f8a.js";import"./tag-fa7badbe.js";import"./FSSpan-73185be3.js";import"./useSlots-a039f59b.js";import"./useRules-a8018b0f.js";import"./VCheckboxBtn-5f6dc991.js";import"./VSelectionControl-682aab8c.js";import"./density-be1d42ad.js";import"./index-a22223d0.js";import"./VLabel-a546dd45.js";import"./VInput-1e999169.js";import"./index-96d842ab.js";import"./FSCard-c77c66af.js";import"./FSText-62d9f6c8.js";import"./FSSearchField-bbb398a7.js";import"./FSTextField-8126a87a.js";import"./VTextField-ce85aec3.js";import"./VField-1fbd78f2.js";import"./loader-8bc08e66.js";import"./intersectionObserver-4acce169.js";import"./forwardRefs-e658ad70.js";import"./FSButton-9fb570ca.js";import"./VProgressCircular-88630010.js";import"./resizeObserver-88f5705d.js";import"./useTranslations-873b030c.js";import"./FSSelectField-ae46c32c.js";import"./VSelect-a9f4ba15.js";import"./VOverlay-1db7e4ae.js";import"./display-0f118c60.js";import"./lazy-075f19a9.js";import"./router-1d334446.js";import"./VMenu-f3c71475.js";import"./VDefaultsProvider-5c112428.js";import"./ssrBoot-d5661322.js";import"./border-6c565bcc.js";import"./VDivider-c7fbbe49.js";import"./VSlideGroup-3258cc7a.js";import"./group-1e6e82bd.js";import"./FSChip-1784ba7e.js";import"./FSOptionGroup-572e7076.js";import"./FSSlideGroup-67eb4f42.js";import"./FSButtonNextIcon-55cd08df.js";import"./FSWrapGroup-02d939f2.js";import"./FSToggleSet-245ad5f1.js";import"./VBtn-40f45ac1.js";import"./filter-a3b8f5ca.js";import"./useOrganisationId-90282062.js";import"./lodash-569b8a6d.js";import"./FSColor-4e0e4cb4.js";import"./FSTile-163f8b16.js";class ce{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ge{constructor(t){this.key=t.key,this.order=t.order}}class be{constructor(t){var p;this.id=t.id,this.code=t.code,this.columns=((p=t.columns)==null?void 0:p.map(n=>new ce(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ge(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${pe()}/tables`,U=e=>`${fe()}/${encodeURIComponent(e)}`,$=new me("table",ve).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),Se=L.get($),ye=L.update($),x=I({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:y},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,p,n,d,h){const r=P("FSLoader");return T(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:b(()=>[a(y,{align:"bottom-center"},{default:b(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(y,null,{default:b(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(y,{align:"center-right"},{default:b(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(x,[["render",he]]);x.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=I({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:p,entity:n}=Se(),{debounce:d,cancel:h}=de(),{update:r}=ye(),i=oe(),m=c([]),s=c(null),l=c("table"),u=c(10),v=c({}),f=c(1),G=()=>{if(i&&i.currentRoute.value.query[e.tableCode]){const o=JSON.parse(i.currentRoute.value.query[e.tableCode]);m.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortBy,l.value=o.mode,v.value=o.filters,f.value=o.page}else m.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortBy,l.value=n.value.mode},N=o=>{m.value=o,d(g,5e3)},q=o=>{l.value=o,d(g,5e3)},M=o=>{s.value=o,d(g,5e3)},E=o=>{u.value=o,d(g,5e3)},H=o=>{v.value=o,F()},j=o=>{f.value=o,F()},g=()=>{F(),r(e.tableCode,{columns:m.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:u.value,sortBy:s.value,mode:l.value})},F=()=>{i&&i.replace({query:{...i.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:u.value,sortBy:s.value,mode:l.value,filters:v.value,page:f.value})}})};return K(()=>{t(e.tableCode)}),X(()=>{h(),g()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:p,innerHeaders:m,innerRowsPerPage:u,innerSortBy:s,innerMode:l,innerFilters:v,innerPage:f,updateHeaders:N,updateMode:q,updateSortBy:M,updateRowsPerPage:E,updateFilters:H,updatePage:j}}});function Pe(e,t,p,n,d,h){const r=P("FSLoadDataTable"),i=P("FSDataTableUI");return e.getting?(T(),w(r,{key:0})):(T(),w(i,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Q(e.$slots,(m,s)=>({name:s,fn:b(l=>[Z(e.$slots,s,ee(te(l)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(V,[["render",Pe]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Yt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:ue},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})};var _,k,R;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(k=S.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const Qt=["Variations"];export{S as Variations,Qt as __namedExportsOrder,Yt as default};
