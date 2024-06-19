import{f as Z,g as T,o as V,D as p,E as s,F as a,G as C,x as y,Q as h,I as k}from"./vue.esm-bundler-a0893183.js";import{F as v}from"./FSSelectField-6fb3d8a3.js";import{F as _}from"./FSChip-db263eca.js";import{u as $}from"./useTimeZones-3ba483a0.js";import{C as b}from"./useColors-6c375bb5.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-2fb2114e.js";import"./FSCard-c200753c.js";import"./FSCol-e45ac157.js";import"./css-03aed76d.js";import"./FSRow-821d23a1.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./forwardRefs-e658ad70.js";import"./useRender-13ac3742.js";import"./theme-41eca2c8.js";import"./proxiedModel-59232916.js";import"./anchor-155e2782.js";import"./color-d0fba9db.js";import"./dimensions-b1078284.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./locale-ece9a1bb.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./transition-36d39bce.js";import"./VDefaultsProvider-c4e19f1a.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./FSIcon-9d61ed62.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./FSSpan-4daadeb4.js";import"./useSlots-d5b57407.js";import"./useRules-8ba0ecf4.js";import"./VSelectionControl-df8a6f90.js";import"./density-fc3376dc.js";import"./index-8d9a280b.js";import"./VLabel-6aa65fe2.js";import"./VField-c7486719.js";import"./VSpacer-b1094f09.js";import"./index-ec7e733e.js";import"./VInput-cbd9f0c3.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./rounded-4c492e72.js";import"./FSTextField-3d775cb5.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./index-01bbf789.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./uuid-08309875.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./elevation-7d7e39c3.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VSelect-9102db02.js";import"./VMenu-02096e7e.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-2d4a69cc.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function N(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=E(c,[["render",N]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Le={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
        <FSSelectTimeZone
          v-model="args.timeZone1"
        />
    `})};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      timeZone1: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSelectTimeZone
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
        <FSSelectTimeZone
          v-model="args.timeZone1"
        />
    \`
  })
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Re=["Standard"];export{t as Standard,Re as __namedExportsOrder,Le as default};
