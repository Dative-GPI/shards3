import{d as v,y as S,z as m,A as u,B as s,m as w,E as y,G,D as T}from"./vue.esm-bundler-BLBBrD1D.js";import{F as _}from"./FSTreeViewField-yJHA9Yia.js";import{_ as g}from"./FSIcon-CgTCRlvx.js";import{u as h}from"./useGroups-DMVp-1P-.js";import{u as C}from"./useTreeView-B8wojadk.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as k}from"./FSCol-OnQTHx6W.js";import"./FSDialogMenu-DdgKI6bE.js";import"./FSCard-fA5aX9kp.js";import"./FSRow-BZVvIgLd.js";import"./css-DU1X_fj1.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-CTGr_J4i.js";import"./proxiedModel-BG8nj0M_.js";import"./anchor-3JQV6orx.js";import"./color-T1BTTgdX.js";import"./dimensions-DNYoshM5.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./locale-Cf2S8s-Z.js";import"./router-Ce0kmIVt.js";import"./transition-DqSOegbJ.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./FSTextField-Czy1Uao0.js";import"./VField-B7mGtqRI.js";import"./FSSpan-DNHXfhpi.js";import"./useSlots-CKjiHxqT.js";import"./VSpacer-C8vjG_Ri.js";import"./index-Co1LeIbZ.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./VIcon-Cq9uvnQL.js";import"./tag-kXOxSspb.js";import"./density-Dp1dzyfT.js";import"./loader-FLWPcWRx.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./rounded-Ax8hVtG-.js";import"./FSButton-Ctk-czeT.js";import"./FSClickable-BcsUSOO8.js";import"./useRules-CaBH9gl0.js";import"./index-C6izM9Xn.js";import"./FSCheckbox-DJm00ahm.js";import"./VSelectionControl-BO5kGMEg.js";import"./index-BeqDwarK.js";import"./FSFadeOut-NO6SWErB.js";import"./uuid-DTaye2KM.js";import"./FSLoader-wJOBxBqI.js";import"./elevation-0FWsrb7Y.js";import"./FSRadio-CNInwCt1.js";import"./VList-CoTUwsMv.js";import"./ssrBoot-BC9AlB5N.js";import"./border-ChMgRsg0.js";import"./VImg-BwDapMIg.js";import"./VDivider-BDr2QhjS.js";import"./VBtn-KXFWn89r.js";import"./group-BPLcoGlv.js";import"./filter-CPgh2H3B.js";import"./VMenu-BeRcuKeG.js";import"./pathCrumb-D0_87whe.js";import"./base-B_HXG24o.js";import"./useAppOrganisationId-B9lMIXAZ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DeG9aq0N.js";const F=v({name:"FSTreeViewGroup",components:{FSTreeViewField:_,FSIcon:g},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=h(),l=()=>i({...e.groupFilters}),{onUpdate:p}=C(t,[()=>e.groupFilters],o,l);return{fetchingGroups:n,groups:t,onUpdate:p}}});function $(e,o,i,n,t,l){const p=S("FSTreeViewField");return m(),u(p,w({multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:a})=>[a.icon?(m(),u(g,{key:0},{default:s(()=>[y(G(a.icon),1)]),_:2},1024)):T("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=b(F,[["render",$]]);F.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const Le={title:"Foundation/Core/TreeViews/TreeViewGroup",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewGroup:V,FSCol:k},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(f=(c=r.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const Qe=["Variations"];export{r as Variations,Qe as __namedExportsOrder,Le as default};
