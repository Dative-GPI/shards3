var $=Object.defineProperty;var x=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var l=(e,t,a)=>x(e,typeof t!="symbol"?t+"":t,a);import{d as k,c,y as g,z as f,A as b,B as d,m as D,D as L,L as v,M as q,P as U}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as O}from"./FSAutocompleteField-Bc6uvIS8.js";import{F as M}from"./FSButton-C8WCeTIt.js";import{F as B}from"./FSImage-BnHy2gIB.js";import{C as N}from"./base-BbuH2dYw.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-DYaDCbjS.js";import{u as T}from"./useAutocomplete-BZsNTWwR.js";import{u as j}from"./useTranslations-DflIUxSJ.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as G}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-DkCFWPYT.js";import"./FSTextField-CAIJ7Yct.js";import"./FSBaseField-CEaQuxbm.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./useColors-9ZzibzMy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C1riLSun.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./tag-CMGfbRyB.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./VProgressCircular-D_7DfGyD.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-CwNpi4PZ.js";import"./FSCard-Czuobvvo.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-DdgeZc-s.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-D9zoPLp2.js";import"./FSWrapGroup-CY7TtL3l.js";import"./FSCheckbox-D6cJ9jKZ.js";import"./FSIcon-CO4wAGng.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-CPTbsoJn.js";import"./VImg-C2ZZ8L57.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-CZcII2-V.js";import"./VList-10owgtsE.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-BJiXcIcO.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./FSClickable-rknJFO_P.js";import"./FSImageUI-Cri7PIHl.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./lodash-BiW_TGGX.js";class y{constructor(t){l(this,"id");l(this,"manufacturerId");l(this,"manufacturerLabel");l(this,"imageId");l(this,"code");l(this,"label");l(this,"connectable");this.id=t.id,this.manufacturerId=t.manufacturerId,this.manufacturerLabel=t.manufacturerLabel,this.imageId=t.imageId,this.code=t.code,this.label=t.label,this.connectable=t.connectable}}class P extends y{constructor(t){super(t)}}const C=()=>`${N()}/models`,H=e=>`${C()}/${encodeURIComponent(e)}`,J=new R("model",P).create(e=>e.build(e.addGet(H),e.addGetMany(C,y),e.addNotify())),K=E.getMany(J),A=k({name:"FSAutocompleteModel",components:{FSAutocompleteField:O,FSButton:M,FSImage:B},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:m}=K(),{$tr:u}=j(),r=c(()=>V.value&&s.value),n=c(()=>e.multiple&&e.modelValue?u("ui.autocomplete-model.placeholder","{0} model(s) selected",e.modelValue.length):null),o=_=>a({...e.modelFilters,search:_??void 0}),{toggleSet:p,init:V,onUpdate:w}=T(m,[()=>e.modelFilters],t,o);return{placeholder:n,toggleSet:p,loading:r,models:m,onUpdate:w}}});function Q(e,t,a,s,m,u){const r=g("FSImage"),n=g("FSAutocompleteField");return f(),b(n,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.imageId?(f(),b(r,{key:0,height:"26px",width:"26px",imageId:o.imageId},null,8,["imageId"])):L("",!0)]),"toggle-set-item":d(o=>[v(M,{padding:o.item.imageId?["6px 16px","4px 12px"]:void 0,variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:p=>o.toggle(o.item)},q({_:2},[o.item.imageId?{name:"prepend",fn:d(()=>[v(r,{height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const I=z(A,[["render",Q]]);A.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const ht={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteModel:I,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
    </FSCol>`})};var h,S,F;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const St=["Variations"];export{i as Variations,St as __namedExportsOrder,ht as default};
