(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(5),n=c.n(s),i=c(3),l=c(2),r=c(0);var j=function(e){var t=e.currentPage,c=e.handlePageChange;return Object(r.jsxs)("ul",{className:"nav nav-tabs",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#home",onClick:function(){return c("Home")},className:"Home"===t?"nav-link active":"nav-link",children:Object(r.jsx)(l.c,{})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#about",onClick:function(){return c("About")},className:"About"===t?"nav-link active":"nav-link",children:"About"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#Work",onClick:function(){return c("Work")},className:"Work"===t?"nav-link active":"nav-link",children:"Work"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#contact",onClick:function(){return c("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#resume",onClick:function(){return c("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})})]})};function o(){return Object(r.jsx)("footer",{className:"footerClass",children:Object(r.jsxs)("div",{class:"contact-section",children:[Object(r.jsx)("p",{children:"copyright 2022 \xa9 Tyler Scott"}),Object(r.jsxs)("a",{href:"mailto:Tyl3r.s@outlook.com",children:[" ",Object(r.jsx)(l.a,{})," "]}),Object(r.jsxs)("a",{href:"https://github.com/Tyl3r-s",children:[" ",Object(r.jsx)(l.b,{})," "]}),Object(r.jsxs)("a",{href:"https://www.linkedin.com/in/tyler-scott-a55010238/",children:[" ",Object(r.jsx)(l.d,{})," "]})]})})}function d(){return Object(r.jsx)("section",{className:"landing",children:Object(r.jsx)("div",{className:"landing-container",children:Object(r.jsxs)("div",{className:"landing-title",children:[Object(r.jsx)("h1",{children:"Tyler Scott"}),Object(r.jsxs)("p",{className:"landing-subtitle",children:[".designer"," &",Object(r.jsx)("span",{children:"&"})," ",Object(r.jsx)("span",{children:"('coder');"})]}),Object(r.jsx)("a",{href:"#about-me-section",className:"about-me-button",children:"about me"})]})})})}var b=c.p+"static/media/Me.ca56cd63.jpg";function m(){return Object(r.jsxs)("section",{className:"about-me-section",id:"about-me-section",children:[Object(r.jsxs)("div",{className:"leftCol",children:[Object(r.jsx)("div",{className:"abtTitle",children:Object(r.jsx)("h1",{className:"about-title",children:"Hello World!"})}),Object(r.jsx)("div",{className:"abtText",children:Object(r.jsx)("p",{className:"about-text",children:"Technology has always been a huge fascination of mine, and jumping into code is one of the best decisions I've made in life. I have found a passion for creating succinct and intuitive user experiences, and I take pride in building efficient and organized back-end infrastructure. I truly love the endless discovery and learning that you find in the programming world."})})]}),Object(r.jsxs)("div",{className:"rightCol",children:[Object(r.jsx)("div",{className:"blur"}),Object(r.jsx)("img",{src:b,alt:"",className:"me"})]})]})}function u(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:e.img,className:"card-img-top",alt:"..."}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:e.title}),Object(r.jsx)("p",{className:"card-text",children:e.desc}),Object(r.jsxs)("section",{className:"links",children:[Object(r.jsx)("button",{className:"btn btn-primary",children:"Visit Page"}),Object(r.jsx)("button",{className:"btn btn-primary",children:"Visit Repo"})]})]})]})}var h=[{img:c.p+"static/media/1.7a4c5c34.png",title:"Humble",description:"blah blah blah"},{img:c.p+"static/media/2.55444ace.png",title:"Weather App",description:"aergreagrg"},{img:c.p+"static/media/3.4352ed80.png",title:"Work Day Scheduler",description:"weragwegwgg"},{img:c.p+"static/media/4.bb507c1f.png",title:"Code Quiz",description:"weragwegwgg"}];function O(){return Object(r.jsx)("section",{className:"projects",id:"projects",children:h.map((function(e){return Object(r.jsx)(u,{img:e.img,title:e.title,desc:e.description})}))})}var x=c(6);function p(){var e=Object(a.useState)({name:"",email:"",subject:"",message:""}),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),l=Object(i.a)(n,2),j=l[0],o=l[1],d=function(e){var t,c,a=(t=e.target.name).charAt(0).toUpperCase()+t.slice(1);if("email"===e.target.name){var s=(c=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(c).toLowerCase()));o(s?"":"Please enter a valid email address so I can get in touch with you.")}else e.target.value?o(""):o(a+" is currently blank. Please fill out this field.")};return Object(r.jsx)("section",{className:"hero contact-section",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Contact Me"}),Object(r.jsxs)("form",{action:"#",className:"space-y-8",id:"contact-form",onSubmit:function(e){e.preventDefault(),j||(s(Object(x.a)({},e.target.name,e.target.value)),console.log("Form",c))},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(r.jsx)("input",{type:"text",name:"name",placeholder:"enter name",required:!0,onBlur:d})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"youremail@email.com",required:!0,onBlur:d})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(r.jsx)("input",{type:"text",name:"subject",id:"subject",placeholder:"Subject",required:!0,onBlur:d})]}),Object(r.jsxs)("div",{className:"sm:col-span-2",children:[Object(r.jsx)("label",{htmlFor:"message",children:"Message"}),Object(r.jsx)("textarea",{id:"message",name:"message",rows:"6",placeholder:"Let's work together!",required:!0,onBlur:d})]}),Object(r.jsx)("button",{type:"submit",children:"Send"})," ",Object(r.jsx)("span",{children:Object(r.jsx)("h2",{children:j})})]})]})})}function g(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("dt",{children:e.title}),Object(r.jsx)("dd",{children:e.data})]})}function v(){return Object(r.jsxs)("div",{className:"skills-n-stuff",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Tyler Scott"}),Object(r.jsx)("p",{children:"Full Stack Web Developer"})]}),Object(r.jsxs)("div",{children:[[{title:"University of Toronto",data:"Certificate - Full Stack Web Development"},{title:"Languages",data:"Html, CSS, JavaScript"},{title:"Libraries",data:"jQuery, Bootstrap, Express.js, Node.js, Hanndlebars.js, React.js"},{title:"Databases",data:"MySQL, MongoDB, IndexedDB"},{title:"Tools",data:"Git, Web API, Third-Party API, RESTful API, Sequelize, Mongoose, Webpack"},{title:"Principles",data:"Model-View-Controller, Object-Relational-Mapping, Test Driven Development, Separation of Concerns, DRY, YAGNI, Object Oriented Programming, Documentation"}].map((function(e){return Object(r.jsx)(g,{title:e.title,data:e.data})})),Object(r.jsxs)("div",{children:[Object(r.jsx)("dt",{children:"Download my resume here"}),Object(r.jsxs)("dd",{children:[Object(r.jsx)("span",{children:"tyler_scott_full_stack_developer.pdf"}),Object(r.jsx)("a",{href:"#",download:"Tyler Scott Resume.pdf",children:" Download"})]})]})]})]})}function f(){var e=Object(a.useState)("Home"),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{currentPage:c,handlePageChange:function(e){return s(e)}}),"Home"===c?Object(r.jsx)(d,{}):"About"===c?Object(r.jsx)(m,{}):"Work"===c?Object(r.jsx)(O,{}):"Contact"===c?Object(r.jsx)(p,{}):Object(r.jsx)(v,{}),Object(r.jsx)(o,{})]})}var N=function(){return Object(r.jsx)(f,{})};c(12),c(13);n.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.02d76eec.chunk.js.map