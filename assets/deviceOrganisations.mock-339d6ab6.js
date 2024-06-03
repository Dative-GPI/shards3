const i=[{id:"1",raw:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",blurHash:{blurHash:"LEHLk~WB2yk8pyo0adR*.7kCMdnj",width:32,height:32}}],r=[{id:"1",imageId:i[0].id,label:"BakeryOvens"},{id:"2",imageId:i[0].id,label:"RDConstruct"},{id:"3",imageId:i[0].id,label:"DCorp"}],t=[{id:"1",imageId:i[0].id,label:"Article 1",manufacturerId:r[0].id,familyId:"1",familyLabel:"Family 1",code:"article1",description:"Manufacturer's first article"}],a=[{id:"1",manufacturerId:r[0].id,manufacturerLabel:r[0].label,imageId:i[0].id,code:"oven.model1",label:"Model 1",connectable:!0},{id:"2",manufacturerId:r[0].id,manufacturerLabel:r[0].label,imageId:i[0].id,code:"oven.model2",label:"Model 2",connectable:!1}],e=[{id:"1",modelId:a[0].id,code:"power",label:"Power",correlated:!1},{id:"2",modelId:a[0].id,code:"temperatures",label:"Temperatures",correlated:!0},{id:"3",modelId:a[0].id,code:"energies",label:"Energies",correlated:!0}],n=[{id:"1",modelId:a[0].id,dataCategoryId:e[0].id,dataCategoryCode:e[0].code,dataCategoryLabel:e[0].label,code:"power.power",label:"Power",description:"Device's power status",dataTable:1,useOnlyMappings:!1,unit:"",codes:["power.power","pp"],mappings:[]},{id:"2",modelId:a[0].id,dataCategoryId:e[1].id,dataCategoryCode:e[1].code,dataCategoryLabel:e[1].label,code:"temperatures.level",label:"Level",description:"Device's temperature level",dataTable:2,useOnlyMappings:!1,unit:"",codes:["temperatures.level","tl"],mappings:[]},{id:"3",modelId:a[0].id,dataCategoryId:e[1].id,dataCategoryCode:e[1].code,dataCategoryLabel:e[1].label,code:"temperatures.value",label:"Value",description:"Device's temperature value",dataTable:1,useOnlyMappings:!1,unit:"°C",codes:["temperatures.value","tv"],mappings:[]},{id:"4",modelId:a[0].id,dataCategoryId:e[2].id,dataCategoryCode:e[2].code,dataCategoryLabel:e[2].label,code:"energies.level",label:"Value",description:"Device's energy level",dataTable:2,useOnlyMappings:!1,unit:"",codes:["energies.level","tl"],mappings:[]},{id:"5",modelId:a[0].id,dataCategoryId:e[2].id,dataCategoryCode:e[2].code,dataCategoryLabel:e[2].label,code:"energies.value",label:"Value",description:"Device's energy value",dataTable:1,useOnlyMappings:!1,unit:"kWh",codes:["energies.value","tv"],mappings:[]}],m=[{id:"1",imageId:i[0].id,label:"Organisation",userOrganisationsCount:15},{id:"2",imageId:i[0].id,label:"Dative",userOrganisationsCount:145},{id:"3",imageId:i[0].id,label:"Bongard",userOrganisationsCount:7},{id:"4",imageId:i[0].id,label:"Organisation 4",userOrganisationsCount:4},{id:"5",imageId:i[0].id,label:"Organisation 5",userOrganisationsCount:9}],E=Array.from(Array(15).keys()).map(u=>({id:u.toString(),organisationId:m[0].id,imageId:i[0].id,icon:`mdi-numeric-${u}-circle`,code:`number.${u}`,label:`Group ${u}`,tags:[],path:[],groupsIds:[],deviceOrganisationsIds:[],modelsIds:[],recursiveGroupsIds:[],recursiveDeviceOrganisationsIds:[],recursiveModelsIds:[],parentId:null})),s=[{id:"1",modelId:a[0].id,dataCategoryId:e[0].id,dataCategoryLabel:e[0].label,dataDefinitionId:n[0].id,dataDefinitionLabel:n[0].label,groupById:null,groupByLabel:null,label:"Status",index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",modelId:a[0].id,dataCategoryId:e[1].id,dataCategoryLabel:e[1].label,dataDefinitionId:n[2].id,dataDefinitionLabel:n[2].label,groupById:n[1].id,groupByLabel:n[1].label,label:"Temperature",index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!1,iconDefault:null,colorDefault:null},{id:"3",modelId:a[0].id,dataCategoryId:e[2].id,dataCategoryLabel:e[2].label,dataDefinitionId:n[4].id,dataDefinitionLabel:n[4].label,groupById:n[3].id,groupByLabel:n[3].label,label:"Energy",index:1,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-power-plug",colorDefault:"#E3E3E3"}],l=new Date,o=new Date(l.getTime()-5*60*1e3),d=new Date(l.getTime()-10*60*1e3),S=new Date(new Date().getTime()-24*60*60*1e3),T=new Date(S.getTime()-5*60*1e3),y=new Date(S.getTime()-5*60*1e3),b=new Date(new Date().getTime()-7*24*60*60*1e3),c=new Date(b.getTime()-5*60*1e3),g=new Date(b.getTime()-10*60*1e3),I=[{id:"1",sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),status:1,icon:"mdi-wifi",color:"#33FF33"},{id:"2",sourceTimestamp:y.toISOString(),enqueuedTimestamp:T.toISOString(),processedTimestamp:S.toISOString(),status:2,icon:"mdi-wifi",color:"#999933"},{id:"3",sourceTimestamp:g.toISOString(),enqueuedTimestamp:c.toISOString(),processedTimestamp:b.toISOString(),status:4,icon:"mdi-wifi",color:"#FF3333"}],O=[{id:"3",sourceTimestamp:g.toISOString(),enqueuedTimestamp:c.toISOString(),label:"Critical error",status:3,criticity:3},{id:"3",sourceTimestamp:g.toISOString(),enqueuedTimestamp:c.toISOString(),label:"Warning",status:3,criticity:2},{id:"3",sourceTimestamp:g.toISOString(),enqueuedTimestamp:c.toISOString(),label:"Information",status:3,criticity:1}],p=[{id:"1",statuses:[{modelStatusId:s[0].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:null,value:"On",unit:null,label:"Status",icon:"mdi-power-standby",color:"#33FF33"}]},{modelStatusId:s[1].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"1",value:"240",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#FF3333"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"2",value:"240",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#FF3333"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"3",value:"120",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#999933"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"4",value:"120",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#999933"}]},{modelStatusId:s[2].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"1",value:"2400",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#33FF33"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"2",value:"2400",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#33FF33"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"3",value:"800",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#999933"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"4",value:"800",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#999933"}]}]},{id:"2",statuses:[{modelStatusId:s[0].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:null,value:"Stand-by",unit:null,label:"Status",icon:"mdi-power-standby",color:"#999933"}]}]},{id:"3",statuses:[]}],A=[{id:"1",deviceId:"1",manufacturerId:r[0].id,manufacturerLabel:r[0].label,articleId:t[0].id,articleLabel:t[0].label,modelId:a[0].id,modelLabel:a[0].label,ownerId:null,ownerLabel:null,organisationId:m[0].id,managerId:null,managerName:null,locationId:null,locationLabel:null,locationAddress:null,groupId:null,groupLabel:null,groupIcon:null,label:"Device 1",code:"980001",imageId:i[0].id,tags:[],unrestricted:!0,online:1,meta:{},modelStatuses:s.slice(),status:p[0],connectivity:I[0],alerts:[],worstAlert:null,articleCode:t[0].code,familyId:t[0].familyId,familyLabel:t[0].familyLabel,description:"Organisation's first device",options:[],path:[]},{id:"2",deviceId:"2",manufacturerId:r[0].id,manufacturerLabel:r[0].label,articleId:t[0].id,articleLabel:t[0].label,modelId:a[0].id,modelLabel:a[0].label,ownerId:null,ownerLabel:null,organisationId:m[0].id,managerId:null,managerName:null,locationId:null,locationLabel:null,locationAddress:null,groupId:null,groupLabel:null,groupIcon:null,label:"Device 2",code:"980002",imageId:i[0].id,tags:[],unrestricted:!0,online:2,meta:{},modelStatuses:s.slice(),status:p[1],connectivity:I[1],alerts:[],worstAlert:null,articleCode:t[0].code,familyId:t[0].familyId,familyLabel:t[0].familyLabel,description:"Organisation's second device",options:[],path:[]},{id:"3",deviceId:"3",manufacturerId:r[0].id,manufacturerLabel:r[0].label,articleId:t[0].id,articleLabel:t[0].label,modelId:a[0].id,modelLabel:a[0].label,ownerId:null,ownerLabel:null,organisationId:m[0].id,managerId:null,managerName:null,locationId:null,locationLabel:null,locationAddress:null,groupId:null,groupLabel:null,groupIcon:null,label:"Device 3",code:"980003",imageId:i[0].id,tags:[],unrestricted:!0,online:2,meta:{},modelStatuses:s.slice(),status:p[2],connectivity:I[2],alerts:O,worstAlert:O[0],articleCode:t[0].code,familyId:t[0].familyId,familyLabel:t[0].familyLabel,description:"Organisation's third device",options:[],path:[]}];export{A as D,E as G,i as I,r as M,m as O,e as a,n as b,a as c};
