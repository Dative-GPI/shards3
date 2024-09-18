import{d as u,y as c,z as S,A as f,B as m,m as V,L as v,E as F,G as g,b,w as _}from"./vue.esm-bundler-BSyvBTC9.js";import{F as h}from"./FSSelectField-DGC4MS1S.js";import{u as w}from"./useTranslations-CdSqQFV3.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as $}from"./VIcon-BIpY_noq.js";import"./FSDialogMenu-D5T4tlYN.js";import"./FSCard-Dakm4bPu.js";import"./FSCol-DZA6pxA1.js";import"./css-DLfrm0pR.js";import"./FSRow-CA1vgNXx.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BygXFKwQ.js";import"./proxiedModel-Bq4wip6p.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSSlideGroup-CDcZ7it9.js";import"./uuid-DTaye2KM.js";import"./FSButton-BjjxnBJw.js";import"./FSClickable-CS9kdIxp.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-DwJNOKvG.js";import"./index-CHbvZ5Sj.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-dT-IKU0T.js";import"./FSWrapGroup-DgP826LK.js";import"./VInput-DO9fMQeR.js";import"./density-CDPzHPmZ.js";import"./form-B61Sg6X-.js";import"./FSBaseField-BkzmckaL.js";import"./VSpacer-C4plVoTE.js";import"./FSTextField-DOjRjaWh.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./VLabel-owjBjdIA.js";import"./loader-pPiux2KM.js";import"./rounded-Dg8mz8II.js";import"./index-D_lBla-s.js";import"./FSCheckbox-DPKcfP0u.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-D96pvLZm.js";import"./FSLoader-CtbqJzfZ.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-CTi9smel.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-B7wMH5Gc.js";import"./VMenu-BVgNprPc.js";var i=(e=>(e.Table="table",e.Iterator="iterator",e))(i||{});const s=u({name:"FSSelectViewMode",components:{FSSelectField:h},props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(){const{$tr:e}=w();return{items:[{id:i.Table,label:e("ui.common.table-mode","Table"),icon:"mdi-format-list-bulleted"},{id:i.Iterator,label:e("ui.common.tile-mode","Tuile"),icon:"mdi-view-grid-outline"}]}}});function L(e,o,T,y,I,N){const d=c("FSSelectField");return S(),f(d,V({clearable:!1,items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),{"item-prepend":m(({item:r})=>[v($,null,{default:m(()=>[F(g(r.icon),1)]),_:2},1024)]),_:1},16,["items","modelValue"])}const l=M(s,[["render",L]]);s.__docgenInfo={displayName:"FSSelectViewMode",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"ListModes"},required:!0}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectListMode.vue"]};const Pe={title:"Foundation/Shared/Selects/SelectListMode",component:l,tags:["autodocs"]},t={render:e=>({components:{FSSelectListMode:l},setup(){const o=b("iterator");return console.log(e),_(()=>e.modelValue,()=>{e.modelValue&&(o.value=e.modelValue)}),{args:e,value:o}},template:'<FSSelectListMode v-bind="args" v-model="value" />'})};var a,p,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSelectListMode
    },
    setup() {
      const value = ref("iterator");
      console.log(args);
      watch(() => args.modelValue, () => {
        if (args.modelValue) {
          value.value = args.modelValue;
        }
      });
      return {
        args,
        value
      };
    },
    template: \`<FSSelectListMode v-bind="args" v-model="value" />\`
  })
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const Ue=["Variations"];export{t as Variations,Ue as __namedExportsOrder,Pe as default};
