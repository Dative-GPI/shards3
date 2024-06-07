import{f as j,g as V,D as k,E as m,F as u,G as r,A as z,I as p,P as s,K as C,L as y,R as Z,S as H,X as K}from"./vue.esm-bundler-f632b118.js";import{F as X}from"./FSAutocompleteField-ff78314e.js";import{F as $}from"./FSCheckbox-5ebd306d.js";import{F as L}from"./FSButton-1e8cfafa.js";import{F as J}from"./FSImage-8cd50a0c.js";import{_ as O}from"./FSSpan-4ac1bb71.js";import{_ as v}from"./FSRow-76f4ad1e.js";import{P as Q}from"./permissionInfos-da95e15e.js";import{C as W}from"./base-dd7352d9.js";import{S}from"./serviceFactory-2dfad3af.js";import{C as g}from"./composableFactory-0b8943d1.js";import{u as Y}from"./useAutocomplete-a7e2bf25.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSelect-00399f8e.js";import{_ as oe}from"./FSCol-606e8271.js";import"./FSSearchField-214f8d7b.js";import"./FSTextField-cc4424b2.js";import"./VField-77215d36.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./useSlots-de625f75.js";import"./VSpacer-e4feda29.js";import"./useRender-7972ae0c.js";import"./index-6e5ff885.js";import"./transition-8112e83c.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./tag-573fddf1.js";import"./density-78dfa9a7.js";import"./dimensions-44367821.js";import"./loader-b8e78e76.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./anchor-c0c71d87.js";import"./rounded-ce7e598f.js";import"./VDefaultsProvider-7c3b8e30.js";import"./forwardRefs-e658ad70.js";import"./useRules-31faed85.js";import"./index-cd1f7a70.js";import"./useTranslations-f6aba3ae.js";import"./FSToggleSet-e691b0b6.js";import"./FSSlideGroup-3d07e2c7.js";import"./uuid-08309875.js";import"./css-185b4786.js";import"./VSlideGroup-e23bcde7.js";import"./display-219b55f3.js";import"./goto-8c61ef4d.js";import"./group-e84b8205.js";import"./FSWrapGroup-d96e0ce8.js";import"./FSDialogMenu-7826371b.js";import"./FSCard-75477b2b.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./lazy-2bcc6dac.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./FSRadioGroup-b87c20cc.js";import"./FSIcon-110a991e.js";import"./VSelectionControl-c78f62cb.js";import"./index-131c488a.js";import"./FSFadeOut-0ebdb15e.js";import"./FSLoader-af2e647d.js";import"./elevation-cd810633.js";import"./filter-ad9d8f4b.js";import"./VMenu-99bc218e.js";import"./FSClickable-af644c0d.js";import"./base-0de1729e.js";import"./VImg-7d50303f.js";import"./useAppOrganisationId-0d113abb.js";import"./lodash-569b8a6d.js";import"./ssrBoot-8619e9d9.js";import"./border-462a71d7.js";import"./VDivider-268fa528.js";class E{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class F extends E{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new Q(a))}}const U=()=>`${W()}/user-organisations`,w=t=>`${U()}/${encodeURIComponent(t)}`,_=()=>`${U()}/current`,ae=()=>`${_()}/dashboard`,c=new S("userOrganisation",F).create(t=>t.build(t.addGet(w),t.addGetMany(U,E),t.addCreate(U),t.addUpdate(w),t.addRemove(w),S.addCustom("getCurrent",e=>e.get(_()),e=>new F(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,i)=>a.post(_(),i),a=>{const i=new F(a);return e.notify("update",i),i}),...S.addCustom("changeCurrentDashboard",(a,i)=>a.put(ae(),i),a=>{const i=new F(a);return e.notify("update",i),i})})))),ie=g.trackRef(c),A=()=>{const{track:t}=ie();return e=>{t(e)}},re=g.getMany(c);g.custom(c.getCurrent,A);g.custom(c.updateCurrent,A);g.custom(c.changeCurrentDashboard,A);const q=j({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:X,FSCheckbox:$,FSButton:L,FSImage:J,FSSpan:O,FSRow:v},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:h}=re(),R=V(()=>G.value&&i.value),d=V(()=>h.value.map(n=>({id:n.id,label:n.name}))),I=n=>a({...t.userOrganisationFilters,search:n??void 0}),o=(n,P,M)=>M.raw.name.toLowerCase().includes(P.toLowerCase()),{toggleSet:l,search:f,init:G,onUpdate:B}=Y(h,[()=>t.userOrganisationFilters],e,I,null,n=>n.id,n=>n.name);return{userOrganisations:h,toggleSetItems:d,toggleSet:l,loading:R,search:f,customFilter:o,onUpdate:B}}});function ne(t,e,a,i,h,R){const d=k("FSImage"),I=k("FSAutocompleteField");return m(),u(I,z({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,customFilter:t.customFilter,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":r(({item:o})=>[t.$props.modelValue?(m(),u(v,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):p("",!0),s(O,null,{default:r(()=>[C(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"autocomplete-item":r(({props:o,item:l})=>[s(te,Z(H({...o,title:""})),{default:r(()=>[s(v,{align:"center-left",wrap:!1},{default:r(()=>{var f;return[t.$props.multiple?(m(),u($,{key:0,modelValue:(f=t.$props.modelValue)==null?void 0:f.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):p("",!0),l.raw.imageId?(m(),u(d,{key:1,height:"26px",width:"26px",imageId:l.raw.imageId},null,8,["imageId"])):p("",!0),s(O,null,{default:r(()=>[C(y(l.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":r(o=>[s(L,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:K(o.getClass(o.item)),onClick:l=>o.toggle(o.item)},{default:r(()=>[s(v,{align:"center-center",wrap:!1},{default:r(()=>[o.item.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):p("",!0),s(O,null,{default:r(()=>[C(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","customFilter","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=ee(q,[["render",ne]]);q.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Nt={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:oe},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var N,D,T;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(D=b.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const Dt=["Variations"];export{b as Variations,Dt as __namedExportsOrder,Nt as default};
