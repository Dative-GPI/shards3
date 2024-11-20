var $=Object.defineProperty;var v=(t,e,o)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var r=(t,e,o)=>v(t,typeof e!="symbol"?e+"":e,o);import{d as M,w as N,y as h,z as x,A as E,B as R,O as U,C as a,m as q,K as w,L as O,M as I,N as f,H as k,I as F}from"./vue.esm-bundler-Ddr6MgcY.js";import{_ as V}from"./lodash-BiW_TGGX.js";import{F as C}from"./FSDataTable-CUA9EG44.js";import{F as G}from"./FSText-CAGI2dEo.js";import{S as H}from"./serviceFactory-DTTRhbEw.js";import{i as g}from"./datesTools-CGhnvN9k.js";import{G as K}from"./base-CmdGny12.js";import{C as l}from"./composableFactory-H3XPfy7N.js";import{u as P}from"./useDateFormat-DxxoI3Q6.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-PksHGtEK.js";import"./useBreakpoints-BMg9gIvD.js";import"./useColors-DnoeDx-P.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./css-CxoeZkpP.js";import"./color-DdAXPAA0.js";import"./dimensions-DL1AZk-8.js";import"./elevation-BNOJtsSY.js";import"./locale-CA7yUTVs.js";import"./FSCol-D8gLxM2E.js";import"./FSRow-CSQtiyAx.js";import"./FSDataTableUI-jFJeeCeX.js";import"./vue-router-9d6tV3EF.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-3iIuKfLX.js";import"./FSIcon-DfjSexyz.js";import"./VIcon-zho7mIKV.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./useRules-BfiZMl38.js";import"./VSelectionControl-DbX2q5FD.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./index-BF2Ge4Ib.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./index-B-qTxNvr.js";import"./transition-BtBp4lzQ.js";import"./form-vji0TmoR.js";import"./FSCard-Bfo4Z0Zf.js";import"./FSSearchField-D9ku8NjQ.js";import"./FSTextField-ECMlyBTY.js";import"./FSBaseField-BXJBXTur.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./FSClickable-D7sul-uP.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./VField-DrieYqTb.js";import"./loader-CNy9VCwd.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./useTranslations-DgvmBCqU.js";import"./FSSelectField-WQNi82Nz.js";import"./VList-BsRjN0ZI.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./router-C4YP2PAT.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./VImg-Bi-pKvLj.js";import"./FSSlideGroup-8udoapu6.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-CjZBl77R.js";import"./FSWrapGroup-DCzWuvHX.js";import"./FSFadeOut-B5r2PNGg.js";import"./FSRadio-CBI2uo6q.js";import"./VSelect-DLEPHyKg.js";import"./VMenu-CkU-g4Hp.js";import"./FSDivider-CDvYXrsD.js";import"./FSChip-B-qI2KQy.js";import"./FSOptionGroup-CjsCGHE4.js";import"./filter-C1K_d8Vd.js";import"./VBtn-GP0Uljy4.js";import"./filter-MqAtiUjL.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./startOfWeek-uXTpkxA4.js";import"./useAppLanguageCode-C2XicOK_.js";import"./useAppTimeZone-Bno6Crzp.js";import"./startOfDay-C4pDH4rb.js";const p=()=>`${K()}/pats`,j=t=>`${p()}/${encodeURIComponent(t)}`,u=new H("authToken",Y).create(t=>t.build(t.addGetMany(p,_),t.addCreate(p),t.addRemove(j),t.addNotify())),W=l.getMany(u);l.create(u);l.remove(u);class _{constructor(e){r(this,"id");r(this,"label");r(this,"creationDate");r(this,"dateMax");this.id=e.id,this.label=e.label,this.creationDate=g(e.creationDate),this.dateMax=g(e.dateMax)}}class Y extends _{constructor(o){super(o);r(this,"token");this.token=o.token}}const L=M({name:"FSBaseAuthTokensList",components:{FSDataTable:C,FSText:G},props:{tableCode:{type:String,required:!1,default:null},authTokensFilters:{type:Object,required:!1,default:null}},setup(t){const{getMany:e,entities:o,fetching:d}=W(),{epochToLongTimeFormat:c}=P();return N(()=>t.authTokensFilters,(m,i)=>{(!m&&!i||!V.isEqual(m,i))&&e(t.authTokensFilters??void 0)},{immediate:!0}),{authTokens:o,fetchingAuthTokens:d,epochToLongTimeFormat:c}}});function J(t,e,o,d,c,m){const i=h("FSText"),B=h("FSDataTable");return x(),E(B,q({items:t.authTokens,loading:t.fetchingAuthTokens,tableCode:t.$props.tableCode},t.$attrs),R({"item.creationDate":a(({item:s})=>[f(i,null,{default:a(()=>[k(F(t.epochToLongTimeFormat(s.creationDate)),1)]),_:2},1024)]),"item.dateMax":a(({item:s})=>[f(i,null,{default:a(()=>[k(F(t.epochToLongTimeFormat(s.dateMax)),1)]),_:2},1024)]),_:2},[U(t.$slots,(s,T)=>({name:T,fn:a(y=>[w(t.$slots,T,O(I(y)))])}))]),1040,["items","loading","tableCode"])}const D=z(L,[["render",J]]);L.__docgenInfo={displayName:"FSBaseAuthTokensList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"authTokensFilters",type:{name:"AuthTokenFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/authTokens/FSBaseAuthTokensList.vue"]};const Ee={title:"Foundation/Core/Lists/Base Lists/BaseAuthTokensList",component:D,subcomponents:{FSDataTable:C},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["authTokens1"]}}},n={render:t=>({components:{FSBaseAuthTokensList:D},setup(){return{args:t}},template:`
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
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const Re=["Default"];export{n as Default,Re as __namedExportsOrder,Ee as default};
