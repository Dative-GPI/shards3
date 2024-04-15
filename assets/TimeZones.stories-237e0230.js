import{j as T,e as y,o as C,H as s,I as p,J as a,K as V,x as h,S as _,M as v}from"./vue.esm-bundler-43a473fd.js";import{F as k}from"./FSSelectField-84394bb7.js";import{F as $}from"./FSChip-cc0db57e.js";import{G as b}from"./base-0de1729e.js";import{S as E}from"./serviceFactory-3393b4e4.js";import{C as M}from"./composableFactory-cfaf9e24.js";import{C as N}from"./useColors-a0d41f52.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSSpan-f049a07d.js";import"./useSlots-e98bc591.js";import"./FSCol-3eed52f7.js";import"./css-18b0cf8e.js";import"./FSRow-ba466629.js";import"./useRules-b8c9f7a6.js";import"./VSpacer-051f3349.js";import"./useRender-d2bddd17.js";import"./theme-b11eeaee.js";import"./VSelect-2a3f4796.js";import"./VTextField-3e42e74d.js";import"./VField-13e4da9c.js";import"./index-112138db.js";import"./transition-83682335.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./locale-d44d9622.js";import"./proxiedModel-7eeaa9ef.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./tag-2aee60b4.js";import"./density-c9a73c91.js";import"./loader-e3f3ed5e.js";import"./intersectionObserver-6db224c5.js";import"./rounded-c06207e9.js";import"./VDefaultsProvider-6b919627.js";import"./forwardRefs-e658ad70.js";import"./index-52cd98ce.js";import"./VOverlay-5d77bca3.js";import"./dimensions-42b1c23f.js";import"./display-20e87f67.js";import"./lazy-7d7adcb2.js";import"./router-1edc30ca.js";import"./VMenu-7b829308.js";import"./ssrBoot-a35ae173.js";import"./border-fe1feda5.js";import"./elevation-494cacfb.js";import"./index-33b2c13d.js";import"./VImg-ded4a17b.js";import"./VDivider-d035c0db.js";import"./resizeObserver-059c00b3.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./VSlideGroup-d5f10b34.js";import"./group-b2be58db.js";import"./FSIcon-0563dc08.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./index-a0e5e2a3.js";class u{constructor(o){this.id=o.id,this.offset=o.offset}}class O extends u{constructor(o){super(o)}}const j=()=>`${b()}/time-zones`,w=new E("timeZone",O).create(e=>e.build(e.addGetMany(j,u),e.addNotify())),G=M.getMany(w),f=T({name:"FSSelectTimeZone",components:{FSSelectField:k,FSChip:$},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=G(),m=y(()=>{var n;return(n=r.value.find(i=>i.id===e.modelValue))==null?void 0:n.offset});return C(()=>{o()}),{ColorEnum:N,timeZones:r,offset:m}}});function U(e,o,r,m,n,i){const F=s("FSChip"),g=s("FSSelectField");return p(),a(g,h({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=Z=>e.$emit("update:modelValue",Z))},e.$attrs),{"append-inner":V(()=>[_(e.$slots,"append-inner",{},()=>[e.offset?(p(),a(F,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):v("",!0)])]),_:3},16,["items","modelValue"])}const S=I(f,[["render",U]]);f.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const De={title:"Foundation/Shared/Selectors/SelectTimeZone",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:S},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Le=["Standard"];export{t as Standard,Le as __namedExportsOrder,De as default};
