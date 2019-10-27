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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exportImageUtils = require("../../utils/export-image-utils");

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _switch = _interopRequireDefault(require("../common/switch"));

var _loadingSpinner = _interopRequireDefault(require("../common/loading-spinner"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  padding: 30px;\n\n  .dimension,\n  .instruction {\n    padding: 8px 0px;\n  }\n\n  .preview-image {\n    background: #e2e2e2;\n    border-radius: 4px;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.18);\n    width: 100%;\n    padding-bottom: ", ";\n    position: relative;\n  }\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n\n  .preview-image--error {\n    font-size: 12px;\n    padding: 12px;\n    color: ", ";\n    text-align: center;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 250px;\n\n  .image-option-section {\n    .image-option-section-title {\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n\n  .button-list {\n    display: flex;\n    flex-direction: row;\n    padding: 8px 0px;\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ImageOptionList = _styledComponents["default"].div(_templateObject());

var PreviewImageSection = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.ratio === _defaultSettings.RATIOS.SCREEN ? "".concat(100 * props.height / props.width, "%") : props.ratio === _defaultSettings.RATIOS.SIXTEEN_BY_NINE ? '56.25%' : '75%';
}, function (props) {
  return props.theme.errorColor;
});

var ExportImageModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ExportImageModal, _Component);

  function ExportImageModal() {
    (0, _classCallCheck2["default"])(this, ExportImageModal);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ExportImageModal).apply(this, arguments));
  }

  (0, _createClass2["default"])(ExportImageModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          height = _this$props.height,
          legend = _this$props.legend,
          ratio = _this$props.ratio,
          error = _this$props.error,
          resolution = _this$props.resolution,
          width = _this$props.width,
          exporting = _this$props.exporting,
          imageDataUri = _this$props.imageDataUri,
          onChangeRatio = _this$props.onChangeRatio,
          onChangeResolution = _this$props.onChangeResolution,
          onToggleLegend = _this$props.onToggleLegend;
      var exportImageSize = (0, _exportImageUtils.calculateExportImageSize)({
        width: width,
        height: height,
        ratio: ratio,
        resolution: resolution
      });
      return _react["default"].createElement(_styledComponents2.StyledModalContent, {
        className: "export-image-modal"
      }, _react["default"].createElement(ImageOptionList, null, _react["default"].createElement("div", {
        className: "image-option-section"
      }, _react["default"].createElement("div", {
        className: "image-option-section-title"
      }, "Ratio"), "Choose the ratio for various usages.", _react["default"].createElement("div", {
        className: "button-list"
      }, _defaultSettings.RATIO_OPTIONS.map(function (op) {
        return _react["default"].createElement(_styledComponents2.SelectionButton, {
          key: op.id,
          selected: ratio === op.id,
          onClick: function onClick() {
            return onChangeRatio({
              ratio: op.id
            });
          }
        }, op.label);
      }))), _react["default"].createElement("div", {
        className: "image-option-section"
      }, _react["default"].createElement("div", {
        className: "image-option-section-title"
      }, "Resolution"), "High resolution is better for prints.", _react["default"].createElement("div", {
        className: "button-list"
      }, _defaultSettings.RESOLUTION_OPTIONS.map(function (op) {
        return _react["default"].createElement(_styledComponents2.SelectionButton, {
          key: op.id,
          selected: resolution === op.id,
          onClick: function onClick() {
            return op.available && onChangeResolution({
              resolution: op.id
            });
          }
        }, op.label);
      }))), _react["default"].createElement("div", {
        className: "image-option-section"
      }, _react["default"].createElement("div", {
        className: "image-option-section-title"
      }, "Map Legend"), _react["default"].createElement(_switch["default"], {
        type: "checkbox",
        id: "add-map-legend",
        checked: legend,
        label: "Add legend on map",
        onChange: onToggleLegend
      }))), _react["default"].createElement(PreviewImageSection, {
        ratio: ratio,
        width: width,
        height: height
      }, _react["default"].createElement("div", {
        className: "dimension"
      }, "".concat(exportImageSize.width, " x ").concat(exportImageSize.height)), _react["default"].createElement("div", {
        className: "preview-image"
      }, exporting ? _react["default"].createElement("div", {
        className: "preview-image-spinner"
      }, _react["default"].createElement(_loadingSpinner["default"], null)) : error ? _react["default"].createElement("div", {
        className: "preview-image--error"
      }, _react["default"].createElement("span", null, " ", error.message || 'Generate map image failed!')) : _react["default"].createElement("img", {
        className: "preview-image-placeholder",
        src: imageDataUri
      }))));
    }
  }]);
  return ExportImageModal;
}(_react.Component);

