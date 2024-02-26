import{F as w,a as T}from"./FSSubmitDialog-f5bd975e.js";import{D as O,d as F,E as q,G as E,H as G,W as N,I as a,z as o,M as l,N as i,y as j}from"./vue.esm-bundler-17cb12ce.js";import{u as H}from"./useTimeZone-abc9a874.js";import{u as I}from"./useBreakpoints-6bc0ee93.js";import{C as P}from"./useColors-04b7b26f.js";import"./rules-8f4289e2.js";import{_}from"./FSIcon-16c55386.js";import{_ as n}from"./FSSpan-2051def6.js";import{_ as s}from"./FSCol-03fc1f3a.js";import{_ as r}from"./FSRow-9ce6aace.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{V as A}from"./VProgressCircular-132e7099.js";import{_ as S}from"./FSButton-8130144f.js";import{F as v}from"./FSCard-8714722b.js";import"./VOverlay-10257b67.js";import"./forwardRefs-e658ad70.js";import"./color-d421c344.js";import"./theme-c4ac2200.js";import"./locale-2e51016c.js";import"./loader-8675b45d.js";import"./rounded-d330abbe.js";import"./VIcon-343130ca.js";import"./dimensions-10b1de84.js";import"./display-4fe57557.js";import"./lazy-04b58018.js";import"./router-021df22c.js";import"./transition-4d995a4a.js";import"./VDefaultsProvider-1bba8b3c.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./resizeObserver-e7ce026e.js";import"./VBtn-7cd9fe35.js";import"./variant-1223b1b3.js";import"./density-cdecea01.js";import"./elevation-cb67bcb5.js";import"./group-a63c5543.js";import"./index-acf26303.js";const x=O({name:"FSRemoveDialog",components:{FSSubmitDialog:w,FSIcon:_,FSSpan:n,FSCol:s,FSRow:r},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:t}=I(),{$tr:g}=H(),c=F(()=>e.removeTotal>1?g("ui.remove-dialog.remove-plural","Remove {0} entities",e.removeTotal.toString()):g("ui.remove-dialog.remove-singular","Remove an entity")),d=F(()=>t.value?"36px":"40px");return{ColorEnum:P,footerHeight:d,title:c}}});function K(e,t,g,c,d,M){const V=q("FSSubmitDialog");return E(),G(V,j({rightButtonLabel:e.$tr("ui.button.remove","Remove"),rightButtonColor:e.ColorEnum.Error,title:e.title,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=$=>e.$emit("update:modelValue",$))},e.$attrs),N({body:a(()=>[o(s,{gap:"16px"},{default:a(()=>[o(r,null,{default:a(()=>[o(_,{color:e.ColorEnum.Error},{default:a(()=>[l(" mdi-alert-outline ")]),_:1},8,["color"]),o(r,{gap:"2px"},{default:a(()=>[o(n,null,{default:a(()=>[l(i(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),o(n,{font:"text-button"},{default:a(()=>[l(i(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),o(n,null,{default:a(()=>[l(i(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:a(()=>[o(r,{align:"center-right",height:e.footerHeight},{default:a(()=>[o(n,null,{default:a(()=>[l(i(e.$props.removeCurrent)+" / "+i(e.$props.removeTotal),1)]),_:1}),o(A,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["rightButtonLabel","rightButtonColor","title","modelValue"])}const L=z(x,[["render",K]]);x.__docgenInfo={displayName:"FSRemoveDialog",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRemoveDialog.vue"]};const $e={title:"Foundation/Shared/Dialog",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:t})=>({components:{FSDialog:T,FSButton:S,FSCard:v,FSSpan:n,FSCol:s,FSRow:r},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})},p={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:t})=>({components:{FSRemoveDialog:L,FSButton:S,FSCard:v,FSSpan:n,FSCol:s,FSRow:r},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(C=(R=p.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const Oe=["Variations","Submit","Remove"];export{p as Remove,u as Submit,m as Variations,Oe as __namedExportsOrder,$e as default};
