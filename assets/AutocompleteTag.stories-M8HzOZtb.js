import{d as v,b,c,w as F,y as S,z as C,A,M as w,N as T,m as _,B as k,I as $,J as I,K as q}from"./vue.esm-bundler-Vj2X7okO.js";import{F as B}from"./FSAutocompleteField-8hM35Zws.js";import{u as K}from"./uuid-DTaye2KM.js";import{u as N}from"./useTranslations-DyPMaPr_.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./FSCol-Bk577joi.js";import"./FSSearchField-C-Ns7NpV.js";import"./FSTextField-xplhuXw_.js";import"./FSBaseField-Bip4KV2X.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-Bw2ZR-m1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./VSpacer-YT0o3rZT.js";import"./color-CxiNukW_.js";import"./FSButton-9Jyc5oF6.js";import"./FSClickable-B4ZW0Yow.js";import"./FSCard-U7GdUEkx.js";import"./VProgressCircular-DnrgPZB3.js";import"./tag-DxanhlL3.js";import"./FSIcon-uPx7S--r.js";import"./VIcon-DptP6m9n.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./index-joExpvzU.js";import"./transition-CQDsmRPd.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./locale-CMOn_BOp.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./form-CgybbRT3.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-jvVque46.js";import"./FSDialogMenu-7NQLw-fe.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-BrsH_RdA.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-DeUMSMgz.js";import"./FSWrapGroup-Bqec5oyw.js";import"./FSCheckbox-Bsnpn4tO.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./FSFadeOut-BAo4zk1P.js";import"./VImg-BUrdc1ij.js";import"./elevation-BH8AnXAq.js";import"./FSRadio-B1FN7cQo.js";import"./VList-DzB42uLT.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-Dca9hLjt.js";import"./VMenu-DOKVMVxb.js";import"./filter-CkY1Z-lm.js";const V=v({components:{FSAutocompleteField:B},props:{placeholder:{type:String,required:!1,default:null},items:{type:Array,required:!1,default:()=>[]},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:o}){const{$tr:u}=N(),m=b([]),i=c(()=>e.items.concat(m.value)),d=c(()=>{var t;return!e.modelValue||e.modelValue.length===0?null:e.placeholder??u("ui.autocomplete-tag.items-selected","{0} item(s) selected",((t=e.modelValue)==null?void 0:t.length)??0)}),s=t=>{o("update:modelValue",t==null?void 0:t.map(a=>i.value.find(p=>p.id===a)))},l=t=>{o("update:modelValue",[...e.modelValue??[],{id:K(),label:t,isCustom:!0}])},r=t=>{t.key==="Backspace"&&o("update:modelValue",[...e.modelValue??[]])};return F(()=>e.modelValue,t=>{var a;t&&(m.value=((a=e.modelValue)==null?void 0:a.filter(p=>p.isCustom))??[])},{immediate:!0}),{innerPlaceholder:d,innerItems:i,onUpdateModelValue:s,onAddItem:l,onKeydown:r}}});function M(e,o,u,m,i,d){var l;const s=S("FSAutocompleteField");return C(),A(s,_({placeholder:e.innerPlaceholder,items:e.innerItems,showSearch:!0,multiple:!0,modelValue:(l=e.modelValue)==null?void 0:l.map(r=>r.id),"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},e.$attrs),w({_:2},[T(e.$slots,(r,t)=>({name:t,fn:k(a=>[$(e.$slots,t,I(q(a)))])}))]),1040,["placeholder","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])}const y=P(V,[["render",M]]);V.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"{id: string, label: string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"{id: string, label: string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteTag.vue"]};const Xe={title:"Foundation/Shared/Input fields/AutocompleteTag",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{items:[{id:"1",label:"Alpha",isCustom:!1},{id:"2",label:"Beta",isCustom:!1},{id:"3",label:"Charly",isCustom:!1}],value1:null,value2:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTag:y,FSCol:U},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Ye=["Variations"];export{n as Variations,Ye as __namedExportsOrder,Xe as default};
