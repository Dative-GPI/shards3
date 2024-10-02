var oe=Object.defineProperty;var ne=(e,t,o)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var n=(e,t,o)=>ne(e,typeof t!="symbol"?t+"":t,o);import{d as _,b as O,y as i,z as u,A as f,B as a,L as r,D as w,E as U,G as B,c as me,g as re,w as se,C as ae,N as ie,F as le}from"./vue.esm-bundler-CxS4_7kK.js";import{_ as V}from"./lodash-BiW_TGGX.js";import{F as ue}from"./FSButtonCancel-oEUaOM-1.js";import{F as de}from"./FSTextArea-BMooJqYy.js";import{F as G}from"./FSButton-D4qgd2ja.js";import{F as Z}from"./FSImage-C9ySLapv.js";import{_ as g}from"./FSRow-D546kqFt.js";import{F}from"./FSCol-Co9r7Klj.js";import{C as q}from"./useColors-CVdO3CcM.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as W}from"./VSpacer-DaRxrr8q.js";import{F as ce}from"./FSButtonRemoveIcon-BAGMXLEV.js";import{F as pe}from"./FSButtonEditIcon-B5iXLog4.js";import{F as fe}from"./FSCard-uGx4g-q0.js";import{F as j}from"./FSText-CETLcZv7.js";import{G as Ce}from"./base-CmdGny12.js";import{S as h}from"./serviceFactory-DAEdCiSt.js";import{C as d}from"./composableFactory-935AgDKu.js";import{i as x}from"./datesTools-CGhnvN9k.js";import{C as ge}from"./base-CaOb73CX.js";import{u as Fe}from"./useDateFormat-3O5RagjD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSBaseField-lEL5efap.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./useRules-o706rtr1.js";import"./css-D18ueKtB.js";import"./VField-Cs2kmeSz.js";import"./index-D0m5TbR6.js";import"./color-DpQhyQC8.js";import"./theme-BEfrBPRQ.js";import"./transition-DZ-8zzo1.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./locale-DgxPCyxi.js";import"./VIcon-C65wMs2G.js";import"./tag-ByYBjpGI.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./form-lyoENh9E.js";import"./loader-BoG0AaGl.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./FSClickable-xECbCdT3.js";import"./FSIcon-DKHuRfPI.js";import"./FSImageUI-S1V1r0uW.js";import"./FSLoader-BMQDJgx0.js";import"./dimensions-DBaG2oVF.js";import"./elevation-8SXivnh1.js";import"./VImg-616TDJo4.js";import"./useImages-DkNM0cBn.js";import"./useAppAuthToken-JHUrxSke.js";import"./index-DfSX31J9.js";import"./startOfWeek-uXTpkxA4.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./useAppTimeZone-CIW33DGM.js";import"./useTranslations-ZMyFjr19.js";class Ie{constructor(t){n(this,"id");n(this,"imageId");n(this,"email");n(this,"phoneNumber");n(this,"firstName");n(this,"lastName");this.id=t.id,this.imageId=t.imageId,this.email=t.email,this.phoneNumber=t.phoneNumber,this.firstName=t.firstName,this.lastName=t.lastName}}class E extends Ie{constructor(o){super(o);n(this,"adminAccess");n(this,"hasSignedPolicies");n(this,"languageCode");n(this,"timeZoneId");n(this,"allowNotifications");n(this,"allowSms");n(this,"allowEmails");this.adminAccess=o.adminAccess,this.hasSignedPolicies=o.hasSignedPolicies,this.languageCode=o.languageCode,this.timeZoneId=o.timeZoneId,this.allowNotifications=o.allowNotifications,this.allowSms=o.allowSms,this.allowEmails=o.allowEmails}}const Se=()=>`${Ce()}/users`,T=()=>`${Se()}/current`,R=new h("user",E).create(e=>e.build(h.addCustom("getCurrent",t=>t.get(T()),t=>new E(t)),e.addNotify(t=>({...h.addCustom("updateCurrent",(o,s)=>o.post(T(),s),o=>{const s=new E(o);return t.notify("update",s),s}),...h.addCustom("updateCurrentEmail",(o,s)=>o.put(T(),s),o=>{const s=new E(o);return t.notify("update",s),s})})))),he=d.trackRef(R),k=()=>{const{track:e}=he();return t=>{e(t)}},we=d.custom(R.getCurrent,k);d.custom(R.updateCurrent,k);d.custom(R.updateCurrentEmail,k);class z{constructor(t){n(this,"id");n(this,"alertId");n(this,"userId");n(this,"userName");n(this,"userImageId");n(this,"timestamp");n(this,"comment");n(this,"edited");n(this,"editTimestamp");this.id=t.id,this.alertId=t.alertId,this.userId=t.userId,this.userName=t.userName,this.userImageId=t.userImageId,this.timestamp=x(t.timestamp),this.comment=t.comment,this.edited=t.edited,this.editTimestamp=t.editTimestamp?x(t.editTimestamp):null}}class ye extends z{constructor(t){super(t)}}const H=()=>`${ge()}/comments`,ve=e=>`${H()}/${encodeURIComponent(e)}`,y=new h("comment",ye).createComplete(H,ve,z);d.get(y);const be=d.getMany(y),Ne=d.create(y),Ee=d.update(y),$e=d.remove(y),Y=_({name:"FSCommentField",components:{FSButton:G,FSButtonCancel:ue,FSImage:Z,FSTextArea:de,FSRow:g,FSCol:F},props:{buttonLabel:{type:String,required:!1},creating:{type:Boolean,required:!1},userImageId:{type:String,required:!1},text:{type:String,required:!1},showCancelButton:{type:Boolean,required:!1,default:!1}},emits:["submit","cancel"],setup(e){return{innertext:O(e.text),ColorEnum:q}}});function Be(e,t,o,s,I,v){const c=i("FSImage"),p=i("FSTextArea"),C=i("FSButtonCancel");return u(),f(F,null,{default:a(()=>[r(g,{align:"top-left"},{default:a(()=>[r(c,{imageId:e.userImageId,width:32,height:32,rounded:"circle"},null,8,["imageId"]),r(p,{rows:5,hideHeader:!0,placeholder:e.$tr("ui.common.write-comment","Write a comment..."),modelValue:e.innertext,"onUpdate:modelValue":t[0]||(t[0]=m=>e.innertext=m)},null,8,["placeholder","modelValue"])]),_:1}),r(g,null,{default:a(()=>[r(W),e.showCancelButton?(u(),f(C,{key:0,onClick:t[1]||(t[1]=m=>e.$emit("cancel"))})):w("",!0),r(G,{color:e.ColorEnum.Primary,loading:e.creating,prependIcon:"mdi-send-outline",label:e.buttonLabel??e.$tr("ui.common.publish","Publish"),onClick:t[2]||(t[2]=()=>e.$emit("submit",e.innertext))},null,8,["color","loading","label"])]),_:1})]),_:1})}const A=L(Y,[["render",Be]]);Y.__docgenInfo={displayName:"FSCommentField",exportName:"default",description:"",tags:{},props:[{name:"buttonLabel",type:{name:"string"},required:!1},{name:"creating",type:{name:"boolean"},required:!1},{name:"userImageId",type:{name:"string | null"},required:!1},{name:"text",type:{name:"string"},required:!1},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"cancel"},{name:"submit"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSCommentField.vue"]};const J=_({name:"FSCommentTileUI",components:{FSButtonRemoveIcon:ce,FSCommentField:A,FSButtonEditIcon:pe,FSImage:Z,FSCard:fe,FSText:j,FSCol:F,FSRow:g},props:{id:{type:String,required:!1,default:null},userName:{type:String,required:!1,default:null},userImageId:{type:String,required:!1,default:null},canEditRemove:{type:Boolean,required:!1,default:!1},timestamp:{type:String,required:!1,default:null},comment:{type:String,required:!1,default:void 0},edited:{type:Boolean,required:!1,default:!1}},emits:["edit","remove"],setup(e,{emit:t}){const o=O(!1);return{ColorEnum:q,showEditComment:o,updateComment:I=>{t("edit",{commentId:e.id,comment:I}),o.value=!1}}}});function Re(e,t,o,s,I,v){const c=i("FSImage"),p=i("FSText"),C=i("FSButtonEditIcon"),m=i("FSButtonRemoveIcon"),S=i("FSCard"),b=i("FSCommentField");return u(),f(F,{align:"center-center"},{default:a(()=>[r(S,{padding:"8px",width:"500px"},{header:a(()=>[r(g,{align:"center-center",gap:"12px"},{default:a(()=>[r(c,{imageId:e.userImageId,width:"24px",height:"24px",rounded:"circle"},null,8,["imageId"]),r(p,{font:"text-overline"},{default:a(()=>[U(B(e.userName)+" - "+B(e.timestamp),1)]),_:1}),r(W),e.canEditRemove?(u(),f(C,{key:0,onClick:t[0]||(t[0]=N=>e.showEditComment=!0)})):w("",!0),e.canEditRemove?(u(),f(m,{key:1,onClick:t[1]||(t[1]=N=>e.$emit("remove"))})):w("",!0)]),_:1})]),body:a(()=>[r(p,{class:"text-wrap"},{default:a(()=>[U(B(e.comment),1)]),_:1})]),footer:a(()=>[]),_:1}),e.showEditComment?(u(),f(F,{key:0,width:"500px"},{default:a(()=>[r(b,{userImageId:e.userImageId,showCancelButton:!0,text:e.comment,onCancel:t[2]||(t[2]=N=>e.showEditComment=!1),onSubmit:e.updateComment},null,8,["userImageId","text","onSubmit"])]),_:1})):w("",!0)]),_:1})}const K=L(J,[["render",Re]]);J.__docgenInfo={displayName:"FSCommentTileUI",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userName",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userImageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"canEditRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"timestamp",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"comment",type:{name:"string | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"edited",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"remove"},{name:"edit"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSCommentTileUI.vue"]};const Q=_({title:"FSBaseCommentsList",components:{FSText:j,FSCol:F,FSRow:g,FSCommentTileUI:K,FSCommentField:A},props:{commentFilters:{type:Object,required:!0},allowAlertComment:{type:Boolean,default:!1}},setup(e){const{fetch:t,entity:o}=we(),{create:s,creating:I}=Ne(),{getMany:v,entities:c}=be(),{update:p}=Ee(),{remove:C}=$e(),{epochToLongTimeFormat:m}=Fe(),S=me(()=>V.orderBy(c.value,["timestamp"],["desc"]));re(()=>{t()});const b=l=>{e.commentFilters.alertId&&l&&s({comment:l,alertId:e.commentFilters.alertId})},N=l=>{p(l.commentId,{comment:l.comment})},ee=l=>{C(l)};return se(()=>e.commentFilters,(l,te)=>{V.isEqual(l,te)||v(e.commentFilters)},{immediate:!0}),{comments:c,ColorEnum:q,creatingComment:I,currentUser:o,orderedComments:S,createNewComment:b,updateComment:N,removeComment:ee,epochToLongTimeFormat:m}}});function Te(e,t,o,s,I,v){const c=i("FSText"),p=i("FSCommentField"),C=i("FSCommentTileUI");return e.$props.allowAlertComment?(u(),f(F,{key:0,padding:"24px",gap:"48px",align:"center-center"},{default:a(()=>[r(c,{font:"text-h3"},{default:a(()=>[U(B(e.$tr("ui.common.comments","Comments")),1)]),_:1}),r(g,{width:"500px"},{default:a(()=>{var m;return[r(p,{buttonLabel:e.$tr("ui.common.publish","Publish"),creating:e.creatingComment,onSubmit:e.createNewComment,userImageId:(m=e.currentUser)==null?void 0:m.imageId},null,8,["buttonLabel","creating","onSubmit","userImageId"])]}),_:1}),(u(!0),ae(le,null,ie(e.orderedComments,m=>{var S;return u(),f(C,{key:m.id,timestamp:e.epochToLongTimeFormat(m.timestamp),userName:m.userName,userImageId:m.userImageId,canEditRemove:((S=e.currentUser)==null?void 0:S.id)===m.userId,comment:m.comment,edited:m.edited,id:m.id,onEdit:e.updateComment,onRemove:b=>e.removeComment(m.id)},null,8,["timestamp","userName","userImageId","canEditRemove","comment","edited","id","onEdit","onRemove"])}),128))]),_:1})):w("",!0)}const X=L(Q,[["render",Te]]);Q.__docgenInfo={exportName:"default",displayName:"FSBaseCommentsList",description:"",tags:{},props:[{name:"commentFilters",type:{name:"CommentFilters"},required:!0},{name:"allowAlertComment",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/comments/FSBaseCommentsList.vue"]};const Ot={title:"Foundation/Core/Lists/Base Lists/BaseCommentsList",component:X,subcomponents:{FSCommentTileUI:K,FSCommentField:A},tags:["autodocs"],argTypes:{}},$={render:e=>({components:{FSBaseCommentsList:X},setup(){return{args:e}},template:`
      <FSBaseCommentsList
        :allowAlertComment="args.allowAlertComment"
        :commentFilters="args.commentFilters"
      />
    `}),args:{allowAlertComment:!0,commentFilters:{alertId:"1"}}};var D,M,P;$.parameters={...$.parameters,docs:{...(D=$.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(M=$.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Gt=["Default"];export{$ as Default,Gt as __namedExportsOrder,Ot as default};
