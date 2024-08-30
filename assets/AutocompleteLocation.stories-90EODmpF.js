var w=Object.defineProperty;var I=(e,o,l)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var t=(e,o,l)=>I(e,typeof o!="symbol"?o+"":o,l);import{d as O,c as p,y as $,z as d,A as c,B as u,m as D,E as k,G as q,D as U}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as T}from"./FSAutocompleteField-Bl3plbXe.js";import{_ as h}from"./FSIcon-CEcP550-.js";import{A as N}from"./address-CE2z3AEI.js";import{C as x}from"./base-BbuH2dYw.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as R}from"./composableFactory-DYaDCbjS.js";import{u as j}from"./useAutocomplete-DzUOI0K-.js";import{u as E}from"./useTranslations-DflIUxSJ.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-BmcQ_82r.js";import"./FSTextField-CMLUeGZH.js";import"./FSBaseField-D2jPE59R.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./useColors-nFEwMWzN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1riLSun.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./FSButton-DS5pJwRE.js";import"./FSClickable-Dn475adk.js";import"./FSCard-BdS37dLD.js";import"./VProgressCircular-D_7DfGyD.js";import"./tag-CMGfbRyB.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-BUF-R31v.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-DDUHPpf0.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-BtGm8wWU.js";import"./FSWrapGroup-B-W0vR2W.js";import"./FSCheckbox-jcMp7y2y.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-DssjZXn_.js";import"./VImg-DlvaTCkZ.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-Db7coB6b.js";import"./VList-BjkR6psD.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-B8V0bATO.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./lodash-BiW_TGGX.js";class S{constructor(o){t(this,"id");t(this,"organisationId");t(this,"icon");t(this,"code");t(this,"color");t(this,"label");t(this,"tags");t(this,"address");t(this,"modelsIds");t(this,"deviceOrganisationsIds");t(this,"deviceOrganisationsCount");this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.color=o.color,this.label=o.label,this.tags=o.tags.slice(),this.address=new N(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class G extends S{constructor(l){super(l);t(this,"description");this.description=l.description}}const b=()=>`${x()}/locations`,P=e=>`${b()}/${encodeURIComponent(e)}`,H=new B("location",G).createComplete(b,P,S),J=R.getMany(H),F=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:T,FSIcon:h},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:s,entities:a}=J(),{$tr:m}=E(),r=p(()=>C.value&&s.value),i=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-location.placeholder","{0} location(s) selected",e.modelValue.length):null),L=_=>l({...e.locationFilters,search:_??void 0}),{toggleSet:A,init:C,onUpdate:V}=j(a,[()=>e.locationFilters],o,L);return{placeholder:i,locations:a,toggleSet:A,loading:r,onUpdate:V}}});function K(e,o,l,s,a,m){const r=$("FSAutocompleteField");return d(),c(r,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":u(({item:i})=>[i.icon?(d(),c(h,{key:0},{default:u(()=>[k(q(i.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const y=M(F,[["render",K]]);F.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const vo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:y,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      FSAutocompleteLocation,
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
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ho=["Variations"];export{n as Variations,ho as __namedExportsOrder,vo as default};
