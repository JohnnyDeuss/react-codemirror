"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9683],{9683:function(n,e,t){t.r(e),t.d(e,{ClassNameExample:function(){return p},Component:function(){return g}});var r=t(9531),o=t(22951),i=t(91976),a=t(60726),d=t(3019),u=t(25964);function c(n,e){var t,r=new d.f_,o=(0,a.Z)(n.visibleRanges);try{for(o.s();!(t=o.n()).done;)for(var i=t.value,c=i.from,l=i.to,s=c;s<=l;){var f=n.state.doc.lineAt(s);if(e.add&&"function"===typeof e.add){var h=e.add(f.number);if(h&&"string"===typeof h){var m={class:h};r.add(f.from,f.from,u.p.line({attributes:m}))}}s=f.to+1}}catch(v){o.e(v)}finally{o.f()}return r.finish()}var l=t(30325),s=t(47841),f=t(70742),h=t(55045),m=t(17664),v=t(39736),p=function(){var n,e=(0,h.F)().theme,t=(0,r.useContext)(f.Oy),a=u.tk.baseTheme({"&dark .first-line":{backgroundColor:"red"},"&light .first-line":{backgroundColor:"red"},"&dark .line-color":{backgroundColor:"blue"},"&light .line-color":{backgroundColor:"blue"}});return(0,v.jsx)(m.Oq,{children:(0,v.jsx)(l.default,{value:t.mdstr,theme:e,height:"300px !important",style:{margin:"0 0 23px 0"},extensions:[s.RI.markdown(),a,(n={add:function(n){return 3===n?"first-line":5===n?"line-color":void 0}},void 0===n&&(n={}),u.lg.fromClass(function(){function e(t){(0,o.Z)(this,e),this.decorations=void 0,this.decorations=c(t,n)}return(0,i.Z)(e,[{key:"update",value:function(e){(e.docChanged||e.viewportChanged)&&(this.decorations=c(e.view,n))}}]),e}(),{decorations:function(n){return n.decorations}}))]})})},g=function(){return(0,v.jsx)(f.MB,{path:function(){return t.e(1984).then(t.bind(t,21984))},children:(0,v.jsx)(p,{})})}},17664:function(n,e,t){t.d(e,{Oq:function(){return d}});var r,o,i=t(50669),a=t(74379),d=a.ZP.div(r||(r=(0,i.Z)(["\n  flex: 1;\n  max-width: 980px;\n  padding: 20px 20px 30px 20px;\n"])));a.ZP.div(o||(o=(0,i.Z)(["\n  display: flex;\n  flex: 1;\n"])))},55045:function(n,e,t){t.d(e,{F:function(){return i}});var r=t(11026),o=t(9531);function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",e=document.documentElement.getAttribute("data-color-mode"),t=(0,o.useState)("dark"===e?"dark":n),i=(0,r.Z)(t,2),a=i[0],d=i[1];return(0,o.useEffect)((function(){d("dark"===document.documentElement.getAttribute("data-color-mode")?"dark":"light"),document.addEventListener("colorschemechange",(function(n){d(n.detail.colorScheme)}))}),[]),{theme:a,setTheme:d}}}}]);