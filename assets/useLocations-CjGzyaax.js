var a=Object.defineProperty;var r=(i,o,t)=>o in i?a(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t;var s=(i,o,t)=>r(i,typeof o!="symbol"?o+"":o,t);import{A as l}from"./address-CE2z3AEI.js";import{C as g}from"./base-XmH0JLOD.js";import{S as I}from"./serviceFactory-DAEdCiSt.js";import{C as e}from"./composableFactory-CG8osPlO.js";class c{constructor(o){s(this,"id");s(this,"organisationId");s(this,"icon");s(this,"code");s(this,"color");s(this,"label");s(this,"tags");s(this,"address");s(this,"modelsIds");s(this,"deviceOrganisationsIds");s(this,"deviceOrganisationsCount");this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.color=o.color,this.label=o.label,this.tags=o.tags.slice(),this.address=new l(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class h extends c{constructor(t){super(t);s(this,"description");this.description=t.description}}const d=()=>`${g()}/locations`,C=i=>`${d()}/${encodeURIComponent(i)}`,n=new I("location",h).createComplete(d,C,c),R=e.get(n),b=e.getMany(n);e.create(n);e.update(n);e.remove(n);export{R as a,b as u};