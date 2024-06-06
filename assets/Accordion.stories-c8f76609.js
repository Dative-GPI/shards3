import{f as N,g as m,e as R,Q as t,a0 as D,a6 as ae,a1 as te,p as oe,A as h,x as i,D as le,E as f,F as S,G as u,O as A,K as b,L as T,I as ie,H as se,V as re,v as ce,J as de}from"./vue.esm-bundler-1de4ab84.js";import{_ as I}from"./FSIcon-08483052.js";import{_ as L}from"./FSSpan-c5b5f93b.js";import{F as H}from"./FSText-3b69d1d8.js";import{_ as z}from"./FSRow-0f15051e.js";import{u as pe,C as k}from"./useColors-6201f155.js";import{s as _}from"./css-73f1b6e3.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{d as ue}from"./index-00d0b77b.js";import{m as K,g as F,u as g,p as me}from"./useRender-b44b777b.js";import{m as fe,u as xe}from"./lazy-927b6a5f.js";import{p as y,G as ve,H as Se}from"./theme-fee57059.js";import{b as O}from"./color-69562b87.js";import{I as E,m as Fe}from"./tag-58633b3a.js";import{R as ge}from"./index-8cb030a7.js";import{V as ye}from"./VIcon-9f1a137c.js";import{m as Pe,u as be}from"./elevation-e7de2c09.js";import{a as Te,b as he,m as Ie,u as Ce}from"./group-03874e1e.js";import{m as Ve,u as Ae}from"./rounded-aeb398ab.js";import{u as ke}from"./useSlots-78ee3d45.js";import{F as _e}from"./FSButton-6b0685b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./proxiedModel-ef310637.js";import"./FSClickable-00bc2ab2.js";import"./FSCard-23b564db.js";import"./FSCol-044a4f0a.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";const j=N({name:"FSAccordionPanel",components:{FSIcon:I,FSSpan:L,FSText:H,FSRow:z},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""}},setup(e){const{getColors:l}=pe(),a=l(k.Background),n=l(k.Light);return{style:m(()=>({"--fs-accordion-panel-padding-title":_(e.paddingTitle),"--fs-accordion-panel-padding-content":_(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":a.base}))}}});const x=Symbol.for("vuetify:v-expansion-panel"),J=y({...K(),...fe()},"VExpansionPanelText"),$=F()({name:"VExpansionPanelText",props:J(),setup(e,l){let{slots:a}=l;const n=R(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:c}=xe(e,n.isSelected);return g(()=>t(ue,{onAfterLeave:c},{default:()=>{var o;return[D(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&s.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(o=a.default)==null?void 0:o.call(a)])]),[[ae,n.isSelected.value]])]}})),{}}}),Q=y({color:String,expandIcon:{type:E,default:"$expand"},collapseIcon:{type:E,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...K()},"VExpansionPanelTitle"),w=F()({name:"VExpansionPanelTitle",directives:{Ripple:ge},props:Q(),setup(e,l){let{slots:a}=l;const n=R(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:c}=O(e,"color"),o=m(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return g(()=>{var p;return D(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(p=a.default)==null?void 0:p.call(a,o.value),!e.hideActions&&t("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(o.value):t(ye,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[te("ripple"),e.ripple]])}),{}}}),M=y({title:String,text:String,bgColor:String,...Pe(),...Te(),...Ve(),...Fe(),...Q(),...J()},"VExpansionPanel"),Ee=F()({name:"VExpansionPanel",props:M(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:a}=l;const n=he(e,x),{backgroundColorClasses:s,backgroundColorStyles:c}=O(e,"bgColor"),{elevationClasses:o}=be(e),{roundedClasses:p}=Ae(e),Y=m(()=>(n==null?void 0:n.disabled.value)||e.disabled),C=m(()=>n.group.items.value.reduce((d,r,P)=>(n.group.selected.value.includes(r.id)&&d.push(P),d),[])),Z=m(()=>{const d=n.group.items.value.findIndex(r=>r.id===n.id);return!n.isSelected.value&&C.value.some(r=>r-d===1)}),ee=m(()=>{const d=n.group.items.value.findIndex(r=>r.id===n.id);return!n.isSelected.value&&C.value.some(r=>r-d===-1)});return oe(x,n),g(()=>{const d=!!(a.text||e.text),r=!!(a.title||e.title),P=w.filterProps(e),ne=$.filterProps(e);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":Z.value,"v-expansion-panel--after-active":ee.value,"v-expansion-panel--disabled":Y.value},p.value,s.value,e.class],style:[c.value,e.style]},{default:()=>{var V;return[t("div",{class:["v-expansion-panel__shadow",...o.value]},null),r&&t(w,h({key:"title"},P),{default:()=>[a.title?a.title():e.title]}),d&&t($,h({key:"text"},ne),{default:()=>[a.text?a.text():e.text]}),(V=a.default)==null?void 0:V.call(a)]}})}),{groupItem:n}}}),$e=["default","accordion","inset","popout"],we=y({flat:Boolean,...Ie(),...M(),...ve(),variant:{type:String,default:"default",validator:e=>$e.includes(e)}},"VExpansionPanels"),qe=F()({name:"VExpansionPanels",props:we(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const{next:n,prev:s}=Ce(e,x),{themeClasses:c}=Se(e),o=m(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return me({VExpansionPanel:{bgColor:i(e,"bgColor"),collapseIcon:i(e,"collapseIcon"),color:i(e,"color"),eager:i(e,"eager"),elevation:i(e,"elevation"),expandIcon:i(e,"expandIcon"),focusable:i(e,"focusable"),hideActions:i(e,"hideActions"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),rounded:i(e,"rounded"),static:i(e,"static")}}),g(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},c.value,o.value,e.class],style:e.style},{default:()=>{var p;return[(p=a.default)==null?void 0:p.call(a,{prev:s,next:n})]}})),{next:n,prev:s}}});function Be(e,l,a,n,s,c){const o=le("FSText");return f(),S(Ee,h({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:u(()=>[A(e.$slots,"title",{},()=>[t(z,null,{default:u(()=>[e.$props.prependIcon?(f(),S(I,{key:0},{default:u(()=>[b(T(e.$props.prependIcon),1)]),_:1})):ie("",!0),t(L,{class:"fs-accordion-panel-title"},{default:u(()=>[b(T(e.$props.title),1)]),_:1})]),_:1})])]),text:u(()=>[A(e.$slots,"content",{},()=>[t(o,{lineClamp:e.$props.lineClampContent},{default:u(()=>[b(T(e.$props.content),1)]),_:1},8,["lineClamp"])])]),_:3},16,["collapseIcon","expandIcon","style"])}const Ge=W(j,[["render",Be]]);j.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const U=N({name:"FSAccordion",setup(){const{getChildren:e}=ke();return{getChildren:e}}});function Ne(e,l,a,n,s,c){return f(),S(qe,{variant:"accordion"},{default:u(()=>[(f(!0),se(de,null,re(e.getChildren(),o=>(f(),S(ce(o)))),256))]),_:1})}const X=W(U,[["render",Ne]]);U.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const fn={title:"Foundation/Shared/Accordion",component:X,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={render:()=>({components:{FSAccordion:X,FSAccordionPanel:Ge,FSText:H,FSIcon:I,FSButton:_e},template:`
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
    </div>`})};var q,B,G;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(B=v.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const xn=["Variations"];export{v as Variations,xn as __namedExportsOrder,fn as default};
