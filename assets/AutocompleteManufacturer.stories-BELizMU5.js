var _=Object.defineProperty;var q=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var o=(e,t,r)=>q(e,typeof t!="symbol"?t+"":t,r);import{d as x,c,A as g,B as f,C as b,E as m,j as D,H as R,P as v,D as N,F as B}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as T}from"./FSAutocompleteField-DRDv3EYx.js";import{F as y}from"./FSButton-BzTwanlk.js";import{F as E}from"./FSImage-CJNmFlk_.js";import{C as O}from"./base-DsQovONZ.js";import{S as j}from"./serviceFactory-DTTRhbEw.js";import{C as M}from"./composableFactory-DJbHulE4.js";import{u as L}from"./useAutocomplete-DDmNThuF.js";import{u as G}from"./useTranslations-DN7QCs30.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as z}from"./FSCol-DLyNVOXQ.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./FSSpan-Bb6VK1Ws.js";import"./useBreakpoints-IB1lZo1P.js";import"./useSlots-DzOFTavN.js";import"./FSRow-4Qz6Bbpg.js";import"./css-YWErTUWV.js";import"./useColors-Cz5tOQmp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./useRules-CvuqAlPS.js";import"./VField-BtCsV974.js";import"./index-D14OnwAh.js";import"./color-mm3JSYKM.js";import"./transition-shOmLEJh.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./VIcon-DsLd3bsf.js";import"./density-DMrbDfgW.js";import"./dimensions-BWgpWc0X.js";import"./proxiedModel-Xz4IZg0a.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./anchor-BS5WaiJh.js";import"./rounded-3VvIKpNW.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./VList-nN2lrumh.js";import"./FSCard-4bilSlvW.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./router-DnAkll3L.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./elevation-BrHPj82J.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./FSSlideGroup-CtBhRuPR.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSWrapGroup-DSD82cKU.js";import"./FSCheckbox-CunxM6rm.js";import"./FSIcon-CKEWDmaC.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSLoader-CRmsosiO.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./filter-DiySb8XN.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSImageUI-Q0M2a9Ft.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./useAppAuthToken-yimxtjYQ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./lodash-BiW_TGGX.js";class A{constructor(t){o(this,"id");o(this,"imageId");o(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class H extends A{constructor(r){super(r);o(this,"description");this.description=r.description}}const C=()=>`${O()}/manufacturers`,J=e=>`${C()}/${encodeURIComponent(e)}`,V=new j("manufacturer",H).create(e=>e.build(e.addGet(J),e.addGetMany(C,A),e.addNotify()));M.get(V);const K=M.getMany(V),I=x({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:T,FSButton:y,FSImage:E},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:u}=K(),{$tr:p}=G(),l=c(()=>$.value&&s.value),i=c(()=>e.multiple&&e.modelValue?p("ui.autocomplete-manufacturer.placeholder","{0} manufacturer(s) selected",e.modelValue.length):null),a=k=>r({...e.manufacturerFilters,search:k??void 0}),{toggleSet:d,init:$,onUpdate:U}=L(u,[()=>e.manufacturerFilters],t,a);return{manufacturers:u,placeholder:i,toggleSet:d,loading:l,onUpdate:U}}});function Q(e,t,r,s,u,p){const l=g("FSImage"),i=g("FSAutocompleteField");return f(),b(i,D({label:e.$props.label??e.$tr("ui.common.manufacturer","Manufacturer"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:a})=>[a.imageId?(f(),b(l,{key:0,height:"26px",width:"26px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):R("",!0)]),"toggle-set-item":m(a=>[v(y,{padding:a.item.imageId?["6px 16px","4px 12px"]:void 0,variant:a.getVariant(a.item),color:a.getColor(a.item),class:B(a.getClass(a.item)),label:a.item.label,onClick:d=>a.toggle(a.item)},N({_:2},[a.item.imageId?{name:"prepend",fn:m(()=>[v(l,{height:"26px",width:"26px",imageId:a.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const w=P(I,[["render",Q]]);I.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:w,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteManufacturer
        label="Manufacturer"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var F,h,S;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      FSAutocompleteManufacturer,
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
      <FSAutocompleteManufacturer
        label="Manufacturer"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const Vt=["Variations"];export{n as Variations,Vt as __namedExportsOrder,Ct as default};
