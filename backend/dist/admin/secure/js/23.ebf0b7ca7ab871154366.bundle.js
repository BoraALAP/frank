(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{512:function(e,t,a){"use strict";a.r(t);var n=a(77),r=a(0),o=a.n(r),l=a(76);t.default=({onChange:e,autoFocus:t,field:a,value:r,errors:u,isDisabled:s})=>{const i="ks-input-"+a.path;return o.a.createElement(n.a,null,o.a.createElement(n.d,{htmlFor:i,field:a,errors:u}),o.a.createElement(n.b,{text:a.adminDoc}),o.a.createElement(n.c,null,o.a.createElement(l.c,{autoComplete:"off",autoFocus:t,required:a.isRequired,type:"text",value:(e=>"string"==typeof e?e:"number"==typeof e?String(e):"")(r),onChange:t=>{const a=t.target.value;/^-?\d*\.?\d*$/.test(a)&&e(a)},id:i,disabled:s})))}}}]);