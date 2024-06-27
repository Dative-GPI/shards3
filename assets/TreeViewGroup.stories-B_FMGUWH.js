import{d as v,y as S,z as m,A as u,B as s,m as w,E as y,G,D as T}from"./vue.esm-bundler-DeSao-KJ.js";import{F as _}from"./FSTreeViewField-Cok2oWM9.js";import{_ as g}from"./FSIcon-DnAZkNNf.js";import{u as h}from"./useGroups-yR7IXdlQ.js";import{u as C}from"./useTreeView-3qDfRfJg.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as k}from"./FSCol-CA6NzDpV.js";import"./FSDialogMenu-CtAO0Sgc.js";import"./FSCard-Cr3VWqvL.js";import"./FSRow-JJutUvlP.js";import"./css-BnhLLynS.js";import"./useColors-C3YrZIBy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-CIdmfI-I.js";import"./proxiedModel-B9H_VIYa.js";import"./anchor-LC_hEQAj.js";import"./color-XZPyE2lN.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./locale-BTkT-VzI.js";import"./router-Cr7df_Je.js";import"./transition-CTQG5_JK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./FSTextField-BoGA7VT8.js";import"./VField-C-8g7gy8.js";import"./FSSpan-t6bMdSRn.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./index-BIb3aONP.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./VIcon-B0BI55vc.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./rounded-BOBir3aK.js";import"./FSButton-F4U-An3c.js";import"./FSClickable-CtyeoOHr.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./FSCheckbox-Dba0sDeH.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSFadeOut-D6QzK9Bb.js";import"./uuid-DTaye2KM.js";import"./FSLoader-BG9q5Y9c.js";import"./elevation-BBJMtRPf.js";import"./FSRadio-DlvvITIU.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VBtn-D2I7zlII.js";import"./group-BqOqgFvy.js";import"./filter-De_Yj-mJ.js";import"./VMenu-CbRbHjmn.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Db9bJp6t.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-rrf4GM2L.js";const F=v({name:"FSTreeViewGroup",components:{FSTreeViewField:_,FSIcon:g},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=h(),l=()=>i({...e.groupFilters}),{onUpdate:p}=C(t,[()=>e.groupFilters],o,l);return{fetchingGroups:n,groups:t,onUpdate:p}}});function $(e,o,i,n,t,l){const p=S("FSTreeViewField");return m(),u(p,w({multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:a})=>[a.icon?(m(),u(g,{key:0},{default:s(()=>[y(G(a.icon),1)]),_:2},1024)):T("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=b(F,[["render",$]]);F.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const Le={title:"Foundation/Core/TreeViews/TreeViewGroup",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewGroup:V,FSCol:k},props:Object.keys(o),setup(){return{...e}},template:`
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
