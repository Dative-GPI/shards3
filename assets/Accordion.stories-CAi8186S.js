import{c as p,v as u,K as t,i as w,W as q,a1 as Y,X as Z,p as ee,d as N,y as ne,z as m,A as F,B as d,m as ae,L as C,E as T,G as h,D as te,C as oe,P as le,q as ie,F as se}from"./vue.esm-bundler-DUki7rNA.js";import{_ as I}from"./FSIcon-CSwom3lG.js";import{_ as G}from"./FSSpan-DUTdSgpN.js";import{F as D}from"./FSText-CE19e0tM.js";import{_ as R}from"./FSRow-CHgEOZQb.js";import{u as re,C as A}from"./useColors-HWn2iBmk.js";import{s as k}from"./css-BPLLlL3Y.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as y,g,p as z,u as b}from"./useRender-pAH_6Aah.js";import{m as ce,u as de,a as pe,b as ue}from"./group-BFGJGSPe.js";import{m as W,I as _}from"./tag-BAqPjmMA.js";import{p as P,D as me,F as fe}from"./theme-BdipdDNo.js";import{d as xe}from"./index-zNldQLkd.js";import{m as H,u as ve}from"./lazy-CXE1MfIY.js";import{b as K}from"./color-B6JLWHIR.js";import{R as Se}from"./index-IoB6lNSN.js";import{V as Fe}from"./VIcon-BfI5ony8.js";import{m as ye,u as ge}from"./elevation-B5zwTzN8.js";import{m as be,u as Pe}from"./rounded-CuOTz_ni.js";import{u as Te}from"./useSlots-BZu_lZyn.js";import{F as he}from"./FSButton-GE9LRUiN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./proxiedModel-C4hUsKQ6.js";import"./FSClickable-FCUZtikK.js";import"./FSCard-CqpJmiEC.js";import"./FSCol-BBaW1DrL.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";const f=Symbol.for("vuetify:v-expansion-panel"),Ie=["default","accordion","inset","popout"],Ve=P({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>Ie.includes(e)},readonly:Boolean,...y(),...ce(),...W(),...me()},"VExpansionPanels"),Ce=g()({name:"VExpansionPanels",props:Ve(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;de(e,f);const{themeClasses:n}=fe(e),s=p(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return z({VExpansionPanel:{color:u(e,"color"),readonly:u(e,"readonly")},VExpansionPanelTitle:{focusable:u(e,"focusable"),static:u(e,"static")}}),b(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},n.value,s.value,e.class],style:e.style},a)),{}}}),Ae=P({...y(),...H()},"VExpansionPanelText"),ke=g()({name:"VExpansionPanelText",props:Ae(),setup(e,o){let{slots:a}=o;const n=w(f);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:c}=ve(e,n.isSelected);return b(()=>t(xe,{onAfterLeave:c},{default:()=>{var l;return[q(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&s.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(l=a.default)==null?void 0:l.call(a)])]),[[Y,n.isSelected.value]])]}})),{}}}),j=P({color:String,expandIcon:{type:_,default:"$expand"},collapseIcon:{type:_,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...y()},"VExpansionPanelTitle"),_e=g()({name:"VExpansionPanelTitle",directives:{Ripple:Se},props:j(),setup(e,o){let{slots:a}=o;const n=w(f);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:c}=K(e,"color"),l=p(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return b(()=>{var x;return q(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(x=a.default)==null?void 0:x.call(a,l.value),!e.hideActions&&t("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(l.value):t(Fe,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Z("ripple"),e.ripple]])}),{}}}),Ee=P({title:String,text:String,bgColor:String,...y(),...ye(),...pe(),...H(),...be(),...W(),...j()},"VExpansionPanel"),$e=g()({name:"VExpansionPanel",props:Ee(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:a}=o;const n=ue(e,f),{backgroundColorClasses:s,backgroundColorStyles:c}=K(e,"bgColor"),{elevationClasses:l}=ge(e),{roundedClasses:x}=Pe(e),M=p(()=>(n==null?void 0:n.disabled.value)||e.disabled),V=p(()=>n.group.items.value.reduce((r,i,v)=>(n.group.selected.value.includes(i.id)&&r.push(v),r),[])),Q=p(()=>{const r=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&V.value.some(i=>i-r===1)}),U=p(()=>{const r=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&V.value.some(i=>i-r===-1)});return ee(f,n),z({VExpansionPanelText:{eager:u(e,"eager")},VExpansionPanelTitle:{readonly:u(e,"readonly")}}),b(()=>{const r=!!(a.text||e.text),i=!!(a.title||e.title);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":Q.value,"v-expansion-panel--after-active":U.value,"v-expansion-panel--disabled":M.value},x.value,s.value,e.class],style:[c.value,e.style]},{default:()=>{var v;return[t("div",{class:["v-expansion-panel__shadow",...l.value]},null),i&&t(_e,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),r&&t(ke,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(v=a.default)==null?void 0:v.call(a)]}})}),{}}}),O=N({name:"FSAccordionPanel",components:{FSIcon:I,FSSpan:G,FSText:D,FSRow:R},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""}},setup(e){const{getColors:o}=re(),a=o(A.Background),n=o(A.Light);return{style:p(()=>({"--fs-accordion-panel-padding-title":k(e.paddingTitle),"--fs-accordion-panel-padding-content":k(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":a.base}))}}});function Be(e,o,a,n,s,c){const l=ne("FSText");return m(),F($e,ae({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:d(()=>[C(e.$slots,"title",{},()=>[t(R,null,{default:d(()=>[e.$props.prependIcon?(m(),F(I,{key:0},{default:d(()=>[T(h(e.$props.prependIcon),1)]),_:1})):te("",!0),t(G,{class:"fs-accordion-panel-title"},{default:d(()=>[T(h(e.$props.title),1)]),_:1})]),_:1})])]),text:d(()=>[C(e.$slots,"content",{},()=>[t(l,{lineClamp:e.$props.lineClampContent},{default:d(()=>[T(h(e.$props.content),1)]),_:1},8,["lineClamp"])])]),_:3},16,["collapseIcon","expandIcon","style"])}const we=L(O,[["render",Be]]);O.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const X=N({name:"FSAccordion",setup(){const{getChildren:e}=Te();return{getChildren:e}}});function qe(e,o,a,n,s,c){return m(),F(Ce,{variant:"accordion"},{default:d(()=>[(m(!0),oe(se,null,le(e.getChildren(),l=>(m(),F(ie(l)))),256))]),_:1})}const J=L(X,[["render",qe]]);X.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const un={title:"Foundation/Shared/Accordion",component:J,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={render:()=>({components:{FSAccordion:J,FSAccordionPanel:we,FSText:D,FSIcon:I,FSButton:he},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSAccordion>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    First panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-emoticon-cool-outline
                  </FSIcon>
                  <FSText>
                    Hello there
                  </FSText>
                </template>
            </FSAccordionPanel>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    Second panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-robot-angry-outline
                  </FSIcon>
                  <FSText>
                    General kenobi
                  </FSText>
                  <FSButton
                    label="Click here to see more"
                  />
                </template>
            </FSAccordionPanel>
        </FSAccordion>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSAccordion>
            <FSAccordionPanel
              title="First panel"
              content="Hello there"
            />
            <FSAccordionPanel
              title="Second panel"
              content="General Kenobi"
            />
        </FSAccordion>
      </div>
    </div>`})};var E,$,B;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSAccordion,
      FSAccordionPanel,
      FSText,
      FSIcon,
      FSButton
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSAccordion>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    First panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-emoticon-cool-outline
                  </FSIcon>
                  <FSText>
                    Hello there
                  </FSText>
                </template>
            </FSAccordionPanel>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    Second panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-robot-angry-outline
                  </FSIcon>
                  <FSText>
                    General kenobi
                  </FSText>
                  <FSButton
                    label="Click here to see more"
                  />
                </template>
            </FSAccordionPanel>
        </FSAccordion>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSAccordion>
            <FSAccordionPanel
              title="First panel"
              content="Hello there"
            />
            <FSAccordionPanel
              title="Second panel"
              content="General Kenobi"
            />
        </FSAccordion>
      </div>
    </div>\`
  })
}`,...(B=($=S.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const mn=["Variations"];export{S as Variations,mn as __namedExportsOrder,un as default};
