(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e){e.exports={questions:[{name:"How the Big Bang Theory Works",tags:["Big Bang Theory","science"],domains:["science.howstuffworks.com"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is the Kubernetes?",tags:["kubernetes","container-orchestration system","Google"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is Kubernetes and how to use it?",tags:["kubernetes","container-orchestration system","Google"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is a docker?",tags:["kubernetes","container-orchestration system","Google"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is the Kubelet?",tags:["kubernetes","container-orchestration system","Google"],domains:[],answers:[],choices:[],votes:0,dismiss:0},{name:"",tags:["kubernetes","container-orchestration system","Google"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"What is Plant Scale",tags:["kubernetes","container-orchestration system","Google","Plant Scale"],domains:["kubernetes.io"],answers:[],choices:[],votes:0,dismiss:0},{name:"How Self healing on kubernetes ?",tags:["kubernetes","Self-healing"],domains:["kubernetes.io"],answers:["Restarts containers that fail, replaces and reschedules containers when nodes die, kills containers that don\u2019t respond to your user-defined health check, and doesn\u2019t advertise them to clients until they are ready to serve"],choices:[],votes:0,dismiss:0}]}},134:function(e,t,n){e.exports=n(266)},142:function(e,t,n){},144:function(e,t,n){},266:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(35),o=n.n(i),c=(n(139),n(142),n(79)),l=n(25),r=n(26),u=n(29),d=n(27),h=n(30),m=n(19),b=(n(144),n(273)),k=n(115),g=n(275),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(b.a,{style:{borderRadus:0}},s.a.createElement(b.a.Content,null,s.a.createElement(b.a.Header,null,s.a.createElement("div",{className:"qitw_col"},s.a.createElement("div",null,this.props.question.name),s.a.createElement(k.a,{disabled:!0,name:"times",onClick:function(){return e.props.onDismissQuestion(e.props.questionIndex)}}))),s.a.createElement(b.a.Meta,{className:"qitw_tag_parent"},this.props.question.tags.map(function(e){return s.a.createElement("span",{className:"qitw_tag"},e)})),s.a.createElement(b.a.Description,null)),s.a.createElement(b.a.Content,{extra:!0},s.a.createElement("div",{className:"ui two buttons"},s.a.createElement(g.a,{basic:!0,color:"green"},"Submit"),s.a.createElement(g.a,{basic:!0,color:"red"},"Skip"))))}}]),t}(a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),s.a.createElement(b.a.Group,null,this.props.questionData.map(function(t,n){return s.a.createElement(v,{question:t,questionIndex:n,onDismissQuestion:e.props.onDismissQuestion})}))}}]),t}(a.Component),O=n(123),w=n(272),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleOnClickAsk=n.handleOnClickAsk.bind(Object(m.a)(Object(m.a)(n))),n.handleOnClickAnswer=n.handleOnClickAnswer.bind(Object(m.a)(Object(m.a)(n))),n.handleOnClickInput=n.handleOnClickInput.bind(Object(m.a)(Object(m.a)(n))),n.handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n.state={asking:!1,value:""},n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleOnClickAsk",value:function(){this.setState({asking:!0})}},{key:"handleOnClickAnswer",value:function(){alert("answer question i guess")}},{key:"handleOnClickInput",value:function(){this.setState({asking:!1}),this.props.onAddQuestion({name:this.state.value,tags:["Big Bang Theory","science"],domains:[window.location.hostname],answers:[],choices:[],votes:0,dismiss:0})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(b.a,null,s.a.createElement(b.a.Content,null,s.a.createElement(b.a.Header,null,s.a.createElement("div",{className:"qitw_col"},s.a.createElement("div",null,"Contribute")))),s.a.createElement(b.a.Content,{extra:!0},this.state.asking?s.a.createElement(w.a,{onChange:this.handleChange,action:s.a.createElement(g.a,{onClick:this.handleOnClickInput},"Add"),placeholder:"Type..."}):s.a.createElement(g.a,{basic:!0,color:"green",onClick:this.handleOnClickAsk},"Add a Question"),s.a.createElement(g.a,{basic:!0,color:"blue",onClick:this.handleOnClickAnswer},"Answer a Question")))}}]),t}(a.Component),C=n(274),j=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(u.a)(this,Object(d.a)(t).call(this,e));var a=window.location.hostname;console.log(a),a="localhost"===a?"kubernetes.io":a;var s=O.questions.filter(function(e){return e.domains.indexOf(a.toLowerCase())>-1});return n.state={value:"",questions:s},n.handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n.handleClickOutside=n.handleClickOutside.bind(Object(m.a)(Object(m.a)(n))),n.handleAddQuestion=n.handleAddQuestion.bind(Object(m.a)(Object(m.a)(n))),n.onDismissQuestion=n.onDismissQuestion.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mouseup",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.handleClickOutside)}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleClickOutside",value:function(e){console.log(e);var t=document.all?document.selection.createRange().text:document.getSelection();console.log(t),this.setState({value:t.focusNode.data})}},{key:"onDismissQuestion",value:function(e){console.log(e);var t=Object(c.a)(this.state.questions);t.splice(e,1),this.setState({questions:t})}},{key:"handleAddQuestion",value:function(e){this.setState({questions:[e].concat(Object(c.a)(this.state.questions))})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C.a,{floating:!0},"You highlighted:",this.state.value,s.a.createElement("input",{id:"myinput",type:"hidden",name:"highlightedText",value:this.state.value,onChange:this.handleChange})),s.a.createElement(f,{onAddQuestion:this.handleAddQuestion}),s.a.createElement(p,{questionData:this.state.questions,onDismissQuestion:this.onDismissQuestion}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[134,2,1]]]);
//# sourceMappingURL=main.a29763e4.chunk.js.map