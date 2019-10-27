"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Shape = require("d3-shape");

var _styledComponents2 = require("../../components/common/styled-components");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 20px;\n  letter-spacing: 1.25px;\n  margin: 18px 0 14px 0;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 6px;\n  width: 180px;\n  height: 48px;\n  margin-right: 12px;\n\n  .icon-table_item__name {\n    margin-left: 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var lineFunction = (0, _d3Shape.line)().x(function (d) {
  return d[0] * 10;
}).y(function (d) {
  return d[1] * 10;
});

var IconShape = function IconShape(_ref) {
  var mesh = _ref.mesh;
  return _react["default"].createElement("svg", {
    width: "20px",
    height: "20px"
  }, _react["default"].createElement("g", {
    transform: "translate(10, 10)"
  }, mesh.cells.map(function (cell, i) {
    return _react["default"].createElement("path", {
      key: i,
      fill: "#000000",
      d: lineFunction(cell.map(function (idx) {
        return mesh.positions[idx];
      }))
    });
  })));
};

var StyledIconItem = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject());

var StyledCode = _styledComponents["default"].code(_templateObject2(), function (props) {
  return props.theme.titleColorLT;
});

var StyledTitle = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.titleColorLT;
});

var IconItem = function IconItem(_ref2) {
  var _ref2$icon = _ref2.icon,
      id = _ref2$icon.id,
      mesh = _ref2$icon.mesh;
  return _react["default"].createElement(StyledIconItem, {
    className: "icon-table__item"
  }, _react["default"].createElement(IconShape, {
    className: "icon-table__item__shape",
    mesh: mesh
  }), _react["default"].createElement("div", {
    className: "icon-table_item__name"
  }, _react["default"].createElement(StyledCode, null, id)));
};

var ExampleTable = function ExampleTable() {
  return _react["default"].createElement(_styledComponents2.Table, {
    className: "icon-example-table"
  }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", null, "point_lat"), _react["default"].createElement("th", null, "point_lng"), _react["default"].createElement("th", null, "icon"))), _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.769897"), _react["default"].createElement("td", null, "-122.41168"), _react["default"].createElement("td", null, _react["default"].createElement(StyledCode, null, "android"))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.806928"), _react["default"].createElement("td", null, "-122.40218"), _react["default"].createElement("td", null)), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.778564"), _react["default"].createElement("td", null, "-122.39096"), _react["default"].createElement("td", null, _react["default"].createElement(StyledCode, null, "calendar"))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.745995"), _react["default"].createElement("td", null, "-122.30220"), _react["default"].createElement("td", null)), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.329841"), _react["default"].createElement("td", null, "-122.103847"), _react["default"].createElement("td", null, _react["default"].createElement(StyledCode, null, "control-off")))));
};

var IconTable = _styledComponents["default"].div(_templateObject4());

var IconInfoModalFactory = function IconInfoModalFactory() {
  var svgIcons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var IconInfoModal = function IconInfoModal() {
    return _react["default"].createElement("div", {
      className: "icon-info-modal"
    }, _react["default"].createElement("div", {
      className: "icon-info-modal__description"
    }, _react["default"].createElement("span", null, "In your csv, create a column, put the name of the icon you want to draw in it. You can leave the cell empty if you do not want the icon to show for some points. When the column is named", ' '), _react["default"].createElement("code", null, "icon"), _react["default"].createElement("span", null, " kepler.gl will automatically create a icon layer for you.")), _react["default"].createElement("div", {
      className: "icon-info-modal__example"
    }, _react["default"].createElement(StyledTitle, null, "Example:"), _react["default"].createElement(ExampleTable, null)), _react["default"].createElement("div", {
      className: "icon-info-modal__icons"
    }, _react["default"].createElement(StyledTitle, null, "Icons"), _react["default"].createElement(IconTable, {
      className: "icon-info-modal__icons__table"
    }, svgIcons.map(function (icon) {
      return _react["default"].createElement(IconItem, {
        key: icon.id,
        icon: icon
      });
    }))));
  };

  return IconInfoModal;
};

