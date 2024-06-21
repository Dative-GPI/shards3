import{d as B,c as R,y as N,z as m,A as u,B as r,m as G,D as h,K as l,E as I,G as y,R as M}from"./vue.esm-bundler-CLWyqtrq.js";import{F as j}from"./FSAutocompleteField-CBMRbw7S.js";import{F as k}from"./FSButton-DbngaExr.js";import{F as P}from"./FSImage-_9wQcr9X.js";import{_ as O}from"./FSSpan-C4Iz3qX9.js";import{_ as F}from"./FSRow-B7tdsi71.js";import{P as z}from"./permissionInfos-D2e06JXk.js";import{C as Z}from"./base-DgvHU1oF.js";import{S as f}from"./serviceFactory-D_XwB3_y.js";import{C as d}from"./composableFactory-BGJVwV03.js";import{u as H}from"./useAutocomplete-BeehL9JX.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as J}from"./FSCol-B1LPjIXg.js";import"./FSSearchField-CyiK-fBt.js";import"./FSTextField-Cpjd0lxC.js";import"./VField-B0dByqhd.js";import"./useColors-DMaqBg9s.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-bwyTeVCn.js";import"./useSlots-YtBg7QOA.js";import"./VSpacer-gQABP9En.js";import"./useRender-BBsw_RbX.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./useTranslations-BiPIEqtB.js";import"./FSDialogMenu-DffTLyCO.js";import"./FSCard-Dfczzv61.js";import"./css-Ca-HPGcF.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./router-Bm0MCij7.js";import"./FSRadioGroup-6Hwvke6j.js";import"./FSRadio-D23gGN9m.js";import"./FSIcon-izOGFbD4.js";import"./VSelectionControl-CFm2WUhz.js";import"./index-CgBlQs6Z.js";import"./FSToggleSet-yPQt1erB.js";import"./FSSlideGroup-CSlKWrVH.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Bfe_5BeH.js";import"./group-BZx0j_nI.js";import"./FSWrapGroup-BQRnjhhS.js";import"./FSCheckbox-C54-5tE9.js";import"./FSFadeOut-BbZkfEUD.js";import"./FSLoader-CqH2SEvS.js";import"./elevation-CB-eCL4u.js";import"./VSelect-C0gJvLlB.js";import"./VList-COAYh1Wj.js";import"./ssrBoot-pwfi9K1z.js";import"./border-Bs-XyEFQ.js";import"./VImg-CU4XwkhE.js";import"./VDivider-bKfGyljG.js";import"./VMenu-CBjAwdlw.js";import"./filter-IREZNmJK.js";import"./FSClickable-Dnaq4X0T.js";import"./base-BNnJ_ndD.js";import"./useAppOrganisationId-B5BDd-xv.js";import"./lodash-BiW_TGGX.js";class ${constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class S extends ${constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new z(a))}}const U=()=>`${Z()}/user-organisations`,C=t=>`${U()}/${encodeURIComponent(t)}`,_=()=>`${U()}/current`,Q=()=>`${_()}/dashboard`,p=new f("userOrganisation",S).create(t=>t.build(t.addGet(C),t.addGetMany(U,$),t.addCreate(U),t.addUpdate(C),t.addRemove(C),f.addCustom("getCurrent",e=>e.get(_()),e=>new S(e)),t.addNotify(e=>({...f.addCustom("updateCurrent",(a,i)=>a.post(_(),i),a=>{const i=new S(a);return e.notify("update",i),i}),...f.addCustom("changeCurrentDashboard",(a,i)=>a.put(Q(),i),a=>{const i=new S(a);return e.notify("update",i),i})})))),W=d.trackRef(p),w=()=>{const{track:t}=W();return e=>{t(e)}},X=d.getMany(p);d.custom(p.getCurrent,w);d.custom(p.updateCurrent,w);d.custom(p.changeCurrentDashboard,w);const E=B({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:j,FSButton:k,FSImage:P,FSSpan:O,FSRow:F},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:g}=X(),A=R(()=>L.value&&i.value),s=R(()=>g.value.map(n=>({id:n.id,label:n.name}))),v=n=>a({...t.userOrganisationFilters,search:n??void 0}),{toggleSet:o,search:c,init:L,onUpdate:q}=H(g,[()=>t.userOrganisationFilters],e,v,null,n=>n.id,n=>n.name);return{userOrganisations:g,toggleSetItems:s,toggleSet:o,loading:A,search:c,onUpdate:q}}});function Y(t,e,a,i,g,A){const s=N("FSImage"),v=N("FSAutocompleteField");return m(),u(v,G({itemTitle:"name",toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":r(({item:o})=>[t.$props.modelValue?(m(),u(F,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.imageId?(m(),u(s,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):h("",!0),l(O,null,{default:r(()=>[I(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):h("",!0)]),"item-label":r(({item:o,font:c})=>[l(F,{align:"center-left",wrap:!1},{default:r(()=>[o.raw.imageId?(m(),u(s,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):h("",!0),l(O,{font:c},{default:r(()=>[I(y(o.raw.name),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":r(o=>[l(k,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:M(o.getClass(o.item)),onClick:c=>o.toggle(o.item)},{default:r(()=>[l(F,{align:"center-center",wrap:!1},{default:r(()=>[o.item.imageId?(m(),u(s,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):h("",!0),l(O,null,{default:r(()=>[I(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=K(E,[["render",Y]]);E.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:J},props:Object.keys(e),setup(){return{...t}},template:`
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
}`,...(T=(V=b.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const _t=["Variations"];export{b as Variations,_t as __namedExportsOrder,Ct as default};
