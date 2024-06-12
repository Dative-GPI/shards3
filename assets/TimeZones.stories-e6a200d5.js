import{f as Z,g as T,o as V,D as p,E as s,F as a,G as C,A as y,Q as h,I as k}from"./vue.esm-bundler-f632b118.js";import{F as v}from"./FSSelectField-dea0b628.js";import{F as _}from"./FSChip-ff59a050.js";import{u as $}from"./useTimeZones-4c77c86e.js";import{C as b}from"./useColors-5866e399.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-29d13699.js";import"./FSCard-491552ba.js";import"./FSCol-606e8271.js";import"./css-185b4786.js";import"./FSRow-76f4ad1e.js";import"./VDialog-27cf76eb.js";import"./VOverlay-a0789f47.js";import"./forwardRefs-e658ad70.js";import"./useRender-e08116dd.js";import"./theme-7fcd5c30.js";import"./proxiedModel-4a0e4d22.js";import"./anchor-559036f7.js";import"./color-8a5e0dbc.js";import"./dimensions-655ad4fc.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./locale-4446cda9.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./transition-c0ed457c.js";import"./VDefaultsProvider-e2787342.js";import"./FSRadioGroup-43b41305.js";import"./FSIcon-8032a9d1.js";import"./VIcon-31ae1cc1.js";import"./tag-f52d5248.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./useRules-89bf8a4c.js";import"./VSelectionControl-27ff8605.js";import"./density-2a21ba5c.js";import"./index-5c2ea69f.js";import"./VLabel-19a0ad6a.js";import"./VField-d1df4052.js";import"./VSpacer-f52c9222.js";import"./index-f6c0e33a.js";import"./VInput-b20e1912.js";import"./loader-288cfa26.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./rounded-83656db8.js";import"./FSTextField-58ff63bb.js";import"./FSButton-08a91e21.js";import"./FSClickable-4011125f.js";import"./index-c976eaf6.js";import"./FSCheckbox-bde4293d.js";import"./FSFadeOut-391a4266.js";import"./uuid-08309875.js";import"./VSelect-3062dd8b.js";import"./VMenu-d9a134b2.js";import"./ssrBoot-8619e9d9.js";import"./border-df752cc4.js";import"./elevation-f0466824.js";import"./VImg-82f9d308.js";import"./VDivider-a5e624de.js";import"./VSlideGroup-83eb3cfd.js";import"./goto-077545e9.js";import"./group-9f212aab.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function N(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=E(c,[["render",N]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Je={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Ke=["Standard"];export{t as Standard,Ke as __namedExportsOrder,Je as default};