var _default = IconInfoModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaWNvbi1sYXllci9pY29uLWluZm8tbW9kYWwuanMiXSwibmFtZXMiOlsibGluZUZ1bmN0aW9uIiwieCIsImQiLCJ5IiwiSWNvblNoYXBlIiwibWVzaCIsImNlbGxzIiwibWFwIiwiY2VsbCIsImkiLCJpZHgiLCJwb3NpdGlvbnMiLCJTdHlsZWRJY29uSXRlbSIsIkNlbnRlckZsZXhib3giLCJTdHlsZWRDb2RlIiwic3R5bGVkIiwiY29kZSIsInByb3BzIiwidGhlbWUiLCJ0aXRsZUNvbG9yTFQiLCJTdHlsZWRUaXRsZSIsImRpdiIsIkljb25JdGVtIiwiaWNvbiIsImlkIiwiRXhhbXBsZVRhYmxlIiwiSWNvblRhYmxlIiwiSWNvbkluZm9Nb2RhbEZhY3RvcnkiLCJzdmdJY29ucyIsIkljb25JbmZvTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcscUJBQ2xCQyxDQURrQixDQUNoQixVQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQVg7QUFBQSxDQURlLEVBRWxCQyxDQUZrQixDQUVoQixVQUFBRCxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQVg7QUFBQSxDQUZlLENBQXJCOztBQUlBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsU0FDaEI7QUFBSyxJQUFBLEtBQUssRUFBQyxNQUFYO0FBQWtCLElBQUEsTUFBTSxFQUFDO0FBQXpCLEtBQ0U7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLEtBQ0NBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsV0FDZDtBQUFNLE1BQUEs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QUE5QixRQURnQjtBQUFBLEtBQWpCLENBREgsQ0FGRixDQWRGLENBRG9CO0FBQUEsR0FBdEI7O0FBMEJBLFNBQU9NLGFBQVA7QUFDRCxDQTVCRDs7ZUE4QmVGLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtsaW5lfSBmcm9tICdkMy1zaGFwZSdcbmltcG9ydCB7VGFibGUsIENlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbGluZUZ1bmN0aW9uID0gbGluZSgpXG4gIC54KGQgPT4gZFswXSAqIDEwKVxuICAueShkID0+IGRbMV0gKiAxMCk7XG5cbmNvbnN0IEljb25TaGFwZSA9ICh7bWVzaH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCI+XG4gICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwLCAxMClcIj5cbiAgICB7bWVzaC5jZWxscy5tYXAoKGNlbGwsIGkpID0+XG4gICAgICA8cGF0aCBrZXk9e2l9XG4gICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgIGQ9e2xpbmVGdW5jdGlvbihjZWxsLm1hcChpZHggPT4gbWVzaC5wb3NpdGlvbnNbaWR4XSkpfS8+XG4gICAgKX1cbiAgICA8L2c+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgU3R5bGVkSWNvbkl0ZW0gPSBzdHlsZWQoQ2VudGVyRmxleGJveClgXG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuXG4gIC5pY29uLXRhYmxlX2l0ZW1fX25hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRDb2RlID0gc3R5bGVkLmNvZGVgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XG5gO1xuXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgbWFyZ2luOiAxOHB4IDAgMTRweCAwO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xuYDtcblxuY29uc3QgSWNvbkl0ZW0gPSAoe2ljb246IHtpZCwgbWVzaH19KSA9PiAoXG4gIDxTdHlsZWRJY29uSXRlbVxuICAgIGNsYXNzTmFtZT1cImljb24tdGFibGVfX2l0ZW1cIj5cbiAgICA8SWNvblNoYXBlIGNsYXNzTmFtZT1cImljb24tdGFibGVfX2l0ZW1fX3NoYXBlXCIgbWVzaD17bWVzaH0vPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10YWJsZV9pdGVtX19uYW1lXCI+XG4gICAgICA8U3R5bGVkQ29kZT57aWR9PC9TdHlsZWRDb2RlPlxuICAgIDwvZGl2PlxuICA8L1N0eWxlZEljb25JdGVtPlxuKTtcblxuY29uc3QgRXhhbXBsZVRhYmxlID0gKCkgPT4gKFxuICA8VGFibGUgY2xhc3NOYW1lPVwiaWNvbi1leGFtcGxlLXRhYmxlXCI+XG4gICAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD5wb2ludF9sYXQ8L3RoPlxuICAgICAgPHRoPnBvaW50X2xuZzwvdGg+XG4gICAgICA8dGg+aWNvbjwvdGg+XG4gICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICA8dHI+XG4gICAgICA8dGQ+MzcuNzY5ODk3PC90ZD5cbiAgICAgIDx0ZD4tMTIyLjQxMTY4PC90ZD5cbiAgICAgIDx0ZD48U3R5bGVkQ29kZT5hbmRyb2lkPC9TdHlsZWRDb2RlPjwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+MzcuODA2OTI4PC90ZD5cbiAgICAgIDx0ZD4tMTIyLjQwMjE4PC90ZD5cbiAgICAgIDx0ZCAvPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkPjM3Ljc3ODU2NDwvdGQ+XG4gICAgICA8dGQ+LTEyMi4zOTA5NjwvdGQ+XG4gICAgICA8dGQ+PFN0eWxlZENvZGU+Y2FsZW5kYXI8L1N0eWxlZENvZGU+PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD4zNy43NDU5OTU8L3RkPlxuICAgICAgPHRkPi0xMjIuMzAyMjA8L3RkPlxuICAgICAgPHRkIC8+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+MzcuMzI5ODQxPC90ZD5cbiAgICAgIDx0ZD4tMTIyLjEwMzg0NzwvdGQ+XG4gICAgICA8dGQ+PFN0eWxlZENvZGU+Y29udHJvbC1vZmY8L1N0eWxlZENvZGU+PC90ZD5cbiAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvVGFibGU+XG4pO1xuXG5jb25zdCBJY29uVGFibGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuYDtcblxuY29uc3QgSWNvbkluZm9Nb2RhbEZhY3RvcnkgPSAoc3ZnSWNvbnMgPSBbXSkgPT4ge1xuICBjb25zdCBJY29uSW5mb01vZGFsID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1pbmZvLW1vZGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24taW5mby1tb2RhbF9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgSW4geW91ciBjc3YsIGNyZWF0ZSBhIGNvbHVtbiwgcHV0IHRoZSBuYW1lIG9mIHRoZSBpY29uIHlvdSB3YW50IHRvXG4gICAgICAgICAgZHJhdyBpbiBpdC4gWW91IGNhbiBsZWF2ZSB0aGUgY2VsbCBlbXB0eSBpZiB5b3UgZG8gbm90IHdhbnQgdGhlIGljb25cbiAgICAgICAgICB0byBzaG93IGZvciBzb21lIHBvaW50cy4gV2hlbiB0aGUgY29sdW1uIGlzIG5hbWVkeycgJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8Y29kZT5pY29uPC9jb2RlPlxuICAgICAgICA8c3Bhbj4ga2VwbGVyLmdsIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgYSBpY29uIGxheWVyIGZvciB5b3UuPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24taW5mby1tb2RhbF9fZXhhbXBsZVwiPlxuICAgICAgICA8U3R5bGVkVGl0bGU+RXhhbXBsZTo8L1N0eWxlZFRpdGxlPlxuICAgICAgICA8RXhhbXBsZVRhYmxlLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWluZm8tbW9kYWxfX2ljb25zXCI+XG4gICAgICAgIDxTdHlsZWRUaXRsZT5JY29uczwvU3R5bGVkVGl0bGU+XG4gICAgICAgIDxJY29uVGFibGUgY2xhc3NOYW1lPVwiaWNvbi1pbmZvLW1vZGFsX19pY29uc19fdGFibGVcIj5cbiAgICAgICAgICB7c3ZnSWNvbnMubWFwKGljb24gPT4gKFxuICAgICAgICAgICAgPEljb25JdGVtIGtleT17aWNvbi5pZH0gaWNvbj17aWNvbn0vPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0ljb25UYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiBJY29uSW5mb01vZGFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uSW5mb01vZGFsRmFjdG9yeTtcbiJdfQ==