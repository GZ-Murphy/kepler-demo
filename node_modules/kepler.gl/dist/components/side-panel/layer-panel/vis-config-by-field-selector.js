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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _utils = require("../../../utils/utils");

// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var VisConfigByFieldSelector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(VisConfigByFieldSelector, _Component);

  function VisConfigByFieldSelector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, VisConfigByFieldSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(VisConfigByFieldSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateVisByField", function (val) {
      _this.props.updateField(val);
    });
    return _this;
  }

  (0, _createClass2["default"])(VisConfigByFieldSelector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          property = _this$props.property,
          showScale = _this$props.showScale,
          selectedField = _this$props.selectedField,
          description = _this$props.description,
          _this$props$scaleOpti = _this$props.scaleOptions,
          scaleOptions = _this$props$scaleOpti === void 0 ? [] : _this$props$scaleOpti;
      return _react["default"].createElement(_styledComponents.SidePanelSection, null, _react["default"].createElement(_styledComponents.SidePanelSection, null, _react["default"].createElement(_styledComponents.PanelLabelWrapper, null, _react["default"].createElement(_styledComponents.PanelLabel, null, this.props.label || "".concat((0, _utils.capitalizeFirstLetter)(property), " based on")), description && _react["default"].createElement(_infoHelper["default"], {
        description: description,
        id: "".concat(this.props.id, "-").concat(property)
      })), _react["default"].createElement(_fieldSelector["default"], {
        fields: this.props.fields,
        value: selectedField && selectedField.name,
        placeholder: this.props.placeholder,
        onSelect: this._updateVisByField,
        erasable: true
      })), _react["default"].createElement("div", null, showScale ? _react["default"].createElement(_dimensionScaleSelector["default"], {
        scaleType: this.props.scaleType,
        options: scaleOptions,
        label: "".concat(property, " scale"),
        onSelect: this.props.updateScale,
        disabled: scaleOptions.length < 2
      }) : null));
    }
  }]);
  return VisConfigByFieldSelector;
}(_react.Component);

