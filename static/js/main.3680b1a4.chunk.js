(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,function(e,t,a){e.exports={title:"Task_title__1BwMu",select:"Task_select__2zTQe",label:"Task_label__BTNN-",button:"Task_button__1d5sC","hvr-ripple-in":"Task_hvr-ripple-in__1JSfV"}},function(e,t,a){e.exports={form:"CreateForm_form__2bPcT",title:"CreateForm_title__2UJJI",formInput:"CreateForm_formInput__2N1IP",selectInput:"CreateForm_selectInput__3Q5bi",button:"CreateForm_button__3mRUx","hvr-buzz-out":"CreateForm_hvr-buzz-out__1oJ2d"}},,,,,,,function(e,t,a){e.exports={list:"TaskList_list__2R02X",listItem:"TaskList_listItem__236Pe"}},,,function(e,t,a){e.exports={wrapper:"App_wrapper__B6vGh"}},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),i=a(13),c=a(8),s=a(4),u=a(5),m=a(7),p=a(6),h=a(3),f=a(2),d=a.n(f),_=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:"",priority:"low",done:!1},e.handleInputChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSelectChange=function(t){e.setState({priority:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.props.taskAdd(e.state),e.setState((function(e){return{text:"",priority:"low",done:!1}}))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:d.a.form},r.a.createElement("h1",{className:d.a.title},"Create your ToDo!"),r.a.createElement("input",{maxLength:"60",required:!0,placeholder:"Your task...",type:"text",name:"text",value:this.state.text,onChange:this.handleInputChange,className:d.a.formInput}),r.a.createElement("select",{value:this.state.priority,onChange:this.handleSelectChange,className:d.a.selectInput},r.a.createElement("option",{value:"low"},"Low"),r.a.createElement("option",{value:"neutral"},"Neutral"),r.a.createElement("option",{value:"high"},"High")),r.a.createElement("button",{type:"submit",className:d.a.button},"Create Task"))}}]),a}(r.a.Component),b=a(1),k=a.n(b),v=function(e){var t=e.text,a=e.priority,n=e.done,o=e.onDelete,l=e.onPriority,i=e.id,c=e.completeChange;"".concat(n?k.a.done:k.a.title);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:k.a.label},"Done:",r.a.createElement("input",{type:"checkbox",checked:n,onChange:c})),r.a.createElement("p",{className:k.a.title},t),r.a.createElement("p",null,a),r.a.createElement("select",{value:a,className:k.a.select,onChange:function(e){return l(i,e.target.value)}},r.a.createElement("option",{value:"low"},"Low"),r.a.createElement("option",{value:"neutral"},"Neutral"),r.a.createElement("option",{value:"high"},"High")),r.a.createElement("button",{type:"button",onClick:o,className:k.a.button},"Delete"))},C=a(9),g=a.n(C),y=function(e){var t=e.tasks,a=e.onDeleteTodo,n=e.priorityChange,o=e.completeChange;return r.a.createElement("ul",{className:g.a.list},t.map((function(e){return r.a.createElement("li",{key:e.id,className:g.a.listItem},r.a.createElement(v,{id:e.id,text:e.text,done:e.done,priority:e.priority,onDelete:function(){return a(e.id)},onPriority:n,completeChange:function(){return o(e.id)}}))})))},E=a(12),T=a.n(E),N=a(21),x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={tasks:[],filter:""},e.onTaskGet=function(t){var a=Object(c.a)({},t,{id:Object(N.a)()});e.setState((function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[a])}}))},e.onDeleteTodo=function(t){e.setState((function(e){return{tasks:e.tasks.filter((function(e){return e.id!==t}))}}))},e.onPriorityChange=function(t,a){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object(c.a)({},e,{priority:a}):e}))}}))},e.onCompleteChange=function(t){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object(c.a)({},e,{done:!e.done}):e}))}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.tasks;return r.a.createElement("div",{className:T.a.wrapper},r.a.createElement(_,{taskAdd:this.onTaskGet}),r.a.createElement(y,{tasks:e,onDeleteTodo:this.onDeleteTodo,priorityChange:this.onPriorityChange,completeChange:this.onCompleteChange}))}}]),a}(r.a.Component);l.a.render(r.a.createElement(x,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.3680b1a4.chunk.js.map