var s=Object.defineProperty;var i=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>i(t,typeof e!="symbol"?e+"":e,a);class o{constructor(e){l(this,"languageCode");l(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class g{constructor(e){l(this,"hiddenCode");l(this,"label");l(this,"labelDefault");l(this,"globalStartDate");l(this,"globalEndDate");l(this,"translations");this.hiddenCode=e.hiddenCode,this.label=e.label,this.labelDefault=e.labelDefault,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.translations=e.translations.map(a=>new o(a))}}class n{constructor(e){l(this,"languageCode");l(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class c{constructor(e){l(this,"hiddenCode");l(this,"label");l(this,"labelDefault");l(this,"globalSelectedEntities");l(this,"globalEntitiesFilters");l(this,"globalEntitiesIds");l(this,"translations");this.hiddenCode=e.hiddenCode,this.label=e.label,this.labelDefault=e.labelDefault,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesFilters=e.globalEntitiesFilters,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.translations=e.translations.map(a=>new n(a))}}class d{constructor(e){l(this,"languageCode");l(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class h{constructor(e){l(this,"languageCode");l(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class b{constructor(e){l(this,"value");l(this,"label");l(this,"labelDefault");l(this,"translations");this.value=e.value,this.label=e.label,this.labelDefault=e.labelDefault,this.translations=e.translations.map(a=>new h(a))}}class r{constructor(e){l(this,"hiddenCode");l(this,"variableType");l(this,"label");l(this,"labelDefault");l(this,"code");l(this,"defaultValue");l(this,"useOnlyAllowedValues");l(this,"allowedValues");l(this,"translations");this.hiddenCode=e.hiddenCode,this.variableType=e.variableType,this.label=e.label,this.labelDefault=e.labelDefault,this.code=e.code,this.defaultValue=e.defaultValue,this.useOnlyAllowedValues=e.useOnlyAllowedValues,this.allowedValues=e.allowedValues.map(a=>new b(a)),this.translations=e.translations.map(a=>new d(a))}}class D{constructor(e){l(this,"id");l(this,"templateId");l(this,"code");l(this,"hideBorders");l(this,"width");l(this,"height");l(this,"x");l(this,"y");l(this,"targetScreenSize");l(this,"meta");this.id=e.id,this.templateId=e.templateId,this.code=e.code,this.hideBorders=e.hideBorders,this.width=e.width,this.height=e.height,this.x=e.x,this.y=e.y,this.targetScreenSize=e.targetScreenSize,this.meta={...e.meta}}}class C{constructor(e){l(this,"languageCode");l(this,"label");this.languageCode=e.languageCode,this.label=e.label}}export{C as D,D as W,g as a,c as b,r as c,b as d};