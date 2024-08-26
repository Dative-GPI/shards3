var $=Object.defineProperty;var x=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var l=(e,t,a)=>x(e,typeof t!="symbol"?t+"":t,a);import{d as k,c,y as g,z as f,A as b,B as d,m as D,D as L,L as v,M as q,P as U}from"./vue.esm-bundler-B8zP9crO.js";import{F as O}from"./FSAutocompleteField-Ckk4Z3qH.js";import{F as M}from"./FSButton-DOwRPA7_.js";import{F as B}from"./FSImage-C2P2bTx-.js";import{C as N}from"./base-TJZSgE4h.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-Bs2ItKgK.js";import{u as T}from"./useAutocomplete-K7yc0TBd.js";import{u as j}from"./useTranslations-Dy1kwog1.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as G}from"./FSCol-DXkP6ARl.js";import"./FSSearchField-BJ0VhAlh.js";import"./FSTextField-D4e0l-Dp.js";import"./FSBaseField-BirSoEzM.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSRow-D-NDNvrc.js";import"./css-B1GBcH8c.js";import"./useColors-AJGcQHF_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DtZVHDBt.js";import"./VSpacer-qnIi_Uu8.js";import"./color-DErt19fL.js";import"./useRules-8tDFqsxq.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./VIcon-FsSVL6vQ.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./loader-B8FgLuVw.js";import"./VProgressCircular-DxDQ8azE.js";import"./anchor-OrAzIpfB.js";import"./rounded-Bso5Gdmg.js";import"./VDefaultsProvider-NbOoODyK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-vockUB0G.js";import"./FSDialogMenu-DDSjHlKl.js";import"./FSCard-DS7Ofz0M.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./router-BFpFBb4L.js";import"./FSSlideGroup-BzAT5HFF.js";import"./uuid-DTaye2KM.js";import"./group-C3Zad-0v.js";import"./FSToggleSet-C0IvZ0dM.js";import"./FSWrapGroup-BtLWKn4p.js";import"./FSCheckbox-C5Shh_eW.js";import"./FSIcon-DZCYhBaF.js";import"./VSelectionControl-DQecCZ24.js";import"./index-D-9FNlZD.js";import"./FSFadeOut-CzH7IW0v.js";import"./VImg-DbvVxLaQ.js";import"./elevation-B_HXnKlm.js";import"./FSRadio-DCbGHBzU.js";import"./VList-D6tbl9Ec.js";import"./ssrBoot-DcIjCPDT.js";import"./border-BWgmXatz.js";import"./VSelect-YnmM8BsR.js";import"./VMenu-B8mF_lnI.js";import"./filter-B31C1cQo.js";import"./FSClickable-BCaYx5AP.js";import"./FSImageUI-CRv7hclD.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-wxL44o-M.js";import"./lodash-BiW_TGGX.js";class y{constructor(t){l(this,"id");l(this,"manufacturerId");l(this,"manufacturerLabel");l(this,"imageId");l(this,"code");l(this,"label");l(this,"connectable");this.id=t.id,this.manufacturerId=t.manufacturerId,this.manufacturerLabel=t.manufacturerLabel,this.imageId=t.imageId,this.code=t.code,this.label=t.label,this.connectable=t.connectable}}class P extends y{constructor(t){super(t)}}const C=()=>`${N()}/models`,H=e=>`${C()}/${encodeURIComponent(e)}`,J=new R("model",P).create(e=>e.build(e.addGet(H),e.addGetMany(C,y),e.addNotify())),K=E.getMany(J),A=k({name:"FSAutocompleteModel",components:{FSAutocompleteField:O,FSButton:M,FSImage:B},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:m}=K(),{$tr:u}=j(),r=c(()=>V.value&&s.value),n=c(()=>e.multiple&&e.modelValue?u("ui.autocomplete-model.placeholder","{0} model(s) selected",e.modelValue.length):null),o=_=>a({...e.modelFilters,search:_??void 0}),{toggleSet:p,init:V,onUpdate:w}=T(m,[()=>e.modelFilters],t,o);return{placeholder:n,toggleSet:p,loading:r,models:m,onUpdate:w}}});function Q(e,t,a,s,m,u){const r=g("FSImage"),n=g("FSAutocompleteField");return f(),b(n,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.imageId?(f(),b(r,{key:0,height:"26px",width:"26px",imageId:o.imageId},null,8,["imageId"])):L("",!0)]),"toggle-set-item":d(o=>[v(M,{padding:o.item.imageId?["6px 16px","4px 12px"]:void 0,variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:p=>o.toggle(o.item)},q({_:2},[o.item.imageId?{name:"prepend",fn:d(()=>[v(r,{height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const I=z(A,[["render",Q]]);A.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const bt={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteModel:I,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const vt=["Variations"];export{i as Variations,vt as __namedExportsOrder,bt as default};
