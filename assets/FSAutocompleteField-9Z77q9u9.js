import{d as Ke,b as j,c as g,w as Y,s as J,n as ke,I as n,F as U,m as D,E as ae,y as Q,z as h,A,B as m,C as pe,M as ce,N as le,D as ve,J as T,K as M,L as O,G as ge}from"./vue.esm-bundler-DC82FEWN.js";import{F as ze}from"./FSSearchField-B1cVTZp_.js";import{F as je}from"./FSDialogMenu-L2iVIZdg.js";import{F as qe}from"./FSRadioGroup-CCDraVhx.js";import{F as We}from"./FSToggleSet-OAzwv8eZ.js";import{F as Ge}from"./VField-CQBU8LtE.js";import{F as Ae,m as Je,V as Fe}from"./FSTextField-BVT64V1F.js";import{F as be,V as Qe}from"./FSCheckbox-Bb9obVvl.js";import{F as Te}from"./FSFadeOut-DOYA3BXE.js";import{F as te}from"./FSButton-cgjePGb6.js";import{F as Xe}from"./FSLoader-Bx7UBqYr.js";import{_ as Z}from"./FSSpan-CwfDYIua.js";import{_ as ye}from"./FSCol-B7HQy3FB.js";import{_ as oe}from"./FSRow-DoCXWKDP.js";import{u as Ye}from"./css-DYOPUjjE.js";import{u as Ze}from"./useRules-DS9e5-1Q.js";import{u as _e,C as X}from"./useColors-WxHDk9aB.js";import{u as xe}from"./useSlots-V2mVelz6.js";import{_ as el}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as ll,u as al,a as tl,b as ol}from"./VSelect-BFSoAAL8.js";import{g as ul,b as nl,u as rl}from"./color-BhlhQtQT.js";import{m as sl,u as il}from"./filter-DSaKTciw.js";import{b as dl}from"./VInput-BvcCh06W.js";import{f as ml}from"./forwardRefs-DWGaNmQL.js";import{u as fl,a as pl,V as he,b as cl}from"./VList-D_XNZRf5.js";import{a as vl}from"./locale-BC9z6YbT.js";import{u as Ve}from"./proxiedModel-CYw7-KgF.js";import{m as gl}from"./transition-CJbyFvkq.js";import{V as Vl}from"./VMenu-Dhrs_Dg2.js";import{V as Ce}from"./VIcon-uFUcYN4x.js";import{V as bl}from"./VDefaultsProvider-CTE9NJfn.js";import{p as yl,o as hl,w as Sl,I as $l,z as kl,A as Fl,B as we}from"./theme-CDGAP9oX.js";const Ie=Ke({name:"FSAutocompleteField",inheritAttrs:!1,components:{FSSearchField:ze,FSDialogMenu:je,FSRadioGroup:qe,FSBaseField:Ge,FSTextField:Ae,FSToggleSet:We,FSCheckbox:be,FSFadeOut:Te,FSButton:te,FSLoader:Xe,FSSpan:Z,FSCol:ye,FSRow:oe},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String,Object],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},toggleSet:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:search"],setup:(e,{emit:u})=>{const{isExtraSmall:r,isMobileSized:N}=Ye(),{validateOn:k,getMessages:w}=Ze(),{getColors:b}=_e(),{slots:S}=xe();delete S.label,delete S.description;const H=b(X.Background),L=b(X.Error),I=b(X.Light),a=b(X.Dark),t=j(!1),f=j(""),P=g(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-background-color":H.base,"--fs-autocomplete-field-border-color":I.dark,"--fs-autocomplete-field-color":a.base,"--fs-autocomplete-field-active-border-color":a.dark,"--fs-autocomplete-field-error-color":L.base,"--fs-autocomplete-field-error-border-color":L.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":I.base,"--fs-autocomplete-field-color":I.dark,"--fs-autocomplete-field-active-border-color":I.base}),_=g(()=>Object.keys(S).filter(o=>o.startsWith("autocomplete-")).reduce((o,p)=>(o[p.substring(13)]=S[p],o),{})),ue=g(()=>Object.keys(S).filter(o=>o.startsWith("toggle-set-")).reduce((o,p)=>(o[p.substring(11)]=S[p],o),{})),ne=g(()=>({style:P.value})),re=g(()=>{const o=["fs-autocomplete-field"];return e.multiple&&o.push("fs-autocomplete-multiple-field"),o}),se=g(()=>e.messages??w(e.modelValue,e.rules)),V=g(()=>e.items.filter(o=>o[e.itemTitle].toLowerCase().includes(f.value.toLowerCase()))),d=g(()=>`calc(100vh - 40px - ${16+(N?36:40)+8}px)`),ie=g(()=>{if(e.multiple&&Array.isArray(e.modelValue))return e.modelValue.map(o=>{const p=e.items.find(G=>G[e.itemValue]===o);if(p)return p[e.itemTitle]}).filter(o=>!!o).join(", ");if(e.modelValue){const o=e.items.find(p=>p[e.itemValue]===e.modelValue);if(o)return o[e.itemTitle]}return null}),B=g(()=>{const o=e.items.find(p=>p[e.itemValue]===e.modelValue);return o?{item:{title:"",value:o[e.itemValue],props:{title:o[e.itemTitle],value:o[e.itemValue]},raw:{...o}},font:"text-body"}:null}),W=(o,p)=>({item:{title:"",value:o[e.itemValue],props:{title:o[e.itemTitle],value:o[e.itemValue]},raw:{...o}},font:p}),de=()=>{e.editable&&(t.value=!0)},q=o=>{u("update:modelValue",o),t.value=!1},K=o=>{Array.isArray(e.modelValue)?e.modelValue.includes(o)?u("update:modelValue",e.modelValue.filter(p=>p!==o)):u("update:modelValue",[...e.modelValue,o]):e.modelValue!=null?e.modelValue===o?u("update:modelValue",[]):u("update:modelValue",[e.modelValue,o]):u("update:modelValue",[o])},z=()=>{e.modelValue&&!e.multiple&&(f.value="",u("update:search",f.value),u("update:modelValue",null))};return Y(f,()=>{u("update:search",f.value),e.modelValue&&f.value&&!e.multiple&&u("update:modelValue",null)}),{mobileSelectionProps:B,autocompleteSlots:_,toggleSetSlots:ue,isExtraSmall:r,mobileValue:ie,searchItems:V,validateOn:k,ColorEnum:X,listStyle:ne,messages:se,classes:re,dialog:t,height:d,search:f,slots:S,style:P,openMobileOverlay:de,onCheckboxChange:K,mobileItemProps:W,onRadioChange:q,onClick:z}}});function Cl(e,u,r){if(u==null)return e;if(Array.isArray(u))throw new Error("Multiple matches is not implemented");return typeof u=="number"&&~u?n(U,null,[n("span",{class:"v-autocomplete__unmask"},[e.substr(0,u)]),n("span",{class:"v-autocomplete__mask"},[e.substr(u,r)]),n("span",{class:"v-autocomplete__unmask"},[e.substr(u+r)])]):e}const wl=yl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...sl({filterKeys:["title"]}),...ll(),...hl(Je({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...gl({transition:!1})},"VAutocomplete"),ql=ul()({name:"VAutocomplete",props:wl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,u){let{slots:r}=u;const{t:N}=vl(),k=j(),w=J(!1),b=J(!0),S=J(!1),H=j(),L=j(),I=Ve(e,"menu"),a=g({get:()=>I.value,set:l=>{var s;I.value&&!l&&((s=H.value)!=null&&s.ΨopenChildren)||(I.value=l)}}),t=J(-1),f=g(()=>{var l;return(l=k.value)==null?void 0:l.color}),P=g(()=>a.value?e.closeText:e.openText),{items:_,transformIn:ue,transformOut:ne}=fl(e),{textColorClasses:re,textColorStyles:se}=nl(f),V=Ve(e,"search",""),d=Ve(e,"modelValue",[],l=>ue(l===null?[null]:Sl(l)),l=>{const s=ne(l);return e.multiple?s:s[0]??null}),ie=g(()=>typeof e.counterValue=="function"?e.counterValue(d.value):typeof e.counterValue=="number"?e.counterValue:d.value.length),B=dl(),{filteredItems:W,getMatches:de}=il(e,_,()=>b.value?"":V.value),q=g(()=>e.hideSelected?W.value.filter(l=>!d.value.some(s=>s.value===l.value)):W.value),K=g(()=>!!(e.chips||r.chip)),z=g(()=>K.value||!!r.selection),o=g(()=>d.value.map(l=>l.props.value)),p=g(()=>{var s;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&V.value===((s=q.value[0])==null?void 0:s.title))&&q.value.length>0&&!b.value&&!S.value}),G=g(()=>e.hideNoData&&!q.value.length||e.readonly||(B==null?void 0:B.isReadonly.value)),me=j(),{onListScroll:Pe,onListKeydown:De}=al(me,k);function Be(l){e.openOnClear&&(a.value=!0),V.value=""}function Re(){G.value||(a.value=!0)}function Me(l){G.value||(w.value&&(l.preventDefault(),l.stopPropagation()),a.value=!a.value)}function Oe(l){var i,c,F;if(e.readonly||B!=null&&B.isReadonly.value)return;const s=k.value.selectionStart,v=d.value.length;if((t.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(a.value=!0),["Escape"].includes(l.key)&&(a.value=!1),p.value&&["Enter","Tab"].includes(l.key)&&R(q.value[0]),l.key==="ArrowDown"&&p.value&&((i=me.value)==null||i.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&z.value&&d.value.length>0)return R(d.value[0],!1);if(t.value<0){l.key==="Backspace"&&!V.value&&(t.value=v-1);return}const y=t.value;R(d.value[t.value],!1),t.value=y>=v-1?v-2:y}if(e.multiple){if(l.key==="ArrowLeft"){if(t.value<0&&s>0)return;const y=t.value>-1?t.value-1:v-1;d.value[y]?t.value=y:(t.value=-1,k.value.setSelectionRange((c=V.value)==null?void 0:c.length,(F=V.value)==null?void 0:F.length))}if(l.key==="ArrowRight"){if(t.value<0)return;const y=t.value+1;d.value[y]?t.value=y:(t.value=-1,k.value.setSelectionRange(0,0))}}}function Le(l){if(we(k.value,":autofill")||we(k.value,":-webkit-autofill")){const s=_.value.find(v=>v.title===l.target.value);s&&R(s)}}function Ee(){var l;w.value&&(b.value=!0,(l=k.value)==null||l.focus())}function Ue(l){w.value=!0,setTimeout(()=>{S.value=!0})}function Ne(l){S.value=!1}function He(l){(l==null||l===""&&!e.multiple)&&(d.value=[])}const fe=J(!1);function R(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const v=d.value.findIndex(c=>e.valueComparator(c.value,l.value)),i=s??!~v;if(~v){const c=i?[...d.value,l]:[...d.value];c.splice(v,1),d.value=c}else i&&(d.value=[...d.value,l]);e.clearOnSelect&&(V.value="")}else{const v=s!==!1;d.value=v?[l]:[],V.value=v&&!z.value?l.title:"",ke(()=>{a.value=!1,b.value=!0})}}return Y(w,(l,s)=>{var v;l!==s&&(l?(fe.value=!0,V.value=e.multiple||z.value?"":String(((v=d.value.at(-1))==null?void 0:v.props.title)??""),b.value=!0,ke(()=>fe.value=!1)):(!e.multiple&&V.value==null?d.value=[]:p.value&&!S.value&&!d.value.some(i=>{let{value:c}=i;return c===q.value[0].value})&&R(q.value[0]),a.value=!1,V.value="",t.value=-1))}),Y(V,l=>{!w.value||fe.value||(l&&(a.value=!0),b.value=!l)}),Y(a,()=>{if(!e.hideSelected&&a.value&&d.value.length){const l=q.value.findIndex(s=>d.value.some(v=>s.value===v.value));$l&&window.requestAnimationFrame(()=>{var s;l>=0&&((s=L.value)==null||s.scrollToIndex(l))})}}),Y(()=>e.items,(l,s)=>{a.value||w.value&&!s.length&&l.length&&(a.value=!0)}),rl(()=>{const l=!!(!e.hideNoData||q.value.length||r["prepend-item"]||r["append-item"]||r["no-data"]),s=d.value.length>0,v=Fe.filterProps(e);return n(Fe,D({ref:k},v,{modelValue:V.value,"onUpdate:modelValue":[i=>V.value=i,He],focused:w.value,"onUpdate:focused":i=>w.value=i,validationValue:d.externalValue,counterValue:ie.value,dirty:s,onChange:Le,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":a.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!z.value,"v-autocomplete--selecting-index":t.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:s?void 0:e.placeholder,"onClick:clear":Be,"onMousedown:control":Re,onKeydown:Oe}),{...r,default:()=>n(U,null,[n(Vl,D({ref:H,modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,activator:"parent",contentClass:"v-autocomplete__content",disabled:G.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ee},e.menuProps),{default:()=>[l&&n(pl,D({ref:me,selected:o.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:De,onFocusin:Ue,onFocusout:Ne,onScrollPassive:Pe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var i,c,F;return[(i=r["prepend-item"])==null?void 0:i.call(r),!q.value.length&&!e.hideNoData&&(((c=r["no-data"])==null?void 0:c.call(r))??n(he,{title:N(e.noDataText)},null)),n(tl,{ref:L,renderless:!0,items:q.value},{default:y=>{var $e;let{item:$,index:E,itemRef:C}=y;const Se=D($.props,{ref:C,key:E,active:p.value&&E===0?!0:void 0,onClick:()=>R($,null)});return(($e=r.item)==null?void 0:$e.call(r,{item:$,index:E,props:Se}))??n(he,D(Se,{role:"option"}),{prepend:x=>{let{isSelected:ee}=x;return n(U,null,[e.multiple&&!e.hideSelected?n(Qe,{key:$.value,modelValue:ee,ripple:!1,tabindex:"-1"},null):void 0,$.props.prependAvatar&&n(cl,{image:$.props.prependAvatar},null),$.props.prependIcon&&n(Ce,{icon:$.props.prependIcon},null)])},title:()=>{var x,ee;return b.value?$.title:Cl($.title,(x=de($))==null?void 0:x.title,((ee=V.value)==null?void 0:ee.length)??0)}})}}),(F=r["append-item"])==null?void 0:F.call(r)]}})]}),d.value.map((i,c)=>{function F(C){C.stopPropagation(),C.preventDefault(),R(i,!1)}const y={"onClick:close":F,onKeydown(C){C.key!=="Enter"&&C.key!==" "||(C.preventDefault(),C.stopPropagation(),F(C))},onMousedown(C){C.preventDefault(),C.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},$=K.value?!!r.chip:!!r.selection,E=$?kl(K.value?r.chip({item:i,index:c,props:y}):r.selection({item:i,index:c})):void 0;if(!($&&!E))return n("div",{key:i.value,class:["v-autocomplete__selection",c===t.value&&["v-autocomplete__selection--selected",re.value]],style:c===t.value?se.value:{}},[K.value?r.chip?n(bl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>[E]}):n(ol,D({key:"chip",closable:e.closableChips,size:"small",text:i.title,disabled:i.props.disabled},y),null):E??n("span",{class:"v-autocomplete__selection-text"},[i.title,e.multiple&&c<d.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[ae(",")])])])})]),"append-inner":function(){var y;for(var i=arguments.length,c=new Array(i),F=0;F<i;F++)c[F]=arguments[F];return n(U,null,[(y=r["append-inner"])==null?void 0:y.call(r,...c),e.menuIcon?n(Ce,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Me,onClick:Fl,"aria-label":N(P.value),title:N(P.value)},null):void 0])}})}),ml({isFocused:w,isPristine:b,menu:a,search:V,filteredItems:W,select:R},k)}});function Al(e,u,r,N,k,w){const b=Q("FSLoader"),S=Q("FSSearchField"),H=Q("FSDialogMenu"),L=Q("FSToggleSet"),I=Q("FSBaseField");return e.$props.loading?(h(),A(ye,{key:0},{default:m(()=>[e.$props.hideHeader?ve("",!0):(h(),A(b,{key:0,variant:"text-overline"})),e.$props.loading?(h(),A(b,{key:1,width:"100%",height:["40px","36px"]})):ve("",!0)]),_:1})):(h(),pe(U,{key:1},[e.isExtraSmall?(h(),pe(U,{key:0},[n(Ae,D({validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,modelValue:e.mobileValue,"onUpdate:modelValue":u[0]||(u[0]=a=>e.$emit("update:modelValue",a)),onClick:e.openMobileOverlay},e.$attrs),ce({"append-inner":m(()=>[T(e.$slots,"append-inner",{},()=>[n(te,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[le(e.$slots,(a,t)=>({name:t,fn:m(f=>[T(e.$slots,t,M(O(f)))])})),e.mobileSelectionProps?{name:"prepend-inner",fn:m(()=>[T(e.$slots,"selection-mobile",M(O(e.mobileSelectionProps)))]),key:"0"}:void 0]),1040,["validationValue","description","hideHeader","clearable","editable","required","label","rules","messages","modelValue","onClick"]),n(H,{modelValue:e.dialog,"onUpdate:modelValue":u[2]||(u[2]=a=>e.dialog=a)},{body:m(()=>[n(S,{hideHeader:!0,modelValue:e.search,"onUpdate:modelValue":u[1]||(u[1]=a=>e.search=a)},null,8,["modelValue"]),n(Te,{height:e.height},{default:m(()=>[e.$props.multiple?(h(),A(ye,{key:0,gap:"12px"},{default:m(()=>[(h(!0),pe(U,null,le(e.searchItems,(a,t)=>(h(),A(oe,{key:t},{default:m(()=>{var f;return[n(be,{label:a[e.$props.itemTitle],editable:e.$props.editable,modelValue:(f=e.$props.modelValue)==null?void 0:f.includes(a[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(a[e.$props.itemValue])},{label:m(({font:P})=>[T(e.$slots,"item-label",D({ref_for:!0},e.mobileItemProps(a,P)))]),_:2},1032,["label","editable","modelValue","onUpdate:modelValue"])]}),_:2},1024))),128))]),_:3})):(h(),A(qe,{key:1,gap:"12px",values:e.searchItems.map(a=>({value:a[e.$props.itemValue],label:a[e.$props.itemTitle],item:a})),editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onRadioChange},{label:m(({item:a,font:t})=>[T(e.$slots,"item-label",M(O(e.mobileItemProps(a,t))))]),_:3},8,["values","editable","modelValue","onUpdate:modelValue"]))]),_:3},8,["height"])]),_:3},8,["modelValue"])],64)):(h(),A(I,{key:1,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:m(()=>[e.$props.toggleSet?(h(),A(L,D({key:0,editable:e.$props.editable,multiple:e.$props.multiple,required:e.$props.required,values:e.$props.items,rules:e.$props.rules,modelValue:e.$props.modelValue,"onUpdate:modelValue":u[3]||(u[3]=a=>e.$emit("update:modelValue",a))},e.$attrs),ce({_:2},[le(e.toggleSetSlots,(a,t)=>({name:t,fn:m(f=>[T(e.$slots,`toggle-set-${t}`,M(O(f)))])}))]),1040,["editable","multiple","required","values","rules","modelValue"])):(h(),A(ql,D({key:1,class:["fs-autocomplete-field",e.classes],variant:"outlined",clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,multiple:e.$props.multiple,validateOn:e.validateOn,autoSelectFirst:!0,persistentClear:!0,listProps:e.listStyle,returnObject:!1,items:e.$props.items,rules:e.$props.rules,hideDetails:!0,menuIcon:null,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":u[5]||(u[5]=a=>e.$emit("update:modelValue",a)),onClick:e.onClick,search:e.search,"onUpdate:search":u[6]||(u[6]=a=>e.search=a)},e.$attrs),ce({item:m(({props:a,item:t})=>[n(he,M(O({...a,title:""})),{default:m(()=>[n(oe,{align:"center-left"},{default:m(()=>{var f;return[e.$props.multiple?(h(),A(be,{key:0,modelValue:(f=e.$props.modelValue)==null?void 0:f.includes(t.raw[e.$props.itemValue]),onClick:a.onClick},{label:m(({font:P})=>[T(e.$slots,"item-label",M(O({item:t,font:P})),()=>[n(Z,{font:P},{default:m(()=>[ae(ge(t.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])])]),_:2},1032,["modelValue","onClick"])):(h(),A(Z,{key:1},{default:m(()=>[T(e.$slots,"item-label",M(O({item:t,font:e.$props.modelValue===t.raw[e.$props.itemTitle]?"text-button":"text-body"})),()=>[n(Z,{font:e.$props.modelValue===t.raw[e.$props.itemTitle]?"text-button":"text-body"},{default:m(()=>[ae(ge(t.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])])]),_:2},1024))]}),_:2},1024)]),_:2},1040)]),clear:m(()=>[T(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(h(),A(te,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:u[4]||(u[4]=a=>e.$emit("update:modelValue",null))},null,8,["color"])):ve("",!0)])]),"append-inner":m(()=>[T(e.$slots,"append-inner",{},()=>[n(te,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"no-data":m(()=>[n(oe,{padding:"17px"},{default:m(()=>[n(Z,null,{default:m(()=>[ae(ge(e.$tr("ui.common.no-data","No data")),1)]),_:1})]),_:1})]),_:2},[le(e.autocompleteSlots,(a,t)=>({name:t,fn:m(f=>[T(e.$slots,`autocomplete-${t}`,M(O(f)))])}))]),1040,["clearable","itemTitle","itemValue","readonly","multiple","validateOn","listProps","items","rules","class","style","modelValue","onClick","search"]))]),_:3},8,["description","hideHeader","required","editable","label","messages"]))],64))}const ra=el(Ie,[["render",Al]]);Ie.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string | null | any"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSet",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"selection-mobile",scoped:!0,bindings:[]},{name:"append-inner"},{name:"item-label",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"font",title:"binding"}]},{name:"`toggle-set-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`autocomplete-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"clear"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};export{ra as F};
