"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CollapseButtonFactory = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  justify-content: center;\n  background-color: ", ";\n  border-radius: 1px;\n  color: ", ";\n  display: flex;\n  height: 20px;\n  position: absolute;\n  right: -8px;\n  top: ", "px;\n  width: 20px;\n\n  :hover {\n    cursor: pointer;\n    box-shadow: none;\n    background-color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-radius: 1px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: left 250ms, right 250ms;\n  left: ", "px;\n  align-items: stretch;\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 99;\n  height: 100%;\n  width: ", "px;\n  display: flex;\n  transition: width 250ms;\n  position: absolute;\n  padding-top: ", "px;\n  padding-right: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSidePanelContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.width + 2 * props.theme.sidePanel.margin.left;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sidePanel.margin.right;
}, function (props) {
  return props.theme.sidePanel.margin.bottom;
}, function (props) {
  return props.theme.sidePanel.margin.left;
});

var SideBarContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.left;
});

var SideBarInner = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.sidePanelBg;
});

var StyledCollapseButton = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.sideBarCloseBtnBgd;
}, function (props) {
  return props.theme.sideBarCloseBtnColor;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sideBarCloseBtnBgdHover;
});

var CollapseButtonFactory = function CollapseButtonFactory() {
  var CollapseButton = function CollapseButton(_ref) {
    var onClick = _ref.onClick,
        isOpen = _ref.isOpen;
    return _react["default"].createElement(StyledCollapseButton, {
      className: "side-bar__close",
      onClick: onClick
    }, _react["default"].createElement(_icons.ArrowRight, {
      height: "12px",
      style: {
        transform: "rotate(".concat(isOpen ? 180 : 0, "deg)")
      }
    }));
  };

  return CollapseButton;
};

exports.CollapseButtonFactory = CollapseButtonFactory;
SidebarFactory.deps = [CollapseButtonFactory];

function SidebarFactory(CollapseButton) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(SideBar, _Component);

    function SideBar() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, SideBar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(SideBar)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.onOpenOrClose({
          isOpen: !_this.props.isOpen
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(SideBar, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isOpen = _this$props.isOpen,
            minifiedWidth = _this$props.minifiedWidth,
            width = _this$props.width;
        var horizontalOffset = isOpen ? 0 : minifiedWidth - width;
        return _react["default"].createElement(StyledSidePanelContainer, {
          width: isOpen ? width : 0,
          className: "side-panel--container"
        }, _react["default"].createElement(SideBarContainer, {
          className: "side-bar",
          style: {
            width: "".concat(width, "px")
          },
          left: horizontalOffset
        }, isOpen ? _react["default"].createElement(SideBarInner, {
          className: "side-bar__inner"
        }, this.props.children) : null, _react["default"].createElement(CollapseButton, {
          isOpen: isOpen,
          onClick: this._onOpenOrClose
        })));
      }
    }]);
    return SideBar;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "defaultProps", {
    width: 300,
    minifiedWidth: 0,
    isOpen: true,
    onOpenOrClose: function noop() {}
  }), (0, _defineProperty2["default"])(_class, "propTypes", {
    width: _propTypes["default"].number,
    isOpen: _propTypes["default"].bool,
    minifiedWidth: _propTypes["default"].number,
    onOpenOrClose: _propTypes["default"].func
  }), _temp;
}

