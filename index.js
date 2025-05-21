/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(i,t,s)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,m=g?g.emptyScript:"",b=u.reactiveElementPolyfillSupport,v=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:f).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=i,this[i]=r.fromAttribute(e,t.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??y)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[v("elementProperties")]=new Map,_[v("finalized")]=new Map,b?.({ReactiveElement:_}),(u.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=x.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,P=`<${C}>`,k=document,U=()=>k.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,I=/>/g,O=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),L=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),G=new WeakMap,J=k.createTreeWalker(k,129);function V(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const F=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=N:void 0!==l[1]?n=I:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=O):void 0!==l[3]&&(n=O):n===O?">"===l[0]?(n=r??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?O:'"'===l[3]?z:j):n===z||n===j?n=O:n===N||n===I?n=H:(n=O,r=void 0);const d=n===O&&t[e+1].startsWith("/>")?" ":"";o+=n===H?s+P:c>=0?(i.push(a),s.slice(0,c)+w+s.slice(c)+E+d):s+E+(-2===c?e:d)}return[V(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,c]=F(t,e);if(this.el=q.createElement(l,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(w)){const e=c[o++],s=i.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?X:"?"===n[1]?tt:"@"===n[1]?et:Q}),i.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)a.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===L)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=R(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??k).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=J.nextNode(),o++)}return J.currentNode=k,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),R(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new q(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Y(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=K(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=K(this,i[s+n],e,n),a===L&&(a=this._$AH[n]),o||=!R(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends Q{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===L)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=x.litHtmlPolyfillSupport;it?.(q,Y),(x.litHtmlVersions??=[]).push("3.3.0");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Y(e.insertBefore(U(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}ot._$litElement$=!0,ot.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ot});const nt=rt.litElementPolyfillSupport;nt?.({LitElement:ot}),(rt.litElementVersions??=[]).push("4.2.0");customElements.define("portfolio-app",class extends ot{static properties={currentPage:{type:String}};constructor(){super(),this.currentPage="home"}createRenderRoot(){return this}render(){return D`
      <div class="min-h-screen bg-gray-900 text-white flex flex-col">
        <header class="bg-gray-800 shadow-md p-4">
          <nav class="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold tracking-tight text-white">Max Larionov</h1>
            <div class="flex gap-2">
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${()=>this.currentPage="home"}>Home</lion-button>
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${()=>this.currentPage="projects"}>Projects</lion-button>
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${()=>this.currentPage="about"}>About</lion-button>
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${()=>this.currentPage="contact"}>Contact</lion-button>
            </div>
          </nav>
        </header>
        <main class="flex-1 p-6 max-w-7xl mx-auto w-full">
          ${this._renderPage()}
        </main>
      </div>
    `}_renderPage(){switch(this.currentPage){case"home":default:return D`<home-page></home-page>`;case"projects":return D`<projects-page></projects-page>`;case"about":return D`<about-page></about-page>`;case"contact":return D`<contact-page></contact-page>`}}});class at extends ot{static properties={title:{type:String},subtitle:{type:String},icon:{type:String},variant:{type:String},hoverable:{type:Boolean},clickable:{type:Boolean}};static styles=o`
    :host {
      display: block;
    }

    .card {
      background-color: rgb(31, 41, 55); /* bg-gray-800 */
      border-radius: 0.5rem;
      padding: 1.5rem;
      transition: all 0.2s ease-in-out;
    }

    .card.hoverable:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .card.clickable {
      cursor: pointer;
    }

    .card.primary {
      background-color: rgb(37, 99, 235); /* bg-blue-600 */
    }

    .card.secondary {
      background-color: rgb(79, 70, 229); /* bg-indigo-600 */
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .card-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: currentColor;
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      margin: 0;
    }

    .card-subtitle {
      font-size: 1rem;
      color: rgb(209, 213, 219); /* text-gray-300 */
      margin-top: 0.25rem;
    }

    .card-content {
      color: rgb(209, 213, 219); /* text-gray-300 */
    }

    ::slotted(*) {
      color: rgb(209, 213, 219); /* text-gray-300 */
    }
  `;constructor(){super(),this.title="",this.subtitle="",this.icon="",this.variant="default",this.hoverable=!1,this.clickable=!1}render(){const t=["card","default"!==this.variant?this.variant:"",this.hoverable?"hoverable":"",this.clickable?"clickable":""].filter(Boolean).join(" ");return D`
      <div class="${t}">
        ${this.title||this.icon?D`
          <div class="card-header">
            ${this.icon?D`<span class="card-icon">${this.icon}</span>`:""}
            <div>
              ${this.title?D`<h2 class="card-title">${this.title}</h2>`:""}
              ${this.subtitle?D`<p class="card-subtitle">${this.subtitle}</p>`:""}
            </div>
          </div>
        `:""}
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    `}}customElements.define("custom-card",at);customElements.define("home-page",class extends ot{createRenderRoot(){return this}render(){return D`
      <div class="space-y-8">
        <section class="text-center space-y-4">
          <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Senior Software Engineer
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting innovative solutions at ING, specializing in JavaScript development and complex problem-solving. 
            With 7+ years of experience in building scalable applications and mentoring teams.
          </p>
          <div class="flex justify-center gap-4 mt-6">
            <a href="https://github.com/maxevilmind" target="_blank" rel="noopener noreferrer" 
               class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              View GitHub
            </a>
            <a href="https://www.linkedin.com/in/maxevilmind" target="_blank" rel="noopener noreferrer"
               class="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
              Connect on LinkedIn
            </a>
          </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <custom-card title="Expertise" hoverable>
            <ul class="space-y-2">
              <li>• JavaScript/TypeScript Development</li>
              <li>• Single Page Applications</li>
              <li>• Cross-team Collaboration</li>
              <li>• Technical Mentoring</li>
              <li>• Complex Problem Solving</li>
            </ul>
          </custom-card>

          <custom-card title="Current Focus" hoverable>
            <ul class="space-y-2">
              <li>• Building SPA Platform at ING</li>
              <li>• Building and maintaining UI components library at ING</li>
              <li>• Leadership</li>
              <li>• Open Source Contributions at Home and ING</li>
              <li>• IoT Device Development at Home</li>
            </ul>
          </custom-card>
        </section>
      </div>
    `}});customElements.define("projects-page",class extends ot{createRenderRoot(){return this}render(){return D`
      <div class="space-y-8">
        <h1 class="text-4xl font-bold text-white mb-8">Projects</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <custom-card 
            title="SPA Platform" 
            subtitle="ING Banking Platform"
            hoverable
            clickable
          >
            <p class="mb-4">
              A single-page application platform that serves as the foundation for various banking services.
              Built with Web Components and modern JavaScript practices.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Web Components</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">JavaScript</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Microfrontends</span>
            </div>
          </custom-card>

          <custom-card 
            title="Smart Home Automation" 
            subtitle="Personal Project"
            hoverable
            clickable
          >
            <p class="mb-4">
              IoT-based smart home automation system using ESP32 and Raspberry Pi.
              Features include automated lighting, scripts and scenarios, temperature control, security monitoring, local voice assistant and many other things.
              I contribute to open source projects related to this.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">ESP32</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Raspberry Pi</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">IoT</span>
            </div>
          </custom-card>

          <custom-card 
            title="Algorithm Solutions" 
            subtitle="Open Source Contributions"
            hoverable
            clickable
          >
            <p class="mb-4">
              Collection of algorithm solutions and data structure implementations.
              Focused on performance optimization and clean code practices.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Algorithms</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Data Structures</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">JavaScript</span>
            </div>
          </custom-card>

          <custom-card 
            title="UI Component Library" 
            subtitle="Internal Framework"
            hoverable
            clickable
          >
            <p class="mb-4">
              Internal UI component library built with Web Components.
              Provides consistent design patterns and reusable components across applications.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Web Components</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Lit Element</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Design System</span>
            </div>
          </custom-card>
        </div>
      </div>
    `}});customElements.define("about-page",class extends ot{createRenderRoot(){return this}render(){return D`
      <div class="max-w-4xl mx-auto space-y-8">
        <custom-card title="About Me" subtitle="Senior Software Engineer at ING" hoverable>
          <div class="space-y-4">
            <p>
              I'm a Senior Software Engineer with 7+ years of experience in JavaScript development, 
              currently working at ING in the Amsterdam Area. I specialize in building scalable 
              applications and solving complex problems.
            </p>
            <p>
              My journey in software development started at the American University of Central Asia, 
              where I developed a passion for algorithm programming, IoT device development, hardware and many other things.
            </p>
          </div>
        </custom-card>

        <custom-card title="Current Role" subtitle="ING - Senior Software Engineer" hoverable>
          <div class="space-y-4">
            <p>
              At ING, I'm contributing to a single-page application platform that serves as the 
              foundation for various banking services. My role involves:
            </p>
            <ul class="list-disc list-inside space-y-2">
              <li>Cross-team collaboration and technical leadership</li>
              <li>Mentoring junior developers and sharing knowledge</li>
              <li>Implementing best practices and architectural decisions</li>
              <li>Contributing to the platform's growth and evolution</li>
            </ul>
          </div>
        </custom-card>

        <custom-card title="Technical Stack" hoverable>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h3 class="font-semibold mb-2">Frontend</h3>
              <ul class="list-disc list-inside space-y-1">
                <li>JavaScript/TypeScript</li>
                <li>React</li>
                <li>Web Components</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Backend</h3>
              <ul class="list-disc list-inside space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </custom-card>

        <custom-card title="Contributions" hoverable>
          <div class="space-y-4">
            <p>
              I'm actively contributing to the open-source community and sharing my knowledge 
              through various platforms. Check out my contributions on 
              <a href="https://github.com/maxevilmind" target="_blank" rel="noopener noreferrer" 
                 class="text-blue-400 hover:text-blue-300">GitHub</a>.
            </p>
          </div>
        </custom-card>
      </div>
    `}});customElements.define("contact-page",class extends ot{createRenderRoot(){return this}render(){return D`
      <div class="max-w-4xl mx-auto space-y-8">
        <custom-card title="Connect With Me" hoverable>
          <div class="space-y-6">
            <p class="text-lg">
              Feel free to reach out to me through my professional profiles:
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/maxevilmind" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/maxevilmind" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </custom-card>
      </div>
    `}});
//# sourceMappingURL=index.js.map
