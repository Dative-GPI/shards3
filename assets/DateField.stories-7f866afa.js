import{G as U,d as y,e as h,_ as C,H as E,L,M as o,z as a,V as P,W as j,J as q,Q as N,R as M,A as z}from"./vue.esm-bundler-d8049c85.js";import{F as O}from"./FSTextField-7a5a6ce0.js";import{F as A}from"./FSCalendar-943428fc.js";import{_ as c}from"./FSButton-819b5655.js";import{F as I}from"./FSCard-c2aada98.js";import{_ as m}from"./FSCol-39bd052c.js";import{C as i,u as W}from"./useColors-5c9cff43.js";import{u as G}from"./VField-98076a13.js";import{u as J}from"./useTimeZone-01b1e25e.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VMenu-878df07f.js";import{D as K,F as X}from"./FSForm-57dbe236.js";import{_ as Y}from"./FSRow-b5482a77.js";import"./FSSpan-9f00eaf4.js";import"./useSlots-bdda8306.js";import"./VSpacer-e253cf80.js";import"./useRender-29d234e5.js";import"./theme-540b65c4.js";import"./VTextField-bdebe004.js";import"./VInput-95d46afc.js";import"./locale-0b822523.js";import"./VIcon-76640d9b.js";import"./color-339b05ed.js";import"./tag-fffb6ba6.js";import"./index-a9977cc4.js";import"./transition-a0827c0d.js";import"./density-de8a38cb.js";import"./forwardRefs-e658ad70.js";import"./index-d961be33.js";import"./VLocaleProvider-2ed70586.js";import"./date-7f94e111.js";import"./VDefaultsProvider-2b53b1ea.js";import"./VBtn-05fbe885.js";import"./variant-ec540a43.js";import"./elevation-ef665fc6.js";import"./rounded-0d200380.js";import"./group-9e62ecfa.js";import"./dimensions-c0ade26a.js";import"./loader-cb170f8e.js";import"./router-e2bea4dd.js";import"./index-ea9d807b.js";import"./VProgressCircular-b08e7416.js";import"./resizeObserver-76cdf9c3.js";import"./FSIcon-4847f868.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-503566cb.js";import"./VOverlay-0482e356.js";import"./display-bfe8ef0e.js";import"./lazy-a24e86b5.js";const B=U({name:"FSDateField",components:{FSTextField:O,FSCalendar:A,FSButton:c,FSCard:I,FSCol:m},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:i.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:F,blurred:v,getMessages:b}=G(),{epochToLongDateFormat:S}=J(),{getColors:t}=W(),p=t(i.Error),l=t(i.Light),f=t(i.Dark),n=y(!1),s=y(e.modelValue),T=h(()=>e.editable?{"--fs-date-field-color":f.base,"--fs-date-field-error-color":p.base}:{"--fs-date-field-color":l.dark}),H=h(()=>b(e.modelValue,e.rules));return{ColorEnum:i,innerDate:s,validateOn:F,messages:H,blurred:v,style:T,menu:n,onClear:()=>{r("update:modelValue",null),s.value=null},onSubmit:()=>{r("update:modelValue",s.value),n.value=!1},epochToLongDateFormat:S}}});function _(e,r,F,v,b,S){const t=C("FSCalendar"),p=C("FSCard");return E(),L(Z,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[2]||(r[2]=l=>e.menu=l)},{activator:o(({props:l})=>[a(O,z({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=f=>e.blurred=!0)},l),P({"prepend-inner":o(()=>[q(e.$slots,"prepend-inner",{},()=>[a(c,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[j(e.$slots,(f,n)=>({name:n,fn:o(s=>[q(e.$slots,n,N(M(s)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick:clear"])]),default:o(()=>[a(p,{width:"346px",elevation:!0,border:!1},{default:o(()=>[a(m,{width:"fill"},{default:o(()=>[a(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[1]||(r[1]=l=>e.innerDate=l)},null,8,["color","modelValue"]),a(c,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"])}const g=Q(B,[["render",_]]);B.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};const _e={title:"Foundation/Shared/Input fields/DateField",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateField:g,FSCol:m},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},u={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:K}},render:(e,{argTypes:r})=>({components:{FSForm:X,FSDateField:g,FSCol:m,FSRow:Y},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var V,D,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
      FSDateField,
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
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var R,$,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
      FSDateField,
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
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(k=($=u.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const xe=["Variations","Rules"];export{u as Rules,d as Variations,xe as __namedExportsOrder,_e as default};
