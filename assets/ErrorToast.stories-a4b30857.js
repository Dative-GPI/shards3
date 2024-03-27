import{g as S,j as n,K as v,L as _,M as a,V as x,z as d,N as i,O as b}from"./vue.esm-bundler-e580dd1f.js";import{_ as p}from"./FSIcon-4fed0819.js";import{_ as f}from"./FSSpan-73185be3.js";import{_ as g}from"./FSRow-50904d6e.js";import{u as E,C as F}from"./useColors-b2cb658b.js";import{s as T}from"./css-ca36ed75.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-bb9e7f8a.js";import"./color-0af6d6f5.js";import"./theme-a3bb880e.js";import"./useRender-16acb9c4.js";import"./tag-fa7badbe.js";import"./useSlots-a039f59b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const C=[{code:"errors.missingorganisation",default:"Missing organisation header",status:400},{code:"errors.missinglanguage",default:"Missing language header",status:400},{code:"errors.invalidchart",default:"Invalid chart configuration",status:400},{code:"errors.invalidscenario",default:"Invalid scenario configuration",status:400},{code:"errors.passwordtooshort",default:"Password too short",status:400},{code:"errors.passwordtoolong",default:"Password too long",status:400},{code:"errors.passwordlowercase",default:"Lowercase character required",status:400},{code:"errors.passworduppercase",default:"Uppercase character required",status:400},{code:"errors.passwordnumber",default:"Number required",status:400},{code:"errors.passwordspecial",default:"Special character required",status:400},{code:"errors.authenticationfailed",default:"Authentication failed",status:401},{code:"errors.noregistereduser",default:"No registered user",status:401},{code:"errors.badcredentials",default:"Bad credentials",status:401},{code:"errors.unauthorizedorganisation",default:"Unauthorized organisation",status:403},{code:"errors.unauthorizedextension",default:"Unauthorized extension",status:403},{code:"errors.unauthorizeduser",default:"Unauthorized user",status:403},{code:"errors.usernotinorganisation",default:"User not in organisation",status:403},{code:"errors.noadminprivilege",default:"No admin privilege",status:403},{code:"errors.dashboardLocked",default:"Dashboard locked",status:403},{code:"errors.entitynotfound",default:"Entity not found",status:404},{code:"errors.imagenotfound",default:"Image not found",status:404},{code:"errors.tokennotfound",default:"Token not found",status:404},{code:"errors.alreadyregistereduser",default:"Already registered user",status:409},{code:"errors.devicealreadyinorganisation",default:"Device already in organisation",status:409},{code:"errors.devicealreadywatched",default:"Device already watched",status:409},{code:"errors.useralreadyinorganisation",default:"User already in organisation",status:409},{code:"errors.emailfailure",default:"Email failure",status:422},{code:"errors.requirevalidation",default:"Require validation",status:422},{code:"errors.databaseerror",default:"Database error",status:449},{code:"errors.graphsettingserror",default:"Microsoft graph settings error",status:500},{code:"errors.graphusererror",default:"Microsoft graph user error",status:500},{code:"errors.nomappableproperty",default:"No mappable property",status:500},{code:"errors.unvalidextensioncookie",default:"Unvalid extension cookie",status:500},{code:"errors.unexpectederror",default:"Unexpected error",status:500}],k=r=>C.find(e=>e.code===r)||{code:"errors.unexpectederror",default:"Unexpected error",status:500},m=S({name:"FSErrorToast",components:{FSIcon:p,FSSpan:f,FSRow:g},props:{errorCode:{type:String,required:!0},borderRadius:{type:[String,Number],required:!1,default:"4px"}},setup(r){const{getColors:e}=E(),s=e(F.Error),t=n(()=>({"--fs-error-toast-border-radius":T(r.borderRadius),"--fs-error-toast-background-color":s.base,"--fs-error-toast-color":s.light}));return{error:n(()=>k(r.errorCode)),style:t}}});function q(r,e,s,t,y,N){return v(),_(g,{padding:"18px 0 18px 32px",class:"fs-error-toast",align:"center-left",style:x(r.style)},{default:a(()=>[d(p,null,{default:a(()=>[i(" mdi-alert-outline ")]),_:1}),d(f,null,{default:a(()=>[i(b(r.$tr(r.error.code,r.error.default)),1)]),_:1})]),_:1},8,["style"])}const h=w(m,[["render",q]]);m.__docgenInfo={displayName:"FSErrorToast",exportName:"default",description:"",tags:{},props:[{name:"errorCode",type:{name:"string"},required:!0},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSErrorToast.vue"]};const G={title:"Foundation/Shared/ErrorToast",component:h,tags:["autodocs"]},o={args:{args:{code1:"errors.missingorganisation",code2:"errors.noadminprivilege",code3:"errors.alreadyregistereduser"}},render:(r,{argTypes:e})=>({components:{FSErrorToast:h},props:Object.keys(e),setup(){return{...r}},template:`
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const H=["Variations"];export{o as Variations,H as __namedExportsOrder,G as default};
