var L=Object.defineProperty;var q=(t,e,a)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var o=(t,e,a)=>q(t,typeof e!="symbol"?e+"":e,a);import{d as B,c as G,y as A,z as g,A as c,B as r,m as M,D as U,L as m,E as N,G as R,M as P,P as j}from"./vue.esm-bundler-BATn8cDU.js";import{F as Z}from"./FSAutocompleteField-kUwtQTfK.js";import{F as k}from"./FSButton-D0V1nthY.js";import{F as z}from"./FSImage-Dh9Rydn3.js";import{_ as F}from"./FSSpan-C8YxV3Vj.js";import{_ as y}from"./FSRow-Gvoj2sTW.js";import{P as H}from"./permissionInfos-BPDgTHQl.js";import{C as J}from"./base-DxU3iujb.js";import{S as h}from"./serviceFactory-Bd5jifNi.js";import{C as d}from"./composableFactory-CvKYYcO3.js";import{u as K}from"./useAutocomplete-BnddAth7.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as W}from"./FSCol-D9tDKebi.js";import"./FSSearchField-T0sLpl1S.js";import"./FSTextField-KD4CRsHh.js";import"./FSBaseField-axT9dPIw.js";import"./useColors-D4RQatlL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C-7Kj0lB.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./VIcon-BgP_kyAH.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./VProgressCircular-Bi_qA2kG.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-aCLCOYe1.js";import"./FSCard-CAgq3XuJ.js";import"./css-C5boehQC.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-Dx8IK8Wf.js";import"./FSRadio-CXuTMsbF.js";import"./FSIcon-Kk713u84.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-Cm_kcpK6.js";import"./FSSlideGroup-BrYapIVT.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-CZbFj3Ra.js";import"./FSCheckbox-Di-LctwI.js";import"./FSFadeOut-8zEGCDGr.js";import"./FSLoader-BBhuF9xD.js";import"./elevation-oWdkHiXv.js";import"./VSelect-BU_B2xFx.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./FSClickable-DYDREYld.js";import"./FSImageUI-D3FEWhqz.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-9tSyFyAD.js";import"./lodash-BiW_TGGX.js";class ${constructor(e){o(this,"id");o(this,"userId");o(this,"organisationId");o(this,"roleType");o(this,"roleId");o(this,"roleLabel");o(this,"roleIcon");o(this,"admin");o(this,"imageId");o(this,"userType");o(this,"validity");o(this,"allowNotifications");o(this,"allowSms");o(this,"allowEmails");o(this,"email");o(this,"phoneNumber");o(this,"firstName");o(this,"lastName");o(this,"name");o(this,"tags");this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowNotifications=e.allowNotifications,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class f extends ${constructor(a){super(a);o(this,"mainDashboardType");o(this,"mainDashboardId");o(this,"mainDashboardLabel");o(this,"languageCode");o(this,"timeZoneId");o(this,"permissions");this.mainDashboardType=a.mainDashboardType,this.mainDashboardId=a.mainDashboardId,this.mainDashboardLabel=a.mainDashboardLabel,this.languageCode=a.languageCode,this.timeZoneId=a.timeZoneId,this.permissions=a.permissions.map(n=>new H(n))}}const b=()=>`${J()}/user-organisations`,v=t=>`${b()}/${encodeURIComponent(t)}`,w=()=>`${b()}/current`,X=()=>`${w()}/dashboard`,u=new h("userOrganisation",f).create(t=>t.build(t.addGet(v),t.addGetMany(b,$),t.addCreate(b),t.addUpdate(v),t.addRemove(v),h.addCustom("getCurrent",e=>e.get(w()),e=>new f(e)),t.addNotify(e=>({...h.addCustom("updateCurrent",(a,n)=>a.post(w(),n),a=>{const n=new f(a);return e.notify("update",n),n}),...h.addCustom("changeCurrentDashboard",(a,n)=>a.put(X(),n),a=>{const n=new f(a);return e.notify("update",n),n})})))),Y=d.trackRef(u),C=()=>{const{track:t}=Y();return e=>{t(e)}},ee=d.getMany(u);d.custom(u.getCurrent,C);d.custom(u.updateCurrent,C);d.custom(u.changeCurrentDashboard,C);const x=B({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:Z,FSButton:k,FSImage:z,FSSpan:F,FSRow:y},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:n,entities:O}=ee(),_=G(()=>i.value&&n.value),l=s=>a({...t.userOrganisationFilters,search:s??void 0}),{toggleSet:I,init:i,onUpdate:p}=K(O,[()=>t.userOrganisationFilters],e,l,null,s=>s.id,s=>s.name);return{userOrganisations:O,toggleSet:I,loading:_,onUpdate:p}}});function te(t,e,a,n,O,_){const l=A("FSImage"),I=A("FSAutocompleteField");return g(),c(I,M({itemTitle:"name",toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":r(({item:i})=>[t.$props.modelValue?(g(),c(y,{key:0,align:"center-center",wrap:!1},{default:r(()=>[i.raw.imageId?(g(),c(l,{key:0,height:"26px",width:"26px",imageId:i.raw.imageId},null,8,["imageId"])):U("",!0),m(F,null,{default:r(()=>[N(R(i.raw.name),1)]),_:2},1024)]),_:2},1024)):U("",!0)]),"item-label":r(({item:i,font:p})=>[m(y,{align:"center-left",wrap:!1},{default:r(()=>[i.raw.imageId?(g(),c(l,{key:0,height:"26px",width:"26px",imageId:i.raw.imageId},null,8,["imageId"])):U("",!0),m(F,{font:p},{default:r(()=>[N(R(i.raw.name),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":r(i=>[m(k,{variant:i.getVariant(i.item),padding:["6px 16px","4px 12px"],color:i.getColor(i.item),class:j(i.getClass(i.item)),label:i.item.name,onClick:p=>i.toggle(i.item)},P({_:2},[i.item.imageId?{name:"prepend",fn:r(()=>[m(l,{height:"26px",width:"26px",imageId:i.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const E=Q(x,[["render",te]]);x.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:E,FSCol:W},props:Object.keys(e),setup(){return{...t}},template:`
    <FSCol>
      <FSAutocompleteUserOrganisation
        label="UserOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteUserOrganisation
          label="UserOrganisation with multiple selection"
          :multiple="true"
          v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var D,T,V;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      FSAutocompleteUserOrganisation,
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
      <FSAutocompleteUserOrganisation
        label="UserOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteUserOrganisation
          label="UserOrganisation with multiple selection"
          :multiple="true"
          v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(V=(T=S.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const _t=["Variations"];export{S as Variations,_t as __namedExportsOrder,Ct as default};
