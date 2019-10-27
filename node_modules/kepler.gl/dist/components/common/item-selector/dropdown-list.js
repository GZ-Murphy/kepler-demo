"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListItem = exports.classList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var classList = {
  list: 'list-selector',
  listHeader: 'list__header',
  listSection: 'list__section',
  listItem: 'list__item',
  listItemAnchor: 'list__item__anchor'
};
exports.classList = classList;

var defaultDisplay = function defaultDisplay(d) {
  return d;
};

var ListItem = function ListItem(_ref) {
  var value = _ref.value,
      _ref$displayOption = _ref.displayOption,
      displayOption = _ref$displayOption === void 0 ? defaultDisplay : _ref$displayOption;
  return _react["default"].createElement("span", {
    className: classList.listItemAnchor
  }, displayOption(value));
};

exports.ListItem = ListItem;

var DropdownListWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
}, function (props) {
  return props.theme.dropdownList;
});

var DropdownList =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(DropdownList, _Component);

  function DropdownList() {
    (0, _classCallCheck2["default"])(this, DropdownList);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DropdownList).apply(this, arguments));
  }

  (0, _createClass2["default"])(DropdownList, [{
    key: "_onClick",
    value: function _onClick(result, event) {
      event.preventDefault();
      this.props.onOptionSelected(result, event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var fixedOptions = this.props.fixedOptions;
      var display = this.props.displayOption; // Don't render if there are no options to display

      if (!this.props.options.length && this.props.allowCustomValues <= 0) {
        return false;
      }

      var valueOffset = Array.isArray(fixedOptions) ? fixedOptions.length : 0; // For some reason onClick is not fired when clicked on an option
      // onMouseDown is used here as a workaround of #205 and other

      return _react["default"].createElement(DropdownListWrapper, {
        className: classList.list
      }, this.props.customListHeaderComponent ? _react["default"].createElement("div", {
        className: classList.listHeader
      }, _react["default"].createElement(this.props.customListHeaderComponent, null)) : null, valueOffset > 0 ? _react["default"].createElement("div", {
        className: classList.listSection
      }, fixedOptions.map(function (value, i) {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this.props.selectionIndex === i,
            fixed: true
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this._onClick(value, e);
          }
        }, _react["default"].createElement(_this.props.customListItemComponent, {
          value: value,
          displayOption: display
        }));
      })) : null, this.props.options.map(function (value, i) {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this.props.selectionIndex === i + valueOffset
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this._onClick(value, e);
          }
        }, _react["default"].createElement(_this.props.customListItemComponent, {
          value: value,
          displayOption: display
        }));
      }));
    }
  }]);
  return DropdownList;
}(_react.Component);

