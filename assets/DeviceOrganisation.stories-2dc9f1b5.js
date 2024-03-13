import{F as d}from"./FSDeviceOrganisationTileUI-36adfcbd.js";import"./vue.esm-bundler-72feb788.js";import"./useSlots-a83038d8.js";import"./useColors-1fcec14a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-1fe57d71.js";import"./css-a2b3c3ca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VWindowItem-3327452c.js";import"./useRender-c1d2bc01.js";import"./group-3c229d66.js";import"./locale-8250cc46.js";import"./lazy-5ceada29.js";import"./ssrBoot-76ac3587.js";import"./transition-b3b454fb.js";import"./tag-39781742.js";import"./VBtn-146a85cd.js";import"./border-9f8612cb.js";import"./color-564bd659.js";import"./density-9047996c.js";import"./elevation-2e2adb9f.js";import"./rounded-1c8889d4.js";import"./dimensions-e9edc3f7.js";import"./loader-d80eacaf.js";import"./router-9d57a94c.js";import"./VIcon-cb64ea3c.js";import"./index-980d11d4.js";import"./VDefaultsProvider-979dcd64.js";import"./VProgressCircular-1f974666.js";import"./resizeObserver-297ec059.js";import"./VImg-0c08cfd1.js";import"./index-348a046d.js";import"./FSButton-ef3512a0.js";import"./vue-router-c36f9e85.js";import"./FSCard-692a57a9.js";import"./FSCol-df85c70b.js";import"./FSRow-ae483077.js";import"./FSSpan-0b48c446.js";import"./FSIcon-f69578a9.js";import"./FSChip-2e6fd25d.js";import"./FSText-74aefad9.js";import"./useTimeZone-809ffb6f.js";import"./useTranslations-3d964ba1.js";import"./VMenu-de5b29f3.js";import"./VOverlay-b54f5de0.js";import"./forwardRefs-e658ad70.js";import"./display-23a66237.js";import"./FSDivider-34c32636.js";import"./FSImage-cea37f0b.js";import"./base-3cbdc314.js";import"./lodash-569b8a6d.js";import"./FSTile-e6e91e9b.js";import"./FSCheckbox-69ba5066.js";const Se={title:"Foundation/Shared/Tiles/DeviceOrganisation",component:d,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:1,icon:"mdi-wifi",color:"#00FF00"},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:2,icon:"mdi-wifi",color:"#00FFFF"},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:3,icon:"mdi-wifi",color:"#FFFF00"},{id:"4",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:4,icon:"mdi-wifi",color:"#FF0000"}],t=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too hot",status:3,criticity:3},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too cold",status:6,criticity:1},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too late",status:5,criticity:1}],e=[{id:"1",label:"State",inline:!0,index:0,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",label:"Folder",inline:!0,index:1,showDefault:!1},{id:"3",label:"Luminosity",inline:!0,index:2,showDefault:!0,iconDefault:"mdi-lightbulb-outline",colorDefault:"#E3E3E3"},{id:"4",label:"Lock",inline:!0,index:3,showDefault:!0,iconDefault:"mdi-lock-outline",colorDefault:"#E3E3E3"},{id:"5",label:"Print",inline:!0,index:4,showDefault:!0,iconDefault:"mdi-printer-outline",colorDefault:"#E3E3E3"},{id:"6",label:"Temperatures",inline:!1,index:0,groupById:"1",groupByLabel:"Level",showDefault:!1},{id:"7",label:"Energies",inline:!1,index:1,groupById:"2",groupByLabel:"Level",showDefault:!1},{id:"8",label:"Recipes",inline:!1,index:2,groupById:"2",groupByLabel:"Level",showDefault:!0,iconDefault:"mdi-chef-hat",colorDefault:"#E3E3E3"}],s=[{modelStatusId:"1",statusGroups:[{label:"State",value:"On",icon:"mdi-power",color:"#009933",sourceTimestamp:16233456e5}]},{modelStatusId:"2",statusGroups:[{label:"Folder",value:"Check",icon:"mdi-folder-check-outline",color:"#003399",sourceTimestamp:16233456e5}]},{modelStatusId:"3",statusGroups:[{label:"Luminosity",value:"Bright",icon:"mdi-lightbulb-outline",color:"#996699",sourceTimestamp:16233456e5}]},{modelStatusId:"4",statusGroups:[{label:"Lock",value:"Locked",icon:"mdi-lock-outline",color:"#999933",sourceTimestamp:16233456e5}]},{modelStatusId:"5",statusGroups:[{label:"Print",value:"Printing",icon:"mdi-printer-outline",color:"#338888",sourceTimestamp:16233456e5}]},{modelStatusId:"6",statusGroups:[{label:"Temperatures",value:"200",groupByValue:"1",unit:"°C",icon:"mdi-thermometer",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Temperatures",value:"50",groupByValue:"2",unit:"°C",icon:"mdi-thermometer",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"7",statusGroups:[{label:"Energies",value:"100",groupByValue:"1",unit:"kWh",icon:"mdi-flash",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Energies",value:"50",groupByValue:"2",unit:"kWh",icon:"mdi-flash",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"8",statusGroups:[{label:"Recipes",value:"Bread",icon:"mdi-chef-hat",color:"#0000FF",sourceTimestamp:16233456e5}]}],a={args:{args:{values:[{id:"1",label:"Bakery Almeida Guerra",code:"930000000009920093000000000992009300000000099200",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"2",label:"Bakery João Coelho",code:"9300000000099201",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"3",label:"Bakery Estevão Mendes",code:"9300000000099202",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"4",label:"Bakery Rosária Corte-Real",code:"9300000000099203",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[],deviceStatuses:[]},{id:"5",label:"Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",code:"9300000000099204",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]},{id:"6",label:"Bakery Luís Castro",code:"9300000000099205",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:[]},{id:"7",label:"Bakery Guiomar Hernandes de Medeiros",code:"9300000000099206",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"8",label:"Bakery Rubem Garriço",code:"9300000000099207",imageId:"1",deviceConnectivity:null,deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"9",label:"Bakery Tiburcio Furtado Rosa",code:"9300000000099208",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:e,deviceStatuses:s},{id:"10",label:"Bakery Naiara Mascarenhas Bento",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:s},{id:"11",label:"Bakery Nelinha Ribeiro",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]}],selected:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},render:(l,{argTypes:o})=>({components:{FSDeviceOrganisationTileUI:d},props:Object.keys(o),setup(){return{...l}},template:`
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
    </div>`})},n={args:{args:{values:[{id:"1",label:"Bakery Almeida Guerra",code:"9300000000099200",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"2",label:"Bakery João Coelho",code:"9300000000099201",deviceConnectivity:i[0],deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"3",label:"Bakery Estevão Mendes",code:"9300000000099202",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"4",label:"Bakery Rosária Corte-Real",code:"9300000000099203",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[],deviceStatuses:[]},{id:"5",label:"Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",code:"9300000000099204",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]},{id:"6",label:"Bakery Luís Castro",code:"9300000000099205",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:[]},{id:"7",label:"Bakery Guiomar Hernandes de Medeiros",code:"9300000000099206",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"8",label:"Bakery Rubem Garriço",code:"9300000000099207",deviceConnectivity:null,deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"9",label:"Bakery Tiburcio Furtado Rosa",code:"9300000000099208",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:e,deviceStatuses:s},{id:"10",label:"Bakery Naiara Mascarenhas Bento",code:"9300000000099209",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:s},{id:"11",label:"Bakery Nelinha Ribeiro",code:"9300000000099209",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]}],selected:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},render:(l,{argTypes:o})=>({components:{FSDeviceOrganisationTileUI:d},props:Object.keys(o),setup(){return{...l}},template:`
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ye=["Variations","Imageless"];export{n as Imageless,a as Variations,ye as __namedExportsOrder,Se as default};
