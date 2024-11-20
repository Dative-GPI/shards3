import{d as ze,b as J,c as V,w as re,s as ne,n as Ae,N as t,G as j,m as b,H as O,y as x,z as f,A as v,C as o,F as C,B as be,O as ee,K as y,L as M,M as W,E as pe,I as H}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as je}from"./FSSearchField-D9ku8NjQ.js";import{F as Ge,u as We,a as Je,V as Se,b as Qe}from"./VList-BsRjN0ZI.js";import{_ as ke}from"./FSSlideGroup-8udoapu6.js";import{F as Xe}from"./FSToggleSet-CjZBl77R.js";import{F as Ye}from"./FSBaseField-BXJBXTur.js";import{F as De,m as Ze,V as qe}from"./FSTextField-ECMlyBTY.js";import{F as Ce,V as _e}from"./FSCheckbox-3iIuKfLX.js";import{_ as Ee}from"./FSFadeOut-B5r2PNGg.js";import{F as U}from"./FSButton-DZMcpMR1.js";import{F as xe}from"./FSLoader-PksHGtEK.js";import{_ as Be}from"./FSRadio-CBI2uo6q.js";import{F as el}from"./FSCard-Bfo4Z0Zf.js";import{_ as L}from"./FSSpan-Bh1X02mE.js";import{F as se}from"./FSCol-D8gLxM2E.js";import{_ as F}from"./FSRow-CSQtiyAx.js";import{u as ll}from"./useBreakpoints-BMg9gIvD.js";import{u as al}from"./useRules-BfiZMl38.js";import{u as tl,C as ue}from"./useColors-DnoeDx-P.js";import{u as ol}from"./useSlots-C9mZt9CQ.js";import{_ as nl}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as ul,u as rl,a as sl,b as il}from"./VSelect-DLEPHyKg.js";import{g as dl,b as ml,a as pl}from"./color-DdAXPAA0.js";import{m as fl,u as cl}from"./filter-MqAtiUjL.js";import{u as vl}from"./form-vji0TmoR.js";import{f as gl}from"./forwardRefs-DWGaNmQL.js";import{u as Vl}from"./locale-CA7yUTVs.js";import{u as $e}from"./proxiedModel-BYnu2EOK.js";import{m as hl}from"./transition-BtBp4lzQ.js";import{V as yl}from"./VMenu-CkU-g4Hp.js";import{V as Ie}from"./VIcon-zho7mIKV.js";import{V as bl}from"./VDefaultsProvider-B6zOjuu3.js";import{p as $l,o as Sl,w as kl,I as Cl,y as Fl,z as wl,A as Te}from"./theme-D55tBrU4.js";const Pe=ze({name:"FSAutocompleteField",inheritAttrs:!1,components:{FSSearchField:je,FSDialogMenu:Ge,FSSlideGroup:ke,FSBaseField:Ye,FSTextField:De,FSToggleSet:Xe,FSCheckbox:Ce,FSFadeOut:Ee,FSButton:U,FSLoader:xe,FSRadio:Be,FSCard:el,FSSpan:L,FSCol:se,FSRow:F},props:{label:{type:String,required:!1,default:null},placeholder:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String,Object],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},toggleSet:{type:Boolean,required:!1,default:!1},showSearch:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:search","add:item"],setup:(e,{emit:r})=>{const{fontStyles:u,isExtraSmall:Q,isMobileSized:k}=ll(),{validateOn:D,getMessages:A}=al(),{getColors:E}=tl(),{slots:B}=ol();delete B.label,delete B.description;const X=E(ue.Background),N=E(ue.Error),p=E(ue.Light),l=E(ue.Dark),m=J(!1),c=J(""),q=J(!0),ie=V(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-background-color":X.base,"--fs-autocomplete-field-no-data-background-color":p.light,"--fs-autocomplete-field-border-color":p.dark,"--fs-autocomplete-field-color":l.base,"--fs-autocomplete-field-active-border-color":l.dark,"--fs-autocomplete-field-error-color":N.base,"--fs-autocomplete-field-error-border-color":N.base,"--fs-base-field-input-height":k.value?"34px":"38px",...u.value}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":p.base,"--fs-autocomplete-field-color":p.dark,"--fs-autocomplete-field-active-border-color":p.base,"--fs-base-field-input-height":k.value?"34px":"38px",...u.value}),fe=V(()=>Object.keys(B).filter(n=>n.startsWith("autocomplete-")).reduce((n,R)=>(n[R.substring(13)]=B[R],n),{})),ce=V(()=>Object.keys(B).filter(n=>n.startsWith("toggle-set-")).reduce((n,R)=>(n[R.substring(11)]=B[R],n),{})),ve=V(()=>({style:ie.value})),$=V(()=>e.messages??A(e.modelValue,e.rules)),d=V(()=>e.items.filter(n=>n[e.itemTitle].toLowerCase().includes(c.value.toLowerCase()))),le=V(()=>e.multiple?null:Array.isArray(e.modelValue)&&e.modelValue.length>0?e.items.find(n=>n[e.itemValue]===e.modelValue[0])??null:e.modelValue?e.items.find(n=>n[e.itemValue]===e.modelValue)??null:null),K=V(()=>{if(Array.isArray(e.modelValue)&&e.modelValue.length>0)return e.items.filter(n=>e.modelValue.includes(n[e.itemValue]));if(e.modelValue){const n=e.items.find(R=>R[e.itemValue]===e.modelValue);if(n)return[n]}return[]}),ae=V(()=>e.showSearch&&c.value.trim().length>0),ge=V(()=>`calc(100vh - 40px - ${16+(k.value?36:40)+8}px)`),P=V(()=>e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0?e.placeholder:le.value?le.value[e.itemTitle]:null),Y=()=>{e.editable&&(m.value=!0)},Z=n=>{r("update:modelValue",n),m.value=!1},Ve=n=>{Array.isArray(e.modelValue)?e.modelValue.includes(n)?r("update:modelValue",e.modelValue.filter(R=>R!==n)):r("update:modelValue",[...e.modelValue,n]):e.modelValue!=null?e.modelValue===n?r("update:modelValue",[]):r("update:modelValue",[e.modelValue,n]):r("update:modelValue",[n])},_=n=>{r("update:modelValue",n),n&&!Array.isArray(n)&&(q.value=!0)},te=()=>{r("update:modelValue",null),c.value=""},oe=()=>{c.value="",q.value=!1},he=()=>{q.value=!0};return re(c,()=>{r("update:search",c.value)}),{autocompleteSlots:fe,toggleSetSlots:ce,selectedItems:K,isExtraSmall:Q,allowAddItem:ae,selectedItem:le,mobileValue:P,searchItems:d,validateOn:D,ColorEnum:ue,listStyle:ve,maxHeight:ge,showExtra:q,messages:$,dialog:m,search:c,slots:B,style:ie,openMobileOverlay:Y,onCheckboxChange:Ve,onSingleChange:_,onRadioChange:Z,onClear:te,onClick:oe,onBlur:he}}});function Al(e,r,u){if(r==null)return e;if(Array.isArray(r))throw new Error("Multiple matches is not implemented");return typeof r=="number"&&~r?t(j,null,[t("span",{class:"v-autocomplete__unmask"},[e.substr(0,r)]),t("span",{class:"v-autocomplete__mask"},[e.substr(r,u)]),t("span",{class:"v-autocomplete__unmask"},[e.substr(r+u)])]):e}const ql=$l({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...fl({filterKeys:["title"]}),...ul(),...Sl(Ze({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...hl({transition:!1})},"VAutocomplete"),Il=dl()({name:"VAutocomplete",props:ql(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,r){let{slots:u}=r;const{t:Q}=Vl(),k=J(),D=ne(!1),A=ne(!0),E=ne(!1),B=J(),X=J(),N=$e(e,"menu"),p=V({get:()=>N.value,set:a=>{var s;N.value&&!a&&((s=B.value)!=null&&s.ΨopenChildren)||(N.value=a)}}),l=ne(-1),m=V(()=>{var a;return(a=k.value)==null?void 0:a.color}),c=V(()=>p.value?e.closeText:e.openText),{items:q,transformIn:ie,transformOut:fe}=We(e),{textColorClasses:ce,textColorStyles:ve}=ml(m),$=$e(e,"search",""),d=$e(e,"modelValue",[],a=>ie(a===null?[null]:kl(a)),a=>{const s=fe(a);return e.multiple?s:s[0]??null}),le=V(()=>typeof e.counterValue=="function"?e.counterValue(d.value):typeof e.counterValue=="number"?e.counterValue:d.value.length),K=vl(),{filteredItems:ae,getMatches:ge}=cl(e,q,()=>A.value?"":$.value),P=V(()=>e.hideSelected?ae.value.filter(a=>!d.value.some(s=>s.value===a.value)):ae.value),Y=V(()=>!!(e.chips||u.chip)),Z=V(()=>Y.value||!!u.selection),Ve=V(()=>d.value.map(a=>a.props.value)),_=V(()=>{var s;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&$.value===((s=P.value[0])==null?void 0:s.title))&&P.value.length>0&&!A.value&&!E.value}),te=V(()=>e.hideNoData&&!P.value.length||e.readonly||(K==null?void 0:K.isReadonly.value)),oe=J(),{onListScroll:he,onListKeydown:n}=rl(oe,k);function R(a){e.openOnClear&&(p.value=!0),$.value=""}function Re(){te.value||(p.value=!0)}function Me(a){te.value||(D.value&&(a.preventDefault(),a.stopPropagation()),p.value=!p.value)}function Oe(a){var i,g,I;if(e.readonly||K!=null&&K.isReadonly.value)return;const s=k.value.selectionStart,h=d.value.length;if((l.value>-1||["Enter","ArrowDown","ArrowUp"].includes(a.key))&&a.preventDefault(),["Enter","ArrowDown"].includes(a.key)&&(p.value=!0),["Escape"].includes(a.key)&&(p.value=!1),_.value&&["Enter","Tab"].includes(a.key)&&z(P.value[0]),a.key==="ArrowDown"&&_.value&&((i=oe.value)==null||i.focus("next")),["Backspace","Delete"].includes(a.key)){if(!e.multiple&&Z.value&&d.value.length>0)return z(d.value[0],!1);if(l.value<0){a.key==="Backspace"&&!$.value&&(l.value=h-1);return}const S=l.value;z(d.value[l.value],!1),l.value=S>=h-1?h-2:S}if(e.multiple){if(a.key==="ArrowLeft"){if(l.value<0&&s>0)return;const S=l.value>-1?l.value-1:h-1;d.value[S]?l.value=S:(l.value=-1,k.value.setSelectionRange((g=$.value)==null?void 0:g.length,(I=$.value)==null?void 0:I.length))}if(a.key==="ArrowRight"){if(l.value<0)return;const S=l.value+1;d.value[S]?l.value=S:(l.value=-1,k.value.setSelectionRange(0,0))}}}function Le(a){if(Te(k.value,":autofill")||Te(k.value,":-webkit-autofill")){const s=q.value.find(h=>h.title===a.target.value);s&&z(s)}}function He(){var a;D.value&&(A.value=!0,(a=k.value)==null||a.focus())}function Ue(a){D.value=!0,setTimeout(()=>{E.value=!0})}function Ne(a){E.value=!1}function Ke(a){(a==null||a===""&&!e.multiple)&&(d.value=[])}const ye=ne(!1);function z(a){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!a||a.props.disabled))if(e.multiple){const h=d.value.findIndex(g=>e.valueComparator(g.value,a.value)),i=s??!~h;if(~h){const g=i?[...d.value,a]:[...d.value];g.splice(h,1),d.value=g}else i&&(d.value=[...d.value,a]);e.clearOnSelect&&($.value="")}else{const h=s!==!1;d.value=h?[a]:[],$.value=h&&!Z.value?a.title:"",Ae(()=>{p.value=!1,A.value=!0})}}return re(D,(a,s)=>{var h;a!==s&&(a?(ye.value=!0,$.value=e.multiple||Z.value?"":String(((h=d.value.at(-1))==null?void 0:h.props.title)??""),A.value=!0,Ae(()=>ye.value=!1)):(!e.multiple&&$.value==null?d.value=[]:_.value&&!E.value&&!d.value.some(i=>{let{value:g}=i;return g===P.value[0].value})&&z(P.value[0]),p.value=!1,$.value="",l.value=-1))}),re($,a=>{!D.value||ye.value||(a&&(p.value=!0),A.value=!a)}),re(p,()=>{if(!e.hideSelected&&p.value&&d.value.length){const a=P.value.findIndex(s=>d.value.some(h=>s.value===h.value));Cl&&window.requestAnimationFrame(()=>{var s;a>=0&&((s=X.value)==null||s.scrollToIndex(a))})}}),re(()=>e.items,(a,s)=>{p.value||D.value&&!s.length&&a.length&&(p.value=!0)}),pl(()=>{const a=!!(!e.hideNoData||P.value.length||u["prepend-item"]||u["append-item"]||u["no-data"]),s=d.value.length>0,h=qe.filterProps(e);return t(qe,b({ref:k},h,{modelValue:$.value,"onUpdate:modelValue":[i=>$.value=i,Ke],focused:D.value,"onUpdate:focused":i=>D.value=i,validationValue:d.externalValue,counterValue:le.value,dirty:s,onChange:Le,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":p.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!Z.value,"v-autocomplete--selecting-index":l.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:s?void 0:e.placeholder,"onClick:clear":R,"onMousedown:control":Re,onKeydown:Oe}),{...u,default:()=>t(j,null,[t(yl,b({ref:B,modelValue:p.value,"onUpdate:modelValue":i=>p.value=i,activator:"parent",contentClass:"v-autocomplete__content",disabled:te.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:He},e.menuProps),{default:()=>[a&&t(Je,b({ref:oe,selected:Ve.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:n,onFocusin:Ue,onFocusout:Ne,onScrollPassive:he,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var i,g,I;return[(i=u["prepend-item"])==null?void 0:i.call(u),!P.value.length&&!e.hideNoData&&(((g=u["no-data"])==null?void 0:g.call(u))??t(Se,{title:Q(e.noDataText)},null)),t(sl,{ref:X,renderless:!0,items:P.value},{default:S=>{var we;let{item:w,index:G,itemRef:T}=S;const Fe=b(w.props,{ref:T,key:G,active:_.value&&G===0?!0:void 0,onClick:()=>z(w,null)});return((we=u.item)==null?void 0:we.call(u,{item:w,index:G,props:Fe}))??t(Se,b(Fe,{role:"option"}),{prepend:de=>{let{isSelected:me}=de;return t(j,null,[e.multiple&&!e.hideSelected?t(_e,{key:w.value,modelValue:me,ripple:!1,tabindex:"-1"},null):void 0,w.props.prependAvatar&&t(Qe,{image:w.props.prependAvatar},null),w.props.prependIcon&&t(Ie,{icon:w.props.prependIcon},null)])},title:()=>{var de,me;return A.value?w.title:Al(w.title,(de=ge(w))==null?void 0:de.title,((me=$.value)==null?void 0:me.length)??0)}})}}),(I=u["append-item"])==null?void 0:I.call(u)]}})]}),d.value.map((i,g)=>{function I(T){T.stopPropagation(),T.preventDefault(),z(i,!1)}const S={"onClick:close":I,onKeydown(T){T.key!=="Enter"&&T.key!==" "||(T.preventDefault(),T.stopPropagation(),I(T))},onMousedown(T){T.preventDefault(),T.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},w=Y.value?!!u.chip:!!u.selection,G=w?Fl(Y.value?u.chip({item:i,index:g,props:S}):u.selection({item:i,index:g})):void 0;if(!(w&&!G))return t("div",{key:i.value,class:["v-autocomplete__selection",g===l.value&&["v-autocomplete__selection--selected",ce.value]],style:g===l.value?ve.value:{}},[Y.value?u.chip?t(bl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>[G]}):t(il,b({key:"chip",closable:e.closableChips,size:"small",text:i.title,disabled:i.props.disabled},S),null):G??t("span",{class:"v-autocomplete__selection-text"},[i.title,e.multiple&&g<d.value.length-1&&t("span",{class:"v-autocomplete__selection-comma"},[O(",")])])])})]),"append-inner":function(){var S;for(var i=arguments.length,g=new Array(i),I=0;I<i;I++)g[I]=arguments[I];return t(j,null,[(S=u["append-inner"])==null?void 0:S.call(u,...g),e.menuIcon?t(Ie,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Me,onClick:wl,"aria-label":Q(c.value),title:Q(c.value)},null):void 0])}})}),gl({isFocused:D,isPristine:A,menu:p,search:$,filteredItems:ae,select:z},k)}});function Tl(e,r,u,Q,k,D){const A=x("FSLoader"),E=x("FSCard"),B=x("FSSearchField"),X=x("FSDialogMenu"),N=x("FSToggleSet"),p=x("FSBaseField");return e.$props.loading?(f(),v(se,{key:0},{default:o(()=>[e.$props.hideHeader?C("",!0):(f(),v(A,{key:0,variant:"text-overline"})),e.$props.loading?(f(),v(A,{key:1,width:"100%",height:["40px","36px"]})):C("",!0)]),_:1})):e.isExtraSmall?(f(),v(se,{key:1},{default:o(()=>[t(De,b({validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,modelValue:e.mobileValue,onClick:e.openMobileOverlay},e.$attrs),be({"prepend-inner":o(()=>[e.selectedItem&&e.showExtra?y(e.$slots,"item-prepend",M(b({key:0},{item:e.selectedItem}))):C("",!0)]),clear:o(()=>[t(F,{wrap:!1},{default:o(()=>[e.selectedItem&&e.showExtra?y(e.$slots,"item-append",M(b({key:0},{item:e.selectedItem}))):C("",!0),y(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(f(),v(U,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:e.onClear},null,8,["color","onClick"])):C("",!0)])]),_:3})]),"append-inner":o(()=>[t(U,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])]),_:2},[ee(e.$slots,(l,m)=>({name:m,fn:o(c=>[y(e.$slots,m,M(W(c)))])}))]),1040,["validationValue","description","hideHeader","clearable","editable","required","label","rules","messages","modelValue","onClick"]),e.$props.multiple&&Array.isArray(e.$props.modelValue)?(f(),v(ke,{key:0},{default:o(()=>[(f(!0),pe(j,null,ee(e.$props.items.filter(l=>e.$props.modelValue.includes(l[e.$props.itemValue])),(l,m)=>(f(),v(E,{variant:"standard",height:["40px","36px"],color:e.ColorEnum.Light,border:!1,key:m},{default:o(()=>[t(F,{align:"center-left",padding:"0 8px",wrap:!1},{default:o(()=>[y(e.$slots,"item-prepend",b({ref_for:!0},{item:l})),t(L,null,{default:o(()=>[O(H(l[e.$props.itemTitle]),1)]),_:2},1024),y(e.$slots,"item-append",b({ref_for:!0},{item:l})),t(U,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:()=>e.onCheckboxChange(l[e.$props.itemValue])},null,8,["color","onClick"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:3})):C("",!0),t(X,{modelValue:e.dialog,"onUpdate:modelValue":r[2]||(r[2]=l=>e.dialog=l)},{body:o(()=>[t(B,{clearable:e.$props.clearable,hideHeader:!0,modelValue:e.search,"onUpdate:modelValue":r[0]||(r[0]=l=>e.search=l)},null,8,["clearable","modelValue"]),t(Ee,{maxHeight:e.maxHeight},{default:o(()=>[t(se,{gap:"12px"},{default:o(()=>[(f(!0),pe(j,null,ee(e.searchItems,(l,m)=>(f(),v(F,{key:m},{default:o(()=>{var c;return[e.$props.multiple?(f(),v(Ce,{key:0,label:l[e.$props.itemTitle],editable:e.$props.editable,modelValue:(c=e.$props.modelValue)==null?void 0:c.includes(l[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(l[e.$props.itemValue])},{label:o(({font:q})=>[t(F,{align:"center-left",wrap:!1},{default:o(()=>[y(e.$slots,"item-prepend",b({ref_for:!0},{item:l})),t(L,{font:q},{default:o(()=>[O(H(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1024)]),_:2},1032,["label","editable","modelValue","onUpdate:modelValue"])):(f(),v(Be,{key:1,selected:e.$props.modelValue===l[e.$props.itemValue],label:l[e.$props.itemTitle],editable:e.$props.editable,item:l,modelValue:l[e.$props.itemValue],"onUpdate:modelValue":()=>e.onRadioChange(l[e.$props.itemValue])},{label:o(({font:q})=>[t(F,{align:"center-left",wrap:!1},{default:o(()=>[y(e.$slots,"item-prepend",b({ref_for:!0},{item:l})),t(L,{font:q},{default:o(()=>[O(H(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1024)]),_:2},1032,["selected","label","editable","item","modelValue","onUpdate:modelValue"])),t(F,{align:"center-right"},{default:o(()=>[y(e.$slots,"item-append",b({ref_for:!0},{item:l}))]),_:2},1024)]}),_:2},1024))),128))]),_:3})]),_:3},8,["maxHeight"]),e.allowAddItem?(f(),v(F,{key:0,padding:"4px 3px"},{default:o(()=>[t(U,{variant:"icon",label:e.$tr("autocomplete-field.add-item","Add new item"),color:e.ColorEnum.Primary,onClick:r[1]||(r[1]=l=>e.$emit("add:item",e.search))},null,8,["label","color"])]),_:1})):C("",!0),!e.allowAddItem&&e.searchItems.length===0?(f(),v(F,{key:1,padding:"4px 3px"},{default:o(()=>[t(L,null,{default:o(()=>[O(H(e.$tr("autocomplete-field.no-data","No data")),1)]),_:1})]),_:1})):C("",!0)]),_:3},8,["modelValue"])]),_:3})):(f(),v(p,{key:2,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:o(()=>[e.$props.toggleSet?(f(),v(N,b({key:0,editable:e.$props.editable,multiple:e.$props.multiple,required:e.$props.required,values:e.$props.items,rules:e.$props.rules,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[3]||(r[3]=l=>e.$emit("update:modelValue",l))},e.$attrs),be({_:2},[ee(e.toggleSetSlots,(l,m)=>({name:m,fn:o(c=>[y(e.$slots,`toggle-set-${m}`,M(W(c)))])}))]),1040,["editable","multiple","required","values","rules","modelValue"])):(f(),v(se,{key:1},{default:o(()=>[t(Il,b({class:"fs-autocomplete-field",variant:"outlined",clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,multiple:e.$props.multiple,validateOn:e.validateOn,autoSelectFirst:!0,persistentClear:!0,listProps:e.listStyle,returnObject:!1,items:e.$props.items,rules:e.$props.rules,hideDetails:!0,menuIcon:null,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onSingleChange,onClick:e.onClick,onBlur:e.onBlur,search:e.search,"onUpdate:search":r[5]||(r[5]=l=>e.search=l)},e.$attrs),be({item:o(({props:l,item:m})=>[t(Se,M(W({...l,title:""})),{default:o(()=>[t(F,{align:"center-left",wrap:!1},{default:o(()=>{var c;return[e.$props.multiple?(f(),v(Ce,{key:0,modelValue:(c=e.$props.modelValue)==null?void 0:c.includes(m.raw[e.$props.itemValue]),onClick:l.onClick},{label:o(({font:q})=>[y(e.$slots,"item-prepend",M(W({item:m.raw}))),t(L,{font:q},{default:o(()=>[O(H(m.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["modelValue","onClick"])):(f(),pe(j,{key:1},[y(e.$slots,"item-prepend",M(W({item:m.raw}))),t(L,{font:e.$props.modelValue===m.raw[e.$props.itemTitle]?"text-button":"text-body"},{default:o(()=>[O(H(m.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])],64)),t(F,{align:"center-right"},{default:o(()=>[y(e.$slots,"item-append",M(W({item:m.raw})))]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"prepend-inner":o(()=>[e.selectedItem&&e.showExtra?y(e.$slots,"item-prepend",M(b({key:0},{item:e.selectedItem}))):C("",!0)]),clear:o(()=>[t(F,{wrap:!1},{default:o(()=>[e.selectedItem&&e.showExtra?y(e.$slots,"item-append",M(b({key:0},{item:e.selectedItem}))):C("",!0),y(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(f(),v(U,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:e.onClear},null,8,["color","onClick"])):C("",!0)])]),_:3})]),"append-inner":o(()=>[y(e.$slots,"append-inner",{},()=>[t(U,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"append-item":o(()=>[e.allowAddItem?(f(),v(F,{key:0,padding:"15px"},{default:o(()=>[t(U,{variant:"icon",label:e.$tr("autocomplete-field.add-item","Add new item"),color:e.ColorEnum.Primary,onClick:r[4]||(r[4]=l=>e.$emit("add:item",e.search))},null,8,["label","color"])]),_:1})):C("",!0)]),"no-data":o(()=>[e.allowAddItem?C("",!0):(f(),v(F,{key:0,padding:"15px"},{default:o(()=>[t(L,null,{default:o(()=>[O(H(e.$tr("ui.common.no-data","No data")),1)]),_:1})]),_:1}))]),_:2},[ee(e.autocompleteSlots,(l,m)=>({name:m,fn:o(c=>[y(e.$slots,`autocomplete-${m}`,M(W(c)))])})),e.$props.multiple?{name:"selection",fn:o(({index:l})=>[l===e.$props.modelValue.length-1&&e.showExtra?(f(),v(L,{key:0},{default:o(()=>[O(H(e.$props.placeholder),1)]),_:1})):C("",!0)]),key:"0"}:void 0]),1040,["clearable","itemTitle","itemValue","readonly","multiple","validateOn","listProps","items","rules","style","modelValue","onUpdate:modelValue","onClick","onBlur","search"]),e.$props.multiple&&Array.isArray(e.$props.modelValue)?(f(),v(ke,{key:0},{default:o(()=>[(f(!0),pe(j,null,ee(e.$props.items.filter(l=>e.$props.modelValue.includes(l[e.$props.itemValue])),(l,m)=>(f(),v(E,{variant:"standard",height:["40px","36px"],color:e.ColorEnum.Light,border:!1,key:m},{default:o(()=>[t(F,{align:"center-left",padding:"0 8px"},{default:o(()=>[y(e.$slots,"item-prepend",b({ref_for:!0},{item:l})),t(L,null,{default:o(()=>[O(H(l[e.$props.itemTitle]),1)]),_:2},1024),y(e.$slots,"item-append",b({ref_for:!0},{item:l})),t(U,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:()=>e.onCheckboxChange(l[e.$props.itemValue])},null,8,["color","onClick"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:3})):C("",!0)]),_:3}))]),_:3},8,["description","hideHeader","required","editable","label","messages"]))}const da=nl(Pe,[["render",Tl]]);Pe.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string | null | any"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSet",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"showSearch",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"add:item"},{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"item-prepend",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"item-append",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"clear"},{name:"`toggle-set-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`autocomplete-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};export{da as F};
