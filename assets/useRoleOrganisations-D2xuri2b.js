var a=Object.defineProperty;var l=(s,o,i)=>o in s?a(s,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[o]=i;var e=(s,o,i)=>l(s,typeof o!="symbol"?o+"":o,i);import{P as d}from"./permissionInfos-BPDgTHQl.js";import{C as g}from"./base-LOOo-Z1R.js";import{S as p}from"./serviceFactory-DAEdCiSt.js";import{C as t}from"./composableFactory-CNptecSH.js";class r{constructor(o){e(this,"id");e(this,"roleId");e(this,"organisationId");e(this,"scope");e(this,"userType");e(this,"icon");e(this,"code");e(this,"label");e(this,"tags");e(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.scope=o.scope,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(i=>new d(i))}}class I extends r{constructor(i){super(i);e(this,"description");this.description=i.description}}const c=()=>`${g()}/role-organisations`,R=s=>`${c()}/${encodeURIComponent(s)}`,n=new p("roleOrganisation",I).createComplete(c,R,r);t.get(n);const f=t.getMany(n);t.create(n);t.update(n);t.remove(n);export{f as u};
