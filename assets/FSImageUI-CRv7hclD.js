var W=Object.defineProperty;var T=(e,a,t)=>a in e?W(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var w=(e,a,t)=>T(e,typeof a!="symbol"?a+"":a,t);import{G as k}from"./base-CmdGny12.js";import{S as O}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-Bs2ItKgK.js";import{d as x,b as $,c as h,w as z,y as P,z as F,A as B,B as N,m as J,D as H,W as K}from"./vue.esm-bundler-B8zP9crO.js";import{F as Y,V as Q}from"./VImg-DbvVxLaQ.js";import{s as f,v as A}from"./css-B1GBcH8c.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";class Z{constructor(a){w(this,"blurHash");w(this,"width");w(this,"height");this.blurHash=a.blurHash,this.width=a.width,this.height=a.height}}class ee extends Z{constructor(a){super(a)}}const ae=()=>`${k()}/images`,C=e=>`${ae()}/${encodeURIComponent(e)}`,we=e=>`${C(e)}/raw`,te=new O("image",ee).create(e=>e.build(e.addGet(C),e.addNotify())),Re=j.get(te);var re=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],g=e=>{let a=0;for(let t=0;t<e.length;t++){let i=e[t],n=re.indexOf(i);a=a*83+n}return a},M=e=>{let a=e/255;return a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)},S=e=>{let a=Math.max(0,Math.min(1,e));return a<=.0031308?Math.trunc(a*12.92*255+.5):Math.trunc((1.055*Math.pow(a,.4166666666666667)-.055)*255+.5)},le=e=>e<0?-1:1,q=(e,a)=>le(e)*Math.pow(Math.abs(e),a),U=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}},G=e=>{if(!e||e.length<6)throw new U("The blurhash string must be at least 6 characters");let a=g(e[0]),t=Math.floor(a/9)+1,i=a%9+1;if(e.length!==4+2*i*t)throw new U(`blurhash length mismatch: length is ${e.length} but it should be ${4+2*i*t}`)},ie=e=>{try{G(e)}catch(a){return{result:!1,errorReason:a.message}}return{result:!0}},se=e=>{let a=e>>16,t=e>>8&255,i=e&255;return[M(a),M(t),M(i)]},ne=(e,a)=>{let t=Math.floor(e/361),i=Math.floor(e/19)%19,n=e%19;return[q((t-9)/9,2)*a,q((i-9)/9,2)*a,q((n-9)/9,2)*a]},ue=(e,a,t,i)=>{G(e),i=i|1;let n=g(e[0]),m=Math.floor(n/9)+1,u=n%9+1,b=(g(e[1])+1)/166,d=new Array(u*m);for(let l=0;l<d.length;l++)if(l===0){let s=g(e.substring(2,6));d[l]=se(s)}else{let s=g(e.substring(4+l*2,6+l*2));d[l]=ne(s,b*i)}let o=a*4,r=new Uint8ClampedArray(o*t);for(let l=0;l<t;l++)for(let s=0;s<a;s++){let v=0,c=0,V=0;for(let y=0;y<m;y++)for(let p=0;p<u;p++){let R=Math.cos(Math.PI*s*p/a)*Math.cos(Math.PI*l*y/t),I=d[p+y*u];v+=I[0]*R,c+=I[1]*R,V+=I[2]*R}let E=S(v),L=S(c),_=S(V);r[4*s+0+l*o]=E,r[4*s+1+l*o]=L,r[4*s+2+l*o]=_,r[4*s+3+l*o]=255}return r},oe=ue;const D=x({name:"FSImageUI",components:{FSLoader:Y},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageB64:{type:String,required:!1,default:null},source:{type:String,required:!1,default:null},blurHash:{type:Object,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"},cover:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1}},setup(e){const a=$(null),t=$(null),i=$({JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"}),n=h(()=>({"--fs-image-border-radius":f(e.borderRadius),"--fs-image-blurhash-opacity":e.blurHash?"1":"0"})),m=h(()=>{if(e.height)return f(e.height);if(e.width){if(typeof e.width=="string")return;if(e.aspectRatio){const r=e.aspectRatio.split("/");if(r.length===2&&!isNaN(parseFloat(r[0]))&&!isNaN(parseFloat(r[1])))return f(A(e.width)*(parseFloat(r[1])/parseFloat(r[0])))}return f(e.width)}}),u=h(()=>{if(e.width)return f(e.width);if(e.height){if(typeof e.height=="string")return;if(e.aspectRatio){const r=e.aspectRatio.split("/");if(r.length===2&&!isNaN(parseFloat(r[0]))&&!isNaN(parseFloat(r[1])))return f(A(e.height)*(parseFloat(r[0])/parseFloat(r[1])))}return f(e.height)}}),b=h(()=>{if(e.imageB64){if(o.value&&d.value)return`${o.value},${d.value}`}else if(e.source)return e.source}),d=h(()=>e.imageB64&&e.imageB64.includes(",")?e.imageB64.split(",")[1]:e.imageB64),o=h(()=>{if(e.imageB64&&e.imageB64.includes(","))return e.imageB64.split(",")[0];if(e.imageB64){for(const r in i.value)if(e.imageB64.startsWith(r))return`data:${i.value[r]};base64`}return null});return z(()=>e.blurHash,()=>{if(t.value&&a.value&&e.blurHash&&ie(e.blurHash.blurHash).result){const r=t.value.getContext("2d");if(r){const l=a.value.$el.clientWidth,s=a.value.$el.clientHeight,v=oe(e.blurHash.blurHash,l,s),c=r.createImageData(l,s);t.value.width=l,t.value.height=s,c.data.set(v),r.putImageData(c,0,0)}}}),{computedHeight:m,computedWidth:u,realSource:b,canvasRef:t,imageRef:a,style:n}}}),de={ref:"canvasRef"};function fe(e,a,t,i,n,m){const u=P("FSLoader");return F(),B(Q,J({class:"fs-image",ref:"imageRef",height:e.computedHeight,width:e.computedWidth,cover:e.$props.cover,src:e.realSource,style:e.style,onError:a[0]||(a[0]=b=>e.$emit("error"))},e.$attrs),{placeholder:N(()=>[e.$props.loading?(F(),B(u,{key:0,class:"fs-image-load",height:"100%",width:"100%",borderRadius:e.$props.borderRadius},null,8,["borderRadius"])):H("",!0)]),error:N(()=>[e.$props.blurHash?H("",!0):(F(),B(u,{key:0,class:"fs-image-load",height:"100%",width:"100%",borderRadius:e.$props.borderRadius},null,8,["borderRadius"])),K("canvas",de,null,512)]),_:1},16,["height","width","cover","src","style"])}const Ie=X(D,[["render",fe]]);D.__docgenInfo={displayName:"FSImageUI",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageB64",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"source",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"blurHash",type:{name:"ImageDetails | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"cover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"error"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageUI.vue"]};export{Ie as F,we as I,Re as u};
