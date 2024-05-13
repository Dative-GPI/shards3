import{j as G,e as V,I as N,J as m,K as u,L as n,B as H,N as p,A as s,U as C,V as y,W as P,X as j,_ as M}from"./vue.esm-bundler-41eda46b.js";import{F as W}from"./FSAutocompleteField-95896a23.js";import{F as $}from"./FSCheckbox-90b24572.js";import{F as L}from"./FSButton-d0a22eb6.js";import{F as z}from"./FSImage-563135ef.js";import{_ as F}from"./FSSpan-8af5ddcc.js";import{_ as U}from"./FSRow-1508d56d.js";import{P as Z}from"./permissionInfos-da95e15e.js";import{C as J}from"./base-72a78366.js";import{S}from"./serviceFactory-7552fe10.js";import{C as g}from"./composableFactory-00c2f0ee.js";import{u as K}from"./useAutocomplete-0136f2aa.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Q}from"./VSelect-defb5d1c.js";import{_ as Y}from"./FSCol-282cc158.js";import"./FSToggleSet-d7834bf3.js";import"./FSSlideGroup-10d457fb.js";import"./FSButtonNextIcon-7fd41269.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./useSlots-e8ea556e.js";import"./css-35e8563f.js";import"./VSlideGroup-aeb2e4a4.js";import"./index-dc0570e5.js";import"./useRender-dd35ddd1.js";import"./display-4adc39d9.js";import"./goto-50a9e63e.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./group-2589989a.js";import"./tag-64b4b0e7.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./color-45753032.js";import"./FSWrapGroup-d3a1dbf2.js";import"./VInput-4d87c32a.js";import"./transition-695cd20f.js";import"./density-b42ba92f.js";import"./dimensions-5b54e342.js";import"./VField-c52f5557.js";import"./VSpacer-63a59a9e.js";import"./VLabel-19fa20ee.js";import"./loader-e17cf3b4.js";import"./VProgressCircular-58a86136.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-5fe6d2d9.js";import"./elevation-878f110a.js";import"./useRules-d33c1ab7.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./filter-133522f7.js";import"./VMenu-499c8185.js";import"./VOverlay-ac667fed.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./FSIcon-713345eb.js";import"./VSelectionControl-42a6862f.js";import"./index-4ba2035c.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./base-0de1729e.js";import"./VImg-63ad34dc.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-eea26164.js";import"./VDivider-d263d436.js";class E{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class b extends E{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new Z(a))}}const v=()=>`${J()}/user-organisations`,_=t=>`${v()}/${encodeURIComponent(t)}`,w=()=>`${v()}/current`,ee=()=>`${w()}/dashboard`,c=new S("userOrganisation",b).create(t=>t.build(t.addGet(_),t.addGetMany(v,E),t.addCreate(v),t.addUpdate(_),t.addRemove(_),S.addCustom("getCurrent",e=>e.get(w()),e=>new b(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,i)=>a.post(w(),i),a=>{const i=new b(a);return e.notify("update",i),i}),...S.addCustom("changeCurrentDashboard",(a,i)=>a.put(ee(),i),a=>{const i=new b(a);return e.notify("update",i),i})})))),te=g.trackRef(c),A=()=>{const{track:t}=te();return e=>{t(e)}},oe=g.getMany(c);g.custom(c.getCurrent,A);g.custom(c.updateCurrent,A);g.custom(c.changeCurrentDashboard,A);const B=G({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:W,FSCheckbox:$,FSButton:L,FSImage:z,FSSpan:F,FSRow:U},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:h}=oe(),R=V(()=>f.value&&i.value),d=V(()=>h.value.map(r=>({id:r.id,label:r.name}))),I=r=>a({...t.userOrganisationFilters,search:r??void 0}),{toggleSet:o,search:l,init:f,onUpdate:x}=K(h,[()=>t.userOrganisationFilters],e,I,null,r=>r.id,r=>r.name);return{userOrganisations:h,toggleSetItems:d,toggleSet:o,loading:R,search:l,onUpdate:x}}});function ae(t,e,a,i,h,R){const d=N("FSImage"),I=N("FSAutocompleteField");return m(),u(I,H({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":n(({item:o})=>[t.$props.modelValue?(m(),u(U,{key:0,align:"center-center",wrap:!1},{default:n(()=>[o.raw.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"autocomplete-item":n(({props:o,item:l})=>[s(Q,P(j({...o,title:""})),{default:n(()=>[s(U,{align:"center-left",wrap:!1},{default:n(()=>{var f;return[t.$props.multiple?(m(),u($,{key:0,modelValue:(f=t.$props.modelValue)==null?void 0:f.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):p("",!0),l.raw.imageId?(m(),u(d,{key:1,height:"26px",width:"26px",imageId:l.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(l.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":n(o=>[s(L,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:M(o.getClass(o.item)),onClick:l=>o.toggle(o.item)},{default:n(()=>[s(U,{align:"center-center",wrap:!1},{default:n(()=>[o.item.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const q=X(B,[["render",ae]]);B.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const It={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},O={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:q,FSCol:Y},props:Object.keys(e),setup(){return{...t}},template:`
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
