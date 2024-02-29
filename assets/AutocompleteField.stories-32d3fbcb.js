import{d as B,s as T,e as F,w as N,v as de,z as r,F as W,A as $,M as U,E as Ee,H as P,I as O,J as R,L as Z,R as j,N as ee,K as M,U as _e,V as He,O as Ke,P as je}from"./vue.esm-bundler-a27e881e.js";import{_ as L}from"./FSSpan-23926a6a.js";import{_ as G}from"./FSCol-5941d279.js";import{_ as oe}from"./FSRow-e0b07355.js";import{u as ze}from"./useSlots-f8c8bb5a.js";import{u as le,C as te}from"./useColors-64c3c523.js";import{_ as Je}from"./_plugin-vue_export-helper-c27b6911.js";import{V as We}from"./VSpacer-0b076bec.js";import{m as Ge,u as Qe,a as Xe,b as Ye,c as me,d as Ze,e as el,f as ll,g as tl}from"./VSelect-5b6a3eb4.js";import{m as al,V as ce}from"./VTextField-9d0c72c8.js";import{g as ol,c as rl,u as nl}from"./color-17bc18af.js";import{m as sl,u as ul}from"./filter-0b9201b4.js";import{d as il}from"./VInput-932b5afe.js";import{f as dl}from"./forwardRefs-e658ad70.js";import{a as ml,u as ae}from"./locale-d8beded1.js";import{m as cl}from"./transition-91aa1796.js";import{V as pl}from"./VMenu-7f762766.js";import{V as pe}from"./VIcon-05012a67.js";import{V as fl}from"./VDefaultsProvider-34413012.js";import{p as vl,u as gl,I as yl,D as hl,E as bl,w as Sl,B as fe}from"./theme-40a9efa2.js";import{A as Fl,V as Vl}from"./VForm-b9b36940.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VOverlay-1baa69a1.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./dimensions-59e3b80b.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";import"./router-952fd40f.js";import"./index-1c023ca5.js";import"./ssrBoot-3aa6a9b0.js";import"./variant-43fdd0d6.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./index-d3298e01.js";import"./VImg-52b1b44b.js";import"./index-e8bb7e10.js";import"./VDivider-a406fa8c.js";import"./resizeObserver-f6ddbc93.js";import"./VSelectionControl-cdba1a53.js";import"./VSlideGroup-6834ac05.js";import"./group-9102b821.js";import"./VField-78590269.js";import"./useTimeZone-035f95ae.js";import"./useTranslations-0799e799.js";function wl(e,u,t){if(u==null)return e;if(Array.isArray(u))throw new Error("Multiple matches is not implemented");return typeof u=="number"&&~u?r(W,null,[r("span",{class:"v-autocomplete__unmask"},[e.substr(0,u)]),r("span",{class:"v-autocomplete__mask"},[e.substr(u,t)]),r("span",{class:"v-autocomplete__unmask"},[e.substr(u+t)])]):e}const Al=vl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...sl({filterKeys:["title"]}),...Ge(),...gl(al({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...cl({transition:!1})},"VAutocomplete"),kl=ol()({name:"VAutocomplete",props:Al(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,u){let{slots:t}=u;const{t:A}=ml(),v=B(),f=T(!1),c=T(!0),V=T(!1),I=B(),E=B(),w=ae(e,"menu"),i=F({get:()=>w.value,set:l=>{var a;w.value&&!l&&((a=I.value)!=null&&a.ΨopenChildren)||(w.value=l)}}),s=T(-1),Ve=F(()=>{var l;return(l=v.value)==null?void 0:l.color}),ne=F(()=>i.value?e.closeText:e.openText),{items:se,transformIn:we,transformOut:Ae}=Qe(e),{textColorClasses:ke,textColorStyles:Ce}=rl(Ve),p=ae(e,"search",""),n=ae(e,"modelValue",[],l=>we(l===null?[null]:Sl(l)),l=>{const a=Ae(l);return e.multiple?a:a[0]??null}),qe=F(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:n.value.length),x=il(),{filteredItems:Q,getMatches:Re}=ul(e,se,()=>c.value?"":p.value),h=F(()=>e.hideSelected?Q.value.filter(l=>!n.value.some(a=>a.value===l.value)):Q.value),$e=F(()=>n.value.map(l=>l.props.value)),_=F(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((a=h.value[0])==null?void 0:a.title))&&h.value.length>0&&!c.value&&!V.value}),X=F(()=>e.hideNoData&&!h.value.length||e.readonly||(x==null?void 0:x.isReadonly.value)),Y=B(),{onListScroll:Ie,onListKeydown:xe}=Xe(Y,v);function De(l){e.openOnClear&&(i.value=!0),p.value=""}function Te(){X.value||(i.value=!0)}function Pe(l){X.value||(f.value&&(l.preventDefault(),l.stopPropagation()),i.value=!i.value)}function Oe(l){var b,o,g;if(e.readonly||x!=null&&x.isReadonly.value)return;const a=v.value.selectionStart,m=n.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(i.value=!0),["Escape"].includes(l.key)&&(i.value=!1),_.value&&["Enter","Tab"].includes(l.key)&&k(h.value[0]),l.key==="ArrowDown"&&_.value&&((b=Y.value)==null||b.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(s.value<0){l.key==="Backspace"&&!p.value&&(s.value=m-1);return}const d=s.value,S=n.value[s.value];S&&!S.props.disabled&&k(S),s.value=d>=m-1?m-2:d}if(l.key==="ArrowLeft"){if(s.value<0&&a>0)return;const d=s.value>-1?s.value-1:m-1;n.value[d]?s.value=d:(s.value=-1,v.value.setSelectionRange((o=p.value)==null?void 0:o.length,(g=p.value)==null?void 0:g.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const d=s.value+1;n.value[d]?s.value=d:(s.value=-1,v.value.setSelectionRange(0,0))}}}function Me(l){if(fe(v.value,":autofill")||fe(v.value,":-webkit-autofill")){const a=se.value.find(m=>m.title===l.target.value);a&&k(a)}}function Be(){var l;f.value&&(c.value=!0,(l=v.value)==null||l.focus())}function Ne(l){f.value=!0,setTimeout(()=>{V.value=!0})}function Ue(l){V.value=!1}function Le(l){(l==null||l===""&&!e.multiple)&&(n.value=[])}const D=T(!1);function k(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const m=n.value.findIndex(b=>e.valueComparator(b.value,l.value));if(a=m===-1,a)n.value=[...n.value,l];else{const b=[...n.value];b.splice(m,1),n.value=b}e.clearOnSelect&&(p.value="")}else n.value=a?[l]:[],D.value=!0,p.value=a?l.title:"",i.value=!1,c.value=!0,de(()=>D.value=!1)}return N(f,(l,a)=>{var m;l!==a&&(l?(D.value=!0,p.value=e.multiple?"":String(((m=n.value.at(-1))==null?void 0:m.props.title)??""),c.value=!0,de(()=>D.value=!1)):(!e.multiple&&p.value==null?n.value=[]:_.value&&!V.value&&!n.value.some(b=>{let{value:o}=b;return o===h.value[0].value})&&k(h.value[0]),i.value=!1,p.value="",s.value=-1))}),N(p,l=>{!f.value||D.value||(l&&(i.value=!0),c.value=!l)}),N(i,()=>{if(!e.hideSelected&&i.value&&n.value.length){const l=h.value.findIndex(a=>n.value.some(m=>a.value===m.value));yl&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=E.value)==null||a.scrollToIndex(l))})}}),N(h,(l,a)=>{f.value&&(!l.length&&e.hideNoData&&(i.value=!1),!a.length&&l.length&&(i.value=!0))}),nl(()=>{const l=!!(e.chips||t.chip),a=!!(!e.hideNoData||h.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),m=n.value.length>0,b=ce.filterProps(e);return r(ce,$({ref:v},b,{modelValue:p.value,"onUpdate:modelValue":[o=>p.value=o,Le],focused:f.value,"onUpdate:focused":o=>f.value=o,validationValue:n.externalValue,counterValue:qe.value,dirty:m,onChange:Me,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":i.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:m?void 0:e.placeholder,"onClick:clear":De,"onMousedown:control":Te,onKeydown:Oe}),{...t,default:()=>r(W,null,[r(pl,$({ref:I,modelValue:i.value,"onUpdate:modelValue":o=>i.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:X.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Be},e.menuProps),{default:()=>[a&&r(Ye,$({ref:Y,selected:$e.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:xe,onFocusin:Ne,onFocusout:Ue,onScrollPassive:Ie,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var o,g,d;return[(o=t["prepend-item"])==null?void 0:o.call(t),!h.value.length&&!e.hideNoData&&(((g=t["no-data"])==null?void 0:g.call(t))??r(me,{title:A(e.noDataText)},null)),r(Ze,{ref:E,renderless:!0,items:h.value},{default:S=>{var ie;let{item:y,index:C,itemRef:q}=S;const ue=$(y.props,{ref:q,key:C,active:_.value&&C===0?!0:void 0,onClick:()=>k(y)});return((ie=t.item)==null?void 0:ie.call(t,{item:y,index:C,props:ue}))??r(me,$(ue,{role:"option"}),{prepend:H=>{let{isSelected:K}=H;return r(W,null,[e.multiple&&!e.hideSelected?r(el,{key:y.value,modelValue:K,ripple:!1,tabindex:"-1"},null):void 0,y.props.prependAvatar&&r(ll,{image:y.props.prependAvatar},null),y.props.prependIcon&&r(pe,{icon:y.props.prependIcon},null)])},title:()=>{var H,K;return c.value?y.title:wl(y.title,(H=Re(y))==null?void 0:H.title,((K=p.value)==null?void 0:K.length)??0)}})}}),(d=t["append-item"])==null?void 0:d.call(t)]}})]}),n.value.map((o,g)=>{function d(q){q.stopPropagation(),q.preventDefault(),k(o,!1)}const S={"onClick:close":d,onMousedown(q){q.preventDefault(),q.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},y=l?!!t.chip:!!t.selection,C=y?hl(l?t.chip({item:o,index:g,props:S}):t.selection({item:o,index:g})):void 0;if(!(y&&!C))return r("div",{key:o.value,class:["v-autocomplete__selection",g===s.value&&["v-autocomplete__selection--selected",ke.value]],style:g===s.value?Ce.value:{}},[l?t.chip?r(fl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[C]}):r(tl,$({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},S),null):C??r("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&g<n.value.length-1&&r("span",{class:"v-autocomplete__selection-comma"},[U(",")])])])})]),"append-inner":function(){var S;for(var o=arguments.length,g=new Array(o),d=0;d<o;d++)g[d]=arguments[d];return r(W,null,[(S=t["append-inner"])==null?void 0:S.call(t,...g),e.menuIcon?r(pe,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Pe,onClick:bl,"aria-label":A(ne.value),title:A(ne.value)},null):void 0])}})}),dl({isFocused:f,isPristine:c,menu:i,search:p,filteredItems:Q,select:k},v)}}),Fe=Ee({name:"FSAutocompleteField",components:{FSSpan:L,FSCol:G,FSRow:oe},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:search"],setup:(e,{emit:u})=>{const{slots:t}=ze();delete t.label,delete t.description;const A=B(""),v=le().getColors(te.Error),f=le().getColors(te.Light),c=le().getColors(te.Dark),V=F(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-border-color":f.dark,"--fs-autocomplete-field-color":c.base,"--fs-autocomplete-field-active-border-color":c.dark,"--fs-autocomplete-field-error-color":v.base,"--fs-autocomplete-field-error-border-color":v.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":f.base,"--fs-autocomplete-field-color":f.dark,"--fs-autocomplete-field-active-border-color":f.base}),I=F(()=>{const w=[];for(const i of e.rules){const s=i(e.modelValue??"");typeof s=="string"&&w.push(s)}return w}),E=F(()=>{const w=["fs-autocomplete-field"];return e.multiple&&w.push("fs-autocomplete-multiple-field"),w});return N(A,()=>{u("update:search",A.value)}),{messages:I,slots:t,style:V,classes:E,innerSearch:A}}});function Cl(e,u,t,A,v,f){return P(),O(G,null,{default:R(()=>[e.$props.hideHeader?M("",!0):Z(e.$slots,"label",{key:0},()=>[r(oe,{wrap:!1},{default:R(()=>[e.$props.label?(P(),O(L,{key:0,class:"fs-autocomplete-field-label",font:"text-overline",style:j(e.style)},{default:R(()=>[U(ee(e.$props.label),1)]),_:1},8,["style"])):M("",!0),e.$props.label&&e.$props.required?(P(),O(L,{key:1,class:"fs-autocomplete-field-label",style:j([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:R(()=>[U(" * ")]),_:1},8,["style"])):M("",!0),r(We,{style:{"min-width":"40px"}}),e.messages.length>0?(P(),O(L,{key:2,class:"fs-autocomplete-field-messages",font:"text-overline",style:j(e.style)},{default:R(()=>[U(ee(e.messages.join(", ")),1)]),_:1},8,["style"])):M("",!0)]),_:1})]),r(kl,$({menuIcon:"mdi-chevron-down",clearIcon:"mdi-close",variant:"outlined",style:e.style,class:e.classes,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,error:e.messages.length>0,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,clearable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":u[0]||(u[0]=c=>e.$emit("update:modelValue",c)),search:e.innerSearch,"onUpdate:search":u[1]||(u[1]=c=>e.innerSearch=c)},e.$attrs),_e({_:2},[He(e.slots,(c,V)=>({name:V,fn:R(I=>[Z(e.$slots,V,Ke(je(I)))])}))]),1040,["style","class","items","multiple","error","itemTitle","itemValue","readonly","clearable","modelValue","search"]),Z(e.$slots,"description",{},()=>[e.$props.description?(P(),O(L,{key:0,class:"fs-autocomplete-field-description",font:"text-underline",style:j(e.style)},{default:R(()=>[U(ee(e.$props.description),1)]),_:1},8,["style"])):M("",!0)])]),_:3})}const re=Je(Fe,[["render",Cl]]);Fe.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAutocompleteField.vue"]};const ql=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],Ft={title:"Foundation/Shared/Input fields/AutocompleteField",component:re,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},z={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:u})=>({components:{FSAutocompleteField:re,FSCol:G},props:Object.keys(u),setup(){return{...e}},template:`
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
    </FSCol>`})},J={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${ql[e]}`})),value1:null,value2:null,value3:null,rules:Fl}},render:(e,{argTypes:u})=>({components:{VForm:Vl,FSAutocompleteField:re,FSCol:G,FSRow:oe},props:Object.keys(u),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
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
    </v-form>`})};var ve,ge,ye;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var he,be,Se;J.parameters={...J.parameters,docs:{...(he=J.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
      VForm,
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
    <v-form v-model="args.valid">
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
    </v-form>\`
  })
}`,...(Se=(be=J.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};const Vt=["Variations","Rules"];export{J as Rules,z as Variations,Vt as __namedExportsOrder,Ft as default};
