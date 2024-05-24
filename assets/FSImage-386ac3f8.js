import{j as I,g as c,f as j,w as k,I as D,J as F,K as E,L as A,B as O,N as V,a0 as x}from"./vue.esm-bundler-cd768bc3.js";import{F as J}from"./FSLoader-c57e8f50.js";import{a as P}from"./base-0de1729e.js";import{S as z}from"./serviceFactory-7552fe10.js";import{C as K}from"./composableFactory-c82cc213.js";import{s as f,v as L}from"./css-c2ea3b68.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Y}from"./VImg-1d5e27a6.js";class Q{constructor(t){this.blurHash=t.blurHash,this.width=t.width,this.height=t.height}}const C=()=>`${P()}/images`,Z=()=>`${C()}/raw`,G=e=>`${Z()}/${encodeURIComponent(e)}`,ee=(e,t)=>`${G(e)}?access_token=${t}`,te=()=>`${C()}/blurHash`,ae=e=>`${te()}/${encodeURIComponent(e)}`,re={...z.addCustom("getBlurHash",(e,t)=>e.get(ae(t)),e=>new Q(e))},le=K.custom(re.getBlurHash),N=I(void 0),ne=()=>{const e=a=>{N.value=a},t=c(()=>N.value!==null);return{jwt:N,ready:t,setExtensionJwt:e}};var ie=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],R=e=>{let t=0;for(let a=0;a<e.length;a++){let n=e[a],s=ie.indexOf(n);t=t*83+s}return t},_=e=>{let t=e/255;return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},H=e=>{let t=Math.max(0,Math.min(1,e));return t<=.0031308?Math.trunc(t*12.92*255+.5):Math.trunc((1.055*Math.pow(t,.4166666666666667)-.055)*255+.5)},se=e=>e<0?-1:1,q=(e,t)=>se(e)*Math.pow(Math.abs(e),t),U=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}},T=e=>{if(!e||e.length<6)throw new U("The blurhash string must be at least 6 characters");let t=R(e[0]),a=Math.floor(t/9)+1,n=t%9+1;if(e.length!==4+2*n*a)throw new U(`blurhash length mismatch: length is ${e.length} but it should be ${4+2*n*a}`)},ue=e=>{try{T(e)}catch(t){return{result:!1,errorReason:t.message}}return{result:!0}},oe=e=>{let t=e>>16,a=e>>8&255,n=e&255;return[_(t),_(a),_(n)]},de=(e,t)=>{let a=Math.floor(e/361),n=Math.floor(e/19)%19,s=e%19;return[q((a-9)/9,2)*t,q((n-9)/9,2)*t,q((s-9)/9,2)*t]},he=(e,t,a,n)=>{T(e),n=n|1;let s=R(e[0]),u=Math.floor(s/9)+1,o=s%9+1,B=(R(e[1])+1)/166,m=new Array(o*u);for(let l=0;l<m.length;l++)if(l===0){let i=R(e.substring(2,6));m[l]=oe(i)}else{let i=R(e.substring(4+l*2,6+l*2));m[l]=de(i,B*n)}let d=t*4,h=new Uint8ClampedArray(d*a);for(let l=0;l<a;l++)for(let i=0;i<t;i++){let b=0,r=0,g=0;for(let w=0;w<u;w++)for(let p=0;p<o;p++){let $=Math.cos(Math.PI*i*p/t)*Math.cos(Math.PI*l*w/a),M=m[p+w*o];b+=M[0]*$,r+=M[1]*$,g+=M[2]*$}let v=H(b),S=H(r),y=H(g);h[4*i+0+l*d]=v,h[4*i+1+l*d]=S,h[4*i+2+l*d]=y,h[4*i+3+l*d]=255}return h},fe=he;const W=j({name:"FSImage",components:{FSLoader:J},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageId:{type:String,required:!1,default:null},imageB64:{type:String,required:!1,default:null},source:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"},cover:{type:Boolean,required:!1,default:!0}},setup(e){const{fetch:t,entity:a}=le(),{jwt:n}=ne(),s=I(null),u=I(null),o=I({JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"}),B=c(()=>({"--fs-image-border-radius":f(e.borderRadius),"--fs-image-blurhash-opacity":a.value?"1":"0"})),m=c(()=>{if(e.height)return f(e.height);if(e.width){if(typeof e.width=="string")return;if(e.aspectRatio){const r=e.aspectRatio.split("/");if(r.length===2&&!isNaN(parseFloat(r[0]))&&!isNaN(parseFloat(r[1])))return f(L(e.width)*(parseFloat(r[1])/parseFloat(r[0])))}return f(e.width)}}),d=c(()=>{if(e.width)return f(e.width);if(e.height){if(typeof e.height=="string")return;if(e.aspectRatio){const r=e.aspectRatio.split("/");if(r.length===2&&!isNaN(parseFloat(r[0]))&&!isNaN(parseFloat(r[1])))return f(L(e.height)*(parseFloat(r[0])/parseFloat(r[1])))}return f(e.height)}}),h=c(()=>{if(e.imageB64){if(i.value&&l.value)return`${i.value},${l.value}`}else if(e.imageId)return n.value?ee(e.imageId,n.value):G(e.imageId);return e.source}),l=c(()=>e.imageB64&&e.imageB64.includes(",")?e.imageB64.split(",")[1]:e.imageB64),i=c(()=>{if(e.imageB64&&e.imageB64.includes(","))return e.imageB64.split(",")[0];if(e.imageB64){for(const r in o.value)if(e.imageB64.startsWith(r))return`data:${o.value[r]};base64`}return null}),b=()=>{e.imageId&&t(e.imageId)};return k(()=>a.value,()=>{if(u.value&&s.value&&a.value&&ue(a.value.blurHash).result){const r=u.value.getContext("2d");if(r){const g=s.value.$el.clientWidth,v=s.value.$el.clientHeight,S=fe(a.value.blurHash,g,v),y=r.createImageData(g,v);u.value.width=g,u.value.height=v,y.data.set(S),r.putImageData(y,0,0)}}}),{computedHeight:m,computedWidth:d,realSource:h,canvasRef:u,imageRef:s,blurHash:a,style:B,onError:b}}}),ce={ref:"canvasRef"};function me(e,t,a,n,s,u){const o=D("FSLoader");return F(),E(Y,O({class:"fs-image",ref:"imageRef",height:e.computedHeight,width:e.computedWidth,cover:e.$props.cover,src:e.realSource,style:e.style,onError:e.onError},e.$attrs),{placeholder:A(()=>[e.$props.imageId?(F(),E(o,{key:0,class:"fs-image-load",height:"100%",width:"100%",borderRadius:e.$props.borderRadius},null,8,["borderRadius"])):V("",!0)]),error:A(()=>[e.blurHash?V("",!0):(F(),E(o,{key:0,class:"fs-image-load",height:"100%",width:"100%",borderRadius:e.$props.borderRadius},null,8,["borderRadius"])),x("canvas",ce,null,512)]),_:1},16,["height","width","cover","src","style","onError"])}const Be=X(W,[["render",me]]);W.__docgenInfo={displayName:"FSImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageB64",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"source",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"cover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImage.vue"]};export{Be as F};
