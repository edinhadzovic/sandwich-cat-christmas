var F,d,d_,v_,H,o_,m_,z,Y,G,J,y_,M={},g_=[],M_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function w(e,_){for(var t in _)e[t]=_[t];return e}function b_(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function K(e,_,t){var n,o,i,l={};for(i in _)i=="key"?n=_[i]:i=="ref"?o=_[i]:l[i]=_[i];if(arguments.length>2&&(l.children=arguments.length>3?F.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)l[i]===void 0&&(l[i]=e.defaultProps[i]);return N(e,l,n,o,null)}function N(e,_,t,n,o){var i={type:e,props:_,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++d_,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(i),i}function F_(){return{current:null}}function A(e){return e.children}function D(e,_){this.props=e,this.context=_}function S(e,_){if(_==null)return e.__?S(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?S(e):null}function k_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return k_(e)}}function Q(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!j.__r++||o_!==d.debounceRendering)&&((o_=d.debounceRendering)||m_)(j)}function j(){var e,_,t,n,o,i,l,u;for(H.sort(z);e=H.shift();)e.__d&&(_=H.length,n=void 0,i=(o=(t=e).__v).__e,l=[],u=[],t.__P&&((n=w({},o)).__v=o.__v+1,d.vnode&&d.vnode(n),Z(t.__P,n,o,t.__n,t.__P.namespaceURI,32&o.__u?[i]:null,l,i??S(o),!!(32&o.__u),u),n.__v=o.__v,n.__.__k[n.__i]=n,x_(l,n,u),n.__e!=i&&k_(n)),H.length>_&&H.sort(z));j.__r=0}function $_(e,_,t,n,o,i,l,u,s,c,a){var r,h,f,g,k,b=n&&n.__k||g_,v=_.length;for(t.__d=s,A_(t,_,b),s=t.__d,r=0;r<v;r++)(f=t.__k[r])!=null&&(h=f.__i===-1?M:b[f.__i]||M,f.__i=r,Z(e,f,h,o,i,l,u,s,c,a),g=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&__(h.ref,null,f),a.push(f.ref,f.__c||g,f)),k==null&&g!=null&&(k=g),65536&f.__u||h.__k===f.__k?s=w_(f,s,e):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:g&&(s=g.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=s,t.__e=k}function A_(e,_,t){var n,o,i,l,u,s=_.length,c=t.length,a=c,r=0;for(e.__k=[],n=0;n<s;n++)(o=_[n])!=null&&typeof o!="boolean"&&typeof o!="function"?(l=n+r,(o=e.__k[n]=typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?N(null,o,null,null,null):B(o)?N(A,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?N(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,i=null,(u=o.__i=L_(o,t,l,a))!==-1&&(a--,(i=t[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&r--,typeof o.type!="function"&&(o.__u|=65536)):u!==l&&(u==l-1?r--:u==l+1?r++:(u>l?r--:r++,o.__u|=65536))):o=e.__k[n]=null;if(a)for(n=0;n<c;n++)(i=t[n])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=S(i)),H_(i,i))}function w_(e,_,t){var n,o;if(typeof e.type=="function"){for(n=e.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=e,_=w_(n[o],_,t));return _}e.__e!=_&&(_&&e.type&&!t.contains(_)&&(_=S(e)),t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function C_(e,_){return _=_||[],e==null||typeof e=="boolean"||(B(e)?e.some(function(t){C_(t,_)}):_.push(e)),_}function L_(e,_,t,n){var o=e.key,i=e.type,l=t-1,u=t+1,s=_[t];if(s===null||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(n>(s!=null&&!(131072&s.__u)?1:0))for(;l>=0||u<_.length;){if(l>=0){if((s=_[l])&&!(131072&s.__u)&&o==s.key&&i===s.type)return l;l--}if(u<_.length){if((s=_[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u++}}return-1}function r_(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||M_.test(_)?t:t+"px"}function R(e,_,t,n,o){var i;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(_ in n)t&&_ in t||r_(e.style,_,"");if(t)for(_ in t)n&&t[_]===n[_]||r_(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")i=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+i]=t,t?n?t.u=n.u:(t.u=Y,e.addEventListener(_,i?J:G,i)):e.removeEventListener(_,i?J:G,i);else{if(o=="http://www.w3.org/2000/svg")_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_!="popover"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,_=="popover"&&t==1?"":t))}}function i_(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.t==null)_.t=Y++;else if(_.t<t.u)return;return t(d.event?d.event(_):_)}}}function Z(e,_,t,n,o,i,l,u,s,c){var a,r,h,f,g,k,b,v,m,T,x,L,U,n_,W,q,$=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(s=!!(32&t.__u),i=[u=_.__e=t.__e]),(a=d.__b)&&a(_);_:if(typeof $=="function")try{if(v=_.props,m="prototype"in $&&$.prototype.render,T=(a=$.contextType)&&n[a.__c],x=a?T?T.props.value:a.__:n,t.__c?b=(r=_.__c=t.__c).__=r.__E:(m?_.__c=r=new $(v,x):(_.__c=r=new D(v,x),r.constructor=$,r.render=I_),T&&T.sub(r),r.props=v,r.state||(r.state={}),r.context=x,r.__n=n,h=r.__d=!0,r.__h=[],r._sb=[]),m&&r.__s==null&&(r.__s=r.state),m&&$.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=w({},r.__s)),w(r.__s,$.getDerivedStateFromProps(v,r.__s))),f=r.props,g=r.state,r.__v=_,h)m&&$.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),m&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(m&&$.getDerivedStateFromProps==null&&v!==f&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,x),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,x)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(r.props=v,r.state=r.__s,r.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.some(function(I){I&&(I.__=_)}),L=0;L<r._sb.length;L++)r.__h.push(r._sb[L]);r._sb=[],r.__h.length&&l.push(r);break _}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,x),m&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(f,g,k)})}if(r.context=x,r.props=v,r.__P=e,r.__e=!1,U=d.__r,n_=0,m){for(r.state=r.__s,r.__d=!1,U&&U(_),a=r.render(r.props,r.state,r.context),W=0;W<r._sb.length;W++)r.__h.push(r._sb[W]);r._sb=[]}else do r.__d=!1,U&&U(_),a=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++n_<25);r.state=r.__s,r.getChildContext!=null&&(n=w(w({},n),r.getChildContext())),m&&!h&&r.getSnapshotBeforeUpdate!=null&&(k=r.getSnapshotBeforeUpdate(f,g)),$_(e,B(q=a!=null&&a.type===A&&a.key==null?a.props.children:a)?q:[q],_,t,n,o,i,l,u,s,c),r.base=_.__e,_.__u&=-161,r.__h.length&&l.push(r),b&&(r.__E=r.__=null)}catch(I){if(_.__v=null,s||i!=null){for(_.__u|=s?160:128;u&&u.nodeType===8&&u.nextSibling;)u=u.nextSibling;i[i.indexOf(u)]=null,_.__e=u}else _.__e=t.__e,_.__k=t.__k;d.__e(I,_,t)}else i==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=W_(t.__e,_,t,n,o,i,l,s,c);(a=d.diffed)&&a(_)}function x_(e,_,t){_.__d=void 0;for(var n=0;n<t.length;n++)__(t[n],t[++n],t[++n]);d.__c&&d.__c(_,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){d.__e(i,o.__v)}})}function W_(e,_,t,n,o,i,l,u,s){var c,a,r,h,f,g,k,b=t.props,v=_.props,m=_.type;if(m==="svg"?o="http://www.w3.org/2000/svg":m==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((f=i[c])&&"setAttribute"in f==!!m&&(m?f.localName===m:f.nodeType===3)){e=f,i[c]=null;break}}if(e==null){if(m===null)return document.createTextNode(v);e=document.createElementNS(o,m,v.is&&v),u&&(d.__m&&d.__m(_,i),u=!1),i=null}if(m===null)b===v||u&&e.data===v||(e.data=v);else{if(i=i&&F.call(e.childNodes),b=t.props||M,!u&&i!=null)for(b={},c=0;c<e.attributes.length;c++)b[(f=e.attributes[c]).name]=f.value;for(c in b)if(f=b[c],c!="children"){if(c=="dangerouslySetInnerHTML")r=f;else if(!(c in v)){if(c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v)continue;R(e,c,null,f,o)}}for(c in v)f=v[c],c=="children"?h=f:c=="dangerouslySetInnerHTML"?a=f:c=="value"?g=f:c=="checked"?k=f:u&&typeof f!="function"||b[c]===f||R(e,c,f,b[c],o);if(a)u||r&&(a.__html===r.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),_.__k=[];else if(r&&(e.innerHTML=""),$_(e,B(h)?h:[h],_,t,n,m==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,l,i?i[0]:t.__k&&S(t,0),u,s),i!=null)for(c=i.length;c--;)b_(i[c]);u||(c="value",m==="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[c]||m==="progress"&&!g||m==="option"&&g!==b[c])&&R(e,c,g,b[c],o),c="checked",k!==void 0&&k!==e[c]&&R(e,c,k,b[c],o))}return e}function __(e,_,t){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&_==null||(e.__u=e(_))}else e.current=_}catch(o){d.__e(o,t)}}function H_(e,_,t){var n,o;if(d.unmount&&d.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||__(n,null,_)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){d.__e(i,_)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&H_(n[o],_,t||typeof e.type!="function");t||b_(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function I_(e,_,t){return this.constructor(e,t)}function P_(e,_,t){var n,o,i,l;d.__&&d.__(e,_),o=(n=typeof t=="function")?null:t&&t.__k||_.__k,i=[],l=[],Z(_,e=(!n&&t||_).__k=K(A,null,[e]),o||M,M,_.namespaceURI,!n&&t?[t]:o?null:_.firstChild?F.call(_.childNodes):null,i,!n&&t?t:o?o.__e:_.firstChild,n,l),x_(i,e,l)}function S_(e,_){P_(e,_,S_)}function R_(e,_,t){var n,o,i,l,u=w({},e.props);for(i in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),_)i=="key"?n=_[i]:i=="ref"?o=_[i]:u[i]=_[i]===void 0&&l!==void 0?l[i]:_[i];return arguments.length>2&&(u.children=arguments.length>3?F.call(arguments,2):t),N(e.type,u,n||e.key,o||e.ref,null)}function O_(e,_){var t={__c:_="__cC"+y_++,__:e,Consumer:function(n,o){return n.children(o)},Provider:function(n){var o,i;return this.getChildContext||(o=new Set,(i={})[_]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&o.forEach(function(u){u.__e=!0,Q(u)})},this.sub=function(l){o.add(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){o&&o.delete(l),u&&u.call(l)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}F=g_.slice,d={__e:function(e,_,t,n){for(var o,i,l;_=_.__;)if((o=_.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),l=o.__d),l)return o.__E=o}catch(u){e=u}throw e}},d_=0,v_=function(e){return e!=null&&e.constructor==null},D.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},t),this.props)),e&&w(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),Q(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Q(this))},D.prototype.render=A,H=[],m_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z=function(e,_){return e.__v.__b-_.__v.__b},j.__r=0,Y=0,G=i_(!1),J=i_(!0),y_=0;const Y_=Object.freeze(Object.defineProperty({__proto__:null,Component:D,Fragment:A,cloneElement:R_,createContext:O_,createElement:K,createRef:F_,h:K,hydrate:S_,get isValidElement(){return v_},get options(){return d},render:P_,toChildArray:C_},Symbol.toStringTag,{value:"Module"}));var C,p,V,u_,E=0,E_=[],y=d,l_=y.__b,c_=y.__r,f_=y.diffed,s_=y.__c,a_=y.unmount,p_=y.__;function P(e,_){y.__h&&y.__h(p,e,E||_),E=0;var t=p.__H||(p.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function T_(e){return E=1,U_(D_,e)}function U_(e,_,t){var n=P(C++,2);if(n.t=e,!n.__c&&(n.__=[t?t(_):D_(void 0,_),function(u){var s=n.__N?n.__N[0]:n.__[0],c=n.t(s,u);s!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=p,!p.u)){var o=function(u,s,c){if(!n.__c.__H)return!0;var a=n.__c.__H.__.filter(function(h){return!!h.__c});if(a.every(function(h){return!h.__N}))return!i||i.call(this,u,s,c);var r=!1;return a.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(r=!0)}}),!(!r&&n.__c.props===u)&&(!i||i.call(this,u,s,c))};p.u=!0;var i=p.shouldComponentUpdate,l=p.componentWillUpdate;p.componentWillUpdate=function(u,s,c){if(this.__e){var a=i;i=void 0,o(u,s,c),i=a}l&&l.call(this,u,s,c)},p.shouldComponentUpdate=o}return n.__N||n.__}function j_(e,_){var t=P(C++,3);!y.__s&&t_(t.__H,_)&&(t.__=e,t.i=_,p.__H.__h.push(t))}function N_(e,_){var t=P(C++,4);!y.__s&&t_(t.__H,_)&&(t.__=e,t.i=_,p.__h.push(t))}function B_(e){return E=5,e_(function(){return{current:e}},[])}function q_(e,_,t){E=6,N_(function(){return typeof e=="function"?(e(_()),function(){return e(null)}):e?(e.current=_(),function(){return e.current=null}):void 0},t==null?t:t.concat(e))}function e_(e,_){var t=P(C++,7);return t_(t.__H,_)&&(t.__=e(),t.__H=_,t.__h=e),t.__}function V_(e,_){return E=8,e_(function(){return e},_)}function z_(e){var _=p.context[e.__c],t=P(C++,9);return t.c=e,_?(t.__==null&&(t.__=!0,_.sub(p)),_.props.value):e.__}function G_(e,_){y.useDebugValue&&y.useDebugValue(_?_(e):e)}function J_(e){var _=P(C++,10),t=T_();return _.__=e,p.componentDidCatch||(p.componentDidCatch=function(n,o){_.__&&_.__(n,o),t[1](n)}),[t[0],function(){t[1](void 0)}]}function K_(){var e=P(C++,11);if(!e.__){for(var _=p.__v;_!==null&&!_.__m&&_.__!==null;)_=_.__;var t=_.__m||(_.__m=[0,0]);e.__="P"+t[0]+"-"+t[1]++}return e.__}function Q_(){for(var e;e=E_.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(O),e.__H.__h.forEach(X),e.__H.__h=[]}catch(_){e.__H.__h=[],y.__e(_,e.__v)}}y.__b=function(e){p=null,l_&&l_(e)},y.__=function(e,_){e&&_.__k&&_.__k.__m&&(e.__m=_.__k.__m),p_&&p_(e,_)},y.__r=function(e){c_&&c_(e),C=0;var _=(p=e.__c).__H;_&&(V===p?(_.__h=[],p.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(_.__h.forEach(O),_.__h.forEach(X),_.__h=[],C=0)),V=p},y.diffed=function(e){f_&&f_(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(E_.push(_)!==1&&u_===y.requestAnimationFrame||((u_=y.requestAnimationFrame)||X_)(Q_)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),V=p=null},y.__c=function(e,_){_.some(function(t){try{t.__h.forEach(O),t.__h=t.__h.filter(function(n){return!n.__||X(n)})}catch(n){_.some(function(o){o.__h&&(o.__h=[])}),_=[],y.__e(n,t.__v)}}),s_&&s_(e,_)},y.unmount=function(e){a_&&a_(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{O(n)}catch(o){_=o}}),t.__H=void 0,_&&y.__e(_,t.__v))};var h_=typeof requestAnimationFrame=="function";function X_(e){var _,t=function(){clearTimeout(n),h_&&cancelAnimationFrame(_),setTimeout(e)},n=setTimeout(t,100);h_&&(_=requestAnimationFrame(t))}function O(e){var _=p,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),p=_}function X(e){var _=p;e.__c=e.__(),p=_}function t_(e,_){return!e||e.length!==_.length||_.some(function(t,n){return t!==e[n]})}function D_(e,_){return typeof _=="function"?_(e):_}const Z_=Object.freeze(Object.defineProperty({__proto__:null,useCallback:V_,useContext:z_,useDebugValue:G_,useEffect:j_,useErrorBoundary:J_,useId:K_,useImperativeHandle:q_,useLayoutEffect:N_,useMemo:e_,useReducer:U_,useRef:B_,useState:T_},Symbol.toStringTag,{value:"Module"}));export{P_ as B,K as _,Z_ as a,T_ as h,Y_ as p,j_ as y};
