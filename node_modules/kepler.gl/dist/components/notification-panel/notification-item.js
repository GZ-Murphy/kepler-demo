"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationItemFactory;

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

var _icons = require("../common/icons");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  svg {\n    vertical-align: text-top;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 2;\n  width: ", "px;\n  margin: 0 1em;\n  overflow: ", ";\n  padding-right: ", ";\n\n  p {\n    margin-top: 0;\n    a {\n      color: #fff;\n      text-decoration: underline;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n  width: ", "px;\n  height: ", "px;\n  font-size: 11px;\n  margin-bottom: 1rem;\n  padding: 1em;\n  border-radius: 4px;\n  box-shadow: ", ";\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NotificationItemContent = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.notificationColors[props.type] || '#000';
}, function (props) {
  return props.theme.notificationPanelItemWidth * (1 + Number(props.isExpanded));
}, function (props) {
  return props.theme.notificationPanelItemHeight * (1 + Number(props.isExpanded));
}, function (props) {
  return props.theme.boxShadow;
});

var DeleteIcon = (0, _styledComponents["default"])(_icons.Delete)(_templateObject2());

var NotificationMessage = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.notificationPanelItemWidth;
}, function (props) {
  return props.isExpanded ? 'auto' : 'hidden';
}, function (props) {
  return props.isExpanded ? '1em' : 0;
});

var NotificationIcon = _styledComponents["default"].div(_templateObject4());

var icons = {
  info: _react["default"].createElement(_icons.Info, null),
  warning: _react["default"].createElement(_icons.Warning, null),
  error: _react["default"].createElement(_icons.Warning, null),
  success: _react["default"].createElement(_icons.Checkmark, null)
};

