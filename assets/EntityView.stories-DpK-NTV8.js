import{d as b,y as B,z as V,A as k,M as x,N as w,m as E,B as I,I as h,J as A,K as D}from"./vue.esm-bundler-DjjVIdVI.js";import{F as _}from"./FSBaseView-_oaz3HRs.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as L,a as M}from"./FSButtonRemove-B94lr5Ss.js";import{F as j}from"./FSLoader-DpMpI5Qw.js";import{F as Z}from"./FSCol-TPWSQPHs.js";import{C as a}from"./useColors-CdvgF10X.js";import{V as y}from"./VDivider-B14F5Dqy.js";import"./FSRow-CmD7j8Pv.js";import"./css-BkQhD285.js";import"./FSText-Der-WemT.js";import"./useSlots-DzSo5JdB.js";import"./FSBreadcrumbs-BsrLIGZq.js";import"./FSSpan-D1pceTli.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./color-BKGJvBEr.js";import"./theme-v7reDO7s.js";import"./tag-DT601Ssr.js";import"./router-Cjjv2JN-.js";import"./density-BPFRY_Tg.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./FSSlideGroup-CN6cFKLz.js";import"./uuid-DTaye2KM.js";import"./FSButton-DD-NIQC1.js";import"./FSClickable-6DicpEF8.js";import"./FSCard-_NwrZC8j.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./index-DOC0sH28.js";import"./display-CRYv_UDL.js";import"./locale-Dn84bpGK.js";import"./FSFadeOut-DtBOlAO7.js";import"./FSImage-C5YJvBfA.js";import"./FSImageUI-DCipACiG.js";import"./VImg-IVf3xxVd.js";import"./dimensions-DBrW1AO_.js";import"./transition-C6adUwH7.js";import"./index-Cc8xmT7Y.js";import"./useImages-CM9GOyc5.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CNptecSH.js";import"./FSIconCard-B__5KBs0.js";import"./elevation-kEG7tFkj.js";import"./index-DfSX31J9.js";import"./theme-B9e2ZH_T.js";const v=b({name:"FSEntityView",components:{FSBaseView:_}});function O(o,e,P,T,$,z){const S=B("FSBaseView");return V(),k(S,E({variant:"entity"},o.$attrs),x({_:2},[w(o.$slots,(N,s)=>({name:s,fn:I(f=>[h(o.$slots,s,A(D(f)))])}))]),1040)}const i=R(v,[["render",O]]);v.__docgenInfo={displayName:"FSEntityView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityView.vue"]};const qo={title:"Foundation/Shared/views/EntityView",component:i,tags:["autodocs"],argTypes:{}},n={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:"Description d'un four Mizar sous Lorem Ipsum en maquettes.",imageId:"1",imageCover:!0,icon:"mdi-chemical-weapon",color:a.Primary,iconBackgroundColors:void 0,breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(o,{argTypes:e})=>({components:{FSEntityView:i,FSButtonEdit:L,FSButtonRemove:M,FSLoader:j,FSCol:Z},props:Object.keys(e),setup(){return{args:o}},template:`
        <FSEntityView v-bind="args">
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
        </FSEntityView>
      `})},r={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:a.Primary,iconBackgroundColors:void 0},render:(o,{argTypes:e})=>({components:{VDivider:y,FSEntityView:i},props:Object.keys(e),setup(){return{args:o}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
        />
      </div>
    </div>`})},t={args:{title:"MIZAR CDC With a longer title",subtitle:null,description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:a.Error,iconBackgroundColors:["#A0FFA0","#A0A0FF"],iconBackgroundVariant:"gradient"},render:(o,{argTypes:e})=>({components:{VDivider:y,FSEntityView:i},props:Object.keys(e),setup(){return{args:o}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
          :iconBackgroundVariant="args.iconBackgroundVariant"
        />
      </div>
    </div>`})};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    description: 'Description d\\'un four Mizar sous Lorem Ipsum en maquettes.',
    imageId: '1',
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Primary,
    iconBackgroundColors: undefined,
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
      FSEntityView,
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
        <FSEntityView v-bind="args">
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
        </FSEntityView>
      \`
  })
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    description: null,
    imageId: null,
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Primary,
    iconBackgroundColors: undefined
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VDivider,
      FSEntityView
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
        />
      </div>
    </div>\`
  })
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,C,F;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC With a longer title',
    subtitle: null,
    description: null,
    imageId: null,
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Error,
    iconBackgroundColors: ['#A0FFA0', '#A0A0FF'],
    iconBackgroundVariant: 'gradient'
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VDivider,
      FSEntityView
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
          :iconBackgroundVariant="args.iconBackgroundVariant"
        />
      </div>
    </div>\`
  })
}`,...(F=(C=t.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const Wo=["Default","Variation1","Variation2"];export{n as Default,r as Variation1,t as Variation2,Wo as __namedExportsOrder,qo as default};
