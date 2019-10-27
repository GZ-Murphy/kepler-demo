"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dropdownList = require("../../common/item-selector/dropdown-list");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _defaultSettings = require("../../../constants/default-settings");

var _styledComponents2 = require("../../common/styled-components");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  // override item-selector dropdown padding\n  .item-selector .item-selector__dropdown {\n    padding: 4px 10px 4px 2px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  padding: 12px 0 0 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.list {\n    display: flex;\n    align-items: center;\n\n    .layer-type-selector__item__icon {\n      color: ", ";\n      background-size: ", "px ", "px;\n      margin-right: 12px;\n    }\n  }\n\n  .layer-type-selector__item__icon {\n    color: ", ";\n    display: flex;\n    background-image: url(", ");\n    background-size: ", "px ", "px;\n  }\n\n  .layer-type-selector__item__label {\n    text-transform: capitalize;\n    font-size: 12px;\n    text-align: center;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n  padding-right: 12px;\n\n  &.selected {\n    .layer-type-selector__item__icon {\n      border: 1px solid #caf2f4;\n    }\n  }\n\n  :hover,\n  &.selected {\n    cursor: pointer;\n    .layer-type-selector__item__icon {\n      color: ", ";\n    }\n\n    .layer-type-selector__item__label {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ITEM_SIZE = {
  large: 60,
  small: 28
};

var StyledDropdownListItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.textColor;
});

var StyledListItem = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.activeColor;
}, ITEM_SIZE.small, ITEM_SIZE.small, function (props) {
  return props.theme.labelColor;
}, "".concat(_defaultSettings.CLOUDFRONT, "/kepler.gl-layer-icon-bg.png"), ITEM_SIZE.large, ITEM_SIZE.large, function (props) {
  return props.theme.labelColor;
});

var DropdownListWrapper = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.dropdownList;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
});

var LayerTypeListItem = function LayerTypeListItem(_ref) {
  var value = _ref.value,
      isTile = _ref.isTile;
  return _react["default"].createElement(StyledListItem, {
    className: (0, _classnames["default"])('layer-type-selector__item__inner', {
      list: !isTile
    })
  }, _react["default"].createElement("div", {
    className: "layer-type-selector__item__icon"
  }, _react["default"].createElement(value.icon, {
    height: "".concat(isTile ? ITEM_SIZE.large : ITEM_SIZE.small, "px")
  })), _react["default"].createElement("div", {
    className: "layer-type-selector__item__label"
  }, value.label));
};

var LayerTypeDropdownList = function LayerTypeDropdownList(props) {
  return _react["default"].createElement(DropdownListWrapper, {
    className: _dropdownList.classList.list
  }, props.options.map(function (value, i) {
    return _react["default"].createElement(StyledDropdownListItem, {
      className: (0, _classnames["default"])('layer-type-selector__item', {
        selected: props.selectedItems.find(function (it) {
          return it.id === value.id;
        }),
        hover: props.selectionIndex === i
      }),
      key: "".concat(value.id, "_").concat(i),
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      },
      onClick: function onClick(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      }
    }, _react["default"].createElement(props.customListItemComponent, {
      value: value,
      isTile: true
    }));
  }));
};

var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func.isRequired
};

var StyledLayerTypeSelector = _styledComponents["default"].div(_templateObject4());

var LayerTypeSelector = function LayerTypeSelector(_ref2) {
  var layer = _ref2.layer,
      layerTypeOptions = _ref2.layerTypeOptions,
      onSelect = _ref2.onSelect;
  return _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(StyledLayerTypeSelector, {
    className: "layer-config__type"
  }, _react["default"].createElement(_itemSelector["default"], {
    selectedItems: layerTypeOptions.find(function (op) {
      return op.id === layer.type;
    }),
    options: layerTypeOptions,
    multiSelect: false,
    placeholder: "Select A Type",
    onChange: onSelect,
    getOptionValue: function getOptionValue(op) {
      return op.id;
    },
    filterOption: "label",
    displayOption: function displayOption(op) {
      return op.label;
    },
    DropDownLineItemRenderComponent: LayerTypeListItem,
    DropDownRenderComponent: LayerTypeDropdownList
  })));
};

