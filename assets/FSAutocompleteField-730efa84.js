import{f as je,j,g as c,w as Q,s as W,n as he,M as u,J as M,A as D,K as ce,D as G,E as A,F as B,H as me,U as fe,V as Z,G as v,R as H,N as _,O as x,I as Se,L as Fe}from"./vue.esm-bundler-838daa40.js";import{F as Ke}from"./FSSearchField-fd4e58de.js";import{F as ze}from"./FSDialogMenu-fb154c77.js";import{F as we}from"./FSRadioGroup-9a5da185.js";import{F as We}from"./FSToggleSet-89f81a7c.js";import{F as Ge}from"./VField-b5e232d6.js";import{F as qe,m as Je,V as $e}from"./FSTextField-5838a9fc.js";import{F as ve,V as Qe}from"./FSCheckbox-884ec95b.js";import{F as Ae}from"./FSFadeOut-ce6cecc6.js";import{F as ee}from"./FSButton-b3e7898e.js";import{F as Xe}from"./FSLoader-d60b60c7.js";import{_ as ge}from"./FSSpan-3df08200.js";import{_ as De}from"./FSCol-44fe82a9.js";import{_ as le}from"./FSRow-753b58e5.js";import{u as Ye}from"./css-67cfec15.js";import{u as Ze}from"./useRules-cda8e231.js";import{u as _e,C as J}from"./useColors-8c9c4d1e.js";import{u as xe}from"./useSlots-6ce8c1a9.js";import{_ as el}from"./_plugin-vue_export-helper-c27b6911.js";import{m as ll,u as al,b as tl,c as ol,V as Ve,d as ul,e as nl,f as rl}from"./VSelect-73f86563.js";import{a as sl}from"./color-3e53cf3d.js";import{m as il,u as dl}from"./filter-e8ac40d9.js";import{b as ml}from"./VInput-5523e371.js";import{f as fl}from"./forwardRefs-e658ad70.js";import{a as pl}from"./locale-5633e5ee.js";import{u as pe}from"./proxiedModel-3239cc3c.js";import{m as cl}from"./transition-ee4dd36d.js";import{V as vl}from"./VMenu-ec057191.js";import{V as ke}from"./VIcon-281b119b.js";import{V as gl}from"./VDefaultsProvider-a165414e.js";import{p as Vl,A as bl,I as yl,N as hl,O as Sl,w as Fl,P as Ce}from"./theme-f9f3e2d4.js";import{g as $l,u as kl}from"./useRender-f6a4770d.js";const Ie=je({name:"FSAutocompleteField",components:{FSSearchField:Ke,FSDialogMenu:ze,FSRadioGroup:we,FSToggleSet:We,FSBaseField:Ge,FSTextField:qe,FSCheckbox:ve,FSFadeOut:Ae,FSButton:ee,FSLoader:Xe,FSSpan:ge,FSCol:De,FSRow:le},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},returnObject:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},toggleSet:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:search"],setup:(e,{emit:n})=>{const{isExtraSmall:r,isMobileSized:U}=Ye(),{validateOn:h,blurred:$,getMessages:k}=Ze(),{getColors:q}=_e(),{slots:C}=xe();delete C.label,delete C.description;const L=q(J.Background),I=q(J.Error),a=q(J.Light),o=q(J.Dark),g=j(!1),P=j(""),K=c(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-background-color":L.base,"--fs-autocomplete-field-border-color":a.dark,"--fs-autocomplete-field-color":o.base,"--fs-autocomplete-field-active-border-color":o.dark,"--fs-autocomplete-field-error-color":I.base,"--fs-autocomplete-field-error-border-color":I.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":a.base,"--fs-autocomplete-field-color":a.dark,"--fs-autocomplete-field-active-border-color":a.base}),ae=c(()=>Object.keys(C).filter(t=>t.startsWith("autocomplete-")).reduce((t,b)=>(t[b.substring(13)]=C[b],t),{})),te=c(()=>Object.keys(C).filter(t=>t.startsWith("toggle-set-")).reduce((t,b)=>(t[b.substring(11)]=C[b],t),{})),oe=c(()=>({style:K.value})),ue=c(()=>{const t=["fs-autocomplete-field"];return e.multiple&&t.push("fs-autocomplete-multiple-field"),t}),p=c(()=>e.messages??k(e.modelValue,e.rules)),d=c(()=>e.items.filter(t=>t[e.itemTitle].toLowerCase().includes(P.value.toLowerCase()))),ne=c(()=>`calc(100vh - 40px - ${16+(U?36:40)+8}px)`),O=c(()=>{if(e.multiple&&Array.isArray(e.modelValue))return e.modelValue.map(t=>{const b=e.items.find(N=>N[e.itemValue]===t);if(b)return b[e.itemTitle]}).filter(t=>!!t).join(", ");if(e.modelValue){const t=e.items.find(b=>b[e.itemValue]===e.modelValue);if(t)return t[e.itemTitle]}return null}),z=()=>{e.editable&&(g.value=!0)},re=t=>{n("update:modelValue",t),g.value=!1},w=t=>{Array.isArray(e.modelValue)?e.modelValue.includes(t)?n("update:modelValue",e.modelValue.filter(b=>b!==t)):n("update:modelValue",[...e.modelValue,t]):e.modelValue===t?n("update:modelValue",[]):n("update:modelValue",[e.modelValue,t])},E=t=>{n("update:modelValue",t)};return Q(P,()=>{n("update:search",P.value)}),{autocompleteSlots:ae,toggleSetSlots:te,isExtraSmall:r,mobileValue:O,searchItems:d,validateOn:h,ColorEnum:J,listStyle:oe,messages:p,blurred:$,classes:ue,dialog:g,height:ne,search:P,slots:C,style:K,openMobileOverlay:z,onCheckboxChange:w,onRadioChange:re,onUpdate:E}}});function Cl(e,n,r){if(n==null)return e;if(Array.isArray(n))throw new Error("Multiple matches is not implemented");return typeof n=="number"&&~n?u(M,null,[u("span",{class:"v-autocomplete__unmask"},[e.substr(0,n)]),u("span",{class:"v-autocomplete__mask"},[e.substr(n,r)]),u("span",{class:"v-autocomplete__unmask"},[e.substr(n+r)])]):e}const wl=Vl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...il({filterKeys:["title"]}),...ll(),...bl(Je({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...cl({transition:!1})},"VAutocomplete"),ql=$l()({name:"VAutocomplete",props:wl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,n){let{slots:r}=n;const{t:U}=pl(),h=j(),$=W(!1),k=W(!0),q=W(!1),C=j(),L=j(),I=pe(e,"menu"),a=c({get:()=>I.value,set:l=>{var s;I.value&&!l&&((s=C.value)!=null&&s.ΨopenChildren)||(I.value=l)}}),o=W(-1),g=c(()=>{var l;return(l=h.value)==null?void 0:l.color}),P=c(()=>a.value?e.closeText:e.openText),{items:K,transformIn:ae,transformOut:te}=al(e),{textColorClasses:oe,textColorStyles:ue}=sl(g),p=pe(e,"search",""),d=pe(e,"modelValue",[],l=>ae(l===null?[null]:Fl(l)),l=>{const s=te(l);return e.multiple?s:s[0]??null}),ne=c(()=>typeof e.counterValue=="function"?e.counterValue(d.value):typeof e.counterValue=="number"?e.counterValue:d.value.length),O=ml(),{filteredItems:z,getMatches:re}=dl(e,K,()=>k.value?"":p.value),w=c(()=>e.hideSelected?z.value.filter(l=>!d.value.some(s=>s.value===l.value)):z.value),E=c(()=>!!(e.chips||r.chip)),t=c(()=>E.value||!!r.selection),b=c(()=>d.value.map(l=>l.props.value)),N=c(()=>{var s;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((s=w.value[0])==null?void 0:s.title))&&w.value.length>0&&!k.value&&!q.value}),se=c(()=>e.hideNoData&&!w.value.length||e.readonly||(O==null?void 0:O.isReadonly.value)),ie=j(),{onListScroll:Oe,onListKeydown:Te}=tl(ie,h);function Be(l){e.openOnClear&&(a.value=!0),p.value=""}function Pe(){se.value||(a.value=!0)}function Re(l){se.value||($.value&&(l.preventDefault(),l.stopPropagation()),a.value=!a.value)}function Me(l){var i,m,S;if(e.readonly||O!=null&&O.isReadonly.value)return;const s=h.value.selectionStart,f=d.value.length;if((o.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(a.value=!0),["Escape"].includes(l.key)&&(a.value=!1),N.value&&l.key==="Enter"&&T(w.value[0]),l.key==="ArrowDown"&&N.value&&((i=ie.value)==null||i.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&t.value&&d.value.length>0&&!p.value)return T(d.value[0],!1);if(~o.value){const V=o.value;T(d.value[o.value],!1),o.value=V>=f-1?f-2:V}else l.key==="Backspace"&&!p.value&&(o.value=f-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(o.value<0&&s>0)return;const V=o.value>-1?o.value-1:f-1;d.value[V]?o.value=V:(o.value=-1,h.value.setSelectionRange((m=p.value)==null?void 0:m.length,(S=p.value)==null?void 0:S.length))}if(l.key==="ArrowRight"){if(o.value<0)return;const V=o.value+1;d.value[V]?o.value=V:(o.value=-1,h.value.setSelectionRange(0,0))}}}function Ue(l){if(Ce(h.value,":autofill")||Ce(h.value,":-webkit-autofill")){const s=K.value.find(f=>f.title===l.target.value);s&&T(s)}}function Le(){var l;$.value&&(k.value=!0,(l=h.value)==null||l.focus())}function Ee(l){$.value=!0,setTimeout(()=>{q.value=!0})}function Ne(l){q.value=!1}function He(l){(l==null||l===""&&!e.multiple&&!t.value)&&(d.value=[])}const de=W(!1);function T(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const f=d.value.findIndex(m=>e.valueComparator(m.value,l.value)),i=s??!~f;if(~f){const m=i?[...d.value,l]:[...d.value];m.splice(f,1),d.value=m}else i&&(d.value=[...d.value,l]);e.clearOnSelect&&(p.value="")}else{const f=s!==!1;d.value=f?[l]:[],p.value=f&&!t.value?l.title:"",he(()=>{a.value=!1,k.value=!0})}}return Q($,(l,s)=>{var f;l!==s&&(l?(de.value=!0,p.value=e.multiple||t.value?"":String(((f=d.value.at(-1))==null?void 0:f.props.title)??""),k.value=!0,he(()=>de.value=!1)):(!e.multiple&&p.value==null?d.value=[]:N.value&&!q.value&&!d.value.some(i=>{let{value:m}=i;return m===w.value[0].value})&&T(w.value[0]),a.value=!1,(e.multiple||t.value)&&(p.value=""),o.value=-1))}),Q(p,l=>{!$.value||de.value||(l&&(a.value=!0),k.value=!l)}),Q(a,()=>{if(!e.hideSelected&&a.value&&d.value.length){const l=w.value.findIndex(s=>d.value.some(f=>s.value===f.value));yl&&window.requestAnimationFrame(()=>{var s;l>=0&&((s=L.value)==null||s.scrollToIndex(l))})}}),Q(()=>e.items,(l,s)=>{a.value||$.value&&!s.length&&l.length&&(a.value=!0)}),kl(()=>{const l=!!(!e.hideNoData||w.value.length||r["prepend-item"]||r["append-item"]||r["no-data"]),s=d.value.length>0,f=$e.filterProps(e);return u($e,D({ref:h},f,{modelValue:p.value,"onUpdate:modelValue":[i=>p.value=i,He],focused:$.value,"onUpdate:focused":i=>$.value=i,validationValue:d.externalValue,counterValue:ne.value,dirty:s,onChange:Ue,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":a.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.value,"v-autocomplete--selecting-index":o.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:s?void 0:e.placeholder,"onClick:clear":Be,"onMousedown:control":Pe,onKeydown:Me}),{...r,default:()=>u(M,null,[u(vl,D({ref:C,modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,activator:"parent",contentClass:"v-autocomplete__content",disabled:se.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Le},e.menuProps),{default:()=>[l&&u(ol,D({ref:ie,selected:b.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:Te,onFocusin:Ee,onFocusout:Ne,onScrollPassive:Oe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var i,m,S;return[(i=r["prepend-item"])==null?void 0:i.call(r),!w.value.length&&!e.hideNoData&&(((m=r["no-data"])==null?void 0:m.call(r))??u(Ve,{title:U(e.noDataText)},null)),u(ul,{ref:L,renderless:!0,items:w.value},{default:V=>{var ye;let{item:y,index:R,itemRef:F}=V;const be=D(y.props,{ref:F,key:R,active:N.value&&R===0?!0:void 0,onClick:()=>T(y,null)});return((ye=r.item)==null?void 0:ye.call(r,{item:y,index:R,props:be}))??u(Ve,D(be,{role:"option"}),{prepend:X=>{let{isSelected:Y}=X;return u(M,null,[e.multiple&&!e.hideSelected?u(Qe,{key:y.value,modelValue:Y,ripple:!1,tabindex:"-1"},null):void 0,y.props.prependAvatar&&u(nl,{image:y.props.prependAvatar},null),y.props.prependIcon&&u(ke,{icon:y.props.prependIcon},null)])},title:()=>{var X,Y;return k.value?y.title:Cl(y.title,(X=re(y))==null?void 0:X.title,((Y=p.value)==null?void 0:Y.length)??0)}})}}),(S=r["append-item"])==null?void 0:S.call(r)]}})]}),d.value.map((i,m)=>{function S(F){F.stopPropagation(),F.preventDefault(),T(i,!1)}const V={"onClick:close":S,onKeydown(F){F.key!=="Enter"&&F.key!==" "||(F.preventDefault(),F.stopPropagation(),S(F))},onMousedown(F){F.preventDefault(),F.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},y=E.value?!!r.chip:!!r.selection,R=y?hl(E.value?r.chip({item:i,index:m,props:V}):r.selection({item:i,index:m})):void 0;if(!(y&&!R))return u("div",{key:i.value,class:["v-autocomplete__selection",m===o.value&&["v-autocomplete__selection--selected",oe.value]],style:m===o.value?ue.value:{}},[E.value?r.chip?u(gl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>[R]}):u(rl,D({key:"chip",closable:e.closableChips,size:"small",text:i.title,disabled:i.props.disabled},V),null):R??u("span",{class:"v-autocomplete__selection-text"},[i.title,e.multiple&&m<d.value.length-1&&u("span",{class:"v-autocomplete__selection-comma"},[ce(",")])])])})]),"append-inner":function(){var V;for(var i=arguments.length,m=new Array(i),S=0;S<i;S++)m[S]=arguments[S];return u(M,null,[(V=r["append-inner"])==null?void 0:V.call(r,...m),e.menuIcon?u(ke,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Re,onClick:Sl,"aria-label":U(P.value),title:U(P.value),tabindex:"-1"},null):void 0])}})}),fl({isFocused:$,isPristine:k,menu:a,search:p,filteredItems:z,select:T},h)}});function Al(e,n,r,U,h,$){const k=G("FSLoader"),q=G("FSSearchField"),C=G("FSDialogMenu"),L=G("FSToggleSet"),I=G("FSBaseField");return e.$props.loading?(A(),B(k,{key:0,width:"100%",height:["40px","36px"]})):(A(),me(M,{key:1},[e.isExtraSmall?(A(),me(M,{key:0},[u(qe,D({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,clearable:e.$props.clearable,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.mobileValue,"onUpdate:modelValue":n[0]||(n[0]=a=>e.$emit("update:modelValue",a)),onClick:e.openMobileOverlay,onBlur:n[1]||(n[1]=a=>e.blurred=!0)},e.$attrs),fe({"append-inner":v(()=>[H(e.$slots,"append-inner",{},()=>[u(ee,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[Z(e.$slots,(a,o)=>({name:o,fn:v(g=>[H(e.$slots,o,_(x(g)))])}))]),1040,["label","description","hideHeader","required","clearable","editable","rules","messages","validateOn","validationValue","modelValue","onClick"]),u(C,{modelValue:e.dialog,"onUpdate:modelValue":n[3]||(n[3]=a=>e.dialog=a)},{body:v(()=>[u(q,{modelValue:e.search,"onUpdate:modelValue":n[2]||(n[2]=a=>e.search=a)},null,8,["modelValue"]),u(Ae,{height:e.height},{default:v(()=>[u(De,{gap:"12px"},{default:v(()=>[e.$props.multiple?(A(!0),me(M,{key:0},Z(e.searchItems,(a,o)=>(A(),B(le,{key:o},{default:v(()=>{var g;return[u(ve,{label:a[e.$props.itemTitle],editable:e.$props.editable,modelValue:(g=e.$props.modelValue)==null?void 0:g.includes(a[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(a[e.$props.itemValue])},null,8,["label","editable","modelValue","onUpdate:modelValue"])]}),_:2},1024))),128)):(A(),B(we,{key:1,gap:"12px",values:e.searchItems.map(a=>({value:a[e.$props.itemValue],label:a[e.$props.itemTitle]})),modelValue:e.$props.modelValue,editable:e.$props.editable,"onUpdate:modelValue":e.onRadioChange},null,8,["values","modelValue","editable","onUpdate:modelValue"]))]),_:1})]),_:1},8,["height"])]),_:1},8,["modelValue"])],64)):(A(),B(I,{key:1,label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:v(()=>[e.$props.toggleSet?(A(),B(L,D({key:0,variant:"slide",values:e.$props.items,multiple:e.$props.multiple,rules:e.$props.rules,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),fe({_:2},[Z(e.toggleSetSlots,(a,o)=>({name:o,fn:v(g=>[H(e.$slots,`toggle-set-${o}`,_(x(g)))])}))]),1040,["values","multiple","rules","modelValue","onUpdate:modelValue"])):(A(),B(ql,D({key:1,class:["fs-autocomplete-field",e.classes],variant:"outlined",menuIcon:null,style:e.style,listProps:e.listStyle,hideDetails:!0,items:e.$props.items,autoSelectFirst:!0,multiple:e.$props.multiple,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,loading:e.$props.loading,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,returnObject:e.$props.returnObject,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,onBlur:n[5]||(n[5]=a=>e.blurred=!0),search:e.search,"onUpdate:search":n[6]||(n[6]=a=>e.search=a)},e.$attrs),fe({item:v(({props:a,item:o})=>[u(Ve,_(x({...a,title:""})),{default:v(()=>[u(le,{align:"center-left",wrap:!1},{default:v(()=>{var g;return[e.$props.multiple?(A(),B(ve,{key:0,modelValue:(g=e.$props.modelValue)==null?void 0:g.includes(o.raw[e.$props.itemValue]),onClick:a.onClick},null,8,["modelValue","onClick"])):Se("",!0),u(ge,null,{default:v(()=>[ce(Fe(o.raw[e.$props.itemTitle]),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),clear:v(()=>[H(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(A(),B(ee,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:n[4]||(n[4]=a=>e.$emit("update:modelValue",null))},null,8,["color"])):Se("",!0)])]),"append-inner":v(()=>[H(e.$slots,"append-inner",{},()=>[u(ee,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"no-data":v(()=>[u(le,{padding:"17px"},{default:v(()=>[u(ge,null,{default:v(()=>[ce(Fe(e.$tr("ui.common.no-data","No data")),1)]),_:1})]),_:1})]),_:2},[Z(e.autocompleteSlots,(a,o)=>({name:o,fn:v(g=>[H(e.$slots,`autocomplete-${o}`,_(x(g)))])}))]),1040,["style","listProps","class","items","multiple","itemTitle","itemValue","readonly","loading","clearable","returnObject","rules","validateOn","modelValue","onUpdate:modelValue","search"]))]),_:3},8,["label","description","hideHeader","required","editable","messages"]))],64))}const ra=el(Ie,[["render",Al]]);Ie.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"returnObject",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSet",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"},{name:"`toggle-set-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`autocomplete-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"clear"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};export{ra as F};
