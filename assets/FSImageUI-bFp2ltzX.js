var _=Object.defineProperty;var D=(e,a,r)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var b=(e,a,r)=>D(e,typeof a!="symbol"?a+"":a,r);import{G as T}from"./base-CmdGny12.js";import{S as k}from"./serviceFactory-Bd5jifNi.js";import{C as O}from"./composableFactory-wHNy9kQa.js";import{d as W,b as w,c as p,w as j,y as x,z as I,A as R,B as U,m as P,D as F,W as z}from"./vue.esm-bundler-BSyvBTC9.js";import{F as J}from"./FSLoader-DuEJL8Ft.js";import{s as K}from"./css-DLfrm0pR.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Q}from"./VImg-DW7Ik4XH.js";class X{constructor(a){b(this,"blurHash");b(this,"width");b(this,"height");this.blurHash=a.blurHash,this.width=a.width,this.height=a.height}}class Z extends X{constructor(a){super(a)}}const ee=()=>`${T()}/images`,S=e=>`${ee()}/${encodeURIComponent(e)}`,we=(e,a)=>{let r=`${S(e)}/raw`;return a&&(r+=`?authToken=${encodeURIComponent(a)}`),r},Ie=(e,a)=>{let r=`${S(e)}/thumbnail`;return a&&(r+=`?authToken=${encodeURIComponent(a)}`),r},ae=new k("image",Z).create(e=>e.build(e.addGet(S),e.addNotify())),Re=O.get(ae);var re=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],h=e=>{let a=0;for(let r=0;r<e.length;r++){let l=e[r],u=re.indexOf(l);a=a*83+u}return a},$=e=>{let a=e/255;return a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)},B=e=>{let a=Math.max(0,Math.min(1,e));return a<=.0031308?Math.trunc(a*12.92*255+.5):Math.trunc((1.055*Math.pow(a,.4166666666666667)-.055)*255+.5)},te=e=>e<0?-1:1,M=(e,a)=>te(e)*Math.pow(Math.abs(e),a),A=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}},C=e=>{if(!e||e.length<6)throw new A("The blurhash string must be at least 6 characters");let a=h(e[0]),r=Math.floor(a/9)+1,l=a%9+1;if(e.length!==4+2*l*r)throw new A(`blurhash length mismatch: length is ${e.length} but it should be ${4+2*l*r}`)},le=e=>{try{C(e)}catch(a){return{result:!1,errorReason:a.message}}return{result:!0}},se=e=>{let a=e>>16,r=e>>8&255,l=e&255;return[$(a),$(r),$(l)]},ne=(e,a)=>{let r=Math.floor(e/361),l=Math.floor(e/19)%19,u=e%19;return[M((r-9)/9,2)*a,M((l-9)/9,2)*a,M((u-9)/9,2)*a]},ue=(e,a,r,l)=>{C(e),l=l|1;let u=h(e[0]),f=Math.floor(u/9)+1,i=u%9+1,m=(h(e[1])+1)/166,n=new Array(i*f);for(let t=0;t<n.length;t++)if(t===0){let s=h(e.substring(2,6));n[t]=se(s)}else{let s=h(e.substring(4+t*2,6+t*2));n[t]=ne(s,m*l)}let o=a*4,d=new Uint8ClampedArray(o*r);for(let t=0;t<r;t++)for(let s=0;s<a;s++){let q=0,V=0,H=0;for(let c=0;c<f;c++)for(let g=0;g<i;g++){let v=Math.cos(Math.PI*s*g/a)*Math.cos(Math.PI*t*c/r),y=n[g+c*i];q+=y[0]*v,V+=y[1]*v,H+=y[2]*v}let E=B(q),L=B(V),N=B(H);d[4*s+0+t*o]=E,d[4*s+1+t*o]=L,d[4*s+2+t*o]=N,d[4*s+3+t*o]=255}return d},ie=ue;const G=W({name:"FSImageUI",components:{FSLoader:J},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageB64:{type:String,required:!1,default:null},source:{type:String,required:!1,default:null},blurHash:{type:Object,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"},cover:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1}},setup(e){const a=w(null),r=w(null),l=w({JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"}),u=p(()=>({"--fs-image-border-radius":K(e.borderRadius),"--fs-image-blurhash-opacity":e.blurHash?"1":"0"})),f=p(()=>{if(console.log(e.width,e.height),e.imageB64){if(m.value&&i.value)return`${m.value},${i.value}`}else if(e.source)return e.source}),i=p(()=>e.imageB64&&e.imageB64.includes(",")?e.imageB64.split(",")[1]:e.imageB64),m=p(()=>{if(e.imageB64&&e.imageB64.includes(","))return e.imageB64.split(",")[0];if(e.imageB64){for(const n in l.value)if(e.imageB64.startsWith(n))return`data:${l.value[n]};base64`}return null});return j(()=>e.blurHash,()=>{if(r.value&&a.value&&e.blurHash&&le(e.blurHash.blurHash).result){const n=r.value.getContext("2d");if(n){const o=a.value.$el.clientWidth,d=a.value.$el.clientHeight,t=ie(e.blurHash.blurHash,o,d),s=n.createImageData(o,d);r.value.width=o,r.value.height=d,s.data.set(t),n.putImageData(s,0,0)}}}),{realSource:f,canvasRef:r,imageRef:a,style:u}}}),oe={ref:"canvasRef"};function de(e,a,r,l,u,f){const i=x("FSLoader");return I(),R(Q,P({class:"fs-image",ref:"imageRef",height:e.$props.height,width:e.$props.width,cover:e.$props.cover,src:e.realSource,style:e.style,onError:a[0]||(a[0]=m=>e.$emit("error"))},e.$attrs),{placeholder:U(()=>[e.$props.loading?(I(),R(i,{key:0,class:"fs-image-load",height:"100%",width:"100%",borderRadius:e.$props.borderRadius},null,8,["borderRadius"])):F("",!0)]),error:U(()=>[e.$props.blurHash?F("",!0):(I(),R(i,{key:0,class:"fs-image-load",height:"100%",width:"100%",borderRadius:e.$props.borderRadius},null,8,["borderRadius"])),z("canvas",oe,null,512)]),_:1},16,["height","width","cover","src","style"])}const $e=Y(G,[["render",de]]);G.__docgenInfo={displayName:"FSImageUI",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageB64",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"source",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"blurHash",type:{name:"ImageDetails | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"cover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"error"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageUI.vue"]};export{$e as F,Ie as I,we as a,Re as u};
