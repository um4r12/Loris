!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_StaticDataTable=__webpack_require__(2),_StaticDataTable2=_interopRequireDefault(_StaticDataTable),_eeg_session_panels=__webpack_require__(18),EEGSessionView=function(_React$Component){function EEGSessionView(props){_classCallCheck(this,EEGSessionView);var _this=_possibleConstructorReturn(this,(EEGSessionView.__proto__||Object.getPrototypeOf(EEGSessionView)).call(this,props));return _this.state={url:{params:{sessionID:"",outputType:""}}},_this.fetchData=_this.fetchData.bind(_this),_this.collectParams=_this.collectParams.bind(_this),_this}return _inherits(EEGSessionView,_React$Component),_createClass(EEGSessionView,[{key:"componentDidMount",value:function(){this.collectParams(),this.fetchData()}},{key:"componentDidUpdate",value:function(prevProps,prevState){console.log("componentDidUpdate")}},{key:"collectParams",value:function(){var url=new URL(window.location.href),outputType=url.searchParams.get("outputType"),params={sessionID:url.searchParams.get("sessionID"),outputType:null===outputType?"all_types":outputType};this.state.url.params=params,console.log(JSON.stringify(params))}},{key:"fetchData",value:function(){$.ajax(loris.BaseURL+"/electrophysiology_browser/ajax/get_eeg_session_data.php",{method:"GET",dataType:"json",data:this.state.url.params,success:function(data){console.log("ajax (get) - success!"),data={eeg:{patient:{info:{pscid:"cbm001",dccid:"649990",visit_label:"V01",site:"CBM",dob:"",gender:"",output_type:"",subproject:""}},database:[{file:{name:"",task:{frequency:{sampling:512,powerline:"60Hz"},channel:[{name:"EEG Channel Count",value:128},{name:"EOG Channel Count",value:0},{name:"EOG Channel Count",value:0},{name:"ECG Channel Count",value:0},{name:"EMG Channel Count",value:0}],reference:"Common"}},details:{task:{description:"Visual presentation of oval cropped face and house images both upright and inverted. Rare left or right half oval checkerboards were presented as targets for keypress response."},instructions:"",eeg:{ground:"",placement_scheme:"Custom equidistant 128 channel BioSemi montage"},trigger_count:"0",record_type:"",cog:{atlas_id:"",poid:""},institution:{name:"",address:""},misc:{channel_count:""},manufacturer:{name:"",model_name:""},cap:{manufacturer:"",model_name:""},hardware_filters:"",recording_duration:"",epoch_length:"",device:{version:"",serial_number:""},subject_artifact_description:""}}]}},console.log(data)}.bind(this),error:function(_error){console.log("ajax (get) - error!"),console.log(JSON.stringify(_error))}})}},{key:"render",value:function(){return React.createElement("div",{id:"lorisworkspace"},React.createElement(_StaticDataTable2.default,{Headers:["PSCID","DCCID","Visit Label","Site","DOB","Gender","Output Type","Subproject"],Data:[["AAA0003","284432","V01","AAA","2004-06-03","Male","native","Control Group"]],freezeColumn:"PSCID",Hide:{rowsPerPage:!0,downloadCSV:!0,defaultColumn:!0}}),React.createElement(_eeg_session_panels.FilePanel,{id:"filename_panel",title:"FILENAME"}),React.createElement(_eeg_session_panels.DetailsPanel,{id:"data_panel",title:"DATA DETAILS"}))}}]),EEGSessionView}(React.Component);EEGSessionView.propTypes={module:React.PropTypes.string.isRequired},EEGSessionView.defaultProps={module:""},window.onload=function(){var eegSessionView=React.createElement(EEGSessionView,{module:"eegSessionView"}),EEGSessionViewAppDOM=document.createElement("div");EEGSessionViewAppDOM.id="eegSessionView";var rootDOM=document.getElementById("lorisworkspace");rootDOM.appendChild(EEGSessionViewAppDOM),ReactDOM.render(eegSessionView,document.getElementById("eegSessionView"))}},1:function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var PaginationLinks=React.createClass({displayName:"PaginationLinks",mixins:[React.addons.PureRenderMixin],propTypes:{onChangePage:React.PropTypes.func,Total:React.PropTypes.number.isRequired},getDefaultProps:function(){return{RowsPerPage:10,Active:1}},changePage:function(i){var that=this;return function(evt){evt.preventDefault(),that.props.onChangePage&&that.props.onChangePage(i)}},render:function(){var classList,rowsPerPage=this.props.RowsPerPage,pageLinks=[],lastPage=Math.ceil(this.props.Total/rowsPerPage),startPage=Math.max(1,this.props.Active-3),lastShownPage=Math.min(this.props.Active+3,lastPage);if(0===this.props.Total)return React.createElement("div",null);if(this.props.Total<this.props.RowsPerPage)return React.createElement("div",null);if(lastShownPage-startPage<=7&&(lastShownPage=startPage+6,lastShownPage>lastPage&&(lastShownPage=lastPage,startPage=lastPage-6)),startPage>1&&pageLinks.push(React.createElement("li",{onClick:this.changePage(1)},React.createElement("a",{href:"#"},"«"))),startPage<1&&(startPage=1),lastShownPage<1&&(lastShownPage=1),startPage===lastShownPage)return React.createElement("div",null);for(var i=startPage;i<=lastShownPage;i+=1)classList="",this.props.Active===i&&(classList="active"),pageLinks.push(React.createElement("li",{key:"table_page_"+i,onClick:this.changePage(i),className:classList},React.createElement("a",{href:"#"},i)));return lastShownPage!==lastPage&&pageLinks.push(React.createElement("li",{key:"table_page_more",onClick:this.changePage(lastPage)},React.createElement("a",{href:"#"},"»"))),React.createElement("ul",{className:"pagination pagination-table"},pageLinks)}}),RPaginationLinks=React.createFactory(PaginationLinks);window.PaginationLinks=PaginationLinks,window.RPaginationLinks=RPaginationLinks,exports.default=PaginationLinks},2:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_PaginationLinks=__webpack_require__(1),_PaginationLinks2=_interopRequireDefault(_PaginationLinks),StaticDataTable=function(_React$Component){function StaticDataTable(props){_classCallCheck(this,StaticDataTable);var _this=_possibleConstructorReturn(this,(StaticDataTable.__proto__||Object.getPrototypeOf(StaticDataTable)).call(this,props));return _this.state={PageNumber:1,SortColumn:-1,SortOrder:"ASC",RowsPerPage:20,Hide:_this.props.Hide},_this.changePage=_this.changePage.bind(_this),_this.setSortColumn=_this.setSortColumn.bind(_this),_this.changeRowsPerPage=_this.changeRowsPerPage.bind(_this),_this.downloadCSV=_this.downloadCSV.bind(_this),_this.countFilteredRows=_this.countFilteredRows.bind(_this),_this.toCamelCase=_this.toCamelCase.bind(_this),_this.getSortedRows=_this.getSortedRows.bind(_this),_this.hasFilterKeyword=_this.hasFilterKeyword.bind(_this),_this}return _inherits(StaticDataTable,_React$Component),_createClass(StaticDataTable,[{key:"componentDidMount",value:function(){jQuery.fn.DynamicTable&&(this.props.freezeColumn?$("#dynamictable").DynamicTable({freezeColumn:this.props.freezeColumn}):$("#dynamictable").DynamicTable(),this.state.Hide.defaultColumn&&$("#dynamictable").find("tbody td:eq(0)").hide());var modulePrefs=JSON.parse(localStorage.getItem("modulePrefs"));null===modulePrefs&&(modulePrefs={}),void 0===modulePrefs[loris.TestName]&&(modulePrefs[loris.TestName]={},modulePrefs[loris.TestName].rowsPerPage=this.state.RowsPerPage);var rowsPerPage=modulePrefs[loris.TestName].rowsPerPage;this.setState({RowsPerPage:rowsPerPage}),this.modulePrefs=modulePrefs}},{key:"componentDidUpdate",value:function(prevProps,prevState){if(jQuery.fn.DynamicTable&&(this.props.freezeColumn?$("#dynamictable").DynamicTable({freezeColumn:this.props.freezeColumn}):$("#dynamictable").DynamicTable()),this.props.onSort&&(this.state.SortColumn!==prevState.SortColumn||this.state.SortOrder!==prevState.SortOrder)){var index=this.getSortedRows();this.props.onSort(index,this.props.Data,this.props.Headers)}}},{key:"changePage",value:function(pageNo){this.setState({PageNumber:pageNo})}},{key:"setSortColumn",value:function(colNumber){return function(e){this.state.SortColumn===colNumber?this.setState({SortOrder:"ASC"===this.state.SortOrder?"DESC":"ASC"}):this.setState({SortColumn:colNumber})}}},{key:"changeRowsPerPage",value:function(val){var rowsPerPage=val.target.value,modulePrefs=this.modulePrefs;modulePrefs[loris.TestName].rowsPerPage=rowsPerPage,localStorage.setItem("modulePrefs",JSON.stringify(modulePrefs)),this.setState({RowsPerPage:rowsPerPage,PageNumber:1})}},{key:"downloadCSV",value:function(csvData){var csvworker=new Worker(loris.BaseURL+"/js/workers/savecsv.js");csvworker.addEventListener("message",function(e){var dataURL=void 0,dataDate=void 0,link=void 0;"SaveCSV"===e.data.cmd&&(dataDate=(new Date).toISOString(),dataURL=window.URL.createObjectURL(e.data.message),link=document.createElement("a"),link.download="data-"+dataDate+".csv",link.type="text/csv",link.href=dataURL,document.body.appendChild(link),$(link)[0].click(),document.body.removeChild(link))}),csvworker.postMessage({cmd:"SaveFile",data:csvData,headers:this.props.Headers,identifiers:this.props.RowNameMap})}},{key:"countFilteredRows",value:function(){var useKeyword=!1,filterMatchCount=0,filterValuesCount=this.props.Filter?Object.keys(this.props.Filter).length:0,tableData=this.props.Data,headersData=this.props.Headers;this.props.Filter.keyword&&(useKeyword=!0),useKeyword&&(filterValuesCount-=1);for(var i=0;i<tableData.length;i++){for(var headerCount=0,keywordMatch=0,j=0;j<headersData.length;j++){var data=tableData[i]?tableData[i][j]:null;this.hasFilterKeyword(headersData[j],data)&&headerCount++,useKeyword&&this.hasFilterKeyword("keyword",data)&&keywordMatch++}headerCount===filterValuesCount&&(useKeyword===!0&&keywordMatch>0||useKeyword===!1&&0===keywordMatch)&&filterMatchCount++}var hasFilters=0!==filterValuesCount;return 0===filterMatchCount&&hasFilters?0:0===filterMatchCount?tableData.length:filterMatchCount}},{key:"toCamelCase",value:function(str){return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,function(match,index){return 0===Number(match)?"":0===index?match.toLowerCase():match.toUpperCase()})}},{key:"getSortedRows",value:function(){for(var index=[],i=0;i<this.props.Data.length;i+=1){var val=this.props.Data[i][this.state.SortColumn]||void 0;this.state.SortColumn===-1&&(val=i+1);var isString="string"==typeof val||val instanceof String,isNumber=!isNaN(val)&&"object"!==("undefined"==typeof val?"undefined":_typeof(val));val="."===val?null:isNumber?Number(val):isString?val.toLowerCase():void 0,this.props.RowNameMap?index.push({RowIdx:i,Value:val,Content:this.props.RowNameMap[i]}):index.push({RowIdx:i,Value:val,Content:i+1})}return index.sort(function(a,b){if("ASC"===this.state.SortOrder){if(a.Value===b.Value){if(a.RowIdx<b.RowIdx)return-1;if(a.RowIdx>b.RowIdx)return 1}if(null===a.Value||"undefined"==typeof a.Value)return-1;if(null===b.Value||"undefined"==typeof b.Value)return 1;if(a.Value<b.Value)return-1;if(a.Value>b.Value)return 1}else{if(a.Value===b.Value){if(a.RowIdx<b.RowIdx)return 1;if(a.RowIdx>b.RowIdx)return-1}if(null===a.Value||"undefined"==typeof a.Value)return 1;if(null===b.Value||"undefined"==typeof b.Value)return-1;if(a.Value<b.Value)return 1;if(a.Value>b.Value)return-1}return 0}.bind(this)),index}},{key:"hasFilterKeyword",value:function(headerData,data){var header=this.toCamelCase(headerData),filterData=null,exactMatch=!1,result=!1,searchKey=null,searchString=null;if(this.props.Filter[header]&&(filterData=this.props.Filter[header].value,exactMatch=this.props.Filter[header].exactMatch),null===filterData||null===data)return!1;if("number"==typeof filterData){var intData=Number.parseInt(data,10);result=filterData===intData}if("string"==typeof filterData&&(searchKey=filterData.toLowerCase(),searchString=data.toLowerCase(),result=exactMatch?searchString===searchKey:searchString.indexOf(searchKey)>-1),"object"===("undefined"==typeof filterData?"undefined":_typeof(filterData)))for(var match=!1,i=0;i<filterData.length;i+=1)searchKey=filterData[i].toLowerCase(),searchString=data.toLowerCase(),match=searchString.indexOf(searchKey)>-1,match&&(result=!0);return result}},{key:"render",value:function(){if(null===this.props.Data||0===this.props.Data.length)return React.createElement("div",{className:"alert alert-info no-result-found-panel"},React.createElement("strong",null,"No result found."));for(var rowsPerPage=this.state.RowsPerPage,headers=this.state.Hide.defaultColumn===!0?[]:[React.createElement("th",{key:"th_col_0",onClick:this.setSortColumn(-1).bind(this)},this.props.RowNumLabel)],i=0;i<this.props.Headers.length;i+=1)if("undefined"==typeof loris.hiddenHeaders||loris.hiddenHeaders.indexOf(this.props.Headers[i])===-1){var colIndex=i+1;this.props.Headers[i]===this.props.freezeColumn?headers.push(React.createElement("th",{key:"th_col_"+colIndex,id:this.props.freezeColumn,onClick:this.setSortColumn(i).bind(this)},this.props.Headers[i])):headers.push(React.createElement("th",{key:"th_col_"+colIndex,onClick:this.setSortColumn(i).bind(this)},this.props.Headers[i]))}var rows=[],curRow=[],index=this.getSortedRows(),matchesFound=0,filteredRows=this.countFilteredRows(),currentPageRow=rowsPerPage*(this.state.PageNumber-1),filteredData=[],useKeyword=!1;this.props.Filter.keyword&&(useKeyword=!0);for(var _i=0;_i<this.props.Data.length&&rows.length<rowsPerPage;_i++){curRow=[];for(var filterMatchCount=0,keywordMatch=0,filterLength=0,j=0;j<this.props.Headers.length;j+=1){var data="Unknown";this.props.Data[index[_i].RowIdx]&&(data=this.props.Data[index[_i].RowIdx][j]),this.hasFilterKeyword(this.props.Headers[j],data)&&(filterMatchCount++,filteredData.push(this.props.Data[index[_i].RowIdx])),useKeyword===!0?(filterLength=Object.keys(this.props.Filter).length-1,this.hasFilterKeyword("keyword",data)&&keywordMatch++):filterLength=Object.keys(this.props.Filter).length;var key="td_col_"+j;this.props.getFormattedCell?(data=this.props.getFormattedCell(this.props.Headers[j],data,this.props.Data[index[_i].RowIdx],this.props.Headers),null!==data&&curRow.push(React.addons.createFragment({data:data}))):curRow.push(React.createElement("td",{key:key},data))}if(filterLength===filterMatchCount&&(useKeyword===!0&&keywordMatch>0||useKeyword===!1&&0===keywordMatch)&&(matchesFound++,matchesFound>currentPageRow)){var rowIndex=index[_i].Content;rows.push(React.createElement("tr",{key:"tr_"+rowIndex,colSpan:headers.length},React.createElement("td",null,rowIndex),curRow))}}var RowsPerPageDropdown=React.createElement("select",{className:"input-sm perPage",onChange:this.changeRowsPerPage,value:this.state.RowsPerPage},React.createElement("option",null,"20"),React.createElement("option",null,"50"),React.createElement("option",null,"100"),React.createElement("option",null,"1000"),React.createElement("option",null,"5000"),React.createElement("option",null,"10000")),csvData=this.props.Data;this.props.Filter&&filteredData.length>0&&(csvData=filteredData);var header=this.state.Hide.rowsPerPage===!0?"":React.createElement("div",{className:"table-header panel-heading"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-xs-12"},rows.length," rows displayed of ",filteredRows,". (Maximum rows per page: ",RowsPerPageDropdown,")",React.createElement("div",{className:"pull-right"},React.createElement(_PaginationLinks2.default,{Total:filteredRows,onChangePage:this.changePage,RowsPerPage:rowsPerPage,Active:this.state.PageNumber}))))),footer=this.state.Hide.downloadCSV===!0?"":React.createElement("div",{className:"panel-footer table-footer"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-xs-12"},React.createElement("div",{className:"col-xs-12 footerText"},rows.length," rows displayed of ",filteredRows,". (Maximum rows per page: ",RowsPerPageDropdown,")"),React.createElement("div",{className:"col-xs-6"},React.createElement("button",{className:"btn btn-primary downloadCSV",onClick:this.downloadCSV.bind(null,csvData)},"Download Table as CSV")),React.createElement("div",{className:"pull-right"},React.createElement(_PaginationLinks2.default,{Total:filteredRows,onChangePage:this.changePage,RowsPerPage:rowsPerPage,Active:this.state.PageNumber})))));return React.createElement("div",{className:"panel panel-default"},header,React.createElement("table",{className:"table table-hover table-primary table-bordered",id:"dynamictable"},React.createElement("thead",null,React.createElement("tr",{className:"info"},headers)),React.createElement("tbody",null,rows)),footer)}}]),StaticDataTable}(React.Component);StaticDataTable.propTypes={Headers:React.PropTypes.array.isRequired,Data:React.PropTypes.array.isRequired,RowNumLabel:React.PropTypes.string,getFormattedCell:React.PropTypes.func,onSort:React.PropTypes.func,Hide:React.PropTypes.object},StaticDataTable.defaultProps={Headers:[],Data:{},RowNumLabel:"No.",Filter:{},Hide:{rowsPerPage:!1,downloadCSV:!1,defaultColumn:!1}};var RStaticDataTable=React.createFactory(StaticDataTable);window.StaticDataTable=StaticDataTable,window.RStaticDataTable=RStaticDataTable,exports.default=StaticDataTable},4:function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Panel=function(_React$Component){function Panel(props){_classCallCheck(this,Panel);var _this=_possibleConstructorReturn(this,(Panel.__proto__||Object.getPrototypeOf(Panel)).call(this,props));return _this.state={collapsed:_this.props.initCollapsed},_this.panelClass=_this.props.initCollapsed?"panel-collapse collapse":"panel-collapse collapse in",_this.toggleCollapsed=_this.toggleCollapsed.bind(_this),_this}return _inherits(Panel,_React$Component),_createClass(Panel,[{key:"toggleCollapsed",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var glyphClass=this.state.collapsed?"glyphicon pull-right glyphicon-chevron-down":"glyphicon pull-right glyphicon-chevron-up",panelHeading=this.props.title?React.createElement("div",{className:"panel-heading",onClick:this.toggleCollapsed,"data-toggle":"collapse","data-target":"#"+this.props.id,style:{cursor:"pointer"}},this.props.title,React.createElement("span",{className:glyphClass})):"";return React.createElement("div",{className:"panel panel-primary"},panelHeading,React.createElement("div",{id:this.props.id,className:this.panelClass,role:"tabpanel"},React.createElement("div",{className:"panel-body",style:_extends({},this.props.style,{height:this.props.height})},this.props.children)))}}]),Panel}(React.Component);Panel.propTypes={id:React.PropTypes.string,height:React.PropTypes.string,title:React.PropTypes.string,style:React.PropTypes.object},Panel.defaultProps={initCollapsed:!1,id:"default-panel",height:"100%",style:{}},exports.default=Panel},18:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.DetailsPanel=exports.FilePanel=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Panel=__webpack_require__(4),_Panel2=_interopRequireDefault(_Panel),FilePanel=function(_React$Component){function FilePanel(props){_classCallCheck(this,FilePanel);var _this=_possibleConstructorReturn(this,(FilePanel.__proto__||Object.getPrototypeOf(FilePanel)).call(this,props));return _this.state={data:_this.props.data},_this}return _inherits(FilePanel,_React$Component),_createClass(FilePanel,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(prevProps,prevState){console.log("componentDidUpdate")}},{key:"render",value:function(){var styles={button:{download:{height:"40px",width:"140px",outline:"none",color:"#1c4781",cursor:"pointer",borderRadius:"40px",textDecoration:"none",backgroundColor:"#ffffff",border:"1px solid #1c4781"}},div:{container:{details:{height:"250px",minWidth:"300px",paddingBottom:"10px"},table:{minWidth:"300px",paddingBottom:"10px"},download:{minWidth:"300px",paddingBottom:"10px"}},element:{download_title:{color:"#074785",fontWeight:"bold",lineHeight:"40px",textAlign:"center",verticalAlign:"middle"}}},table:{style:{width:"100%",minWidth:"300px"},caption:{fontSize:15,color:"white",fontWeight:"bold",textAlign:"center",backgroundColor:"#074785"},row:{height:"30px",border:"1px solid gray"},header:{color:"#074785",paddingLeft:"5px"}}};return React.createElement(_Panel2.default,{id:this.props.id,title:"FILENAME"},React.createElement("div",{className:"container-fluid"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-4",style:styles.div.container.details},"..insert head image here.."),React.createElement("div",{className:"col-sm-4",style:styles.div.container.table},React.createElement("table",{style:styles.table.style},React.createElement("caption",{style:styles.table.caption},"Task Name: FaceHousCheck"),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Sampling Frequency"),React.createElement("td",null,"512")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"EEG Channel Count"),React.createElement("td",null,"128")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"EOG Channel Count"),React.createElement("td",null,"0")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"ECG Channel Count"),React.createElement("td",null,"0")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"EMG Channel Count"),React.createElement("td",null,"0")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"EEG Reference"),React.createElement("td",null,"Common")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Powerline Frequency"),React.createElement("td",null,"60Hz")))),React.createElement("div",{className:"col-sm-4",style:styles.div.container.download},React.createElement("div",{className:"form-group row flex-v-center"},React.createElement("div",{className:"col-xs-5",style:styles.div.element.download_title},"EEG File"),React.createElement("div",{className:"col-xs-2"},React.createElement("button",{style:styles.button.download},"Download"))),React.createElement("div",{className:"form-group row flex-v-center"},React.createElement("div",{className:"col-xs-5",style:styles.div.element.download_title},"Electrode Info"),React.createElement("div",{className:"col-xs-2"},React.createElement("button",{style:styles.button.download},"Download"))),React.createElement("div",{className:"form-group row flex-v-center"},React.createElement("div",{className:"col-xs-5",style:styles.div.element.download_title},"Channels Info"),React.createElement("div",{className:"col-xs-2"},React.createElement("button",{style:styles.button.download},"Download"))),React.createElement("div",{className:"form-group row flex-v-center"},React.createElement("div",{className:"col-xs-5",style:styles.div.element.download_title},"Events"),React.createElement("div",{className:"col-xs-2"},React.createElement("button",{style:styles.button.download},"Download"))),React.createElement("div",{className:"form-group row flex-v-center"},React.createElement("div",{className:"col-xs-5",style:styles.div.element.download_title},"All Files"),React.createElement("div",{className:"col-xs-2"},React.createElement("button",{style:styles.button.download},"Download")))))))}}]),FilePanel}(React.Component);FilePanel.propTypes={id:React.PropTypes.string,title:React.PropTypes.string,data:React.PropTypes.object},FilePanel.defaultProps={id:"file_panel",title:"FILENAME",data:{}};var DetailsPanel=function(_React$Component2){function DetailsPanel(props){_classCallCheck(this,DetailsPanel);var _this2=_possibleConstructorReturn(this,(DetailsPanel.__proto__||Object.getPrototypeOf(DetailsPanel)).call(this,props));return _this2.state={data:_this2.props.data},_this2}return _inherits(DetailsPanel,_React$Component2),_createClass(DetailsPanel,[{key:"render",value:function(){var styles={panel:{padding:0},container:{task:{padding:0},device:{padding:0}},table:{style:{maxWidth:"100%",minWidth:"300px"},row:{minHeight:"30px",border:"1px solid gray"},header:{padding:"10px",color:"#074785"},data:{padding:"10px"}}};return React.createElement(_Panel2.default,{id:this.props.id,title:this.props.title,style:styles.panel},React.createElement("div",{className:"container-fluid"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-6",style:styles.container.task},React.createElement("table",{style:styles.table.style},React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Task Description"),React.createElement("td",{style:styles.table.data},"Visual presentation of oval cropped face and house images both upright and inverted. Rare left or right half oval checkerboards were presented as targets for keypress response.")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Instructions"),React.createElement("td",{style:styles.table.data})),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"EEG Ground"),React.createElement("td",{style:styles.table.data})),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Trigger Count"),React.createElement("td",{style:styles.table.data},"0")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"EEG Placement Scheme"),React.createElement("td",{style:styles.table.data},"Custom equidistant 128 channel BioSemi montage established in coordination with Judith Schedden McMaster University")),React.createElement("tr",{style:styles.table.row
},React.createElement("th",{scope:"row",style:styles.table.header},"Record Type"),React.createElement("td",{style:styles.table.data},"Continuous")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"CogAtlas ID"),React.createElement("td",{style:styles.table.data})),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"CogPOID"),React.createElement("td",{style:styles.table.data})),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Institution Name"),React.createElement("td",{style:styles.table.data},"Brock University")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Institution Address"),React.createElement("td",{style:styles.table.data},"500 Glenrifge Ave, St.Catharines, Ontario")))),React.createElement("div",{className:"col-sm-6",style:styles.container.device},React.createElement("table",{style:styles.table.style},React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Device Serial Number"),React.createElement("td",{style:styles.table.data})),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Misc Channel Count"),React.createElement("td",{style:styles.table.data},"0")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Manufacturer"),React.createElement("td",{style:styles.table.data},"BioSemi")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Manufacturer Model Name"),React.createElement("td",{style:styles.table.data},"Active Two")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Cap Manufacturer"),React.createElement("td",{style:styles.table.data},"Electro Cap International")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Cap Model Name"),React.createElement("td",{style:styles.table.data})),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Hardware Filters"),React.createElement("td",{style:styles.table.data},"DC to Nyquist 512Hz")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Recording Duration"),React.createElement("td",{style:styles.table.data},"2045")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Epoch Length"),React.createElement("td",{style:styles.table.data},"Inf")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Device Version"),React.createElement("td",{style:styles.table.data},"NI ActiView 532-Lores")),React.createElement("tr",{style:styles.table.row},React.createElement("th",{scope:"row",style:styles.table.header},"Subject Artifact Description"),React.createElement("td",{style:styles.table.data})))))))}}]),DetailsPanel}(React.Component);DetailsPanel.propTypes={id:React.PropTypes.string,title:React.PropTypes.string,data:React.PropTypes.object},DetailsPanel.defaultProps={id:"data_panel",title:"DATA DETAILS",data:{}},exports.FilePanel=FilePanel,exports.DetailsPanel=DetailsPanel}});
//# sourceMappingURL=eeg_session_view.js.map