import{j as G,e as u,g as R,A as a,C as D,a6 as te,D as ae,p as oe,B as h,x as l,I as le,J as m,K as S,L as p,R as A,S as b,U as T,N as se,Q as ie,Y as re,v as ce,F as de}from"./vue.esm-bundler-3416a090.js";import{_ as I}from"./FSIcon-f518d728.js";import{_ as L}from"./FSSpan-b519c994.js";import{F as H}from"./FSText-4221a42d.js";import{_ as z}from"./FSRow-5edf997c.js";import{u as pe,C as k}from"./useColors-1faf681b.js";import{s as _}from"./css-69ed11d9.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{m as j,g as F,u as g,p as ue}from"./useRender-fb717f1b.js";import{m as me,u as fe,a as xe,b as ve}from"./group-f3cba4ff.js";import{p as y,G as Se,H as Fe}from"./theme-2c100cd8.js";import{d as ge}from"./index-46378e0b.js";import{m as ye,u as Pe}from"./lazy-939e8bde.js";import{b as K}from"./color-5c733e3b.js";import{I as E,m as be}from"./tag-a6c90b0c.js";import{R as Te}from"./index-a9118fe7.js";import{V as he}from"./VIcon-c583a5e4.js";import{m as Ie,u as Ce}from"./elevation-9288a0e5.js";import{m as Ve,u as Ae}from"./rounded-e101edac.js";import{u as ke}from"./useSlots-7472d1e2.js";import{F as _e}from"./FSButton-6f3d0d12.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./proxiedModel-868611da.js";import"./FSClickable-d5c04d60.js";import"./FSCard-92f27951.js";import"./FSCol-5731c3c4.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";const O=G({name:"FSAccordionPanel",components:{FSIcon:I,FSSpan:L,FSText:H,FSRow:z},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""}},setup(e){const{getColors:o}=pe(),t=o(k.Background),n=o(k.Light);return{style:u(()=>({"--fs-accordion-panel-padding-title":_(e.paddingTitle),"--fs-accordion-panel-padding-content":_(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}});const J=y({...j(),...ye()},"VExpansionPanelText"),$=F()({name:"VExpansionPanelText",props:J(),setup(e,o){let{slots:t}=o;const n=R(f);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:r,onAfterLeave:d}=Pe(e,n.isSelected);return g(()=>a(ge,{onAfterLeave:d},{default:()=>{var s;return[D(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&r.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(s=t.default)==null?void 0:s.call(t)])]),[[te,n.isSelected.value]])]}})),{}}}),Q=y({color:String,expandIcon:{type:E,default:"$expand"},collapseIcon:{type:E,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...j()},"VExpansionPanelTitle"),w=F()({name:"VExpansionPanelTitle",directives:{Ripple:Te},props:Q(),setup(e,o){let{slots:t}=o;const n=R(f);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:d}=K(e,"color"),s=u(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return g(()=>{var x;return D(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},r.value,e.class],style:[d.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(x=t.default)==null?void 0:x.call(t,s.value),!e.hideActions&&a("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(s.value):a(he,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[ae("ripple"),e.ripple]])}),{}}}),U=y({title:String,text:String,bgColor:String,...Ie(),...me(),...Ve(),...be(),...Q(),...J()},"VExpansionPanel"),Ee=F()({name:"VExpansionPanel",props:U(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=fe(e,f),{backgroundColorClasses:r,backgroundColorStyles:d}=K(e,"bgColor"),{elevationClasses:s}=Ce(e),{roundedClasses:x}=Ae(e),X=u(()=>(n==null?void 0:n.disabled.value)||e.disabled),C=u(()=>n.group.items.value.reduce((c,i,P)=>(n.group.selected.value.includes(i.id)&&c.push(P),c),[])),Z=u(()=>{const c=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&C.value.some(i=>i-c===1)}),ee=u(()=>{const c=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&C.value.some(i=>i-c===-1)});return oe(f,n),g(()=>{const c=!!(t.text||e.text),i=!!(t.title||e.title),P=w.filterProps(e),ne=$.filterProps(e);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":Z.value,"v-expansion-panel--after-active":ee.value,"v-expansion-panel--disabled":X.value},x.value,r.value,e.class],style:[d.value,e.style]},{default:()=>{var V;return[a("div",{class:["v-expansion-panel__shadow",...s.value]},null),i&&a(w,h({key:"title"},P),{default:()=>[t.title?t.title():e.title]}),c&&a($,h({key:"text"},ne),{default:()=>[t.text?t.text():e.text]}),(V=t.default)==null?void 0:V.call(t)]}})}),{}}}),f=Symbol.for("vuetify:v-expansion-panel"),$e=["default","accordion","inset","popout"],we=y({flat:Boolean,...xe(),...U(),...Se(),variant:{type:String,default:"default",validator:e=>$e.includes(e)}},"VExpansionPanels"),qe=F()({name:"VExpansionPanels",props:we(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;ve(e,f);const{themeClasses:n}=Fe(e),r=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ue({VExpansionPanel:{bgColor:l(e,"bgColor"),collapseIcon:l(e,"collapseIcon"),color:l(e,"color"),eager:l(e,"eager"),elevation:l(e,"elevation"),expandIcon:l(e,"expandIcon"),focusable:l(e,"focusable"),hideActions:l(e,"hideActions"),readonly:l(e,"readonly"),ripple:l(e,"ripple"),rounded:l(e,"rounded"),static:l(e,"static")}}),g(()=>a(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},n.value,r.value,e.class],style:e.style},t)),{}}});function Be(e,o,t,n,r,d){const s=le("FSText");return m(),S(Ee,h({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:p(()=>[A(e.$slots,"title",{},()=>[a(z,null,{default:p(()=>[e.$props.prependIcon?(m(),S(I,{key:0},{default:p(()=>[b(T(e.$props.prependIcon),1)]),_:1})):se("",!0),a(L,{class:"fs-accordion-panel-title"},{default:p(()=>[b(T(e.$props.title),1)]),_:1})]),_:1})])]),text:p(()=>[A(e.$slots,"content",{},()=>[a(s,{lineClamp:e.$props.lineClampContent},{default:p(()=>[b(T(e.$props.content),1)]),_:1},8,["lineClamp"])])]),_:3},16,["collapseIcon","expandIcon","style"])}const Ne=W(O,[["render",Be]]);O.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const Y=G({name:"FSAccordion",setup(){const{getChildren:e}=ke();return{getChildren:e}}});function Ge(e,o,t,n,r,d){return m(),S(qe,{variant:"accordion"},{default:p(()=>[(m(!0),ie(de,null,re(e.getChildren(),s=>(m(),S(ce(s)))),256))]),_:1})}const M=W(Y,[["render",Ge]]);Y.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const fn={title:"Foundation/Shared/Accordion",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={render:()=>({components:{FSAccordion:M,FSAccordionPanel:Ne,FSText:H,FSIcon:I,FSButton:_e},template:`
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
    </div>`})};var q,B,N;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(B=v.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const xn=["Variations"];export{v as Variations,xn as __namedExportsOrder,fn as default};
