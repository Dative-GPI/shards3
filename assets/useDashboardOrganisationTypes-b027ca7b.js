import{W as l}from"./widgetInfos-913cb8f0.js";import{C as h}from"./base-ef43f4ed.js";import{S as c}from"./serviceFactory-2dfad3af.js";import{C as o}from"./composableFactory-5509dfbf.js";class n{constructor(t){this.id=t.id,this.dashboardId=t.dashboardId,this.organisationTypeId=t.organisationTypeId,this.organisationTypeLabel=t.organisationTypeLabel,this.imageId=t.imageId,this.scope=t.scope,this.locked=t.locked,this.label=t.label,this.code=t.code,this.icon=t.icon,this.tags=t.tags.slice(),this.colors=t.colors.slice()}}class g extends n{constructor(t){super(t),this.singleEntity=t.singleEntity,this.dynamicEntities=t.dynamicEntities,this.globalSelectedEntities=t.globalSelectedEntities,this.globalEntitiesIds=t.globalEntitiesIds.slice(),this.dynamicDates=t.dynamicDates,this.globalStartDate=t.globalStartDate,this.globalEndDate=t.globalEndDate,this.useAutoRefresh=t.useAutoRefresh,this.autoRefresh=t.autoRefresh,this.widgets=t.widgets.map(a=>new l(a))}}const s=()=>`${h()}/dashboard-organisation-types`,i=e=>`${s()}/${encodeURIComponent(e)}`,d=new c("dashboardOrganisationType",g).create(e=>e.build(e.addGet(i),e.addGetMany(s,n),e.addCreate(s),e.addUpdate(i),e.addRemove(i),e.addNotify())),I=o.get(d),R=o.getMany(d);export{I as a,R as u};
