"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: ", "px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var HeaderActionWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.flush ? 0 : 8;
}, function (props) {
  return props.active ? props.theme.panelHeaderIconActive : props.theme.panelHeaderIcon;
}, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
}); // Need to use react class to access props.component


var PanelHeaderAction =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(PanelHeaderAction, _Component);

  function PanelHeaderAction() {
    (0, _classCallCheck2["default"])(this, PanelHeaderAction);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PanelHeaderAction).apply(this, arguments));
  }

  (0, _createClass2["default"])(PanelHeaderAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          tooltip = _this$props.tooltip,
          id = _this$props.id,
          active = _this$props.active,
          flush = _this$props.flush,
          hoverColor = _this$props.hoverColor,
          tooltipType = _this$props.tooltipType,
          disabled = _this$props.disabled,
          className = _this$props.className;
      return _react["default"].createElement(HeaderActionWrapper, {
        className: (0, _classnames2["default"])('panel--header__action', (0, _defineProperty2["default"])({
          disabled: disabled
        }, className, className)),
        active: active,
        hoverColor: hoverColor,
        flush: flush
      }, _react["default"].createElement(this.props.IconComponent, {
        "data-tip": true,
        "data-for": "".concat(tooltip, "_").concat(id),
        height: "18px",
        onClick: onClick
      }), tooltip ? _react["default"].createElement(_styledComponents2.Tooltip, {
        id: "".concat(tooltip, "_").concat(id),
        effect: "solid",
        delayShow: 500,
        type: tooltipType
      }, _react["default"].createElement("span", null, tooltip)) : null);
    }
  }]);
  return PanelHeaderAction;
}(_react.Component);

