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

var _defaultSettings = require("../../constants/default-settings");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 3px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: flex-start;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 10px;\n  color: ", ";\n  letter-spacing: 0.83px;\n  line-height: 14px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .logo__link {\n    color: ", ";\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 1.17px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin-left: 6px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LogoTitle = _styledComponents["default"].div(_templateObject());

var LogoName = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.activeColor;
});

var LogoVersion = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.subtextColor;
});

var LogoWrapper = _styledComponents["default"].div(_templateObject4());

var LogoSvgWrapper = _styledComponents["default"].div(_templateObject5());

var LogoSvg = function LogoSvg() {
  return _react["default"].createElement("svg", {
    className: "side-panel-logo__logo",
    width: "22px",
    height: "15px",
    viewBox: "0 0 22 15"
  }, _react["default"].createElement("g", {
    transform: "translate(11, -3) rotate(45.000000)"
  }, _react["default"].createElement("rect", {
    fill: "#535C6C",
    x: "0",
    y: "5",
    width: "10",
    height: "10"
  }), _react["default"].createElement("rect", {
    fill: "#1FBAD6",
    x: "5",
    y: "0",
    width: "10",
    height: "10"
  })));
};

var KeplerGlLogo = function KeplerGlLogo(_ref) {
  var _ref$appName = _ref.appName,
      appName = _ref$appName === void 0 ? _defaultSettings.KEPLER_GL_NAME : _ref$appName,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? _defaultSettings.KEPLER_GL_VERSION : _ref$version;
  return _react["default"].createElement(LogoWrapper, {
    className: "side-panel-logo"
  }, _react["default"].createElement(LogoSvgWrapper, null, _react["default"].createElement(LogoSvg, null)), _react["default"].createElement(LogoTitle, {
    className: "logo__title"
  }, _react["default"].createElement(LogoName, {
    className: "logo__name"
  }, _react["default"].createElement("a", {
    className: "logo__link",
    target: "_blank",
    rel: "noopener noreferrer",
    href: _defaultSettings.KEPLER_GL_WEBSITE
  }, appName)), version ? _react["default"].createElement(LogoVersion, {
    className: "logo__version"
  }, version) : null));
};

