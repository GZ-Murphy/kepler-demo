"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _rangeSlider = _interopRequireDefault(require("../../common/range-slider"));

var _layerFactory = require("../../../layers/layer-factory");

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
var TextLabelPanel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(TextLabelPanel, _Component);

  function TextLabelPanel() {
    (0, _classCallCheck2["default"])(this, TextLabelPanel);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TextLabelPanel).apply(this, arguments));
  }

  (0, _createClass2["default"])(TextLabelPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          updateLayerTextLabel = _this$props.updateLayerTextLabel,
          textLabel = _this$props.textLabel,
          fields = _this$props.fields;
      var currentFields = textLabel.map(function (tl) {
        return tl.field && tl.field.name;
      }).filter(function (d) {
        return d;
      });
      return _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'label',
        collapsible: true
      }, _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleHeader, null, _react["default"].createElement(_fieldSelector["default"], {
        fields: fields,
        value: currentFields,
        onSelect: function onSelect(selected) {
          return updateLayerTextLabel('all', 'fields', selected);
        },
        multiSelect: true
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, textLabel.map(function (tl, idx) {
        return _react["default"].createElement("div", {
          key: tl.field ? tl.field.name : 'null'
        }, _react["default"].createElement(_styledComponents.PanelLabel, null, "Label ".concat(idx + 1)), _react["default"].createElement(_styledComponents.SidePanelSection, null, _react["default"].createElement(_fieldSelector["default"], {
          fields: fields,
          value: tl.field && tl.field.name || 'Select a field',
          placeholder: 'empty',
          onSelect: function onSelect(v) {
            return updateLayerTextLabel(idx, 'field', v);
          },
          erasable: true
        })), _react["default"].createElement(_styledComponents.SidePanelSection, null, _react["default"].createElement(_styledComponents.PanelLabel, null, "Font size"), _react["default"].createElement(_rangeSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_TEXT_CONFIGS.fontSize, {
          value1: tl.size,
          isRange: false,
          onChange: function onChange(v) {
            return updateLayerTextLabel(idx, 'size', v[1]);
          }
        }))), _react["default"].createElement(_styledComponents.SidePanelSection, null, _react["default"].createElement(_styledComponents.PanelLabel, null, "Font color"), _react["default"].createElement(_colorSelector["default"], {
          colorSets: [{
            selectedColor: tl.color,
            setColor: function setColor(v) {
              return updateLayerTextLabel(idx, 'color', v);
            }
          }]
        })), _react["default"].createElement(_styledComponents.SidePanelSection, null, _react["default"].createElement(_styledComponents.SpaceBetweenFlexbox, null, _react["default"].createElement(_styledComponents.SBFlexboxItem, null, _react["default"].createElement(_styledComponents.PanelLabel, null, "Text anchor"), _react["default"].createElement(_itemSelector["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_TEXT_CONFIGS.textAnchor, {
          selectedItems: tl.anchor,
          onChange: function onChange(val) {
            return updateLayerTextLabel(idx, 'anchor', val);
          }
        }))), _react["default"].createElement(_styledComponents.SBFlexboxItem, null, _react["default"].createElement(_styledComponents.PanelLabel, null, "Alignment"), _react["default"].createElement(_itemSelector["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_TEXT_CONFIGS.textAlignment, {
          selectedItems: tl.alignment,
          onChange: function onChange(val) {
            return updateLayerTextLabel(idx, 'alignment', val);
          }
        }))))));
      }), _react["default"].createElement(_styledComponents.SidePanelSection, null, _react["default"].createElement(_styledComponents.Button, {
        link: true,
        onClick: function onClick(val) {
          return updateLayerTextLabel(textLabel.length);
        }
      }, _react["default"].createElement(_icons.Add, {
        height: "12px"
      }), "Add More Label"))));
    }
  }]);
  return TextLabelPanel;
}(_react.Component);

