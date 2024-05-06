import{j as Y,d as p,e as D,w as Z,I as b,J as y,K as k,L as a,Q as G,A as o,_ as R,Y as O,R as F,W as U,X as B,F as x,B as _}from"./vue.esm-bundler-3416a090.js";import{F as ee}from"./FSDialogMenu-7a6cda41.js";import{F as V}from"./FSTextField-bb895cdf.js";import{F as le}from"./FSCalendar-b7e5bd35.js";import{_ as C}from"./FSWindow-c36bf493.js";import{F as u}from"./FSButton-6f3d0d12.js";import{F as re}from"./FSClock-ca18828e.js";import{F as oe}from"./FSCard-92f27951.js";import{_ as i}from"./FSCol-5731c3c4.js";import{C as f,u as ae}from"./useColors-1faf681b.js";import{u as ne}from"./useAppTimeZone-045fd735.js";import{u as te}from"./useRules-5e1988ee.js";import{u as ie}from"./css-69ed11d9.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";import{V as se}from"./VMenu-39a0be1f.js";import{F as ue}from"./FSForm-45d9cda9.js";import{_ as me}from"./FSRow-5edf997c.js";import{D as pe}from"./rules-72533546.js";import"./VDialog-601b035f.js";import"./VOverlay-61ba3ae0.js";import"./forwardRefs-e658ad70.js";import"./useRender-fb717f1b.js";import"./theme-2c100cd8.js";import"./proxiedModel-868611da.js";import"./loader-b2c56b78.js";import"./color-5c733e3b.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./locale-be130c16.js";import"./rounded-e101edac.js";import"./dimensions-97f2f62c.js";import"./display-00a40b50.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./transition-6086c96b.js";import"./VDefaultsProvider-ef2fd514.js";import"./VField-d3f61dc4.js";import"./FSSpan-b519c994.js";import"./useSlots-7472d1e2.js";import"./VSpacer-819449a6.js";import"./index-46378e0b.js";import"./VLabel-793ed17d.js";import"./VInput-77c4eaa4.js";import"./density-174ddef7.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./VLocaleProvider-3cd90636.js";import"./date-29e3b2ba.js";import"./VBtn-f59107e2.js";import"./border-1657a325.js";import"./elevation-9288a0e5.js";import"./group-f3cba4ff.js";import"./index-a9118fe7.js";import"./VWindowItem-d08ad5ba.js";import"./ssrBoot-c0668163.js";import"./FSClickable-d5c04d60.js";import"./FSIcon-f518d728.js";import"./FSSlider-e55ae7d0.js";import"./VSlider-2ab627b9.js";import"./FSText-4221a42d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-ff263049.js";const N=Y({name:"FSDateTimeField",components:{FSDialogMenu:ee,FSTextField:V,FSCalendar:le,FSWindow:C,FSButton:u,FSClock:re,FSCard:oe,FSCol:i},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:f.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{getUserOffsetMillis:q,epochToLongTimeFormat:h}=ne(),{validateOn:w,blurred:T,getMessages:v}=te(),{isExtraSmall:g}=ie(),{getColors:m}=ae(),t=p(!1),r=p(!1),d=p(0),n=p(null),s=p(0),A=m(f.Error),I=m(f.Light),W=m(f.Dark);e.modelValue&&(s.value=Math.floor((e.modelValue+q())%(24*60*60*1e3)),n.value=e.modelValue-s.value);const z=D(()=>e.editable?{"--fs-date-field-color":W.base,"--fs-date-field-error-color":A.base}:{"--fs-date-field-color":I.dark}),J=D(()=>v(e.modelValue,e.rules)),K=()=>{e.editable&&(t.value=!0)},Q=()=>{l("update:modelValue",null),n.value=null,s.value=0},X=()=>{l("update:modelValue",(n.value??0)+s.value),t.value=!1,r.value=!1};return Z([r,t],()=>{!r.value&&!t.value&&setTimeout(()=>d.value=0,290)}),{isExtraSmall:g,validateOn:w,ColorEnum:f,innerDate:n,innerTime:s,messages:J,blurred:T,dialog:t,style:z,menu:r,tabs:d,epochToLongTimeFormat:h,openMobileOverlay:K,onSubmit:X,onClear:Q}}});function fe(e,l,q,h,w,T){const v=b("FSCalendar"),g=b("FSClock"),m=b("FSDialogMenu"),t=b("FSCard");return y(),k(i,null,{default:a(()=>[e.isExtraSmall?(y(),G(x,{key:0},[o(V,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay,onBlur:l[0]||(l[0]=r=>e.blurred=!0)},R({"prepend-inner":a(()=>[F(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[O(e.$slots,(r,d)=>({name:d,fn:a(n=>[F(e.$slots,d,U(B(n)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),o(m,{modelValue:e.dialog,"onUpdate:modelValue":l[4]||(l[4]=r=>e.dialog=r)},{body:a(()=>[o(C,{modelValue:e.tabs},{default:a(()=>[o(i,{width:"hug",value:0},{default:a(()=>[o(v,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":l[1]||(l[1]=r=>e.innerDate=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:l[2]||(l[2]=r=>e.tabs++)},null,8,["color","label"])]),_:1}),o(i,{width:"hug",value:1},{default:a(()=>[o(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":l[3]||(l[3]=r=>e.innerTime=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)):(y(),k(se,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":l[9]||(l[9]=r=>e.menu=r)},{activator:a(({props:r})=>[o(V,_({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onBlur:l[5]||(l[5]=d=>e.blurred=!0)},r),R({"prepend-inner":a(()=>[F(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[O(e.$slots,(d,n)=>({name:n,fn:a(s=>[F(e.$slots,n,U(B(s)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:a(()=>[o(C,{modelValue:e.tabs},{default:a(()=>[o(t,{padding:"8px",elevation:!0,border:!1,value:0},{default:a(()=>[o(i,{width:"fill"},{default:a(()=>[o(v,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":l[6]||(l[6]=r=>e.innerDate=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:l[7]||(l[7]=r=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),o(t,{padding:"8px",elevation:!0,border:!1,value:1},{default:a(()=>[o(i,{width:"hug"},{default:a(()=>[o(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":l[8]||(l[8]=r=>e.innerTime=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"]))]),_:3})}const $=de(N,[["render",fe]]);N.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};const hl={title:"Foundation/Shared/Input fields/DateTimeField",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:l})=>({components:{FSDateTimeField:$,FSCol:i},props:Object.keys(l),setup(){return{...e}},template:`
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
}`,...(P=(j=S.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const wl=["Variations","Rules"];export{S as Rules,c as Variations,wl as __namedExportsOrder,hl as default};
