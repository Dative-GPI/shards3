import{d as U,s as T,e as y,w as B,n as pe,z as n,F as J,x as R,N as L,j as je,K as x,L as D,M as q,R as ne,V as W,O as ue,P as M,X as Ee,Y as Ke,S as He,U as _e}from"./vue.esm-bundler-37de1696.js";import{_ as N}from"./FSSpan-ce1ed5e8.js";import{_ as Z}from"./FSCol-927ba931.js";import{_ as ie}from"./FSRow-632ce14e.js";import{u as ze}from"./useRules-724d25b8.js";import{u as Qe,C as X}from"./useColors-ba22af06.js";import{u as We}from"./useSlots-df9def22.js";import{_ as Xe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ye}from"./VSpacer-63748a98.js";import{m as Ge,u as Je,a as Ze,b as el,c as fe,d as ll,e as tl,f as al}from"./VSelect-b1a47759.js";import{m as ol,V as ve}from"./VTextField-deb08e50.js";import{u as rl}from"./color-efc02365.js";import{m as nl,u as ul}from"./filter-fc138fb7.js";import{b as sl}from"./VInput-670d9bbb.js";import{f as il}from"./forwardRefs-e658ad70.js";import{u as dl}from"./locale-ee313da6.js";import{u as se}from"./proxiedModel-e8e26ca7.js";import{m as ml}from"./transition-4a8f6120.js";import{V as cl}from"./VMenu-7943669c.js";import{V as pl}from"./VCheckboxBtn-ebaca132.js";import{V as ge}from"./VIcon-122293c7.js";import{V as fl}from"./VDefaultsProvider-062db757.js";import{p as vl,o as gl,I as yl,P as bl,Q as hl,w as Sl,M as ye}from"./theme-07d11e72.js";import{g as Fl,u as Vl}from"./useRender-ccb83440.js";import{A as wl,F as Al}from"./FSForm-f855fd72.js";import"./css-cb27a64f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./tag-9d688242.js";import"./VOverlay-5dd1d9ab.js";import"./loader-e58dd003.js";import"./intersectionObserver-12fc3323.js";import"./rounded-7d64095f.js";import"./dimensions-4b009e60.js";import"./display-62cdc35d.js";import"./lazy-193ed5d1.js";import"./router-80c118e7.js";import"./index-3a20b1dd.js";import"./ssrBoot-9a42e176.js";import"./border-fb870e60.js";import"./density-ebf3f2c2.js";import"./elevation-66cfbdec.js";import"./index-737116aa.js";import"./VImg-d6f10770.js";import"./index-90c07952.js";import"./VDivider-c1bb8faa.js";import"./resizeObserver-8d36419f.js";import"./VSlideGroup-62b1ce2b.js";import"./group-bc028d0d.js";import"./VField-7fc7ddcc.js";import"./VLabel-c64e48eb.js";import"./VSelectionControl-19e4ec9f.js";import"./useTranslations-eec3878c.js";import"./useAppTimeZone-02cdf7e8.js";function kl(e,i,t){if(i==null)return e;if(Array.isArray(i))throw new Error("Multiple matches is not implemented");return typeof i=="number"&&~i?n(J,null,[n("span",{class:"v-autocomplete__unmask"},[e.substr(0,i)]),n("span",{class:"v-autocomplete__mask"},[e.substr(i,t)]),n("span",{class:"v-autocomplete__unmask"},[e.substr(i+t)])]):e}const Cl=vl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...nl({filterKeys:["title"]}),...Ge(),...gl(ol({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ml({transition:!1})},"VAutocomplete"),ql=Fl()({name:"VAutocomplete",props:Cl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:$}=dl(),b=U(),v=T(!1),c=T(!0),F=T(!1),w=U(),A=U(),O=se(e,"menu"),u=y({get:()=>O.value,set:l=>{var a;O.value&&!l&&((a=w.value)!=null&&a.ΨopenChildren)||(O.value=l)}}),s=T(-1),ee=y(()=>{var l;return(l=b.value)==null?void 0:l.color}),j=y(()=>u.value?e.closeText:e.openText),{items:E,transformIn:le,transformOut:I}=Je(e),{textColorClasses:ke,textColorStyles:Ce}=rl(ee),p=se(e,"search",""),r=se(e,"modelValue",[],l=>le(l===null?[null]:Sl(l)),l=>{const a=I(l);return e.multiple?a:a[0]??null}),qe=y(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),P=sl(),{filteredItems:te,getMatches:Re}=ul(e,E,()=>c.value?"":p.value),S=y(()=>e.hideSelected?te.value.filter(l=>!r.value.some(a=>a.value===l.value)):te.value),K=y(()=>!!(e.chips||t.chip)),H=y(()=>K.value||!!t.selection),$e=y(()=>r.value.map(l=>l.props.value)),_=y(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((a=S.value[0])==null?void 0:a.title))&&S.value.length>0&&!c.value&&!F.value}),ae=y(()=>e.hideNoData&&!S.value.length||e.readonly||(P==null?void 0:P.isReadonly.value)),oe=U(),{onListScroll:Oe,onListKeydown:Ie}=Ze(oe,b);function Pe(l){e.openOnClear&&(u.value=!0),p.value=""}function Te(){ae.value||(u.value=!0)}function xe(l){ae.value||(v.value&&(l.preventDefault(),l.stopPropagation()),u.value=!u.value)}function De(l){var o,d,h;if(e.readonly||P!=null&&P.isReadonly.value)return;const a=b.value.selectionStart,m=r.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(u.value=!0),["Escape"].includes(l.key)&&(u.value=!1),_.value&&["Enter","Tab"].includes(l.key)&&V(S.value[0]),l.key==="ArrowDown"&&_.value&&((o=oe.value)==null||o.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&H.value&&r.value.length>0)return V(r.value[0],!1);if(s.value<0){l.key==="Backspace"&&!p.value&&(s.value=m-1);return}const f=s.value;V(r.value[s.value],!1),s.value=f>=m-1?m-2:f}if(e.multiple){if(l.key==="ArrowLeft"){if(s.value<0&&a>0)return;const f=s.value>-1?s.value-1:m-1;r.value[f]?s.value=f:(s.value=-1,b.value.setSelectionRange((d=p.value)==null?void 0:d.length,(h=p.value)==null?void 0:h.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const f=s.value+1;r.value[f]?s.value=f:(s.value=-1,b.value.setSelectionRange(0,0))}}}function Me(l){if(ye(b.value,":autofill")||ye(b.value,":-webkit-autofill")){const a=E.value.find(m=>m.title===l.target.value);a&&V(a)}}function Ue(){var l;v.value&&(c.value=!0,(l=b.value)==null||l.focus())}function Be(l){v.value=!0,setTimeout(()=>{F.value=!0})}function Le(l){F.value=!1}function Ne(l){(l==null||l===""&&!e.multiple)&&(r.value=[])}const re=T(!1);function V(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const m=r.value.findIndex(d=>e.valueComparator(d.value,l.value)),o=a??!~m;if(~m){const d=o?[...r.value,l]:[...r.value];d.splice(m,1),r.value=d}else o&&(r.value=[...r.value,l]);e.clearOnSelect&&(p.value="")}else{const m=a!==!1;r.value=m?[l]:[],p.value=m&&!H.value?l.title:"",pe(()=>{u.value=!1,c.value=!0})}}return B(v,(l,a)=>{var m;l!==a&&(l?(re.value=!0,p.value=e.multiple||H.value?"":String(((m=r.value.at(-1))==null?void 0:m.props.title)??""),c.value=!0,pe(()=>re.value=!1)):(!e.multiple&&p.value==null?r.value=[]:_.value&&!F.value&&!r.value.some(o=>{let{value:d}=o;return d===S.value[0].value})&&V(S.value[0]),u.value=!1,p.value="",s.value=-1))}),B(p,l=>{!v.value||re.value||(l&&(u.value=!0),c.value=!l)}),B(u,()=>{if(!e.hideSelected&&u.value&&r.value.length){const l=S.value.findIndex(a=>r.value.some(m=>a.value===m.value));yl&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=A.value)==null||a.scrollToIndex(l))})}}),B(()=>e.items,(l,a)=>{u.value||v.value&&!a.length&&l.length&&(u.value=!0)}),Vl(()=>{const l=!!(!e.hideNoData||S.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),a=r.value.length>0,m=ve.filterProps(e);return n(ve,R({ref:b},m,{modelValue:p.value,"onUpdate:modelValue":[o=>p.value=o,Ne],focused:v.value,"onUpdate:focused":o=>v.value=o,validationValue:r.externalValue,counterValue:qe.value,dirty:a,onChange:Me,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":u.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!H.value,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":Pe,"onMousedown:control":Te,onKeydown:De}),{...t,default:()=>n(J,null,[n(cl,R({ref:w,modelValue:u.value,"onUpdate:modelValue":o=>u.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:ae.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ue},e.menuProps),{default:()=>[l&&n(el,R({ref:oe,selected:$e.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:Ie,onFocusin:Be,onFocusout:Le,onScrollPassive:Oe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var o,d,h;return[(o=t["prepend-item"])==null?void 0:o.call(t),!S.value.length&&!e.hideNoData&&(((d=t["no-data"])==null?void 0:d.call(t))??n(fe,{title:$(e.noDataText)},null)),n(ll,{ref:A,renderless:!0,items:S.value},{default:f=>{var ce;let{item:g,index:k,itemRef:C}=f;const me=R(g.props,{ref:C,key:k,active:_.value&&k===0?!0:void 0,onClick:()=>V(g,null)});return((ce=t.item)==null?void 0:ce.call(t,{item:g,index:k,props:me}))??n(fe,R(me,{role:"option"}),{prepend:z=>{let{isSelected:Q}=z;return n(J,null,[e.multiple&&!e.hideSelected?n(pl,{key:g.value,modelValue:Q,ripple:!1,tabindex:"-1"},null):void 0,g.props.prependAvatar&&n(tl,{image:g.props.prependAvatar},null),g.props.prependIcon&&n(ge,{icon:g.props.prependIcon},null)])},title:()=>{var z,Q;return c.value?g.title:kl(g.title,(z=Re(g))==null?void 0:z.title,((Q=p.value)==null?void 0:Q.length)??0)}})}}),(h=t["append-item"])==null?void 0:h.call(t)]}})]}),r.value.map((o,d)=>{function h(C){C.stopPropagation(),C.preventDefault(),V(o,!1)}const f={"onClick:close":h,onMousedown(C){C.preventDefault(),C.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},g=K.value?!!t.chip:!!t.selection,k=g?bl(K.value?t.chip({item:o,index:d,props:f}):t.selection({item:o,index:d})):void 0;if(!(g&&!k))return n("div",{key:o.value,class:["v-autocomplete__selection",d===s.value&&["v-autocomplete__selection--selected",ke.value]],style:d===s.value?Ce.value:{}},[K.value?t.chip?n(fl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[k]}):n(al,R({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},f),null):k??n("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&d<r.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[L(",")])])])})]),"append-inner":function(){var f;for(var o=arguments.length,d=new Array(o),h=0;h<o;h++)d[h]=arguments[h];return n(J,null,[(f=t["append-inner"])==null?void 0:f.call(t,...d),e.menuIcon?n(ge,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:xe,onClick:hl,"aria-label":$(j.value),title:$(j.value)},null):void 0])}})}),il({isFocused:v,isPristine:c,menu:u,search:p,filteredItems:te,select:V},b)}}),Ae=je({name:"FSAutocompleteField",components:{FSSpan:N,FSCol:Z,FSRow:ie},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},returnObject:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:search"],setup:(e,{emit:i})=>{const{validateOn:t,blurred:$,getMessages:b}=ze(),{getColors:v}=Qe(),{slots:c}=We();delete c.label,delete c.description;const F=v(X.Background),w=v(X.Error),A=v(X.Light),O=v(X.Dark),u=U(""),s=y(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-background-color":F.base,"--fs-autocomplete-field-border-color":A.dark,"--fs-autocomplete-field-color":O.base,"--fs-autocomplete-field-active-border-color":O.dark,"--fs-autocomplete-field-error-color":w.base,"--fs-autocomplete-field-error-border-color":w.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":A.base,"--fs-autocomplete-field-color":A.dark,"--fs-autocomplete-field-active-border-color":A.base}),ee=y(()=>({style:s.value})),j=y(()=>{const I=["fs-autocomplete-field"];return e.multiple&&I.push("fs-autocomplete-multiple-field"),I}),E=y(()=>e.messages??b(e.modelValue,e.rules)),le=I=>{i("update:modelValue",I),u.value=""};return B(u,()=>{i("update:search",u.value)}),{innerSearch:u,validateOn:t,listStyle:ee,messages:E,blurred:$,classes:j,slots:c,style:s,onUpdate:le}}});function Rl(e,i,t,$,b,v){return x(),D(Z,null,{default:q(()=>[e.$props.hideHeader?M("",!0):ne(e.$slots,"label",{key:0},()=>[n(ie,{wrap:!1},{default:q(()=>[e.$props.label?(x(),D(N,{key:0,class:"fs-autocomplete-field-label",font:"text-overline",style:W(e.style)},{default:q(()=>[L(ue(e.$props.label),1)]),_:1},8,["style"])):M("",!0),e.$props.label&&e.$props.required?(x(),D(N,{key:1,class:"fs-autocomplete-field-label",style:W([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:q(()=>[L(" * ")]),_:1},8,["style"])):M("",!0),n(Ye,{style:{"min-width":"40px"}}),e.messages.length>0?(x(),D(N,{key:2,class:"fs-autocomplete-field-messages",font:"text-overline",style:W(e.style)},{default:q(()=>[L(ue(e.messages.join(", ")),1)]),_:1},8,["style"])):M("",!0)]),_:1})]),n(ql,R({menuIcon:"mdi-chevron-down",clearIcon:"mdi-close",variant:"outlined",style:e.style,listProps:e.listStyle,class:e.classes,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,returnObject:e.$props.returnObject,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,onBlur:i[0]||(i[0]=c=>e.blurred=!0),search:e.innerSearch,"onUpdate:search":i[1]||(i[1]=c=>e.innerSearch=c)},e.$attrs),Ee({_:2},[Ke(e.slots,(c,F)=>({name:F,fn:q(w=>[ne(e.$slots,F,He(_e(w)))])}))]),1040,["style","listProps","class","items","multiple","itemTitle","itemValue","readonly","clearable","returnObject","rules","validateOn","modelValue","onUpdate:modelValue","search"]),ne(e.$slots,"description",{},()=>[e.$props.description?(x(),D(N,{key:0,class:"fs-autocomplete-field-description",font:"text-underline",style:W(e.style)},{default:q(()=>[L(ue(e.$props.description),1)]),_:1},8,["style"])):M("",!0)])]),_:3})}const de=Xe(Ae,[["render",Rl]]);Ae.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"returnObject",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};const $l=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],Ot={title:"Foundation/Shared/Input fields/AutocompleteField",component:de,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},Y={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:i})=>({components:{FSAutocompleteField:de,FSCol:Z},props:Object.keys(i),setup(){return{...e}},template:`
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
    </FSCol>`})},G={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${$l[e]}`})),value1:null,value2:null,value3:null,rules:wl}},render:(e,{argTypes:i})=>({components:{FSForm:Al,FSAutocompleteField:de,FSCol:Z,FSRow:ie},props:Object.keys(i),setup(){return{...e}},template:`
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
    </FSForm>`})};var be,he,Se;Y.parameters={...Y.parameters,docs:{...(be=Y.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=(he=Y.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var Fe,Ve,we;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(we=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};const It=["Variations","Rules"];export{G as Rules,Y as Variations,It as __namedExportsOrder,Ot as default};
