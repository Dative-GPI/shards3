import{g as w,j as p,E as m,z as t,f as q,A as N,a4 as X,B as Z,p as ee,J as ne,K as f,L as F,M as d,x as ae,R as C,N as T,O as h,P as te,Q as oe,Y as le,D as se,F as ie}from"./vue.esm-bundler-a6679ce1.js";import{_ as I}from"./FSIcon-1a3e04ae.js";import{_ as R}from"./FSSpan-e5b0fe90.js";import{F as G}from"./FSText-3a5d632d.js";import{_ as D}from"./FSRow-cccb539d.js";import{u as re,C as A}from"./useColors-7bfbb133.js";import{s as k}from"./css-39e888cb.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{m as y,g,p as z,u as P}from"./useRender-af29532b.js";import{a as ce,b as de,m as pe,u as ue}from"./group-a71d090a.js";import{m as H,I as _}from"./tag-c6e00dba.js";import{p as b,y as me,z as fe}from"./theme-8c0eb56d.js";import{d as xe}from"./index-3965c569.js";import{m as W,u as ve}from"./lazy-05051c22.js";import{b as j}from"./color-3a7410fc.js";import{R as Se}from"./index-9e1e9b7b.js";import{V as Fe}from"./VIcon-8b39f3af.js";import{m as ye,u as ge}from"./elevation-643b3bb1.js";import{m as Pe,u as be}from"./rounded-289ab918.js";import{u as Te}from"./useSlots-decb0027.js";import{F as he}from"./FSButton-638d073a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./proxiedModel-8c3bd5c0.js";import"./vue-router-c202c6d9.js";import"./FSCard-3545869e.js";import"./FSCol-c92bf913.js";import"./VProgressCircular-f3d28a40.js";import"./intersectionObserver-68b7d7a3.js";import"./resizeObserver-692bfe96.js";const K=w({name:"FSAccordionPanel",components:{FSIcon:I,FSSpan:R,FSText:G,FSRow:D},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""}},setup(e){const{getColors:o}=re(),a=o(A.Background),n=o(A.Light);return{style:p(()=>({"--fs-accordion-panel-padding-title":k(e.paddingTitle),"--fs-accordion-panel-padding-content":k(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":a.base}))}}});const x=Symbol.for("vuetify:v-expansion-panel"),Ie=["default","accordion","inset","popout"],Ve=b({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>Ie.includes(e)},readonly:Boolean,...y(),...ce(),...H(),...me()},"VExpansionPanels"),Ce=g()({name:"VExpansionPanels",props:Ve(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;de(e,x);const{themeClasses:n}=fe(e),i=p(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return z({VExpansionPanel:{color:m(e,"color"),readonly:m(e,"readonly")},VExpansionPanelTitle:{focusable:m(e,"focusable"),static:m(e,"static")}}),P(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},n.value,i.value,e.class],style:e.style},a)),{}}}),Ae=b({...y(),...W()},"VExpansionPanelText"),ke=g()({name:"VExpansionPanelText",props:Ae(),setup(e,o){let{slots:a}=o;const n=q(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:c}=ve(e,n.isSelected);return P(()=>t(xe,{onAfterLeave:c},{default:()=>{var l;return[N(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&i.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(l=a.default)==null?void 0:l.call(a)])]),[[X,n.isSelected.value]])]}})),{}}}),O=b({color:String,expandIcon:{type:_,default:"$expand"},collapseIcon:{type:_,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...y()},"VExpansionPanelTitle"),_e=g()({name:"VExpansionPanelTitle",directives:{Ripple:Se},props:O(),setup(e,o){let{slots:a}=o;const n=q(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:c}=j(e,"color"),l=p(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return P(()=>{var u;return N(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(u=a.default)==null?void 0:u.call(a,l.value),!e.hideActions&&t("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(l.value):t(Fe,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Z("ripple"),e.ripple]])}),{}}}),Ee=b({title:String,text:String,bgColor:String,...y(),...ye(),...pe(),...W(),...Pe(),...H(),...O()},"VExpansionPanel"),$e=g()({name:"VExpansionPanel",props:Ee(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:a}=o;const n=ue(e,x),{backgroundColorClasses:i,backgroundColorStyles:c}=j(e,"bgColor"),{elevationClasses:l}=ge(e),{roundedClasses:u}=be(e),Q=p(()=>(n==null?void 0:n.disabled.value)||e.disabled),V=p(()=>n.group.items.value.reduce((r,s,v)=>(n.group.selected.value.includes(s.id)&&r.push(v),r),[])),Y=p(()=>{const r=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&V.value.some(s=>s-r===1)}),U=p(()=>{const r=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&V.value.some(s=>s-r===-1)});return ee(x,n),z({VExpansionPanelText:{eager:m(e,"eager")},VExpansionPanelTitle:{readonly:m(e,"readonly")}}),P(()=>{const r=!!(a.text||e.text),s=!!(a.title||e.title);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":Y.value,"v-expansion-panel--after-active":U.value,"v-expansion-panel--disabled":Q.value},u.value,i.value,e.class],style:[c.value,e.style]},{default:()=>{var v;return[t("div",{class:["v-expansion-panel__shadow",...l.value]},null),s&&t(_e,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),r&&t(ke,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(v=a.default)==null?void 0:v.call(a)]}})}),{}}});function Be(e,o,a,n,i,c){const l=ne("FSText");return f(),F($e,ae({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:d(()=>[C(e.$slots,"title",{},()=>[t(D,null,{default:d(()=>[e.$props.prependIcon?(f(),F(I,{key:0},{default:d(()=>[T(h(e.$props.prependIcon),1)]),_:1})):te("",!0),t(R,{class:"fs-accordion-panel-title"},{default:d(()=>[T(h(e.$props.title),1)]),_:1})]),_:1})])]),text:d(()=>[C(e.$slots,"content",{},()=>[t(l,{lineClamp:e.$props.lineClampContent},{default:d(()=>[T(h(e.$props.content),1)]),_:1},8,["lineClamp"])])]),_:3},16,["collapseIcon","expandIcon","style"])}const we=L(K,[["render",Be]]);K.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const J=w({name:"FSAccordion",setup(){const{getChildren:e}=Te();return{getChildren:e}}});function qe(e,o,a,n,i,c){return f(),F(Ce,{variant:"accordion"},{default:d(()=>[(f(!0),oe(ie,null,le(e.getChildren(),(l,u)=>(f(),F(se(l),{key:u}))),128))]),_:1})}const M=L(J,[["render",qe]]);J.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const mn={title:"Foundation/Shared/Accordion",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={render:()=>({components:{FSAccordion:M,FSAccordionPanel:we,FSText:G,FSIcon:I,FSButton:he},template:`
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
}`,...(B=($=S.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const fn=["Variations"];export{S as Variations,fn as __namedExportsOrder,mn as default};