exports["default"] = DropdownList;
(0, _defineProperty2["default"])(DropdownList, "propTypes", {
  options: _propTypes["default"].arrayOf(_propTypes["default"].any),
  allowCustomValues: _propTypes["default"].number,
  customClasses: _propTypes["default"].object,
  customValues: _propTypes["default"].arrayOf(_propTypes["default"].any),
  customListItemComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListHeaderComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  selectionIndex: _propTypes["default"].number,
  onOptionSelected: _propTypes["default"].func,
  displayOption: _propTypes["default"].func.isRequired,
  defaultClassNames: _propTypes["default"].bool,
  areResultsTruncated: _propTypes["default"].bool,
  resultsTruncatedMessage: _propTypes["default"].string,
  listItemComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(DropdownList, "defaultProps", {
  customClasses: {},
  customListItemComponent: ListItem,
  customListHeaderComponent: null,
  allowCustomValues: 0,
  customValues: [],
  displayOption: defaultDisplay,
  onOptionSelected: function onOptionSelected() {},
  defaultClassNames: true,
  selectionIndex: null
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QuanMiXSwibmFtZXMiOlsiY2xhc3NMaXN0IiwibGlzdCIsImxpc3RIZWFkZXIiLCJsaXN0U2VjdGlvbiIsImxpc3RJdGVtIiwibGlzdEl0ZW1BbmNob3IiLCJkZWZhdWx0RGlzcGxheSIsImQiLCJMaXN0SXRlbSIsInZhbHVlIiwiZGlzcGxheU9wdGlvbiIsIkRyb3Bkb3duTGlzdFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiZHJvcGRvd25MaXN0IiwiRHJvcGRvd25MaXN0IiwicmVzdWx0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJmaXhlZE9wdGlvbnMiLCJkaXNwbGF5Iiwib3B0aW9ucyIsImxlbmd0aCIsImFsbG93Q3VzdG9tVmFsdWVzIiwidmFsdWVPZmZzZXQiLCJBcnJheSIsImlzQXJyYXkiLCJjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50IiwibWFwIiwiaSIsImhvdmVyIiwic2VsZWN0aW9uSW5kZXgiLCJmaXhlZCIsImUiLCJfb25DbGljayIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJudW1iZXIiLCJjdXN0b21DbGFzc2VzIiwib2JqZWN0IiwiY3VzdG9tVmFsdWVzIiwiY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0Q2xhc3NOYW1lcyIsImJvb2wiLCJhcmVSZXN1bHRzVHJ1bmNhdGVkIiwicmVzdWx0c1RydW5jYXRlZE1lc3NhZ2UiLCJzdHJpbmciLCJsaXN0SXRlbUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFD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QUUsQ0FQTjtBQVFwQjhCLEVBQUFBLGlCQUFpQixFQUFFLElBUkM7QUFTcEJqQixFQUFBQSxjQUFjLEVBQUU7QUFUSSxDO0FBNkV2QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBjbGFzc0xpc3QgPSB7XG4gIGxpc3Q6ICdsaXN0LXNlbGVjdG9yJyxcbiAgbGlzdEhlYWRlcjogJ2xpc3RfX2hlYWRlcicsXG4gIGxpc3RTZWN0aW9uOiAnbGlzdF9fc2VjdGlvbicsXG4gIGxpc3RJdGVtOiAnbGlzdF9faXRlbScsXG4gIGxpc3RJdGVtQW5jaG9yOiAnbGlzdF9faXRlbV9fYW5jaG9yJ1xufTtcblxuY29uc3QgZGVmYXVsdERpc3BsYXkgPSBkID0+IGQ7XG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSAoe3ZhbHVlLCBkaXNwbGF5T3B0aW9uID0gZGVmYXVsdERpc3BsYXl9KSA9PiAoXG4gIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3RJdGVtQW5jaG9yfT57ZGlzcGxheU9wdGlvbih2YWx1ZSl9PC9zcGFuPlxuKTtcblxuY29uc3QgRHJvcGRvd25MaXN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0Qm9yZGVyVG9wfTtcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3R9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBhbGxvd0N1c3RvbVZhbHVlczogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjdXN0b21DbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGN1c3RvbVZhbHVlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMuZnVuY1xuICAgIF0pLFxuICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMuZnVuY1xuICAgIF0pLFxuICAgIHNlbGVjdGlvbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uT3B0aW9uU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc3BsYXlPcHRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGVmYXVsdENsYXNzTmFtZXM6IFByb3BUeXBlcy5ib29sLFxuICAgIGFyZVJlc3VsdHNUcnVuY2F0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxpc3RJdGVtQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY3VzdG9tQ2xhc3Nlczoge30sXG4gICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ6IExpc3RJdGVtLFxuICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ6IG51bGwsXG4gICAgYWxsb3dDdXN0b21WYWx1ZXM6IDAsXG4gICAgY3VzdG9tVmFsdWVzOiBbXSxcbiAgICBkaXNwbGF5T3B0aW9uOiBkZWZhdWx0RGlzcGxheSxcbiAgICBvbk9wdGlvblNlbGVjdGVkOiAoKSA9PiB7fSxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lczogdHJ1ZSxcbiAgICBzZWxlY3Rpb25JbmRleDogbnVsbFxuICB9O1xuXG4gIF9vbkNsaWNrKHJlc3VsdCwgZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25PcHRpb25TZWxlY3RlZChyZXN1bHQsIGV2ZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Zml4ZWRPcHRpb25zfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMucHJvcHMuZGlzcGxheU9wdGlvbjtcblxuICAgIC8vIERvbid0IHJlbmRlciBpZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyB0byBkaXNwbGF5XG4gICAgaWYgKCF0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoICYmIHRoaXMucHJvcHMuYWxsb3dDdXN0b21WYWx1ZXMgPD0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlT2Zmc2V0ID0gQXJyYXkuaXNBcnJheShmaXhlZE9wdGlvbnMpID8gZml4ZWRPcHRpb25zLmxlbmd0aCA6IDA7XG5cbiAgICAvLyBGb3Igc29tZSByZWFzb24gb25DbGljayBpcyBub3QgZmlyZWQgd2hlbiBjbGlja2VkIG9uIGFuIG9wdGlvblxuICAgIC8vIG9uTW91c2VEb3duIGlzIHVzZWQgaGVyZSBhcyBhIHdvcmthcm91bmQgb2YgIzIwNSBhbmQgb3RoZXJcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duTGlzdFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdH0+XG4gICAgICAgIHt0aGlzLnByb3BzLmN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0SGVhZGVyfT5cbiAgICAgICAgICAgIDx0aGlzLnByb3BzLmN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAge3ZhbHVlT2Zmc2V0ID4gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3RTZWN0aW9ufT5cbiAgICAgICAgICAgIHtmaXhlZE9wdGlvbnMubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTGlzdC5saXN0SXRlbSwge1xuICAgICAgICAgICAgICAgICAgaG92ZXI6IHRoaXMucHJvcHMuc2VsZWN0aW9uSW5kZXggPT09IGksXG4gICAgICAgICAgICAgICAgICBmaXhlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIGtleT17YCR7ZGlzcGxheSh2YWx1ZSl9XyR7aX1gfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMuX29uQ2xpY2sodmFsdWUsIGUpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5fb25DbGljayh2YWx1ZSwgZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGhpcy5wcm9wcy5jdXN0b21MaXN0SXRlbUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7dGhpcy5wcm9wcy5vcHRpb25zLm1hcCgodmFsdWUsIGkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NMaXN0Lmxpc3RJdGVtLCB7XG4gICAgICAgICAgICAgIGhvdmVyOiB0aGlzLnByb3BzLnNlbGVjdGlvbkluZGV4ID09PSBpICsgdmFsdWVPZmZzZXRcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PXtgJHtkaXNwbGF5KHZhbHVlKX1fJHtpfWB9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLl9vbkNsaWNrKHZhbHVlLCBlKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5fb25DbGljayh2YWx1ZSwgZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRoaXMucHJvcHMuY3VzdG9tTGlzdEl0ZW1Db21wb25lbnRcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtkaXNwbGF5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L0Ryb3Bkb3duTGlzdFdyYXBwZXI+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==