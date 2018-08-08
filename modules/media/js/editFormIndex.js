!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _editForm=__webpack_require__(27),_editForm2=_interopRequireDefault(_editForm),args=QueryString.get(document.currentScript.src);$(function(){var mediaEditForm=React.createElement("div",{className:"page-edit-form"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-9 col-lg-7"},React.createElement(_editForm2.default,{DataURL:loris.BaseURL+"/media/ajax/FileUpload.php?action=getData&idMediaFile="+args.id,action:loris.BaseURL+"/media/ajax/FileUpload.php?action=edit"}))));ReactDOM.render(mediaEditForm,document.getElementById("lorisworkspace"))})},27:function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MediaEditForm=function(_React$Component){function MediaEditForm(props){_classCallCheck(this,MediaEditForm);var _this=_possibleConstructorReturn(this,(MediaEditForm.__proto__||Object.getPrototypeOf(MediaEditForm)).call(this,props));return _this.state={Data:{},formData:{},uploadResult:null,isLoaded:!1,loadedData:0},_this.handleSubmit=_this.handleSubmit.bind(_this),_this.setFormData=_this.setFormData.bind(_this),_this.showAlertMessage=_this.showAlertMessage.bind(_this),_this}return _inherits(MediaEditForm,_React$Component),_createClass(MediaEditForm,[{key:"componentDidMount",value:function(){var self=this;$.ajax(this.props.DataURL,{dataType:"json",success:function(data){var formData={idMediaFile:data.mediaData.id,forSite:data.mediaData.forSite,dateTaken:data.mediaData.dateTaken,comments:data.mediaData.comments,hideFile:data.mediaData.hideFile};self.setState({Data:data,isLoaded:!0,mediaData:data.mediaData,formData:formData})},error:function(_error,errorCode,errorMsg){console.error(_error,errorCode,errorMsg),self.setState({error:"An error occurred when loading the form!"})}})}},{key:"render",value:function(){if(void 0!==this.state.error)return React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error));if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var alertMessage="",alertClass="alert text-center hide",backURL=loris.BaseURL.concat("/media/");return this.state.uploadResult&&("success"===this.state.uploadResult?(alertClass="alert alert-success text-center",alertMessage="Update Successful!"):"error"===this.state.uploadResult&&(alertClass="alert alert-danger text-center",alertMessage="Failed to update the file")),React.createElement("div",null,React.createElement("div",{className:alertClass,role:"alert",ref:"alert-message"},alertMessage),"success"===this.state.uploadResult?React.createElement("a",{className:"btn btn-primary",href:backURL},"Back to media"):null,React.createElement(FormElement,{name:"mediaEdit",onSubmit:this.handleSubmit,ref:"form"},React.createElement("h3",null,"Edit Media File"),React.createElement("br",null),React.createElement(SelectElement,{name:"pscid",label:"PSCID",options:this.state.Data.candidates,onUserInput:this.setFormData,ref:"pscid",required:!0,disabled:!0,value:this.state.mediaData.pscid}),React.createElement(SelectElement,{name:"visitLabel",label:"Visit Label",options:this.state.Data.visits,onUserInput:this.setFormData,ref:"visitLabel",required:!0,disabled:!0,value:this.state.mediaData.visitLabel}),React.createElement(SelectElement,{name:"forSite",label:"Site",options:this.state.Data.sites,onUserInput:this.setFormData,ref:"forSite",disabled:!0,value:this.state.mediaData.forSite}),React.createElement(SelectElement,{name:"instrument",label:"Instrument",options:this.state.Data.instruments,onUserInput:this.setFormData,ref:"instrument",disabled:!0,value:this.state.mediaData.instrument}),React.createElement(DateElement,{name:"dateTaken",label:"Date of Administration",minYear:"2000",maxYear:"2017",onUserInput:this.setFormData,ref:"dateTaken",value:this.state.formData.dateTaken}),React.createElement(TextareaElement,{name:"comments",label:"Comments",onUserInput:this.setFormData,ref:"comments",value:this.state.formData.comments}),React.createElement(FileElement,{name:"file",id:"mediaEditEl",onUserInput:this.setFormData,required:!0,disabled:!0,ref:"file",label:"Uploaded file",value:this.state.mediaData.fileName}),React.createElement(SelectElement,{name:"hideFile",label:"Hide File",emptyOption:!1,options:["No","Yes"],onUserInput:this.setFormData,ref:"hideFile",value:this.state.formData.hideFile}),React.createElement(ButtonElement,{label:"Update File"})))}},{key:"handleSubmit",value:function(e){e.preventDefault();var self=this,myFormData=this.state.formData;$("#mediaEditEl").hide(),$("#file-progress").removeClass("hide"),$.ajax({type:"POST",url:self.props.action,data:JSON.stringify(myFormData),cache:!1,contentType:!1,processData:!1,xhr:function xhr(){var xhr=new window.XMLHttpRequest;return xhr.upload.addEventListener("progress",function(evt){if(evt.lengthComputable){var progressbar=$("#progressbar"),progresslabel=$("#progresslabel"),percent=Math.round(evt.loaded/evt.total*100);$(progressbar).width(percent+"%"),$(progresslabel).html(percent+"%"),progressbar.attr("aria-valuenow",percent)}},!1),xhr},success:function(data){$("#file-progress").addClass("hide"),self.setState({uploadResult:"success"}),self.showAlertMessage()},error:function(err){console.error(err),self.setState({uploadResult:"error"}),self.showAlertMessage()}})}},{key:"setFormData",value:function(formElement,value){var formData=this.state.formData;""===value?formData[formElement]=null:formData[formElement]=value,this.setState({formData:formData})}},{key:"showAlertMessage",value:function(){var self=this;if(null!==this.refs["alert-message"]){var alertMsg=this.refs["alert-message"];$(alertMsg).fadeTo(2e3,500).delay(3e3).slideUp(500,function(){self.setState({uploadResult:null})})}}}]),MediaEditForm}(React.Component);MediaEditForm.propTypes={DataURL:React.PropTypes.string.isRequired,action:React.PropTypes.string.isRequired};var RMediaEditForm=React.createFactory(MediaEditForm);window.MediaEditForm=MediaEditForm,window.RMediaEditForm=RMediaEditForm,exports.default=MediaEditForm}});
//# sourceMappingURL=editFormIndex.js.map