KeplerGlLogo.defaultProps = {
  appName: _propTypes["default"].string,
  version: _propTypes["default"].string
};
var _default = KeplerGlLogo;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2dvLmpzIl0sIm5hbWVzIjpbIkxvZ29UaXRsZSIsInN0eWxlZCIsImRpdiIsIkxvZ29OYW1lIiwicHJvcHMiLCJ0aGVtZSIsImFjdGl2ZUNvbG9yIiwiTG9nb1ZlcnNpb24iLCJzdWJ0ZXh0Q29sb3IiLCJMb2dvV3JhcHBlciIsIkxvZ29TdmdXcmFwcGVyIiwiTG9nb1N2ZyIsIktlcGxlckdsTG9nbyIsImFwcE5hbWUiLCJLRVBMRVJfR0xfTkFNRSIsInZlcnNpb24iLCJLRVBMRVJfR0xfVkVSU0lPTiIsIktFUExFUl9HTF9XRUJTSVRFIiwiZGVmYXVsdFByb3BzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVYsbUJBQWY7O0FBS0EsSUFBTUMsUUFBUSxHQUFHRiw2QkFBT0MsR0FBVixxQkFFRCxVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FGSixDQUFkOztBQVFBLElBQU1DLFdBQVcsR0FBR04sNkJBQU9DLEdBQVYscUJBRU4sVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxZQUFoQjtBQUFBLENBRkMsQ0FBakI7O0FBT0EsSUFBTUMsV0FBVyxHQUFHUiw2QkFBT0MsR0FBVixvQkFBakI7O0FBS0EsSUFBTVEsY0FBYyxHQUFHVCw2QkFBT0MsR0FBVixvQkFBcEI7O0FBSUEsSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUNkO0FBQ0UsSUFBQSxTQUFTLEVBQUMsdUJBRFo7QUFFRSxJQUFBLEtBQUssRUFBQyxNQUZSO0FBR0UsSUFBQSxNQUFNLEVBQUMsTUFIVDtBQUlFLElBQUEsT0FBTyxFQUFDO0FBSlYsS0FNRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsS0FDRTtBQUFNLElBQUEsSUFBSSxFQUFDLFNBQVg7QUFBcUIsSUFBQSxDQUFDLEVBQUMsR0FBdkI7QUFBMkIsSUFBQSxDQUFDLEVBQUMsR0FBN0I7QUFBaUMsSUFBQSxLQUFLLEVBQUMsSUFBdkM7QUFBNEMsSUFBQSxNQUFNLEVBQUM7QUFBbkQsSUFERixFQUVFO0FBQU0sSUFBQSxJQUFJLEVBQUMsU0FBWDtBQUFxQixJQUFBLENBQUMsRUFBQyxHQUF2QjtBQUEyQixJQUFBLENBQUMsRUFBQyxHQUE3QjtBQUFpQyxJQUFBLEtBQUssRUFBQyxJQUF2QztBQUE0QyxJQUFBLE1BQU0sRUFBQztBQUFuRCxJQUZGLENBTkYsQ0FEYztBQUFBLENBQWhCOztBQWNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsMEJBQUVDLE9BQUY7QUFBQSxNQUFFQSxPQUFGLDZCQUFZQywrQkFBWjtBQUFBLDBCQUE0QkMsT0FBNUI7QUFBQSxNQUE0QkEsT0FBNUIsNkJBQXNDQyxrQ0FBdEM7QUFBQSxTQUNuQixnQ0FBQyxXQUFEO0FBQWEsSUFBQSxTQUFTLEVBQUM7QUFBdkIsS0FDRSxnQ0FBQyxjQUFELFFBQ0UsZ0NBQUMsT0FBRCxPQURGLENBREYsRUFJRSxnQ0FBQyxTQUFEO0FBQVcsSUFBQSxTQUFTLEVBQUM7QUFBckIsS0FDRSxnQ0FBQyxRQUFEO0FBQVUsSUFBQSxTQUFTLEVBQUM7QUFBcEIsS0FDRTtBQUFHLElBQUEsU0FBUyxFQUFDLFlBQWI7QUFBMEIsSUFBQSxNQUFNLEVBQUMsUUFBakM7QUFBMEMsSUFBQSxHQUFHLEVBQUMscUJBQTlDO0FBQW9FLElBQUEsSUFBSSxFQUFFQztBQUExRSxLQUE4RkosT0FBOUYsQ0FERixDQURGLEVBSUdFLE9BQU8sR0FBRyxnQ0FBQyxXQUFEO0FBQWEsSUFBQSxTQUFTLEVBQUM7QUFBdkIsS0FBd0NBLE9BQXhDLENBQUgsR0FBb0UsSUFKOUUsQ0FKRixDQURtQjtBQUFBLENBQXJCOztBQWNBSCxZQUFZLENBQUNNLFlBQWIsR0FBNEI7QUFDMUJMLEVBQUFBLE9BQU8sRUFBRU0sc0JBQVVDLE1BRE87QUFFMUJMLEVBQUFBLE9BQU8sRUFBRUksc0JBQVVDO0FBRk8sQ0FBNUI7ZUFLZVIsWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0tFUExFUl9HTF9OQU1FLCBLRVBMRVJfR0xfVkVSU0lPTiwgS0VQTEVSX0dMX1dFQlNJVEV9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgTG9nb1RpdGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuYDtcblxuY29uc3QgTG9nb05hbWUgPSBzdHlsZWQuZGl2YFxuICAubG9nb19fbGluayB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjE3cHg7XG4gIH1cbmA7XG5jb25zdCBMb2dvVmVyc2lvbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODNweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG5gO1xuXG5jb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuYDtcblxuY29uc3QgTG9nb1N2Z1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAzcHg7XG5gO1xuXG5jb25zdCBMb2dvU3ZnID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwic2lkZS1wYW5lbC1sb2dvX19sb2dvXCJcbiAgICB3aWR0aD1cIjIycHhcIlxuICAgIGhlaWdodD1cIjE1cHhcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjIgMTVcIlxuICA+XG4gICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExLCAtMykgcm90YXRlKDQ1LjAwMDAwMClcIj5cbiAgICAgIDxyZWN0IGZpbGw9XCIjNTM1QzZDXCIgeD1cIjBcIiB5PVwiNVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICA8cmVjdCBmaWxsPVwiIzFGQkFENlwiIHg9XCI1XCIgeT1cIjBcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiAvPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBLZXBsZXJHbExvZ28gPSAoe2FwcE5hbWUgPSBLRVBMRVJfR0xfTkFNRSwgdmVyc2lvbiA9IEtFUExFUl9HTF9WRVJTSU9OfSkgPT4gKFxuICA8TG9nb1dyYXBwZXIgY2xhc3NOYW1lPVwic2lkZS1wYW5lbC1sb2dvXCI+XG4gICAgPExvZ29TdmdXcmFwcGVyPlxuICAgICAgPExvZ29TdmcgLz5cbiAgICA8L0xvZ29TdmdXcmFwcGVyPlxuICAgIDxMb2dvVGl0bGUgY2xhc3NOYW1lPVwibG9nb19fdGl0bGVcIj5cbiAgICAgIDxMb2dvTmFtZSBjbGFzc05hbWU9XCJsb2dvX19uYW1lXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ29fX2xpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj17S0VQTEVSX0dMX1dFQlNJVEV9PnthcHBOYW1lfTwvYT5cbiAgICAgIDwvTG9nb05hbWU+XG4gICAgICB7dmVyc2lvbiA/IDxMb2dvVmVyc2lvbiBjbGFzc05hbWU9XCJsb2dvX192ZXJzaW9uXCI+e3ZlcnNpb259PC9Mb2dvVmVyc2lvbj4gOiBudWxsfVxuICAgIDwvTG9nb1RpdGxlPlxuICA8L0xvZ29XcmFwcGVyPlxuKTtcblxuS2VwbGVyR2xMb2dvLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXBwTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmVyc2lvbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2VwbGVyR2xMb2dvO1xuIl19