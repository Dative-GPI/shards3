import{b as V,c as k,d as N,y as h,z as y,C as v,I as n,M as E,N as F,B as o,m as U,F as $,J as C,K as z,L as R,A as _,O as G,E as q,G as I}from"./vue.esm-bundler-DC82FEWN.js";import{F as H}from"./FSDialogSubmit-DmA8rBD5.js";import{F as m}from"./FSTextField-CIgddAfu.js";import{F as B}from"./FSButton-DQTNQ7w6.js";import{_ as L}from"./FSIcon-2B0NN_at.js";import{_ as P}from"./FSSpan-CwfDYIua.js";import{_ as A}from"./FSRow-DoCXWKDP.js";import{C as f,u as J}from"./useColors-ATxZ3nb1.js";import{u as K}from"./useSlots-V2mVelz6.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSCol-B7HQy3FB.js";const S=V(void 0),O=()=>{const e=d=>{S.value=d};return{ready:k(()=>S.value!==null),languages:S,sepAppLanguages:e}},D=N({name:"FSTranslateField",components:{FSDialogSubmit:H,FSTextField:m,FSButton:B,FSIcon:L,FSSpan:P,FSRow:A},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:f.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:translations"],setup(e,{emit:l}){const{languages:d}=O(),{getColors:b}=J(),{slots:c}=K();delete c.append;const g=V(!1),t=V(e.translations),a=b(f.Light),s=b(f.Dark),u=k(()=>e.editable?{"--fs-translate-field-color":s.base}:{"--fs-translate-field-color":a.dark});return{innerTranslations:t,ColorEnum:f,languages:d,dialog:g,slots:c,style:u,getTranslation:i=>{if(!t.value)return"";const r=t.value.find(p=>p.languageCode===i);return!r||!r[e.property]?"":r[e.property]},setTranslation:(i,r)=>{if(!t.value){t.value=[{languageCode:i,[e.property]:r}];return}const p=t.value.find(w=>w.languageCode===i);p?p[e.property]=r:t.value.push({languageCode:i,[e.property]:r})},onSubmit:()=>{g.value=!1,e.editable&&l("update:translations",t.value)}}}});function j(e,l,d,b,c,g){const t=h("FSDialogSubmit");return y(),v($,null,[n(m,U({editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[1]||(l[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),E({append:o(()=>[n(B,{prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,label:e.$props.buttonLabel,onClick:l[0]||(l[0]=a=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color","label"]),C(e.$slots,"append")]),_:2},[F(e.slots,(a,s)=>({name:s,fn:o(u=>[C(e.$slots,s,z(R(u)))])}))]),1040,["editable","modelValue"]),n(t,{title:e.$tr("ui.translate-field.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":l[2]||(l[2]=a=>e.dialog=a)},{body:o(()=>[n(T,{gap:"32px"},{default:o(()=>[n(m,{label:e.$tr("ui.translate-field.default-value","Default value"),editable:!1,modelValue:e.$props.modelValue},null,8,["label","modelValue"]),n(T,{gap:"16px"},{default:o(()=>[(y(!0),v($,null,F(e.languages,(a,s)=>(y(),_(m,{editable:e.$props.editable,key:s,modelValue:e.getTranslation(a.code),"onUpdate:modelValue":u=>e.setTranslation(a.code,u)},{label:o(()=>[n(A,{wrap:!1},{default:o(()=>[n(P,{class:"fs-translate-field-label",font:"text-overline",style:G(e.style)},{default:o(()=>[q(I(e.$tr("ui.translate-field.translate-in","Translate in {0}",a.label)),1)]),_:2},1032,["style"]),n(L,null,{default:o(()=>[q(I(a.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const ue=M(D,[["render",j]]);D.__docgenInfo={displayName:"FSTranslateField",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateField.vue"]};export{ue as F};
