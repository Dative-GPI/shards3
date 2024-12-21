import{d as u,A as c,B as S,D as m,j as f,I as V,P as v,J as F,K as g,b,w as _}from"./vue.esm-bundler-DSwHwgKw.js";import{F as h}from"./FSSelectField-B57nAJL5.js";import{u as w}from"./useTranslations-BhPzmPwL.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as $}from"./VIcon-CdjjMQ6V.js";import"./VList-OaBQE2Q_.js";import"./FSCard-CWjVUhn7.js";import"./FSCol-DdGVae5t.js";import"./css-XXwFKvUE.js";import"./useBreakpoints-BjF6TIJH.js";import"./FSRow-BtkEywPN.js";import"./useColors-DygOvNHW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-4AjdAhIV.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./forwardRefs-DWGaNmQL.js";import"./color-uBYwhjku.js";import"./proxiedModel-D4Pgijkw.js";import"./anchor-7worbrUf.js";import"./dimensions-CF0PFV-D.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./locale-BsRwbRmi.js";import"./router-C4I-dA4c.js";import"./transition--2cAMn_j.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./index-GTe7atjb.js";import"./ssrBoot-DEXW_-kf.js";import"./border-C-pp2UFW.js";import"./density-BfjPyHiq.js";import"./elevation-DiTecsj1.js";import"./rounded-ZilIy1Oq.js";import"./index-BOr5YZLb.js";import"./VImg-DSalXW5F.js";import"./index-D4rR88Q2.js";import"./FSSlideGroup-Bs9ckHJg.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BK3kBHXZ.js";import"./FSButton-CZktm7s_.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-DelSIl2e.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./FSSpan-BoXQ4lG9.js";import"./useSlots-CKCq4R6P.js";import"./FSIcon-CEKLJFZW.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./FSToggleSet-D1BkkvzH.js";import"./FSWrapGroup-ZJy-fiiN.js";import"./VInput-21AfxGIO.js";import"./form-BWUCG2_i.js";import"./FSBaseField-Cv6zgx5K.js";import"./FSTextField-C1PHWLgt.js";import"./useRules-CaMdh5L0.js";import"./VField-YT2KDH-x.js";import"./VLabel-DSPSNe0W.js";import"./loader-kTKV0tNq.js";import"./FSCheckbox-DB01UzhL.js";import"./VSelectionControl-CTHKpAmd.js";import"./FSFadeOut-CBhxmVD0.js";import"./FSLoader-BtzNF95D.js";import"./FSRadio-CYoU36u8.js";import"./VSelect-BULgYbJ_.js";import"./VMenu-B9SE09pj.js";var i=(e=>(e.Table="table",e.Iterator="iterator",e))(i||{});const s=u({name:"FSSelectViewMode",components:{FSSelectField:h},props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(){const{$tr:e}=w();return{items:[{id:i.Table,label:e("ui.common.table","Table"),icon:"mdi-format-list-bulleted"},{id:i.Iterator,label:e("ui.common.iterator","Tile"),icon:"mdi-view-grid-outline"}]}}});function L(e,o,T,I,y,N){const d=c("FSSelectField");return V(),S(d,f({clearable:!1,items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),{"item-prepend":m(({item:r})=>[v($,null,{default:m(()=>[F(g(r.icon),1)]),_:2},1024)]),_:1},16,["items","modelValue"])}const l=M(s,[["render",L]]);s.__docgenInfo={displayName:"FSSelectViewMode",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"ListModes"},required:!0}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectListMode.vue"]};const ze={title:"Foundation/Shared/Selects/SelectListMode",component:l,tags:["autodocs"]},t={render:e=>({components:{FSSelectListMode:l},setup(){const o=b("iterator");return console.log(e),_(()=>e.modelValue,()=>{e.modelValue&&(o.value=e.modelValue)}),{args:e,value:o}},template:'<FSSelectListMode v-bind="args" v-model="value" />'})};var a,p,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const Ge=["Variations"];export{t as Variations,Ge as __namedExportsOrder,ze as default};
