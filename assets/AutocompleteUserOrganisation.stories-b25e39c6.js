import{f as j,g as V,D as N,E as m,F as u,G as r,A as z,I as p,M as s,K as C,L as y,N as Z,O as H,Y as K}from"./vue.esm-bundler-838daa40.js";import{F as Y}from"./FSAutocompleteField-6235d939.js";import{F as $}from"./FSCheckbox-c67676d0.js";import{F as L}from"./FSButton-8a94f710.js";import{F as J}from"./FSImage-6d919371.js";import{_ as b}from"./FSSpan-3df08200.js";import{_ as v}from"./FSRow-753b58e5.js";import{P as Q}from"./permissionInfos-da95e15e.js";import{C as W}from"./base-ef43f4ed.js";import{S}from"./serviceFactory-2dfad3af.js";import{C as g}from"./composableFactory-5509dfbf.js";import{u as X}from"./useAutocomplete-966e8cc5.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSelect-bb6508eb.js";import{_ as oe}from"./FSCol-44fe82a9.js";import"./FSSearchField-5cea187d.js";import"./FSTextField-8a8a58fd.js";import"./VField-47939064.js";import"./useColors-9d29fce3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./useSlots-6ce8c1a9.js";import"./VSpacer-7ad9c022.js";import"./useRender-f6a4770d.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSDialogMenu-79e8bccd.js";import"./FSCard-e5e470ea.js";import"./css-67cfec15.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-dc4503b8.js";import"./FSIcon-212b990d.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./FSToggleSet-e965e85d.js";import"./FSSlideGroup-0181fe8e.js";import"./uuid-08309875.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSWrapGroup-8fd0c06f.js";import"./FSFadeOut-ec9d1b7d.js";import"./FSLoader-e5a4173e.js";import"./elevation-c2192325.js";import"./filter-e8ac40d9.js";import"./VMenu-ec057191.js";import"./FSClickable-80b82e76.js";import"./base-0de1729e.js";import"./VImg-26cf6021.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-569b8a6d.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VDivider-7a82f108.js";class E{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class F extends E{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new Q(a))}}const U=()=>`${W()}/user-organisations`,w=t=>`${U()}/${encodeURIComponent(t)}`,_=()=>`${U()}/current`,ae=()=>`${_()}/dashboard`,c=new S("userOrganisation",F).create(t=>t.build(t.addGet(w),t.addGetMany(U,E),t.addCreate(U),t.addUpdate(w),t.addRemove(w),S.addCustom("getCurrent",e=>e.get(_()),e=>new F(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,i)=>a.post(_(),i),a=>{const i=new F(a);return e.notify("update",i),i}),...S.addCustom("changeCurrentDashboard",(a,i)=>a.put(ae(),i),a=>{const i=new F(a);return e.notify("update",i),i})})))),ie=g.trackRef(c),A=()=>{const{track:t}=ie();return e=>{t(e)}},re=g.getMany(c);g.custom(c.getCurrent,A);g.custom(c.updateCurrent,A);g.custom(c.changeCurrentDashboard,A);const q=j({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:Y,FSCheckbox:$,FSButton:L,FSImage:J,FSSpan:b,FSRow:v},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:h}=re(),R=V(()=>G.value&&i.value),d=V(()=>h.value.map(n=>({id:n.id,label:n.name}))),I=n=>a({...t.userOrganisationFilters,search:n??void 0}),o=(n,M,P)=>P.raw.name.toLowerCase().includes(M.toLowerCase()),{toggleSet:l,search:f,init:G,onUpdate:B}=X(h,[()=>t.userOrganisationFilters],e,I,null,n=>n.id,n=>n.name);return{userOrganisations:h,toggleSetItems:d,toggleSet:l,loading:R,search:f,customFilter:o,onUpdate:B}}});function ne(t,e,a,i,h,R){const d=N("FSImage"),I=N("FSAutocompleteField");return m(),u(I,z({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,customFilter:t.customFilter,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":r(({item:o})=>[t.$props.modelValue?(m(),u(v,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):p("",!0),s(b,null,{default:r(()=>[C(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"autocomplete-item":r(({props:o,item:l})=>[s(te,Z(H({...o,title:""})),{default:r(()=>[s(v,{align:"center-left",wrap:!1},{default:r(()=>{var f;return[t.$props.multiple?(m(),u($,{key:0,modelValue:(f=t.$props.modelValue)==null?void 0:f.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):p("",!0),l.raw.imageId?(m(),u(d,{key:1,height:"26px",width:"26px",imageId:l.raw.imageId},null,8,["imageId"])):p("",!0),s(b,null,{default:r(()=>[C(y(l.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":r(o=>[s(L,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:K(o.getClass(o.item)),onClick:l=>o.toggle(o.item)},{default:r(()=>[s(v,{align:"center-center",wrap:!1},{default:r(()=>[o.item.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):p("",!0),s(b,null,{default:r(()=>[C(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","customFilter","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=ee(q,[["render",ne]]);q.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const kt={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},O={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:oe},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var k,D,T;O.parameters={...O.parameters,docs:{...(k=O.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(D=O.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const Dt=["Variations"];export{O as Variations,Dt as __namedExportsOrder,kt as default};
