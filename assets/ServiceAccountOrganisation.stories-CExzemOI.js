import{d as L,c as I,y as b,z as o,A as i,B as n,m as x,L as r,E as c,G as u,D as d}from"./vue.esm-bundler--l9E1zCM.js";import{F as _}from"./FSImage-D-D_UZz-.js";import{_ as p}from"./FSSpan-Drxl5cqQ.js";import{F as V}from"./FSTile-DQwiOC97.js";import{_ as m}from"./FSCol-BA_LQqMv.js";import{_ as g}from"./FSRow-DW_Nd3uI.js";import{u as $}from"./css-CqyMbT8T.js";import{C as D}from"./useColors-Bv0V9Qz7.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as B}from"./FSIcon-DBiV-GrJ.js";import"./FSImageUI-0WpRmS38.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BJn24iiy.js";import"./VImg-B1oUXGM1.js";import"./color-DkN3uAGq.js";import"./theme-uJWLcFzd.js";import"./dimensions-BKNjgbGk.js";import"./elevation-Cf1uc8UZ.js";import"./locale-DRqPrS0N.js";import"./rounded-B2xBfeOT.js";import"./transition-CYrBIr8o.js";import"./index-CDY7nOpr.js";import"./useSlots-sbMHjG0F.js";import"./FSClickable-wwot-1GZ.js";import"./FSCard-CJMrkqFE.js";import"./VProgressCircular-DiflYTWZ.js";import"./VIcon-CRzxwZ_P.js";import"./FSCheckbox-BImK2siP.js";import"./useRules-eaGGgTH2.js";import"./VSelectionControl-CjbL6NQr.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./index-mEzhRiE5.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./index-U_F843Id.js";import"./form-26vhu4DQ.js";import"./index-_Z9wfsFC.js";const T=L({name:"FSServiceAccountOrganisationTileUI",components:{FSImage:_,FSSpan:p,FSTile:V,FSCol:m,FSRow:g},props:{imageId:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:a}=$(),s=I(()=>e.imageId?a.value?90:100:0),v=I(()=>e.imageId?`calc(100% - ${s.value}px - 24px)`:"100%");return{ColorEnum:D,imageSize:s,infoWidth:v}}});function C(e,a,s,v,P,U){const k=b("FSImage"),F=b("FSTile");return o(),i(F,x({activeColor:e.ColorEnum.Primary,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:n(()=>[r(m,{align:"center-center",width:"fill"},{default:n(()=>[r(g,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:n(()=>[r(m,{gap:"4px",width:e.infoWidth},{default:n(()=>[r(p,{font:"text-button",lineClamp:2},{default:n(()=>[c(u(e.$props.label),1)]),_:1}),e.$props.roleLabel?(o(),i(g,{key:0,align:"center-left",gap:"4px",wrap:!1},{default:n(()=>[e.$props.roleIcon?(o(),i(B,{key:0,variant:"soft",color:e.ColorEnum.Dark},{default:n(()=>[c(u(e.$props.roleIcon),1)]),_:1},8,["color"])):d("",!0),r(p,{font:"text-overline",variant:"soft"},{default:n(()=>[c(u(e.$props.roleLabel),1)]),_:1})]),_:1})):d("",!0)]),_:1},8,["width"]),e.$props.imageId?(o(),i(k,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):d("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","editable","width","modelValue"])}const f=q(T,[["render",C]]);T.__docgenInfo={displayName:"FSServiceAccountOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSServiceAccountOrganisationTileUI.vue"]};const ke={title:"Foundation/Shared/Tiles/ServiceAccountOrganisation",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog",imageId:"1"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog",imageId:"1"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog",imageId:"1"}],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSServiceAccountOrganisationTileUI:f},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const Fe=["Variations","Imageless"];export{l as Imageless,t as Variations,Fe as __namedExportsOrder,ke as default};