import{g as w,j as d,E as m,z as o,f as B,A as q,a4 as U,B as X,p as Y,J as ee,K as f,L as F,M as p,x as ne,R as k,N as h,O as T,P as ae,Q as oe,Z as te,D as le,F as se}from"./vue.esm-bundler-0a1af505.js";import{_ as V}from"./FSIcon-61d2f8ac.js";import{_ as R}from"./FSSpan-50615fe3.js";import{F as N}from"./FSText-fa675dd3.js";import{_ as D}from"./FSRow-f7e9ea33.js";import{C as I,u as ie}from"./useColors-1745df70.js";import{s as re}from"./css-403c87e6.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{m as y,g,p as L,u as b}from"./useRender-76465e3d.js";import{a as ce,b as de,m as pe,u as ue}from"./group-197554d7.js";import{m as z,I as _}from"./tag-6ffe4ba6.js";import{p as P,x as me,y as fe}from"./theme-8d83670f.js";import{d as xe}from"./index-9b6ba610.js";import{m as H,u as ve}from"./lazy-2c8cbded.js";import{b as W}from"./color-84472fbe.js";import{R as Se}from"./index-ee92f8e8.js";import{V as Fe}from"./VIcon-4501998f.js";import{m as ye,u as ge}from"./elevation-68e8c545.js";import{m as be,u as Pe}from"./rounded-caec20b0.js";import{u as he}from"./useSlots-de2ef136.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./proxiedModel-350eff8d.js";const j=w({name:"FSAccordionPanel",components:{FSIcon:V,FSSpan:R,FSText:N,FSRow:D},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"},divider:{type:Boolean,required:!1,default:!1},expandIcon:{type:String,required:!1,default:"mdi-chevron-down"},collapseIcon:{type:String,required:!1,default:"mdi-chevron-up"},color:{type:String,required:!1,default:I.Primary}},setup(e){const{getColors:t}=ie(),a=d(()=>t(e.color)),n=t(I.Background),l=t(I.Dark);return{style:d(()=>({"--fs-accordion-panel-border-radius":re(e.borderRadius),"--fs-accordion-panel-border-size":e.divider?"1px":"0","--fs-accordion-panel-border-color":l.base,"--fs-accordion-panel-background-color":n.base,"--fs-accordion-panel-color":l.base,"--fs-accordion-panel-hover-background-color":a.value.light,"--fs-accordion-panel-hover-color":a.value.base}))}}});const x=Symbol.for("vuetify:v-expansion-panel"),Te=["default","accordion","inset","popout"],Ie=P({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>Te.includes(e)},readonly:Boolean,...y(),...ce(),...z(),...me()},"VExpansionPanels"),Ve=g()({name:"VExpansionPanels",props:Ie(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;de(e,x);const{themeClasses:n}=fe(e),l=d(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return L({VExpansionPanel:{color:m(e,"color"),readonly:m(e,"readonly")},VExpansionPanelTitle:{focusable:m(e,"focusable"),static:m(e,"static")}}),b(()=>o(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},n.value,l.value,e.class],style:e.style},a)),{}}}),Ae=P({...y(),...H()},"VExpansionPanelText"),ke=g()({name:"VExpansionPanelText",props:Ae(),setup(e,t){let{slots:a}=t;const n=B(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:l,onAfterLeave:r}=ve(e,n.isSelected);return b(()=>o(xe,{onAfterLeave:r},{default:()=>{var s;return[q(o("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&l.value&&o("div",{class:"v-expansion-panel-text__wrapper"},[(s=a.default)==null?void 0:s.call(a)])]),[[U,n.isSelected.value]])]}})),{}}}),K=P({color:String,expandIcon:{type:_,default:"$expand"},collapseIcon:{type:_,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...y()},"VExpansionPanelTitle"),_e=g()({name:"VExpansionPanelTitle",directives:{Ripple:Se},props:K(),setup(e,t){let{slots:a}=t;const n=B(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:l,backgroundColorStyles:r}=W(e,"color"),s=d(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return b(()=>{var u;return q(o("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},l.value,e.class],style:[r.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[o("span",{class:"v-expansion-panel-title__overlay"},null),(u=a.default)==null?void 0:u.call(a,s.value),!e.hideActions&&o("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(s.value):o(Fe,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[X("ripple"),e.ripple]])}),{}}}),Ee=P({title:String,text:String,bgColor:String,...y(),...ye(),...pe(),...H(),...be(),...z(),...K()},"VExpansionPanel"),Ce=g()({name:"VExpansionPanel",props:Ee(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t;const n=ue(e,x),{backgroundColorClasses:l,backgroundColorStyles:r}=W(e,"bgColor"),{elevationClasses:s}=ge(e),{roundedClasses:u}=Pe(e),M=d(()=>(n==null?void 0:n.disabled.value)||e.disabled),A=d(()=>n.group.items.value.reduce((c,i,v)=>(n.group.selected.value.includes(i.id)&&c.push(v),c),[])),Q=d(()=>{const c=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&A.value.some(i=>i-c===1)}),Z=d(()=>{const c=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&A.value.some(i=>i-c===-1)});return Y(x,n),L({VExpansionPanelText:{eager:m(e,"eager")},VExpansionPanelTitle:{readonly:m(e,"readonly")}}),b(()=>{const c=!!(a.text||e.text),i=!!(a.title||e.title);return o(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":Q.value,"v-expansion-panel--after-active":Z.value,"v-expansion-panel--disabled":M.value},u.value,l.value,e.class],style:[r.value,e.style]},{default:()=>{var v;return[o("div",{class:["v-expansion-panel__shadow",...s.value]},null),i&&o(_e,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),c&&o(ke,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(v=a.default)==null?void 0:v.call(a)]}})}),{}}});function $e(e,t,a,n,l,r){const s=ee("FSText");return f(),F(Ce,ne({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:p(()=>[k(e.$slots,"title",{},()=>[o(D,null,{default:p(()=>[e.$props.prependIcon?(f(),F(V,{key:0},{default:p(()=>[h(T(e.$props.prependIcon),1)]),_:1})):ae("",!0),o(R,{class:"fs-accordion-panel-title"},{default:p(()=>[h(T(e.$props.title),1)]),_:1})]),_:1})])]),text:p(()=>[k(e.$slots,"content",{},()=>[o(s,null,{default:p(()=>[h(T(e.$props.content),1)]),_:1})])]),_:3},16,["collapseIcon","expandIcon","style"])}const we=G(j,[["render",$e]]);j.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-chevron-down"'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-chevron-up"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const O=w({name:"FSAccordion",setup(){const{getChildren:e}=he();return{getChildren:e}}});function Be(e,t,a,n,l,r){return f(),F(Ve,{variant:"accordion"},{default:p(()=>[(f(!0),oe(se,null,te(e.getChildren(),(s,u)=>(f(),F(le(s),{key:u}))),128))]),_:1})}const J=G(O,[["render",Be]]);O.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const tn={title:"Foundation/Shared/Accordion",component:J,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={render:()=>({components:{FSAccordion:J,FSAccordionPanel:we,FSText:N,FSIcon:V},template:`
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
    </div>`})};var E,C,$;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSAccordion,
      FSAccordionPanel,
      FSText,
      FSIcon
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
}`,...($=(C=S.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};const ln=["Variations"];export{S as Variations,ln as __namedExportsOrder,tn as default};
