import{j as Z,e as T,o as V,I as p,J as s,K as a,L as C,B as y,R as h,N as k}from"./vue.esm-bundler-41eda46b.js";import{F as v}from"./FSSelectField-884c905f.js";import{F as _}from"./FSChip-0962e240.js";import{u as $}from"./useTimeZones-239f38ea.js";import{C as b}from"./useColors-c08b974a.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-58b27c41.js";import"./FSCard-dc76bdb2.js";import"./FSCol-282cc158.js";import"./css-35e8563f.js";import"./FSRow-1508d56d.js";import"./VDialog-fd66d168.js";import"./VOverlay-aedbdfa0.js";import"./forwardRefs-e658ad70.js";import"./useRender-b120e115.js";import"./theme-d4a333d5.js";import"./proxiedModel-ebe72836.js";import"./loader-912691d5.js";import"./color-7b12579a.js";import"./VProgressCircular-e304a31d.js";import"./resizeObserver-ea3ec7d1.js";import"./VIcon-7bb7bc51.js";import"./tag-585bbcbd.js";import"./locale-396b54fa.js";import"./rounded-d3e26840.js";import"./dimensions-dbe989d9.js";import"./display-40264291.js";import"./lazy-c18d183e.js";import"./router-c7b42b5f.js";import"./transition-87ba966b.js";import"./VDefaultsProvider-9f290faa.js";import"./FSRadioGroup-d55c6657.js";import"./FSIcon-6dc797d3.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-6bfa0431.js";import"./density-23ec5fb8.js";import"./index-35b22454.js";import"./VLabel-674db0eb.js";import"./VField-7c3f9689.js";import"./VSpacer-b889274d.js";import"./index-ad5199eb.js";import"./VInput-1f6e9963.js";import"./FSCheckbox-9aa0fdbb.js";import"./FSFadeOut-d6aa1547.js";import"./useDebounce-c713d9ff.js";import"./FSButton-cdb730f5.js";import"./FSClickable-fa1cff73.js";import"./FSTextField-53a1ad95.js";import"./VTextField-414d8177.js";import"./index-2b17760e.js";import"./VSelect-994061f1.js";import"./VMenu-40d1577e.js";import"./ssrBoot-5c61be23.js";import"./border-520a2ee2.js";import"./elevation-74b749d9.js";import"./VImg-d6020fb6.js";import"./VDivider-50e3f59d.js";import"./VSlideGroup-d28ddfe3.js";import"./goto-e7ba55f0.js";import"./group-53103ce4.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-00c2f0ee.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function j(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=N(c,[["render",j]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const ze={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
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
