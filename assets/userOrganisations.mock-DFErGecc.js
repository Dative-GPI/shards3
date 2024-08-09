const a=[{blurHash:"LEHLk~WB2yk8pyo0adR*.7kCMdnj",width:32,height:32}],n=[{id:"1",imageId:a[0].id,label:"BakeryOvens"},{id:"2",imageId:a[0].id,label:"RDConstruct"},{id:"3",imageId:a[0].id,label:"DCorp"}],i=[{id:"1",imageId:a[0].id,label:"Article 1",manufacturerId:n[0].id,familyId:"1",familyLabel:"Family 1",code:"article1",description:"Manufacturer's first article"}],t=[{id:"1",manufacturerId:n[0].id,manufacturerLabel:n[0].label,imageId:a[0].id,code:"oven.model1",label:"Model 1",connectable:!0},{id:"2",manufacturerId:n[0].id,manufacturerLabel:n[0].label,imageId:a[0].id,code:"oven.model2",label:"Model 2",connectable:!1}],e=[{id:"1",modelId:t[0].id,code:"power",label:"Power",correlated:!1},{id:"2",modelId:t[0].id,code:"temperatures",label:"Temperatures",correlated:!0},{id:"3",modelId:t[0].id,code:"energies",label:"Energies",correlated:!0}],r=[{id:"1",modelId:t[0].id,dataCategoryId:e[0].id,dataCategoryCode:e[0].code,dataCategoryLabel:e[0].label,code:"power.power",label:"Power",description:"Device's power status",dataTable:1,useOnlyMappings:!1,unit:"",codes:["power.power","pp"],mappings:[]},{id:"2",modelId:t[0].id,dataCategoryId:e[1].id,dataCategoryCode:e[1].code,dataCategoryLabel:e[1].label,code:"temperatures.level",label:"Level",description:"Device's temperature level",dataTable:2,useOnlyMappings:!1,unit:"",codes:["temperatures.level","tl"],mappings:[]},{id:"3",modelId:t[0].id,dataCategoryId:e[1].id,dataCategoryCode:e[1].code,dataCategoryLabel:e[1].label,code:"temperatures.value",label:"Value",description:"Device's temperature value",dataTable:1,useOnlyMappings:!1,unit:"°C",codes:["temperatures.value","tv"],mappings:[]},{id:"4",modelId:t[0].id,dataCategoryId:e[2].id,dataCategoryCode:e[2].code,dataCategoryLabel:e[2].label,code:"energies.level",label:"Value",description:"Device's energy level",dataTable:2,useOnlyMappings:!1,unit:"",codes:["energies.level","tl"],mappings:[]},{id:"5",modelId:t[0].id,dataCategoryId:e[2].id,dataCategoryCode:e[2].code,dataCategoryLabel:e[2].label,code:"energies.value",label:"Value",description:"Device's energy value",dataTable:1,useOnlyMappings:!1,unit:"kWh",codes:["energies.value","tv"],mappings:[]}],L=[{id:"1",label:"folder 1",code:"code 1",colors:["#FF0000"],icon:"mdi-folder-outline",path:[],tags:["tag 1"],organisationId:"1",imageId:a[0].id,parentId:null,parentLabel:null,parentIcon:null},{id:"2",label:"folder 2",code:"code 2",colors:["#FF0000","#00FF00","#0000FF"],icon:"mdi-folder-outline",path:[],tags:["tag 2"],organisationId:"2",parentId:null,parentLabel:null,parentIcon:null,imageId:null},{id:"3",label:"folder 3",code:"code 3",colors:[],icon:"mdi-folder-outline",path:[],tags:["tag 3"],organisationId:"3",parentId:null,parentLabel:null,parentIcon:null,imageId:null}],m=[{id:"1",imageId:a[0].id,label:"Organisation",userOrganisationsCount:15,adminId:null,adminName:null},{id:"2",imageId:a[0].id,label:"Dative",userOrganisationsCount:145,adminId:null,adminName:null},{id:"3",imageId:a[0].id,label:"Bongard",userOrganisationsCount:7,adminId:null,adminName:null},{id:"4",imageId:a[0].id,label:"Organisation 4",userOrganisationsCount:4,adminId:null,adminName:null},{id:"5",imageId:a[0].id,label:"Organisation 5",userOrganisationsCount:9,adminId:null,adminName:null}],O=s=>{switch(s){case"10":return"1";case"11":return"1";case"12":return"10";case"13":return"12";case"15":return"2";default:return null}},D=Array.from(Array(15).keys()).map(s=>({id:s.toString(),organisationId:m[0].id,imageId:a[0].id,icon:`mdi-numeric-${s}-circle`,code:`number.${s}`,label:`Group ${s}`,tags:[...Array.from(Array(s).keys()).map(y=>`tag-${y}`)],path:[],groupsIds:[],deviceOrganisationsIds:[],modelsIds:[],recursiveGroupsIds:[],recursiveDeviceOrganisationsIds:[],recursiveModelsIds:[],parentId:O(s.toString())})),u=[{id:"1",modelId:t[0].id,dataCategoryId:e[0].id,dataCategoryLabel:e[0].label,dataDefinitionId:r[0].id,dataDefinitionLabel:r[0].label,groupById:null,groupByLabel:null,label:"Status",index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",modelId:t[0].id,dataCategoryId:e[1].id,dataCategoryLabel:e[1].label,dataDefinitionId:r[2].id,dataDefinitionLabel:r[2].label,groupById:r[1].id,groupByLabel:r[1].label,label:"Temperature",index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!1,iconDefault:null,colorDefault:null},{id:"3",modelId:t[0].id,dataCategoryId:e[2].id,dataCategoryLabel:e[2].label,dataDefinitionId:r[4].id,dataDefinitionLabel:r[4].label,groupById:r[3].id,groupByLabel:r[3].label,label:"Energy",index:1,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-power-plug",colorDefault:"#E3E3E3"}],l=new Date,o=new Date(l.getTime()-5*60*1e3),d=new Date(l.getTime()-10*60*1e3),S=new Date(new Date().getTime()-24*60*60*1e3),f=new Date(S.getTime()-5*60*1e3),E=new Date(S.getTime()-5*60*1e3),b=new Date(new Date().getTime()-7*24*60*60*1e3),c=new Date(b.getTime()-5*60*1e3),I=new Date(b.getTime()-10*60*1e3),g=[{id:"1",sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),status:1,icon:"mdi-wifi",color:"#33FF33"},{id:"2",sourceTimestamp:E.toISOString(),enqueuedTimestamp:f.toISOString(),processedTimestamp:S.toISOString(),status:2,icon:"mdi-wifi",color:"#999933"},{id:"3",sourceTimestamp:I.toISOString(),enqueuedTimestamp:c.toISOString(),processedTimestamp:b.toISOString(),status:4,icon:"mdi-wifi",color:"#FF3333"}],T=[{id:"3",sourceTimestamp:I.toISOString(),enqueuedTimestamp:c.toISOString(),label:"Critical error",status:3,criticity:3},{id:"3",sourceTimestamp:I.toISOString(),enqueuedTimestamp:c.toISOString(),label:"Warning",status:3,criticity:2},{id:"3",sourceTimestamp:I.toISOString(),enqueuedTimestamp:c.toISOString(),label:"Information",status:3,criticity:1}],p=[{id:"1",statuses:[{modelStatusId:u[0].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:null,value:"On",unit:null,label:"Status",icon:"mdi-power-standby",color:"#33FF33"}]},{modelStatusId:u[1].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"1",value:"240",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#FF3333"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"2",value:"240",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#FF3333"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"3",value:"120",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#999933"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"4",value:"120",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#999933"}]},{modelStatusId:u[2].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"1",value:"2400",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#33FF33"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"2",value:"2400",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#33FF33"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"3",value:"800",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#999933"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:"4",value:"800",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#999933"}]}]},{id:"2",statuses:[{modelStatusId:u[0].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:l.toISOString(),groupByValue:null,value:"Stand-by",unit:null,label:"Status",icon:"mdi-power-standby",color:"#999933"}]}]},{id:"3",statuses:[]}],C=[{id:"1",deviceId:"1",manufacturerId:n[0].id,manufacturerLabel:n[0].label,articleId:i[0].id,articleLabel:i[0].label,modelId:t[0].id,modelLabel:t[0].label,ownerId:null,ownerLabel:null,organisationId:m[0].id,managerId:null,managerName:null,locationId:null,locationLabel:null,locationAddress:null,groupId:null,groupLabel:null,groupIcon:null,label:"Device 1",code:"980001",imageId:a[0].id,tags:[],unrestricted:!0,online:1,meta:{},modelStatuses:u.slice(),status:p[0],connectivity:g[0],alerts:[],worstAlert:null,articleCode:i[0].code,familyId:i[0].familyId,familyLabel:i[0].familyLabel,description:"Organisation's first device",options:[],path:[]},{id:"2",deviceId:"2",manufacturerId:n[0].id,manufacturerLabel:n[0].label,articleId:i[0].id,articleLabel:i[0].label,modelId:t[0].id,modelLabel:t[0].label,ownerId:null,ownerLabel:null,organisationId:m[0].id,managerId:null,managerName:null,locationId:null,locationLabel:null,locationAddress:null,groupId:null,groupLabel:null,groupIcon:null,label:"Device 2",code:"980002",imageId:a[0].id,tags:[],unrestricted:!0,online:2,meta:{},modelStatuses:u.slice(),status:p[1],connectivity:g[1],alerts:[],worstAlert:null,articleCode:i[0].code,familyId:i[0].familyId,familyLabel:i[0].familyLabel,description:"Organisation's second device",options:[],path:[]},{id:"3",deviceId:"3",manufacturerId:n[0].id,manufacturerLabel:n[0].label,articleId:i[0].id,articleLabel:i[0].label,modelId:t[0].id,modelLabel:t[0].label,ownerId:null,ownerLabel:null,organisationId:m[0].id,managerId:null,managerName:null,locationId:null,locationLabel:null,locationAddress:null,groupId:null,groupLabel:null,groupIcon:null,label:"Device 3",code:"980003",imageId:a[0].id,tags:[],unrestricted:!0,online:2,meta:{},modelStatuses:u.slice(),status:p[2],connectivity:g[2],alerts:T,worstAlert:T[0],articleCode:i[0].code,familyId:i[0].familyId,familyLabel:i[0].familyLabel,description:"Organisation's third device",options:[],path:[]}],v=[{id:"1",admin:!0,allowNotifications:!0,allowSms:!0,allowEmails:!0,email:"jean@jean.jean",firstName:"Jean",lastName:"Didier",name:"Jean Didier",organisationId:"1",phoneNumber:"0123456789",roleIcon:"mdi-account",roleLabel:"Admin",roleType:1,tags:["tag1","tag2"],userId:"1",userType:1,validity:1,imageId:a[0].id,roleId:"1"},{id:"2",admin:!1,allowNotifications:!0,allowSms:!0,allowEmails:!0,email:"francois@francois.francois",firstName:"Francois",lastName:"Dupont",name:"Francois Dupont",organisationId:"2",phoneNumber:"9876543210",roleIcon:"mdi-account",roleLabel:"User",roleType:1,tags:["tag3","tag4"],userId:"2",userType:1,validity:1,imageId:a[0].id,roleId:"1"}];export{C as D,L as F,D as G,a as I,n as M,m as O,v as U,e as a,r as b,t as c};
