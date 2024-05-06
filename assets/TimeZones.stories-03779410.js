import{j as Z,e as T,o as V,I as p,J as s,K as a,L as C,B as y,R as h,N as k}from"./vue.esm-bundler-3416a090.js";import{F as v}from"./FSSelectField-a5281e4f.js";import{F as _}from"./FSChip-e95fe78b.js";import{u as $}from"./useTimeZones-7bf0b9fd.js";import{C as b}from"./useColors-1faf681b.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-7a6cda41.js";import"./FSCard-92f27951.js";import"./FSCol-5731c3c4.js";import"./css-69ed11d9.js";import"./FSRow-5edf997c.js";import"./VDialog-601b035f.js";import"./VOverlay-61ba3ae0.js";import"./forwardRefs-e658ad70.js";import"./useRender-fb717f1b.js";import"./theme-2c100cd8.js";import"./proxiedModel-868611da.js";import"./loader-b2c56b78.js";import"./color-5c733e3b.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./locale-be130c16.js";import"./rounded-e101edac.js";import"./dimensions-97f2f62c.js";import"./display-00a40b50.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./transition-6086c96b.js";import"./VDefaultsProvider-ef2fd514.js";import"./FSRadioGroup-185a97ce.js";import"./FSIcon-f518d728.js";import"./FSSpan-b519c994.js";import"./useSlots-7472d1e2.js";import"./useRules-5e1988ee.js";import"./VSelectionControl-0b3e2526.js";import"./density-174ddef7.js";import"./index-a9118fe7.js";import"./VLabel-793ed17d.js";import"./VField-d3f61dc4.js";import"./VSpacer-819449a6.js";import"./index-46378e0b.js";import"./VInput-77c4eaa4.js";import"./FSCheckbox-422b3b91.js";import"./FSFadeOut-8955926a.js";import"./useDebounce-736cfd0a.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSTextField-bb895cdf.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./VSelect-f25e0916.js";import"./VMenu-39a0be1f.js";import"./ssrBoot-c0668163.js";import"./border-1657a325.js";import"./elevation-9288a0e5.js";import"./VImg-cd6fa030.js";import"./VDivider-5604872c.js";import"./VSlideGroup-057adefe.js";import"./goto-8a93c650.js";import"./group-f3cba4ff.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-8605555f.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function j(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=N(c,[["render",j]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const ze={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Ae=["Standard"];export{t as Standard,Ae as __namedExportsOrder,ze as default};
