"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2918],{12918:function(e,n,t){t.r(n),t.d(n,{Component:function(){return d}});var r=t(6491),o=t(25964),i=t(3019),a=t(69821),c=t(39736),s=r.default.Original,u=r.default.Modified,l="one\ntwo\nthree\nfour\nfive";function d(){return(0,c.jsxs)(r.default,{style:{width:540},orientation:"b-a",theme:a.CG,children:[(0,c.jsx)(s,{value:l}),(0,c.jsx)(u,{value:l.replace(/t/g,"T")+"Six",extensions:[o.tk.editable.of(!1),i.yy.readOnly.of(!0)]})]})}},6491:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r=t(25773),o=t(30808),i=t(9531),a=t(649),c=t(30325),s=t(25964),u=t(11026),l=t(39736),d={modified:{doc:""},original:{doc:""}},f=(0,i.createContext)(d);function h(e,n){return(0,r.Z)({},e,n,{modified:(0,r.Z)({},e.modified,n.modified),original:(0,r.Z)({},e.original,n.original)})}var g=function(){return(0,i.useContext)(f)},v=function(e){var n=e.children,t=e.theme,o=(0,i.useReducer)(h,(0,r.Z)({},d,{theme:t})),a=(0,u.Z)(o,2),c=a[0],s=a[1];return(0,i.useEffect)((function(){return s({theme:t})}),[t]),(0,l.jsx)(f.Provider,{value:(0,r.Z)({},c,{dispatch:s}),children:n})},m=["extensions","value","selection","onChange"],Z=function(e){var n=e.extensions,t=void 0===n?[]:n,u=e.value,l=e.selection,d=e.onChange,f=(0,o.Z)(e,m),h=g(),v=h.theme,Z=h.dispatch,x=(0,c.getDefaultExtensions)((0,r.Z)({},f,{theme:v})),p=s.tk.updateListener.of((function(e){if(e.docChanged&&"function"===typeof d){var n=e.state.doc.toString();d(n,e)}}));return(0,i.useEffect)((function(){return Z({original:{doc:u,selection:l,extensions:[p].concat((0,a.Z)(x),(0,a.Z)(t))},originalExtension:{onChange:d,option:f,extension:[t,p]}})}),[e]),null};Z.displayName="CodeMirrorMerge.Original";var x=["extensions","value","selection","onChange"],p=function(e){var n=e.extensions,t=void 0===n?[]:n,u=e.value,l=e.selection,d=e.onChange,f=(0,o.Z)(e,x),h=g(),v=h.theme,m=h.dispatch,Z=(0,c.getDefaultExtensions)((0,r.Z)({},f,{theme:v})),p=s.tk.updateListener.of((function(e){if(e.docChanged&&"function"===typeof d){var n=e.state.doc.toString();d(n,e)}}));return(0,i.useEffect)((function(){return m({modified:{doc:u,selection:l,extensions:[p].concat((0,a.Z)(Z),(0,a.Z)(t))},modifiedExtension:{onChange:d,option:f,extension:[p,t]}})}),[e]),null};p.displayName="CodeMirrorMerge.Modified";var C=t(75883),E=["className","children","orientation","revertControls","highlightChanges","gutter","collapseUnchanged","destroyRerender","renderRevertControl"],w=["modified","modifiedExtension","original","originalExtension","theme","dispatch"],y=i.forwardRef((function(e,n){var t=e.className,s=e.children,u=e.orientation,d=e.revertControls,f=e.highlightChanges,h=e.gutter,v=e.collapseUnchanged,m=e.destroyRerender,Z=void 0===m||m,x=e.renderRevertControl,p=(0,o.Z)(e,E),y=g(),b=y.modified,M=y.modifiedExtension,R=y.original,j=y.originalExtension,k=y.theme,N=y.dispatch,D=(0,o.Z)(y,w),U=(0,i.useRef)(null),O=(0,i.useRef)(),S={orientation:u,revertControls:d,highlightChanges:f,gutter:h,collapseUnchanged:v,renderRevertControl:x};(0,i.useImperativeHandle)(n,(function(){return{container:U.current,view:O.current,modified:b,original:R,config:(0,r.Z)({a:R,b:b,parent:U.current},S)}}),[U,O,b,R,S]),(0,i.useEffect)((function(){!O.current&&U.current&&(O.current=new C.QK((0,r.Z)({a:(0,r.Z)({},R,{extensions:[].concat((0,a.Z)((null==j?void 0:j.extension)||[]),(0,a.Z)((0,c.getDefaultExtensions)((0,r.Z)({},null==j?void 0:j.option,{theme:k}))))}),b:(0,r.Z)({},b,{extensions:[].concat((0,a.Z)((null==M?void 0:M.extension)||[]),(0,a.Z)((0,c.getDefaultExtensions)((0,r.Z)({},null==M?void 0:M.option,{theme:k}))))}),parent:U.current},S)))}),[O,U]),(0,i.useEffect)((function(){if(R&&R.doc&&O.current){var e,n,t=null==(e=O.current)?void 0:e.a.state.doc.toString();if(t!==R.doc)null==(n=O.current)||n.a.dispatch({changes:{from:0,to:t.length,insert:R.doc||""}})}if(b&&b.doc&&O.current){var o,i,s=null==(o=O.current)?void 0:o.b.state.doc.toString();if(s!==b.doc)null==(i=O.current)||i.b.dispatch({changes:{from:0,to:s.length,insert:b.doc||""}})}if(Z&&O.current){var u=O.current.a.state.selection.ranges[0].from,l=O.current.b.state.selection.ranges[0].from;O.current.destroy(),O.current=new C.QK((0,r.Z)({a:(0,r.Z)({},R,{extensions:[].concat((0,a.Z)((null==j?void 0:j.extension)||[]),(0,a.Z)((0,c.getDefaultExtensions)((0,r.Z)({},null==j?void 0:j.option,{theme:k}))))}),b:(0,r.Z)({},b,{extensions:[].concat((0,a.Z)((null==M?void 0:M.extension)||[]),(0,a.Z)((0,c.getDefaultExtensions)((0,r.Z)({},null==M?void 0:M.option,{theme:k}))))}),parent:U.current},S)),u&&(O.current.a.focus(),O.current.a.dispatch({selection:{anchor:u,head:u}})),l&&(O.current.b.focus(),O.current.b.dispatch({selection:{anchor:l,head:l}}))}}),[O,k,U.current,R,b,j,M,Z]),(0,i.useEffect)((function(){return function(){return O.current&&O.current.destroy()}}),[]),(0,i.useEffect)((function(){if(O.current){var e={};D.orientation!==u&&(e.orientation=u),D.revertControls!==d&&(e.revertControls=d),D.highlightChanges!==f&&(e.highlightChanges=f),D.gutter!==h&&(e.gutter=h),D.collapseUnchanged!==v&&(e.collapseUnchanged=v),D.renderRevertControl!==x&&(e.collapseUnchanged=v),Object.keys(e).length&&N&&O.current&&(O.current.reconfigure((0,r.Z)({},e)),N((0,r.Z)({},e)))}}),[N,O,u,d,f,h,v,x]);return(0,l.jsx)("div",(0,r.Z)({ref:U,className:"cm-merge-theme"+(t?" "+t:"")},p,{children:s}))}));y.displayName="CodeMirrorMerge.Internal";var b=["theme"],M=i.forwardRef((function(e,n){var t=e.theme,i=(0,o.Z)(e,b);return(0,l.jsx)(v,{theme:t,children:(0,l.jsx)(y,(0,r.Z)({},i,{ref:n}))})}));M.Original=Z,M.Modified=p,M.displayName="CodeMirrorMerge";var R=M}}]);