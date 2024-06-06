import{f as Z,g as T,o as V,D as p,E as s,F as a,G as C,A as y,O as h,I as k}from"./vue.esm-bundler-1de4ab84.js";import{F as v}from"./FSSelectField-72f459f2.js";import{F as _}from"./FSChip-5509d5fb.js";import{u as $}from"./useTimeZones-93386e1a.js";import{C as b}from"./useColors-6201f155.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-a98f6da7.js";import"./FSCard-23b564db.js";import"./FSCol-044a4f0a.js";import"./css-73f1b6e3.js";import"./FSRow-0f15051e.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./forwardRefs-e658ad70.js";import"./useRender-b44b777b.js";import"./theme-fee57059.js";import"./proxiedModel-ef310637.js";import"./anchor-3e311b48.js";import"./color-69562b87.js";import"./dimensions-60fb7050.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./locale-f0128dd0.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./transition-41c2ee15.js";import"./VDefaultsProvider-4480b636.js";import"./FSRadioGroup-39907278.js";import"./FSIcon-08483052.js";import"./VIcon-9f1a137c.js";import"./tag-58633b3a.js";import"./FSSpan-c5b5f93b.js";import"./useSlots-78ee3d45.js";import"./useRules-14fb7f63.js";import"./VSelectionControl-8efa9c46.js";import"./density-99305267.js";import"./index-8cb030a7.js";import"./VLabel-3fa2f1ca.js";import"./VField-c7605df9.js";import"./VSpacer-8f10d0b5.js";import"./index-00d0b77b.js";import"./VInput-73e9b49a.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./rounded-aeb398ab.js";import"./FSTextField-5eb8ba7e.js";import"./FSButton-6b0685b3.js";import"./FSClickable-00bc2ab2.js";import"./index-bd033a0f.js";import"./FSCheckbox-7bc44d7a.js";import"./FSFadeOut-649e8ed5.js";import"./uuid-08309875.js";import"./VSelect-46cfbf6f.js";import"./VMenu-75bfc7ff.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./elevation-e7de2c09.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-7269e9d8.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function O(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=E(c,[["render",O]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Ke={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Le=["Standard"];export{t as Standard,Le as __namedExportsOrder,Ke as default};
