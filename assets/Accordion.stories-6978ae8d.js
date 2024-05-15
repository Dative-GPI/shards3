import{j as R,e as m,g as G,A as a,C as D,a6 as te,D as ae,p as oe,B as h,x as i,I as le,J as f,K as S,L as u,R as A,U as b,V as T,N as ie,Q as se,Z as re,v as ce,F as de}from"./vue.esm-bundler-857e5af7.js";import{_ as I}from"./FSIcon-d0ab000b.js";import{_ as L}from"./FSSpan-9f7a3096.js";import{F as H}from"./FSText-0e9e862b.js";import{_ as z}from"./FSRow-e30f1dcc.js";import{u as pe,C as k}from"./useColors-17643043.js";import{s as _}from"./css-ab2bdb81.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{m as j,g as F,u as g,p as ue}from"./useRender-1606c976.js";import{m as me,u as fe,a as xe,b as ve}from"./group-db11312a.js";import{p as y,H as Se,J as Fe}from"./theme-d5133154.js";import{d as ge}from"./index-900eb6c5.js";import{m as ye,u as Pe}from"./lazy-414691fc.js";import{b as K}from"./color-3025502c.js";import{I as E,m as be}from"./tag-41ce785e.js";import{R as Te}from"./index-1a539509.js";import{V as he}from"./VIcon-77d6c341.js";import{m as Ie,u as Ce}from"./elevation-c9d86896.js";import{m as Ve,u as Ae}from"./rounded-751db039.js";import{u as ke}from"./useSlots-8bee1a74.js";import{F as _e}from"./FSButton-0aa1c2d4.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./proxiedModel-c6c1514f.js";import"./FSClickable-450f52d6.js";import"./FSCard-e175fef9.js";import"./FSCol-439c812a.js";import"./VProgressCircular-b85c805e.js";import"./resizeObserver-3e02ea9a.js";const J=R({name:"FSAccordionPanel",components:{FSIcon:I,FSSpan:L,FSText:H,FSRow:z},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""}},setup(e){const{getColors:l}=pe(),t=l(k.Background),n=l(k.Light);return{style:m(()=>({"--fs-accordion-panel-padding-title":_(e.paddingTitle),"--fs-accordion-panel-padding-content":_(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}});const O=y({...j(),...ye()},"VExpansionPanelText"),$=F()({name:"VExpansionPanelText",props:O(),setup(e,l){let{slots:t}=l;const n=G(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:c}=Pe(e,n.isSelected);return g(()=>a(ge,{onAfterLeave:c},{default:()=>{var o;return[D(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&s.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(o=t.default)==null?void 0:o.call(t)])]),[[te,n.isSelected.value]])]}})),{}}}),Q=y({color:String,expandIcon:{type:E,default:"$expand"},collapseIcon:{type:E,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...j()},"VExpansionPanelTitle"),w=F()({name:"VExpansionPanelTitle",directives:{Ripple:Te},props:Q(),setup(e,l){let{slots:t}=l;const n=G(x);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:c}=K(e,"color"),o=m(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return g(()=>{var p;return D(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(p=t.default)==null?void 0:p.call(t,o.value),!e.hideActions&&a("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(o.value):a(he,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[ae("ripple"),e.ripple]])}),{}}}),U=y({title:String,text:String,bgColor:String,...Ie(),...me(),...Ve(),...be(),...Q(),...O()},"VExpansionPanel"),Ee=F()({name:"VExpansionPanel",props:U(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const n=fe(e,x),{backgroundColorClasses:s,backgroundColorStyles:c}=K(e,"bgColor"),{elevationClasses:o}=Ce(e),{roundedClasses:p}=Ae(e),X=m(()=>(n==null?void 0:n.disabled.value)||e.disabled),C=m(()=>n.group.items.value.reduce((d,r,P)=>(n.group.selected.value.includes(r.id)&&d.push(P),d),[])),Y=m(()=>{const d=n.group.items.value.findIndex(r=>r.id===n.id);return!n.isSelected.value&&C.value.some(r=>r-d===1)}),ee=m(()=>{const d=n.group.items.value.findIndex(r=>r.id===n.id);return!n.isSelected.value&&C.value.some(r=>r-d===-1)});return oe(x,n),g(()=>{const d=!!(t.text||e.text),r=!!(t.title||e.title),P=w.filterProps(e),ne=$.filterProps(e);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":Y.value,"v-expansion-panel--after-active":ee.value,"v-expansion-panel--disabled":X.value},p.value,s.value,e.class],style:[c.value,e.style]},{default:()=>{var V;return[a("div",{class:["v-expansion-panel__shadow",...o.value]},null),r&&a(w,h({key:"title"},P),{default:()=>[t.title?t.title():e.title]}),d&&a($,h({key:"text"},ne),{default:()=>[t.text?t.text():e.text]}),(V=t.default)==null?void 0:V.call(t)]}})}),{groupItem:n}}}),x=Symbol.for("vuetify:v-expansion-panel"),$e=["default","accordion","inset","popout"],we=y({flat:Boolean,...xe(),...U(),...Se(),variant:{type:String,default:"default",validator:e=>$e.includes(e)}},"VExpansionPanels"),qe=F()({name:"VExpansionPanels",props:we(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{next:n,prev:s}=ve(e,x),{themeClasses:c}=Fe(e),o=m(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ue({VExpansionPanel:{bgColor:i(e,"bgColor"),collapseIcon:i(e,"collapseIcon"),color:i(e,"color"),eager:i(e,"eager"),elevation:i(e,"elevation"),expandIcon:i(e,"expandIcon"),focusable:i(e,"focusable"),hideActions:i(e,"hideActions"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),rounded:i(e,"rounded"),static:i(e,"static")}}),g(()=>a(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},c.value,o.value,e.class],style:e.style},{default:()=>{var p;return[(p=t.default)==null?void 0:p.call(t,{prev:s,next:n})]}})),{next:n,prev:s}}});function Be(e,l,t,n,s,c){const o=le("FSText");return f(),S(Ee,h({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:u(()=>[A(e.$slots,"title",{},()=>[a(z,null,{default:u(()=>[e.$props.prependIcon?(f(),S(I,{key:0},{default:u(()=>[b(T(e.$props.prependIcon),1)]),_:1})):ie("",!0),a(L,{class:"fs-accordion-panel-title"},{default:u(()=>[b(T(e.$props.title),1)]),_:1})]),_:1})])]),text:u(()=>[A(e.$slots,"content",{},()=>[a(o,{lineClamp:e.$props.lineClampContent},{default:u(()=>[b(T(e.$props.content),1)]),_:1},8,["lineClamp"])])]),_:3},16,["collapseIcon","expandIcon","style"])}const Ne=W(J,[["render",Be]]);J.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const Z=R({name:"FSAccordion",setup(){const{getChildren:e}=ke();return{getChildren:e}}});function Re(e,l,t,n,s,c){return f(),S(qe,{variant:"accordion"},{default:u(()=>[(f(!0),se(de,null,re(e.getChildren(),o=>(f(),S(ce(o)))),256))]),_:1})}const M=W(Z,[["render",Re]]);Z.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const fn={title:"Foundation/Shared/Accordion",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={render:()=>({components:{FSAccordion:M,FSAccordionPanel:Ne,FSText:H,FSIcon:I,FSButton:_e},template:`
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
