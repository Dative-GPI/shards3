import{j as T,e as y,o as C,H as s,I as p,J as a,K as V,x as h,S as _,M as v}from"./vue.esm-bundler-9b0e8103.js";import{F as k}from"./FSSelectField-5caea124.js";import{F as $}from"./FSChip-cf14b851.js";import{G as b}from"./base-0de1729e.js";import{S as E}from"./serviceFactory-3393b4e4.js";import{C as M}from"./composableFactory-3da3eea4.js";import{C as N}from"./useColors-92311d90.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-ae67d3be.js";import"./FSClickable-e3b9856f.js";import"./FSCard-2aeec95e.js";import"./FSCol-417d1c42.js";import"./css-a20776b9.js";import"./FSRow-efd9bf42.js";import"./VProgressCircular-49cc274e.js";import"./color-8a9bca19.js";import"./theme-eb9d1a1f.js";import"./useRender-7c6c7a38.js";import"./resizeObserver-d1864ccd.js";import"./VIcon-dbd6f8e0.js";import"./tag-6bef4934.js";import"./FSSpan-66c77817.js";import"./useSlots-bfff66e3.js";import"./FSIcon-fb1e9586.js";import"./useRules-1f7652b9.js";import"./VSpacer-fd2fc595.js";import"./VSelect-a9ad219e.js";import"./VTextField-ed34766d.js";import"./VField-719bff6c.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./locale-e5242025.js";import"./proxiedModel-bfd89816.js";import"./density-104762f9.js";import"./loader-e562d735.js";import"./rounded-f08b035c.js";import"./VDefaultsProvider-b110751b.js";import"./forwardRefs-e658ad70.js";import"./index-d737aecc.js";import"./VOverlay-b685a01d.js";import"./border-e6ad3d9a.js";import"./dimensions-a3779498.js";import"./display-cd82cc66.js";import"./lazy-9297b748.js";import"./router-cb82541f.js";import"./VMenu-38668fe2.js";import"./ssrBoot-3ada7612.js";import"./elevation-9129e0f4.js";import"./index-5b7905d8.js";import"./VImg-6b167a7c.js";import"./VDivider-ae04fd3f.js";import"./VCheckboxBtn-98bb56cd.js";import"./VSelectionControl-615916fb.js";import"./VSlideGroup-ffd03f93.js";import"./group-76451b20.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./index-a0e5e2a3.js";class u{constructor(o){this.id=o.id,this.offset=o.offset}}class O extends u{constructor(o){super(o)}}const j=()=>`${b()}/time-zones`,w=new E("timeZone",O).create(e=>e.build(e.addGetMany(j,u),e.addNotify())),G=M.getMany(w),f=T({name:"FSSelectTimeZone",components:{FSSelectField:k,FSChip:$},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=G(),m=y(()=>{var n;return(n=r.value.find(i=>i.id===e.modelValue))==null?void 0:n.offset});return C(()=>{o()}),{ColorEnum:N,timeZones:r,offset:m}}});function U(e,o,r,m,n,i){const F=s("FSChip"),g=s("FSSelectField");return p(),a(g,h({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=Z=>e.$emit("update:modelValue",Z))},e.$attrs),{"append-inner":V(()=>[_(e.$slots,"append-inner",{},()=>[e.offset?(p(),a(F,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):v("",!0)])]),_:3},16,["items","modelValue"])}const S=I(f,[["render",U]]);f.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const ze={title:"Foundation/Shared/Selectors/SelectTimeZone",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:S},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const He=["Standard"];export{t as Standard,He as __namedExportsOrder,ze as default};
