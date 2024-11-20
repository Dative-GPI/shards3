import{d as y,c as b,A as S,B as m,C as s,E as d,j as h,J as G,K as T,H as C}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as q}from"./FSTreeViewField-C-z_qoXH.js";import{F as V}from"./FSIcon-CgyPNi2H.js";import{u as x}from"./useGroups-CVMjUFmb.js";import{u as _}from"./useTreeView-Ds4AHdQc.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-DLyNVOXQ.js";import"./VList-XQT_dn4P.js";import"./FSCard-Bzfi7uVq.js";import"./FSRow-4Qz6Bbpg.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./useColors-ix1ChreS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DppimMvq.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./forwardRefs-DWGaNmQL.js";import"./color-mm3JSYKM.js";import"./proxiedModel-Xz4IZg0a.js";import"./anchor-BS5WaiJh.js";import"./dimensions-BWgpWc0X.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./locale-Beavd5eP.js";import"./router-DnAkll3L.js";import"./transition-shOmLEJh.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./index-D14OnwAh.js";import"./VIcon-DsLd3bsf.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./density-DMrbDfgW.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./index-DnJxNQYu.js";import"./FSTextField-CrTD4dZ4.js";import"./FSBaseField-D6coCLKM.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./FSButton-BoIGeCYX.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-BAZBeMCh.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./useRules-CvuqAlPS.js";import"./VField-BtCsV974.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./FSCheckbox-CjWE83-y.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-Bg0MxJuT.js";import"./uuid-DTaye2KM.js";import"./FSLoader-_xEserk_.js";import"./FSRadio-Bi0gm8Uf.js";import"./VBtn-CKg6JYm3.js";import"./group-ATTNrdHt.js";import"./filter-DiySb8XN.js";import"./VMenu-C3kJxa_y.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DJbHulE4.js";const v=y({name:"FSTreeViewGroup",components:{FSTreeViewField:q,FSIcon:V},props:{groupFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:p,fetching:n,entities:l}=x(),i=b(()=>e.exclude?l.value.filter(u=>u.id!==e.exclude&&!u.path.some(w=>w.id===e.exclude)):l.value),a=()=>p({...e.groupFilters}),{onUpdate:o}=_(i,[()=>e.groupFilters],r,a);return{fetchingGroups:n,groups:i,onUpdate:o}}});function j(e,r,p,n,l,i){const a=S("FSTreeViewField");return m(),s(a,h({label:e.$props.label??e.$tr("tree-view.group.label","Group"),multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(m(),s(V,{key:0},{default:d(()=>[G(T(o.icon),1)]),_:2},1024)):C("",!0)]),_:1},16,["label","multiple","loading","items","modelValue","onUpdate:modelValue"])}const F=$(v,[["render",j]]);v.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const We={title:"Foundation/Core/TreeViews/TreeViewGroup",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewGroup:F,FSCol:k},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with sawn branch"
        exclude="12"
        v-model="args.value3"
      />
    </FSCol>`})};var c,f,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null
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
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with sawn branch"
        exclude="12"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Xe=["Variations"];export{t as Variations,Xe as __namedExportsOrder,We as default};
