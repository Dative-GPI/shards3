import{d as f,A as v,B as w,C as V,Q as y,j as B,I as h,D as R,M as _,N as L,O as k}from"./vue.esm-bundler-DSwHwgKw.js";import{F as x}from"./FSBaseView-C4eRxfgh.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-jmR31tNq.js";import{F as c}from"./FSLoader-CB4bV0N-.js";import{F as u}from"./FSCol-DdGVae5t.js";import"./FSRow-BtkEywPN.js";import"./css-XXwFKvUE.js";import"./useBreakpoints-BjF6TIJH.js";import"./FSText-DiZ1SltH.js";import"./useColors-C4EmrkDp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-4AjdAhIV.js";import"./useSlots-CKCq4R6P.js";import"./FSBreadcrumbs-gjMuKvFZ.js";import"./FSSpan-BoXQ4lG9.js";import"./FSIcon-TpFvudaY.js";import"./VIcon-CdjjMQ6V.js";import"./color-uBYwhjku.js";import"./router-C4I-dA4c.js";import"./density-BfjPyHiq.js";import"./rounded-ZilIy1Oq.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./FSSlideGroup-DmKSX9y1.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DY9rJY5p.js";import"./FSButton-CN1ZIktz.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-Dg_E4dui.js";import"./FSCard-Dby8iWqU.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./proxiedModel-D4Pgijkw.js";import"./index-GTe7atjb.js";import"./display-CL7KZq5h.js";import"./locale-BsRwbRmi.js";import"./FSFadeOut-CQmN3qQC.js";import"./FSImage-Bn2aaMvR.js";import"./FSImageUI-BP1ruBGV.js";import"./VImg-DSalXW5F.js";import"./dimensions-CF0PFV-D.js";import"./transition--2cAMn_j.js";import"./index-D4rR88Q2.js";import"./imageDetails-B1Ivd7HU.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BC5Ev-17.js";import"./useAppAuthToken-BCmX_25A.js";import"./FSIconCard-B6bybjid.js";import"./elevation-DiTecsj1.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function I(e,t,A,M,Z,j){const g=v("FSBaseView");return h(),w(g,B({variant:"default"},e.$attrs),V({_:2},[y(e.$slots,($,i)=>({name:i,fn:R(b=>[_(e.$slots,i,L(k(b)))])}))]),1040)}const n=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const Oe={title:"Foundation/Shared/views/SimpleView",component:n,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:d,FSButtonRemove:F,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
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
    `})};var p,a,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var s,l,S;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(S=(l=r.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};const Te=["Default","Classic"];export{r as Classic,o as Default,Te as __namedExportsOrder,Oe as default};
