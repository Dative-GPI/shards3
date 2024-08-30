import{d as L,c as I,y as b,z as o,A as i,B as n,m as x,L as r,E as c,G as u,D as d}from"./vue.esm-bundler-BSwA4uJo.js";import{F as _}from"./FSImage-D1H9jzFA.js";import{_ as p}from"./FSSpan-DVGtoaou.js";import{F as V}from"./FSTile-BsfkjASy.js";import{_ as m}from"./FSCol-B2fYQH2g.js";import{_ as g}from"./FSRow-C55kyKDN.js";import{u as $}from"./css-DuQjrBfn.js";import{C as D}from"./useColors-CVvq99EA.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as B}from"./FSIcon-BnX9YboA.js";import"./FSImageUI-FC5mP69p.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-D4M238ur.js";import"./VImg-DoSXtjfN.js";import"./color-D9V7QeIP.js";import"./theme-CJjFLd5E.js";import"./dimensions-BjZLW5mo.js";import"./elevation-CjdYMzTr.js";import"./locale-CpxwvVE1.js";import"./rounded-CO2AQG9_.js";import"./transition-_APBsTwD.js";import"./index-BhqZCjBr.js";import"./useSlots-BFQFTsAj.js";import"./FSClickable-DxIbWXqH.js";import"./FSCard-Dku7tZ0W.js";import"./VProgressCircular-Dac4kH3U.js";import"./tag-VYeYJ1FC.js";import"./FSCheckbox-Biwr0a4k.js";import"./useRules-BFq3Zlaa.js";import"./VSelectionControl-CoQs29sw.js";import"./density-DkgHqMu0.js";import"./VIcon-5UD9vI9m.js";import"./proxiedModel-DL-L2p1V.js";import"./index-YRxtzmsB.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./index-C3j_FW12.js";import"./form-DP5gBA00.js";import"./index-3zl-tJp_.js";const T=L({name:"FSServiceAccountOrganisationTileUI",components:{FSImage:_,FSSpan:p,FSTile:V,FSCol:m,FSRow:g},props:{imageId:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:a}=$(),s=I(()=>e.imageId?a.value?90:100:0),v=I(()=>e.imageId?`calc(100% - ${s.value}px - 24px)`:"100%");return{ColorEnum:D,imageSize:s,infoWidth:v}}});function C(e,a,s,v,P,U){const k=b("FSImage"),F=b("FSTile");return o(),i(F,x({activeColor:e.ColorEnum.Primary,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:n(()=>[r(m,{align:"center-center",width:"fill"},{default:n(()=>[r(g,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:n(()=>[r(m,{gap:"4px",width:e.infoWidth},{default:n(()=>[r(p,{font:"text-button",lineClamp:2},{default:n(()=>[c(u(e.$props.label),1)]),_:1}),e.$props.roleLabel?(o(),i(g,{key:0,align:"center-left",gap:"4px",wrap:!1},{default:n(()=>[e.$props.roleIcon?(o(),i(B,{key:0,variant:"soft",color:e.ColorEnum.Dark},{default:n(()=>[c(u(e.$props.roleIcon),1)]),_:1},8,["color"])):d("",!0),r(p,{font:"text-overline",variant:"soft"},{default:n(()=>[c(u(e.$props.roleLabel),1)]),_:1})]),_:1})):d("",!0)]),_:1},8,["width"]),e.$props.imageId?(o(),i(k,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):d("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","editable","width","modelValue"])}const f=q(T,[["render",C]]);T.__docgenInfo={displayName:"FSServiceAccountOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSServiceAccountOrganisationTileUI.vue"]};const Fe={title:"Foundation/Shared/Tiles/ServiceAccountOrganisation",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog",imageId:"1"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog",imageId:"1"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog",imageId:"1"}],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSServiceAccountOrganisationTileUI:f},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :imageId="serviceAccountOrganisation.imageId"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>`})},l={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog"}],selected:[!1,!1]}},render:(e,{argTypes:a})=>({components:{FSServiceAccountOrganisationTileUI:f},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>`})};var A,O,S;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "DB back-ups",
        roleLabel: "Back up service serviceAccount",
        roleIcon: "mdi-cog",
        imageId: "1"
      }, {
        id: "2",
        label: "TODO: delete",
        roleLabel: "TODO: delete too",
        roleIcon: "mdi-cog",
        imageId: "1"
      }, {
        id: "3",
        name: "This service account is used to make API calls to one of the third service apps we use",
        serviceAccountType: 0,
        roleLabel: "API service serviceAccount",
        roleIcon: "mdi-cog",
        imageId: "1"
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSServiceAccountOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :imageId="serviceAccountOrganisation.imageId"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(S=(O=t.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var y,h,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "DB back-ups",
        roleLabel: "Back up service serviceAccount",
        roleIcon: "mdi-cog"
      }, {
        id: "2",
        label: "TODO: delete",
        roleLabel: "TODO: delete too",
        roleIcon: "mdi-cog"
      }, {
        id: "3",
        name: "This service account is used to make API calls to one of the third service apps we use",
        serviceAccountType: 0,
        roleLabel: "API service serviceAccount",
        roleIcon: "mdi-cog"
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSServiceAccountOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const Le=["Variations","Imageless"];export{l as Imageless,t as Variations,Le as __namedExportsOrder,Fe as default};
