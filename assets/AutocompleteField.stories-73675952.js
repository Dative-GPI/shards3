import{d as U,s as O,e as b,w as B,x as me,z as n,F as G,A as $,O as N,G as Ee,H as P,L as D,M as R,J as ae,S as z,P as oe,N as M,V as _e,W as He,Q as Ke,R as je}from"./vue.esm-bundler-d8049c85.js";import{_ as L}from"./FSSpan-9f00eaf4.js";import{_ as Q}from"./FSCol-39bd052c.js";import{_ as se}from"./FSRow-b5482a77.js";import{u as ze}from"./VField-98076a13.js";import{u as Je,C as re}from"./useColors-5c9cff43.js";import{u as We}from"./useSlots-bdda8306.js";import{_ as Ge}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Qe}from"./VSpacer-e253cf80.js";import{m as Xe,u as Ye,a as Ze,b as el,c as ce,d as ll,e as tl,f as al,g as ol}from"./VSelect-4008bbf6.js";import{m as rl,V as pe}from"./VTextField-bdebe004.js";import{a as nl}from"./color-339b05ed.js";import{m as sl,u as ul}from"./filter-5c2b177b.js";import{b as il}from"./VInput-95d46afc.js";import{f as dl}from"./forwardRefs-e658ad70.js";import{a as ml,u as ne}from"./locale-0b822523.js";import{m as cl}from"./transition-a0827c0d.js";import{V as pl}from"./VMenu-878df07f.js";import{V as fe}from"./VIcon-76640d9b.js";import{V as fl}from"./VDefaultsProvider-2b53b1ea.js";import{p as vl,y as gl,I as yl,N as bl,O as hl,w as Fl,J as ve}from"./theme-540b65c4.js";import{g as Sl,u as Vl}from"./useRender-29d234e5.js";import{A as Al,F as wl}from"./FSForm-57dbe236.js";import"./css-50f0aa1d.js";import"./index-a9977cc4.js";import"./tag-fffb6ba6.js";import"./loader-cb170f8e.js";import"./rounded-0d200380.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VOverlay-0482e356.js";import"./dimensions-c0ade26a.js";import"./display-bfe8ef0e.js";import"./lazy-a24e86b5.js";import"./router-e2bea4dd.js";import"./ssrBoot-93e7847f.js";import"./variant-ec540a43.js";import"./density-de8a38cb.js";import"./elevation-ef665fc6.js";import"./index-ea9d807b.js";import"./VImg-9cec152f.js";import"./index-d961be33.js";import"./VDivider-3e2a8435.js";import"./resizeObserver-76cdf9c3.js";import"./VSelectionControl-06ba5d17.js";import"./VSlideGroup-28438428.js";import"./group-9e62ecfa.js";import"./useTimeZone-01b1e25e.js";import"./useTranslations-503566cb.js";function kl(e,s,t){if(s==null)return e;if(Array.isArray(s))throw new Error("Multiple matches is not implemented");return typeof s=="number"&&~s?n(G,null,[n("span",{class:"v-autocomplete__unmask"},[e.substr(0,s)]),n("span",{class:"v-autocomplete__mask"},[e.substr(s,t)]),n("span",{class:"v-autocomplete__unmask"},[e.substr(s+t)])]):e}const Cl=vl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...sl({filterKeys:["title"]}),...Xe(),...gl(rl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...cl({transition:!1})},"VAutocomplete"),ql=Sl()({name:"VAutocomplete",props:Cl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,s){let{slots:t}=s;const{t:I}=ml(),y=U(),g=O(!1),p=O(!0),F=O(!1),V=U(),T=U(),A=ne(e,"menu"),d=b({get:()=>A.value,set:l=>{var o;A.value&&!l&&((o=V.value)!=null&&o.ΨopenChildren)||(A.value=l)}}),u=O(-1),X=b(()=>{var l;return(l=y.value)==null?void 0:l.color}),E=b(()=>d.value?e.closeText:e.openText),{items:w,transformIn:Ae,transformOut:we}=Ye(e),{textColorClasses:ke,textColorStyles:Ce}=nl(X),f=ne(e,"search",""),r=ne(e,"modelValue",[],l=>Ae(l===null?[null]:Fl(l)),l=>{const o=we(l);return e.multiple?o:o[0]??null}),qe=b(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),x=il(),{filteredItems:Y,getMatches:Re}=ul(e,w,()=>p.value?"":f.value),S=b(()=>e.hideSelected?Y.value.filter(l=>!r.value.some(o=>o.value===l.value)):Y.value),_=b(()=>!!(e.chips||t.chip)),Z=b(()=>_.value||!!t.selection),$e=b(()=>r.value.map(l=>l.props.value)),H=b(()=>{var o;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&f.value===((o=S.value[0])==null?void 0:o.title))&&S.value.length>0&&!p.value&&!F.value}),ee=b(()=>e.hideNoData&&!S.value.length||e.readonly||(x==null?void 0:x.isReadonly.value)),le=U(),{onListScroll:Ie,onListKeydown:xe}=Ze(le,y);function Te(l){e.openOnClear&&(d.value=!0),f.value=""}function Oe(){ee.value||(d.value=!0)}function Pe(l){ee.value||(g.value&&(l.preventDefault(),l.stopPropagation()),d.value=!d.value)}function De(l){var a,i,h;if(e.readonly||x!=null&&x.isReadonly.value)return;const o=y.value.selectionStart,m=r.value.length;if((u.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(d.value=!0),["Escape"].includes(l.key)&&(d.value=!1),H.value&&["Enter","Tab"].includes(l.key)&&k(S.value[0]),l.key==="ArrowDown"&&H.value&&((a=le.value)==null||a.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(u.value<0){l.key==="Backspace"&&!f.value&&(u.value=m-1);return}const v=u.value,c=r.value[u.value];c&&!c.props.disabled&&k(c,!1),u.value=v>=m-1?m-2:v}if(l.key==="ArrowLeft"){if(u.value<0&&o>0)return;const v=u.value>-1?u.value-1:m-1;r.value[v]?u.value=v:(u.value=-1,y.value.setSelectionRange((i=f.value)==null?void 0:i.length,(h=f.value)==null?void 0:h.length))}if(l.key==="ArrowRight"){if(u.value<0)return;const v=u.value+1;r.value[v]?u.value=v:(u.value=-1,y.value.setSelectionRange(0,0))}}}function Me(l){if(ve(y.value,":autofill")||ve(y.value,":-webkit-autofill")){const o=w.value.find(m=>m.title===l.target.value);o&&k(o)}}function Ue(){var l;g.value&&(p.value=!0,(l=y.value)==null||l.focus())}function Be(l){g.value=!0,setTimeout(()=>{F.value=!0})}function Ne(l){F.value=!1}function Le(l){(l==null||l===""&&!e.multiple)&&(r.value=[])}const te=O(!1);function k(l){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const m=r.value.findIndex(i=>e.valueComparator(i.value,l.value)),a=o??!~m;if(~m){const i=a?[...r.value,l]:[...r.value];i.splice(m,1),r.value=i}else a&&(r.value=[...r.value,l]);e.clearOnSelect&&(f.value="")}else{const m=o!==!1;r.value=m?[l]:[],f.value=m&&!Z.value?l.title:"",me(()=>{d.value=!1,p.value=!0})}}return B(g,(l,o)=>{var m;l!==o&&(l?(te.value=!0,f.value=e.multiple||Z.value?"":String(((m=r.value.at(-1))==null?void 0:m.props.title)??""),p.value=!0,me(()=>te.value=!1)):(!e.multiple&&f.value==null?r.value=[]:H.value&&!F.value&&!r.value.some(a=>{let{value:i}=a;return i===S.value[0].value})&&k(S.value[0]),d.value=!1,f.value="",u.value=-1))}),B(f,l=>{!g.value||te.value||(l&&(d.value=!0),p.value=!l)}),B(d,()=>{if(!e.hideSelected&&d.value&&r.value.length){const l=S.value.findIndex(o=>r.value.some(m=>o.value===m.value));yl&&window.requestAnimationFrame(()=>{var o;l>=0&&((o=T.value)==null||o.scrollToIndex(l))})}}),B(()=>e.items,l=>{!g.value||!l.length||d.value||(d.value=!0)}),Vl(()=>{const l=!!(!e.hideNoData||S.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),o=r.value.length>0,m=pe.filterProps(e);return n(pe,$({ref:y},m,{modelValue:f.value,"onUpdate:modelValue":[a=>f.value=a,Le],focused:g.value,"onUpdate:focused":a=>g.value=a,validationValue:r.externalValue,counterValue:qe.value,dirty:o,onChange:Me,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!Z.value,"v-autocomplete--selecting-index":u.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:o?void 0:e.placeholder,"onClick:clear":Te,"onMousedown:control":Oe,onKeydown:De}),{...t,default:()=>n(G,null,[n(pl,$({ref:V,modelValue:d.value,"onUpdate:modelValue":a=>d.value=a,activator:"parent",contentClass:"v-autocomplete__content",disabled:ee.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ue},e.menuProps),{default:()=>[l&&n(el,$({ref:le,selected:$e.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:a=>a.preventDefault(),onKeydown:xe,onFocusin:Be,onFocusout:Ne,onScrollPassive:Ie,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var a,i,h;return[(a=t["prepend-item"])==null?void 0:a.call(t),!S.value.length&&!e.hideNoData&&(((i=t["no-data"])==null?void 0:i.call(t))??n(ce,{title:I(e.noDataText)},null)),n(ll,{ref:T,renderless:!0,items:S.value},{default:v=>{var de;let{item:c,index:C,itemRef:q}=v;const ie=$(c.props,{ref:q,key:C,active:H.value&&C===0?!0:void 0,onClick:()=>k(c,null)});return((de=t.item)==null?void 0:de.call(t,{item:c,index:C,props:ie}))??n(ce,$(ie,{role:"option"}),{prepend:K=>{let{isSelected:j}=K;return n(G,null,[e.multiple&&!e.hideSelected?n(tl,{key:c.value,modelValue:j,ripple:!1,tabindex:"-1"},null):void 0,c.props.prependAvatar&&n(al,{image:c.props.prependAvatar},null),c.props.prependIcon&&n(fe,{icon:c.props.prependIcon},null)])},title:()=>{var K,j;return p.value?c.title:kl(c.title,(K=Re(c))==null?void 0:K.title,((j=f.value)==null?void 0:j.length)??0)}})}}),(h=t["append-item"])==null?void 0:h.call(t)]}})]}),r.value.map((a,i)=>{function h(q){q.stopPropagation(),q.preventDefault(),k(a,!1)}const v={"onClick:close":h,onMousedown(q){q.preventDefault(),q.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},c=_.value?!!t.chip:!!t.selection,C=c?bl(_.value?t.chip({item:a,index:i,props:v}):t.selection({item:a,index:i})):void 0;if(!(c&&!C))return n("div",{key:a.value,class:["v-autocomplete__selection",i===u.value&&["v-autocomplete__selection--selected",ke.value]],style:i===u.value?Ce.value:{}},[_.value?t.chip?n(fl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[C]}):n(ol,$({key:"chip",closable:e.closableChips,size:"small",text:a.title,disabled:a.props.disabled},v),null):C??n("span",{class:"v-autocomplete__selection-text"},[a.title,e.multiple&&i<r.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[N(",")])])])})]),"append-inner":function(){var v;for(var a=arguments.length,i=new Array(a),h=0;h<a;h++)i[h]=arguments[h];return n(G,null,[(v=t["append-inner"])==null?void 0:v.call(t,...i),e.menuIcon?n(fe,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Pe,onClick:hl,"aria-label":I(E.value),title:I(E.value)},null):void 0])}})}),dl({isFocused:g,isPristine:p,menu:d,search:f,filteredItems:Y,select:k},y)}}),Ve=Ee({name:"FSAutocompleteField",components:{FSSpan:L,FSCol:Q,FSRow:se},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:search"],setup:(e,{emit:s})=>{const{validateOn:t,blurred:I,getMessages:y}=ze(),{getColors:g}=Je(),{slots:p}=We();delete p.label,delete p.description;const F=g(re.Error),V=g(re.Light),T=g(re.Dark),A=U(""),d=b(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-border-color":V.dark,"--fs-autocomplete-field-color":T.base,"--fs-autocomplete-field-active-border-color":T.dark,"--fs-autocomplete-field-error-color":F.base,"--fs-autocomplete-field-error-border-color":F.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":V.base,"--fs-autocomplete-field-color":V.dark,"--fs-autocomplete-field-active-border-color":V.base}),u=b(()=>{const w=["fs-autocomplete-field"];return e.multiple&&w.push("fs-autocomplete-multiple-field"),w}),X=b(()=>e.messages??y(e.modelValue,e.rules)),E=w=>{s("update:modelValue",w),A.value=""};return B(A,()=>{s("update:search",A.value)}),{validateOn:t,messages:X,blurred:I,slots:p,style:d,classes:u,innerSearch:A,onUpdate:E}}});function Rl(e,s,t,I,y,g){return P(),D(Q,null,{default:R(()=>[e.$props.hideHeader?M("",!0):ae(e.$slots,"label",{key:0},()=>[n(se,{wrap:!1},{default:R(()=>[e.$props.label?(P(),D(L,{key:0,class:"fs-autocomplete-field-label",font:"text-overline",style:z(e.style)},{default:R(()=>[N(oe(e.$props.label),1)]),_:1},8,["style"])):M("",!0),e.$props.label&&e.$props.required?(P(),D(L,{key:1,class:"fs-autocomplete-field-label",style:z([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:R(()=>[N(" * ")]),_:1},8,["style"])):M("",!0),n(Qe,{style:{"min-width":"40px"}}),e.messages.length>0?(P(),D(L,{key:2,class:"fs-autocomplete-field-messages",font:"text-overline",style:z(e.style)},{default:R(()=>[N(oe(e.messages.join(", ")),1)]),_:1},8,["style"])):M("",!0)]),_:1})]),n(ql,$({menuIcon:"mdi-chevron-down",clearIcon:"mdi-close",variant:"outlined",style:e.style,class:e.classes,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,onBlur:s[0]||(s[0]=p=>e.blurred=!0),search:e.innerSearch,"onUpdate:search":s[1]||(s[1]=p=>e.innerSearch=p)},e.$attrs),_e({_:2},[He(e.slots,(p,F)=>({name:F,fn:R(V=>[ae(e.$slots,F,Ke(je(V)))])}))]),1040,["style","class","items","multiple","itemTitle","itemValue","readonly","clearable","rules","validateOn","modelValue","onUpdate:modelValue","search"]),ae(e.$slots,"description",{},()=>[e.$props.description?(P(),D(L,{key:0,class:"fs-autocomplete-field-description",font:"text-underline",style:z(e.style)},{default:R(()=>[N(oe(e.$props.description),1)]),_:1},8,["style"])):M("",!0)])]),_:3})}const ue=Ge(Ve,[["render",Rl]]);Ve.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};const $l=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],kt={title:"Foundation/Shared/Input fields/AutocompleteField",component:ue,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},J={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:s})=>({components:{FSAutocompleteField:ue,FSCol:Q},props:Object.keys(s),setup(){return{...e}},template:`
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
    </FSCol>`})},W={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${$l[e]}`})),value1:null,value2:null,value3:null,rules:Al}},render:(e,{argTypes:s})=>({components:{FSForm:wl,FSAutocompleteField:ue,FSCol:Q,FSRow:se},props:Object.keys(s),setup(){return{...e}},template:`
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
