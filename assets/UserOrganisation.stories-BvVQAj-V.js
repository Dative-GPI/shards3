import{d as q,c as o,y as b,z as i,A as l,B as n,m as k,L as r,E as m,G as p,D as f}from"./vue.esm-bundler--l9E1zCM.js";import{F as C}from"./FSImage-D-D_UZz-.js";import{_ as c}from"./FSSpan-Drxl5cqQ.js";import{F as V}from"./FSTile-DQwiOC97.js";import{_ as g}from"./FSCol-BA_LQqMv.js";import{_ as I}from"./FSRow-DW_Nd3uI.js";import{u as $}from"./css-CqyMbT8T.js";import{C as J}from"./useColors-Bv0V9Qz7.js";import{u as B}from"./useTranslations-ByKtt_-5.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as M}from"./FSIcon-DBiV-GrJ.js";import"./FSImageUI-0WpRmS38.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BJn24iiy.js";import"./VImg-B1oUXGM1.js";import"./color-DkN3uAGq.js";import"./theme-uJWLcFzd.js";import"./dimensions-BKNjgbGk.js";import"./elevation-Cf1uc8UZ.js";import"./locale-DRqPrS0N.js";import"./rounded-B2xBfeOT.js";import"./transition-CYrBIr8o.js";import"./index-CDY7nOpr.js";import"./useSlots-sbMHjG0F.js";import"./FSClickable-wwot-1GZ.js";import"./FSCard-CJMrkqFE.js";import"./VProgressCircular-DiflYTWZ.js";import"./VIcon-CRzxwZ_P.js";import"./FSCheckbox-BImK2siP.js";import"./useRules-eaGGgTH2.js";import"./VSelectionControl-CjbL6NQr.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./index-mEzhRiE5.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./index-U_F843Id.js";import"./form-26vhu4DQ.js";import"./index-_Z9wfsFC.js";const T=q({name:"FSUserOrganisationTileUI",components:{FSImage:C,FSSpan:c,FSTile:V,FSCol:g,FSRow:I},props:{imageId:{type:String,required:!1,default:null},name:{type:String,required:!1,default:null},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},admin:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:a}=$(),{$tr:y}=B(),h=o(()=>e.admin?"mdi-crown-outline":e.roleIcon),S=o(()=>e.admin?y("ui.user-organisation.admin","Administrator"):e.roleLabel),d=o(()=>e.imageId?a.value?90:100:0),u=o(()=>e.imageId?`calc(100% - ${d.value}px - 24px)`:"100%");return{ColorEnum:J,imageSize:d,infoWidth:u,roleLabel:S,roleIcon:h}}});function A(e,a,y,h,S,d){const u=b("FSImage"),_=b("FSTile");return i(),l(_,k({activeColor:e.ColorEnum.Primary,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:n(()=>[r(g,{align:"center-center",width:"fill"},{default:n(()=>[r(I,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:n(()=>[r(g,{gap:"4px",width:e.infoWidth},{default:n(()=>[r(c,{font:"text-button",lineClamp:2},{default:n(()=>[m(p(e.$props.name),1)]),_:1}),e.roleLabel?(i(),l(I,{key:0,align:"center-left",gap:"4px",wrap:!1},{default:n(()=>[e.roleIcon?(i(),l(M,{key:0,variant:"soft",color:e.ColorEnum.Dark},{default:n(()=>[m(p(e.roleIcon),1)]),_:1},8,["color"])):f("",!0),r(c,{font:"text-overline",variant:"soft"},{default:n(()=>[m(p(e.roleLabel),1)]),_:1})]),_:1})):f("",!0)]),_:1},8,["width"]),e.$props.imageId?(i(),l(u,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):f("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","editable","width","modelValue"])}const v=z(T,[["render",A]]);T.__docgenInfo={displayName:"FSUserOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"name",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"admin",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue"]};const Te={title:"Foundation/Shared/Tiles/UserOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:[{id:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",name:"Juano Alphonso Santos de la Cruz de la Balina",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSUserOrganisationTileUI:v},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>`})},t={args:{args:{values:[{id:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",name:"Juano Alphonso Santos de la Cruz de la Balina",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1]}},render:(e,{argTypes:a})=>({components:{FSUserOrganisationTileUI:v},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>`})};var O,w,F;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean-Michel Quelqu'un",
        admin: true
      }, {
        id: "2",
        name: "Jean-Michel Personne",
        roleLabel: "Red shirt",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        name: "Juano Alphonso Santos de la Cruz de la Balina",
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        admin: false
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSUserOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(F=(w=s.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var U,L,x;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean-Michel Quelqu'un",
        admin: true
      }, {
        id: "2",
        name: "Jean-Michel Personne",
        roleLabel: "Red shirt",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        name: "Juano Alphonso Santos de la Cruz de la Balina",
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        admin: false
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSUserOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(x=(L=t.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const _e=["Variations","Imageless"];export{t as Imageless,s as Variations,_e as __namedExportsOrder,Te as default};