(()=>{"use strict";var e,t={260:(e,t,s)=>{const r=window.wp.blocks,a=window.wp.blockEditor,l=window.wp.element,n=window.wp.apiFetch;var o=s.n(n);const i=window.wp.i18n,c=window.wp.components,h=window.ReactJSXRuntime;function d({linkLabel:e,pageLink:t,userName:s,socialNetwork:r,setAttributes:l}){return(0,h.jsx)(a.InspectorControls,{children:(0,h.jsxs)(c.PanelBody,{title:(0,i.__)("Link Settings","click-2-share"),initialOpen:!0,children:[(0,h.jsx)(c.PanelRow,{children:(0,h.jsx)("fieldset",{children:(0,h.jsx)(c.TextControl,{label:(0,i.__)("Link label","click-2-share"),value:e,onChange:e=>{l({linkLabel:e})},help:(0,i.__)("Caption of the share link.","click-2-share")})})}),(0,h.jsx)(c.PanelRow,{children:(0,h.jsx)("fieldset",{children:(0,h.jsx)(c.TextControl,{label:(0,i.__)("Shared Link","click-2-share"),value:t,onChange:e=>{l({pageLink:e})},help:(0,i.__)("Optional: Link to be shared (default: post url)","click-2-share")})})}),(0,h.jsx)(c.PanelRow,{children:(0,h.jsx)("fieldset",{children:(0,h.jsx)(c.TextControl,{label:(0,i.__)("Threads User","click-2-share"),value:s,onChange:e=>{l({userName:e})},help:(0,i.__)('Optional: Adds "by @username" to the post',"click-2-share")})})}),(0,h.jsx)(c.PanelRow,{children:(0,h.jsx)("fieldset",{children:(0,h.jsx)(c.SelectControl,{label:(0,i.__)("Select Social Network","click-2-share"),value:r,options:[{label:"Threads",value:"threads"},{label:"X",value:"x"},{label:"Reddit",value:"reddit"}],onChange:e=>{l({socialNetwork:e})},help:(0,i.__)("Choose the social network for sharing.","click-2-share")})})})]})})}function p({post:e,setAttributes:t}){return(0,h.jsx)(a.RichText,{tagName:"p",onChange:e=>{t({post:e})},value:e,allowedFormats:[],placeholder:(0,i.__)("Write your post here…")})}function w({shareString:e,socialNetwork:t}){const s={threads:500,x:280,reddit:300},r=e?decodeURIComponent(e.split("=",2)[1]):"";let a=r.length;if("x"===t){const e=/(https?:\/\/[^\s]+)/g,t=r.match(e),s=t?t[0].length:0;s>0?a=a-s+24:a+=1}const l=s[t]?s[t]-a:"NaN",n=l<0?" is-over":"";return(0,h.jsx)("span",{className:`wp-block-eetezadi-click2share-counter${n}`,role:"status",children:l})}function k({socialNetwork:e}){const t={threads:{svgViewbox:"0 0 878 1000",svgPath:"M446.7 1000h-.3c-149.2-1-263.9-50.2-341-146.2C36.9 768.3 1.5 649.4.3 500.4v-.7c1.2-149.1 36.6-267.9 105.2-353.4C182.5 50.2 297.3 1 446.4 0h.6c114.4.8 210.1 30.2 284.4 87.4 69.9 53.8 119.1 130.4 146.2 227.8l-85 23.7c-46-165-162.4-249.3-346-250.6-121.2.9-212.9 39-272.5 113.2C118.4 271 89.6 371.4 88.5 500c1.1 128.6 29.9 229 85.7 298.5 59.6 74.3 151.3 112.4 272.5 113.2 109.3-.8 181.6-26.3 241.7-85.2 68.6-67.2 67.4-149.7 45.4-199.9-12.9-29.6-36.4-54.2-68.1-72.9-8 56.3-25.9 101.9-53.5 136.3-36.9 45.9-89.2 71-155.4 74.6-50.1 2.7-98.4-9.1-135.8-33.4-44.3-28.7-70.2-72.5-73-123.5-2.7-49.6 17-95.2 55.4-128.4 36.7-31.7 88.3-50.3 149.3-53.8 44.9-2.5 87-.5 125.8 5.9-5.2-30.9-15.6-55.5-31.2-73.2-21.4-24.4-54.5-36.8-98.3-37.1h-1.2c-35.2 0-83 9.7-113.4 55L261.2 327c40.8-60.6 107-94 186.6-94h1.8c133.1.8 212.4 82.3 220.3 224.5 4.5 1.9 9 3.9 13.4 5.9 62.1 29.2 107.5 73.4 131.4 127.9 33.2 75.9 36.3 199.6-64.5 298.3C673.1 965 579.6 999.1 447 1000h-.3zm41.8-487.1c-10.1 0-20.3.3-30.8.9-76.5 4.3-124.2 39.4-121.5 89.3 2.8 52.3 60.5 76.6 116 73.6 51-2.7 117.4-22.6 128.6-154.6-28.2-6.1-59.1-9.2-92.3-9.2z"},x:{svgViewbox:"0 0 300 271",svgPath:"M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6zm-16.1 244h25.5L80.4 26H53z"},reddit:{svgViewbox:"0 0 20.805 20.805",svgPath:"M19.522 7.196c-1.062-1.064-2.775-1.077-3.896-.069-1.305-.627-2.815-1.026-4.437-1.121.6-1.862 1.834-4.465 3.077-4.715.418-.083.874.137 1.353.657-.035.138-.061.28-.061.427a1.67 1.67 0 0 0 3.338 0c0-.921-.748-1.667-1.669-1.667-.3 0-.581.086-.825.226-.758-.753-1.558-1.055-2.386-.89-2.417.487-3.88 5.023-4.157 5.955-1.707.077-3.296.486-4.657 1.147-1.119-1.031-2.849-1.022-3.92.049C.227 8.25.207 9.942 1.189 11.064a5.787 5.787 0 0 0-.498 2.324c0 4.089 4.371 7.417 9.744 7.417s9.746-3.327 9.746-7.417c0-.831-.189-1.628-.522-2.375.938-1.12.902-2.778-.137-3.817zm-17.791.449c.775-.776 1.999-.827 2.867-.178-1.344.769-2.422 1.79-3.101 2.977-.593-.864-.52-2.046.234-2.799zm8.704 11.886c-4.673 0-8.473-2.755-8.473-6.143 0-3.385 3.8-6.142 8.473-6.142 4.674 0 8.474 2.757 8.474 6.142 0 3.39-3.8 6.143-8.474 6.143zm5.799-12.085c.868-.627 2.071-.567 2.838.2.742.74.825 1.891.27 2.749-.686-1.178-1.764-2.19-3.108-2.949zm-9.348 5.838a1.59 1.59 0 1 1 0-3.178 1.59 1.59 0 0 1 0 3.178zm8.674-1.59a1.59 1.59 0 1 1-3.178 0 1.59 1.59 0 0 1 3.178 0zm-1.338 4.218a.634.634 0 0 1-.112.893c-1.326 1.028-2.614 1.375-3.742 1.375-2.255 0-3.874-1.378-3.898-1.4a.636.636 0 0 1 .833-.959c.118.101 2.884 2.42 6.027-.02a.636.636 0 0 1 .892.111z"}}[e]||{svgViewbox:"0 0 24 24",svgPath:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"};return(0,h.jsx)("svg",{className:"wp-c2sh-block-icon","aria-label":e,viewBox:t.svgViewbox,xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:t.svgPath})})}function u({post:e,pageLink:t,userName:s,socialNetwork:r,linkLabel:a,shareString:l,setAttributes:n}){if(!r)return null;e=e.trim(),s=s?" by @"+s:"";const o=encodeURIComponent(e+(t?" "+t:"")+s);return n({shareString:{threads:"https://threads.net/intent/post?text=",x:"https://x.com/intent/tweet?text=",reddit:"https://www.reddit.com/submit?title="}[r]+o}),(0,h.jsxs)(c.ExternalLink,{className:`wp-block-eetezadi-click2share-sharelink ${r}`,href:l,role:"link",children:[(0,h.jsx)(k,{socialNetwork:r}),a]})}const x=JSON.parse('{"UU":"eetezadi/click2share"}'),b=(0,h.jsxs)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.0",viewBox:"0 0 854 837",children:[(0,h.jsx)(c.Path,{d:"M204.5 131.7c-1.6.2-6.5 1.3-10.7 2.3-41 10.1-72.5 43.3-78.8 83.1-.8 5.4-1 48.3-.8 162.9l.3 155.5 2.8 9c7.4 24.3 22.5 45.5 41.5 58.4 6.2 4.2 18.2 10.4 22.2 11.6 1.4.4 3.9 1.3 5.5 2 1.7.7 4.8 1.7 7 2.3 15.5 4.1 18.5 5.4 18.5 7.8 0 2.9-4.3 21.4-6.9 29.9-5.4 17.3-14.5 35.3-22.5 44.2-7.4 8.2-8.4 12.6-4.1 16.8 3.7 3.8 8.5 3.3 17.5-1.6 35.6-19.4 79.6-57.2 125.2-107.7l4.7-5.2h83.6c74.5 0 83.5-.2 83.5-1.5 0-.9-2.1-7.1-4.6-13.8-2.5-6.7-6.3-17.2-8.4-23.2-2-6.1-6.6-18.6-10-27.9l-6.3-16.8-3.6.6c-2 .3-7.2 1.3-11.6 2.1-12.1 2.3-34.1 3-48 1.6-20.2-2.1-35.1-6.1-52-14.1-24.7-11.6-42.6-27.6-56.5-50.6-17.2-28.2-25-61.4-25-106 0-23.7 1-35.1 4.5-52.4 8.2-40.1 26.2-70.4 54.4-91.6 23-17.2 57-27.4 91.7-27.4 29.1 0 55.7 5.6 76.9 16.2 25.9 13.1 47.8 35.9 61 63.5 4.9 10.2 10.7 26.1 10.2 27.6-.2.6-6.6 2.7-14.4 4.6l-14 3.6-2.3-6.5c-11.6-33-33.6-57.6-61.7-68.9-17.7-7.2-35.1-9.6-62.3-8.8-20.9.7-30.2 2.4-44.5 8.1-12 4.9-20.6 10.2-29.3 18.1-22.4 20.6-34.3 48.3-38.7 90.5-5.4 50.8 4.3 95.3 27 123.7 7.8 9.8 13.4 14.8 24 21.7 14.5 9.4 29.9 14.9 49.4 17.7 10.9 1.5 36.8.6 48.3-1.7 8.1-1.6 8.8-1.9 9.3-4.5 1-4.5 6-10.5 10.7-12.8 5.3-2.5 10.7-2.7 17.1-.5l4.7 1.6 5.6-4.3c11.9-9.2 21.3-23.3 24.9-37.4 1.8-7.2 2.1-22.6.5-28.7-2.6-9.5-9.2-19.7-17.1-26.5-8.7-7.4-8.2-7.6-11.2 4.2-1.5 6.2-4.7 14.9-7.7 21.2-4.5 9.5-6 11.6-13.8 19.2-9.6 9.5-16.4 13.5-29.8 17.3-6.7 1.9-10.2 2.3-23.4 2.3-14.3-.1-16.1-.3-23.3-2.8-11.4-4-18.3-8.3-26.3-16.1-11.8-11.8-16.2-23.3-15.1-40.4 1.6-27.2 20.4-46.3 53.2-53.8 6.5-1.6 11.8-1.9 29-1.8 11.6.1 22.8.6 25.1 1.1l4.1 1-1-5.1c-2.9-16.3-15.7-28.8-32.4-31.7-4.5-.8-9-.8-16.5 0-13.1 1.4-20.4 4.7-28 12.4l-5.4 5.6-12.2-8.5c-13.9-9.7-13.6-8.5-5.1-17.8 7.5-8.3 18.5-15.1 30.4-18.9 9.6-3.1 10.6-3.2 27-3.2 13 0 18.5.4 23.2 1.7 21.1 5.9 38.6 22.7 45.7 44 3.3 9.6 5.6 20.7 5.6 26.2 0 4.3.1 4.4 5.1 6.5 35 15.1 54.9 48.5 50.9 85.3-1.2 11-4.7 24.2-8.6 32.4-3.4 7.3-11.5 19.5-16.4 24.8l-4 4.4 12.2 4.5c63.6 23.7 148.4 55.9 152.8 58.2 6.4 3.3 13.2 13.6 14.6 22.1 1.5 9.8-4.9 23.9-14 30.4-6.2 4.5-5 5.1 2 .9 18.9-11.3 36.1-35.8 43.1-61.4l2.8-10v-157c0-151.4-.1-157.3-1.9-164.5-5.3-20.8-17-40-32.9-53.8-12.2-10.8-25-17.6-44-23.5l-7.2-2.2-221-.1c-121.5-.1-222.3.1-224 .3zM838.2 190.5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8z"}),(0,h.jsx)(c.Path,{d:"M421.6 358.2c-25.9 1.9-38.7 11.7-38.7 29.3 0 7.2 1.4 10.6 6.3 15.3 8.6 8.5 23.1 11.8 39.8 9.1 20-3.2 31.8-18.1 34.8-43.6l.8-7.2-5-1.1c-2.8-.6-8.9-1.3-13.6-1.6-4.7-.3-9.8-.6-11.5-.7-1.6-.2-7.5 0-12.9.5zM501 517.8c0 .5 1.4 4.6 3.1 9.3 1.7 4.6 9.1 25.7 16.4 46.9 18.5 53.7 33.2 95 40.1 113 .8 2 3.2-3.6 10.6-25 6.2-18.1 12.8-36.2 13.3-36.8.4-.5 48 46.3 68.4 67.1 7.9 8.1 15.8 15.6 17.6 16.7 10.8 6.7 25.1-.3 26.3-12.9.8-9.2.3-9.9-31.1-40.3-16.1-15.5-35.2-34-42.4-41.1-7.3-7-13.3-13.2-13.3-13.7 0-.6.7-1 1.6-1 1.4 0 33.1-12.9 46.9-19.1 4.2-1.8 4.6-2.3 3-2.9-30.2-11.4-46.2-17.5-65.5-25-12.9-5-28-10.8-33.5-12.9-5.5-2.1-15.4-5.9-22-8.4s-17.8-6.8-24.9-9.6c-13.4-5.3-14.6-5.6-14.6-4.3zM838.4 547c0 14 .2 19.8.3 12.7.2-7 .2-18.4 0-25.5-.1-7-.3-1.2-.3 12.8zM838.2 697.5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8z"})]});(0,r.registerBlockType)(x.UU,{icon:b,edit:function({attributes:e,setAttributes:t}){const s=(0,a.useBlockProps)(),{post:r,pageLink:n,linkLabel:i,userName:c,socialNetwork:k,shareString:x,theme:b}=e;return(0,l.useEffect)((()=>{(async()=>{const s=await(async()=>{try{const e=await fetch("/wp-json/c2sh/settings");if(!e.ok)throw new Error(`Network response was not ok: ${e.statusText}`);return await e.json()}catch(e){return null}})();s&&await(async(e,t,s)=>{const r={socialNetwork:e.socialNetwork||s.default_socialNetwork,linkLabel:e.linkLabel||s.default_linkLabel,userName:e.userName||s.default_userName,theme:e.theme||s.default_theme,useShortlink:e.useShortlink||s.default_useShortlink};return r.pageLink=e.pageLink||await(async e=>{const t=wp.data.select("core/editor").getCurrentPostId();if(!t)throw new Error("No post ID available.");const s=await o()({path:`/wp/v2/posts/${t}`});return 1===e?s.c2sh_shortlink:s.c2sh_permalink})(r.useShortlink),t(r),r})(e,t,s)})()}),[]),!s.className.includes("is-style")&&b&&t({className:"is-style-"+b}),(0,h.jsxs)("div",{...s,children:[(0,h.jsx)(d,{linkLabel:i,pageLink:n,userName:c,socialNetwork:k,setAttributes:t}),(0,h.jsx)(p,{post:r,setAttributes:t}),(0,h.jsxs)("div",{className:"wp-block-eetezadi-click2share-footer",children:[(0,h.jsx)(w,{shareString:x,socialNetwork:k}),(0,h.jsx)(u,{post:r,pageLink:n,userName:c,linkLabel:i,shareString:x,socialNetwork:k,setAttributes:t})]})]})},save:function({attributes:e}){const{post:t,linkLabel:s,shareString:r,socialNetwork:l,className:n}=e,o=a.useBlockProps.save({className:`${n} wp-c2sh-block-wrapper`});return(0,h.jsxs)("div",{...o,children:[(0,h.jsx)(a.RichText.Content,{tagName:"p",value:t,class:"wp-c2sh-block-post"}),(0,h.jsx)("div",{className:"wp-c2sh-block-footer",children:(0,h.jsxs)("a",{className:"wp-c2sh-block-link",href:r,target:"_blank",rel:"noreferrer noopener",children:[(0,h.jsx)(k,{socialNetwork:l}),s]})})]})}})}},s={};function r(e){var a=s[e];if(void 0!==a)return a.exports;var l=s[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,s,a,l)=>{if(!s){var n=1/0;for(h=0;h<e.length;h++){s=e[h][0],a=e[h][1],l=e[h][2];for(var o=!0,i=0;i<s.length;i++)(!1&l||n>=l)&&Object.keys(r.O).every((e=>r.O[e](s[i])))?s.splice(i--,1):(o=!1,l<n&&(n=l));if(o){e.splice(h--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var h=e.length;h>0&&e[h-1][2]>l;h--)e[h]=e[h-1];e[h]=[s,a,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,s)=>{var a,l,n=s[0],o=s[1],i=s[2],c=0;if(n.some((t=>0!==e[t]))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(i)var h=i(r)}for(t&&t(s);c<n.length;c++)l=n[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(h)},s=self.webpackChunkclick_2_share=self.webpackChunkclick_2_share||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var a=r.O(void 0,[350],(()=>r(260)));a=r.O(a)})();