var _default = SidebarFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc2lkZS1iYXIuanMiXSwibmFtZXMiOlsiU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiU2lkZUJhckNvbnRhaW5lciIsIlNpZGVCYXJJbm5lciIsInNpZGVQYW5lbEJnIiwiU3R5bGVkQ29sbGFwc2VCdXR0b24iLCJzaWRlQmFyQ2xvc2VCdG5CZ2QiLCJzaWRlQmFyQ2xvc2VCdG5Db2xvciIsInNpZGVCYXJDbG9zZUJ0bkJnZEhvdmVyIiwiQ29sbGFwc2VCdXR0b25GYWN0b3J5IiwiQ29sbGFwc2VCdXR0b24iLCJvbkNsaWNrIiwiaXNPcGVuIiwidHJhbnNmb3JtIiwiU2lkZWJhckZhY3RvcnkiLCJkZXBzIiwib25PcGVuT3JDbG9zZSIsIm1pbmlmaWVkV2lkdGgiLCJob3Jpem9udGFsT2Zmc2V0IiwiY2hpbGRyZW4iLCJfb25PcGVuT3JDbG9zZSIsIkNvbXBvbmVudCIsIm5vb3AiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx3QkFBd0IsR0FBR0MsNkJBQU9DLEdBQVYsb0JBR25CLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxJQUFJRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkJDLElBQW5EO0FBQUEsQ0FIYyxFQU9iLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkMsTUFBdEIsQ0FB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SUUsZ0NBQUMsZ0JBQUQ7QUFBa0IsVUFBQSxTQUFTLEVBQUMsVUFBNUI7QUFBdUMsVUFBQSxLQUFLLEVBQUU7QUFBQ0EsWUFBQUEsS0FBSyxZQUFLQSxLQUFMO0FBQU4sV0FBOUM7QUFDa0IsVUFBQSxJQUFJLEVBQUV3QjtBQUR4QixXQUVHTixNQUFNLEdBQ0wsZ0NBQUMsWUFBRDtBQUFjLFVBQUEsU0FBUyxFQUFDO0FBQXhCLFdBQ0csS0FBS25CLEtBQUwsQ0FBVzBCLFFBRGQsQ0FESyxHQUlILElBTk4sRUFPRSxnQ0FBQyxjQUFEO0FBQ0UsVUFBQSxNQUFNLEVBQUVQLE1BRFY7QUFFRSxVQUFBLE9BQU8sRUFBRSxLQUFLUTtBQUZoQixVQVBGLENBSkYsQ0FERjtBQW1CRDtBQTFDSDtBQUFBO0FBQUEsSUFBNkJDLGdCQUE3Qiw0REFDd0I7QUFDcEIzQixJQUFBQSxLQUFLLEVBQUUsR0FEYTtBQUVwQnVCLElBQUFBLGFBQWEsRUFBRSxDQUZLO0FBR3BCTCxJQUFBQSxNQUFNLEVBQUUsSUFIWTtBQUlwQkksSUFBQUEsYUFBYSxFQUFFLFNBQVNNLElBQVQsR0FBZ0IsQ0FBRTtBQUpiLEdBRHhCLHlEQVFxQjtBQUNqQjVCLElBQUFBLEtBQUssRUFBRTZCLHNCQUFVQyxNQURBO0FBRWpCWixJQUFBQSxNQUFNLEVBQUVXLHNCQUFVRSxJQUZEO0FBR2pCUixJQUFBQSxhQUFhLEVBQUVNLHNCQUFVQyxNQUhSO0FBSWpCUixJQUFBQSxhQUFhLEVBQUVPLHNCQUFVRztBQUpSLEdBUnJCO0FBNENEOztlQUVjWixjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Fycm93UmlnaHR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuY29uc3QgU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGggKyAyICogcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5sZWZ0fXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAyNTBtcztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLnRvcH1weDtcbiAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLnJpZ2h0fXB4O1xuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmJvdHRvbX1weDtcbiAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4ubGVmdH1weDtcbmA7XG5cbmNvbnN0IFNpZGVCYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDI1MG1zLCByaWdodCAyNTBtcztcbiAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fXB4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1ncm93OiAxO1xuYDtcblxuY29uc3QgU2lkZUJhcklubmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxCZ307XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgU3R5bGVkQ29sbGFwc2VCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlQmFyQ2xvc2VCdG5CZ2R9O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkNvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtOHB4O1xuICB0b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi50b3B9cHg7XG4gIHdpZHRoOiAyMHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlQmFyQ2xvc2VCdG5CZ2RIb3Zlcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb2xsYXBzZUJ1dHRvbkZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IENvbGxhcHNlQnV0dG9uID0gKHtvbkNsaWNrLCBpc09wZW59KSA9PiAoXG4gICAgPFN0eWxlZENvbGxhcHNlQnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJzaWRlLWJhcl9fY2xvc2VcIlxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8QXJyb3dSaWdodFxuICAgICAgICBoZWlnaHQ9XCIxMnB4XCJcbiAgICAgICAgc3R5bGU9e3t0cmFuc2Zvcm06IGByb3RhdGUoJHtpc09wZW4gPyAxODAgOiAwfWRlZylgfX1cbiAgICAgIC8+XG4gICAgPC9TdHlsZWRDb2xsYXBzZUJ1dHRvbj5cbiAgKTtcbiAgcmV0dXJuIENvbGxhcHNlQnV0dG9uO1xufTtcblxuU2lkZWJhckZhY3RvcnkuZGVwcyA9IFtDb2xsYXBzZUJ1dHRvbkZhY3RvcnldO1xuXG5mdW5jdGlvbiBTaWRlYmFyRmFjdG9yeShDb2xsYXBzZUJ1dHRvbikge1xuICByZXR1cm4gY2xhc3MgU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBtaW5pZmllZFdpZHRoOiAwLFxuICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgb25PcGVuT3JDbG9zZTogZnVuY3Rpb24gbm9vcCgpIHt9XG4gICAgfTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBtaW5pZmllZFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgb25PcGVuT3JDbG9zZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgX29uT3Blbk9yQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uT3Blbk9yQ2xvc2Uoe2lzT3BlbjogIXRoaXMucHJvcHMuaXNPcGVufSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtpc09wZW4sIG1pbmlmaWVkV2lkdGgsIHdpZHRofSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBob3Jpem9udGFsT2Zmc2V0ID0gaXNPcGVuID8gMCA6IG1pbmlmaWVkV2lkdGggLSB3aWR0aDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFNpZGVQYW5lbENvbnRhaW5lclxuICAgICAgICAgIHdpZHRoPXtpc09wZW4gPyB3aWR0aCA6IDB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2lkZS1wYW5lbC0tY29udGFpbmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTaWRlQmFyQ29udGFpbmVyIGNsYXNzTmFtZT1cInNpZGUtYmFyXCIgc3R5bGU9e3t3aWR0aDogYCR7d2lkdGh9cHhgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0PXtob3Jpem9udGFsT2Zmc2V0fT5cbiAgICAgICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgICAgIDxTaWRlQmFySW5uZXIgY2xhc3NOYW1lPVwic2lkZS1iYXJfX2lubmVyXCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvU2lkZUJhcklubmVyPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8Q29sbGFwc2VCdXR0b25cbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uT3Blbk9yQ2xvc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2lkZUJhckNvbnRhaW5lcj5cbiAgICAgICAgPC9TdHlsZWRTaWRlUGFuZWxDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckZhY3Rvcnk7XG4iXX0=