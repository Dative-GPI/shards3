import{g as P,j as $,J as N,K as n,L as s,M as d,x as Q,X as U,z as X,R as y,N as h,O as V,P as k,S as I,U as q,V as w,Q as c,F as m,Z as F,$ as S,D as A}from"./vue.esm-bundler-0a1af505.js";import{F as Z}from"./FSButton-87a8d4ab.js";import{_ as z}from"./FSSpan-50615fe3.js";import{_ as O}from"./FSIcon-8481a0c6.js";import{_ as R}from"./FSRow-852c6353.js";import{C,u as E}from"./useColors-128f3c4d.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{F as j}from"./FSSlideGroup-1589ffb4.js";import{_ as L}from"./FSWrapGroup-c4cc1896.js";import{u as H}from"./useSlots-de2ef136.js";import{s as Y}from"./css-415780ec.js";import{F as x}from"./FSText-9a3c7352.js";import"./vue-router-f60daad6.js";import"./FSCard-985d3fa3.js";import"./FSCol-5b91b447.js";import"./VProgressCircular-1c311cd8.js";import"./color-68d45c69.js";import"./theme-2d24b19c.js";import"./useRender-cc726afb.js";import"./intersectionObserver-bdfff18f.js";import"./resizeObserver-86c9045a.js";import"./VIcon-a19d44fc.js";import"./tag-e48f136a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSButtonNextIcon-6de2de76.js";import"./VSlideGroup-6393fefa.js";import"./index-d90e6acb.js";import"./display-b22dea51.js";import"./group-439abacb.js";import"./proxiedModel-7a45f3f8.js";import"./locale-767f04a5.js";const M=P({name:"FSOptionItem",components:{FSClickable:Z,FSSpan:z,FSIcon:O,FSRow:R},props:{prependIcon:{type:String,required:!1,default:null},label:{type:[String,Function],required:!1,default:null},appendIcon:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:C.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click"],setup(e,{emit:o}){const{getColors:f}=E(),g=$(()=>f(e.color)),v=$(()=>e.label?"fit-content":"72px");return{colors:g,width:v,onClick:u=>{e.editable&&!e.load&&o("click",u)}}}});function _(e,o,f,g,v,t){const u=N("FSClickable");return n(),s(u,Q({padding:"12px 0",editable:e.$props.editable,height:["32px","28px"],variant:e.$props.variant,color:e.$props.color,load:e.$props.load,width:e.width,onClick:U(e.onClick,["stop"])},e.$attrs),{default:d(()=>[X(R,{align:"center-center",width:"fill",wrap:!1},{default:d(()=>[y(e.$slots,"prepend",I(q({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon||e.$props.icon?(n(),s(O,{key:0,size:"l"},{default:d(()=>[h(V(e.$props.prependIcon??e.$props.icon),1)]),_:1})):k("",!0)]),y(e.$slots,"default",I(q({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(n(),s(z,{key:0},{default:d(()=>[h(V(e.$props.label),1)]),_:1})):k("",!0)]),y(e.$slots,"append",I(q({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(n(),s(O,{key:0,size:"l"},{default:d(()=>[h(V(e.$props.appendIcon),1)]),_:1})):k("",!0)])]),_:3})]),_:3},16,["editable","variant","color","load","width","onClick"])}const W=D(M,[["render",_]]);M.__docgenInfo={displayName:"FSOptionItem",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string|func"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click"}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionItem.vue"]};const J=P({name:"FSOptionGroup",components:{FSOptionItem:W,FSSlideGroup:j,FSWrapGroup:L},props:{values:{type:Array,required:!1,default:()=>[]},border:{type:Boolean,required:!1,default:!0},borderRadius:{type:[String,Number],required:!1,default:"4px"},variant:{type:String,required:!1,default:"wrap"},optionVariant:{type:String,required:!1,default:"full"},activeVariant:{type:String,required:!1,default:"full"},optionClass:{type:[Array,String],required:!1,default:null},activeClass:{type:[Array,String],required:!1,default:null},modelValue:{type:[Array,String,Number],required:!1,default:!1},optionColor:{type:String,required:!1,default:C.Background},activeColor:{type:String,required:!1,default:C.Primary},padding:{type:[String,Number],required:!1,default:"3px"},gap:{type:[String,Number],required:!1,default:"0"},multiple:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{getFirstChild:f}=H(),{getColors:g}=E(),v=g(C.Light),t=f("item"),u=$(()=>({"--fs-option-group-border-size":e.border?"1px":"0","--fs-option-group-border-radius":Y(e.borderRadius),"--fs-option-group-border-color":v.base})),a=(r,l)=>{switch(r){case"prependIcon":return t.props.prependIcon??l.prependIcon;case"label":return t.props.label??l.label;case"appendIcon":return t.props.appendIcon??l.appendIcon;case"icon":return t.props.icon??l.icon;case"variant":return t.props.variant??i(l);case"color":return t.props.color??p(l);default:return t.props[r]}},i=r=>Array.isArray(e.modelValue)&&e.modelValue.some(l=>l===r.id)||!Array.isArray(e.modelValue)&&e.modelValue===r.id?e.activeVariant:e.optionVariant,p=r=>Array.isArray(e.modelValue)&&e.modelValue.some(l=>l===r.id)||!Array.isArray(e.modelValue)&&e.modelValue===r.id?e.activeColor:e.optionColor;return{firstChild:t,style:u,getFromFirstChild:a,getVariant:i,getColor:p,getClass:r=>Array.isArray(e.modelValue)&&e.modelValue.some(l=>l===r.id)||!Array.isArray(e.modelValue)&&e.modelValue===r.id?e.activeClass:e.optionClass,toggle:r=>{if(Array.isArray(e.modelValue))if(e.multiple)if(e.modelValue.length&&e.modelValue.every(l=>l===r.id)){if(!e.required){o("update:modelValue",[]);return}}else if(e.modelValue.some(l=>l===r.id)){o("update:modelValue",e.modelValue.filter(l=>l!==r.id));return}else{o("update:modelValue",[...e.modelValue,r.id]);return}else if(e.modelValue.some(l=>l===r.id)){if(!e.required){o("update:modelValue",[]);return}}else{o("update:modelValue",[r.id]);return}else if(e.modelValue===r.id){if(!e.required){o("update:modelValue",null);return}}else{o("update:modelValue",r.id);return}}}}});function ee(e,o,f,g,v,t){const u=N("FSOptionItem");return["wrap"].includes(e.$props.variant)?(n(),s(L,{key:0,class:"fs-option-group",padding:e.$props.padding,gap:e.$props.gap,style:w(e.style)},{default:d(()=>[e.$props.values.length?(n(),c(m,{key:0},[e.firstChild?(n(!0),c(m,{key:1},F(e.$props.values,(a,i)=>(n(),s(A(e.firstChild),{key:i,prependIcon:e.getFromFirstChild("prependIcon",a),appendIcon:e.getFromFirstChild("appendIcon",a),variant:e.getFromFirstChild("variant",a),color:e.getFromFirstChild("color",a),class:S(e.getFromFirstChild("class",a)),label:e.getFromFirstChild("label",a),icon:e.getFromFirstChild("icon",a),editable:e.$props.editable,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","variant","color","class","label","icon","editable","onClick"]))),128)):(n(!0),c(m,{key:0},F(e.$props.values,(a,i)=>(n(),s(u,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.$props.editable,variant:e.getVariant(a),color:e.getColor(a),class:S(e.getClass(a)),label:a.label,icon:a.icon,key:i,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):y(e.$slots,"default",{key:1})]),_:3},8,["padding","gap","style"])):(n(),s(j,{key:1,class:"fs-option-group",padding:e.$props.padding,gap:e.$props.gap,style:w(e.style)},{default:d(()=>[e.$props.values.length?(n(),c(m,{key:0},[e.firstChild?(n(!0),c(m,{key:1},F(e.$props.values,(a,i)=>(n(),s(A(e.firstChild),{key:i,prependIcon:e.getFromFirstChild("prependIcon",a),appendIcon:e.getFromFirstChild("appendIcon",a),variant:e.getFromFirstChild("variant",a),color:e.getFromFirstChild("color",a),class:S(e.getFromFirstChild("class",a)),label:e.getFromFirstChild("label",a),icon:e.getFromFirstChild("icon",a),editable:e.$props.editable,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","variant","color","class","label","icon","editable","onClick"]))),128)):(n(!0),c(m,{key:0},F(e.$props.values,(a,i)=>(n(),s(u,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.$props.editable,variant:e.getVariant(a),color:e.getColor(a),class:S(e.getClass(a)),label:a.label,icon:a.icon,key:i,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):y(e.$slots,"default",{key:1})]),_:3},8,["padding","gap","style"]))}const K=D(J,[["render",ee]]);J.__docgenInfo={displayName:"FSOptionGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"FSToggle[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"variant",values:["wrap","slide"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"wrap"'}},{name:"optionVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"activeVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"optionClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"activeClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"(string | number)[] | string | number"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"optionColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Background"}},{name:"activeColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"padding",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"3px"'}},{name:"gap",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionGroup.vue"]};const Ne={title:"Foundation/Shared/OptionGroup",component:K,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{values1:[...Array(10).keys()].map(e=>({id:e.toString(),icon:`mdi-numeric-${e+1}`})),value1:[],values2:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-dice-${e+1}-outline`})),value2:null,values3:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-hexagon-slice-${e+1}`})),value3:[0],value4:"0"}},render:(e,{argTypes:o})=>({components:{FSOptionGroup:K,FSOptionItem:W,FSText:x},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Props only, wrap, single selection, not required </FSText>
      <FSOptionGroup
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="success"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="dark"
        :multiple="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item>
          <FSOptionItem
            appendIcon="mdi-ski-water"
          />
        </template>
      </FSOptionGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSOptionGroup
        padding="8px"
        gap="8px"
        :modelValue="args.value4"
      >
        <FSOptionItem
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'success' : 'error'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'success' : 'error'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'success' : 'error'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'success' : 'error'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'success' : 'error'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
      </FSOptionGroup>
    </div>`})};var T,G,B;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    args: {
      values1: [...Array(10).keys()].map(i => ({
        id: i.toString(),
        icon: \`mdi-numeric-\${i + 1}\`
      })),
      value1: [],
      values2: [...Array(6).keys()].map(i => ({
        id: i.toString(),
        icon: \`mdi-dice-\${i + 1}-outline\`
      })),
      value2: null,
      values3: [...Array(6).keys()].map(i => ({
        id: i.toString(),
        icon: \`mdi-hexagon-slice-\${i + 1}\`
      })),
      value3: [0],
      value4: "0"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSOptionGroup,
      FSOptionItem,
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Props only, wrap, single selection, not required </FSText>
      <FSOptionGroup
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="success"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="dark"
        :multiple="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item>
          <FSOptionItem
            appendIcon="mdi-ski-water"
          />
        </template>
      </FSOptionGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSOptionGroup
        padding="8px"
        gap="8px"
        :modelValue="args.value4"
      >
        <FSOptionItem
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'success' : 'error'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'success' : 'error'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'success' : 'error'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'success' : 'error'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'success' : 'error'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
      </FSOptionGroup>
    </div>\`
  })
}`,...(B=(G=b.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};const ze=["Variations"];export{b as Variations,ze as __namedExportsOrder,Ne as default};
