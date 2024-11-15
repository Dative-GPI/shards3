var V=Object.defineProperty;var C=(e,t,o)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>C(e,typeof t!="symbol"?t+"":t,o);import{d as w,c as p,y as D,z as $,A as q,m as I}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as _}from"./FSAutocompleteField-rpC1iu27.js";import{C as U}from"./base-DCZJTx46.js";import{S as k}from"./serviceFactory-DTTRhbEw.js";import{C as g}from"./composableFactory-H3XPfy7N.js";import{u as N}from"./useAutocomplete-XOgYaWXJ.js";import{u as R}from"./useTranslations-DgvmBCqU.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as E}from"./FSCol-D8gLxM2E.js";import"./FSSearchField-Bx6G4eFd.js";import"./FSTextField-B9Yl6IUE.js";import"./FSBaseField-CPhXHC60.js";import"./FSSpan-Bh1X02mE.js";import"./useBreakpoints-BMg9gIvD.js";import"./useSlots-C9mZt9CQ.js";import"./FSRow-CSQtiyAx.js";import"./css-CxoeZkpP.js";import"./useColors-C3GOyDHx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D55tBrU4.js";import"./FSButton-44O228oj.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-Dz5j9aqP.js";import"./FSCard-CxH8ejsx.js";import"./VProgressCircular-PqDihA6U.js";import"./color-DdAXPAA0.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSIcon-dnXFGGQr.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./index-B-qTxNvr.js";import"./transition-BtBp4lzQ.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./locale-CA7yUTVs.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./VList-Ms7LY5Qs.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./dimensions-DL1AZk-8.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./router-C4YP2PAT.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./elevation-BNOJtsSY.js";import"./index-BF2Ge4Ib.js";import"./VImg-Bi-pKvLj.js";import"./FSSlideGroup-bnXYYW-T.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-D7F-G6Uh.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-Chnxajrx.js";import"./FSWrapGroup-mhpasbJF.js";import"./FSCheckbox-oOjjSOAG.js";import"./VSelectionControl-DbX2q5FD.js";import"./FSFadeOut-ClVU4caD.js";import"./FSLoader-Bw_zeuUP.js";import"./FSRadio-CBwjt_Sc.js";import"./VSelect-BLps1uzN.js";import"./VMenu-CkU-g4Hp.js";import"./filter-MqAtiUjL.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./lodash-BiW_TGGX.js";class c{constructor(t){a(this,"id");a(this,"mainDashboardId");a(this,"mainDashboardType");a(this,"code");a(this,"label");this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class G extends c{constructor(o){super(o);a(this,"description");this.description=o.description}}const y=()=>`${U()}/organisation-types`,M=e=>`${y()}/${encodeURIComponent(e)}`,f=new k("organisationType",G).create(e=>e.build(e.addGet(M),e.addGetMany(y,c),e.addNotify()));g.get(f);const j=g.getMany(f),b=w({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:_},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:r,entities:i}=j(),{$tr:s}=R(),n=p(()=>O.value&&r.value),h=p(()=>e.multiple&&e.modelValue?s("autocomplete.organisation-type.placeholder","{0} organisation type(s) selected",e.modelValue.length):null),v=A=>o({...e.organisationTypeFilters,search:A??void 0}),{toggleSet:S,init:O,onUpdate:F}=N(i,[()=>e.organisationTypeFilters],t,v);return{organisationTypes:i,placeholder:h,toggleSet:S,loading:n,onUpdate:F}}});function L(e,t,o,r,i,s){const n=D("FSAutocompleteField");return $(),q(n,I({label:e.$props.label??e.$tr("autocomplete.organisation-type.label","Organisation type"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const T=B(b,[["render",L]]);b.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const dt={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:T,FSCol:E},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteOrganisationType
        label="OrganisationType"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var m,u,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      FSAutocompleteOrganisationType,
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
      <FSAutocompleteOrganisationType
        label="OrganisationType"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const gt=["Variations"];export{l as Variations,gt as __namedExportsOrder,dt as default};
