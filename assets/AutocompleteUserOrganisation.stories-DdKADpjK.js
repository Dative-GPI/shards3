var x=Object.defineProperty;var L=(t,e,i)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var o=(t,e,i)=>L(t,typeof e!="symbol"?e+"":e,i);import{d as E,c as y,y as I,z as F,A as C,B as f,m as q,D as B,L as A,M as G,P as M}from"./vue.esm-bundler--l9E1zCM.js";import{F as P}from"./FSAutocompleteField-CTffwpro.js";import{F as R}from"./FSButton-BPKnQ3W2.js";import{F as j}from"./FSImage-COGNQiye.js";import{P as Z}from"./permissionInfos-BPDgTHQl.js";import{C as z}from"./base-BcjN1n8z.js";import{S as d}from"./serviceFactory-Bd5jifNi.js";import{C as l}from"./composableFactory-BJn24iiy.js";import{u as H}from"./useAutocomplete-C1ph6JPC.js";import{u as J}from"./useTranslations-ByKtt_-5.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Q}from"./FSCol-BA_LQqMv.js";import"./FSSearchField-B3SNj64H.js";import"./FSTextField-CORSOnFI.js";import"./FSBaseField-vXRxqDM_.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./useColors-CcOmb8TW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-uJWLcFzd.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./VIcon-CRzxwZ_P.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./VProgressCircular-DiflYTWZ.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./FSDialogMenu-B4qN8dQk.js";import"./FSCard-DXUcd4gZ.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./router-B0OmHOdA.js";import"./FSSlideGroup-DeeIs7LB.js";import"./uuid-DTaye2KM.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BsXD3GQs.js";import"./FSWrapGroup-BLHTvc8Y.js";import"./FSCheckbox-O0BYl1sh.js";import"./FSIcon-BHbXv1sW.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-D6eFi9gL.js";import"./VImg-r61Tw9eL.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-CPRKwXqX.js";import"./VList-CMkQDUHu.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-DuVohGsR.js";import"./VMenu-DGJWui2w.js";import"./filter-BQY2ohDP.js";import"./FSClickable-BjrLGEPN.js";import"./FSImageUI-B9FxqnvB.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-CtPU_OX2.js";import"./lodash-BiW_TGGX.js";class D{constructor(e){o(this,"id");o(this,"userId");o(this,"organisationId");o(this,"roleType");o(this,"roleId");o(this,"roleLabel");o(this,"roleIcon");o(this,"admin");o(this,"imageId");o(this,"userType");o(this,"validity");o(this,"allowNotifications");o(this,"allowSms");o(this,"allowEmails");o(this,"email");o(this,"phoneNumber");o(this,"firstName");o(this,"lastName");o(this,"name");o(this,"tags");this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowNotifications=e.allowNotifications,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class u extends D{constructor(i){super(i);o(this,"mainDashboardType");o(this,"mainDashboardId");o(this,"mainDashboardLabel");o(this,"languageCode");o(this,"timeZoneId");o(this,"permissions");this.mainDashboardType=i.mainDashboardType,this.mainDashboardId=i.mainDashboardId,this.mainDashboardLabel=i.mainDashboardLabel,this.languageCode=i.languageCode,this.timeZoneId=i.timeZoneId,this.permissions=i.permissions.map(n=>new Z(n))}}const g=()=>`${z()}/user-organisations`,b=t=>`${g()}/${encodeURIComponent(t)}`,S=()=>`${g()}/current`,W=()=>`${S()}/dashboard`,s=new d("userOrganisation",u).create(t=>t.build(t.addGet(b),t.addGetMany(g,D),t.addCreate(g),t.addUpdate(b),t.addRemove(b),d.addCustom("getCurrent",e=>e.get(S()),e=>new u(e)),t.addNotify(e=>({...d.addCustom("updateCurrent",(i,n)=>i.post(S(),n),i=>{const n=new u(i);return e.notify("update",n),n}),...d.addCustom("changeCurrentDashboard",(i,n)=>i.put(W(),n),i=>{const n=new u(i);return e.notify("update",n),n})})))),X=l.trackRef(s),O=()=>{const{track:t}=X();return e=>{t(e)}},Y=l.getMany(s);l.custom(s.getCurrent,O);l.custom(s.updateCurrent,O);l.custom(s.changeCurrentDashboard,O);const T=E({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:P,FSButton:R,FSImage:j},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:i,fetching:n,entities:c}=Y(),{$tr:v}=J(),m=y(()=>k.value&&n.value),h=y(()=>t.multiple&&t.modelValue?v("ui.autocomplete-user-organisation.placeholder","{0} user(s) selected",t.modelValue.length):null),a=r=>i({...t.userOrganisationFilters,search:r??void 0}),{toggleSet:U,init:k,onUpdate:$}=H(c,[()=>t.userOrganisationFilters],e,a,null,r=>r.id,r=>r.name);return{userOrganisations:c,placeholder:h,toggleSet:U,loading:m,onUpdate:$}}});function ee(t,e,i,n,c,v){const m=I("FSImage"),h=I("FSAutocompleteField");return F(),C(h,q({itemTitle:"name",toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,placeholder:t.placeholder,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"item-prepend":f(({item:a})=>[a.imageId?(F(),C(m,{key:0,height:"26px",width:"26px",imageId:a.imageId},null,8,["imageId"])):B("",!0)]),"toggle-set-item":f(a=>[A(R,{padding:a.item.imageId?["6px 16px","4px 12px"]:void 0,variant:a.getVariant(a.item),color:a.getColor(a.item),class:M(a.getClass(a.item)),label:a.item.name,onClick:U=>a.toggle(a.item)},G({_:2},[a.item.imageId?{name:"prepend",fn:f(()=>[A(m,{height:"26px",width:"26px",imageId:a.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const V=K(T,[["render",ee]]);T.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const It={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:V,FSCol:Q},props:Object.keys(e),setup(){return{...t}},template:`
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
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const Ft=["Variations"];export{p as Variations,Ft as __namedExportsOrder,It as default};
