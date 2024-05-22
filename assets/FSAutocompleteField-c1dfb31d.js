import{j as Me,d as N,e as y,w as U,s as L,n as me,A as n,F as E,B as A,O as ne,I as ae,J as I,K as O,L as $,M as Ne,Y as pe,Z as ve,W as Q,Q as te,R as ue,N as ge,P as ye}from"./vue.esm-bundler-01006032.js";import{F as Ue}from"./FSToggleSet-be653781.js";import{F as Ee}from"./VField-f1a9daf9.js";import{F as Se,V as je}from"./FSCheckbox-40e0c55f.js";import{F as re}from"./FSButton-be94d44f.js";import{F as He}from"./FSLoader-639650a7.js";import{_ as se}from"./FSSpan-6e79caf3.js";import{_ as ie}from"./FSRow-83e75060.js";import{u as Ke}from"./useRules-54978858.js";import{u as We,C as M}from"./useColors-13ed6ee6.js";import{u as ze}from"./useSlots-e0d7ab7c.js";import{_ as Je}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Qe,u as Ye,b as Ze,c as Ge,V as de,d as Xe,e as _e,f as xe}from"./VSelect-450b500f.js";import{m as el,V as Ve}from"./VTextField-f4d9b05c.js";import{a as ll}from"./color-8c62b342.js";import{m as al,u as tl}from"./filter-9717b913.js";import{b as ul}from"./VInput-50bb839f.js";import{f as ol}from"./forwardRefs-e658ad70.js";import{a as nl}from"./locale-903ef8d8.js";import{u as oe}from"./proxiedModel-69023448.js";import{m as rl}from"./transition-9c7eb302.js";import{V as sl}from"./VMenu-4c05ddd6.js";import{V as be}from"./VIcon-17be8ae5.js";import{V as il}from"./VDefaultsProvider-d99c6ff5.js";import{p as dl,C as cl,I as fl,N as ml,O as pl,w as vl,P as he}from"./theme-a26d2375.js";import{g as gl,u as yl}from"./useRender-4bcbb6ac.js";const ke=Me({name:"FSAutocompleteField",components:{FSToggleSet:Ue,FSBaseField:Ee,FSCheckbox:Se,FSButton:re,FSLoader:He,FSSpan:se,FSRow:ie},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},returnObject:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},toggleSet:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:search"],setup:(e,{emit:f})=>{const{validateOn:a,blurred:D,getMessages:S}=Ke(),{getColors:V}=We(),{slots:m}=ze();delete m.label,delete m.description;const w=V(M.Background),P=V(M.Error),p=V(M.Light),b=V(M.Dark),o=N(""),i=y(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-background-color":w.base,"--fs-autocomplete-field-border-color":p.dark,"--fs-autocomplete-field-color":b.base,"--fs-autocomplete-field-active-border-color":b.dark,"--fs-autocomplete-field-error-color":P.base,"--fs-autocomplete-field-error-border-color":P.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":p.base,"--fs-autocomplete-field-color":p.dark,"--fs-autocomplete-field-active-border-color":p.base}),Y=y(()=>Object.keys(m).filter(v=>v.startsWith("autocomplete-")).reduce((v,s)=>(v[s.substring(13)]=m[s],v),{})),j=y(()=>Object.keys(m).filter(v=>v.startsWith("toggle-set-")).reduce((v,s)=>(v[s.substring(11)]=m[s],v),{})),H=y(()=>({style:i.value})),Z=y(()=>{const v=["fs-autocomplete-field"];return e.multiple&&v.push("fs-autocomplete-multiple-field"),v}),G=y(()=>e.messages??S(e.modelValue,e.rules)),X=v=>{f("update:modelValue",v)};return U(o,()=>{f("update:search",o.value)}),{autocompleteSlots:Y,toggleSetSlots:j,innerSearch:o,validateOn:a,ColorEnum:M,listStyle:H,messages:G,blurred:D,classes:Z,slots:m,style:i,onUpdate:X}}});function Vl(e,f,a){if(f==null)return e;if(Array.isArray(f))throw new Error("Multiple matches is not implemented");return typeof f=="number"&&~f?n(E,null,[n("span",{class:"v-autocomplete__unmask"},[e.substr(0,f)]),n("span",{class:"v-autocomplete__mask"},[e.substr(f,a)]),n("span",{class:"v-autocomplete__unmask"},[e.substr(f+a)])]):e}const bl=dl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...al({filterKeys:["title"]}),...Qe(),...cl(el({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...rl({transition:!1})},"VAutocomplete"),hl=gl()({name:"VAutocomplete",props:bl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,f){let{slots:a}=f;const{t:D}=nl(),S=N(),V=L(!1),m=L(!0),w=L(!1),P=N(),p=N(),b=oe(e,"menu"),o=y({get:()=>b.value,set:l=>{var t;b.value&&!l&&((t=P.value)!=null&&t.ΨopenChildren)||(b.value=l)}}),i=L(-1),Y=y(()=>{var l;return(l=S.value)==null?void 0:l.color}),j=y(()=>o.value?e.closeText:e.openText),{items:H,transformIn:Z,transformOut:G}=Ye(e),{textColorClasses:X,textColorStyles:v}=ll(Y),s=oe(e,"search",""),r=oe(e,"modelValue",[],l=>Z(l===null?[null]:vl(l)),l=>{const t=G(l);return e.multiple?t:t[0]??null}),Fe=y(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),R=ul(),{filteredItems:_,getMatches:$e}=tl(e,H,()=>m.value?"":s.value),C=y(()=>e.hideSelected?_.value.filter(l=>!r.value.some(t=>t.value===l.value)):_.value),K=y(()=>!!(e.chips||a.chip)),T=y(()=>K.value||!!a.selection),Ce=y(()=>r.value.map(l=>l.props.value)),W=y(()=>{var t;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&s.value===((t=C.value[0])==null?void 0:t.title))&&C.value.length>0&&!m.value&&!w.value}),x=y(()=>e.hideNoData&&!C.value.length||e.readonly||(R==null?void 0:R.isReadonly.value)),ee=N(),{onListScroll:we,onListKeydown:qe}=Ze(ee,S);function Ae(l){e.openOnClear&&(o.value=!0),s.value=""}function Pe(){x.value||(o.value=!0)}function Be(l){x.value||(V.value&&(l.preventDefault(),l.stopPropagation()),o.value=!o.value)}function Ie(l){var u,d,k;if(e.readonly||R!=null&&R.isReadonly.value)return;const t=S.value.selectionStart,c=r.value.length;if((i.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(o.value=!0),["Escape"].includes(l.key)&&(o.value=!1),W.value&&l.key==="Enter"&&q(C.value[0]),l.key==="ArrowDown"&&W.value&&((u=ee.value)==null||u.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&T.value&&r.value.length>0&&!s.value)return q(r.value[0],!1);if(~i.value){const g=i.value;q(r.value[i.value],!1),i.value=g>=c-1?c-2:g}else l.key==="Backspace"&&!s.value&&(i.value=c-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(i.value<0&&t>0)return;const g=i.value>-1?i.value-1:c-1;r.value[g]?i.value=g:(i.value=-1,S.value.setSelectionRange((d=s.value)==null?void 0:d.length,(k=s.value)==null?void 0:k.length))}if(l.key==="ArrowRight"){if(i.value<0)return;const g=i.value+1;r.value[g]?i.value=g:(i.value=-1,S.value.setSelectionRange(0,0))}}}function De(l){if(he(S.value,":autofill")||he(S.value,":-webkit-autofill")){const t=H.value.find(c=>c.title===l.target.value);t&&q(t)}}function Re(){var l;V.value&&(m.value=!0,(l=S.value)==null||l.focus())}function Te(l){V.value=!0,setTimeout(()=>{w.value=!0})}function Oe(l){w.value=!1}function Le(l){(l==null||l===""&&!e.multiple&&!T.value)&&(r.value=[])}const le=L(!1);function q(l){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const c=r.value.findIndex(d=>e.valueComparator(d.value,l.value)),u=t??!~c;if(~c){const d=u?[...r.value,l]:[...r.value];d.splice(c,1),r.value=d}else u&&(r.value=[...r.value,l]);e.clearOnSelect&&(s.value="")}else{const c=t!==!1;r.value=c?[l]:[],s.value=c&&!T.value?l.title:"",me(()=>{o.value=!1,m.value=!0})}}return U(V,(l,t)=>{var c;l!==t&&(l?(le.value=!0,s.value=e.multiple||T.value?"":String(((c=r.value.at(-1))==null?void 0:c.props.title)??""),m.value=!0,me(()=>le.value=!1)):(!e.multiple&&s.value==null?r.value=[]:W.value&&!w.value&&!r.value.some(u=>{let{value:d}=u;return d===C.value[0].value})&&q(C.value[0]),o.value=!1,(e.multiple||T.value)&&(s.value=""),i.value=-1))}),U(s,l=>{!V.value||le.value||(l&&(o.value=!0),m.value=!l)}),U(o,()=>{if(!e.hideSelected&&o.value&&r.value.length){const l=C.value.findIndex(t=>r.value.some(c=>t.value===c.value));fl&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=p.value)==null||t.scrollToIndex(l))})}}),U(()=>e.items,(l,t)=>{o.value||V.value&&!t.length&&l.length&&(o.value=!0)}),yl(()=>{const l=!!(!e.hideNoData||C.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),t=r.value.length>0,c=Ve.filterProps(e);return n(Ve,A({ref:S},c,{modelValue:s.value,"onUpdate:modelValue":[u=>s.value=u,Le],focused:V.value,"onUpdate:focused":u=>V.value=u,validationValue:r.externalValue,counterValue:Fe.value,dirty:t,onChange:De,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":o.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!T.value,"v-autocomplete--selecting-index":i.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:t?void 0:e.placeholder,"onClick:clear":Ae,"onMousedown:control":Pe,onKeydown:Ie}),{...a,default:()=>n(E,null,[n(sl,A({ref:P,modelValue:o.value,"onUpdate:modelValue":u=>o.value=u,activator:"parent",contentClass:"v-autocomplete__content",disabled:x.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Re},e.menuProps),{default:()=>[l&&n(Ge,A({ref:ee,selected:Ce.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:qe,onFocusin:Te,onFocusout:Oe,onScrollPassive:we,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var u,d,k;return[(u=a["prepend-item"])==null?void 0:u.call(a),!C.value.length&&!e.hideNoData&&(((d=a["no-data"])==null?void 0:d.call(a))??n(de,{title:D(e.noDataText)},null)),n(Xe,{ref:p,renderless:!0,items:C.value},{default:g=>{var fe;let{item:h,index:B,itemRef:F}=g;const ce=A(h.props,{ref:F,key:B,active:W.value&&B===0?!0:void 0,onClick:()=>q(h,null)});return((fe=a.item)==null?void 0:fe.call(a,{item:h,index:B,props:ce}))??n(de,A(ce,{role:"option"}),{prepend:z=>{let{isSelected:J}=z;return n(E,null,[e.multiple&&!e.hideSelected?n(je,{key:h.value,modelValue:J,ripple:!1,tabindex:"-1"},null):void 0,h.props.prependAvatar&&n(_e,{image:h.props.prependAvatar},null),h.props.prependIcon&&n(be,{icon:h.props.prependIcon},null)])},title:()=>{var z,J;return m.value?h.title:Vl(h.title,(z=$e(h))==null?void 0:z.title,((J=s.value)==null?void 0:J.length)??0)}})}}),(k=a["append-item"])==null?void 0:k.call(a)]}})]}),r.value.map((u,d)=>{function k(F){F.stopPropagation(),F.preventDefault(),q(u,!1)}const g={"onClick:close":k,onKeydown(F){F.key!=="Enter"&&F.key!==" "||(F.preventDefault(),F.stopPropagation(),k(F))},onMousedown(F){F.preventDefault(),F.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},h=K.value?!!a.chip:!!a.selection,B=h?ml(K.value?a.chip({item:u,index:d,props:g}):a.selection({item:u,index:d})):void 0;if(!(h&&!B))return n("div",{key:u.value,class:["v-autocomplete__selection",d===i.value&&["v-autocomplete__selection--selected",X.value]],style:d===i.value?v.value:{}},[K.value?a.chip?n(il,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>[B]}):n(xe,A({key:"chip",closable:e.closableChips,size:"small",text:u.title,disabled:u.props.disabled},g),null):B??n("span",{class:"v-autocomplete__selection-text"},[u.title,e.multiple&&d<r.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[ne(",")])])])})]),"append-inner":function(){var g;for(var u=arguments.length,d=new Array(u),k=0;k<u;k++)d[k]=arguments[k];return n(E,null,[(g=a["append-inner"])==null?void 0:g.call(a,...d),e.menuIcon?n(be,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Be,onClick:pl,"aria-label":D(j.value),title:D(j.value),tabindex:"-1"},null):void 0])}})}),ol({isFocused:V,isPristine:m,menu:o,search:s,filteredItems:_,select:q},S)}});function Sl(e,f,a,D,S,V){const m=ae("FSLoader"),w=ae("FSToggleSet"),P=ae("FSBaseField");return I(),O(P,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:$(()=>[e.$props.loading?(I(),O(m,{key:0,width:"100%",height:["40px","36px"]})):(I(),Ne(E,{key:1},[e.$props.toggleSet?(I(),O(w,A({key:0,variant:"slide",values:e.$props.items,multiple:e.$props.multiple,rules:e.$props.rules,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),pe({_:2},[ve(e.toggleSetSlots,(p,b)=>({name:b,fn:$(o=>[Q(e.$slots,`toggle-set-${b}`,te(ue(o)))])}))]),1040,["values","multiple","rules","modelValue","onUpdate:modelValue"])):(I(),O(hl,A({key:1,class:["fs-autocomplete-field",e.classes],variant:"outlined",menuIcon:null,style:e.style,listProps:e.listStyle,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,loading:e.$props.loading,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,returnObject:e.$props.returnObject,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,onBlur:f[1]||(f[1]=p=>e.blurred=!0),search:e.innerSearch,"onUpdate:search":f[2]||(f[2]=p=>e.innerSearch=p)},e.$attrs),pe({item:$(({props:p,item:b})=>[n(de,te(ue({...p,title:""})),{default:$(()=>[n(ie,{align:"center-left",wrap:!1},{default:$(()=>{var o;return[e.$props.multiple?(I(),O(Se,{key:0,modelValue:(o=e.$props.modelValue)==null?void 0:o.includes(b.raw[e.$props.itemValue]),onClick:p.onClick},null,8,["modelValue","onClick"])):ge("",!0),n(se,null,{default:$(()=>[ne(ye(b.raw[e.$props.itemTitle]),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),clear:$(()=>[Q(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(I(),O(re,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:f[0]||(f[0]=p=>e.$emit("update:modelValue",null))},null,8,["color"])):ge("",!0)])]),"append-inner":$(()=>[Q(e.$slots,"append-inner",{},()=>[n(re,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"no-data":$(()=>[n(ie,{padding:"17px"},{default:$(()=>[n(se,null,{default:$(()=>[ne(ye(e.$tr("ui.common.no-data","No data")),1)]),_:1})]),_:1})]),_:2},[ve(e.autocompleteSlots,(p,b)=>({name:b,fn:$(o=>[Q(e.$slots,`autocomplete-${b}`,te(ue(o)))])}))]),1040,["style","listProps","class","items","multiple","itemTitle","itemValue","readonly","loading","clearable","returnObject","rules","validateOn","modelValue","onUpdate:modelValue","search"]))],64))]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const Yl=Je(ke,[["render",Sl]]);ke.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"returnObject",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSet",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"`toggle-set-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`autocomplete-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"clear"},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};export{Yl as F};
