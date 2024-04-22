import{d as E,s as B,e as y,w as L,n as fe,z as n,F as _,x as R,P as N,j as je,I as D,J as T,K as k,S as U,L as Z,Q as ue,M,Y as Ke,Z as He,U as ze,V as Qe}from"./vue.esm-bundler-9b0e8103.js";import{_ as ie}from"./FSButton-4f53dca1.js";import{_ as j}from"./FSSpan-66c77817.js";import{_ as ee}from"./FSCol-417d1c42.js";import{_ as de}from"./FSRow-efd9bf42.js";import{u as Je}from"./useRules-1f7652b9.js";import{u as We,C as x}from"./useColors-c8cdc69f.js";import{u as Ye}from"./useSlots-bfff66e3.js";import{_ as Ze}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ge}from"./VSpacer-fd2fc595.js";import{m as Xe,u as _e,a as el,b as ll,c as ve,d as tl,e as al,f as ol}from"./VSelect-a9ad219e.js";import{m as rl,V as ge}from"./VTextField-ed34766d.js";import{u as nl}from"./color-8a9bca19.js";import{m as ul,u as sl}from"./filter-4fbddaea.js";import{b as il}from"./VInput-9743ddde.js";import{f as dl}from"./forwardRefs-e658ad70.js";import{u as ml}from"./locale-e5242025.js";import{u as se}from"./proxiedModel-bfd89816.js";import{m as cl}from"./transition-6fc66ff9.js";import{V as pl}from"./VMenu-38668fe2.js";import{V as fl}from"./VCheckboxBtn-98bb56cd.js";import{V as ye}from"./VIcon-dbd6f8e0.js";import{V as vl}from"./VDefaultsProvider-b110751b.js";import{p as gl,o as yl,I as bl,P as hl,Q as Sl,w as Fl,M as be}from"./theme-eb9d1a1f.js";import{g as Vl,u as kl}from"./useRender-7c6c7a38.js";import{F as wl}from"./FSForm-2021d9fe.js";import{A as Al}from"./rules-4b68c01e.js";import"./FSClickable-1ebcabee.js";import"./FSCard-bd4b7ce0.js";import"./css-a20776b9.js";import"./VProgressCircular-49cc274e.js";import"./resizeObserver-d1864ccd.js";import"./tag-6bef4934.js";import"./FSIcon-42763d21.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VOverlay-b685a01d.js";import"./border-e6ad3d9a.js";import"./dimensions-a3779498.js";import"./display-cd82cc66.js";import"./lazy-9297b748.js";import"./router-cb82541f.js";import"./index-f5f914d5.js";import"./ssrBoot-3ada7612.js";import"./density-104762f9.js";import"./elevation-9129e0f4.js";import"./rounded-f08b035c.js";import"./index-5b7905d8.js";import"./VImg-6b167a7c.js";import"./index-d737aecc.js";import"./VDivider-ae04fd3f.js";import"./VSlideGroup-ffd03f93.js";import"./group-76451b20.js";import"./VField-719bff6c.js";import"./VLabel-2c7c7f15.js";import"./loader-e562d735.js";import"./VSelectionControl-615916fb.js";import"./useTranslations-8945c1d2.js";import"./useAppTimeZone-7e26f50a.js";function Cl(e,u,t){if(u==null)return e;if(Array.isArray(u))throw new Error("Multiple matches is not implemented");return typeof u=="number"&&~u?n(_,null,[n("span",{class:"v-autocomplete__unmask"},[e.substr(0,u)]),n("span",{class:"v-autocomplete__mask"},[e.substr(u,t)]),n("span",{class:"v-autocomplete__unmask"},[e.substr(u+t)])]):e}const ql=gl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...ul({filterKeys:["title"]}),...Xe(),...yl(rl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...cl({transition:!1})},"VAutocomplete"),Rl=Vl()({name:"VAutocomplete",props:ql(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,u){let{slots:t}=u;const{t:$}=ml(),b=E(),v=B(!1),c=B(!0),V=B(!1),A=E(),C=E(),P=se(e,"menu"),s=y({get:()=>P.value,set:l=>{var a;P.value&&!l&&((a=A.value)!=null&&a.ΨopenChildren)||(P.value=l)}}),i=B(-1),le=y(()=>{var l;return(l=b.value)==null?void 0:l.color}),K=y(()=>s.value?e.closeText:e.openText),{items:H,transformIn:te,transformOut:I}=_e(e),{textColorClasses:Ce,textColorStyles:qe}=nl(le),p=se(e,"search",""),r=se(e,"modelValue",[],l=>te(l===null?[null]:Fl(l)),l=>{const a=I(l);return e.multiple?a:a[0]??null}),Re=y(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),O=il(),{filteredItems:ae,getMatches:$e}=sl(e,H,()=>c.value?"":p.value),F=y(()=>e.hideSelected?ae.value.filter(l=>!r.value.some(a=>a.value===l.value)):ae.value),z=y(()=>!!(e.chips||t.chip)),Q=y(()=>z.value||!!t.selection),Pe=y(()=>r.value.map(l=>l.props.value)),J=y(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((a=F.value[0])==null?void 0:a.title))&&F.value.length>0&&!c.value&&!V.value}),oe=y(()=>e.hideNoData&&!F.value.length||e.readonly||(O==null?void 0:O.isReadonly.value)),re=E(),{onListScroll:Ie,onListKeydown:Oe}=el(re,b);function De(l){e.openOnClear&&(s.value=!0),p.value=""}function Te(){oe.value||(s.value=!0)}function Me(l){oe.value||(v.value&&(l.preventDefault(),l.stopPropagation()),s.value=!s.value)}function Be(l){var o,d,h;if(e.readonly||O!=null&&O.isReadonly.value)return;const a=b.value.selectionStart,m=r.value.length;if((i.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(s.value=!0),["Escape"].includes(l.key)&&(s.value=!1),J.value&&["Enter","Tab"].includes(l.key)&&w(F.value[0]),l.key==="ArrowDown"&&J.value&&((o=re.value)==null||o.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&Q.value&&r.value.length>0)return w(r.value[0],!1);if(i.value<0){l.key==="Backspace"&&!p.value&&(i.value=m-1);return}const f=i.value;w(r.value[i.value],!1),i.value=f>=m-1?m-2:f}if(e.multiple){if(l.key==="ArrowLeft"){if(i.value<0&&a>0)return;const f=i.value>-1?i.value-1:m-1;r.value[f]?i.value=f:(i.value=-1,b.value.setSelectionRange((d=p.value)==null?void 0:d.length,(h=p.value)==null?void 0:h.length))}if(l.key==="ArrowRight"){if(i.value<0)return;const f=i.value+1;r.value[f]?i.value=f:(i.value=-1,b.value.setSelectionRange(0,0))}}}function Ue(l){if(be(b.value,":autofill")||be(b.value,":-webkit-autofill")){const a=H.value.find(m=>m.title===l.target.value);a&&w(a)}}function xe(){var l;v.value&&(c.value=!0,(l=b.value)==null||l.focus())}function Ee(l){v.value=!0,setTimeout(()=>{V.value=!0})}function Le(l){V.value=!1}function Ne(l){(l==null||l===""&&!e.multiple)&&(r.value=[])}const ne=B(!1);function w(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const m=r.value.findIndex(d=>e.valueComparator(d.value,l.value)),o=a??!~m;if(~m){const d=o?[...r.value,l]:[...r.value];d.splice(m,1),r.value=d}else o&&(r.value=[...r.value,l]);e.clearOnSelect&&(p.value="")}else{const m=a!==!1;r.value=m?[l]:[],p.value=m&&!Q.value?l.title:"",fe(()=>{s.value=!1,c.value=!0})}}return L(v,(l,a)=>{var m;l!==a&&(l?(ne.value=!0,p.value=e.multiple||Q.value?"":String(((m=r.value.at(-1))==null?void 0:m.props.title)??""),c.value=!0,fe(()=>ne.value=!1)):(!e.multiple&&p.value==null?r.value=[]:J.value&&!V.value&&!r.value.some(o=>{let{value:d}=o;return d===F.value[0].value})&&w(F.value[0]),s.value=!1,p.value="",i.value=-1))}),L(p,l=>{!v.value||ne.value||(l&&(s.value=!0),c.value=!l)}),L(s,()=>{if(!e.hideSelected&&s.value&&r.value.length){const l=F.value.findIndex(a=>r.value.some(m=>a.value===m.value));bl&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=C.value)==null||a.scrollToIndex(l))})}}),L(()=>e.items,(l,a)=>{s.value||v.value&&!a.length&&l.length&&(s.value=!0)}),kl(()=>{const l=!!(!e.hideNoData||F.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),a=r.value.length>0,m=ge.filterProps(e);return n(ge,R({ref:b},m,{modelValue:p.value,"onUpdate:modelValue":[o=>p.value=o,Ne],focused:v.value,"onUpdate:focused":o=>v.value=o,validationValue:r.externalValue,counterValue:Re.value,dirty:a,onChange:Ue,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":s.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!Q.value,"v-autocomplete--selecting-index":i.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":De,"onMousedown:control":Te,onKeydown:Be}),{...t,default:()=>n(_,null,[n(pl,R({ref:A,modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:oe.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:xe},e.menuProps),{default:()=>[l&&n(ll,R({ref:re,selected:Pe.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:Oe,onFocusin:Ee,onFocusout:Le,onScrollPassive:Ie,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var o,d,h;return[(o=t["prepend-item"])==null?void 0:o.call(t),!F.value.length&&!e.hideNoData&&(((d=t["no-data"])==null?void 0:d.call(t))??n(ve,{title:$(e.noDataText)},null)),n(tl,{ref:C,renderless:!0,items:F.value},{default:f=>{var pe;let{item:g,index:q,itemRef:S}=f;const ce=R(g.props,{ref:S,key:q,active:J.value&&q===0?!0:void 0,onClick:()=>w(g,null)});return((pe=t.item)==null?void 0:pe.call(t,{item:g,index:q,props:ce}))??n(ve,R(ce,{role:"option"}),{prepend:W=>{let{isSelected:Y}=W;return n(_,null,[e.multiple&&!e.hideSelected?n(fl,{key:g.value,modelValue:Y,ripple:!1,tabindex:"-1"},null):void 0,g.props.prependAvatar&&n(al,{image:g.props.prependAvatar},null),g.props.prependIcon&&n(ye,{icon:g.props.prependIcon},null)])},title:()=>{var W,Y;return c.value?g.title:Cl(g.title,(W=$e(g))==null?void 0:W.title,((Y=p.value)==null?void 0:Y.length)??0)}})}}),(h=t["append-item"])==null?void 0:h.call(t)]}})]}),r.value.map((o,d)=>{function h(S){S.stopPropagation(),S.preventDefault(),w(o,!1)}const f={"onClick:close":h,onKeydown(S){S.key!=="Enter"&&S.key!==" "||(S.preventDefault(),S.stopPropagation(),h(S))},onMousedown(S){S.preventDefault(),S.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},g=z.value?!!t.chip:!!t.selection,q=g?hl(z.value?t.chip({item:o,index:d,props:f}):t.selection({item:o,index:d})):void 0;if(!(g&&!q))return n("div",{key:o.value,class:["v-autocomplete__selection",d===i.value&&["v-autocomplete__selection--selected",Ce.value]],style:d===i.value?qe.value:{}},[z.value?t.chip?n(vl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[q]}):n(ol,R({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},f),null):q??n("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&d<r.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[N(",")])])])})]),"append-inner":function(){var f;for(var o=arguments.length,d=new Array(o),h=0;h<o;h++)d[h]=arguments[h];return n(_,null,[(f=t["append-inner"])==null?void 0:f.call(t,...d),e.menuIcon?n(ye,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Me,onClick:Sl,"aria-label":$(K.value),title:$(K.value)},null):void 0])}})}),dl({isFocused:v,isPristine:c,menu:s,search:p,filteredItems:ae,select:w},b)}}),Ae=je({name:"FSAutocompleteField",components:{FSButton:ie,FSSpan:j,FSCol:ee,FSRow:de},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},returnObject:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:search"],setup:(e,{emit:u})=>{const{validateOn:t,blurred:$,getMessages:b}=Je(),{getColors:v}=We(),{slots:c}=Ye();delete c.label,delete c.description;const V=v(x.Background),A=v(x.Error),C=v(x.Light),P=v(x.Dark),s=E(""),i=y(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-background-color":V.base,"--fs-autocomplete-field-border-color":C.dark,"--fs-autocomplete-field-color":P.base,"--fs-autocomplete-field-active-border-color":P.dark,"--fs-autocomplete-field-error-color":A.base,"--fs-autocomplete-field-error-border-color":A.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":C.base,"--fs-autocomplete-field-color":C.dark,"--fs-autocomplete-field-active-border-color":C.base}),le=y(()=>({style:i.value})),K=y(()=>{const I=["fs-autocomplete-field"];return e.multiple&&I.push("fs-autocomplete-multiple-field"),I}),H=y(()=>e.messages??b(e.modelValue,e.rules)),te=I=>{u("update:modelValue",I),s.value=""};return L(s,()=>{u("update:search",s.value)}),{innerSearch:s,validateOn:t,ColorEnum:x,listStyle:le,messages:H,blurred:$,classes:K,slots:c,style:i,onUpdate:te}}});function $l(e,u,t,$,b,v){return D(),T(ee,null,{default:k(()=>[e.$props.hideHeader?M("",!0):U(e.$slots,"label",{key:0},()=>[n(de,{wrap:!1},{default:k(()=>[e.$props.label?(D(),T(j,{key:0,class:"fs-autocomplete-field-label",font:"text-overline",style:Z(e.style)},{default:k(()=>[N(ue(e.$props.label),1)]),_:1},8,["style"])):M("",!0),e.$props.label&&e.$props.required?(D(),T(j,{key:1,class:"fs-autocomplete-field-label",style:Z([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:k(()=>[N(" * ")]),_:1},8,["style"])):M("",!0),n(Ge,{style:{"min-width":"40px"}}),e.messages.length>0?(D(),T(j,{key:2,class:"fs-autocomplete-field-messages",font:"text-overline",style:Z(e.style)},{default:k(()=>[N(ue(e.messages.join(", ")),1)]),_:1},8,["style"])):M("",!0)]),_:1})]),n(Rl,R({class:["fs-autocomplete-field",e.classes],variant:"outlined",menuIcon:null,style:e.style,listProps:e.listStyle,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,returnObject:e.$props.returnObject,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,onBlur:u[1]||(u[1]=c=>e.blurred=!0),search:e.innerSearch,"onUpdate:search":u[2]||(u[2]=c=>e.innerSearch=c)},e.$attrs),Ke({clear:k(()=>[U(e.$slots,"clear",{},()=>[e.$props.editable&&e.$props.modelValue?(D(),T(ie,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:u[0]||(u[0]=c=>e.$emit("update:modelValue",null))},null,8,["color"])):M("",!0)])]),"append-inner":k(()=>[U(e.$slots,"append-inner",{},()=>[n(ie,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[He(e.slots,(c,V)=>({name:V,fn:k(A=>[U(e.$slots,V,ze(Qe(A)))])}))]),1040,["style","listProps","class","items","multiple","itemTitle","itemValue","readonly","clearable","returnObject","rules","validateOn","modelValue","onUpdate:modelValue","search"]),U(e.$slots,"description",{},()=>[e.$props.description?(D(),T(j,{key:0,class:"fs-autocomplete-field-description",font:"text-underline",style:Z(e.style)},{default:k(()=>[N(ue(e.$props.description),1)]),_:1},8,["style"])):M("",!0)])]),_:3})}const me=Ze(Ae,[["render",$l]]);Ae.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"returnObject",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"clear"},{name:"append-inner"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};const Pl=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],Bt={title:"Foundation/Shared/Input fields/AutocompleteField",component:me,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},G={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(e,{argTypes:u})=>({components:{FSAutocompleteField:me,FSCol:ee},props:Object.keys(u),setup(){return{...e}},template:`
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
    </FSCol>`})},X={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${Pl[e]}`})),value1:null,value2:null,value3:null,rules:Al}},render:(e,{argTypes:u})=>({components:{FSForm:wl,FSAutocompleteField:me,FSCol:ee,FSRow:de},props:Object.keys(u),setup(){return{...e}},template:`
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
    </FSForm>`})};var he,Se,Fe;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=G.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var Ve,ke,we;X.parameters={...X.parameters,docs:{...(Ve=X.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(we=(ke=X.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};const Ut=["Variations","Rules"];export{X as Rules,G as Variations,Ut as __namedExportsOrder,Bt as default};
