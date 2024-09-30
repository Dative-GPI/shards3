import{d as u,y as c,z as S,A as f,B as m,m as V,L as v,E as F,G as g,b,w as _}from"./vue.esm-bundler-CxS4_7kK.js";import{F as h}from"./FSSelectField-DujFH32C.js";import{u as w}from"./useTranslations-ZMyFjr19.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as $}from"./VIcon-C65wMs2G.js";import"./FSDialogMenu-1exdynOQ.js";import"./FSCard-uGx4g-q0.js";import"./FSCol-Co9r7Klj.js";import"./css-D18ueKtB.js";import"./FSRow-D546kqFt.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DpQhyQC8.js";import"./proxiedModel-DAUSUEYq.js";import"./anchor-CfU9RSql.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./locale-DgxPCyxi.js";import"./router-C4cLtMAM.js";import"./transition-DZ-8zzo1.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./FSSlideGroup-Cseplt4t.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./FSButton-D4qgd2ja.js";import"./FSClickable-xECbCdT3.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSIcon-DKHuRfPI.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./index-D0m5TbR6.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./VInput-BdNbghoa.js";import"./density-CY0EC5jE.js";import"./form-lyoENh9E.js";import"./FSBaseField-lEL5efap.js";import"./VSpacer-DaRxrr8q.js";import"./FSTextField-DxJVxYys.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./VLabel-DuhHDssR.js";import"./loader-BoG0AaGl.js";import"./rounded-Cd5tqTfa.js";import"./index-CQjBi2ms.js";import"./FSCheckbox-BJ0zq37S.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-D40FnrcD.js";import"./FSLoader-BMQDJgx0.js";import"./elevation-8SXivnh1.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-CEzGyfN4.js";import"./VMenu-CCWiAq1W.js";var i=(e=>(e.Table="table",e.Iterator="iterator",e))(i||{});const s=u({name:"FSSelectViewMode",components:{FSSelectField:h},props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(){const{$tr:e}=w();return{items:[{id:i.Table,label:e("ui.common.table-mode","Table"),icon:"mdi-format-list-bulleted"},{id:i.Iterator,label:e("ui.common.tile-mode","Tuile"),icon:"mdi-view-grid-outline"}]}}});function L(e,o,T,y,I,N){const d=c("FSSelectField");return S(),f(d,V({clearable:!1,items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),{"item-prepend":m(({item:r})=>[v($,null,{default:m(()=>[F(g(r.icon),1)]),_:2},1024)]),_:1},16,["items","modelValue"])}const l=M(s,[["render",L]]);s.__docgenInfo={displayName:"FSSelectViewMode",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"ListModes"},required:!0}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectListMode.vue"]};const He={title:"Foundation/Shared/Selects/SelectListMode",component:l,tags:["autodocs"]},t={render:e=>({components:{FSSelectListMode:l},setup(){const o=b("iterator");return console.log(e),_(()=>e.modelValue,()=>{e.modelValue&&(o.value=e.modelValue)}),{args:e,value:o}},template:'<FSSelectListMode v-bind="args" v-model="value" />'})};var a,p,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const Je=["Variations"];export{t as Variations,Je as __namedExportsOrder,He as default};
