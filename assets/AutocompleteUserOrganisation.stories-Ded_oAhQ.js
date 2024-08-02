var G=Object.defineProperty;var M=(t,e,a)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var o=(t,e,a)=>M(t,typeof e!="symbol"?e+"":e,a);import{d as j,c as R,y as D,z as u,A as d,B as r,m as P,D as f,I as s,E as y,G as w,S as Z}from"./vue.esm-bundler-DC82FEWN.js";import{F as z}from"./FSAutocompleteField-D5r3kgIX.js";import{F as $}from"./FSButton-ClOTuXeD.js";import{F as H}from"./FSImage-X6Wcq3gA.js";import{_ as I}from"./FSSpan-CpNfN-10.js";import{_ as U}from"./FSRow-DoCXWKDP.js";import{P as J}from"./permissionInfos-BPDgTHQl.js";import{C as K}from"./base-CMiH1YbJ.js";import{S}from"./serviceFactory-Bd5jifNi.js";import{C as p}from"./composableFactory-J8cSLWf9.js";import{u as Q}from"./useAutocomplete-Cvn9mcKc.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as X}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-Dkl9ngGr.js";import"./FSTextField-YQEDlk4D.js";import"./FSBaseField-DzcAKChX.js";import"./useColors-C2RWUFtR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-B5x8xkbY.js";import"./useSlots-DN9F4SV8.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./VIcon-Dc-dFojD.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./VProgressCircular-C-U4HXtE.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-pfqo0k-B.js";import"./FSCard-EcIwA-Oh.js";import"./css-DYOPUjjE.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-C8y-dFxB.js";import"./FSRadio-CEaf4v3M.js";import"./FSIcon-ClfMDAJS.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-Cy04EKkz.js";import"./FSSlideGroup-B38R2y2I.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-eUoV_kUj.js";import"./FSCheckbox-D5UQVyP1.js";import"./FSFadeOut-CvvHY5il.js";import"./FSLoader-06X_hY2B.js";import"./elevation-BTkUCD39.js";import"./VSelect-CcwwQqHQ.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./FSClickable-aI6guRt-.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class E{constructor(e){o(this,"id");o(this,"userId");o(this,"organisationId");o(this,"roleType");o(this,"roleId");o(this,"roleLabel");o(this,"roleIcon");o(this,"admin");o(this,"imageId");o(this,"userType");o(this,"validity");o(this,"allowNotifications");o(this,"allowSms");o(this,"allowEmails");o(this,"email");o(this,"phoneNumber");o(this,"firstName");o(this,"lastName");o(this,"name");o(this,"tags");this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowNotifications=e.allowNotifications,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class b extends E{constructor(a){super(a);o(this,"mainDashboardType");o(this,"mainDashboardId");o(this,"mainDashboardLabel");o(this,"languageCode");o(this,"timeZoneId");o(this,"permissions");this.mainDashboardType=a.mainDashboardType,this.mainDashboardId=a.mainDashboardId,this.mainDashboardLabel=a.mainDashboardLabel,this.languageCode=a.languageCode,this.timeZoneId=a.timeZoneId,this.permissions=a.permissions.map(n=>new J(n))}}const v=()=>`${K()}/user-organisations`,C=t=>`${v()}/${encodeURIComponent(t)}`,_=()=>`${v()}/current`,Y=()=>`${_()}/dashboard`,g=new S("userOrganisation",b).create(t=>t.build(t.addGet(C),t.addGetMany(v,E),t.addCreate(v),t.addUpdate(C),t.addRemove(C),S.addCustom("getCurrent",e=>e.get(_()),e=>new b(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,n)=>a.post(_(),n),a=>{const n=new b(a);return e.notify("update",n),n}),...S.addCustom("changeCurrentDashboard",(a,n)=>a.put(Y(),n),a=>{const n=new b(a);return e.notify("update",n),n})})))),ee=p.trackRef(g),A=()=>{const{track:t}=ee();return e=>{t(e)}},te=p.getMany(g);p.custom(g.getCurrent,A);p.custom(g.updateCurrent,A);p.custom(g.changeCurrentDashboard,A);const L=j({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:z,FSButton:$,FSImage:H,FSSpan:I,FSRow:U},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:n,entities:c}=te(),N=R(()=>q.value&&n.value),m=R(()=>c.value.map(l=>({id:l.id,label:l.name}))),F=l=>a({...t.userOrganisationFilters,search:l??void 0}),{toggleSet:i,search:h,init:q,onUpdate:B}=Q(c,[()=>t.userOrganisationFilters],e,F,null,l=>l.id,l=>l.name);return{userOrganisations:c,toggleSetItems:m,toggleSet:i,loading:N,search:h,onUpdate:B}}});function oe(t,e,a,n,c,N){const m=D("FSImage"),F=D("FSAutocompleteField");return u(),d(F,P({itemTitle:"name",toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":r(({item:i})=>[t.$props.modelValue?(u(),d(U,{key:0,align:"center-center",wrap:!1},{default:r(()=>[i.raw.imageId?(u(),d(m,{key:0,height:"26px",width:"26px",imageId:i.raw.imageId},null,8,["imageId"])):f("",!0),s(I,null,{default:r(()=>[y(w(i.raw.name),1)]),_:2},1024)]),_:2},1024)):f("",!0)]),"item-label":r(({item:i,font:h})=>[s(U,{align:"center-left",wrap:!1},{default:r(()=>[i.raw.imageId?(u(),d(m,{key:0,height:"26px",width:"26px",imageId:i.raw.imageId},null,8,["imageId"])):f("",!0),s(I,{font:h},{default:r(()=>[y(w(i.raw.name),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":r(i=>[s($,{variant:i.getVariant(i.item),color:i.getColor(i.item),class:Z(i.getClass(i.item)),onClick:h=>i.toggle(i.item)},{default:r(()=>[s(U,{align:"center-center",wrap:!1},{default:r(()=>[i.item.imageId?(u(),d(m,{key:0,height:"26px",width:"26px",imageId:i.item.imageId},null,8,["imageId"])):f("",!0),s(I,null,{default:r(()=>[y(w(i.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=W(L,[["render",oe]]);L.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},O={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:X},props:Object.keys(e),setup(){return{...t}},template:`
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
