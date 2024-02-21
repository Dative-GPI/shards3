import{j as h,p as Be,w as qe,o as We}from"./vue.esm-bundler-6746129d.js";import{L as J,P as g,D as c,S as o,C as s,A as Ye,g as ze,O as V,U as Ke}from"./useTimeZone-147b7e03.js";import"./lodash-569b8a6d.js";class Ze extends J{constructor(e){super(e)}}class je extends g{constructor(e){super(e)}}class Q{constructor(e){this.extensionId=e.extensionId,this.actionType=e.actionType,this.path=e.path,this.uri=e.uri,this.label=e.label,this.icon=e.icon}}class Je extends Q{constructor(e){super(e)}}class X{constructor(e){this.dataDefinitionId=e.dataDefinitionId,this.value=e.value,this.label=e.label}}class C{constructor(e){var i;this.id=e.id,this.status=e.status,this.sourceTimestamp=c.utcToEpoch(e.sourceTimestamp),this.enqueuedTimestamp=c.utcToEpoch(e.enqueuedTimestamp),this.processedTimestamp=c.utcToEpoch(e.processedTimestamp),this.metadataValues=(i=e.metadataValues)==null?void 0:i.map(n=>new X(n))}}class ee{constructor(e){this.id=e.id,this.scenarioId=e.scenarioId,this.scenarioLabel=e.scenarioLabel,this.organisationId=e.organisationId,this.deviceOrganisationId=e.deviceOrganisationId,this.deviceOrganisationLabel=e.deviceOrganisationLabel,this.icon=e.icon,this.code=e.code,this.label=e.label,this.criticity=e.criticity,this.acknowledged=e.acknowledged,this.acknowledgingUserId=e.acknowledgingUserId,this.acknowledgingUserName=e.acknowledgingUserName,this.acknowledgingUserImageId=e.acknowledgingUserImageId,this.acknowledgingUserImageBlurHash=e.acknowledgingUserImageBlurHash,this.acknowledgingUserImageWidth=e.acknowledgingUserImageWidth,this.acknowledgingUserImageHeight=e.acknowledgingUserImageHeight,this.acknowledgingTimestamp=e.acknowledgingTimestamp?c.utcToEpoch(e.acknowledgingTimestamp):void 0,this.initialState=new C(e.initialState),this.triggerSourceTimestamp=e.triggerSourceTimestamp?c.utcToEpoch(e.triggerSourceTimestamp):void 0,this.triggerEnqueuedTimestamp=e.triggerEnqueuedTimestamp?c.utcToEpoch(e.triggerEnqueuedTimestamp):void 0,this.triggerProcessedTimestamp=e.triggerProcessedTimestamp?c.utcToEpoch(e.triggerProcessedTimestamp):void 0,this.lastState=new C(e.lastState),this.currentSourceTimestamp=e.currentSourceTimestamp?c.utcToEpoch(e.currentSourceTimestamp):void 0,this.currentEnqueuedTimestamp=e.currentEnqueuedTimestamp?c.utcToEpoch(e.currentEnqueuedTimestamp):void 0,this.currentProcessedTimestamp=e.currentProcessedTimestamp?c.utcToEpoch(e.currentProcessedTimestamp):void 0,this.status=e.status,this.tags=e.tags,this.history=e.history.map(i=>new C(i)),this.groupByValues=e.groupByValues.map(i=>new X(i))}}class S extends ee{constructor(e){super(e),this.description=e.description}}class te{constructor(e){this.id=e.id,this.label=e.label,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth}}class Qe extends te{constructor(e){super(e),this.manufacturerId=e.manufacturerId,this.familyId=e.familyId,this.familyLabel=e.familyLabel,this.code=e.code,this.description=e.description}}class ie{constructor(e){this.id=e.id,this.sourceTimestamp=e.sourceTimestamp?c.utcToEpoch(e.sourceTimestamp):void 0,this.enqueuedTimestamp=e.enqueuedTimestamp?c.utcToEpoch(e.enqueuedTimestamp):void 0,this.processedTimestamp=e.processedTimestamp?c.utcToEpoch(e.processedTimestamp):void 0,this.status=e.status,this.icon=e.icon,this.color=e.color}}class se{constructor(e){this.id=e.id,this.deviceId=e.deviceId,this.organisationId=e.organisationId,this.deviceOrganisationId=e.deviceOrganisationId,this.deviceOrganisationLabel=e.deviceOrganisationLabel,this.deviceOrganisationImageId=e.deviceOrganisationImageId,this.deviceOrganisationImageBlurHash=e.deviceOrganisationImageBlurHash,this.deviceOrganisationImageHeight=e.deviceOrganisationImageHeight,this.deviceOrganisationImageWidth=e.deviceOrganisationImageWidth,this.deviceOrganisationConnectivity=e.deviceOrganisationConnectivity!=null?new ie({...e.deviceOrganisationConnectivity,id:e.deviceOrganisationId}):void 0,this.triggerProcessedTimestamp=c.utcToEpoch(e.triggerProcessedTimestamp),this.resolveProcessedTimestamp=e.resolveProcessedTimestamp?c.utcToEpoch(e.resolveProcessedTimestamp):void 0,this.status=e.status}}class F extends se{constructor(e){super(e)}}class Xe{constructor(e){this.priority=e.priority,this.filterType=e.filterType,this.filterValues=e.filterValues.slice(),this.color=e.color}}class oe{constructor(e){this.id=e.id,this.code=e.code,this.label=e.label,this.categoryLabel=e.categoryLabel,this.index=e.index,this.entity=e.entity,this.dataType=e.dataType,this.addInInfos=e.addInInfos,this.readOnlyCore=e.readOnlyCore,this.readOnlyAdmin=e.readOnlyAdmin,this.defaultValue=e.defaultValue,this.history=e.history,this.historySize=e.historySize,this.colorful=e.colorful,this.colorMap=e.colorMap.map(i=>new Xe(i)),this.useOnlyAllowedValues=e.useOnlyAllowedValues,this.allowedValues={...e.allowedValues}}}class et extends oe{constructor(e){super(e)}}class ne{constructor(e){this.value=e.value,this.timestamp=e.timestamp?c.utcToEpoch(e.timestamp):void 0}}class tt extends ne{constructor(e){super(e)}}class de{constructor(e){this.id=e.id,this.label=e.label,this.index=e.index}}class ce{constructor(e){this.id=e.id,this.modelId=e.modelId,this.code=e.code,this.label=e.label,this.correlated=e.correlated}}class it extends ce{constructor(e){super(e)}}class st{constructor(e){this.id=e.id,this.inputValue=e.inputValue,this.outputValue=e.outputValue}}class le{constructor(e){var i;this.id=e.id,this.modelId=e.modelId,this.dataCategoryId=e.dataCategoryId,this.dataCategoryCode=e.dataCategoryCode,this.dataCategoryLabel=e.dataCategoryLabel,this.code=e.code,this.label=e.label,this.description=e.description,this.dataTable=e.dataTable,this.useOnlyMappings=e.useOnlyMappings,this.unit=e.unit,this.codes=e.codes.slice(),this.mappings=((i=e.mappings)==null?void 0:i.map(n=>new st(n)))??[]}}class ot extends le{constructor(e){super(e)}}class G extends ie{constructor(e){super(e)}}class k{constructor(e){this.id=e.id,this.label=e.label,this.status=e.status,this.criticity=e.criticity,this.sourceTimestamp=e.sourceTimestamp?c.utcToEpoch(e.sourceTimestamp):void 0,this.enqueuedTimestamp=e.enqueuedTimestamp?c.utcToEpoch(e.enqueuedTimestamp):void 0}}class nt{constructor(e){this.id=e.id,this.key=e.key,this.value=e.value,this.keyLabel=e.keyLabel,this.valueLabel=e.valueLabel}}class dt{constructor(e){this.id=e.id,this.statuses=e.statuses.map(i=>new ct(i))}}class ct{constructor(e){this.modelStatusId=e.modelStatusId,this.statusGroups=e.statusGroups.map(i=>new lt(i))}}class lt{constructor(e){this.sourceTimestamp=e.sourceTimestamp?c.utcToEpoch(e.sourceTimestamp):void 0,this.enqueuedTimestamp=e.enqueuedTimestamp?c.utcToEpoch(e.enqueuedTimestamp):void 0,this.processedTimestamp=e.processedTimestamp?c.utcToEpoch(e.processedTimestamp):void 0,this.groupByValue=e.groupByValue,this.value=e.value,this.unit=e.unit,this.label=e.label,this.icon=e.icon,this.color=e.color}}class f extends dt{constructor(e){super(e)}}class at{constructor(e){this.id=e.id,this.modelId=e.modelId,this.dataCategoryId=e.dataCategoryId,this.dataCategoryLabel=e.dataCategoryLabel,this.dataDefinitionId=e.dataDefinitionId,this.dataDefinitionLabel=e.dataDefinitionLabel,this.groupById=e.groupById,this.groupByLabel=e.groupByLabel,this.label=e.label,this.inline=e.inline,this.index=e.index,this.lifetime=e.lifetime,this.timeToLive=e.timeToLive,this.showDefault=e.showDefault,this.iconDefault=e.iconDefault,this.colorDefault=e.colorDefault}}class ae{get connectable(){return this.connectivity}constructor(e){this.id=e.id,this.deviceId=e.deviceId,this.manufacturerId=e.manufacturerId,this.manufacturerLabel=e.manufacturerLabel,this.articleId=e.articleId,this.articleLabel=e.articleLabel,this.modelId=e.modelId,this.modelLabel=e.modelLabel,this.ownerId=e.ownerId,this.ownerLabel=e.ownerLabel,this.organisationId=e.organisationId,this.managerId=e.managerId,this.managerName=e.managerName,this.locationId=e.locationId,this.locationLabel=e.locationLabel,this.locationAddress=e.locationAddress,this.groupId=e.groupId,this.groupLabel=e.groupLabel,this.groupIcon=e.groupIcon,this.label=e.label,this.code=e.code,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.tags=e.tags.slice(),this.unrestricted=e.unrestricted,this.online=e.online,this.meta={...e.meta},this.modelStatuses=e.modelStatuses.map(i=>new at(i)),this.status=e.status!=null?new f(e.status):void 0,this.connectivity=e.connectivity!=null?new G({...e.connectivity,id:e.id}):void 0,this.alerts=e.alerts.map(i=>new k(i)),this.worstAlert=e.worstAlert!=null?new k(e.worstAlert):void 0}}class A extends ae{constructor(e){super(e),this.articleCode=e.articleCode,this.familyId=e.familyId,this.familyLabel=e.familyLabel,this.description=e.description,this.options=e.options.map(i=>new nt({...i})),this.path=e.path.map(i=>new de({...i})).sort((i,n)=>n.index-i.index)}}class ue{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(i=>new de({...i})).sort((i,n)=>n.index-i.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class B extends ue{constructor(e){super(e),this.parentIcon=e.parentIcon,this.parentLabel=e.parentLabel}}class ut{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class re{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new ut(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class rt extends re{constructor(e){super(e),this.description=e.description}}class he{constructor(e){this.id=e.id,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.label=e.label}}class ht extends he{constructor(e){super(e),this.description=e.description}}class ge{constructor(e){this.id=e.id,this.manufacturerId=e.manufacturerId,this.manufacturerLabel=e.manufacturerLabel,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.code=e.code,this.label=e.label,this.connectable=e.connectable}}class gt extends ge{constructor(e){super(e)}}class Ie{constructor(e){this.id=e.id,this.mainDashboardId=e.mainDashboardId,this.mainDashboardType=e.mainDashboardType,this.code=e.code,this.label=e.label}}class It extends Ie{constructor(e){super(e),this.description=e.description}}class Te{constructor(e){this.id=e.id,this.code=e.code,this.label=e.label,this.prefix=e.prefix}}class Tt extends Te{constructor(e){super(e)}}class ye{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new g(i))}}class yt extends ye{constructor(e){super(e),this.description=e.description}}class ve{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.scope=e.scope,this.userType=e.userType,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new g(i))}}class vt extends ve{constructor(e){super(e),this.description=e.description}}class p{constructor(e,...i){this.columnId=e.columnId,this.label=e.label,this.value=e.value,this.index=e.index,this.hidden=e.hidden,this.sortable=e.sortable,this.filterable=e.filterable,this.configuration=e.configuration}}class bt extends p{constructor(e){super(e)}}class be{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name??e.label,this.label=e.name??e.label,this.description=e.description,this.tags=e.tags&&e.tags.slice()||[]}}class N extends be{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(i=>new g(i))}}const Rt="organisationId";let q=!1;const u=h(null),Re=()=>{const t=i=>{u.value=i};return q||Be(Rt,u),q=!0,{ready:new Promise(i=>{u.value?i(u.value):qe(u,()=>{u.value&&i(u.value)})}),organisationId:u,setOrganisationId:t}},{organisationId:W}=Re();function Oe(t){return()=>{if(!W.value)throw new Error("OrganisationId is not set");return t(W.value)}}const l=Oe(t=>`/api/core/v1/organisations/${encodeURIComponent(t)}`),Ot=()=>`${l()}/organisations`,U=Oe(t=>`${Ot()}/${encodeURIComponent(t)}`),Lt=()=>`${U()}/dashboard`,Ut=()=>`${U()}/actions`,Le=()=>`${l()}/alerts`,R=t=>`${Le()}/${encodeURIComponent(t)}`,Ue=()=>`${U()}/articles`,wt=t=>`${Ue()}/${encodeURIComponent(t)}`,we=()=>`${U()}/pats`,Ct=t=>`${we()}/${encodeURIComponent(t)}`,Ce=()=>`${l()}/connectivity-alerts`,D=t=>`${Ce()}/${encodeURIComponent(t)}`,St=()=>`${l()}/custom-properties`,At=(t,e,i)=>`${l()}/custom-property-values/${encodeURIComponent(t)}/${encodeURIComponent(e)}/${encodeURIComponent(i)}`,Se=()=>`${l()}/data-categories`,Nt=t=>`${Se()}/${encodeURIComponent(t)}`,Ae=()=>`${l()}/data-definitions`,Dt=t=>`${Ae()}/${encodeURIComponent(t)}`,M=()=>`${l()}/device-organisations`,r=t=>`${M()}/${encodeURIComponent(t)}`,Et=t=>`${r(t)}/group`,_t=t=>`${r(t)}/location`,Y=t=>`${r(t)}/connectivity`,z=t=>`${r(t)}/status`,m=()=>`${l()}/groups`,O=t=>`${m()}/${encodeURIComponent(t)}`,Ne=()=>`${l()}/languages`,$t=t=>`${Ne()}/${encodeURIComponent(t)}`,De=()=>`${l()}/locations`,Gt=t=>`${De()}/${encodeURIComponent(t)}`,Ee=()=>`${l()}/manufacturers`,ft=t=>`${Ee()}/${encodeURIComponent(t)}`,_e=()=>`${l()}/models`,pt=t=>`${_e()}/${encodeURIComponent(t)}`,$e=()=>`${l()}/organisation-types`,Mt=t=>`${$e()}/${encodeURIComponent(t)}`,mt=()=>`${l()}/permission-categories`,Pt=()=>`${l()}/permissions/current`,Ge=()=>`${l()}/role-organisations`,xt=t=>`${Ge()}/${encodeURIComponent(t)}`,fe=()=>`${l()}/role-organisation-types`,Ht=t=>`${fe()}/${encodeURIComponent(t)}`,Vt=()=>`${l()}/user-organisation-dispositions`,K=t=>`${Vt()}/${encodeURIComponent(t)}`,L=()=>`${l()}/user-organisations`,E=t=>`${L()}/${encodeURIComponent(t)}`,Z=()=>`${L()}/current`,Ft=()=>`${l()}/users`,_=t=>`${Ft()}/${encodeURIComponent(t)}`,P=new o("alert",S).create(t=>t.build(t.addGet(R),t.addGetMany(Le,ee),t.addRemove(R),t.addNotify(e=>({acknowledge:async i=>{const n=await o.http.patch(R(i)),d=new S(n.data);return e.notify("update",d),d},getNotify:async i=>{const n=await o.http.get(R(i)),d=new S(n.data);return e.notify("update",d),d},removeNotify:i=>{e.notify("delete",i)}}))));s.get(P);s.getMany(P);s.remove(P);h(null);const x=new o("connectivityAlert",F).create(t=>t.build(t.addGet(D),t.addGetMany(Ce,se),t.addRemove(D),t.addNotify(e=>({getNotify:async i=>{const n=await o.http.get(D(i)),d=new F(n.data);return e.notify("update",d),d},removeNotify:i=>{e.notify("delete",i)}}))));s.get(x);s.getMany(x);s.remove(x);h(null);const kt=new o("deviceConnectivity",G).create(t=>t.build(t.addGet(Y),t.addNotify(e=>({getNotify:async i=>{const n=await o.http.get(Y(i)),d=new G(n.data);return e.notify("update",d),d}}))));s.get(kt);h(null);const Bt=new o("deviceStatus",f).create(t=>t.build(t.addGet(z),t.addNotify(e=>({getNotify:async i=>{const n=await o.http.get(z(i)),d=new f(n.data);return e.notify("update",d),d}}))));s.get(Bt);h(null);const qt=new o("action",Je).create(t=>t.build(t.addGetMany(Ut,Q),t.addNotify()));s.getMany(qt);const pe=new o("article",Qe).create(t=>t.build(t.addGet(wt),t.addGetMany(Ue,te),t.addNotify()));s.get(pe);s.getMany(pe);const Me=new o("authToken",Ye).create(t=>t.build(t.addGetMany(we,ze),t.addRemove(Ct),t.addNotify()));s.getMany(Me);s.remove(Me);const Wt=new o("customProperty",et).create(t=>t.build(t.addGetMany(St,oe),t.addNotify()));s.getMany(Wt);new o("customPropertyValue",tt).create(t=>t.build(t.addNotify(()=>({getMany:async(e,i,n)=>(await o.http.get(At(e,i,n))).data.map(w=>new ne(w))}))));const me=new o("dataCategory",it).create(t=>t.build(t.addGet(Nt),t.addGetMany(Se,ce),t.addNotify()));s.get(me);s.getMany(me);const Pe=new o("dataDefinition",ot).create(t=>t.build(t.addGet(Dt),t.addGetMany(Ae,le),t.addNotify()));s.get(Pe);s.getMany(Pe);const I=new o("deviceOrganisation",A).create(t=>t.build(t.addGet(r),t.addGetMany(M,ae),t.addCreate(M),t.addUpdate(r),t.addRemove(r),t.addNotify(e=>({changeGroup:async(i,n)=>{const d=await o.http.put(Et(i),n),a=new A(d.data);return e.notify("update",a),a},changeLocation:async(i,n)=>{const d=await o.http.put(_t(i),n),a=new A(d.data);return e.notify("update",a),a}})))),jt=s.get(I);s.getMany(I);s.create(I);s.update(I);s.remove(I);const T=new o("group",B).create(t=>t.build(t.addGet(O),t.addGetMany(m,ue),t.addCreate(m),t.addUpdate(O),t.addRemove(O),t.addNotify(e=>({changeParent:async(i,n)=>{const d=await o.http.put(O(i),n),a=new B(d.data);return e.notify("update",a),a}})))),Jt=s.get(T);s.getMany(T);s.create(T);s.update(T);s.remove(T);const xe=new o("language",Ze).create(t=>t.build(t.addGet($t),t.addGetMany(Ne,J),t.addNotify()));s.get(xe);s.getMany(xe);const y=new o("location",rt).createComplete(De,Gt,re);s.get(y);s.getMany(y);s.create(y);s.update(y);s.remove(y);const He=new o("manufacturer",ht).create(t=>t.build(t.addGet(ft),t.addGetMany(Ee,he),t.addNotify()));s.get(He);s.getMany(He);const Ve=new o("model",gt).create(t=>t.build(t.addGet(pt),t.addGetMany(_e,ge),t.addNotify()));s.get(Ve);s.getMany(Ve);new o("organisation",V).create(t=>t.build(t.addNotify(e=>({changeDashboard:async i=>{const n=await o.http.put(Lt,i),d=new V(n.data);return e.notify("update",d),d}}))));const Fe=new o("organisationType",It).create(t=>t.build(t.addGet(Mt),t.addGetMany($e,Ie),t.addNotify()));s.get(Fe);s.getMany(Fe);const Yt=new o("permissionCategory",Tt).create(t=>t.build(t.addGetMany(mt,Te),t.addNotify()));s.getMany(Yt);new o("permission",je).create(t=>t.build(t.addNotify(()=>({getCurrent:async()=>(await o.http.get(Pt)).data.map(n=>new g(n))}))));const v=new o("roleOrganisation",yt).createComplete(Ge,xt,ye);s.get(v);s.getMany(v);s.create(v);s.update(v);s.remove(v);const ke=new o("roleOrganisationType",vt).create(t=>t.build(t.addGet(Ht),t.addGetMany(fe,ve),t.addNotify()));s.get(ke);s.getMany(ke);new o("userOrganisationDisposition",bt).create(t=>t.build(t.addNotify(e=>({getTable:async i=>{const d=(await o.http.get(K(i))).data.map(a=>new p(a));return e.notify("update",d),d},updateTable:async(i,n)=>{const a=(await o.http.post(K(i),n)).data.map(w=>new p(w));return e.notify("update",a),a}}))));const b=new o("userOrganisation",N).create(t=>t.build(t.addGet(E),t.addGetMany(L,be),t.addCreate(L),t.addUpdate(E),t.addRemove(E),t.addNotify(e=>({getCurrent:async()=>{const i=await o.http.get(Z),n=new N(i.data);return e.notify("update",n),n},updateCurrent:async i=>{const n=await o.http.post(Z,i),d=new N(n.data);return e.notify("update",d),d}}))));s.get(b);s.getMany(b);s.create(b);s.update(b);s.remove(b);const H=new o("user",Ke).create(t=>t.build(t.addGet(_),t.addUpdate(_),t.addRemove(_),t.addNotify()));s.get(H);s.update(H);s.remove(H);let j=!1;const $=h(!1);function Qt(){if(j)return{ready:$};j=!0;const{ready:t}=Re();return We(async()=>{await t,$.value=!0}),{ready:$}}export{Jt as a,Qt as b,Re as c,jt as u};
