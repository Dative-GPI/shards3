import{d as U,s as T,j as b,w as B,n as me,z as n,F as G,x as $,N as L,g as Ee,K as O,L as D,M as R,R as ae,V as W,O as oe,P as M,Y as _e,Z as Ke,S as je,U as ze}from"./vue.esm-bundler-0a1af505.js";import{_ as N}from"./FSSpan-50615fe3.js";import{_ as J}from"./FSCol-5b91b447.js";import{_ as ue}from"./FSRow-852c6353.js";import{u as He}from"./VField-66cf1d8d.js";import{u as We,C as re}from"./useColors-128f3c4d.js";import{u as Ye}from"./useSlots-de2ef136.js";import{_ as Ze}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ge}from"./VSpacer-a7d8920b.js";import{m as Je,u as Qe,a as Xe,b as el,c as ce,d as ll,e as tl,f as al,g as ol}from"./VSelect-bb0c6f0e.js";import{m as rl,V as pe}from"./VTextField-bc89db2e.js";import{u as nl}from"./color-68d45c69.js";import{m as ul,u as sl}from"./filter-ce0454cd.js";import{d as il}from"./VInput-32e7bd1c.js";import{f as dl}from"./forwardRefs-e658ad70.js";import{u as ml}from"./locale-767f04a5.js";import{u as ne}from"./proxiedModel-7a45f3f8.js";import{m as cl}from"./transition-c9646b8b.js";import{V as pl}from"./VMenu-b8c93ac3.js";import{V as fe}from"./VIcon-a19d44fc.js";import{V as fl}from"./VDefaultsProvider-0c713390.js";import{p as vl,z as gl,I as yl,O as bl,P as hl,w as Fl,L as ve}from"./theme-2d24b19c.js";import{g as Sl,u as Vl}from"./useRender-cc726afb.js";import{A as wl,F as Al}from"./FSForm-b2785707.js";import"./css-415780ec.js";import"./index-d90e6acb.js";import"./tag-e48f136a.js";import"./loader-92dc0f32.js";import"./intersectionObserver-bdfff18f.js";import"./rounded-94c7156f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VOverlay-30c9fe4b.js";import"./dimensions-21b90dfd.js";import"./display-b22dea51.js";import"./lazy-298c1133.js";import"./router-817fd49a.js";import"./ssrBoot-e032939a.js";import"./border-dd08b1f1.js";import"./density-99d9a31c.js";import"./elevation-eb45930f.js";import"./index-0339a920.js";import"./VImg-ef539901.js";import"./index-80f01c5b.js";import"./VDivider-6d67e416.js";import"./resizeObserver-86c9045a.js";import"./VSelectionControl-ad73d0a2.js";import"./VSlideGroup-6393fefa.js";import"./group-439abacb.js";import"./useTimeZone-9d6731ed.js";import"./useTranslations-c047d5be.js";function kl(e,u,t){if(u==null)return e;if(Array.isArray(u))throw new Error("Multiple matches is not implemented");return typeof u=="number"&&~u?n(G,null,[n("span",{class:"v-autocomplete__unmask"},[e.substr(0,u)]),n("span",{class:"v-autocomplete__mask"},[e.substr(u,t)]),n("span",{class:"v-autocomplete__unmask"},[e.substr(u+t)])]):e}const Cl=vl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...ul({filterKeys:["title"]}),...Je(),...gl(rl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...cl({transition:!1})},"VAutocomplete"),ql=Sl()({name:"VAutocomplete",props:Cl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,u){let{slots:t}=u;const{t:I}=ml(),y=U(),v=T(!1),c=T(!0),F=T(!1),V=U(),P=U(),w=ne(e,"menu"),d=b({get:()=>w.value,set:l=>{var a;w.value&&!l&&((a=V.value)!=null&&a.ΨopenChildren)||(w.value=l)}}),s=T(-1),Q=b(()=>{var l;return(l=y.value)==null?void 0:l.color}),E=b(()=>d.value?e.closeText:e.openText),{items:k,transformIn:we,transformOut:Ae}=Qe(e),{textColorClasses:ke,textColorStyles:Ce}=nl(Q),p=ne(e,"search",""),r=ne(e,"modelValue",[],l=>we(l===null?[null]:Fl(l)),l=>{const a=Ae(l);return e.multiple?a:a[0]??null}),qe=b(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),x=il(),{filteredItems:X,getMatches:Re}=sl(e,k,()=>c.value?"":p.value),S=b(()=>e.hideSelected?X.value.filter(l=>!r.value.some(a=>a.value===l.value)):X.value),_=b(()=>!!(e.chips||t.chip)),K=b(()=>_.value||!!t.selection),$e=b(()=>r.value.map(l=>l.props.value)),j=b(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((a=S.value[0])==null?void 0:a.title))&&S.value.length>0&&!c.value&&!F.value}),ee=b(()=>e.hideNoData&&!S.value.length||e.readonly||(x==null?void 0:x.isReadonly.value)),le=U(),{onListScroll:Ie,onListKeydown:xe}=Xe(le,y);function Pe(l){e.openOnClear&&(d.value=!0),p.value=""}function Te(){ee.value||(d.value=!0)}function Oe(l){ee.value||(v.value&&(l.preventDefault(),l.stopPropagation()),d.value=!d.value)}function De(l){var o,i,h;if(e.readonly||x!=null&&x.isReadonly.value)return;const a=y.value.selectionStart,m=r.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(d.value=!0),["Escape"].includes(l.key)&&(d.value=!1),j.value&&["Enter","Tab"].includes(l.key)&&A(S.value[0]),l.key==="ArrowDown"&&j.value&&((o=le.value)==null||o.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&K.value&&r.value.length>0)return A(r.value[0],!1);if(s.value<0){l.key==="Backspace"&&!p.value&&(s.value=m-1);return}const f=s.value;A(r.value[s.value],!1),s.value=f>=m-1?m-2:f}if(e.multiple){if(l.key==="ArrowLeft"){if(s.value<0&&a>0)return;const f=s.value>-1?s.value-1:m-1;r.value[f]?s.value=f:(s.value=-1,y.value.setSelectionRange((i=p.value)==null?void 0:i.length,(h=p.value)==null?void 0:h.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const f=s.value+1;r.value[f]?s.value=f:(s.value=-1,y.value.setSelectionRange(0,0))}}}function Me(l){if(ve(y.value,":autofill")||ve(y.value,":-webkit-autofill")){const a=k.value.find(m=>m.title===l.target.value);a&&A(a)}}function Ue(){var l;v.value&&(c.value=!0,(l=y.value)==null||l.focus())}function Be(l){v.value=!0,setTimeout(()=>{F.value=!0})}function Le(l){F.value=!1}function Ne(l){(l==null||l===""&&!e.multiple)&&(r.value=[])}const te=T(!1);function A(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const m=r.value.findIndex(i=>e.valueComparator(i.value,l.value)),o=a??!~m;if(~m){const i=o?[...r.value,l]:[...r.value];i.splice(m,1),r.value=i}else o&&(r.value=[...r.value,l]);e.clearOnSelect&&(p.value="")}else{const m=a!==!1;r.value=m?[l]:[],p.value=m&&!K.value?l.title:"",me(()=>{d.value=!1,c.value=!0})}}return B(v,(l,a)=>{var m;l!==a&&(l?(te.value=!0,p.value=e.multiple||K.value?"":String(((m=r.value.at(-1))==null?void 0:m.props.title)??""),c.value=!0,me(()=>te.value=!1)):(!e.multiple&&p.value==null?r.value=[]:j.value&&!F.value&&!r.value.some(o=>{let{value:i}=o;return i===S.value[0].value})&&A(S.value[0]),d.value=!1,p.value="",s.value=-1))}),B(p,l=>{!v.value||te.value||(l&&(d.value=!0),c.value=!l)}),B(d,()=>{if(!e.hideSelected&&d.value&&r.value.length){const l=S.value.findIndex(a=>r.value.some(m=>a.value===m.value));yl&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=P.value)==null||a.scrollToIndex(l))})}}),B(()=>e.items,(l,a)=>{d.value||v.value&&!a.length&&l.length&&(d.value=!0)}),Vl(()=>{const l=!!(!e.hideNoData||S.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),a=r.value.length>0,m=pe.filterProps(e);return n(pe,$({ref:y},m,{modelValue:p.value,"onUpdate:modelValue":[o=>p.value=o,Ne],focused:v.value,"onUpdate:focused":o=>v.value=o,validationValue:r.externalValue,counterValue:qe.value,dirty:a,onChange:Me,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!K.value,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":Pe,"onMousedown:control":Te,onKeydown:De}),{...t,default:()=>n(G,null,[n(pl,$({ref:V,modelValue:d.value,"onUpdate:modelValue":o=>d.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:ee.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ue},e.menuProps),{default:()=>[l&&n(el,$({ref:le,selected:$e.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:xe,onFocusin:Be,onFocusout:Le,onScrollPassive:Ie,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var o,i,h;return[(o=t["prepend-item"])==null?void 0:o.call(t),!S.value.length&&!e.hideNoData&&(((i=t["no-data"])==null?void 0:i.call(t))??n(ce,{title:I(e.noDataText)},null)),n(ll,{ref:P,renderless:!0,items:S.value},{default:f=>{var de;let{item:g,index:C,itemRef:q}=f;const ie=$(g.props,{ref:q,key:C,active:j.value&&C===0?!0:void 0,onClick:()=>A(g,null)});return((de=t.item)==null?void 0:de.call(t,{item:g,index:C,props:ie}))??n(ce,$(ie,{role:"option"}),{prepend:z=>{let{isSelected:H}=z;return n(G,null,[e.multiple&&!e.hideSelected?n(tl,{key:g.value,modelValue:H,ripple:!1,tabindex:"-1"},null):void 0,g.props.prependAvatar&&n(al,{image:g.props.prependAvatar},null),g.props.prependIcon&&n(fe,{icon:g.props.prependIcon},null)])},title:()=>{var z,H;return c.value?g.title:kl(g.title,(z=Re(g))==null?void 0:z.title,((H=p.value)==null?void 0:H.length)??0)}})}}),(h=t["append-item"])==null?void 0:h.call(t)]}})]}),r.value.map((o,i)=>{function h(q){q.stopPropagation(),q.preventDefault(),A(o,!1)}const f={"onClick:close":h,onMousedown(q){q.preventDefault(),q.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},g=_.value?!!t.chip:!!t.selection,C=g?bl(_.value?t.chip({item:o,index:i,props:f}):t.selection({item:o,index:i})):void 0;if(!(g&&!C))return n("div",{key:o.value,class:["v-autocomplete__selection",i===s.value&&["v-autocomplete__selection--selected",ke.value]],style:i===s.value?Ce.value:{}},[_.value?t.chip?n(fl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[C]}):n(ol,$({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},f),null):C??n("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&i<r.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[L(",")])])])})]),"append-inner":function(){var f;for(var o=arguments.length,i=new Array(o),h=0;h<o;h++)i[h]=arguments[h];return n(G,null,[(f=t["append-inner"])==null?void 0:f.call(t,...i),e.menuIcon?n(fe,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Oe,onClick:hl,"aria-label":I(E.value),title:I(E.value)},null):void 0])}})}),dl({isFocused:v,isPristine:c,menu:d,search:p,filteredItems:X,select:A},y)}}),Ve=Ee({name:"FSAutocompleteField",components:{FSSpan:N,FSCol:J,FSRow:ue},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:search"],setup:(e,{emit:u})=>{const{validateOn:t,blurred:I,getMessages:y}=He(),{getColors:v}=We(),{slots:c}=Ye();delete c.label,delete c.description;const F=v(re.Error),V=v(re.Light),P=v(re.Dark),w=U(""),d=b(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-border-color":V.dark,"--fs-autocomplete-field-color":P.base,"--fs-autocomplete-field-active-border-color":P.dark,"--fs-autocomplete-field-error-color":F.base,"--fs-autocomplete-field-error-border-color":F.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":V.base,"--fs-autocomplete-field-color":V.dark,"--fs-autocomplete-field-active-border-color":V.base}),s=b(()=>{const k=["fs-autocomplete-field"];return e.multiple&&k.push("fs-autocomplete-multiple-field"),k}),Q=b(()=>e.messages??y(e.modelValue,e.rules)),E=k=>{u("update:modelValue",k),w.value=""};return B(w,()=>{u("update:search",w.value)}),{validateOn:t,messages:Q,blurred:I,slots:c,style:d,classes:s,innerSearch:w,onUpdate:E}}});function Rl(e,u,t,I,y,v){return O(),D(J,null,{default:R(()=>[e.$props.hideHeader?M("",!0):ae(e.$slots,"label",{key:0},()=>[n(ue,{wrap:!1},{default:R(()=>[e.$props.label?(O(),D(N,{key:0,class:"fs-autocomplete-field-label",font:"text-overline",style:W(e.style)},{default:R(()=>[L(oe(e.$props.label),1)]),_:1},8,["style"])):M("",!0),e.$props.label&&e.$props.required?(O(),D(N,{key:1,class:"fs-autocomplete-field-label",style:W([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:R(()=>[L(" * ")]),_:1},8,["style"])):M("",!0),n(Ge,{style:{"min-width":"40px"}}),e.messages.length>0?(O(),D(N,{key:2,class:"fs-autocomplete-field-messages",font:"text-overline",style:W(e.style)},{default:R(()=>[L(oe(e.messages.join(", ")),1)]),_:1},8,["style"])):M("",!0)]),_:1})]),n(ql,$({menuIcon:"mdi-chevron-down",clearIcon:"mdi-close",variant:"outlined",style:e.style,class:e.classes,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,onBlur:u[0]||(u[0]=c=>e.blurred=!0),search:e.innerSearch,"onUpdate:search":u[1]||(u[1]=c=>e.innerSearch=c)},e.$attrs),_e({_:2},[Ke(e.slots,(c,F)=>({name:F,fn:R(V=>[ae(e.$slots,F,je(ze(V)))])}))]),1040,["style","class","items","multiple","itemTitle","itemValue","readonly","clearable","rules","validateOn","modelValue","onUpdate:modelValue","search"]),ae(e.$slots,"description",{},()=>[e.$props.description?(O(),D(N,{key:0,class:"fs-autocomplete-field-description",font:"text-underline",style:W(e.style)},{default:R(()=>[L(oe(e.$props.description),1)]),_:1},8,["style"])):M("",!0)])]),_:3})}const se=Ze(Ve,[["render",Rl]]);Ve.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};const $l=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],qt={title:"Foundation/Shared/Input fields/AutocompleteField",component:se,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},Y={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:u})=>({components:{FSAutocompleteField:se,FSCol:J},props:Object.keys(u),setup(){return{...e}},template:`
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
    </FSCol>`})},Z={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${$l[e]}`})),value1:null,value2:null,value3:null,rules:wl}},render:(e,{argTypes:u})=>({components:{FSForm:Al,FSAutocompleteField:se,FSCol:J,FSRow:ue},props:Object.keys(u),setup(){return{...e}},template:`
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
    </FSForm>`})};var ge,ye,be;Y.parameters={...Y.parameters,docs:{...(ge=Y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(ye=Y.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,Fe,Se;Z.parameters={...Z.parameters,docs:{...(he=Z.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Se=(Fe=Z.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};const Rt=["Variations","Rules"];export{Z as Rules,Y as Variations,Rt as __namedExportsOrder,qt as default};
