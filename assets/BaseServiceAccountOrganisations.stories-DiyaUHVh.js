var U=Object.defineProperty;var B=(e,o,r)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r;var i=(e,o,r)=>B(e,typeof o!="symbol"?o+"":o,r);import{d as N,w as R,y as p,z as f,A as v,M as q,N as D,B as a,m as E,I as w,J as G,K as P,D as k,L as c,E as I,G as O}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as M}from"./lodash-BiW_TGGX.js";import{F}from"./FSDataTable-B6hZuxqM.js";import{_ as d}from"./FSSpan-CCGpb4KF.js";import{F as Z}from"./FSImage-CyPZfe-0.js";import{F as z}from"./FSTagGroup-KaZAzl-t.js";import{F as j}from"./FSUserOrganisationTileUI-DG6Dv1Zx.js";import{P as J}from"./permissionInfos-BPDgTHQl.js";import{C as K}from"./base-1FyQZYnT.js";import{S as H}from"./serviceFactory-Bd5jifNi.js";import{C as Q}from"./composableFactory-wHNy9kQa.js";import{u as W,a as X}from"./users-C2Y2e-HI.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-DIRgKG_M.js";import"./css-DLfrm0pR.js";import"./useColors-B5ivMAr9.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-YmDykHL-.js";import"./FSRow-CVY2l52N.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-CekjR0Nk.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-YoHHo_JV.js";import"./FSIcon-DHDofKUo.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-DAS46KTX.js";import"./FSText-8i4Fp1Ld.js";import"./useSlots-P12pG1X5.js";import"./FSSearchField-CnDYBu_t.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./FSButton-BVWlNylM.js";import"./FSClickable-DVS7KdyM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-D8_kFGVg.js";import"./FSDialogMenu-CjU7jTTU.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-DCqEyw4i.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-Y4-ows8F.js";import"./FSWrapGroup-DnBpx7nY.js";import"./FSFadeOut-I9nnIcBb.js";import"./FSRadio-BknZZMeV.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-VfM2CROL.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-CpPmq5Yu.js";import"./FSChip-vR1IHQ3P.js";import"./FSOptionGroup-wuNvwQjf.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./FSImageUI-DhMjHi0K.js";import"./base-CmdGny12.js";import"./FSTag-Bvc5sF_f.js";import"./FSTile-BxIJyXna.js";import"./useAppOrganisationId-BfPsGMlN.js";class C{constructor(o){i(this,"id");i(this,"userId");i(this,"organisationId");i(this,"roleId");i(this,"roleLabel");i(this,"roleIcon");i(this,"imageId");i(this,"userType");i(this,"validity");i(this,"label");i(this,"description");i(this,"tags");this.id=o.id,this.userId=o.userId,this.organisationId=o.organisationId,this.roleId=o.roleId,this.roleLabel=o.roleLabel,this.roleIcon=o.roleIcon,this.imageId=o.imageId,this.userType=o.userType,this.validity=o.validity,this.label=o.label,this.description=o.description,this.tags=o.tags&&o.tags.slice()||[]}}class x extends C{constructor(r){super(r);i(this,"languageCode");i(this,"timeZoneId");i(this,"permissions");this.languageCode=r.languageCode,this.timeZoneId=r.timeZoneId,this.permissions=r.permissions.map(s=>new J(s))}}const T=()=>`${K()}/service-account-organisations`,ee=e=>`${T()}/${encodeURIComponent(e)}`,oe=new H("serviceAccountOrganisation",x).createComplete(T,ee,C),te=Q.getMany(oe),V=N({name:"FSBaseServiceAccountOrganisationsList",components:{FSDataTable:F,FSImage:Z,FSTagGroup:z,FSSpan:d,FSUserOrganisationTileUI:j},props:{serviceAccountOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tableCode:{type:String,required:!0},itemTo:{type:Function,required:!1}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r,fetching:s}=te(),g=n=>e.modelValue.includes(n);return R(()=>e.serviceAccountOrganisationsFilters,(n,m)=>{(!n&&!m||!M.isEqual(n,m))&&o(e.serviceAccountOrganisationsFilters??void 0)},{immediate:!0}),{fetchingServiceAccountOrganisations:s,serviceAccountOrganisations:r,userValidityLabel:W,userTypeLabel:X,isSelected:g}}});function ie(e,o,r,s,g,n){const m=p("FSImage"),h=p("FSTagGroup"),_=p("FSUserOrganisationTileUI"),$=p("FSDataTable");return f(),v($,E({items:e.serviceAccountOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingServiceAccountOrganisations,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),q({"item.imageId":a(({item:t})=>[t.imageId?(f(),v(m,{key:0,height:"32px",width:"32px",imageId:t.imageId},null,8,["imageId"])):k("",!0)]),"item.tags":a(({item:t})=>[c(h,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),"item.validity":a(({item:t})=>[c(d,{font:"text-overline"},{default:a(()=>[I(O(e.userValidityLabel(t.validity)),1)]),_:2},1024)]),"item.userType":a(({item:t})=>[c(d,{font:"text-overline"},{default:a(()=>[I(O(e.userTypeLabel(t.userType)),1)]),_:2},1024)]),"item.tile":a(({item:t,toggleSelect:l})=>[c(_,{imageId:t.imageId,label:t.label,userType:t.userType,roleIcon:t.roleIcon,roleLabel:t.roleLabel,admin:t.admin,to:e.$props.itemTo&&e.$props.itemTo(t),modelValue:e.isSelected(t.id),"onUpdate:modelValue":S=>l(t)},null,8,["imageId","label","userType","roleIcon","roleLabel","admin","to","modelValue","onUpdate:modelValue"])]),_:2},[D(e.$slots,(t,l)=>({name:l,fn:a(S=>[w(e.$slots,l,G(P(S)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const L=Y(V,[["render",ie]]);V.__docgenInfo={displayName:"FSBaseServiceAccountOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountOrganisationsFilters",type:{name:"ServiceAccountOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tableCode",type:{name:"string"},required:!0},{name:"itemTo",type:{name:"(item: ServiceAccountOrganisationInfos) => Partial<RouteLocation>"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/serviceAccountOrganisations/FSBaseServiceAccountOrganisationsList.vue"]};const ko={title:"Foundation/Core/Lists/Base Lists/BaseServiceAccountOrganisationsList",component:L,subcomponents:{FSDataTable:F},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["serviceAccountOrganisations1"]}}},u={render:e=>({components:{FSBaseServiceAccountOrganisationsList:L},setup(){return{args:e}},template:`
      <FSBaseServiceAccountOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"serviceAccountOrganisations1",modelValue:[]}};var b,y,A;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseServiceAccountOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseServiceAccountOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'serviceAccountOrganisations1',
    modelValue: []
  }
}`,...(A=(y=u.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const Mo=["Default"];export{u as Default,Mo as __namedExportsOrder,ko as default};
