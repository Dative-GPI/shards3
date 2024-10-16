import{d as y,c as S,y as h,z as s,A as d,C as u,m as T,H as b,I as C,F as x}from"./vue.esm-bundler-DTB_q9xr.js";import{F as _}from"./FSTreeViewField-BDdNAwoW.js";import{F as g}from"./FSIcon-CJgnsR4e.js";import{u as k}from"./useTreeView-DO9VgUti.js";import{u as q}from"./useFolders-PK1DE3Vk.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-CYWCfIBP.js";import"./FSDialogMenu-Cb0sycmV.js";import"./FSCard-GtkwWKOo.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DBJfw4cY.js";import"./proxiedModel-z3p0-M-h.js";import"./anchor-Cu9IQeug.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./locale-BJQwrXJ7.js";import"./router-DHMAfVHW.js";import"./transition-B83BVatf.js";import"./VDefaultsProvider-S-S54iS4.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./VSpacer-y-n940VK.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./density-CJqFEH6j.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./rounded-DM_o2hWD.js";import"./index-C31q_73Z.js";import"./FSCheckbox-BlU3VZ1O.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CXlPGNaB.js";import"./uuid-DTaye2KM.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VBtn-CCHUxMdD.js";import"./group-C1BQtzRQ.js";import"./filter-iZr2_yz2.js";import"./VMenu-9eL7kyJm.js";import"./lodash-BiW_TGGX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:m,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>a({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:m,folders:i,onUpdate:o}}});function O(e,r,a,m,l,i){const n=h("FSTreeViewField");return s(),d(n,T({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":u(({item:o})=>[o.icon?(s(),d(g,{key:0},{default:u(()=>[b(C(o.icon),1)]),_:2},1024)):x("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",O]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const We={title:"Foundation/Core/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:N},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})};var c,F,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const Xe=["Variations"];export{t as Variations,Xe as __namedExportsOrder,We as default};
