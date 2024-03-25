import{g as B,j as _,J as D,K as t,L as a,M as s,Q as x,Y as P,V as N,z as n,N as c,O as d,F as C,R as g,S as v,U as f,P as $}from"./vue.esm-bundler-a6679ce1.js";import{F as R}from"./FSDivider-d4f82577.js";import{F as G}from"./FSText-3a5d632d.js";import{u as q}from"./css-39e888cb.js";import{u as E,C as O}from"./useColors-7bfbb133.js";import{u as j}from"./useSlots-decb0027.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as y}from"./FSCol-c92bf913.js";import{_ as l}from"./FSRow-cccb539d.js";import{V as A}from"./VSpacer-972c619d.js";import{F as J}from"./FSButton-638d073a.js";import{_ as K}from"./FSIcon-1a3e04ae.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8c0eb56d.js";import"./useRender-af29532b.js";import"./vue-router-c202c6d9.js";import"./FSCard-3545869e.js";import"./VProgressCircular-f3d28a40.js";import"./color-3a7410fc.js";import"./intersectionObserver-68b7d7a3.js";import"./resizeObserver-692bfe96.js";import"./VIcon-8b39f3af.js";import"./tag-c6e00dba.js";import"./FSSpan-e5b0fe90.js";const L=B({name:"FSGrid",components:{FSDivider:R,FSText:G},props:{gridItems:{type:Array,default:[],required:!1},cols:{type:Number,required:!1,default:1}},setup(i){const{isExtraSmall:m}=q(),{getColors:b}=E(),{slots:S}=j(),F=b(O.Light),h=_(()=>({"--fs-grid-border-color":F.dark}));return{width:_(()=>i.cols==2&&!m.value?"calc(50% - 16px)":"100%"),style:h,useSlot:u=>!!S[u]}}});function M(i,m,b,S,F,h){const r=D("FSText");return t(),a(l,{gap:"32px"},{default:s(()=>[(t(!0),x(C,null,P(i.gridItems,(o,u)=>(t(),a(l,{width:i.width,style:N(i.style),key:u},{default:s(()=>[n(y,{gap:"16px"},{default:s(()=>[n(r,{font:"text-h3"},{default:s(()=>[c(d(o.categoryLabel),1)]),_:2},1024),n(y,{gap:"0"},{default:s(()=>[(t(!0),x(C,null,P(o.items,(e,V)=>(t(),a(l,{padding:"0 8px",align:"center-center",class:"fs-grid-item",height:"hug",key:V},{default:s(()=>[n(y,{gap:"2px"},{default:s(()=>[g(i.$slots,`item-header.${o.categoryCode}-${e.code}`,v(f({item:e})),()=>[n(r,{font:e.hideDefault?"text-body":"text-overline"},{default:s(()=>[c(d(e.label),1)]),_:2},1032,["font"])]),e.hideDefault?$("",!0):(t(),a(l,{key:0},{default:s(()=>[g(i.$slots,`item-value-left.${o.categoryCode}-${e.code}`,v(f({item:e})),()=>[n(r,null,{default:s(()=>[c(d(e.value),1)]),_:2},1024)])]),_:2},1024))]),_:2},1024),n(A),i.useSlot(`item-value-right.${o.categoryCode}-${e.code}`)?(t(),a(l,{key:0,align:"center-right"},{default:s(()=>[g(i.$slots,`item-value-right.${o.categoryCode}-${e.code}`,v(f({item:e})),()=>[n(r,{font:"text-body"},{default:s(()=>[c(d(e.value),1)]),_:2},1024)])]),_:2},1024)):$("",!0)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["width","style"]))),128))]),_:3})}const w=z(L,[["render",M]]);L.__docgenInfo={displayName:"FSGrid",exportName:"default",description:"",tags:{},props:[{name:"gridItems",type:{name:"GridItem[]"},required:!1,defaultValue:{func:!1,value:"[]"}},{name:"cols",values:["1","2"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"1"}}],slots:[{name:"`item-header.${gridItem.categoryCode}-${item.code}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]},{name:"`item-value-left.${gridItem.categoryCode}-${item.code}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]},{name:"`item-value-right.${gridItem.categoryCode}-${item.code}`",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSGrid.vue"]};const be={title:"Foundation/Shared/Lists/Grid",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{gridItems:[{categoryLabel:"Teleport permissions",categoryCode:"teleport-permissions",items:[{label:"Permission 1",code:"permission1",value:"1"},{label:"Permission 2",code:"permission2",value:"2"},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!0}]},{categoryLabel:"Admin permissions",categoryCode:"admin-permissions",items:[{label:"Permission 1",code:"permission1",value:"1"},{label:"Permission 2",code:"permission2",value:"2"},{label:"Permission 3",code:"permission3",value:"3"},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!0}]},{categoryLabel:"Core permissions",categoryCode:"core-permissions",items:[{label:"Permission 1",code:"permission1",value:"1"},{label:"Permission 2",code:"permission2",value:"2"},{label:"Permission 3",code:"permission3",value:"3"},{label:"Permission 4",code:"permission4",value:"4"},{label:"Permission 5",code:"permission5",value:"5"}]}]}},render:(i,{argTypes:m})=>({components:{FSGrid:w,FSIcon:K,FSText:G,FSButton:J},props:Object.keys(m),setup(){return{...i}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSGrid
          :gridItems="args.gridItems"
          :cols="2"
        >
            <template v-slot:item-value-right.teleport-permissions-permission3="{ item }">
                <FSText> {{ item.value }} </FSText>
            </template>
            <template v-slot:item-value-right.core-permissions-permission2="{ item }">
                <FSButton
                    color="warning"
                    label="Remove"
                />
            </template>
            <template v-slot:item-value-right.admin-permissions-permission4="{ item }">
                <FSIcon
                    :color="item.value ? 'success' : 'error'"
                >
                    {{ item.value ? 'mdi-check-circle' : 'mdi-cancel-circle' }}
                </FSIcon>
            </template>
            <template v-slot:item-value-left.admin-permissions-permission3="{ item }">
                <FSIcon
                    :color="item.value ? 'success' : 'error'"
                >
                    {{ item.value ? 'mdi-check-circle' : 'mdi-cancel-circle' }}
                </FSIcon>
            </template>
        </FSGrid>
      </div>
    </div>`})};var I,k,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    args: {
      gridItems: [{
        categoryLabel: "Teleport permissions",
        categoryCode: "teleport-permissions",
        items: [{
          label: "Permission 1",
          code: "permission1",
          value: "1"
        }, {
          label: "Permission 2",
          code: "permission2",
          value: "2"
        }, {
          label: "Permission 3",
          code: "permission3",
          value: "3",
          hideDefault: true
        }]
      }, {
        categoryLabel: "Admin permissions",
        categoryCode: "admin-permissions",
        items: [{
          label: "Permission 1",
          code: "permission1",
          value: "1"
        }, {
          label: "Permission 2",
          code: "permission2",
          value: "2"
        }, {
          label: "Permission 3",
          code: "permission3",
          value: "3"
        }, {
          label: "Permission 4",
          code: "permission4",
          value: "4",
          hideDefault: true
        }]
      }, {
        categoryLabel: "Core permissions",
        categoryCode: "core-permissions",
        items: [{
          label: "Permission 1",
          code: "permission1",
          value: "1"
        }, {
          label: "Permission 2",
          code: "permission2",
          value: "2"
        }, {
          label: "Permission 3",
          code: "permission3",
          value: "3"
        }, {
          label: "Permission 4",
          code: "permission4",
          value: "4"
        }, {
          label: "Permission 5",
          code: "permission5",
          value: "5"
        }]
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGrid,
      FSIcon,
      FSText,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSGrid
          :gridItems="args.gridItems"
          :cols="2"
        >
            <template v-slot:item-value-right.teleport-permissions-permission3="{ item }">
                <FSText> {{ item.value }} </FSText>
            </template>
            <template v-slot:item-value-right.core-permissions-permission2="{ item }">
                <FSButton
                    color="warning"
                    label="Remove"
                />
            </template>
            <template v-slot:item-value-right.admin-permissions-permission4="{ item }">
                <FSIcon
                    :color="item.value ? 'success' : 'error'"
                >
                    {{ item.value ? 'mdi-check-circle' : 'mdi-cancel-circle' }}
                </FSIcon>
            </template>
            <template v-slot:item-value-left.admin-permissions-permission3="{ item }">
                <FSIcon
                    :color="item.value ? 'success' : 'error'"
                >
                    {{ item.value ? 'mdi-check-circle' : 'mdi-cancel-circle' }}
                </FSIcon>
            </template>
        </FSGrid>
      </div>
    </div>\`
  })
}`,...(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const Se=["Variations"];export{p as Variations,Se as __namedExportsOrder,be as default};
