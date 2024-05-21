import{j as Z,e as T,o as V,I as p,J as s,K as a,L as C,B as y,R as h,N as k}from"./vue.esm-bundler-7c237656.js";import{F as v}from"./FSSelectField-96856ed9.js";import{F as _}from"./FSChip-d3978a1b.js";import{u as $}from"./useTimeZones-84f84075.js";import{C as b}from"./useColors-0c4b5dc8.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSDialogMenu-b6d68568.js";import"./FSCard-c7069f2a.js";import"./FSCol-76ddd6d9.js";import"./css-aa928277.js";import"./FSRow-0e15f868.js";import"./VDialog-618a6f28.js";import"./VOverlay-a23169e8.js";import"./forwardRefs-e658ad70.js";import"./useRender-e0e7d9de.js";import"./theme-4dbecb8e.js";import"./proxiedModel-6d49c8c9.js";import"./loader-a7579223.js";import"./color-8a2bce37.js";import"./VProgressCircular-4299d8b4.js";import"./resizeObserver-8e2b427f.js";import"./VIcon-0c1eaee2.js";import"./tag-7dab75b7.js";import"./locale-ebeae402.js";import"./rounded-a3086a85.js";import"./dimensions-cb2de721.js";import"./display-e291008d.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./transition-e42cd317.js";import"./VDefaultsProvider-82c11bd7.js";import"./FSRadioGroup-3ba4b727.js";import"./FSIcon-5ad13b7e.js";import"./FSSpan-661158f8.js";import"./useSlots-338ea3fb.js";import"./useRules-30f7bcaa.js";import"./VSelectionControl-6d75a1db.js";import"./density-a5226544.js";import"./index-521b9cff.js";import"./VLabel-236d5849.js";import"./VField-86f2cf98.js";import"./VSpacer-84430db1.js";import"./index-09a2de27.js";import"./VInput-eed42ecd.js";import"./FSCheckbox-da06ce33.js";import"./FSFadeOut-e9437c53.js";import"./useDebounce-3b8c8385.js";import"./FSButton-2de03eb9.js";import"./FSClickable-e8caff35.js";import"./FSTextField-413ac9ce.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./VSelect-735dad66.js";import"./VMenu-2484e62c.js";import"./ssrBoot-ce89aa70.js";import"./border-e24af5bf.js";import"./elevation-785d47fb.js";import"./VImg-f2bb9819.js";import"./VDivider-5d036829.js";import"./VSlideGroup-5e88f18e.js";import"./goto-527c7407.js";import"./group-3855ab92.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-08360cd4.js";import"./index-a0e5e2a3.js";const c=Z({name:"FSSelectTimeZone",components:{FSSelectField:v,FSChip:_},props:{modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{getMany:o,entities:r}=$(),n=T(()=>{var m;return(m=r.value.find(i=>i.id===e.modelValue))==null?void 0:m.offset});return V(()=>{o()}),{ColorEnum:b,timeZones:r,offset:n}}});function j(e,o,r,n,m,i){const S=p("FSChip"),g=p("FSSelectField");return s(),a(g,y({itemTitle:"id",items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=F=>e.$emit("update:modelValue",F))},e.$attrs),{"append-inner":C(()=>[h(e.$slots,"append-inner",{},()=>[e.offset?(s(),a(S,{key:0,variant:"standard",color:e.ColorEnum.Dark,label:e.offset},null,8,["color","label"])):k("",!0)])]),_:3},16,["items","modelValue"])}const f=N(c,[["render",j]]);c.__docgenInfo={displayName:"FSSelectTimeZone",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectTimeZone.vue"]};const Ae={title:"Foundation/Shared/Selectors/SelectTimeZone",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{timeZone1:null}},render:(e,{argTypes:o})=>({components:{FSSelectTimeZone:f},props:Object.keys(o),setup(){return{...e}},template:`
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
