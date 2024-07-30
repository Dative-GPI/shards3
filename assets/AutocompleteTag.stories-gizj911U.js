import{d as h,b as w,c as k,w as q,y as V,Y as B,z as u,A as p,B as f,X as b,D as E}from"./vue.esm-bundler-DC82FEWN.js";import{F as K}from"./FSAutocompleteField-C8tjXrwd.js";import{F as N}from"./FSTagGroup-CYwBUbyA.js";import{u as U}from"./uuid-DTaye2KM.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as S}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-HaaZVsOH.js";import"./FSTextField-uaKNMDZM.js";import"./FSBaseField-RlaDM_f_.js";import"./FSSpan-CDy62Qe5.js";import"./useSlots-Du4GeqS9.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-C2RWUFtR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-B5x8xkbY.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./FSButton-CSwgTlUg.js";import"./FSClickable-aI6guRt-.js";import"./FSCard-EcIwA-Oh.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./FSIcon-ClfMDAJS.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-pfqo0k-B.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-D_qVpvkn.js";import"./FSRadio-C4kJzDSZ.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-gQQlDcZj.js";import"./FSSlideGroup-BZm7dyIN.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-ZxSHlvE5.js";import"./FSCheckbox-C0VkP5Zl.js";import"./FSFadeOut-CvvHY5il.js";import"./FSLoader-06X_hY2B.js";import"./elevation-BTkUCD39.js";import"./VSelect-CxkKhcc4.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./FSTag-hZxdE_p3.js";import"./VBtn-x8pr1gDk.js";const A=h({components:{FSAutocompleteField:K,FSTagGroup:N},props:{modelValue:{type:Array,required:!1,default:()=>[]},items:{type:Array,required:!1,default:()=>[]},label:{type:String,required:!1},variant:{type:String,required:!1,default:"standard"}},emits:["update:modelValue"],setup(e,{emit:n}){const r=w([]),m=k(()=>e.variant==="standard"?e.items:e.items.concat(r.value)),g=o=>{n("update:modelValue",o==null?void 0:o.map(a=>m.value.find(l=>l.id===a)))},v=o=>{var l,i;const a=(l=m.value.find(t=>t.label===o))==null?void 0:l.id;a&&(r.value.map(t=>t.label).includes(o)&&(r.value=r.value.filter(t=>t.label!==o)),n("update:modelValue",[...((i=e.modelValue)==null?void 0:i.filter(t=>t.id!==a))??[]]))},s=o=>{if(m.value.map(l=>l.label).includes(o))return;let a={id:U(),label:o,isCustom:!0};r.value.push(a),n("update:modelValue",[...e.modelValue??[],a])},c=o=>{o.key==="Backspace"&&n("update:modelValue",[...e.modelValue??[]])};return q(()=>e.modelValue,o=>{var a;o&&(r.value=((a=e.modelValue)==null?void 0:a.filter(l=>l.isCustom))??[])},{immediate:!0}),{innerItems:m,onUpdateModelValue:g,onAddItem:s,onRemoveValue:v,onKeydown:c}}});function _(e,n,r,m,g,v){const s=V("FSAutocompleteField"),c=V("FSTagGroup"),o=B("binds");return u(),p(S,null,{default:f(()=>{var a,l,i;return[e.variant=="standard"?b((u(),p(s,{key:0,label:e.label,items:e.innerItems,multiple:!0,modelValue:(a=e.modelValue)==null?void 0:a.map(t=>t.id),"onUpdate:modelValue":e.onUpdateModelValue,onKeydown:e.onKeydown},{"autocomplete-chip":f(()=>[]),_:1},8,["label","items","modelValue","onUpdate:modelValue","onKeydown"])),[[o,e.$attrs]]):b((u(),p(s,{key:1,label:e.label,items:e.innerItems,multiple:!0,modelValue:(l=e.modelValue)==null?void 0:l.map(t=>t.id),showSearch:!0,"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},{"autocomplete-chip":f(()=>[]),_:1},8,["label","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])),[[o,e.$attrs]]),e.modelValue!=null?(u(),p(c,{key:2,tags:((i=e.modelValue)==null?void 0:i.map(t=>t.label))??[],onRemove:n[0]||(n[0]=t=>e.onRemoveValue(t))},null,8,["tags"])):E("",!0)]}),_:1})}const T=I(A,[["render",_]]);A.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"modelValue",type:{name:"{id : string, label : string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"items",type:{name:"{id : string, label : string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"label",type:{name:"string"},required:!1},{name:"variant",values:["standard","tagged"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'standard'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTag.vue"]};const Ze={title:"Foundation/Shared/Autocompletes/AutocompleteTag",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:[{id:"1",label:"Non",isCustom:!1},{id:"2",label:"Etage",isCustom:!1}],value2:[{id:"1",label:"Non",isCustom:!1},{id:"2",label:"Etage",isCustom:!1},{id:"3",label:"Buée",isCustom:!1}],value3:[{id:"3",label:"Buée",isCustom:!1}]}},render:(e,{argTypes:n})=>({components:{FSAutocompleteTag:T,FSCol:S},props:Object.keys(n),setup(){return{...e}},template:`
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
    </FSCol>`})};var y,C,F;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      }]
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
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const xe=["Variations"];export{d as Variations,xe as __namedExportsOrder,Ze as default};