var LinkRenderer = function LinkRenderer(props) {
  return _react["default"].createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

function NotificationItemFactory() {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(NotificationItem, _Component);

    function NotificationItem(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, NotificationItem);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NotificationItem).call(this, props));
      _this.state = {
        isExpanded: false
      };
      return _this;
    }

    (0, _createClass2["default"])(NotificationItem, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            notification = _this$props.notification,
            removeNotification = _this$props.removeNotification;
        var isExpanded = this.state.isExpanded;
        return _react["default"].createElement(NotificationItemContent, {
          className: "notification-item",
          type: notification.type,
          isExpanded: isExpanded,
          onClick: function onClick() {
            return _this2.setState({
              isExpanded: !isExpanded
            });
          }
        }, _react["default"].createElement(NotificationIcon, {
          className: "notification-item--icon"
        }, icons[notification.type]), _react["default"].createElement(NotificationMessage, {
          className: "notification-item--message",
          isExpanded: isExpanded,
          theme: this.props.theme
        }, _react["default"].createElement(_reactMarkdown["default"], {
          source: notification.message,
          renderers: {
            link: LinkRenderer
          }
        })), _react["default"].createElement("div", {
          className: "notification-item--action"
        }, _react["default"].createElement(DeleteIcon, {
          height: "10px",
          onClick: function onClick() {
            return removeNotification(notification.id);
          }
        })));
      }
    }]);
    return NotificationItem;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    notification: _propTypes["default"].shape({
      id: _propTypes["default"].string.isRequired,
      type: _propTypes["default"].string.isRequired,
      message: _propTypes["default"].string.isRequired
    }).isRequired
  }), _temp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1wYW5lbC9ub3RpZmljYXRpb24taXRlbS5qcyJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25JdGVtQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJub3RpZmljYXRpb25Db2xvcnMiLCJ0eXBlIiwibm90aWZpY2F0aW9uUGFuZWxJdGVtV2lkdGgiLCJOdW1iZXIiLCJpc0V4cGFuZGVkIiwibm90aWZpY2F0aW9uUGFuZWxJdGVtSGVpZ2h0IiwiYm94U2hhZG93IiwiRGVsZXRlSWNvbiIsIkRlbGV0ZSIsIk5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJOb3RpZmljYXRpb25JY29uIiwiaWNvbnMiLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwic3VjY2VzcyIsIkxpbmtSZW5kZXJlciIsImhyZWYiLCJjaGlsZHJlbiIsIk5vdGlmaWNhdGlvbkl0ZW1GYWN0b3J5Iiwic3RhdGUiLCJub3RpZmljYXRpb24iLCJyZW1vdmVOb3RpZmljYXRpb24iLCJzZXRTdGF0ZSIsIm1lc3NhZ2UiLCJsaW5rIiwiaWQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHQyw2QkFBT0MsR0FBVixvQkFDUCxVQUFBQyxLQUFLO0FBQUEsU0FDdkJBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxrQkFBWixDQUErQkYsS0FBSyxDQUFDRyxJQUFyQyxLQUE4QyxNQUR2QjtBQUFBLENBREUsRUFNbEIsVUFBQUgsS0FBSztBQUFBLFNBQ1pBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRywwQkFBWixJQUEwQyxJQUFJQyxNQUFNLENBQUNMLEtBQUssQ0FBQ00sVUFBUCxDQUFwRCxDQURZO0FBQUEsQ0FOYSxFQVFqQixVQUFBTixLQUFLO0FBQUEsU0FDYkEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLDJCQUFaLElBQTJDLElBQUlGLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDTSxVQUFQLENBQXJELENBRGE7QUFBQSxDQVJZLEVBY2IsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxTQUFoQjtBQUFBLENBZFEsQ0FBN0I7O0FBa0JBLElBQU1DLFVBQVUsR0FBRyxrQ0FBT0MsYUFBUCxDQUFILG9CQUFoQjs7QUFJQSxJQUFNQyxtQkFBbUIsR0FBR2IsNkJBQU9DLEdBQVYscUJBRWQsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRywwQkFBaEI7QUFBQSxDQUZTLEVBSVgsVUFBQUosS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ00sVUFBTixHQUFtQixNQUFuQixHQUE0QixRQUFqQztBQUFBLENBSk0sRUFLTixVQUFBTixLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CLEdBQTJCLENBQWhDO0FBQUEsQ0FMQyxDQUF6Qjs7QUFnQkEsSUFBTU0sZ0JBQWdCLEdBQUdkLDZCQUFPQyxHQUFWLG9CQUF0Qjs7QUFNQSxJQUFNYyxLQUFLLEdBQUc7QUFDWkMsRUFBQUEsSUFBSSxFQUFFLGdDQUFDLFdBQUQsT0FETTtBQUVaQyxFQUFBQSxPQUFPLEVBQUUsZ0NBQUMsY0FBRCxPQUZHO0FBR1pDLEVBQUFBLEtBQUssRUFBRSxnQ0FBQyxjQUFELE9BSEs7QUFJWkMsRUFBQUEsT0FBTyxFQUFFLGdDQUFDLGdCQUFEO0FBSkcsQ0FBZDs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBbEIsS0FBSyxFQUFJO0FBQzVCLFNBQ0U7QUFBRyxJQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDbUIsSUFBZjtBQUFxQixJQUFBLE1BQU0sRUFBQyxRQUE1QjtBQUFxQyxJQUFBLEdBQUcsRUFBQztBQUF6QyxLQUNHbkIsS0FBSyxDQUFDb0IsUUFEVCxDQURGO0FBS0QsQ0FORDs7QUFRZSxTQUFTQyx1QkFBVCxHQUFtQztBQUFBOztBQUNoRDtBQUFBO0FBQUE7QUFBQTs7QUFTRSw4QkFBWXJCLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4SEFBTUEsS0FBTjtBQUNBLFlBQUtzQixLQUFMLEdBQWE7QUFDWGhCLFFBQUFBLFVBQVUsRUFBRTtBQURELE9BQWI7QUFGaUI7QUFLbEI7O0FBZEg7QUFBQTtBQUFBLCtCQWdCVztBQUFBOztBQUFBLDBCQUNvQyxLQUFLTixLQUR6QztBQUFBLFlBQ0F1QixZQURBLGVBQ0FBLFlBREE7QUFBQSxZQUNjQyxrQkFEZCxlQUNjQSxrQkFEZDtBQUFBLFlBRUFsQixVQUZBLEdBRWMsS0FBS2dCLEtBRm5CLENBRUFoQixVQUZBO0FBSVAsZUFDRSxnQ0FBQyx1QkFBRDtBQUNFLFVBQUEsU0FBUyxFQUFDLG1CQURaO0FBRUUsVUFBQSxJQUFJLEVBQUVpQixZQUFZLENBQUNwQixJQUZyQjtBQUdFLFVBQUEsVUFBVSxFQUFFRyxVQUhkO0FBSUUsVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNtQixRQUFMLENBQWM7QUFBQ25CLGNBQUFBLFVBQVUsRUFBRSxDQUFDQTtBQUFkLGFBQWQsQ0FBTjtBQUFBO0FBSlgsV0FNRSxnQ0FBQyxnQkFBRDtBQUFrQixVQUFBLFNBQVMsRUFBQztBQUE1QixXQUNHTyxLQUFLLENBQUNVLFlBQVksQ0FBQ3BCLElBQWQsQ0FEUixDQU5GLEVBU0UsZ0NBQUMsbUJBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBQyw0QkFEWjtBQUVFLFVBQUEsVUFBVSxFQUFFRyxVQUZkO0FBR0UsVUFBQSxLQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXQztBQUhwQixXQUtFLGdDQUFDLHlCQUFEO0FBQ0UsVUFBQSxNQUFNLEVBQUVzQixZQUFZLENBQUNHLE9BRHZCO0FBRUUsVUFBQSxTQUFTLEVBQUU7QUFBQ0MsWUFBQUEsSUFBSSxFQUFFVDtBQUFQO0FBRmIsVUFMRixDQVRGLEVBbUJFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNFLGdDQUFDLFVBQUQ7QUFDRSxVQUFBLE1BQU0sRUFBQyxNQURUO0FBRUUsVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTU0sa0JBQWtCLENBQUNELFlBQVksQ0FBQ0ssRUFBZCxDQUF4QjtBQUFBO0FBRlgsVUFERixDQW5CRixDQURGO0FBNEJEO0FBaERIO0FBQUE7QUFBQSxJQUFzQ0MsZ0JBQXRDLHlEQUNxQjtBQUNqQk4sSUFBQUEsWUFBWSxFQUFFTyxzQkFBVUMsS0FBVixDQUFnQjtBQUM1QkgsTUFBQUEsRUFBRSxFQUFFRSxzQkFBVUUsTUFBVixDQUFpQkMsVUFETztBQUU1QjlCLE1BQUFBLElBQUksRUFBRTJCLHNCQUFVRSxNQUFWLENBQWlCQyxVQUZLO0FBRzVCUCxNQUFBQSxPQUFPLEVBQUVJLHNCQUFVRSxNQUFWLENBQWlCQztBQUhFLEtBQWhCLEVBSVhBO0FBTGMsR0FEckI7QUFrREQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7RGVsZXRlLCBJbmZvLCBXYXJuaW5nLCBDaGVja21hcmt9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcblxuY29uc3QgTm90aWZpY2F0aW9uSXRlbUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMudGhlbWUubm90aWZpY2F0aW9uQ29sb3JzW3Byb3BzLnR5cGVdIHx8ICcjMDAwJ307XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogJHtwcm9wcyA9PlxuICAgIHByb3BzLnRoZW1lLm5vdGlmaWNhdGlvblBhbmVsSXRlbVdpZHRoICogKDEgKyBOdW1iZXIocHJvcHMuaXNFeHBhbmRlZCkpfXB4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy50aGVtZS5ub3RpZmljYXRpb25QYW5lbEl0ZW1IZWlnaHQgKiAoMSArIE51bWJlcihwcm9wcy5pc0V4cGFuZGVkKSl9cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm94U2hhZG93fTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgRGVsZXRlSWNvbiA9IHN0eWxlZChEZWxldGUpYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBOb3RpZmljYXRpb25NZXNzYWdlID0gc3R5bGVkLmRpdmBcbiAgZmxleC1ncm93OiAyO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ub3RpZmljYXRpb25QYW5lbEl0ZW1XaWR0aH1weDtcbiAgbWFyZ2luOiAwIDFlbTtcbiAgb3ZlcmZsb3c6ICR7cHJvcHMgPT4gKHByb3BzLmlzRXhwYW5kZWQgPyAnYXV0bycgOiAnaGlkZGVuJyl9O1xuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5pc0V4cGFuZGVkID8gJzFlbScgOiAwKX07XG5cbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBOb3RpZmljYXRpb25JY29uID0gc3R5bGVkLmRpdmBcbiAgc3ZnIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gIH1cbmA7XG5cbmNvbnN0IGljb25zID0ge1xuICBpbmZvOiA8SW5mbyAvPixcbiAgd2FybmluZzogPFdhcm5pbmcgLz4sXG4gIGVycm9yOiA8V2FybmluZyAvPixcbiAgc3VjY2VzczogPENoZWNrbWFyayAvPlxufTtcblxuY29uc3QgTGlua1JlbmRlcmVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpZmljYXRpb25JdGVtRmFjdG9yeSgpIHtcbiAgcmV0dXJuIGNsYXNzIE5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBub3RpZmljYXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICB9KS5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpc0V4cGFuZGVkOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bm90aWZpY2F0aW9uLCByZW1vdmVOb3RpZmljYXRpb259ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtpc0V4cGFuZGVkfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOb3RpZmljYXRpb25JdGVtQ29udGVudFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pdGVtXCJcbiAgICAgICAgICB0eXBlPXtub3RpZmljYXRpb24udHlwZX1cbiAgICAgICAgICBpc0V4cGFuZGVkPXtpc0V4cGFuZGVkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2lzRXhwYW5kZWQ6ICFpc0V4cGFuZGVkfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8Tm90aWZpY2F0aW9uSWNvbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taXRlbS0taWNvblwiPlxuICAgICAgICAgICAge2ljb25zW25vdGlmaWNhdGlvbi50eXBlXX1cbiAgICAgICAgICA8L05vdGlmaWNhdGlvbkljb24+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbk1lc3NhZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pdGVtLS1tZXNzYWdlXCJcbiAgICAgICAgICAgIGlzRXhwYW5kZWQ9e2lzRXhwYW5kZWR9XG4gICAgICAgICAgICB0aGVtZT17dGhpcy5wcm9wcy50aGVtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICBzb3VyY2U9e25vdGlmaWNhdGlvbi5tZXNzYWdlfVxuICAgICAgICAgICAgICByZW5kZXJlcnM9e3tsaW5rOiBMaW5rUmVuZGVyZXJ9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L05vdGlmaWNhdGlvbk1lc3NhZ2U+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taXRlbS0tYWN0aW9uXCI+XG4gICAgICAgICAgICA8RGVsZXRlSWNvblxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMHB4XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbi5pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L05vdGlmaWNhdGlvbkl0ZW1Db250ZW50PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=