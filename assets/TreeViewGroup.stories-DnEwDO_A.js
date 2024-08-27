import{d as v,y as S,z as m,A as u,B as s,m as w,E as y,G,D as T}from"./vue.esm-bundler-B8zP9crO.js";import{F as _}from"./FSTreeViewField-BusoTCnP.js";import{_ as g}from"./FSIcon-DoasTXhc.js";import{u as h}from"./useGroups-qe7WXJxH.js";import{u as C}from"./useTreeView-CaDjzOM1.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as k}from"./FSCol-DXkP6ARl.js";import"./FSDialogMenu-DKdGQhSx.js";import"./FSCard-BQ4UALgc.js";import"./FSRow-D-NDNvrc.js";import"./css-B1GBcH8c.js";import"./useColors-CHFZqh9D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DtZVHDBt.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DErt19fL.js";import"./proxiedModel-odqKlXbh.js";import"./anchor-OrAzIpfB.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./locale-FYv4GhYY.js";import"./router-BFpFBb4L.js";import"./transition-CsS1sKoI.js";import"./VDefaultsProvider-NbOoODyK.js";import"./FSTextField-RqWidZvM.js";import"./FSBaseField-NTkLVYiV.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./VSpacer-qnIi_Uu8.js";import"./FSButton-CSLtAyqZ.js";import"./FSClickable-CRLy4U08.js";import"./VProgressCircular-DxDQ8azE.js";import"./VIcon-FsSVL6vQ.js";import"./useRules-8tDFqsxq.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./density-DkfqnNyD.js";import"./loader-B8FgLuVw.js";import"./rounded-Bso5Gdmg.js";import"./index-vockUB0G.js";import"./FSCheckbox-CeNyMIyO.js";import"./VSelectionControl-DQecCZ24.js";import"./index-D-9FNlZD.js";import"./FSFadeOut-CJxs5U7i.js";import"./uuid-DTaye2KM.js";import"./VImg-nkm3QF3p.js";import"./elevation-B_HXnKlm.js";import"./FSRadio-BildyJ8g.js";import"./VList-DrakP2K3.js";import"./ssrBoot-DcIjCPDT.js";import"./border-BWgmXatz.js";import"./VBtn-CeVXW7Ts.js";import"./group-C3Zad-0v.js";import"./filter-B31C1cQo.js";import"./VMenu-B8mF_lnI.js";import"./pathCrumb-Db-cq5HI.js";import"./base-TJZSgE4h.js";import"./useAppOrganisationId-wxL44o-M.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Bs2ItKgK.js";const F=v({name:"FSTreeViewGroup",components:{FSTreeViewField:_,FSIcon:g},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=h(),l=()=>i({...e.groupFilters}),{onUpdate:p}=C(t,[()=>e.groupFilters],o,l);return{fetchingGroups:n,groups:t,onUpdate:p}}});function $(e,o,i,n,t,l){const p=S("FSTreeViewField");return m(),u(p,w({multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:a})=>[a.icon?(m(),u(g,{key:0},{default:s(()=>[y(G(a.icon),1)]),_:2},1024)):T("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=b(F,[["render",$]]);F.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const Pe={title:"Foundation/Core/TreeViews/TreeViewGroup",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewGroup:V,FSCol:k},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
    </FSCol>`})};var d,c,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTreeViewGroup,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(f=(c=r.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const He=["Variations"];export{r as Variations,He as __namedExportsOrder,Pe as default};
