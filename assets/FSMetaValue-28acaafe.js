import{j as g,e as y,I as M,J as c,K as u,L as i,N as h,U as l,V as m}from"./vue.esm-bundler-7c237656.js";import{u as p}from"./useAppTimeZone-62c4f11c.js";import{P as n}from"./customPropertyEnums-7823143c.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as P}from"./FSIcon-84236a8c.js";var a=(e=>(e[e.None=0]="None",e[e.Equal=1]="Equal",e[e.More=2]="More",e[e.Less=3]="Less",e[e.MoreOrEqual=4]="MoreOrEqual",e[e.LessOrEqual=5]="LessOrEqual",e[e.Different=6]="Different",e[e.Contains=7]="Contains",e[e.StartsWith=8]="StartsWith",e[e.EndsWith=9]="EndsWith",e))(a||{});const{getUserOffsetMillis:N,getMachineOffsetMillis:b}=p(),D=(e,t)=>{if(e.colorful)for(const s of[...e.colorMap].sort((o,r)=>r.priority-o.priority)){let o=[...s.filterValues];switch([n.DateTime].includes(e.dataType)&&(o=o.map(r=>S(r))),s.filterType){case a.None:return s.color;case a.Equal:{if(o.includes(t))return s.color;break}case a.More:{if(!isNaN(parseFloat(t))&&o.some(r=>!isNaN(parseFloat(r))&&parseFloat(r)<parseFloat(t)))return s.color;break}case a.Less:{if(!isNaN(parseFloat(t))&&o.some(r=>!isNaN(parseFloat(r))&&parseFloat(r)>parseFloat(t)))return s.color;break}case a.MoreOrEqual:{if(!isNaN(parseFloat(t))&&o.some(r=>!isNaN(parseFloat(r))&&parseFloat(r)<=parseFloat(t)))return s.color;break}case a.LessOrEqual:{if(!isNaN(parseFloat(t))&&o.some(r=>!isNaN(parseFloat(r))&&parseFloat(r)>=parseFloat(t)))return s.color;break}case a.Different:{if(!o.includes(t))return s.color;break}case a.Contains:{if(o.some(r=>t.includes(r)))return s.color;break}case a.StartsWith:{if(o.some(r=>t.startsWith(r)))return s.color;break}case a.EndsWith:{if(o.some(r=>t.endsWith(r)))return s.color;break}}}},S=e=>{if(!isNaN(parseInt(e)))return e;const t=new Date;if(e.startsWith("now"))e=e.substring(3).replace(/\s/g,"");else return t.getTime().toString();let s=/^(?:(?:([-+])(\d*))?(\w+))?(?:\/(\w))?/g.exec(e);for(;s!=null&&s[0]!=null&&s[0].length>0;){if(s[1]!=null&&s[3]!=null){if(!["-","+"].includes(s[1])||isNaN(parseInt(s[2]))||!["s","m","h","d","w","M","y"].includes(s[3]))return t.getTime().toString();const o=s[1]=="-"?-1*parseInt(s[2]):1*parseInt(s[2]);switch(s[3]){case"s":{t.setSeconds(t.getSeconds()+o);break}case"m":{t.setMinutes(t.getMinutes()+o);break}case"h":{t.setHours(t.getHours()+o);break}case"d":{t.setDate(t.getDate()+o);break}case"w":{t.setDate(t.getDate()+o*7);break}case"M":{t.setMonth(t.getMonth()+o);break}case"y":{t.setFullYear(t.getFullYear()+o);break}}}if(s[4]!=null){if(!["s","m","h","d","w","M","y"].includes(s[4]))return t.getTime().toString();switch(s[4]){case"s":{t.setMilliseconds(0);break}case"m":{t.setMilliseconds(0),t.setSeconds(0);break}case"h":{t.setMilliseconds(0),t.setSeconds(0),t.setMinutes(0);break}case"d":{t.setMilliseconds(0),t.setSeconds(0),t.setMinutes(0),t.setHours(0);break}case"w":{t.setMilliseconds(0),t.setSeconds(0),t.setMinutes(0),t.setHours(0),t.setDate(t.getDate()-t.getDay()+(t.getDay()===0?-6:1));break}case"M":{t.setMilliseconds(0),t.setSeconds(0),t.setMinutes(0),t.setHours(0),t.setDate(1);break}case"y":{t.setMilliseconds(0),t.setSeconds(0),t.setMinutes(0),t.setHours(0),t.setDate(1),t.setMonth(0);break}}}e=e.substring(s[0].length),s=/(?:(?:([-+])(\d*))?(\w+))?(?:\/(\w))?/g.exec(e)}return(t.getTime()+b()-N()).toString()},f=g({name:"FSMetaValue",props:{customProperty:{type:Object,required:!0},meta:{type:Object,required:!0}},setup(e){const{epochToLongTimeFormat:t}=p(),s=y(()=>{var o;if(e.customProperty.useOnlyAllowedValues&&e.customProperty.allowedValues[e.meta[e.customProperty.code]]!=null)return e.customProperty.allowedValues[e.meta[e.customProperty.code]];switch(e.customProperty.dataType){case n.Boolean:return((o=e.meta[e.customProperty.code])==null?void 0:o.toLowerCase())==="true"?"mdi-check-circle-outline":"mdi-close-circle-outline";case n.DateTime:return t(parseInt(e.meta[e.customProperty.code]));default:return e.meta[e.customProperty.code]}});return{PropertyDataType:n,value:s,getColor:D}}});function w(e,t,s,o,r,$){const d=M("FSText");return e.$props.customProperty.useOnlyAllowedValues&&e.$props.customProperty.allowedValues[e.meta[e.$props.customProperty.code]]!=null?(c(),u(d,{key:0,color:e.getColor(e.$props.customProperty,e.meta[e.$props.customProperty.code])},{default:i(()=>[l(m(e.value),1)]),_:1},8,["color"])):[e.PropertyDataType.Number,e.PropertyDataType.String,e.PropertyDataType.DateTime].includes(e.$props.customProperty.dataType)?(c(),u(d,{key:1,color:e.getColor(e.$props.customProperty,e.meta[e.$props.customProperty.code])},{default:i(()=>[l(m(e.value),1)]),_:1},8,["color"])):[e.PropertyDataType.Boolean,e.PropertyDataType.Icon].includes(e.$props.customProperty.dataType)?(c(),u(P,{key:2,color:e.getColor(e.$props.customProperty,e.meta[e.$props.customProperty.code])},{default:i(()=>[l(m(e.value),1)]),_:1},8,["color"])):h("",!0)}const I=k(f,[["render",w]]);f.__docgenInfo={displayName:"FSMetaValue",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"meta",type:{name:"{ [key: string]: string }"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaValue.vue"]};export{I as F,a};
