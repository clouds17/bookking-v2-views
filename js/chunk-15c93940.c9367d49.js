(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15c93940"],{"2f60":function(t,e,a){},"32dc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout-wrapper",[a("div",{staticClass:"tags"},t._l(t.tagList,(function(e,s){return a("section",{key:s},[a("p",[t._v(t._s(e.classify))]),a("ul",t._l(e.tags,(function(e,s){return a("li",{key:s},[a("router-link",{staticClass:"tag",attrs:{to:"/labels/edit/"+e.id}},[a("p",[a("img",{attrs:{src:e.pic,alt:""}}),a("span",[t._v(t._s(e.name))])]),a("SvgIcon",{attrs:{name:"right"}})],1)],1)})),0)])})),0),a("default-btn",{on:{click:t.createTag}},[t._v("新建标签")])],1)},c=[],n=a("9ab4"),i=a("1b40"),r=a("88b0"),l=a("46d9");let u=class extends(Object(i["b"])(l["a"])){get tagList(){return this.$store.state.tagList.tagList}};u=Object(n["a"])([Object(i["a"])({components:{DefaultBtn:r["a"]}})],u);var o=u,d=o,b=(a("91dd"),a("2877")),f=Object(b["a"])(d,s,c,!1,null,"557e4b7d",null);e["default"]=f.exports},"46d9":function(t,e,a){"use strict";var s=a("9ab4"),c=a("0613"),n=a("1b40");let i=class extends n["d"]{created(){c["a"].commit("fetchTag")}createTag(){this.$router.push("/labels/edit/0")}};i=Object(s["a"])([n["a"]],i),e["a"]=i},"88b0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createTag-wrapper"},[a("button",{staticClass:"createTag",on:{click:function(e){return t.$emit("click",e)}}},[t._t("default")],2)])},c=[],n=a("9ab4"),i=a("1b40");let r=class extends i["d"]{};r=Object(n["a"])([i["a"]],r);var l=r,u=l,o=(a("cba8"),a("2877")),d=Object(o["a"])(u,s,c,!1,null,"327611e7",null);e["a"]=d.exports},"91dd":function(t,e,a){"use strict";a("c4d0")},c4d0:function(t,e,a){},cba8:function(t,e,a){"use strict";a("2f60")}}]);
//# sourceMappingURL=chunk-15c93940.c9367d49.js.map