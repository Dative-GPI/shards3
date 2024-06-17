import{G as N}from"./deviceOrganisations.mock-a1cdf2c0.js";import{j as v,f as P,g as B,D as y,E as T,F,G as u,W as q,P as a,Z as E,w as C,U as A,V as j,A as z,Q as K,R as Q,S as W}from"./vue.esm-bundler-6f923154.js";import{F as Z,V as H}from"./FSLoader-6b86cc0d.js";import{_ as k}from"./FSCol-5ed907ac.js";import{_ as d}from"./FSRow-64caadb9.js";import{u as J,C as M}from"./useColors-9144d90e.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{V as X}from"./VSpacer-54f0d5ce.js";import{F as Y}from"./FSDataTableUI-f78d66e8.js";import{C as ee}from"./base-1b059240.js";import{S as te}from"./serviceFactory-2dfad3af.js";import{C as _}from"./composableFactory-85dd6557.js";import{u as ae}from"./FSFadeOut-1de34239.js";import{F as oe}from"./FSGroupTileUI-085c39f5.js";import{F as re}from"./FSSlideGroup-ddac1e24.js";import{F as ne}from"./FSTagGroup-fa5b47aa.js";import{F as se}from"./FSButton-ff673895.js";import"./css-0cf2e273.js";import"./color-a262cadc.js";import"./theme-a8226b2e.js";import"./dimensions-dec12c77.js";import"./elevation-2c5be1c3.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./useRender-1cb09274.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./vue-router-f3dc06c8.js";import"./uuid-08309875.js";import"./FSCheckbox-4fa3808a.js";import"./FSIcon-93774118.js";import"./VIcon-d1c19518.js";import"./tag-a7b67944.js";import"./FSSpan-7bb94541.js";import"./useSlots-21493751.js";import"./useRules-8e3c4a4a.js";import"./VSelectionControl-40c897c6.js";import"./density-03404b67.js";import"./index-55248dcb.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./FSCard-32925b42.js";import"./FSText-eacee215.js";import"./FSSearchField-ec495859.js";import"./FSTextField-add61627.js";import"./VField-d1f54092.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./anchor-52e92869.js";import"./rounded-1f8e51a9.js";import"./VDefaultsProvider-a08a9a42.js";import"./forwardRefs-e658ad70.js";import"./index-114ba00f.js";import"./useTranslations-59cd146d.js";import"./FSSelectField-78ee29cc.js";import"./FSDialogMenu-7aaa5a49.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./FSRadioGroup-52f2d9ef.js";import"./VSelect-b637e5b8.js";import"./VMenu-31bd6e5f.js";import"./ssrBoot-082b8501.js";import"./border-f53cef89.js";import"./VImg-8e65ad17.js";import"./VDivider-dfa46b18.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./group-91945d16.js";import"./FSDivider-8303b92d.js";import"./FSChip-3525f285.js";import"./FSOptionGroup-91f89b7c.js";import"./FSClickable-e71ee20f.js";import"./FSWrapGroup-a40e4a86.js";import"./FSToggleSet-294c6bb8.js";import"./VBtn-b1e611a0.js";import"./filter-e9cedeb6.js";import"./useAppOrganisationId-8a611d3f.js";import"./lodash-569b8a6d.js";import"./FSImage-1529358f.js";import"./base-0de1729e.js";import"./FSColor-10199f8b.js";import"./FSTile-29567eff.js";import"./FSTag-312ec37e.js";class ie{constructor(){this.called=!1,this.result=null}call(t){return this.called?this.result:(this.called=!0,this.result=t(),this.result)}}const S=v({}),le=new ie,me=()=>le.call(()=>({getTable:i=>S.value[i]!=null?S.value[i]:null,setTable:(i,n)=>{S.value[i]={...n}}}));class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class pe{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new ue(n)))??[]}}class de extends pe{constructor(t){super(t)}}const ce=()=>`${ee()}/user-organisation-tables`,U=e=>`${ce()}/${encodeURIComponent(e)}`,x=new te("userOrgansiationTable",de).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),ge=_.get(x),be=_.update(x),G=P({name:"FSLoadDataTable",components:{FSLoader:Z,FSCol:k,FSRow:d},setup(){const{getColors:e}=J(),t=e(M.Background);return{style:B(()=>({"--fs-load-data-table-background-color":t.base}))}}});function fe(e,t,i,n,c,g){const o=y("FSLoader");return T(),F(k,{class:"fs-load-data-table",gap:"16px",style:q(e.style)},{default:u(()=>[a(d,{align:"bottom-center"},{default:u(()=>[a(o,{variant:"input"}),a(o,{variant:"button"}),a(X),a(o,{variant:"button"}),a(o,{variant:"button"})]),_:1}),a(d,null,{default:u(()=>[a(o,{variant:"chip"}),a(o,{variant:"chip"}),a(o,{variant:"chip"})]),_:1}),a(H,{type:"table-row-divider@10"}),a(d,{align:"center-right"},{default:u(()=>[a(o,{height:"16px",width:"100px"}),a(o,{width:"120px",height:["40px","36px"]}),a(o,{variant:"button"}),a(o,{variant:"button"}),a(o,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Se=D(G,[["render",fe]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const L=P({name:"FSDataTable",components:{FSLoadDataTable:Se,FSDataTableUI:Y},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})},customSortRaws:{type:Object,required:!1,default:()=>({})}},setup(e){const{get:t,getting:i,entity:n}=ge(),{update:c}=be(),{getTable:g,setTable:o}=me(),{debounce:b,cancel:s}=ae(),m=v(!1),r=v({headers:[],mode:"table",sortBy:null,rowsPerPage:10,filters:{},page:1}),V=B(()=>({...r.value,headers:r.value.headers.map(l=>({...l,sort:l.value&&e.customSorts[l.value]||null,sortRaw:l.value&&e.customSortRaws[l.value]||null}))})),h=()=>{var l,w;r.value&&(o(e.tableCode,r.value),c(e.tableCode,{columns:r.value.headers.map(f=>({columnId:f.columnId,hidden:f.hidden,index:f.index})),rowsPerPage:r.value.rowsPerPage,sortByKey:((l=r.value.sortBy)==null?void 0:l.key)??null,sortByOrder:((w=r.value.sortBy)==null?void 0:w.order)??null,mode:r.value.mode}))};return E(()=>{s(),h()}),C(()=>e.tableCode,async()=>{if(e.tableCode){const l=g(e.tableCode);l?r.value=l:(await t(e.tableCode),n.value&&(r.value={headers:n.value.columns,sortBy:{key:n.value.sortByKey,order:n.value.sortByOrder},mode:n.value.mode,rowsPerPage:n.value.rowsPerPage,filters:{},page:1}))}m.value=!0},{immediate:!0}),C(()=>r.value,()=>{r.value&&m.value&&b(h,e.debounceTime)},{deep:!0}),{gettingUserOrganisationTable:i,computedTable:V,initialized:m,table:r}}});function ve(e,t,i,n,c,g){const o=y("FSLoadDataTable"),b=y("FSDataTableUI");return!e.initialized||e.gettingUserOrganisationTable?(T(),F(o,{key:0})):(T(),F(b,z({key:1,"onUpdate:rowsPerPage":t[0]||(t[0]=s=>e.table.rowsPerPage=s),"onUpdate:filters":t[1]||(t[1]=s=>e.table.filters=s),"onUpdate:headers":t[2]||(t[2]=s=>e.table.headers=s),"onUpdate:sortBy":t[3]||(t[3]=s=>e.table.sortBy=s),"onUpdate:mode":t[4]||(t[4]=s=>e.table.mode=s),"onUpdate:page":t[5]||(t[5]=s=>e.table.page=s)},{...e.computedTable,...e.$attrs}),A({_:2},[j(e.$slots,(s,m)=>({name:m,fn:u(r=>[K(e.$slots,m,Q(W(r)))])}))]),1040))}const $=D(L,[["render",ve]]);L.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"customSortRaws",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ta={title:"Foundation/Core/Lists/DataTable",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{tableCode:"groups1",items:N,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(e,t)=>{if(e==null&&t==null||e.length==t.length)return 0;if(e==null||e.length<t.length)return-1;if(t==null||e.length>t.length)return 1}},customSortRaws:{none:(e,t)=>{if((e==null?void 0:e.id)==null&&(t==null?void 0:t.id)==null)return 0;if((e==null?void 0:e.id)==null||parseFloat(e.id)<parseFloat(t.id))return-1;if((t==null?void 0:t.id)==null||parseFloat(e.id)>parseFloat(t.id))return 1}}}},render:(e,{argTypes:t})=>({components:{FSDataTable:$,FSGroupTileUI:oe,FSSlideGroup:re,FSTagGroup:ne,FSButton:se},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
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
}`,...(I=(R=p.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const aa=["Variations"];export{p as Variations,aa as __namedExportsOrder,ta as default};
