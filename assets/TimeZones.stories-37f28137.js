import{j as T,e as y,o as C,J as s,K as p,L as a,M as V,x as h,R as _,P as v}from"./vue.esm-bundler-8d1b7c9b.js";import{F as k}from"./FSSelectField-657910f0.js";import{F as $}from"./FSChip-249b9d62.js";import{G as b}from"./base-55a66464.js";import{S as E}from"./serviceFactory-3393b4e4.js";import{C as M}from"./composableFactory-fdc86242.js";import{C as N}from"./useColors-fe8562a0.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSSpan-54104d2b.js";import"./useSlots-36159ddf.js";import"./FSCol-53c64bd8.js";import"./css-19c8f0ab.js";import"./FSRow-a391dd26.js";import"./useRules-c9867f7f.js";import"./VSpacer-089ee4d2.js";import"./useRender-7d329101.js";import"./theme-82ddebf2.js";import"./VSelect-51db2014.js";import"./VTextField-6f523597.js";import"./VField-0fe66054.js";import"./index-03703da7.js";import"./transition-ec42203e.js";import"./VLabel-339e0c63.js";import"./VInput-e3eb2fdb.js";import"./locale-4596da4c.js";import"./proxiedModel-5e90dbf3.js";import"./VIcon-af7bd965.js";import"./color-b802304c.js";import"./tag-c9f6eb57.js";import"./density-f72a6349.js";import"./loader-883a5b9e.js";import"./intersectionObserver-872db127.js";import"./rounded-dfbce428.js";import"./VDefaultsProvider-ec24aebb.js";import"./forwardRefs-e658ad70.js";import"./index-78515ab6.js";import"./VOverlay-3a319082.js";import"./dimensions-db4341a9.js";import"./display-599b850b.js";import"./lazy-f4975b14.js";import"./router-80533699.js";import"./VMenu-8a1eabd1.js";import"./ssrBoot-3bb665ae.js";import"./border-7e6623e1.js";import"./elevation-7b9c5add.js";import"./index-9b4e1373.js";import"./VImg-82b274b6.js";import"./VDivider-dddb5e29.js";import"./resizeObserver-170e8e39.js";import"./VCheckboxBtn-7de51bc9.js";import"./VSelectionControl-b7fc0cbe.js";import"./VSlideGroup-b35e7181.js";import"./group-9a48651f.js";import"./FSIcon-f1833eba.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./index-a0e5e2a3.js";class u{constructor(o){this.id=o.id,this.offset=o.offset}}class j extends u{constructor(o){super(o)}}const w=()=>`${b()}/time-zones`,G=new E("timeZone",j).create(e=>e.build(e.addGetMany(w,u),e.addNotify())),I=M.getMany(G),f=T({name:"FSSelectTimeZone",components:{FSSelectField:k,FSChip:$},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=I(),m=y(()=>{var n;return(n=r.value.find(i=>i.id===e.modelValue))==null?void 0:n.offset});return C(()=>{o()}),{ColorEnum:N,timeZones:r,offset:m}}});function L(e,o,r,m,n,i){const F=s("FSChip"),g=s("FSSelectField");return p(),a(g,h({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=Z=>e.$emit("update:modelValue",Z))},e.$attrs),{"append-inner":V(()=>[_(e.$slots,"append-inner",{},()=>[e.offset?(p(),a(F,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):v("",!0)])]),_:3},16,["items","modelValue"])}const S=O(f,[["render",L]]);f.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Ae={title:"Foundation/Shared/Selectors/SelectTimeZone",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:S},props:Object.keys(o),setup(){return{...e}},template:`
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
