import{d as O,c as o,y as p,z as B,A as H,B as s,L as f,m as N,M as F,N as g,I as v,J as y,K as V}from"./vue.esm-bundler-gWFTcvUr.js";import R from"./FSNumberField-C-Rd40i6.js";import{F as j}from"./FSSelectField-DK2yvB1s.js";import{F as k}from"./FSBaseField-C6NDZpLW.js";import{_ as w}from"./FSRow-Bpa2jjpJ.js";import{b as h}from"./time-Nb8kLLbZ.js";import{u as A}from"./useRules-CMc02QlE.js";import{u as I}from"./useSlots-qbJuQIJ1.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_}from"./FSCol-DX423FHf.js";import"./FSTextField-DmPsFJH8.js";import"./FSButton-C0cjY78b.js";import"./FSClickable-aki8YuqU.js";import"./FSCard-B-jXuIJy.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./css-Bc8dJONt.js";import"./VProgressCircular-DqlO5PEF.js";import"./color-CI1OEbFE.js";import"./VIcon-BiBYr0XY.js";import"./FSSpan-BlywDO8Z.js";import"./FSIcon-C7-l9IT-.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./VSpacer-DqpPKsvm.js";import"./FSDialogMenu-C6wq00J3.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./uuid-DTaye2KM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./elevation-B3TY2UXi.js";import"./VImg-CHF0S8ll.js";import"./VSelect-BmHh8iYM.js";import"./VMenu-lXYF3tO5.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./useTranslations-DebMVrXy.js";const U=O({name:"FSTimeStepField",components:{FSNumberField:R,FSSelectField:j,FSBaseField:k,FSRow:w},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0},allowedUnits:{type:Array,required:!1,default:()=>[]},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:l,getMessages:c}=A(),{slots:i}=I();delete i.label,delete i.description;const b=o(()=>Object.keys(i).filter(t=>t.startsWith("number-")).reduce((t,r)=>(t[r.substring(7)]=i[r],t),{})),S=o(()=>Object.keys(i).filter(t=>t.startsWith("select-")).reduce((t,r)=>(t[r.substring(7)]=i[r],t),{})),d=o(()=>e.messages??c(e.modelValue,e.rules)),u=o(()=>e.allowedUnits&&e.allowedUnits.length?h.filter(t=>e.allowedUnits.includes(t.id)):h);return{numberSlots:b,selectSlots:S,validateOn:l,messages:d,units:u}}});function z(e,l,c,i,b,S){const d=p("FSNumberField"),u=p("FSSelectField"),t=p("FSBaseField");return B(),H(t,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:s(()=>[f(w,null,{default:s(()=>[f(d,N({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.$props.modelValue.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.$emit("update:modelValue",{value:r,unit:e.$props.modelValue.unit}))},e.$attrs),F({_:2},[g(e.numberSlots,(r,a)=>({name:a,fn:s(m=>[v(e.$slots,a,y(V(m)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue"]),f(u,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.units,modelValue:e.$props.modelValue.unit,"onUpdate:modelValue":l[1]||(l[1]=r=>e.$emit("update:modelValue",{value:e.$props.modelValue.value,unit:r}))},F({_:2},[g(e.selectSlots,(r,a)=>({name:a,fn:s(m=>[v(e.$slots,a,y(V(m)))])}))]),1032,["editable","items","modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const C=P(U,[["render",z]]);U.__docgenInfo={displayName:"FSTimeStepField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"{ value: number, unit: TimeUnit }"},required:!0},{name:"allowedUnits",type:{name:"TimeUnit[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeStepField.vue"]};const Xe={title:"Foundation/Shared/Input fields/TimeStepField",component:C,tags:["autodocs"]},n={args:{args:{value1:{unit:2,value:0},value2:{unit:4,value:1},value3:{unit:5,value:1}}},render:(e,{argTypes:l})=>({components:{FSTimeStepField:C,FSCol:_},props:Object.keys(l),setup(){return{...e}},template:`
    <FSCol>
      <FSTimeStepField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})};var q,$,T;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    args: {
      value1: {
        unit: 2,
        value: 0
      },
      value2: {
        unit: 4,
        value: 1
      },
      value3: {
        unit: 5,
        value: 1
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeStepField,
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
      <FSTimeStepField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(T=($=n.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};const Ye=["Variations"];export{n as Variations,Ye as __namedExportsOrder,Xe as default};
