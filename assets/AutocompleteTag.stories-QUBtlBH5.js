import{d as h,b as T,c as k,w as q,y as b,Y as B,z as u,A as d,B as g,X as V,D as E}from"./vue.esm-bundler-gWFTcvUr.js";import{F as K}from"./FSAutocompleteField-DePWACpW.js";import{F as N}from"./FSTagGroup-Cw6h1z67.js";import{u as U}from"./uuid-DTaye2KM.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as S}from"./FSCol-DX423FHf.js";import"./FSSearchField-xtHQygQf.js";import"./FSTextField-DZxUijBd.js";import"./FSBaseField-DM1DfhdE.js";import"./FSSpan-BlywDO8Z.js";import"./useSlots-qbJuQIJ1.js";import"./FSRow-Bpa2jjpJ.js";import"./css-Bc8dJONt.js";import"./useColors-vfWFlOSD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DA9ermhM.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./FSButton-CDk00Rln.js";import"./FSClickable-BVFP8bZP.js";import"./FSCard-Dkx-Z7Pt.js";import"./VProgressCircular-DqlO5PEF.js";import"./VIcon-BiBYr0XY.js";import"./FSIcon-C5ELG8c1.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-5sq61y-r.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-B2BuItpn.js";import"./FSRadio-0vVABvir.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-B78RpUCe.js";import"./FSSlideGroup-Bf0KNeOu.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-B3SUGyqE.js";import"./FSCheckbox-DbtWxwzz.js";import"./FSFadeOut-CLF884DQ.js";import"./FSLoader-Dr6heSeB.js";import"./elevation-B3TY2UXi.js";import"./VSelect-CwYrSzi9.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSTag-CD-M9F9K.js";import"./VBtn-BQZMGoLN.js";const w=h({components:{FSAutocompleteField:K,FSTagGroup:N},props:{modelValue:{type:Array,required:!1,default:()=>[]},items:{type:Array,required:!1,default:()=>[]},label:{type:String,required:!1},variant:{type:String,required:!1,default:"standard"}},emits:["update:modelValue"],setup(e,{emit:n}){const m=T([]),r=k(()=>e.variant==="standard"?e.items:e.items.concat(m.value)),f=t=>{n("update:modelValue",t==null?void 0:t.map(o=>r.value.find(l=>l.id===o)))},v=t=>{var l,i;const o=(l=r.value.find(a=>a.label===t))==null?void 0:l.id;o&&(m.value.map(a=>a.label).includes(t)&&(m.value=m.value.filter(a=>a.label!==t)),n("update:modelValue",[...((i=e.modelValue)==null?void 0:i.filter(a=>a.id!==o))??[]]))},s=t=>{if(r.value.map(l=>l.label).includes(t))return;let o={id:U(),label:t,isCustom:!0};m.value.push(o),n("update:modelValue",[...e.modelValue??[],o])},c=t=>{t.key==="Backspace"&&n("update:modelValue",[...e.modelValue??[]])};return q(()=>e.modelValue,t=>{var o;t&&(m.value=((o=e.modelValue)==null?void 0:o.filter(l=>l.isCustom))??[])},{immediate:!0}),{innerItems:r,onUpdateModelValue:f,onAddItem:s,onRemoveValue:v,onKeydown:c}}});function _(e,n,m,r,f,v){const s=b("FSAutocompleteField"),c=b("FSTagGroup"),t=B("binds");return u(),d(S,null,{default:g(()=>{var o,l,i;return[e.variant=="standard"?V((u(),d(s,{key:0,label:e.label,items:e.innerItems,multiple:!0,modelValue:(o=e.modelValue)==null?void 0:o.map(a=>a.id),"onUpdate:modelValue":e.onUpdateModelValue,onKeydown:e.onKeydown},{"autocomplete-chip":g(()=>[]),_:1},8,["label","items","modelValue","onUpdate:modelValue","onKeydown"])),[[t,e.$attrs]]):V((u(),d(s,{key:1,label:e.label,items:e.innerItems,multiple:!0,modelValue:(l=e.modelValue)==null?void 0:l.map(a=>a.id),showSearch:!0,"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},{"autocomplete-chip":g(()=>[]),_:1},8,["label","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])),[[t,e.$attrs]]),e.modelValue!=null?(u(),d(c,{key:2,tags:((i=e.modelValue)==null?void 0:i.map(a=>a.label))??[],onRemove:n[0]||(n[0]=a=>e.onRemoveValue(a))},null,8,["tags"])):E("",!0)]}),_:1})}const A=I(w,[["render",_]]);w.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"modelValue",type:{name:"{id : string, label : string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"items",type:{name:"{id : string, label : string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"label",type:{name:"string"},required:!1},{name:"variant",values:["standard","tagged"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'standard'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTag.vue"]};const Ze={title:"Foundation/Shared/Autocompletes/AutocompleteTag",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:[{id:"1",label:"Non",isCustom:!1},{id:"2",label:"Etage",isCustom:!1}],value2:[{id:"1",label:"Non",isCustom:!1},{id:"2",label:"Etage",isCustom:!1},{id:"3",label:"Buée",isCustom:!1}],value3:[{id:"3",label:"Buée",isCustom:!1}],value4:[]}},render:(e,{argTypes:n})=>({components:{FSAutocompleteTag:A,FSCol:S},props:Object.keys(n),setup(){return{...e}},template:`
    <FSCol gap="24px">
      <FSAutocompleteTag
        label="default autocomplete width tag"
        :items="args.value2"
        v-model="args.value1"
      />
      <FSAutocompleteTag
        label="custom autocomplete width default items and new value"
        variant="tagged"
        :items="args.value2"
        v-model="args.value3"
      />
      <FSAutocompleteTag
        label="custom autocomplete with new value only"
        variant="tagged"
        :items="[]"
        v-model="args.value4"
      />
    </FSCol>`})};var y,F,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    args: {
      value1: [{
        id: "1",
        label: "Non",
        isCustom: false
      }, {
        id: "2",
        label: "Etage",
        isCustom: false
      }],
      value2: [{
        id: "1",
        label: "Non",
        isCustom: false
      }, {
        id: "2",
        label: "Etage",
        isCustom: false
      }, {
        id: "3",
        label: "Buée",
        isCustom: false
      }],
      value3: [{
        id: "3",
        label: "Buée",
        isCustom: false
      }],
      value4: []
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
    <FSCol gap="24px">
      <FSAutocompleteTag
        label="default autocomplete width tag"
        :items="args.value2"
        v-model="args.value1"
      />
      <FSAutocompleteTag
        label="custom autocomplete width default items and new value"
        variant="tagged"
        :items="args.value2"
        v-model="args.value3"
      />
      <FSAutocompleteTag
        label="custom autocomplete with new value only"
        variant="tagged"
        :items="[]"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(C=(F=p.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const xe=["Variations"];export{p as Variations,xe as __namedExportsOrder,Ze as default};
