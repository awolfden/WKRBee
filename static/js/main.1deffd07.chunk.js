(window.webpackJsonpwkrbee_react=window.webpackJsonpwkrbee_react||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/beeLogo_large.bd81c434.png"},62:function(e,t,a){e.exports=a.p+"static/media/beehive.09f2e51e.png"},74:function(e,t,a){e.exports=a(89)},79:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(0),l=a.n(r),o=a(7),i=a.n(o),s=(a(79),a(11)),c=a.n(s),m=a(17),d=a(13),u=a(128),p=a(130),g=a(131),f=a(126),b=a(125),h=a(62),E=a.n(h);function y(e){var t=e.children,a=e.window,n=Object(b.a)({disableHysteresis:!0,threshold:0,target:a?a():void 0});return l.a.cloneElement(t,{elevation:n?4:0})}var v=Object(d.b)((function(e){return{logged:e.logged}}))((function(e){var t=function(){var t=Object(m.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:9001/users/logout",{method:"GET",credentials:"include"});case 3:return a=t.sent,t.next=6,a.json();case 6:"logged user out"===t.sent.data&&e.dispatch({type:"LOGOUT",payload:!1}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null),l.a.createElement(y,e,l.a.createElement(u.a,null,l.a.createElement(p.a,null,l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("img",{src:E.a,alt:"worker bee logo",style:{height:"50px",paddingRight:"25px"}}),l.a.createElement(g.a,{variant:"h6"},"WorkerBee")),e.logged?l.a.createElement(g.a,{onClick:t,variant:"h6",id:"logout"},"Logout"):l.a.createElement(g.a,{variant:"h6",id:"logout"})))),l.a.createElement(p.a,null))})),O=a(42),N=a.n(O),w=a(43),j=a(24),k=a(65),x=a(66),C=a(70),S=a(132),D=a(136),B=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(k.a)(this,Object(x.a)(t).call(this,e))).onSubmitRegister=function(){var e=Object(m.a)(c.a.mark((function e(t,n){var r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://wkrbee-api.herokuapp.com/users/register",{method:"POST",credentials:"include",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:"User name not available"!==(l=e.sent).data?a.props.dispatch({type:"LOGIN",payload:l.data.usersDbId}):a.setState({logFailMsg:"User Name Not Available"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}(),a.onSubmitLogin=function(){var e=Object(m.a)(c.a.mark((function e(t,n){var r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://wkrbee-api.herokuapp.com/users/login",{method:"POST",credentials:"include",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:"login successful"===(l=e.sent).data.msg?a.props.dispatch({type:"LOGIN",payload:l.data.usersDbId}):a.setState({logFailMsg:"Credentials Incorrect"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){a.setState(Object(n.a)({},e.currentTarget.name,e.currentTarget.value))},a.whichSubmit=function(e,t){return t.preventDefault(),"Login"===a.props.title?a.onSubmitLogin(e,t):"Sign Up"===a.props.title?a.onSubmitRegister(e,t):void 0},a.state={userName:"",password:""},a}return Object(C.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.whichSubmit.bind(null,this.state),className:"loginForm"},l.a.createElement("h3",null,this.props.title),this.state.logFailMsg?l.a.createElement("p",{className:"logFail"},this.state.logFailMsg):null,l.a.createElement("div",null,l.a.createElement(S.a,{field:"identifier",name:"userName",onChange:this.onChange,placeholder:"Username",inputProps:{"aria-label":"description"}}),l.a.createElement(S.a,{field:"identifier",name:"password",onChange:this.onChange,placeholder:"Password",type:"password",inputProps:{"aria-label":"description"}})),l.a.createElement("div",null,l.a.createElement(D.a,{type:"submit",variant:"contained",color:"primary"},"Submit")))}}]),t}(l.a.Component),I=Object(d.b)((function(e){return{state:e}}))(B);var P=function(){return l.a.createElement("div",{id:"auth"},l.a.createElement("div",{className:"authScreenHeading"},l.a.createElement("h1",null,"Welcome to WorkerBee!"),l.a.createElement("h2",null,"Please Log In or Sign Up to Manage your Hive")),l.a.createElement("div",{className:"authScreenFormsContainer"},l.a.createElement("div",{className:"authScreenLogoDiv"},l.a.createElement("img",{className:"authScreenLogo",src:N.a,alt:"workerbee logo"}),l.a.createElement("p",{className:"authDescription"},"WokerBee is an integrated employee management system for the modern business.")),l.a.createElement("div",{className:"authScreenFormsDiv"},l.a.createElement(I,{title:"Login",name:"userName",password:"password",action:"login_user"}),l.a.createElement(I,{title:"Sign Up",name:"password",password:"password",action:"create_user"}))))},T=a(26),F=a(63),L=a(137),A=a(133),_=a(92),H=a(135);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var R=Object(F.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"1px solid #000",borderRadius:5,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},button:{backgroundColor:e.palette.secondary.light},modalButton:{backgroundColor:e.palette.secondary.light,border:"1px solid green",marginTop:20,float:"right"},modalDeleteButton:{backgroundColor:e.palette.secondary.light,border:"1px solid #7008036c",marginTop:20,float:"left"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));var U=Object(d.b)((function(e){return{state:e,allEmployees:e.employees}}))((function(e){var t=R(),a=l.a.useState(!1),o=Object(T.a)(a,2),i=o[0],s=o[1],d=e.employeeId,u=e.allEmployees.filter((function(e){return e._id===d}))[0],p=function(){s(!1)},g=l.a.useState({firstName:"",middleInitial:"",lastName:"",status:"",dateOfHire:"",dateOfBirth:"",id:""}),f=Object(T.a)(g,2),b=f[0],h=f[1];Object(r.useEffect)((function(){h({firstName:u.firstName,middleInitial:u.middleInitial,lastName:u.lastName,status:u.status,dateOfHire:u.dateOfEmployment,dateOfBirth:u.dateOfBirth,id:u._id})}),[u]);var E=function(e){return function(t){h(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},b,Object(n.a)({},e,t.target.value)))}},y=function(){var t=Object(m.a)(c.a.mark((function t(a,n){var r,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch("https://cors-anywhere.herokuapp.com/https://wkrbee-api.herokuapp.com/employees/"+u._id,{method:"PUT",credentials:"include",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 4:return r=t.sent,t.next=7,r.json();case 7:l=t.sent,console.log(l),e.getEmployees(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,a){return t.apply(this,arguments)}}(),v=function(){var t=Object(m.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://cors-anywhere.herokuapp.com/https://wkrbee-api.herokuapp.com/employees/".concat(a),{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:200===t.sent.status&&e.getEmployees(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("button",{className:t.button,type:"button",onClick:function(){s(!0)}},"Edit Employee"),l.a.createElement(L.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:i,onClose:p,closeAfterTransition:!0,BackdropComponent:A.a,BackdropProps:{timeout:500}},l.a.createElement(_.a,{in:i},l.a.createElement("div",{className:t.paper},l.a.createElement("h2",{id:"transition-modal-title"},"Edit ",u.firstName," ",u.middleInitial," ",u.lastName),l.a.createElement("form",{onSubmit:y.bind(null,b)},l.a.createElement("div",{className:"modalDiv"},l.a.createElement("div",null,l.a.createElement(H.a,{id:"standard-name",label:"First Name",name:"firstName",className:t.textField,value:b.firstName,onChange:E("firstName"),margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Middle Initial",name:"middleInitial",className:t.textField,value:b.middleInitial,onChange:E("middleInitial"),margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Last Name",name:"lastName",className:t.textField,value:b.lastName,onChange:E("lastName"),margin:"normal"})),l.a.createElement("div",null,l.a.createElement(H.a,{id:"standard-name",label:"Employment Status",name:"status",className:t.textField,value:"ACTIVE",margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Date Of Hire: ",name:"dateOfHire",className:t.textField,value:b.dateOfHire,onChange:E("dateOfHire"),margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Date of Birth",name:"dateOfBirth",className:t.textField,value:b.dateOfBirth,onChange:E("dateOfBirth"),margin:"normal"}))),l.a.createElement(D.a,{onClick:function(){return v(u._id)},variant:"contained",className:t.modalDeleteButton},"Deactivate Employee"),l.a.createElement(D.a,{type:"submit",onClick:p,variant:"contained",className:t.modalButton},"Submit Changes"))))))})),G=Object(F.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"1px solid #000",borderRadius:5,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},button:{backgroundColor:e.palette.secondary.light},modalButton:{backgroundColor:e.palette.secondary.light,border:"1px solid green",marginTop:20,float:"right"},modalDeleteButton:{backgroundColor:e.palette.secondary.light,border:"1px solid #7008036c",marginTop:20,float:"left"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),minWidth:200}}}));var W=Object(d.b)((function(e){return{allEmployees:e.employees}}))((function(e){var t=G(),a=l.a.useState(!1),n=Object(T.a)(a,2),r=n[0],o=n[1],i=e.employeeId,s=e.allEmployees.filter((function(e){return e._id===i}))[0],c=function(e){e.preventDefault(),o(!1)};return l.a.createElement("div",null,l.a.createElement("button",{className:t.button,type:"button",onClick:function(){o(!0)}},"View Employee"),l.a.createElement(L.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:r,onClose:c,closeAfterTransition:!0,BackdropComponent:A.a,BackdropProps:{timeout:500}},l.a.createElement(_.a,{in:r},l.a.createElement("div",{className:t.paper},l.a.createElement("h2",{id:"transition-modal-title"},s.firstName," ",s.middleInitial," ",s.lastName),l.a.createElement("form",null,l.a.createElement("div",{className:"modalDiv"},l.a.createElement("div",null,l.a.createElement(H.a,{id:"standard-name",label:"First Name",className:t.textField,value:s.firstName,margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Middle Initial",className:t.textField,value:s.middleInitial,margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Last Name",className:t.textField,value:s.lastName,margin:"normal"})),l.a.createElement("div",null,l.a.createElement(H.a,{id:"standard-name",label:"Employment Status",className:t.textField,value:s.status,margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Date Of Hire: ",className:t.textField,value:s.dateOfEmployment,margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Date of Birth",className:t.textField,value:s.dateOfBirth,margin:"normal"})),l.a.createElement(H.a,{id:"standard-name",label:"Employee ID",className:t.textField,value:s._id,margin:"normal"})),l.a.createElement(D.a,{type:"submit",onClick:c,variant:"contained",className:t.modalButton},"Done"))))))}));var V=Object(d.b)((function(e){return{state:e}}))((function(e){var t=e.state.employees.map((function(t,a){return l.a.createElement("tr",{key:a,id:t._id,style:{backgroundColor:function(e){return e%2===0?"#eedfb2":"#ddd9c8"}(a)}},l.a.createElement("td",{className:"tableNameCell",style:{width:"20%",padding:5}},t.firstName," ",t.middleInitial," ",t.lastName),l.a.createElement("td",{className:"tableStatus"},t.status),l.a.createElement("td",{className:"tableDOB"},t.dateOfBirth),l.a.createElement("td",{className:"tableHireDate"},t.dateOfEmployment),l.a.createElement("td",{className:"tableButton"},l.a.createElement(W,{getEmployees:e.getEmployees,employeeId:t._id})),l.a.createElement("td",{className:"tableButton"},l.a.createElement(U,{getEmployees:e.getEmployees,employeeId:t._id})))}));return l.a.createElement(l.a.Fragment,null,t)}));function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Y=Object(F.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"1px solid #000",borderRadius:5,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},button:{backgroundColor:e.palette.secondary.light,marginBottom:10},modalButton:{backgroundColor:e.palette.secondary.light,border:"1px solid green",marginTop:20,marginBottom:20,float:"right"},modalDeleteButton:{backgroundColor:e.palette.secondary.light,border:"1px solid #7008036c",marginTop:20,float:"left"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function z(e){var t=Y(),a=l.a.useState(!1),r=Object(T.a)(a,2),o=r[0],i=r[1],s=function(){i(!1)},d=l.a.useState({firstName:"",middleInitial:"",lastName:"",status:"ACTIVE",dateOfEmployment:"",dateOfBirth:"",id:""}),u=Object(T.a)(d,2),p=u[0],g=u[1],f=function(e){return function(t){g(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},p,Object(n.a)({},e,t.target.value)))}},b=function(){var t=Object(m.a)(c.a.mark((function t(a,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch("https://cors-anywhere.herokuapp.com/https://wkrbee-api.herokuapp.com/employees/",{method:"POST",credentials:"include",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 4:return r=t.sent,t.next=7,r.json();case 7:"successfully added employee"===t.sent.message&&(g({firstName:"",middleInitial:"",lastName:"",status:"ACTIVE",dateOfEmployment:"",dateOfBirth:"",id:""}),e.getEmployees()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("button",{className:t.button,type:"button",onClick:function(){i(!0)}},"Add New Employee"),l.a.createElement(L.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:o,onClose:s,closeAfterTransition:!0,BackdropComponent:A.a,BackdropProps:{timeout:500}},l.a.createElement(_.a,{in:o},l.a.createElement("div",{className:t.paper},l.a.createElement("h2",{id:"transition-modal-title"},"Add New Employee"),l.a.createElement("form",{onSubmit:b.bind(null,p)},l.a.createElement("div",{className:"modalDiv"},l.a.createElement("div",null,l.a.createElement(H.a,{id:"standard-name",label:"First Name",className:t.textField,value:p.firstName,onChange:f("firstName"),margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Middle Initial",className:t.textField,value:p.middleInitial,onChange:f("middleInitial"),margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Last Name",className:t.textField,value:p.lastName,onChange:f("lastName"),margin:"normal"})),l.a.createElement("div",null,l.a.createElement(H.a,{id:"standard-name",label:"Employment Status",className:t.textField,value:"ACTIVE",margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Date Of Hire: ",className:t.textField,value:p.dateOfHire,onChange:f("dateOfEmployment"),margin:"normal"}),l.a.createElement(H.a,{id:"standard-name",label:"Date of Birth",className:t.textField,value:p.dateOfBirth,onChange:f("dateOfBirth"),margin:"normal"}))),l.a.createElement(D.a,{type:"submit",onClick:s,variant:"contained",className:t.modalButton},"Create Employee"))))))}a(86).config();var $=Object(d.b)((function(e){return{state:e}}))((function(e){var t=e.state.employees,a=function(){var t=Object(m.a)(c.a.mark((function t(){var a,n,r,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://wkrbee-api.herokuapp.com/employees");case 3:if(200===(a=t.sent).status){t.next=6;break}throw Error(a.statusText);case 6:return t.next=8,a.json();case 8:n=t.sent,e.state.logged&&(r=n.data,l=r.filter((function(t){return t.user.toString()===e.state.user.toString()})),e.dispatch({type:"GET_EMPLOYEES",payload:l})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),l.a.createElement("div",{className:"indexScreenDiv"},l.a.createElement("div",{className:"indexScreenTitle"},l.a.createElement("h2",null,"Welcome to WorkerBee: Employee management that's sweeter than honey!")),l.a.createElement("div",{className:"indexScreenOrg"},l.a.createElement("h3",null,"Organization: Beehive Inc."),l.a.createElement("h3",null,"Active Employees: ",t.length)),l.a.createElement("div",{className:"indexContentDiv"},l.a.createElement("div",{className:"employeeListDiv"},l.a.createElement(z,{getEmployees:a},"Add New Employee +"),l.a.createElement("table",{className:"table"},l.a.createElement("tr",{style:{width:"100%",color:"gray"}},l.a.createElement("th",{className:"tableNameCell"},"EMPLOYEE NAME"),l.a.createElement("th",{className:"tableStatus"},"STATUS"),l.a.createElement("th",{className:"tableDOB"},"DOB"),l.a.createElement("th",{className:"tableHireDate"},"HIRE DATE"),l.a.createElement("th",null),l.a.createElement("th",null)),l.a.createElement(V,{getEmployees:a}))),l.a.createElement("div",{className:"indexLogoDiv"},l.a.createElement("img",{src:N.a,alt:"bee logo"}))))}));var q=Object(d.b)((function(e){return{logged:e.logged}}))((function(e){return l.a.createElement("div",null,l.a.createElement(v,null),e.logged?l.a.createElement($,null):l.a.createElement(P,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(69),Q=a(138),X=a(46),Z=a(134),ee=a(38);function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ne=Object(K.a)({palette:{primary:{main:"#F2DA8F",light:X.a[400],dark:X.a[400]},secondary:{main:Z.a[900],light:Z.a[100],dark:Z.a[400]}}}),re={employees:[{id:1,firstName:"Add",middleInitial:"Anne",lastName:"Employee",dateOfBirth:"12/4/1986",dateOfEmployment:"9/1/2019",status:"ACTIVE"}],logged:!1,user:""};var le=Object(ee.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return ae({},e,{logged:!0,user:t.payload});case"LOGOUT":return ae({},e,{employees:[{id:1,firstName:"Add",middleInitial:"Anne",lastName:"Employee",dateOfBirth:"12/4/1986",dateOfEmployment:"9/1/2019",status:"ACTIVE"}],logged:!1,user:""});case"SIGNUP":return ae({},e,{logged:!0,user:t.payload});case"GET_EMPLOYEES":return 0===t.payload.length?ae({},e):ae({},e,{employees:t.payload},e.logged,{},e.user);case"CREATE_EMPLOYEE":return ae({},e,{employees:t.payload});default:return e}}));i.a.render(l.a.createElement(d.a,{store:le},l.a.createElement(Q.a,{theme:ne},l.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[74,1,2]]]);
//# sourceMappingURL=main.1deffd07.chunk.js.map