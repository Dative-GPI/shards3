import{f as V,g as k,D as S,E as F,F as b,G as o,x as $,P as l,K as v,L as h,I as D,X as q}from"./vue.esm-bundler-a0893183.js";import{F as x}from"./FSAutocompleteField-6360297d.js";import{F as _}from"./FSButton-29e96b8a.js";import{F as B}from"./FSChip-db263eca.js";import{_ as u}from"./FSSpan-4daadeb4.js";import{_ as d}from"./FSRow-821d23a1.js";import{u as E}from"./useTimeZones-3ba483a0.js";import{u as N}from"./useAutocomplete-cc546bbe.js";import{C as O}from"./useColors-6c375bb5.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as U}from"./FSCol-e45ac157.js";import"./FSSearchField-e802dd1a.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./useSlots-d5b57407.js";import"./VSpacer-b1094f09.js";import"./useRender-13ac3742.js";import"./theme-41eca2c8.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./anchor-155e2782.js";import"./rounded-4c492e72.js";import"./VDefaultsProvider-c4e19f1a.js";import"./forwardRefs-e658ad70.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./useTranslations-95b4a686.js";import"./FSDialogMenu-2fb2114e.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./FSIcon-9d61ed62.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./FSToggleSet-be55bdf4.js";import"./FSSlideGroup-235f4c9d.js";import"./uuid-08309875.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./FSWrapGroup-24d8166e.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./FSLoader-5eac453d.js";import"./elevation-7d7e39c3.js";import"./VSelect-9102db02.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VMenu-02096e7e.js";import"./filter-9e36c4cc.js";import"./FSClickable-550391c2.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-2d4a69cc.js";import"./index-a0e5e2a3.js";const w=V({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:x,FSButton:_,FSChip:B,FSSpan:u,FSRow:d},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:a}){const{getMany:g,fetching:c,entities:p}=E(),f=k(()=>m.value&&c.value),i=r=>g({...t.timeZoneFilters,search:r??void 0}),{toggleSet:s,search:e,init:m,onUpdate:A}=N(p,[()=>t.timeZoneFilters],a,i,null,r=>r.id,r=>r.id);return{ColorEnum:O,timeZones:p,toggleSet:s,loading:f,search:e,onUpdate:A}}});function j(t,a,g,c,p,f){const i=S("FSChip"),s=S("FSAutocompleteField");return F(),b(s,$({itemTitle:"id",toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(F(),b(d,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(i,{label:e.raw.offset},null,8,["label"]),l(u,null,{default:o(()=>[v(h(e.raw.id),1)]),_:2},1024)]),_:2},1024)):D("",!0)]),"item-label":o(({item:e,font:m})=>[l(d,{align:"center-left",wrap:!1},{default:o(()=>[l(i,{label:e.raw.offset},null,8,["label"]),l(u,{font:m},{default:o(()=>[v(h(e.raw.id),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":o(e=>[l(_,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:q(e.getClass(e.item)),label:e.item.id,onClick:m=>e.toggle(e.item)},{prepend:o(()=>[l(i,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const C=P(w,[["render",j]]);w.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const dt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:a})=>({components:{FSAutocompleteTimeZone:C,FSCol:U},props:Object.keys(a),setup(){return{...t}},template:`
    <FSCol>
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var Z,y,T;n.parameters={...n.parameters,docs:{...(Z=n.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Europe/Paris",
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteTimeZone,
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
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const gt=["Variations"];export{n as Variations,gt as __namedExportsOrder,dt as default};
