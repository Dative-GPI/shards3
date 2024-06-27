var G=Object.defineProperty;var M=(t,e,a)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var o=(t,e,a)=>M(t,typeof e!="symbol"?e+"":e,a);import{d as j,c as R,y as D,z as u,A as d,B as n,m as P,D as f,K as s,E as y,G as C,S as Z}from"./vue.esm-bundler-DeSao-KJ.js";import{F as z}from"./FSAutocompleteField-BK95k7Ah.js";import{F as $}from"./FSButton-F4U-An3c.js";import{F as H}from"./FSImage-DA-prI0c.js";import{_ as I}from"./FSSpan-t6bMdSRn.js";import{_ as F}from"./FSRow-JJutUvlP.js";import{P as K}from"./permissionInfos-BPDgTHQl.js";import{C as J}from"./base-Db9bJp6t.js";import{S}from"./serviceFactory-Bd5jifNi.js";import{C as p}from"./composableFactory-rrf4GM2L.js";import{u as Q}from"./useAutocomplete-DIOO3j-W.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as X}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-Bk9E08WQ.js";import"./FSTextField-BoGA7VT8.js";import"./VField-C-8g7gy8.js";import"./useColors-C3YrZIBy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-CtAO0Sgc.js";import"./FSCard-Cr3VWqvL.js";import"./css-BnhLLynS.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-F53nrXFK.js";import"./FSRadio-DlvvITIU.js";import"./FSIcon-DnAZkNNf.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-BmzhnM61.js";import"./FSSlideGroup-BNPQrUcW.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-D1ZJoYu1.js";import"./FSCheckbox-Dba0sDeH.js";import"./FSFadeOut-D6QzK9Bb.js";import"./FSLoader-BG9q5Y9c.js";import"./elevation-BBJMtRPf.js";import"./VSelect-Bw07qUGf.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./FSClickable-CtyeoOHr.js";import"./base-BNnJ_ndD.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class E{constructor(e){o(this,"id");o(this,"userId");o(this,"organisationId");o(this,"roleType");o(this,"roleId");o(this,"roleLabel");o(this,"roleIcon");o(this,"admin");o(this,"imageId");o(this,"userType");o(this,"validity");o(this,"allowSms");o(this,"allowEmails");o(this,"email");o(this,"phoneNumber");o(this,"firstName");o(this,"lastName");o(this,"name");o(this,"tags");this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class b extends E{constructor(a){super(a);o(this,"mainDashboardType");o(this,"mainDashboardId");o(this,"mainDashboardLabel");o(this,"languageCode");o(this,"timeZoneId");o(this,"permissions");this.mainDashboardType=a.mainDashboardType,this.mainDashboardId=a.mainDashboardId,this.mainDashboardLabel=a.mainDashboardLabel,this.languageCode=a.languageCode,this.timeZoneId=a.timeZoneId,this.permissions=a.permissions.map(r=>new K(r))}}const U=()=>`${J()}/user-organisations`,w=t=>`${U()}/${encodeURIComponent(t)}`,_=()=>`${U()}/current`,Y=()=>`${_()}/dashboard`,g=new S("userOrganisation",b).create(t=>t.build(t.addGet(w),t.addGetMany(U,E),t.addCreate(U),t.addUpdate(w),t.addRemove(w),S.addCustom("getCurrent",e=>e.get(_()),e=>new b(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,r)=>a.post(_(),r),a=>{const r=new b(a);return e.notify("update",r),r}),...S.addCustom("changeCurrentDashboard",(a,r)=>a.put(Y(),r),a=>{const r=new b(a);return e.notify("update",r),r})})))),ee=p.trackRef(g),A=()=>{const{track:t}=ee();return e=>{t(e)}},te=p.getMany(g);p.custom(g.getCurrent,A);p.custom(g.updateCurrent,A);p.custom(g.changeCurrentDashboard,A);const L=j({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:z,FSButton:$,FSImage:H,FSSpan:I,FSRow:F},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:r,entities:c}=te(),N=R(()=>q.value&&r.value),m=R(()=>c.value.map(l=>({id:l.id,label:l.name}))),v=l=>a({...t.userOrganisationFilters,search:l??void 0}),{toggleSet:i,search:h,init:q,onUpdate:B}=Q(c,[()=>t.userOrganisationFilters],e,v,null,l=>l.id,l=>l.name);return{userOrganisations:c,toggleSetItems:m,toggleSet:i,loading:N,search:h,onUpdate:B}}});function oe(t,e,a,r,c,N){const m=D("FSImage"),v=D("FSAutocompleteField");return u(),d(v,P({itemTitle:"name",toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":n(({item:i})=>[t.$props.modelValue?(u(),d(F,{key:0,align:"center-center",wrap:!1},{default:n(()=>[i.raw.imageId?(u(),d(m,{key:0,height:"26px",width:"26px",imageId:i.raw.imageId},null,8,["imageId"])):f("",!0),s(I,null,{default:n(()=>[y(C(i.raw.name),1)]),_:2},1024)]),_:2},1024)):f("",!0)]),"item-label":n(({item:i,font:h})=>[s(F,{align:"center-left",wrap:!1},{default:n(()=>[i.raw.imageId?(u(),d(m,{key:0,height:"26px",width:"26px",imageId:i.raw.imageId},null,8,["imageId"])):f("",!0),s(I,{font:h},{default:n(()=>[y(C(i.raw.name),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":n(i=>[s($,{variant:i.getVariant(i.item),color:i.getColor(i.item),class:Z(i.getClass(i.item)),onClick:h=>i.toggle(i.item)},{default:n(()=>[s(F,{align:"center-center",wrap:!1},{default:n(()=>[i.item.imageId?(u(),d(m,{key:0,height:"26px",width:"26px",imageId:i.item.imageId},null,8,["imageId"])):f("",!0),s(I,null,{default:n(()=>[y(C(i.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=W(L,[["render",oe]]);L.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Nt={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},O={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:X},props:Object.keys(e),setup(){return{...t}},template:`
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
}`,...(k=(V=O.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const Rt=["Variations"];export{O as Variations,Rt as __namedExportsOrder,Nt as default};