(0, _defineProperty2["default"])(ExportImageModal, "propTypes", {
  height: _propTypes["default"].number.isRequired,
  ratio: _propTypes["default"].string.isRequired,
  resolution: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  exporting: _propTypes["default"].bool.isRequired,
  imageDataUri: _propTypes["default"].string,
  // callbacks
  onChangeRatio: _propTypes["default"].func.isRequired,
  onChangeResolution: _propTypes["default"].func.isRequired,
  onToggleLegend: _propTypes["default"].func.isRequired
});

var ExportImageModalFactory = function ExportImageModalFactory() {
  return ExportImageModal;
};

var _default = ExportImageModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwuanMiXSwibmFtZXMiOlsiSW1hZ2VPcHRpb25MaXN0Iiwic3R5bGVkIiwiZGl2IiwiUHJldmlld0ltYWdlU2VjdGlvbiIsInByb3BzIiwicmF0aW8iLCJSQVRJT1MiLCJTQ1JFRU4iLCJoZWlnaHQiLCJ3aWR0aCIsIlNJWFRFRU5fQllfTklORSIsInRoZW1lIiwiZXJyb3JDb2xvciIsIkV4cG9ydEltYWdlTW9kYWwiLCJsZWdlbmQiLCJlcnJvciIsInJlc29sdXRpb24iLCJleHBvcnRpbmciLCJpbWFnZURhdGFVcmkiLCJvbkNoYW5nZVJhdGlvIiwib25DaGFuZ2VSZXNvbHV0aW9uIiwib25Ub2dnbGVMZWdlbmQiLCJleHBvcnRJbWFnZVNpemUiLCJSQVRJT19PUFRJT05TIiwibWFwIiwib3AiLCJpZCIsImxhYmVsIiwiUkVTT0xVVElPTl9PUFRJT05TIiwiYXZhaWxhYmxlIiwibWVzc2FnZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQU1BOztBQUlBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyw2QkFBT0MsR0FBVixtQkFBckI7O0FBd0JBLElBQU1DLG1CQUFtQixHQUFHRiw2QkFBT0MsR0FBVixxQkFrQkgsVUFBQUUsS0FBSztBQUFBLFNBQ3JCQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0JDLHdCQUFPQyxNQUF2QixhQUNRLE1BQU1ILEtBQUssQ0FBQ0ksTUFBYixHQUF1QkosS0FBSyxDQUFDSyxLQURwQyxTQUVJTCxLQUFLLENBQUNDLEtBQU4sS0FBZ0JDLHdCQUFPSSxl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MUJBLHVCQUEwQjtBQUFBLFNBQU16QixnQkFBTjtBQUFBLENBQWhDOztlQUNleUIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtjYWxjdWxhdGVFeHBvcnRJbWFnZVNpemV9IGZyb20gJ3V0aWxzL2V4cG9ydC1pbWFnZS11dGlscyc7XG5pbXBvcnQge1xuICBSQVRJT19PUFRJT05TLFxuICBSQVRJT1MsXG4gIFJFU09MVVRJT05fT1BUSU9OU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmltcG9ydCB7XG4gIFN0eWxlZE1vZGFsQ29udGVudCxcbiAgU2VsZWN0aW9uQnV0dG9uXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpdGNoJztcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nLXNwaW5uZXInO1xuXG5jb25zdCBJbWFnZU9wdGlvbkxpc3QgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDI1MHB4O1xuXG4gIC5pbWFnZS1vcHRpb24tc2VjdGlvbiB7XG4gICAgLmltYWdlLW9wdGlvbi1zZWN0aW9uLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgLmJ1dHRvbi1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuYDtcblxuY29uc3QgUHJldmlld0ltYWdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4O1xuXG4gIC5kaW1lbnNpb24sXG4gIC5pbnN0cnVjdGlvbiB7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PlxuICAgICAgcHJvcHMucmF0aW8gPT09IFJBVElPUy5TQ1JFRU5cbiAgICAgICAgPyBgJHsoMTAwICogcHJvcHMuaGVpZ2h0KSAvIHByb3BzLndpZHRofSVgXG4gICAgICAgIDogcHJvcHMucmF0aW8gPT09IFJBVElPUy5TSVhURUVOX0JZX05JTkVcbiAgICAgICAgPyAnNTYuMjUlJ1xuICAgICAgICA6ICc3NSUnfTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucHJldmlldy1pbWFnZS1wbGFjZWhvbGRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXNwaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1cHgpO1xuICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLS1lcnJvciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jbGFzcyBFeHBvcnRJbWFnZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByYXRpbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJlc29sdXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGV4cG9ydGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpbWFnZURhdGFVcmk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gY2FsbGJhY2tzXG4gICAgb25DaGFuZ2VSYXRpbzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZVJlc29sdXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Ub2dnbGVMZWdlbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGVpZ2h0LFxuICAgICAgbGVnZW5kLFxuICAgICAgcmF0aW8sXG4gICAgICBlcnJvcixcbiAgICAgIHJlc29sdXRpb24sXG4gICAgICB3aWR0aCxcbiAgICAgIGV4cG9ydGluZyxcbiAgICAgIGltYWdlRGF0YVVyaSxcbiAgICAgIC8vIGNhbGxiYWNrczpcbiAgICAgIG9uQ2hhbmdlUmF0aW8sXG4gICAgICBvbkNoYW5nZVJlc29sdXRpb24sXG4gICAgICBvblRvZ2dsZUxlZ2VuZFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgZXhwb3J0SW1hZ2VTaXplID0gY2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplKHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcmF0aW8sXG4gICAgICByZXNvbHV0aW9uXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZE1vZGFsQ29udGVudCBjbGFzc05hbWU9XCJleHBvcnQtaW1hZ2UtbW9kYWxcIj5cbiAgICAgICAgPEltYWdlT3B0aW9uTGlzdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uLXRpdGxlXCI+UmF0aW88L2Rpdj5cbiAgICAgICAgICAgIENob29zZSB0aGUgcmF0aW8gZm9yIHZhcmlvdXMgdXNhZ2VzLlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbGlzdFwiPlxuICAgICAgICAgICAgICB7UkFUSU9fT1BUSU9OUy5tYXAob3AgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17b3AuaWR9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmF0aW8gPT09IG9wLmlkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2VSYXRpbyh7cmF0aW86IG9wLmlkfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge29wLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uQnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGVcIj5SZXNvbHV0aW9uPC9kaXY+XG4gICAgICAgICAgICBIaWdoIHJlc29sdXRpb24gaXMgYmV0dGVyIGZvciBwcmludHMuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saXN0XCI+XG4gICAgICAgICAgICAgIHtSRVNPTFVUSU9OX09QVElPTlMubWFwKG9wID0+IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e29wLmlkfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3Jlc29sdXRpb24gPT09IG9wLmlkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgb3AuYXZhaWxhYmxlICYmIG9uQ2hhbmdlUmVzb2x1dGlvbih7cmVzb2x1dGlvbjogb3AuaWR9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtvcC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uLXRpdGxlXCI+TWFwIExlZ2VuZDwvZGl2PlxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBpZD1cImFkZC1tYXAtbGVnZW5kXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17bGVnZW5kfVxuICAgICAgICAgICAgICBsYWJlbD1cIkFkZCBsZWdlbmQgb24gbWFwXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVG9nZ2xlTGVnZW5kfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9JbWFnZU9wdGlvbkxpc3Q+XG4gICAgICAgIDxQcmV2aWV3SW1hZ2VTZWN0aW9uIHJhdGlvPXtyYXRpb30gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb25cIj57YCR7ZXhwb3J0SW1hZ2VTaXplLndpZHRofSB4ICR7XG4gICAgICAgICAgICBleHBvcnRJbWFnZVNpemUuaGVpZ2h0XG4gICAgICAgICAgfWB9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCI+XG4gICAgICAgICAgICB7ZXhwb3J0aW5nID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2Utc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nU3Bpbm5lciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlLS1lcnJvclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiB7ZXJyb3IubWVzc2FnZSB8fCAnR2VuZXJhdGUgbWFwIGltYWdlIGZhaWxlZCEnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2UtcGxhY2Vob2xkZXJcIiBzcmM9e2ltYWdlRGF0YVVyaX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUHJldmlld0ltYWdlU2VjdGlvbj5cbiAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkgPSAoKSA9PiBFeHBvcnRJbWFnZU1vZGFsO1xuZXhwb3J0IGRlZmF1bHQgRXhwb3J0SW1hZ2VNb2RhbEZhY3Rvcnk7XG4iXX0=