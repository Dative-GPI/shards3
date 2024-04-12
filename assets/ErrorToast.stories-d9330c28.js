import{j as S,e as n,I as v,J as _,K as a,L as x,z as d,P as i,Q as b}from"./vue.esm-bundler-43a473fd.js";import{_ as p}from"./FSIcon-b00305b5.js";import{_ as f}from"./FSSpan-f049a07d.js";import{_ as g}from"./FSRow-ba466629.js";import{u as E,C as F}from"./useColors-a0d41f52.js";import{s as w}from"./css-18b0cf8e.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./theme-b11eeaee.js";import"./useRender-d2bddd17.js";import"./tag-2aee60b4.js";import"./useSlots-e98bc591.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const C=[{code:"errors.missingorganisation",default:"Missing organisation header",status:400},{code:"errors.missinglanguage",default:"Missing language header",status:400},{code:"errors.invalidchart",default:"Invalid chart configuration",status:400},{code:"errors.invalidscenario",default:"Invalid scenario configuration",status:400},{code:"errors.passwordtooshort",default:"Password too short",status:400},{code:"errors.passwordtoolong",default:"Password too long",status:400},{code:"errors.passwordlowercase",default:"Lowercase character required",status:400},{code:"errors.passworduppercase",default:"Uppercase character required",status:400},{code:"errors.passwordnumber",default:"Number required",status:400},{code:"errors.passwordspecial",default:"Special character required",status:400},{code:"errors.authenticationfailed",default:"Authentication failed",status:401},{code:"errors.noregistereduser",default:"No registered user",status:401},{code:"errors.badcredentials",default:"Bad credentials",status:401},{code:"errors.unauthorizedorganisation",default:"Unauthorized organisation",status:403},{code:"errors.unauthorizedextension",default:"Unauthorized extension",status:403},{code:"errors.unauthorizeduser",default:"Unauthorized user",status:403},{code:"errors.usernotinorganisation",default:"User not in organisation",status:403},{code:"errors.noadminprivilege",default:"No admin privilege",status:403},{code:"errors.dashboardLocked",default:"Dashboard locked",status:403},{code:"errors.entitynotfound",default:"Entity not found",status:404},{code:"errors.imagenotfound",default:"Image not found",status:404},{code:"errors.tokennotfound",default:"Token not found",status:404},{code:"errors.alreadyregistereduser",default:"Already registered user",status:409},{code:"errors.devicealreadyinorganisation",default:"Device already in organisation",status:409},{code:"errors.devicealreadywatched",default:"Device already watched",status:409},{code:"errors.useralreadyinorganisation",default:"User already in organisation",status:409},{code:"errors.emailfailure",default:"Email failure",status:422},{code:"errors.requirevalidation",default:"Require validation",status:422},{code:"errors.databaseerror",default:"Database error",status:449},{code:"errors.graphsettingserror",default:"Microsoft graph settings error",status:500},{code:"errors.graphusererror",default:"Microsoft graph user error",status:500},{code:"errors.nomappableproperty",default:"No mappable property",status:500},{code:"errors.unvalidextensioncookie",default:"Unvalid extension cookie",status:500},{code:"errors.unexpectederror",default:"Unexpected error",status:500}],k=r=>C.find(e=>e.code===r)||{code:"errors.unexpectederror",default:"Unexpected error",status:500},m=S({name:"FSErrorToast",components:{FSIcon:p,FSSpan:f,FSRow:g},props:{errorCode:{type:String,required:!0},borderRadius:{type:[String,Number],required:!1,default:"4px"}},setup(r){const{getColors:e}=E(),s=e(F.Error),t=n(()=>({"--fs-error-toast-border-radius":w(r.borderRadius),"--fs-error-toast-background-color":s.base,"--fs-error-toast-color":s.light}));return{error:n(()=>k(r.errorCode)),style:t}}});function q(r,e,s,t,y,z){return v(),_(g,{padding:"18px 0 18px 32px",class:"fs-error-toast",align:"center-left",style:x(r.style),wrap:!1},{default:a(()=>[d(p,null,{default:a(()=>[i(" mdi-alert-outline ")]),_:1}),d(f,null,{default:a(()=>[i(b(r.$tr(r.error.code,r.error.default)),1)]),_:1})]),_:1},8,["style"])}const h=T(m,[["render",q]]);m.__docgenInfo={displayName:"FSErrorToast",exportName:"default",description:"",tags:{},props:[{name:"errorCode",type:{name:"string"},required:!0},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSErrorToast.vue"]};const K={title:"Foundation/Shared/ErrorToast",component:h,tags:["autodocs"]},o={args:{args:{code1:"errors.missingorganisation",code2:"errors.noadminprivilege",code3:"errors.alreadyregistereduser"}},render:(r,{argTypes:e})=>({components:{FSErrorToast:h},props:Object.keys(e),setup(){return{...r}},template:`
      <div style="display: flex; gap: 10px;">
        <FSErrorToast
          :errorCode="args.code1"
        />
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </div>`})};var u,c,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    args: {
      code1: "errors.missingorganisation",
      code2: "errors.noadminprivilege",
      code3: "errors.alreadyregistereduser"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSErrorToast
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; gap: 10px;">
        <FSErrorToast
          :errorCode="args.code1"
        />
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </div>\`
  })
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Q=["Variations"];export{o as Variations,Q as __namedExportsOrder,K as default};
