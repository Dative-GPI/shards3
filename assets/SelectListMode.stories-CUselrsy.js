import{d as u,y as c,z as S,A as f,C as m,m as V,N as v,H as F,I as g,b,w as _}from"./vue.esm-bundler-DTB_q9xr.js";import{F as h}from"./FSSelectField-D1Nc8VlW.js";import{u as w}from"./useTranslations-BehwFxDb.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as $}from"./VIcon-DzZvThha.js";import"./FSDialogMenu-SygzX68j.js";import"./FSCard-BJoqsHyz.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./FSRow-CFFgZ74C.js";import"./useColors-DTi99Ybi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CX_N7n5F.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Du5JXqac.js";import"./proxiedModel-Atn7Z0Ko.js";import"./anchor-0mwNUa2-.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./locale-BJQwrXJ7.js";import"./router-DxFny788.js";import"./transition-DhTIerNz.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./FSSlideGroup-DB-VrkfJ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CTPOL1ok.js";import"./FSButton-QMwUyqLg.js";import"./FSClickable-BE7nqA8Z.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-bZBIO--g.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./index-UH0ZuYvc.js";import"./FSToggleSet-sqS_0m-l.js";import"./FSWrapGroup-ContUtLx.js";import"./VInput-DGUvNq3c.js";import"./density-CmGe4Vfq.js";import"./form-_oo3cshG.js";import"./FSBaseField-Dg_2QPSd.js";import"./VSpacer-Di7g3RCw.js";import"./FSTextField-DxizsfKE.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./VLabel-33JaQml4.js";import"./loader-BYp4SDfR.js";import"./rounded-ErtzAGHK.js";import"./index-DS9MhfY5.js";import"./FSCheckbox-OT0jrbQK.js";import"./VSelectionControl-CFrRrZff.js";import"./index-DMxVfgfA.js";import"./FSFadeOut-h32PDSwF.js";import"./FSLoader-rPZmak_e.js";import"./elevation-JfXKLVfD.js";import"./FSRadio-yKt84OXT.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./VImg-C1aVTsth.js";import"./VSelect-CA89ksEG.js";import"./VMenu-CuKNZEBs.js";var i=(e=>(e.Table="table",e.Iterator="iterator",e))(i||{});const s=u({name:"FSSelectViewMode",components:{FSSelectField:h},props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(){const{$tr:e}=w();return{items:[{id:i.Table,label:e("ui.common.table-mode","Table"),icon:"mdi-format-list-bulleted"},{id:i.Iterator,label:e("ui.common.tile-mode","Tuile"),icon:"mdi-view-grid-outline"}]}}});function L(e,o,T,y,I,N){const d=c("FSSelectField");return S(),f(d,V({clearable:!1,items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),{"item-prepend":m(({item:r})=>[v($,null,{default:m(()=>[F(g(r.icon),1)]),_:2},1024)]),_:1},16,["items","modelValue"])}const l=M(s,[["render",L]]);s.__docgenInfo={displayName:"FSSelectViewMode",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"ListModes"},required:!0}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectListMode.vue"]};const Ge={title:"Foundation/Shared/Selects/SelectListMode",component:l,tags:["autodocs"]},t={render:e=>({components:{FSSelectListMode:l},setup(){const o=b("iterator");return console.log(e),_(()=>e.modelValue,()=>{e.modelValue&&(o.value=e.modelValue)}),{args:e,value:o}},template:'<FSSelectListMode v-bind="args" v-model="value" />'})};var a,p,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
