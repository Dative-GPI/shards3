var h=Object.defineProperty;var p=(s,e,i)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var t=(s,e,i)=>p(s,typeof e!="symbol"?e+"":e,i);import{U as g}from"./vue.esm-bundler-l-siv0w9.js";import{P as b}from"./pathCrumb-Db-cq5HI.js";import{C as v}from"./base-BWToAT4M.js";import{S as u}from"./serviceFactory-DAEdCiSt.js";import{C as d}from"./composableFactory-DG8ITK-n.js";class I{constructor(e){t(this,"id");t(this,"organisationId");t(this,"parentId");t(this,"imageId");t(this,"icon");t(this,"code");t(this,"label");t(this,"tags");t(this,"path");t(this,"groupsIds");t(this,"deviceOrganisationsIds");t(this,"modelsIds");t(this,"recursiveGroupsIds");t(this,"recursiveDeviceOrganisationsIds");t(this,"recursiveModelsIds");this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(i=>new b({...i})).sort((i,o)=>o.index-i.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class a extends I{constructor(i){super(i);t(this,"parentIcon");t(this,"parentLabel");this.parentIcon=i.parentIcon,this.parentLabel=i.parentLabel}}const c=()=>`${v()}/groups`,n=s=>`${c()}/${encodeURIComponent(s)}`,r=new u("group",a).create(s=>s.build(s.addGet(n),s.addGetMany(c,I),s.addCreate(c),s.addUpdate(n),s.addRemove(n),s.addNotify(e=>({...u.addCustom("changeParent",(i,o,l)=>i.put(n(o),l),i=>{const o=new a(i);return e.notify("update",o),o})})))),L=()=>{let s=[];return g(()=>{s.forEach(i=>r.unsubscribe(i)),s=[]}),{subscribe:(i,o)=>{s.push(r.subscribe(i,o))}}},P=d.get(r),M=d.getMany(r);d.create(r);d.update(r);d.remove(r);d.custom(r.changeParent);export{P as a,L as b,M as u};
