import{d as B,s as T,e as V,w as N,v as de,z as r,F as G,A as R,M as U,E as Le,H as P,I as O,J as q,L as ee,R as z,N as le,K as M,U as Ee,V as _e,O as He,P as Ke}from"./vue.esm-bundler-a27e881e.js";import{_ as L}from"./FSSpan-23926a6a.js";import{_ as Q}from"./FSCol-5941d279.js";import{_ as oe}from"./FSRow-e0b07355.js";import{u as je,C as te}from"./useColors-64c3c523.js";import{u as ze}from"./useSlots-f8c8bb5a.js";import{_ as Je}from"./_plugin-vue_export-helper-c27b6911.js";import{V as We}from"./VSpacer-0b076bec.js";import{m as Ge,u as Qe,a as Xe,b as Ye,c as me,d as Ze,e as el,f as ll,g as tl}from"./VSelect-5b6a3eb4.js";import{m as al,V as ce}from"./VTextField-9d0c72c8.js";import{g as ol,c as rl,u as nl}from"./color-17bc18af.js";import{m as sl,u as ul}from"./filter-0b9201b4.js";import{d as il}from"./VInput-932b5afe.js";import{f as dl}from"./forwardRefs-e658ad70.js";import{a as ml,u as ae}from"./locale-d8beded1.js";import{m as cl}from"./transition-91aa1796.js";import{V as pl}from"./VMenu-7f762766.js";import{V as pe}from"./VIcon-05012a67.js";import{V as fl}from"./VDefaultsProvider-34413012.js";import{p as vl,u as gl,I as yl,D as hl,E as bl,w as Sl,B as fe}from"./theme-40a9efa2.js";import{A as Fl,V as Vl}from"./VForm-b9b36940.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VOverlay-1baa69a1.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./dimensions-59e3b80b.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";import"./router-952fd40f.js";import"./index-1c023ca5.js";import"./ssrBoot-3aa6a9b0.js";import"./variant-43fdd0d6.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./index-d3298e01.js";import"./VImg-52b1b44b.js";import"./index-e8bb7e10.js";import"./VDivider-a406fa8c.js";import"./resizeObserver-f6ddbc93.js";import"./VSelectionControl-cdba1a53.js";import"./VSlideGroup-6834ac05.js";import"./group-9102b821.js";import"./VField-78590269.js";import"./useTimeZone-035f95ae.js";import"./useTranslations-0799e799.js";function wl(e,i,t){if(i==null)return e;if(Array.isArray(i))throw new Error("Multiple matches is not implemented");return typeof i=="number"&&~i?r(G,null,[r("span",{class:"v-autocomplete__unmask"},[e.substr(0,i)]),r("span",{class:"v-autocomplete__mask"},[e.substr(i,t)]),r("span",{class:"v-autocomplete__unmask"},[e.substr(i+t)])]):e}const Al=vl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...sl({filterKeys:["title"]}),...Ge(),...gl(al({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...cl({transition:!1})},"VAutocomplete"),kl=ol()({name:"VAutocomplete",props:Al(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:w}=ml(),v=B(),f=T(!1),c=T(!0),h=T(!1),$=B(),E=B(),x=ae(e,"menu"),n=V({get:()=>x.value,set:l=>{var a;x.value&&!l&&((a=$.value)!=null&&a.ΨopenChildren)||(x.value=l)}}),u=T(-1),_=V(()=>{var l;return(l=v.value)==null?void 0:l.color}),ne=V(()=>n.value?e.closeText:e.openText),{items:se,transformIn:Ve,transformOut:we}=Qe(e),{textColorClasses:Ae,textColorStyles:ke}=rl(_),p=ae(e,"search",""),s=ae(e,"modelValue",[],l=>Ve(l===null?[null]:Sl(l)),l=>{const a=we(l);return e.multiple?a:a[0]??null}),Ce=V(()=>typeof e.counterValue=="function"?e.counterValue(s.value):typeof e.counterValue=="number"?e.counterValue:s.value.length),I=il(),{filteredItems:X,getMatches:qe}=ul(e,se,()=>c.value?"":p.value),b=V(()=>e.hideSelected?X.value.filter(l=>!s.value.some(a=>a.value===l.value)):X.value),Re=V(()=>s.value.map(l=>l.props.value)),H=V(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((a=b.value[0])==null?void 0:a.title))&&b.value.length>0&&!c.value&&!h.value}),Y=V(()=>e.hideNoData&&!b.value.length||e.readonly||(I==null?void 0:I.isReadonly.value)),Z=B(),{onListScroll:$e,onListKeydown:Ie}=Xe(Z,v);function xe(l){e.openOnClear&&(n.value=!0),p.value=""}function De(){Y.value||(n.value=!0)}function Te(l){Y.value||(f.value&&(l.preventDefault(),l.stopPropagation()),n.value=!n.value)}function Pe(l){var S,o,g;if(e.readonly||I!=null&&I.isReadonly.value)return;const a=v.value.selectionStart,m=s.value.length;if((u.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(n.value=!0),["Escape"].includes(l.key)&&(n.value=!1),H.value&&["Enter","Tab"].includes(l.key)&&A(b.value[0]),l.key==="ArrowDown"&&H.value&&((S=Z.value)==null||S.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(u.value<0){l.key==="Backspace"&&!p.value&&(u.value=m-1);return}const d=u.value,F=s.value[u.value];F&&!F.props.disabled&&A(F),u.value=d>=m-1?m-2:d}if(l.key==="ArrowLeft"){if(u.value<0&&a>0)return;const d=u.value>-1?u.value-1:m-1;s.value[d]?u.value=d:(u.value=-1,v.value.setSelectionRange((o=p.value)==null?void 0:o.length,(g=p.value)==null?void 0:g.length))}if(l.key==="ArrowRight"){if(u.value<0)return;const d=u.value+1;s.value[d]?u.value=d:(u.value=-1,v.value.setSelectionRange(0,0))}}}function Oe(l){if(fe(v.value,":autofill")||fe(v.value,":-webkit-autofill")){const a=se.value.find(m=>m.title===l.target.value);a&&A(a)}}function Me(){var l;f.value&&(c.value=!0,(l=v.value)==null||l.focus())}function Be(l){f.value=!0,setTimeout(()=>{h.value=!0})}function Ne(l){h.value=!1}function Ue(l){(l==null||l===""&&!e.multiple)&&(s.value=[])}const D=T(!1);function A(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const m=s.value.findIndex(S=>e.valueComparator(S.value,l.value));if(a=m===-1,a)s.value=[...s.value,l];else{const S=[...s.value];S.splice(m,1),s.value=S}e.clearOnSelect&&(p.value="")}else s.value=a?[l]:[],D.value=!0,p.value=a?l.title:"",n.value=!1,c.value=!0,de(()=>D.value=!1)}return N(f,(l,a)=>{var m;l!==a&&(l?(D.value=!0,p.value=e.multiple?"":String(((m=s.value.at(-1))==null?void 0:m.props.title)??""),c.value=!0,de(()=>D.value=!1)):(!e.multiple&&p.value==null?s.value=[]:H.value&&!h.value&&!s.value.some(S=>{let{value:o}=S;return o===b.value[0].value})&&A(b.value[0]),n.value=!1,p.value="",u.value=-1))}),N(p,l=>{!f.value||D.value||(l&&(n.value=!0),c.value=!l)}),N(n,()=>{if(!e.hideSelected&&n.value&&s.value.length){const l=b.value.findIndex(a=>s.value.some(m=>a.value===m.value));yl&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=E.value)==null||a.scrollToIndex(l))})}}),N(b,(l,a)=>{f.value&&(!l.length&&e.hideNoData&&(n.value=!1),!a.length&&l.length&&(n.value=!0))}),nl(()=>{const l=!!(e.chips||t.chip),a=!!(!e.hideNoData||b.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),m=s.value.length>0,S=ce.filterProps(e);return r(ce,R({ref:v},S,{modelValue:p.value,"onUpdate:modelValue":[o=>p.value=o,Ue],focused:f.value,"onUpdate:focused":o=>f.value=o,validationValue:s.externalValue,counterValue:Ce.value,dirty:m,onChange:Oe,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":n.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":u.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:m?void 0:e.placeholder,"onClick:clear":xe,"onMousedown:control":De,onKeydown:Pe}),{...t,default:()=>r(G,null,[r(pl,R({ref:$,modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:Y.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Me},e.menuProps),{default:()=>[a&&r(Ye,R({ref:Z,selected:Re.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:Ie,onFocusin:Be,onFocusout:Ne,onScrollPassive:$e,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var o,g,d;return[(o=t["prepend-item"])==null?void 0:o.call(t),!b.value.length&&!e.hideNoData&&(((g=t["no-data"])==null?void 0:g.call(t))??r(me,{title:w(e.noDataText)},null)),r(Ze,{ref:E,renderless:!0,items:b.value},{default:F=>{var ie;let{item:y,index:k,itemRef:C}=F;const ue=R(y.props,{ref:C,key:k,active:H.value&&k===0?!0:void 0,onClick:()=>A(y)});return((ie=t.item)==null?void 0:ie.call(t,{item:y,index:k,props:ue}))??r(me,R(ue,{role:"option"}),{prepend:K=>{let{isSelected:j}=K;return r(G,null,[e.multiple&&!e.hideSelected?r(el,{key:y.value,modelValue:j,ripple:!1,tabindex:"-1"},null):void 0,y.props.prependAvatar&&r(ll,{image:y.props.prependAvatar},null),y.props.prependIcon&&r(pe,{icon:y.props.prependIcon},null)])},title:()=>{var K,j;return c.value?y.title:wl(y.title,(K=qe(y))==null?void 0:K.title,((j=p.value)==null?void 0:j.length)??0)}})}}),(d=t["append-item"])==null?void 0:d.call(t)]}})]}),s.value.map((o,g)=>{function d(C){C.stopPropagation(),C.preventDefault(),A(o,!1)}const F={"onClick:close":d,onMousedown(C){C.preventDefault(),C.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},y=l?!!t.chip:!!t.selection,k=y?hl(l?t.chip({item:o,index:g,props:F}):t.selection({item:o,index:g})):void 0;if(!(y&&!k))return r("div",{key:o.value,class:["v-autocomplete__selection",g===u.value&&["v-autocomplete__selection--selected",Ae.value]],style:g===u.value?ke.value:{}},[l?t.chip?r(fl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[k]}):r(tl,R({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},F),null):k??r("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&g<s.value.length-1&&r("span",{class:"v-autocomplete__selection-comma"},[U(",")])])])})]),"append-inner":function(){var F;for(var o=arguments.length,g=new Array(o),d=0;d<o;d++)g[d]=arguments[d];return r(G,null,[(F=t["append-inner"])==null?void 0:F.call(t,...g),e.menuIcon?r(pe,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Te,onClick:bl,"aria-label":w(ne.value),title:w(ne.value)},null):void 0])}})}),dl({isFocused:f,isPristine:c,menu:n,search:p,filteredItems:X,select:A},v)}}),Fe=Le({name:"FSAutocompleteField",components:{FSSpan:L,FSCol:Q,FSRow:oe},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:search"],setup:(e,{emit:i})=>{const{getColors:t}=je(),{slots:w}=ze();delete w.label,delete w.description;const v=t(te.Error),f=t(te.Light),c=t(te.Dark),h=B(""),$=V(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-border-color":f.dark,"--fs-autocomplete-field-color":c.base,"--fs-autocomplete-field-active-border-color":c.dark,"--fs-autocomplete-field-error-color":v.base,"--fs-autocomplete-field-error-border-color":v.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":f.base,"--fs-autocomplete-field-color":f.dark,"--fs-autocomplete-field-active-border-color":f.base}),E=V(()=>{const n=[];for(const u of e.rules){const _=u(e.modelValue??"");typeof _=="string"&&n.push(_)}return n}),x=V(()=>{const n=["fs-autocomplete-field"];return e.multiple&&n.push("fs-autocomplete-multiple-field"),n});return N(h,()=>{i("update:search",h.value)}),{messages:E,slots:w,style:$,classes:x,innerSearch:h}}});function Cl(e,i,t,w,v,f){return P(),O(Q,null,{default:q(()=>[e.$props.hideHeader?M("",!0):ee(e.$slots,"label",{key:0},()=>[r(oe,{wrap:!1},{default:q(()=>[e.$props.label?(P(),O(L,{key:0,class:"fs-autocomplete-field-label",font:"text-overline",style:z(e.style)},{default:q(()=>[U(le(e.$props.label),1)]),_:1},8,["style"])):M("",!0),e.$props.label&&e.$props.required?(P(),O(L,{key:1,class:"fs-autocomplete-field-label",style:z([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:q(()=>[U(" * ")]),_:1},8,["style"])):M("",!0),r(We,{style:{"min-width":"40px"}}),e.messages.length>0?(P(),O(L,{key:2,class:"fs-autocomplete-field-messages",font:"text-overline",style:z(e.style)},{default:q(()=>[U(le(e.messages.join(", ")),1)]),_:1},8,["style"])):M("",!0)]),_:1})]),r(kl,R({menuIcon:"mdi-chevron-down",clearIcon:"mdi-close",variant:"outlined",style:e.style,class:e.classes,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,error:e.messages.length>0,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,clearable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=c=>e.$emit("update:modelValue",c)),search:e.innerSearch,"onUpdate:search":i[1]||(i[1]=c=>e.innerSearch=c)},e.$attrs),Ee({_:2},[_e(e.slots,(c,h)=>({name:h,fn:q($=>[ee(e.$slots,h,He(Ke($)))])}))]),1040,["style","class","items","multiple","error","itemTitle","itemValue","readonly","clearable","modelValue","search"]),ee(e.$slots,"description",{},()=>[e.$props.description?(P(),O(L,{key:0,class:"fs-autocomplete-field-description",font:"text-underline",style:z(e.style)},{default:q(()=>[U(le(e.$props.description),1)]),_:1},8,["style"])):M("",!0)])]),_:3})}const re=Je(Fe,[["render",Cl]]);Fe.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAutocompleteField.vue"]};const ql=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],Ft={title:"Foundation/Shared/Input fields/AutocompleteField",component:re,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},J={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:i})=>({components:{FSAutocompleteField:re,FSCol:Q},props:Object.keys(i),setup(){return{...e}},template:`
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
    </FSCol>`})},W={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${ql[e]}`})),value1:null,value2:null,value3:null,rules:Fl}},render:(e,{argTypes:i})=>({components:{VForm:Vl,FSAutocompleteField:re,FSCol:Q,FSRow:oe},props:Object.keys(i),setup(){return{...e}},template:`
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
    </v-form>`})};var ve,ge,ye;J.parameters={...J.parameters,docs:{...(ve=J.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(ge=J.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var he,be,Se;W.parameters={...W.parameters,docs:{...(he=W.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Se=(be=W.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};const Vt=["Variations","Rules"];export{W as Rules,J as Variations,Vt as __namedExportsOrder,Ft as default};
