import{f as Z,g as T,o as V,I as p,J as s,K as a,L as C,B as y,V as h,N as k}from"./vue.esm-bundler-cd768bc3.js";import{F as v}from"./FSSelectField-a516e84b.js";import{F as _}from"./FSChip-2c87c938.js";import{u as $}from"./useTimeZones-bef1af75.js";import{C as b}from"./useColors-91ab292c.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-f482605f.js";import"./FSCard-0de7b634.js";import"./FSCol-ff457bc3.js";import"./css-c2ea3b68.js";import"./FSRow-1d7c2545.js";import"./VDialog-8ace1c67.js";import"./VOverlay-5f00a78b.js";import"./forwardRefs-e658ad70.js";import"./useRender-d216bc3f.js";import"./theme-33f5ac1a.js";import"./proxiedModel-80cf7d0e.js";import"./anchor-9469ffd7.js";import"./color-4e667524.js";import"./dimensions-9d1d90d7.js";import"./display-23d3bc4a.js";import"./lazy-07480c2b.js";import"./locale-d1b7e37d.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./transition-2948fa2b.js";import"./VDefaultsProvider-ff78bc14.js";import"./FSRadioGroup-fe2f8bfd.js";import"./FSIcon-5671b33c.js";import"./VIcon-95cdbe21.js";import"./tag-f5ad2c5e.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-650165ff.js";import"./density-80e773e2.js";import"./index-f4fa4c36.js";import"./VLabel-ac265b88.js";import"./VField-4a160336.js";import"./VSpacer-a30a0a7c.js";import"./index-b97c70d5.js";import"./VInput-28424714.js";import"./loader-e29f326e.js";import"./VProgressCircular-d119fa09.js";import"./resizeObserver-054c2f9a.js";import"./rounded-c9c22222.js";import"./FSCheckbox-c69cb5d8.js";import"./FSFadeOut-4994a7a0.js";import"./useDebounce-8f204f15.js";import"./uuid-08309875.js";import"./FSButton-7364cb00.js";import"./FSClickable-8effe836.js";import"./FSTextField-1c3f111c.js";import"./VTextField-dcedd86a.js";import"./index-cc35ebf5.js";import"./VSelect-1b324382.js";import"./VMenu-2bc21026.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./elevation-7537bf82.js";import"./VImg-7e8420c7.js";import"./VDivider-8ddbafa9.js";import"./VSlideGroup-22f87886.js";import"./goto-fb9b6e06.js";import"./group-9e3f1093.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-c82cc213.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function B(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=N(c,[["render",B]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Qe={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Re=["Standard"];export{t as Standard,Re as __namedExportsOrder,Qe as default};