exports["default"] = PanelHeaderAction;
(0, _defineProperty2["default"])(PanelHeaderAction, "propTypes", {
  id: _propTypes["default"].string,
  flush: _propTypes["default"].bool,
  tooltip: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  active: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  hoverColor: _propTypes["default"].string,
  className: _propTypes["default"].string,
  tooltipType: _propTypes["default"].string
});
(0, _defineProperty2["default"])(PanelHeaderAction, "defaultProps", {
  onClick: function onClick() {},
  hoverColor: null,
  active: false
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbi5qcyJdLCJuYW1lcyI6WyJIZWFkZXJBY3Rpb25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJmbHVzaCIsImFjdGl2ZSIsInRoZW1lIiwicGFuZWxIZWFkZXJJY29uQWN0aXZlIiwicGFuZWxIZWFkZXJJY29uIiwiaG92ZXJDb2xvciIsInRleHRDb2xvckhsIiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJvbkNsaWNrIiwidG9vbHRpcCIsImlkIiwidG9vbHRpcFR5cGUiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ1IsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLENBQWQsR0FBa0IsQ0FBdkI7QUFBQSxDQURHLEVBSWQsVUFBQUQsS0FBSztBQUFBLFNBQ1pBLEtBQUssQ0FBQ0UsTUFBTixHQUNJRixLQUFLLENBQUNHLEtBQU4sQ0FBWUMscUJBRGhCLEdBRUlKLEtBQUssQ0FBQ0csS0FBTixDQUFZRSxlQUhKO0FBQUEsQ0FKUyxFQVdaLFVBQUFMLEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNNLFVBQU4sR0FDSU4sS0FBSyxDQUFDRyxLQUFOLENBQVlILEtBQUssQ0FBQ00sVUFBbEIsQ0FESixHQUVJTixLQUFLLENBQUNHLEtBQU4sQ0FBWUksV0FISjtBQUFBLENBWE8sQ0FBekIsQyxDQXVCQTs7O0lBQ3FCQyxpQjs7Ozs7Ozs7Ozs7OzZCQW1CVjtBQUFBLHdCQVdILEtBQUtSLEtBWEY7QUFBQSxVQUVMUyxPQUZLLGVBRUxBLE9BRks7QUFBQSxVQUdMQyxPQUhLLGVBR0xBLE9BSEs7QUFBQSxVQUlMQyxFQUpLLGVBSUxBLEVBSks7QUFBQSxVQUtMVCxNQUxLLGVBS0xBLE1BTEs7QUFBQSxVQU1MRCxLQU5LLGVBTUxBLEtBTks7QUFBQSxVQU9MSyxVQVBLLGVBT0xBLFVBUEs7QUFBQSxVQVFMTSxXQVJLLGVBUUxBLFdBUks7QUFBQSxVQVNMQyxRQVRLLGVBU0xBLFFBVEs7QUFBQSxVQVVMQyxTQVZLLGVBVUxBLFNBVks7QUFZUCxhQUNFLGdDQUFDLG1CQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNkJBQVcsdUJBQVg7QUFBcUNELFVBQUFBLFFBQVEsRUFBUkE7QUFBckMsV0FBZ0RDLFNBQWhELEVBQTREQSxTQUE1RCxFQURiO0FBRUUsUUFBQSxNQUFNLEVBQUVaLE1BRlY7QUFHRSxRQUFBLFVBQVUsRUFBRUksVUFIZDtBQUlFLFFBQUEsS0FBSyxFQUFFTDtBQUpULFNBTUUscUNBQU0sS0FBTixDQUFZLGFBQVo7QUFDRSx3QkFERjtBQUVFLDhCQUFhUyxPQUFiLGNBQXdCQyxFQUF4QixDQUZGO0FBR0UsUUFBQSxNQUFNLEVBQUMsTUFIVDtBQUlFLFFBQUEsT0FBTyxFQUFFRjtBQUpYLFFBTkYsRUFZR0MsT0FBTyxHQUNOLGdDQUFDLDBCQUFEO0FBQ0UsUUFBQSxFQUFFLFlBQUtBLE9BQUwsY0FBZ0JDLEVBQWhCLENBREo7QUFFRSxRQUFBLE1BQU0sRUFBQyxPQUZUO0FBR0UsUUFBQSxTQUFTLEVBQUUsR0FIYjtBQUlFLFFBQUEsSUFBSSxFQUFFQztBQUpSLFNBTUUsOENBQU9GLE9BQVAsQ0FORixDQURNLEdBU0osSUFyQk4sQ0FERjtBQXlCRDs7O0VBeEQ0Q0ssZ0I7OztpQ0FBMUJQLGlCLGVBQ0E7QUFDakJHLEVBQUFBLEVBQUUsRUFBRUssc0JBQVVDLE1BREc7QUFFakJoQixFQUFBQSxLQUFLLEVBQUVlLHNCQUFVRSxJQUZBO0FBR2pCUixFQUFBQSxPQUFPLEVBQUVNLHNCQUFVQyxNQUhGO0FBSWpCUixFQUFBQSxPQUFPLEVBQUVPLHNCQUFVRyxJQUpGO0FBS2pCakIsRUFBQUEsTUFBTSxFQUFFYyxzQkFBVUUsSUFMRDtBQU1qQkwsRUFBQUEsUUFBUSxFQUFFRyxzQkFBVUUsSUFOSDtBQU9qQlosRUFBQUEsVUFBVSxFQUFFVSxzQkFBVUMsTUFQTDtBQVFqQkgsRUFBQUEsU0FBUyxFQUFFRSxzQkFBVUMsTUFSSjtBQVNqQkwsRUFBQUEsV0FBVyxFQUFFSSxzQkFBVUM7QUFUTixDO2lDQURBVCxpQixrQkFhRztBQUNwQkMsRUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FERztBQUVwQkgsRUFBQUEsVUFBVSxFQUFFLElBRlE7QUFHcEJKLEVBQUFBLE1BQU0sRUFBRTtBQUhZLEM7QUE0Q3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIZWFkZXJBY3Rpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzLmZsdXNoID8gMCA6IDgpfXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckljb25BY3RpdmVcbiAgICAgIDogcHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29ufTtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuaG92ZXJDb2xvclxuICAgICAgICA/IHByb3BzLnRoZW1lW3Byb3BzLmhvdmVyQ29sb3JdXG4gICAgICAgIDogcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICB9XG5cbiAgJi5kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5gO1xuXG4vLyBOZWVkIHRvIHVzZSByZWFjdCBjbGFzcyB0byBhY2Nlc3MgcHJvcHMuY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbEhlYWRlckFjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmx1c2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaG92ZXJDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG9vbHRpcFR5cGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgIGhvdmVyQ29sb3I6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvbkNsaWNrLFxuICAgICAgdG9vbHRpcCxcbiAgICAgIGlkLFxuICAgICAgYWN0aXZlLFxuICAgICAgZmx1c2gsXG4gICAgICBob3ZlckNvbG9yLFxuICAgICAgdG9vbHRpcFR5cGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyQWN0aW9uV3JhcHBlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3BhbmVsLS1oZWFkZXJfX2FjdGlvbicsIHtkaXNhYmxlZCwgW2NsYXNzTmFtZV06IGNsYXNzTmFtZX0pfVxuICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgaG92ZXJDb2xvcj17aG92ZXJDb2xvcn1cbiAgICAgICAgZmx1c2g9e2ZsdXNofVxuICAgICAgPlxuICAgICAgICA8dGhpcy5wcm9wcy5JY29uQ29tcG9uZW50XG4gICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICBkYXRhLWZvcj17YCR7dG9vbHRpcH1fJHtpZH1gfVxuICAgICAgICAgIGhlaWdodD1cIjE4cHhcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIHt0b29sdGlwID8gKFxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBpZD17YCR7dG9vbHRpcH1fJHtpZH1gfVxuICAgICAgICAgICAgZWZmZWN0PVwic29saWRcIlxuICAgICAgICAgICAgZGVsYXlTaG93PXs1MDB9XG4gICAgICAgICAgICB0eXBlPXt0b29sdGlwVHlwZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj57dG9vbHRpcH08L3NwYW4+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvSGVhZGVyQWN0aW9uV3JhcHBlcj5cbiAgICApO1xuICB9XG59O1xuIl19