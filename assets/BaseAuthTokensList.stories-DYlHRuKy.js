var $=Object.defineProperty;var v=(t,e,o)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var r=(t,e,o)=>v(t,typeof e!="symbol"?e+"":e,o);import{d as M,w as N,y as h,z as x,A as E,B as R,O as U,C as a,m as q,K as w,L as O,M as I,N as f,H as k,I as F}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as V}from"./lodash-BiW_TGGX.js";import{F as C}from"./FSDataTable-BIgFSJSE.js";import{F as G}from"./FSText-BIOb5fBT.js";import{S as H}from"./serviceFactory-DAEdCiSt.js";import{i as g}from"./datesTools-CGhnvN9k.js";import{G as K}from"./base-CmdGny12.js";import{C as l}from"./composableFactory-Dh-waxQE.js";import{u as P}from"./useDateFormat-zHupOjLO.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-h4slsrT9.js";import"./useBreakpoints-INFVV7da.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./css-BWDYXGFo.js";import"./color-B0htL_ZM.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./FSCol-CvoATp5Q.js";import"./FSRow-BnsweOMX.js";import"./VSpacer-DLFo12A6.js";import"./FSDataTableUI-C4myWXVd.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-bKRtBqVc.js";import"./FSIcon-CyS8zLbP.js";import"./VIcon-Bo7R9vIQ.js";import"./FSSpan-Bnbdrku6.js";import"./useSlots-zwOl0abH.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSCard-BxmDRzjE.js";import"./FSSearchField-_SEFeUDc.js";import"./FSTextField-BLVYx7ij.js";import"./FSBaseField-BlQcLyVQ.js";import"./FSButton-Bc8wnoJs.js";import"./FSClickable-JTcIAbNo.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSSelectField-CvyvsNwI.js";import"./FSDialogMenu-D9HgWnX3.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-qOOOxz_-.js";import"./FSButtonNextIcon-DhMVExMM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-7WnTN5nE.js";import"./FSWrapGroup-BTCmZHSW.js";import"./FSFadeOut-BhgieYVE.js";import"./FSRadio-n9JXvfPW.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-D5P4hFmo.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-LluqAkon.js";import"./FSChip-BRgg5HGZ.js";import"./FSOptionGroup-DEt-ejts.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useAppTimeZone-DLNqwrXb.js";class _{constructor(e){r(this,"id");r(this,"label");r(this,"creationDate");r(this,"dateMax");this.id=e.id,this.label=e.label,this.creationDate=g(e.creationDate),this.dateMax=g(e.dateMax)}}class j extends _{constructor(o){super(o);r(this,"token");this.token=o.token}}const p=()=>`${K()}/pats`,W=t=>`${p()}/${encodeURIComponent(t)}`,u=new H("authToken",j).create(t=>t.build(t.addGetMany(p,_),t.addCreate(p),t.addRemove(W),t.addNotify())),Y=l.getMany(u);l.create(u);l.remove(u);const L=M({name:"FSBaseAuthTokensList",components:{FSDataTable:C,FSText:G},props:{tableCode:{type:String,required:!1,default:null},authTokensFilters:{type:Object,required:!1,default:null}},setup(t){const{getMany:e,entities:o,fetching:d}=Y(),{epochToLongTimeFormat:c}=P();return N(()=>t.authTokensFilters,(m,i)=>{(!m&&!i||!V.isEqual(m,i))&&e(t.authTokensFilters??void 0)},{immediate:!0}),{authTokens:o,fetchingAuthTokens:d,epochToLongTimeFormat:c}}});function J(t,e,o,d,c,m){const i=h("FSText"),B=h("FSDataTable");return x(),E(B,q({items:t.authTokens,loading:t.fetchingAuthTokens,tableCode:t.$props.tableCode},t.$attrs),R({"item.creationDate":a(({item:s})=>[f(i,null,{default:a(()=>[k(F(t.epochToLongTimeFormat(s.creationDate)),1)]),_:2},1024)]),"item.dateMax":a(({item:s})=>[f(i,null,{default:a(()=>[k(F(t.epochToLongTimeFormat(s.dateMax)),1)]),_:2},1024)]),_:2},[U(t.$slots,(s,T)=>({name:T,fn:a(y=>[w(t.$slots,T,O(I(y)))])}))]),1040,["items","loading","tableCode"])}const D=z(L,[["render",J]]);L.__docgenInfo={displayName:"FSBaseAuthTokensList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"authTokensFilters",type:{name:"AuthTokenFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/authTokens/FSBaseAuthTokensList.vue"]};const Re={title:"Foundation/Core/Lists/Base Lists/BaseAuthTokensList",component:D,subcomponents:{FSDataTable:C},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["authTokens1"]}}},n={render:t=>({components:{FSBaseAuthTokensList:D},setup(){return{args:t}},template:`
      <FSBaseAuthTokensList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"authTokens1"}};var b,S,A;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseAuthTokensList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseAuthTokensList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'authTokens1'
  }
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const Ue=["Default"];export{n as Default,Ue as __namedExportsOrder,Re as default};