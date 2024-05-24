import{j as G,e as V,I as N,J as m,K as u,L as n,B as P,N as p,A as s,O as C,P as y,Q as j,R as M,_ as z}from"./vue.esm-bundler-01006032.js";import{F as Z}from"./FSAutocompleteField-c1dfb31d.js";import{F as $}from"./FSCheckbox-40e0c55f.js";import{F as L}from"./FSButton-be94d44f.js";import{F as H}from"./FSImage-bcb6e763.js";import{_ as F}from"./FSSpan-6e79caf3.js";import{_ as v}from"./FSRow-83e75060.js";import{P as J}from"./permissionInfos-da95e15e.js";import{C as K}from"./base-d6256dbd.js";import{S}from"./serviceFactory-7552fe10.js";import{C as g}from"./composableFactory-25aa3ef9.js";import{u as Q}from"./useAutocomplete-3cb054e4.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{V as X}from"./VSelect-450b500f.js";import{_ as Y}from"./FSCol-c97fad61.js";import"./FSToggleSet-be653781.js";import"./FSSlideGroup-8aec8bc5.js";import"./FSButtonNextIcon-3107391f.js";import"./useColors-13ed6ee6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a26d2375.js";import"./useSlots-e0d7ab7c.js";import"./css-279a0029.js";import"./VSlideGroup-e0f01fc0.js";import"./index-491d6eb9.js";import"./useRender-4bcbb6ac.js";import"./display-77f43728.js";import"./goto-9bab4060.js";import"./locale-903ef8d8.js";import"./proxiedModel-69023448.js";import"./group-e9c3615d.js";import"./tag-1f5f74bd.js";import"./resizeObserver-308bb976.js";import"./VIcon-17be8ae5.js";import"./color-8c62b342.js";import"./FSWrapGroup-83a13764.js";import"./VInput-50bb839f.js";import"./transition-9c7eb302.js";import"./density-d09a1492.js";import"./dimensions-4232d0fa.js";import"./VField-f1a9daf9.js";import"./VSpacer-78b81ef3.js";import"./VLabel-f27c70ae.js";import"./loader-878147ed.js";import"./VProgressCircular-f05fef1e.js";import"./anchor-1cd9d9ab.js";import"./rounded-9001edc0.js";import"./VDefaultsProvider-d99c6ff5.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-639650a7.js";import"./elevation-28c6fd5f.js";import"./useRules-54978858.js";import"./VTextField-f4d9b05c.js";import"./index-4a977ff0.js";import"./filter-9717b913.js";import"./VMenu-4c05ddd6.js";import"./VOverlay-d4d3a71f.js";import"./lazy-d0bac168.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./FSIcon-15b738c8.js";import"./VSelectionControl-3e964160.js";import"./index-89394051.js";import"./FSClickable-a0c1e9ef.js";import"./FSCard-8fcd8e1e.js";import"./base-0de1729e.js";import"./VImg-f5b3db66.js";import"./useAppOrganisationId-2267e850.js";import"./lodash-569b8a6d.js";import"./useDebounce-ff82ad1d.js";import"./ssrBoot-b1480e9f.js";import"./border-10554549.js";import"./VDivider-10bc2e69.js";class E{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class O extends E{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new J(a))}}const U=()=>`${K()}/user-organisations`,_=t=>`${U()}/${encodeURIComponent(t)}`,w=()=>`${U()}/current`,ee=()=>`${w()}/dashboard`,c=new S("userOrganisation",O).create(t=>t.build(t.addGet(_),t.addGetMany(U,E),t.addCreate(U),t.addUpdate(_),t.addRemove(_),S.addCustom("getCurrent",e=>e.get(w()),e=>new O(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,i)=>a.post(w(),i),a=>{const i=new O(a);return e.notify("update",i),i}),...S.addCustom("changeCurrentDashboard",(a,i)=>a.put(ee(),i),a=>{const i=new O(a);return e.notify("update",i),i})})))),te=g.trackRef(c),A=()=>{const{track:t}=te();return e=>{t(e)}},oe=g.getMany(c);g.custom(c.getCurrent,A);g.custom(c.updateCurrent,A);g.custom(c.changeCurrentDashboard,A);const q=G({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:Z,FSCheckbox:$,FSButton:L,FSImage:H,FSSpan:F,FSRow:v},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:h}=oe(),R=V(()=>f.value&&i.value),d=V(()=>h.value.map(r=>({id:r.id,label:r.name}))),I=r=>a({...t.userOrganisationFilters,search:r??void 0}),{toggleSet:o,search:l,init:f,onUpdate:B}=Q(h,[()=>t.userOrganisationFilters],e,I,null,r=>r.id,r=>r.name);return{userOrganisations:h,toggleSetItems:d,toggleSet:o,loading:R,search:l,onUpdate:B}}});function ae(t,e,a,i,h,R){const d=N("FSImage"),I=N("FSAutocompleteField");return m(),u(I,P({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":n(({item:o})=>[t.$props.modelValue?(m(),u(v,{key:0,align:"center-center",wrap:!1},{default:n(()=>[o.raw.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"autocomplete-item":n(({props:o,item:l})=>[s(X,j(M({...o,title:""})),{default:n(()=>[s(v,{align:"center-left",wrap:!1},{default:n(()=>{var f;return[t.$props.multiple?(m(),u($,{key:0,modelValue:(f=t.$props.modelValue)==null?void 0:f.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):p("",!0),l.raw.imageId?(m(),u(d,{key:1,height:"26px",width:"26px",imageId:l.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(l.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":n(o=>[s(L,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:z(o.getClass(o.item)),onClick:l=>o.toggle(o.item)},{default:n(()=>[s(v,{align:"center-center",wrap:!1},{default:n(()=>[o.item.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=W(q,[["render",ae]]);q.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:Y},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var k,D,T;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(D=b.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const yt=["Variations"];export{b as Variations,yt as __namedExportsOrder,Ct as default};
