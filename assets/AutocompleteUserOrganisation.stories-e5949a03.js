import{f as G,g as R,D as N,E as m,F as u,G as r,x as B,I as h,P as l,K as I,L as y,X as M}from"./vue.esm-bundler-a0893183.js";import{F as P}from"./FSAutocompleteField-82ab0202.js";import{F as k}from"./FSButton-29e96b8a.js";import{F as j}from"./FSImage-4d011f0d.js";import{_ as O}from"./FSSpan-4daadeb4.js";import{_ as F}from"./FSRow-821d23a1.js";import{P as Z}from"./permissionInfos-da95e15e.js";import{C as z}from"./base-168b8f74.js";import{S as f}from"./serviceFactory-2dfad3af.js";import{C as d}from"./composableFactory-2d4a69cc.js";import{u as H}from"./useAutocomplete-cc546bbe.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as X}from"./FSCol-e45ac157.js";import"./FSSearchField-fb041cb4.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./useSlots-d5b57407.js";import"./VSpacer-b1094f09.js";import"./useRender-13ac3742.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./anchor-155e2782.js";import"./rounded-4c492e72.js";import"./VDefaultsProvider-c4e19f1a.js";import"./forwardRefs-e658ad70.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./useTranslations-95b4a686.js";import"./FSDialogMenu-2fb2114e.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./FSIcon-9d61ed62.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./FSToggleSet-be55bdf4.js";import"./FSSlideGroup-235f4c9d.js";import"./uuid-08309875.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./FSWrapGroup-24d8166e.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./FSLoader-5eac453d.js";import"./elevation-7d7e39c3.js";import"./VSelect-9102db02.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VMenu-02096e7e.js";import"./filter-9e36c4cc.js";import"./FSClickable-550391c2.js";import"./base-0de1729e.js";import"./useAppOrganisationId-a0837ade.js";import"./lodash-569b8a6d.js";class ${constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class S extends ${constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new Z(a))}}const U=()=>`${z()}/user-organisations`,C=t=>`${U()}/${encodeURIComponent(t)}`,_=()=>`${U()}/current`,J=()=>`${_()}/dashboard`,p=new f("userOrganisation",S).create(t=>t.build(t.addGet(C),t.addGetMany(U,$),t.addCreate(U),t.addUpdate(C),t.addRemove(C),f.addCustom("getCurrent",e=>e.get(_()),e=>new S(e)),t.addNotify(e=>({...f.addCustom("updateCurrent",(a,i)=>a.post(_(),i),a=>{const i=new S(a);return e.notify("update",i),i}),...f.addCustom("changeCurrentDashboard",(a,i)=>a.put(J(),i),a=>{const i=new S(a);return e.notify("update",i),i})})))),Q=d.trackRef(p),w=()=>{const{track:t}=Q();return e=>{t(e)}},W=d.getMany(p);d.custom(p.getCurrent,w);d.custom(p.updateCurrent,w);d.custom(p.changeCurrentDashboard,w);const E=G({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:P,FSButton:k,FSImage:j,FSSpan:O,FSRow:F},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:g}=W(),A=R(()=>L.value&&i.value),s=R(()=>g.value.map(n=>({id:n.id,label:n.name}))),v=n=>a({...t.userOrganisationFilters,search:n??void 0}),{toggleSet:o,search:c,init:L,onUpdate:q}=H(g,[()=>t.userOrganisationFilters],e,v,null,n=>n.id,n=>n.name);return{userOrganisations:g,toggleSetItems:s,toggleSet:o,loading:A,search:c,onUpdate:q}}});function Y(t,e,a,i,g,A){const s=N("FSImage"),v=N("FSAutocompleteField");return m(),u(v,B({itemTitle:"name",toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":r(({item:o})=>[t.$props.modelValue?(m(),u(F,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.imageId?(m(),u(s,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):h("",!0),l(O,null,{default:r(()=>[I(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):h("",!0)]),"item-label":r(({item:o,font:c})=>[l(F,{align:"center-left",wrap:!1},{default:r(()=>[o.raw.imageId?(m(),u(s,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):h("",!0),l(O,{font:c},{default:r(()=>[I(y(o.raw.name),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":r(o=>[l(k,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:M(o.getClass(o.item)),onClick:c=>o.toggle(o.item)},{default:r(()=>[l(F,{align:"center-center",wrap:!1},{default:r(()=>[o.item.imageId?(m(),u(s,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):h("",!0),l(O,null,{default:r(()=>[I(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=K(E,[["render",Y]]);E.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const wt={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:X},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var D,V,T;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(V=b.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const At=["Variations"];export{b as Variations,At as __namedExportsOrder,wt as default};