exports["default"] = VisConfigByFieldSelector;
(0, _defineProperty2["default"])(VisConfigByFieldSelector, "propTypes", {
  channel: _propTypes["default"].string.isRequired,
  fields: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  id: _propTypes["default"].string.isRequired,
  property: _propTypes["default"].string.isRequired,
  showScale: _propTypes["default"].bool.isRequired,
  updateField: _propTypes["default"].func.isRequired,
  updateScale: _propTypes["default"].func.isRequired,
  // optional
  scaleType: _propTypes["default"].string,
  selectedField: _propTypes["default"].object,
  description: _propTypes["default"].string,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdmlzLWNvbmZpZy1ieS1maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IiLCJ2YWwiLCJwcm9wcyIsInVwZGF0ZUZpZWxkIiwicHJvcGVydHkiLCJzaG93U2NhbGUiLCJzZWxlY3RlZEZpZWxkIiwiZGVzY3JpcHRpb24iLCJzY2FsZU9wdGlvbnMiLCJsYWJlbCIsImlkIiwiZmllbGRzIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiX3VwZGF0ZVZpc0J5RmllbGQiLCJzY2FsZVR5cGUiLCJ1cGRhdGVTY2FsZSIsImxlbmd0aCIsIkNvbXBvbmVudCIsImNoYW5uZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsImFueSIsImJvb2wiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOztBQS9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQWVxQkEsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBHQWtCQyxVQUFBQyxHQUFHLEVBQUk7QUFDekIsWUFBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCRixHQUF2QjtBQUNELEs7Ozs7Ozs2QkFFUTtBQUFBLHdCQU9ILEtBQUtDLEtBUEY7QUFBQSxVQUVMRSxRQUZLLGVBRUxBLFFBRks7QUFBQSxVQUdMQyxTQUhLLGVBR0xBLFNBSEs7QUFBQSxVQUlMQyxhQUpLLGVBSUxBLGFBSks7QUFBQSxVQUtMQyxXQUxLLGVBS0xBLFdBTEs7QUFBQSw4Q0FNTEMsWUFOSztBQUFBLFVBTUxBLFlBTkssc0NBTVUsRUFOVjtBQVNQLGFBQ0UsZ0NBQUMsa0NBQUQsUUFDRSxnQ0FBQyxrQ0FBRCxRQUNFLGdDQUFDLG1DQUFELFFBQ0UsZ0NBQUMsNEJBQUQsUUFDRyxLQUFLTixLQUFMLENBQVdPLEtBQVgsY0FBdUIsa0NBQXNCTCxRQUF0QixDQUF2QixjQURILENBREYsRUFJR0csV0FBVyxJQUNWLGdDQUFDLHNCQUFEO0FBQ0UsUUFBQSxXQUFXLEVBQUVBLFdBRGY7QUFFRSxRQUFBLEVBQUUsWUFBSyxLQUFLTCxLQUFMLENBQVdRLEVBQWhCLGNBQXNCTixRQUF0QjtBQUZKLFFBTEosQ0FERixFQVlFLGdDQUFDLHlCQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUUsS0FBS0YsS0FBTCxDQUFXUyxNQURyQjtBQUVFLFFBQUEsS0FBSyxFQUFFTCxhQUFhLElBQUlBLGFBQWEsQ0FBQ00sSUFGeEM7QUFHRSxRQUFBLFdBQVcsRUFBRSxLQUFLVixLQUFMLENBQVdXLFdBSDFCO0FBSUUsUUFBQSxRQUFRLEVBQUUsS0FBS0MsaUJBSmpCO0FBS0UsUUFBQSxRQUFRO0FBTFYsUUFaRixDQURGLEVBcUJFLDZDQUNHVCxTQUFTLEdBQ1IsZ0NBQUMsa0NBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSxLQUFLSCxLQUFMLENBQVdhLFNBRHhCO0FBRUUsUUFBQSxPQUFPLEVBQUVQLFlBRlg7QUFHRSxRQUFBLEtBQUssWUFBS0osUUFBTCxXQUhQO0FBSUUsUUFBQSxRQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXYyxXQUp2QjtBQUtFLFFBQUEsUUFBUSxFQUFFUixZQUFZLENBQUNTLE1BQWIsR0FBc0I7QUFMbEMsUUFEUSxHQVFOLElBVE4sQ0FyQkYsQ0FERjtBQW1DRDs7O0VBbEVtREMsZ0I7OztpQ0FBakNsQix3QixlQUNBO0FBQ2pCbUIsRUFBQUEsT0FBTyxFQUFFQyxzQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVqQlgsRUFBQUEsTUFBTSxFQUFFUyxzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVJLEdBQTVCLEVBQWlDRixVQUZ4QjtBQUdqQlosRUFBQUEsRUFBRSxFQUFFVSxzQkFBVUMsTUFBVixDQUFpQkMsVUFISjtBQUlqQmxCLEVBQUFBLFFBQVEsRUFBRWdCLHNCQUFVQyxNQUFWLENBQWlCQyxVQUpWO0FBS2pCakIsRUFBQUEsU0FBUyxFQUFFZSxzQkFBVUssSUFBVixDQUFlSCxVQUxUO0FBTWpCbkIsRUFBQUEsV0FBVyxFQUFFaUIsc0JBQVVNLElBQVYsQ0FBZUosVUFOWDtBQU9qQk4sRUFBQUEsV0FBVyxFQUFFSSxzQkFBVU0sSUFBVixDQUFlSixVQVBYO0FBU2pCO0FBQ0FQLEVBQUFBLFNBQVMsRUFBRUssc0JBQVVDLE1BVko7QUFXakJmLEVBQUFBLGFBQWEsRUFBRWMsc0JBQVVPLE1BWFI7QUFZakJwQixFQUFBQSxXQUFXLEVBQUVhLHNCQUFVQyxNQVpOO0FBYWpCWixFQUFBQSxLQUFLLEVBQUVXLHNCQUFVQyxNQWJBO0FBY2pCUixFQUFBQSxXQUFXLEVBQUVPLHNCQUFVQztBQWROLEM7QUFrRXBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge1xuICBQYW5lbExhYmVsLFxuICBQYW5lbExhYmVsV3JhcHBlcixcbiAgU2lkZVBhbmVsU2VjdGlvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XG5pbXBvcnQgSW5mb0hlbHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pbmZvLWhlbHBlcic7XG5pbXBvcnQgRGltZW5zaW9uU2NhbGVTZWxlY3RvciBmcm9tICcuL2RpbWVuc2lvbi1zY2FsZS1zZWxlY3Rvcic7XG5pbXBvcnQge2NhcGl0YWxpemVGaXJzdExldHRlcn0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoYW5uZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBmaWVsZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwcm9wZXJ0eTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNob3dTY2FsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVGaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVTY2FsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8vIG9wdGlvbmFsXG4gICAgc2NhbGVUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkRmllbGQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBfdXBkYXRlVmlzQnlGaWVsZCA9IHZhbCA9PiB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVGaWVsZCh2YWwpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcm9wZXJ0eSxcbiAgICAgIHNob3dTY2FsZSxcbiAgICAgIHNlbGVjdGVkRmllbGQsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHNjYWxlT3B0aW9ucyA9IFtdXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDxQYW5lbExhYmVsV3JhcHBlcj5cbiAgICAgICAgICAgIDxQYW5lbExhYmVsPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbCB8fCBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvcGVydHkpfSBiYXNlZCBvbmB9XG4gICAgICAgICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICA8SW5mb0hlbHBlclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpZD17YCR7dGhpcy5wcm9wcy5pZH0tJHtwcm9wZXJ0eX1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1BhbmVsTGFiZWxXcmFwcGVyPlxuICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXG4gICAgICAgICAgICBmaWVsZHM9e3RoaXMucHJvcHMuZmllbGRzfVxuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkRmllbGQgJiYgc2VsZWN0ZWRGaWVsZC5uYW1lfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5fdXBkYXRlVmlzQnlGaWVsZH1cbiAgICAgICAgICAgIGVyYXNhYmxlXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtzaG93U2NhbGUgPyAoXG4gICAgICAgICAgICA8RGltZW5zaW9uU2NhbGVTZWxlY3RvclxuICAgICAgICAgICAgICBzY2FsZVR5cGU9e3RoaXMucHJvcHMuc2NhbGVUeXBlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICAgICAgICAgIGxhYmVsPXtgJHtwcm9wZXJ0eX0gc2NhbGVgfVxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5wcm9wcy51cGRhdGVTY2FsZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NjYWxlT3B0aW9ucy5sZW5ndGggPCAyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==