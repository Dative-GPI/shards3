import{F as d}from"./FSDeviceOrganisationTileUI-7867001b.js";import"./vue.esm-bundler-41eda46b.js";import"./useSlots-e8ea556e.js";import"./useColors-c08b974a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d4a333d5.js";import"./css-35e8563f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VWindowItem-2607b71c.js";import"./useRender-b120e115.js";import"./group-53103ce4.js";import"./proxiedModel-ebe72836.js";import"./lazy-c18d183e.js";import"./ssrBoot-5c61be23.js";import"./transition-87ba966b.js";import"./locale-396b54fa.js";import"./tag-585bbcbd.js";import"./VBtn-6a9dd5a0.js";import"./border-520a2ee2.js";import"./color-7b12579a.js";import"./density-23ec5fb8.js";import"./elevation-74b749d9.js";import"./rounded-d3e26840.js";import"./dimensions-dbe989d9.js";import"./loader-912691d5.js";import"./VProgressCircular-e304a31d.js";import"./resizeObserver-ea3ec7d1.js";import"./VIcon-7bb7bc51.js";import"./router-c7b42b5f.js";import"./index-35b22454.js";import"./VDefaultsProvider-9f290faa.js";import"./VImg-d6020fb6.js";import"./index-2b17760e.js";import"./FSButton-cdb730f5.js";import"./FSClickable-fa1cff73.js";import"./FSCard-dc76bdb2.js";import"./FSCol-282cc158.js";import"./FSRow-1508d56d.js";import"./FSSpan-8af5ddcc.js";import"./FSIcon-6dc797d3.js";import"./FSChip-0962e240.js";import"./FSText-e9a7e0f6.js";import"./useAppTimeZone-fd64682f.js";import"./useTranslations-3bd97805.js";import"./FSColor-1b3ef09e.js";import"./VMenu-40d1577e.js";import"./VOverlay-aedbdfa0.js";import"./forwardRefs-e658ad70.js";import"./display-40264291.js";import"./FSDivider-aae09b29.js";import"./FSImage-9950e339.js";import"./FSLoader-b9d57263.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-00c2f0ee.js";import"./FSTile-d893437a.js";import"./FSCheckbox-9aa0fdbb.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-6bfa0431.js";import"./VLabel-674db0eb.js";import"./VInput-1f6e9963.js";import"./index-ad5199eb.js";const Te={title:"Foundation/Shared/Tiles/DeviceOrganisation",component:d,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:1,icon:"mdi-wifi",color:"#00FF00"},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:2,icon:"mdi-wifi",color:"#00FFFF"},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:3,icon:"mdi-wifi",color:"#FFFF00"},{id:"4",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:4,icon:"mdi-wifi",color:"#FF0000"},{id:"5",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:0,icon:null,color:null}],t=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too hot",status:3,criticity:3},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too cold",status:6,criticity:1},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too late",status:5,criticity:1}],e=[{id:"1",label:"State",inline:!0,index:0,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",label:"Folder",inline:!0,index:1,showDefault:!1},{id:"3",label:"Luminosity",inline:!0,index:2,showDefault:!0,iconDefault:"mdi-lightbulb-outline",colorDefault:"#E3E3E3"},{id:"4",label:"Lock",inline:!0,index:3,showDefault:!0,iconDefault:"mdi-lock-outline",colorDefault:"#E3E3E3"},{id:"5",label:"Print",inline:!0,index:4,showDefault:!0,iconDefault:"mdi-printer-outline",colorDefault:"#E3E3E3"},{id:"6",label:"Temperatures",inline:!1,index:0,groupById:"1",groupByLabel:"Level",showDefault:!1},{id:"7",label:"Energies",inline:!1,index:1,groupById:"2",groupByLabel:"Level",showDefault:!1},{id:"8",label:"Recipes",inline:!1,index:2,groupById:"2",groupByLabel:"Level",showDefault:!0,iconDefault:"mdi-chef-hat",colorDefault:"#E3E3E3"}],s=[{modelStatusId:"1",statusGroups:[{label:"State",value:"On",icon:"mdi-power",color:"#009933",sourceTimestamp:16233456e5}]},{modelStatusId:"2",statusGroups:[{label:"Folder",value:"Check",icon:"mdi-folder-check-outline",color:"#003399",sourceTimestamp:16233456e5}]},{modelStatusId:"3",statusGroups:[{label:"Luminosity",value:"Bright",icon:"mdi-lightbulb-outline",color:"#996699",sourceTimestamp:16233456e5}]},{modelStatusId:"4",statusGroups:[{label:"Lock",value:"Locked",icon:"mdi-lock-outline",color:"#999933",sourceTimestamp:16233456e5}]},{modelStatusId:"5",statusGroups:[{label:"Print",value:"Printing",icon:"mdi-printer-outline",color:"#338888",sourceTimestamp:16233456e5}]},{modelStatusId:"6",statusGroups:[{label:"Temperatures",value:"200",groupByValue:"1",unit:"°C",icon:"mdi-thermometer",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Temperatures",value:"50",groupByValue:"2",unit:"°C",icon:"mdi-thermometer",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"7",statusGroups:[{label:"Energies",value:"100",groupByValue:"1",unit:"kWh",icon:"mdi-flash",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Energies",value:"50",groupByValue:"2",unit:"kWh",icon:"mdi-flash",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"8",statusGroups:[{label:"Recipes",value:"Bread",icon:"mdi-chef-hat",color:"#0000FF",sourceTimestamp:16233456e5}]}],n={args:{args:{values:[{id:"1",label:"Bakery Almeida Guerra",code:"930000000009920093000000000992009300000000099200",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"2",label:"Bakery João Coelho",code:"9300000000099201",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"3",label:"Bakery Estevão Mendes",code:"9300000000099202",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"4",label:"Bakery Rosária Corte-Real",code:"9300000000099203",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[],deviceStatuses:[]},{id:"5",label:"Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",code:"9300000000099204",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]},{id:"6",label:"Bakery Luís Castro",code:"9300000000099205",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:[]},{id:"7",label:"Bakery Guiomar Hernandes de Medeiros",code:"9300000000099206",imageId:"1",deviceConnectivity:i[4],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"8",label:"Bakery Rubem Garriço",code:"9300000000099207",imageId:"1",deviceConnectivity:null,deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"9",label:"Bakery Tiburcio Furtado Rosa",code:"9300000000099208",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:e,deviceStatuses:s},{id:"10",label:"Bakery Naiara Mascarenhas Bento",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:s},{id:"11",label:"Bakery Nelinha Ribeiro",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]}],selected:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],onClick:a=>{console.log(a)}}},render:(a,{argTypes:o})=>({components:{FSDeviceOrganisationTileUI:d},props:Object.keys(o),setup(){return{...a}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTileUI
        v-for="(deviceOrganisation, index) in args.values"
        :key="index"
        :imageId="deviceOrganisation.imageId"
        :label="deviceOrganisation.label"
        :code="deviceOrganisation.code"
        :deviceConnectivity="deviceOrganisation.deviceConnectivity"
        :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
        :deviceAlerts="deviceOrganisation.deviceAlerts"
        :modelStatuses="deviceOrganisation.modelStatuses"
        :deviceStatuses="deviceOrganisation.deviceStatuses"
        href="www.google.fr"
        v-model="args.selected[index]"
      />
    </div>`})},l={args:{args:{values:[{id:"1",label:"Bakery Almeida Guerra",code:"9300000000099200",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"2",label:"Bakery João Coelho",code:"9300000000099201",deviceConnectivity:i[0],deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"3",label:"Bakery Estevão Mendes",code:"9300000000099202",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"4",label:"Bakery Rosária Corte-Real",code:"9300000000099203",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[],deviceStatuses:[]},{id:"5",label:"Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",code:"9300000000099204",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]},{id:"6",label:"Bakery Luís Castro",code:"9300000000099205",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:[]},{id:"7",label:"Bakery Guiomar Hernandes de Medeiras",code:"9300000000099206",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"8",label:"Bakery Rubem Garriço",code:"9300000000099207",deviceConnectivity:null,deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"9",label:"Bakery Tiburcio Furtado Rosa",code:"9300000000099208",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:e,deviceStatuses:s},{id:"10",label:"Bakery Naiara Mascarenhas Bento",code:"9300000000099209",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:s},{id:"11",label:"Bakery Nelinha Ribeiro",code:"9300000000099209",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]}],selected:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},render:(a,{argTypes:o})=>({components:{FSDeviceOrganisationTileUI:d},props:Object.keys(o),setup(){return{...a}},template:`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSDeviceOrganisationTileUI
      v-for="(deviceOrganisation, index) in args.values"
      :key="index"
      :label="deviceOrganisation.label"
      :code="deviceOrganisation.code"
      :deviceConnectivity="deviceOrganisation.deviceConnectivity"
      :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
      :deviceAlerts="deviceOrganisation.deviceAlerts"
      :modelStatuses="deviceOrganisation.modelStatuses"
      :deviceStatuses="deviceOrganisation.deviceStatuses"
      v-model="args.selected[index]"
    />
  </div>`})};var r,c,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Bakery Almeida Guerra",
        code: "930000000009920093000000000992009300000000099200",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "2",
        label: "Bakery João Coelho",
        code: "9300000000099201",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "3",
        label: "Bakery Estevão Mendes",
        code: "9300000000099202",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "4",
        label: "Bakery Rosária Corte-Real",
        code: "9300000000099203",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "5",
        label: "Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",
        code: "9300000000099204",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }, {
        id: "6",
        label: "Bakery Luís Castro",
        code: "9300000000099205",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: []
      }, {
        id: "7",
        label: "Bakery Guiomar Hernandes de Medeiros",
        code: "9300000000099206",
        imageId: "1",
        deviceConnectivity: connectivities[4],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "8",
        label: "Bakery Rubem Garriço",
        code: "9300000000099207",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "9",
        label: "Bakery Tiburcio Furtado Rosa",
        code: "9300000000099208",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "10",
        label: "Bakery Naiara Mascarenhas Bento",
        code: "9300000000099209",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: deviceStatuses
      }, {
        id: "11",
        label: "Bakery Nelinha Ribeiro",
        code: "9300000000099209",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }],
      selected: [false, false, false, false, false, false, false, false, false, false, false],
      onClick: (item: any) => {
        console.log(item);
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDeviceOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTileUI
        v-for="(deviceOrganisation, index) in args.values"
        :key="index"
        :imageId="deviceOrganisation.imageId"
        :label="deviceOrganisation.label"
        :code="deviceOrganisation.code"
        :deviceConnectivity="deviceOrganisation.deviceConnectivity"
        :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
        :deviceAlerts="deviceOrganisation.deviceAlerts"
        :modelStatuses="deviceOrganisation.modelStatuses"
        :deviceStatuses="deviceOrganisation.deviceStatuses"
        href="www.google.fr"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var v,m,p;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Bakery Almeida Guerra",
        code: "9300000000099200",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "2",
        label: "Bakery João Coelho",
        code: "9300000000099201",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "3",
        label: "Bakery Estevão Mendes",
        code: "9300000000099202",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "4",
        label: "Bakery Rosária Corte-Real",
        code: "9300000000099203",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "5",
        label: "Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",
        code: "9300000000099204",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }, {
        id: "6",
        label: "Bakery Luís Castro",
        code: "9300000000099205",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: []
      }, {
        id: "7",
        label: "Bakery Guiomar Hernandes de Medeiras",
        code: "9300000000099206",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "8",
        label: "Bakery Rubem Garriço",
        code: "9300000000099207",
        deviceConnectivity: null,
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "9",
        label: "Bakery Tiburcio Furtado Rosa",
        code: "9300000000099208",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "10",
        label: "Bakery Naiara Mascarenhas Bento",
        code: "9300000000099209",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: deviceStatuses
      }, {
        id: "11",
        label: "Bakery Nelinha Ribeiro",
        code: "9300000000099209",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }],
      selected: [false, false, false, false, false, false, false, false, false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDeviceOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSDeviceOrganisationTileUI
      v-for="(deviceOrganisation, index) in args.values"
      :key="index"
      :label="deviceOrganisation.label"
      :code="deviceOrganisation.code"
      :deviceConnectivity="deviceOrganisation.deviceConnectivity"
      :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
      :deviceAlerts="deviceOrganisation.deviceAlerts"
      :modelStatuses="deviceOrganisation.modelStatuses"
      :deviceStatuses="deviceOrganisation.deviceStatuses"
      v-model="args.selected[index]"
    />
  </div>\`
  })
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Oe=["Variations","Imageless"];export{l as Imageless,n as Variations,Oe as __namedExportsOrder,Te as default};
