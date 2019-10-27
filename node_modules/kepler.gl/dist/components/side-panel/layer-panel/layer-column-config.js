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

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _styledComponents2 = require("../../common/styled-components");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 70%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 30%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin-bottom: 8px;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TopRow = _styledComponents["default"].div(_templateObject());

var LayerColumnConfig =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(LayerColumnConfig, _Component);

  function LayerColumnConfig() {
    (0, _classCallCheck2["default"])(this, LayerColumnConfig);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LayerColumnConfig).apply(this, arguments));
  }

  (0, _createClass2["default"])(LayerColumnConfig, [{
    key: "_updateColumn",
    value: function _updateColumn(key, value) {
      var layer = this.props.layer;
      var columns = value && value.pair && layer.columnPairs ? layer.assignColumnPairs(key, value.pair) : layer.assignColumn(key, value);
      this.props.updateLayerConfig({
        columns: columns
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          layer = _this$props.layer,
          fields = _this$props.fields,
          fieldPairs = _this$props.fieldPairs;
      return _react["default"].createElement("div", null, _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement("div", {
        className: "layer-config__column"
      }, _react["default"].createElement(TopRow, null, _react["default"].createElement(_styledComponents2.PanelLabel, null, "Columns"), _react["default"].createElement(_styledComponents2.PanelLabel, null, "* Required")), Object.keys(layer.config.columns).map(function (key) {
        return _react["default"].createElement(ColumnSelector, {
          column: layer.config.columns[key],
          label: key,
          key: key,
          allFields: fields,
          fieldPairs: layer.columnPairs ? fieldPairs.map(function (fp) {
            return {
              name: fp.defaultName,
              type: 'point',
              pair: fp.pair
            };
          }) : null,
          onSelect: function onSelect(val) {
            return _this._updateColumn(key, val);
          }
        });
      }))));
    }
  }]);
  return LayerColumnConfig;
}(_react.Component);

