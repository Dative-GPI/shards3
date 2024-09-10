import{L as u,b as A,c as $,F as x,m as T,i as fe,s as ee,t as k,w as pe,p as ce,d as ve,y as J,z as S,A as q,B as c,D as L,C as Ve,M as G,N as M,I as F,J as D,K as E,P as N,E as j,G as z}from"./vue.esm-bundler-BSyvBTC9.js";import{F as ge}from"./FSDialogMenu-BULt7rkH.js";import{F as X}from"./FSTextField-BKDOMXYp.js";import{V as be,F as Y}from"./FSCheckbox-VrXx14Lw.js";import{F as ie}from"./FSFadeOut-D96pvLZm.js";import{F as ye}from"./FSLoader-CtbqJzfZ.js";import{_ as Z}from"./FSRadio-BDiw7DXd.js";import{_ as O}from"./FSSpan-CCGpb4KF.js";import{_}from"./FSCol-YmDykHL-.js";import{m as he,c as le,d as $e,V as ae,e as Ce,f as we,a as te}from"./VList-BSxk2mkg.js";import{V as Ie}from"./VDefaultsProvider-YWdCRIjF.js";import{p as U,o as se}from"./theme-D4rXHj3O.js";import{m as ke,g as R,a as W,p as Se}from"./color-BygXFKwQ.js";import{I as qe}from"./VIcon-BIpY_noq.js";import{u as Te}from"./router-D2IrSaAD.js";import{a as Fe}from"./tag-DB5D_XjQ.js";import{V as Pe}from"./VBtn-CC1p3R0h.js";import{V as Le}from"./VProgressCircular-Dh9H7lZx.js";import{m as Ae,u as Be}from"./filter-DuGNEgHB.js";import{u as Q}from"./proxiedModel-Bq4wip6p.js";import{u as Oe}from"./useRules-B3HKjmia.js";import{u as Ue}from"./css-DLfrm0pR.js";import{u as Re,C as He}from"./useColors-DlnF7i6T.js";import{u as Ge}from"./useSlots-P12pG1X5.js";import{_ as Me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as De}from"./VMenu-BVgNprPc.js";const Ee=U({start:Boolean,end:Boolean,...ke(),...Fe()},"VListItemAction"),Ne=R()({name:"VListItemAction",props:Ee(),setup(e,r){let{slots:V}=r;return W(()=>u(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},V)),{}}}),je=U({...se(he({collapseIcon:"$treeviewCollapse",expandIcon:"$treeviewExpand"}),["subgroup"])},"VTreeviewGroup"),ne=R()({name:"VTreeviewGroup",props:je(),setup(e,r){let{slots:V}=r;const t=A(),y=$(()=>{var d;return(d=t.value)!=null&&d.isOpen?e.collapseIcon:e.expandIcon}),h=$(()=>{var d;return{VTreeviewItem:{prependIcon:void 0,appendIcon:void 0,active:(d=t.value)==null?void 0:d.isOpen,toggleIcon:y.value}}});return W(()=>{const d=le.filterProps(e);return u(le,T(d,{ref:t,class:["v-treeview-group",e.class],subgroup:!0}),{...V,activator:V.activator?g=>u(x,null,[u(Ie,{defaults:h.value},{default:()=>{var v;return[(v=V.activator)==null?void 0:v.call(V,g)]}})]):void 0})}),{}}}),oe=Symbol.for("vuetify:v-treeview"),ze=U({loading:Boolean,toggleIcon:qe,...$e({slim:!0})},"VTreeviewItem"),re=R()({name:"VTreeviewItem",props:ze(),setup(e,r){let{attrs:V,slots:t,emit:y}=r;const h=Te(e,V),d=$(()=>e.value===void 0?h.href.value:e.value),g=A(),v=$(()=>{var s;return!e.disabled&&e.link!==!1&&(e.link||h.isClickable.value||e.value!=null&&!!((s=g.value)!=null&&s.list))});function l(s){var b,w,I;!((b=g.value)!=null&&b.isGroupActivator)||!v.value||e.value!=null&&((I=g.value)==null||I.select(!((w=g.value)!=null&&w.isSelected),s))}function n(s){(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),l(s))}const i=fe(oe,{visibleIds:A()}).visibleIds;return W(()=>{const s=ae.filterProps(e),b=t.prepend||e.toggleIcon;return u(ae,T({ref:g},s,{class:["v-treeview-item",{"v-treeview-item--filtered":i.value&&!i.value.has(d.value)},e.class],onClick:l,onKeydown:v.value&&n}),{...t,prepend:b?w=>{var I;return u(x,null,[e.toggleIcon&&u(Ne,{start:!1},{default:()=>[u(Pe,{density:"compact",icon:e.toggleIcon,loading:e.loading,variant:"text"},{loader(){return u(Le,{indeterminate:"disable-shrink",size:"20",width:"2"},null)}})]}),(I=t.prepend)==null?void 0:I.call(t,w)])}:void 0})}),{}}}),ue=U({loadChildren:Function,loadingIcon:{type:String,default:"$loading"},items:Array,selectable:Boolean},"VTreeviewChildren"),K=R()({name:"VTreeviewChildren",props:ue(),setup(e,r){let{emit:V,slots:t}=r;const y=ee(!1),h=ee(!1);function d(v){return new Promise(l=>{var n;if(!((n=e.items)!=null&&n.length)||!e.loadChildren||h.value)return l();y.value=!0,e.loadChildren(v).then(l)}).then(()=>{h.value=!0}).finally(()=>{y.value=!1})}function g(v,l){v.stopPropagation(),d(l)}return()=>{var v,l;return((v=t.default)==null?void 0:v.call(t))??((l=e.items)==null?void 0:l.map(n=>{var P;let{children:i,props:s,raw:b}=n;const w={prepend:t.prepend?f=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...f,item:b})}:e.selectable?f=>{let{isSelected:o,isIndeterminate:m}=f;return u(be,{key:b.value,tabindex:"-1",modelValue:o,loading:y.value,indeterminate:m,onClick:a=>g(a,b)},null)}:void 0,append:t.append?f=>{var o;return(o=t.append)==null?void 0:o.call(t,{...f,item:b})}:void 0,title:t.title?f=>{var o;return(o=t.title)==null?void 0:o.call(t,{...f,item:b})}:void 0},I=ne.filterProps(s),B=K.filterProps(e);return i?u(ne,T({value:s==null?void 0:s.value},I),{activator:f=>{let{props:o}=f;return u(re,T(s,o,{loading:y.value,onClick:m=>g(m,b)}),w)},default:()=>u(K,T(B,{items:i}),t)}):((P=t.item)==null?void 0:P.call(t,{props:s}))??u(re,s,w)}))}}});function de(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];for(const V of e)r.push(V),V.children&&de(V.children,r);return r}const Ke=U({openAll:Boolean,search:String,...Ae({filterKeys:["title"]}),...ue(),...se(Ce({collapseIcon:"$treeviewCollapse",expandIcon:"$treeviewExpand",selectStrategy:"independent",openStrategy:"multiple",slim:!0}),["nav"])},"VTreeview"),We=R()({name:"VTreeview",props:Ke(),emits:{"update:opened":e=>!0,"update:activated":e=>!0,"update:selected":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,r){let{slots:V}=r;const{items:t}=we(e),y=k(e,"activeColor"),h=k(e,"baseColor"),d=k(e,"color"),g=Q(e,"opened"),v=Q(e,"activated"),l=Q(e,"selected"),n=A(),i=$(()=>de(t.value)),s=k(e,"search"),{filteredItems:b}=Be(e,i,s),w=$(()=>s.value?new Set(b.value.flatMap(f=>[...I(f.props.value),...B(f.props.value)])):null);function I(f){var a;const o=[];let m=f;for(;m!=null;)o.unshift(m),m=(a=n.value)==null?void 0:a.parents.get(m);return o}function B(f){var a,p;const o=[],m=(((a=n.value)==null?void 0:a.children.get(f))??[]).slice();for(;m.length;){const C=m.shift();C&&(o.push(C),m.push(...(((p=n.value)==null?void 0:p.children.get(C))??[]).slice()))}return o}pe(()=>e.openAll,f=>{g.value=f?P(t.value):[]},{immediate:!0});function P(f){let o=[];for(const m of f)m.children&&(o.push(m.value),m.children&&(o=o.concat(P(m.children))));return o}return ce(oe,{visibleIds:w}),Se({VTreeviewGroup:{activeColor:y,baseColor:h,color:d,collapseIcon:k(e,"collapseIcon"),expandIcon:k(e,"expandIcon")},VTreeviewItem:{activeClass:k(e,"activeClass"),activeColor:y,baseColor:h,color:d,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),variant:k(e,"variant")}}),W(()=>{const f=te.filterProps(e),o=K.filterProps(e);return u(te,T({ref:n},f,{class:["v-treeview",e.class],style:e.style,opened:g.value,"onUpdate:opened":m=>g.value=m,activated:v.value,"onUpdate:activated":m=>v.value=m,selected:l.value,"onUpdate:selected":m=>l.value=m}),{default:()=>[u(K,T(o,{items:t.value}),V)]})}),{open}}}),me=ve({name:"FSTreeViewField",components:{VTreeview:We,FSDialogMenu:ge,FSTextField:X,FSCheckbox:Y,FSFadeOut:ie,FSLoader:ye,FSRadio:Z,FSSpan:O,FSCol:_},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},itemParent:{type:String,required:!1,default:"parentId"},exclude:{type:Array,required:!1,default:()=>[]},modelValue:{type:[Array,String,Number],required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:V,getMessages:t}=Oe(),{isExtraSmall:y}=Ue(),{getColors:h}=Re(),{slots:d}=Ge();delete d.label,delete d.description,delete d["menu-prepend"];const g=h(He.Background),v=A(!1),l=A(!1),n=$(()=>e.editable?{"--fs-tree-view-field-cursor":"pointer","--fs-tree-view-field-background-color":g.base}:{"--fs-tree-view-field-cursor":"default"}),i=$(()=>e.messages??t(e.modelValue,e.rules)),s=$(()=>"calc(100vh - 40px - 16px)"),b=$(()=>Object.keys(d).filter(a=>!a.startsWith("menu-")).reduce((a,p)=>(a[p]=d[p],a),{})),w=$(()=>Object.keys(d).filter(a=>a.startsWith("menu-")).reduce((a,p)=>(a[p.substring(5)]=d[p],a),{})),I=$(()=>{if(e.multiple&&Array.isArray(e.modelValue))return e.modelValue.map(a=>{const p=e.items.find(C=>C[e.itemValue]===a);if(p)return p[e.itemTitle]}).filter(a=>!!a).join(", ");if(e.modelValue){const a=e.items.find(p=>p[e.itemValue]===e.modelValue);if(a)return a[e.itemTitle]}return null}),B=$(()=>{const a=C=>e.items.filter(H=>e.exclude.includes(H[e.itemValue])?!1:H[e.itemParent]==C),p=C=>e.items.some(H=>H[e.itemParent]===C[e.itemValue])?{...C,children:a(C[e.itemValue]).map(p)}:C;return a(null).map(p)});return{isExtraSmall:y,innerValue:I,fieldSlots:b,validateOn:V,maxHeight:s,menuSlots:w,treeItems:B,messages:i,dialog:v,style:n,menu:l,openMobileOverlay:()=>{e.editable&&(v.value=!0)},onCheckboxChange:a=>{Array.isArray(e.modelValue)?e.modelValue.includes(a)?r("update:modelValue",e.modelValue.filter(p=>p!==a)):r("update:modelValue",[...e.modelValue,a]):e.modelValue!=null?e.modelValue===a?r("update:modelValue",[]):r("update:modelValue",[e.modelValue,a]):r("update:modelValue",[a])},onRadioChange:a=>{r("update:modelValue",a),v.value=!1,l.value=!1},listItemClass:a=>{const p=[];return e.multiple&&Array.isArray(e.modelValue)?e.modelValue.includes(a)&&p.push("fs-tree-view-item-selected"):e.modelValue===a&&p.push("fs-tree-view-item-selected"),p}}}});function Je(e,r,V,t,y,h){const d=J("FSLoader"),g=J("v-treeview"),v=J("FSDialogMenu");return e.$props.loading?(S(),q(_,{key:0},{default:c(()=>[e.$props.hideHeader?L("",!0):(S(),q(d,{key:0,variant:"text-overline"})),e.$props.loading?(S(),q(d,{key:1,width:"100%",height:["40px","36px"]})):L("",!0)]),_:1})):(S(),q(_,{key:1},{default:c(()=>[e.isExtraSmall?(S(),Ve(x,{key:0},[u(X,T({class:"fs-tree-view-field",validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,validateOn:e.validateOn,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,style:e.style,modelValue:e.innerValue,"onUpdate:modelValue":r[0]||(r[0]=l=>e.$emit("update:modelValue",l)),onClick:e.openMobileOverlay},e.$attrs),G({_:2},[M(e.fieldSlots,(l,n)=>({name:n,fn:c(i=>[F(e.$slots,n,D(E(i)))])}))]),1040,["validationValue","description","hideHeader","clearable","editable","required","validateOn","label","rules","messages","style","modelValue","onClick"]),u(v,{modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=l=>e.dialog=l)},{body:c(()=>[u(ie,{maxHeight:e.maxHeight},{default:c(()=>[u(g,{itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,items:e.treeItems},G({prepend:c(({item:l})=>{var n;return[e.$props.multiple?(S(),q(Y,{key:0,class:N(e.listItemClass(l[e.$props.itemValue])),editable:e.$props.editable,modelValue:(n=e.$props.modelValue)==null?void 0:n.includes(l[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(l[e.$props.itemValue])},{label:c(({font:i})=>[F(e.$slots,"menu-prepend",{item:l}),u(O,{font:i},{default:c(()=>[j(z(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["class","editable","modelValue","onUpdate:modelValue"])):L("",!0),e.$props.multiple?L("",!0):(S(),q(Z,{key:1,selected:e.$props.modelValue===l[e.$props.itemValue],class:N(e.listItemClass(l[e.$props.itemValue])),editable:e.$props.editable,modelValue:l[e.$props.itemValue],"onUpdate:modelValue":e.onRadioChange},{label:c(({font:i})=>[F(e.$slots,"menu-prepend",{item:l}),u(O,{font:i},{default:c(()=>[j(z(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["selected","class","editable","modelValue","onUpdate:modelValue"]))]}),title:c(()=>[]),_:2},[M(e.menuSlots,(l,n)=>({name:n,fn:c(i=>[F(e.$slots,n,D(E(i)))])}))]),1032,["itemTitle","itemValue","items"])]),_:3},8,["maxHeight"])]),_:3},8,["modelValue"])],64)):(S(),q(De,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=l=>e.menu=l)},{activator:c(({props:l})=>[u(X,T({class:"fs-tree-view-field",validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,validateOn:e.validateOn,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,style:e.style,modelValue:e.innerValue,"onUpdate:modelValue":r[2]||(r[2]=n=>e.$emit("update:modelValue",n))},{...e.$attrs,...l}),G({_:2},[M(e.fieldSlots,(n,i)=>({name:i,fn:c(s=>[F(e.$slots,i,D(E(s)))])}))]),1040,["validationValue","description","hideHeader","clearable","editable","required","validateOn","label","rules","messages","style","modelValue"])]),default:c(()=>[u(g,{itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,items:e.treeItems},G({prepend:c(({item:l})=>{var n;return[e.$props.multiple?(S(),q(Y,{key:0,class:N(e.listItemClass(l[e.$props.itemValue])),editable:e.$props.editable,modelValue:(n=e.$props.modelValue)==null?void 0:n.includes(l[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(l[e.$props.itemValue])},{label:c(({font:i})=>[F(e.$slots,"menu-prepend",{item:l}),u(O,{font:i},{default:c(()=>[j(z(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["class","editable","modelValue","onUpdate:modelValue"])):L("",!0),e.$props.multiple?L("",!0):(S(),q(Z,{key:1,selected:e.$props.modelValue===l[e.$props.itemValue],class:N(e.listItemClass(l[e.$props.itemValue])),editable:e.$props.editable,modelValue:l[e.$props.itemValue],"onUpdate:modelValue":e.onRadioChange},{label:c(({font:i})=>[F(e.$slots,"menu-prepend",{item:l}),u(O,{font:i},{default:c(()=>[j(z(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["selected","class","editable","modelValue","onUpdate:modelValue"]))]}),title:c(()=>[]),_:2},[M(e.menuSlots,(l,n)=>({name:n,fn:c(i=>[F(e.$slots,n,D(E(i)))])}))]),1032,["itemTitle","itemValue","items"])]),_:3},8,["modelValue"]))]),_:3}))}const hl=Me(me,[["render",Je]]);me.__docgenInfo={displayName:"FSTreeViewField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"itemParent",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"parentId"'}},{name:"exclude",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"(string | number)[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"menu-prepend",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTreeViewField.vue"]};export{hl as F};
