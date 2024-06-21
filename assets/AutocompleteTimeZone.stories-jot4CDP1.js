import{d as $,c as k,y as S,z as F,A as b,B as l,m as D,K as i,E as v,G as Z,D as q,R as E}from"./vue.esm-bundler-DUki7rNA.js";import{F as N}from"./FSAutocompleteField-BOl3qm2w.js";import{F as _}from"./FSButton-GE9LRUiN.js";import{F as B}from"./FSChip-C0OIEFyH.js";import{_ as u}from"./FSSpan-DUTdSgpN.js";import{_ as d}from"./FSRow-CHgEOZQb.js";import{G as U}from"./base-BNnJ_ndD.js";import{S as x}from"./serviceFactory-D_XwB3_y.js";import{C as M}from"./composableFactory-cXrrETVr.js";import{u as O}from"./useAutocomplete-DyW0s6dv.js";import{C as R}from"./useColors-HWn2iBmk.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-BBaW1DrL.js";import"./FSSearchField-CdKhC7Ro.js";import"./FSTextField-BZoPMSW0.js";import"./VField-BJJocrwv.js";import"./useSlots-BZu_lZyn.js";import"./VSpacer-CujVv6t6.js";import"./useRender-pAH_6Aah.js";import"./theme-BdipdDNo.js";import"./index-zNldQLkd.js";import"./transition-CAmaHrck.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./locale-BngQMCjE.js";import"./proxiedModel-C4hUsKQ6.js";import"./VIcon-BfI5ony8.js";import"./color-B6JLWHIR.js";import"./tag-BAqPjmMA.js";import"./density-CE9JT2ZV.js";import"./loader-B-LDUF0l.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./anchor-32zVg6UX.js";import"./rounded-CuOTz_ni.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-ChvLepw4.js";import"./index-CeJtk2ua.js";import"./useTranslations-LhdkJQ98.js";import"./FSDialogMenu-5l5lej0t.js";import"./FSCard-CqpJmiEC.js";import"./css-BPLLlL3Y.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./router-C5N3y4B3.js";import"./FSRadioGroup-VeAtntDL.js";import"./FSRadio-BTSSlUFf.js";import"./FSIcon-CSwom3lG.js";import"./VSelectionControl-D7t-g0gO.js";import"./index-IoB6lNSN.js";import"./FSToggleSet-Drtcc7mS.js";import"./FSSlideGroup-DhG_7ZhN.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DDhhsjhI.js";import"./group-BFGJGSPe.js";import"./FSWrapGroup-CVJTSX_U.js";import"./FSCheckbox-CisQZrrP.js";import"./FSFadeOut-BOJZDV1R.js";import"./FSLoader-DSIWG3YN.js";import"./elevation-B5zwTzN8.js";import"./VSelect-Doh8ERno.js";import"./VList-DhBFmKbf.js";import"./ssrBoot-DA_Fjfes.js";import"./border-BeL02A28.js";import"./VImg-C0UHAW7L.js";import"./VDivider-DeC1Czha.js";import"./VMenu-BMkRa5on.js";import"./filter-CYwgxO9I.js";import"./FSClickable-FCUZtikK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-3zl-tJp_.js";class C{constructor(o){this.id=o.id,this.offset=o.offset}}class z extends C{constructor(o){super(o)}}const I=()=>`${U()}/time-zones`,P=new x("timeZone",z).create(e=>e.build(e.addGetMany(I,C),e.addNotify())),L=M.getMany(P),w=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:N,FSButton:_,FSChip:B,FSSpan:u,FSRow:d},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:c,fetching:g,entities:s}=L(),f=k(()=>n.value&&g.value),r=a=>c({...e.timeZoneFilters,search:a??void 0}),{toggleSet:p,search:t,init:n,onUpdate:V}=O(s,[()=>e.timeZoneFilters],o,r,null,a=>a.id,a=>a.id);return{ColorEnum:R,timeZones:s,toggleSet:p,loading:f,search:t,onUpdate:V}}});function K(e,o,c,g,s,f){const r=S("FSChip"),p=S("FSAutocompleteField");return F(),b(p,D({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:t})=>[e.$props.modelValue?(F(),b(d,{key:0,align:"center-center",wrap:!1},{default:l(()=>[i(r,{label:t.raw.offset},null,8,["label"]),i(u,null,{default:l(()=>[v(Z(t.raw.id),1)]),_:2},1024)]),_:2},1024)):q("",!0)]),"item-label":l(({item:t,font:n})=>[i(d,{align:"center-left",wrap:!1},{default:l(()=>[i(r,{label:t.raw.offset},null,8,["label"]),i(u,{font:n},{default:l(()=>[v(Z(t.raw.id),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(t=>[i(_,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:E(t.getClass(t.item)),label:t.item.id,onClick:n=>t.toggle(t.item)},{prepend:l(()=>[i(r,{label:t.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=G(w,[["render",K]]);w.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const St={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTimeZone:A,FSCol:j},props:Object.keys(o),setup(){return{...e}},template:`
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
