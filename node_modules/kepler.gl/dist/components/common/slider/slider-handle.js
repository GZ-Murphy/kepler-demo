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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mouseEvent = _interopRequireDefault(require("./mouse-event"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  border-radius: 3px;\n  display: inline-block;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  z-index: 999;\n  margin-left: ", "px;\n  font-size: 9.5px;\n  font-weight: 500;\n  padding: 7px 10px;\n  background-color: ", ";\n  color: ", ";\n  margin-bottom: -6px;\n  width: 50px;\n\n  :before,:after {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n  }\n\n  :before {\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    left: -8px;\n    top: 50%;\n  }\n\n  :after {\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    left: -6px;\n    top: 50%;\n    margin-top: -4px;\n    border-right-color: ", ";\n    border-right-style: solid;\n    border-right-width: 6px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 10;\n  margin-", ": -", "px;\n  height: ", "px;\n  width: ", "px;\n  box-shadow: ", ";\n  background-color: ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSliderHandle = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.vertical ? 'left' : 'top';
}, function (props) {
  return (props.sliderHandleWidth - props.theme.sliderBarHeight) / 2;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return props.theme.sliderHandleShadow;
}, function (props) {
  return props.theme.sliderHandleColor;
}, function (props) {
  return props.active ? props.theme.selectBorderColor : props.theme.sliderHandleColor;
}, function (props) {
  return props.theme.sliderHandleHoverColor;
});

var StyledSliderTooltip = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.sliderHandleWidth + 12;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
});

var SliderTooltip = function SliderTooltip(_ref) {
  var value = _ref.value,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? function (val) {
    return val;
  } : _ref$format,
      style = _ref.style,
      sliderHandleWidth = _ref.sliderHandleWidth;
  return _react["default"].createElement(StyledSliderTooltip, {
    sliderHandleWidth: sliderHandleWidth,
    style: style
  }, format(value));
};

var SliderHandle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(SliderHandle, _Component);

  function SliderHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderHandle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SliderHandle).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.valueListener,
      toggleMouseOver: _this.toggleMouseOver
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderHandle, [{
    key: "render",
    value: function render() {
      var style = (0, _defineProperty2["default"])({}, this.props.vertical ? 'bottom' : 'left', this.props.left);
      return _react["default"].createElement("div", {
        style: {
          display: this.props.display ? 'block' : 'none'
        }
      }, this.props.showTooltip && this.state.mouseOver ? _react["default"].createElement(SliderTooltip, {
        style: style,
        sliderHandleWidth: this.props.sliderHandleWidth,
        value: Number.isFinite(this.props.value) ? this.props.value : null
      }) : null, _react["default"].createElement(StyledSliderHandle, {
        className: (0, _classnames["default"])('kg-range-slider__handle', {
          'kg-range-slider__handle--active': this.state.mouseOver
        }),
        sliderHandleWidth: this.props.sliderHandleWidth,
        active: this.state.mouseOver,
        vertical: this.props.vertical,
        style: style,
        onMouseDown: this.mouseEvent.handleMouseDown,
        onTouchStart: this.mouseEvent.handleTouchStart
      }));
    }
  }]);
  return SliderHandle;
}(_react.Component);

