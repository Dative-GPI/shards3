import{f as v,D as S,E as m,F as s,G as u,x as w,K as y,L as T,I as _}from"./vue.esm-bundler-a0893183.js";import{F as h}from"./FSTreeViewField-dee115ee.js";import{_ as f}from"./FSIcon-9d61ed62.js";import{u as C}from"./useFolders-f8b18c93.js";import{u as b}from"./useTreeView-27adde66.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as $}from"./FSCol-e45ac157.js";import"./FSDialogMenu-2fb2114e.js";import"./FSCard-c200753c.js";import"./FSRow-821d23a1.js";import"./css-03aed76d.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./forwardRefs-e658ad70.js";import"./useRender-13ac3742.js";import"./proxiedModel-59232916.js";import"./anchor-155e2782.js";import"./color-d0fba9db.js";import"./dimensions-b1078284.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./locale-ece9a1bb.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./transition-36d39bce.js";import"./VDefaultsProvider-c4e19f1a.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./FSSpan-4daadeb4.js";import"./useSlots-d5b57407.js";import"./VSpacer-b1094f09.js";import"./index-ec7e733e.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./rounded-4c492e72.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./FSCheckbox-358f34d9.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./FSFadeOut-a78e38e1.js";import"./uuid-08309875.js";import"./FSLoader-5eac453d.js";import"./elevation-7d7e39c3.js";import"./FSRadio-46cacfaf.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VBtn-f8320e3a.js";import"./group-0833c323.js";import"./filter-9e36c4cc.js";import"./VMenu-02096e7e.js";import"./pathCrumb-3dbc85d5.js";import"./base-168b8f74.js";import"./useAppOrganisationId-a0837ade.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-2d4a69cc.js";const g=v({name:"FSTreeViewFolder",components:{FSTreeViewField:h,FSIcon:f},props:{folderFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=C(),p=()=>i({...e.folderFilters}),{onUpdate:l}=b(t,[()=>e.folderFilters],o,p);return{fetchingFolders:n,folders:t,onUpdate:l}}});function q(e,o,i,n,t,p){const l=S("FSTreeViewField");return m(),s(l,w({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":u(({item:a})=>[a.icon?(m(),s(f,{key:0},{default:u(()=>[y(T(a.icon),1)]),_:2},1024)):_("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=k(g,[["render",q]]);g.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const Qe={title:"Foundation/Core/TreeViews/TreeViewFolder",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewFolder:V,FSCol:$},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewFolder
        label="Folder"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
    </FSCol>`})};var d,c,F;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(F=(c=r.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const Re=["Variations"];export{r as Variations,Re as __namedExportsOrder,Qe as default};
