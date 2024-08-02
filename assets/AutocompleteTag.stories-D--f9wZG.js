import{d as h,b as T,c as k,w as q,y as b,Y as B,z as u,A as d,B as g,X as V,D as E}from"./vue.esm-bundler-DC82FEWN.js";import{F as K}from"./FSAutocompleteField-CQFNCII0.js";import{F as N}from"./FSTagGroup-C9HcGtaN.js";import{u as U}from"./uuid-DTaye2KM.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as S}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-CrEIMyOU.js";import"./FSTextField-mMS0Kez6.js";import"./FSBaseField-DmIgZozj.js";import"./FSSpan-CEjD71wr.js";import"./useSlots-Dr5tdD4b.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-DEq6MuQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-B5x8xkbY.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./FSButton-1EF78Bzf.js";import"./FSClickable-CNOWN-hR.js";import"./FSCard-BzleLmPd.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./FSIcon-uD_MRFdb.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-cbMj6UFV.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-VRhkvpZ9.js";import"./FSRadio-DjVuf49p.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-Br9w1v1b.js";import"./FSSlideGroup-CgIUEdhn.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-OTVy7t6y.js";import"./FSCheckbox-DMyIFYVY.js";import"./FSFadeOut-_RgLKyTO.js";import"./FSLoader-CbNdmyFm.js";import"./elevation-BTkUCD39.js";import"./VSelect-C4zoc8wo.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./FSTag-D2j1C8Ju.js";import"./VBtn-x8pr1gDk.js";const w=h({components:{FSAutocompleteField:K,FSTagGroup:N},props:{modelValue:{type:Array,required:!1,default:()=>[]},items:{type:Array,required:!1,default:()=>[]},label:{type:String,required:!1},variant:{type:String,required:!1,default:"standard"}},emits:["update:modelValue"],setup(e,{emit:n}){const m=T([]),r=k(()=>e.variant==="standard"?e.items:e.items.concat(m.value)),f=t=>{n("update:modelValue",t==null?void 0:t.map(o=>r.value.find(l=>l.id===o)))},v=t=>{var l,i;const o=(l=r.value.find(a=>a.label===t))==null?void 0:l.id;o&&(m.value.map(a=>a.label).includes(t)&&(m.value=m.value.filter(a=>a.label!==t)),n("update:modelValue",[...((i=e.modelValue)==null?void 0:i.filter(a=>a.id!==o))??[]]))},s=t=>{if(r.value.map(l=>l.label).includes(t))return;let o={id:U(),label:t,isCustom:!0};m.value.push(o),n("update:modelValue",[...e.modelValue??[],o])},c=t=>{t.key==="Backspace"&&n("update:modelValue",[...e.modelValue??[]])};return q(()=>e.modelValue,t=>{var o;t&&(m.value=((o=e.modelValue)==null?void 0:o.filter(l=>l.isCustom))??[])},{immediate:!0}),{innerItems:r,onUpdateModelValue:f,onAddItem:s,onRemoveValue:v,onKeydown:c}}});function _(e,n,m,r,f,v){const s=b("FSAutocompleteField"),c=b("FSTagGroup"),t=B("binds");return u(),d(S,null,{default:g(()=>{var o,l,i;return[e.variant=="standard"?V((u(),d(s,{key:0,label:e.label,items:e.innerItems,multiple:!0,modelValue:(o=e.modelValue)==null?void 0:o.map(a=>a.id),"onUpdate:modelValue":e.onUpdateModelValue,onKeydown:e.onKeydown},{"autocomplete-chip":g(()=>[]),_:1},8,["label","items","modelValue","onUpdate:modelValue","onKeydown"])),[[t,e.$attrs]]):V((u(),d(s,{key:1,label:e.label,items:e.innerItems,multiple:!0,modelValue:(l=e.modelValue)==null?void 0:l.map(a=>a.id),showSearch:!0,"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},{"autocomplete-chip":g(()=>[]),_:1},8,["label","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])),[[t,e.$attrs]]),e.modelValue!=null?(u(),d(c,{key:2,tags:((i=e.modelValue)==null?void 0:i.map(a=>a.label))??[],onRemove:n[0]||(n[0]=a=>e.onRemoveValue(a))},null,8,["tags"])):E("",!0)]}),_:1})}const A=I(w,[["render",_]]);w.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"modelValue",type:{name:"{id : string, label : string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"items",type:{name:"{id : string, label : string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"label",type:{name:"string"},required:!1},{name:"variant",values:["standard","tagged"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'standard'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTag.vue"]};const Ze={title:"Foundation/Shared/Autocompletes/AutocompleteTag",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:[{id:"1",label:"Non",isCustom:!1},{id:"2",label:"Etage",isCustom:!1}],value2:[{id:"1",label:"Non",isCustom:!1},{id:"2",label:"Etage",isCustom:!1},{id:"3",label:"Buée",isCustom:!1}],value3:[{id:"3",label:"Buée",isCustom:!1}],value4:[]}},render:(e,{argTypes:n})=>({components:{FSAutocompleteTag:A,FSCol:S},props:Object.keys(n),setup(){return{...e}},template:`
    <FSCol gap="24px">
      <FSAutocompleteTag
        label="default autocomplete width tag"
        :items="args.value2"
        v-model="args.value1"
      />
      <FSAutocompleteTag
        label="custom autocomplete width default items and new value"
        variant="tagged"
        :items="args.value2"
        v-model="args.value3"
      />
      <FSAutocompleteTag
        label="custom autocomplete with new value only"
        variant="tagged"
        :items="[]"
        v-model="args.value4"
      />
    </FSCol>`})};var y,F,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    args: {
      value1: [{
        id: "1",
        label: "Non",
        isCustom: false
      }, {
        id: "2",
        label: "Etage",
        isCustom: false
      }],
      value2: [{
        id: "1",
        label: "Non",
        isCustom: false
      }, {
        id: "2",
        label: "Etage",
        isCustom: false
      }, {
        id: "3",
        label: "Buée",
        isCustom: false
      }],
      value3: [{
        id: "3",
        label: "Buée",
        isCustom: false
      }],
      value4: []
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
        label="default autocomplete width tag"
        :items="args.value2"
        v-model="args.value1"
      />
      <FSAutocompleteTag
        label="custom autocomplete width default items and new value"
        variant="tagged"
        :items="args.value2"
        v-model="args.value3"
      />
      <FSAutocompleteTag
        label="custom autocomplete with new value only"
        variant="tagged"
        :items="[]"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(C=(F=p.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const xe=["Variations"];export{p as Variations,xe as __namedExportsOrder,Ze as default};
