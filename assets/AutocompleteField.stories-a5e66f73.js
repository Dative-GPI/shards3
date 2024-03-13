import{d as U,s as P,j as b,w as B,n as me,z as r,F as Q,x as $,L as N,g as Ee,I as D,J as O,K as R,P as ae,S as z,M as oe,N as M,W as _e,X as Ke,Q as je,R as He}from"./vue.esm-bundler-72feb788.js";import{_ as L}from"./FSSpan-0b48c446.js";import{_ as X}from"./FSCol-df85c70b.js";import{_ as se}from"./FSRow-ae483077.js";import{u as ze}from"./VField-aa8d0612.js";import{u as Je,C as ne}from"./useColors-1fcec14a.js";import{u as We}from"./useSlots-a83038d8.js";import{_ as Qe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Xe}from"./VSpacer-9ee9e868.js";import{m as Ge,u as Ye,a as Ze,b as el,c as ce,d as ll,e as tl,f as al,g as ol}from"./VSelect-19549f44.js";import{m as nl,V as pe}from"./VTextField-4b986ab3.js";import{u as rl}from"./color-564bd659.js";import{m as sl,u as ul}from"./filter-95ebf9d1.js";import{b as il}from"./VInput-273bf99c.js";import{f as dl}from"./forwardRefs-e658ad70.js";import{a as ml,u as re}from"./locale-8250cc46.js";import{m as cl}from"./transition-b3b454fb.js";import{V as pl}from"./VMenu-de5b29f3.js";import{V as fe}from"./VIcon-cb64ea3c.js";import{V as fl}from"./VDefaultsProvider-979dcd64.js";import{p as vl,y as gl,I as yl,N as bl,O as hl,w as Fl,J as ve}from"./theme-1fe57d71.js";import{g as Sl,u as Vl}from"./useRender-c1d2bc01.js";import{A as wl,F as Al}from"./FSForm-2b9048db.js";import"./css-a2b3c3ca.js";import"./index-71844868.js";import"./tag-39781742.js";import"./loader-d80eacaf.js";import"./rounded-1c8889d4.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VOverlay-b54f5de0.js";import"./dimensions-e9edc3f7.js";import"./display-23a66237.js";import"./lazy-5ceada29.js";import"./router-9d57a94c.js";import"./ssrBoot-76ac3587.js";import"./border-9f8612cb.js";import"./density-9047996c.js";import"./elevation-2e2adb9f.js";import"./index-980d11d4.js";import"./VImg-0c08cfd1.js";import"./index-348a046d.js";import"./VDivider-c862867d.js";import"./resizeObserver-297ec059.js";import"./VSelectionControl-808f9c38.js";import"./VSlideGroup-be21164f.js";import"./group-3c229d66.js";import"./useTimeZone-809ffb6f.js";import"./useTranslations-3d964ba1.js";function kl(e,s,t){if(s==null)return e;if(Array.isArray(s))throw new Error("Multiple matches is not implemented");return typeof s=="number"&&~s?r(Q,null,[r("span",{class:"v-autocomplete__unmask"},[e.substr(0,s)]),r("span",{class:"v-autocomplete__mask"},[e.substr(s,t)]),r("span",{class:"v-autocomplete__unmask"},[e.substr(s+t)])]):e}const Cl=vl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...sl({filterKeys:["title"]}),...Ge(),...gl(nl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...cl({transition:!1})},"VAutocomplete"),ql=Sl()({name:"VAutocomplete",props:Cl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,s){let{slots:t}=s;const{t:I}=ml(),y=U(),g=P(!1),p=P(!0),F=P(!1),V=U(),T=U(),w=re(e,"menu"),d=b({get:()=>w.value,set:l=>{var a;w.value&&!l&&((a=V.value)!=null&&a.ΨopenChildren)||(w.value=l)}}),u=P(-1),G=b(()=>{var l;return(l=y.value)==null?void 0:l.color}),E=b(()=>d.value?e.closeText:e.openText),{items:A,transformIn:we,transformOut:Ae}=Ye(e),{textColorClasses:ke,textColorStyles:Ce}=rl(G),f=re(e,"search",""),n=re(e,"modelValue",[],l=>we(l===null?[null]:Fl(l)),l=>{const a=Ae(l);return e.multiple?a:a[0]??null}),qe=b(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:n.value.length),x=il(),{filteredItems:Y,getMatches:Re}=ul(e,A,()=>p.value?"":f.value),S=b(()=>e.hideSelected?Y.value.filter(l=>!n.value.some(a=>a.value===l.value)):Y.value),_=b(()=>!!(e.chips||t.chip)),Z=b(()=>_.value||!!t.selection),$e=b(()=>n.value.map(l=>l.props.value)),K=b(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&f.value===((a=S.value[0])==null?void 0:a.title))&&S.value.length>0&&!p.value&&!F.value}),ee=b(()=>e.hideNoData&&!S.value.length||e.readonly||(x==null?void 0:x.isReadonly.value)),le=U(),{onListScroll:Ie,onListKeydown:xe}=Ze(le,y);function Te(l){e.openOnClear&&(d.value=!0),f.value=""}function Pe(){ee.value||(d.value=!0)}function De(l){ee.value||(g.value&&(l.preventDefault(),l.stopPropagation()),d.value=!d.value)}function Oe(l){var o,i,h;if(e.readonly||x!=null&&x.isReadonly.value)return;const a=y.value.selectionStart,m=n.value.length;if((u.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(d.value=!0),["Escape"].includes(l.key)&&(d.value=!1),K.value&&["Enter","Tab"].includes(l.key)&&k(S.value[0]),l.key==="ArrowDown"&&K.value&&((o=le.value)==null||o.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(u.value<0){l.key==="Backspace"&&!f.value&&(u.value=m-1);return}const v=u.value,c=n.value[u.value];c&&!c.props.disabled&&k(c,!1),u.value=v>=m-1?m-2:v}if(l.key==="ArrowLeft"){if(u.value<0&&a>0)return;const v=u.value>-1?u.value-1:m-1;n.value[v]?u.value=v:(u.value=-1,y.value.setSelectionRange((i=f.value)==null?void 0:i.length,(h=f.value)==null?void 0:h.length))}if(l.key==="ArrowRight"){if(u.value<0)return;const v=u.value+1;n.value[v]?u.value=v:(u.value=-1,y.value.setSelectionRange(0,0))}}}function Me(l){if(ve(y.value,":autofill")||ve(y.value,":-webkit-autofill")){const a=A.value.find(m=>m.title===l.target.value);a&&k(a)}}function Ue(){var l;g.value&&(p.value=!0,(l=y.value)==null||l.focus())}function Be(l){g.value=!0,setTimeout(()=>{F.value=!0})}function Ne(l){F.value=!1}function Le(l){(l==null||l===""&&!e.multiple)&&(n.value=[])}const te=P(!1);function k(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const m=n.value.findIndex(i=>e.valueComparator(i.value,l.value)),o=a??!~m;if(~m){const i=o?[...n.value,l]:[...n.value];i.splice(m,1),n.value=i}else o&&(n.value=[...n.value,l]);e.clearOnSelect&&(f.value="")}else{const m=a!==!1;n.value=m?[l]:[],f.value=m&&!Z.value?l.title:"",me(()=>{d.value=!1,p.value=!0})}}return B(g,(l,a)=>{var m;l!==a&&(l?(te.value=!0,f.value=e.multiple||Z.value?"":String(((m=n.value.at(-1))==null?void 0:m.props.title)??""),p.value=!0,me(()=>te.value=!1)):(!e.multiple&&f.value==null?n.value=[]:K.value&&!F.value&&!n.value.some(o=>{let{value:i}=o;return i===S.value[0].value})&&k(S.value[0]),d.value=!1,f.value="",u.value=-1))}),B(f,l=>{!g.value||te.value||(l&&(d.value=!0),p.value=!l)}),B(d,()=>{if(!e.hideSelected&&d.value&&n.value.length){const l=S.value.findIndex(a=>n.value.some(m=>a.value===m.value));yl&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=T.value)==null||a.scrollToIndex(l))})}}),B(()=>e.items,(l,a)=>{d.value||g.value&&!a.length&&l.length&&(d.value=!0)}),Vl(()=>{const l=!!(!e.hideNoData||S.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),a=n.value.length>0,m=pe.filterProps(e);return r(pe,$({ref:y},m,{modelValue:f.value,"onUpdate:modelValue":[o=>f.value=o,Le],focused:g.value,"onUpdate:focused":o=>g.value=o,validationValue:n.externalValue,counterValue:qe.value,dirty:a,onChange:Me,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!Z.value,"v-autocomplete--selecting-index":u.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":Te,"onMousedown:control":Pe,onKeydown:Oe}),{...t,default:()=>r(Q,null,[r(pl,$({ref:V,modelValue:d.value,"onUpdate:modelValue":o=>d.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:ee.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ue},e.menuProps),{default:()=>[l&&r(el,$({ref:le,selected:$e.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:xe,onFocusin:Be,onFocusout:Ne,onScrollPassive:Ie,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var o,i,h;return[(o=t["prepend-item"])==null?void 0:o.call(t),!S.value.length&&!e.hideNoData&&(((i=t["no-data"])==null?void 0:i.call(t))??r(ce,{title:I(e.noDataText)},null)),r(ll,{ref:T,renderless:!0,items:S.value},{default:v=>{var de;let{item:c,index:C,itemRef:q}=v;const ie=$(c.props,{ref:q,key:C,active:K.value&&C===0?!0:void 0,onClick:()=>k(c,null)});return((de=t.item)==null?void 0:de.call(t,{item:c,index:C,props:ie}))??r(ce,$(ie,{role:"option"}),{prepend:j=>{let{isSelected:H}=j;return r(Q,null,[e.multiple&&!e.hideSelected?r(tl,{key:c.value,modelValue:H,ripple:!1,tabindex:"-1"},null):void 0,c.props.prependAvatar&&r(al,{image:c.props.prependAvatar},null),c.props.prependIcon&&r(fe,{icon:c.props.prependIcon},null)])},title:()=>{var j,H;return p.value?c.title:kl(c.title,(j=Re(c))==null?void 0:j.title,((H=f.value)==null?void 0:H.length)??0)}})}}),(h=t["append-item"])==null?void 0:h.call(t)]}})]}),n.value.map((o,i)=>{function h(q){q.stopPropagation(),q.preventDefault(),k(o,!1)}const v={"onClick:close":h,onMousedown(q){q.preventDefault(),q.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},c=_.value?!!t.chip:!!t.selection,C=c?bl(_.value?t.chip({item:o,index:i,props:v}):t.selection({item:o,index:i})):void 0;if(!(c&&!C))return r("div",{key:o.value,class:["v-autocomplete__selection",i===u.value&&["v-autocomplete__selection--selected",ke.value]],style:i===u.value?Ce.value:{}},[_.value?t.chip?r(fl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[C]}):r(ol,$({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},v),null):C??r("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&i<n.value.length-1&&r("span",{class:"v-autocomplete__selection-comma"},[N(",")])])])})]),"append-inner":function(){var v;for(var o=arguments.length,i=new Array(o),h=0;h<o;h++)i[h]=arguments[h];return r(Q,null,[(v=t["append-inner"])==null?void 0:v.call(t,...i),e.menuIcon?r(fe,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:De,onClick:hl,"aria-label":I(E.value),title:I(E.value)},null):void 0])}})}),dl({isFocused:g,isPristine:p,menu:d,search:f,filteredItems:Y,select:k},y)}}),Ve=Ee({name:"FSAutocompleteField",components:{FSSpan:L,FSCol:X,FSRow:se},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:search"],setup:(e,{emit:s})=>{const{validateOn:t,blurred:I,getMessages:y}=ze(),{getColors:g}=Je(),{slots:p}=We();delete p.label,delete p.description;const F=g(ne.Error),V=g(ne.Light),T=g(ne.Dark),w=U(""),d=b(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-border-color":V.dark,"--fs-autocomplete-field-color":T.base,"--fs-autocomplete-field-active-border-color":T.dark,"--fs-autocomplete-field-error-color":F.base,"--fs-autocomplete-field-error-border-color":F.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":V.base,"--fs-autocomplete-field-color":V.dark,"--fs-autocomplete-field-active-border-color":V.base}),u=b(()=>{const A=["fs-autocomplete-field"];return e.multiple&&A.push("fs-autocomplete-multiple-field"),A}),G=b(()=>e.messages??y(e.modelValue,e.rules)),E=A=>{s("update:modelValue",A),w.value=""};return B(w,()=>{s("update:search",w.value)}),{validateOn:t,messages:G,blurred:I,slots:p,style:d,classes:u,innerSearch:w,onUpdate:E}}});function Rl(e,s,t,I,y,g){return D(),O(X,null,{default:R(()=>[e.$props.hideHeader?M("",!0):ae(e.$slots,"label",{key:0},()=>[r(se,{wrap:!1},{default:R(()=>[e.$props.label?(D(),O(L,{key:0,class:"fs-autocomplete-field-label",font:"text-overline",style:z(e.style)},{default:R(()=>[N(oe(e.$props.label),1)]),_:1},8,["style"])):M("",!0),e.$props.label&&e.$props.required?(D(),O(L,{key:1,class:"fs-autocomplete-field-label",style:z([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:R(()=>[N(" * ")]),_:1},8,["style"])):M("",!0),r(Xe,{style:{"min-width":"40px"}}),e.messages.length>0?(D(),O(L,{key:2,class:"fs-autocomplete-field-messages",font:"text-overline",style:z(e.style)},{default:R(()=>[N(oe(e.messages.join(", ")),1)]),_:1},8,["style"])):M("",!0)]),_:1})]),r(ql,$({menuIcon:"mdi-chevron-down",clearIcon:"mdi-close",variant:"outlined",style:e.style,class:e.classes,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,onBlur:s[0]||(s[0]=p=>e.blurred=!0),search:e.innerSearch,"onUpdate:search":s[1]||(s[1]=p=>e.innerSearch=p)},e.$attrs),_e({_:2},[Ke(e.slots,(p,F)=>({name:F,fn:R(V=>[ae(e.$slots,F,je(He(V)))])}))]),1040,["style","class","items","multiple","itemTitle","itemValue","readonly","clearable","rules","validateOn","modelValue","onUpdate:modelValue","search"]),ae(e.$slots,"description",{},()=>[e.$props.description?(D(),O(L,{key:0,class:"fs-autocomplete-field-description",font:"text-underline",style:z(e.style)},{default:R(()=>[N(oe(e.$props.description),1)]),_:1},8,["style"])):M("",!0)])]),_:3})}const ue=Qe(Ve,[["render",Rl]]);Ve.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};const $l=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],kt={title:"Foundation/Shared/Input fields/AutocompleteField",component:ue,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},J={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:s})=>({components:{FSAutocompleteField:ue,FSCol:X},props:Object.keys(s),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>`})},W={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${$l[e]}`})),value1:null,value2:null,value3:null,rules:wl}},render:(e,{argTypes:s})=>({components:{FSForm:Al,FSAutocompleteField:ue,FSCol:X,FSRow:se},props:Object.keys(s),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var ge,ye,be;J.parameters={...J.parameters,docs:{...(ge=J.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    args: {
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: ["0", "1", "2"],
      value3: "2",
      value4: "2"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteField,
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
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(be=(ye=J.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,Fe,Se;W.parameters={...W.parameters,docs:{...(he=W.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${international[i]}\`
      })),
      value1: null,
      value2: null,
      value3: null,
      rules: AutocompleteRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSAutocompleteField,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(Se=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};const Ct=["Variations","Rules"];export{W as Rules,J as Variations,Ct as __namedExportsOrder,kt as default};
