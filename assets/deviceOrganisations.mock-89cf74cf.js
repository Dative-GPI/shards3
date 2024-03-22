const s=[{id:"1",raw:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",blurHash:{blurHash:"LEHLk~WB2yk8pyo0adR*.7kCMdnj",width:32,height:32}}],r=[{id:"1",imageId:s[0].id,label:"BakeryOvens"}],a=[{id:"1",imageId:s[0].id,label:"Article 1",manufacturerId:r[0].id,familyId:"1",familyLabel:"Family 1",code:"article1",description:"Manufacturer's first article"}],t=[{id:"1",manufacturerId:r[0].id,manufacturerLabel:r[0].label,imageId:s[0].id,code:"oven.model1",label:"Model 1",connectable:!0}],e=[{id:"1",modelId:t[0].id,code:"power",label:"Power",correlated:!1},{id:"2",modelId:t[0].id,code:"temperatures",label:"Temperatures",correlated:!0},{id:"3",modelId:t[0].id,code:"energies",label:"Energies",correlated:!0}],l=[{id:"1",modelId:t[0].id,dataCategoryId:e[0].id,dataCategoryCode:e[0].code,dataCategoryLabel:e[0].label,code:"power.power",label:"Power",description:"Device's power status",dataTable:1,useOnlyMappings:!1,unit:"",codes:["power.power","pp"],mappings:[]},{id:"2",modelId:t[0].id,dataCategoryId:e[1].id,dataCategoryCode:e[1].code,dataCategoryLabel:e[1].label,code:"temperatures.level",label:"Level",description:"Device's temperature level",dataTable:2,useOnlyMappings:!1,unit:"",codes:["temperatures.level","tl"],mappings:[]},{id:"3",modelId:t[0].id,dataCategoryId:e[1].id,dataCategoryCode:e[1].code,dataCategoryLabel:e[1].label,code:"temperatures.value",label:"Value",description:"Device's temperature value",dataTable:1,useOnlyMappings:!1,unit:"°C",codes:["temperatures.value","tv"],mappings:[]},{id:"4",modelId:t[0].id,dataCategoryId:e[2].id,dataCategoryCode:e[2].code,dataCategoryLabel:e[2].label,code:"energies.level",label:"Value",description:"Device's energy level",dataTable:2,useOnlyMappings:!1,unit:"",codes:["energies.level","tl"],mappings:[]},{id:"5",modelId:t[0].id,dataCategoryId:e[2].id,dataCategoryCode:e[2].code,dataCategoryLabel:e[2].label,code:"energies.value",label:"Value",description:"Device's energy value",dataTable:1,useOnlyMappings:!1,unit:"kWh",codes:["energies.value","tv"],mappings:[]}],m=[{id:"1",imageId:s[0].id,label:"Organisation",userOrganisationsCount:15}],y=[{id:"1",organisationId:m[0].id,imageId:s[0].id,icon:"",code:"number1",label:"First group",tags:[],path:[],groupsIds:["10","11"],deviceOrganisationsIds:["10","11","12"],modelsIds:[],recursiveGroupsIds:["10","11"],recursiveDeviceOrganisationsIds:["10","11","12"],recursiveModelsIds:[]},{id:"2",organisationId:m[0].id,imageId:s[0].id,icon:"",code:"number2",label:"Second group",tags:[],path:[],groupsIds:["20"],deviceOrganisationsIds:["20","21","22"],modelsIds:[],recursiveGroupsIds:["20","21","22"],recursiveDeviceOrganisationsIds:["20","21","22","23","24","25","26","27","28","29","200","201"],recursiveModelsIds:[]}],n=[{id:"1",modelId:t[0].id,dataCategoryId:e[0].id,dataCategoryLabel:e[0].label,dataDefinitionId:l[0].id,dataDefinitionLabel:l[0].label,label:"Status",inline:!0,index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",modelId:t[0].id,dataCategoryId:e[1].id,dataCategoryLabel:e[1].label,dataDefinitionId:l[2].id,dataDefinitionLabel:l[2].label,groupById:l[1].id,groupByLabel:l[1].label,label:"Temperature",inline:!1,index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!1},{id:"3",modelId:t[0].id,dataCategoryId:e[2].id,dataCategoryLabel:e[2].label,dataDefinitionId:l[4].id,dataDefinitionLabel:l[4].label,groupById:l[3].id,groupByLabel:l[3].label,label:"Energy",inline:!1,index:1,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-power-plug",colorDefault:"#E3E3E3"}],i=new Date,o=new Date(i.getTime()-5*60*1e3),d=new Date(i.getTime()-10*60*1e3),g=new Date(new Date().getTime()-24*60*60*1e3),T=new Date(g.getTime()-5*60*1e3),O=new Date(g.getTime()-5*60*1e3),p=new Date(new Date().getTime()-7*24*60*60*1e3),u=new Date(p.getTime()-5*60*1e3),c=new Date(p.getTime()-10*60*1e3),I=[{id:"1",sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),status:1,icon:"mdi-wifi",color:"#33FF33"},{id:"2",sourceTimestamp:O.toISOString(),enqueuedTimestamp:T.toISOString(),processedTimestamp:g.toISOString(),status:2,icon:"mdi-wifi",color:"#999933"},{id:"3",sourceTimestamp:c.toISOString(),enqueuedTimestamp:u.toISOString(),processedTimestamp:p.toISOString(),status:4,icon:"mdi-wifi",color:"#FF3333"}],S=[{id:"3",sourceTimestamp:c.toISOString(),enqueuedTimestamp:u.toISOString(),label:"Critical error",status:3,criticity:3},{id:"3",sourceTimestamp:c.toISOString(),enqueuedTimestamp:u.toISOString(),label:"Warning",status:3,criticity:2},{id:"3",sourceTimestamp:c.toISOString(),enqueuedTimestamp:u.toISOString(),label:"Information",status:3,criticity:1}],b=[{id:"1",statuses:[{modelStatusId:n[0].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),value:"On",label:"Status",icon:"mdi-power-standby",color:"#33FF33"}]},{modelStatusId:n[1].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),groupByValue:"1",value:"240",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#FF3333"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),groupByValue:"2",value:"240",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#FF3333"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),groupByValue:"3",value:"120",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#999933"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),groupByValue:"4",value:"120",unit:"°C",label:"Temperature",icon:"mdi-thermometer",color:"#999933"}]},{modelStatusId:n[2].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),groupByValue:"1",value:"2400",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#33FF33"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),groupByValue:"2",value:"2400",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#33FF33"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),groupByValue:"3",value:"800",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#999933"},{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),groupByValue:"4",value:"800",unit:"W",label:"Energy",icon:"mdi-power-plug",color:"#999933"}]}]},{id:"2",statuses:[{modelStatusId:n[0].id,statusGroups:[{sourceTimestamp:d.toISOString(),enqueuedTimestamp:o.toISOString(),processedTimestamp:i.toISOString(),value:"Stand-by",label:"Status",icon:"mdi-power-standby",color:"#999933"}]}]}],E=[{id:"1",deviceId:"1",manufacturerId:r[0].id,manufacturerLabel:r[0].label,articleId:a[0].id,articleLabel:a[0].label,modelId:t[0].id,modelLabel:t[0].label,organisationId:m[0].id,label:"Device 1",code:"980001",imageId:s[0].id,tags:[],unrestricted:!0,online:1,meta:{},modelStatuses:n.slice(),status:b[0],connectivity:I[0],alerts:[],articleCode:a[0].code,familyId:a[0].familyId,familyLabel:a[0].familyLabel,description:"Organisation's first device",options:[],path:[]},{id:"2",deviceId:"2",manufacturerId:r[0].id,manufacturerLabel:r[0].label,articleId:a[0].id,articleLabel:a[0].label,modelId:t[0].id,modelLabel:t[0].label,organisationId:m[0].id,label:"Device 2",code:"980002",imageId:s[0].id,tags:[],unrestricted:!0,online:2,meta:{},modelStatuses:n.slice(),status:b[1],connectivity:I[1],alerts:[],articleCode:a[0].code,familyId:a[0].familyId,familyLabel:a[0].familyLabel,description:"Organisation's second device",options:[],path:[]},{id:"3",deviceId:"3",manufacturerId:r[0].id,manufacturerLabel:r[0].label,articleId:a[0].id,articleLabel:a[0].label,modelId:t[0].id,modelLabel:t[0].label,organisationId:m[0].id,label:"Device 3",code:"980003",imageId:s[0].id,tags:[],unrestricted:!0,online:2,meta:{},modelStatuses:n.slice(),connectivity:I[2],worstAlert:S[0],alerts:S,articleCode:a[0].code,familyId:a[0].familyId,familyLabel:a[0].familyLabel,description:"Organisation's third device",options:[],path:[]}];export{E as D,y as G,s as I};
