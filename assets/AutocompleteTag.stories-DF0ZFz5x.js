import{d as w,b as k,c as C,w as h,y as v,Y as q,z as u,A as p,B as d,X as V,D as $}from"./vue.esm-bundler-DC82FEWN.js";import{F as I}from"./FSAutocompleteField-CECbYEiW.js";import{F as K}from"./FSTagGroup-CNZrlEXu.js";import{u as B}from"./uuid-DTaye2KM.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as S}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-DTgdezCY.js";import"./FSTextField-B92xKcv7.js";import"./FSBaseField-CKMO1RzZ.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-DEq6MuQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-B5x8xkbY.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./FSButton-B8CL4IYQ.js";import"./FSClickable-CNOWN-hR.js";import"./FSCard-BzleLmPd.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./FSIcon-uD_MRFdb.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-cbMj6UFV.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-Cku24mDz.js";import"./FSRadio-CkPi_Tsj.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-BslFow6I.js";import"./FSSlideGroup-Dr94JzOY.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-BHdXrc3w.js";import"./FSCheckbox-CFeLLHEx.js";import"./FSFadeOut-_RgLKyTO.js";import"./FSLoader-CbNdmyFm.js";import"./elevation-BTkUCD39.js";import"./VSelect-DsYsgoZM.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./FSTag-BkehqjMP.js";import"./VBtn-x8pr1gDk.js";const A=w({components:{FSAutocompleteField:I,FSTagGroup:K},props:{modelValue:{type:Array,required:!1,default:()=>[]},items:{type:Array,required:!1,default:()=>[]},label:{type:String,required:!1},variant:{type:String,required:!1,default:"standard"}},emits:["update:modelValue"],setup(e,{emit:a}){const r=k([]),m=C(()=>e.variant==="standard"?e.items:e.items.concat(r.value.filter(t=>{var l;return(l=e.modelValue)==null?void 0:l.includes(t.id)})??[])),c=t=>{var o,f;const l=(o=m.value.find(n=>n.label===t))==null?void 0:o.id;l&&(r.value.map(n=>n.label).includes(t)&&(r.value=r.value.filter(n=>n.label!==t)),a("update:modelValue",[...((f=e.modelValue)==null?void 0:f.filter(n=>n!==l))??[]]))},g=t=>{if(m.value.map(o=>o.label).includes(t))return;let l={id:B(),label:t};r.value.push(l),a("update:modelValue",[...e.modelValue??[],l.id])},i=t=>{t.key==="Backspace"&&a("update:modelValue",[...e.modelValue??[]])};return h(()=>e.modelValue,()=>{e.modelValue&&(r.value=r.value.filter(t=>e.modelValue.includes(t.id)))},{immediate:!0}),{innerItems:m,onRemoveValue:c,onAddItem:g,onKeydown:i}}});function E(e,a,r,m,c,g){const i=v("FSAutocompleteField"),t=v("FSTagGroup"),l=q("binds");return u(),p(S,null,{default:d(()=>[e.variant=="standard"?V((u(),p(i,{key:0,label:e.label,items:e.innerItems,multiple:!0,modelValue:e.modelValue,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:modelValue",o)),onKeydown:e.onKeydown},{"autocomplete-chip":d(()=>[]),_:1},8,["label","items","modelValue","onKeydown"])),[[l,e.$attrs]]):V((u(),p(i,{key:1,label:e.label,items:e.innerItems,multiple:!0,modelValue:e.modelValue,showSearch:!0,"onUpdate:modelValue":a[1]||(a[1]=o=>e.$emit("update:modelValue",o)),"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},{"autocomplete-chip":d(()=>[]),_:1},8,["label","items","modelValue","onAdd:item","onKeydown"])),[[l,e.$attrs]]),e.modelValue!=null?(u(),p(t,{key:2,tags:e.innerItems.filter(o=>e.modelValue&&e.modelValue.includes(o.id)).map(o=>o.label)??[],onRemove:a[2]||(a[2]=o=>e.onRemoveValue(o))},null,8,["tags"])):$("",!0)]),_:1})}const T=N(A,[["render",E]]);A.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"items",type:{name:"{id : string, label : string}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"label",type:{name:"string"},required:!1},{name:"variant",values:["standard","tagged"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'standard'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTag.vue"]};const Ze={title:"Foundation/Shared/Autocompletes/AutocompleteTag",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:["1","2","3"],value2:[{id:"1",label:"Non"},{id:"2",label:"Etage"},{id:"3",label:"Buée"}],value3:["2"]}},render:(e,{argTypes:a})=>({components:{FSAutocompleteTag:T,FSCol:S},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol gap="24px">
      <FSAutocompleteTag
        :items="args.value2"
        v-model="args.value1"
      />
      <FSAutocompleteTag
        variant="tagged"
        :items="args.value2"
        v-model="args.value3"
      />
    </FSCol>`})};var y,F,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    args: {
      value1: ["1", "2", "3"],
      value2: [{
        id: "1",
        label: "Non"
      }, {
        id: "2",
        label: "Etage"
      }, {
        id: "3",
        label: "Buée"
      }],
      value3: ["2"]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteTag,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol gap="24px">
      <FSAutocompleteTag
        :items="args.value2"
        v-model="args.value1"
      />
      <FSAutocompleteTag
        variant="tagged"
        :items="args.value2"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(b=(F=s.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const _e=["Variations"];export{s as Variations,_e as __namedExportsOrder,Ze as default};
