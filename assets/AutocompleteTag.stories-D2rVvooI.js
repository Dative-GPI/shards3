import{d as v,b,c,w as F,y as S,z as C,A,M as w,N as T,m as k,B as _,I as $,J as I,K as q}from"./vue.esm-bundler-BSyvBTC9.js";import{F as B}from"./FSAutocompleteField-BkNqhYFQ.js";import{u as K}from"./uuid-DTaye2KM.js";import{u as N}from"./useTranslations-CdSqQFV3.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-BU2q2sTe.js";import"./FSSearchField-jIW8dpQv.js";import"./FSTextField-BRxSBTNG.js";import"./FSBaseField-D7aNDTnY.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-DzlUM3r6.js";import"./css-0IiqzUPc.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./FSButton-77cfmuX3.js";import"./FSClickable-DytVXb9R.js";import"./FSCard-BinAVVx_.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./FSIcon-D0oLoXA8.js";import"./VIcon-BIpY_noq.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-DSPGm4fK.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-HxrzZDKP.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-BDkTog43.js";import"./FSWrapGroup-DUGqUei2.js";import"./FSCheckbox-ILpIKg_O.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-BJ1ngUIg.js";import"./FSLoader-hEATKEG-.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-ByoRox_c.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-C2EXjQHz.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";const V=v({components:{FSAutocompleteField:B},props:{placeholder:{type:String,required:!1,default:null},items:{type:Array,required:!1,default:()=>[]},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:o}){const{$tr:u}=N(),m=b([]),i=c(()=>e.items.concat(m.value)),d=c(()=>{var t;return!e.modelValue||e.modelValue.length===0?null:e.placeholder??u("ui.autocomplete-tag.items-selected","{0} item(s) selected",((t=e.modelValue)==null?void 0:t.length)??0)}),s=t=>{o("update:modelValue",t==null?void 0:t.map(a=>i.value.find(p=>p.id===a)))},l=t=>{o("update:modelValue",[...e.modelValue??[],{id:K(),label:t,isCustom:!0}])},r=t=>{t.key==="Backspace"&&o("update:modelValue",[...e.modelValue??[]])};return F(()=>e.modelValue,t=>{var a;t&&(m.value=((a=e.modelValue)==null?void 0:a.filter(p=>p.isCustom))??[])},{immediate:!0}),{innerPlaceholder:d,innerItems:i,onUpdateModelValue:s,onAddItem:l,onKeydown:r}}});function M(e,o,u,m,i,d){var l;const s=S("FSAutocompleteField");return C(),A(s,k({placeholder:e.innerPlaceholder,items:e.innerItems,showSearch:!0,multiple:!0,modelValue:(l=e.modelValue)==null?void 0:l.map(r=>r.id),"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},e.$attrs),w({_:2},[T(e.$slots,(r,t)=>({name:t,fn:_(a=>[$(e.$slots,t,I(q(a)))])}))]),1040,["placeholder","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])}const y=P(V,[["render",M]]);V.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"{id: string, label: string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"{id: string, label: string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteTag.vue"]};const Ye={title:"Foundation/Shared/Input fields/AutocompleteTag",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{items:[{id:"1",label:"Alpha",isCustom:!1},{id:"2",label:"Beta",isCustom:!1},{id:"3",label:"Charly",isCustom:!1}],value1:null,value2:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTag:y,FSCol:U},props:Object.keys(o),setup(){return{...e}},template:`
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
