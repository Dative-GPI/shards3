import{d as L,c as u,i as H,P as a,Z as z,a2 as le,_ as ie,p as re,t as i,A,B as f,C as x,E as m,j as se,M as _,J as h,K as C,H as E,G as de,Q as ce,v as pe,I as ue}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as me}from"./FSRichTextField-CdNArHgP.js";import{F as V}from"./FSIcon-CgyPNi2H.js";import{_ as W}from"./FSSpan-Bb6VK1Ws.js";import{F as j}from"./FSText-9xksqDv3.js";import{_ as K}from"./FSRow-4Qz6Bbpg.js";import{u as fe,C as $}from"./useColors-ix1ChreS.js";import{s as q}from"./css-YWErTUWV.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as xe}from"./index-D14OnwAh.js";import{m as I,g,a as P,c as O,p as ve}from"./color-mm3JSYKM.js";import{m as Se,a as Fe}from"./scopeId-CPcZlDEY.js";import{p as b,J as ye,s as ge,x as Pe}from"./theme-DppimMvq.js";import{I as w,V as be,a as M}from"./VIcon-DsLd3bsf.js";import{R as Te}from"./index-CMMTOWvF.js";import{V as Q}from"./VDefaultsProvider-BGrIgR0V.js";import{m as he,u as Ce}from"./elevation-BrHPj82J.js";import{a as Ve,b as Ie,m as ke,u as Ae}from"./group-ATTNrdHt.js";import{m as _e,u as Ee}from"./rounded-3VvIKpNW.js";import{u as $e}from"./useSlots-DzOFTavN.js";import{F as qe}from"./FSButton-BoIGeCYX.js";import"./FSAutocompleteField-DtSxL_DS.js";import"./FSSearchField-B8DisBza.js";import"./FSTextField-CrTD4dZ4.js";import"./FSBaseField-D6coCLKM.js";import"./FSCol-DLyNVOXQ.js";import"./useRules-CvuqAlPS.js";import"./useBreakpoints-IB1lZo1P.js";import"./VField-BtCsV974.js";import"./transition-shOmLEJh.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./density-DMrbDfgW.js";import"./dimensions-BWgpWc0X.js";import"./proxiedModel-Xz4IZg0a.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./anchor-BS5WaiJh.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./useTranslations-DN7QCs30.js";import"./VList-XQT_dn4P.js";import"./FSCard-Bzfi7uVq.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./display-Db__yhk9.js";import"./router-DnAkll3L.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./VImg-DaKoZ_qJ.js";import"./FSSlideGroup-DU-bqEGV.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DjZD8NlX.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./FSToggleSet-fGAubtCV.js";import"./FSWrapGroup-BqZeUad0.js";import"./FSCheckbox-CjWE83-y.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-Bg0MxJuT.js";import"./FSLoader-_xEserk_.js";import"./FSRadio-Bi0gm8Uf.js";import"./VSelect-Dm4vxNUu.js";import"./VMenu-C3kJxa_y.js";import"./filter-DiySb8XN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-BAZBeMCh.js";const Z=L({name:"FSAccordionPanel",components:{FSRichTextField:me,FSIcon:V,FSSpan:W,FSText:j,FSRow:K},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"}},setup(e){const{getColors:l}=fe(),t=l($.Background),n=l($.Light);return{style:u(()=>({"--fs-accordion-panel-padding-title":q(e.paddingTitle),"--fs-accordion-panel-padding-content":q(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}}),S=Symbol.for("vuetify:v-expansion-panel"),U=b({...I(),...Se()},"VExpansionPanelText"),B=g()({name:"VExpansionPanelText",props:U(),setup(e,l){let{slots:t}=l;const n=H(S);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:r,onAfterLeave:c}=Fe(e,n.isSelected);return P(()=>a(xe,{onAfterLeave:c},{default:()=>{var o;return[z(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&r.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(o=t.default)==null?void 0:o.call(t)])]),[[le,n.isSelected.value]])]}})),{}}}),X=b({color:String,expandIcon:{type:w,default:"$expand"},collapseIcon:{type:w,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...I()},"VExpansionPanelTitle"),N=g()({name:"VExpansionPanelTitle",directives:{Ripple:Te},props:X(),setup(e,l){let{slots:t}=l;const n=H(S);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:c}=O(e,"color"),o=u(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),d=u(()=>n.isSelected.value?e.collapseIcon:e.expandIcon);return P(()=>{var F;return z(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},r.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(F=t.default)==null?void 0:F.call(t,o.value),!e.hideActions&&a(Q,{defaults:{VIcon:{icon:d.value}}},{default:()=>{var v;return[a("span",{class:"v-expansion-panel-title__icon"},[((v=t.actions)==null?void 0:v.call(t,o.value))??a(be,null,null)])]}})]),[[ie("ripple"),e.ripple]])}),{}}}),Y=b({title:String,text:String,bgColor:String,...he(),...Ve(),..._e(),...M(),...X(),...U()},"VExpansionPanel"),we=g()({name:"VExpansionPanel",props:Y(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const n=Ie(e,S),{backgroundColorClasses:r,backgroundColorStyles:c}=O(e,"bgColor"),{elevationClasses:o}=Ce(e),{roundedClasses:d}=Ee(e),F=u(()=>(n==null?void 0:n.disabled.value)||e.disabled),v=u(()=>n.group.items.value.reduce((p,s,T)=>(n.group.selected.value.includes(s.id)&&p.push(T),p),[])),te=u(()=>{const p=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&v.value.some(s=>s-p===1)}),ae=u(()=>{const p=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&v.value.some(s=>s-p===-1)});return re(S,n),P(()=>{const p=!!(t.text||e.text),s=!!(t.title||e.title),T=N.filterProps(e),oe=B.filterProps(e);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":te.value,"v-expansion-panel--after-active":ae.value,"v-expansion-panel--disabled":F.value},d.value,r.value,e.class],style:[c.value,e.style]},{default:()=>[a("div",{class:["v-expansion-panel__shadow",...o.value]},null),a(Q,{defaults:{VExpansionPanelTitle:{...T},VExpansionPanelText:{...oe}}},{default:()=>{var k;return[s&&a(N,{key:"title"},{default:()=>[t.title?t.title():e.title]}),p&&a(B,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(k=t.default)==null?void 0:k.call(t)]}})]})}),{groupItem:n}}}),Be=["default","accordion","inset","popout"],Ne=b({flat:Boolean,...ke(),...ye(Y(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...ge(),...I(),...M(),variant:{type:String,default:"default",validator:e=>Be.includes(e)}},"VExpansionPanels"),Re=g()({name:"VExpansionPanels",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{next:n,prev:r}=Ae(e,S),{themeClasses:c}=Pe(e),o=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ve({VExpansionPanel:{bgColor:i(e,"bgColor"),collapseIcon:i(e,"collapseIcon"),color:i(e,"color"),eager:i(e,"eager"),elevation:i(e,"elevation"),expandIcon:i(e,"expandIcon"),focusable:i(e,"focusable"),hideActions:i(e,"hideActions"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),rounded:i(e,"rounded"),static:i(e,"static")}}),P(()=>a(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},c.value,o.value,e.class],style:e.style},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,{prev:r,next:n})]}})),{next:n,prev:r}}});function Ge(e,l,t,n,r,c){const o=A("FSText"),d=A("FSRichTextField");return f(),x(we,se({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:m(()=>[_(e.$slots,"title",{},()=>[a(K,null,{default:m(()=>[e.$props.prependIcon?(f(),x(V,{key:0},{default:m(()=>[h(C(e.$props.prependIcon),1)]),_:1})):E("",!0),a(W,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:m(()=>[h(C(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),text:m(()=>[_(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(f(),x(o,{key:0,lineClamp:e.$props.lineClampContent},{default:m(()=>[h(C(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(f(),x(d,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):E("",!0)])]),_:3},16,["collapseIcon","expandIcon","style"])}const De=J(Z,[["render",Ge]]);Z.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const ee=L({name:"FSAccordion",setup(){const{getChildren:e}=$e();return{getChildren:e}}});function Le(e,l,t,n,r,c){return f(),x(Re,{variant:"accordion"},{default:m(()=>[(f(!0),de(ue,null,ce(e.getChildren(),(o,d)=>(f(),x(pe(o),{key:d}))),128))]),_:1})}const ne=J(ee,[["render",Le]]);ee.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const it={title:"Foundation/Shared/Accordion",component:ne,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={render:()=>({components:{FSAccordion:ne,FSAccordionPanel:De,FSText:j,FSIcon:V,FSButton:qe},template:`
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
    </div>`})};var R,G,D;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(G=y.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};const rt=["Variations"];export{y as Variations,rt as __namedExportsOrder,it as default};
