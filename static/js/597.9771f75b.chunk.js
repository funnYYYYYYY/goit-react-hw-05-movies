"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(n,t,e){e.r(t);var r,a,c,i,u,o=e(885),s=e(168),p=e(791),f=e(470),l=e(390),d=e(444),h=e(184),g=d.ZP.div(r||(r=(0,s.Z)(["\n  width: 1280px;\n  padding: 52px 24px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=d.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  margin: -16px;\n  list-style: none;\n  text-decoration: none;\n  padding: 0;\n  margin: 0;\n"]))),v=d.ZP.li(c||(c=(0,s.Z)(["\n  list-style-type: none;\n  position: relative;\n  width: calc((100% - (3 * 10px)) / 5);\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),m=d.ZP.p(i||(i=(0,s.Z)(["\n  font-weight: 600;\n  font-size: 15px;\n"]))),w=d.ZP.img(u||(u=(0,s.Z)(["\n  border-radius: 5px;\n  width: 395px;\n  height: 575px;\n\n  cursor: pointer;\n"])));t.default=function(){var n=(0,p.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1];console.log("cast",e);var a=(0,f.UO)().movieId;if((0,p.useEffect)((function(){(0,l.U5)(a).then(r)}),[a]),e)return(0,h.jsx)(g,{children:e.map((function(n){var t=n.id,e=n.original_name,r=n.profile_path,a=n.name,c=n.character;return(0,h.jsx)(x,{children:(0,h.jsxs)(v,{children:[(0,h.jsx)(m,{children:e}),r?(0,h.jsx)(w,{src:"".concat("https://image.tmdb.org/t/p/w500"+r),alt:a,width:200,height:300}):(0,h.jsx)(w,{src:"".concat("https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"),alt:a,width:200,height:300}),(0,h.jsx)("p",{children:c})]},t)})}))})}},390:function(n,t,e){e.d(t,{Cp:function(){return o},Kd:function(){return p},Pz:function(){return f},Q2:function(){return d},U5:function(){return l},s9:function(){return s}});var r=e(861),a=e(757),c=e.n(a),i=e(388);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="1597a1507afef30e38994154d5f0aaa9",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data.results,console.log(e),n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,r=e.data.genres,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.9771f75b.chunk.js.map