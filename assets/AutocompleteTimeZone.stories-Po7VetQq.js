var k=Object.defineProperty;var $=(e,o,i)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i;var d=(e,o,i)=>$(e,typeof o!="symbol"?o+"":o,i);import{d as D,c as q,y as b,z as F,A as v,B as l,m as E,L as a,E as y,G as Z,D as N,M as B,P as M}from"./vue.esm-bundler-BATn8cDU.js";import{F as U}from"./FSAutocompleteField-DBYsLacO.js";import{F as C}from"./FSButton-CvqXFT9l.js";import{F as x}from"./FSChip-DtyKUuEy.js";import{_ as c}from"./FSSpan-C8YxV3Vj.js";import{_ as g}from"./FSRow-Gvoj2sTW.js";import{G as O}from"./base-CmdGny12.js";import{S as G}from"./serviceFactory-Bd5jifNi.js";import{C as P}from"./composableFactory-CvKYYcO3.js";import{u as R}from"./useAutocomplete-CUJlsrfT.js";import{C as j}from"./useColors-BHn59yMM.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-D9tDKebi.js";import"./FSSearchField-Dq9TC6Ol.js";import"./FSTextField-CICw89u7.js";import"./FSBaseField-Dd85ojn4.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./theme-C-7Kj0lB.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./VIcon-BgP_kyAH.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./VProgressCircular-Bi_qA2kG.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-DtOsVGjc.js";import"./FSCard-DuDQq8Pz.js";import"./css-C5boehQC.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-DP5yQN2r.js";import"./FSRadio-BSf081hY.js";import"./FSIcon-CM3DCfji.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-DeQ0ec5F.js";import"./FSSlideGroup-BpTb0q2K.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-DvqdQnms.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSFadeOut-CJjgZkSF.js";import"./FSLoader-Ccd0M2qp.js";import"./elevation-oWdkHiXv.js";import"./VSelect-Du7HAR1V.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./FSClickable-B9o4BEyu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-_Z9wfsFC.js";class w{constructor(o){d(this,"id");d(this,"offset");this.id=o.id,this.offset=o.offset}}class L extends w{constructor(o){super(o)}}const W=()=>`${O()}/time-zones`,Y=new G("timeZone",L).create(e=>e.build(e.addGetMany(W,w),e.addNotify())),H=P.getMany(Y),A=D({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:U,FSButton:C,FSChip:x,FSSpan:c,FSRow:g},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:f,entities:p}=H(),S=q(()=>t.value&&f.value),r=n=>i({...e.timeZoneFilters,search:n??void 0}),{toggleSet:u,init:t,onUpdate:m}=R(p,[()=>e.timeZoneFilters],o,r,null,n=>n.id,n=>n.id);return{ColorEnum:j,timeZones:p,toggleSet:u,loading:S,onUpdate:m}}});function J(e,o,i,f,p,S){const r=b("FSChip"),u=b("FSAutocompleteField");return F(),v(u,E({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:t})=>[e.$props.modelValue?(F(),v(g,{key:0,align:"center-center",wrap:!1},{default:l(()=>[a(r,{label:t.raw.offset},null,8,["label"]),a(c,null,{default:l(()=>[y(Z(t.raw.id),1)]),_:2},1024)]),_:2},1024)):N("",!0)]),"item-label":l(({item:t,font:m})=>[a(g,{align:"center-left",wrap:!1},{default:l(()=>[a(r,{label:t.raw.offset},null,8,["label"]),a(c,{font:m},{default:l(()=>[y(Z(t.raw.id),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(t=>[a(C,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:M(t.getClass(t.item)),label:t.item.id,onClick:m=>t.toggle(t.item)},B({_:2},[t.item.offset?{name:"prepend",fn:l(()=>[a(r,{label:t.item.offset.split(":")[0]},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=z(A,[["render",J]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const bt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTimeZone:V,FSCol:I},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var T,h,_;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const Ft=["Variations"];export{s as Variations,Ft as __namedExportsOrder,bt as default};
