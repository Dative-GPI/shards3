import{d as $,c as k,y as S,z as F,A as b,B as l,m as D,K as i,E as v,G as Z,D as q,S as E}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as N}from"./FSAutocompleteField-CkC_2HwE.js";import{F as _}from"./FSButton-Cqu01o0F.js";import{F as B}from"./FSChip-Cd603C2e.js";import{_ as u}from"./FSSpan-CFY7ptgg.js";import{_ as d}from"./FSRow-a7Q-CB2x.js";import{G as U}from"./base-BNnJ_ndD.js";import{S as x}from"./serviceFactory-D_XwB3_y.js";import{C as M}from"./composableFactory-C-hWj-Am.js";import{u as O}from"./useAutocomplete-B1zA08Rk.js";import{C as G}from"./useColors-Dc5IlaXx.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-BeN4b608.js";import"./FSSearchField-jeRoICNJ.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./useSlots-CFCV5ffn.js";import"./VSpacer-DYfuYgng.js";import"./useRender-BYKEQvkC.js";import"./theme-C6UZcim6.js";import"./index-CZ5BSoIs.js";import"./transition-C9cC5SGI.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./tag--UF77zYE.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./anchor-BesKSPix.js";import"./rounded-DApWaG-P.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./useTranslations-iL6K_UJW.js";import"./FSDialogMenu-C5PUkJvI.js";import"./FSCard-BkPZ_hGw.js";import"./css-CBTOQ7jk.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./router-kbZLzbN_.js";import"./FSRadioGroup-WtcOoS_E.js";import"./FSRadio-DmnFFO-4.js";import"./FSIcon-CcDweDXn.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./FSToggleSet-DtdQx61u.js";import"./FSSlideGroup-DrFraIy6.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-D6hMNTPY.js";import"./group-Djmd8CaX.js";import"./FSWrapGroup-CSe3EME5.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSFadeOut-DGTrMc-E.js";import"./FSLoader-ByGG4nua.js";import"./elevation-B-xdCICl.js";import"./VSelect-CKfqyMYk.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./VImg-DJEDP7PW.js";import"./VDivider-BoOtslZm.js";import"./VMenu-D3bJ2B8V.js";import"./filter-NOSp4cax.js";import"./FSClickable-heovQq91.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-DfSX31J9.js";class C{constructor(o){this.id=o.id,this.offset=o.offset}}class z extends C{constructor(o){super(o)}}const I=()=>`${U()}/time-zones`,P=new x("timeZone",z).create(e=>e.build(e.addGetMany(I,C),e.addNotify())),L=M.getMany(P),w=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:N,FSButton:_,FSChip:B,FSSpan:u,FSRow:d},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:c,fetching:g,entities:s}=L(),f=k(()=>n.value&&g.value),r=a=>c({...e.timeZoneFilters,search:a??void 0}),{toggleSet:p,search:t,init:n,onUpdate:V}=O(s,[()=>e.timeZoneFilters],o,r,null,a=>a.id,a=>a.id);return{ColorEnum:G,timeZones:s,toggleSet:p,loading:f,search:t,onUpdate:V}}});function K(e,o,c,g,s,f){const r=S("FSChip"),p=S("FSAutocompleteField");return F(),b(p,D({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:t})=>[e.$props.modelValue?(F(),b(d,{key:0,align:"center-center",wrap:!1},{default:l(()=>[i(r,{label:t.raw.offset},null,8,["label"]),i(u,null,{default:l(()=>[v(Z(t.raw.id),1)]),_:2},1024)]),_:2},1024)):q("",!0)]),"item-label":l(({item:t,font:n})=>[i(d,{align:"center-left",wrap:!1},{default:l(()=>[i(r,{label:t.raw.offset},null,8,["label"]),i(u,{font:n},{default:l(()=>[v(Z(t.raw.id),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(t=>[i(_,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:E(t.getClass(t.item)),label:t.item.id,onClick:n=>t.toggle(t.item)},{prepend:l(()=>[i(r,{label:t.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=R(w,[["render",K]]);w.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const St={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTimeZone:A,FSCol:j},props:Object.keys(o),setup(){return{...e}},template:`
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
