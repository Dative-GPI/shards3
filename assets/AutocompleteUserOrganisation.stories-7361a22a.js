import{f as j,g as V,D as k,E as m,F as u,G as r,A as z,I as p,P as s,K as C,L as y,R as Z,S as H,X as K}from"./vue.esm-bundler-6f923154.js";import{F as X}from"./FSAutocompleteField-357897b3.js";import{F as $}from"./FSCheckbox-4fa3808a.js";import{F as L}from"./FSButton-ff673895.js";import{F as J}from"./FSImage-1529358f.js";import{_ as O}from"./FSSpan-7bb94541.js";import{_ as v}from"./FSRow-64caadb9.js";import{P as Q}from"./permissionInfos-da95e15e.js";import{C as W}from"./base-1b059240.js";import{S}from"./serviceFactory-2dfad3af.js";import{C as g}from"./composableFactory-85dd6557.js";import{u as Y}from"./useAutocomplete-dee0c5fb.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSelect-b637e5b8.js";import{_ as oe}from"./FSCol-5ed907ac.js";import"./FSSearchField-ec495859.js";import"./FSTextField-add61627.js";import"./VField-d1f54092.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./useSlots-21493751.js";import"./VSpacer-54f0d5ce.js";import"./useRender-1cb09274.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./tag-a7b67944.js";import"./density-03404b67.js";import"./dimensions-dec12c77.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./anchor-52e92869.js";import"./rounded-1f8e51a9.js";import"./VDefaultsProvider-a08a9a42.js";import"./forwardRefs-e658ad70.js";import"./useRules-8e3c4a4a.js";import"./index-114ba00f.js";import"./useTranslations-59cd146d.js";import"./FSDialogMenu-7aaa5a49.js";import"./FSCard-32925b42.js";import"./css-0cf2e273.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./FSRadioGroup-52f2d9ef.js";import"./FSIcon-93774118.js";import"./VSelectionControl-40c897c6.js";import"./index-55248dcb.js";import"./FSToggleSet-294c6bb8.js";import"./FSSlideGroup-ddac1e24.js";import"./uuid-08309875.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./group-91945d16.js";import"./FSWrapGroup-a40e4a86.js";import"./FSFadeOut-1de34239.js";import"./FSLoader-6b86cc0d.js";import"./elevation-2c5be1c3.js";import"./filter-e9cedeb6.js";import"./VMenu-31bd6e5f.js";import"./FSClickable-e71ee20f.js";import"./base-0de1729e.js";import"./VImg-8e65ad17.js";import"./useAppOrganisationId-8a611d3f.js";import"./lodash-569b8a6d.js";import"./ssrBoot-082b8501.js";import"./border-f53cef89.js";import"./VDivider-dfa46b18.js";class E{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class F extends E{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new Q(a))}}const U=()=>`${W()}/user-organisations`,w=t=>`${U()}/${encodeURIComponent(t)}`,_=()=>`${U()}/current`,ae=()=>`${_()}/dashboard`,c=new S("userOrganisation",F).create(t=>t.build(t.addGet(w),t.addGetMany(U,E),t.addCreate(U),t.addUpdate(w),t.addRemove(w),S.addCustom("getCurrent",e=>e.get(_()),e=>new F(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,i)=>a.post(_(),i),a=>{const i=new F(a);return e.notify("update",i),i}),...S.addCustom("changeCurrentDashboard",(a,i)=>a.put(ae(),i),a=>{const i=new F(a);return e.notify("update",i),i})})))),ie=g.trackRef(c),A=()=>{const{track:t}=ie();return e=>{t(e)}},re=g.getMany(c);g.custom(c.getCurrent,A);g.custom(c.updateCurrent,A);g.custom(c.changeCurrentDashboard,A);const q=j({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:X,FSCheckbox:$,FSButton:L,FSImage:J,FSSpan:O,FSRow:v},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:h}=re(),R=V(()=>G.value&&i.value),d=V(()=>h.value.map(n=>({id:n.id,label:n.name}))),I=n=>a({...t.userOrganisationFilters,search:n??void 0}),o=(n,P,M)=>M.raw.name.toLowerCase().includes(P.toLowerCase()),{toggleSet:l,search:f,init:G,onUpdate:B}=Y(h,[()=>t.userOrganisationFilters],e,I,null,n=>n.id,n=>n.name);return{userOrganisations:h,toggleSetItems:d,toggleSet:l,loading:R,search:f,customFilter:o,onUpdate:B}}});function ne(t,e,a,i,h,R){const d=k("FSImage"),I=k("FSAutocompleteField");return m(),u(I,z({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,customFilter:t.customFilter,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":r(({item:o})=>[t.$props.modelValue?(m(),u(v,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):p("",!0),s(O,null,{default:r(()=>[C(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"autocomplete-item":r(({props:o,item:l})=>[s(te,Z(H({...o,title:""})),{default:r(()=>[s(v,{align:"center-left",wrap:!1},{default:r(()=>{var f;return[t.$props.multiple?(m(),u($,{key:0,modelValue:(f=t.$props.modelValue)==null?void 0:f.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):p("",!0),l.raw.imageId?(m(),u(d,{key:1,height:"26px",width:"26px",imageId:l.raw.imageId},null,8,["imageId"])):p("",!0),s(O,null,{default:r(()=>[C(y(l.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":r(o=>[s(L,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:K(o.getClass(o.item)),onClick:l=>o.toggle(o.item)},{default:r(()=>[s(v,{align:"center-center",wrap:!1},{default:r(()=>[o.item.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):p("",!0),s(O,null,{default:r(()=>[C(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","customFilter","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=ee(q,[["render",ne]]);q.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Nt={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:oe},props:Object.keys(e),setup(){return{...t}},template:`
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