exports["default"] = TextLabelPanel;
(0, _defineProperty2["default"])(TextLabelPanel, "propTypes", {
  fields: _propTypes["default"].arrayOf(_propTypes["default"].object),
  textLabel: _propTypes["default"].arrayOf(_propTypes["default"].object),
  updateLayerTextLabel: _propTypes["default"].func.isRequired
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdGV4dC1sYWJlbC1wYW5lbC5qcyJdLCJuYW1lcyI6WyJUZXh0TGFiZWxQYW5lbCIsInByb3BzIiwidXBkYXRlTGF5ZXJUZXh0TGFiZWwiLCJ0ZXh0TGFiZWwiLCJmaWVsZHMiLCJjdXJyZW50RmllbGRzIiwibWFwIiwidGwiLCJmaWVsZCIsIm5hbWUiLCJmaWx0ZXIiLCJkIiwic2VsZWN0ZWQiLCJpZHgiLCJ2IiwiTEFZRVJfVEVYVF9DT05GSUdTIiwiZm9udFNpemUiLCJzaXplIiwic2VsZWN0ZWRDb2xvciIsImNvbG9yIiwic2V0Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYW5jaG9yIiwidmFsIiwidGV4dEFsaWdubWVudCIsImFsaWdubWVudCIsImxlbmd0aCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFFQTs7QUF4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUF3QnFCQSxjOzs7Ozs7Ozs7Ozs7NkJBT1Y7QUFBQSx3QkFDMkMsS0FBS0MsS0FEaEQ7QUFBQSxVQUNBQyxvQkFEQSxlQUNBQSxvQkFEQTtBQUFBLFVBQ3NCQyxTQUR0QixlQUNzQkEsU0FEdEI7QUFBQSxVQUNpQ0MsTUFEakMsZUFDaUNBLE1BRGpDO0FBRVAsVUFBTUMsYUFBYSxHQUFHRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxVQUFBQyxFQUFFO0FBQUEsZUFBSUEsRUFBRSxDQUFDQyxLQUFILElBQVlELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxJ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QUlyQixvQkFBb0IsQ0FBQ1csR0FBRCxFQUFNLFdBQU4sRUFBbUJVLEdBQW5CLENBQXhCO0FBQUE7QUFIZixXQUZGLENBVEYsQ0FERixDQS9CRixDQURhO0FBQUEsT0FBZCxDQURILEVBdURFLGdDQUFDLGtDQUFELFFBQ0UsZ0NBQUMsd0JBQUQ7QUFBUSxRQUFBLElBQUksTUFBWjtBQUFhLFFBQUEsT0FBTyxFQUFFLGlCQUFBQSxHQUFHO0FBQUEsaUJBQUlyQixvQkFBb0IsQ0FBQ0MsU0FBUyxDQUFDdUIsTUFBWCxDQUF4QjtBQUFBO0FBQXpCLFNBQ0UsZ0NBQUMsVUFBRDtBQUFLLFFBQUEsTUFBTSxFQUFDO0FBQVosUUFERixtQkFERixDQXZERixDQVRGLENBREY7QUEwRUQ7OztFQXBGeUNDLGdCOzs7aUNBQXZCM0IsYyxlQUNBO0FBQ2pCSSxFQUFBQSxNQUFNLEVBQUV3QixzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCLENBRFM7QUFFakIzQixFQUFBQSxTQUFTLEVBQUV5QixzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCLENBRk07QUFHakI1QixFQUFBQSxvQkFBb0IsRUFBRTBCLHNCQUFVRyxJQUFWLENBQWVDO0FBSHBCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIFBhbmVsTGFiZWwsXG4gIFNpZGVQYW5lbFNlY3Rpb24sXG4gIFNwYWNlQmV0d2VlbkZsZXhib3gsXG4gIFNCRmxleGJveEl0ZW0sXG4gIEJ1dHRvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0FkZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IENvbG9yU2VsZWN0b3IgZnJvbSAnLi9jb2xvci1zZWxlY3Rvcic7XG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQgTGF5ZXJDb25maWdHcm91cCwge1xuICBDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudCxcbiAgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlclxufSBmcm9tICcuL2xheWVyLWNvbmZpZy1ncm91cCc7XG5pbXBvcnQgUmFuZ2VTbGlkZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcmFuZ2Utc2xpZGVyJztcblxuaW1wb3J0IHtMQVlFUl9URVhUX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dExhYmVsUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgdGV4dExhYmVsOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICB1cGRhdGVMYXllclRleHRMYWJlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXBkYXRlTGF5ZXJUZXh0TGFiZWwsIHRleHRMYWJlbCwgZmllbGRzfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY3VycmVudEZpZWxkcyA9IHRleHRMYWJlbC5tYXAodGwgPT4gdGwuZmllbGQgJiYgdGwuZmllbGQubmFtZSkuZmlsdGVyKGQgPT4gZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGFiZWwnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVIZWFkZXI+XG4gICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRGaWVsZHN9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0ZWQgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoJ2FsbCcsICdmaWVsZHMnLCBzZWxlY3RlZCl9XG4gICAgICAgICAgICBtdWx0aVNlbGVjdFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlcj5cbiAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIHt0ZXh0TGFiZWwubWFwKCh0bCwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dGwuZmllbGQgPyB0bC5maWVsZC5uYW1lIDogJ251bGwnfT5cbiAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+e2BMYWJlbCAke2lkeCArIDF9YH08L1BhbmVsTGFiZWw+XG4gICAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsodGwuZmllbGQgJiYgdGwuZmllbGQubmFtZSkgfHwgJ1NlbGVjdCBhIGZpZWxkJ31cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnZW1wdHknfVxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3YgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnZmllbGQnLCB2KX1cbiAgICAgICAgICAgICAgICAgIGVyYXNhYmxlXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8UGFuZWxMYWJlbD57YEZvbnQgc2l6ZWB9PC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgICAgIDxSYW5nZVNsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLkxBWUVSX1RFWFRfQ09ORklHUy5mb250U2l6ZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlMT17dGwuc2l6ZX1cbiAgICAgICAgICAgICAgICAgIGlzUmFuZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3YgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnc2l6ZScsIHZbMV0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+e2BGb250IGNvbG9yYH08L1BhbmVsTGFiZWw+XG4gICAgICAgICAgICAgICAgPENvbG9yU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcjogdGwuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3I6IHYgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnY29sb3InLCB2KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPFNwYWNlQmV0d2VlbkZsZXhib3g+XG4gICAgICAgICAgICAgICAgICA8U0JGbGV4Ym94SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+e2BUZXh0IGFuY2hvcmB9PC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgey4uLkxBWUVSX1RFWFRfQ09ORklHUy50ZXh0QW5jaG9yfVxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RsLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ2FuY2hvcicsIHZhbCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1NCRmxleGJveEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8U0JGbGV4Ym94SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+e2BBbGlnbm1lbnRgfTwvUGFuZWxMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9URVhUX0NPTkZJR1MudGV4dEFsaWdubWVudH1cbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0bC5hbGlnbm1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB1cGRhdGVMYXllclRleHRMYWJlbChpZHgsICdhbGlnbm1lbnQnLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9TQkZsZXhib3hJdGVtPlxuICAgICAgICAgICAgICAgIDwvU3BhY2VCZXR3ZWVuRmxleGJveD5cbiAgICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICA8QnV0dG9uIGxpbmsgb25DbGljaz17dmFsID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKHRleHRMYWJlbC5sZW5ndGgpfT5cbiAgICAgICAgICAgICAgPEFkZCBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgICAgICAgQWRkIE1vcmUgTGFiZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICApO1xuICB9XG59XG4iXX0=