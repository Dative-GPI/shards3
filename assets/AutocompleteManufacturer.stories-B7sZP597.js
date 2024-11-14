var _=Object.defineProperty;var q=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var o=(e,t,r)=>q(e,typeof t!="symbol"?t+"":t,r);import{d as x,c,y as g,z as f,A as b,C as m,m as D,F as R,N as v,B as N,D as B}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as T}from"./FSAutocompleteField-C1xJdMRs.js";import{F as y}from"./FSButton-DZMcpMR1.js";import{F as O}from"./FSImage-9J49soYl.js";import{C as E}from"./base-DCZJTx46.js";import{S as j}from"./serviceFactory-DTTRhbEw.js";import{C as M}from"./composableFactory-H3XPfy7N.js";import{u as L}from"./useAutocomplete-CpO4R9E4.js";import{u as z}from"./useTranslations-DgvmBCqU.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as P}from"./FSCol-D8gLxM2E.js";import"./FSSearchField-D9ku8NjQ.js";import"./FSTextField-ECMlyBTY.js";import"./FSBaseField-BXJBXTur.js";import"./FSSpan-Bh1X02mE.js";import"./useBreakpoints-BMg9gIvD.js";import"./useSlots-C9mZt9CQ.js";import"./FSRow-CSQtiyAx.js";import"./css-CxoeZkpP.js";import"./useColors-DnoeDx-P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./index-B-qTxNvr.js";import"./color-DdAXPAA0.js";import"./transition-BtBp4lzQ.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./locale-CA7yUTVs.js";import"./VIcon-zho7mIKV.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./VList-BsRjN0ZI.js";import"./FSCard-Bfo4Z0Zf.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./dimensions-DL1AZk-8.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./router-C4YP2PAT.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./elevation-BNOJtsSY.js";import"./index-BF2Ge4Ib.js";import"./VImg-Bi-pKvLj.js";import"./FSSlideGroup-8udoapu6.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-CjZBl77R.js";import"./FSWrapGroup-DCzWuvHX.js";import"./FSCheckbox-3iIuKfLX.js";import"./FSIcon-DfjSexyz.js";import"./VSelectionControl-DbX2q5FD.js";import"./FSFadeOut-B5r2PNGg.js";import"./FSLoader-PksHGtEK.js";import"./FSRadio-CBI2uo6q.js";import"./VSelect-DLEPHyKg.js";import"./VMenu-CkU-g4Hp.js";import"./filter-MqAtiUjL.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./FSImageUI-CifHzJ5L.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./useAppAuthToken-BhmYrSKL.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./lodash-BiW_TGGX.js";class A{constructor(t){o(this,"id");o(this,"imageId");o(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class H extends A{constructor(r){super(r);o(this,"description");this.description=r.description}}const C=()=>`${E()}/manufacturers`,J=e=>`${C()}/${encodeURIComponent(e)}`,V=new j("manufacturer",H).create(e=>e.build(e.addGet(J),e.addGetMany(C,A),e.addNotify()));M.get(V);const K=M.getMany(V),I=x({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:T,FSButton:y,FSImage:O},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:u}=K(),{$tr:p}=z(),l=c(()=>$.value&&s.value),i=c(()=>e.multiple&&e.modelValue?p("ui.autocomplete-manufacturer.placeholder","{0} manufacturer(s) selected",e.modelValue.length):null),a=k=>r({...e.manufacturerFilters,search:k??void 0}),{toggleSet:d,init:$,onUpdate:U}=L(u,[()=>e.manufacturerFilters],t,a);return{manufacturers:u,placeholder:i,toggleSet:d,loading:l,onUpdate:U}}});function Q(e,t,r,s,u,p){const l=g("FSImage"),i=g("FSAutocompleteField");return f(),b(i,D({label:e.$props.label??e.$tr("autocomplete.manufacturer.label","Manufacturer"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:a})=>[a.imageId?(f(),b(l,{key:0,height:"26px",width:"26px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):R("",!0)]),"toggle-set-item":m(a=>[v(y,{padding:a.item.imageId?["6px 16px","4px 12px"]:void 0,variant:a.getVariant(a.item),color:a.getColor(a.item),class:B(a.getClass(a.item)),label:a.item.label,onClick:d=>a.toggle(a.item)},N({_:2},[a.item.imageId?{name:"prepend",fn:m(()=>[v(l,{height:"26px",width:"26px",imageId:a.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const w=G(I,[["render",Q]]);I.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:w,FSCol:P},props:Object.keys(t),setup(){return{...e}},template:`
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
