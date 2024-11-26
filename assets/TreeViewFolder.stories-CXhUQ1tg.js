import{d as y,c as S,A as h,B as s,C as d,E as u,j as T,J as b,K as C,H as x}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as _}from"./FSTreeViewField-CCWzkpwY.js";import{F as g}from"./FSIcon-CKEWDmaC.js";import{u as k}from"./useTreeView-4IepOkkU.js";import{u as q}from"./useFolders-CM1IwlkH.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as j}from"./FSCol-DLyNVOXQ.js";import"./VList-nN2lrumh.js";import"./FSCard-4bilSlvW.js";import"./FSRow-4Qz6Bbpg.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./useColors-Cz5tOQmp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./forwardRefs-DWGaNmQL.js";import"./color-mm3JSYKM.js";import"./proxiedModel-Xz4IZg0a.js";import"./anchor-BS5WaiJh.js";import"./dimensions-BWgpWc0X.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./locale-Beavd5eP.js";import"./router-DnAkll3L.js";import"./transition-shOmLEJh.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./index-D14OnwAh.js";import"./VIcon-DsLd3bsf.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./density-DMrbDfgW.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./index-DnJxNQYu.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./useRules-CvuqAlPS.js";import"./VField-BtCsV974.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./FSCheckbox-CunxM6rm.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-CeMJmSZZ.js";import"./uuid-DTaye2KM.js";import"./FSLoader-CRmsosiO.js";import"./FSRadio-DnH66ibu.js";import"./VBtn-CKg6JYm3.js";import"./group-ATTNrdHt.js";import"./filter-DiySb8XN.js";import"./VMenu-C3kJxa_y.js";import"./lodash-BiW_TGGX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-DJbHulE4.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:m,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>a({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:m,folders:i,onUpdate:o}}});function B(e,r,a,m,l,i){const n=h("FSTreeViewField");return s(),d(n,T({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":u(({item:o})=>[o.icon?(s(),d(g,{key:0},{default:u(()=>[b(C(o.icon),1)]),_:2},1024)):x("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",B]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const We={title:"Foundation/Core/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:j},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const Xe=["Variations"];export{t as Variations,Xe as __namedExportsOrder,We as default};
