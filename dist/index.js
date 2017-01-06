"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var _react=require("react"),_react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)!(0<=keys.indexOf(i))&&Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return call&&("object"==typeof call||"function"==typeof call)?call:self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var getDomains=function getDomains(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:5,d=[],f=a.split("@")[1],g=void 0,h=void 0;return(f||""==f)&&(g=f.replace(/[^.-a-z]/gim,""),h=new RegExp("^"+g),b.forEach(function(i){h.test(i)&&d.length<c&&d.push(i)})),d},getEmailWithDomain=function getEmailWithDomain(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],c=a.split("@")[0];return c+"@"+b},domains=["gmail.com","yahoo.com","hotmail.com","outlook.com","live.com","aol.com","msn.com"];var EmailCompleter=function(_Component){function EmailCompleter(a){_classCallCheck(this,EmailCompleter);var _this=_possibleConstructorReturn(this,(EmailCompleter.__proto__||Object.getPrototypeOf(EmailCompleter)).call(this,a));return _this.state={value:"", hint:!1, highlightedIndex:null, activeDomains:[], completerMouseDown:!1},_initialiseProps.call(_this),_this.state={value:"",hint:!1,highlightedIndex:null,activeDomains:[],completerMouseDown:!1},_this}return _inherits(EmailCompleter,_Component),_createClass(EmailCompleter,[{key:"composeEventHandlers",value:function composeEventHandlers(a,b){return b?function(c){a(c),b(c)}:a}},{key:"handleKeyDown",value:function handleKeyDown(a){this.keyDownHandlers[a.key]&&this.keyDownHandlers[a.key].call(this,a)}},{key:"handleBlur",value:function handleBlur(a){this.state.activeDomains.length?!this.state.completerMouseDown&&(this.closeHint(),this.props.onBlur?this.props.onBlur(a):null):this.props.onBlur?this.props.onBlur(a):null}},{key:"handleMouseDown",value:function handleMouseDown(){this.setState({completerMouseDown:!0})}},{key:"changeValue",value:function changeValue(a){var b=a.target.value,c=getDomains(b,this.props.domains);this.setState({hint:!0,highlightedIndex:null,activeDomains:c,value:b})}},{key:"closeHint",value:function closeHint(){this.setState({hint:!1,activeDomains:[],completerMouseDown:!1})}},{key:"complete",value:function complete(a){this.setState({value:a}),this.closeHint()}},{key:"render",value:function render(){var _this2=this,_props=this.props,a=_props.domains,b=_objectWithoutProperties(_props,["domains"]);return _react2.default.createElement("div",{className:"email-completer-wrapper"},_react2.default.createElement("input",_extends({},b,{value:this.state.value,onBlur:this.handleBlur.bind(this),onChange:this.composeEventHandlers(this.changeValue.bind(this),b.onChange),onKeyDown:this.composeEventHandlers(this.handleKeyDown.bind(this),b.onKeyDown),autoComplete:"off"})),_react2.default.createElement("ul",{className:(this.state.hint?"":"hide")+" email-domains"},this.state.activeDomains.map(function(c,d){return _react2.default.createElement("li",{key:d,onMouseDown:_this2.handleMouseDown.bind(_this2),className:_this2.state.highlightedIndex==d?"selected":"",onClick:_this2.complete.bind(_this2,getEmailWithDomain(_this2.state.value,c))},getEmailWithDomain(_this2.state.value,c))})))}}]),EmailCompleter}(_react.Component);EmailCompleter.propTypes={domains:_react.PropTypes.array};EmailCompleter.defaultProps={domains:domains};var _initialiseProps=function _initialiseProps(){this.keyDownHandlers={ArrowDown:function ArrowDown(a){a.preventDefault();var b=this.state.activeDomains.length;if(b){var c=this.state.highlightedIndex,d=null===c||c===b-1?0:c+1;this.setState({highlightedIndex:d})}},ArrowUp:function ArrowUp(a){a.preventDefault();var b=this.state.activeDomains.length;if(b){var c=this.state.highlightedIndex,d=0===c||null===c?b-1:c-1;this.setState({highlightedIndex:d})}},Enter:function Enter(a){if(a.preventDefault(),this.state.hint&&null!==this.state.highlightedIndex){var _b=getEmailWithDomain(this.state.value,this.state.activeDomains[this.state.highlightedIndex]);this.complete(_b)}}}};exports.default=EmailCompleter;
