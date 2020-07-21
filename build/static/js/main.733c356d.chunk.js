(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{32:function(t,e,n){t.exports={contactList:"contactList_contactList__3OGdo"}},33:function(t,e,n){},34:function(t,e,n){t.exports=n(66)},39:function(t,e,n){},6:function(t,e,n){t.exports={listItem:"contactListItem_listItem__14smR",listItemP:"contactListItem_listItemP__2jV6x",listItemButton:"contactListItem_listItemButton__fntAa"}},66:function(t,e,n){"use strict";n.r(e);var a,c,o,r=n(0),u=n.n(r),l=n(14),i=n.n(l),s=(n(39),n(8)),m=n(9),d=n(11),b=n(10),h=n(5),C=n(1),f=(n(46),n(7)),E=n.n(f),p=n(2),O=Object(p.b)("contacts/ADD_REQUEST"),g=Object(p.b)("contacts/ADD_SUCCESS"),j=Object(p.b)("contacts/ADD_ERROR"),_=Object(p.b)("contacts/FETCH_REQUEST"),v=Object(p.b)("contacts/FETCH_SUCCESS"),S=Object(p.b)("contacts/FETCH_ERROR"),y=Object(p.b)("contacts/DELETE_REQUEST"),R=Object(p.b)("contacts/DELETE_SUCCESS"),I=Object(p.b)("contacts/DELETE_ERROR"),F=Object(p.b)("contacts/changeFilter"),N={addContactRequest:O,addContactSuccess:g,addContactError:j,fetchContactsRequest:_,fetchContactsSuccess:v,fetchContactsError:S,deleteContactRequest:y,deleteContactSuccess:R,deleteContactError:I,changeContactRequest:Object(p.b)("contacts/CHANGE_CONTACT_REQUEST"),changeContactSuccess:Object(p.b)("contacts/CHANGE_CONTACT_SUCCESS"),changeContactError:Object(p.b)("contacts/CHANGE_CONTACT_ERROR"),changeFilter:F,addIdEditContact:Object(p.b)("contacts/addIdEditContact"),deleteIdEditContact:Object(p.b)("contacts/deleteIdEditContact")},T=n(13),k=n.n(T),L="http://localhost:2020/contacts",D={addContact:function(t,e){return function(n){n(N.addContactRequest()),k.a.post(L,{number:e,name:t}).then((function(t){var e=t.data;n(N.addContactSuccess(e))})).catch((function(t){return n(N.addContactError(t))}))}},deleteContact:function(t){return function(e){e(N.deleteContactRequest()),k.a.delete("".concat(L,"/").concat(t)).then((function(){return e(N.deleteContactSuccess(t))})).catch((function(t){return e(N.deleteContactError(t))}))}},fetchContacts:function(){return function(t){t(N.fetchContactsRequest()),k.a.get(L).then((function(e){var n=e.data;return t(N.fetchContactsSuccess(n))})).catch((function(e){return t(N.fetchContactsError(e))}))}},changeContact:function(t,e,n){return function(a){a(N.changeContactRequest()),k.a.patch("".concat(L,"/").concat(t),{id:t,number:n,name:e}).then(console.log({id:t,number:n,name:e})).then((function(t){var e=t.id,n=t.number,c=t.name;return a(N.changeContactSuccess(e,n,c))})).catch((function(t){return a(N.changeContactError(t))}))}}},w=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,o=t.props.onSubmit;""!==a&&""!==c&&o(a,c),t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return u.a.createElement("form",{className:E.a.editForm,onSubmit:this.handleSubmit},u.a.createElement("label",{className:E.a.label},"Name*",u.a.createElement("input",{className:E.a.input,type:"text",name:"name",value:e,placeholder:"name",onChange:this.handleChange})),u.a.createElement("label",{className:E.a.label},"Phone number*",u.a.createElement("input",{className:E.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,placeholder:"number"})),u.a.createElement("button",{className:E.a.button,type:"submit"},"Add contact"))}}]),n}(r.Component),A=Object(h.b)(null,(function(t){return{onSubmit:function(e,n){return t(D.addContact(e,n))}}}))(w),q=n(32),B=n.n(q),x=n(6),U=n.n(x),H=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.props,a=n.deleteIdEditContact,c=n.changeContact,o=t.state;c(o.name,o.number),a()},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contact,n=t.isShowForm,a=t.addIdEditContact,c=t.deleteContact,o=this.state,r=o.name,l=o.number;return console.log(a),u.a.createElement("li",{className:U.a.listItem},u.a.createElement("p",{className:U.a.listItemP},"name: ",e.name," tel: ",e.number),!n&&u.a.createElement("button",{className:U.a.listItemButton,type:"button",onClick:a},"Start Edit"),u.a.createElement("button",{className:U.a.listItemButton,onClick:c,type:"button"},"Delete"),n&&u.a.createElement("form",{className:U.a.editForm,onSubmit:this.handleSubmit},u.a.createElement("label",{className:U.a.label},"Name*",u.a.createElement("input",{className:U.a.input,type:"text",name:"name",value:r,placeholder:"name",onChange:this.handleChange})),u.a.createElement("label",{className:U.a.label},"Phone number*",u.a.createElement("input",{className:U.a.input,type:"tel",name:"number",value:l,onChange:this.handleChange,placeholder:"number"})),u.a.createElement("button",{className:U.a.button,type:"submit"},"EDIT")))}}]),n}(r.Component),P=Object(h.b)((function(t,e){var n=e.id;return{isShowForm:t.contactsRoot.idEditContact.some((function(t){return t===n}))}}),(function(t,e){var n=e.id;return{deleteContact:function(){return t(D.deleteContact(n))},changeContact:function(e,a){return t(D.changeContact(n,e,a))},addIdEditContact:function(){return t(N.addIdEditContact(n))},deleteIdEditContact:function(){return t(N.deleteIdEditContact(n))}}}))(H),G=Object(h.b)((function(t){var e=t.contactsRoot.filter;return{contacts:t.contactsRoot.contacts.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}}))((function(t){var e=t.contacts;return u.a.createElement("ul",{className:B.a.contactList},e.map((function(t){return u.a.createElement(P,{key:t.id,contact:t,id:t.id})})))})),Q=Object(h.b)((function(t){return{value:t.contactsRoot.filter}}),(function(t){return{onChangeFilter:function(e){return t(N.changeFilter(e))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return u.a.createElement("form",null,u.a.createElement("label",null,"Find contacts by name",u.a.createElement("br",null),u.a.createElement("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)}})))})),J=n(33),M=n.n(J),V=function(){return u.a.createElement("h1",null,"Phonebook")},Z="theme/CHANGE_THEME",z={changeTheme:function(t){return{type:Z,payload:{theme:t}}}},W={light:{headerBg:"#F7B30C",fontColor:"black",bodybg:"white"},dark:{headerBg:"#3c3c3c",fontColor:"white",bodybg:"black"}},K=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.theme,n=t.toggleTheme,a=t.isLoadingContact;return u.a.createElement("div",{style:{color:W[e].fontColor,background:W[e].bodybg}},u.a.createElement("div",null,u.a.createElement(u.a.Fragment,null,u.a.createElement(V,null),a&&u.a.createElement("h2",null,"Loading..."),u.a.createElement("button",{onClick:n},"Change Theme"))),u.a.createElement(A,null),u.a.createElement("h2",{className:M.a.sectionTitle},"Contacts"),u.a.createElement(Q,null),u.a.createElement(G,null))}}]),n}(r.Component),X={toggleTheme:z.changeTheme,onFetchContacts:D.fetchContacts},Y=Object(h.b)((function(t){return{theme:t.theme,isLoadingContact:t.contactsRoot.loading}}),X)(K),$=n(18),tt=n(19),et=n(4),nt=Object(p.c)([],(a={},Object(C.a)(a,N.fetchContactsSuccess,(function(t,e){return e.payload})),Object(C.a)(a,N.addContactSuccess,(function(t,e){return[].concat(Object(tt.a)(t),[e.payload])})),Object(C.a)(a,N.deleteContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),Object(C.a)(a,N.changeContactSuccess,(function(t,e){return t.map((function(t){return t.id===e.payload.contact.id?Object($.a)(Object($.a)({},t),{},{name:e.payload.contact.name,number:e.payload.contact.number}):t}))})),a)),at=Object(p.c)([],(c={},Object(C.a)(c,N.addIdEditContact,(function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[n])})),Object(C.a)(c,N.deleteIdEditContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t!==n}))})),c)),ct=Object(p.c)("",Object(C.a)({},N.changeFilter,(function(t,e){return e.payload}))),ot=Object(p.c)(!1,(o={},Object(C.a)(o,N.fetchContactsRequest,(function(){return!0})),Object(C.a)(o,N.fetchContactsSuccess,(function(){return!1})),Object(C.a)(o,N.fetchContactsError,(function(){return!1})),Object(C.a)(o,N.addContactRequest,(function(){return!0})),Object(C.a)(o,N.addContactSuccess,(function(){return!1})),Object(C.a)(o,N.addContactsError,(function(){return!1})),Object(C.a)(o,N.deleteContactRequest,(function(){return!0})),Object(C.a)(o,N.deleteContactSuccess,(function(){return!1})),Object(C.a)(o,N.deleteContactError,(function(){return!1})),o)),rt=Object(et.c)({contacts:nt,idEditContact:at,filter:ct,loading:ot}),ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Z:return t&&"light"===t?"dark":"light";default:return t}},lt=n(12),it=Object(p.a)({reducer:{theme:ut,contactsRoot:rt},middleware:[lt.a]});i.a.render(u.a.createElement(h.a,{store:it},u.a.createElement(Y,null)),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"contactForm_form__28Wa3",editForm:"contactForm_editForm__ZrVCs",input:"contactForm_input__3LP4-",editInput:"contactForm_editInput__Udf71",button:"contactForm_button__2t1tl",editButton:"contactForm_editButton__2ZzSE",label:"contactForm_label__1axD9"}}},[[34,1,2]]]);
//# sourceMappingURL=main.733c356d.chunk.js.map