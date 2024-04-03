import{j as T,e as y,o as C,J as s,K as p,L as a,M as V,x as h,R as _,P as v}from"./vue.esm-bundler-37de1696.js";import{F as k}from"./FSSelectField-919ae91b.js";import{F as $}from"./FSChip-a0f93d15.js";import{G as b}from"./base-55a66464.js";import{S as E}from"./serviceFactory-3393b4e4.js";import{C as M}from"./composableFactory-4cdb1715.js";import{C as N}from"./useColors-ba22af06.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSSpan-ce1ed5e8.js";import"./useSlots-df9def22.js";import"./FSCol-927ba931.js";import"./css-cb27a64f.js";import"./FSRow-632ce14e.js";import"./useRules-724d25b8.js";import"./VSpacer-63748a98.js";import"./useRender-ccb83440.js";import"./theme-07d11e72.js";import"./VSelect-28b2c344.js";import"./VTextField-03f06faf.js";import"./VField-83328994.js";import"./index-3a20b1dd.js";import"./transition-4a8f6120.js";import"./VLabel-c64e48eb.js";import"./VInput-670d9bbb.js";import"./locale-ee313da6.js";import"./proxiedModel-e8e26ca7.js";import"./VIcon-122293c7.js";import"./color-efc02365.js";import"./tag-9d688242.js";import"./density-ebf3f2c2.js";import"./loader-e58dd003.js";import"./intersectionObserver-12fc3323.js";import"./rounded-7d64095f.js";import"./VDefaultsProvider-062db757.js";import"./forwardRefs-e658ad70.js";import"./index-90c07952.js";import"./VOverlay-8f6f9ccb.js";import"./dimensions-4b009e60.js";import"./display-62cdc35d.js";import"./lazy-193ed5d1.js";import"./router-ef1336ae.js";import"./VMenu-ecee0657.js";import"./ssrBoot-9a42e176.js";import"./border-fb870e60.js";import"./elevation-66cfbdec.js";import"./index-737116aa.js";import"./VImg-d6f10770.js";import"./VDivider-c1bb8faa.js";import"./resizeObserver-8d36419f.js";import"./VCheckboxBtn-ebaca132.js";import"./VSelectionControl-19e4ec9f.js";import"./VSlideGroup-62b1ce2b.js";import"./group-bc028d0d.js";import"./FSIcon-486fd767.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./index-a0e5e2a3.js";class u{constructor(o){this.id=o.id,this.offset=o.offset}}class j extends u{constructor(o){super(o)}}const w=()=>`${b()}/time-zones`,G=new E("timeZone",j).create(e=>e.build(e.addGetMany(w,u),e.addNotify())),I=M.getMany(G),f=T({name:"FSSelectTimeZone",components:{FSSelectField:k,FSChip:$},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=I(),m=y(()=>{var n;return(n=r.value.find(i=>i.id===e.modelValue))==null?void 0:n.offset});return C(()=>{o()}),{ColorEnum:N,timeZones:r,offset:m}}});function L(e,o,r,m,n,i){const F=s("FSChip"),g=s("FSSelectField");return p(),a(g,h({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=Z=>e.$emit("update:modelValue",Z))},e.$attrs),{"append-inner":V(()=>[_(e.$slots,"append-inner",{},()=>[e.offset?(p(),a(F,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):v("",!0)])]),_:3},16,["items","modelValue"])}const S=O(f,[["render",L]]);f.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Ae={title:"Foundation/Shared/Selectors/SelectTimeZone",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:S},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Be=["Standard"];export{t as Standard,Be as __namedExportsOrder,Ae as default};
