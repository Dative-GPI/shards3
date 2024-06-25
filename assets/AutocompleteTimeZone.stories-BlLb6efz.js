import{d as $,c as k,y as S,z as F,A as b,B as l,m as D,K as i,E as v,G as Z,D as q,S as E}from"./vue.esm-bundler-DeSao-KJ.js";import{F as N}from"./FSAutocompleteField-RiC1jgSw.js";import{F as _}from"./FSButton-CUXN7UlR.js";import{F as B}from"./FSChip-DCQwqweB.js";import{_ as u}from"./FSSpan-t6bMdSRn.js";import{_ as d}from"./FSRow-JJutUvlP.js";import{G as U}from"./base-BNnJ_ndD.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{C as M}from"./composableFactory-rrf4GM2L.js";import{u as O}from"./useAutocomplete-BjXljuos.js";import{C as G}from"./useColors-DL92kHTE.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-DwhyMBBv.js";import"./FSTextField-xG_kerPN.js";import"./VField-DEMHFDPm.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./theme-RQK62Xub.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-D74RUSZ7.js";import"./FSCard-B1Oet1YO.js";import"./css-BnhLLynS.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-D4D4UEOO.js";import"./FSRadio-x2anfynz.js";import"./FSIcon-DuYoAbGq.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-B3jJ7hmw.js";import"./FSSlideGroup-DGX0Yc4-.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-BNjss27o.js";import"./FSCheckbox-BfU8RDs1.js";import"./FSFadeOut-IHk7VvTz.js";import"./FSLoader-D-GHyjSx.js";import"./elevation-BBJMtRPf.js";import"./VSelect-DRB1q99h.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./FSClickable-7AMX5jTq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-_Z9wfsFC.js";class C{constructor(o){this.id=o.id,this.offset=o.offset}}class z extends C{constructor(o){super(o)}}const I=()=>`${U()}/time-zones`,P=new x("timeZone",z).create(e=>e.build(e.addGetMany(I,C),e.addNotify())),L=M.getMany(P),w=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:N,FSButton:_,FSChip:B,FSSpan:u,FSRow:d},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:c,fetching:g,entities:s}=L(),f=k(()=>n.value&&g.value),r=a=>c({...e.timeZoneFilters,search:a??void 0}),{toggleSet:p,search:t,init:n,onUpdate:V}=O(s,[()=>e.timeZoneFilters],o,r,null,a=>a.id,a=>a.id);return{ColorEnum:G,timeZones:s,toggleSet:p,loading:f,search:t,onUpdate:V}}});function K(e,o,c,g,s,f){const r=S("FSChip"),p=S("FSAutocompleteField");return F(),b(p,D({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:t})=>[e.$props.modelValue?(F(),b(d,{key:0,align:"center-center",wrap:!1},{default:l(()=>[i(r,{label:t.raw.offset},null,8,["label"]),i(u,null,{default:l(()=>[v(Z(t.raw.id),1)]),_:2},1024)]),_:2},1024)):q("",!0)]),"item-label":l(({item:t,font:n})=>[i(d,{align:"center-left",wrap:!1},{default:l(()=>[i(r,{label:t.raw.offset},null,8,["label"]),i(u,{font:n},{default:l(()=>[v(Z(t.raw.id),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(t=>[i(_,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:E(t.getClass(t.item)),label:t.item.id,onClick:n=>t.toggle(t.item)},{prepend:l(()=>[i(r,{label:t.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=R(w,[["render",K]]);w.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const St={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTimeZone:A,FSCol:j},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var h,y,T;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(y=m.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const Ft=["Variations"];export{m as Variations,Ft as __namedExportsOrder,St as default};
