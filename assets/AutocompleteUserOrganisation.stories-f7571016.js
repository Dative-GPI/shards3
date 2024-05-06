import{j as G,e as A,I as R,J as l,K as m,L as n,B as x,N as h,A as S,S as V,U as N,W as H,X as P}from"./vue.esm-bundler-3416a090.js";import{F as j}from"./FSAutocompleteField-a04215fa.js";import{F as $}from"./FSCheckbox-422b3b91.js";import{F as M}from"./FSImage-fc61eb00.js";import{_ as I}from"./FSSpan-b519c994.js";import{_ as y}from"./FSRow-5edf997c.js";import{P as W}from"./permissionInfos-da95e15e.js";import{C as Z}from"./base-9a568e22.js";import{S as f}from"./serviceFactory-7552fe10.js";import{C as u}from"./composableFactory-8605555f.js";import{u as z}from"./useAutocomplete-ca462ffd.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{V as K}from"./VSelect-f25e0916.js";import{_ as X}from"./FSCol-5731c3c4.js";import"./FSToggleSet-ec2870f8.js";import"./FSSlideGroup-e4eb99d4.js";import"./FSButtonNextIcon-4c5573bf.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSCard-92f27951.js";import"./useColors-1faf681b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2c100cd8.js";import"./css-69ed11d9.js";import"./VProgressCircular-22b061ae.js";import"./color-5c733e3b.js";import"./useRender-fb717f1b.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./FSIcon-f518d728.js";import"./useSlots-7472d1e2.js";import"./VSlideGroup-057adefe.js";import"./index-46378e0b.js";import"./display-00a40b50.js";import"./goto-8a93c650.js";import"./locale-be130c16.js";import"./proxiedModel-868611da.js";import"./group-f3cba4ff.js";import"./FSWrapGroup-367aabb9.js";import"./VInput-77c4eaa4.js";import"./transition-6086c96b.js";import"./density-174ddef7.js";import"./dimensions-97f2f62c.js";import"./VField-d3f61dc4.js";import"./VSpacer-819449a6.js";import"./VLabel-793ed17d.js";import"./loader-b2c56b78.js";import"./rounded-e101edac.js";import"./VDefaultsProvider-ef2fd514.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-22724035.js";import"./elevation-9288a0e5.js";import"./useRules-5e1988ee.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./filter-d102117b.js";import"./VMenu-39a0be1f.js";import"./VOverlay-61ba3ae0.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./VSelectionControl-0b3e2526.js";import"./index-a9118fe7.js";import"./base-0de1729e.js";import"./VImg-cd6fa030.js";import"./useAppOrganisationId-b06da61e.js";import"./lodash-569b8a6d.js";import"./useDebounce-736cfd0a.js";import"./ssrBoot-c0668163.js";import"./border-1657a325.js";import"./VDivider-5604872c.js";class L{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class b extends L{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(o=>new W(o))}}const U=()=>`${Z()}/user-organisations`,v=t=>`${U()}/${encodeURIComponent(t)}`,C=()=>`${U()}/current`,Q=()=>`${C()}/dashboard`,d=new f("userOrganisation",b).create(t=>t.build(t.addGet(v),t.addGetMany(U,L),t.addCreate(U),t.addUpdate(v),t.addRemove(v),f.addCustom("getCurrent",e=>e.get(C()),e=>new b(e)),t.addNotify(e=>({...f.addCustom("updateCurrent",(o,a)=>o.post(C(),a),o=>{const a=new b(o);return e.notify("update",a),a}),...f.addCustom("changeCurrentDashboard",(o,a)=>o.put(Q(),a),o=>{const a=new b(o);return e.notify("update",a),a})})))),Y=u.trackRef(d),w=()=>{const{track:t}=Y();return e=>{t(e)}},ee=u.getMany(d);u.custom(d.getCurrent,w);u.custom(d.updateCurrent,w);u.custom(d.changeCurrentDashboard,w);const E=G({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:j,FSCheckbox:$,FSImage:M,FSSpan:I,FSRow:y},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:o,fetching:a,entities:p}=ee(),_=A(()=>c.value&&a.value),g=A(()=>p.value.map(i=>({id:i.id,label:i.name}))),F=i=>o({...t.userOrganisationFilters,search:i??void 0}),{toggleSet:r,search:s,init:c,onUpdate:B}=z(p,[()=>t.userOrganisationFilters],e,F,null,i=>i.id,i=>i.name);return{userOrganisations:p,toggleSetItems:g,toggleSet:r,loading:_,search:s,onUpdate:B}}});function te(t,e,o,a,p,_){const g=R("FSImage"),F=R("FSAutocompleteField");return l(),m(F,x({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,toggleSetItems:t.toggleSetItems,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":n(({item:r})=>[t.$props.modelValue?(l(),m(y,{key:0,align:"center-center",wrap:!1},{default:n(()=>[r.raw.imageId?(l(),m(g,{key:0,height:"26px",width:"26px",imageId:r.raw.imageId},null,8,["imageId"])):h("",!0),S(I,null,{default:n(()=>[V(N(r.raw.name),1)]),_:2},1024)]),_:2},1024)):h("",!0)]),"autocomplete-item":n(({props:r,item:s})=>[S(K,H(P({...r,title:""})),{default:n(()=>[S(y,{align:"center-left"},{default:n(()=>{var c;return[t.$props.multiple?(l(),m($,{key:0,modelValue:(c=t.$props.modelValue)==null?void 0:c.includes(s.value)},null,8,["modelValue"])):h("",!0),s.raw.imageId?(l(),m(g,{key:1,height:"26px",width:"26px",imageId:s.raw.imageId},null,8,["imageId"])):h("",!0),S(I,null,{default:n(()=>[V(N(s.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","toggleSetItems","multiple","items","loading","modelValue","onUpdate:modelValue"])}const q=J(E,[["render",te]]);E.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Ut={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},O={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:q,FSCol:X},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var D,T,k;O.parameters={...O.parameters,docs:{...(D=O.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(T=O.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Ft=["Variations"];export{O as Variations,Ft as __namedExportsOrder,Ut as default};
