import{G as N}from"./deviceOrganisations.mock-e4e3b742.js";import{j as v,f as P,g as B,D as y,E as T,F,G as u,W as q,P as a,Z as E,w as C,U as A,V as j,x as z,Q as K,R as Q,S as W}from"./vue.esm-bundler-a0893183.js";import{F as Z,V as H}from"./FSLoader-5eac453d.js";import{_ as k}from"./FSCol-e45ac157.js";import{_ as d}from"./FSRow-821d23a1.js";import{u as J,C as M}from"./useColors-6c375bb5.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{V as X}from"./VSpacer-b1094f09.js";import{F as Y}from"./FSDataTableUI-87432987.js";import{C as ee}from"./base-168b8f74.js";import{S as te}from"./serviceFactory-2dfad3af.js";import{C as x}from"./composableFactory-2d4a69cc.js";import{u as ae}from"./FSFadeOut-a78e38e1.js";import{F as oe}from"./FSGroupTileUI-815da515.js";import{F as re}from"./FSSlideGroup-235f4c9d.js";import{F as ne}from"./FSTagGroup-26a90e64.js";import{F as se}from"./FSButton-29e96b8a.js";import"./css-03aed76d.js";import"./color-d0fba9db.js";import"./theme-41eca2c8.js";import"./dimensions-b1078284.js";import"./elevation-7d7e39c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./useRender-13ac3742.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./vue-router-ba4d09ba.js";import"./uuid-08309875.js";import"./FSCheckbox-358f34d9.js";import"./FSIcon-9d61ed62.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./FSSpan-4daadeb4.js";import"./useSlots-d5b57407.js";import"./useRules-8ba0ecf4.js";import"./VSelectionControl-df8a6f90.js";import"./density-fc3376dc.js";import"./index-8d9a280b.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./FSCard-c200753c.js";import"./FSText-46c134d7.js";import"./FSSearchField-e802dd1a.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./anchor-155e2782.js";import"./rounded-4c492e72.js";import"./VDefaultsProvider-c4e19f1a.js";import"./forwardRefs-e658ad70.js";import"./index-01bbf789.js";import"./useTranslations-95b4a686.js";import"./FSSelectField-6fb3d8a3.js";import"./FSDialogMenu-2fb2114e.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VSelect-9102db02.js";import"./VMenu-02096e7e.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./FSDivider-fa63f1f0.js";import"./FSChip-db263eca.js";import"./FSOptionGroup-088ad4b1.js";import"./FSClickable-550391c2.js";import"./FSWrapGroup-24d8166e.js";import"./FSToggleSet-be55bdf4.js";import"./VBtn-f8320e3a.js";import"./filter-9e36c4cc.js";import"./useAppOrganisationId-a0837ade.js";import"./lodash-569b8a6d.js";import"./FSImage-4d011f0d.js";import"./base-0de1729e.js";import"./FSColor-7531db8e.js";import"./FSTile-b1132c28.js";import"./FSTag-f068ec69.js";class ie{constructor(){this.called=!1,this.result=null}call(t){return this.called?this.result:(this.called=!0,this.result=t(),this.result)}}const S=v({}),le=new ie,me=()=>le.call(()=>({getTable:i=>S.value[i]!=null?S.value[i]:null,setTable:(i,n)=>{S.value[i]={...n}}}));class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class pe{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new ue(n)))??[]}}class de extends pe{constructor(t){super(t)}}const ce=()=>`${ee()}/user-organisation-tables`,U=e=>`${ce()}/${encodeURIComponent(e)}`,_=new te("userOrgansiationTable",de).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),ge=x.get(_),be=x.update(_),G=P({name:"FSLoadDataTable",components:{FSLoader:Z,FSCol:k,FSRow:d},setup(){const{getColors:e}=J(),t=e(M.Background);return{style:B(()=>({"--fs-load-data-table-background-color":t.base}))}}});function fe(e,t,i,n,c,g){const o=y("FSLoader");return T(),F(k,{class:"fs-load-data-table",gap:"16px",style:q(e.style)},{default:u(()=>[a(d,{align:"bottom-center"},{default:u(()=>[a(o,{variant:"input"}),a(o,{variant:"button"}),a(X),a(o,{variant:"button"}),a(o,{variant:"button"})]),_:1}),a(d,null,{default:u(()=>[a(o,{variant:"chip"}),a(o,{variant:"chip"}),a(o,{variant:"chip"})]),_:1}),a(H,{type:"table-row-divider@10"}),a(d,{align:"center-right"},{default:u(()=>[a(o,{height:"16px",width:"100px"}),a(o,{width:"120px",height:["40px","36px"]}),a(o,{variant:"button"}),a(o,{variant:"button"}),a(o,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Se=D(G,[["render",fe]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const L=P({name:"FSDataTable",components:{FSLoadDataTable:Se,FSDataTableUI:Y},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})},customSortRaws:{type:Object,required:!1,default:()=>({})}},setup(e){const{get:t,getting:i,entity:n}=ge(),{update:c}=be(),{getTable:g,setTable:o}=me(),{debounce:b,cancel:s}=ae(),m=v(!1),r=v({headers:[],mode:"table",sortBy:null,rowsPerPage:10,filters:{},page:1}),V=B(()=>({...r.value,headers:r.value.headers.map(l=>({...l,sort:l.value&&e.customSorts[l.value]||null,sortRaw:l.value&&e.customSortRaws[l.value]||null}))})),h=()=>{var l,w;r.value&&(o(e.tableCode,r.value),c(e.tableCode,{columns:r.value.headers.map(f=>({columnId:f.columnId,hidden:f.hidden,index:f.index})),rowsPerPage:r.value.rowsPerPage,sortByKey:((l=r.value.sortBy)==null?void 0:l.key)??null,sortByOrder:((w=r.value.sortBy)==null?void 0:w.order)??null,mode:r.value.mode}))};return E(()=>{s(),h()}),C(()=>e.tableCode,async()=>{if(e.tableCode){const l=g(e.tableCode);l?r.value=l:(await t(e.tableCode),n.value&&(r.value={headers:n.value.columns,sortBy:{key:n.value.sortByKey,order:n.value.sortByOrder},mode:n.value.mode,rowsPerPage:n.value.rowsPerPage,filters:{},page:1}))}m.value=!0},{immediate:!0}),C(()=>r.value,()=>{r.value&&m.value&&b(h,e.debounceTime)},{deep:!0}),{gettingUserOrganisationTable:i,computedTable:V,initialized:m,table:r}}});function ve(e,t,i,n,c,g){const o=y("FSLoadDataTable"),b=y("FSDataTableUI");return!e.initialized||e.gettingUserOrganisationTable?(T(),F(o,{key:0})):(T(),F(b,z({key:1,"onUpdate:rowsPerPage":t[0]||(t[0]=s=>e.table.rowsPerPage=s),"onUpdate:filters":t[1]||(t[1]=s=>e.table.filters=s),"onUpdate:headers":t[2]||(t[2]=s=>e.table.headers=s),"onUpdate:sortBy":t[3]||(t[3]=s=>e.table.sortBy=s),"onUpdate:mode":t[4]||(t[4]=s=>e.table.mode=s),"onUpdate:page":t[5]||(t[5]=s=>e.table.page=s)},{...e.computedTable,...e.$attrs}),A({_:2},[j(e.$slots,(s,m)=>({name:m,fn:u(r=>[K(e.$slots,m,Q(W(r)))])}))]),1040))}const $=D(L,[["render",ve]]);L.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"customSortRaws",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const oa={title:"Foundation/Core/Lists/DataTable",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{tableCode:"groups1",items:N,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(e,t)=>{if(e==null&&t==null||e.length==t.length)return 0;if(e==null||e.length<t.length)return-1;if(t==null||e.length>t.length)return 1}},customSortRaws:{none:(e,t)=>{if((e==null?void 0:e.id)==null&&(t==null?void 0:t.id)==null)return 0;if((e==null?void 0:e.id)==null||parseFloat(e.id)<parseFloat(t.id))return-1;if((t==null?void 0:t.id)==null||parseFloat(e.id)>parseFloat(t.id))return 1}}}},render:(e,{argTypes:t})=>({components:{FSDataTable:$,FSGroupTileUI:oe,FSSlideGroup:re,FSTagGroup:ne,FSButton:se},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          :customSorts="args.customSorts"
          :customSortRaws="args.customSortRaws"
          rowGap="4px"
          v-model="args.value"
        >
          <template #item.code="{ item }">
            <FSButton
              :label="item.code"
            />
          </template>
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.none="{ item }">
            {{ item.id }}
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
    </div>`})};var O,R,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      },
      customSorts: {
        'tags': (a: any, b: any) => {
          if (a == null && b == null || a.length == b.length) {
            return 0;
          }
          if (a == null || a.length < b.length) {
            return -1;
          }
          if (b == null || a.length > b.length) {
            return 1;
          }
        }
      },
      customSortRaws: {
        'none': (a: any, b: any) => {
          if (a?.id == null && b?.id == null) {
            return 0;
          }
          if (a?.id == null || parseFloat(a.id) < parseFloat(b.id)) {
            return -1;
          }
          if (b?.id == null || parseFloat(a.id) > parseFloat(b.id)) {
            return 1;
          }
        }
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
      FSTagGroup,
      FSButton
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
          :customSorts="args.customSorts"
          :customSortRaws="args.customSortRaws"
          rowGap="4px"
          v-model="args.value"
        >
          <template #item.code="{ item }">
            <FSButton
              :label="item.code"
            />
          </template>
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.none="{ item }">
            {{ item.id }}
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
}`,...(I=(R=p.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const ra=["Variations"];export{p as Variations,ra as __namedExportsOrder,oa as default};
