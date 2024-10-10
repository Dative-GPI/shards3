import{c as u,t as f,N as a,i as N,X as R,a1 as ee,Y as ne,p as te,d as G,y as I,z as m,A as x,C as p,m as ae,K as k,H as P,I as h,F as A,E as oe,O as le,q as ie,G as se}from"./vue.esm-bundler-DTB_q9xr.js";import{F as re}from"./FSRichTextField-BmFdAuVR.js";import{F as C}from"./FSIcon-CaaGuK6D.js";import{_ as D}from"./FSSpan-DGSHCe_l.js";import{F as L}from"./FSText-7jyalPrS.js";import{_ as z}from"./FSRow-CFFgZ74C.js";import{u as de,C as E}from"./useColors-BWKJNLz8.js";import{s as _}from"./css-B7hQ34V-.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as y,g,p as W,a as T,c as K}from"./color-Du5JXqac.js";import{m as ce,u as pe,a as ue,b as me}from"./group-CBQYGNTq.js";import{a as O,I as $,V as fe}from"./VIcon-DzZvThha.js";import{p as b,s as xe,x as ve}from"./theme-CX_N7n5F.js";import{d as Se}from"./index-UH0ZuYvc.js";import{m as j,u as Fe}from"./lazy-CgkI0iJG.js";import{R as ye}from"./index-DMxVfgfA.js";import{m as ge,u as Te}from"./elevation-JfXKLVfD.js";import{m as be,u as Pe}from"./rounded-ErtzAGHK.js";import{u as he}from"./useSlots-BnylMYIF.js";import{F as Ce}from"./FSButton-C0EbsNmZ.js";import"./FSAutocompleteField-BOEzuEQ0.js";import"./FSSearchField-CAI8fEsN.js";import"./FSTextField-B-binuYf.js";import"./FSBaseField-D2wwYX9r.js";import"./FSCol-CYWCfIBP.js";import"./VSpacer-Di7g3RCw.js";import"./useRules-D0gcbU57.js";import"./useBreakpoints-ERBVGIQe.js";import"./VField-Do2gtyNA.js";import"./transition-DhTIerNz.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./locale-BJQwrXJ7.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./anchor-0mwNUa2-.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./useTranslations-BehwFxDb.js";import"./FSDialogMenu-BA4IKkHH.js";import"./FSCard-C6D9gNrD.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./router-DxFny788.js";import"./FSSlideGroup--K704DO9.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DF3eQVXp.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./FSToggleSet-CvGKl15-.js";import"./FSWrapGroup-Dplk4rjv.js";import"./FSCheckbox-Bdwx0Alv.js";import"./VSelectionControl-CFrRrZff.js";import"./FSFadeOut-d8eb0S_F.js";import"./FSLoader-IaO7i80m.js";import"./FSRadio-DA5JqUMw.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./VImg-C1aVTsth.js";import"./VSelect-oAa5CmWC.js";import"./VMenu-CuKNZEBs.js";import"./filter-COIlslko.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSClickable-BkJRwj5f.js";const v=Symbol.for("vuetify:v-expansion-panel"),Ve=["default","accordion","inset","popout"],Ie=b({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>Ve.includes(e)},readonly:Boolean,...y(),...ce(),...O(),...xe()},"VExpansionPanels"),ke=g()({name:"VExpansionPanels",props:Ie(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;pe(e,v);const{themeClasses:n}=ve(e),s=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return W({VExpansionPanel:{color:f(e,"color"),readonly:f(e,"readonly")},VExpansionPanelTitle:{focusable:f(e,"focusable"),static:f(e,"static")}}),T(()=>a(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},n.value,s.value,e.class],style:e.style},t)),{}}}),Ae=b({...y(),...j()},"VExpansionPanelText"),Ee=g()({name:"VExpansionPanelText",props:Ae(),setup(e,o){let{slots:t}=o;const n=N(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:c}=Fe(e,n.isSelected);return T(()=>a(Se,{onAfterLeave:c},{default:()=>{var l;return[R(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&s.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(l=t.default)==null?void 0:l.call(t)])]),[[ee,n.isSelected.value]])]}})),{}}}),X=b({color:String,expandIcon:{type:$,default:"$expand"},collapseIcon:{type:$,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...y()},"VExpansionPanelTitle"),_e=g()({name:"VExpansionPanelTitle",directives:{Ripple:ye},props:X(),setup(e,o){let{slots:t}=o;const n=N(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:c}=K(e,"color"),l=u(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return T(()=>{var r;return R(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(r=t.default)==null?void 0:r.call(t,l.value),!e.hideActions&&a("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(l.value):a(fe,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[ne("ripple"),e.ripple]])}),{}}}),$e=b({title:String,text:String,bgColor:String,...y(),...ge(),...ue(),...j(),...be(),...O(),...X()},"VExpansionPanel"),qe=g()({name:"VExpansionPanel",props:$e(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=me(e,v),{backgroundColorClasses:s,backgroundColorStyles:c}=K(e,"bgColor"),{elevationClasses:l}=Te(e),{roundedClasses:r}=Pe(e),Q=u(()=>(n==null?void 0:n.disabled.value)||e.disabled),V=u(()=>n.group.items.value.reduce((d,i,S)=>(n.group.selected.value.includes(i.id)&&d.push(S),d),[])),U=u(()=>{const d=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&V.value.some(i=>i-d===1)}),Z=u(()=>{const d=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&V.value.some(i=>i-d===-1)});return te(v,n),W({VExpansionPanelText:{eager:f(e,"eager")},VExpansionPanelTitle:{readonly:f(e,"readonly")}}),T(()=>{const d=!!(t.text||e.text),i=!!(t.title||e.title);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":U.value,"v-expansion-panel--after-active":Z.value,"v-expansion-panel--disabled":Q.value},r.value,s.value,e.class],style:[c.value,e.style]},{default:()=>{var S;return[a("div",{class:["v-expansion-panel__shadow",...l.value]},null),i&&a(_e,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[t.title?t.title():e.title]}),d&&a(Ee,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(S=t.default)==null?void 0:S.call(t)]}})}),{}}}),Y=G({name:"FSAccordionPanel",components:{FSRichTextField:re,FSIcon:C,FSSpan:D,FSText:L,FSRow:z},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"}},setup(e){const{getColors:o}=de(),t=o(E.Background),n=o(E.Light);return{style:u(()=>({"--fs-accordion-panel-padding-title":_(e.paddingTitle),"--fs-accordion-panel-padding-content":_(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}});function Be(e,o,t,n,s,c){const l=I("FSText"),r=I("FSRichTextField");return m(),x(qe,ae({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:p(()=>[k(e.$slots,"title",{},()=>[a(z,null,{default:p(()=>[e.$props.prependIcon?(m(),x(C,{key:0},{default:p(()=>[P(h(e.$props.prependIcon),1)]),_:1})):A("",!0),a(D,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:p(()=>[P(h(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),text:p(()=>[k(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(m(),x(l,{key:0,lineClamp:e.$props.lineClampContent},{default:p(()=>[P(h(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(m(),x(r,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):A("",!0)])]),_:3},16,["collapseIcon","expandIcon","style"])}const we=H(Y,[["render",Be]]);Y.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const J=G({name:"FSAccordion",setup(){const{getChildren:e}=he();return{getChildren:e}}});function Ne(e,o,t,n,s,c){return m(),x(ke,{variant:"accordion"},{default:p(()=>[(m(!0),oe(se,null,le(e.getChildren(),(l,r)=>(m(),x(ie(l),{key:r}))),128))]),_:1})}const M=H(J,[["render",Ne]]);J.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const tt={title:"Foundation/Shared/Accordion",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},F={render:()=>({components:{FSAccordion:M,FSAccordionPanel:we,FSText:L,FSIcon:C,FSButton:Ce},template:`
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
}`,...(w=(B=F.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const at=["Variations"];export{F as Variations,at as __namedExportsOrder,tt as default};
