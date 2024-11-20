import{P as i,b as H,c as b,I as U,j as P,i as ye,Z as he,_ as $e,s as Ie,L as we,t as I,p as Ce,d as ke,A as X,B as w,C as F,E as V,H as B,G as Se,D as E,Q as N,M as L,N as j,O as K,F as z,J as W,K as J}from"./vue.esm-bundler-Zcuj-zyO.js";import{m as Te,d as te,e as qe,f as Fe,V as ie,g as Pe,h as Ae,i as Le,j as Oe,a as ne,F as Be}from"./VList-nN2lrumh.js";import{F as Y}from"./FSTextField-BcsUOOXo.js";import{V as He,F as _}from"./FSCheckbox-CunxM6rm.js";import{_ as fe}from"./FSFadeOut-CeMJmSZZ.js";import{F as Re}from"./FSLoader-CRmsosiO.js";import{_ as x}from"./FSRadio-DnH66ibu.js";import{_ as R}from"./FSSpan-Bb6VK1Ws.js";import{F as ee}from"./FSCol-DLyNVOXQ.js";import{V as Ue}from"./VDefaultsProvider-BGrIgR0V.js";import{p as D,o as ce}from"./theme-DppimMvq.js";import{m as De,g as G,a as Z,p as Ge}from"./color-mm3JSYKM.js";import{u as Me}from"./density-DMrbDfgW.js";import{a as Ee,I as Ne}from"./VIcon-DsLd3bsf.js";import{u as je}from"./router-DnAkll3L.js";import{g as Ke}from"./border-C0mvfulf.js";import{V as se}from"./VBtn-CKg6JYm3.js";import{V as re}from"./VProgressCircular-B73DQeX0.js";import{m as ze,u as We}from"./filter-DiySb8XN.js";import{u as ue}from"./proxiedModel-Xz4IZg0a.js";import{u as Je}from"./useRules-CvuqAlPS.js";import{u as Qe}from"./useBreakpoints-IB1lZo1P.js";import{u as Ze,C as Xe}from"./useColors-Cz5tOQmp.js";import{u as Ye}from"./useSlots-DzOFTavN.js";import{_ as _e}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as xe}from"./VMenu-C3kJxa_y.js";const el=D({start:Boolean,end:Boolean,...De(),...Ee()},"VListItemAction"),oe=G()({name:"VListItemAction",props:el(),setup(e,r){let{slots:g}=r;return Z(()=>i(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},g)),{}}}),ll=D({...ce(Te({collapseIcon:"$treeviewCollapse",expandIcon:"$treeviewExpand"}),["subgroup"])},"VTreeviewGroup"),de=G()({name:"VTreeviewGroup",props:ll(),setup(e,r){let{slots:g}=r;const a=H(),h=b(()=>{var f;return(f=a.value)!=null&&f.isOpen?e.collapseIcon:e.expandIcon}),$=b(()=>{var f;return{VTreeviewItem:{prependIcon:void 0,appendIcon:void 0,active:(f=a.value)==null?void 0:f.isOpen,toggleIcon:h.value}}});return Z(()=>{const f=te.filterProps(e);return i(te,P(f,{ref:a,class:["v-treeview-group",e.class],subgroup:!0}),{...g,activator:g.activator?c=>i(U,null,[i(Ue,{defaults:$.value},{default:()=>{var v;return[(v=g.activator)==null?void 0:v.call(g,c)]}})]):void 0})}),{}}}),pe=Symbol.for("vuetify:v-treeview"),al=D({loading:Boolean,toggleIcon:Ne,...qe({slim:!0})},"VTreeviewItem"),me=G()({name:"VTreeviewItem",props:al(),setup(e,r){let{attrs:g,slots:a,emit:h}=r;const $=je(e,g),f=b(()=>e.value===void 0?$.href.value:e.value),c=H(),{activate:v,isActivated:l,select:s,isSelected:n,isIndeterminate:y,isGroupActivator:C,root:k,id:S}=Fe(f,!1),T=b(()=>k.activatable.value&&C),{densityClasses:A}=Me(e,"v-list-item"),d=b(()=>({isActive:l.value,select:s,isSelected:n.value,isIndeterminate:y.value})),u=b(()=>{var p;return!e.disabled&&e.link!==!1&&(e.link||$.isClickable.value||e.value!=null&&!!((p=c.value)!=null&&p.list))});function m(p){var q,M;!u.value||!T.value&&C||k.activatable.value&&(T.value?v(!l.value,p):(M=c.value)==null||M.activate(!((q=c.value)!=null&&q.isActivated),p))}function t(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),m(p))}const o=ye(pe,{visibleIds:H()}).visibleIds;return Z(()=>{var le;const p=a.title||e.title!=null,q=a.subtitle||e.subtitle!=null,M=ie.filterProps(e),be=a.prepend||e.toggleIcon;return T.value?he(i("div",{class:["v-list-item","v-list-item--one-line","v-treeview-item","v-treeview-item--activetable-group-activator",{"v-list-item--active":l.value||n.value,"v-treeview-item--filtered":o.value&&!o.value.has(S.value)},A.value,e.class],onClick:m},[i(U,null,[Ke(l.value||n.value,"v-list-item"),e.toggleIcon&&i(oe,{start:!1},{default:()=>[i(se,{density:"compact",icon:e.toggleIcon,loading:e.loading,variant:"text",onClick:e.onClick},{loader(){return i(re,{indeterminate:"disable-shrink",size:"20",width:"2"},null)}})]})]),i("div",{class:"v-list-item__content","data-no-activator":""},[p&&i(Pe,{key:"title"},{default:()=>{var O;return[((O=a.title)==null?void 0:O.call(a,{title:e.title}))??e.title]}}),q&&i(Ae,{key:"subtitle"},{default:()=>{var O;return[((O=a.subtitle)==null?void 0:O.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(le=a.default)==null?void 0:le.call(a,d.value)])]),[[$e("ripple"),u.value&&e.ripple]]):i(ie,P({ref:c},M,{class:["v-treeview-item",{"v-treeview-item--filtered":o.value&&!o.value.has(S.value)},e.class],value:S.value,onClick:m,onKeydown:u.value&&t}),{...a,prepend:be?O=>{var ae;return i(U,null,[e.toggleIcon&&i(oe,{start:!1},{default:()=>[i(se,{density:"compact",icon:e.toggleIcon,loading:e.loading,variant:"text"},{loader(){return i(re,{indeterminate:"disable-shrink",size:"20",width:"2"},null)}})]}),(ae=a.prepend)==null?void 0:ae.call(a,O)])}:void 0})}),{}}}),ve=D({loadChildren:Function,loadingIcon:{type:String,default:"$loading"},items:Array,selectable:Boolean,selectStrategy:[String,Function,Object]},"VTreeviewChildren"),Q=G()({name:"VTreeviewChildren",props:ve(),setup(e,r){let{emit:g,slots:a}=r;const h=Ie(null);function $(c){return new Promise(v=>{var l,s;if(!((l=e.items)!=null&&l.length)||!e.loadChildren)return v();if(((s=c==null?void 0:c.children)==null?void 0:s.length)===0){h.value=c.value,e.loadChildren(c).then(v);return}v()}).finally(()=>{h.value=null})}function f(c,v){e.selectable&&c(!v)}return()=>{var c,v;return((c=a.default)==null?void 0:c.call(a))??((v=e.items)==null?void 0:v.map(l=>{var A;let{children:s,props:n,raw:y}=l;const C=h.value===y.value,k={prepend:d=>{var u;return i(U,null,[e.selectable&&(!s||s&&!["leaf","single-leaf"].includes(e.selectStrategy))&&i("div",null,[i(He,{key:y.value,modelValue:d.isSelected,loading:C,indeterminate:d.isIndeterminate,onClick:we(()=>f(d.select,d.isSelected),["stop"]),onKeydown:m=>{["Enter","Space"].includes(m.key)&&(m.stopPropagation(),f(d.select,d.isSelected))}},null)]),(u=a.prepend)==null?void 0:u.call(a,{...d,item:y})])},append:a.append?d=>{var u;return(u=a.append)==null?void 0:u.call(a,{...d,item:y})}:void 0,title:a.title?d=>{var u;return(u=a.title)==null?void 0:u.call(a,{...d,item:y})}:void 0},S=de.filterProps(n),T=Q.filterProps(e);return s?i(de,P({value:n==null?void 0:n.value},S),{activator:d=>{let{props:u}=d;const m={...n,...u,value:n==null?void 0:n.value};return i(me,P(m,{loading:C,onClick:()=>$(y)}),k)},default:()=>i(Q,P(T,{items:s}),a)}):((A=a.item)==null?void 0:A.call(a,{props:n}))??i(me,n,k)}))}}});function Ve(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];for(const g of e)r.push(g),g.children&&Ve(g.children,r);return r}const tl=D({openAll:Boolean,search:String,...ze({filterKeys:["title"]}),...ve(),...ce(Le({collapseIcon:"$treeviewCollapse",expandIcon:"$treeviewExpand",slim:!0}),["itemType","nav"])},"VTreeview"),il=G()({name:"VTreeview",props:tl(),emits:{"update:opened":e=>!0,"update:activated":e=>!0,"update:selected":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,r){let{slots:g}=r;const{items:a}=Oe(e),h=I(e,"activeColor"),$=I(e,"baseColor"),f=I(e,"color"),c=ue(e,"activated"),v=ue(e,"selected"),l=H(),s=b(()=>e.openAll?A(a.value):e.opened),n=b(()=>Ve(a.value)),y=I(e,"search"),{filteredItems:C}=We(e,n,y),k=b(()=>y.value?new Set(C.value.flatMap(d=>[...S(d.props.value),...T(d.props.value)])):null);function S(d){var t;const u=[];let m=d;for(;m!=null;)u.unshift(m),m=(t=l.value)==null?void 0:t.parents.get(m);return u}function T(d){var t,o;const u=[],m=(((t=l.value)==null?void 0:t.children.get(d))??[]).slice();for(;m.length;){const p=m.shift();p&&(u.push(p),m.push(...(((o=l.value)==null?void 0:o.children.get(p))??[]).slice()))}return u}function A(d){let u=[];for(const m of d)m.children&&(u.push(m.value),m.children&&(u=u.concat(A(m.children))));return u}return Ce(pe,{visibleIds:k}),Ge({VTreeviewGroup:{activeColor:h,baseColor:$,color:f,collapseIcon:I(e,"collapseIcon"),expandIcon:I(e,"expandIcon")},VTreeviewItem:{activeClass:I(e,"activeClass"),activeColor:h,baseColor:$,color:f,density:I(e,"density"),disabled:I(e,"disabled"),lines:I(e,"lines"),variant:I(e,"variant")}}),Z(()=>{const d=ne.filterProps(e),u=Q.filterProps(e);return i(ne,P({ref:l},d,{class:["v-treeview",e.class],style:e.style,opened:s.value,activated:c.value,"onUpdate:activated":m=>c.value=m,selected:v.value,"onUpdate:selected":m=>v.value=m}),{default:()=>[i(Q,P(u,{items:a.value}),g)]})}),{}}}),ge=ke({name:"FSTreeViewField",components:{VTreeview:il,FSDialogMenu:Be,FSTextField:Y,FSCheckbox:_,FSFadeOut:fe,FSLoader:Re,FSRadio:x,FSSpan:R,FSCol:ee},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},itemParent:{type:String,required:!1,default:"parentId"},exclude:{type:Array,required:!1,default:()=>[]},modelValue:{type:[Array,String,Number],required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:g,getMessages:a}=Je(),{isExtraSmall:h}=Qe(),{getColors:$}=Ze(),{slots:f}=Ye();delete f.label,delete f.description,delete f["menu-prepend"];const c=$(Xe.Background),v=H(!1),l=H(!1),s=b(()=>e.editable?{"--fs-tree-view-field-cursor":"pointer","--fs-tree-view-field-background-color":c.base}:{"--fs-tree-view-field-cursor":"default"}),n=b(()=>e.messages??a(e.modelValue,e.rules)),y=b(()=>"calc(100vh - 40px - 16px)"),C=b(()=>Object.keys(f).filter(t=>!t.startsWith("menu-")).reduce((t,o)=>(t[o]=f[o],t),{})),k=b(()=>Object.keys(f).filter(t=>t.startsWith("menu-")).reduce((t,o)=>(t[o.substring(5)]=f[o],t),{})),S=b(()=>{if(e.multiple&&Array.isArray(e.modelValue))return e.modelValue.map(t=>{const o=e.items.find(p=>p[e.itemValue]===t);if(o)return o[e.itemTitle]}).filter(t=>!!t).join(", ");if(e.modelValue){const t=e.items.find(o=>o[e.itemValue]===e.modelValue);if(t)return t[e.itemTitle]}return null}),T=b(()=>{const t=p=>e.items.filter(q=>e.exclude.includes(q[e.itemValue])?!1:q[e.itemParent]==p),o=p=>e.items.some(q=>q[e.itemParent]===p[e.itemValue])?{...p,children:t(p[e.itemValue]).map(o)}:p;return t(null).map(o)});return{isExtraSmall:h,innerValue:S,fieldSlots:C,validateOn:g,maxHeight:y,menuSlots:k,treeItems:T,messages:n,dialog:v,style:s,menu:l,openMobileOverlay:()=>{e.editable&&(v.value=!0)},onCheckboxChange:t=>{Array.isArray(e.modelValue)?e.modelValue.includes(t)?r("update:modelValue",e.modelValue.filter(o=>o!==t)):r("update:modelValue",[...e.modelValue,t]):e.modelValue!=null?e.modelValue===t?r("update:modelValue",[]):r("update:modelValue",[e.modelValue,t]):r("update:modelValue",[t])},onRadioChange:t=>{r("update:modelValue",t),v.value=!1,l.value=!1},listItemClass:t=>{const o=[];return e.multiple&&Array.isArray(e.modelValue)?e.modelValue.includes(t)&&o.push("fs-tree-view-item-selected"):e.modelValue===t&&o.push("fs-tree-view-item-selected"),o}}}});function nl(e,r,g,a,h,$){const f=X("FSLoader"),c=X("v-treeview"),v=X("FSDialogMenu");return e.$props.loading?(w(),F(ee,{key:0},{default:V(()=>[e.$props.hideHeader?B("",!0):(w(),F(f,{key:0,variant:"text-overline"})),e.$props.loading?(w(),F(f,{key:1,width:"100%",height:["40px","36px"]})):B("",!0)]),_:1})):(w(),F(ee,{key:1},{default:V(()=>[e.isExtraSmall?(w(),Se(U,{key:0},[i(Y,P({class:"fs-tree-view-field",validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,validateOn:e.validateOn,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,style:e.style,modelValue:e.innerValue,"onUpdate:modelValue":r[0]||(r[0]=l=>e.$emit("update:modelValue",l)),onClick:e.openMobileOverlay},e.$attrs),E({_:2},[N(e.fieldSlots,(l,s)=>({name:s,fn:V(n=>[L(e.$slots,s,j(K(n)))])}))]),1040,["validationValue","description","hideHeader","clearable","editable","required","validateOn","label","rules","messages","style","modelValue","onClick"]),i(v,{modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=l=>e.dialog=l)},{body:V(()=>[i(fe,{maxHeight:e.maxHeight},{default:V(()=>[i(c,{itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,items:e.treeItems},E({prepend:V(({item:l})=>{var s;return[e.$props.multiple?(w(),F(_,{key:0,class:z(e.listItemClass(l[e.$props.itemValue])),editable:e.$props.editable,modelValue:(s=e.$props.modelValue)==null?void 0:s.includes(l[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(l[e.$props.itemValue])},{label:V(({font:n})=>[L(e.$slots,"menu-prepend",{item:l}),i(R,{font:n},{default:V(()=>[W(J(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["class","editable","modelValue","onUpdate:modelValue"])):B("",!0),e.$props.multiple?B("",!0):(w(),F(x,{key:1,selected:e.$props.modelValue===l[e.$props.itemValue],class:z(e.listItemClass(l[e.$props.itemValue])),editable:e.$props.editable,modelValue:l[e.$props.itemValue],"onUpdate:modelValue":e.onRadioChange},{label:V(({font:n})=>[L(e.$slots,"menu-prepend",{item:l}),i(R,{font:n},{default:V(()=>[W(J(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["selected","class","editable","modelValue","onUpdate:modelValue"]))]}),title:V(()=>[]),_:2},[N(e.menuSlots,(l,s)=>({name:s,fn:V(n=>[L(e.$slots,s,j(K(n)))])}))]),1032,["itemTitle","itemValue","items"])]),_:3},8,["maxHeight"])]),_:3},8,["modelValue"])],64)):(w(),F(xe,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=l=>e.menu=l)},{activator:V(({props:l})=>[i(Y,P({class:"fs-tree-view-field",validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,validateOn:e.validateOn,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,style:e.style,modelValue:e.innerValue,"onUpdate:modelValue":r[2]||(r[2]=s=>e.$emit("update:modelValue",s))},{...e.$attrs,...l}),E({_:2},[N(e.fieldSlots,(s,n)=>({name:n,fn:V(y=>[L(e.$slots,n,j(K(y)))])}))]),1040,["validationValue","description","hideHeader","clearable","editable","required","validateOn","label","rules","messages","style","modelValue"])]),default:V(()=>[i(c,{itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,items:e.treeItems},E({prepend:V(({item:l})=>{var s;return[e.$props.multiple?(w(),F(_,{key:0,class:z(e.listItemClass(l[e.$props.itemValue])),editable:e.$props.editable,modelValue:(s=e.$props.modelValue)==null?void 0:s.includes(l[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(l[e.$props.itemValue])},{label:V(({font:n})=>[L(e.$slots,"menu-prepend",{item:l}),i(R,{font:n},{default:V(()=>[W(J(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["class","editable","modelValue","onUpdate:modelValue"])):B("",!0),e.$props.multiple?B("",!0):(w(),F(x,{key:1,selected:e.$props.modelValue===l[e.$props.itemValue],class:z(e.listItemClass(l[e.$props.itemValue])),editable:e.$props.editable,modelValue:l[e.$props.itemValue],"onUpdate:modelValue":e.onRadioChange},{label:V(({font:n})=>[L(e.$slots,"menu-prepend",{item:l}),i(R,{font:n},{default:V(()=>[W(J(l[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["selected","class","editable","modelValue","onUpdate:modelValue"]))]}),title:V(()=>[]),_:2},[N(e.menuSlots,(l,s)=>({name:s,fn:V(n=>[L(e.$slots,s,j(K(n)))])}))]),1032,["itemTitle","itemValue","items"])]),_:3},8,["modelValue"]))]),_:3}))}const Ll=_e(ge,[["render",nl]]);ge.__docgenInfo={displayName:"FSTreeViewField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"itemParent",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"parentId"'}},{name:"exclude",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"(string | number)[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"menu-prepend",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTreeViewField.vue"]};export{Ll as F};
