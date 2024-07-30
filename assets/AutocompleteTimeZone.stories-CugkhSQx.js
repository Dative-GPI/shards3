var k=Object.defineProperty;var D=(e,o,i)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i;var d=(e,o,i)=>D(e,typeof o!="symbol"?o+"":o,i);import{d as q,c as E,y as b,z as F,A as v,B as l,m as N,I as r,E as Z,G as h,D as B,S as U}from"./vue.esm-bundler-DC82FEWN.js";import{F as x}from"./FSAutocompleteField-BA4UNmtO.js";import{F as C}from"./FSButton-DeBt3QVu.js";import{F as M}from"./FSChip-BcGISnHp.js";import{_ as c}from"./FSSpan-CDy62Qe5.js";import{_ as g}from"./FSRow-DoCXWKDP.js";import{G as O}from"./base-CmdGny12.js";import{S as G}from"./serviceFactory-Bd5jifNi.js";import{C as I}from"./composableFactory-J8cSLWf9.js";import{u as R}from"./useAutocomplete-1Tpu4ol_.js";import{C as j}from"./useColors-DEq6MuQy.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as P}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-CK_Nr4sF.js";import"./FSTextField-Dm4APjxX.js";import"./FSBaseField-B1gnPZLv.js";import"./useSlots-Du4GeqS9.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./theme-B5x8xkbY.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./VIcon-Dc-dFojD.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./VProgressCircular-C-U4HXtE.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-cbMj6UFV.js";import"./FSCard-BzleLmPd.js";import"./css-DYOPUjjE.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-D0Wn69O7.js";import"./FSRadio-CyKpkhxe.js";import"./FSIcon-uD_MRFdb.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-CYjeOjpo.js";import"./FSSlideGroup-ClC5kKbI.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-DIizNujy.js";import"./FSCheckbox-BHSinzY0.js";import"./FSFadeOut-_RgLKyTO.js";import"./FSLoader-CbNdmyFm.js";import"./elevation-BTkUCD39.js";import"./VSelect-H_DfbEXX.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./FSClickable-CNOWN-hR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-3zl-tJp_.js";class w{constructor(o){d(this,"id");d(this,"offset");this.id=o.id,this.offset=o.offset}}class L extends w{constructor(o){super(o)}}const W=()=>`${O()}/time-zones`,Y=new G("timeZone",L).create(e=>e.build(e.addGetMany(W,w),e.addNotify())),H=I.getMany(Y),A=q({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:x,FSButton:C,FSChip:M,FSSpan:c,FSRow:g},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:f,entities:p}=H(),S=E(()=>m.value&&f.value),a=n=>i({...e.timeZoneFilters,search:n??void 0}),{toggleSet:u,search:t,init:m,onUpdate:$}=R(p,[()=>e.timeZoneFilters],o,a,null,n=>n.id,n=>n.id);return{ColorEnum:j,timeZones:p,toggleSet:u,loading:S,search:t,onUpdate:$}}});function J(e,o,i,f,p,S){const a=b("FSChip"),u=b("FSAutocompleteField");return F(),v(u,N({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:t})=>[e.$props.modelValue?(F(),v(g,{key:0,align:"center-center",wrap:!1},{default:l(()=>[r(a,{label:t.raw.offset},null,8,["label"]),r(c,null,{default:l(()=>[Z(h(t.raw.id),1)]),_:2},1024)]),_:2},1024)):B("",!0)]),"item-label":l(({item:t,font:m})=>[r(g,{align:"center-left",wrap:!1},{default:l(()=>[r(a,{label:t.raw.offset},null,8,["label"]),r(c,{font:m},{default:l(()=>[Z(h(t.raw.id),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(t=>[r(C,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:U(t.getClass(t.item)),label:t.item.id,onClick:m=>t.toggle(t.item)},{prepend:l(()=>[r(a,{label:t.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=z(A,[["render",J]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const bt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTimeZone:V,FSCol:P},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var y,T,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const Ft=["Variations"];export{s as Variations,Ft as __namedExportsOrder,bt as default};
