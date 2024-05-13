import{j as X,d as p,e as D,w as Y,I as b,J as y,K as k,L as a,Q as G,A as o,Y as R,Z as O,R as F,W as U,X as B,F as x,B as _}from"./vue.esm-bundler-41eda46b.js";import{F as ee}from"./FSDialogMenu-848f1e87.js";import{F as V}from"./FSTextField-aa274a38.js";import{F as le}from"./FSCalendar-fc8251a4.js";import{_ as C}from"./FSWindow-2777e132.js";import{F as u}from"./FSButton-143ca8d1.js";import{F as re}from"./FSClock-1aa034ff.js";import{F as oe}from"./FSCard-5c9795f4.js";import{_ as i}from"./FSCol-282cc158.js";import{C as f,u as ae}from"./useColors-c7c61044.js";import{u as ne}from"./useAppTimeZone-fd64682f.js";import{u as te}from"./useRules-d33c1ab7.js";import{u as ie}from"./css-35e8563f.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";import{V as se}from"./VMenu-9445716e.js";import{F as ue}from"./FSForm-bc36c845.js";import{_ as me}from"./FSRow-1508d56d.js";import{D as pe}from"./rules-4c5e7e68.js";import"./VDialog-84dcd607.js";import"./VOverlay-d8fd5084.js";import"./forwardRefs-e658ad70.js";import"./useRender-55bb8ab6.js";import"./theme-720d9fd7.js";import"./proxiedModel-a34e17b7.js";import"./loader-0baaac91.js";import"./color-92f22fcc.js";import"./VProgressCircular-9cdac648.js";import"./resizeObserver-5b9bfd59.js";import"./VIcon-1fd71622.js";import"./tag-984e6215.js";import"./locale-850d67a0.js";import"./rounded-e85715e4.js";import"./dimensions-9ac12c80.js";import"./display-a55575e0.js";import"./lazy-5500c0d6.js";import"./router-4498b821.js";import"./scopeId-862e559a.js";import"./transition-a4f3f1b4.js";import"./VDefaultsProvider-b40931ed.js";import"./VField-095c5517.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./VSpacer-19440644.js";import"./index-3d73431e.js";import"./VLabel-484dc627.js";import"./VInput-8f2c12b1.js";import"./density-a7a72377.js";import"./VTextField-459f9fbf.js";import"./index-8f606737.js";import"./VLocaleProvider-9c4fc8c6.js";import"./date-9683da89.js";import"./VBtn-3461afbb.js";import"./border-ac5393da.js";import"./elevation-c799c3f5.js";import"./group-4938f20b.js";import"./index-1668950c.js";import"./VWindowItem-1a6a4277.js";import"./ssrBoot-5c61be23.js";import"./FSClickable-142208e2.js";import"./FSIcon-33b1b769.js";import"./FSSlider-ef6317af.js";import"./VSlider-7b387e51.js";import"./FSText-833d800f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-3bd97805.js";const N=X({name:"FSDateTimeField",components:{FSDialogMenu:ee,FSTextField:V,FSCalendar:le,FSWindow:C,FSButton:u,FSClock:re,FSCard:oe,FSCol:i},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:f.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{getUserOffsetMillis:q,epochToLongTimeFormat:h}=ne(),{validateOn:w,blurred:T,getMessages:v}=te(),{isExtraSmall:g}=ie(),{getColors:m}=ae(),t=p(!1),r=p(!1),d=p(0),n=p(null),s=p(0),A=m(f.Error),I=m(f.Light),W=m(f.Dark);e.modelValue&&(s.value=Math.floor((e.modelValue+q())%(24*60*60*1e3)),n.value=e.modelValue-s.value);const Z=D(()=>e.editable?{"--fs-date-field-color":W.base,"--fs-date-field-error-color":A.base}:{"--fs-date-field-color":I.dark}),z=D(()=>v(e.modelValue,e.rules)),J=()=>{e.editable&&(t.value=!0)},K=()=>{l("update:modelValue",null),n.value=null,s.value=0},Q=()=>{l("update:modelValue",(n.value??0)+s.value),t.value=!1,r.value=!1};return Y([r,t],()=>{!r.value&&!t.value&&setTimeout(()=>d.value=0,290)}),{isExtraSmall:g,validateOn:w,ColorEnum:f,innerDate:n,innerTime:s,messages:z,blurred:T,dialog:t,style:Z,menu:r,tabs:d,epochToLongTimeFormat:h,openMobileOverlay:J,onSubmit:Q,onClear:K}}});function fe(e,l,q,h,w,T){const v=b("FSCalendar"),g=b("FSClock"),m=b("FSDialogMenu"),t=b("FSCard");return y(),k(i,null,{default:a(()=>[e.isExtraSmall?(y(),G(x,{key:0},[o(V,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay,onBlur:l[0]||(l[0]=r=>e.blurred=!0)},R({"prepend-inner":a(()=>[F(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[O(e.$slots,(r,d)=>({name:d,fn:a(n=>[F(e.$slots,d,U(B(n)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),o(m,{modelValue:e.dialog,"onUpdate:modelValue":l[4]||(l[4]=r=>e.dialog=r)},{body:a(()=>[o(C,{modelValue:e.tabs},{default:a(()=>[o(i,{width:"hug",value:0},{default:a(()=>[o(v,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":l[1]||(l[1]=r=>e.innerDate=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:l[2]||(l[2]=r=>e.tabs++)},null,8,["color","label"])]),_:1}),o(i,{width:"hug",value:1},{default:a(()=>[o(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":l[3]||(l[3]=r=>e.innerTime=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)):(y(),k(se,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":l[9]||(l[9]=r=>e.menu=r)},{activator:a(({props:r})=>[o(V,_({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onBlur:l[5]||(l[5]=d=>e.blurred=!0)},r),R({"prepend-inner":a(()=>[F(e.$slots,"prepend-inner",{},()=>[o(u,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[O(e.$slots,(d,n)=>({name:n,fn:a(s=>[F(e.$slots,n,U(B(s)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:a(()=>[o(C,{modelValue:e.tabs},{default:a(()=>[o(t,{padding:"8px",elevation:!0,border:!1,value:0},{default:a(()=>[o(i,{width:"fill"},{default:a(()=>[o(v,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":l[6]||(l[6]=r=>e.innerDate=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:l[7]||(l[7]=r=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),o(t,{padding:"8px",elevation:!0,border:!1,value:1},{default:a(()=>[o(i,{width:"hug"},{default:a(()=>[o(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":l[8]||(l[8]=r=>e.innerTime=r)},null,8,["color","modelValue"]),o(u,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"]))]),_:3})}const $=de(N,[["render",fe]]);N.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};const wl={title:"Foundation/Shared/Input fields/DateTimeField",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:l})=>({components:{FSDateTimeField:$,FSCol:i},props:Object.keys(l),setup(){return{...e}},template:`
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
}`,...(P=(j=S.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const Tl=["Variations","Rules"];export{S as Rules,c as Variations,Tl as __namedExportsOrder,wl as default};
