(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{227:function(e,t,a){e.exports=a(409)},232:function(e,t,a){},407:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(55),i=a.n(r),o=(a(232),a(215)),s=a(58),c=a.n(s),u=a(108),d=a(83),m=a(41),p=a(42),h=a(45),f=a(43),E=a(44),b=a(32),g=a(429),v=a(195),j=a(424),O=a(420),w=a(428),y=a(421),F=a(426),H=a(427),k=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onHandleFileUploadInput,a=e.onHandleFileUploadButton,n=e.onHandleDropdownChange,r=e.onHandleRequestingPathButton,i=e.isNewFile,o=e.uploadingFile,s=e.requestingPath,c=e.filesUploaded,u=e.fileSelected,d=e.isImpatient;return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a.Field,null,l.a.createElement("label",null,"1. Upload a new file:"),l.a.createElement(O.a,{type:"file",onChange:t,className:"upload-button",placeholder:"Upload a text file...",defaultValue:"",disabled:o})),l.a.createElement(j.a.Field,null,l.a.createElement(w.a,{animated:"vertical",fluid:!0,disabled:!i||o,loading:o,color:"teal",onClick:a},l.a.createElement(w.a.Content,{hidden:!0},l.a.createElement(v.a,{name:"upload"})),l.a.createElement(w.a.Content,{visible:!0},"Upload File"))),l.a.createElement(y.a,null),l.a.createElement(j.a.Field,null,l.a.createElement("label",null,"2. Select a file:"),l.a.createElement(F.a,{onChange:n,placeholder:"Select a file already uplaoded...",fluid:!0,selection:!0,disabled:!c||c.length<=0,options:c,value:u})),l.a.createElement(j.a.Field,null,l.a.createElement(w.a,{fluid:!0,color:"teal",disabled:!u||s,loading:s,onClick:r},"Get Longest Path"),l.a.createElement(H.a,{className:"impatient-message",compact:!0,color:"teal",hidden:!d},"Please be patient, the script is still running")))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).scrollToBottom=function(){a.messagesEnd.scrollIntoView({behavior:"smooth"})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=this.props.textAreaContent;return l.a.createElement("div",{className:"textarea"},t,l.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))}}]),t}(n.Component),D=a(422),U=a(425),x=a(423),S=a(384),I=a(385),B=a(412),N=a(194),P=a(411),T=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.paths.map(function(e){return{file:e.fileSelected,executionTime:e.executionTime}});return l.a.createElement("div",{className:"chart"},l.a.createElement(D.a,{width:"100%",height:500},l.a.createElement(U.a,{data:e,margin:{top:30,right:5,left:0,bottom:0}},l.a.createElement(x.a,{strokeDasharray:"3 3"}),l.a.createElement(S.a,{dataKey:"file"}),l.a.createElement(I.a,null),l.a.createElement(B.a,null),l.a.createElement(N.a,null),l.a.createElement(P.a,{type:"monotone",dataKey:"executionTime",stroke:"#00b5ad"}))))}}]),t}(n.Component),q=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error,a=e.isError,n=e.onHandleErrorDismiss;return a&&(l.a.createElement("div",{className:"message"},l.a.createElement(H.a,{error:a,header:t.header,list:t.list,onDismiss:n}))||null)}}]),t}(n.Component),A=a(135),L=a.n(A),R="https://coding-challenge.mariolemesmedina.me/api";function _(e){return M.apply(this,arguments)}function M(){return(M=Object(d.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),e.abrupt("return",L.a.post(R+"/v1/matrixes",a,{headers:{"Content-Type":"multipart/form-data"}}));case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function W(){return(W=Object(d.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L.a.get(R+"/v1/paths",{params:{file:t}}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}a(404),a(407);var G=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={newFile:null,uploadingFile:!1,requestingPath:!1,paths:[],textAreaContent:[],filesUploaded:[],fileSelected:null,isImpatient:!1,isError:!1,error:{header:"",list:[]}},a.onHandleFileUploadInput=a.onHandleFileUploadInput.bind(Object(b.a)(Object(b.a)(a))),a.onHandleFileUploadButton=a.onHandleFileUploadButton.bind(Object(b.a)(Object(b.a)(a))),a.onHandleDropdownChange=a.onHandleDropdownChange.bind(Object(b.a)(Object(b.a)(a))),a.onHandleRequestingPathButton=a.onHandleRequestingPathButton.bind(Object(b.a)(Object(b.a)(a))),a.onHandleErrorDismiss=a.onHandleErrorDismiss.bind(Object(b.a)(Object(b.a)(a))),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"onHandleFileUploadInput",value:function(e){e.preventDefault(),this.setState({newFile:e.target.files[0]})}},{key:"onHandleFileUploadButton",value:function(){var e=Object(d.a)(c.a.mark(function e(t){var a=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.setState({uploadingFile:!0}),_(this.state.newFile).then(function(e){var t=[];a.state.filesUploaded.some(function(t){return t.value===e.data.file.filename})||t.push({text:e.data.file.filename,value:e.data.file.filename}),a.setState(function(e,a){return{uploadingFile:!1,filesUploaded:Object(u.a)(e.filesUploaded).concat(t)}})}).catch(function(e){a.setState({uploadingFile:!1,isError:!0,error:{header:"There was some error uploading the file",list:e.response.data.message?[e.response.data.message]:[]}})});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onHandleErrorDismiss",value:function(e){e.preventDefault(),this.setState({isError:!1,error:{header:"",list:[]}})}},{key:"onHandleDropdownChange",value:function(e,t){var a=t.value;e.preventDefault(),this.setState({fileSelected:a})}},{key:"onHandleRequestingPathButton",value:function(e){var t=this;e.preventDefault(),this.setState({requestingPath:!0}),this.timerID=setTimeout(function(){t.setState({isImpatient:!0})},5e3),function(e){return W.apply(this,arguments)}(this.state.fileSelected).then(function(e){clearTimeout(t.timerID);var a=e.data.result.path.map(function(e){return e.value}),n=l.a.createElement("div",{key:t.state.paths.length},l.a.createElement("p",{className:"file-name"},l.a.createElement("span",null,"File:")," ",t.state.fileSelected),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Longest path:")," ",a.join(",")),l.a.createElement("li",null,l.a.createElement("span",null,"Length:")," ",e.data.result.pathLength),l.a.createElement("li",null,l.a.createElement("span",null,"Steep gradient:")," ",e.data.result.steepLength),l.a.createElement("li",null,l.a.createElement("span",null,"Execution time:")," ",e.data.executionTime," secs.")));t.setState(function(t,a){return{requestingPath:!1,paths:Object(u.a)(t.paths).concat([Object(o.a)({},e.data,{file:t.fileSelected})]),textAreaContent:Object(u.a)(t.textAreaContent).concat([n]),isImpatient:!1}})}).catch(function(e){t.setState({isImpatient:!1,requestingPath:!1,isError:!0,error:{header:"There was some error obtaining the results",list:e.response.data.message?[e.response.data.message]:[]}})})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timerID)}},{key:"render",value:function(){return l.a.createElement("div",{className:"app container"},l.a.createElement(g.a,{as:"h1"},"Coding Challenge App"," ",l.a.createElement("span",null,"- by"," ",l.a.createElement("a",{target:"_blank",href:"mailto:mariolemesmedina@gmail.com",title:"Email address"},"Mario Lemes Medina")),l.a.createElement("div",{className:"icons"}," ",l.a.createElement("a",{target:"_blank",href:"https://github.com/mario-lemes",title:"Git Hub Account"},l.a.createElement(v.a,{link:!0,name:"github"})),l.a.createElement("a",{target:"_blank",href:"https://twitter.com/mario_lemes",title:"Twitter Account"},l.a.createElement(v.a,{link:!0,name:"twitter"})))),l.a.createElement("div",{className:"body row"},l.a.createElement("div",{className:"message-container col-12"},l.a.createElement(q,{onHandleErrorDismiss:this.onHandleErrorDismiss,isError:this.state.isError,error:this.state.error})),l.a.createElement("div",{className:"textarea-container col-xs-12 col-md-8"},l.a.createElement(C,{paths:this.state.paths,textAreaContent:this.state.textAreaContent})),l.a.createElement("div",{className:"control-panel-container col-xs-12 col-md-4"},l.a.createElement(k,{onHandleFileUploadInput:this.onHandleFileUploadInput,onHandleFileUploadButton:this.onHandleFileUploadButton,onHandleDropdownChange:this.onHandleDropdownChange,onHandleRequestingPathButton:this.onHandleRequestingPathButton,isNewFile:this.state.newFile,uploadingFile:this.state.uploadingFile,requestingPath:this.state.requestingPath,filesUploaded:this.state.filesUploaded,fileSelected:this.state.fileSelected,isImpatient:this.state.isImpatient})),l.a.createElement("div",{className:"chart-container col-xs-12 col-md-8"},l.a.createElement(T,{paths:this.state.paths}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[227,2,1]]]);
//# sourceMappingURL=main.4e3e3906.chunk.js.map