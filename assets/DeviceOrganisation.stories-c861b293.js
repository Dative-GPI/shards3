import{F as o}from"./FSDeviceOrganisationTileUI-1e0eebbf.js";import"./vue.esm-bundler-6746129d.js";import"./useBreakpoints-b6b44f4d.js";import"./useColors-af9c4499.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-1d0b59d0.js";import"./useTimeZone-147b7e03.js";import"./lodash-569b8a6d.js";import"./theme-dcffbbe6.js";import"./FSSpan-636f18e6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VWindowItem-f7a9c1d2.js";import"./color-28636d86.js";import"./group-6b499f9e.js";import"./locale-6d7be75c.js";import"./lazy-0cd9d9af.js";import"./ssrBoot-456cfc3d.js";import"./transition-909f2bdc.js";import"./VIcon-bfd3bf26.js";import"./VBtn-28e6871b.js";import"./variant-06fe573f.js";import"./density-0267c9a3.js";import"./elevation-6127bd0f.js";import"./rounded-4ccd8171.js";import"./dimensions-b4b52e44.js";import"./loader-ad3b4aa2.js";import"./router-6af7a2c9.js";import"./index-a12920e9.js";import"./VDefaultsProvider-4443303c.js";import"./VProgressCircular-91c9055e.js";import"./resizeObserver-2d06e994.js";import"./VImg-eeb84175.js";import"./index-5d004ff4.js";import"./FSButton-35c738ab.js";import"./FSIcon-e171104f.js";import"./FSRow-40eef247.js";import"./LexicalSelection.prod-bad52e97.js";import"./VOverlay-9bdb643e.js";import"./forwardRefs-e658ad70.js";import"./display-736a0f51.js";import"./FSCard-7c6eaa72.js";import"./FSCol-7dad0d26.js";import"./FSText-0291b8bd.js";import"./FSImage-9b7d9073.js";import"./FSTile-5c08a3d0.js";import"./FSCheckbox-c7e3c9f0.js";const oe={title:"Foundation/Shared/Tiles/DeviceOrganisation",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:1,icon:"mdi-wifi",color:"#00FF00"},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:2,icon:"mdi-wifi",color:"#00FFFF"},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:3,icon:"mdi-wifi",color:"#FFFF00"},{id:"4",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:4,icon:"mdi-wifi",color:"#FF0000"}],t=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too hot",status:3,criticity:3},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too cold",status:6,criticity:1},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too late",status:5,criticity:1}],e=[{id:"1",label:"State",inline:!0,index:0,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",label:"Folder",inline:!0,index:1,showDefault:!1},{id:"3",label:"Luminosity",inline:!0,index:2,showDefault:!0,iconDefault:"mdi-lightbulb-outline",colorDefault:"#E3E3E3"},{id:"4",label:"Lock",inline:!0,index:3,showDefault:!0,iconDefault:"mdi-lock-outline",colorDefault:"#E3E3E3"},{id:"5",label:"Print",inline:!0,index:4,showDefault:!0,iconDefault:"mdi-printer-outline",colorDefault:"#E3E3E3"},{id:"6",label:"Temperatures",inline:!1,index:0,groupById:"1",groupByLabel:"Level",showDefault:!1},{id:"7",label:"Energies",inline:!1,index:1,groupById:"2",groupByLabel:"Level",showDefault:!1},{id:"8",label:"Recipes",inline:!1,index:2,groupById:"2",groupByLabel:"Level",showDefault:!0,iconDefault:"mdi-chef-hat",colorDefault:"#E3E3E3"}],s=[{modelStatusId:"1",statusGroups:[{label:"State",value:"On",icon:"mdi-power",color:"#009933",sourceTimestamp:16233456e5}]},{modelStatusId:"2",statusGroups:[{label:"Folder",value:"Check",icon:"mdi-folder-check-outline",color:"#003399",sourceTimestamp:16233456e5}]},{modelStatusId:"3",statusGroups:[{label:"Luminosity",value:"Bright",icon:"mdi-lightbulb-outline",color:"#996699",sourceTimestamp:16233456e5}]},{modelStatusId:"4",statusGroups:[{label:"Lock",value:"Locked",icon:"mdi-lock-outline",color:"#999933",sourceTimestamp:16233456e5}]},{modelStatusId:"5",statusGroups:[{label:"Print",value:"Printing",icon:"mdi-printer-outline",color:"#338888",sourceTimestamp:16233456e5}]},{modelStatusId:"6",statusGroups:[{label:"Temperatures",value:"200",groupByValue:"1",unit:"°C",icon:"mdi-thermometer",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Temperatures",value:"50",groupByValue:"2",unit:"°C",icon:"mdi-thermometer",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"7",statusGroups:[{label:"Energies",value:"100",groupByValue:"1",unit:"kWh",icon:"mdi-flash",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Energies",value:"50",groupByValue:"2",unit:"kWh",icon:"mdi-flash",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"8",statusGroups:[{label:"Recipes",value:"Bread",icon:"mdi-chef-hat",color:"#0000FF",sourceTimestamp:16233456e5}]}],a={args:{args:{values:[{id:"1",label:"Bakery Almeida Guerra",code:"930000000009920093000000000992009300000000099200",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"2",label:"Bakery João Coelho",code:"9300000000099201",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"3",label:"Bakery Estevão Mendes",code:"9300000000099202",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"4",label:"Bakery Rosária Corte-Real",code:"9300000000099203",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[],deviceStatuses:[]},{id:"5",label:"Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",code:"9300000000099204",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]},{id:"6",label:"Bakery Luís Castro",code:"9300000000099205",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:[]},{id:"7",label:"Bakery Guiomar Hernandes de Medeiros",code:"9300000000099206",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"8",label:"Bakery Rubem Garriço",code:"9300000000099207",imageId:"1",deviceConnectivity:null,deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"9",label:"Bakery Tiburcio Furtado Rosa",code:"9300000000099208",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:e,deviceStatuses:s},{id:"10",label:"Bakery Naiara Mascarenhas Bento",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:s},{id:"11",label:"Bakery Nelinha Ribeiro",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]}],selected:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},render:(l,{argTypes:d})=>({components:{FSDeviceOrganisationTileUI:o},props:Object.keys(d),setup(){return{...l}},template:`
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
        v-model="args.selected[index]"
      />
    </div>`})},n={args:{args:{values:[{id:"1",label:"Bakery Almeida Guerra",code:"9300000000099200",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"2",label:"Bakery João Coelho",code:"9300000000099201",deviceConnectivity:i[0],deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"3",label:"Bakery Estevão Mendes",code:"9300000000099202",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"4",label:"Bakery Rosária Corte-Real",code:"9300000000099203",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[],deviceStatuses:[]},{id:"5",label:"Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",code:"9300000000099204",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]},{id:"6",label:"Bakery Luís Castro",code:"9300000000099205",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:[]},{id:"7",label:"Bakery Guiomar Hernandes de Medeiros",code:"9300000000099206",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"8",label:"Bakery Rubem Garriço",code:"9300000000099207",deviceConnectivity:null,deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"9",label:"Bakery Tiburcio Furtado Rosa",code:"9300000000099208",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:e,deviceStatuses:s},{id:"10",label:"Bakery Naiara Mascarenhas Bento",code:"9300000000099209",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:s},{id:"11",label:"Bakery Nelinha Ribeiro",code:"9300000000099209",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]}],selected:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},render:(l,{argTypes:d})=>({components:{FSDeviceOrganisationTileUI:o},props:Object.keys(d),setup(){return{...l}},template:`
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
  </div>`})};var r,c,v;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        deviceConnectivity: connectivities[0],
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
        :imageId="deviceOrganisation.imageId"
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
}`,...(v=(c=a.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        label: "Bakery Guiomar Hernandes de Medeiros",
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const re=["Variations","Imageless"];export{n as Imageless,a as Variations,re as __namedExportsOrder,oe as default};
