import{B as _e,E as Ee,F as Ce,G as Fe,Ha as je,Ia as Ue,Jb as Ve,Ka as ke,L as O,M as we,P as y,Q as R,R as d,S as m,T as Te,U as _,Ub as B,Wb as $e,X as M,Y as $,a as he,b as N,ba as Ae,c as pe,ca as be,cb as W,d as x,da as z,ea as E,f as me,ga as a,gb as H,h as ge,j as S,ja as Ne,k as ve,l as v,la as xe,n as ye,na as D,oa as q,qa as Oe,qb as Pe,s as Ie,sa as C,ta as Me,ua as De,v as Se,vb as Le,z as Re}from"./chunk-EV3K43WP.js";import{a as p,b as I}from"./chunk-TUXIIIP4.js";var At=["*"],j;function bt(){if(j===void 0&&(j=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(j=t.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return j}function T(t){return bt()?.createHTML(t)||t}function ze(t){return Error(`Unable to find icon with the name "${t}"`)}function Nt(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function qe(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function We(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var g=class{constructor(r,s,e){this.url=r,this.svgText=s,this.options=e}},xt=(()=>{let r=class r{constructor(e,n,o,i){this._httpClient=e,this._sanitizer=n,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=o}addSvgIcon(e,n,o){return this.addSvgIconInNamespace("",e,n,o)}addSvgIconLiteral(e,n,o){return this.addSvgIconLiteralInNamespace("",e,n,o)}addSvgIconInNamespace(e,n,o,i){return this._addSvgIconConfig(e,n,new g(o,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,o,i){let c=this._sanitizer.sanitize(E.HTML,o);if(!c)throw We(o);let u=T(c);return this._addSvgIconConfig(e,n,new g("",u,i))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,o){return this._addSvgIconSetConfig(e,new g(n,null,o))}addSvgIconSetLiteralInNamespace(e,n,o){let i=this._sanitizer.sanitize(E.HTML,n);if(!i)throw We(n);let c=T(i);return this._addSvgIconSetConfig(e,new g("",c,o))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(E.RESOURCE_URL,e);if(!n)throw qe(e);let o=this._cachedIconsByUrl.get(n);return o?S(U(o)):this._loadSvgIconFromConfig(new g(e,null)).pipe(O(i=>this._cachedIconsByUrl.set(n,i)),v(i=>U(i)))}getNamedSvgIcon(e,n=""){let o=He(n,e),i=this._svgIconConfigs.get(o);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(n,e),i)return this._svgIconConfigs.set(o,i),this._getSvgFromConfig(i);let c=this._iconSetConfigs.get(n);return c?this._getSvgFromIconSetConfigs(e,c):ve(ze(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?S(U(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(v(n=>U(n)))}_getSvgFromIconSetConfigs(e,n){let o=this._extractIconWithNameFromAnySet(e,n);if(o)return S(o);let i=n.filter(c=>!c.svgText).map(c=>this._loadSvgIconSetFromConfig(c).pipe(Ie(u=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(E.RESOURCE_URL,c.url)} failed: ${u.message}`;return this._errorHandler.handleError(new Error(l)),S(null)})));return ye(i).pipe(v(()=>{let c=this._extractIconWithNameFromAnySet(e,n);if(!c)throw ze(e);return c}))}_extractIconWithNameFromAnySet(e,n){for(let o=n.length-1;o>=0;o--){let i=n[o];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){let c=this._svgElementFromConfig(i),u=this._extractSvgIconFromSet(c,e,i.options);if(u)return u}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(O(n=>e.svgText=n),v(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?S(null):this._fetchIcon(e).pipe(O(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,o){let i=e.querySelector(`[id="${n}"]`);if(!i)return null;let c=i.cloneNode(!0);if(c.removeAttribute("id"),c.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(c,o);if(c.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(c),o);let u=this._svgElementFromString(T("<svg></svg>"));return u.appendChild(c),this._setSvgAttributes(u,o)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let o=n.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let n=this._svgElementFromString(T("<svg></svg>")),o=e.attributes;for(let i=0;i<o.length;i++){let{name:c,value:u}=o[i];c!=="id"&&n.setAttribute(c,u)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[i].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:o}=e,i=o?.withCredentials??!1;if(!this._httpClient)throw Nt();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let c=this._sanitizer.sanitize(E.RESOURCE_URL,n);if(!c)throw qe(n);let u=this._inProgressUrlFetches.get(c);if(u)return u;let f=this._httpClient.get(c,{responseType:"text",withCredentials:i}).pipe(v(l=>T(l)),_e(()=>this._inProgressUrlFetches.delete(c)),Fe());return this._inProgressUrlFetches.set(c,f),f}_addSvgIconConfig(e,n,o){return this._svgIconConfigs.set(He(e,n),o),this}_addSvgIconSetConfig(e,n){let o=this._iconSetConfigs.get(e);return o?o.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let o=0;o<this._resolvers.length;o++){let i=this._resolvers[o](n,e);if(i)return Ot(i)?new g(i.url,null,i.options):new g(i,null)}}};r.\u0275fac=function(n){return new(n||r)(d(Pe,8),d(Le),d(H,8),d(D))},r.\u0275prov=y({token:r,factory:r.\u0275fac,providedIn:"root"});let t=r;return t})();function U(t){return t.cloneNode(!0)}function He(t,r){return t+":"+r}function Ot(t){return!!(t.url&&t.options)}var Mt=$e(class{constructor(t){this._elementRef=t}}),Dt=new a("MAT_ICON_DEFAULT_OPTIONS"),jt=new a("mat-icon-location",{providedIn:"root",factory:Ut});function Ut(){let t=m(H),r=t?t.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}var Be=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],kt=Be.map(t=>`[${t}]`).join(", "),Pt=/^url\(['"]?#(.*?)['"]?\)$/,Zn=(()=>{let r=class r extends Mt{get inline(){return this._inline}set inline(e){this._inline=Ve(e)}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}constructor(e,n,o,i,c,u){super(e),this._iconRegistry=n,this._location=i,this._errorHandler=c,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=he.EMPTY,u&&(u.color&&(this.color=this.defaultColor=u.color),u.fontSet&&(this.fontSet=u.fontSet)),o||e.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let o=e.childNodes[n];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),n.forEach(o=>e.classList.add(o)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((o,i)=>{o.forEach(c=>{i.setAttribute(c.name,`url('${e}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(kt),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<n.length;i++)Be.forEach(c=>{let u=n[i],f=u.getAttribute(c),l=f?f.match(Pt):null;if(l){let h=o.get(u);h||(h=[],o.set(u,h)),h.push({name:c,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,o]=this._splitIconName(e);n&&(this._svgNamespace=n),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,n).pipe(Se(1)).subscribe(i=>this._setSvgElement(i),i=>{let c=`Error retrieving icon ${n}:${o}! ${i.message}`;this._errorHandler.handleError(new Error(c))})}}};r.\u0275fac=function(n){return new(n||r)(C(Ne),C(xt),be("aria-hidden"),C(jt),C(D),C(Dt,8))},r.\u0275cmp=Te({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(n,o){n&2&&(De("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),ke("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[Me],ngContentSelectors:At,decls:1,vars:0,template:function(n,o){n&1&&(je(),Ue(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let t=r;return t})(),Jn=(()=>{let r=class r{};r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=_({type:r}),r.\u0275inj=R({imports:[B,B]});let t=r;return t})();var G=class extends Error{constructor(r,s){super(Lt(r,s)),this.code=r}};function Lt(t,r){return`${`NG0${Math.abs(t)}`}${r?": "+r:""}`}var Ge=null;function Ke(t){let r=Ge;return Ge=t,r}function Vt(t){let r=Ke(null);try{return t()}finally{Ke(r)}}function K(t,r){let s=!r?.manualCleanup;s&&!r?.injector&&xe(K);let e=s?r?.injector?.get(q)??m(q):null,n;return r?.requireSync?n=$({kind:0}):n=$({kind:1,value:r?.initialValue}),Vt(()=>{let o=t.subscribe({next:i=>n.set({kind:1,value:i}),error:i=>n.set({kind:2,error:i})});e?.onDestroy(o.unsubscribe.bind(o))}),M(()=>{let o=n();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new G(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var Q={};function ne(t,r){if(Q[t]=(Q[t]||0)+1,typeof r=="function")return Y(t,(...e)=>I(p({},r(...e)),{type:t}));switch(r?r._as:"empty"){case"empty":return Y(t,()=>({type:t}));case"props":return Y(t,e=>I(p({},e),{type:t}));default:throw new Error("Unexpected config.")}}function re(){return{_as:"props",_p:void 0}}function Y(t,r){return Object.defineProperty(r,"type",{value:t,writable:!1})}function lt(t){return t.charAt(0).toUpperCase()+t.substring(1)}var dt="@ngrx/store/init",F=(()=>{let r=class r extends x{constructor(){super({type:dt})}next(e){if(typeof e=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof e>"u")throw new TypeError("Actions must be objects");if(typeof e.type>"u")throw new TypeError("Actions must have a type property");super.next(e)}complete(){}ngOnDestroy(){super.complete()}};r.\u0275fac=function(n){return new(n||r)},r.\u0275prov=y({token:r,factory:r.\u0275fac});let t=r;return t})(),$t=[F],ft=new a("@ngrx/store Internal Root Guard"),Ye=new a("@ngrx/store Internal Initial State"),oe=new a("@ngrx/store Initial State"),ht=new a("@ngrx/store Reducer Factory"),Ze=new a("@ngrx/store Internal Reducer Factory Provider"),pt=new a("@ngrx/store Initial Reducers"),Z=new a("@ngrx/store Internal Initial Reducers"),Je=new a("@ngrx/store Store Features"),Qe=new a("@ngrx/store Internal Store Reducers"),J=new a("@ngrx/store Internal Feature Reducers"),Xe=new a("@ngrx/store Internal Feature Configs"),mt=new a("@ngrx/store Internal Store Features"),et=new a("@ngrx/store Internal Feature Reducers Token"),gt=new a("@ngrx/store Feature Reducers"),tt=new a("@ngrx/store User Provided Meta Reducers"),k=new a("@ngrx/store Meta Reducers"),nt=new a("@ngrx/store Internal Resolved Meta Reducers"),rt=new a("@ngrx/store User Runtime Checks Config"),ot=new a("@ngrx/store Internal User Runtime Checks Config"),A=new a("@ngrx/store Internal Runtime Checks"),ie=new a("@ngrx/store Check if Action types are unique"),mr=new a("@ngrx/store Root Store Provider"),gr=new a("@ngrx/store Feature State Provider");function se(t,r={}){let s=Object.keys(t),e={};for(let o=0;o<s.length;o++){let i=s[o];typeof t[i]=="function"&&(e[i]=t[i])}let n=Object.keys(e);return function(i,c){i=i===void 0?r:i;let u=!1,f={};for(let l=0;l<n.length;l++){let h=n[l],w=e[h],de=i[h],fe=w(de,c);f[h]=fe,u=u||fe!==de}return u?f:i}}function zt(t,r){return Object.keys(t).filter(s=>s!==r).reduce((s,e)=>Object.assign(s,{[e]:t[e]}),{})}function vt(...t){return function(r){if(t.length===0)return r;let s=t[t.length-1];return t.slice(0,-1).reduceRight((n,o)=>o(n),s(r))}}function yt(t,r){return Array.isArray(r)&&r.length>0&&(t=vt.apply(null,[...r,t])),(s,e)=>{let n=t(s);return(o,i)=>(o=o===void 0?e:o,n(o,i))}}function qt(t){let r=Array.isArray(t)&&t.length>0?vt(...t):s=>s;return(s,e)=>(s=r(s),(n,o)=>(n=n===void 0?e:n,s(n,o)))}var b=class extends N{},P=class extends F{},Wt="@ngrx/store/update-reducers",L=(()=>{let r=class r extends x{get currentReducers(){return this.reducers}constructor(e,n,o,i){super(i(o,n)),this.dispatcher=e,this.initialState=n,this.reducers=o,this.reducerFactory=i}addFeature(e){this.addFeatures([e])}addFeatures(e){let n=e.reduce((o,{reducers:i,reducerFactory:c,metaReducers:u,initialState:f,key:l})=>{let h=typeof i=="function"?qt(u)(i,f):yt(c,u)(i,f);return o[l]=h,o},{});this.addReducers(n)}removeFeature(e){this.removeFeatures([e])}removeFeatures(e){this.removeReducers(e.map(n=>n.key))}addReducer(e,n){this.addReducers({[e]:n})}addReducers(e){this.reducers=p(p({},this.reducers),e),this.updateReducers(Object.keys(e))}removeReducer(e){this.removeReducers([e])}removeReducers(e){e.forEach(n=>{this.reducers=zt(this.reducers,n)}),this.updateReducers(e)}updateReducers(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Wt,features:e})}ngOnDestroy(){this.complete()}};r.\u0275fac=function(n){return new(n||r)(d(P),d(oe),d(pt),d(ht))},r.\u0275prov=y({token:r,factory:r.\u0275fac});let t=r;return t})(),Ht=[L,{provide:b,useExisting:L},{provide:P,useExisting:F}],ce=(()=>{let r=class r extends pe{ngOnDestroy(){this.complete()}};r.\u0275fac=function(){let e;return function(o){return(e||(e=Ae(r)))(o||r)}}(),r.\u0275prov=y({token:r,factory:r.\u0275fac});let t=r;return t})(),Bt=[ce],V=class extends N{},it=(()=>{let r=class r extends x{constructor(e,n,o,i){super(i);let u=e.pipe(ge(me)).pipe(we(n)),f={state:i},l=u.pipe(Ce(Gt,f));this.stateSubscription=l.subscribe(({state:h,action:w})=>{this.next(h),o.next(w)}),this.state=K(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};r.INIT=dt,r.\u0275fac=function(n){return new(n||r)(d(F),d(b),d(ce),d(oe))},r.\u0275prov=y({token:r,factory:r.\u0275fac});let t=r;return t})();function Gt(t={state:void 0},[r,s]){let{state:e}=t;return{state:s(e,r),action:r}}var Kt=[it,{provide:V,useExisting:it}],ue=(()=>{let r=class r extends N{constructor(e,n,o){super(),this.actionsObserver=n,this.reducerManager=o,this.source=e,this.state=e.state}select(e,...n){return Zt.call(null,e,...n)(this)}selectSignal(e,n){return M(()=>e(this.state()),{equal:n?.equal||((o,i)=>o===i)})}lift(e){let n=new r(this,this.actionsObserver,this.reducerManager);return n.operator=e,n}dispatch(e){this.actionsObserver.next(e)}next(e){this.actionsObserver.next(e)}error(e){this.actionsObserver.error(e)}complete(){this.actionsObserver.complete()}addReducer(e,n){this.reducerManager.addReducer(e,n)}removeReducer(e){this.reducerManager.removeReducer(e)}};r.\u0275fac=function(n){return new(n||r)(d(V),d(F),d(L))},r.\u0275prov=y({token:r,factory:r.\u0275fac});let t=r;return t})(),Yt=[ue];function Zt(t,r,...s){return function(n){let o;if(typeof t=="string"){let i=[r,...s].filter(Boolean);o=n.pipe(Ee(t,...i))}else if(typeof t=="function")o=n.pipe(v(i=>t(i,r)));else throw new TypeError(`Unexpected type '${typeof t}' in select operator, expected 'string' or 'function'`);return o.pipe(Re())}}var ae="https://ngrx.io/guide/store/configuration/runtime-checks";function st(t){return t===void 0}function ct(t){return t===null}function It(t){return Array.isArray(t)}function Jt(t){return typeof t=="string"}function Qt(t){return typeof t=="boolean"}function Xt(t){return typeof t=="number"}function St(t){return typeof t=="object"&&t!==null}function en(t){return St(t)&&!It(t)}function Rt(t){if(!en(t))return!1;let r=Object.getPrototypeOf(t);return r===Object.prototype||r===null}function X(t){return typeof t=="function"}function tn(t){return X(t)&&t.hasOwnProperty("\u0275cmp")}function nn(t,r){return Object.prototype.hasOwnProperty.call(t,r)}var rn=!1;function on(){return rn}function ut(t,r){return t===r}function sn(t,r,s){for(let e=0;e<t.length;e++)if(!s(t[e],r[e]))return!0;return!1}function _t(t,r=ut,s=ut){let e=null,n=null,o;function i(){e=null,n=null}function c(l=void 0){o={result:l}}function u(){o=void 0}function f(){if(o!==void 0)return o.result;if(!e)return n=t.apply(null,arguments),e=arguments,n;if(!sn(arguments,e,r))return n;let l=t.apply(null,arguments);return e=arguments,s(n,l)?n:(n=l,l)}return{memoized:f,reset:i,setResult:c,clearResult:u}}function Et(...t){return un(_t)(...t)}function cn(t,r,s,e){if(s===void 0){let o=r.map(i=>i(t));return e.memoized.apply(null,o)}let n=r.map(o=>o(t,s));return e.memoized.apply(null,[...n,s])}function un(t,r={stateFn:cn}){return function(...s){let e=s;if(Array.isArray(e[0])){let[l,...h]=e;e=[...l,...h]}else e.length===1&&ln(e[0])&&(e=dn(e[0]));let n=e.slice(0,e.length-1),o=e[e.length-1],i=n.filter(l=>l.release&&typeof l.release=="function"),c=t(function(...l){return o.apply(null,l)}),u=_t(function(l,h){return r.stateFn.apply(null,[l,n,h,c])});function f(){u.reset(),c.reset(),i.forEach(l=>l.release())}return Object.assign(u.memoized,{release:f,projector:c.memoized,setResult:u.setResult,clearResult:u.clearResult})}}function an(t){return Et(r=>{let s=r[t];return!on()&&W()&&!(t in r)&&console.warn(`@ngrx/store: The feature name "${t}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${t}', ...) or StoreModule.forFeature('${t}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),s},r=>r)}function ln(t){return!!t&&typeof t=="object"&&Object.values(t).every(r=>typeof r=="function")}function dn(t){let r=Object.values(t),s=Object.keys(t),e=(...n)=>s.reduce((o,i,c)=>I(p({},o),{[i]:n[c]}),{});return[...r,e]}function vr(t){let{name:r,reducer:s,extraSelectors:e}=t,n=an(r),o=fn(n,s),i=p({[`select${lt(r)}State`]:n},o),c=e?e(i):{};return p(p({name:r,reducer:s},i),c)}function fn(t,r){let s=hn(r);return(Rt(s)?Object.keys(s):[]).reduce((n,o)=>I(p({},n),{[`select${lt(o)}`]:Et(t,i=>i?.[o])}),{})}function hn(t){return t(void 0,{type:"@ngrx/feature/init"})}function pn(t){return t instanceof a?m(t):t}function mn(t,r){return r.map((s,e)=>{if(t[e]instanceof a){let n=m(t[e]);return{key:s.key,reducerFactory:n.reducerFactory?n.reducerFactory:se,metaReducers:n.metaReducers?n.metaReducers:[],initialState:n.initialState}}return s})}function gn(t){return t.map(r=>r instanceof a?m(r):r)}function Ct(t){return typeof t=="function"?t():t}function vn(t,r){return t.concat(r)}function yn(){if(m(ue,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function In(t,r){return function(s,e){let n=r.action(e)?ee(e):e,o=t(s,n);return r.state()?ee(o):o}}function ee(t){Object.freeze(t);let r=X(t);return Object.getOwnPropertyNames(t).forEach(s=>{if(!s.startsWith("\u0275")&&nn(t,s)&&(!r||s!=="caller"&&s!=="callee"&&s!=="arguments")){let e=t[s];(St(e)||X(e))&&!Object.isFrozen(e)&&ee(e)}}),t}function Sn(t,r){return function(s,e){if(r.action(e)){let o=te(e);at(o,"action")}let n=t(s,e);if(r.state()){let o=te(n);at(o,"state")}return n}}function te(t,r=[]){return(st(t)||ct(t))&&r.length===0?{path:["root"],value:t}:Object.keys(t).reduce((e,n)=>{if(e)return e;let o=t[n];return tn(o)?e:st(o)||ct(o)||Xt(o)||Qt(o)||Jt(o)||It(o)?!1:Rt(o)?te(o,[...r,n]):{path:[...r,n],value:o}},!1)}function at(t,r){if(t===!1)return;let s=t.path.join("."),e=new Error(`Detected unserializable ${r} at "${s}". ${ae}#strict${r}serializability`);throw e.value=t.value,e.unserializablePath=s,e}function Rn(t,r){return function(s,e){if(r.action(e)&&!Oe.isInAngularZone())throw new Error(`Action '${e.type}' running outside NgZone. ${ae}#strictactionwithinngzone`);return t(s,e)}}function _n(t){return W()?p({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},t):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function En({strictActionSerializability:t,strictStateSerializability:r}){return s=>t||r?Sn(s,{action:e=>t&&!le(e),state:()=>r}):s}function Cn({strictActionImmutability:t,strictStateImmutability:r}){return s=>t||r?In(s,{action:e=>t&&!le(e),state:()=>r}):s}function le(t){return t.type.startsWith("@ngrx")}function Fn({strictActionWithinNgZone:t}){return r=>t?Rn(r,{action:s=>t&&!le(s)}):r}function wn(t){return[{provide:ot,useValue:t},{provide:rt,useFactory:Tn,deps:[ot]},{provide:A,deps:[rt],useFactory:_n},{provide:k,multi:!0,deps:[A],useFactory:Cn},{provide:k,multi:!0,deps:[A],useFactory:En},{provide:k,multi:!0,deps:[A],useFactory:Fn}]}function Ft(){return[{provide:ie,multi:!0,deps:[A],useFactory:An}]}function Tn(t){return t}function An(t){if(!t.strictActionTypeUniqueness)return;let r=Object.entries(Q).filter(([,s])=>s>1).map(([s])=>s);if(r.length)throw new Error(`Action types are registered more than once, ${r.map(s=>`"${s}"`).join(", ")}. ${ae}#strictactiontypeuniqueness`)}function bn(t={},r={}){return[{provide:ft,useFactory:yn},{provide:Ye,useValue:r.initialState},{provide:oe,useFactory:Ct,deps:[Ye]},{provide:Z,useValue:t},{provide:Qe,useExisting:t instanceof a?t:Z},{provide:pt,deps:[Z,[new z(Qe)]],useFactory:pn},{provide:tt,useValue:r.metaReducers?r.metaReducers:[]},{provide:nt,deps:[k,tt],useFactory:vn},{provide:Ze,useValue:r.reducerFactory?r.reducerFactory:se},{provide:ht,deps:[Ze,nt],useFactory:yt},$t,Ht,Bt,Kt,Yt,wn(r.runtimeChecks),Ft()]}function Nn(t,r,s={}){return[{provide:Xe,multi:!0,useValue:t instanceof Object?{}:s},{provide:Je,multi:!0,useValue:{key:t instanceof Object?t.name:t,reducerFactory:!(s instanceof a)&&s.reducerFactory?s.reducerFactory:se,metaReducers:!(s instanceof a)&&s.metaReducers?s.metaReducers:[],initialState:!(s instanceof a)&&s.initialState?s.initialState:void 0}},{provide:mt,deps:[Xe,Je],useFactory:mn},{provide:J,multi:!0,useValue:t instanceof Object?t.reducer:r},{provide:et,multi:!0,useExisting:r instanceof a?r:J},{provide:gt,multi:!0,deps:[J,[new z(et)]],useFactory:gn},Ft()]}var wt=(()=>{let r=class r{constructor(e,n,o,i,c,u){}};r.\u0275fac=function(n){return new(n||r)(d(F),d(b),d(ce),d(ue),d(ft,8),d(ie,8))},r.\u0275mod=_({type:r}),r.\u0275inj=R({});let t=r;return t})(),xn=(()=>{let r=class r{constructor(e,n,o,i,c){this.features=e,this.featureReducers=n,this.reducerManager=o;let u=e.map((f,l)=>{let w=n.shift()[l];return I(p({},f),{reducers:w,initialState:Ct(f.initialState)})});o.addFeatures(u)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}};r.\u0275fac=function(n){return new(n||r)(d(mt),d(gt),d(L),d(wt),d(ie,8))},r.\u0275mod=_({type:r}),r.\u0275inj=R({});let t=r;return t})(),yr=(()=>{let r=class r{static forRoot(e,n){return{ngModule:wt,providers:[...bn(e,n)]}}static forFeature(e,n,o={}){return{ngModule:xn,providers:[...Nn(e,n,o)]}}};r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=_({type:r}),r.\u0275inj=R({});let t=r;return t})();function Ir(...t){let r=t.pop(),s=t.map(e=>e.type);return{reducer:r,types:s}}function Sr(t,...r){let s=new Map;for(let e of r)for(let n of e.types){let o=s.get(n);if(o){let i=(c,u)=>e.reducer(o(c,u),u);s.set(n,i)}else s.set(n,e.reducer)}return function(e=t,n){let o=s.get(n.type);return o?o(e,n):e}}var Cr=ne("[user_cards] add",re()),Fr=ne("[user_cards] del",re());export{xt as a,Zn as b,Jn as c,ne as d,re as e,ce as f,ue as g,Et as h,vr as i,wt as j,xn as k,yr as l,Ir as m,Sr as n,Cr as o,Fr as p};