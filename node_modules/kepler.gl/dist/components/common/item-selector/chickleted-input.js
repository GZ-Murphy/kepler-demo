"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _delete = _interopRequireDefault(require("../icons/delete"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 10px;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n\n  :hover {\n    overflow: visible;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 1px;\n  color: ", ";\n  font-size: 11px;\n  line-height: 20px;\n  margin: 4px 10px 4px 3px;\n  padding: 2px 6px;\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 8px);\n\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // required properties
  onClick: _propTypes["default"].func.isRequired,
  removeItem: _propTypes["default"].func.isRequired,
  // optional properties
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
  disabled: _propTypes["default"].bool,
  displayOption: _propTypes["default"].func,
  focus: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  inputTheme: _propTypes["default"].string
};

var ChickletButton = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.panelActiveBg;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var ChickletTag = _styledComponents["default"].span(_templateObject2());

var Chicklet = function Chicklet(_ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      remove = _ref.remove;
  return _react["default"].createElement(ChickletButton, null, _react["default"].createElement(ChickletTag, null, name), _react["default"].createElement(_delete["default"], {
    height: "10px",
    onClick: disabled ? null : remove
  }));
};

var ChickletedInputContainer = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryChickletedInput : props.theme.chickletedInput;
}, function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});

var ChickletedInput = function ChickletedInput(_ref2) {
  var focus = _ref2.focus,
      disabled = _ref2.disabled,
      error = _ref2.error,
      onClick = _ref2.onClick,
      className = _ref2.className,
      _ref2$selectedItems = _ref2.selectedItems,
      selectedItems = _ref2$selectedItems === void 0 ? [] : _ref2$selectedItems,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? '' : _ref2$placeholder,
      removeItem = _ref2.removeItem,
      _ref2$displayOption = _ref2.displayOption,
      displayOption = _ref2$displayOption === void 0 ? function (d) {
    return d;
  } : _ref2$displayOption,
      inputTheme = _ref2.inputTheme;
  return _react["default"].createElement(ChickletedInputContainer, {
    className: "".concat(className, " chickleted-input"),
    focus: focus,
    disabled: disabled,
    error: error,
    onClick: onClick,
    inputTheme: inputTheme,
    hasPlaceholder: !selectedItems || !selectedItems.length
  }, selectedItems.length > 0 ? selectedItems.map(function (item, i) {
    return _react["default"].createElement(Chicklet, {
      disabled: disabled,
      key: "".concat(displayOption(item), "_").concat(i),
      name: displayOption(item),
      remove: function remove(e) {
        return removeItem(item, e);
      }
    });
  }) : _react["default"].createElement("span", {
    className: "".concat(className, " chickleted-input__placeholder")
  }, placeholder));
};

