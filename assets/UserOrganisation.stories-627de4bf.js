import{j as _,e as I,J as s,K as v,L as S,M as n,x as T,z as r,N as d,O as m,P as k}from"./vue.esm-bundler-a79f6a7e.js";import{F as V}from"./FSImage-f9ed15d3.js";import{F as C}from"./FSText-fa0cf7e3.js";import{F as q}from"./FSTile-669f0003.js";import{_ as p}from"./FSCol-bf5a0ca3.js";import{_ as u}from"./FSRow-997087e7.js";import{u as $}from"./css-6f95cab1.js";import{C as z}from"./useColors-060213ee.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as J}from"./FSIcon-92b3f0ab.js";import"./color-4fa560db.js";import"./theme-1ec486f5.js";import"./dimensions-ba559413.js";import"./elevation-3507830c.js";import"./locale-9003447c.js";import"./proxiedModel-550eb350.js";import"./useRender-b11abf1d.js";import"./base-0de1729e.js";import"./serviceFactory-3393b4e4.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-a4dd44af.js";import"./VImg-679a1f09.js";import"./rounded-5d5afca1.js";import"./transition-5598497b.js";import"./index-3d25a1c3.js";import"./useSlots-6a823081.js";import"./FSClickable-4d3bdcc0.js";import"./FSCard-a614faf8.js";import"./VProgressCircular-e686f53b.js";import"./intersectionObserver-ca237ead.js";import"./resizeObserver-c5cea584.js";import"./VIcon-9404a2c9.js";import"./tag-f688eb88.js";import"./FSCheckbox-d6b02950.js";import"./FSSpan-6870f5d7.js";import"./useRules-f2fe91c3.js";import"./VCheckboxBtn-03eab5ea.js";import"./VSelectionControl-afed9b27.js";import"./density-4d7bebe4.js";import"./index-755a3767.js";import"./VLabel-e2aed9e2.js";import"./VInput-6b3c87b1.js";import"./index-21b5e00b.js";import"./index-a0e5e2a3.js";const x=_({name:"FSUserOrganisationTileUI",components:{FSImage:V,FSText:C,FSTile:q,FSCol:p,FSRow:u},props:{imageId:{type:String,required:!1,default:null},name:{type:String,required:!1,default:null},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:a}=$(),l=I(()=>a.value?90:100),g=I(()=>{let t=a.value?288:304;return e.imageId&&(t-=l.value),t});return{imageSize:l,infoWidth:g,ColorEnum:z}}});function A(e,a,l,g,t,M){const f=s("FSText"),U=s("FSImage"),L=s("FSTile");return v(),S(L,T({editable:e.$props.editable,modelValue:e.$props.modelValue},e.$attrs),{default:n(()=>[r(p,{align:"center-center",width:"fill"},{default:n(()=>[r(u,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:n(()=>[r(p,{gap:"4px",width:e.infoWidth},{default:n(()=>[r(f,{font:"text-button",lineClamp:2},{default:n(()=>[d(m(e.$props.name),1)]),_:1}),r(u,{align:"center-left",gap:"4px"},{default:n(()=>[r(J,{variant:"light",color:e.ColorEnum.Dark},{default:n(()=>[d(m(e.$props.roleIcon),1)]),_:1},8,["color"]),r(f,{font:"text-overline",variant:"light"},{default:n(()=>[d(m(e.$props.roleLabel),1)]),_:1})]),_:1})]),_:1},8,["width"]),e.$props.imageId?(v(),S(U,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):k("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["editable","modelValue"])}const c=B(x,[["render",A]]);x.__docgenInfo={displayName:"FSUserOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"name",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue"]};const Ve={title:"Foundation/Shared/Tiles/UserOrganisation",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:[{id:"1",name:"Jean Martin",roleLabel:"Administrator",roleIcon:"mdi-shield-crown-outline",imageId:"1"},{id:"2",name:"Service user",roleLabel:"Service administrator",roleIcon:"mdi-cog",imageId:"1"},{id:"3",name:"Juano Alphonso Santos de la Cruz de la Balina",roleLabel:"User",roleIcon:"mdi-account-outline",imageId:"1"}],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSUserOrganisationTileUI:c},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :roleLabel="userOrganisation.roleLabel"
        :roleIcon="userOrganisation.roleIcon"
        v-model="args.selected[index]"
      />
    </div>`})},i={args:{args:{values:[{id:"1",name:"Jean Martin",roleLabel:"Administrator",roleIcon:"mdi-shield-crown-outline"},{id:"2",name:"Service user",roleLabel:"Service administrator",roleIcon:"mdi-cog"},{id:"3",name:"Juano Alphonso Santos de la Cruz de la Balina",roleLabel:"User",roleIcon:"mdi-account-outline"}],selected:[!1,!1]}},render:(e,{argTypes:a})=>({components:{FSUserOrganisationTileUI:c},props:Object.keys(a),setup(){return{...e}},template:`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSUserOrganisationTileUI
      v-for="(userOrganisation, index) in args.values"
      :key="index"
      :name="userOrganisation.name"
      :roleLabel="userOrganisation.roleLabel"
      :roleIcon="userOrganisation.roleIcon"
      v-model="args.selected[index]"
    />
  </div>`})};var b,y,O;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean Martin",
        roleLabel: "Administrator",
        roleIcon: "mdi-shield-crown-outline",
        imageId: "1"
      }, {
        id: "2",
        name: "Service user",
        roleLabel: "Service administrator",
        roleIcon: "mdi-cog",
        imageId: "1"
      }, {
        id: "3",
        name: "Juano Alphonso Santos de la Cruz de la Balina",
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        imageId: "1"
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
        :roleLabel="userOrganisation.roleLabel"
        :roleIcon="userOrganisation.roleIcon"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(O=(y=o.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var h,w,F;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean Martin",
        roleLabel: "Administrator",
        roleIcon: "mdi-shield-crown-outline"
      }, {
        id: "2",
        name: "Service user",
        roleLabel: "Service administrator",
        roleIcon: "mdi-cog"
      }, {
        id: "3",
        name: "Juano Alphonso Santos de la Cruz de la Balina",
        roleLabel: "User",
        roleIcon: "mdi-account-outline"
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
      :roleLabel="userOrganisation.roleLabel"
      :roleIcon="userOrganisation.roleIcon"
      v-model="args.selected[index]"
    />
  </div>\`
  })
}`,...(F=(w=i.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const Ce=["Variations","Imageless"];export{i as Imageless,o as Variations,Ce as __namedExportsOrder,Ve as default};
