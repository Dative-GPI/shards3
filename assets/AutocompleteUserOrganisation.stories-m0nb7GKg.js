var G=Object.defineProperty;var M=(t,e,a)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var o=(t,e,a)=>M(t,typeof e!="symbol"?e+"":e,a);import{d as j,c as R,y as D,z as u,A as d,B as r,m as P,D as f,I as s,E as y,G as w,S as Z}from"./vue.esm-bundler-DC82FEWN.js";import{F as z}from"./FSAutocompleteField-9Z77q9u9.js";import{F as $}from"./FSButton-cgjePGb6.js";import{F as H}from"./FSImage-NMzdlsY0.js";import{_ as I}from"./FSSpan-CwfDYIua.js";import{_ as F}from"./FSRow-DoCXWKDP.js";import{P as J}from"./permissionInfos-BPDgTHQl.js";import{C as K}from"./base-CMiH1YbJ.js";import{S}from"./serviceFactory-Bd5jifNi.js";import{C as p}from"./composableFactory-J8cSLWf9.js";import{u as Q}from"./useAutocomplete-CCZg0XDc.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as X}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-B1cVTZp_.js";import"./FSTextField-BVT64V1F.js";import"./VField-CQBU8LtE.js";import"./useColors-WxHDk9aB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-L2iVIZdg.js";import"./FSCard-TPuCZi-6.js";import"./css-DYOPUjjE.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-CCDraVhx.js";import"./FSRadio-C2a3p5gK.js";import"./FSIcon-CqTsM4Lx.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-OAzwv8eZ.js";import"./FSSlideGroup-_2N_53q2.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-CBQCrLfv.js";import"./FSCheckbox-Bb9obVvl.js";import"./FSFadeOut-DOYA3BXE.js";import"./FSLoader-Bx7UBqYr.js";import"./elevation-BoGrGvdU.js";import"./VSelect-BFSoAAL8.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./FSClickable-CvEctr0N.js";import"./base-BNnJ_ndD.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class E{constructor(e){o(this,"id");o(this,"userId");o(this,"organisationId");o(this,"roleType");o(this,"roleId");o(this,"roleLabel");o(this,"roleIcon");o(this,"admin");o(this,"imageId");o(this,"userType");o(this,"validity");o(this,"allowNotifications");o(this,"allowSms");o(this,"allowEmails");o(this,"email");o(this,"phoneNumber");o(this,"firstName");o(this,"lastName");o(this,"name");o(this,"tags");this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowNotifications=e.allowNotifications,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class b extends E{constructor(a){super(a);o(this,"mainDashboardType");o(this,"mainDashboardId");o(this,"mainDashboardLabel");o(this,"languageCode");o(this,"timeZoneId");o(this,"permissions");this.mainDashboardType=a.mainDashboardType,this.mainDashboardId=a.mainDashboardId,this.mainDashboardLabel=a.mainDashboardLabel,this.languageCode=a.languageCode,this.timeZoneId=a.timeZoneId,this.permissions=a.permissions.map(n=>new J(n))}}const U=()=>`${K()}/user-organisations`,C=t=>`${U()}/${encodeURIComponent(t)}`,_=()=>`${U()}/current`,Y=()=>`${_()}/dashboard`,g=new S("userOrganisation",b).create(t=>t.build(t.addGet(C),t.addGetMany(U,E),t.addCreate(U),t.addUpdate(C),t.addRemove(C),S.addCustom("getCurrent",e=>e.get(_()),e=>new b(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,n)=>a.post(_(),n),a=>{const n=new b(a);return e.notify("update",n),n}),...S.addCustom("changeCurrentDashboard",(a,n)=>a.put(Y(),n),a=>{const n=new b(a);return e.notify("update",n),n})})))),ee=p.trackRef(g),A=()=>{const{track:t}=ee();return e=>{t(e)}},te=p.getMany(g);p.custom(g.getCurrent,A);p.custom(g.updateCurrent,A);p.custom(g.changeCurrentDashboard,A);const L=j({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:z,FSButton:$,FSImage:H,FSSpan:I,FSRow:F},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:n,entities:c}=te(),N=R(()=>q.value&&n.value),m=R(()=>c.value.map(l=>({id:l.id,label:l.name}))),v=l=>a({...t.userOrganisationFilters,search:l??void 0}),{toggleSet:i,search:h,init:q,onUpdate:B}=Q(c,[()=>t.userOrganisationFilters],e,v,null,l=>l.id,l=>l.name);return{userOrganisations:c,toggleSetItems:m,toggleSet:i,loading:N,search:h,onUpdate:B}}});function oe(t,e,a,n,c,N){const m=D("FSImage"),v=D("FSAutocompleteField");return u(),d(v,P({itemTitle:"name",toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":r(({item:i})=>[t.$props.modelValue?(u(),d(F,{key:0,align:"center-center",wrap:!1},{default:r(()=>[i.raw.imageId?(u(),d(m,{key:0,height:"26px",width:"26px",imageId:i.raw.imageId},null,8,["imageId"])):f("",!0),s(I,null,{default:r(()=>[y(w(i.raw.name),1)]),_:2},1024)]),_:2},1024)):f("",!0)]),"item-label":r(({item:i,font:h})=>[s(F,{align:"center-left",wrap:!1},{default:r(()=>[i.raw.imageId?(u(),d(m,{key:0,height:"26px",width:"26px",imageId:i.raw.imageId},null,8,["imageId"])):f("",!0),s(I,{font:h},{default:r(()=>[y(w(i.raw.name),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":r(i=>[s($,{variant:i.getVariant(i.item),color:i.getColor(i.item),class:Z(i.getClass(i.item)),onClick:h=>i.toggle(i.item)},{default:r(()=>[s(F,{align:"center-center",wrap:!1},{default:r(()=>[i.item.imageId?(u(),d(m,{key:0,height:"26px",width:"26px",imageId:i.item.imageId},null,8,["imageId"])):f("",!0),s(I,null,{default:r(()=>[y(w(i.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=W(L,[["render",oe]]);L.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},O={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:X},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var T,V,k;O.parameters={...O.parameters,docs:{...(T=O.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(V=O.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const _t=["Variations"];export{O as Variations,_t as __namedExportsOrder,Ct as default};
