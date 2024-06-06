import{f as F,g as M,D as h,E as y,F as A,A as C}from"./vue.esm-bundler-1de4ab84.js";import{F as V}from"./FSAutocompleteField-326a230c.js";import{C as _}from"./base-d4d5271d.js";import{S as w}from"./serviceFactory-2dfad3af.js";import{C as D}from"./composableFactory-7269e9d8.js";import{u as $}from"./useAutocomplete-541ae531.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as k}from"./FSCol-044a4f0a.js";import"./FSSearchField-3ae9dd15.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./FSSpan-c5b5f93b.js";import"./useSlots-78ee3d45.js";import"./FSRow-0f15051e.js";import"./css-73f1b6e3.js";import"./useColors-6201f155.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-fee57059.js";import"./VSpacer-8f10d0b5.js";import"./useRender-b44b777b.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./tag-58633b3a.js";import"./density-99305267.js";import"./dimensions-60fb7050.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./FSButton-6b0685b3.js";import"./FSClickable-00bc2ab2.js";import"./FSCard-23b564db.js";import"./FSIcon-08483052.js";import"./useRules-14fb7f63.js";import"./index-bd033a0f.js";import"./useTranslations-df2010ef.js";import"./FSDialogMenu-a98f6da7.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./FSRadioGroup-39907278.js";import"./VSelectionControl-8efa9c46.js";import"./index-8cb030a7.js";import"./FSToggleSet-e1e3b1e0.js";import"./FSSlideGroup-0176bc8d.js";import"./uuid-08309875.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./FSWrapGroup-d7bfa2ed.js";import"./FSCheckbox-7bc44d7a.js";import"./FSFadeOut-649e8ed5.js";import"./FSLoader-404ee90e.js";import"./elevation-e7de2c09.js";import"./VSelect-46cfbf6f.js";import"./VMenu-75bfc7ff.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";import"./filter-6a45c8c8.js";import"./useAppOrganisationId-5f5d3bd0.js";import"./lodash-569b8a6d.js";class d{constructor(o){this.id=o.id,this.manufacturerId=o.manufacturerId,this.manufacturerLabel=o.manufacturerLabel,this.imageId=o.imageId,this.code=o.code,this.label=o.label,this.connectable=o.connectable}}class I extends d{constructor(o){super(o)}}const u=()=>`${_()}/models`,L=e=>`${u()}/${encodeURIComponent(e)}`,O=new w("model",I).create(e=>e.build(e.addGet(L),e.addGetMany(u,d),e.addNotify())),q=D.getMany(O),c=F({name:"FSAutocompleteModel",components:{FSAutocompleteField:V},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:l}=q(),a=M(()=>S.value&&n.value),r=v=>i({...e.modelFilters,search:v??void 0}),{toggleSet:f,init:S,onUpdate:b}=$(l,[()=>e.modelFilters],o,r);return{models:l,toggleSet:f,loading:a,onUpdate:b}}});function E(e,o,i,n,l,a){const r=h("FSAutocompleteField");return y(),A(r,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue"])}const g=U(c,[["render",E]]);c.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const io={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteModel:g,FSCol:k},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteModel
        label="Model"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteModel
        label="Model with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      FSAutocompleteModel,
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
      <FSAutocompleteModel
        label="Model"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteModel
        label="Model with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const no=["Variations"];export{t as Variations,no as __namedExportsOrder,io as default};
