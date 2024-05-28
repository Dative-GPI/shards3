import{f as G,g as V,I as N,J as m,K as u,L as n,B as P,N as p,A as s,O as C,P as y,Q as M,R as j,_ as z}from"./vue.esm-bundler-cd768bc3.js";import{F as Z}from"./FSAutocompleteField-2c5ab937.js";import{F as $}from"./FSCheckbox-0f33b66c.js";import{F as L}from"./FSButton-ecc11eb7.js";import{F as H}from"./FSImage-f2b07c4c.js";import{_ as F}from"./FSSpan-da6dde8e.js";import{_ as v}from"./FSRow-1d7c2545.js";import{P as J}from"./permissionInfos-da95e15e.js";import{C as K}from"./base-a00c89a9.js";import{S}from"./serviceFactory-2dfad3af.js";import{C as g}from"./composableFactory-c82cc213.js";import{u as Q}from"./useAutocomplete-26502e10.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{V as X}from"./VSelect-faa1eb31.js";import{_ as Y}from"./FSCol-ff457bc3.js";import"./FSToggleSet-ab7c55f3.js";import"./FSSlideGroup-df6ede8b.js";import"./FSButtonNextIcon-c5a49a0d.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./useSlots-2af30a3d.js";import"./css-c2ea3b68.js";import"./VSlideGroup-61bc8bc9.js";import"./index-055d6469.js";import"./useRender-b3fd6f8b.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./group-9e3f1093.js";import"./tag-bc86e39f.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./color-4e667524.js";import"./FSWrapGroup-8dc071a4.js";import"./VInput-5fe9e616.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VField-d090f013.js";import"./VSpacer-0c52efc7.js";import"./VLabel-a834020c.js";import"./loader-3bcfb6cd.js";import"./VProgressCircular-f6ca2848.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-22eb0e57.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-c57e8f50.js";import"./elevation-7537bf82.js";import"./useRules-bb9e9594.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";import"./filter-7dfa57ec.js";import"./VMenu-501341cc.js";import"./VOverlay-43a7a638.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./FSIcon-203715fb.js";import"./VSelectionControl-e9dab1c2.js";import"./index-f4fa4c36.js";import"./FSClickable-95c940f4.js";import"./FSCard-0de7b634.js";import"./base-0de1729e.js";import"./VImg-1d5e27a6.js";import"./useAppOrganisationId-7c704676.js";import"./lodash-569b8a6d.js";import"./useDebounce-8f204f15.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VDivider-1fe66aeb.js";class E{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class O extends E{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new J(a))}}const U=()=>`${K()}/user-organisations`,_=t=>`${U()}/${encodeURIComponent(t)}`,w=()=>`${U()}/current`,ee=()=>`${w()}/dashboard`,c=new S("userOrganisation",O).create(t=>t.build(t.addGet(_),t.addGetMany(U,E),t.addCreate(U),t.addUpdate(_),t.addRemove(_),S.addCustom("getCurrent",e=>e.get(w()),e=>new O(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,i)=>a.post(w(),i),a=>{const i=new O(a);return e.notify("update",i),i}),...S.addCustom("changeCurrentDashboard",(a,i)=>a.put(ee(),i),a=>{const i=new O(a);return e.notify("update",i),i})})))),te=g.trackRef(c),A=()=>{const{track:t}=te();return e=>{t(e)}},oe=g.getMany(c);g.custom(c.getCurrent,A);g.custom(c.updateCurrent,A);g.custom(c.changeCurrentDashboard,A);const q=G({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:Z,FSCheckbox:$,FSButton:L,FSImage:H,FSSpan:F,FSRow:v},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:h}=oe(),R=V(()=>f.value&&i.value),d=V(()=>h.value.map(r=>({id:r.id,label:r.name}))),I=r=>a({...t.userOrganisationFilters,search:r??void 0}),{toggleSet:o,search:l,init:f,onUpdate:B}=Q(h,[()=>t.userOrganisationFilters],e,I,null,r=>r.id,r=>r.name);return{userOrganisations:h,toggleSetItems:d,toggleSet:o,loading:R,search:l,onUpdate:B}}});function ae(t,e,a,i,h,R){const d=N("FSImage"),I=N("FSAutocompleteField");return m(),u(I,P({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":n(({item:o})=>[t.$props.modelValue?(m(),u(v,{key:0,align:"center-center",wrap:!1},{default:n(()=>[o.raw.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"autocomplete-item":n(({props:o,item:l})=>[s(X,M(j({...o,title:""})),{default:n(()=>[s(v,{align:"center-left",wrap:!1},{default:n(()=>{var f;return[t.$props.multiple?(m(),u($,{key:0,modelValue:(f=t.$props.modelValue)==null?void 0:f.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):p("",!0),l.raw.imageId?(m(),u(d,{key:1,height:"26px",width:"26px",imageId:l.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(l.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":n(o=>[s(L,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:z(o.getClass(o.item)),onClick:l=>o.toggle(o.item)},{default:n(()=>[s(v,{align:"center-center",wrap:!1},{default:n(()=>[o.item.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=W(q,[["render",ae]]);q.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:Y},props:Object.keys(e),setup(){return{...t}},template:`
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
