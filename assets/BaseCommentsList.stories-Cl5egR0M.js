var me=Object.defineProperty;var re=(e,t,o)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var n=(e,t,o)=>re(e,typeof t!="symbol"?t+"":t,o);import{d as k,b as R,y as i,z as u,A as g,C as s,N as a,F as b,w as H,H as L,I as $,c as ae,g as se,E as ie,O as le,G as ue}from"./vue.esm-bundler-l-siv0w9.js";import{_ as O}from"./lodash-BiW_TGGX.js";import{F as de}from"./FSButtonCancel-CIL_WbqO.js";import{F as pe}from"./FSTextArea-CcLT5orb.js";import{F as W}from"./FSButton-DcUuAZqz.js";import{F as j}from"./FSImage-ffhN4Yyt.js";import{_ as d}from"./FSRow-CbEgVN08.js";import{F as C}from"./FSCol-BvqytbKT.js";import{C as V}from"./useColors-Bs2u1_6J.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ce}from"./FSButtonRemoveIcon-BW0kG2z-.js";import{F as fe}from"./FSButtonEditIcon-oDG5Flt_.js";import{F as ge}from"./FSDialogRemove-B_kUgDIc.js";import{F as Ce}from"./FSCard-DL4SLpmS.js";import{F as z}from"./FSText-BwKgSTLP.js";import{G as Fe}from"./base-CmdGny12.js";import{S as w}from"./serviceFactory-DAEdCiSt.js";import{C as p}from"./composableFactory-C5FI4e55.js";import{i as P}from"./datesTools-CGhnvN9k.js";import{C as Se}from"./base-BWToAT4M.js";import{u as Ie}from"./useDateFormat-CLdrxMO6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSBaseField-CpNJbDpF.js";import"./FSSpan-Di50moR2.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSClickable-Up0p3Vk8.js";import"./css-CP2C2-Fe.js";import"./FSIcon-uIr9VdFq.js";import"./FSImageUI-DrOfkU7V.js";import"./FSLoader-kY4Od3NB.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./VImg-CZhZqiQJ.js";import"./useImages-CdDysFg4.js";import"./useAppAuthToken-CwPnmj0J.js";import"./index-DfSX31J9.js";import"./FSDialogSubmit-B3FDAAvv.js";import"./FSFadeOut-K3Ty9hFX.js";import"./uuid-DTaye2KM.js";import"./FSDialog-Bj0V9oeQ.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./useTranslations-CJK8D24x.js";import"./startOfWeek-uXTpkxA4.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useAppTimeZone-BUrTBgYP.js";class ve{constructor(t){n(this,"id");n(this,"imageId");n(this,"email");n(this,"phoneNumber");n(this,"firstName");n(this,"lastName");this.id=t.id,this.imageId=t.imageId,this.email=t.email,this.phoneNumber=t.phoneNumber,this.firstName=t.firstName,this.lastName=t.lastName}}class B extends ve{constructor(o){super(o);n(this,"adminAccess");n(this,"hasSignedPolicies");n(this,"languageCode");n(this,"timeZoneId");n(this,"allowNotifications");n(this,"allowSms");n(this,"allowEmails");this.adminAccess=o.adminAccess,this.hasSignedPolicies=o.hasSignedPolicies,this.languageCode=o.languageCode,this.timeZoneId=o.timeZoneId,this.allowNotifications=o.allowNotifications,this.allowSms=o.allowSms,this.allowEmails=o.allowEmails}}const he=()=>`${Fe()}/users`,_=()=>`${he()}/current`,T=new w("user",B).create(e=>e.build(w.addCustom("getCurrent",t=>t.get(_()),t=>new B(t)),e.addNotify(t=>({...w.addCustom("updateCurrent",(o,r)=>o.post(_(),r),o=>{const r=new B(o);return t.notify("update",r),r}),...w.addCustom("updateCurrentEmail",(o,r)=>o.put(_(),r),o=>{const r=new B(o);return t.notify("update",r),r})})))),ye=p.trackRef(T),D=()=>{const{track:e}=ye();return t=>{e(t)}},we=p.custom(T.getCurrent,D);p.custom(T.updateCurrent,D);p.custom(T.updateCurrentEmail,D);class Y{constructor(t){n(this,"id");n(this,"alertId");n(this,"userId");n(this,"userName");n(this,"userImageId");n(this,"timestamp");n(this,"comment");n(this,"edited");n(this,"editTimestamp");this.id=t.id,this.alertId=t.alertId,this.userId=t.userId,this.userName=t.userName,this.userImageId=t.userImageId,this.timestamp=P(t.timestamp),this.comment=t.comment,this.edited=t.edited,this.editTimestamp=t.editTimestamp?P(t.editTimestamp):null}}class be extends Y{constructor(t){super(t)}}const J=()=>`${Se()}/comments`,Ne=e=>`${J()}/${encodeURIComponent(e)}`,N=new w("comment",be).createComplete(J,Ne,Y);p.get(N);const Be=p.getMany(N),Ee=p.create(N),$e=p.update(N),Re=p.remove(N),K=k({name:"FSCommentField",components:{FSButton:W,FSButtonCancel:de,FSImage:j,FSTextArea:pe,FSRow:d,FSCol:C},props:{buttonLabel:{type:String,required:!1},creating:{type:Boolean,required:!1},userImageId:{type:String,required:!1},text:{type:String,required:!1},showCancelButton:{type:Boolean,required:!1,default:!1}},emits:["submit","cancel"],setup(e,{emit:t}){const o=R(e.text);return{innertext:o,ColorEnum:V,onSubmit:()=>{o.value&&(t("submit",o.value),o.value="")}}}});function Te(e,t,o,r,I,v){const c=i("FSImage"),f=i("FSTextArea"),F=i("FSButtonCancel");return u(),g(C,null,{default:s(()=>[a(d,{align:"top-left"},{default:s(()=>[a(c,{imageId:e.userImageId,width:"32px",height:"32px",rounded:"circle",thumbnail:!0},null,8,["imageId"]),a(f,{rows:5,hideHeader:!0,placeholder:e.$tr("ui.common.write-comment","Write a comment..."),modelValue:e.innertext,"onUpdate:modelValue":t[0]||(t[0]=m=>e.innertext=m)},null,8,["placeholder","modelValue"])]),_:1}),a(d,null,{default:s(()=>[a(d,{align:"center-right"},{default:s(()=>[e.showCancelButton?(u(),g(F,{key:0,onClick:t[1]||(t[1]=m=>e.$emit("cancel"))})):b("",!0),a(W,{prependIcon:"mdi-send-outline",color:e.ColorEnum.Primary,loading:e.creating,label:e.buttonLabel??e.$tr("ui.common.publish","Publish"),onClick:e.onSubmit},null,8,["color","loading","label","onClick"])]),_:1})]),_:1})]),_:1})}const M=A(K,[["render",Te]]);K.__docgenInfo={displayName:"FSCommentField",exportName:"default",description:"",tags:{},props:[{name:"buttonLabel",type:{name:"string"},required:!1},{name:"creating",type:{name:"boolean"},required:!1},{name:"userImageId",type:{name:"string | null"},required:!1},{name:"text",type:{name:"string"},required:!1},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"cancel"},{name:"submit"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSCommentField.vue"]};const Q=k({name:"FSCommentTileUI",components:{FSButtonRemoveIcon:ce,FSButtonEditIcon:fe,FSCommentField:M,FSDialogRemove:ge,FSImage:j,FSCard:Ce,FSText:z,FSCol:C,FSRow:d},props:{id:{type:String,required:!1,default:null},userName:{type:String,required:!1,default:null},userImageId:{type:String,required:!1,default:null},canEditRemove:{type:Boolean,required:!1,default:!1},timestamp:{type:String,required:!1,default:null},comment:{type:String,required:!1,default:void 0},edited:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1}},emits:["edit","remove"],setup(e,{emit:t}){const o=R(!1),r=R(!1),I=v=>{t("edit",{commentId:e.id,comment:v}),o.value=!1};return H(()=>e.removing,()=>{e.removing||(r.value=!1)}),{showEditComment:o,removeDialog:r,ColorEnum:V,updateComment:I}}});function qe(e,t,o,r,I,v){const c=i("FSImage"),f=i("FSText"),F=i("FSButtonEditIcon"),m=i("FSButtonRemoveIcon"),h=i("FSCard"),y=i("FSCommentField"),q=i("FSDialogRemove");return u(),g(C,{align:"center-center"},{default:s(()=>[a(h,{padding:"8px",width:"500px"},{header:s(()=>[a(d,{align:"center-center",gap:"12px"},{default:s(()=>[a(c,{imageId:e.userImageId,width:"24px",height:"24px",rounded:"circle"},null,8,["imageId"]),a(f,{font:"text-overline"},{default:s(()=>[L($(e.userName)+" - "+$(e.timestamp),1)]),_:1}),a(d,{align:"center-right",wrap:!1},{default:s(()=>[e.canEditRemove?(u(),g(F,{key:0,onClick:t[0]||(t[0]=S=>e.showEditComment=!0)})):b("",!0),e.canEditRemove?(u(),g(m,{key:1,onClick:t[1]||(t[1]=S=>e.removeDialog=!0)})):b("",!0)]),_:1})]),_:1})]),body:s(()=>[a(f,{class:"text-wrap"},{default:s(()=>[L($(e.comment),1)]),_:1})]),footer:s(()=>[]),_:1}),e.showEditComment?(u(),g(C,{key:0,width:"500px"},{default:s(()=>[a(y,{userImageId:e.userImageId,showCancelButton:!0,text:e.comment,onCancel:t[2]||(t[2]=S=>e.showEditComment=!1),onSubmit:e.updateComment},null,8,["userImageId","text","onSubmit"])]),_:1})):b("",!0),a(q,{modelValue:e.removeDialog,"onUpdate:modelValue":t[3]||(t[3]=S=>e.removeDialog=S),removeTotal:1,removing:e.removing,"onClick:submitButton":t[4]||(t[4]=S=>e.$emit("remove"))},null,8,["modelValue","removing"])]),_:1})}const X=A(Q,[["render",qe]]);Q.__docgenInfo={displayName:"FSCommentTileUI",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userName",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userImageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"canEditRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"timestamp",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"comment",type:{name:"string | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"edited",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"remove"},{name:"edit"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSCommentTileUI.vue"]};const ee=k({title:"FSBaseCommentsList",components:{FSText:z,FSCol:C,FSRow:d,FSCommentTileUI:X,FSCommentField:M},props:{commentFilters:{type:Object,required:!0},allowAlertComment:{type:Boolean,default:!1}},setup(e){const{fetch:t,entity:o}=we(),{create:r,creating:I}=Ee(),{getMany:v,entities:c}=Be(),{update:f}=$e(),{remove:F,removing:m}=Re(),{epochToLongTimeFormat:h}=Ie(),y=R(null),q=ae(()=>O.orderBy(c.value,["timestamp"],["desc"]));se(()=>{t()});const S=l=>{e.commentFilters.alertId&&l&&r({comment:l,alertId:e.commentFilters.alertId})},oe=l=>{f(l.commentId,{comment:l.comment})},ne=async l=>{try{y.value=null,await F(l)}catch(U){y.value=U.response.data}};return H(()=>e.commentFilters,(l,U)=>{O.isEqual(l,U)||v(e.commentFilters)},{immediate:!0}),{creatingComment:I,orderedComments:q,currentUser:o,ColorEnum:V,comments:c,removing:m,error:y,epochToLongTimeFormat:h,createNewComment:S,updateComment:oe,removeComment:ne}}});function Ue(e,t,o,r,I,v){const c=i("FSText"),f=i("FSCommentField"),F=i("FSCommentTileUI");return e.$props.allowAlertComment?(u(),g(C,{key:0,padding:"24px",gap:"48px",align:"center-center"},{default:s(()=>[a(c,{font:"text-h3"},{default:s(()=>[L($(e.$tr("ui.common.comments","Comments")),1)]),_:1}),a(d,{width:"500px"},{default:s(()=>{var m;return[a(f,{buttonLabel:e.$tr("ui.common.publish","Publish"),creating:e.creatingComment,onSubmit:e.createNewComment,userImageId:(m=e.currentUser)==null?void 0:m.imageId},null,8,["buttonLabel","creating","onSubmit","userImageId"])]}),_:1}),a(C,{gap:"12px"},{default:s(()=>[(u(!0),ie(ue,null,le(e.orderedComments,m=>{var h;return u(),g(F,{key:m.id,timestamp:e.epochToLongTimeFormat(m.timestamp),userName:m.userName,userImageId:m.userImageId,canEditRemove:((h=e.currentUser)==null?void 0:h.id)===m.userId,comment:m.comment,edited:m.edited,removing:e.removing,id:m.id,onEdit:e.updateComment,onRemove:y=>e.removeComment(m.id)},null,8,["timestamp","userName","userImageId","canEditRemove","comment","edited","removing","id","onEdit","onRemove"])}),128))]),_:1})]),_:1})):b("",!0)}const te=A(ee,[["render",Ue]]);ee.__docgenInfo={exportName:"default",displayName:"FSBaseCommentsList",description:"",tags:{},props:[{name:"commentFilters",type:{name:"CommentFilters"},required:!0},{name:"allowAlertComment",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/comments/FSBaseCommentsList.vue"]};const Xt={title:"Foundation/Core/Lists/Base Lists/BaseCommentsList",component:te,subcomponents:{FSCommentTileUI:X,FSCommentField:M},tags:["autodocs"],argTypes:{}},E={render:e=>({components:{FSBaseCommentsList:te},setup(){return{args:e}},template:`
      <FSBaseCommentsList
        :allowAlertComment="args.allowAlertComment"
        :commentFilters="args.commentFilters"
      />
    `}),args:{allowAlertComment:!0,commentFilters:{alertId:"1"}}};var x,G,Z;E.parameters={...E.parameters,docs:{...(x=E.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseCommentsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseCommentsList
        :allowAlertComment="args.allowAlertComment"
        :commentFilters="args.commentFilters"
      />
    \`
  }),
  args: {
    allowAlertComment: true,
    commentFilters: {
      alertId: "1"
    }
  }
}`,...(Z=(G=E.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};const eo=["Default"];export{E as Default,eo as __namedExportsOrder,Xt as default};