exports["default"] = LayerColumnConfig;
(0, _defineProperty2["default"])(LayerColumnConfig, "propTypes", {
  layer: _propTypes["default"].object.isRequired,
  fields: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  updateLayerConfig: _propTypes["default"].func.isRequired,
  fieldPairs: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
;

var ColumnRow = _styledComponents["default"].div(_templateObject2());

var ColumnName = _styledComponents["default"].div(_templateObject3());

var ColumnSelect = _styledComponents["default"].div(_templateObject4());

var ColumnSelector = function ColumnSelector(_ref) {
  var column = _ref.column,
      label = _ref.label,
      allFields = _ref.allFields,
      onSelect = _ref.onSelect,
      fieldPairs = _ref.fieldPairs;
  return _react["default"].createElement(ColumnRow, {
    className: "layer-config__column__selector"
  }, _react["default"].createElement(ColumnName, {
    className: "layer-config__column__name"
  }, _react["default"].createElement(_styledComponents2.PanelLabel, null, label), !column.optional ? _react["default"].createElement(_styledComponents2.PanelLabel, null, "  *") : null), _react["default"].createElement(ColumnSelect, {
    className: "layer-config__column__select"
  }, _react["default"].createElement(_fieldSelector["default"], {
    suggested: fieldPairs,
    error: !column.optional && !column.value,
    fields: allFields,
    value: column.value,
    erasable: Boolean(column.optional),
    onSelect: onSelect
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29sdW1uLWNvbmZpZy5qcyJdLCJuYW1lcyI6WyJUb3BSb3ciLCJzdHlsZWQiLCJkaXYiLCJMYXllckNvbHVtbkNvbmZpZyIsImtleSIsInZhbHVlIiwibGF5ZXIiLCJwcm9wcyIsImNvbHVtbnMiLCJwYWlyIiwiY29sdW1uUGFpcnMiLCJhc3NpZ25Db2x1bW5QYWlycyIsImFzc2lnbkNvbHVtbiIsInVwZGF0ZUxheWVyQ29uZmlnIiwiZmllbGRzIiwiZmllbGRQYWlycyIsIk9iamVjdCIsImtleXMiLCJjb25maWciLCJtYXAiLCJmcCIsIm5hbWUiLCJkZWZhdWx0TmFtZSIsInR5cGUiLCJ2YWwiLCJfdXBkYXRlQ29sdW1uIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJmdW5jIiwiQ29sdW1uUm93IiwiQ29sdW1uTmFtZSIsIkNvbHVtblNlbGVjdCIsIkNvbHVtblNlbGVjdG9yIiwiY29sdW1uIiwibGFiZWwiLCJhbGxGaWVsZHMiLCJvblNlbGVjdCIsIm9wdGlvbmFsIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTUEsTUFBTSxHQUFHQyw2QkFBT0MsR0FBVixtQkFBWjs7SUFLcUJDLGlCOzs7Ozs7Ozs7Ozs7a0NBUUxDLEcsRUFBS0MsSyxFQUFPO0FBQUEsVUFDakJDLEtBRGlCLEdBQ1IsS0FBS0MsS0FERyxDQUNqQkQsS0FEaUI7QUFHeEIsVUFBTUUsT0FBTyxHQUNYSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0ksSUFBZixJQUF1QkgsS0FBSyxDQUFDSSxXQUE3QixHQUNJSixLQUFLLENBQUNLLGlCQUFO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LElBRnpELENBREYsRUFLRSxnQ0FBQyxZQUFEO0FBQWMsSUFBQSxTQUFTLEVBQUM7QUFBeEIsS0FDRSxnQ0FBQyx5QkFBRDtBQUNFLElBQUEsU0FBUyxFQUFFMUIsVUFEYjtBQUVFLElBQUEsS0FBSyxFQUFFLENBQUNzQixNQUFNLENBQUNJLFFBQVIsSUFBb0IsQ0FBQ0osTUFBTSxDQUFDaEMsS0FGckM7QUFHRSxJQUFBLE1BQU0sRUFBRWtDLFNBSFY7QUFJRSxJQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDaEMsS0FKaEI7QUFLRSxJQUFBLFFBQVEsRUFBRXFDLE9BQU8sQ0FBQ0wsTUFBTSxDQUFDSSxRQUFSLENBTG5CO0FBTUUsSUFBQSxRQUFRLEVBQUVEO0FBTlosSUFERixDQUxGLENBRHFCO0FBQUEsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcblxuaW1wb3J0IHtcbiAgUGFuZWxMYWJlbCxcbiAgU2lkZVBhbmVsU2VjdGlvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRvcFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyQ29sdW1uQ29uZmlnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVMYXllckNvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmaWVsZFBhaXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KVxuICB9O1xuXG4gIF91cGRhdGVDb2x1bW4oa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHtsYXllcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY29sdW1ucyA9XG4gICAgICB2YWx1ZSAmJiB2YWx1ZS5wYWlyICYmIGxheWVyLmNvbHVtblBhaXJzXG4gICAgICAgID8gbGF5ZXIuYXNzaWduQ29sdW1uUGFpcnMoa2V5LCB2YWx1ZS5wYWlyKVxuICAgICAgICA6IGxheWVyLmFzc2lnbkNvbHVtbihrZXksIHZhbHVlKTtcblxuICAgIHRoaXMucHJvcHMudXBkYXRlTGF5ZXJDb25maWcoe2NvbHVtbnN9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7bGF5ZXIsIGZpZWxkcywgZmllbGRQYWlyc30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uXCI+XG4gICAgICAgICAgPFRvcFJvdz5cbiAgICAgICAgICAgIDxQYW5lbExhYmVsPkNvbHVtbnM8L1BhbmVsTGFiZWw+XG4gICAgICAgICAgICA8UGFuZWxMYWJlbD4qIFJlcXVpcmVkPC9QYW5lbExhYmVsPlxuICAgICAgICAgIDwvVG9wUm93PlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhsYXllci5jb25maWcuY29sdW1ucykubWFwKGtleSA9PiAoXG4gICAgICAgICAgICA8Q29sdW1uU2VsZWN0b3JcbiAgICAgICAgICAgICAgY29sdW1uPXtsYXllci5jb25maWcuY29sdW1uc1trZXldfVxuICAgICAgICAgICAgICBsYWJlbD17a2V5fVxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgYWxsRmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgIGZpZWxkUGFpcnM9e1xuICAgICAgICAgICAgICAgIGxheWVyLmNvbHVtblBhaXJzXG4gICAgICAgICAgICAgICAgICA/IGZpZWxkUGFpcnMubWFwKGZwID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogZnAuZGVmYXVsdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWlyOiBmcC5wYWlyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbCA9PiB0aGlzLl91cGRhdGVDb2x1bW4oa2V5LCB2YWwpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgQ29sdW1uUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQ29sdW1uTmFtZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzMCU7XG5gO1xuY29uc3QgQ29sdW1uU2VsZWN0ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDcwJTtcbmA7XG5cbmNvbnN0IENvbHVtblNlbGVjdG9yID0gKHtjb2x1bW4sIGxhYmVsLCBhbGxGaWVsZHMsIG9uU2VsZWN0LCBmaWVsZFBhaXJzfSkgPT4gKFxuICA8Q29sdW1uUm93IGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uX19zZWxlY3RvclwiPlxuICAgIDxDb2x1bW5OYW1lIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uX19uYW1lXCI+XG4gICAgICA8UGFuZWxMYWJlbD57bGFiZWx9PC9QYW5lbExhYmVsPlxuICAgICAgeyFjb2x1bW4ub3B0aW9uYWwgPyA8UGFuZWxMYWJlbD57YCAgKmB9PC9QYW5lbExhYmVsPiA6IG51bGx9XG4gICAgPC9Db2x1bW5OYW1lPlxuICAgIDxDb2x1bW5TZWxlY3QgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19jb2x1bW5fX3NlbGVjdFwiPlxuICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgc3VnZ2VzdGVkPXtmaWVsZFBhaXJzfVxuICAgICAgICBlcnJvcj17IWNvbHVtbi5vcHRpb25hbCAmJiAhY29sdW1uLnZhbHVlfVxuICAgICAgICBmaWVsZHM9e2FsbEZpZWxkc31cbiAgICAgICAgdmFsdWU9e2NvbHVtbi52YWx1ZX1cbiAgICAgICAgZXJhc2FibGU9e0Jvb2xlYW4oY29sdW1uLm9wdGlvbmFsKX1cbiAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgLz5cbiAgICA8L0NvbHVtblNlbGVjdD5cbiAgPC9Db2x1bW5Sb3c+XG4pO1xuIl19