(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,a,t){e.exports=t.p+"static/media/spellsword.3383d679.PNG"},124:function(e,a,t){e.exports=t.p+"static/media/starrysky.00212d9a.png"},125:function(e,a,t){e.exports=t.p+"static/media/personal_website.25cc4652.png"},126:function(e,a,t){e.exports=t.p+"static/media/oefen.26dbbe0f.png"},127:function(e,a,t){e.exports=t.p+"static/media/10_means_max.12191170.png"},128:function(e,a,t){e.exports=t.p+"static/media/defect_prediction.c5800b11.PNG"},137:function(e,a,t){e.exports=t(396)},142:function(e,a,t){},362:function(e,a,t){},363:function(e,a,t){},373:function(e,a,t){},374:function(e,a,t){},375:function(e,a,t){},392:function(e,a,t){},393:function(e,a,t){},394:function(e,a,t){},395:function(e,a,t){},396:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(27),c=t.n(l),r=(t(142),t(16)),o=t(17),i=t(20),m=t(18),d=t(19),h=t(14),p=t(13),u=t(398),E=t(403),f=t(120),g=(t(361),t(362),t(363),t(364),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={scrollTo:e.height,opacity:0,width:0,height:0},t.updateWindowDimensions=t.updateWindowDimensions.bind(Object(p.a)(Object(p.a)(t))),t.handleScroll=t.handleScroll.bind(Object(p.a)(Object(p.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.Events.scrollEvent.register("begin",function(){console.log("begin",arguments)}),h.Events.scrollEvent.register("end",function(){console.log("end",arguments)}),this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.onscroll=function(){var a=50*Math.ceil(window.scrollY/50);e.state.currentScrollHeight!==a&&e.setState({currentScrollHeight:a})}}},{key:"componentWillUnmount",value:function(){h.Events.scrollEvent.remove("begin"),h.Events.scrollEvent.remove("end"),window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"scrollToAbout",value:function(){h.scroller.scrollTo("about-element",{duration:600,delay:0,smooth:!0})}},{key:"scrollToHome",value:function(){h.scroller.scrollTo("home-element",{duration:600,delay:0,smooth:!0})}},{key:"scrollToSkills",value:function(){h.scroller.scrollTo("skills-element",{duration:600,delay:0,smooth:!0})}},{key:"scrollToPortfolio",value:function(){h.scroller.scrollTo("portfolio-element",{duration:600,delay:0,smooth:!0})}},{key:"scrollToContact",value:function(){h.scroller.scrollTo("contact-element",{duration:600,delay:0,smooth:!0})}},{key:"handleScroll",value:function(){this.setState({scroll:window.scrollY})}},{key:"updateHeight",value:function(){this.setState({height:window.innerHeight+"px",scrollTo:window.innerHeight})}},{key:"render",value:function(){var e=this,a=Math.min(100/this.state.currentScrollHeight,1);return s.a.createElement("div",{className:"home-wrapper",style:{height:this.state.height}},s.a.createElement("div",{className:this.state.currentScrollHeight>=window.innerHeight-5?"header-wrapper":""},s.a.createElement("header",{className:"main"},s.a.createElement(E.a,{className:"justify-content-center",activeKey:"/home"},s.a.createElement(E.a.Item,null,s.a.createElement(E.a.Link,{href:"#",onClick:function(){return e.scrollToHome()}},"Home")),s.a.createElement(E.a.Item,null,s.a.createElement(E.a.Link,{href:"#",onClick:function(){return e.scrollToAbout()}},"About")),s.a.createElement(E.a.Item,null,s.a.createElement(E.a.Link,{eventKey:"link-1",onClick:function(){return e.scrollToSkills()}},"Skills")),s.a.createElement(E.a.Item,null,s.a.createElement(E.a.Link,{eventKey:"link-2",onClick:function(){return e.scrollToPortfolio()}},"Portfolio")),s.a.createElement(E.a.Item,null,s.a.createElement(E.a.Link,{eventKey:"link-1",onClick:function(){return e.scrollToContact()}},"Contact"))))),s.a.createElement(f.Particles,{params:{particles:{number:{value:60,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.02},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}}),s.a.createElement("div",{className:"name",style:{opacity:a}},s.a.createElement("h4",null,"Hey, I'm"),s.a.createElement("h2",{id:"my-name"},"Talha Khokhar"),s.a.createElement(u.a,{className:"btn-home",variant:"outline-secondary",size:"lg",onClick:function(){return e.scrollToAbout()}},"View my work",s.a.createElement("div",{className:"container-button"},s.a.createElement("i",{id:"right-arrow",className:"fas fa-arrow-right"}))),s.a.createElement("div",{className:"profile-links"},s.a.createElement("a",{href:"https://github.com/MoTalhaK",target:"_blank"},s.a.createElement("i",{className:"fab fa-github"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/muhammadkh/",target:"_blank"},s.a.createElement("i",{className:"fab fa-linkedin"})),s.a.createElement("a",{href:"https://www.dropbox.com/s/rgj1sm0ab0clqxs/talha_khokhar_resume.pdf?dl=0",target:"_blank"},s.a.createElement("i",{className:"fas fa-file-pdf"})))))}}]),a}(n.Component)),v=(t(372),t(399)),w=t(404),N=(t(373),t(38)),b=t.n(N);t(74);b.a.init();var k=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"about-container"},s.a.createElement("div",{className:"about-fade","data-aos":"fade-up"},s.a.createElement("h2",{id:"header-title"},"ABOUT"),s.a.createElement("div",{className:"header-title-bar"}),s.a.createElement("p",{className:"about-text"},"I am a software developer based in Toronto with a background in Computer Science. I enjoy building fast and responsive websites while also keeping in mind the needs of my customers and making sure that they have a enjoyable experience."),s.a.createElement("p",{className:"about-text"},"At the end of the day, my goal is to bring awesome ideas to life, here on the web.")),s.a.createElement(v.a,null,s.a.createElement(w.a,{"data-aos":"fade-up"},s.a.createElement(w.a.Img,{variant:"top",src:"https://cdn.pixabay.com/photo/2015/08/18/09/54/canada-893534_640.jpg",title:"Ottaoutais River"}),s.a.createElement(w.a.Body,null,s.a.createElement(w.a.Title,null,"Ottawa"),s.a.createElement(w.a.Text,null,"Born in Pakistan, my family moved to Canada when I was very young and we first settled in the country's capital, Ottawa.")),s.a.createElement(w.a.Footer,null,s.a.createElement("small",{className:"text-muted"},"Image by ",s.a.createElement("a",{href:"https://pixabay.com/users/DEZALB-1045091/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=893534"},"Albert Dezetter")," from ",s.a.createElement("a",{href:"https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=893534"},"Pixabay")))),s.a.createElement(w.a,{"data-aos":"fade-up","data-aos-delay":"50"},s.a.createElement(w.a.Img,{variant:"top",src:"https://i.ibb.co/XzLSPyy/sauga.jpg",title:"Absolute World"}),s.a.createElement(w.a.Body,null,s.a.createElement(w.a.Title,null,"Mississauga"),s.a.createElement(w.a.Text,null,"We lived in Ottawa for a short while and then moved to Brampton and then again settled in Mississauga where I have spent most of my life growing up. Yes, we move a lot.")),s.a.createElement(w.a.Footer,null,s.a.createElement("small",{className:"text-muted"},"Image by ",s.a.createElement("a",{href:"https://unsplash.com/@vanveenjf"},"VanveenJF")," from ",s.a.createElement("a",{href:"https://unsplash.com/"},"Unsplash")))),s.a.createElement(w.a,{"data-aos":"fade-up","data-aos-delay":"100"},s.a.createElement(w.a.Img,{variant:"top",src:"https://live.staticflickr.com/2829/34171818601_23521f8218_z.jpg",height:"268.375px",title:"The Bergeron Centre for Engineering Excellence"}),s.a.createElement(w.a.Body,null,s.a.createElement(w.a.Title,null,"Bergeron Centre @ YorkU"),s.a.createElement(w.a.Text,null,"Then, I attended York University for Computer Science and learned many different things, including how to approach and solve a variety of software problems.")),s.a.createElement(w.a.Footer,null,s.a.createElement("small",{className:"text-muted"},"Image by ",s.a.createElement("a",{"data-flickr-embed":"true",href:"https://www.flickr.com/photos/empty_quarter/34171818601/",title:"Bergeron [Explored]"},"Empty Quarter")," from ",s.a.createElement("a",{href:"https://www.flickr.com/"},"Flickr"))))))}}]),a}(n.Component),y=t(402),j=t(8),C=t(400),S=t(401),T=t(129),x=(t(374),t(375),t(123)),O=t.n(x),M=t(124),I=t.n(M),H=t(125),P=t.n(H),_=t(126),A=t.n(_),D=t(127),B=t.n(D),L=t(128),W=t.n(L);function F(e){return s.a.createElement("div",null,s.a.createElement(j.a,{className:"modal-tp",size:"lg",show:e.show,onHide:e.hide,centered:!0},s.a.createElement(j.a.Header,{className:"mod-header"}),s.a.createElement(j.a.Header,null,s.a.createElement(j.a.Title,{className:"project-title"},s.a.createElement("h3",null,"TEXT GAME"))),s.a.createElement(j.a.Body,null,s.a.createElement("p",{className:"project-text"},'"Spellsword" was one of the first games developed in my journey to learning game development using Unity. The game is quite simple, at each section the player is given multiple options to choose from and the outcomes depend on the previous choices made.'),s.a.createElement("p",{className:"project-text"},"The game logic was developed using C# and the various graphics and UI were created in Unity. The C# scripts were attached to different game objects in Unity to make a functioning game."),s.a.createElement("div",{className:"project-used"},s.a.createElement("span",{className:"project-link"},"Unity"),s.a.createElement("span",{className:"project-link"},"C#"))),s.a.createElement(j.a.Footer,null,s.a.createElement(u.a,{className:"close-btn",variant:"secondary",onClick:e.click},"Close"),s.a.createElement(u.a,{className:"project-btn",onClick:function(e){e.preventDefault(),window.open("https://motalhak.github.io/Spellsword/")}},"Demo"),s.a.createElement(u.a,{className:"project-btn",onClick:function(e){e.preventDefault(),window.open("https://github.com/MoTalhaK/Spellsword")}},"Source"))))}function G(e){return s.a.createElement("div",null,s.a.createElement(j.a,{className:"modal-wp",size:"lg",show:e.show,onHide:e.hide,centered:!0},s.a.createElement(j.a.Header,{className:"mod-header"}),s.a.createElement(j.a.Header,null,s.a.createElement(j.a.Title,{className:"project-title"},s.a.createElement("h3",null,"WEATHER APP"))),s.a.createElement(j.a.Body,null,s.a.createElement("p",{className:"project-text"},"A weather web app that displays the current weather in any city around the world! This was a fun experience as I got to work with new APIs that I had not worked with before and gained more knowledge on front-end web development."),s.a.createElement("p",{className:"project-text"},"Built with React and obtained location information using Google Places API and weather statistics obtained from the OpenWeatherMap API. Auto-complete feature provides users with a seamless experience."),s.a.createElement("div",{className:"project-used"},s.a.createElement("span",{className:"project-link"},"React"),s.a.createElement("span",{className:"project-link"},"JavaScript"),s.a.createElement("span",{className:"project-link"},"Bootstrap"),s.a.createElement("span",{className:"project-link"},"CSS"),s.a.createElement("span",{className:"project-link"},"OpenWeatherMap API"),s.a.createElement("span",{className:"project-link"},"Google Places API"),s.a.createElement("span",{className:"project-link"},"Firebase"))),s.a.createElement(j.a.Footer,null,s.a.createElement(u.a,{className:"close-btn",variant:"secondary",onClick:e.click},"Close"),s.a.createElement(u.a,{className:"project-btn",onClick:function(e){e.preventDefault(),window.open("https://starrysky.icu/")}},"Demo"),s.a.createElement(u.a,{className:"project-btn",onClick:function(e){e.preventDefault(),window.open("https://github.com/MoTalhaK/WeatherApp")}},"Source"))))}function K(e){return s.a.createElement("div",null,s.a.createElement(j.a,{className:"modal-pp",size:"lg",show:e.show,onHide:e.hide,centered:!0},s.a.createElement(j.a.Header,{className:"mod-header"}),s.a.createElement(j.a.Header,null,s.a.createElement(j.a.Title,{className:"project-title"},s.a.createElement("h3",null,"PERSONAL WEBSITE"))),s.a.createElement(j.a.Body,null,s.a.createElement("p",{className:"project-text"},"The website you see here was created to showcase the various projects I created in my free time and during my undergrad. This was a fun project to take on as I was able to completely design the website the way I wanted from the ground up, including the UI/UX and the backend."),s.a.createElement("p",{className:"project-text"},"All React for the frontend along with extensive use of CSS to allow for a friendly viewing experience. The backend for handling email requests was built using Node.js + Nodemailer transports."),s.a.createElement("div",{className:"project-used"},s.a.createElement("span",{className:"project-link"},"React"),s.a.createElement("span",{className:"project-link"},"JavaScript"),s.a.createElement("span",{className:"project-link"},"Bootstrap"),s.a.createElement("span",{className:"project-link"},"CSS"),s.a.createElement("span",{className:"project-link"},"Node"),s.a.createElement("span",{className:"project-link"},"Nodemailer"),s.a.createElement("span",{className:"project-link"},"Axios"),s.a.createElement("span",{className:"project-link"},"Firebase"))),s.a.createElement(j.a.Footer,null,s.a.createElement(u.a,{className:"close-btn",variant:"secondary",onClick:e.click},"Close"),s.a.createElement(u.a,{className:"project-btn",onClick:function(e){e.preventDefault(),window.open("https://mkhokhar.me/")}},"Demo"),s.a.createElement(u.a,{className:"project-btn",onClick:function(e){e.preventDefault(),window.open("https://github.com/MoTalhaK/personal-website")}},"Source"))))}function z(e){return s.a.createElement("div",null,s.a.createElement(j.a,{className:"modal-jp",size:"lg",show:e.show,onHide:e.hide,centered:!0},s.a.createElement(j.a.Header,{className:"mod-header"}),s.a.createElement(j.a.Header,null,s.a.createElement(j.a.Title,{className:"project-title"},s.a.createElement("h3",null,"JAVA GAME"))),s.a.createElement(j.a.Body,null,s.a.createElement("p",{className:"project-text"},'"Oefen", a tower defense-like developed with a friend as a hobby project. In a traditional tower defense game the player places towers to defend against hordes of enemies. In "Oefen", the objective is the same, except you are up against a computer or another player and both of you have entire control over the board by placing both monsters and towers to crush your opponent.'),s.a.createElement("p",{className:"project-text"},"This game was developed entirely in Java for Windows desktop and Android/iOS. This was one of the first projects, besides school related work, where I applied OOP concepts such as polymorphism and inheritance extensively. To build the game graphics and animations we used a Java game development framework called LibGDX which provides an API for Windows, iOS and Android. Finally, player data was stored using JSON arrays."),s.a.createElement("div",{className:"project-used"},s.a.createElement("span",{className:"project-link"},"Java"),s.a.createElement("span",{className:"project-link"},"LibGDX"))),s.a.createElement(j.a.Footer,null,s.a.createElement(u.a,{className:"close-btn",variant:"secondary",onClick:e.click},"Close"),s.a.createElement(u.a,{className:"project-btn",onClick:function(e){e.preventDefault(),window.open("https://github.com/slymask3/Oefen")}},"Source"))))}function J(e){return s.a.createElement("div",null,s.a.createElement(j.a,{className:"modal-kp",size:"lg",show:e.show,onHide:e.hide,centered:!0},s.a.createElement(j.a.Header,{className:"mod-header"}),s.a.createElement(j.a.Header,null,s.a.createElement(j.a.Title,{className:"project-title"},s.a.createElement("h3",null,"K-MEANS CLUSTERING"))),s.a.createElement(j.a.Body,null,s.a.createElement("p",{className:"project-text"},"As part of a machine learning class I took in my 4th year of undergrad, I was given the opportunity to develop a k-means clustering algorithm and visualize the results in Python. Analysis was based on the ",s.a.createElement("span",{className:"project-italics"},"seeds")," data set which consists of three different kinds of wheat: Karma, Rosa and Canadian. In addition to this data, I analyzed clustering on a 2-D and 3-D ",s.a.createElement("span",{className:"project-italics"},"points")," data set."),s.a.createElement("p",{className:"project-text"},"Programmed entirely in Python using only the pandas, numpy and matplotlib libraries. The program implements the general k-means algorithm."),s.a.createElement("div",{className:"project-used"},s.a.createElement("span",{className:"project-link"},"Python"),s.a.createElement("span",{className:"project-link"},"Pandas"),s.a.createElement("span",{className:"project-link"},"Numpy"),s.a.createElement("span",{className:"project-link"},"Data Analysis"))),s.a.createElement(j.a.Footer,null,s.a.createElement(u.a,{className:"close-btn",variant:"secondary",onClick:e.click},"Close"),s.a.createElement(u.a,{className:"project-btn",onClick:function(e){e.preventDefault(),window.open("https://github.com/MoTalhaK/K-Means-Clustering")}},"Source"))))}function U(e){return s.a.createElement("div",null,s.a.createElement(j.a,{className:"modal-dp",size:"lg",show:e.show,onHide:e.hide,centered:!0},s.a.createElement(j.a.Header,{className:"mod-header"}),s.a.createElement(j.a.Header,null,s.a.createElement(j.a.Title,{className:"project-title"},s.a.createElement("h3",null,"BUG PREDICTION"))),s.a.createElement(j.a.Body,null,s.a.createElement("p",{className:"project-text"},'In the final project for my "Software Testing" class, I was tasked with developing a set of machine learning models that would predict buggy instances of code in a set of open source projects. The projects analyzed were the Xorg, JDT, Lucene, and Jackrabbit repositories.'),s.a.createElement("p",{className:"project-text"},"The machine learning models were built in Python using the sklearn library. The models included Gaussian naive bayes, decision tree, random forests, logistic regression, support vector machine, and neural network classifiers. The initial performance of the classifiers was rather poor so to improve the results, a new feature set was constructed using a bag-of-words model. For even more improvements, resampling was performed on the dataset."),s.a.createElement("div",{className:"project-used"},s.a.createElement("span",{className:"project-link"},"Python"),s.a.createElement("span",{className:"project-link"},"NLP"),s.a.createElement("span",{className:"project-link"},"sklearn"),s.a.createElement("span",{className:"project-link"},"Pandas"))),s.a.createElement(j.a.Footer,null,s.a.createElement(u.a,{className:"close-btn",variant:"secondary",onClick:e.click},"Close"),s.a.createElement(u.a,{className:"project-btn",onClick:function(e){e.preventDefault(),window.open("https://github.com/MoTalhaK/4313Project")}},"Source"))))}b.a.init();var R=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleMouseHover=t.handleMouseHover.bind(Object(p.a)(Object(p.a)(t))),t.handleShow=t.handleShow.bind(Object(p.a)(Object(p.a)(t))),t.handleClose=t.handleClose.bind(Object(p.a)(Object(p.a)(t))),t.state={isHovering:!1,showMessage1:!1,showMessage2:!1,showMessage3:!1,showMessage4:!1,showMessage5:!1,showMessage6:!1,show:!1},t.onClickHandler=t.onClickHandler.bind(Object(p.a)(Object(p.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleShow",value:function(e){e.preventDefault(),this.setState({show:!0})}},{key:"handleClose",value:function(){this.setState({showMessage1:!1,showMessage2:!1,showMessage3:!1,showMessage4:!1,showMessage5:!1,showMessage6:!1})}},{key:"handleMouseHover",value:function(){this.setState(this.toggleHoverState)}},{key:"toggleHoverState",value:function(e){return{isHovering:!e.isHovering}}},{key:"onClickHandler",value:function(e,a){switch(e.preventDefault(),a){case"showMessage1":this.setState({showMessage1:!this.state.showMessage1});break;case"showMessage2":this.setState({showMessage2:!this.state.showMessage2});break;case"showMessage3":this.setState({showMessage3:!this.state.showMessage3});break;case"showMessage4":this.setState({showMessage4:!this.state.showMessage4});break;case"showMessage5":this.setState({showMessage5:!this.state.showMessage5});break;case"showMessage6":this.setState({showMessage6:!this.state.showMessage6});break;default:return null}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"portfolio-container"},s.a.createElement("div",{className:"portfolio-fade","data-aos":"fade-up"},s.a.createElement("h2",{id:"header-title"},"PORTFOLIO"),s.a.createElement("div",{className:"header-title-bar"}),s.a.createElement("p",{className:"portfolio-text"},"Here are a few things I've created recently."),s.a.createElement("p",{className:"portfolio-text"},"Click on a project to find out more!")),s.a.createElement(F,{show:this.state.showMessage1,hide:this.handleClose,click:this.handleClose}),s.a.createElement(G,{show:this.state.showMessage2,hide:this.handleClose,click:this.handleClose}),s.a.createElement(K,{show:this.state.showMessage3,hide:this.handleClose,click:this.handleClose}),s.a.createElement(z,{show:this.state.showMessage4,hide:this.handleClose,click:this.handleClose}),s.a.createElement(J,{show:this.state.showMessage5,hide:this.handleClose,click:this.handleClose}),s.a.createElement(U,{show:this.state.showMessage6,hide:this.handleClose,click:this.handleClose}),s.a.createElement(C.a,{"data-aos":"fade-up"},s.a.createElement(S.a,null,s.a.createElement(T.a,{xs:12,md:4},s.a.createElement("div",{className:"image-container"},s.a.createElement("div",{className:"content"},s.a.createElement("a",{id:"text-game",href:"",target:"_blank",onClick:function(a){return e.onClickHandler(a,"showMessage1")}},s.a.createElement("div",{className:"content-overlay"}),s.a.createElement(y.a,{className:"content-image",src:O.a,rounded:!0}),s.a.createElement("div",{className:"content-details fadeIn-bottom"},s.a.createElement("h3",{className:"content-title"},"Text Game"),s.a.createElement("p",{className:"content-text"},"Unity"),s.a.createElement("i",{className:"fas fa-plus-circle"})))))),s.a.createElement(T.a,{xs:12,md:4},s.a.createElement("div",{className:"image-container"},s.a.createElement("div",{className:"content"},s.a.createElement("a",{id:"weather-project",href:"/",target:"_blank",onClick:function(a){return e.onClickHandler(a,"showMessage2")}},s.a.createElement("div",{className:"content-overlay"}),s.a.createElement(y.a,{className:"content-image",src:I.a,rounded:!0}),s.a.createElement("div",{className:"content-details fadeIn-bottom"},s.a.createElement("h3",{className:"content-title"},"Starrysky"),s.a.createElement("p",{className:"content-text"},"Web Development"),s.a.createElement("i",{className:"fas fa-plus-circle"})))))),s.a.createElement(T.a,{xs:12,md:4},s.a.createElement("div",{className:"image-container"},s.a.createElement("div",{className:"content"},s.a.createElement("a",{href:"/",target:"_blank",onClick:function(a){return e.onClickHandler(a,"showMessage3")}},s.a.createElement("div",{className:"content-overlay"}),s.a.createElement(y.a,{className:"content-image",src:P.a,rounded:!0}),s.a.createElement("div",{className:"content-details fadeIn-bottom"},s.a.createElement("h3",{className:"content-title"},"Personal Website"),s.a.createElement("p",{className:"content-text"},"Web Development"),s.a.createElement("i",{className:"fas fa-plus-circle"})))))),s.a.createElement(T.a,{xs:12,md:4},s.a.createElement("div",{className:"image-container"},s.a.createElement("div",{className:"content"},s.a.createElement("a",{href:"/",target:"_blank",onClick:function(a){return e.onClickHandler(a,"showMessage4")}},s.a.createElement("div",{className:"content-overlay"}),s.a.createElement(y.a,{className:"content-image",src:A.a,rounded:!0}),s.a.createElement("div",{className:"content-details fadeIn-bottom"},s.a.createElement("h3",{className:"content-title"},"Tower Defense"),s.a.createElement("p",{className:"content-text"},"Java Game"),s.a.createElement("i",{className:"fas fa-plus-circle"})))))),s.a.createElement(T.a,{xs:12,md:4},s.a.createElement("div",{className:"image-container"},s.a.createElement("div",{className:"content"},s.a.createElement("a",{href:"/",target:"_blank",onClick:function(a){return e.onClickHandler(a,"showMessage5")}},s.a.createElement("div",{className:"content-overlay"}),s.a.createElement(y.a,{className:"content-image",src:B.a,rounded:!0}),s.a.createElement("div",{className:"content-details fadeIn-bottom"},s.a.createElement("h3",{className:"content-title"},"K-Means Clustering"),s.a.createElement("p",{className:"content-text"},"Python"),s.a.createElement("i",{className:"fas fa-plus-circle"})))))),s.a.createElement(T.a,{xs:12,md:4},s.a.createElement("div",{className:"image-container"},s.a.createElement("div",{className:"content"},s.a.createElement("a",{href:"/",target:"_blank",onClick:function(a){return e.onClickHandler(a,"showMessage6")}},s.a.createElement("div",{className:"content-overlay"}),s.a.createElement(y.a,{className:"content-image",src:W.a,rounded:!0}),s.a.createElement("div",{className:"content-details fadeIn-bottom"},s.a.createElement("h3",{className:"content-title"},"Defect Prediction"),s.a.createElement("p",{className:"content-text"},"Python"),s.a.createElement("i",{className:"fas fa-plus-circle"})))))))))}}]),a}(n.Component),q=t(134),X=t(32),Y=t(135),V=t.n(Y);t(392);b.a.init();var Q=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleFields=function(e){return t.setState(Object(q.a)({},e.target.name,e.target.value))},t.state={name:"",email:"",message:"",errors:[]},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"hasError",value:function(e){return-1!==this.state.errors.indexOf(e)}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=[];if(""===this.state.name&&t.push("name"),this.setState({errors:t}),t.length>0)return!1;V()({method:"POST",url:"https://us-central1-personal-website-82c41.cloudfunctions.net/send",data:this.state}).then(function(e){"success"===e.data.status?(alert("Message Sent."),a.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")})}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return s.a.createElement("div",{className:"contact-container","data-aos":"fade-up"},s.a.createElement("h2",{id:"header-title-contact"},"CONTACT"),s.a.createElement("div",{id:"header-title-bar"}),s.a.createElement("p",{className:"contact-text"},"Let's get in touch!"),s.a.createElement("div",{className:"form-container","data-aos":"zoom-in"},s.a.createElement(X.a,{onSubmit:this.handleSubmit.bind(this),method:"POST"},s.a.createElement(X.a.Group,{controlId:"formGroupName"},s.a.createElement(X.a.Control,{name:"name",type:"name",placeholder:"Name",value:this.state.name,onChange:this.handleFields,required:!0})),s.a.createElement(X.a.Group,{controlId:"formGroupEmail"},s.a.createElement(X.a.Control,{name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleFields,required:!0})),s.a.createElement(X.a.Group,{controlId:"formGroupMessage"},s.a.createElement(X.a.Control,{name:"message",as:"textarea",rows:"6",type:"message",placeholder:"Message",value:this.state.message,onChange:this.handleFields,required:!0})),s.a.createElement("div",{className:"submit-div"},s.a.createElement(u.a,{variant:"secondary",type:"submit",className:"btn-submit"},"Submit")))))}}]),a}(n.Component),Z=(t(393),function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"footer-container"},s.a.createElement("footer",null,s.a.createElement("div",{className:"profile-links"},s.a.createElement("a",{href:"https://github.com/MoTalhaK",target:"_blank"},s.a.createElement("i",{className:"fab fa-github"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/muhammadkh/",target:"_blank"},s.a.createElement("i",{className:"fab fa-linkedin"})),s.a.createElement("a",{href:"https://www.dropbox.com/s/rgj1sm0ab0clqxs/talha_khokhar_resume.pdf?dl=0",target:"_blank"},s.a.createElement("i",{className:"fas fa-file-pdf"}))),s.a.createElement("div",{className:"footnote"},"Talha Khokhar ",s.a.createElement("span",{className:"copyright"},"\xa9 2020"))))}}]),a}(n.Component)),$=(t(394),function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"skills-container"},s.a.createElement("div",{className:"skills-fade","data-aos":"fade-up"},s.a.createElement("h2",{id:"header-title"},"SKILLS"),s.a.createElement("div",{className:"header-title-bar"}),s.a.createElement("p",{className:"skills-text"},"I've worked with a variety of programming languages with a large emphasis on Java in my undergrad. Along the way I picked up Python and web development technologies like HTML/CSS and Javascript, which are a blast to work with."),s.a.createElement("p",{className:"skills-text"},"Check out the tech stack I've been working with recently!")),s.a.createElement("div",{className:"prog-container","data-aos":"fade-up"},s.a.createElement("div",{className:"prog-info"},s.a.createElement("div",{className:"prog-header"},s.a.createElement("div",{className:"prog-buttons"},s.a.createElement("div",{className:"prog-button btn-1"}),s.a.createElement("div",{className:"prog-button btn-2"}),s.a.createElement("div",{className:"prog-button btn-3"})),s.a.createElement("p",{className:"prog-header-text"},"TechnicalSkills.js")),s.a.createElement("div",{className:"prog-content"},s.a.createElement("p",{className:"var"},"var ",s.a.createElement("span",{className:"prog-text"},"languages = ",s.a.createElement("span",{className:"comma-bracket"},"[",s.a.createElement("span",{className:"prog-details"},'"Java"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"Python"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"C#"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"Bash"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"C"'))))))))),"]"))),s.a.createElement("div",{className:"margin-space"}),s.a.createElement("p",{className:"var"},"var ",s.a.createElement("span",{className:"prog-text"},"webStack = ",s.a.createElement("span",{className:"comma-bracket"},"[",s.a.createElement("span",{className:"prog-details"},'"HTML/CSS"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"JavaScript"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"React"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"Bootstrap"'))))))),"]"))),s.a.createElement("div",{className:"margin-space"}),s.a.createElement("p",{className:"var"},"var ",s.a.createElement("span",{className:"prog-text"},"tools = ",s.a.createElement("span",{className:"comma-bracket"},"[",s.a.createElement("span",{className:"prog-details"},'"Node.js"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"Git"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"Unity"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"vim"'))))))),"]"))),s.a.createElement("div",{className:"margin-space"}),s.a.createElement("p",{className:"var"},"var ",s.a.createElement("span",{className:"prog-text"},"software = ",s.a.createElement("span",{className:"comma-bracket"},"[",s.a.createElement("span",{className:"prog-details"},'"PSQL"',s.a.createElement("span",{className:"comma-bracket"},", ",s.a.createElement("span",{className:"prog-details"},'"Windows/Linux"'))),"]")))))))}}]),a}(n.Component)),ee=(t(395),function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(h.Element,{name:"home-element"},s.a.createElement("div",{className:"section home-section"},s.a.createElement("div",{className:"section-container home-component"},s.a.createElement(g,null)))),s.a.createElement(h.Element,{name:"about-element"},s.a.createElement("div",{className:"section about-section"},s.a.createElement("div",{className:"section-container about-component"},s.a.createElement(k,null)))),s.a.createElement(h.Element,{name:"skills-element"},s.a.createElement("div",{className:"section skills-section"},s.a.createElement("div",{className:"section-container skills-component"},s.a.createElement($,null)))),s.a.createElement(h.Element,{name:"portfolio-element"},s.a.createElement("div",{className:"section portfolio-section"},s.a.createElement("div",{className:"section-container portfolio-component"},s.a.createElement(R,null)))),s.a.createElement(h.Element,{name:"contact-element"},s.a.createElement("div",{className:"section contact-section"},s.a.createElement("div",{className:"section-container contact-component"},s.a.createElement(Q,null)))),s.a.createElement("div",{className:"section footer-section"},s.a.createElement("div",{className:"section-container footer-component"},s.a.createElement(Z,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.4ad40b4b.chunk.js.map