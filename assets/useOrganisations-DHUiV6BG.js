var c=Object.defineProperty;var g=(n,t,o)=>t in n?c(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var i=(n,t,o)=>g(n,typeof t!="symbol"?t+"":t,o);import{P as h}from"./permissionInfos-BPDgTHQl.js";import{G as I}from"./base-CmdGny12.js";import{S as m}from"./serviceFactory-DAEdCiSt.js";import{C as s}from"./composableFactory-CNptecSH.js";class d{constructor(t){i(this,"id");i(this,"imageId");i(this,"label");i(this,"userOrganisationsCount");i(this,"adminId");i(this,"adminName");this.id=t.id,this.imageId=t.imageId,this.label=t.label,this.userOrganisationsCount=t.userOrganisationsCount,this.adminId=t.adminId,this.adminName=t.adminName}}class C extends d{constructor(o){super(o);i(this,"code");i(this,"organisationTypeId");i(this,"mainDashboardId");i(this,"mainDashboardType");i(this,"description");i(this,"locationsCount");i(this,"groupsCount");i(this,"deviceOrganisationsCount");i(this,"alertsCount");i(this,"permissions");this.code=o.code,this.organisationTypeId=o.organisationTypeId,this.mainDashboardType=o.mainDashboardType,this.mainDashboardId=o.mainDashboardId,this.description=o.description,this.locationsCount=o.locationsCount,this.groupsCount=o.groupsCount,this.deviceOrganisationsCount=o.deviceOrganisationsCount,this.alertsCount=o.alertsCount,this.permissions=o.permissions.map(u=>new h(u))}}const r=()=>`${I()}/organisations`,a=n=>`${r()}/${encodeURIComponent(n)}`,e=new m("organisation",C).create(n=>n.build(n.addGet(a),n.addGetMany(r,d),n.addUpdate(a),n.addNotify())),y=s.get(e);s.getMany(e);s.update(e);export{y as u};