LayerTypeSelector.propTypes = propTypes;
var _default = LayerTypeSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJJVEVNX1NJWkUiLCJsYXJnZSIsInNtYWxsIiwiU3R5bGVkRHJvcGRvd25MaXN0SXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJhY3RpdmVDb2xvciIsInRleHRDb2xvciIsIlN0eWxlZExpc3RJdGVtIiwibGFiZWxDb2xvciIsIkNMT1VERlJPTlQiLCJEcm9wZG93bkxpc3RXcmFwcGVyIiwiZHJvcGRvd25MaXN0IiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiTGF5ZXJUeXBlTGlzdEl0ZW0iLCJ2YWx1ZSIsImlzVGlsZSIsImxpc3QiLCJsYWJlbCIsIkxheWVyVHlwZURyb3Bkb3duTGlzdCIsImNsYXNzTGlzdCIsIm9wdGlvbnMiLCJtYXAiLCJpIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEl0ZW1zIiwiZmluZCIsIml0IiwiaWQiLCJob3ZlciIsInNlbGVjdGlvbkluZGV4IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25PcHRpb25TZWxlY3RlZCIsInByb3BUeXBlcyIsImxheWVyIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm9uU2VsZWN0IiwiZnVuYyIsIlN0eWxlZExheWVyVHlwZVNlbGVjdG9yIiwiTGF5ZXJUeXBlU2VsZWN0b3IiLCJsYXllclR5cGVPcHRpb25zIiwib3AiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsRUFEUztBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBRlMsQ0FB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RSx3QkFBQUssRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQ2hCLEVBQVA7QUFBQSxLQU5wQjtBQU9FLElBQUEsWUFBWSxFQUFDLE9BUGY7QUFRRSxJQUFBLGFBQWEsRUFBRSx1QkFBQWdCLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUMxQixLQUFQO0FBQUEsS0FSbkI7QUFTRSxJQUFBLCtCQUErQixFQUFFSixpQkFUbkM7QUFVRSxJQUFBLHVCQUF1QixFQUFFSztBQVYzQixJQURGLENBREYsQ0FEd0I7QUFBQSxDQUExQjs7QUFtQkF1QixpQkFBaUIsQ0FBQ1IsU0FBbEIsR0FBOEJBLFNBQTlCO2VBRWVRLGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge2NsYXNzTGlzdH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1saXN0JztcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7Q0xPVURGUk9OVH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge1NpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSVRFTV9TSVpFID0ge1xuICBsYXJnZTogNjAsXG4gIHNtYWxsOiAyOFxufTtcblxuY29uc3QgU3R5bGVkRHJvcGRvd25MaXN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuXG4gICYuc2VsZWN0ZWQge1xuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWYyZjQ7XG4gICAgfVxuICB9XG5cbiAgOmhvdmVyLFxuICAmLnNlbGVjdGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuICAgIH1cblxuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbCB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICAmLmxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGl2ZUNvbG9yfTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtJVEVNX1NJWkUuc21hbGx9cHggJHtJVEVNX1NJWkUuc21hbGx9cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YCR7Q0xPVURGUk9OVH0va2VwbGVyLmdsLWxheWVyLWljb24tYmcucG5nYH0pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogJHtJVEVNX1NJWkUubGFyZ2V9cHggJHtJVEVNX1NJWkUubGFyZ2V9cHg7XG4gIH1cblxuICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9fbGFiZWwge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIH1cbmA7XG5cbmNvbnN0IERyb3Bkb3duTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdH07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0Qm9yZGVyVG9wfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweCAwIDAgMTJweDtcbmA7XG5cbmNvbnN0IExheWVyVHlwZUxpc3RJdGVtID0gKHt2YWx1ZSwgaXNUaWxlfSkgPT4gKFxuICA8U3R5bGVkTGlzdEl0ZW1cbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2xheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2lubmVyJywge2xpc3Q6ICFpc1RpbGV9KX1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvblwiPlxuICAgICAgPHZhbHVlLmljb25cbiAgICAgICAgaGVpZ2h0PXtgJHtpc1RpbGUgPyBJVEVNX1NJWkUubGFyZ2UgOiBJVEVNX1NJWkUuc21hbGx9cHhgfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2xhYmVsXCI+e3ZhbHVlLmxhYmVsfTwvZGl2PlxuICA8L1N0eWxlZExpc3RJdGVtPlxuKTtcblxuY29uc3QgTGF5ZXJUeXBlRHJvcGRvd25MaXN0ID0gcHJvcHMgPT4gKFxuICA8RHJvcGRvd25MaXN0V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0fT5cbiAgICB7cHJvcHMub3B0aW9ucy5tYXAoKHZhbHVlLCBpKSA9PiAoXG4gICAgICA8U3R5bGVkRHJvcGRvd25MaXN0SXRlbVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2xheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW0nLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IHByb3BzLnNlbGVjdGVkSXRlbXMuZmluZChpdCA9PiBpdC5pZCA9PT0gdmFsdWUuaWQpLFxuICAgICAgICAgIGhvdmVyOiBwcm9wcy5zZWxlY3Rpb25JbmRleCA9PT0gaVxuICAgICAgICB9KX1cbiAgICAgICAga2V5PXtgJHt2YWx1ZS5pZH1fJHtpfWB9XG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJvcHMub25PcHRpb25TZWxlY3RlZCh2YWx1ZSwgZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwcm9wcy5vbk9wdGlvblNlbGVjdGVkKHZhbHVlLCBlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHByb3BzLmN1c3RvbUxpc3RJdGVtQ29tcG9uZW50IHZhbHVlPXt2YWx1ZX0gaXNUaWxlIC8+XG4gICAgICA8L1N0eWxlZERyb3Bkb3duTGlzdEl0ZW0+XG4gICAgKSl9XG4gIDwvRHJvcGRvd25MaXN0V3JhcHBlcj5cbik7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IFN0eWxlZExheWVyVHlwZVNlbGVjdG9yID0gc3R5bGVkLmRpdmBcbiAgLy8gb3ZlcnJpZGUgaXRlbS1zZWxlY3RvciBkcm9wZG93biBwYWRkaW5nXG4gIC5pdGVtLXNlbGVjdG9yIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93biB7XG4gICAgcGFkZGluZzogNHB4IDEwcHggNHB4IDJweDtcbiAgfVxuYDtcbmNvbnN0IExheWVyVHlwZVNlbGVjdG9yID0gKHtsYXllciwgbGF5ZXJUeXBlT3B0aW9ucywgb25TZWxlY3R9KSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgIDxTdHlsZWRMYXllclR5cGVTZWxlY3RvciBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX3R5cGVcIj5cbiAgICAgIDxJdGVtU2VsZWN0b3JcbiAgICAgICAgc2VsZWN0ZWRJdGVtcz17bGF5ZXJUeXBlT3B0aW9ucy5maW5kKG9wID0+IG9wLmlkID09PSBsYXllci50eXBlKX1cbiAgICAgICAgb3B0aW9ucz17bGF5ZXJUeXBlT3B0aW9uc31cbiAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBBIFR5cGVcIlxuICAgICAgICBvbkNoYW5nZT17b25TZWxlY3R9XG4gICAgICAgIGdldE9wdGlvblZhbHVlPXtvcCA9PiBvcC5pZH1cbiAgICAgICAgZmlsdGVyT3B0aW9uPVwibGFiZWxcIlxuICAgICAgICBkaXNwbGF5T3B0aW9uPXtvcCA9PiBvcC5sYWJlbH1cbiAgICAgICAgRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudD17TGF5ZXJUeXBlTGlzdEl0ZW19XG4gICAgICAgIERyb3BEb3duUmVuZGVyQ29tcG9uZW50PXtMYXllclR5cGVEcm9wZG93bkxpc3R9XG4gICAgICAvPlxuICAgIDwvU3R5bGVkTGF5ZXJUeXBlU2VsZWN0b3I+XG4gIDwvU2lkZVBhbmVsU2VjdGlvbj5cbik7XG5cbkxheWVyVHlwZVNlbGVjdG9yLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJUeXBlU2VsZWN0b3I7XG4iXX0=