var $=Object.defineProperty;var k=(e,o,i)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i;var d=(e,o,i)=>k(e,typeof o!="symbol"?o+"":o,i);import{d as D,c as q,y as b,z as F,A as v,B as l,m as E,L as r,E as Z,G as y,D as N,S as B}from"./vue.esm-bundler-gWFTcvUr.js";import{F as U}from"./FSAutocompleteField-b3Xz2NwJ.js";import{F as C}from"./FSButton-CDk00Rln.js";import{F as x}from"./FSChip-C4GLzprG.js";import{_ as c}from"./FSSpan-BlywDO8Z.js";import{_ as g}from"./FSRow-Bpa2jjpJ.js";import{G as M}from"./base-CmdGny12.js";import{S as O}from"./serviceFactory-Bd5jifNi.js";import{C as G}from"./composableFactory-CZGZ62iP.js";import{u as R}from"./useAutocomplete-DqlTmpvX.js";import{C as j}from"./useColors-vfWFlOSD.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-DX423FHf.js";import"./FSSearchField-xtHQygQf.js";import"./FSTextField-DZxUijBd.js";import"./FSBaseField-DM1DfhdE.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./theme-DA9ermhM.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-5sq61y-r.js";import"./FSCard-Dkx-Z7Pt.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-B2BuItpn.js";import"./FSRadio-0vVABvir.js";import"./FSIcon-C5ELG8c1.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-B78RpUCe.js";import"./FSSlideGroup-Bf0KNeOu.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-B3SUGyqE.js";import"./FSCheckbox-DbtWxwzz.js";import"./FSFadeOut-D0BMvcHm.js";import"./FSLoader-Dr6heSeB.js";import"./elevation-B3TY2UXi.js";import"./VSelect-CwYrSzi9.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-BVFP8bZP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-_Z9wfsFC.js";class w{constructor(o){d(this,"id");d(this,"offset");this.id=o.id,this.offset=o.offset}}class L extends w{constructor(o){super(o)}}const P=()=>`${M()}/time-zones`,W=new O("timeZone",L).create(e=>e.build(e.addGetMany(P,w),e.addNotify())),Y=G.getMany(W),A=D({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:U,FSButton:C,FSChip:x,FSSpan:c,FSRow:g},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:f,entities:p}=Y(),S=q(()=>t.value&&f.value),a=n=>i({...e.timeZoneFilters,search:n??void 0}),{toggleSet:u,init:t,onUpdate:m}=R(p,[()=>e.timeZoneFilters],o,a,null,n=>n.id,n=>n.id);return{ColorEnum:j,timeZones:p,toggleSet:u,loading:S,onUpdate:m}}});function H(e,o,i,f,p,S){const a=b("FSChip"),u=b("FSAutocompleteField");return F(),v(u,E({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:t})=>[e.$props.modelValue?(F(),v(g,{key:0,align:"center-center",wrap:!1},{default:l(()=>[r(a,{label:t.raw.offset},null,8,["label"]),r(c,null,{default:l(()=>[Z(y(t.raw.id),1)]),_:2},1024)]),_:2},1024)):N("",!0)]),"item-label":l(({item:t,font:m})=>[r(g,{align:"center-left",wrap:!1},{default:l(()=>[r(a,{label:t.raw.offset},null,8,["label"]),r(c,{font:m},{default:l(()=>[Z(y(t.raw.id),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(t=>[r(C,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:B(t.getClass(t.item)),label:t.item.id,onClick:m=>t.toggle(t.item)},{prepend:l(()=>[r(a,{label:t.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=z(A,[["render",H]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const St={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTimeZone:V,FSCol:I},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const bt=["Variations"];export{s as Variations,bt as __namedExportsOrder,St as default};
