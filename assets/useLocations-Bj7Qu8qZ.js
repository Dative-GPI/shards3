var a=Object.defineProperty;var r=(i,o,t)=>o in i?a(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t;var s=(i,o,t)=>r(i,typeof o!="symbol"?o+"":o,t);import{A as l}from"./address-CE2z3AEI.js";import{C as g}from"./base-1FyQZYnT.js";import{S as I}from"./serviceFactory-Bd5jifNi.js";import{C as e}from"./composableFactory-wHNy9kQa.js";class n{constructor(o){s(this,"id");s(this,"organisationId");s(this,"icon");s(this,"code");s(this,"color");s(this,"label");s(this,"tags");s(this,"address");s(this,"modelsIds");s(this,"deviceOrganisationsIds");s(this,"deviceOrganisationsCount");this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.color=o.color,this.label=o.label,this.tags=o.tags.slice(),this.address=new l(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class h extends n{constructor(t){super(t);s(this,"description");this.description=t.description}}const c=()=>`${g()}/locations`,C=i=>`${c()}/${encodeURIComponent(i)}`,d=new I("location",h).createComplete(c,C,n),R=e.get(d),b=e.getMany(d);export{R as a,b as u};
