import{F as w,a as _}from"./FSSubmitDialog-5dba0ff8.js";import{G as O,e as F,_ as q,H as E,L as G,V as j,M as a,A as N,z as o,O as l,P as i}from"./vue.esm-bundler-d8049c85.js";import{_ as T}from"./FSIcon-4847f868.js";import{_ as n}from"./FSSpan-9f00eaf4.js";import{_ as s}from"./FSCol-39bd052c.js";import{_ as r}from"./FSRow-b5482a77.js";import{u as H}from"./useBreakpoints-7d02383c.js";import{C as A}from"./useColors-5c9cff43.js";import{u as I}from"./useTranslations-503566cb.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as P}from"./VProgressCircular-b08e7416.js";import{_ as S}from"./FSButton-819b5655.js";import{F as v}from"./FSCard-c2aada98.js";import"./VOverlay-0482e356.js";import"./forwardRefs-e658ad70.js";import"./useRender-29d234e5.js";import"./theme-540b65c4.js";import"./locale-0b822523.js";import"./loader-cb170f8e.js";import"./color-339b05ed.js";import"./rounded-0d200380.js";import"./tag-fffb6ba6.js";import"./dimensions-c0ade26a.js";import"./display-bfe8ef0e.js";import"./lazy-a24e86b5.js";import"./router-e2bea4dd.js";import"./transition-a0827c0d.js";import"./VDefaultsProvider-2b53b1ea.js";import"./VIcon-76640d9b.js";import"./useSlots-bdda8306.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./resizeObserver-76cdf9c3.js";import"./VBtn-05fbe885.js";import"./variant-ec540a43.js";import"./density-de8a38cb.js";import"./elevation-ef665fc6.js";import"./group-9e62ecfa.js";import"./index-ea9d807b.js";const x=O({name:"FSRemoveDialog",components:{FSSubmitDialog:w,FSIcon:T,FSSpan:n,FSCol:s,FSRow:r},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:t}=H(),{$tr:g}=I(),c=F(()=>e.removeTotal>1?g("ui.remove-dialog.remove-plural","Remove {0} entities",e.removeTotal.toString()):g("ui.remove-dialog.remove-singular","Remove an entity")),d=F(()=>t.value?"36px":"40px");return{ColorEnum:A,footerHeight:d,title:c}}});function z(e,t,g,c,d,M){const V=q("FSSubmitDialog");return E(),G(V,N({rightButtonLabel:e.$tr("ui.button.remove","Remove"),rightButtonColor:e.ColorEnum.Error,title:e.title,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=$=>e.$emit("update:modelValue",$))},e.$attrs),j({body:a(()=>[o(s,{gap:"16px"},{default:a(()=>[o(r,null,{default:a(()=>[o(T,{color:e.ColorEnum.Error},{default:a(()=>[l(" mdi-alert-outline ")]),_:1},8,["color"]),o(r,{gap:"2px"},{default:a(()=>[o(n,null,{default:a(()=>[l(i(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),o(n,{font:"text-button"},{default:a(()=>[l(i(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),o(n,null,{default:a(()=>[l(i(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:a(()=>[o(r,{align:"center-right",height:e.footerHeight},{default:a(()=>[o(n,null,{default:a(()=>[l(i(e.$props.removeCurrent)+" / "+i(e.$props.removeTotal),1)]),_:1}),o(P,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["rightButtonLabel","rightButtonColor","title","modelValue"])}const K=L(x,[["render",z]]);x.__docgenInfo={displayName:"FSRemoveDialog",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRemoveDialog.vue"]};const Oe={title:"Foundation/Shared/Dialog",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:t})=>({components:{FSDialog:_,FSButton:S,FSCard:v,FSSpan:n,FSCol:s,FSRow:r},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - header, body"
        @click="() => args.value1 = true"
      />
      <FSDialog
        color="primary"
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-button">Obiwan kenobi</FSSpan>
        </template>
        <template #body>
          <FSSpan> - Hello there!</FSSpan>
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - header, body, footer"
        @click="() => args.value2 = true"
      />
      <FSDialog
        v-model="args.value2"
      >
        <template #header>
          <FSSpan font="text-button">General Grievous</FSSpan>
        </template>
        <template #body>
          <FSSpan> - General Kenobi!</FSSpan>
        </template>
        <template #footer>
          <FSSpan font="text-underline">(suprised)</FSSpan>
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSDialog
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan> Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSDialog>
    </div>`})},u={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:t})=>({components:{FSSubmitDialog:w,FSButton:S,FSCard:v,FSSpan:n,FSCol:s,FSRow:r},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSSubmitDialog
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        v-model="args.value1"
      />
      <FSButton
        color="primary"
        label="Dialog - title, subtitle, default actions"
        @click="() => args.value2 = true"
      />
      <FSSubmitDialog
        title="Star wars 2"
        subtitle="Attack of the clones"
        :actions="true"
        v-model="args.value2"
      />
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSSubmitDialog
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan > Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSSubmitDialog>
    </div>`})},p={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:t})=>({components:{FSRemoveDialog:K,FSButton:S,FSCard:v,FSSpan:n,FSCol:s,FSRow:r},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        label="Dialog - singular"
        @click="() => args.value1 = true"
      />
      <FSRemoveDialog
        :removeTotal="1"
        :removing="args.removing1"
        @click:rightButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSRemoveDialog
        :removeTotal="12"
        :removing="args.removing2"
        @click:rightButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSRemoveDialog
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:rightButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>`})};var f,b,y;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialog,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - header, body"
        @click="() => args.value1 = true"
      />
      <FSDialog
        color="primary"
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-button">Obiwan kenobi</FSSpan>
        </template>
        <template #body>
          <FSSpan> - Hello there!</FSSpan>
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - header, body, footer"
        @click="() => args.value2 = true"
      />
      <FSDialog
        v-model="args.value2"
      >
        <template #header>
          <FSSpan font="text-button">General Grievous</FSSpan>
        </template>
        <template #body>
          <FSSpan> - General Kenobi!</FSSpan>
        </template>
        <template #footer>
          <FSSpan font="text-underline">(suprised)</FSSpan>
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSDialog
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan> Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSDialog>
    </div>\`
  })
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,D,k;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSubmitDialog,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSSubmitDialog
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        v-model="args.value1"
      />
      <FSButton
        color="primary"
        label="Dialog - title, subtitle, default actions"
        @click="() => args.value2 = true"
      />
      <FSSubmitDialog
        title="Star wars 2"
        subtitle="Attack of the clones"
        :actions="true"
        v-model="args.value2"
      />
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSSubmitDialog
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan > Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSSubmitDialog>
    </div>\`
  })
}`,...(k=(D=u.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var B,R,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      removing1: false,
      value2: false,
      removing2: false,
      value3: false,
      removing3: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSRemoveDialog,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        label="Dialog - singular"
        @click="() => args.value1 = true"
      />
      <FSRemoveDialog
        :removeTotal="1"
        :removing="args.removing1"
        @click:rightButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSRemoveDialog
        :removeTotal="12"
        :removing="args.removing2"
        @click:rightButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSRemoveDialog
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:rightButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>\`
  })
}`,...(C=(R=p.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const qe=["Variations","Submit","Remove"];export{p as Remove,u as Submit,m as Variations,qe as __namedExportsOrder,Oe as default};
