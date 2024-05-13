import{j as Z,e as T,o as V,I as p,J as s,K as a,L as C,B as y,R as h,N as k}from"./vue.esm-bundler-41eda46b.js";import{F as v}from"./FSSelectField-ee043228.js";import{F as _}from"./FSChip-4ec1aacf.js";import{u as $}from"./useTimeZones-239f38ea.js";import{C as b}from"./useColors-baaa98f5.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-8a197336.js";import"./FSCard-8067a4d4.js";import"./FSCol-282cc158.js";import"./css-35e8563f.js";import"./FSRow-1508d56d.js";import"./VDialog-ecb58b76.js";import"./VOverlay-ac667fed.js";import"./forwardRefs-e658ad70.js";import"./useRender-dd35ddd1.js";import"./theme-be1bd2db.js";import"./proxiedModel-03601969.js";import"./loader-e17cf3b4.js";import"./color-45753032.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./locale-84078765.js";import"./rounded-3de0fd3d.js";import"./dimensions-5b54e342.js";import"./display-4adc39d9.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./transition-695cd20f.js";import"./VDefaultsProvider-7d12961d.js";import"./FSRadioGroup-a60e03b4.js";import"./FSIcon-713345eb.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-42a6862f.js";import"./density-b42ba92f.js";import"./index-4ba2035c.js";import"./VLabel-19fa20ee.js";import"./VField-c52f5557.js";import"./VSpacer-63a59a9e.js";import"./index-dc0570e5.js";import"./VInput-4d87c32a.js";import"./FSCheckbox-90b24572.js";import"./FSFadeOut-77aed403.js";import"./useDebounce-c713d9ff.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./FSTextField-77636cac.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./VSelect-defb5d1c.js";import"./VMenu-499c8185.js";import"./ssrBoot-5c61be23.js";import"./border-eea26164.js";import"./elevation-878f110a.js";import"./VImg-63ad34dc.js";import"./VDivider-d263d436.js";import"./VSlideGroup-aeb2e4a4.js";import"./goto-50a9e63e.js";import"./group-2589989a.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-00c2f0ee.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function j(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=N(c,[["render",j]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Ae={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Ge=["Standard"];export{t as Standard,Ge as __namedExportsOrder,Ae as default};
