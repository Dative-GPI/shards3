import{j as G,e as V,I as N,J as m,K as u,L as n,B as H,N as p,A as s,U as C,V as y,W as P,X as j,_ as M}from"./vue.esm-bundler-7c237656.js";import{F as W}from"./FSAutocompleteField-3e0e956b.js";import{F as $}from"./FSCheckbox-da06ce33.js";import{F as L}from"./FSButton-2de03eb9.js";import{F as z}from"./FSImage-9b8d5f30.js";import{_ as F}from"./FSSpan-661158f8.js";import{_ as U}from"./FSRow-0e15f868.js";import{P as Z}from"./permissionInfos-da95e15e.js";import{C as J}from"./base-cc0281c0.js";import{S}from"./serviceFactory-7552fe10.js";import{C as g}from"./composableFactory-08360cd4.js";import{u as K}from"./useAutocomplete-c9cb8b74.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Q}from"./VSelect-735dad66.js";import{_ as Y}from"./FSCol-76ddd6d9.js";import"./FSToggleSet-aa995028.js";import"./FSSlideGroup-4ae088dc.js";import"./FSButtonNextIcon-0ce6717c.js";import"./useColors-0c4b5dc8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./useSlots-338ea3fb.js";import"./css-aa928277.js";import"./VSlideGroup-5e88f18e.js";import"./index-09a2de27.js";import"./useRender-e0e7d9de.js";import"./display-e291008d.js";import"./goto-527c7407.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./group-3855ab92.js";import"./tag-7dab75b7.js";import"./resizeObserver-8e2b427f.js";import"./VIcon-0c1eaee2.js";import"./color-8a2bce37.js";import"./FSWrapGroup-37c801a8.js";import"./VInput-eed42ecd.js";import"./transition-e42cd317.js";import"./density-a5226544.js";import"./dimensions-cb2de721.js";import"./VField-86f2cf98.js";import"./VSpacer-84430db1.js";import"./VLabel-236d5849.js";import"./loader-a7579223.js";import"./VProgressCircular-4299d8b4.js";import"./rounded-a3086a85.js";import"./VDefaultsProvider-82c11bd7.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ef3e94c6.js";import"./elevation-785d47fb.js";import"./useRules-30f7bcaa.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./filter-9f13a693.js";import"./VMenu-2484e62c.js";import"./VOverlay-a23169e8.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./FSIcon-5ad13b7e.js";import"./VSelectionControl-6d75a1db.js";import"./index-521b9cff.js";import"./FSClickable-e8caff35.js";import"./FSCard-c7069f2a.js";import"./base-0de1729e.js";import"./VImg-f2bb9819.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";import"./useDebounce-3b8c8385.js";import"./ssrBoot-ce89aa70.js";import"./border-e24af5bf.js";import"./VDivider-5d036829.js";class E{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class b extends E{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new Z(a))}}const v=()=>`${J()}/user-organisations`,_=t=>`${v()}/${encodeURIComponent(t)}`,w=()=>`${v()}/current`,ee=()=>`${w()}/dashboard`,c=new S("userOrganisation",b).create(t=>t.build(t.addGet(_),t.addGetMany(v,E),t.addCreate(v),t.addUpdate(_),t.addRemove(_),S.addCustom("getCurrent",e=>e.get(w()),e=>new b(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,i)=>a.post(w(),i),a=>{const i=new b(a);return e.notify("update",i),i}),...S.addCustom("changeCurrentDashboard",(a,i)=>a.put(ee(),i),a=>{const i=new b(a);return e.notify("update",i),i})})))),te=g.trackRef(c),A=()=>{const{track:t}=te();return e=>{t(e)}},oe=g.getMany(c);g.custom(c.getCurrent,A);g.custom(c.updateCurrent,A);g.custom(c.changeCurrentDashboard,A);const B=G({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:W,FSCheckbox:$,FSButton:L,FSImage:z,FSSpan:F,FSRow:U},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:h}=oe(),R=V(()=>f.value&&i.value),d=V(()=>h.value.map(r=>({id:r.id,label:r.name}))),I=r=>a({...t.userOrganisationFilters,search:r??void 0}),{toggleSet:o,search:l,init:f,onUpdate:x}=K(h,[()=>t.userOrganisationFilters],e,I,null,r=>r.id,r=>r.name);return{userOrganisations:h,toggleSetItems:d,toggleSet:o,loading:R,search:l,onUpdate:x}}});function ae(t,e,a,i,h,R){const d=N("FSImage"),I=N("FSAutocompleteField");return m(),u(I,H({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":n(({item:o})=>[t.$props.modelValue?(m(),u(U,{key:0,align:"center-center",wrap:!1},{default:n(()=>[o.raw.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"autocomplete-item":n(({props:o,item:l})=>[s(Q,P(j({...o,title:""})),{default:n(()=>[s(U,{align:"center-left",wrap:!1},{default:n(()=>{var f;return[t.$props.multiple?(m(),u($,{key:0,modelValue:(f=t.$props.modelValue)==null?void 0:f.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):p("",!0),l.raw.imageId?(m(),u(d,{key:1,height:"26px",width:"26px",imageId:l.raw.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(l.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":n(o=>[s(L,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:M(o.getClass(o.item)),onClick:l=>o.toggle(o.item)},{default:n(()=>[s(U,{align:"center-center",wrap:!1},{default:n(()=>[o.item.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):p("",!0),s(F,null,{default:n(()=>[C(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const q=X(B,[["render",ae]]);B.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const It={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},O={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:q,FSCol:Y},props:Object.keys(e),setup(){return{...t}},template:`
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