exports["default"] = SliderHandle;
(0, _defineProperty2["default"])(SliderHandle, "propTypes", {
  sliderHandleWidth: _propTypes["default"].number,
  left: _propTypes["default"].string,
  display: _propTypes["default"].bool,
  valueListener: _propTypes["default"].func,
  vertical: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SliderHandle, "defaultProps", {
  sliderHandleWidth: 12,
  left: '50%',
  display: true,
  vertical: false,
  valueListener: function valueListenerFn() {},
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLWhhbmRsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTbGlkZXJIYW5kbGUiLCJzdHlsZWQiLCJzcGFuIiwicHJvcHMiLCJ2ZXJ0aWNhbCIsInNsaWRlckhhbmRsZVdpZHRoIiwidGhlbWUiLCJzbGlkZXJCYXJIZWlnaHQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNsaWRlckhhbmRsZUhlaWdodCIsInNsaWRlckhhbmRsZVNoYWRvdyIsInNsaWRlckhhbmRsZUNvbG9yIiwiYWN0aXZlIiwic2VsZWN0Qm9yZGVyQ29sb3IiLCJzbGlkZXJIYW5kbGVIb3ZlckNvbG9yIiwiU3R5bGVkU2xpZGVyVG9vbHRpcCIsImRpdiIsInRvb2x0aXBCZyIsInRvb2x0aXBDb2xvciIsIlNsaWRlclRvb2x0aXAiLCJ2YWx1ZSIsImZvcm1hdCIsInZhbCIsInN0eWxlIiwiU2xpZGVySGFuZGxlIiwibW91c2VPdmVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1vdXNlRXZlbnQiLCJNb3VzZUV2ZW50SGFuZGxlciIsInZhbHVlTGlzdGVuZXIiLCJ0b2dnbGVNb3VzZU92ZXIiLCJsZWZ0IiwiZGlzcGxheSIsInNob3dUb29sdGlwIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlVG91Y2hTdGFydCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwidmFsdWVMaXN0ZW5lckZuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsNkJBQU9DLElBQVYsb0JBR2IsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQixNQUFqQixHQUEwQixLQUEvQjtBQUFBLENBSFEsRUFHbUMs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QUFVRSxNQUZDO0FBR2pCUCxFQUFBQSxPQUFPLEVBQUVLLHNCQUFVRyxJQUhGO0FBSWpCWCxFQUFBQSxhQUFhLEVBQUVRLHNCQUFVSSxJQUpSO0FBS2pCdkMsRUFBQUEsUUFBUSxFQUFFbUMsc0JBQVVHO0FBTEgsQztpQ0FEQWpCLFksa0JBU0c7QUFDcEJwQixFQUFBQSxpQkFBaUIsRUFBRSxFQURDO0FBRXBCNEIsRUFBQUEsSUFBSSxFQUFFLEtBRmM7QUFHcEJDLEVBQUFBLE9BQU8sRUFBRSxJQUhXO0FBSXBCOUIsRUFBQUEsUUFBUSxFQUFFLEtBSlU7QUFLcEIyQixFQUFBQSxhQUFhLEVBQUUsU0FBU2EsZUFBVCxHQUEyQixDQUFFLENBTHhCO0FBTXBCVCxFQUFBQSxXQUFXLEVBQUU7QUFOTyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNb3VzZUV2ZW50SGFuZGxlciBmcm9tICcuL21vdXNlLWV2ZW50JztcblxuY29uc3QgU3R5bGVkU2xpZGVySGFuZGxlID0gc3R5bGVkLnNwYW5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi0ke3Byb3BzID0+IChwcm9wcy52ZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnKX06IC0ke3Byb3BzID0+XG4gIChwcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAtIHByb3BzLnRoZW1lLnNsaWRlckJhckhlaWdodCkgLyAyfXB4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT5cbiAgICBOdW1iZXIuaXNGaW5pdGUocHJvcHMuc2xpZGVySGFuZGxlV2lkdGgpXG4gICAgICA/IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoXG4gICAgICA6IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhlaWdodH1weDtcbiAgd2lkdGg6ICR7cHJvcHMgPT5cbiAgICBOdW1iZXIuaXNGaW5pdGUocHJvcHMuc2xpZGVySGFuZGxlV2lkdGgpXG4gICAgICA/IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoXG4gICAgICA6IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhlaWdodH1weDtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVTaGFkb3d9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUNvbG9yfTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5zZWxlY3RCb3JkZXJDb2xvclxuICAgICAgOiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVDb2xvcn07XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhvdmVyQ29sb3J9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkU2xpZGVyVG9vbHRpcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMuc2xpZGVySGFuZGxlV2lkdGggKyAxMn1weDtcbiAgZm9udC1zaXplOiA5LjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcENvbG9yfTtcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgd2lkdGg6IDUwcHg7XG5cbiAgOmJlZm9yZSw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICA6YmVmb3JlIHtcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGxlZnQ6IC04cHg7XG4gICAgdG9wOiA1MCU7XG4gIH1cblxuICA6YWZ0ZXIge1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgbGVmdDogLTZweDtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA2cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFNsaWRlclRvb2x0aXAgPSAoe1xuICB2YWx1ZSxcbiAgZm9ybWF0ID0gdmFsID0+IHZhbCxcbiAgc3R5bGUsXG4gIHNsaWRlckhhbmRsZVdpZHRoXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNsaWRlclRvb2x0aXBcbiAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXtzbGlkZXJIYW5kbGVXaWR0aH1cbiAgICAgIHN0eWxlPXtzdHlsZX0+e2Zvcm1hdCh2YWx1ZSl9XG4gICAgPC9TdHlsZWRTbGlkZXJUb29sdGlwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckhhbmRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2xpZGVySGFuZGxlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGVmdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2YWx1ZUxpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNsaWRlckhhbmRsZVdpZHRoOiAxMixcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICB2YWx1ZUxpc3RlbmVyOiBmdW5jdGlvbiB2YWx1ZUxpc3RlbmVyRm4oKSB7fSxcbiAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50SGFuZGxlcih7XG4gICAgICB2ZXJ0aWNhbDogcHJvcHMudmVydGljYWwsXG4gICAgICB2YWx1ZUxpc3RlbmVyOiBwcm9wcy52YWx1ZUxpc3RlbmVyLFxuICAgICAgdG9nZ2xlTW91c2VPdmVyOiB0aGlzLnRvZ2dsZU1vdXNlT3ZlclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUgPSB7bW91c2VPdmVyOiBmYWxzZX07XG5cbiAgdG9nZ2xlTW91c2VPdmVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlT3ZlcjogIXRoaXMuc3RhdGUubW91c2VPdmVyfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlID0ge1t0aGlzLnByb3BzLnZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCddOiB0aGlzLnByb3BzLmxlZnR9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnByb3BzLmRpc3BsYXkgPyAnYmxvY2snIDogJ25vbmUnfX0+XG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dUb29sdGlwICYmIHRoaXMuc3RhdGUubW91c2VPdmVyID8gPFNsaWRlclRvb2x0aXBcbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgc2xpZGVySGFuZGxlV2lkdGg9e3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGh9XG4gICAgICAgICAgdmFsdWU9e051bWJlci5pc0Zpbml0ZSh0aGlzLnByb3BzLnZhbHVlKSA/IHRoaXMucHJvcHMudmFsdWUgOiBudWxsfVxuICAgICAgICAvPiA6IG51bGx9XG4gICAgICAgIDxTdHlsZWRTbGlkZXJIYW5kbGVcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2tnLXJhbmdlLXNsaWRlcl9faGFuZGxlJywge1xuICAgICAgICAgICAgJ2tnLXJhbmdlLXNsaWRlcl9faGFuZGxlLS1hY3RpdmUnOiB0aGlzLnN0YXRlLm1vdXNlT3ZlclxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5tb3VzZU92ZXJ9XG4gICAgICAgICAgdmVydGljYWw9e3RoaXMucHJvcHMudmVydGljYWx9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRXZlbnQuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5tb3VzZUV2ZW50LmhhbmRsZVRvdWNoU3RhcnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=