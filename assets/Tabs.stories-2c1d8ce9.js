import{X as ha,I as ya,h as Sa,g as Z,t as aa,f as ea,s as ka,B as E,l as i,F as Ca,x as f,z as c,o as V,j as x,k as T,v as oa,E as Va,G as xa,m as G,p as M,q as D}from"./vue.esm-bundler-3a71544d.js";import{C as ta,u as _}from"./useColors-f8bf713a.js";import{g as q,j as $a,p as la,L as wa,v as Ba,u as ra,k as Pa,z as _a,d as Fa,w as qa,x as za,c as sa,_ as F,b as na}from"./FSRow-c6493f26.js";import{c as ja,V as I}from"./VBtn-650379c0.js";import{a as Na,s as Oa}from"./easing-9998643d.js";import{m as Ra,a as A}from"./VSlideGroup-c9174448.js";import{m as Ea,u as Ga}from"./rounded-81fca583.js";import{b as Ma}from"./loader-b55f2f66.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./router-e438556e.js";import"./index-fe6eebca.js";import"./index-98ae0985.js";import"./display-e7c079d1.js";function Da(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",o=arguments.length>2?arguments[2]:void 0;return q()({name:o??ha(ya(a.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...$a()},setup(t,s){let{slots:r}=s;return()=>{var l;return Sa(t.tag,{class:[a,t.class],style:t.style},(l=r.default)==null?void 0:l.call(r))}}})}const ca=Z({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:ta.Primary}},emits:["update:tab"],setup(a,{emit:e}){const{tab:o,color:t}=aa(a),s=_().getVariants(t.value),r=_().getDark(),l={"--fs-group-light-color":s.light,"--fs-group-base-color":s.base,"--fs-group-dark-color":s.dark,"--fs-group-light-text":r.base,"--fs-group-base-text":r.base,"--fs-group-dark-text":r.dark};return{tab:o,color:t,style:l,emit:e}}});const ia=Symbol.for("vuetify:v-tabs"),Ia=la({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...wa(ja({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ba=q()({name:"VTab",props:Ia(),setup(a,e){let{slots:o,attrs:t}=e;const{textColorClasses:s,textColorStyles:r}=Ba(a,"sliderColor"),l=ea(()=>a.direction==="horizontal"),g=ka(!1),v=E(),n=E();function da(w){var j,N;let{value:p}=w;if(g.value=p,p){const B=(N=(j=v.value)==null?void 0:j.$el.parentElement)==null?void 0:N.querySelector(".v-tab--selected .v-tab__slider"),P=n.value;if(!B||!P)return;const ma=getComputedStyle(B).color,b=B.getBoundingClientRect(),u=P.getBoundingClientRect(),h=l.value?"x":"y",y=l.value?"X":"Y",O=l.value?"right":"bottom",d=l.value?"width":"height",ga=b[h],pa=u[h],m=ga>pa?b[O]-u[O]:b[h]-u[h],Ta=Math.sign(m)>0?l.value?"right":"bottom":Math.sign(m)<0?l.value?"left":"top":"center",fa=(Math.abs(m)+(Math.sign(m)<0?b[d]:u[d]))/Math.max(b[d],u[d])||0,va=b[d]/u[d]||0,R=1.5;Na(P,{backgroundColor:[ma,"currentcolor"],transform:[`translate${y}(${m}px) scale${y}(${va})`,`translate${y}(${m/R}px) scale${y}(${(fa-1)/R+1})`,"none"],transformOrigin:Array(3).fill(Ta)},{duration:225,easing:Oa})}}return ra(()=>{const w=I.filterProps(a);return i(I,f({symbol:ia,ref:v,class:["v-tab",a.class],style:a.style,tabindex:g.value?0:-1,role:"tab","aria-selected":String(g.value),active:!1},w,t,{block:a.fixed,maxWidth:a.fixed?300:void 0,"onGroup:selected":da}),{...o,default:()=>{var p;return i(Ca,null,[((p=o.default)==null?void 0:p.call(o))??a.text,!a.hideSlider&&i("div",{ref:n,class:["v-tab__slider",s.value],style:r.value},null)])}})}),{}}});function Aa(a){return a?a.map(e=>za(e)?e:{text:e,value:e}):[]}const La=la({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ra({mandatory:"force"}),...Ea(),...Pa()},"VTabs"),Ua=q()({name:"VTabs",props:La(),emits:{"update:modelValue":a=>!0},setup(a,e){let{slots:o}=e;const t=Ma(a,"modelValue"),s=ea(()=>Aa(a.items)),{densityClasses:r}=Ga(a),{backgroundColorClasses:l,backgroundColorStyles:g}=_a(c(a,"bgColor"));return Fa({VTab:{color:c(a,"color"),direction:c(a,"direction"),stacked:c(a,"stacked"),fixed:c(a,"fixedTabs"),sliderColor:c(a,"sliderColor"),hideSlider:c(a,"hideSlider")}}),ra(()=>{const v=A.filterProps(a);return i(A,f(v,{modelValue:t.value,"onUpdate:modelValue":n=>t.value=n,class:["v-tabs",`v-tabs--${a.direction}`,`v-tabs--align-tabs-${a.alignTabs}`,{"v-tabs--fixed-tabs":a.fixedTabs,"v-tabs--grow":a.grow,"v-tabs--stacked":a.stacked},r.value,l.value,a.class],style:[{"--v-tabs-height":qa(a.height)},g.value,a.style],role:"tablist",symbol:ia}),{default:()=>[o.default?o.default():s.value.map(n=>i(ba,f(n,{key:n.text}),null))]})}),{}}});function Wa(a,e,o,t,s,r){return V(),x(Ua,f({class:"fs-tabs","selected-class":"fs-tab-active","show-arrows":"",grow:"",style:a.style,modelValue:a.tab,"onUpdate:modelValue":e[0]||(e[0]=l=>a.emit("update:tab",l))},a.$attrs),{default:T(()=>[oa(a.$slots,"default",Va(xa({color:a.color})))]),_:3},16,["style","modelValue"])}const $=sa(ca,[["render",Wa]]);ca.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],events:[{name:"update:tab"}],slots:[{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const ua=Z({name:"FSTab",components:{FSSpan:F,FSRow:na},props:{label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},color:{type:String,required:!1,default:ta.Primary}},setup(a){const{label:e,color:o}=aa(a),t=_().getVariants(o.value);return{label:e,sliderColor:t.base}}});const Xa=Da("v-spacer","div","VSpacer");function Ha(a,e,o,t,s,r){return V(),x(ba,f({class:"fs-tab",ripple:!1,"slider-color":a.sliderColor},a.$attrs),{default:T(()=>[oa(a.$slots,"default",{},()=>[i(na,null,{default:T(()=>[a.label?(V(),x(F,{key:0,class:"fs-tab-label",font:"text-button"},{default:T(()=>[G(M(a.label),1)]),_:1})):D("",!0),i(Xa),a.tag?(V(),x(F,{key:1,class:"fs-tab-tag"},{default:T(()=>[G(M(a.tag),1)]),_:1})):D("",!0)]),_:1})])]),_:3},16,["slider-color"])}const z=sa(ua,[["render",Ha]]);ua.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const be={title:"Foundation/Tabs",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tab:0,color:"primary"}},render:(a,{argTypes:e})=>({components:{Tabs:$,Tab:z},props:Object.keys(e),setup(){return{...a}},template:`
        <Tabs v-bind="args" v-model:tab="args.tab">
          <template #default="{ color }">
            <Tab label="Tab 1" :value="0" :color="color" />
            <Tab label="Tab 2" :value="1" :color="color" />
            <Tab label="Tab 3" :value="2" :color="color" />
          </template>
        </Tabs>
    `})},k={args:{args:{color:"primary"}},render:(a,{argTypes:e})=>({components:{Tabs:$,Tab:z},props:Object.keys(e),setup(){return{...a}},template:`
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
    `})},C={args:{args:{color:"warning"}},render:(a,{argTypes:e})=>({components:{Tabs:$,Tab:z},props:Object.keys(e),setup(){return{...a}},template:`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <template #default="{ color }">
          <Tab label="Tab 1: This tab has a long name, but considering it's the first, it's even worst!" :value="0" :color="color" tag="First" />
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
    `})};var L,U,W;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(U=S.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,H,Y;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(H=k.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
          <Tab label="Tab 1: This tab has a long name, but considering it's the first, it's even worst!" :value="0" :color="color" tag="First" />
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
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ue=["Standard","WithTags","ShowArrows"];export{C as ShowArrows,S as Standard,k as WithTags,ue as __namedExportsOrder,be as default};
