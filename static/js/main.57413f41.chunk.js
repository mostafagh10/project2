(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{44:function(e,a,t){e.exports=t(86)},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),i=(t(49),t(2)),m=t(3),s=t(5),o=t(4),u=(t(50),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"about",className:"About"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"d-none d-sm-none d-md-none d-lg-block col-lg-6"},r.a.createElement("div",{className:"card aboutimage1"},r.a.createElement("div",{className:"aboutborder"}),r.a.createElement("div",{className:"aboutimage2"},r.a.createElement("img",{src:"about1.jpeg",width:"100%",height:"280"})))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",{className:"aboutheader"},"ABOUT ",r.a.createElement("span",{className:"aboutspan"},"ME")),r.a.createElement("h5",null,"Front End Developer"),r.a.createElement("p",{className:"abouttext"},"Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure ",r.a.createElement("br",null)," impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.",r.a.createElement("br",null)," Eu debet urbanitas voluptatibus ius. Mel in natum assum tritani, atqui mazim numquam ei vim."),r.a.createElement("button",{className:"aboutbutton"},"DOWNLOAD RESUME")))))}}]),t}(n.Component)),d=(t(51),t(13)),v=t.n(d),E=t(9),b=t(8),p=t(7);E.b.add(b.g,b.d,b.f);var h=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={x:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("data.json").then((function(a){e.setState({x:a.data.contact})}))}},{key:"render",value:function(){var e=this.state.x.map((function(e){return r.a.createElement("div",{className:"col-md-4",key:e.key},r.a.createElement("div",{className:"card contactcard"},r.a.createElement(p.a,{className:"contacticon",icon:e.icon}),r.a.createElement("br",null),r.a.createElement("h3",{className:"card-text-top"},e.name),r.a.createElement("p",null,e.details)))}));return r.a.createElement("div",{id:"contact",className:"Contact"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"contactheader"},"CONTACT ",r.a.createElement("span",{className:"contactspan"},"INFO")),r.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component),f=t(11),N=t(12);function g(){var e=Object(f.a)(["\nbackground:none;\nwidth: 250px;\nheight: 60px;\ncolor : white;\nfont-size : 20px;\ntransition:all 0.5s ease-in-out;\nborder:2px solid rgb(182, 17, 17);\nfont-weight:bold;\n&:hover { color : rgb(182, 17, 17); border-color:white;};\n"]);return g=function(){return e},e}function j(){var e=Object(f.a)(["\ncolor : rgb(182, 17, 17);\n"]);return j=function(){return e},e}function O(){var e=Object(f.a)(["\ncolor: white;\nfont-weight: bold;\n"]);return O=function(){return e},e}function y(){var e=Object(f.a)(["\nmargin-top: 210px;\nfloat : right;\n"]);return y=function(){return e},e}function k(){var e=Object(f.a)(["\nbackground-color:rgb(58, 57, 57);\nposition:absolute;\ntop:0;\nleft:0;\nbottom:0;\nright:0;\nopacity : 0.8;\n"]);return k=function(){return e},e}function w(){var e=Object(f.a)(["\nbackground-image:url('home1.jpg');\nbackground-size:cover;\nposition:absolute;\ntop:0;\nleft:0;\nbottom:0;\nright:0;\n"]);return w=function(){return e},e}function x(){var e=Object(f.a)(["\nwidth:100%;\nheight:700px;\nposition: relative;\n"]);return x=function(){return e},e}var C=N.a.div(x()),A=N.a.div(w()),M=N.a.div(k()),S=N.a.div(y()),q=N.a.h1(O()),L=N.a.span(j()),R=N.a.button(g()),F=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(C,{id:"home"},r.a.createElement(A,null),r.a.createElement(M,null,r.a.createElement("div",{className:"container"},r.a.createElement(S,null,r.a.createElement(q,null,"HELLO,",r.a.createElement("br",null),"MY NAME IS ",r.a.createElement("br",null),r.a.createElement(L,null,"ARFAN")),r.a.createElement("br",null),r.a.createElement(R,null,"PORTOFOLIO")))))}}]),t}(n.Component),T=t(14);t(80);E.b.add(b.a);var I=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Nav"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar bg",id:"navone"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("span",{className:"navthree"},"S"),"HAIF ",r.a.createElement("span",{className:"navthree"},"A"),"RFAN"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"},r.a.createElement(p.a,{className:"navtwo",icon:"bars"}))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(T.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("a",{className:"nav-link","data-scroll":"home",href:"#"},"HOME"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(T.Link,{activeClass:"active",to:"services",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("a",{className:"nav-link","data-scroll":"services",href:"#"},"SERVICES"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(T.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("a",{className:"nav-link","data-scroll":"projects",href:"#"},"PROJECTS"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(T.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("a",{className:"nav-link","data-scroll":"about",href:"#"},"ABOUT"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(T.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("a",{className:"nav-link","data-scroll":"contact",href:"#"},"CONTACT")),r.a.createElement(p.a,{icon:"Bars"})))))))}}]),t}(n.Component),z=(t(81),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={x:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("data.json").then((function(a){e.setState({x:a.data.projects})}))}},{key:"render",value:function(){var e=this.state.x.map((function(e){return e.name2?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col-md-6 pr1"},r.a.createElement("div",{className:"projectcard1"},r.a.createElement("div",{className:"projectover"}),r.a.createElement("img",{src:"project1.jpg",height:"300",width:"100%"}))),r.a.createElement("div",{className:"col-md-6 pr1",key:e.key},r.a.createElement("div",{className:"projectcard2 projecttext"},r.a.createElement("h3",null,e.name1),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure ",r.a.createElement("br",null)," impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.",r.a.createElement("br",null)," Eu debet urbanitas voluptatibus ius. Mel in natum assum tritani, atqui mazim numquam ei vim."))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"projectcard1 projecttext"},r.a.createElement("h3",null,e.name2),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure ",r.a.createElement("br",null)," impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.",r.a.createElement("br",null)," Eu debet urbanitas voluptatibus ius. Mel in natum assum tritani, atqui mazim numquam ei vim."))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"projectcard2"},r.a.createElement("div",{className:"projectover"}),r.a.createElement("img",{src:"project1.jpg",height:"300",width:"100%"})))):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"projectcard1"},r.a.createElement("div",{className:"projectover"}),r.a.createElement("img",{src:"project1.jpg",height:"300",width:"100%"}))),r.a.createElement("div",{className:"col-md-6",key:e.key},r.a.createElement("div",{className:"projectcard2 projecttext"},r.a.createElement("h3",null,e.name1),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure ",r.a.createElement("br",null)," impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.",r.a.createElement("br",null)," Eu debet urbanitas voluptatibus ius. Mel in natum assum tritani, atqui mazim numquam ei vim."))))}));return r.a.createElement("div",{id:"projects",className:"Services"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"serviceheader"},"RECENT ",r.a.createElement("span",{className:"servicespan"},"PROJECTS")),r.a.createElement("br",null),r.a.createElement("div",{className:"row no-gutters"},e)))}}]),t}(n.Component));t(82);E.b.add(b.c,b.e,b.b,b.h);var D=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={x:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("data.json").then((function(a){e.setState({x:a.data.services})}))}},{key:"render",value:function(){var e=this.state.x.map((function(e){return r.a.createElement("div",{className:"col-lg-3 col-sm-6",key:e.key},r.a.createElement("div",{className:"card servicecard"},r.a.createElement(p.a,{className:"serviceicon",icon:e.icon}),r.a.createElement("h3",{className:"card-text-top"},e.name),r.a.createElement("p",null,e.text)))}));return r.a.createElement("div",{id:"services",className:"Services"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"serviceheader"},"SERV",r.a.createElement("span",{className:"servicespan"},"I"),"CES"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, te novum fuisset mediocrem sit, elit simul putent sit no. Mei sumo iriure ",r.a.createElement("br",null)," impedit ne, omnes periculis nam ea. Vis ut menandri mediocrem molestiae, ea quod graecis vel.",r.a.createElement("br",null)," Eu debet urbanitas voluptatibus ius. Mel in natum assum tritani, atqui mazim numquam ei vim."),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component),V=(t(83),t(10));E.b.add(V.a,V.d,V.c,V.b);var B=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,r.a.createElement("span",{className:"navthree"},"S"),"HAIF ",r.a.createElement("span",{className:"navthree"},"A"),"RFAN"),r.a.createElement("h5",null,"Your Complete Web Solution"),r.a.createElement("br",null),r.a.createElement(p.a,{className:"footericon",icon:V.a}),r.a.createElement(p.a,{className:"footericon",icon:V.b}),r.a.createElement(p.a,{className:"footericon",icon:V.d}),r.a.createElement(p.a,{className:"footericon",icon:V.c}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"copyRight @ 2020 All Right Done")))}}]),t}(n.Component),H=(t(25),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement(F,null),r.a.createElement(D,null),r.a.createElement(z,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(u,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(B,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(84),t(85);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.57413f41.chunk.js.map