var u=Object.defineProperty;var I=(o,i,e)=>i in o?u(o,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[i]=e;var t=(o,i,e)=>I(o,typeof i!="symbol"?i+"":i,e);import{C as D}from"./base-LOOo-Z1R.js";import{S as b,a as h,b as R}from"./scenarioChart-DT-qM5Ky.js";import{T as y}from"./timeRange-DtWQBHMx.js";import{S as d}from"./serviceFactory-DAEdCiSt.js";import{C as n}from"./composableFactory-CNptecSH.js";class g{constructor(i){t(this,"id");t(this,"scenarioId");t(this,"organisationTypeId");t(this,"organisationTypeLabel");t(this,"scope");t(this,"modelId");t(this,"modelLabel");t(this,"dataCategoryId");t(this,"dataCategoryLabel");t(this,"dataDefinitionId");t(this,"dataDefinitionLabel");t(this,"criticity");t(this,"label");t(this,"code");t(this,"icon");t(this,"ready");t(this,"tags");t(this,"chartStartDate");t(this,"chartEndDate");t(this,"charts");t(this,"parameters");this.id=i.id,this.scenarioId=i.scenarioId,this.organisationTypeId=i.organisationTypeId,this.organisationTypeLabel=i.organisationTypeLabel,this.scope=i.scope,this.modelId=i.modelId,this.modelLabel=i.modelLabel,this.dataCategoryId=i.dataCategoryId,this.dataCategoryLabel=i.dataCategoryLabel,this.dataDefinitionId=i.dataDefinitionId,this.dataDefinitionLabel=i.dataDefinitionLabel,this.criticity=i.criticity,this.label=i.label,this.code=i.code,this.icon=i.icon,this.ready=i.ready,this.chartStartDate=i.chartStartDate,this.chartEndDate=i.chartEndDate,this.tags=i.tags.slice(),this.charts=i.charts.map(e=>new b(e)),this.parameters=i.parameters.map(e=>new h(e))}}class r extends g{constructor(e){super(e);t(this,"groupByIds");t(this,"metadataIds");t(this,"labelDefault");t(this,"description");t(this,"descriptionDefault");t(this,"alertLabel");t(this,"alertLabelDefault");t(this,"alertDescription");t(this,"alertDescriptionDefault");t(this,"alertCode");t(this,"alertIcon");t(this,"alertTags");t(this,"timeRanges");t(this,"triggerOn");t(this,"triggerCondition");t(this,"triggerMin");t(this,"autoResolveOn");t(this,"autoResolveCondition");t(this,"autoResolveMin");t(this,"timeout");t(this,"lock");t(this,"waitResolved");t(this,"parameters");t(this,"translations");this.groupByIds=e.groupByIds.slice(),this.metadataIds=e.metadataIds.slice(),this.labelDefault=e.labelDefault,this.description=e.description,this.descriptionDefault=e.descriptionDefault,this.alertLabel=e.alertLabel,this.alertLabelDefault=e.alertLabelDefault,this.alertDescription=e.alertDescription,this.alertDescriptionDefault=e.alertDescriptionDefault,this.alertIcon=e.alertIcon,this.alertCode=e.alertCode,this.alertTags=e.alertTags.slice(),this.timeRanges=e.timeRanges.map(a=>new y(a)),this.triggerOn=e.triggerOn,this.triggerCondition=e.triggerCondition,this.triggerMin=e.triggerMin,this.autoResolveOn=e.autoResolveOn,this.autoResolveCondition=e.autoResolveCondition,this.autoResolveCondition=e.autoResolveCondition,this.autoResolveMin=e.autoResolveMin,this.timeout=e.timeout,this.lock=e.lock,this.waitResolved=e.waitResolved,this.parameters=e.parameters.map(a=>new h(a)),this.translations=e.translations.map(a=>new R(a))}}const c=()=>`${D()}/scenario-organisation-types`,l=o=>`${c()}/${encodeURIComponent(o)}`,s=new d("scenarioOrganisationType",r).create(o=>o.build(o.addGet(l),o.addGetMany(c,g),o.addUpdate(l),o.addRemove(l),o.addRemove(l),o.addNotify(i=>({...d.addCustom("duplicate",(e,a)=>e.patch(l(a)),e=>{const a=new r(e);return i.notify("update",a),a}),...d.addCustom("publish",(e,a)=>e.post(c(),a),e=>{const a=new r(e);return i.notify("add",a),a})}))));n.get(s);const S=n.getMany(s);n.update(s);n.remove(s);n.custom(s.duplicate);n.custom(s.publish);export{S as u};
