import{D as r,a as l,W as c}from"./dashboardTranslation-1af96bca.js";import{P as b}from"./pathCrumb-3dbc85d5.js";import{D,a as g}from"./dashboardEntityPresetInfos-2fed9961.js";import{C as I}from"./base-168b8f74.js";import{S as f}from"./serviceFactory-2dfad3af.js";import{C as d}from"./composableFactory-2d4a69cc.js";class n{constructor(t){this.id=t.id,this.dashboardId=t.dashboardId,this.organisationId=t.organisationId,this.folderId=t.folderId,this.folderLabel=t.folderLabel,this.folderIcon=t.folderIcon,this.imageId=t.imageId,this.scope=t.scope,this.locked=t.locked,this.label=t.label,this.code=t.code,this.icon=t.icon,this.tags=t.tags.slice(),this.colors=t.colors.slice()}}class u extends n{constructor(t){super(t),this.labelDefault=t.labelDefault,this.path=t.path.map(e=>new b(e)).sort((e,h)=>h.index-e.index),this.translations=t.translations.map(e=>new r(e)),this.singleEntity=t.singleEntity,this.dynamicEntities=t.dynamicEntities,this.entityPresetCode=t.entityPresetCode,this.dynamicDates=t.dynamicDates,this.datePresetCode=t.datePresetCode,this.useAutoRefresh=t.useAutoRefresh,this.autoRefresh=t.autoRefresh,this.datePresets=t.datePresets.map(e=>new D(e)),this.entityPresets=t.entityPresets.map(e=>new g(e)),this.variables=t.variables.map(e=>new l(e)),this.widgets=t.widgets.map(e=>new c(e))}}const o=()=>`${I()}/dashboard-organisations`,i=s=>`${o()}/${encodeURIComponent(s)}`,a=new f("dashboardOrganisation",u).create(s=>s.build(s.addGet(i),s.addGetMany(o,n),s.addCreate(o),s.addUpdate(i),s.addRemove(i),s.addNotify())),w=d.get(a),S=d.getMany(a);export{w as a,S as u};