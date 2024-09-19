import{d as y,c as S,z as h,A as s,B as d,C as u,m as T,G as b,H as C,E as x}from"./vue.esm-bundler-BwDfg4wG.js";import{F as _}from"./FSTreeViewField-Cl4y-d4p.js";import{F as g}from"./FSIcon-ChaYv6Le.js";import{u as k}from"./useTreeView-C4v5oUBy.js";import{u as q}from"./useFolders-B4IM5LNx.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as B}from"./FSCol-BEvj3we4.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./FSCard-ENPT7Hcj.js";import"./FSRow-k5pgBhR1.js";import"./css-DTUiF03J.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BnvS3YzF.js";import"./proxiedModel-okNizC5Y.js";import"./anchor-0YuAsO7w.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./locale-DTc71_bq.js";import"./router-CeBnHAqN.js";import"./transition-DbaVUv7M.js";import"./VDefaultsProvider-_csoeOf7.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./VSpacer-C5S3LEb3.js";import"./FSButton-jJkg4qCi.js";import"./FSClickable-Y_T-Cq-9.js";import"./VProgressCircular-CmpAWY4m.js";import"./tag-Ceq3l71M.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./VIcon-D-JUvW-a.js";import"./density-CY8ZwxUy.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./rounded-NuUWeCiM.js";import"./index-O1RQoaVh.js";import"./FSCheckbox-Up-USX9A.js";import"./VSelectionControl-gUfFxYp8.js";import"./index-BBm8PRb1.js";import"./FSFadeOut-D8lX1YMU.js";import"./uuid-DTaye2KM.js";import"./FSLoader-CBedVZCM.js";import"./elevation-Ba-uT6Vw.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./VImg-DFtMr-E9.js";import"./VBtn-CAkWF00h.js";import"./group-Co3yQlsH.js";import"./filter-Cv_nnV1z.js";import"./VMenu-CbEP2O2_.js";import"./lodash-BiW_TGGX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-C7fpSlQX.js";import"./useAppOrganisationId-C2bN-F6j.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-fou7heQy.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:m,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>a({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:m,folders:i,onUpdate:o}}});function N(e,r,a,m,l,i){const n=h("FSTreeViewField");return s(),d(n,T({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":u(({item:o})=>[o.icon?(s(),d(g,{key:0},{default:u(()=>[b(C(o.icon),1)]),_:2},1024)):x("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",N]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const Re={title:"Foundation/Core/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:B},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewFolder
        label="Folder"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with sawn branch"
        exclude="1"
        v-model="args.value3"
      />
    </FSCol>`})};var c,f,F;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      FSTreeViewFolder,
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
      <FSTreeViewFolder
        label="Folder"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with sawn branch"
        exclude="1"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const We=["Variations"];export{t as Variations,We as __namedExportsOrder,Re as default};
