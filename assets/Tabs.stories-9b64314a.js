import{C as pa,B as fa,h as va,g as Q,t as Z,d as aa,s as ha,D as E,m as n,F as ya,u as f,E as i,o as F,k as w,l as p,v as Sa,G as _a,H as Ca,j as ka,n as G,p as I,q as Va}from"./vue.esm-bundler-c22e4d53.js";import{a as q,c as xa,C as ea,u as k,p as oa,o as $a,i as Pa,e as ta,d as Fa,j as wa,k as Ba,l as qa,n as Ra,_ as la}from"./VIcon-7572c30d.js";import{e as ja,V as M,f as za,g as Na,h as Oa,_ as B,F as Ea}from"./VBtn-da6b1963.js";import{m as Ga,a as D}from"./VSlideGroup-9b5aff2f.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./display-4b221e9b.js";function Ia(a,e,l){if(typeof a.animate>"u")return{finished:Promise.resolve()};let o;try{o=a.animate(e,l)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(t=>{o.onfinish=()=>{t(o)}})),o}function Ma(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",l=arguments.length>2?arguments[2]:void 0;return q()({name:l??pa(fa(a.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...xa()},setup(o,t){let{slots:r}=t;return()=>{var s;return va(o.tag,{class:[a,o.class],style:o.style},(s=r.default)==null?void 0:s.call(r))}}})}const Da="cubic-bezier(0.4, 0, 0.2, 1)",sa=Q({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:ea.Primary}},emits:["update:tab"],setup(a,{emit:e}){const{tab:l,color:o}=Z(a),t=k().getVariants(o.value),r=k().getText(),s={"--lc":t.light,"--bc":t.base,"--dc":t.dark,"--lt":r.base,"--bt":r.base,"--dt":r.dark};return{tab:l,color:o,style:s,emit:e}}});const ra=Symbol.for("vuetify:v-tabs"),Aa=oa({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...$a(ja({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),na=q()({name:"VTab",props:Aa(),setup(a,e){let{slots:l,attrs:o}=e;const{textColorClasses:t,textColorStyles:r}=Pa(a,"sliderColor"),s=aa(()=>a.direction==="horizontal"),g=ha(!1),v=E(),c=E();function ia(x){var j,z;let{value:T}=x;if(g.value=T,T){const $=(z=(j=v.value)==null?void 0:j.$el.parentElement)==null?void 0:z.querySelector(".v-tab--selected .v-tab__slider"),P=c.value;if(!$||!P)return;const ba=getComputedStyle($).color,b=$.getBoundingClientRect(),u=P.getBoundingClientRect(),h=s.value?"x":"y",y=s.value?"X":"Y",N=s.value?"right":"bottom",d=s.value?"width":"height",ua=b[h],da=u[h],m=ua>da?b[N]-u[N]:b[h]-u[h],ma=Math.sign(m)>0?s.value?"right":"bottom":Math.sign(m)<0?s.value?"left":"top":"center",ga=(Math.abs(m)+(Math.sign(m)<0?b[d]:u[d]))/Math.max(b[d],u[d])||0,Ta=b[d]/u[d]||0,O=1.5;Ia(P,{backgroundColor:[ba,"currentcolor"],transform:[`translate${y}(${m}px) scale${y}(${Ta})`,`translate${y}(${m/O}px) scale${y}(${(ga-1)/O+1})`,"none"],transformOrigin:Array(3).fill(ma)},{duration:225,easing:Da})}}return ta(()=>{const x=M.filterProps(a);return n(M,f({symbol:ra,ref:v,class:["v-tab",a.class],style:a.style,tabindex:g.value?0:-1,role:"tab","aria-selected":String(g.value),active:!1},x,o,{block:a.fixed,maxWidth:a.fixed?300:void 0,"onGroup:selected":ia}),{...l,default:()=>{var T;return n(ya,null,[((T=l.default)==null?void 0:T.call(l))??a.text,!a.hideSlider&&n("div",{ref:c,class:["v-tab__slider",t.value],style:r.value},null)])}})}),{}}});function Ha(a){return a?a.map(e=>Ra(e)?e:{text:e,value:e}):[]}const Ua=oa({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ga({mandatory:"force"}),...za(),...Fa()},"VTabs"),Wa=q()({name:"VTabs",props:Ua(),emits:{"update:modelValue":a=>!0},setup(a,e){let{slots:l}=e;const o=Na(a,"modelValue"),t=aa(()=>Ha(a.items)),{densityClasses:r}=Oa(a),{backgroundColorClasses:s,backgroundColorStyles:g}=wa(i(a,"bgColor"));return Ba({VTab:{color:i(a,"color"),direction:i(a,"direction"),stacked:i(a,"stacked"),fixed:i(a,"fixedTabs"),sliderColor:i(a,"sliderColor"),hideSlider:i(a,"hideSlider")}}),ta(()=>{const v=D.filterProps(a);return n(D,f(v,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,class:["v-tabs",`v-tabs--${a.direction}`,`v-tabs--align-tabs-${a.alignTabs}`,{"v-tabs--fixed-tabs":a.fixedTabs,"v-tabs--grow":a.grow,"v-tabs--stacked":a.stacked},r.value,s.value,a.class],style:[{"--v-tabs-height":qa(a.height)},g.value,a.style],role:"tablist",symbol:ra}),{default:()=>[l.default?l.default():t.value.map(c=>n(na,f(c,{key:c.text}),null))]})}),{}}});function La(a,e,l,o,t,r){return F(),w(Wa,f({class:"fs-tabs","selected-class":"fs-tab-active","show-arrows":"",grow:"",style:a.style,modelValue:a.tab,"onUpdate:modelValue":e[0]||(e[0]=s=>a.emit("update:tab",s))},a.$attrs),{default:p(()=>[Sa(a.$slots,"default",_a(Ca({color:a.color})),void 0,!0)]),_:3},16,["style","modelValue"])}const V=la(sa,[["render",La],["__scopeId","data-v-4d918329"]]);sa.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],events:[{name:"update:tab"}],slots:[{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/foundation-shared-ui-components/components/FSTabs.vue"]};const ca=Q({name:"FSTab",components:{FSSpan:B,FSRow:Ea},props:{label:{type:String,required:!0},tag:{type:String,required:!1,default:null},color:{type:String,required:!1,default:ea.Primary}},setup(a){const{label:e,color:l}=Z(a),o=k().getVariants(l.value),t=k().getText(),r={"--lc":o.light,"--bc":o.base,"--dc":o.dark,"--lt":t.base,"--bt":t.base,"--dt":t.dark};return{label:e,style:r,sliderColor:o.base}}});const Xa=Ma("v-spacer","div","VSpacer");function Ya(a,e,l,o,t,r){const s=ka("FSRow");return F(),w(na,f({class:"fs-tab",ripple:!1,style:a.style,"slider-color":a.sliderColor},a.$attrs),{default:p(()=>[n(s,null,{default:p(()=>[n(B,{class:"fs-tab-label",text:a.label},{default:p(()=>[G(I(a.label),1)]),_:1},8,["text"]),n(Xa),a.tag?(F(),w(B,{key:0,class:"fs-tab-tag",font:"text-body"},{default:p(()=>[G(I(a.tag),1)]),_:1})):Va("",!0)]),_:1})]),_:1},16,["style","slider-color"])}const R=la(ca,[["render",Ya],["__scopeId","data-v-4890eaa4"]]);ca.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/foundation-shared-ui-components/components/FSTab.vue"]};const le={title:"Foundation/Tabs",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tab:0,color:"primary"}},render:(a,{argTypes:e})=>({components:{Tabs:V,Tab:R},props:Object.keys(e),setup(){return{...a}},template:`
        <Tabs v-bind="args" v-model:tab="args.tab">
          <template #default="{ color }">
            <Tab label="Tab 1" :value="0" :color="color" />
            <Tab label="Tab 2" :value="1" :color="color" />
            <Tab label="Tab 3" :value="2" :color="color" />
          </template>
        </Tabs>
    `})},_={args:{args:{color:"primary"}},render:(a,{argTypes:e})=>({components:{Tabs:V,Tab:R},props:Object.keys(e),setup(){return{...a}},template:`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <template #default="{ color }">
          <Tab label="Tab 1"   :value="0" :color="color" tag="1" />
          <Tab label="Tab 2"   :value="1" :color="color" tag="2" />
          <Tab label="Tab 3"   :value="2" :color="color" tag="3" />
          <Tab label="Tab 4"   :value="3" :color="color" />
          <Tab label="Tab 5"   :value="4" :color="color" tag="5" />
          <Tab label="Tab 99+" :value="5" :color="color" tag="99+" />
        </template>
      </Tabs>
    `})},C={args:{args:{color:"warning"}},render:(a,{argTypes:e})=>({components:{Tabs:V,Tab:R},props:Object.keys(e),setup(){return{...a}},template:`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <template #default="{ color }">
          <Tab label="Tab 1: This tab has a long name" :value="0" :color="color" tag="First" />
          <Tab label="Tab 2: This tab has a long name" :value="1" :color="color" />
          <Tab label="Tab 3: This tab has a long name" :value="2" :color="color" />
          <Tab label="Tab 4: This tab has a long name" :value="3" :color="color" />
          <Tab label="Tab 5: This tab has a long name" :value="4" :color="color" />
          <Tab label="Tab 6: This tab has a long name" :value="5" :color="color" />
          <Tab label="Tab 7: This tab has a long name" :value="6" :color="color" />
          <Tab label="Tab 8: This tab has a long name" :value="7" :color="color" />
          <Tab label="Tab 9: This tab has a long name" :value="8" :color="color" tag="Last" />
        </template>
      </Tabs>
    `})};var A,H,U;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    args: {
      tab: 0,
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
        <Tabs v-bind="args" v-model:tab="args.tab">
          <template #default="{ color }">
            <Tab label="Tab 1" :value="0" :color="color" />
            <Tab label="Tab 2" :value="1" :color="color" />
            <Tab label="Tab 3" :value="2" :color="color" />
          </template>
        </Tabs>
    \`
  })
}`,...(U=(H=S.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var W,L,X;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    args: {
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <template #default="{ color }">
          <Tab label="Tab 1"   :value="0" :color="color" tag="1" />
          <Tab label="Tab 2"   :value="1" :color="color" tag="2" />
          <Tab label="Tab 3"   :value="2" :color="color" tag="3" />
          <Tab label="Tab 4"   :value="3" :color="color" />
          <Tab label="Tab 5"   :value="4" :color="color" tag="5" />
          <Tab label="Tab 99+" :value="5" :color="color" tag="99+" />
        </template>
      </Tabs>
    \`
  })
}`,...(X=(L=_.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var Y,J,K;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    args: {
      color: "warning"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <template #default="{ color }">
          <Tab label="Tab 1: This tab has a long name" :value="0" :color="color" tag="First" />
          <Tab label="Tab 2: This tab has a long name" :value="1" :color="color" />
          <Tab label="Tab 3: This tab has a long name" :value="2" :color="color" />
          <Tab label="Tab 4: This tab has a long name" :value="3" :color="color" />
          <Tab label="Tab 5: This tab has a long name" :value="4" :color="color" />
          <Tab label="Tab 6: This tab has a long name" :value="5" :color="color" />
          <Tab label="Tab 7: This tab has a long name" :value="6" :color="color" />
          <Tab label="Tab 8: This tab has a long name" :value="7" :color="color" />
          <Tab label="Tab 9: This tab has a long name" :value="8" :color="color" tag="Last" />
        </template>
      </Tabs>
    \`
  })
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const se=["Standard","WithTags","ShowArrows"];export{C as ShowArrows,S as Standard,_ as WithTags,se as __namedExportsOrder,le as default};
//# sourceMappingURL=Tabs.stories-9b64314a.js.map
