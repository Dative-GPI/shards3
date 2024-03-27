import{g as T,j as y,o as C,J as s,K as p,L as a,M as V,x as h,R as _,P as v}from"./vue.esm-bundler-e580dd1f.js";import{F as k}from"./FSSelectField-ae46c32c.js";import{F as $}from"./FSChip-1784ba7e.js";import{G as b,S as E}from"./base-7f65d26c.js";import{C as M}from"./composableFactory-a83bc1a8.js";import{C as N}from"./useColors-b2cb658b.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSSpan-73185be3.js";import"./useSlots-a039f59b.js";import"./FSCol-fcea4dc1.js";import"./css-ca36ed75.js";import"./FSRow-50904d6e.js";import"./useRules-a8018b0f.js";import"./VSpacer-9103d4e2.js";import"./useRender-16acb9c4.js";import"./theme-a3bb880e.js";import"./VSelect-a9f4ba15.js";import"./VTextField-ce85aec3.js";import"./VField-1fbd78f2.js";import"./index-96d842ab.js";import"./transition-7d6b8783.js";import"./VLabel-a546dd45.js";import"./VInput-1e999169.js";import"./locale-405fbfb1.js";import"./proxiedModel-3aca154f.js";import"./VIcon-bb9e7f8a.js";import"./color-0af6d6f5.js";import"./tag-fa7badbe.js";import"./density-be1d42ad.js";import"./loader-8bc08e66.js";import"./intersectionObserver-4acce169.js";import"./rounded-2552fce2.js";import"./forwardRefs-e658ad70.js";import"./index-e90df875.js";import"./VOverlay-1db7e4ae.js";import"./dimensions-10c7935e.js";import"./display-0f118c60.js";import"./lazy-075f19a9.js";import"./router-1d334446.js";import"./VMenu-f3c71475.js";import"./VDefaultsProvider-5c112428.js";import"./ssrBoot-d5661322.js";import"./border-6c565bcc.js";import"./elevation-02492a14.js";import"./index-a22223d0.js";import"./VImg-07ac5889.js";import"./VDivider-c7fbbe49.js";import"./resizeObserver-88f5705d.js";import"./VCheckboxBtn-5f6dc991.js";import"./VSelectionControl-682aab8c.js";import"./VSlideGroup-3258cc7a.js";import"./group-1e6e82bd.js";import"./FSIcon-4fed0819.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./index-a0e5e2a3.js";class u{constructor(o){this.id=o.id,this.offset=o.offset}}class j extends u{constructor(o){super(o)}}const w=()=>`${b()}/time-zones`,G=new E("timeZone",j).create(e=>e.build(e.addGetMany(w,u),e.addNotify())),I=M.getMany(G),f=T({name:"FSSelectTimeZone",components:{FSSelectField:k,FSChip:$},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=I(),m=y(()=>{var n;return(n=r.value.find(i=>i.id===e.modelValue))==null?void 0:n.offset});return C(()=>{o()}),{ColorEnum:N,timeZones:r,offset:m}}});function L(e,o,r,m,n,i){const F=s("FSChip"),g=s("FSSelectField");return p(),a(g,h({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=Z=>e.$emit("update:modelValue",Z))},e.$attrs),{"append-inner":V(()=>[_(e.$slots,"append-inner",{},()=>[e.offset?(p(),a(F,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):v("",!0)])]),_:3},16,["items","modelValue"])}const S=O(f,[["render",L]]);f.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const qe={title:"Foundation/Shared/Selectors/SelectTimeZone",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:S},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Ae=["Standard"];export{t as Standard,Ae as __namedExportsOrder,qe as default};
