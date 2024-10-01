var q=Object.defineProperty;var R=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var i=(e,t,r)=>R(e,typeof t!="symbol"?t+"":t,r);import{d as w,w as D,y as d,z as O,A,M as E,N as G,B as a,m as b,I as P,J as k,K as M,L as s,E as S,D as Z,G as F}from"./vue.esm-bundler-DjjVIdVI.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as T}from"./FSDataTable-CtxyfoeN.js";import{_ as f}from"./FSSpan-D1pceTli.js";import{F as j}from"./FSImage-C5YJvBfA.js";import{F as J}from"./FSTagGroup-DlWhfkx3.js";import{F as K}from"./FSServiceAccountOrganisationTileUI-CwI8-dIS.js";import{P as H}from"./permissionInfos-BPDgTHQl.js";import{C as Q}from"./base-LOOo-Z1R.js";import{S as W}from"./serviceFactory-DAEdCiSt.js";import{C as m}from"./composableFactory-CNptecSH.js";import{u as X,a as Y}from"./users-DebO3lls.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ee}from"./FSIcon-BCbpBdVG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-DpMpI5Qw.js";import"./css-BkQhD285.js";import"./useColors-CdvgF10X.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./color-BKGJvBEr.js";import"./dimensions-DBrW1AO_.js";import"./elevation-kEG7tFkj.js";import"./locale-Dn84bpGK.js";import"./FSCol-TPWSQPHs.js";import"./FSRow-CmD7j8Pv.js";import"./VSpacer-CrqXaTz-.js";import"./FSDataTableUI-J-JHjE_D.js";import"./vue-router-C7inxZoN.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-UZa98yAo.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./density-BPFRY_Tg.js";import"./VIcon-CzaRZDPI.js";import"./tag-DT601Ssr.js";import"./proxiedModel-G1bil5DU.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./form-B7NlTRtd.js";import"./FSCard-CXVJHnbm.js";import"./FSText-Der-WemT.js";import"./useSlots-DzSo5JdB.js";import"./FSSearchField-Dk_6lGWY.js";import"./FSTextField-3oztY1wc.js";import"./FSBaseField-DjLbenuy.js";import"./FSButton-DMlgbucp.js";import"./FSClickable-DB3UYOUU.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./VField-BnYbwRuc.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./useTranslations-f9CWAvtI.js";import"./FSSelectField-BBg1Sq9a.js";import"./FSDialogMenu-BWN6ZGUx.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-DWVYRyaA.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-BrIzYH8T.js";import"./FSWrapGroup-D3vzPBUf.js";import"./FSFadeOut-LZYxqpYZ.js";import"./FSRadio-BjrxbHLV.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-COKlA5Ws.js";import"./VMenu-BkqMtGEU.js";import"./FSDivider-BOpY7H3n.js";import"./FSChip-Csg6-bUx.js";import"./FSOptionGroup-D-g-XIX4.js";import"./filter-C1K_d8Vd.js";import"./VBtn-el1a73sG.js";import"./filter-BS4_e9hb.js";import"./FSImageUI-DCipACiG.js";import"./useImages-CM9GOyc5.js";import"./base-CmdGny12.js";import"./FSTag-pSRhmSY7.js";import"./FSTile-DxppklPg.js";import"./useAppOrganisationId-BeeiXv5V.js";class h{constructor(t){i(this,"id");i(this,"userId");i(this,"organisationId");i(this,"roleId");i(this,"roleLabel");i(this,"roleIcon");i(this,"imageId");i(this,"userType");i(this,"validity");i(this,"label");i(this,"description");i(this,"tags");this.id=t.id,this.userId=t.userId,this.organisationId=t.organisationId,this.roleId=t.roleId,this.roleLabel=t.roleLabel,this.roleIcon=t.roleIcon,this.imageId=t.imageId,this.userType=t.userType,this.validity=t.validity,this.label=t.label,this.description=t.description,this.tags=t.tags&&t.tags.slice()||[]}}class te extends h{constructor(r){super(r);i(this,"languageCode");i(this,"timeZoneId");i(this,"permissions");this.languageCode=r.languageCode,this.timeZoneId=r.timeZoneId,this.permissions=r.permissions.map(p=>new H(p))}}const L=()=>`${Q()}/service-account-organisations`,oe=e=>`${L()}/${encodeURIComponent(e)}`,l=new W("serviceAccountOrganisation",te).createComplete(L,oe,h);m.get(l);const ie=m.getMany(l);m.create(l);m.update(l);m.remove(l);const _=w({name:"FSBaseServiceAccountOrganisationsList",components:{FSDataTable:T,FSImage:j,FSTagGroup:J,FSSpan:f,FSServiceAccountOrganisationTileUI:K},props:{tableCode:{type:String,required:!0},serviceAccountOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:t,entities:r,fetching:p}=ie(),v=n=>e.modelValue.includes(n);return D(()=>e.serviceAccountOrganisationsFilters,(n,c)=>{(!n&&!c||!z.isEqual(n,c))&&t(e.serviceAccountOrganisationsFilters??void 0)},{immediate:!0}),{fetchingServiceAccountOrganisations:p,serviceAccountOrganisations:r,userValidityLabel:X,userTypeLabel:Y,isSelected:v}}});function re(e,t,r,p,v,n){const c=d("FSImage"),B=d("FSTagGroup"),N=d("FSServiceAccountOrganisationTileUI"),U=d("FSDataTable");return O(),A(U,b({items:e.serviceAccountOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingServiceAccountOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),E({"header.imageId-title":a(()=>[s(ee,null,{default:a(()=>[S(" mdi-panorama-variant-outline ")]),_:1})]),"item.imageId":a(({item:o})=>[o.imageId?(O(),A(c,{key:0,height:"32px",width:"32px",imageId:o.imageId},null,8,["imageId"])):Z("",!0)]),"item.tags":a(({item:o})=>[s(B,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),"item.validity":a(({item:o})=>[s(f,{font:"text-overline"},{default:a(()=>[S(F(e.userValidityLabel(o.validity)),1)]),_:2},1024)]),"item.userType":a(({item:o})=>[s(f,{font:"text-overline"},{default:a(()=>[S(F(e.userTypeLabel(o.userType)),1)]),_:2},1024)]),"item.tile":a(({item:o,toggleSelect:u})=>[s(N,b({to:e.$props.itemTo&&e.$props.itemTo(o),editable:e.$props.editable,modelValue:e.isSelected(o.id),"onUpdate:modelValue":I=>u(o)},o),null,16,["to","editable","modelValue","onUpdate:modelValue"])]),_:2},[G(e.$slots,(o,u)=>({name:u,fn:a(I=>[P(e.$slots,u,k(M(I)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const $=x(_,[["render",re]]);_.__docgenInfo={displayName:"FSBaseServiceAccountOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"serviceAccountOrganisationsFilters",type:{name:"ServiceAccountOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ServiceAccountOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/serviceAccountOrganisations/FSBaseServiceAccountOrganisationsList.vue"]};const jt={title:"Foundation/Core/Lists/Base Lists/BaseServiceAccountOrganisationsList",component:$,subcomponents:{FSDataTable:T},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["serviceAccountOrganisations1"]}}},g={render:e=>({components:{FSBaseServiceAccountOrganisationsList:$},setup(){return{args:e}},template:`
      <FSBaseServiceAccountOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"serviceAccountOrganisations1",modelValue:[]}};var y,C,V;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(V=(C=g.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const Jt=["Default"];export{g as Default,Jt as __namedExportsOrder,jt as default};
