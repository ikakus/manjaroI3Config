!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));const r=(e,t,n)=>{if(e.length<t.length)return"";const r=e.indexOf(t);if(-1===r)return"";const o=r+t.length,s=e.indexOf(n,o);let i="";return s!==o?i=-1!==s&&s>o||-1!==s?e.substring(o,s):e.substring(o):""===n&&(i=e.substring(o)),i},o=(e,t)=>{const n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const o=n[r];if(e[o]!==t[o])return!1}return!0}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e,t)=>chrome.i18n?chrome.i18n.getMessage(e,t):e},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r="jidkidbbcafjabdphckchenhfomhnfma"},function(e,t,n){"use strict";n.r(t);var r=n(2);let o=null;const s=e=>{o&&o.postMessage({type:"GreaselionError",mediaType:"reddit",data:{errorMessage:e}})};var i=n(0);const a=e=>e?"reddit#channel:"+e:"",l=(e,t)=>{if(!e)return"";let n="www";return t&&(n="old"),`https://${n}.reddit.com/user/${e}/`},c=e=>e.hostname.startsWith("old.")||e.hostname.startsWith("np."),d=e=>!!e&&(e.startsWith("/r/")&&e.includes("/comments/")),u=async(e,t)=>{if(!e)throw new Error("Invalid parameters");const n=l(e,t);if(!n)throw new Error("Invalid profile url");const r=await fetch(n);if(!r.ok)throw new Error(`Profile request failed: ${r.statusText} (${r.status})`);return r.text()},p=e=>{if(!e)return"";const t=i.b(e,'hideFromRobots":','"isEmployee"');let n=i.b(t,'"id":"t2_','"');return n||(n=i.b(e,'target_fullname": "t2_','"')),n},m=e=>e?i.b(e,'accountIcon":"',"?"):"",h=e=>{if(!e)return"";let t=i.b(e,'username":"','"');return t||(t=i.b(e,'target_name": "','"')),t},f=()=>{const e=document.querySelectorAll('div[data-type="link"]');if(!e||0===e.length)return"";const t=e[e.length-1].querySelector("a[href^='https://old.reddit.com/user/']");return t&&t.href?t.href.replace("https://old.reddit.com/user/",""):""},y=e=>{let t="";if(t=d(e.pathname)?(()=>{if(c(new URL(location.href)))return f();const e=document.getElementsByClassName("Post");if(!e||0===e.length)return"";const t=e[0].querySelector("a[href^='/user/']");if(!t||!t.href)return"";const n=t.href.match("/user/([^/]+)/?");return n&&2===n.length?n[1]:""})():(e=>{if(!e.pathname||!e.pathname.startsWith("/user/"))return"";const t=e.pathname.split("/").filter(e=>e);return t&&0!==t.length?t.length<2?"":t[1]:""})(e),!t)return void s("Invalid screen name");const n=c(e);return(async(e,t)=>{if(!e)throw new Error("Invalid parameters");const n=await u(e,t);return{user:{id:p(n),screenName:e,fullName:h(n),favIconUrl:m(n)},post:{id:"",timestamp:"",text:""}}})(t,n).then(e=>{const n=e.user.id,r=a(n),i=e.user.fullName;if(!i)return void s("Invalid publisher name");const c=e.user.favIconUrl,d=l(t,!1);o&&o.postMessage({type:"SavePublisherVisit",mediaType:"reddit",data:{url:d,publisherKey:r,publisherName:i,mediaKey:"",favIconUrl:c}})})},g=()=>{const e=new URL(location.href);(e=>{if(["/","/coins","/contact","/login","/premium"].includes(e))return!0;const t=["/dev/","/help/","/wiki/"];for(const n of t)if(e.startsWith(n))return!0;return!(!e.startsWith("/r/")||d(e))})(e.pathname)?o&&o.postMessage({type:"SavePublisherVisit",mediaType:"",data:{url:"https://www.reddit.com",publisherKey:"reddit.com",publisherName:"reddit.com",mediaKey:"",favIconUrl:""}}):y(e)};var b=n(1);let v=null;const x=()=>{const e=document.createElement("div");return e.className="IconContainer",e.style.display="inline-block",e.style.marginBottom="-2px",e.style.position="relative",e.style.verticalAlign="middle",e},E=()=>{const e=document.createElement("span");return e.className="tip-icon--medium",e.style.background="transparent",e.style.content='url(\'data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 105 100" style="enable-background:new 0 0 105 100;" xml:space="preserve"><style type="text/css">.st1{fill:%23662D91;}.st2{fill:%239E1F63;}.st3{fill:%23FF5000;}.st4{fill:%23FFFFFF;stroke:%23FF5000;stroke-width:0.83;stroke-miterlimit:10;}</style><title>BAT_icon</title><g id="Layer_2_1_"><g id="Layer_1-2"><polygon class="st1" points="94.8,82.6 47.4,55.4 0,82.9 "/><polygon class="st2" points="47.4,0 47.1,55.4 94.8,82.6 "/><polygon class="st3" points="0,82.9 47.2,55.9 47.4,0 "/><polygon class="st4" points="47.1,33.7 28,66.5 66.7,66.5 "/></g></g></svg>\')',e.style.display="inline-block",e.style.fontSize="18px",e.style.fontStyle="normal",e.style.height="16px",e.style.position="relative",e.style.verticalAlign="baseline",e.style.width="16px",e},w=e=>e?e.querySelector('button[aria-label="more options"]'):null,T=e=>{const t=e.querySelector('button[aria-label="more options"]');return t?t.nextElementSibling||t.previousElementSibling||!t.parentElement?t:t.parentElement:null},N=e=>{const t=(()=>{const e=document.createElement("li");return e.className="action-brave-tip",e})(),n=document.createElement("span");t.appendChild(n);const r=x(),o=E();r.appendChild(o);const s=(()=>{const e=document.createElement("a");return e.className="reddit-actionButton",e.href="javascript:void(0)",e.textContent=b.a("redditTipsIconLabel"),e})();s.appendChild(r),s.onclick=function(t){return t.stopPropagation(),(async e=>{if(!e)throw new Error("Invalid parameters");let t="",n=e.querySelector('a[data-event-action="title"]');const r=e.getElementsByClassName("md");if(r&&0!==r.length){const e=r[0];e&&e.innerText&&(t=e.innerText)}else t=n&&n.innerText?n.innerText:"";t.length>200&&(t=t.substr(0,200)+"...");let o,s="";const i=e.getElementsByClassName("entry");if(i&&(o=i[0].getElementsByClassName("author")),o&&o.length>0){const e=o[0];e&&e.textContent&&(s=e.textContent)}let a="";const l=e.getElementsByTagName("time");l&&l.length>0&&(a=l[0].textContent||"");const c=await u(s,!0);return{user:{id:p(c),screenName:s,fullName:h(c),favIconUrl:m(c)},post:{id:"",timestamp:a,text:t||""}}})(e).then(e=>{e&&_(e)})};const i=n.attachShadow({mode:"open"});return i.appendChild(r),i.appendChild(s),i.appendChild((()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode(".reddit-actionButton { color: #888; font-weight: bold; paddings: 0 1px; text-decoration: none } .reddit-actionButton:hover { text-decoration: underline }")),e})()),t},C=(e,t)=>{const n=(e=>{const t=document.createElement("div");return t.className="action-brave-tip",e&&(t.style.display="flex",t.style.height="25px",t.style.outline="none",t.style.borderRadius="2px"),t.setAttribute("data-original-title",b.a("redditTipsHoverText")),t})(t),r=(()=>{const e=document.createElement("button");e.className="reddit-actionButton",e.style.display="inline-block",e.style.transition="color 0.1s ease 0s",e.style.background="transparent",e.style.border="none",e.style.color="inherit",e.style.cursor="pointer",e.style.padding="2px 10px 0 10px",e.style.borderRadius="2px",e.style.outline="none",e.type="button";const t=document.createElement("style");return t.appendChild(document.createTextNode(".reddit-actionButton {}")),e.appendChild(t),e})();r.onclick=function(t){return t.stopPropagation(),(async e=>{if(!e)throw new Error("Invalid parameters");let t="",n=e.getElementsByTagName("p");if(n&&0!==n.length){const e=n[0].parentElement;e&&e.innerText&&(t=e.innerText)}else n=e.getElementsByTagName("h3"),n&&n.length>0?n[0].innerText&&(t=n[0].innerText):(n=e.getElementsByTagName("h1"),n&&n.length>0&&n[0].innerText&&(t=n[0].innerText));t.length>200&&(t=t.substr(0,200)+"...");let r="";const o=e.querySelector('a[href^="/user/"]:not([data-click-id="body"]):not([data-click-id="subreddit"])');o&&o.textContent&&(r=o.textContent.startsWith("u/")?o.textContent.split("/")[1]:o.textContent);let s="";const i=e.querySelector('a[data-click-id="timestamp"]');if(i)s=i.textContent||"";else{const t=e.querySelector('div[data-test-id="comment"]');if(t){const e=t.previousElementSibling;if(e){const t=e.getElementsByTagName("a");if(t&&t.length>1){const e=t[1].getElementsByTagName("span");e&&e.length>0&&(s=e[0].textContent||"")}}}}const a=await u(r,!1);return{user:{id:p(a),screenName:r,fullName:h(a),favIconUrl:m(a)},post:{id:"",timestamp:s,text:t||""}}})(e).then(e=>{e&&_(e)})};const o=x();r.appendChild(o);const s=E();o.appendChild(s);const i=(()=>{const e=document.createElement("span");return e.className="reddit-actionCount",e.style.color="inherit",e.style.display="inline-block",e.style.fontSize="12px",e.style.fontWeight="bold",e.style.lineHeight="1",e.style.marginLeft="3px",e.style.position="relative",e.style.verticalAlign="text-bottom",e})();r.appendChild(i);const a=(()=>{const e=document.createElement("span");return e.className="reddit-actionButton",e.textContent=b.a("redditTipsIconLabel"),e})();i.appendChild(a);const l=n.attachShadow({mode:"open"});l.appendChild(r);const c=(e=>{const t=document.createElement("style"),n=e?":host { outline: none } :host(:hover) { background-color: var(--newRedditTheme-navIconFaded10) }":".reddit-actionButton { text-decoration: none; color: var(--newCommunityTheme-actionIcon); font-weight: bold; padding: 0px 1px; } .reddit-actionButton:hover { color: var(--newCommunityTheme-bodyText); text-decoration: underline }";return t.appendChild(document.createTextNode(n)),t})(t);return l.appendChild(c),n},S=(e,t)=>{if(!e||!t)return;const n=t.promotedPosts?(e=>{const t=document.evaluate(".//span[text()='save']",e,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;return t&&t.parentElement&&t.parentElement.parentElement?t.parentElement.parentElement:null})(e):(r=e,document.evaluate(".//button[text()='Save']",r,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue);var r;n&&n.insertAdjacentElement("afterend",C(e,t.posts))},I=(e,t,n)=>{e&&t&&n&&(n.usersPost?t.parentElement&&n.usersPost&&t.parentElement.insertAdjacentElement("beforebegin",C(e,n.posts)):t.insertAdjacentElement("beforebegin",C(e,n.posts)))},P=e=>{if(!e)return;const t=e.posts?document.getElementsByClassName("Post"):document.getElementsByClassName("Comment");var n;if(t)for(const r of t){const t=(n=r,Boolean(document.evaluate(".//button[text()='edit']",n,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue)),o=r.querySelectorAll("div.action-brave-tip"),s=r.querySelector('div[data-test-id="comment-submission-form-richtext"');if(o.length>0||s)continue;const i=e.posts?T(r):w(r);if(i){const n={posts:e.posts,usersPost:t};I(r,i,n)}else S(r,e)}},B=e=>{const t=document.querySelectorAll(`div[data-type="${e}"]`);if(t)for(const e of t){if(e.querySelectorAll("li.action-brave-tip").length>0)continue;const t=e.getElementsByClassName("flat-list");0!==t.length&&t[0].insertAdjacentElement("beforeend",N(e))}},_=e=>{if(!o)return;const t=a(e.user.id),n=e.user.fullName,r=e.user.screenName,s=l(e.user.screenName,!1);o.postMessage({type:"TipUser",mediaType:"reddit",data:{url:s,publisherKey:t,publisherName:n,publisherScreenName:r,favIconUrl:e.user.favIconUrl,postId:e.post.id,postTimestamp:e.post.timestamp,postText:e.post.text}})},k=()=>{clearTimeout(v);c(new URL(location.href))?(B("comment"),B("link")):(P({posts:!1,promotedPosts:!1}),P({posts:!0,promotedPosts:!1}),P({posts:!0,promotedPosts:!0})),v=setTimeout(k,3e3)};let O=!1,R="";const j=()=>{O||(O=!0,o&&(o.postMessage({type:"RegisterOnUpdatedTab",mediaType:"reddit"}),o.onMessage.addListener((function(e){var t;if(e.data)switch(e.type){case"OnUpdatedTab":(t=e.data.changeInfo)&&(t.url||"complete"===t.status)&&location.href!==R&&(R=location.href,g(),k())}}))))};chrome.extension.inIncognitoContext||(o||(o=chrome.runtime.connect(r.a,{name:"Greaselion"})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&(g(),k())})),j(),console.info("Greaselion script loaded: reddit.ts"))}]);