import{j as E,e as q,I as O,J as C,K as A,L as a,A as x,z as n,S as w,U as _,N as B,W as G,X as H}from"./vue.esm-bundler-82a4b45a.js";import{F as P}from"./FSAutocompleteField-9928e23d.js";import{F as j}from"./FSImage-be8cb919.js";import{F as M}from"./FSText-4ee7bf26.js";import{P as W}from"./permissionInfos-da95e15e.js";import{C as z}from"./base-ec6565f2.js";import{S as p}from"./serviceFactory-7552fe10.js";import{C as l}from"./composableFactory-2f513de5.js";import{u as Z}from"./useAutocomplete-14a2146a.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{F as K}from"./FSCheckbox-4b8da1d3.js";import{_ as R}from"./FSRow-2ccfd21b.js";import{c as X}from"./VSelect-fca10f65.js";import{_ as Q}from"./FSCol-8326ac62.js";import"./FSButton-c71cf6ce.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./css-c39c4a6e.js";import"./VProgressCircular-86578fb4.js";import"./color-616211f8.js";import"./useRender-9b5fad83.js";import"./resizeObserver-bcc9c76e.js";import"./VIcon-cdae09b0.js";import"./tag-c823df72.js";import"./FSSpan-4bf272e8.js";import"./useSlots-f55d2513.js";import"./FSIcon-97799824.js";import"./FSLoader-5be1941d.js";import"./dimensions-7b60e06e.js";import"./elevation-2177f5c6.js";import"./locale-c97048b2.js";import"./proxiedModel-6f61b602.js";import"./FSToggleSet-7d54313a.js";import"./FSSlideGroup-35b11b76.js";import"./FSButtonNextIcon-3fcfc95d.js";import"./VSlideGroup-4309af86.js";import"./index-7dc37899.js";import"./display-8a1f63da.js";import"./group-a18b2437.js";import"./FSWrapGroup-727178e5.js";import"./VInput-6edbe327.js";import"./transition-0cde2f94.js";import"./density-d6a10252.js";import"./useRules-7b0f86fa.js";import"./VSpacer-dfdceece.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./VLabel-db8bd06b.js";import"./loader-80aadcba.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./filter-4073c1af.js";import"./VMenu-9dbbffaa.js";import"./VOverlay-e517ca89.js";import"./lazy-ee12d092.js";import"./router-7318af59.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./index-0f4b4beb.js";import"./base-0de1729e.js";import"./VImg-a45e529b.js";import"./useAppOrganisationId-8a62b6ee.js";import"./lodash-569b8a6d.js";import"./useDebounce-d5680b13.js";import"./ssrBoot-4291a4a7.js";import"./border-7fe0702c.js";import"./VDivider-46910f72.js";class D{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class g extends D{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(o=>new W(o))}}const h=()=>`${z()}/user-organisations`,U=t=>`${h()}/${encodeURIComponent(t)}`,F=()=>`${h()}/current`,Y=()=>`${F()}/dashboard`,m=new p("userOrganisation",g).create(t=>t.build(t.addGet(U),t.addGetMany(h,D),t.addCreate(h),t.addUpdate(U),t.addRemove(U),p.addCustom("getCurrent",e=>e.get(F()),e=>new g(e)),t.addNotify(e=>({...p.addCustom("updateCurrent",(o,i)=>o.post(F(),i),o=>{const i=new g(o);return e.notify("update",i),i}),...p.addCustom("changeCurrentDashboard",(o,i)=>o.post(Y(),i),o=>{const i=new g(o);return e.notify("update",i),i})})))),ee=l.trackRef(m),v=()=>{const{track:t}=ee();return e=>{t(e)}},te=l.getMany(m);l.custom(m.getCurrent,v);l.custom(m.updateCurrent,v);l.custom(m.changeCurrentDashboard,v);const $=E({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:P,FSImage:j,FSText:M},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:o,fetching:i,entities:f}=te(),I=b=>o({...t.userOrganisationFilters,search:b??void 0}),{toggleSet:u,search:d,init:S,onUpdate:r}=Z(f,[()=>t.userOrganisationFilters],e,I),s=b=>{var y;return(y=t.modelValue)==null?void 0:y.includes(b)},L=q(()=>S.value&&i.value);return{userOrganisations:f,toggleSet:u,loading:L,search:d,isSelected:s,onUpdate:r}}});function oe(t,e,o,i,f,I){const u=O("FSImage"),d=O("FSText"),S=O("FSAutocompleteField");return C(),A(S,x({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,loading:t.loading,items:t.userOrganisations,multiple:t.$props.multiple,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":e[0]||(e[0]=r=>t.search=r)},t.$attrs),{selection:a(({item:r})=>[n(R,{align:"center-center",wrap:!1},{default:a(()=>[n(u,{height:"26px",width:"26px",imageId:r.raw.imageId},null,8,["imageId"]),n(d,null,{default:a(()=>[w(_(r.raw.label),1)]),_:2},1024)]),_:2},1024)]),item:a(({props:r,item:s})=>[n(X,G(H({...r,title:""})),{default:a(()=>[n(R,{align:"center-left"},{default:a(()=>[t.$props.multiple?(C(),A(K,{key:0,modelValue:t.isSelected(s.value)},null,8,["modelValue"])):B("",!0),n(u,{height:"26px",width:"26px",imageId:s.raw.imageId},null,8,["imageId"]),n(d,null,{default:a(()=>[w(_(s.raw.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","loading","items","multiple","modelValue","onUpdate:modelValue","search"])}const k=J($,[["render",oe]]);$.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const vt={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:k,FSCol:Q},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var N,V,T;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(V=c.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const It=["Variations"];export{c as Variations,It as __namedExportsOrder,vt as default};
