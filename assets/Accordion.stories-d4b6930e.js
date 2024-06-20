import{f as N,g as p,e as D,P as t,$ as R,a6 as ae,a0 as te,p as oe,A as i,D as le,E as x,F as g,G as u,x as ie,Q as A,K as I,L as h,I as se,H as re,V as de,z as ce,J as pe}from"./vue.esm-bundler-a0893183.js";import{_ as V}from"./FSIcon-9d61ed62.js";import{_ as L}from"./FSSpan-4daadeb4.js";import{F as H}from"./FSText-46c134d7.js";import{_ as z}from"./FSRow-821d23a1.js";import{u as ue,C as k}from"./useColors-6c375bb5.js";import{s as _}from"./css-03aed76d.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{d as me}from"./index-ec7e733e.js";import{m as K,g as y,u as P,p as fe}from"./useRender-13ac3742.js";import{m as xe,u as ve}from"./lazy-87b8baba.js";import{p as b,G as Se,H as Fe}from"./theme-41eca2c8.js";import{b as j}from"./color-d0fba9db.js";import{I as E,m as ge}from"./tag-c957791e.js";import{R as ye}from"./index-8d9a280b.js";import{V as O}from"./VDefaultsProvider-c4e19f1a.js";import{V as Pe}from"./VIcon-3d9c1c96.js";import{m as be,u as Te}from"./elevation-7d7e39c3.js";import{a as Ie,b as he,m as Ve,u as Ce}from"./group-0833c323.js";import{m as Ae,u as ke}from"./rounded-4c492e72.js";import{u as _e}from"./useSlots-d5b57407.js";import{F as Ee}from"./FSButton-29e96b8a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./proxiedModel-59232916.js";import"./FSClickable-550391c2.js";import"./FSCard-c200753c.js";import"./FSCol-e45ac157.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";const J=N({name:"FSAccordionPanel",components:{FSIcon:V,FSSpan:L,FSText:H,FSRow:z},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""}},setup(e){const{getColors:l}=ue(),a=l(k.Background),n=l(k.Light);return{style:p(()=>({"--fs-accordion-panel-padding-title":_(e.paddingTitle),"--fs-accordion-panel-padding-content":_(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":a.base}))}}});const v=Symbol.for("vuetify:v-expansion-panel"),Q=b({...K(),...xe()},"VExpansionPanelText"),$=y()({name:"VExpansionPanelText",props:Q(),setup(e,l){let{slots:a}=l;const n=D(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:d}=ve(e,n.isSelected);return P(()=>t(me,{onAfterLeave:d},{default:()=>{var o;return[R(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&s.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(o=a.default)==null?void 0:o.call(a)])]),[[ae,n.isSelected.value]])]}})),{}}}),M=b({color:String,expandIcon:{type:E,default:"$expand"},collapseIcon:{type:E,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...K()},"VExpansionPanelTitle"),w=y()({name:"VExpansionPanelTitle",directives:{Ripple:ye},props:M(),setup(e,l){let{slots:a}=l;const n=D(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:d}=j(e,"color"),o=p(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),m=p(()=>n.isSelected.value?e.collapseIcon:e.expandIcon);return P(()=>{var S;return R(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[d.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(S=a.default)==null?void 0:S.call(a,o.value),!e.hideActions&&t(O,{defaults:{VIcon:{icon:m.value}}},{default:()=>{var f;return[t("span",{class:"v-expansion-panel-title__icon"},[((f=a.actions)==null?void 0:f.call(a,o.value))??t(Pe,null,null)])]}})]),[[te("ripple"),e.ripple]])}),{}}}),U=b({title:String,text:String,bgColor:String,...be(),...Ie(),...Ae(),...ge(),...M(),...Q()},"VExpansionPanel"),$e=y()({name:"VExpansionPanel",props:U(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:a}=l;const n=he(e,v),{backgroundColorClasses:s,backgroundColorStyles:d}=j(e,"bgColor"),{elevationClasses:o}=Te(e),{roundedClasses:m}=ke(e),S=p(()=>(n==null?void 0:n.disabled.value)||e.disabled),f=p(()=>n.group.items.value.reduce((c,r,T)=>(n.group.selected.value.includes(r.id)&&c.push(T),c),[])),Z=p(()=>{const c=n.group.items.value.findIndex(r=>r.id===n.id);return!n.isSelected.value&&f.value.some(r=>r-c===1)}),ee=p(()=>{const c=n.group.items.value.findIndex(r=>r.id===n.id);return!n.isSelected.value&&f.value.some(r=>r-c===-1)});return oe(v,n),P(()=>{const c=!!(a.text||e.text),r=!!(a.title||e.title),T=w.filterProps(e),ne=$.filterProps(e);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":Z.value,"v-expansion-panel--after-active":ee.value,"v-expansion-panel--disabled":S.value},m.value,s.value,e.class],style:[d.value,e.style]},{default:()=>[t("div",{class:["v-expansion-panel__shadow",...o.value]},null),t(O,{defaults:{VExpansionPanelTitle:{...T},VExpansionPanelText:{...ne}}},{default:()=>{var C;return[r&&t(w,{key:"title"},{default:()=>[a.title?a.title():e.title]}),c&&t($,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(C=a.default)==null?void 0:C.call(a)]}})]})}),{groupItem:n}}}),we=["default","accordion","inset","popout"],qe=b({flat:Boolean,...Ve(),...U(),...Se(),variant:{type:String,default:"default",validator:e=>we.includes(e)}},"VExpansionPanels"),Be=y()({name:"VExpansionPanels",props:qe(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const{next:n,prev:s}=Ce(e,v),{themeClasses:d}=Fe(e),o=p(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return fe({VExpansionPanel:{bgColor:i(e,"bgColor"),collapseIcon:i(e,"collapseIcon"),color:i(e,"color"),eager:i(e,"eager"),elevation:i(e,"elevation"),expandIcon:i(e,"expandIcon"),focusable:i(e,"focusable"),hideActions:i(e,"hideActions"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),rounded:i(e,"rounded"),static:i(e,"static")}}),P(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},d.value,o.value,e.class],style:e.style},{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a,{prev:s,next:n})]}})),{next:n,prev:s}}});function Ge(e,l,a,n,s,d){const o=le("FSText");return x(),g($e,ie({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:u(()=>[A(e.$slots,"title",{},()=>[t(z,null,{default:u(()=>[e.$props.prependIcon?(x(),g(V,{key:0},{default:u(()=>[I(h(e.$props.prependIcon),1)]),_:1})):se("",!0),t(L,{class:"fs-accordion-panel-title"},{default:u(()=>[I(h(e.$props.title),1)]),_:1})]),_:1})])]),text:u(()=>[A(e.$slots,"content",{},()=>[t(o,{lineClamp:e.$props.lineClampContent},{default:u(()=>[I(h(e.$props.content),1)]),_:1},8,["lineClamp"])])]),_:3},16,["collapseIcon","expandIcon","style"])}const Ne=W(J,[["render",Ge]]);J.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const X=N({name:"FSAccordion",setup(){const{getChildren:e}=_e();return{getChildren:e}}});function De(e,l,a,n,s,d){return x(),g(Be,{variant:"accordion"},{default:u(()=>[(x(!0),re(pe,null,de(e.getChildren(),o=>(x(),g(ce(o)))),256))]),_:1})}const Y=W(X,[["render",De]]);X.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const vn={title:"Foundation/Shared/Accordion",component:Y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},F={render:()=>({components:{FSAccordion:Y,FSAccordionPanel:Ne,FSText:H,FSIcon:V,FSButton:Ee},template:`
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
    </div>`})};var q,B,G;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(B=F.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const Sn=["Variations"];export{F as Variations,Sn as __namedExportsOrder,vn as default};
