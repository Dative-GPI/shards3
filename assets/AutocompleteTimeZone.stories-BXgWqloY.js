import{d as $,c as k,y as S,z as F,A as b,B as l,m as D,K as i,E as v,G as Z,D as q,R as E}from"./vue.esm-bundler-CLWyqtrq.js";import{F as N}from"./FSAutocompleteField-ca2IAtlh.js";import{F as _}from"./FSButton-xawrBwn0.js";import{F as B}from"./FSChip-D3Gdm6wa.js";import{_ as u}from"./FSSpan-C4Iz3qX9.js";import{_ as d}from"./FSRow-B7tdsi71.js";import{G as U}from"./base-BNnJ_ndD.js";import{S as x}from"./serviceFactory-D_XwB3_y.js";import{C as M}from"./composableFactory-BGJVwV03.js";import{u as O}from"./useAutocomplete-BUBL_XZR.js";import{C as R}from"./useColors-D61Fe1_L.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-B1LPjIXg.js";import"./FSSearchField-B2afuG5O.js";import"./FSTextField-BJ0CYXhH.js";import"./VField-BXxuzAJZ.js";import"./useSlots-YtBg7QOA.js";import"./VSpacer-gQABP9En.js";import"./useRender-BBsw_RbX.js";import"./theme-bwyTeVCn.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./useTranslations-BiPIEqtB.js";import"./FSDialogMenu-C9Ewv9NN.js";import"./FSCard-CtrctGW7.js";import"./css-Ca-HPGcF.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./router-Bm0MCij7.js";import"./FSRadioGroup-DJ8Wh-Vs.js";import"./FSRadio-YkCJJZtr.js";import"./FSIcon-nvjMvWEC.js";import"./VSelectionControl-CFm2WUhz.js";import"./index-CgBlQs6Z.js";import"./FSToggleSet-CWkSWZ4R.js";import"./FSSlideGroup-DqfnNVEm.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Bfe_5BeH.js";import"./group-BZx0j_nI.js";import"./FSWrapGroup-BLZ0_EVh.js";import"./FSCheckbox-Bp2dYBN8.js";import"./FSFadeOut-Cm2RoYLR.js";import"./FSLoader-DpxcFPRZ.js";import"./elevation-CB-eCL4u.js";import"./VSelect-DovITVmj.js";import"./VList-COAYh1Wj.js";import"./ssrBoot-pwfi9K1z.js";import"./border-Bs-XyEFQ.js";import"./VImg-CU4XwkhE.js";import"./VDivider-bKfGyljG.js";import"./VMenu-CBjAwdlw.js";import"./filter-IREZNmJK.js";import"./FSClickable-CX-mXFfM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-DfSX31J9.js";class C{constructor(o){this.id=o.id,this.offset=o.offset}}class z extends C{constructor(o){super(o)}}const I=()=>`${U()}/time-zones`,P=new x("timeZone",z).create(e=>e.build(e.addGetMany(I,C),e.addNotify())),L=M.getMany(P),w=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:N,FSButton:_,FSChip:B,FSSpan:u,FSRow:d},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:c,fetching:g,entities:s}=L(),f=k(()=>n.value&&g.value),r=a=>c({...e.timeZoneFilters,search:a??void 0}),{toggleSet:p,search:t,init:n,onUpdate:V}=O(s,[()=>e.timeZoneFilters],o,r,null,a=>a.id,a=>a.id);return{ColorEnum:R,timeZones:s,toggleSet:p,loading:f,search:t,onUpdate:V}}});function K(e,o,c,g,s,f){const r=S("FSChip"),p=S("FSAutocompleteField");return F(),b(p,D({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:t})=>[e.$props.modelValue?(F(),b(d,{key:0,align:"center-center",wrap:!1},{default:l(()=>[i(r,{label:t.raw.offset},null,8,["label"]),i(u,null,{default:l(()=>[v(Z(t.raw.id),1)]),_:2},1024)]),_:2},1024)):q("",!0)]),"item-label":l(({item:t,font:n})=>[i(d,{align:"center-left",wrap:!1},{default:l(()=>[i(r,{label:t.raw.offset},null,8,["label"]),i(u,{font:n},{default:l(()=>[v(Z(t.raw.id),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(t=>[i(_,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:E(t.getClass(t.item)),label:t.item.id,onClick:n=>t.toggle(t.item)},{prepend:l(()=>[i(r,{label:t.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=G(w,[["render",K]]);w.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const St={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTimeZone:A,FSCol:j},props:Object.keys(o),setup(){return{...e}},template:`
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
