import{d as U,w as v,y as a,z as F,A as S,M as h,N as $,B as o,m as y,I as C,J as _,K as q,L as i,E as p,D as w,G as b}from"./vue.esm-bundler-CxS4_7kK.js";import{_ as L}from"./lodash-BiW_TGGX.js";import{F as B}from"./FSDataTable-BG49Hda5.js";import{_ as l}from"./FSSpan-3STIP-79.js";import{F as k}from"./FSImage-B8BZKIvS.js";import{F as N}from"./FSTagGroup-DYAMWRIR.js";import{F as D}from"./FSIconCheck-CZF-rlTG.js";import{F as E}from"./FSUserOrganisationTileUI-CYc976zJ.js";import{a as G}from"./useUserOrganisations-B2htUMRF.js";import{u as P,a as z}from"./users-DxhAlUHP.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as M}from"./FSIcon-DKHuRfPI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-BMQDJgx0.js";import"./css-D18ueKtB.js";import"./useColors-CVdO3CcM.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./color-DpQhyQC8.js";import"./dimensions-DBaG2oVF.js";import"./elevation-8SXivnh1.js";import"./locale-DgxPCyxi.js";import"./FSCol-Co9r7Klj.js";import"./FSRow-D546kqFt.js";import"./VSpacer-DaRxrr8q.js";import"./FSDataTableUI-B-4UzIck.js";import"./vue-router-DwCyYn3Y.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BJ0zq37S.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./density-CY0EC5jE.js";import"./VIcon-C65wMs2G.js";import"./tag-ByYBjpGI.js";import"./proxiedModel-DAUSUEYq.js";import"./index-Dx6GtDlm.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./index-D0m5TbR6.js";import"./transition-DZ-8zzo1.js";import"./form-lyoENh9E.js";import"./FSCard-uGx4g-q0.js";import"./FSText-CETLcZv7.js";import"./useSlots-BHms3Yb6.js";import"./FSSearchField-jGkYIgq2.js";import"./FSTextField-DxJVxYys.js";import"./FSBaseField-lEL5efap.js";import"./FSButton-D4qgd2ja.js";import"./FSClickable-xECbCdT3.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./VField-Cs2kmeSz.js";import"./loader-BoG0AaGl.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./useTranslations-ZMyFjr19.js";import"./FSSelectField-DujFH32C.js";import"./FSDialogMenu-1exdynOQ.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./router-C4cLtMAM.js";import"./FSSlideGroup-Cseplt4t.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./FSFadeOut-D40FnrcD.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-CEzGyfN4.js";import"./VMenu-CCWiAq1W.js";import"./FSDivider-BkjjDvS3.js";import"./FSChip-Dvm8S3l9.js";import"./FSOptionGroup-CjLzmro8.js";import"./filter-C1K_d8Vd.js";import"./VBtn-Cg1UOEjx.js";import"./filter-_ePnXriG.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-935AgDKu.js";import"./FSImageUI-S1V1r0uW.js";import"./useImages-DkNM0cBn.js";import"./base-CmdGny12.js";import"./FSTag-Bxp_o6Zi.js";import"./FSTile-C18qmuVB.js";import"./permissionInfos-BPDgTHQl.js";const V=U({name:"FSBaseUserOrganisationsList",components:{FSDataTable:B,FSImage:k,FSUserOrganisationTileUI:E,FSSpan:l,FSTagGroup:N,FSIconCheck:D},props:{tableCode:{type:String,required:!0},userOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:m,entities:u,fetching:d}=G(),f=r=>e.modelValue.includes(r);return v(()=>e.userOrganisationsFilters,(r,s)=>{(!r&&!s||!L.isEqual(r,s))&&m(e.userOrganisationsFilters??void 0)},{immediate:!0}),{fetchingUserOrganisations:d,userOrganisations:u,userValidityLabel:P,userTypeLabel:z,isSelected:f}}});function R(e,m,u,d,f,r){const s=a("FSImage"),g=a("FSIconCheck"),O=a("FSTagGroup"),T=a("FSUserOrganisationTileUI"),I=a("FSDataTable");return F(),S(I,y({items:e.userOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingUserOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":m[0]||(m[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),h({"header.imageId-title":o(()=>[i(M,null,{default:o(()=>[p(" mdi-panorama-variant-outline ")]),_:1})]),"item.imageId":o(({item:t})=>[t.imageId?(F(),S(s,{key:0,height:"32px",width:"32px",imageId:t.imageId},null,8,["imageId"])):w("",!0)]),"item.allowEmails":o(({item:t})=>[i(g,{value:t.allowEmails},null,8,["value"])]),"item.allowSms":o(({item:t})=>[i(g,{value:t.allowSms},null,8,["value"])]),"item.tags":o(({item:t})=>[i(O,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),"item.validity":o(({item:t})=>[i(l,{font:"text-overline"},{default:o(()=>[p(b(e.userValidityLabel(t.validity)),1)]),_:2},1024)]),"item.userType":o(({item:t})=>[i(l,{font:"text-overline"},{default:o(()=>[p(b(e.userTypeLabel(t.userType)),1)]),_:2},1024)]),"item.tile":o(({item:t,toggleSelect:n})=>[i(T,y({to:e.$props.itemTo&&e.$props.itemTo(t),editable:e.$props.editable,modelValue:e.isSelected(t.id),"onUpdate:modelValue":c=>n(t)},t),null,16,["to","editable","modelValue","onUpdate:modelValue"])]),_:2},[$(e.$slots,(t,n)=>({name:n,fn:o(c=>[C(e.$slots,n,_(q(c)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const Lt=A(V,[["render",R]]);V.__docgenInfo={displayName:"FSBaseUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"userOrganisationsFilters",type:{name:"UserOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: UserOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSBaseUserOrganisationsList.vue"]};export{Lt as default};
