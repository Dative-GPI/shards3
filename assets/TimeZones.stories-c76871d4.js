import{j as T,e as y,o as C,J as s,K as p,L as a,M as V,x as h,R as _,P as v}from"./vue.esm-bundler-a79f6a7e.js";import{F as k}from"./FSSelectField-0551c6f1.js";import{F as $}from"./FSChip-ba78b951.js";import{G as b}from"./base-0de1729e.js";import{S as E}from"./serviceFactory-3393b4e4.js";import{C as M}from"./composableFactory-a4dd44af.js";import{C as N}from"./useColors-060213ee.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSSpan-6870f5d7.js";import"./useSlots-6a823081.js";import"./FSCol-bf5a0ca3.js";import"./css-6f95cab1.js";import"./FSRow-997087e7.js";import"./useRules-f2fe91c3.js";import"./VSpacer-0bffa310.js";import"./useRender-b11abf1d.js";import"./theme-1ec486f5.js";import"./VSelect-a1c81aab.js";import"./VTextField-31dab154.js";import"./VField-311790ee.js";import"./index-21b5e00b.js";import"./transition-5598497b.js";import"./VLabel-e2aed9e2.js";import"./VInput-6b3c87b1.js";import"./locale-9003447c.js";import"./proxiedModel-550eb350.js";import"./VIcon-9404a2c9.js";import"./color-4fa560db.js";import"./tag-f688eb88.js";import"./density-4d7bebe4.js";import"./loader-5621d579.js";import"./intersectionObserver-ca237ead.js";import"./rounded-5d5afca1.js";import"./VDefaultsProvider-151583b9.js";import"./forwardRefs-e658ad70.js";import"./index-3d25a1c3.js";import"./VOverlay-d699aad9.js";import"./dimensions-ba559413.js";import"./display-7eefeb5d.js";import"./lazy-1267f9fb.js";import"./router-8d3884f9.js";import"./VMenu-84de242c.js";import"./ssrBoot-4b3aca91.js";import"./border-775a28ed.js";import"./elevation-3507830c.js";import"./index-755a3767.js";import"./VImg-679a1f09.js";import"./VDivider-6955d14a.js";import"./resizeObserver-c5cea584.js";import"./VCheckboxBtn-03eab5ea.js";import"./VSelectionControl-afed9b27.js";import"./VSlideGroup-f0d4a7a0.js";import"./group-49850006.js";import"./FSIcon-92b3f0ab.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./index-a0e5e2a3.js";class u{constructor(o){this.id=o.id,this.offset=o.offset}}class j extends u{constructor(o){super(o)}}const w=()=>`${b()}/time-zones`,G=new E("timeZone",j).create(e=>e.build(e.addGetMany(w,u),e.addNotify())),I=M.getMany(G),f=T({name:"FSSelectTimeZone",components:{FSSelectField:k,FSChip:$},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=I(),m=y(()=>{var n;return(n=r.value.find(i=>i.id===e.modelValue))==null?void 0:n.offset});return C(()=>{o()}),{ColorEnum:N,timeZones:r,offset:m}}});function L(e,o,r,m,n,i){const F=s("FSChip"),g=s("FSSelectField");return p(),a(g,h({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=Z=>e.$emit("update:modelValue",Z))},e.$attrs),{"append-inner":V(()=>[_(e.$slots,"append-inner",{},()=>[e.offset?(p(),a(F,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):v("",!0)])]),_:3},16,["items","modelValue"])}const S=O(f,[["render",L]]);f.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Ae={title:"Foundation/Shared/Selectors/SelectTimeZone",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:S},props:Object.keys(o),setup(){return{...e}},template:`
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
