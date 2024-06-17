import{f as Z,g as T,o as V,D as p,E as s,F as a,G as C,A as y,Q as h,I as k}from"./vue.esm-bundler-6f923154.js";import{F as v}from"./FSSelectField-78ee29cc.js";import{F as _}from"./FSChip-3525f285.js";import{u as $}from"./useTimeZones-d6f8fb82.js";import{C as b}from"./useColors-9144d90e.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-7aaa5a49.js";import"./FSCard-32925b42.js";import"./FSCol-5ed907ac.js";import"./css-0cf2e273.js";import"./FSRow-64caadb9.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./forwardRefs-e658ad70.js";import"./useRender-1cb09274.js";import"./theme-a8226b2e.js";import"./proxiedModel-c8904091.js";import"./anchor-52e92869.js";import"./color-a262cadc.js";import"./dimensions-dec12c77.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./locale-577543b5.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./transition-e76cd387.js";import"./VDefaultsProvider-a08a9a42.js";import"./FSRadioGroup-52f2d9ef.js";import"./FSIcon-93774118.js";import"./VIcon-d1c19518.js";import"./tag-a7b67944.js";import"./FSSpan-7bb94541.js";import"./useSlots-21493751.js";import"./useRules-8e3c4a4a.js";import"./VSelectionControl-40c897c6.js";import"./density-03404b67.js";import"./index-55248dcb.js";import"./VLabel-737017e3.js";import"./VField-d1f54092.js";import"./VSpacer-54f0d5ce.js";import"./index-4caca680.js";import"./VInput-125993fa.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./rounded-1f8e51a9.js";import"./FSTextField-add61627.js";import"./FSButton-ff673895.js";import"./FSClickable-e71ee20f.js";import"./index-114ba00f.js";import"./FSCheckbox-4fa3808a.js";import"./FSFadeOut-1de34239.js";import"./uuid-08309875.js";import"./VSelect-b637e5b8.js";import"./VMenu-31bd6e5f.js";import"./ssrBoot-082b8501.js";import"./border-f53cef89.js";import"./elevation-2c5be1c3.js";import"./VImg-8e65ad17.js";import"./VDivider-dfa46b18.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./group-91945d16.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function N(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=E(c,[["render",N]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Je={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
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
