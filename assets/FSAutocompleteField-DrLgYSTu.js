import{d as ze,b as J,c as V,w as re,s as ue,n as Ae,N as t,G as j,m as b,H as O,y as x,z as f,A as v,C as o,F as C,B as be,O as ee,K as y,L as M,M as W,E as pe,I as H}from"./vue.esm-bundler-CWdIlc2r.js";import{F as je}from"./FSSearchField-DhTJXKam.js";import{F as Ge}from"./FSDialogMenu-B5BSmELO.js";import{_ as Se}from"./FSSlideGroup-gtoPHKCV.js";import{F as We}from"./FSToggleSet-C0KkFsPn.js";import{F as Je}from"./FSBaseField-CVTPeQEI.js";import{F as De,m as Qe,V as qe}from"./FSTextField-DiTX7r-c.js";import{F as ke,V as Xe}from"./FSCheckbox-CaqPs9O0.js";import{_ as Ee}from"./FSFadeOut-BkMq8VeO.js";import{F as U}from"./FSButton-BpyUfJIg.js";import{F as Ye}from"./FSLoader-BuPx1Vmx.js";import{_ as Be}from"./FSRadio-vBBbKX-y.js";import{F as Ze}from"./FSCard-CN9NbS7f.js";import{_ as L}from"./FSSpan-WKxYfmnu.js";import{F as ie}from"./FSCol-DyDZsJ9U.js";import{_ as F}from"./FSRow-D9oM1Ufa.js";import{u as _e}from"./useBreakpoints-DVmyWqF2.js";import{u as xe}from"./useRules-CY0rKEBQ.js";import{u as el,C as ne}from"./useColors-CrLBSafx.js";import{u as ll}from"./useSlots-zwOl0abH.js";import{_ as al}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as tl,a as ol,V as Ce,b as ul}from"./VList-Cl6AOEM5.js";import{m as nl,u as rl,a as il,b as sl}from"./VSelect-7B3TLkE6.js";import{g as dl,b as ml,a as pl}from"./color-B0htL_ZM.js";import{m as fl,u as cl}from"./filter-pNTMaczj.js";import{u as vl}from"./form-D-VMHmUh.js";import{f as gl}from"./forwardRefs-DWGaNmQL.js";import{u as Vl}from"./locale-BGMMnFfJ.js";import{u as $e}from"./proxiedModel-BN8GSVE7.js";import{m as hl}from"./transition-BvKGRC-_.js";import{V as yl}from"./VMenu-OPxqXTkz.js";import{V as Ie}from"./VIcon-Bo7R9vIQ.js";import{V as bl}from"./VDefaultsProvider-DPT0EuQR.js";import{p as $l,o as Sl,w as kl,I as Cl,y as Fl,z as wl,A as Te}from"./theme-DkyKeiX7.js";const Pe=ze({name:"FSAutocompleteField",inheritAttrs:!1,components:{FSSearchField:je,FSDialogMenu:Ge,FSSlideGroup:Se,FSBaseField:Je,FSTextField:De,FSToggleSet:We,FSCheckbox:ke,FSFadeOut:Ee,FSButton:U,FSLoader:Ye,FSRadio:Be,FSCard:Ze,FSSpan:L,FSCol:ie,FSRow:F},props:{label:{type:String,required:!1,default:null},placeholder:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String,Object],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},toggleSet:{type:Boolean,required:!1,default:!1},showSearch:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:search","add:item"],setup:(e,{emit:r})=>{const{fontStyles:n,isExtraSmall:Q,isMobileSized:k}=_e(),{validateOn:D,getMessages:A}=xe(),{getColors:E}=el(),{slots:B}=ll();delete B.label,delete B.description;const X=E(ne.Background),N=E(ne.Error),p=E(ne.Light),l=E(ne.Dark),m=J(!1),c=J(""),q=J(!0),se=V(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-background-color":X.base,"--fs-autocomplete-field-no-data-background-color":p.light,"--fs-autocomplete-field-border-color":p.dark,"--fs-autocomplete-field-color":l.base,"--fs-autocomplete-field-active-border-color":l.dark,"--fs-autocomplete-field-error-color":N.base,"--fs-autocomplete-field-error-border-color":N.base,"--fs-base-field-input-height":k.value?"34px":"38px",...n.value}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":p.base,"--fs-autocomplete-field-color":p.dark,"--fs-autocomplete-field-active-border-color":p.base,"--fs-base-field-input-height":k.value?"34px":"38px",...n.value}),fe=V(()=>Object.keys(B).filter(u=>u.startsWith("autocomplete-")).reduce((u,R)=>(u[R.substring(13)]=B[R],u),{})),ce=V(()=>Object.keys(B).filter(u=>u.startsWith("toggle-set-")).reduce((u,R)=>(u[R.substring(11)]=B[R],u),{})),ve=V(()=>({style:se.value})),$=V(()=>e.messages??A(e.modelValue,e.rules)),d=V(()=>e.items.filter(u=>u[e.itemTitle].toLowerCase().includes(c.value.toLowerCase()))),le=V(()=>e.multiple?null:Array.isArray(e.modelValue)&&e.modelValue.length>0?e.items.find(u=>u[e.itemValue]===e.modelValue[0])??null:e.modelValue?e.items.find(u=>u[e.itemValue]===e.modelValue)??null:null),K=V(()=>{if(Array.isArray(e.modelValue)&&e.modelValue.length>0)return e.items.filter(u=>e.modelValue.includes(u[e.itemValue]));if(e.modelValue){const u=e.items.find(R=>R[e.itemValue]===e.modelValue);if(u)return[u]}return[]}),ae=V(()=>e.showSearch&&c.value.trim().length>0),ge=V(()=>`calc(100vh - 40px - ${16+(k.value?36:40)+8}px)`),P=V(()=>e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0?e.placeholder:le.value?le.value[e.itemTitle]:null),Y=()=>{e.editable&&(m.value=!0)},Z=u=>{r("update:modelValue",u),m.value=!1},Ve=u=>{Array.isArray(e.modelValue)?e.modelValue.includes(u)?r("update:modelValue",e.modelValue.filter(R=>R!==u)):r("update:modelValue",[...e.modelValue,u]):e.modelValue!=null?e.modelValue===u?r("update:modelValue",[]):r("update:modelValue",[e.modelValue,u]):r("update:modelValue",[u])},_=u=>{r("update:modelValue",u),u&&!Array.isArray(u)&&(q.value=!0)},te=()=>{r("update:modelValue",null),c.value=""},oe=()=>{c.value="",q.value=!1},he=()=>{q.value=!0};return re(c,()=>{r("update:search",c.value)}),{autocompleteSlots:fe,toggleSetSlots:ce,selectedItems:K,isExtraSmall:Q,allowAddItem:ae,selectedItem:le,mobileValue:P,searchItems:d,validateOn:D,ColorEnum:ne,listStyle:ve,maxHeight:ge,showExtra:q,messages:$,dialog:m,search:c,slots:B,style:se,openMobileOverlay:Y,onCheckboxChange:Ve,onSingleChange:_,onRadioChange:Z,onClear:te,onClick:oe,onBlur:he}}});function Al(e,r,n){if(r==null)return e;if(Array.isArray(r))throw new Error("Multiple matches is not implemented");return typeof r=="number"&&~r?t(j,null,[t("span",{class:"v-autocomplete__unmask"},[e.substr(0,r)]),t("span",{class:"v-autocomplete__mask"},[e.substr(r,n)]),t("span",{class:"v-autocomplete__unmask"},[e.substr(r+n)])]):e}const ql=$l({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...fl({filterKeys:["title"]}),...nl(),...Sl(Qe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...hl({transition:!1})},"VAutocomplete"),Il=dl()({name:"VAutocomplete",props:ql(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,r){let{slots:n}=r;const{t:Q}=Vl(),k=J(),D=ue(!1),A=ue(!0),E=ue(!1),B=J(),X=J(),N=$e(e,"menu"),p=V({get:()=>N.value,set:a=>{var i;N.value&&!a&&((i=B.value)!=null&&i.ΨopenChildren)||(N.value=a)}}),l=ue(-1),m=V(()=>{var a;return(a=k.value)==null?void 0:a.color}),c=V(()=>p.value?e.closeText:e.openText),{items:q,transformIn:se,transformOut:fe}=tl(e),{textColorClasses:ce,textColorStyles:ve}=ml(m),$=$e(e,"search",""),d=$e(e,"modelValue",[],a=>se(a===null?[null]:kl(a)),a=>{const i=fe(a);return e.multiple?i:i[0]??null}),le=V(()=>typeof e.counterValue=="function"?e.counterValue(d.value):typeof e.counterValue=="number"?e.counterValue:d.value.length),K=vl(),{filteredItems:ae,getMatches:ge}=cl(e,q,()=>A.value?"":$.value),P=V(()=>e.hideSelected?ae.value.filter(a=>!d.value.some(i=>i.value===a.value)):ae.value),Y=V(()=>!!(e.chips||n.chip)),Z=V(()=>Y.value||!!n.selection),Ve=V(()=>d.value.map(a=>a.props.value)),_=V(()=>{var i;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&$.value===((i=P.value[0])==null?void 0:i.title))&&P.value.length>0&&!A.value&&!E.value}),te=V(()=>e.hideNoData&&!P.value.length||e.readonly||(K==null?void 0:K.isReadonly.value)),oe=J(),{onListScroll:he,onListKeydown:u}=rl(oe,k);function R(a){e.openOnClear&&(p.value=!0),$.value=""}function Re(){te.value||(p.value=!0)}function Me(a){te.value||(D.value&&(a.preventDefault(),a.stopPropagation()),p.value=!p.value)}function Oe(a){var s,g,I;if(e.readonly||K!=null&&K.isReadonly.value)return;const i=k.value.selectionStart,h=d.value.length;if((l.value>-1||["Enter","ArrowDown","ArrowUp"].includes(a.key))&&a.preventDefault(),["Enter","ArrowDown"].includes(a.key)&&(p.value=!0),["Escape"].includes(a.key)&&(p.value=!1),_.value&&["Enter","Tab"].includes(a.key)&&z(P.value[0]),a.key==="ArrowDown"&&_.value&&((s=oe.value)==null||s.focus("next")),["Backspace","Delete"].includes(a.key)){if(!e.multiple&&Z.value&&d.value.length>0)return z(d.value[0],!1);if(l.value<0){a.key==="Backspace"&&!$.value&&(l.value=h-1);return}const S=l.value;z(d.value[l.value],!1),l.value=S>=h-1?h-2:S}if(e.multiple){if(a.key==="ArrowLeft"){if(l.value<0&&i>0)return;const S=l.value>-1?l.value-1:h-1;d.value[S]?l.value=S:(l.value=-1,k.value.setSelectionRange((g=$.value)==null?void 0:g.length,(I=$.value)==null?void 0:I.length))}if(a.key==="ArrowRight"){if(l.value<0)return;const S=l.value+1;d.value[S]?l.value=S:(l.value=-1,k.value.setSelectionRange(0,0))}}}function Le(a){if(Te(k.value,":autofill")||Te(k.value,":-webkit-autofill")){const i=q.value.find(h=>h.title===a.target.value);i&&z(i)}}function He(){var a;D.value&&(A.value=!0,(a=k.value)==null||a.focus())}function Ue(a){D.value=!0,setTimeout(()=>{E.value=!0})}function Ne(a){E.value=!1}function Ke(a){(a==null||a===""&&!e.multiple)&&(d.value=[])}const ye=ue(!1);function z(a){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!a||a.props.disabled))if(e.multiple){const h=d.value.findIndex(g=>e.valueComparator(g.value,a.value)),s=i??!~h;if(~h){const g=s?[...d.value,a]:[...d.value];g.splice(h,1),d.value=g}else s&&(d.value=[...d.value,a]);e.clearOnSelect&&($.value="")}else{const h=i!==!1;d.value=h?[a]:[],$.value=h&&!Z.value?a.title:"",Ae(()=>{p.value=!1,A.value=!0})}}return re(D,(a,i)=>{var h;a!==i&&(a?(ye.value=!0,$.value=e.multiple||Z.value?"":String(((h=d.value.at(-1))==null?void 0:h.props.title)??""),A.value=!0,Ae(()=>ye.value=!1)):(!e.multiple&&$.value==null?d.value=[]:_.value&&!E.value&&!d.value.some(s=>{let{value:g}=s;return g===P.value[0].value})&&z(P.value[0]),p.value=!1,$.value="",l.value=-1))}),re($,a=>{!D.value||ye.value||(a&&(p.value=!0),A.value=!a)}),re(p,()=>{if(!e.hideSelected&&p.value&&d.value.length){const a=P.value.findIndex(i=>d.value.some(h=>i.value===h.value));Cl&&window.requestAnimationFrame(()=>{var i;a>=0&&((i=X.value)==null||i.scrollToIndex(a))})}}),re(()=>e.items,(a,i)=>{p.value||D.value&&!i.length&&a.length&&(p.value=!0)}),pl(()=>{const a=!!(!e.hideNoData||P.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),i=d.value.length>0,h=qe.filterProps(e);return t(qe,b({ref:k},h,{modelValue:$.value,"onUpdate:modelValue":[s=>$.value=s,Ke],focused:D.value,"onUpdate:focused":s=>D.value=s,validationValue:d.externalValue,counterValue:le.value,dirty:i,onChange:Le,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":p.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!Z.value,"v-autocomplete--selecting-index":l.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:i?void 0:e.placeholder,"onClick:clear":R,"onMousedown:control":Re,onKeydown:Oe}),{...n,default:()=>t(j,null,[t(yl,b({ref:B,modelValue:p.value,"onUpdate:modelValue":s=>p.value=s,activator:"parent",contentClass:"v-autocomplete__content",disabled:te.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:He},e.menuProps),{default:()=>[a&&t(ol,b({ref:oe,selected:Ve.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault(),onKeydown:u,onFocusin:Ue,onFocusout:Ne,onScrollPassive:he,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var s,g,I;return[(s=n["prepend-item"])==null?void 0:s.call(n),!P.value.length&&!e.hideNoData&&(((g=n["no-data"])==null?void 0:g.call(n))??t(Ce,{title:Q(e.noDataText)},null)),t(il,{ref:X,renderless:!0,items:P.value},{default:S=>{var we;let{item:w,index:G,itemRef:T}=S;const Fe=b(w.props,{ref:T,key:G,active:_.value&&G===0?!0:void 0,onClick:()=>z(w,null)});return((we=n.item)==null?void 0:we.call(n,{item:w,index:G,props:Fe}))??t(Ce,b(Fe,{role:"option"}),{prepend:de=>{let{isSelected:me}=de;return t(j,null,[e.multiple&&!e.hideSelected?t(Xe,{key:w.value,modelValue:me,ripple:!1,tabindex:"-1"},null):void 0,w.props.prependAvatar&&t(ul,{image:w.props.prependAvatar},null),w.props.prependIcon&&t(Ie,{icon:w.props.prependIcon},null)])},title:()=>{var de,me;return A.value?w.title:Al(w.title,(de=ge(w))==null?void 0:de.title,((me=$.value)==null?void 0:me.length)??0)}})}}),(I=n["append-item"])==null?void 0:I.call(n)]}})]}),d.value.map((s,g)=>{function I(T){T.stopPropagation(),T.preventDefault(),z(s,!1)}const S={"onClick:close":I,onKeydown(T){T.key!=="Enter"&&T.key!==" "||(T.preventDefault(),T.stopPropagation(),I(T))},onMousedown(T){T.preventDefault(),T.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},w=Y.value?!!n.chip:!!n.selection,G=w?Fl(Y.value?n.chip({item:s,index:g,props:S}):n.selection({item:s,index:g})):void 0;if(!(w&&!G))return t("div",{key:s.value,class:["v-autocomplete__selection",g===l.value&&["v-autocomplete__selection--selected",ce.value]],style:g===l.value?ve.value:{}},[Y.value?n.chip?t(bl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:s.title}}},{default:()=>[G]}):t(sl,b({key:"chip",closable:e.closableChips,size:"small",text:s.title,disabled:s.props.disabled},S),null):G??t("span",{class:"v-autocomplete__selection-text"},[s.title,e.multiple&&g<d.value.length-1&&t("span",{class:"v-autocomplete__selection-comma"},[O(",")])])])})]),"append-inner":function(){var S;for(var s=arguments.length,g=new Array(s),I=0;I<s;I++)g[I]=arguments[I];return t(j,null,[(S=n["append-inner"])==null?void 0:S.call(n,...g),e.menuIcon?t(Ie,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Me,onClick:wl,"aria-label":Q(c.value),title:Q(c.value)},null):void 0])}})}),gl({isFocused:D,isPristine:A,menu:p,search:$,filteredItems:ae,select:z},k)}});function Tl(e,r,n,Q,k,D){const A=x("FSLoader"),E=x("FSCard"),B=x("FSSearchField"),X=x("FSDialogMenu"),N=x("FSToggleSet"),p=x("FSBaseField");return e.$props.loading?(f(),v(ie,{key:0},{default:o(()=>[e.$props.hideHeader?C("",!0):(f(),v(A,{key:0,variant:"text-overline"})),e.$props.loading?(f(),v(A,{key:1,width:"100%",height:["40px","36px"]})):C("",!0)]),_:1})):e.isExtraSmall?(f(),v(ie,{key:1},{default:o(()=>[t(De,b({validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,modelValue:e.mobileValue,onClick:e.openMobileOverlay},e.$attrs),be({"prepend-inner":o(()=>[e.selectedItem&&e.showExtra?y(e.$slots,"item-prepend",M(b({key:0},{item:e.selectedItem}))):C("",!0)]),clear:o(()=>[t(F,{wrap:!1},{default:o(()=>[e.selectedItem&&e.showExtra?y(e.$slots,"item-append",M(b({key:0},{item:e.selectedItem}))):C("",!0),y(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(f(),v(U,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:e.onClear},null,8,["color","onClick"])):C("",!0)])]),_:3})]),"append-inner":o(()=>[t(U,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])]),_:2},[ee(e.$slots,(l,m)=>({name:m,fn:o(c=>[y(e.$slots,m,M(W(c)))])}))]),1040,["validationValue","description","hideHeader","clearable","editable","required","label","rules","messages","modelValue","onClick"]),e.$props.multiple&&Array.isArray(e.$props.modelValue)?(f(),v(Se,{key:0},{default:o(()=>[(f(!0),pe(j,null,ee(e.$props.items.filter(l=>e.$props.modelValue.includes(l[e.$props.itemValue])),(l,m)=>(f(),v(E,{variant:"standard",height:["40px","36px"],color:e.ColorEnum.Light,border:!1,key:m},{default:o(()=>[t(F,{align:"center-left",padding:"0 8px",wrap:!1},{default:o(()=>[y(e.$slots,"item-prepend",b({ref_for:!0},{item:l})),t(L,null,{default:o(()=>[O(H(l[e.$props.itemTitle]),1)]),_:2},1024),y(e.$slots,"item-append",b({ref_for:!0},{item:l})),t(U,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:()=>e.onCheckboxChange(l[e.$props.itemValue])},null,8,["color","onClick"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:3})):C("",!0),t(X,{modelValue:e.dialog,"onUpdate:modelValue":r[2]||(r[2]=l=>e.dialog=l)},{body:o(()=>[t(B,{clearable:e.$props.clearable,hideHeader:!0,modelValue:e.search,"onUpdate:modelValue":r[0]||(r[0]=l=>e.search=l)},null,8,["clearable","modelValue"]),t(Ee,{maxHeight:e.maxHeight},{default:o(()=>[t(ie,{gap:"12px"},{default:o(()=>[(f(!0),pe(j,null,ee(e.searchItems,(l,m)=>(f(),v(F,{key:m},{default:o(()=>{var c;return[e.$props.multiple?(f(),v(ke,{key:0,label:l[e.$props.itemTitle],editable:e.$props.editable,modelValue:(c=e.$props.modelValue)==null?void 0:c.includes(l[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(l[e.$props.itemValue])},{label:o(({font:q})=>[t(F,{align:"center-left",wrap:!1},{default:o(()=>[y(e.$slots,"item-prepend",b({ref_for:!0},{item:l})),t(L,{font:q},{default:o(()=>[O(H(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1024)]),_:2},1032,["label","editable","modelValue","onUpdate:modelValue"])):(f(),v(Be,{key:1,selected:e.$props.modelValue===l[e.$props.itemValue],label:l[e.$props.itemTitle],editable:e.$props.editable,item:l,modelValue:l[e.$props.itemValue],"onUpdate:modelValue":()=>e.onRadioChange(l[e.$props.itemValue])},{label:o(({font:q})=>[t(F,{align:"center-left",wrap:!1},{default:o(()=>[y(e.$slots,"item-prepend",b({ref_for:!0},{item:l})),t(L,{font:q},{default:o(()=>[O(H(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1024)]),_:2},1032,["selected","label","editable","item","modelValue","onUpdate:modelValue"])),t(F,{align:"center-right"},{default:o(()=>[y(e.$slots,"item-append",b({ref_for:!0},{item:l}))]),_:2},1024)]}),_:2},1024))),128))]),_:3})]),_:3},8,["maxHeight"]),e.allowAddItem?(f(),v(F,{key:0,padding:"4px 3px"},{default:o(()=>[t(U,{variant:"icon",label:e.$tr("ui.autocomplete-field.add-item","Add new item"),color:e.ColorEnum.Primary,onClick:r[1]||(r[1]=l=>e.$emit("add:item",e.search))},null,8,["label","color"])]),_:1})):C("",!0),!e.allowAddItem&&e.searchItems.length===0?(f(),v(F,{key:1,padding:"4px 3px"},{default:o(()=>[t(L,null,{default:o(()=>[O(H(e.$tr("ui.autocomplete-field.no-data","No data")),1)]),_:1})]),_:1})):C("",!0)]),_:3},8,["modelValue"])]),_:3})):(f(),v(p,{key:2,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:o(()=>[e.$props.toggleSet?(f(),v(N,b({key:0,editable:e.$props.editable,multiple:e.$props.multiple,required:e.$props.required,values:e.$props.items,rules:e.$props.rules,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[3]||(r[3]=l=>e.$emit("update:modelValue",l))},e.$attrs),be({_:2},[ee(e.toggleSetSlots,(l,m)=>({name:m,fn:o(c=>[y(e.$slots,`toggle-set-${m}`,M(W(c)))])}))]),1040,["editable","multiple","required","values","rules","modelValue"])):(f(),v(ie,{key:1},{default:o(()=>[t(Il,b({class:"fs-autocomplete-field",variant:"outlined",clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,multiple:e.$props.multiple,validateOn:e.validateOn,autoSelectFirst:!0,persistentClear:!0,listProps:e.listStyle,returnObject:!1,items:e.$props.items,rules:e.$props.rules,hideDetails:!0,menuIcon:null,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onSingleChange,onClick:e.onClick,onBlur:e.onBlur,search:e.search,"onUpdate:search":r[5]||(r[5]=l=>e.search=l)},e.$attrs),be({item:o(({props:l,item:m})=>[t(Ce,M(W({...l,title:""})),{default:o(()=>[t(F,{align:"center-left",wrap:!1},{default:o(()=>{var c;return[e.$props.multiple?(f(),v(ke,{key:0,modelValue:(c=e.$props.modelValue)==null?void 0:c.includes(m.raw[e.$props.itemValue]),onClick:l.onClick},{label:o(({font:q})=>[y(e.$slots,"item-prepend",M(W({item:m.raw}))),t(L,{font:q},{default:o(()=>[O(H(m.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["modelValue","onClick"])):(f(),pe(j,{key:1},[y(e.$slots,"item-prepend",M(W({item:m.raw}))),t(L,{font:e.$props.modelValue===m.raw[e.$props.itemTitle]?"text-button":"text-body"},{default:o(()=>[O(H(m.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])],64)),t(F,{align:"center-right"},{default:o(()=>[y(e.$slots,"item-append",M(W({item:m.raw})))]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"prepend-inner":o(()=>[e.selectedItem&&e.showExtra?y(e.$slots,"item-prepend",M(b({key:0},{item:e.selectedItem}))):C("",!0)]),clear:o(()=>[t(F,{wrap:!1},{default:o(()=>[e.selectedItem&&e.showExtra?y(e.$slots,"item-append",M(b({key:0},{item:e.selectedItem}))):C("",!0),y(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(f(),v(U,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:e.onClear},null,8,["color","onClick"])):C("",!0)])]),_:3})]),"append-inner":o(()=>[y(e.$slots,"append-inner",{},()=>[t(U,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"append-item":o(()=>[e.allowAddItem?(f(),v(F,{key:0,padding:"15px"},{default:o(()=>[t(U,{variant:"icon",label:e.$tr("ui.autocomplete-field.add-item","Add new item"),color:e.ColorEnum.Primary,onClick:r[4]||(r[4]=l=>e.$emit("add:item",e.search))},null,8,["label","color"])]),_:1})):C("",!0)]),"no-data":o(()=>[e.allowAddItem?C("",!0):(f(),v(F,{key:0,padding:"15px"},{default:o(()=>[t(L,null,{default:o(()=>[O(H(e.$tr("ui.common.no-data","No data")),1)]),_:1})]),_:1}))]),_:2},[ee(e.autocompleteSlots,(l,m)=>({name:m,fn:o(c=>[y(e.$slots,`autocomplete-${m}`,M(W(c)))])})),e.$props.multiple?{name:"selection",fn:o(({index:l})=>[l===e.$props.modelValue.length-1&&e.showExtra?(f(),v(L,{key:0},{default:o(()=>[O(H(e.$props.placeholder),1)]),_:1})):C("",!0)]),key:"0"}:void 0]),1040,["clearable","itemTitle","itemValue","readonly","multiple","validateOn","listProps","items","rules","style","modelValue","onUpdate:modelValue","onClick","onBlur","search"]),e.$props.multiple&&Array.isArray(e.$props.modelValue)?(f(),v(Se,{key:0},{default:o(()=>[(f(!0),pe(j,null,ee(e.$props.items.filter(l=>e.$props.modelValue.includes(l[e.$props.itemValue])),(l,m)=>(f(),v(E,{variant:"standard",height:["40px","36px"],color:e.ColorEnum.Light,border:!1,key:m},{default:o(()=>[t(F,{align:"center-left",padding:"0 8px"},{default:o(()=>[y(e.$slots,"item-prepend",b({ref_for:!0},{item:l})),t(L,null,{default:o(()=>[O(H(l[e.$props.itemTitle]),1)]),_:2},1024),y(e.$slots,"item-append",b({ref_for:!0},{item:l})),t(U,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:()=>e.onCheckboxChange(l[e.$props.itemValue])},null,8,["color","onClick"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:3})):C("",!0)]),_:3}))]),_:3},8,["description","hideHeader","required","editable","label","messages"]))}const ma=al(Pe,[["render",Tl]]);Pe.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string | null | any"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSet",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"showSearch",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"add:item"},{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"item-prepend",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"item-append",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"clear"},{name:"`toggle-set-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`autocomplete-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};export{ma as F};
