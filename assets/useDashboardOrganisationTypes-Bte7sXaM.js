import{D as u,a as b,b as g,c as y,W as D}from"./dashboardTranslation-BBvk7tfF.js";import{C as I}from"./base-DgvHU1oF.js";import{S as a}from"./serviceFactory-D_XwB3_y.js";import{C as i}from"./composableFactory-BGJVwV03.js";class l{constructor(t){this.id=t.id,this.dashboardId=t.dashboardId,this.organisationTypeId=t.organisationTypeId,this.organisationTypeLabel=t.organisationTypeLabel,this.imageId=t.imageId,this.scope=t.scope,this.locked=t.locked,this.label=t.label,this.code=t.code,this.icon=t.icon,this.tags=t.tags.slice(),this.colors=t.colors.slice()}}class d extends l{constructor(t){super(t),this.labelDefault=t.labelDefault,this.translations=t.translations.map(e=>new u(e)),this.useAutoRefresh=t.useAutoRefresh,this.autoRefresh=t.autoRefresh,this.singleEntity=t.singleEntity,this.entityPresetCode=t.entityPresetCode,this.datePresetCode=t.datePresetCode,this.variableCode=t.variableCode,this.datePresets=t.datePresets.map(e=>new b(e)),this.entityPresets=t.entityPresets.map(e=>new g(e)),this.variables=t.variables.map(e=>new y(e)),this.widgets=t.widgets.map(e=>new D(e))}}const h=()=>`${I()}/dashboard-organisation-types`,r=o=>`${h()}/${encodeURIComponent(o)}`,R=o=>`${h()}/${encodeURIComponent(o)}/lock`,n=new a("dashboardOrganisationType",d).create(o=>o.build(o.addGet(r),o.addGetMany(h,l),o.addUpdate(r),o.addRemove(r),o.addNotify(t=>({...a.addCustom("publish",(e,s)=>e.post(h(),s),e=>{const s=new d(e);return t.notify("update",s),s}),...a.addCustom("duplicate",(e,s)=>e.patch(r(s)),e=>{const s=new d(e);return t.notify("update",s),s}),...a.addCustom("lock",(e,s,c)=>e.put(R(s),c),e=>{const s=new d(e);return t.notify("update",s),s})})))),A=i.get(n),P=i.getMany(n);i.custom(n.publish);i.custom(n.duplicate);i.custom(n.lock);export{A as a,P as u};
