import{F as G}from"./FSDateRangeField-78a9ed44.js";import{F as N}from"./FSDateField-a3275048.js";import{F as c,b as $}from"./FSCalendarTwin-87c58382.js";import{E as H,e as b,G as I,H as K,I as L,W as A,J as t,n as P,q as o,K as i,L as s}from"./vue.esm-bundler-7e157d2d.js";import{_ as O}from"./FSIcon-0a8a35f6.js";import{_ as n}from"./FSSpan-225601c1.js";import{_ as l}from"./FSCol-7c29272b.js";import{_ as r}from"./FSRow-db172e67.js";import{u as z}from"./css-b03ad87d.js";import{C as J}from"./useColors-4000b712.js";import{u as M}from"./useTranslations-cd0b055a.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{V as W}from"./VProgressCircular-b2622fdf.js";import{_ as g}from"./FSButton-e381f01a.js";import{F as d}from"./FSCard-38a28c75.js";import"./FSTextField-f103263d.js";import"./VField-483d98e3.js";import"./index-bda29209.js";import"./useRender-91b27a68.js";import"./theme-67ffe9ae.js";import"./transition-b4c159ac.js";import"./VInput-1a2cc3a3.js";import"./locale-c9528b1a.js";import"./VIcon-f6cc7834.js";import"./color-e501cff3.js";import"./tag-831e49a1.js";import"./density-c657e4cb.js";import"./loader-7867d039.js";import"./rounded-fe596c98.js";import"./forwardRefs-e658ad70.js";import"./useSlots-db3342e3.js";import"./VSpacer-5057dcd1.js";import"./VTextField-85193af7.js";import"./index-37e9655b.js";import"./useTimeZone-3e466d1a.js";import"./FSCalendar-5a91b3ed.js";import"./VLocaleProvider-451a5b07.js";import"./date-c5308bd2.js";import"./VDefaultsProvider-dcab85c0.js";import"./VBtn-ca188bc5.js";import"./border-a826ffcd.js";import"./elevation-7fca9761.js";import"./group-5cfad0cd.js";import"./dimensions-a1a728d7.js";import"./router-cc531cb0.js";import"./index-feab7f97.js";import"./VMenu-047a272f.js";import"./VOverlay-91bdeda0.js";import"./display-84f7fe10.js";import"./lazy-55c06103.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./resizeObserver-8feda973.js";const q=H({name:"FSRemoveDialog",components:{FSSubmitDialog:c,FSIcon:O,FSSpan:n,FSCol:l,FSRow:r},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:a}=z(),{$tr:F}=M(),v=b(()=>e.removeTotal>1?F("ui.remove-dialog.remove-plural","Remove {0} entities",e.removeTotal.toString()):F("ui.remove-dialog.remove-singular","Remove an entity")),f=b(()=>a.value?"36px":"40px");return{ColorEnum:J,footerHeight:f,title:v}}});function Q(e,a,F,v,f,Y){const j=I("FSSubmitDialog");return K(),L(j,P({rightButtonLabel:e.$tr("ui.button.remove","Remove"),rightButtonColor:e.ColorEnum.Error,title:e.title,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=E=>e.$emit("update:modelValue",E))},e.$attrs),A({body:t(()=>[o(l,{gap:"16px"},{default:t(()=>[o(r,null,{default:t(()=>[o(O,{color:e.ColorEnum.Error},{default:t(()=>[i(" mdi-alert-outline ")]),_:1},8,["color"]),o(r,{gap:"2px"},{default:t(()=>[o(n,null,{default:t(()=>[i(s(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),o(n,{font:"text-button"},{default:t(()=>[i(s(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),o(n,null,{default:t(()=>[i(s(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:t(()=>[o(r,{align:"center-right",height:e.footerHeight},{default:t(()=>[o(n,null,{default:t(()=>[i(s(e.$props.removeCurrent)+" / "+s(e.$props.removeTotal),1)]),_:1}),o(W,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["rightButtonLabel","rightButtonColor","title","modelValue"])}const X=U(q,[["render",Q]]);q.__docgenInfo={displayName:"FSRemoveDialog",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRemoveDialog.vue"]};const Ye={title:"Foundation/Shared/Dialog",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:a})=>({components:{FSDialog:$,FSButton:g,FSCard:d,FSSpan:n,FSCol:l,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},p={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:a})=>({components:{FSSubmitDialog:c,FSButton:g,FSCard:d,FSSpan:n,FSCol:l,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},u={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:a})=>({components:{FSRemoveDialog:X,FSButton:g,FSCard:d,FSSpan:n,FSCol:l,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},S={args:{args:{value1:!1,date1:null,date2:null}},render:(e,{argTypes:a})=>({components:{FSSubmitDialog:c,FSButton:g,FSDateField:N,FSDateRangeField:G,FSCard:d,FSCol:l,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value1 = true"
      />
      <FSSubmitDialog
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-h2"> Form </FSSpan>
        </template>
        <template #body>
          <FSCol>
            <FSDateField
              label="Date"
              v-model="args.date1"
            />
            <FSDateRangeField
              label="Date range"
              v-model="args.date2"
            />
          </FSCol>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Submit"
              @click="() => args.value1 = false"
            />
          </FSRow>
        </template>
      </FSSubmitDialog>
    </div>`})};var y,D,h;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(D=m.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var k,B,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(B=p.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var C,w,x;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(w=u.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var T,_,V;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      date1: null,
      date2: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSubmitDialog,
      FSButton,
      FSDateField,
      FSDateRangeField,
      FSCard,
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
        label="Dialog - slots"
        @click="() => args.value1 = true"
      />
      <FSSubmitDialog
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-h2"> Form </FSSpan>
        </template>
        <template #body>
          <FSCol>
            <FSDateField
              label="Date"
              v-model="args.date1"
            />
            <FSDateRangeField
              label="Date range"
              v-model="args.date2"
            />
          </FSCol>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Submit"
              @click="() => args.value1 = false"
            />
          </FSRow>
        </template>
      </FSSubmitDialog>
    </div>\`
  })
}`,...(V=(_=S.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const Ze=["Variations","Submit","Remove","ChainedDialogs"];export{S as ChainedDialogs,u as Remove,p as Submit,m as Variations,Ze as __namedExportsOrder,Ye as default};
