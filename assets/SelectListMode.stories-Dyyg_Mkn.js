import{d as u,y as c,z as S,A as f,C as m,m as V,N as v,H as F,I as g,b,w as _}from"./vue.esm-bundler-DTB_q9xr.js";import{F as h}from"./FSSelectField-DkqD7weE.js";import{u as w}from"./useTranslations-BehwFxDb.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as $}from"./VIcon-BCDp5TRU.js";import"./FSDialogMenu-Cb0sycmV.js";import"./FSCard-GtkwWKOo.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./FSRow-CFFgZ74C.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DBJfw4cY.js";import"./proxiedModel-z3p0-M-h.js";import"./anchor-Cu9IQeug.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./locale-BJQwrXJ7.js";import"./router-DHMAfVHW.js";import"./transition-B83BVatf.js";import"./VDefaultsProvider-S-S54iS4.js";import"./FSSlideGroup-BvayNA85.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-CJgnsR4e.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./index-CiXeh9xR.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./VInput-BwoMaTW2.js";import"./density-CJqFEH6j.js";import"./form-D8F-RrsG.js";import"./FSBaseField-BJvLi7Av.js";import"./VSpacer-y-n940VK.js";import"./FSTextField-DpQImVLP.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./VLabel-DFQa5Qos.js";import"./loader-Cs6S2SUJ.js";import"./rounded-DM_o2hWD.js";import"./index-C31q_73Z.js";import"./FSCheckbox-BlU3VZ1O.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";var i=(e=>(e.Table="table",e.Iterator="iterator",e))(i||{});const s=u({name:"FSSelectViewMode",components:{FSSelectField:h},props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(){const{$tr:e}=w();return{items:[{id:i.Table,label:e("ui.common.table-mode","Table"),icon:"mdi-format-list-bulleted"},{id:i.Iterator,label:e("ui.common.tile-mode","Tuile"),icon:"mdi-view-grid-outline"}]}}});function L(e,o,T,y,I,N){const d=c("FSSelectField");return S(),f(d,V({clearable:!1,items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),{"item-prepend":m(({item:r})=>[v($,null,{default:m(()=>[F(g(r.icon),1)]),_:2},1024)]),_:1},16,["items","modelValue"])}const l=M(s,[["render",L]]);s.__docgenInfo={displayName:"FSSelectViewMode",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"ListModes"},required:!0}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectListMode.vue"]};const Ge={title:"Foundation/Shared/Selects/SelectListMode",component:l,tags:["autodocs"]},t={render:e=>({components:{FSSelectListMode:l},setup(){const o=b("iterator");return console.log(e),_(()=>e.modelValue,()=>{e.modelValue&&(o.value=e.modelValue)}),{args:e,value:o}},template:'<FSSelectListMode v-bind="args" v-model="value" />'})};var a,p,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const Je=["Variations"];export{t as Variations,Je as __namedExportsOrder,Ge as default};