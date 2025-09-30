import{r as n,j as e}from"./jsx-runtime-BWtM72Fx.js";import{u as h,a as x,b as S,c as f,_ as y,M as w,L as j,O as g,S as M,d as k}from"./components-CH9gIafG.js";/**
 * @remix-run/react v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function E({getKey:r,...l}){let{isSpaMode:c}=h(),o=x(),u=S();f({getKey:r,storageKey:a});let d=n.useMemo(()=>{if(!r)return null;let t=r(o,u);return t!==o.key?t:null},[]);if(c)return null;let m=((t,p)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[p||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return n.createElement("script",y({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}const R=()=>[{title:"Austin White, Software Engineer"},{name:"description",content:"Portfolio of Austin White, Software Engineer"}];function v(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(w,{}),e.jsx(j,{})]}),e.jsxs("body",{children:[e.jsx(g,{}),e.jsx(E,{}),e.jsx(M,{}),e.jsx(k,{})]})]})}export{v as default,R as meta};
