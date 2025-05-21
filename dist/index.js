/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,g=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,$=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s,this[s]=r.fromAttribute(e,t.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,r=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??v)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[$("elementProperties")]=new Map,y[$("finalized")]=new Map,f?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,x=A.trustedTypes,w=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+S,P=`<${k}>`,C=document,M=()=>C.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,z=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,W=C.createTreeWalker(C,129);function J(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=N:void 0!==l[1]?n=O:void 0!==l[2]?(z.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=R):void 0!==l[3]&&(n=R):n===R?">"===l[0]?(n=r??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?R:'"'===l[3]?D:L):n===D||n===L?n=R:n===N||n===O?n=H:(n=R,r=void 0);const d=n===R&&t[e+1].startsWith("/>")?" ":"";o+=n===H?i+P:c>=0?(s.push(a),i.slice(0,c)+E+i.slice(c)+S+d):i+S+(-2===c?e:d)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,c]=F(t,e);if(this.el=G.createElement(l,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=c[o++],i=s.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?X:"?"===n[1]?tt:"@"===n[1]?et:Q}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(z.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),W.nextNode(),a.push({type:2,index:++r});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===B)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=j(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??C).importNode(e,!0);W.currentNode=s;let r=W.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Z(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=W.nextNode(),o++)}return W.currentNode=C,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),j(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new G(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Z(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=K(this,t,e,0),o=!j(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=K(this,s[i+n],e,n),a===B&&(a=this._$AH[n]),o||=!j(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class et extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??q)===B)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=A.litHtmlPolyfillSupport;st?.(G,Z),(A.litHtmlVersions??=[]).push("3.3.0");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Z(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}ot._$litElement$=!0,ot.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ot});const nt=rt.litElementPolyfillSupport;nt?.({LitElement:ot}),(rt.litElementVersions??=[]).push("4.2.0");customElements.define("portfolio-app",class extends ot{static properties={currentPage:{type:String}};constructor(){super(),this.currentPage="home"}createRenderRoot(){return this}render(){return I`
      <div class="min-h-screen bg-gray-900 text-white flex flex-col">
        <header class="bg-gray-800 shadow-md p-4">
          <nav class="max-w-4xl mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold tracking-tight text-white">My Portfolio</h1>
            <div class="flex gap-2">
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${()=>this.currentPage="home"}>Home</lion-button>
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${()=>this.currentPage="projects"}>Projects</lion-button>
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${()=>this.currentPage="about"}>About</lion-button>
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${()=>this.currentPage="contact"}>Contact</lion-button>
            </div>
          </nav>
        </header>
        <main class="flex-1 p-6 max-w-4xl mx-auto">
          ${this._renderPage()}
        </main>
      </div>
    `}_renderPage(){switch(this.currentPage){case"home":default:return I`<home-page></home-page>`;case"projects":return I`<projects-page></projects-page>`;case"about":return I`<about-page></about-page>`;case"contact":return I`<contact-page></contact-page>`}}});class at extends ot{static styles=[o`
      :host {
        display: block;
      }
      .hero {
        text-align: center;
        padding: 4rem 0;
        background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        color: white;
        margin: -2rem -1rem 2rem -1rem;
      }
      .hero h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .hero p {
        font-size: 1.25rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .featured {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      .lion-card {
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    `];render(){return I`
      <div class="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer creating amazing web experiences</p>
      </div>
      <div class="featured">
        <div class="lion-card">
          <h2>Latest Projects</h2>
          <p>Check out my most recent work and side projects.</p>
          <lion-button @click=${()=>this.dispatchEvent(new CustomEvent("navigate",{detail:"projects"}))}>
            View Projects
          </lion-button>
        </div>
        <div class="lion-card">
          <h2>About Me</h2>
          <p>Learn more about my background and expertise.</p>
          <lion-button @click=${()=>this.dispatchEvent(new CustomEvent("navigate",{detail:"about"}))}>
            Read More
          </lion-button>
        </div>
        <div class="lion-card">
          <h2>Get in Touch</h2>
          <p>Interested in working together? Let's connect!</p>
          <lion-button @click=${()=>this.dispatchEvent(new CustomEvent("navigate",{detail:"contact"}))}>
            Contact Me
          </lion-button>
        </div>
      </div>
    `}}customElements.define("home-page",at);class lt extends ot{static styles=[o`
      :host {
        display: block;
      }
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
      .lion-card {
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .project-image {
        width: 100%;
        height: 200px;
        background-color: #f3f4f6;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
      }
      .tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-top: 1rem;
      }
      .tag {
        background-color: #e5e7eb;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
      }
    `];static properties={projects:{type:Array}};constructor(){super(),this.projects=[{title:"Project One",description:"A modern web application built with web components.",tags:["Web Components","JavaScript","CSS"],link:"#"},{title:"Project Two",description:"An interactive dashboard with real-time data visualization.",tags:["Data Visualization","React","D3.js"],link:"#"},{title:"Project Three",description:"A mobile-first e-commerce platform with modern features.",tags:["E-commerce","Node.js","MongoDB"],link:"#"}]}render(){return I`
      <h1>My Projects</h1>
      <div class="projects-grid">
        ${this.projects.map((t=>I`
          <div class="lion-card">
            <div class="project-image"></div>
            <h2>${t.title}</h2>
            <p>${t.description}</p>
            <div class="tags">
              ${t.tags.map((t=>I`<span class="tag">${t}</span>`))}
            </div>
            <lion-button @click=${()=>window.open(t.link,"_blank")}>
              View Project
            </lion-button>
          </div>
        `))}
      </div>
    `}}customElements.define("projects-page",lt);class ct extends ot{static styles=[o`
      :host {
        display: block;
      }
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
      }
      @media (max-width: 768px) {
        .about-grid {
          grid-template-columns: 1fr;
        }
      }
      .profile-section {
        text-align: center;
      }
      .profile-image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #f3f4f6;
        margin: 0 auto 1rem;
      }
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }
      .lion-card {
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .skill-category {
        margin-bottom: 1rem;
      }
      .skill-category h3 {
        margin-bottom: 0.5rem;
      }
      .skill-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .skill-list li {
        margin-bottom: 0.5rem;
      }
    `];render(){return I`
      <h1>About Me</h1>
      <div class="about-grid">
        <div class="profile-section">
          <div class="profile-image"></div>
          <h2>John Doe</h2>
          <p>Full Stack Developer</p>
          <p>Based in New York, NY</p>
        </div>
        <div class="content-section">
          <div class="lion-card">
            <h2>Bio</h2>
            <p>
              I'm a passionate full-stack developer with over 5 years of experience in building
              modern web applications. I specialize in JavaScript, Web Components, and modern
              frontend frameworks. My goal is to create beautiful, performant, and accessible
              web experiences.
            </p>
          </div>
          <div class="skills-grid">
            <div class="lion-card">
              <h2>Frontend</h2>
              <div class="skill-category">
                <h3>Languages</h3>
                <ul class="skill-list">
                  <li>HTML5</li>
                  <li>CSS3/SASS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div class="skill-category">
                <h3>Frameworks & Libraries</h3>
                <ul class="skill-list">
                  <li>Web Components</li>
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>Lit</li>
                </ul>
              </div>
            </div>
            <div class="lion-card">
              <h2>Backend</h2>
              <div class="skill-category">
                <h3>Languages & Runtime</h3>
                <ul class="skill-list">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>
              <div class="skill-category">
                <h3>Databases</h3>
                <ul class="skill-list">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("about-page",ct);class ht extends ot{static styles=o`
    :host {
      display: block;
    }

    .contact-container {
      max-width: 600px;
      margin: 0 auto;
    }

    lion-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 500;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      justify-content: center;
    }

    .social-link {
      color: #4b5563;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 0.375rem;
      transition: background-color 0.2s;
    }

    .social-link:hover {
      background-color: #f3f4f6;
    }
  `;render(){return I`
      <div class="contact-container">
        <h1>Get in Touch</h1>
        <p>Have a question or want to work together? Feel free to reach out!</p>

        <lion-form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <lion-input
              name="name"
              label="Name"
              .validators=${[{type:"required",getMessage:()=>"Name is required"}]}
            ></lion-input>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <lion-input
              name="email"
              type="email"
              label="Email"
              .validators=${[{type:"required",getMessage:()=>"Email is required"},{type:"email",getMessage:()=>"Please enter a valid email"}]}
            ></lion-input>
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <lion-input
              name="subject"
              label="Subject"
              .validators=${[{type:"required",getMessage:()=>"Subject is required"}]}
            ></lion-input>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <lion-textarea
              name="message"
              label="Message"
              .validators=${[{type:"required",getMessage:()=>"Message is required"}]}
            ></lion-textarea>
          </div>

          <lion-button type="submit">Send Message</lion-button>
        </lion-form>

        <div class="social-links">
          <a href="#" class="social-link">GitHub</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">Twitter</a>
        </div>
      </div>
    `}_handleSubmit(t){t.preventDefault();const e=t.target.serializedValue;console.log("Form submitted:",e),alert("Thank you for your message! I will get back to you soon.")}}customElements.define("contact-page",ht);
//# sourceMappingURL=index.js.map
