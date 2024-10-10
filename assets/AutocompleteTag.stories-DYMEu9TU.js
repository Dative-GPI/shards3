import{d as v,b,c,w as F,y as C,z as S,A,B as w,O as T,m as k,C as _,K as $,L as q,M as B}from"./vue.esm-bundler-DTB_q9xr.js";import{F as I}from"./FSAutocompleteField-BSQsIiQB.js";import{u as K}from"./uuid-DTaye2KM.js";import{u as P}from"./useTranslations-BehwFxDb.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSCol-CYWCfIBP.js";import"./FSSearchField-CAI8fEsN.js";import"./FSTextField-B-binuYf.js";import"./FSBaseField-D2wwYX9r.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useColors-BWKJNLz8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CX_N7n5F.js";import"./VSpacer-Di7g3RCw.js";import"./color-Du5JXqac.js";import"./FSButton-C0EbsNmZ.js";import"./FSClickable-BkJRwj5f.js";import"./FSCard-C6D9gNrD.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSIcon-CaaGuK6D.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./index-UH0ZuYvc.js";import"./transition-DhTIerNz.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./locale-BJQwrXJ7.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./rounded-ErtzAGHK.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./FSDialogMenu-BA4IKkHH.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./router-DxFny788.js";import"./FSSlideGroup--K704DO9.js";import"./FSButtonNextIcon-DF3eQVXp.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./FSToggleSet-CvGKl15-.js";import"./FSWrapGroup-Dplk4rjv.js";import"./FSCheckbox-Bdwx0Alv.js";import"./VSelectionControl-CFrRrZff.js";import"./index-DMxVfgfA.js";import"./FSFadeOut-BZtF86_A.js";import"./FSLoader-BFHjXl9p.js";import"./elevation-JfXKLVfD.js";import"./FSRadio-DA5JqUMw.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./VImg-C1aVTsth.js";import"./VSelect-oAa5CmWC.js";import"./VMenu-CuKNZEBs.js";import"./filter-COIlslko.js";const V=v({components:{FSAutocompleteField:I},props:{placeholder:{type:String,required:!1,default:null},items:{type:Array,required:!1,default:()=>[]},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:o}){const{$tr:u}=P(),m=b([]),i=c(()=>e.items.concat(m.value)),d=c(()=>{var t;return!e.modelValue||e.modelValue.length===0?null:e.placeholder??u("ui.autocomplete-tag.items-selected","{0} item(s) selected",((t=e.modelValue)==null?void 0:t.length)??0)}),s=t=>{o("update:modelValue",t==null?void 0:t.map(a=>i.value.find(p=>p.id===a)))},r=t=>{o("update:modelValue",[...e.modelValue??[],{id:K(),label:t,isCustom:!0}])},l=t=>{t.key==="Backspace"&&o("update:modelValue",[...e.modelValue??[]])};return F(()=>e.modelValue,t=>{var a;t&&(m.value=((a=e.modelValue)==null?void 0:a.filter(p=>p.isCustom))??[])},{immediate:!0}),{innerPlaceholder:d,innerItems:i,onUpdateModelValue:s,onAddItem:r,onKeydown:l}}});function U(e,o,u,m,i,d){var r;const s=C("FSAutocompleteField");return S(),A(s,k({placeholder:e.innerPlaceholder,items:e.innerItems,showSearch:!0,multiple:!0,modelValue:(r=e.modelValue)==null?void 0:r.map(l=>l.id),"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},e.$attrs),w({_:2},[T(e.$slots,(l,t)=>({name:t,fn:_(a=>[$(e.$slots,t,q(B(a)))])}))]),1040,["placeholder","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])}const y=N(V,[["render",U]]);V.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"{id: string, label: string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"{id: string, label: string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteTag.vue"]};const et={title:"Foundation/Shared/Input fields/AutocompleteTag",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{items:[{id:"1",label:"Alpha",isCustom:!1},{id:"2",label:"Beta",isCustom:!1},{id:"3",label:"Charly",isCustom:!1}],value1:null,value2:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTag:y,FSCol:O},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteTag
        label="Default items and new value"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTag
        label="New value"
        v-model="args.value2"
      />
    </FSCol>`})};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: "1",
        label: "Alpha",
        isCustom: false
      }, {
        id: "2",
        label: "Beta",
        isCustom: false
      }, {
        id: "3",
        label: "Charly",
        isCustom: false
      }],
      value1: null,
      value2: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteTag,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteTag
        label="Default items and new value"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTag
        label="New value"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const tt=["Variations"];export{n as Variations,tt as __namedExportsOrder,et as default};
