import{d as f,y as v,z as w,A as V,B as y,O as B,m as h,C as R,K as _,L,M as k}from"./vue.esm-bundler-CWdIlc2r.js";import{F as x}from"./FSBaseView-BTu2r6J8.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-BZ5yhleZ.js";import{F as c}from"./FSLoader-DxfJongP.js";import{F as u}from"./FSCol-Bj1WIVag.js";import"./FSRow-D4JfwQlG.js";import"./css-DVhR3h-A.js";import"./FSText-BxoWgsr8.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./useSlots-zwOl0abH.js";import"./FSBreadcrumbs-DPj5Dezh.js";import"./FSSpan-DpOLTsx1.js";import"./FSIcon-vAlkpflo.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./router-lEm-a6ws.js";import"./density-Cf5q3L_6.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./FSSlideGroup-CcLnrzQE.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./FSButton-C5MQI7ea.js";import"./FSClickable-D_ads5r5.js";import"./FSCard-D8qRc7rc.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./index-D2mfwXxT.js";import"./display-4460MzAg.js";import"./locale-BGMMnFfJ.js";import"./FSFadeOut-wBxXm2Rc.js";import"./FSImage-D-VbLOPJ.js";import"./FSImageUI-D64m-s1x.js";import"./VImg-Bj7MyRJQ.js";import"./dimensions-Cku-Ba4r.js";import"./transition-BvKGRC-_.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSIconCard-TnxQlSY2.js";import"./elevation-DH_sKWqU.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function A(e,t,I,M,Z,$){const g=v("FSBaseView");return w(),V(g,h({variant:"default"},e.$attrs),y({_:2},[B(e.$slots,(j,i)=>({name:i,fn:R(b=>[_(e.$slots,i,L(k(b)))])}))]),1040)}const n=D(C,[["render",A]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const $e={title:"Foundation/Shared/views/SimpleView",component:n,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:d,FSButtonRemove:F,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSSimpleView v-bind="args">
        <template #toolbar>
          <FSButtonEdit />
          <FSButtonRemove />
        </template>

        <FSCol gap="32px">
          <template v-for="n in 5" :key="n">
            <FSCol gap="16px">
              <FSLoader variant="text-h3" />
              <FSCol>
                <FSLoader v-for="j in 4" variant="text-body" />
              </FSCol>
            </FSCol>
          </template>
        </FSCol>
      </FSSimpleView>
    `})},r={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:d,FSButtonRemove:F,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSSimpleView v-bind="args">
        <FSCol height="fill" style="background-color: purple;">
        </FSCol>
      </FSSimpleView>
    `})};var p,a,s;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
    breadcrumbs: [{
      title: 'Lorem',
      to: '/'
    }, {
      title: 'MIZAR CDC',
      disabled: true
    }]
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSimpleView,
      FSButtonEdit,
      FSButtonRemove,
      FSLoader,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleView v-bind="args">
        <template #toolbar>
          <FSButtonEdit />
          <FSButtonRemove />
        </template>

        <FSCol gap="32px">
          <template v-for="n in 5" :key="n">
            <FSCol gap="16px">
              <FSLoader variant="text-h3" />
              <FSCol>
                <FSLoader v-for="j in 4" variant="text-body" />
              </FSCol>
            </FSCol>
          </template>
        </FSCol>
      </FSSimpleView>
    \`
  })
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var m,l,S;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
    breadcrumbs: [{
      title: 'Lorem',
      to: '/'
    }, {
      title: 'MIZAR CDC',
      disabled: true
    }]
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSimpleView,
      FSButtonEdit,
      FSButtonRemove,
      FSLoader,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleView v-bind="args">
        <FSCol height="fill" style="background-color: purple;">
        </FSCol>
      </FSSimpleView>
    \`
  })
}`,...(S=(l=r.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};const je=["Default","Classic"];export{r as Classic,o as Default,je as __namedExportsOrder,$e as default};
