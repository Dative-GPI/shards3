var k=Object.defineProperty;var A=(i,t,o)=>t in i?k(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o;var e=(i,t,o)=>A(i,typeof t!="symbol"?t+"":t,o);import{U as N}from"./vue.esm-bundler-l-siv0w9.js";import{H as v,a as p,S as f,b as R}from"./hubFactory-sHCY8yvr.js";import{D}from"./deviceConnectivityDetails-C8LcbwOg.js";import{C as V,H as m}from"./base-BWToAT4M.js";import{S as d}from"./serviceFactory-DAEdCiSt.js";import{C as c}from"./composableFactory-DG8ITK-n.js";import{i as r}from"./datesTools-CGhnvN9k.js";import{P as S}from"./pathCrumb-Db-cq5HI.js";class C{constructor(t){e(this,"id");e(this,"label");e(this,"status");e(this,"criticity");e(this,"sourceTimestamp");e(this,"enqueuedTimestamp");this.id=t.id,this.label=t.label,this.status=t.status,this.criticity=t.criticity,this.sourceTimestamp=t.sourceTimestamp?r(t.sourceTimestamp):void 0,this.enqueuedTimestamp=t.enqueuedTimestamp?r(t.enqueuedTimestamp):void 0}}class G{constructor(t){e(this,"id");e(this,"statuses");this.id=t.id,this.statuses=t.statuses.map(o=>new B(o))}}class B{constructor(t){e(this,"modelStatusId");e(this,"statusGroups");this.modelStatusId=t.modelStatusId,this.statusGroups=t.statusGroups.map(o=>new x(o))}}class x{constructor(t){e(this,"sourceTimestamp");e(this,"enqueuedTimestamp");e(this,"processedTimestamp");e(this,"groupByValue");e(this,"value");e(this,"unit");e(this,"label");e(this,"icon");e(this,"color");this.sourceTimestamp=t.sourceTimestamp?r(t.sourceTimestamp):null,this.enqueuedTimestamp=t.enqueuedTimestamp?r(t.enqueuedTimestamp):null,this.processedTimestamp=t.processedTimestamp?r(t.processedTimestamp):null,this.groupByValue=t.groupByValue,this.value=t.value,this.unit=t.unit,this.label=t.label,this.icon=t.icon,this.color=t.color}}class g extends G{constructor(t){super(t)}}class ${constructor(t){e(this,"id");e(this,"modelId");e(this,"dataCategoryId");e(this,"dataCategoryLabel");e(this,"dataDefinitionId");e(this,"dataDefinitionLabel");e(this,"groupById");e(this,"groupByLabel");e(this,"label");e(this,"index");e(this,"lifetime");e(this,"timeToLive");e(this,"showDefault");e(this,"iconDefault");e(this,"colorDefault");this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryLabel=t.dataCategoryLabel,this.dataDefinitionId=t.dataDefinitionId,this.dataDefinitionLabel=t.dataDefinitionLabel,this.groupById=t.groupById,this.groupByLabel=t.groupByLabel,this.label=t.label,this.index=t.index,this.lifetime=t.lifetime,this.timeToLive=t.timeToLive,this.showDefault=t.showDefault,this.iconDefault=t.iconDefault,this.colorDefault=t.colorDefault}}class q{constructor(t){e(this,"id");e(this,"key");e(this,"value");e(this,"keyLabel");e(this,"valueLabel");this.id=t.id,this.key=t.key,this.value=t.value,this.keyLabel=t.keyLabel,this.valueLabel=t.valueLabel}}class w{constructor(t){e(this,"id");e(this,"deviceId");e(this,"manufacturerId");e(this,"manufacturerLabel");e(this,"articleId");e(this,"articleLabel");e(this,"modelId");e(this,"modelLabel");e(this,"ownerId");e(this,"ownerLabel");e(this,"organisationId");e(this,"managerId");e(this,"managerName");e(this,"locationId");e(this,"locationLabel");e(this,"locationAddress");e(this,"groupId");e(this,"groupLabel");e(this,"groupIcon");e(this,"label");e(this,"code");e(this,"description");e(this,"imageId");e(this,"tags");e(this,"unrestricted");e(this,"online");e(this,"path");e(this,"meta");e(this,"modelStatuses");e(this,"status");e(this,"connectivity");e(this,"alerts");e(this,"worstAlert");this.id=t.id,this.deviceId=t.deviceId,this.manufacturerId=t.manufacturerId,this.manufacturerLabel=t.manufacturerLabel,this.articleId=t.articleId,this.articleLabel=t.articleLabel,this.modelId=t.modelId,this.modelLabel=t.modelLabel,this.ownerId=t.ownerId,this.ownerLabel=t.ownerLabel,this.organisationId=t.organisationId,this.managerId=t.managerId,this.managerName=t.managerName,this.locationId=t.locationId,this.locationLabel=t.locationLabel,this.locationAddress=t.locationAddress,this.groupId=t.groupId,this.groupLabel=t.groupLabel,this.groupIcon=t.groupIcon,this.label=t.label,this.code=t.code,this.description=t.description,this.imageId=t.imageId,this.tags=t.tags.slice(),this.unrestricted=t.unrestricted,this.online=t.online,this.path=t.path.map(o=>new S({...o})).sort((o,s)=>s.index-o.index),this.meta={...t.meta},this.modelStatuses=t.modelStatuses.map(o=>new $(o)),this.status=new g(t.status),this.connectivity=new D(t.connectivity),this.alerts=t.alerts.map(o=>new C(o)),this.worstAlert=t.worstAlert!=null?new C(t.worstAlert):null}get connectable(){return this.connectivity}}class b extends w{constructor(o){super(o);e(this,"articleCode");e(this,"familyId");e(this,"familyLabel");e(this,"options");e(this,"path");this.articleCode=o.articleCode,this.familyId=o.familyId,this.familyLabel=o.familyLabel,this.options=o.options.map(s=>new q({...s})),this.path=o.path.map(s=>new S({...s})).sort((s,n)=>n.index-s.index)}}const y=()=>`${V()}/device-organisations`,l=i=>`${y()}/${encodeURIComponent(i)}`,H=i=>`${l(i)}/group`,M=i=>`${l(i)}/location`,F=i=>`${l(i)}/connectivity`,P=()=>`${m()}/connectivities`,W=i=>`${l(i)}/status`,Y=()=>`${m()}/statuses`,L=new d("deviceConnectivity",D).create(i=>i.build(i.addGet(F),i.addNotify(t=>({notifyUpdate:o=>t.notify("update",o)})))),j=v.create(P,i=>{i.on(p,t=>L.notifyUpdate(new D(t)))},async i=>{await i.invoke(f)});c.get(L);const E=c.track(L),U=v.createWatcher(j),T=new d("deviceStatus",g).create(i=>i.build(i.addGet(W),i.addNotify(t=>({notifyUpdate:o=>t.notify("update",o)})))),z=v.create(Y,i=>{i.on(R,t=>T.notifyUpdate(new g(t)))},async i=>{await i.invoke(f)});c.get(T);const _=c.track(T),O=v.createWatcher(z),a=new d("deviceOrganisation",b).create(i=>i.build(i.addGet(l),i.addGetMany(y,w),i.addCreate(y),i.addUpdate(l),i.addRemove(l),i.addNotify(t=>({...d.addCustom("changeGroup",(o,s,n)=>o.put(H(s),n),o=>{const s=new b(o);return t.notify("update",s),s}),...d.addCustom("changeLocation",(o,s,n)=>o.put(M(s),n),o=>{const s=new b(o);return t.notify("update",s),s})})))),h=()=>{const{track:i}=_(),{track:t}=E(),{watchOne:o}=O(),{watchOne:s}=U();return n=>{o(n.value.status.id),s(n.value.connectivity.id),i(n.value.status,u=>n.value.status=u),t(n.value.connectivity,u=>n.value.connectivity=u)}},J=()=>{const{track:i}=_(),{track:t}=E(),{watchMany:o}=O(),{watchMany:s}=U();return n=>{o(),s();for(const u of n.value)i(u.status,I=>u.status=I),t(u.connectivity,I=>u.connectivity=I)}},nt=()=>{let i=[];return N(()=>{i.forEach(o=>a.unsubscribe(o)),i=[]}),{subscribeToMany:o=>{i.push(a.subscribe("all",o))}}},ct=c.get(a,h),at=c.getMany(a,J);c.create(a,h);c.update(a,h);c.remove(a);c.custom(a.changeGroup,h);c.custom(a.changeLocation,h);export{g as D,$ as M,ct as a,C as b,U as c,O as d,E as e,_ as f,nt as s,at as u};
