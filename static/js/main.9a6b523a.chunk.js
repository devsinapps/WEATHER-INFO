(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(7),c=a.n(r),m=a(8),o=a(9),s=a(12),u=a(10),i=a(13),d=a(14),E=a.n(d),h=a(16),p=a(3),f=a(11),g="6cca5d9ad193e48a8fe2393bb7ce85d3",v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={weathers:[],alertNull:"",alert:"",loading:""},a.getWeather=function(){var e=Object(h.a)(E.a.mark(function e(t){var n,l,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.keySearch.value,e.next=4,fetch("https://api.openweathermap.org/data/2.5/find?q=".concat(n,"&units=metric&appid=").concat(g));case 4:return l=e.sent,e.next=7,l.json();case 7:r=e.sent,console.log(r),0===n.length?a.setState({weathers:[],alertNull:"please input city"}):a.setState({weathers:r.list,alertNull:""}),a.addForm.reset();case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({loading:"loading"})},5e3)}},{key:"render",value:function(){var e=this,t=l.a.createElement("div",{className:"alertNull"},l.a.createElement(p.g,null,l.a.createElement(p.d,{lg:"3",className:"mx-auto"},l.a.createElement(p.c,null,this.state.alertNull)))),a=(l.a.createElement("div",null,this.state.aler),l.a.createElement("div",{className:"bagAnimation"},l.a.createElement(p.g,null,l.a.createElement(p.d,{lg:"3",className:"mx-auto"},l.a.createElement(p.a,null,l.a.createElement(p.b,null,l.a.createElement("h1",null," Welcome "),l.a.createElement("div",{className:"loading"})))))));l.a.createElement(f.a,{icon:"search"});return l.a.createElement("div",{className:"Development container-fluid"},0===this.state.loading.length?a:l.a.createElement("div",{className:"WeatherMenu"},l.a.createElement(p.g,null,l.a.createElement(p.d,{lg:"6",className:"mx-auto"},l.a.createElement("div",{className:"headingTitle"},l.a.createElement("h1",null,l.a.createElement(f.a,{icon:"cloud-sun"}),"WeatherInfo")),l.a.createElement(p.a,null,l.a.createElement(p.b,null,l.a.createElement("form",{onSubmit:function(t){return e.getWeather(t)},className:"form",ref:function(t){return e.addForm=t}},l.a.createElement(p.g,{form:!0},l.a.createElement(p.d,{md:"10"},l.a.createElement(p.f,null,l.a.createElement("input",{type:"teks",ref:function(t){return e.keySearch=t},className:"form-control",placeholder:0===this.state.weathers.length?"Input Your City...":"Search Again..."}))),l.a.createElement(p.d,{md:"2"},l.a.createElement(p.f,null,l.a.createElement("input",{type:"submit",className:"form-control",value:"find"}))))))))),t,l.a.createElement(p.g,null,this.state.weathers.map(function(e){return l.a.createElement(p.d,{lg:"3"},l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(p.b,null,l.a.createElement("div",{key:e.id},l.a.createElement(p.c,null," Location: ",e.name,", ",e.sys.country," "),l.a.createElement(p.c,null,"  Temperature: ",e.main.temp," "),l.a.createElement(p.c,null,"  Humdity: ",e.main.humidity," "),l.a.createElement(p.c,null,"  Status: ",e.weather[0].main," "),l.a.createElement(p.c,null,"  Description : ",e.weather[0].description," "),l.a.createElement(p.c,null,"  Coordinates : [",e.coord.lat,", ",e.coord.lon,"] ")))))})),l.a.createElement("footer",{className:"footer"},l.a.createElement(p.e,{fluid:!0},l.a.createElement(p.g,null,l.a.createElement(p.d,{lg:"6",md:"6",sm:"6",className:"Copyright"},l.a.createElement(p.a,null,l.a.createElement(p.b,null,l.a.createElement("i",null," Copyright \xa9 "),l.a.createElement("a",{href:"https://portofolio-sandy.firebaseapp.com/",target:"__blank"}," sandy kurniawan ")))),l.a.createElement(p.d,{lg:"6",md:"6",sm:"6",className:"Powered"},l.a.createElement(p.a,null,l.a.createElement(p.b,null,l.a.createElement("i",null," Powered: "),l.a.createElement("a",{href:"https://openweathermap.org/",target:"__blank"}," openweathermap.org ")))))))))}}]),t}(l.a.Component),b="6cca5d9ad193e48a8fe2393bb7ce85d3",w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={weathers:[],alertNull:"",alert:"",loading:""},a.getWeather=function(){var e=Object(h.a)(E.a.mark(function e(t){var n,l,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.keySearch.value,e.next=4,fetch("https://api.openweathermap.org/data/2.5/find?q=".concat(n,"&units=metric&appid=").concat(b));case 4:return l=e.sent,e.next=7,l.json();case 7:r=e.sent,console.log(r),0===n.length?a.setState({weathers:[],alertNull:"please input city"}):a.setState({weathers:r.list,alertNull:""}),a.addForm.reset();case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({loading:"loading"})},3e3)}},{key:"render",value:function(){var e=this,t=l.a.createElement("div",{className:"alertNull"},l.a.createElement(p.g,null,l.a.createElement(p.d,{lg:"3",className:"mx-auto"},l.a.createElement(p.c,null,this.state.alertNull)))),a=(l.a.createElement("div",null,this.state.aler),l.a.createElement("div",{className:"bagAnimation"},l.a.createElement(p.g,null,l.a.createElement(p.d,{lg:"3",className:"mx-auto"},l.a.createElement(p.a,null,l.a.createElement(p.b,null,l.a.createElement("h1",null," Welcome "),l.a.createElement("div",{className:"loading"})))))));return l.a.createElement("div",{className:"Development container-fluid"},0===this.state.loading.length?a:l.a.createElement("div",{className:"WeatherMenu"},l.a.createElement(p.g,null,l.a.createElement(p.d,{lg:"6",className:"mx-auto"},l.a.createElement("div",{className:"headingTitle"},l.a.createElement("h1",null,l.a.createElement(f.a,{icon:"cloud-sun"}),"WeatherInfo")),l.a.createElement(p.a,null,l.a.createElement(p.b,null,l.a.createElement("form",{onSubmit:function(t){return e.getWeather(t)},className:"form",ref:function(t){return e.addForm=t}},l.a.createElement(p.g,{form:!0},l.a.createElement(p.d,{md:"10"},l.a.createElement(p.f,null,l.a.createElement("input",{type:"teks",ref:function(t){return e.keySearch=t},className:"form-control",placeholder:0===this.state.weathers.length?"Input Your City...":"Search Again..."}))),l.a.createElement(p.d,{md:"2"},l.a.createElement(p.f,null,l.a.createElement("input",{type:"submit",className:"form-control",value:"get"}))))))))),t,l.a.createElement(p.g,null,this.state.weathers.map(function(e){return l.a.createElement(p.d,{lg:"3"},l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(p.b,null,l.a.createElement("div",{key:e.id},l.a.createElement(p.c,null," Location: ",e.name,", ",e.sys.country," "),l.a.createElement(p.c,null,"  Temperature: ",e.main.temp," "),l.a.createElement(p.c,null,"  Humdity: ",e.main.humidity," "),l.a.createElement(p.c,null,"  Status: ",e.weather[0].main," "),l.a.createElement(p.c,null,"  Description : ",e.weather[0].description," "),l.a.createElement(p.c,null,"  Coordinates : [",e.coord.lat,", ",e.coord.lon,"] ")))))})),l.a.createElement("footer",{className:"footer"},l.a.createElement(p.e,{fluid:!0},l.a.createElement(p.g,null,l.a.createElement(p.d,{lg:"6",md:"6",sm:"6",className:"Copyright"},l.a.createElement(p.a,null,l.a.createElement(p.b,null,l.a.createElement("i",null," Copyright \xa9 "),l.a.createElement("a",{href:"https://portofolio-sandy.firebaseapp.com/",target:"__blank"}," sandy kurniawan ")))),l.a.createElement(p.d,{lg:"6",md:"6",sm:"6",className:"Powered"},l.a.createElement(p.a,null,l.a.createElement(p.b,null,l.a.createElement("i",null," Powered: "),l.a.createElement("a",{href:"https://openweathermap.org/",target:"__blank"}," openweathermap.org ")))))))))}}]),t}(l.a.Component),y=a(44),N=a(46),k=a(45),j=a(15),O=a(18);j.b.add(O.c,O.b,O.a);var S=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(y.a,null,l.a.createElement(N.a,null,l.a.createElement(k.a,{path:"/",component:v,exact:!0}),l.a.createElement(k.a,{path:"/development",component:w})))}}]),t}(l.a.Component);a(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.9a6b523a.chunk.js.map