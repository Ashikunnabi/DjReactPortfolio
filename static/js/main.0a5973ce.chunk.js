(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,a){},52:function(e,t,a){e.exports=a(94)},60:function(e,t,a){},61:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/personal_description_banner.e877b4c7.gif"},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(11),r=a.n(o),c=(a(57),a(58),a(59),a(60),a(61),a(15)),i=a(16),s=a(19),m=a(18),u=a(3),p=a(20),h=a(6),g=function(){return l.a.createElement("div",{className:"Home__background_image"},l.a.createElement(j,null),l.a.createElement("div",{className:"container"},l.a.createElement(u.H,{style:{marginTop:"15px"}},l.a.createElement(x,null)),l.a.createElement(u.H,null,l.a.createElement(k,null)),l.a.createElement(u.H,null,l.a.createElement(O,null))))},d=a(13),f=function(){var e=l.a.useState([]),t=Object(d.a)(e,2),a=t[0],o=t[1],r=l.a.useState(null),c=Object(d.a)(r,2),i=c[0],s=c[1],m=l.a.useState(null),p=Object(d.a)(m,2),h=p[0],g=p[1],f=l.a.useState(!1),b=Object(d.a)(f,2),E=b[0],j=b[1],x=[];l.a.useEffect((function(){fetch("http://localhost:8000/project/api/v1/projects/").then((function(e){return e.json()})).then((function(e){o(e.results),s(e.next)}))}),[]);var y=function(e){g(e)},w=function(){j(!E)};return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"container-fluid Home__background_image"},l.a.createElement(u.H,null,a?a.map((function(e){return l.a.createElement(v,{key:e.id,obj:e,seeProjectDetails:y,modal:w})})):console.log(a)),i?l.a.createElement(u.H,{style:{marginTop:"20px",justifyContent:"center"}},l.a.createElement(u.b,{outline:!0,color:"black",onClick:function(){a.map((function(e){return x.push(e)})),fetch(i).then((function(e){return e.json()})).then((function(e){e.results.map((function(e){return x.push(e)})),o(x),s(e.next)}))}},l.a.createElement("strong",null,"MORE"))):"",E?l.a.createElement(C,{toggleModal:w,obj:JSON.parse(h),modal:9}):""))},b=function(){return l.a.createElement(u.m,null,l.a.createElement(u.H,{style:{justifyContent:"center"}},l.a.createElement(_,null),l.a.createElement(S,null),l.a.createElement(_,null)))},E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(u.y,{color:"default-color sticky-top",dark:!0,expand:"md"},l.a.createElement(u.z,null,l.a.createElement("strong",{className:"white-text"},"Nabi")),l.a.createElement(u.B,{onClick:this.toggleCollapse}),l.a.createElement(u.l,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},l.a.createElement(u.A,{left:!0},l.a.createElement(u.w,null,l.a.createElement(u.x,{exact:!0,to:"/",activeClassName:"navbar_active"},"Home")),l.a.createElement(u.w,null,l.a.createElement(u.x,{exact:!0,to:"/portfolio",activeClassName:"navbar_active"},"Portfolio"))))),l.a.createElement(h.a,{exact:!0,path:"/",component:g}),l.a.createElement(h.a,{exact:!0,path:"/Portfolio",component:f}),l.a.createElement(h.a,{exact:!0,path:"/Blog",component:b}))}}]),a}(n.Component),v=(a(26),function(e){return l.a.createElement(u.k,{md:"3",style:{marginTop:"40px"}},l.a.createElement(u.c,{narrow:!0,style:{height:"530px"}},l.a.createElement(u.J,{cascade:!0,className:"card__view"},e.obj.show_image?l.a.createElement(u.e,{hover:!0,overlay:"white-slight",className:"card-img-top card__image",src:e.obj.image,alt:"food"}):l.a.createElement("div",{class:"card__image embed-responsive embed-responsive-16by9"},l.a.createElement("iframe",{class:"embed-responsive-item",src:e.obj.video,title:e.obj.title,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),l.a.createElement(u.d,null,l.a.createElement("h5",{className:"pink-text"},e.obj.is_fab_icon?l.a.createElement(u.o,{fab:!0,icon:e.obj.icon}):l.a.createElement(u.o,{icon:e.obj.icon}),"\xa0",e.obj.technology),l.a.createElement(u.g,{className:"font-weight-bold",style:{height:"20%"}},e.obj.title),l.a.createElement(u.f,{style:{height:"27%"}},e.obj.thirty_words_description," ..."),l.a.createElement(u.k,{md:"12",className:"d-flex justify-content-center"},l.a.createElement(u.b,{value:JSON.stringify(e.obj),onClick:function(t){return function(t){e.seeProjectDetails(t.target.value),e.modal()}(t)}},"See Details")),l.a.createElement(u.k,{md:"12",className:"d-flex justify-content-center"},e.obj.show_website?l.a.createElement(u.b,{outline:!0,href:e.obj.website,target:"_blank"},l.a.createElement(u.o,{size:"lg",icon:"cloud"})):"",e.obj.show_github?l.a.createElement(u.b,{outline:!0,color:"black",href:e.obj.github,target:"_blank"},l.a.createElement(u.o,{size:"lg",fab:!0,icon:"github"})):""))))}),j=function(){var e=l.a.useState([]),t=Object(d.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){fetch("http://localhost:8000/project/api/v1/quotes/").then((function(e){return e.json()})).then((function(e){for(var t=[],a=0;a<e.length;a++)e[a].show_as_carousel&&t.push(e[a]);n(t)}))}),[]),l.a.createElement(u.h,{activeItem:1,length:3,showControls:!0,showIndicators:!0,className:"z-depth-1"},l.a.createElement(u.i,null,l.a.createElement(u.j,{itemId:"1"},l.a.createElement(u.J,null,l.a.createElement("img",{className:"d-block w-100",src:a[0]&&a[0].image,alt:"First slide"}),l.a.createElement(u.r,{overlay:""}))),l.a.createElement(u.j,{itemId:"2"},l.a.createElement(u.J,null,l.a.createElement("img",{className:"d-block w-100",src:a[1]&&a[1].image,alt:"Second slide"}),l.a.createElement(u.r,{overlay:""}))),l.a.createElement(u.j,{itemId:"3"},l.a.createElement(u.J,null,l.a.createElement("img",{className:"d-block w-100",src:a[2]&&a[2].image,alt:"Third slide"}),l.a.createElement(u.r,{overlay:""})))))},x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{height:"20px",backgroundColor:"black",width:"100%"}}),l.a.createElement("img",{src:a(84),className:"img-fluid shadow-box-example z-depth-1",alt:"",width:"100%"}))},y=function(){return l.a.createElement(u.n,{color:"default-color",className:"font-small",style:{marginTop:"20px"}},l.a.createElement(u.m,{fluid:!0,className:"text-center text-md-left"},l.a.createElement(u.H,null,l.a.createElement(u.k,{md:"12",className:"text-center py-3"},l.a.createElement("a",{href:"https://github.com/Ashikunnabi/",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},l.a.createElement(u.o,{fab:!0,icon:"github"})),l.a.createElement("a",{href:"https://www.facebook.com/ashikunnabituhin",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},l.a.createElement(u.o,{fab:!0,icon:"facebook-square"})),l.a.createElement("a",{href:"https://twitter.com/AshikunnabiT",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},l.a.createElement(u.o,{fab:!0,icon:"twitter"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/ashikunnabi/",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},l.a.createElement(u.o,{fab:!0,icon:"linkedin"}))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(u.m,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",l.a.createElement("a",{href:"#!"}," Md. Ashikun Nabi "))))},w=function(e){return l.a.createElement(u.b,{color:e.obj.button_color},e.obj.is_fab_icon?l.a.createElement(u.o,{fab:!0,icon:e.obj.icon}):l.a.createElement(u.o,{icon:e.obj.icon}),"\xa0 ",e.obj.title)},k=function(){var e=l.a.useState([]),t=Object(d.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){fetch("http://localhost:8000/project/api/v1/skills/").then((function(e){return e.json()})).then((function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a]);n(t)}))}),[]),l.a.createElement("div",{className:"Skills__div"},l.a.createElement("h1",{className:"Skills__h1"},"SKILLS"),a?a.map((function(e){return l.a.createElement(w,{key:e.id,obj:e})})):console.log(a))},N=a(50),O=(a(93),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={photoIndex:0,isOpen:!1,images:["https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg","https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg","https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg","https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg","https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg","https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg","https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg","https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg","https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg"]},e.componentDidMount=function(){fetch("http://localhost:8000/project/api/v1/quotes/").then((function(e){return e.json()})).then((function(t){for(var a=[],n=0;n<t.length;n++)t[n].show_as_carousel||a.push(t[n].image);e.setState({images:a})}))},e.renderImages=function(){var t=-1;return e.state.images.map((function(a){var n=++t;return l.a.createElement(u.k,{md:"4",key:t},l.a.createElement("figure",null,l.a.createElement("img",{src:a,alt:"Gallery",className:"img-fluid",onClick:function(){return e.setState({photoIndex:n,isOpen:!0})}})))}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,o=t.images;return l.a.createElement("div",{className:"mt-4",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"mdb-lightbox"},l.a.createElement(u.H,null,this.renderImages())),n&&l.a.createElement(N.a,{mainSrc:o[a],nextSrc:o[(a+1)%o.length],prevSrc:o[(a+o.length-1)%o.length],imageTitle:a+1+"/"+o.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+o.length-1)%o.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%o.length})}}))}}]),a}(l.a.Component)),_=function(){return l.a.createElement("div",{style:{backgroundColor:"white",borderBottom:"1px solid lightgray",padding:"25px 0px"}},l.a.createElement(u.H,null,l.a.createElement(u.k,{md:"4",lg:"4",className:"mb-lg-0 mb-5"},l.a.createElement(u.J,{hover:!0,rounded:!0,className:"z-depth-1-half mb-4"},l.a.createElement("img",{className:"img-fluid",src:"https://mdbootstrap.com/img/Photos/Others/images/86.jpg",alt:""}))),l.a.createElement(u.k,{md:"8",lg:"8",className:"mb-lg-0 mb-5"},l.a.createElement("span",null,"Icont Tool name"),l.a.createElement("h3",null,l.a.createElement("strong",null,"Full Title of a project")),l.a.createElement("p",null,"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.Full Title of a project"),l.a.createElement("p",null,"by ",l.a.createElement("strong",null,"Carine Fox"),", 19/08/2018"),l.a.createElement(u.b,{color:"light-blue"},"React"))))},S=function(){return l.a.createElement("div",{style:{backgroundColor:"white",borderBottom:"1px solid lightgray",padding:"25px 0px"}},l.a.createElement(u.H,null,l.a.createElement(u.k,{md:"8",lg:"8",className:"mb-lg-0 mb-5"},l.a.createElement("span",null,"Icont Tool name"),l.a.createElement("h3",null,l.a.createElement("strong",null,"Full Title of a project")),l.a.createElement("p",null,"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.Full Title of a project"),l.a.createElement("p",null,"by ",l.a.createElement("strong",null,"Carine Fox"),", 19/08/2018"),l.a.createElement(u.b,{color:"light-blue"},"React")),l.a.createElement(u.k,{md:"4",lg:"4",className:"mb-lg-0 mb-5"},l.a.createElement(u.J,{hover:!0,rounded:!0,className:"z-depth-1-half mb-4"},l.a.createElement("img",{className:"img-fluid",src:"https://mdbootstrap.com/img/Photos/Others/images/86.jpg",alt:""})))))},C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={modal9:!0},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.m,null,l.a.createElement(u.s,{isOpen:this.state.modal9,toggle:this.props.toggleModal,fullHeight:!0,position:"top"},l.a.createElement(u.v,{toggle:this.props.toggleModal},this.props.obj.title),l.a.createElement(u.t,null,this.props.obj.description,l.a.createElement("hr",null),l.a.createElement("h4",null,"Technology Stacks"),l.a.createElement("ul",{class:"list-group z-depth-0"},this.props.obj.technology_stacks.split("\n").map((function(e){return l.a.createElement("li",{class:"list-group-item justify-content-between"},e)})))),l.a.createElement(u.u,null)))}}]),a}(n.Component);var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.0a5973ce.chunk.js.map