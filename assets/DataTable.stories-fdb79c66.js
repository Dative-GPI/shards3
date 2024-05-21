import{G as z}from"./deviceOrganisations.mock-ce959f60.js";import{j as k,e as J,I as F,J as w,K as U,L as b,M as W,A as a,d as c,$ as X,w as R,Y,Z,B as Q,R as ee,W as te,X as oe}from"./vue.esm-bundler-7c237656.js";import{u as ae}from"./vue-router-0a0ca0f7.js";import{F as re,V as ne}from"./FSLoader-ef3e94c6.js";import{_ as D}from"./FSCol-76ddd6d9.js";import{_ as S}from"./FSRow-0e15f868.js";import{u as se,C as ie}from"./useColors-0c4b5dc8.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-84430db1.js";import{F as me}from"./FSDataTableUI-574bcca8.js";import{C as pe}from"./base-cc0281c0.js";import{S as de}from"./serviceFactory-7552fe10.js";import{C as $}from"./composableFactory-08360cd4.js";import{u as ue}from"./useDebounce-3b8c8385.js";import{F as ce}from"./FSGroupTileUI-25bfe0d4.js";import"./css-aa928277.js";import"./color-8a2bce37.js";import"./theme-4dbecb8e.js";import"./dimensions-cb2de721.js";import"./elevation-785d47fb.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./useRender-e0e7d9de.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-da06ce33.js";import"./FSIcon-5ad13b7e.js";import"./VIcon-0c1eaee2.js";import"./tag-7dab75b7.js";import"./FSSpan-661158f8.js";import"./useSlots-338ea3fb.js";import"./useRules-30f7bcaa.js";import"./VSelectionControl-6d75a1db.js";import"./density-a5226544.js";import"./index-521b9cff.js";import"./VLabel-236d5849.js";import"./VInput-eed42ecd.js";import"./index-09a2de27.js";import"./transition-e42cd317.js";import"./FSCard-c7069f2a.js";import"./FSText-fda370f0.js";import"./FSSearchField-3d7067f5.js";import"./FSTextField-413ac9ce.js";import"./VField-86f2cf98.js";import"./loader-a7579223.js";import"./VProgressCircular-4299d8b4.js";import"./resizeObserver-8e2b427f.js";import"./rounded-a3086a85.js";import"./VDefaultsProvider-82c11bd7.js";import"./forwardRefs-e658ad70.js";import"./FSButton-2de03eb9.js";import"./FSClickable-e8caff35.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./useTranslations-5148abf7.js";import"./FSSelectField-96856ed9.js";import"./FSDialogMenu-b6d68568.js";import"./VDialog-618a6f28.js";import"./VOverlay-a23169e8.js";import"./display-e291008d.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./FSRadioGroup-3ba4b727.js";import"./FSFadeOut-e9437c53.js";import"./VSelect-735dad66.js";import"./VMenu-2484e62c.js";import"./ssrBoot-ce89aa70.js";import"./border-e24af5bf.js";import"./VImg-f2bb9819.js";import"./VDivider-5d036829.js";import"./VSlideGroup-5e88f18e.js";import"./goto-527c7407.js";import"./group-3855ab92.js";import"./FSDivider-ba747654.js";import"./FSChip-d3978a1b.js";import"./FSOptionGroup-c71aef52.js";import"./FSSlideGroup-4ae088dc.js";import"./FSButtonNextIcon-0ce6717c.js";import"./FSWrapGroup-37c801a8.js";import"./FSToggleSet-aa995028.js";import"./VBtn-fdffead2.js";import"./filter-9f13a693.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";import"./FSImage-9b8d5f30.js";import"./base-0de1729e.js";import"./FSColor-04322887.js";import"./FSTile-0130c8b5.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${pe()}/user-organisation-tables`,_=e=>`${fe()}/${encodeURIComponent(e)}`,x=new de("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),ye=$.get(x),Se=$.update(x),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,h,d){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:b(()=>[a(S,{align:"bottom-center"},{default:b(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:b(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:b(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:r}=ye(),{update:h}=Se(),{debounce:d,cancel:n}=ue(),l=ae(),p=c([]),s=c(null),m=c("table"),u=c(10),v=c({}),f=c(1),A=()=>{if(l&&l.currentRoute.value.meta[e.tableCode]){const o=l.currentRoute.value.meta[e.tableCode];p.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortBy,m.value=o.mode,v.value=o.filters,f.value=o.page}else r.value&&(p.value=r.value.columns,u.value=r.value.rowsPerPage,r.value.sortByKey&&r.value.sortByOrder&&(s.value={key:r.value.sortByKey,order:r.value.sortByOrder}),m.value=r.value.mode)},E=o=>{p.value=o,d(g,5e3)},K=o=>{m.value=o,d(g,5e3)},M=o=>{s.value=o,d(g,5e3)},H=o=>{u.value=o,d(g,5e3)},j=o=>{v.value=o,T()},q=o=>{f.value=o,T()},g=()=>{var o,P;T(),h(e.tableCode,{columns:p.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(P=s.value)==null?void 0:P.order,mode:m.value})},T=()=>{l&&(l.currentRoute.value.meta={...l.currentRoute.value.meta,[e.tableCode]:{columns:p.value,filters:v.value,rowsPerPage:u.value,sortBy:s.value,mode:m.value,page:f.value}})};return X(()=>{n(),g()}),R(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),R(r,()=>{A()}),{gettingUserOrganisationTable:i,innerRowsPerPage:u,innerFilters:v,innerHeaders:p,innerSortBy:s,innerMode:m,innerPage:f,updateRowsPerPage:H,updateFilters:j,updateHeaders:E,updateSortBy:M,updateMode:K,updatePage:q}}});function Ce(e,t,i,r,h,d){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,Q({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Z(e.$slots,(p,s)=>({name:s,fn:b(m=>[ee(e.$slots,s,te(oe(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const N=L(V,[["render",Ce]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ro={title:"Foundation/Core/Lists/DataTable",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:N,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var I,O,B;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(O=y.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const no=["Variations"];export{y as Variations,no as __namedExportsOrder,ro as default};
