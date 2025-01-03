import{F as r,a as y}from"./FSDialogSelectEntities-BkM-3VPL.js";import{F as S}from"./FSButton-CN1ZIktz.js";import{E as s}from"./applications-pqrfQrBX.js";import"./vue.esm-bundler-DSwHwgKw.js";import"./FSDialogSubmit-DTXZ5ADH.js";import"./FSFadeOut-CQmN3qQC.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-BjF6TIJH.js";import"./useColors-C4EmrkDp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-4AjdAhIV.js";import"./css-XXwFKvUE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-DCTC-DNU.js";import"./FSCard-Dby8iWqU.js";import"./FSCol-DdGVae5t.js";import"./FSRow-BtkEywPN.js";import"./FSText-DiZ1SltH.js";import"./useSlots-CKCq4R6P.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./forwardRefs-DWGaNmQL.js";import"./color-uBYwhjku.js";import"./proxiedModel-D4Pgijkw.js";import"./anchor-7worbrUf.js";import"./dimensions-CF0PFV-D.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./locale-BsRwbRmi.js";import"./router-C4I-dA4c.js";import"./transition--2cAMn_j.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./useTranslations-BhPzmPwL.js";import"./FSSlideGroup-DmKSX9y1.js";import"./FSButtonNextIcon-DY9rJY5p.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./index-GTe7atjb.js";import"./VIcon-CdjjMQ6V.js";import"./resizeObserver-A1vWEG-J.js";import"./iframe-CCXEwjtk.js";import"../sb-preview/runtime.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-Dg_E4dui.js";import"./VProgressCircular-Cd-wheNV.js";import"./FSSpan-BoXQ4lG9.js";import"./FSIcon-TpFvudaY.js";const ue={title:"Foundation/Core/Lists/SelectEntitiesList",component:r,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:selecteds":{action:"update:selecteds"}}},t={render:e=>({components:{FSSelectEntitiesList:r},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        v-model="args.modelValue"
      />
    `}),args:{entityType:s.Device,modelValue:["1"]}},o={render:e=>({components:{FSSelectEntitiesList:r},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    `}),args:{entityType:s.Group,modelValue:[]}},n={render:e=>({components:{FSDialogSelectEntities:y,FSButton:S},setup(){return{args:e}},template:`
      <FSDialogSelectEntities
        :entityType="args.entityType"
        v-model:selecteds="args.selecteds"
        v-model:modelValue="args.modelValue"
        @update:selecteds="args['onUpdate:selecteds']"
        @update:modelValue="args['onUpdate:modelValue']"
      />
      <FSButton
        @click="args.modelValue = true"
        label="Open Dialog"
      />
    `}),args:{entityType:s.Group,selecteds:[],modelValue:!1}};var a,i,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSelectEntitiesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        v-model="args.modelValue"
      />
    \`
  }),
  args: {
    entityType: EntityType.Device,
    modelValue: ["1"]
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSelectEntitiesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    \`
  }),
  args: {
    entityType: EntityType.Group,
    modelValue: []
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,c,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogSelectEntities,
      FSButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDialogSelectEntities
        :entityType="args.entityType"
        v-model:selecteds="args.selecteds"
        v-model:modelValue="args.modelValue"
        @update:selecteds="args['onUpdate:selecteds']"
        @update:modelValue="args['onUpdate:modelValue']"
      />
      <FSButton
        @click="args.modelValue = true"
        label="Open Dialog"
      />
    \`
  }),
  args: {
    entityType: EntityType.Group,
    selecteds: [],
    modelValue: false
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const ce=["DeviceOrganisations","Groups","Dialog"];export{t as DeviceOrganisations,n as Dialog,o as Groups,ce as __namedExportsOrder,ue as default};
