var a=Object.defineProperty;var n=(i,e,l)=>e in i?a(i,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[e]=l;var t=(i,e,l)=>n(i,typeof e!="symbol"?e+"":e,l);class d{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class s{constructor(e){t(this,"id");t(this,"scenarioId");t(this,"hiddenCode");t(this,"dataDefinitionId");t(this,"valueType");t(this,"labelDefault");t(this,"valueDefault");t(this,"editable");t(this,"label");t(this,"translations");this.id=e.id,this.scenarioId=e.scenarioId,this.hiddenCode=e.hiddenCode,this.dataDefinitionId=e.dataDefinitionId,this.valueType=e.valueType,this.labelDefault=e.labelDefault,this.valueDefault=e.valueDefault,this.editable=e.editable,this.label=e.label,this.translations=e.translations.map(l=>new d(l))}}class c{constructor(e){t(this,"languageCode");t(this,"label");t(this,"description");t(this,"alertLabel");t(this,"alertDescription");this.languageCode=e.languageCode,this.label=e.label,this.description=e.description,this.alertLabel=e.alertLabel,this.alertDescription=e.alertDescription}}class h{constructor(e){t(this,"id");t(this,"chartId");t(this,"scope");t(this,"index");this.id=e.id,this.chartId=e.chartId,this.scope=e.scope,this.index=e.index}}export{h as S,s as a,c as b};
