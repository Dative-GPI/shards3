import{Y as va,J as ha,h as ya,g as Z,t as aa,f as ea,s as Sa,C as E,m as i,F as Ca,y as f,A as c,o as V,k as x,l as T,x as oa,G as ka,H as Va,j as xa,p as G,q as M,u as A}from"./vue.esm-bundler-66d46254.js";import{C as ta,u as P}from"./useColors-c3e7013c.js";import{g as q,i as $a,p as la,L as wa,t as Ba,u as ra,j as Fa,y as Pa,c as _a,v as qa,w as Ra,b as sa,_,F as ja}from"./FSRow-c0589bf9.js";import{c as Na,V as D}from"./VBtn-4b6c71c6.js";import{a as Oa,s as za}from"./easing-9998643d.js";import{m as Ea,a as I}from"./VSlideGroup-67ad961f.js";import{m as Ga,u as Ma}from"./rounded-249030ea.js";import{b as Aa}from"./loader-72eca065.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./router-f5bee237.js";import"./index-26618c09.js";import"./index-2557a64d.js";import"./display-db0dbf7d.js";function Da(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return q()({name:t??va(ha(a.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...$a()},setup(l,s){let{slots:r}=s;return()=>{var o;return ya(l.tag,{class:[a,l.class],style:l.style},(o=r.default)==null?void 0:o.call(r))}}})}const na=Z({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:ta.Primary}},emits:["update:tab"],setup(a,{emit:e}){const{tab:t,color:l}=aa(a),s=P().getVariants(l.value),r=P().getDark(),o={"--fs-group-light-color":s.light,"--fs-group-base-color":s.base,"--fs-group-dark-color":s.dark,"--fs-group-light-text":r.base,"--fs-group-base-text":r.base,"--fs-group-dark-text":r.dark};return{tab:t,color:l,style:o,emit:e}}});const ca=Symbol.for("vuetify:v-tabs"),Ia=la({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...wa(Na({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ia=q()({name:"VTab",props:Ia(),setup(a,e){let{slots:t,attrs:l}=e;const{textColorClasses:s,textColorStyles:r}=Ba(a,"sliderColor"),o=ea(()=>a.direction==="horizontal"),g=Sa(!1),v=E(),n=E();function ua(w){var j,N;let{value:p}=w;if(g.value=p,p){const B=(N=(j=v.value)==null?void 0:j.$el.parentElement)==null?void 0:N.querySelector(".v-tab--selected .v-tab__slider"),F=n.value;if(!B||!F)return;const da=getComputedStyle(B).color,b=B.getBoundingClientRect(),u=F.getBoundingClientRect(),h=o.value?"x":"y",y=o.value?"X":"Y",O=o.value?"right":"bottom",d=o.value?"width":"height",ma=b[h],ga=u[h],m=ma>ga?b[O]-u[O]:b[h]-u[h],pa=Math.sign(m)>0?o.value?"right":"bottom":Math.sign(m)<0?o.value?"left":"top":"center",Ta=(Math.abs(m)+(Math.sign(m)<0?b[d]:u[d]))/Math.max(b[d],u[d])||0,fa=b[d]/u[d]||0,z=1.5;Oa(F,{backgroundColor:[da,"currentcolor"],transform:[`translate${y}(${m}px) scale${y}(${fa})`,`translate${y}(${m/z}px) scale${y}(${(Ta-1)/z+1})`,"none"],transformOrigin:Array(3).fill(pa)},{duration:225,easing:za})}}return ra(()=>{const w=D.filterProps(a);return i(D,f({symbol:ca,ref:v,class:["v-tab",a.class],style:a.style,tabindex:g.value?0:-1,role:"tab","aria-selected":String(g.value),active:!1},w,l,{block:a.fixed,maxWidth:a.fixed?300:void 0,"onGroup:selected":ua}),{...t,default:()=>{var p;return i(Ca,null,[((p=t.default)==null?void 0:p.call(t))??a.text,!a.hideSlider&&i("div",{ref:n,class:["v-tab__slider",s.value],style:r.value},null)])}})}),{}}});function Ha(a){return a?a.map(e=>Ra(e)?e:{text:e,value:e}):[]}const La=la({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ea({mandatory:"force"}),...Ga(),...Fa()},"VTabs"),Ua=q()({name:"VTabs",props:La(),emits:{"update:modelValue":a=>!0},setup(a,e){let{slots:t}=e;const l=Aa(a,"modelValue"),s=ea(()=>Ha(a.items)),{densityClasses:r}=Ma(a),{backgroundColorClasses:o,backgroundColorStyles:g}=Pa(c(a,"bgColor"));return _a({VTab:{color:c(a,"color"),direction:c(a,"direction"),stacked:c(a,"stacked"),fixed:c(a,"fixedTabs"),sliderColor:c(a,"sliderColor"),hideSlider:c(a,"hideSlider")}}),ra(()=>{const v=I.filterProps(a);return i(I,f(v,{modelValue:l.value,"onUpdate:modelValue":n=>l.value=n,class:["v-tabs",`v-tabs--${a.direction}`,`v-tabs--align-tabs-${a.alignTabs}`,{"v-tabs--fixed-tabs":a.fixedTabs,"v-tabs--grow":a.grow,"v-tabs--stacked":a.stacked},r.value,o.value,a.class],style:[{"--v-tabs-height":qa(a.height)},g.value,a.style],role:"tablist",symbol:ca}),{default:()=>[t.default?t.default():s.value.map(n=>i(ia,f(n,{key:n.text}),null))]})}),{}}});function Wa(a,e,t,l,s,r){return V(),x(Ua,f({class:"fs-tabs","selected-class":"fs-tab-active","show-arrows":"",grow:"",style:a.style,modelValue:a.tab,"onUpdate:modelValue":e[0]||(e[0]=o=>a.emit("update:tab",o))},a.$attrs),{default:T(()=>[oa(a.$slots,"default",ka(Va({color:a.color})))]),_:3},16,["style","modelValue"])}const $=sa(na,[["render",Wa]]);na.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],events:[{name:"update:tab"}],slots:[{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const ba=Z({name:"FSTab",components:{FSSpan:_,FSRow:ja},props:{label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},color:{type:String,required:!1,default:ta.Primary}},setup(a){const{label:e,color:t}=aa(a),l=P().getVariants(t.value);return{label:e,sliderColor:l.base}}});const Ya=Da("v-spacer","div","VSpacer");function Xa(a,e,t,l,s,r){const o=xa("FSRow");return V(),x(ia,f({class:"fs-tab",ripple:!1,"slider-color":a.sliderColor},a.$attrs),{default:T(()=>[oa(a.$slots,"default",{},()=>[i(o,null,{default:T(()=>[a.label?(V(),x(_,{key:0,class:"fs-tab-label",font:"text-button"},{default:T(()=>[G(M(a.label),1)]),_:1})):A("",!0),i(Ya),a.tag?(V(),x(_,{key:1,class:"fs-tab-tag"},{default:T(()=>[G(M(a.tag),1)]),_:1})):A("",!0)]),_:1})])]),_:3},16,["slider-color"])}const R=sa(ba,[["render",Xa]]);ba.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const ue={title:"Foundation/Tabs",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tab:0,color:"primary"}},render:(a,{argTypes:e})=>({components:{Tabs:$,Tab:R},props:Object.keys(e),setup(){return{...a}},template:`
        <Tabs v-bind="args" v-model:tab="args.tab">
          <template #default="{ color }">
            <Tab label="Tab 1" :value="0" :color="color" />
            <Tab label="Tab 2" :value="1" :color="color" />
            <Tab label="Tab 3" :value="2" :color="color" />
          </template>
        </Tabs>
    `})},C={args:{args:{color:"primary"}},render:(a,{argTypes:e})=>({components:{Tabs:$,Tab:R},props:Object.keys(e),setup(){return{...a}},template:`
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
    `})},k={args:{args:{color:"warning"}},render:(a,{argTypes:e})=>({components:{Tabs:$,Tab:R},props:Object.keys(e),setup(){return{...a}},template:`
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
    `})};var H,L,U;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(L=S.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var W,Y,X;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(X=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const de=["Standard","WithTags","ShowArrows"];export{k as ShowArrows,S as Standard,C as WithTags,de as __namedExportsOrder,ue as default};
