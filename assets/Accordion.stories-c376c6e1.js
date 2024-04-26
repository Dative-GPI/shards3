import{j as w,e as p,x as u,z as t,g as q,C as N,a6 as X,D as Z,p as ee,I as ne,J as m,K as F,L as d,A as ae,R as C,S as T,U as h,N as te,Q as oe,Y as le,v as se,F as ie}from"./vue.esm-bundler-3386cb71.js";import{_ as I}from"./FSIcon-d790d92f.js";import{_ as G}from"./FSSpan-ecd93ab1.js";import{F as R}from"./FSText-81a21680.js";import{_ as D}from"./FSRow-9733beba.js";import{u as re,C as A}from"./useColors-36e524b3.js";import{s as _}from"./css-bcfd232c.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{m as y,g,p as z,u as b}from"./useRender-09edae02.js";import{a as ce,b as de,m as pe,u as ue}from"./group-28a085bd.js";import{m as H,I as k}from"./tag-3fcf7e02.js";import{p as P,F as me,G as fe}from"./theme-620a0d92.js";import{d as xe}from"./index-8c130ea8.js";import{m as W,u as ve}from"./lazy-99e4da96.js";import{b as j}from"./color-2c4e2e53.js";import{R as Se}from"./index-dcfb76a3.js";import{V as Fe}from"./VIcon-abe9af82.js";import{m as ye,u as ge}from"./elevation-cadef23c.js";import{m as be,u as Pe}from"./rounded-1ab8dee0.js";import{u as Te}from"./useSlots-347b7354.js";import{_ as he}from"./FSButton-48dda364.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./proxiedModel-e633c715.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./FSCol-30a69fbd.js";import"./VProgressCircular-14287b05.js";import"./resizeObserver-d0e0f324.js";const K=w({name:"FSAccordionPanel",components:{FSIcon:I,FSSpan:G,FSText:R,FSRow:D},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""}},setup(e){const{getColors:o}=re(),a=o(A.Background),n=o(A.Light);return{style:p(()=>({"--fs-accordion-panel-padding-title":_(e.paddingTitle),"--fs-accordion-panel-padding-content":_(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":a.base}))}}});const f=Symbol.for("vuetify:v-expansion-panel"),Ie=["default","accordion","inset","popout"],Ve=P({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>Ie.includes(e)},readonly:Boolean,...y(),...ce(),...H(),...me()},"VExpansionPanels"),Ce=g()({name:"VExpansionPanels",props:Ve(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;de(e,f);const{themeClasses:n}=fe(e),i=p(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return z({VExpansionPanel:{color:u(e,"color"),readonly:u(e,"readonly")},VExpansionPanelTitle:{focusable:u(e,"focusable"),static:u(e,"static")}}),b(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},n.value,i.value,e.class],style:e.style},a)),{}}}),Ae=P({...y(),...W()},"VExpansionPanelText"),_e=g()({name:"VExpansionPanelText",props:Ae(),setup(e,o){let{slots:a}=o;const n=q(f);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:c}=ve(e,n.isSelected);return b(()=>t(xe,{onAfterLeave:c},{default:()=>{var l;return[N(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&i.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(l=a.default)==null?void 0:l.call(a)])]),[[X,n.isSelected.value]])]}})),{}}}),O=P({color:String,expandIcon:{type:k,default:"$expand"},collapseIcon:{type:k,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...y()},"VExpansionPanelTitle"),ke=g()({name:"VExpansionPanelTitle",directives:{Ripple:Se},props:O(),setup(e,o){let{slots:a}=o;const n=q(f);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:c}=j(e,"color"),l=p(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return b(()=>{var x;return N(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(x=a.default)==null?void 0:x.call(a,l.value),!e.hideActions&&t("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(l.value):t(Fe,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Z("ripple"),e.ripple]])}),{}}}),Ee=P({title:String,text:String,bgColor:String,...y(),...ye(),...pe(),...W(),...be(),...H(),...O()},"VExpansionPanel"),$e=g()({name:"VExpansionPanel",props:Ee(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:a}=o;const n=ue(e,f),{backgroundColorClasses:i,backgroundColorStyles:c}=j(e,"bgColor"),{elevationClasses:l}=ge(e),{roundedClasses:x}=Pe(e),U=p(()=>(n==null?void 0:n.disabled.value)||e.disabled),V=p(()=>n.group.items.value.reduce((r,s,v)=>(n.group.selected.value.includes(s.id)&&r.push(v),r),[])),Y=p(()=>{const r=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&V.value.some(s=>s-r===1)}),M=p(()=>{const r=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&V.value.some(s=>s-r===-1)});return ee(f,n),z({VExpansionPanelText:{eager:u(e,"eager")},VExpansionPanelTitle:{readonly:u(e,"readonly")}}),b(()=>{const r=!!(a.text||e.text),s=!!(a.title||e.title);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":Y.value,"v-expansion-panel--after-active":M.value,"v-expansion-panel--disabled":U.value},x.value,i.value,e.class],style:[c.value,e.style]},{default:()=>{var v;return[t("div",{class:["v-expansion-panel__shadow",...l.value]},null),s&&t(ke,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),r&&t(_e,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(v=a.default)==null?void 0:v.call(a)]}})}),{}}});function Be(e,o,a,n,i,c){const l=ne("FSText");return m(),F($e,ae({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:d(()=>[C(e.$slots,"title",{},()=>[t(D,null,{default:d(()=>[e.$props.prependIcon?(m(),F(I,{key:0},{default:d(()=>[T(h(e.$props.prependIcon),1)]),_:1})):te("",!0),t(G,{class:"fs-accordion-panel-title"},{default:d(()=>[T(h(e.$props.title),1)]),_:1})]),_:1})])]),text:d(()=>[C(e.$slots,"content",{},()=>[t(l,{lineClamp:e.$props.lineClampContent},{default:d(()=>[T(h(e.$props.content),1)]),_:1},8,["lineClamp"])])]),_:3},16,["collapseIcon","expandIcon","style"])}const we=L(K,[["render",Be]]);K.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const J=w({name:"FSAccordion",setup(){const{getChildren:e}=Te();return{getChildren:e}}});function qe(e,o,a,n,i,c){return m(),F(Ce,{variant:"accordion"},{default:d(()=>[(m(!0),oe(ie,null,le(e.getChildren(),l=>(m(),F(se(l)))),256))]),_:1})}const Q=L(J,[["render",qe]]);J.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const un={title:"Foundation/Shared/Accordion",component:Q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={render:()=>({components:{FSAccordion:Q,FSAccordionPanel:we,FSText:R,FSIcon:I,FSButton:he},template:`
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
