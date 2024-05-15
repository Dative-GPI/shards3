import{j as G,e as V,I as N,J as m,K as u,L as n,B as H,N as p,A as s,U as C,V as y,W as P,X as j,_ as M}from"./vue.esm-bundler-857e5af7.js";import{F as W}from"./FSAutocompleteField-85bc039c.js";import{F as $}from"./FSCheckbox-54879197.js";import{F as L}from"./FSButton-0aa1c2d4.js";import{F as z}from"./FSImage-0a0b90ec.js";import{_ as F}from"./FSSpan-9f7a3096.js";import{_ as U}from"./FSRow-e30f1dcc.js";import{P as Z}from"./permissionInfos-da95e15e.js";import{C as J}from"./base-0cefeb30.js";import{S}from"./serviceFactory-7552fe10.js";import{C as g}from"./composableFactory-64294cb0.js";import{u as K}from"./useAutocomplete-ecc57bef.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Q}from"./VSelect-aabfcd61.js";import{_ as Y}from"./FSCol-439c812a.js";import"./FSToggleSet-d37d9311.js";import"./FSSlideGroup-5383341a.js";import"./FSButtonNextIcon-32c0573f.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./useSlots-8bee1a74.js";import"./css-ab2bdb81.js";import"./VSlideGroup-09af52b3.js";import"./index-900eb6c5.js";import"./useRender-1606c976.js";import"./display-cdda29b9.js";import"./goto-9c8518f8.js";import"./locale-54c2c8ba.js";import"./proxiedModel-c6c1514f.js";import"./group-db11312a.js";import"./tag-41ce785e.js";import"./resizeObserver-3e02ea9a.js";import"./VIcon-77d6c341.js";import"./color-3025502c.js";import"./FSWrapGroup-79594a2b.js";import"./VInput-7e8bc521.js";import"./transition-8ae71e6c.js";import"./density-9a54c498.js";import"./dimensions-946cb0c4.js";import"./VField-05970d63.js";import"./VSpacer-2ef0dee2.js";import"./VLabel-5378811f.js";import"./loader-c881e63b.js";import"./VProgressCircular-b85c805e.js";import"./rounded-751db039.js";import"./VDefaultsProvider-e6a6e57a.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-da23fb58.js";import"./elevation-c9d86896.js";import"./useRules-b3d475c7.js";import"./VTextField-75c75d12.js";import"./index-60cd2499.js";import"./filter-621d2885.js";import"./VMenu-1d4626f8.js";import"./VOverlay-e7c006b1.js";import"./lazy-414691fc.js";import"./router-8ce361c1.js";import"./scopeId-f802239b.js";import"./FSIcon-d0ab000b.js";import"./VSelectionControl-ac658b6e.js";import"./index-1a539509.js";import"./FSClickable-450f52d6.js";import"./FSCard-e175fef9.js";import"./base-0de1729e.js";import"./VImg-617a4396.js";import"./useAppOrganisationId-9a072404.js";import"./lodash-569b8a6d.js";import"./useDebounce-3221123d.js";import"./ssrBoot-4aec2e0b.js";import"./border-adb63d5e.js";import"./VDivider-54e4b012.js";class E{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class b extends E{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new Z(a))}}const v=()=>`${J()}/user-organisations`,_=t=>`${v()}/${encodeURIComponent(t)}`,w=()=>`${v()}/current`,ee=()=>`${w()}/dashboard`,c=new S("userOrganisation",b).create(t=>t.build(t.addGet(_),t.addGetMany(v,E),t.addCreate(v),t.addUpdate(_),t.addRemove(_),S.addCustom("getCurrent",e=>e.get(w()),e=>new b(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,i)=>a.post(w(),i),a=>{const i=new b(a);return e.notify("update",i),i}),...S.addCustom("changeCurrentDashboard",(a,i)=>a.put(ee(),i),a=>{const i=new b(a);return e.notify("update",i),i})})))),te=g.trackRef(c),A=()=>{const{track:t}=te();return e=>{t(e)}},oe=g.getMany(c);g.custom(c.getCurrent,A);g.custom(c.updateCurrent,A);g.custom(c.changeCurrentDashboard,A);const B=G({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:W,FSCheckbox:$,FSButton:L,FSImage:z,FSSpan:F,FSRow:U},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:h}=oe(),R=V(()=>f.value&&i.value),d=V(()=>h.value.map(r=>({id:r.id,label:r.name}))),I=r=>a({...t.userOrganisationFilters,search:r??void 0}),{toggleSet:o,search:l,init:f,onUpdate:x}=K(h,[()=>t.userOrganisationFilters],e,I,null,r=>r.id,r=>r.name);return{userOrganisations:h,toggleSetItems:d,toggleSet:o,loading:R,search:l,onUpdate:x}}});function ae(t,e,a,i,h,R){const d=N("FSImage"),I=N("FSAutocompleteField");return m(),u(I,H({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":n(({item:o})=>[t.$props.modelValue?(m(),u(U,{key:0,align:"center-center",wrap:!1},{default:n(()=>[o.raw.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"autocomplete-item":n(({props:o,item:l})=>[s(Q,P(j({...o,title:""})),{default:n(()=>[s(U,{align:"center-left",wrap:!1},{default:n(()=>{var f;return[t.$props.multiple?(m(),u($,{key:0,modelValue:(f=t.$props.modelValue)==null?void 0:f.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):p("",!0),l.raw.imageId?(m(),u(d,{key:1,height:"26px",width:"26px",imageId:l.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(l.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":n(o=>[s(L,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:M(o.getClass(o.item)),onClick:l=>o.toggle(o.item)},{default:n(()=>[s(U,{align:"center-center",wrap:!1},{default:n(()=>[o.item.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const q=X(B,[["render",ae]]);B.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const It={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},O={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:q,FSCol:Y},props:Object.keys(e),setup(){return{...t}},template:`
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
}`,...(T=(D=O.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const Ct=["Variations"];export{O as Variations,Ct as __namedExportsOrder,It as default};
