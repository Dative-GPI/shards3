import{j as X,d as p,e as D,w as Y,I as b,J as y,K as k,L as a,Q as G,A as o,Y as R,Z as O,R as F,W as U,X as B,F as x,B as _}from"./vue.esm-bundler-857e5af7.js";import{F as ee}from"./FSDialogMenu-717b3ccf.js";import{F as V}from"./FSTextField-16a79c60.js";import{F as le}from"./FSCalendar-4a51f500.js";import{_ as C}from"./FSWindow-9105a153.js";import{F as u}from"./FSButton-821f7325.js";import{F as re}from"./FSClock-1e063726.js";import{F as oe}from"./FSCard-c144a688.js";import{_ as i}from"./FSCol-439c812a.js";import{C as f,u as ae}from"./useColors-d77b9fa0.js";import{u as ne}from"./useAppTimeZone-43dfb0bc.js";import{u as te}from"./useRules-b3d475c7.js";import{u as ie}from"./css-ab2bdb81.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";import{V as se}from"./VMenu-ddfad70d.js";import{F as ue}from"./FSForm-ffdc6f62.js";import{_ as me}from"./FSRow-e30f1dcc.js";import{D as pe}from"./rules-bc7b0528.js";import"./VDialog-c4db32be.js";import"./VOverlay-dc792521.js";import"./forwardRefs-e658ad70.js";import"./useRender-d5beceb3.js";import"./theme-83a4d379.js";import"./proxiedModel-1e29c8a1.js";import"./loader-b99105cf.js";import"./color-5d3cc229.js";import"./VProgressCircular-593755b1.js";import"./resizeObserver-524fd734.js";import"./VIcon-2d4ba55d.js";import"./tag-7bd029e5.js";import"./locale-9a98f700.js";import"./rounded-67c03651.js";import"./dimensions-d7f5c5ad.js";import"./display-56858c3a.js";import"./lazy-f71c8f0f.js";import"./router-bca8c92a.js";import"./scopeId-49b20494.js";import"./transition-2a27d0f7.js";import"./VDefaultsProvider-51a3a301.js";import"./VField-9dc825df.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./VSpacer-37a4cd9a.js";import"./index-d6be2044.js";import"./VLabel-820f7887.js";import"./VInput-6c2a4fd3.js";import"./density-69cd8efb.js";import"./VTextField-9b5f1e4d.js";import"./index-098e590d.js";import"./VLocaleProvider-e3d4fb9c.js";import"./date-7ea51252.js";import"./VBtn-d4123122.js";import"./border-43a3c780.js";import"./elevation-d5a2e352.js";import"./group-501836f7.js";import"./index-f95cc40a.js";import"./ssrBoot-4aec2e0b.js";import"./FSClickable-d206c837.js";import"./FSIcon-faf0e444.js";import"./FSSlider-39e913aa.js";import"./VSlider-3bc75b9a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-4ae50e1a.js";const N=X({name:"FSDateTimeField",components:{FSDialogMenu:ee,FSTextField:V,FSCalendar:le,FSWindow:C,FSButton:u,FSClock:re,FSCard:oe,FSCol:i},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:f.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{getUserOffsetMillis:q,epochToLongTimeFormat:h}=ne(),{validateOn:w,blurred:T,getMessages:v}=te(),{isExtraSmall:g}=ie(),{getColors:m}=ae(),t=p(!1),r=p(!1),d=p(0),n=p(null),s=p(0),A=m(f.Error),I=m(f.Light),W=m(f.Dark);e.modelValue&&(s.value=Math.floor((e.modelValue+q())%(24*60*60*1e3)),n.value=e.modelValue-s.value);const Z=D(()=>e.editable?{"--fs-date-field-color":W.base,"--fs-date-field-error-color":A.base}:{"--fs-date-field-color":I.dark}),z=D(()=>v(e.modelValue,e.rules)),J=()=>{e.editable&&(t.value=!0)},K=()=>{l("update:modelValue",null),n.value=null,s.value=0},Q=()=>{l("update:modelValue",(n.value??0)+s.value),t.value=!1,r.value=!1};return Y([r,t],()=>{!r.value&&!t.value&&setTimeout(()=>d.value=0,290)}),{isExtraSmall:g,validateOn:w,ColorEnum:f,innerDate:n,innerTime:s,messages:z,blurred:T,dialog:t,style:Z,menu:r,tabs:d,epochToLongTimeFormat:h,openMobileOverlay:J,onSubmit:Q,onClear:K}}});function fe(e,l,q,h,w,T){const v=b("FSCalendar"),g=b("FSClock"),m=b("FSDialogMenu"),t=b("FSCard");return y(),k(i,null,{default:a(()=>[e.isExtraSmall?(y(),G(x,{key:0},[o(V,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay,onBlur:l[0]||(l[0]=r=>e.blurred=!0)},R({"prepend-inner":a(()=>[F(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[O(e.$slots,(r,d)=>({name:d,fn:a(n=>[F(e.$slots,d,U(B(n)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),o(m,{modelValue:e.dialog,"onUpdate:modelValue":l[4]||(l[4]=r=>e.dialog=r)},{body:a(()=>[o(C,{modelValue:e.tabs},{default:a(()=>[o(i,{width:"hug",value:0},{default:a(()=>[o(v,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":l[1]||(l[1]=r=>e.innerDate=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:l[2]||(l[2]=r=>e.tabs++)},null,8,["color","label"])]),_:1}),o(i,{width:"hug",value:1},{default:a(()=>[o(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":l[3]||(l[3]=r=>e.innerTime=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)):(y(),k(se,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":l[9]||(l[9]=r=>e.menu=r)},{activator:a(({props:r})=>[o(V,_({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onBlur:l[5]||(l[5]=d=>e.blurred=!0)},r),R({"prepend-inner":a(()=>[F(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[O(e.$slots,(d,n)=>({name:n,fn:a(s=>[F(e.$slots,n,U(B(s)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:a(()=>[o(C,{modelValue:e.tabs},{default:a(()=>[o(t,{padding:"8px",elevation:!0,border:!1,value:0},{default:a(()=>[o(i,{width:"fill"},{default:a(()=>[o(v,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":l[6]||(l[6]=r=>e.innerDate=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:l[7]||(l[7]=r=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),o(t,{padding:"8px",elevation:!0,border:!1,value:1},{default:a(()=>[o(i,{width:"hug"},{default:a(()=>[o(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":l[8]||(l[8]=r=>e.innerTime=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"]))]),_:3})}const $=de(N,[["render",fe]]);N.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};const ql={title:"Foundation/Shared/Input fields/DateTimeField",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:l})=>({components:{FSDateTimeField:$,FSCol:i},props:Object.keys(l),setup(){return{...e}},template:`
    <FSCol>
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},S={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:pe}},render:(e,{argTypes:l})=>({components:{FSForm:ue,FSDateTimeField:$,FSCol:i,FSRow:me},props:Object.keys(l),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var M,E,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateTimeField,
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
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var L,j,P;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSDateTimeField,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(P=(j=S.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const hl=["Variations","Rules"];export{S as Rules,c as Variations,hl as __namedExportsOrder,ql as default};
