import{c as u,t as f,L as a,i as N,X as R,a5 as ee,Y as ne,p as te,d as G,y as V,z as m,A as x,B as p,m as ae,I as k,E as P,G as h,D as A,C as oe,N as le,k as ie,F as se}from"./vue.esm-bundler-Vj2X7okO.js";import{F as re}from"./FSRichTextField-Bb9fJqzt.js";import{_ as C}from"./FSIcon-CNrZYw3j.js";import{_ as D}from"./FSSpan-etgUZXmX.js";import{F as L}from"./FSText-CWxdqVl0.js";import{_ as z}from"./FSRow-BuYwVvwM.js";import{u as de,C as _}from"./useColors-ClGgFu9Q.js";import{s as E}from"./css-CbCR1nbl.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as y,g,p as W,a as T,c as j}from"./color-Dk23S21P.js";import{b as ce,u as pe,m as ue,a as me}from"./group-CT1H1YXM.js";import{a as K}from"./tag-BDy8Psij.js";import{p as b,s as fe,x as xe}from"./theme-DqOMA9k1.js";import{d as ve}from"./index-7QBgy7JM.js";import{m as O,u as Se}from"./lazy-Ceu0wY4v.js";import{I as $,V as Fe}from"./VIcon-Dc5M3VhK.js";import{R as ye}from"./index-BN7Lbnw3.js";import{m as ge,u as Te}from"./elevation-DH7kyzD7.js";import{m as be,u as Pe}from"./rounded-B-50KYhN.js";import{u as he}from"./useSlots-DXmhvOIb.js";import{F as Ce}from"./FSButton-e2AtnYJi.js";import"./FSAutocompleteField-DVzJ32G9.js";import"./FSSearchField-D0644KTK.js";import"./FSTextField-0HOUM4sx.js";import"./FSBaseField-Uq_chVlu.js";import"./FSCol-Bk577joi.js";import"./VSpacer-BJ2TWwuy.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./anchor-J8DF-zwD.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./useTranslations-DyPMaPr_.js";import"./FSDialogMenu-DJMBxSqq.js";import"./FSCard-IkM7vPXg.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-CIF_Nx5j.js";import"./uuid-DTaye2KM.js";import"./FSToggleSet-f1Oac-0f.js";import"./FSWrapGroup-CbHj_DEc.js";import"./FSCheckbox-BNEUzkt_.js";import"./VSelectionControl-BYXKZDmZ.js";import"./FSFadeOut-CORcN4YC.js";import"./VImg-iJp2dxPS.js";import"./FSRadio-CMU-kDTj.js";import"./VList-6ZTQMrmw.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-DXX2XHmg.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSClickable-CMs8Os8M.js";const v=Symbol.for("vuetify:v-expansion-panel"),Ie=["default","accordion","inset","popout"],Ve=b({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>Ie.includes(e)},readonly:Boolean,...y(),...ce(),...K(),...fe()},"VExpansionPanels"),ke=g()({name:"VExpansionPanels",props:Ve(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;pe(e,v);const{themeClasses:n}=xe(e),s=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return W({VExpansionPanel:{color:f(e,"color"),readonly:f(e,"readonly")},VExpansionPanelTitle:{focusable:f(e,"focusable"),static:f(e,"static")}}),T(()=>a(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},n.value,s.value,e.class],style:e.style},t)),{}}}),Ae=b({...y(),...O()},"VExpansionPanelText"),_e=g()({name:"VExpansionPanelText",props:Ae(),setup(e,o){let{slots:t}=o;const n=N(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:c}=Se(e,n.isSelected);return T(()=>a(ve,{onAfterLeave:c},{default:()=>{var l;return[R(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&s.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(l=t.default)==null?void 0:l.call(t)])]),[[ee,n.isSelected.value]])]}})),{}}}),X=b({color:String,expandIcon:{type:$,default:"$expand"},collapseIcon:{type:$,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...y()},"VExpansionPanelTitle"),Ee=g()({name:"VExpansionPanelTitle",directives:{Ripple:ye},props:X(),setup(e,o){let{slots:t}=o;const n=N(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:c}=j(e,"color"),l=u(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return T(()=>{var r;return R(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(r=t.default)==null?void 0:r.call(t,l.value),!e.hideActions&&a("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(l.value):a(Fe,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[ne("ripple"),e.ripple]])}),{}}}),$e=b({title:String,text:String,bgColor:String,...y(),...ge(),...ue(),...O(),...be(),...K(),...X()},"VExpansionPanel"),qe=g()({name:"VExpansionPanel",props:$e(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=me(e,v),{backgroundColorClasses:s,backgroundColorStyles:c}=j(e,"bgColor"),{elevationClasses:l}=Te(e),{roundedClasses:r}=Pe(e),Q=u(()=>(n==null?void 0:n.disabled.value)||e.disabled),I=u(()=>n.group.items.value.reduce((d,i,S)=>(n.group.selected.value.includes(i.id)&&d.push(S),d),[])),U=u(()=>{const d=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&I.value.some(i=>i-d===1)}),Z=u(()=>{const d=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&I.value.some(i=>i-d===-1)});return te(v,n),W({VExpansionPanelText:{eager:f(e,"eager")},VExpansionPanelTitle:{readonly:f(e,"readonly")}}),T(()=>{const d=!!(t.text||e.text),i=!!(t.title||e.title);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":U.value,"v-expansion-panel--after-active":Z.value,"v-expansion-panel--disabled":Q.value},r.value,s.value,e.class],style:[c.value,e.style]},{default:()=>{var S;return[a("div",{class:["v-expansion-panel__shadow",...l.value]},null),i&&a(Ee,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[t.title?t.title():e.title]}),d&&a(_e,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(S=t.default)==null?void 0:S.call(t)]}})}),{}}}),Y=G({name:"FSAccordionPanel",components:{FSRichTextField:re,FSIcon:C,FSSpan:D,FSText:L,FSRow:z},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"}},setup(e){const{getColors:o}=de(),t=o(_.Background),n=o(_.Light);return{style:u(()=>({"--fs-accordion-panel-padding-title":E(e.paddingTitle),"--fs-accordion-panel-padding-content":E(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}});function Be(e,o,t,n,s,c){const l=V("FSText"),r=V("FSRichTextField");return m(),x(qe,ae({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:p(()=>[k(e.$slots,"title",{},()=>[a(z,null,{default:p(()=>[e.$props.prependIcon?(m(),x(C,{key:0},{default:p(()=>[P(h(e.$props.prependIcon),1)]),_:1})):A("",!0),a(D,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:p(()=>[P(h(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),text:p(()=>[k(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(m(),x(l,{key:0,lineClamp:e.$props.lineClampContent},{default:p(()=>[P(h(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(m(),x(r,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):A("",!0)])]),_:3},16,["collapseIcon","expandIcon","style"])}const we=H(Y,[["render",Be]]);Y.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const J=G({name:"FSAccordion",setup(){const{getChildren:e}=he();return{getChildren:e}}});function Ne(e,o,t,n,s,c){return m(),x(ke,{variant:"accordion"},{default:p(()=>[(m(!0),oe(se,null,le(e.getChildren(),(l,r)=>(m(),x(ie(l),{key:r}))),128))]),_:1})}const M=H(J,[["render",Ne]]);J.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const Un={title:"Foundation/Shared/Accordion",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},F={render:()=>({components:{FSAccordion:M,FSAccordionPanel:we,FSText:L,FSIcon:C,FSButton:Ce},template:`
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
    </div>`})};var q,B,w;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(w=(B=F.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const Zn=["Variations"];export{F as Variations,Zn as __namedExportsOrder,Un as default};
