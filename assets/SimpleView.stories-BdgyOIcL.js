import{d as f,y as v,z as w,A as y,M as V,N as B,m as h,B as R,I as _,J as L,K as k}from"./vue.esm-bundler-DjjVIdVI.js";import{F as x}from"./FSBaseView-D-IP4v2h.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as S,a as F}from"./FSButtonRemove-DQkJ49jv.js";import{F as c}from"./FSLoader-DpMpI5Qw.js";import{F as u}from"./FSCol-TPWSQPHs.js";import"./FSRow-CmD7j8Pv.js";import"./css-BkQhD285.js";import"./FSText-Der-WemT.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./useSlots-DzSo5JdB.js";import"./FSBreadcrumbs-BsrLIGZq.js";import"./FSSpan-D1pceTli.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./color-BKGJvBEr.js";import"./tag-DT601Ssr.js";import"./router-Cjjv2JN-.js";import"./density-BPFRY_Tg.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./FSSlideGroup-DWVYRyaA.js";import"./uuid-DTaye2KM.js";import"./FSButton-DMlgbucp.js";import"./FSClickable-DB3UYOUU.js";import"./FSCard-CXVJHnbm.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./index-DOC0sH28.js";import"./display-CRYv_UDL.js";import"./locale-Dn84bpGK.js";import"./FSFadeOut-LZYxqpYZ.js";import"./FSImage-C5YJvBfA.js";import"./FSImageUI-DCipACiG.js";import"./VImg-IVf3xxVd.js";import"./dimensions-DBrW1AO_.js";import"./transition-C6adUwH7.js";import"./index-Cc8xmT7Y.js";import"./useImages-CM9GOyc5.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CNptecSH.js";import"./FSIconCard-CxtknvXY.js";import"./elevation-kEG7tFkj.js";const C=f({name:"FSEntityView",components:{FSBaseView:x}});function I(e,t,A,M,E,Z){const g=v("FSBaseView");return w(),y(g,h({variant:"default"},e.$attrs),V({_:2},[B(e.$slots,($,i)=>({name:i,fn:R(b=>[_(e.$slots,i,L(k(b)))])}))]),1040)}const n=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSEntityView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const Ee={title:"Foundation/Shared/views/SimpleView",component:n,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:S,FSButtonRemove:F,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
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
    `})},r={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:S,FSButtonRemove:F,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSSimpleView v-bind="args">
        <FSCol height="fill" style="background-color: purple;">
        </FSCol>
      </FSSimpleView>
    `})};var a,p,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(p=o.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const Ze=["Default","Classic"];export{r as Classic,o as Default,Ze as __namedExportsOrder,Ee as default};
