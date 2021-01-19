(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={wrapper:"Filter_wrapper__1G02H",inputName:"Filter_inputName__2w3h3",filter:"Filter_filter__2m1td"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1nT-5",inputName:"ContactForm_inputName__2tNLQ",inputNumber:"ContactForm_inputNumber__11p8B",label:"ContactForm_label__8sLf9",buttonAddContacts:"ContactForm_buttonAddContacts__2JyzQ"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n(13),r=n.n(o),i=n(12),s=n(4),l=n(5),u=n(8),m=n(7),d=n(9),b=n.n(d),p=n(23),j=n(14),h=n(6),_=n(2),f=n.n(_),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onHandleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.addContact(Object(j.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:f.a.form,onSubmit:this.onHandleSubmit,s:!0,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("input",{className:f.a.inputName,type:"text",placeholder:"Enter Name",value:e,name:"name",onChange:this.onHandleChange})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Number",Object(a.jsx)("input",{className:f.a.inputNumber,type:"text",placeholder:"xxx-xx-xx",value:n,name:"number",onChange:this.onHandleChange})]}),Object(a.jsx)("button",{className:f.a.buttonAddContacts,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),x=n(3),O=n.n(x),N=function(t){var e=t.contacts,n=t.deleteContact;return Object(a.jsx)("ul",{className:O.a.list,children:e.map((function(t){return Object(a.jsxs)("li",{className:O.a.listItem,children:[Object(a.jsxs)("h3",{children:[t.name,":"]}),Object(a.jsx)("p",{className:O.a.contactText,children:t.number}),Object(a.jsx)("button",{className:O.a.deleteButton,type:"button","data-id":t.id,onClick:n,children:"Delete"})]},t.id)}))})},v=n(10),w=n.n(v),g=function(t){var e=t.filter,n=t.onHandleFilter;return Object(a.jsxs)("div",{className:w.a.wrapper,children:[Object(a.jsx)("h3",{className:w.a.inputName,children:"Find contacts by name"}),Object(a.jsx)("input",{className:w.a.filter,type:"text",name:"filter",value:e,placeholder:"Filter Name",onChange:function(t){n(t.target.value)}})]})},F=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n={id:Object(p.a)(),name:e.name,number:e.number};t.setState((function(t){return t.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts.")):{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))},t.deleteContact=function(e){var n=e.target.dataset.id;t.setState({contacts:Object(i.a)(t.state.contacts.filter((function(t){return t.id!==n})))})},t.onHandleFilter=function(e){console.log(e),t.setState({filter:e})},t.getFilteredContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContact();return Object(a.jsxs)("div",{className:b.a.wrapper,children:[Object(a.jsx)("h1",{className:b.a.titlePhonebook,children:"Phonebook"}),Object(a.jsx)(C,{addContact:this.addContact}),Object(a.jsx)("h2",{className:b.a.titleContacts,children:"Contacts"}),Object(a.jsx)(g,{filter:t,onHandleFilter:this.onHandleFilter}),Object(a.jsx)(N,{contacts:e,deleteContact:this.deleteContact})]})}}]),n}(c.Component);n(20);r.a.render(Object(a.jsx)(F,{}),document.getElementById("root"))},3:function(t,e,n){t.exports={wrapper:"ContactList_wrapper__2KOWC",list:"ContactList_list__3M3Pe",listItem:"ContactList_listItem__3zmCg",contactText:"ContactList_contactText__1ZI6s",deleteButton:"ContactList_deleteButton__1qbqI"}},9:function(t,e,n){t.exports={wrapper:"App_wrapper__rmH3z",titlePhonebook:"App_titlePhonebook__1wlMd",titleContacts:"App_titleContacts__2i9s5"}}},[[21,1,2]]]);
//# sourceMappingURL=main.c9d20bee.chunk.js.map