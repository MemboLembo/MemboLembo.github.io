(function(t){function e(e){for(var n,u,c=e[0],d=e[1],s=e[2],l=0,f=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);a&&a(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,c=1;c<o.length;c++){var d=o[c];0!==r[d]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},i=[];function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var a=d;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"015b":function(t,e,o){},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"4a83":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("Todo App")]),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("hr"),o("TodoList",{attrs:{todos:t.todos},on:{"remove-todo":t.removeTodo}})],1)},i=[],u=(o("4de4"),o("d3b7"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",t._l(t.todos,(function(e,n){return o("TodoItem",{key:e.id,attrs:{todo:e,index:n},on:{"remove-todo":t.removeTodo}})})),1)])}),c=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("span",{class:{done:t.todo.completed}},[o("input",{attrs:{type:"checkbox"},on:{change:function(e){t.todo.completed=!t.todo.completed}}}),o("strong",[t._v(t._s(t.index+1))]),t._v(" "+t._s(t.todo.title)+" ")]),o("button",{staticClass:"rm",on:{click:function(e){return t.$emit("remove-todo",t.todo.id)}}},[t._v("×")])])},s=[],a=(o("a9e3"),{props:{todo:{type:Object,required:!0},index:Number}}),l=a,f=(o("6959"),o("2877")),p=Object(f["a"])(l,d,s,!1,null,null,null),m=p.exports,v={props:["todos"],components:{TodoItem:m},methods:{removeTodo:function(t){this.$emit("remove-todo",t)}}},h=v,b=(o("d6ff"),Object(f["a"])(h,u,c,!1,null,"cf8cc9a6",null)),y=b.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Create")])])},g=[],j=(o("498a"),{data:function(){return{title:""}},methods:{onSubmit:function(){if(console.log("sub",this.title),this.title.trim()){var t={id:Date.now(),title:this.title,completed:!1};this.$emit("add-todo",t),this.title=""}}}}),x=j,O=(o("881b"),Object(f["a"])(x,_,g,!1,null,"1a689490",null)),T=O.exports,w={name:"App",data:function(){return{todos:[]}},mounted:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(t){return t.json()})).then((function(e){t.todos=e}))},methods:{removeTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))},addTodo:function(t){this.todos.push(t)}},components:{TodoList:y,AddTodo:T}},P=w,$=(o("034f"),Object(f["a"])(P,r,i,!1,null,null,null)),S=$.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(S)}}).$mount("#app")},6959:function(t,e,o){"use strict";var n=o("4a83"),r=o.n(n);r.a},"85ec":function(t,e,o){},"881b":function(t,e,o){"use strict";var n=o("015b"),r=o.n(n);r.a},d081:function(t,e,o){},d6ff:function(t,e,o){"use strict";var n=o("d081"),r=o.n(n);r.a}});
//# sourceMappingURL=app.fda22259.js.map