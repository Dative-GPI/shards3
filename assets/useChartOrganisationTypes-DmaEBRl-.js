var y=Object.defineProperty;var C=(r,i,e)=>i in r?y(r,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[i]=e;var t=(r,i,e)=>C(r,typeof i!="symbol"?i+"":i,e);import{C as b,a as l,b as u,c as T,d as f,e as p,f as I,g as S,h as O,i as w,j as x}from"./chartSerie-BOhDkcUt.js";import{C as A}from"./base-BWToAT4M.js";import{S as h}from"./serviceFactory-DAEdCiSt.js";import{C as s}from"./composableFactory-C5FI4e55.js";class n{constructor(i){t(this,"id");t(this,"imageId");t(this,"chartId");t(this,"organisationTypeId");t(this,"organisationTypeLabel");t(this,"chartCategoryId");t(this,"chartCategoryLabel");t(this,"scope");t(this,"label");t(this,"title");t(this,"code");t(this,"icon");t(this,"draft");t(this,"tags");t(this,"multiple");t(this,"chartType");t(this,"modelsLabels");this.id=i.id,this.imageId=i.imageId,this.chartId=i.chartId,this.organisationTypeId=i.organisationTypeId,this.organisationTypeLabel=i.organisationTypeLabel,this.chartCategoryId=i.chartCategoryId,this.chartCategoryLabel=i.chartCategoryLabel,this.scope=i.scope,this.label=i.label,this.title=i.title,this.code=i.code,this.icon=i.icon,this.draft=i.draft,this.tags=i.tags.slice(),this.multiple=i.multiple,this.chartType=i.chartType,this.modelsLabels=i.modelsLabels.map(e=>new b(e))}}class c extends n{constructor(e){super(e);t(this,"labelDefault");t(this,"titleDefault");t(this,"colorSet");t(this,"colorSeed");t(this,"xAxis");t(this,"aggregates");t(this,"dynamicVariables");t(this,"chartVariables");t(this,"chartPresets");t(this,"chartPresetFilters");t(this,"chartPlots");t(this,"chartSeries");t(this,"chartOperands");t(this,"chartFilters");t(this,"chartModifiers");t(this,"yAxis");t(this,"translations");this.labelDefault=e.labelDefault,this.titleDefault=e.titleDefault,this.colorSet=e.colorSet,this.colorSeed=e.colorSeed,this.xAxis=e.xAxis?new l(e.xAxis):null,this.aggregates=e.aggregates,this.dynamicVariables=e.dynamicVariables,this.chartVariables=e.chartVariables.map(a=>new u(a)),this.chartPresets=e.chartPresets.map(a=>new T(a)),this.chartPresetFilters=e.chartPresetFilters.map(a=>new f(a)),this.chartPlots=e.chartPlots.map(a=>new p(a)),this.chartSeries=e.chartSeries.map(a=>new I(a)),this.chartOperands=e.chartOperands.map(a=>new S(a)),this.chartFilters=e.chartFilters.map(a=>new O(a)),this.chartModifiers=e.chartModifiers.map(a=>new w(a)),this.yAxis=e.yAxis.map(a=>new l(a)),this.translations=e.translations.map(a=>new x(a))}}const d=()=>`${A()}/chart-organisation-types`,g=r=>`${d()}/${encodeURIComponent(r)}`,o=new h("chartOrganisationType",c).createComplete(d,g,n),P=new h("chartOrganisationType",c).create(r=>r.build(r.addNotify(i=>({...h.addCustom("duplicate",(e,a)=>e.patch(g(a)),e=>{const a=new c(e);return i.notify("update",a),a})}))));s.get(o);const _=s.getMany(o);s.create(o);s.update(o);s.remove(o);s.custom(P.duplicate);export{_ as u};
