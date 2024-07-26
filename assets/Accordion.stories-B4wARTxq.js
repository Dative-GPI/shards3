import{c as p,l as m,I as t,i as w,X as q,a1 as U,Y as Z,p as ee,d as N,y as ne,z as f,A as F,B as d,m as ae,J as C,E as T,G as h,D as te,C as oe,N as le,k as se,F as ie}from"./vue.esm-bundler-DC82FEWN.js";import{_ as I}from"./FSIcon-P4x4c-RP.js";import{_ as G}from"./FSSpan-CwfDYIua.js";import{F as R}from"./FSText-xgcCPmKK.js";import{_ as D}from"./FSRow-DoCXWKDP.js";import{u as re,C as A}from"./useColors-DQLHFhAZ.js";import{s as k}from"./css-DYOPUjjE.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as y,g,p as z,u as b,c as H}from"./color-DvJT0EEa.js";import{m as ce,u as de,a as pe,b as ue}from"./group-szJg_hPo.js";import{m as W,I as _,V as me}from"./VIcon-Dc-dFojD.js";import{p as P,r as fe,y as xe}from"./theme-B5x8xkbY.js";import{d as ve}from"./index-CvDsTioR.js";import{m as j,u as Se}from"./lazy-Cw6rrZWC.js";import{R as Fe}from"./index-9jSorrJj.js";import{m as ye,u as ge}from"./elevation-BTkUCD39.js";import{m as be,u as Pe}from"./rounded-YB6K8mOp.js";import{u as Te}from"./useSlots-V2mVelz6.js";import{F as he}from"./FSButton-DUJqknbG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./proxiedModel-slW9zgh3.js";import"./FSClickable-DJmL8jbB.js";import"./FSCard-2tgenx2C.js";import"./FSCol-B7HQy3FB.js";import"./VProgressCircular-C-U4HXtE.js";const x=Symbol.for("vuetify:v-expansion-panel"),Ie=["default","accordion","inset","popout"],Ve=P({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>Ie.includes(e)},readonly:Boolean,...y(),...ce(),...W(),...fe()},"VExpansionPanels"),Ce=g()({name:"VExpansionPanels",props:Ve(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;de(e,x);const{themeClasses:n}=xe(e),i=p(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return z({VExpansionPanel:{color:m(e,"color"),readonly:m(e,"readonly")},VExpansionPanelTitle:{focusable:m(e,"focusable"),static:m(e,"static")}}),b(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},n.value,i.value,e.class],style:e.style},a)),{}}}),Ae=P({...y(),...j()},"VExpansionPanelText"),ke=g()({name:"VExpansionPanelText",props:Ae(),setup(e,o){let{slots:a}=o;const n=w(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:c}=Se(e,n.isSelected);return b(()=>t(ve,{onAfterLeave:c},{default:()=>{var l;return[q(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&i.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(l=a.default)==null?void 0:l.call(a)])]),[[U,n.isSelected.value]])]}})),{}}}),K=P({color:String,expandIcon:{type:_,default:"$expand"},collapseIcon:{type:_,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...y()},"VExpansionPanelTitle"),_e=g()({name:"VExpansionPanelTitle",directives:{Ripple:Fe},props:K(),setup(e,o){let{slots:a}=o;const n=w(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:c}=H(e,"color"),l=p(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return b(()=>{var u;return q(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(u=a.default)==null?void 0:u.call(a,l.value),!e.hideActions&&t("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(l.value):t(me,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Z("ripple"),e.ripple]])}),{}}}),Ee=P({title:String,text:String,bgColor:String,...y(),...ye(),...pe(),...j(),...be(),...W(),...K()},"VExpansionPanel"),$e=g()({name:"VExpansionPanel",props:Ee(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:a}=o;const n=ue(e,x),{backgroundColorClasses:i,backgroundColorStyles:c}=H(e,"bgColor"),{elevationClasses:l}=ge(e),{roundedClasses:u}=Pe(e),Y=p(()=>(n==null?void 0:n.disabled.value)||e.disabled),V=p(()=>n.group.items.value.reduce((r,s,v)=>(n.group.selected.value.includes(s.id)&&r.push(v),r),[])),M=p(()=>{const r=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&V.value.some(s=>s-r===1)}),Q=p(()=>{const r=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&V.value.some(s=>s-r===-1)});return ee(x,n),z({VExpansionPanelText:{eager:m(e,"eager")},VExpansionPanelTitle:{readonly:m(e,"readonly")}}),b(()=>{const r=!!(a.text||e.text),s=!!(a.title||e.title);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":M.value,"v-expansion-panel--after-active":Q.value,"v-expansion-panel--disabled":Y.value},u.value,i.value,e.class],style:[c.value,e.style]},{default:()=>{var v;return[t("div",{class:["v-expansion-panel__shadow",...l.value]},null),s&&t(_e,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),r&&t(ke,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(v=a.default)==null?void 0:v.call(a)]}})}),{}}}),O=N({name:"FSAccordionPanel",components:{FSIcon:I,FSSpan:G,FSText:R,FSRow:D},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""}},setup(e){const{getColors:o}=re(),a=o(A.Background),n=o(A.Light);return{style:p(()=>({"--fs-accordion-panel-padding-title":k(e.paddingTitle),"--fs-accordion-panel-padding-content":k(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":a.base}))}}});function Be(e,o,a,n,i,c){const l=ne("FSText");return f(),F($e,ae({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:d(()=>[C(e.$slots,"title",{},()=>[t(D,null,{default:d(()=>[e.$props.prependIcon?(f(),F(I,{key:0},{default:d(()=>[T(h(e.$props.prependIcon),1)]),_:1})):te("",!0),t(G,{class:"fs-accordion-panel-title"},{default:d(()=>[T(h(e.$props.title),1)]),_:1})]),_:1})])]),text:d(()=>[C(e.$slots,"content",{},()=>[t(l,{lineClamp:e.$props.lineClampContent},{default:d(()=>[T(h(e.$props.content),1)]),_:1},8,["lineClamp"])])]),_:3},16,["collapseIcon","expandIcon","style"])}const we=L(O,[["render",Be]]);O.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const J=N({name:"FSAccordion",setup(){const{getChildren:e}=Te();return{getChildren:e}}});function qe(e,o,a,n,i,c){return f(),F(Ce,{variant:"accordion"},{default:d(()=>[(f(!0),oe(ie,null,le(e.getChildren(),(l,u)=>(f(),F(se(l),{key:u}))),128))]),_:1})}const X=L(J,[["render",qe]]);J.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const cn={title:"Foundation/Shared/Accordion",component:X,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={render:()=>({components:{FSAccordion:X,FSAccordionPanel:we,FSText:R,FSIcon:I,FSButton:he},template:`
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
}`,...(B=($=S.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const dn=["Variations"];export{S as Variations,dn as __namedExportsOrder,cn as default};
