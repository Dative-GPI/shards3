import{F as G}from"./FSDateRangeField-81798f77.js";import{F as N}from"./FSDateField-641da6f9.js";import{F as c,b as $}from"./FSCalendarTwin-4f7746d8.js";import{g as H,j as b,H as I,I as K,J as L,W as z,K as t,x as A,z as o,L as i,M as s}from"./vue.esm-bundler-85c2ade9.js";import{_ as O}from"./FSIcon-d4b06799.js";import{_ as n}from"./FSSpan-abd71399.js";import{_ as l}from"./FSCol-caf5d8c8.js";import{_ as r}from"./FSRow-120b21e0.js";import{u as M}from"./css-b4ee648a.js";import{C as P}from"./useColors-4bd4e66b.js";import{u as J}from"./useTranslations-93c8b8c9.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{V as W}from"./VProgressCircular-c268a248.js";import{_ as g}from"./FSButton-571eabbd.js";import{F as d}from"./FSCard-18b81b74.js";import"./FSTextField-5649ea31.js";import"./VField-3df13f61.js";import"./index-0b62f442.js";import"./useRender-22e01882.js";import"./theme-0475544b.js";import"./transition-0e35e3a5.js";import"./VInput-9ba9caf6.js";import"./locale-cdd955a4.js";import"./VIcon-96eed797.js";import"./color-680672dd.js";import"./tag-fd98b684.js";import"./density-1bef1032.js";import"./loader-c17713e4.js";import"./rounded-7d023c25.js";import"./forwardRefs-e658ad70.js";import"./useSlots-58887162.js";import"./VSpacer-fb9707dd.js";import"./VTextField-b1504f7b.js";import"./index-160e8c08.js";import"./useTimeZone-d58059fa.js";import"./FSCalendar-e01c44aa.js";import"./VLocaleProvider-5f2bb9ba.js";import"./date-9290bff4.js";import"./VDefaultsProvider-5f610042.js";import"./VBtn-aa5927a3.js";import"./border-dbc038b8.js";import"./elevation-e7838e5f.js";import"./group-627b1a66.js";import"./dimensions-7d06aea5.js";import"./router-dfa38ec1.js";import"./index-91896434.js";import"./VMenu-21a34864.js";import"./VOverlay-e74fafd8.js";import"./display-d8c4b624.js";import"./lazy-4beaa7f3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./resizeObserver-cbbc033b.js";import"./vue-router-d81a5c9d.js";const j=H({name:"FSRemoveDialog",components:{FSSubmitDialog:c,FSIcon:O,FSSpan:n,FSCol:l,FSRow:r},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:a}=M(),{$tr:F}=J(),v=b(()=>e.removeTotal>1?F("ui.remove-dialog.remove-plural","Remove {0} entities",e.removeTotal.toString()):F("ui.remove-dialog.remove-singular","Remove an entity")),f=b(()=>a.value?"36px":"40px");return{ColorEnum:P,footerHeight:f,title:v}}});function Q(e,a,F,v,f,Y){const q=I("FSSubmitDialog");return K(),L(q,A({rightButtonLabel:e.$tr("ui.button.remove","Remove"),rightButtonColor:e.ColorEnum.Error,title:e.title,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=E=>e.$emit("update:modelValue",E))},e.$attrs),z({body:t(()=>[o(l,{gap:"16px"},{default:t(()=>[o(r,null,{default:t(()=>[o(O,{color:e.ColorEnum.Error},{default:t(()=>[i(" mdi-alert-outline ")]),_:1},8,["color"]),o(r,{gap:"2px"},{default:t(()=>[o(n,null,{default:t(()=>[i(s(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),o(n,{font:"text-button"},{default:t(()=>[i(s(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),o(n,null,{default:t(()=>[i(s(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:t(()=>[o(r,{align:"center-right",height:e.footerHeight},{default:t(()=>[o(n,null,{default:t(()=>[i(s(e.$props.removeCurrent)+" / "+s(e.$props.removeTotal),1)]),_:1}),o(W,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["rightButtonLabel","rightButtonColor","title","modelValue"])}const X=U(j,[["render",Q]]);j.__docgenInfo={displayName:"FSRemoveDialog",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRemoveDialog.vue"]};const Ze={title:"Foundation/Shared/Dialog",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:a})=>({components:{FSDialog:$,FSButton:g,FSCard:d,FSSpan:n,FSCol:l,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(V=(_=S.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const ea=["Variations","Submit","Remove","ChainedDialogs"];export{S as ChainedDialogs,u as Remove,p as Submit,m as Variations,ea as __namedExportsOrder,Ze as default};
