import{F as d}from"./FSDeviceOrganisationTileUI-79a8e48c.js";import"./vue.esm-bundler-3386cb71.js";import"./useSlots-347b7354.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./css-bcfd232c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VWindowItem-6e8ee9a9.js";import"./useRender-09edae02.js";import"./group-28a085bd.js";import"./proxiedModel-e633c715.js";import"./lazy-99e4da96.js";import"./ssrBoot-9bcdb33f.js";import"./transition-53ccad39.js";import"./locale-cd7ecdad.js";import"./tag-3fcf7e02.js";import"./VBtn-5871aaeb.js";import"./border-8045ffee.js";import"./color-2c4e2e53.js";import"./density-e280830a.js";import"./elevation-cadef23c.js";import"./rounded-1ab8dee0.js";import"./dimensions-4c437c5c.js";import"./loader-885a1a56.js";import"./VProgressCircular-14287b05.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./router-773ce02f.js";import"./index-dcfb76a3.js";import"./VDefaultsProvider-6c176a11.js";import"./VImg-cbb35f88.js";import"./index-3382552b.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./FSCol-30a69fbd.js";import"./FSRow-9733beba.js";import"./FSSpan-ecd93ab1.js";import"./FSIcon-d790d92f.js";import"./FSChip-6edae329.js";import"./FSText-81a21680.js";import"./useAppTimeZone-ddbea443.js";import"./useTranslations-f4113d7b.js";import"./FSColor-27fe9eb0.js";import"./VMenu-e9f9429e.js";import"./VOverlay-c04ebd43.js";import"./forwardRefs-e658ad70.js";import"./display-ae851a2a.js";import"./FSDivider-be24c042.js";import"./FSImage-e31cb187.js";import"./FSLoader-dfd50c8b.js";import"./base-0de1729e.js";import"./serviceFactory-3393b4e4.js";import"./lodash-569b8a6d.js";import"./composableFactory-0f23559b.js";import"./FSTile-d4670fc1.js";import"./FSCheckbox-8b71851a.js";import"./useRules-e6c68f0f.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./VLabel-92708ef4.js";import"./VInput-567a126f.js";import"./index-8c130ea8.js";const Oe={title:"Foundation/Shared/Tiles/DeviceOrganisation",component:d,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:1,icon:"mdi-wifi",color:"#00FF00"},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:2,icon:"mdi-wifi",color:"#00FFFF"},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:3,icon:"mdi-wifi",color:"#FFFF00"},{id:"4",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:4,icon:"mdi-wifi",color:"#FF0000"},{id:"5",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:0,icon:null,color:null}],t=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too hot",status:3,criticity:3},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too cold",status:6,criticity:1},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too late",status:5,criticity:1}],e=[{id:"1",label:"State",inline:!0,index:0,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",label:"Folder",inline:!0,index:1,showDefault:!1},{id:"3",label:"Luminosity",inline:!0,index:2,showDefault:!0,iconDefault:"mdi-lightbulb-outline",colorDefault:"#E3E3E3"},{id:"4",label:"Lock",inline:!0,index:3,showDefault:!0,iconDefault:"mdi-lock-outline",colorDefault:"#E3E3E3"},{id:"5",label:"Print",inline:!0,index:4,showDefault:!0,iconDefault:"mdi-printer-outline",colorDefault:"#E3E3E3"},{id:"6",label:"Temperatures",inline:!1,index:0,groupById:"1",groupByLabel:"Level",showDefault:!1},{id:"7",label:"Energies",inline:!1,index:1,groupById:"2",groupByLabel:"Level",showDefault:!1},{id:"8",label:"Recipes",inline:!1,index:2,groupById:"2",groupByLabel:"Level",showDefault:!0,iconDefault:"mdi-chef-hat",colorDefault:"#E3E3E3"}],s=[{modelStatusId:"1",statusGroups:[{label:"State",value:"On",icon:"mdi-power",color:"#009933",sourceTimestamp:16233456e5}]},{modelStatusId:"2",statusGroups:[{label:"Folder",value:"Check",icon:"mdi-folder-check-outline",color:"#003399",sourceTimestamp:16233456e5}]},{modelStatusId:"3",statusGroups:[{label:"Luminosity",value:"Bright",icon:"mdi-lightbulb-outline",color:"#996699",sourceTimestamp:16233456e5}]},{modelStatusId:"4",statusGroups:[{label:"Lock",value:"Locked",icon:"mdi-lock-outline",color:"#999933",sourceTimestamp:16233456e5}]},{modelStatusId:"5",statusGroups:[{label:"Print",value:"Printing",icon:"mdi-printer-outline",color:"#338888",sourceTimestamp:16233456e5}]},{modelStatusId:"6",statusGroups:[{label:"Temperatures",value:"200",groupByValue:"1",unit:"°C",icon:"mdi-thermometer",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Temperatures",value:"50",groupByValue:"2",unit:"°C",icon:"mdi-thermometer",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"7",statusGroups:[{label:"Energies",value:"100",groupByValue:"1",unit:"kWh",icon:"mdi-flash",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Energies",value:"50",groupByValue:"2",unit:"kWh",icon:"mdi-flash",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"8",statusGroups:[{label:"Recipes",value:"Bread",icon:"mdi-chef-hat",color:"#0000FF",sourceTimestamp:16233456e5}]}],n={args:{args:{values:[{id:"1",label:"Bakery Almeida Guerra",code:"930000000009920093000000000992009300000000099200",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"2",label:"Bakery João Coelho",code:"9300000000099201",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"3",label:"Bakery Estevão Mendes",code:"9300000000099202",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"4",label:"Bakery Rosária Corte-Real",code:"9300000000099203",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[],deviceStatuses:[]},{id:"5",label:"Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",code:"9300000000099204",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]},{id:"6",label:"Bakery Luís Castro",code:"9300000000099205",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:[]},{id:"7",label:"Bakery Guiomar Hernandes de Medeiros",code:"9300000000099206",imageId:"1",deviceConnectivity:i[4],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"8",label:"Bakery Rubem Garriço",code:"9300000000099207",imageId:"1",deviceConnectivity:null,deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"9",label:"Bakery Tiburcio Furtado Rosa",code:"9300000000099208",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:e,deviceStatuses:s},{id:"10",label:"Bakery Naiara Mascarenhas Bento",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:s},{id:"11",label:"Bakery Nelinha Ribeiro",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]}],selected:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],onClick:a=>{console.log(a)}}},render:(a,{argTypes:o})=>({components:{FSDeviceOrganisationTileUI:d},props:Object.keys(o),setup(){return{...a}},template:`
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
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ie=["Variations","Imageless"];export{l as Imageless,n as Variations,Ie as __namedExportsOrder,Oe as default};