ChickletedInput.propTypes = propTypes;
var _default = ChickletedInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib25DbGljayIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwicmVtb3ZlSXRlbSIsInNlbGVjdGVkSXRlbXMiLCJhcnJheU9mIiwiYW55IiwiZGlzYWJsZWQiLCJib29sIiwiZGlzcGxheU9wdGlvbiIsImZvY3VzIiwiZXJyb3IiLCJwbGFjZWhvbGRlciIsInN0cmluZyIsImlucHV0VGhlbWUiLCJDaGlja2xldEJ1dHRvbiIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJwYW5lbEFjdGl2ZUJnIiwidGV4dENvbG9yIiwidGV4dENvbG9ySGwiLCJDaGlja2xldFRhZyIsInNwYW4iLCJDaGlja2xldCIsIm5hbWUiLCJyZW1vdmUiLCJDaGlja2xldGVkSW5wdXRDb250YWluZXIiLCJzZWNvbmRhcnlDaGlja2xldGVkSW5wdXQiLCJjaGlja2xldGVkSW5wdXQiLCJoYXNQbGFjZWhvbGRlciIsInNlbGVjdENvbG9yUGxhY2VIb2xkZXIiLCJzZWxlY3RDb2xvciIsIkNoaWNrbGV0ZWRJbnB1dCIsImNsYXNzTmFtZSIsImQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQjtBQUNBQyxFQUFBQSxPQUFPLEVBQUVDLHNCQUFVQyxJQUFWLENBQWVDLFVBRlI7QUFHaEJDLEVBQUFBLFVBQVUsRUFBRUgsc0JBQVVDLElBQVYsQ0FBZUMsVUFIWDtBQUtoQjtBQUNBRSxFQUFBQSxhQUFhLEVBQUVKLHNCQUFVSyxPQUFWLENBQWtCTCxzQkFBVU0sR0FBNUIsQ0FOQztBQU9oQkMsRUFBQUEsUUFB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QUFhLENBQUNrQyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ2hCLGdDQUFDLFFBQUQ7QUFDRSxNQUFBLFFBQVEsRUFBRWpDLFFBRFo7QUFFRSxNQUFBLEdBQUcsWUFBS0UsYUFBYSxDQUFDOEIsSUFBRCxDQUFsQixjQUE0QkMsQ0FBNUIsQ0FGTDtBQUdFLE1BQUEsSUFBSSxFQUFFL0IsYUFBYSxDQUFDOEIsSUFBRCxDQUhyQjtBQUlFLE1BQUEsTUFBTSxFQUFFLGdCQUFBRSxDQUFDO0FBQUEsZUFBSXRDLFVBQVUsQ0FBQ29DLElBQUQsRUFBT0UsQ0FBUCxDQUFkO0FBQUE7QUFKWCxNQURnQjtBQUFBLEdBQWxCLENBREgsR0FTRztBQUFNLElBQUEsU0FBUyxZQUFLTixTQUFMO0FBQWYsS0FBZ0V2QixXQUFoRSxDQWxCTixDQVpzQjtBQUFBLENBQXhCOztBQWtDQXNCLGVBQWUsQ0FBQ3BDLFNBQWhCLEdBQTRCQSxTQUE1QjtlQUVlb0MsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBEZWxldGUgZnJvbSAnLi4vaWNvbnMvZGVsZXRlJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvLyByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlbW92ZUl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLy8gb3B0aW9uYWwgcHJvcGVydGllc1xuICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNwbGF5T3B0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dFRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5jb25zdCBDaGlja2xldEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxBY3RpdmVCZ307XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA0cHggMTBweCA0cHggM3B4O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG5cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIH1cbmA7XG5cbmNvbnN0IENoaWNrbGV0VGFnID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIDpob3ZlciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbmA7XG5cbmNvbnN0IENoaWNrbGV0ID0gKHtkaXNhYmxlZCwgbmFtZSwgcmVtb3ZlfSkgPT4gKFxuICA8Q2hpY2tsZXRCdXR0b24+XG4gICAgPENoaWNrbGV0VGFnPntuYW1lfTwvQ2hpY2tsZXRUYWc+XG4gICAgPERlbGV0ZSBoZWlnaHQ9XCIxMHB4XCIgb25DbGljaz17ZGlzYWJsZWQgPyBudWxsIDogcmVtb3ZlfSAvPlxuICA8L0NoaWNrbGV0QnV0dG9uPlxuKTtcblxuY29uc3QgQ2hpY2tsZXRlZElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBwcm9wcy5pbnB1dFRoZW1lID09PSAnc2Vjb25kYXJ5JyA/XG4gICAgcHJvcHMudGhlbWUuc2Vjb25kYXJ5Q2hpY2tsZXRlZElucHV0IDogcHJvcHMudGhlbWUuY2hpY2tsZXRlZElucHV0fVxuXG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaGFzUGxhY2Vob2xkZXJcbiAgICAgID8gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3JQbGFjZUhvbGRlclxuICAgICAgOiBwcm9wcy50aGVtZS5zZWxlY3RDb2xvcn07XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBDaGlja2xldGVkSW5wdXQgPSAoe1xuICBmb2N1cyxcbiAgZGlzYWJsZWQsXG4gIGVycm9yLFxuICBvbkNsaWNrLFxuICBjbGFzc05hbWUsXG4gIHNlbGVjdGVkSXRlbXMgPSBbXSxcbiAgcGxhY2Vob2xkZXIgPSAnJyxcbiAgcmVtb3ZlSXRlbSxcbiAgZGlzcGxheU9wdGlvbiA9IGQgPT4gZCxcbiAgaW5wdXRUaGVtZVxufSkgPT4gKFxuICA8Q2hpY2tsZXRlZElucHV0Q29udGFpbmVyXG4gICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGNoaWNrbGV0ZWQtaW5wdXRgfVxuICAgIGZvY3VzPXtmb2N1c31cbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgZXJyb3I9e2Vycm9yfVxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgaW5wdXRUaGVtZT17aW5wdXRUaGVtZX1cbiAgICBoYXNQbGFjZWhvbGRlcj17IXNlbGVjdGVkSXRlbXMgfHwgIXNlbGVjdGVkSXRlbXMubGVuZ3RofVxuICA+XG4gICAge3NlbGVjdGVkSXRlbXMubGVuZ3RoID4gMFxuICAgICAgPyBzZWxlY3RlZEl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxDaGlja2xldFxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAga2V5PXtgJHtkaXNwbGF5T3B0aW9uKGl0ZW0pfV8ke2l9YH1cbiAgICAgICAgICAgIG5hbWU9e2Rpc3BsYXlPcHRpb24oaXRlbSl9XG4gICAgICAgICAgICByZW1vdmU9e2UgPT4gcmVtb3ZlSXRlbShpdGVtLCBlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgOiA8c3BhbiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY2hpY2tsZXRlZC1pbnB1dF9fcGxhY2Vob2xkZXJgfT57cGxhY2Vob2xkZXJ9PC9zcGFuPn1cbiAgPC9DaGlja2xldGVkSW5wdXRDb250YWluZXI+XG4pO1xuXG5DaGlja2xldGVkSW5wdXQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBDaGlja2xldGVkSW5wdXQ7XG4iXX0=