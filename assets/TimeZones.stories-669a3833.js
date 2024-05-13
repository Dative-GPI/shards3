import{j as Z,e as T,o as V,I as p,J as s,K as a,L as C,B as y,R as h,N as k}from"./vue.esm-bundler-857e5af7.js";import{F as v}from"./FSSelectField-86243dfb.js";import{F as _}from"./FSChip-4843d6f3.js";import{u as $}from"./useTimeZones-4f582a06.js";import{C as b}from"./useColors-d77b9fa0.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-717b3ccf.js";import"./FSCard-c144a688.js";import"./FSCol-439c812a.js";import"./css-ab2bdb81.js";import"./FSRow-e30f1dcc.js";import"./VDialog-c4db32be.js";import"./VOverlay-dc792521.js";import"./forwardRefs-e658ad70.js";import"./useRender-d5beceb3.js";import"./theme-83a4d379.js";import"./proxiedModel-1e29c8a1.js";import"./loader-b99105cf.js";import"./color-5d3cc229.js";import"./VProgressCircular-593755b1.js";import"./resizeObserver-524fd734.js";import"./VIcon-2d4ba55d.js";import"./tag-7bd029e5.js";import"./locale-9a98f700.js";import"./rounded-67c03651.js";import"./dimensions-d7f5c5ad.js";import"./display-56858c3a.js";import"./lazy-f71c8f0f.js";import"./router-bca8c92a.js";import"./scopeId-49b20494.js";import"./transition-2a27d0f7.js";import"./VDefaultsProvider-51a3a301.js";import"./FSRadioGroup-aac97f6c.js";import"./FSIcon-faf0e444.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-11aadb82.js";import"./density-69cd8efb.js";import"./index-f95cc40a.js";import"./VLabel-820f7887.js";import"./VField-9dc825df.js";import"./VSpacer-37a4cd9a.js";import"./index-d6be2044.js";import"./VInput-6c2a4fd3.js";import"./FSCheckbox-d1b08f47.js";import"./FSFadeOut-e66877f2.js";import"./useDebounce-3221123d.js";import"./FSButton-821f7325.js";import"./FSClickable-d206c837.js";import"./FSTextField-16a79c60.js";import"./VTextField-9b5f1e4d.js";import"./index-098e590d.js";import"./VSelect-2f600942.js";import"./VMenu-ddfad70d.js";import"./ssrBoot-4aec2e0b.js";import"./border-43a3c780.js";import"./elevation-d5a2e352.js";import"./VImg-f3ba6161.js";import"./VDivider-6ea2ea72.js";import"./VSlideGroup-23212639.js";import"./goto-975c1e2c.js";import"./group-501836f7.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-64294cb0.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function j(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=N(c,[["render",j]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Ae={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Ge=["Standard"];export{t as Standard,Ge as __namedExportsOrder,Ae as default};
