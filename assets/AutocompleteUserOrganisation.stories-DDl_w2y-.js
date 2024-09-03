var x=Object.defineProperty;var L=(t,e,i)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var o=(t,e,i)=>L(t,typeof e!="symbol"?e+"":e,i);import{d as E,c as y,y as I,z as F,A as C,B as f,m as q,D as B,L as A,M as G,P as M}from"./vue.esm-bundler-Vj2X7okO.js";import{F as P}from"./FSAutocompleteField-Dcx_zOza.js";import{F as R}from"./FSButton-Dxr_k2yH.js";import{F as j}from"./FSImage-CpF11Kc7.js";import{P as Z}from"./permissionInfos-BPDgTHQl.js";import{C as z}from"./base-Cf5ASDDk.js";import{S as d}from"./serviceFactory-Bd5jifNi.js";import{C as l}from"./composableFactory-B0937_6N.js";import{u as H}from"./useAutocomplete-BIo_snCx.js";import{u as J}from"./useTranslations-DyPMaPr_.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Q}from"./FSCol-Bk577joi.js";import"./FSSearchField-ByY1EROu.js";import"./FSTextField-nbXKtPgl.js";import"./FSBaseField-DIHRCDOI.js";import"./FSSpan-C4TWI1ol.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-ClGgFu9Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DqOMA9k1.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSDialogMenu-DJMBxSqq.js";import"./FSCard-IkM7vPXg.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-DwZDosIV.js";import"./uuid-DTaye2KM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-D0rXU8K8.js";import"./FSWrapGroup-tsnhcXEt.js";import"./FSCheckbox-oizSWMk6.js";import"./FSIcon-CNrZYw3j.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-CORcN4YC.js";import"./VImg-tlatQCTU.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-DBjzeRFm.js";import"./VList-CE84Ungi.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-DDOJpQXv.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./FSClickable-B6i4bUTy.js";import"./FSImageUI-zYgpgCJu.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./lodash-BiW_TGGX.js";class D{constructor(e){o(this,"id");o(this,"userId");o(this,"organisationId");o(this,"roleType");o(this,"roleId");o(this,"roleLabel");o(this,"roleIcon");o(this,"admin");o(this,"imageId");o(this,"userType");o(this,"validity");o(this,"allowNotifications");o(this,"allowSms");o(this,"allowEmails");o(this,"email");o(this,"phoneNumber");o(this,"firstName");o(this,"lastName");o(this,"name");o(this,"tags");this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowNotifications=e.allowNotifications,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class u extends D{constructor(i){super(i);o(this,"mainDashboardType");o(this,"mainDashboardId");o(this,"mainDashboardLabel");o(this,"languageCode");o(this,"timeZoneId");o(this,"permissions");this.mainDashboardType=i.mainDashboardType,this.mainDashboardId=i.mainDashboardId,this.mainDashboardLabel=i.mainDashboardLabel,this.languageCode=i.languageCode,this.timeZoneId=i.timeZoneId,this.permissions=i.permissions.map(n=>new Z(n))}}const g=()=>`${z()}/user-organisations`,b=t=>`${g()}/${encodeURIComponent(t)}`,S=()=>`${g()}/current`,W=()=>`${S()}/dashboard`,s=new d("userOrganisation",u).create(t=>t.build(t.addGet(b),t.addGetMany(g,D),t.addCreate(g),t.addUpdate(b),t.addRemove(b),d.addCustom("getCurrent",e=>e.get(S()),e=>new u(e)),t.addNotify(e=>({...d.addCustom("updateCurrent",(i,n)=>i.post(S(),n),i=>{const n=new u(i);return e.notify("update",n),n}),...d.addCustom("changeCurrentDashboard",(i,n)=>i.put(W(),n),i=>{const n=new u(i);return e.notify("update",n),n})})))),X=l.trackRef(s),O=()=>{const{track:t}=X();return e=>{t(e)}},Y=l.getMany(s);l.custom(s.getCurrent,O);l.custom(s.updateCurrent,O);l.custom(s.changeCurrentDashboard,O);const T=E({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:P,FSButton:R,FSImage:j},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:i,fetching:n,entities:c}=Y(),{$tr:v}=J(),m=y(()=>k.value&&n.value),h=y(()=>t.multiple&&t.modelValue?v("ui.autocomplete-user-organisation.placeholder","{0} user(s) selected",t.modelValue.length):null),a=r=>i({...t.userOrganisationFilters,search:r??void 0}),{toggleSet:U,init:k,onUpdate:$}=H(c,[()=>t.userOrganisationFilters],e,a,null,r=>r.id,r=>r.name);return{userOrganisations:c,placeholder:h,toggleSet:U,loading:m,onUpdate:$}}});function ee(t,e,i,n,c,v){const m=I("FSImage"),h=I("FSAutocompleteField");return F(),C(h,q({itemTitle:"name",toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,placeholder:t.placeholder,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"item-prepend":f(({item:a})=>[a.imageId?(F(),C(m,{key:0,height:"26px",width:"26px",imageId:a.imageId},null,8,["imageId"])):B("",!0)]),"toggle-set-item":f(a=>[A(R,{padding:a.item.imageId?["6px 16px","4px 12px"]:void 0,variant:a.getVariant(a.item),color:a.getColor(a.item),class:M(a.getClass(a.item)),label:a.item.name,onClick:U=>a.toggle(a.item)},G({_:2},[a.item.imageId?{name:"prepend",fn:f(()=>[A(m,{height:"26px",width:"26px",imageId:a.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const V=K(T,[["render",ee]]);T.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Ft={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:V,FSCol:Q},props:Object.keys(e),setup(){return{...t}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
    </FSCol>`})};var w,N,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const Ct=["Variations"];export{p as Variations,Ct as __namedExportsOrder,Ft as default};
