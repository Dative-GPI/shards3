import{j as E,e as q,I as O,J as C,K as A,L as a,A as x,z as n,S as w,U as _,N as B,W as G,X as H}from"./vue.esm-bundler-3386cb71.js";import{F as P}from"./FSAutocompleteField-c07b5f3c.js";import{F as j}from"./FSImage-e31cb187.js";import{F as M}from"./FSText-81a21680.js";import{P as W}from"./permissionInfos-da95e15e.js";import{C as z}from"./base-4e5ccaa5.js";import{S as p}from"./serviceFactory-3393b4e4.js";import{C as l}from"./composableFactory-0f23559b.js";import{u as Z}from"./useAutocomplete-e0c21e85.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{F as K}from"./FSCheckbox-8b71851a.js";import{_ as R}from"./FSRow-9733beba.js";import{c as X}from"./VSelect-748790cd.js";import{_ as Q}from"./FSCol-30a69fbd.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./css-bcfd232c.js";import"./VProgressCircular-14287b05.js";import"./color-2c4e2e53.js";import"./useRender-09edae02.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./tag-3fcf7e02.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./FSIcon-d790d92f.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./FSToggleSet-04483874.js";import"./FSSlideGroup-7b77a139.js";import"./FSButtonNextIcon-810ab974.js";import"./VSlideGroup-da2d654c.js";import"./index-8c130ea8.js";import"./display-ae851a2a.js";import"./group-28a085bd.js";import"./FSWrapGroup-62d315a6.js";import"./VInput-567a126f.js";import"./transition-53ccad39.js";import"./density-e280830a.js";import"./useRules-e6c68f0f.js";import"./VSpacer-ec7842b6.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./VLabel-92708ef4.js";import"./loader-885a1a56.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./filter-a78161c9.js";import"./VMenu-e9f9429e.js";import"./VOverlay-c04ebd43.js";import"./lazy-99e4da96.js";import"./router-773ce02f.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./index-dcfb76a3.js";import"./base-0de1729e.js";import"./VImg-cbb35f88.js";import"./useAppOrganisationId-1f8b1fee.js";import"./lodash-569b8a6d.js";import"./useDebounce-b634b141.js";import"./ssrBoot-9bcdb33f.js";import"./border-8045ffee.js";import"./VDivider-a97378e6.js";class D{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class g extends D{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(o=>new W(o))}}const h=()=>`${z()}/user-organisations`,U=t=>`${h()}/${encodeURIComponent(t)}`,F=()=>`${h()}/current`,Y=()=>`${F()}/dashboard`,m=new p("userOrganisation",g).create(t=>t.build(t.addGet(U),t.addGetMany(h,D),t.addCreate(h),t.addUpdate(U),t.addRemove(U),p.addCustom("getCurrent",e=>e.get(F()),e=>new g(e)),t.addNotify(e=>({...p.addCustom("updateCurrent",(o,i)=>o.post(F(),i),o=>{const i=new g(o);return e.notify("update",i),i}),...p.addCustom("changeCurrentDashboard",(o,i)=>o.post(Y(),i),o=>{const i=new g(o);return e.notify("update",i),i})})))),ee=l.trackRef(m),v=()=>{const{track:t}=ee();return e=>{t(e)}},te=l.getMany(m);l.custom(m.getCurrent,v);l.custom(m.updateCurrent,v);l.custom(m.changeCurrentDashboard,v);const $=E({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:P,FSImage:j,FSText:M},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:o,fetching:i,entities:f}=te(),I=b=>o({...t.userOrganisationFilters,search:b??void 0}),{toggleSet:u,search:d,init:S,onUpdate:r}=Z(f,[()=>t.userOrganisationFilters],e,I),s=b=>{var y;return(y=t.modelValue)==null?void 0:y.includes(b)},L=q(()=>S.value&&i.value);return{userOrganisations:f,toggleSet:u,loading:L,search:d,isSelected:s,onUpdate:r}}});function oe(t,e,o,i,f,I){const u=O("FSImage"),d=O("FSText"),S=O("FSAutocompleteField");return C(),A(S,x({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,loading:t.loading,items:t.userOrganisations,multiple:t.$props.multiple,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":e[0]||(e[0]=r=>t.search=r)},t.$attrs),{selection:a(({item:r})=>[n(R,{align:"center-center",wrap:!1},{default:a(()=>[n(u,{height:"26px",width:"26px",imageId:r.raw.imageId},null,8,["imageId"]),n(d,null,{default:a(()=>[w(_(r.raw.label),1)]),_:2},1024)]),_:2},1024)]),item:a(({props:r,item:s})=>[n(X,G(H({...r,title:""})),{default:a(()=>[n(R,{align:"center-left"},{default:a(()=>[t.$props.multiple?(C(),A(K,{key:0,modelValue:t.isSelected(s.value)},null,8,["modelValue"])):B("",!0),n(u,{height:"26px",width:"26px",imageId:s.raw.imageId},null,8,["imageId"]),n(d,null,{default:a(()=>[w(_(s.raw.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","loading","items","multiple","modelValue","onUpdate:modelValue","search"])}const k=J($,[["render",oe]]);$.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const vt={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:k,FSCol:Q},props:Object.keys(e),setup(){return{...t}},template:`
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
