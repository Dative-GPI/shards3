import{d as U,s as P,e as b,w as B,n as me,z as n,F as Y,x as $,N as L,j as je,K as T,L as D,M as R,R as ae,V as Q,O as oe,P as M,X as Ee,Y as Ke,S as _e,U as He}from"./vue.esm-bundler-37de1696.js";import{_ as N}from"./FSSpan-9700c9e2.js";import{_ as G}from"./FSCol-4074aa47.js";import{_ as ue}from"./FSRow-fc81033b.js";import{u as ze}from"./useRules-724d25b8.js";import{u as Qe,C as re}from"./useColors-ba22af06.js";import{u as We}from"./useSlots-1bcfd838.js";import{_ as Xe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ye}from"./VSpacer-63748a98.js";import{m as Ge,u as Je,a as Ze,b as el,c as ce,d as ll,e as tl,f as al}from"./VSelect-a4cfa519.js";import{m as ol,V as pe}from"./VTextField-deb08e50.js";import{u as rl}from"./color-efc02365.js";import{m as nl,u as ul}from"./filter-fc138fb7.js";import{b as sl}from"./VInput-670d9bbb.js";import{f as il}from"./forwardRefs-e658ad70.js";import{u as dl}from"./locale-ee313da6.js";import{u as ne}from"./proxiedModel-e8e26ca7.js";import{m as ml}from"./transition-4a8f6120.js";import{V as cl}from"./VMenu-1842deb2.js";import{V as pl}from"./VCheckboxBtn-ebaca132.js";import{V as fe}from"./VIcon-122293c7.js";import{V as fl}from"./VDefaultsProvider-062db757.js";import{p as vl,o as gl,I as yl,P as bl,Q as hl,w as Fl,M as ve}from"./theme-07d11e72.js";import{g as Sl,u as Vl}from"./useRender-ccb83440.js";import{A as wl,F as Al}from"./FSForm-8fdf8109.js";import"./css-b545198d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./tag-9d688242.js";import"./VOverlay-328180d5.js";import"./loader-e58dd003.js";import"./intersectionObserver-12fc3323.js";import"./rounded-7d64095f.js";import"./dimensions-4b009e60.js";import"./display-62cdc35d.js";import"./lazy-193ed5d1.js";import"./router-ddfc31ef.js";import"./index-3a20b1dd.js";import"./ssrBoot-9a42e176.js";import"./border-fb870e60.js";import"./density-ebf3f2c2.js";import"./elevation-66cfbdec.js";import"./index-737116aa.js";import"./VImg-d6f10770.js";import"./index-90c07952.js";import"./VDivider-c1bb8faa.js";import"./resizeObserver-8d36419f.js";import"./VSlideGroup-62b1ce2b.js";import"./group-bc028d0d.js";import"./VField-7fc7ddcc.js";import"./VLabel-c64e48eb.js";import"./VSelectionControl-19e4ec9f.js";import"./useTranslations-eec3878c.js";import"./useAppTimeZone-ef2c4017.js";function kl(e,u,t){if(u==null)return e;if(Array.isArray(u))throw new Error("Multiple matches is not implemented");return typeof u=="number"&&~u?n(Y,null,[n("span",{class:"v-autocomplete__unmask"},[e.substr(0,u)]),n("span",{class:"v-autocomplete__mask"},[e.substr(u,t)]),n("span",{class:"v-autocomplete__unmask"},[e.substr(u+t)])]):e}const Cl=vl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...nl({filterKeys:["title"]}),...Ge(),...gl(ol({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ml({transition:!1})},"VAutocomplete"),ql=Sl()({name:"VAutocomplete",props:Cl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,u){let{slots:t}=u;const{t:O}=dl(),y=U(),v=P(!1),c=P(!0),F=P(!1),V=U(),x=U(),w=ne(e,"menu"),d=b({get:()=>w.value,set:l=>{var a;w.value&&!l&&((a=V.value)!=null&&a.ΨopenChildren)||(w.value=l)}}),s=P(-1),J=b(()=>{var l;return(l=y.value)==null?void 0:l.color}),j=b(()=>d.value?e.closeText:e.openText),{items:k,transformIn:we,transformOut:Ae}=Je(e),{textColorClasses:ke,textColorStyles:Ce}=rl(J),p=ne(e,"search",""),r=ne(e,"modelValue",[],l=>we(l===null?[null]:Fl(l)),l=>{const a=Ae(l);return e.multiple?a:a[0]??null}),qe=b(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),I=sl(),{filteredItems:Z,getMatches:Re}=ul(e,k,()=>c.value?"":p.value),S=b(()=>e.hideSelected?Z.value.filter(l=>!r.value.some(a=>a.value===l.value)):Z.value),E=b(()=>!!(e.chips||t.chip)),K=b(()=>E.value||!!t.selection),$e=b(()=>r.value.map(l=>l.props.value)),_=b(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((a=S.value[0])==null?void 0:a.title))&&S.value.length>0&&!c.value&&!F.value}),ee=b(()=>e.hideNoData&&!S.value.length||e.readonly||(I==null?void 0:I.isReadonly.value)),le=U(),{onListScroll:Oe,onListKeydown:Ie}=Ze(le,y);function xe(l){e.openOnClear&&(d.value=!0),p.value=""}function Pe(){ee.value||(d.value=!0)}function Te(l){ee.value||(v.value&&(l.preventDefault(),l.stopPropagation()),d.value=!d.value)}function De(l){var o,i,h;if(e.readonly||I!=null&&I.isReadonly.value)return;const a=y.value.selectionStart,m=r.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(d.value=!0),["Escape"].includes(l.key)&&(d.value=!1),_.value&&["Enter","Tab"].includes(l.key)&&A(S.value[0]),l.key==="ArrowDown"&&_.value&&((o=le.value)==null||o.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&K.value&&r.value.length>0)return A(r.value[0],!1);if(s.value<0){l.key==="Backspace"&&!p.value&&(s.value=m-1);return}const f=s.value;A(r.value[s.value],!1),s.value=f>=m-1?m-2:f}if(e.multiple){if(l.key==="ArrowLeft"){if(s.value<0&&a>0)return;const f=s.value>-1?s.value-1:m-1;r.value[f]?s.value=f:(s.value=-1,y.value.setSelectionRange((i=p.value)==null?void 0:i.length,(h=p.value)==null?void 0:h.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const f=s.value+1;r.value[f]?s.value=f:(s.value=-1,y.value.setSelectionRange(0,0))}}}function Me(l){if(ve(y.value,":autofill")||ve(y.value,":-webkit-autofill")){const a=k.value.find(m=>m.title===l.target.value);a&&A(a)}}function Ue(){var l;v.value&&(c.value=!0,(l=y.value)==null||l.focus())}function Be(l){v.value=!0,setTimeout(()=>{F.value=!0})}function Le(l){F.value=!1}function Ne(l){(l==null||l===""&&!e.multiple)&&(r.value=[])}const te=P(!1);function A(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const m=r.value.findIndex(i=>e.valueComparator(i.value,l.value)),o=a??!~m;if(~m){const i=o?[...r.value,l]:[...r.value];i.splice(m,1),r.value=i}else o&&(r.value=[...r.value,l]);e.clearOnSelect&&(p.value="")}else{const m=a!==!1;r.value=m?[l]:[],p.value=m&&!K.value?l.title:"",me(()=>{d.value=!1,c.value=!0})}}return B(v,(l,a)=>{var m;l!==a&&(l?(te.value=!0,p.value=e.multiple||K.value?"":String(((m=r.value.at(-1))==null?void 0:m.props.title)??""),c.value=!0,me(()=>te.value=!1)):(!e.multiple&&p.value==null?r.value=[]:_.value&&!F.value&&!r.value.some(o=>{let{value:i}=o;return i===S.value[0].value})&&A(S.value[0]),d.value=!1,p.value="",s.value=-1))}),B(p,l=>{!v.value||te.value||(l&&(d.value=!0),c.value=!l)}),B(d,()=>{if(!e.hideSelected&&d.value&&r.value.length){const l=S.value.findIndex(a=>r.value.some(m=>a.value===m.value));yl&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=x.value)==null||a.scrollToIndex(l))})}}),B(()=>e.items,(l,a)=>{d.value||v.value&&!a.length&&l.length&&(d.value=!0)}),Vl(()=>{const l=!!(!e.hideNoData||S.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),a=r.value.length>0,m=pe.filterProps(e);return n(pe,$({ref:y},m,{modelValue:p.value,"onUpdate:modelValue":[o=>p.value=o,Ne],focused:v.value,"onUpdate:focused":o=>v.value=o,validationValue:r.externalValue,counterValue:qe.value,dirty:a,onChange:Me,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!K.value,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":xe,"onMousedown:control":Pe,onKeydown:De}),{...t,default:()=>n(Y,null,[n(cl,$({ref:V,modelValue:d.value,"onUpdate:modelValue":o=>d.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:ee.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ue},e.menuProps),{default:()=>[l&&n(el,$({ref:le,selected:$e.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:Ie,onFocusin:Be,onFocusout:Le,onScrollPassive:Oe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var o,i,h;return[(o=t["prepend-item"])==null?void 0:o.call(t),!S.value.length&&!e.hideNoData&&(((i=t["no-data"])==null?void 0:i.call(t))??n(ce,{title:O(e.noDataText)},null)),n(ll,{ref:x,renderless:!0,items:S.value},{default:f=>{var de;let{item:g,index:C,itemRef:q}=f;const ie=$(g.props,{ref:q,key:C,active:_.value&&C===0?!0:void 0,onClick:()=>A(g,null)});return((de=t.item)==null?void 0:de.call(t,{item:g,index:C,props:ie}))??n(ce,$(ie,{role:"option"}),{prepend:H=>{let{isSelected:z}=H;return n(Y,null,[e.multiple&&!e.hideSelected?n(pl,{key:g.value,modelValue:z,ripple:!1,tabindex:"-1"},null):void 0,g.props.prependAvatar&&n(tl,{image:g.props.prependAvatar},null),g.props.prependIcon&&n(fe,{icon:g.props.prependIcon},null)])},title:()=>{var H,z;return c.value?g.title:kl(g.title,(H=Re(g))==null?void 0:H.title,((z=p.value)==null?void 0:z.length)??0)}})}}),(h=t["append-item"])==null?void 0:h.call(t)]}})]}),r.value.map((o,i)=>{function h(q){q.stopPropagation(),q.preventDefault(),A(o,!1)}const f={"onClick:close":h,onMousedown(q){q.preventDefault(),q.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},g=E.value?!!t.chip:!!t.selection,C=g?bl(E.value?t.chip({item:o,index:i,props:f}):t.selection({item:o,index:i})):void 0;if(!(g&&!C))return n("div",{key:o.value,class:["v-autocomplete__selection",i===s.value&&["v-autocomplete__selection--selected",ke.value]],style:i===s.value?Ce.value:{}},[E.value?t.chip?n(fl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[C]}):n(al,$({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},f),null):C??n("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&i<r.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[L(",")])])])})]),"append-inner":function(){var f;for(var o=arguments.length,i=new Array(o),h=0;h<o;h++)i[h]=arguments[h];return n(Y,null,[(f=t["append-inner"])==null?void 0:f.call(t,...i),e.menuIcon?n(fe,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Te,onClick:hl,"aria-label":O(j.value),title:O(j.value)},null):void 0])}})}),il({isFocused:v,isPristine:c,menu:d,search:p,filteredItems:Z,select:A},y)}}),Ve=je({name:"FSAutocompleteField",components:{FSSpan:N,FSCol:G,FSRow:ue},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},returnObject:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:search"],setup:(e,{emit:u})=>{const{validateOn:t,blurred:O,getMessages:y}=ze(),{getColors:v}=Qe(),{slots:c}=We();delete c.label,delete c.description;const F=v(re.Error),V=v(re.Light),x=v(re.Dark),w=U(""),d=b(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-border-color":V.dark,"--fs-autocomplete-field-color":x.base,"--fs-autocomplete-field-active-border-color":x.dark,"--fs-autocomplete-field-error-color":F.base,"--fs-autocomplete-field-error-border-color":F.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":V.base,"--fs-autocomplete-field-color":V.dark,"--fs-autocomplete-field-active-border-color":V.base}),s=b(()=>{const k=["fs-autocomplete-field"];return e.multiple&&k.push("fs-autocomplete-multiple-field"),k}),J=b(()=>e.messages??y(e.modelValue,e.rules)),j=k=>{u("update:modelValue",k),w.value=""};return B(w,()=>{u("update:search",w.value)}),{validateOn:t,messages:J,blurred:O,slots:c,style:d,classes:s,innerSearch:w,onUpdate:j}}});function Rl(e,u,t,O,y,v){return T(),D(G,null,{default:R(()=>[e.$props.hideHeader?M("",!0):ae(e.$slots,"label",{key:0},()=>[n(ue,{wrap:!1},{default:R(()=>[e.$props.label?(T(),D(N,{key:0,class:"fs-autocomplete-field-label",font:"text-overline",style:Q(e.style)},{default:R(()=>[L(oe(e.$props.label),1)]),_:1},8,["style"])):M("",!0),e.$props.label&&e.$props.required?(T(),D(N,{key:1,class:"fs-autocomplete-field-label",style:Q([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:R(()=>[L(" * ")]),_:1},8,["style"])):M("",!0),n(Ye,{style:{"min-width":"40px"}}),e.messages.length>0?(T(),D(N,{key:2,class:"fs-autocomplete-field-messages",font:"text-overline",style:Q(e.style)},{default:R(()=>[L(oe(e.messages.join(", ")),1)]),_:1},8,["style"])):M("",!0)]),_:1})]),n(ql,$({menuIcon:"mdi-chevron-down",clearIcon:"mdi-close",variant:"outlined",style:e.style,class:e.classes,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,returnObject:e.$props.returnObject,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,onBlur:u[0]||(u[0]=c=>e.blurred=!0),search:e.innerSearch,"onUpdate:search":u[1]||(u[1]=c=>e.innerSearch=c)},e.$attrs),Ee({_:2},[Ke(e.slots,(c,F)=>({name:F,fn:R(V=>[ae(e.$slots,F,_e(He(V)))])}))]),1040,["style","class","items","multiple","itemTitle","itemValue","readonly","clearable","returnObject","rules","validateOn","modelValue","onUpdate:modelValue","search"]),ae(e.$slots,"description",{},()=>[e.$props.description?(T(),D(N,{key:0,class:"fs-autocomplete-field-description",font:"text-underline",style:Q(e.style)},{default:R(()=>[L(oe(e.$props.description),1)]),_:1},8,["style"])):M("",!0)])]),_:3})}const se=Xe(Ve,[["render",Rl]]);Ve.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"returnObject",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};const $l=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],Ot={title:"Foundation/Shared/Input fields/AutocompleteField",component:se,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},W={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:u})=>({components:{FSAutocompleteField:se,FSCol:G},props:Object.keys(u),setup(){return{...e}},template:`
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
    </FSCol>`})},X={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${$l[e]}`})),value1:null,value2:null,value3:null,rules:wl}},render:(e,{argTypes:u})=>({components:{FSForm:Al,FSAutocompleteField:se,FSCol:G,FSRow:ue},props:Object.keys(u),setup(){return{...e}},template:`
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
    </FSForm>`})};var ge,ye,be;W.parameters={...W.parameters,docs:{...(ge=W.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,Fe,Se;X.parameters={...X.parameters,docs:{...(he=X.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Se=(Fe=X.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};const It=["Variations","Rules"];export{X as Rules,W as Variations,It as __namedExportsOrder,Ot as default};
