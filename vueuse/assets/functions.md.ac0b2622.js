import{d as _e,c as D,o as y,a as v,b as m,e as B,m as Ae,u as b,n as U,f as Le,g as Ce,t as j,F as T,r as H,w as Q,v as le,i as X,h as Ne,j as K,k as me,p as Re,l as Fe,q as ie,s as Oe,x as he,_ as xe}from"./app.d45c012b.js";function Te(t=""){return t.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/^\> (.*$)/gim,"<blockquote>$1</blockquote>").replace(/\*\*(.*)\*\*/gim,"<b>$1</b>").replace(/\*(.*)\*/gim,"<i>$1</i>").replace(/!\[(.*?)\]\((.*?)\)/gim,"<img alt='$1' src='$2' />").replace(/\[(.*?)\]\((.*?)\)/gim,"<a href='$2'>$1</a>").replace(/`(.*?)`/gim,"<code>$1</code>").replace(/\n$/gim,"<br />").trim()}const Pe=["innerHTML"],je={key:0,"i-carbon-launch":"",class:"opacity-80 text-xs"},De=m("span",{op50:""},"-",-1),Be=["innerHTML"],Ve=_e({__name:"FunctionBadge",props:{fn:null},setup(t){const e=t;function s(r){return r.startsWith("use")?`<span opacity="70">use</span>${r.slice(3)}`:r.startsWith("try")?`<span opacity="70">try</span>${r.slice(3)}`:r.startsWith("on")?`<span opacity="70">on</span>${r.slice(2)}`:r}const n=D(()=>e.fn.external?{href:e.fn.external,target:"_blank"}:{href:`/${e.fn.package}/${e.fn.name}/`});return(r,i)=>(y(),v("div",{text:"sm",flex:"~ gap1","items-center":"",class:U(t.fn.deprecated?"op80 saturate-0":"")},[m("a",Ae(b(n),{bg:"gray-400/5",p:"x-1.5 y-0.5",class:["rounded items-center",t.fn.deprecated?"line-through !decoration-solid":""],flex:"inline gap-1 none","my-auto":""}),[m("span",{innerHTML:s(t.fn.name)},null,8,Pe),t.fn.external?(y(),v("i",je)):B("",!0)],16),De,m("span",{class:"whitespace-wrap",innerHTML:b(Te)(t.fn.description)},null,8,Be)],2))}});function L(t){return Array.isArray?Array.isArray(t):Me(t)==="[object Array]"}const We=1/0;function He(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-We?"-0":e}function Ke(t){return t==null?"":He(t)}function A(t){return typeof t=="string"}function ye(t){return typeof t=="number"}function ze(t){return t===!0||t===!1||Ue(t)&&Me(t)=="[object Boolean]"}function ve(t){return typeof t=="object"}function Ue(t){return ve(t)&&t!==null}function $(t){return t!=null}function Z(t){return!t.trim().length}function Me(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ye="Incorrect 'index' type",Ge=t=>`Invalid value for key ${t}`,Je=t=>`Pattern length exceeds max of ${t}.`,Qe=t=>`Missing ${t} property in key`,Xe=t=>`Property 'weight' in key '${t}' must be a positive integer`,ue=Object.prototype.hasOwnProperty;class Ze{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=be(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function be(t){let e=null,s=null,n=null,r=1,i=null;if(A(t)||L(t))n=t,e=de(t),s=q(t);else{if(!ue.call(t,"name"))throw new Error(Qe("name"));const c=t.name;if(n=c,ue.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(Xe(c));e=de(c),s=q(c),i=t.getFn}return{path:e,id:s,weight:r,src:n,getFn:i}}function de(t){return L(t)?t:t.split(".")}function q(t){return L(t)?t.join("."):t}function qe(t,e){let s=[],n=!1;const r=(i,c,o)=>{if(!!$(i))if(!c[o])s.push(i);else{let a=c[o];const l=i[a];if(!$(l))return;if(o===c.length-1&&(A(l)||ye(l)||ze(l)))s.push(Ke(l));else if(L(l)){n=!0;for(let h=0,f=l.length;h<f;h+=1)r(l[h],c,o+1)}else c.length&&r(l,c,o+1)}};return r(t,A(e)?e.split("."):e,0),n?s:s[0]}const et={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},tt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},st={location:0,threshold:.6,distance:100},nt={useExtendedSearch:!1,getFn:qe,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var d={...tt,...et,...st,...nt};const rt=/[^ ]+/g;function it(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(r){const i=r.match(rt).length;if(s.has(i))return s.get(i);const c=1/Math.pow(i,.5*t),o=parseFloat(Math.round(c*n)/n);return s.set(i,o),o},clear(){s.clear()}}}class ce{constructor({getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){this.norm=it(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,A(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();A(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!$(e)||Z(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let c=r.getFn?r.getFn(e):this.getFn(e,r.path);if(!!$(c)){if(L(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(!!$(h))if(A(h)&&!Z(h)){let f={v:h,i:l,n:this.norm.get(h)};o.push(f)}else L(h)&&h.forEach((f,_)=>{a.push({nestedArrIndex:_,value:f})})}n.$[i]=o}else if(A(c)&&!Z(c)){let o={v:c,n:this.norm.get(c)};n.$[i]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function $e(t,e,{getFn:s=d.getFn,fieldNormWeight:n=d.fieldNormWeight}={}){const r=new ce({getFn:s,fieldNormWeight:n});return r.setKeys(t.map(be)),r.setSources(e),r.create(),r}function ct(t,{getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){const{keys:n,records:r}=t,i=new ce({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function z(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=d.distance,ignoreLocation:i=d.ignoreLocation}={}){const c=e/t.length;if(i)return c;const o=Math.abs(n-s);return r?c+o/r:o?1:c}function ot(t=[],e=d.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let c=t.length;i<c;i+=1){let o=t[i];o&&n===-1?n=i:!o&&n!==-1&&(r=i-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const F=32;function at(t,e,s,{location:n=d.location,distance:r=d.distance,threshold:i=d.threshold,findAllMatches:c=d.findAllMatches,minMatchCharLength:o=d.minMatchCharLength,includeMatches:a=d.includeMatches,ignoreLocation:l=d.ignoreLocation}={}){if(e.length>F)throw new Error(Je(F));const h=e.length,f=t.length,_=Math.max(0,Math.min(n,f));let x=i,u=_;const p=o>1||a,M=p?Array(f):[];let g;for(;(g=t.indexOf(e,u))>-1;){let E=z(e,{currentLocation:g,expectedLocation:_,distance:r,ignoreLocation:l});if(x=Math.min(E,x),u=g+h,p){let C=0;for(;C<h;)M[g+C]=1,C+=1}}u=-1;let I=[],w=1,V=h+f;const we=1<<h-1;for(let E=0;E<h;E+=1){let C=0,N=V;for(;C<N;)z(e,{errors:E,currentLocation:_+N,expectedLocation:_,distance:r,ignoreLocation:l})<=x?C=N:V=N,N=Math.floor((V-C)/2+C);V=N;let oe=Math.max(1,_-N+1),J=c?f:Math.min(_+N,f)+h,O=Array(J+2);O[J+1]=(1<<E)-1;for(let S=J;S>=oe;S-=1){let W=S-1,ae=s[t.charAt(W)];if(p&&(M[W]=+!!ae),O[S]=(O[S+1]<<1|1)&ae,E&&(O[S]|=(I[S+1]|I[S])<<1|1|I[S+1]),O[S]&we&&(w=z(e,{errors:E,currentLocation:W,expectedLocation:_,distance:r,ignoreLocation:l}),w<=x)){if(x=w,u=W,u<=_)break;oe=Math.max(1,2*_-u)}}if(z(e,{errors:E+1,currentLocation:_,expectedLocation:_,distance:r,ignoreLocation:l})>x)break;I=O}const G={isMatch:u>=0,score:Math.max(.001,w)};if(p){const E=ot(M,o);E.length?a&&(G.indices=E):G.isMatch=!1}return G}function lt(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class Ee{constructor(e,{location:s=d.location,threshold:n=d.threshold,distance:r=d.distance,includeMatches:i=d.includeMatches,findAllMatches:c=d.findAllMatches,minMatchCharLength:o=d.minMatchCharLength,isCaseSensitive:a=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(_,x)=>{this.chunks.push({pattern:_,alphabet:lt(_),startIndex:x})},f=this.pattern.length;if(f>F){let _=0;const x=f%F,u=f-x;for(;_<u;)h(this.pattern.substr(_,F),_),_+=F;if(x){const p=f-F;h(this.pattern.substr(p),p)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let u={isMatch:!0,score:0};return n&&(u.indices=[[0,e.length-1]]),u}const{location:r,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],f=0,_=!1;this.chunks.forEach(({pattern:u,alphabet:p,startIndex:M})=>{const{isMatch:g,score:I,indices:w}=at(e,u,p,{location:r+M,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:n,ignoreLocation:l});g&&(_=!0),f+=I,g&&w&&(h=[...h,...w])});let x={isMatch:_,score:_?f/this.chunks.length:1};return _&&n&&(x.indices=h),x}}class R{constructor(e){this.pattern=e}static isMultiMatch(e){return fe(e,this.multiRegex)}static isSingleMatch(e){return fe(e,this.singleRegex)}search(){}}function fe(t,e){const s=t.match(e);return s?s[1]:null}class ht extends R{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class ut extends R{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class dt extends R{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class ft extends R{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class pt extends R{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class gt extends R{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ke extends R{constructor(e,{location:s=d.location,threshold:n=d.threshold,distance:r=d.distance,includeMatches:i=d.includeMatches,findAllMatches:c=d.findAllMatches,minMatchCharLength:o=d.minMatchCharLength,isCaseSensitive:a=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){super(e),this._bitapSearch=new Ee(e,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Ie extends R{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const c=!!r.length;return{isMatch:c,score:c?0:1,indices:r}}}const ee=[ht,Ie,dt,ft,gt,pt,ut,ke],pe=ee.length,_t=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,mt="|";function xt(t,e={}){return t.split(mt).map(s=>{let n=s.trim().split(_t).filter(i=>i&&!!i.trim()),r=[];for(let i=0,c=n.length;i<c;i+=1){const o=n[i];let a=!1,l=-1;for(;!a&&++l<pe;){const h=ee[l];let f=h.isMultiMatch(o);f&&(r.push(new h(f,e)),a=!0)}if(!a)for(l=-1;++l<pe;){const h=ee[l];let f=h.isSingleMatch(o);if(f){r.push(new h(f,e));break}}}return r})}const yt=new Set([ke.type,Ie.type]);class vt{constructor(e,{isCaseSensitive:s=d.isCaseSensitive,includeMatches:n=d.includeMatches,minMatchCharLength:r=d.minMatchCharLength,ignoreLocation:i=d.ignoreLocation,findAllMatches:c=d.findAllMatches,location:o=d.location,threshold:a=d.threshold,distance:l=d.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:c,ignoreLocation:i,location:o,threshold:a,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=xt(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,c=[],o=0;for(let a=0,l=s.length;a<l;a+=1){const h=s[a];c.length=0,i=0;for(let f=0,_=h.length;f<_;f+=1){const x=h[f],{isMatch:u,indices:p,score:M}=x.search(e);if(u){if(i+=1,o+=M,n){const g=x.constructor.type;yt.has(g)?c=[...c,...p]:c.push(p)}}else{o=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:o/i};return n&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const te=[];function Mt(...t){te.push(...t)}function se(t,e){for(let s=0,n=te.length;s<n;s+=1){let r=te[s];if(r.condition(t,e))return new r(t,e)}return new Ee(t,e)}const Y={AND:"$and",OR:"$or"},ne={PATH:"$path",PATTERN:"$val"},re=t=>!!(t[Y.AND]||t[Y.OR]),bt=t=>!!t[ne.PATH],$t=t=>!L(t)&&ve(t)&&!re(t),ge=t=>({[Y.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Se(t,e,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const c=bt(r);if(!c&&i.length>1&&!re(r))return n(ge(r));if($t(r)){const a=c?r[ne.PATH]:i[0],l=c?r[ne.PATTERN]:r[a];if(!A(l))throw new Error(Ge(a));const h={keyId:q(a),pattern:l};return s&&(h.searcher=se(l,e)),h}let o={children:[],operator:i[0]};return i.forEach(a=>{const l=r[a];L(l)&&l.forEach(h=>{o.children.push(n(h))})}),o};return re(t)||(t=ge(t)),n(t)}function Et(t,{ignoreFieldNorm:e=d.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:c})=>{const o=r?r.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(e?1:i))}),s.score=n})}function kt(t,e){const s=t.matches;e.matches=[],$(s)&&s.forEach(n=>{if(!$(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let c={indices:r,value:i};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),e.matches.push(c)})}function It(t,e){e.score=t.score}function St(t,e,{includeMatches:s=d.includeMatches,includeScore:n=d.includeScore}={}){const r=[];return s&&r.push(kt),n&&r.push(It),t.map(i=>{const{idx:c}=i,o={item:e[c],refIndex:c};return r.length&&r.forEach(a=>{a(i,o)}),o})}class P{constructor(e,s={},n){this.options={...d,...s},this.options.useExtendedSearch,this._keyStore=new Ze(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof ce))throw new Error(Ye);this._myIndex=s||$e(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!$(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let a=A(e)?A(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Et(a,{ignoreFieldNorm:o}),i&&a.sort(c),ye(s)&&s>-1&&(a=a.slice(0,s)),St(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=se(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:c,n:o})=>{if(!$(i))return;const{isMatch:a,score:l,indices:h}=s.searchIn(i);a&&r.push({item:i,idx:c,matches:[{score:l,value:i,norm:o,indices:h}]})}),r}_searchLogical(e){const s=Se(e,this.options),n=(o,a,l)=>{if(!o.children){const{keyId:f,searcher:_}=o,x=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(a,f),searcher:_});return x&&x.length?[{idx:l,item:a,matches:x}]:[]}const h=[];for(let f=0,_=o.children.length;f<_;f+=1){const x=o.children[f],u=n(x,a,l);if(u.length)h.push(...u);else if(o.operator===Y.AND)return[]}return h},r=this._myIndex.records,i={},c=[];return r.forEach(({$:o,i:a})=>{if($(o)){let l=n(s,o,a);l.length&&(i[a]||(i[a]={idx:a,item:o,matches:[]},c.push(i[a])),l.forEach(({matches:h})=>{i[a].matches.push(...h)}))}}),c}_searchObjectList(e){const s=se(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:c,i:o})=>{if(!$(c))return;let a=[];n.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:c[h],searcher:s}))}),a.length&&i.push({idx:o,item:c,matches:a})}),i}_findMatches({key:e,value:s,searcher:n}){if(!$(s))return[];let r=[];if(L(s))s.forEach(({v:i,i:c,n:o})=>{if(!$(i))return;const{isMatch:a,score:l,indices:h}=n.searchIn(i);a&&r.push({score:l,key:e,value:i,idx:c,norm:o,indices:h})});else{const{v:i,n:c}=s,{isMatch:o,score:a,indices:l}=n.searchIn(i);o&&r.push({score:a,key:e,value:i,norm:c,indices:l})}return r}}P.version="6.6.2";P.createIndex=$e;P.parseIndex=ct;P.config=d;P.parseQuery=Se;Mt(vt);const k=t=>(Re("data-v-4d00573f"),t=t(),Fe(),t),wt={class:"grid grid-cols-[80px_auto] gap-y-2 mt-10"},At=k(()=>m("div",{opacity:"80",text:"sm"}," Core ",-1)),Lt={flex:"~ wrap",gap:"2",m:"b-2"},Ct=["onClick"],Nt=k(()=>m("div",{opacity:"80",text:"sm"}," Add-ons ",-1)),Rt={flex:"~ wrap",gap:"2",m:"b-2"},Ft=["onClick"],Ot=k(()=>m("div",{opacity:"80",text:"sm"}," Sort by ",-1)),Tt={flex:"~ wrap",gap:"2",m:"b-2"},Pt={key:0,class:"select-button active"},jt=["onClick"],Dt=k(()=>m("div",{opacity:"80",text:"sm"}," Filters ",-1)),Bt={flex:"~ gap-4"},Vt={class:"checkbox"},Wt=k(()=>m("span",null,"Has Component",-1)),Ht={class:"checkbox"},Kt=k(()=>m("span",null,"Has Directive",-1)),zt=k(()=>m("div",{h:"1px",bg:"$vp-c-divider-light",m:"t-4"},null,-1)),Ut={flex:"~",class:"children:my-auto",p:"2"},Yt=k(()=>m("i",{"i-carbon-search":"",m:"r-2",opacity:"50"},null,-1)),Gt=k(()=>m("div",{h:"1px",bg:"$vp-c-divider-light",m:"b-4"},null,-1)),Jt={flex:"~ col",gap:"2",class:"relative",p:"t-5"},Qt={key:0,class:"transition mb-2 opacity-60 absolute -top-3 right-0 z-10"},Xt=k(()=>m("i",{"i-carbon-filter-remove":""},null,-1)),Zt=ie(" Clear Filters "),qt=[Xt,Zt],es={key:0,opacity:"60",class:"!text-16px !tracking-wide !m-0",p:"y-2"},ts={key:1,"text-center":"","pt-6":""},ss=k(()=>m("div",{m2:"",op50:""}," No result matched ",-1)),ns=k(()=>m("i",{"i-carbon-filter-remove":""},null,-1)),rs=ie(" Clear Filters "),is=[ns,rs],cs=_e({__name:"FunctionsList",setup(t){Le("click",u=>{u.target.tagName==="A"&&window.dispatchEvent(new Event("hashchange"))});const e=Ce("hash-params",{removeFalsyValues:!0}),s=j(e,"search"),n=j(e,"category"),r=j(e,"component"),i=j(e,"directive"),c=j(e,"sort"),o=D(()=>{let u=Oe.filter(p=>!p.internal);return r.value&&(u=u.filter(p=>p.component)),i.value&&(u=u.filter(p=>p.directive)),n.value?u.filter(p=>p.category===n.value):u}),a=D(()=>new P(o.value,{keys:["name","description"]})),l=D(()=>{if(s.value)return a.value.search(s.value).map(u=>u.item);{const u=[...o.value];return c.value==="updated"?u.sort((p,M)=>M.lastUpdated||0-(p.lastUpdated||0)):c.value==="name"?u.sort((p,M)=>p.name.localeCompare(M.name)):u.sort((p,M)=>he.indexOf(p.category)-he.indexOf(M.category)),u}}),h=D(()=>Boolean(s.value||n.value||r.value||c.value));function f(){c.value=null,n.value=null,r.value=null,s.value=null}function _(u){n.value=n.value===u?null:u}function x(u){c.value=u}return(u,p)=>{const M=Ve;return y(),v(T,null,[m("div",wt,[At,m("div",Lt,[(y(!0),v(T,null,H(u.coreCategories,g=>(y(),v("button",{key:g,class:U(["select-button",{active:b(n)===g}]),onClick:I=>_(g)},K(g),11,Ct))),128))]),Nt,m("div",Rt,[(y(!0),v(T,null,H(u.addonCategories,g=>(y(),v("button",{key:g,class:U(["select-button",{active:b(n)===g}]),onClick:I=>_(g)},K(g.slice(1)),11,Ft))),128))]),Ot,m("div",Tt,[b(s)?(y(),v("button",Pt," Search ")):B("",!0),(y(!0),v(T,null,H(u.sortMethods,g=>(y(),v("button",{key:g,class:U(["select-button capitalize",{active:g===(b(c)||"category"),disabled:b(s)}]),onClick:I=>x(g)},K(g),11,jt))),128))]),Dt,m("div",Bt,[m("label",Vt,[Q(m("input",{"onUpdate:modelValue":p[0]||(p[0]=g=>X(r)?r.value=g:null),type:"checkbox"},null,512),[[le,b(r)]]),Wt]),m("label",Ht,[Q(m("input",{"onUpdate:modelValue":p[1]||(p[1]=g=>X(i)?i.value=g:null),type:"checkbox"},null,512),[[le,b(i)]]),Kt])])]),zt,m("div",Ut,[Yt,Q(m("input",{"onUpdate:modelValue":p[2]||(p[2]=g=>X(s)?s.value=g:null),class:"w-full",type:"text",role:"search",placeholder:"Search..."},null,512),[[Ne,b(s)]])]),Gt,m("div",Jt,[b(h)?(y(),v("div",Qt,[m("button",{class:"select-button flex gap-1 items-center !px-2 !py-1",onClick:p[3]||(p[3]=g=>f())},qt)])):B("",!0),(y(!0),v(T,null,H(b(l),(g,I)=>{var w;return y(),v(T,{key:g.name},[u.showCategory&&g.category!==((w=b(l)[I-1])==null?void 0:w.category)?(y(),v("h3",es,K(g.category),1)):B("",!0),me(M,{fn:g},null,8,["fn"])],64)}),128)),b(l).length?B("",!0):(y(),v("div",ts,[ss,m("button",{class:"select-button flex-inline gap-1 items-center !px-2 !py-1",onClick:p[4]||(p[4]=g=>f())},is)]))])],64)}}});const os=xe(cs,[["__scopeId","data-v-4d00573f"]]),fs=JSON.parse('{"title":"Functions","description":"","frontmatter":{},"headers":[],"relativePath":"functions.md"}'),as={name:"functions.md"},ls=m("h1",{id:"functions",tabindex:"-1"},[ie("Functions "),m("a",{class:"header-anchor",href:"#functions","aria-hidden":"true"},"#")],-1);function hs(t,e,s,n,r,i){const c=os;return y(),v("div",null,[ls,me(c)])}const ps=xe(as,[["render",hs]]);export{fs as __pageData,ps as default};
