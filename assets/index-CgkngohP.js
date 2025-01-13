function l(u){for(var d=[],i=1;i<arguments.length;i++)d[i-1]=arguments[i];var n=Array.from(typeof u=="string"?[u]:u);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var g=n.reduce(function(e,c){var a=c.match(/\n([\t ]+|(?!\s).)/g);return a?e.concat(a.map(function(f){var t,r;return(r=(t=f.match(/[\t ]/g))===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:0})):e},[]);if(g.length){var s=new RegExp(`
[	 ]{`+Math.min.apply(Math,g)+"}","g");n=n.map(function(e){return e.replace(s,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var o=n[0];return d.forEach(function(e,c){var a=o.match(/(?:^|\n)( *)$/),f=a?a[1]:"",t=e;typeof e=="string"&&e.includes(`
`)&&(t=String(e).split(`
`).map(function(r,h){return h===0?r:""+f+r}).join(`
`)),o+=t+n[c+1]}),o}const p=Object.freeze(Object.defineProperty({__proto__:null,dedent:l,default:l},Symbol.toStringTag,{value:"Module"}));export{l as d,p as e};
