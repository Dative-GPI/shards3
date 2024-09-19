import{d as y,b,c,w as F,z as C,A as S,B as A,M as w,N as T,m as k,C as _,J as $,K as q,L as B}from"./vue.esm-bundler-BwDfg4wG.js";import{F as I}from"./FSAutocompleteField-BJE5Iw2_.js";import{u as K}from"./uuid-DTaye2KM.js";import{u as N}from"./useTranslations-CHmpEDXr.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-BEvj3we4.js";import"./FSSearchField-DSDBhq1s.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSRow-k5pgBhR1.js";import"./css-DTUiF03J.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./VSpacer-C5S3LEb3.js";import"./color-BnvS3YzF.js";import"./FSButton-jJkg4qCi.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./VProgressCircular-CmpAWY4m.js";import"./tag-Ceq3l71M.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./transition-DbaVUv7M.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./locale-DTc71_bq.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./anchor-0YuAsO7w.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./forwardRefs-DWGaNmQL.js";import"./index-O1RQoaVh.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./router-CeBnHAqN.js";import"./FSSlideGroup-FmBZXb1C.js";import"./group-Co3yQlsH.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./FSCheckbox-Up-USX9A.js";import"./VSelectionControl-gUfFxYp8.js";import"./index-BBm8PRb1.js";import"./FSFadeOut-D8lX1YMU.js";import"./FSLoader-CBedVZCM.js";import"./elevation-Ba-uT6Vw.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./VImg-DFtMr-E9.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./filter-Cv_nnV1z.js";const V=y({components:{FSAutocompleteField:I},props:{placeholder:{type:String,required:!1,default:null},items:{type:Array,required:!1,default:()=>[]},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:o}){const{$tr:u}=N(),m=b([]),i=c(()=>e.items.concat(m.value)),d=c(()=>{var t;return!e.modelValue||e.modelValue.length===0?null:e.placeholder??u("ui.autocomplete-tag.items-selected","{0} item(s) selected",((t=e.modelValue)==null?void 0:t.length)??0)}),s=t=>{o("update:modelValue",t==null?void 0:t.map(a=>i.value.find(p=>p.id===a)))},l=t=>{o("update:modelValue",[...e.modelValue??[],{id:K(),label:t,isCustom:!0}])},r=t=>{t.key==="Backspace"&&o("update:modelValue",[...e.modelValue??[]])};return F(()=>e.modelValue,t=>{var a;t&&(m.value=((a=e.modelValue)==null?void 0:a.filter(p=>p.isCustom))??[])},{immediate:!0}),{innerPlaceholder:d,innerItems:i,onUpdateModelValue:s,onAddItem:l,onKeydown:r}}});function M(e,o,u,m,i,d){var l;const s=C("FSAutocompleteField");return S(),A(s,k({placeholder:e.innerPlaceholder,items:e.innerItems,showSearch:!0,multiple:!0,modelValue:(l=e.modelValue)==null?void 0:l.map(r=>r.id),"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},e.$attrs),w({_:2},[T(e.$slots,(r,t)=>({name:t,fn:_(a=>[$(e.$slots,t,q(B(a)))])}))]),1040,["placeholder","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])}const v=P(V,[["render",M]]);V.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"{id: string, label: string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"{id: string, label: string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteTag.vue"]};const Ye={title:"Foundation/Shared/Input fields/AutocompleteTag",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{items:[{id:"1",label:"Alpha",isCustom:!1},{id:"2",label:"Beta",isCustom:!1},{id:"3",label:"Charly",isCustom:!1}],value1:null,value2:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTag:v,FSCol:U},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteTag
        label="Default items and new value"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTag
        label="New value"
        v-model="args.value2"
      />
    </FSCol>`})};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: "1",
        label: "Alpha",
        isCustom: false
      }, {
        id: "2",
        label: "Beta",
        isCustom: false
      }, {
        id: "3",
        label: "Charly",
        isCustom: false
      }],
      value1: null,
      value2: null
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
    <FSCol>
      <FSAutocompleteTag
        label="Default items and new value"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTag
        label="New value"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Ze=["Variations"];export{n as Variations,Ze as __namedExportsOrder,Ye as default};
