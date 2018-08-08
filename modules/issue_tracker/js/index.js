!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _IssueForm=__webpack_require__(25),_IssueForm2=_interopRequireDefault(_IssueForm);$(function(){var args=QueryString.get(),issueTracker=React.createElement("div",{className:"page-issue-tracker"},React.createElement(_IssueForm2.default,{Module:"issue_tracker",DataURL:loris.BaseURL+"/issue_tracker/ajax/EditIssue.php?action=getData&issueID="+args.issueID,action:loris.BaseURL+"/issue_tracker/ajax/EditIssue.php?action=edit"}));ReactDOM.render(issueTracker,document.getElementById("lorisworkspace"))})},25:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_CommentList=__webpack_require__(26),_CommentList2=_interopRequireDefault(_CommentList),IssueForm=function(_React$Component){function IssueForm(props){_classCallCheck(this,IssueForm);var _this=_possibleConstructorReturn(this,(IssueForm.__proto__||Object.getPrototypeOf(IssueForm)).call(this,props));return _this.state={Data:[],formData:{},submissionResult:null,errorMessage:null,isLoaded:!1,isNewIssue:!1,issueID:0},_this.getFormData=_this.getFormData.bind(_this),_this.handleSubmit=_this.handleSubmit.bind(_this),_this.setFormData=_this.setFormData.bind(_this),_this.isValidForm=_this.isValidForm.bind(_this),_this.showAlertMessage=_this.showAlertMessage.bind(_this),_this}return _inherits(IssueForm,_React$Component),_createClass(IssueForm,[{key:"componentDidMount",value:function(){this.getFormData()}},{key:"render",value:function(){if(this.state.error)return React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error));if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var hasEditPermission=this.state.Data.hasEditPermission||this.state.Data.isOwnIssue||this.state.isNewIssue,headerText=void 0,lastUpdateValue=void 0,lastUpdatedByValue=void 0,dateCreated=void 0,submitButtonValue=void 0,commentLabel=void 0,isWatching=this.state.issueData.watching;this.state.isNewIssue?(headerText="Create New Issue",lastUpdateValue="Never!",lastUpdatedByValue="No-one!",dateCreated="Sometime Soon!",submitButtonValue="Submit Issue",commentLabel="Description"):(headerText="Edit Issue #"+this.state.issueData.issueID,lastUpdateValue=this.state.issueData.lastUpdate,lastUpdatedByValue=this.state.issueData.lastUpdatedBy,dateCreated=this.state.issueData.dateCreated,submitButtonValue="Update Issue",commentLabel="New Comment");var commentHistory=this.state.isNewIssue||React.createElement(_CommentList2.default,{commentHistory:this.state.issueData.commentHistory}),header=void 0,description=void 0;return this.state.isNewIssue||(header=React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-6"},React.createElement(StaticElement,{name:"lastUpdate",label:"Last Update: ",ref:"lastUpdate",text:lastUpdateValue})),React.createElement("div",{className:"col-md-6"},React.createElement(StaticElement,{name:"lastUpdatedBy",label:"Last Updated By: ",ref:"lastUpdatedBy",text:lastUpdatedByValue})),React.createElement("div",{className:"col-md-6"},React.createElement(StaticElement,{name:"dateCreated",label:"Date Created: ",ref:"dateCreated",text:dateCreated})),React.createElement("div",{className:"col-md-6"},React.createElement(StaticElement,{name:"reporter",label:"Reporter: ",ref:"reporter",text:this.state.issueData.reporter}))),description=React.createElement(StaticElement,{name:"description",label:"Description",ref:"description",text:this.state.issueData.desc})),React.createElement("div",null,React.createElement(FormElement,{name:"issueEdit",onSubmit:this.handleSubmit,ref:"form"},React.createElement("h3",null,headerText),header,React.createElement(TextboxElement,{name:"title",label:"Title",onUserInput:this.setFormData,ref:"title",value:this.state.formData.title,disabled:!hasEditPermission,required:!0}),description,React.createElement(SelectElement,{name:"assignee",label:"Assignee",emptyOption:!0,options:this.state.Data.assignees,onUserInput:this.setFormData,ref:"assignee",disabled:!hasEditPermission,value:this.state.formData.assignee,required:!0}),React.createElement(SelectElement,{name:"centerID",label:"Site",emptyOption:!0,options:this.state.Data.sites,onUserInput:this.setFormData,ref:"centerID",disabled:!hasEditPermission,value:this.state.formData.centerID}),React.createElement(SelectElement,{name:"status",label:"Status",emptyOption:!1,options:this.state.Data.statuses,onUserInput:this.setFormData,ref:"status",disabled:!hasEditPermission,value:this.state.formData.status}),React.createElement(SelectElement,{name:"priority",label:"Priority",emptyOption:!1,options:this.state.Data.priorities,onUserInput:this.setFormData,ref:"priority",required:!1,disabled:!hasEditPermission,value:this.state.formData.priority}),React.createElement(SelectElement,{name:"category",label:"Category",emptyOption:!0,options:this.state.Data.categories,onUserInput:this.setFormData,ref:"category",disabled:!hasEditPermission,value:this.state.formData.category}),React.createElement(SelectElement,{name:"module",label:"Module",emptyOption:!0,options:this.state.Data.modules,onUserInput:this.setFormData,ref:"module",disabled:!hasEditPermission,value:this.state.formData.module}),React.createElement(TextboxElement,{name:"PSCID",label:"PSCID",onUserInput:this.setFormData,ref:"PSCID",disabled:!hasEditPermission,value:this.state.formData.PSCID}),React.createElement(TextboxElement,{name:"visitLabel",label:"Visit Label",onUserInput:this.setFormData,ref:"visitLabel",disabled:!hasEditPermission,value:this.state.formData.visitLabel}),React.createElement(SelectElement,{name:"watching",label:"Watching?",emptyOption:!1,options:{No:"No",Yes:"Yes"},onUserInput:this.setFormData,ref:"watching",value:isWatching}),React.createElement(SelectElement,{name:"othersWatching",label:"Add others to watching?",emptyOption:!0,options:this.state.Data.otherWatchers,onUserInput:this.setFormData,ref:"watching",multiple:!0,value:this.state.formData.othersWatching}),React.createElement(TextareaElement,{name:"comment",label:commentLabel,onUserInput:this.setFormData,ref:"comment",value:this.state.formData.comment}),React.createElement(ButtonElement,{label:submitButtonValue})),commentHistory)}},{key:"getFormData",value:function(){$.ajax(this.props.DataURL,{dataType:"json",success:function(data){this.setState({Data:data,isLoaded:!0,issueData:data.issueData,formData:data.issueData,isNewIssue:!data.issueData.issueID})}.bind(this),error:function(err){this.setState({error:"An error occurred when loading the form!\n Error: "+err.status+" ("+err.statusText+")"})}.bind(this)})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),!this.state.submissionResult||!this.state.isNewIssue){this.setState({submissionResult:"pending"});var myFormData=this.state.formData,formRefs=this.refs,formData=new FormData;if(this.isValidForm(formRefs,myFormData)){for(var key in myFormData)""!==myFormData[key]&&formData.append(key,myFormData[key]);$.ajax({type:"POST",url:this.props.action,data:formData,cache:!1,dataType:"json",contentType:!1,processData:!1,success:function(data){var msgType="success",message=this.state.isNewIssue?"You will be redirected to main page in 2 seconds!":"";this.showAlertMessage(msgType,message),this.setState({submissionResult:"success",issueID:data.issueID})}.bind(this),error:function(err){console.error(err),this.setState({submissionResult:"error"});var msgType="error",message="Failed to submit issue :(";this.showAlertMessage(msgType,message)}.bind(this)})}}}},{key:"setFormData",value:function(formElement,value){var formDataUpdate=this.state.formData;formDataUpdate[formElement]=value,this.setState({formData:formDataUpdate})}},{key:"isValidForm",value:function isValidForm(formRefs,formDataToCheck){var isValidForm=!0,requiredFields={title:null,assignee:null};return Object.keys(requiredFields).map(function(field){formDataToCheck[field]?requiredFields[field]=formDataToCheck[field]:formRefs[field]&&(formRefs[field].props.hasError=!0,isValidForm=!1)}),this.forceUpdate(),isValidForm}},{key:"showAlertMessage",value:function(msgType,message){var type="success",title="Issue updated!",text=message||"",timer=null,confirmation=!0,callback=function(){this.setState({submissionResult:null})};"success"===msgType&&this.state.isNewIssue?(title="Issue created!",timer=2e3,confirmation=!1,callback=function(){this.setState({formData:{},submissionResult:null}),window.location.assign("/issue_tracker")}):"error"===msgType&&(type="error",title="Error!"),swal({title:title,type:type,text:text,timer:timer,allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:confirmation},callback.bind(this))}}]),IssueForm}(React.Component);IssueForm.propTypes={DataURL:React.PropTypes.string.isRequired,action:React.PropTypes.string.isRequired},exports.default=IssueForm},26:function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),CommentList=function(_React$Component){function CommentList(props){_classCallCheck(this,CommentList);var _this=_possibleConstructorReturn(this,(CommentList.__proto__||Object.getPrototypeOf(CommentList)).call(this,props));return _this.state={collapsed:!0},_this.toggleCollapsed=_this.toggleCollapsed.bind(_this),_this}return _inherits(CommentList,_React$Component),_createClass(CommentList,[{key:"toggleCollapsed",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var btnCommentsLabel=this.state.collapsed?"Show Comment History":"Hide Comment History",changes=this.props.commentHistory.reduce(function(carry,item){var label=item.dateAdded.concat(" - ",item.addedBy);return carry[label]||(carry[label]={}),carry[label][item.fieldChanged]=item.newValue,carry},{}),history=Object.keys(changes).sort().reverse().map(function(key,i){var textItems=Object.keys(changes[key]).map(function(index,j){return React.createElement("div",{key:j,className:"row"},React.createElement("div",{className:"col-md-2"},React.createElement("div",{className:"col-md-8"},React.createElement("b",null,index)),React.createElement("div",{className:"col-md-4"}," to ")),React.createElement("div",{className:"col-md-10"},React.createElement("i",null,changes[key][index])))},this);return React.createElement("div",{key:i},React.createElement("hr",null),React.createElement("div",{className:"history-item-label"},React.createElement("span",null,key)," updated :"),React.createElement("div",{className:"history-item-changes"},textItems))},this);return React.createElement("div",null,React.createElement("div",{className:"btn btn-primary",onClick:this.toggleCollapsed,"data-toggle":"collapse","data-target":"#comment-history",style:{margin:"10px 0"}},btnCommentsLabel),React.createElement("div",{id:"comment-history",className:"collapse"},history))}}]),CommentList}(React.Component);exports.default=CommentList}});
//# sourceMappingURL=index.js.map