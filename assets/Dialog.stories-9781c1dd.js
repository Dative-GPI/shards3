import{F as w,a as T}from"./FSSubmitDialog-b9ce097a.js";import{D as O,d as F,E as q,G as E,H as G,S as N,I as a,y as o,M as l,N as i,z as j}from"./vue.esm-bundler-7bc65811.js";import{u as H}from"./useTimeZone-8af6f8e0.js";import{u as I}from"./useBreakpoints-1754149f.js";import{C as P}from"./useColors-6dff70d5.js";import"./rules-041f2544.js";import{_}from"./FSIcon-149b00a8.js";import{_ as n}from"./FSSpan-7f9d89a0.js";import{_ as s}from"./FSCol-8dc0322a.js";import{_ as r}from"./FSRow-ae4caba9.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{V as A}from"./VProgressCircular-ab3499a8.js";import{_ as g}from"./FSButton-f8d3e800.js";import{F as v}from"./FSCard-b8496b1f.js";import"./VOverlay-b151596c.js";import"./forwardRefs-e658ad70.js";import"./color-3023c34d.js";import"./theme-0a9d2dbd.js";import"./locale-6f1bd0c0.js";import"./loader-04f0a6eb.js";import"./rounded-2bba334c.js";import"./VIcon-866a2873.js";import"./dimensions-d0734457.js";import"./display-3f93751e.js";import"./lazy-6a039da0.js";import"./router-7d0819d1.js";import"./transition-188ceb13.js";import"./VDefaultsProvider-04b34a8e.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./resizeObserver-c41c61f0.js";import"./VBtn-5c223d6a.js";import"./variant-9510412f.js";import"./density-54967683.js";import"./elevation-8ccaa6df.js";import"./group-71a10606.js";import"./index-97233025.js";const x=O({name:"FSRemoveDialog",components:{FSSubmitDialog:w,FSIcon:_,FSSpan:n,FSCol:s,FSRow:r},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:t}=I(),{$tr:S}=H(),c=F(()=>e.removeTotal>1?S("ui.remove-dialog.remove-plural","Remove {0} entities",e.removeTotal.toString()):S("ui.remove-dialog.remove-singular","Remove an entity")),d=F(()=>t.value?"36px":"40px");return{ColorEnum:P,footerHeight:d,title:c}}});function K(e,t,S,c,d,M){const V=q("FSSubmitDialog");return E(),G(V,j({rightButtonLabel:e.$tr("ui.button.remove","Remove"),rightButtonColor:e.ColorEnum.Error,title:e.title,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=$=>e.$emit("update:modelValue",$))},e.$attrs),N({body:a(()=>[o(s,{gap:"16px"},{default:a(()=>[o(r,null,{default:a(()=>[o(_,{color:e.ColorEnum.Error},{default:a(()=>[l(" mdi-alert-outline ")]),_:1},8,["color"]),o(r,{gap:"2px"},{default:a(()=>[o(n,null,{default:a(()=>[l(i(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),o(n,{font:"text-button"},{default:a(()=>[l(i(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),o(n,null,{default:a(()=>[l(i(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:a(()=>[o(r,{align:"center-right",height:e.footerHeight},{default:a(()=>[o(n,null,{default:a(()=>[l(i(e.$props.removeCurrent)+" / "+i(e.$props.removeTotal),1)]),_:1}),o(A,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["rightButtonLabel","rightButtonColor","title","modelValue"])}const L=z(x,[["render",K]]);x.__docgenInfo={displayName:"FSRemoveDialog",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRemoveDialog.vue"]};const $e={title:"Foundation/Shared/Dialog",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:t})=>({components:{FSDialog:T,FSButton:g,FSCard:v,FSSpan:n,FSCol:s,FSRow:r},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})},u={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:t})=>({components:{FSSubmitDialog:w,FSButton:g,FSCard:v,FSSpan:n,FSCol:s,FSRow:r},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})},p={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:t})=>({components:{FSRemoveDialog:L,FSButton:g,FSCard:v,FSSpan:n,FSCol:s,FSRow:r},props:Object.keys(t),setup(){return{...e}},template:`
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
