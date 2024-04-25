import{j as T,e as y,o as C,I as s,J as p,K as a,L as V,x as h,R as _,N as v}from"./vue.esm-bundler-b2d5d1a7.js";import{F as k}from"./FSSelectField-7cc1c304.js";import{F as $}from"./FSChip-3e3e79fe.js";import{G as b}from"./base-0de1729e.js";import{S as E}from"./serviceFactory-3393b4e4.js";import{C as N}from"./composableFactory-6dbd7c00.js";import{C as M}from"./useColors-1799ca43.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-c6abd92f.js";import"./FSClickable-f13d43bf.js";import"./FSCard-c003de31.js";import"./FSCol-8af42802.js";import"./css-9d61559d.js";import"./FSRow-ad0fe7ea.js";import"./VProgressCircular-b30bdd5e.js";import"./color-1b074b3b.js";import"./theme-66179376.js";import"./useRender-3dd3f3c7.js";import"./resizeObserver-b444ab71.js";import"./VIcon-18e13c83.js";import"./tag-33f1d162.js";import"./FSSpan-2ee73edb.js";import"./useSlots-0e4d21ee.js";import"./FSIcon-6a2b7637.js";import"./useRules-999feed4.js";import"./VSpacer-73e95d50.js";import"./VSelect-13b35610.js";import"./VTextField-6a1548fe.js";import"./VField-b51718cc.js";import"./index-c0240410.js";import"./transition-42bdb3ea.js";import"./VLabel-fe75201b.js";import"./VInput-16b8deac.js";import"./locale-602cc07b.js";import"./proxiedModel-92ce7dab.js";import"./density-aec4d930.js";import"./loader-b58e9405.js";import"./rounded-5a33644a.js";import"./VDefaultsProvider-37d19a63.js";import"./forwardRefs-e658ad70.js";import"./index-4361ac4f.js";import"./VOverlay-9625a4d7.js";import"./dimensions-31f51931.js";import"./display-5af9f9da.js";import"./lazy-a6d13163.js";import"./router-668d1803.js";import"./VMenu-03edebad.js";import"./ssrBoot-593c2d04.js";import"./border-dbfd717a.js";import"./elevation-b9c046ce.js";import"./index-7713af82.js";import"./VImg-ba624ef1.js";import"./VDivider-79192a29.js";import"./VCheckboxBtn-87c4493b.js";import"./VSelectionControl-27b8b6a4.js";import"./VSlideGroup-7f8275f9.js";import"./group-d1f5e06d.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./index-a0e5e2a3.js";class u{constructor(o){this.id=o.id,this.offset=o.offset}}class O extends u{constructor(o){super(o)}}const j=()=>`${b()}/time-zones`,w=new E("timeZone",O).create(e=>e.build(e.addGetMany(j,u),e.addNotify())),G=N.getMany(w),f=T({name:"FSSelectTimeZone",components:{FSSelectField:k,FSChip:$},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=G(),m=y(()=>{var n;return(n=r.value.find(i=>i.id===e.modelValue))==null?void 0:n.offset});return C(()=>{o()}),{ColorEnum:M,timeZones:r,offset:m}}});function L(e,o,r,m,n,i){const F=s("FSChip"),g=s("FSSelectField");return p(),a(g,h({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=Z=>e.$emit("update:modelValue",Z))},e.$attrs),{"append-inner":V(()=>[_(e.$slots,"append-inner",{},()=>[e.offset?(p(),a(F,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):v("",!0)])]),_:3},16,["items","modelValue"])}const S=I(f,[["render",L]]);f.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const ze={title:"Foundation/Shared/Selectors/SelectTimeZone",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:S},props:Object.keys(o),setup(){return{...e}},template:`
        <FSSelectTimeZone
          v-model="args.timeZone1"
        />
    `})};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Je=["Standard"];export{t as Standard,Je as __namedExportsOrder,ze as default};
