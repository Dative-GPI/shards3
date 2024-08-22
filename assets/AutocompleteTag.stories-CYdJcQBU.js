import{d as h,b as T,c as k,w as q,y as b,Y as B,z as u,A as d,B as g,X as V,D as E}from"./vue.esm-bundler-BATn8cDU.js";import{F as K}from"./FSAutocompleteField-kUwtQTfK.js";import{F as N}from"./FSTagGroup-CQPmLMo5.js";import{u as U}from"./uuid-DTaye2KM.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as S}from"./FSCol-D9tDKebi.js";import"./FSSearchField-T0sLpl1S.js";import"./FSTextField-KD4CRsHh.js";import"./FSBaseField-axT9dPIw.js";import"./FSSpan-C8YxV3Vj.js";import"./useSlots-iSUV1mlj.js";import"./FSRow-Gvoj2sTW.js";import"./css-C5boehQC.js";import"./useColors-D4RQatlL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C-7Kj0lB.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./FSButton-D0V1nthY.js";import"./FSClickable-DYDREYld.js";import"./FSCard-CAgq3XuJ.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VIcon-BgP_kyAH.js";import"./FSIcon-Kk713u84.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-aCLCOYe1.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-Dx8IK8Wf.js";import"./FSRadio-CXuTMsbF.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-Cm_kcpK6.js";import"./FSSlideGroup-BrYapIVT.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-CZbFj3Ra.js";import"./FSCheckbox-Di-LctwI.js";import"./FSFadeOut-8zEGCDGr.js";import"./FSLoader-BBhuF9xD.js";import"./elevation-oWdkHiXv.js";import"./VSelect-BU_B2xFx.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./FSTag-BWT2ADYv.js";import"./VBtn-DCaqYD99.js";const w=h({components:{FSAutocompleteField:K,FSTagGroup:N},props:{modelValue:{type:Array,required:!1,default:()=>[]},items:{type:Array,required:!1,default:()=>[]},label:{type:String,required:!1},variant:{type:String,required:!1,default:"standard"}},emits:["update:modelValue"],setup(e,{emit:n}){const m=T([]),r=k(()=>e.variant==="standard"?e.items:e.items.concat(m.value)),f=t=>{n("update:modelValue",t==null?void 0:t.map(o=>r.value.find(l=>l.id===o)))},v=t=>{var l,i;const o=(l=r.value.find(a=>a.label===t))==null?void 0:l.id;o&&(m.value.map(a=>a.label).includes(t)&&(m.value=m.value.filter(a=>a.label!==t)),n("update:modelValue",[...((i=e.modelValue)==null?void 0:i.filter(a=>a.id!==o))??[]]))},s=t=>{if(r.value.map(l=>l.label).includes(t))return;let o={id:U(),label:t,isCustom:!0};m.value.push(o),n("update:modelValue",[...e.modelValue??[],o])},c=t=>{t.key==="Backspace"&&n("update:modelValue",[...e.modelValue??[]])};return q(()=>e.modelValue,t=>{var o;t&&(m.value=((o=e.modelValue)==null?void 0:o.filter(l=>l.isCustom))??[])},{immediate:!0}),{innerItems:r,onUpdateModelValue:f,onAddItem:s,onRemoveValue:v,onKeydown:c}}});function _(e,n,m,r,f,v){const s=b("FSAutocompleteField"),c=b("FSTagGroup"),t=B("binds");return u(),d(S,null,{default:g(()=>{var o,l,i;return[e.variant=="standard"?V((u(),d(s,{key:0,label:e.label,items:e.innerItems,multiple:!0,modelValue:(o=e.modelValue)==null?void 0:o.map(a=>a.id),"onUpdate:modelValue":e.onUpdateModelValue,onKeydown:e.onKeydown},{"autocomplete-chip":g(()=>[]),_:1},8,["label","items","modelValue","onUpdate:modelValue","onKeydown"])),[[t,e.$attrs]]):V((u(),d(s,{key:1,label:e.label,items:e.innerItems,multiple:!0,modelValue:(l=e.modelValue)==null?void 0:l.map(a=>a.id),showSearch:!0,"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},{"autocomplete-chip":g(()=>[]),_:1},8,["label","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])),[[t,e.$attrs]]),e.modelValue!=null?(u(),d(c,{key:2,tags:((i=e.modelValue)==null?void 0:i.map(a=>a.label))??[],onRemove:n[0]||(n[0]=a=>e.onRemoveValue(a))},null,8,["tags"])):E("",!0)]}),_:1})}const A=I(w,[["render",_]]);w.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"modelValue",type:{name:"{id : string, label : string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"items",type:{name:"{id : string, label : string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"label",type:{name:"string"},required:!1},{name:"variant",values:["standard","tagged"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'standard'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTag.vue"]};const Ze={title:"Foundation/Shared/Autocompletes/AutocompleteTag",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:[{id:"1",label:"Non",isCustom:!1},{id:"2",label:"Etage",isCustom:!1}],value2:[{id:"1",label:"Non",isCustom:!1},{id:"2",label:"Etage",isCustom:!1},{id:"3",label:"Buée",isCustom:!1}],value3:[{id:"3",label:"Buée",isCustom:!1}],value4:[]}},render:(e,{argTypes:n})=>({components:{FSAutocompleteTag:A,FSCol:S},props:Object.keys(n),setup(){return{...e}},template:`
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
