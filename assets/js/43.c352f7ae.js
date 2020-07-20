(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{211:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Node.js的首要目标是提供一种简单的、用于创建高性能服务器及可在该服务器中运行的各种应用程序的开发工具。首先让我们来看一下现在的服务器端语言中存在着什么问题。在Java、PHP或ASP.NET等服务器端语言中，为每一个客户端连接创建一个新的线程，而每个线程需要耗费大约2MB的内存，也就是说，理论上，具有8GB内存的服务器可以同时连接的最大用户数为4000个左右。要让Web应用程序支持更多的用户，就需要增加服务器的数量，而Web应用程序的硬件成本也就随之增加了。不仅如此，在技术层面也会因此产生一些潜在的问题。例如，由于同一个用户的不同客户端请求可能会被不同的服务器处理，因此必须在所有的服务器之间共享所有的资源。由此可见，在一个Web应用程序中，一个主要的瓶颈是服务器所支持的最大同时连接用户量。")]),t._v(" "),e("p",[t._v("Node.js修改了客户端到服务器端的连接方法，解决了这个问题。因为它并不为每个客户端连接创建一个新的线程，而是为每个客户端连接触发一个在Node.js内部进行处理的事件。因此，如果使用Node.js，可以同时处理多达几万个用户的客户端连接。因此，当需要使Web应用程序能够支持大量用户的并发连接的时候，我们应该考虑使用Node.js。")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Node.js是运行在服务器上的javascript。由V8javascript引擎所解析并执行的脚本语言，是Google公司使用C++开发的一种高性能js引擎。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("javascript是一种只支持单线程的语言。因此不用担心死锁问题。\n例如当访问数据库获取数据时，在未返回结果时，可以继续执行后续的代码，把数据库返回的结果放在回调函数里面处理，而不用等待数据库返回数据，从而提高了程序的执行效率。")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("在一个时刻只能执行一个事件回调函数，但是在执行一个事件回调函数时可以转而处理其他事件，然后返回继续执行原事件回调函数，这种处理机制称为事件环机制。")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("需要大量并发的I/O应用。")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("在这类网站的服务器端，往往可能在每秒钟内接收到多达上千条数据并且需要将这些数据书写到数据库中，Node.js是解决这类问题的关键。Node.js将通过其队列机制将这些数据迅速书写在缓存区中，然后再通过每一个单独的处理从缓存区中取出这些数据并将其书写到数据库中。如果使用其他服务器（如Apache服务器或Tomcat服务器）的话，由于这些服务器采用的均为阻塞型I/O机制，因此需要为每条数据（到数据库中）的写入等待一段时间。如果使用Node.js服务器，由于其采用的是非阻塞型I/O机制，因此可以同时实现这些数据到数据库中的写入，而不必再为每条数据的写入等待")]),t._v(" "),t._m(7),t._v(" "),e("p",[e("a",{attrs:{href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js官方网站"),e("OutboundLink")],1)]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"node-js解决了什么问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js解决了什么问题"}},[this._v("#")]),this._v(" Node.js解决了什么问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"实现高性能服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现高性能服务器"}},[this._v("#")]),this._v(" 实现高性能服务器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"非阻塞型i-o及事件环机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞型i-o及事件环机制"}},[this._v("#")]),this._v(" 非阻塞型I/O及事件环机制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"什么叫非阻塞型i-o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么叫非阻塞型i-o"}},[this._v("#")]),this._v(" 什么叫非阻塞型I/O")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"事件环机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件环机制"}},[this._v("#")]),this._v(" 事件环机制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"node-js适合场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js适合场景"}},[this._v("#")]),this._v(" Node.js适合场景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("聊天服务器\n在一个具有很高人气的聊天应用程序中，在同一时刻通常可能存在着大量用户与聊天服务器之间的并发连接，而服务器端本身并不存在非常复杂的处理。")])]),this._v(" "),s("li",[s("p",[this._v("综合服务类网站或者电商网站的服务。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"node-js中模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js中模块"}},[this._v("#")]),this._v(" Node.js中模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Node.js中是通过以模块为单位来划分所有功能的。")]),this._v(" "),s("li",[this._v("通过exports导出模块功能。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("testMod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testMod"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("使用require引入模块")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" testMod "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./testMod.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Node.js核心模块图")])])}],!1,null,null,null);s.default=r.exports}}]);