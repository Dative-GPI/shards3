import{d as b,z as l,A as t,B as u,C as y,N as s,M as V,I as S,m as v,F}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as d}from"./FSRadio-CTi9smel.js";import{F as i}from"./FSCol-DZA6pxA1.js";import{C as q}from"./useColors-DlnF7i6T.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const p=b({name:"FSRadioGroup",components:{FSRadio:d,FSCol:i},props:{gap:{type:[Array,String,Number],required:!1,default:"8px"},values:{type:Array,required:!0,default:null},modelValue:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:q.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){return{isSelected:a=>a==e.modelValue,onToggle:a=>{a!=e.modelValue&&o("update:modelValue",a)}}}});function $(e,o,m,f,a,h){return l(),t(i,{width:"hug",gap:e.$props.gap},{default:u(()=>[(l(!0),y(F,null,s(e.$props.values,(r,c)=>(l(),t(d,{selected:e.isSelected(r.value),description:r.description,editable:e.$props.editable,color:e.$props.color,label:r.label,item:r.item,key:c,modelValue:r.value,"onUpdate:modelValue":e.onToggle},V({_:2},[s(e.$slots,(C,n)=>({name:n,fn:u(g=>[S(e.$slots,n,v({ref_for:!0},g))])}))]),1032,["selected","description","editable","color","label","item","modelValue","onUpdate:modelValue"]))),128))]),_:3},8,["gap"])}const w=_(p,[["render",$]]);p.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"values",type:{name:"{ value: string | boolean | number, label?: string, description?: string, item: any | null }[]"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};export{w as F};
