import{d as y,c as S,y as h,z as m,A as s,C as d,m as G,H as T,I as b,F as C}from"./vue.esm-bundler-l-siv0w9.js";import{F as x}from"./FSTreeViewField-B2CKG2ug.js";import{F}from"./FSIcon-CxSeYbPm.js";import{u as _}from"./useGroups-C00uUS4c.js";import{u as k}from"./useTreeView-VTZbrYzj.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as $}from"./FSCol-BvqytbKT.js";import"./FSDialogMenu-qumNHV3X.js";import"./FSCard-CZcF3hjs.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./color-De-77ojK.js";import"./proxiedModel-KpugNjnZ.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSTextField-BRcQP7Wb.js";import"./FSBaseField-Bt-M24lA.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSButton-Dn0noJqp.js";import"./FSRouterLink-CI0Nh6ce.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-BjbKlxCy.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./rounded-uHrmshEX.js";import"./index-C6OXlV61.js";import"./FSCheckbox--v2KMIeD.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-9Mm6vijG.js";import"./uuid-DTaye2KM.js";import"./FSLoader-ylzW_XnC.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CqpA7Dwr.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VBtn-9DyKx9D6.js";import"./group-Dk9dfj8w.js";import"./filter-BjRVyZGj.js";import"./VMenu-DQq2E1HW.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";const V=y({name:"FSTreeViewGroup",components:{FSTreeViewField:x,FSIcon:F},props:{groupFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:n,fetching:a,entities:i}=_(),l=S(()=>e.exclude?i.value.filter(u=>u.id!==e.exclude&&!u.path.some(w=>w.id===e.exclude)):i.value),p=()=>n({...e.groupFilters}),{onUpdate:o}=k(l,[()=>e.groupFilters],r,p);return{fetchingGroups:a,groups:l,onUpdate:o}}});function N(e,r,n,a,i,l){const p=h("FSTreeViewField");return m(),s(p,G({multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(m(),s(F,{key:0},{default:d(()=>[T(b(o.icon),1)]),_:2},1024)):C("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=q(V,[["render",N]]);V.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const Xe={title:"Foundation/Core/TreeViews/TreeViewGroup",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewGroup:v,FSCol:$},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Ye=["Variations"];export{t as Variations,Ye as __namedExportsOrder,Xe as default};
