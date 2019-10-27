"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiStateLens = exports.visStateLens = exports.mapStyleLens = exports.mapStateLens = exports["default"] = exports.coreReducerFactory = void 0;

var _redux = require("redux");

var _visState = require("./vis-state");

var _mapState = require("./map-state");

var _mapStyle = require("./map-style");

var _uiState = require("./ui-state");

var _composers = _interopRequireDefault(require("./composers"));

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
var combined = function combined() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.combineReducers)({
    visState: (0, _visState.visStateReducerFactory)(initialState.visState),
    mapState: (0, _mapState.mapStateReducerFactory)(initialState.mapState),
    mapStyle: (0, _mapStyle.mapStyleReducerFactory)(initialState.mapStyle),
    uiState: (0, _uiState.uiStateReducerFactory)(initialState.uiState)
  });
};

var coreReducerFactory = function coreReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (state, action) {
    if (_composers["default"][action.type]) {
      return _composers["default"][action.type](state, action);
    }

    return combined(initialState)(state, action);
  };
};

exports.coreReducerFactory = coreReducerFactory;

var _default = coreReducerFactory();
/**
 * Connect subreducer `mapState`, used with `injectComponents`. Learn more at
 * [Replace UI Component](../advanced-usages/replace-ui-component.md#pass-custom-component-props)
 *
 * @param {*} reduxState
 * @public
 */


exports["default"] = _default;

var mapStateLens = function mapStateLens(reduxState) {
  return {
    mapState: reduxState.mapState
  };
};
/**
 * Connect subreducer `mapStyle`, used with `injectComponents`. Learn more at
 * [Replace UI Component](../advanced-usages/replace-ui-component.md#pass-custom-component-props)
 *
 * @param {*} reduxState
 * @public
 */


exports.mapStateLens = mapStateLens;

var mapStyleLens = function mapStyleLens(reduxState) {
  return {
    mapStyle: reduxState.mapStyle
  };
};
/**
 * Connect subreducer `visState`, used with `injectComponents`. Learn more at
 * [Replace UI Component](../advanced-usages/replace-ui-component.md#pass-custom-component-props)
 *
 * @param {*} reduxState
 * @public
 */


exports.mapStyleLens = mapStyleLens;

var visStateLens = function visStateLens(reduxState) {
  return {
    visState: reduxState.visState
  };
};
/**
 * Connect subreducer `uiState`, used with `injectComponents`. Learn more at
 * [Replace UI Component](../advanced-usages/replace-ui-component.md#pass-custom-component-props)
 *
 * @param {*} reduxState
 * @public
 */


exports.visStateLens = visStateLens;

var uiStateLens = function uiStateLens(reduxState) {
  return {
    uiState: reduxState.uiState
  };
};

exports.uiStateLens = uiStateLens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb3JlLmpzIl0sIm5hbWVzIjpbImNvbWJpbmVkIiwiaW5pdGlhbFN0YXRlIiwidmlzU3RhdGUiLCJtYXBTdGF0ZSIsIm1hcFN0eWxlIiwidWlTdGF0ZSIsImNvcmVSZWR1Y2VyRmFjdG9yeSIsInN0YXRlIiwiYWN0aW9uIiwiY29tcG9zZXJzIiwidHlwZSIsIm1hcFN0YXRlTGVucyIsInJlZHV4U3RhdGUiLCJtYXBTdHlsZUxlbnMiLCJ2aXNTdGF0ZUxlbnMiLCJ1aVN0YXRlTGVucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQTNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBQ0MsWUFBRCx1RUFBZ0IsRUFBaEI7QUFBQSxTQUNmLDRCQUFnQjtBQUNkQyxJQUFBQSxRQUFRLEVBQUUsc0NBQXVCRCxZQUFZLENBQUNDLFFBQXBDLENBREk7QUFFZEMsSUFBQUEsUUFBUSxFQUFFLHNDQUF1QkYsWUFBWSxDQUFDRSxRQUFwQyxDQUZJO0FBR2RDLElBQUFBLFFBQVEsRUFBRSxzQ0FBdUJILFlBQVksQ0FBQ0csUUFBcEMsQ0FISTtBQUlkQyxJQUFBQSxPQUFPLEVBQUUsb0NBQXNCSixZQUFZLENBQUNJLE9BQW5DO0FBSkssR0FBaEIsQ0FEZTtBQUFBLENBQWpCOztBQVFPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFDTCxZQUFELHVFQUFnQixFQUFoQjtBQUFBLFNBQXVCLFVBQUNNLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMxRSxRQUFJQyxzQkFBVUQsTUFBTSxDQUFDRSxJQUFqQixDQUFKLEVBQTRCO0FBQzFCLGFBQU9ELHNCQUFVRCxNQUFNLENBQUNFLElBQWpCLEVBQXVCSCxLQUF2QixFQUE4QkMsTUFBOUIsQ0FBUDtBQUNEOztBQUNELFdBQU9SLFFBQVEsQ0FBQ0MsWUFBRCxDQUFSLENBQXVCTSxLQUF2QixFQUE4QkMsTUFBOUIsQ0FBUDtBQUNELEdBTGlDO0FBQUEsQ0FBM0I7Ozs7ZUFPUUYsa0JBQWtCLEU7QUFFakM7Ozs7Ozs7Ozs7O0FBT08sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsVUFBVTtBQUFBLFNBQUs7QUFBQ1QsSUFBQUEsUUFBUSxFQUFFUyxVQUFVLENBQUNUO0FBQXRCLEdBQUw7QUFBQSxDQUEvQjtBQUVQOzs7Ozs7Ozs7OztBQU9PLElBQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFELFVBQVU7QUFBQSxTQUFLO0FBQUNSLElBQUFBLFFBQVEsRUFBRVEsVUFBVSxDQUFDUjtBQUF0QixHQUFMO0FBQUEsQ0FBL0I7QUFFUDs7Ozs7Ozs7Ozs7QUFPTyxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBRixVQUFVO0FBQUEsU0FBSztBQUFDVixJQUFBQSxRQUFRLEVBQUVVLFVBQVUsQ0FBQ1Y7QUFBdEIsR0FBTDtBQUFBLENBQS9CO0FBRVA7Ozs7Ozs7Ozs7O0FBT08sSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUgsVUFBVTtBQUFBLFNBQUs7QUFBQ1AsSUFBQUEsT0FBTyxFQUFFTyxVQUFVLENBQUNQO0FBQXJCLEdBQUw7QUFBQSxDQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7dmlzU3RhdGVSZWR1Y2VyRmFjdG9yeX0gZnJvbSAnLi92aXMtc3RhdGUnO1xuaW1wb3J0IHttYXBTdGF0ZVJlZHVjZXJGYWN0b3J5fSBmcm9tICcuL21hcC1zdGF0ZSc7XG5pbXBvcnQge21hcFN0eWxlUmVkdWNlckZhY3Rvcnl9IGZyb20gJy4vbWFwLXN0eWxlJztcbmltcG9ydCB7dWlTdGF0ZVJlZHVjZXJGYWN0b3J5fSBmcm9tICcuL3VpLXN0YXRlJztcblxuaW1wb3J0IGNvbXBvc2VycyBmcm9tICcuL2NvbXBvc2Vycyc7XG5cbmNvbnN0IGNvbWJpbmVkID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PlxuICBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHZpc1N0YXRlOiB2aXNTdGF0ZVJlZHVjZXJGYWN0b3J5KGluaXRpYWxTdGF0ZS52aXNTdGF0ZSksXG4gICAgbWFwU3RhdGU6IG1hcFN0YXRlUmVkdWNlckZhY3RvcnkoaW5pdGlhbFN0YXRlLm1hcFN0YXRlKSxcbiAgICBtYXBTdHlsZTogbWFwU3R5bGVSZWR1Y2VyRmFjdG9yeShpbml0aWFsU3RhdGUubWFwU3R5bGUpLFxuICAgIHVpU3RhdGU6IHVpU3RhdGVSZWR1Y2VyRmFjdG9yeShpbml0aWFsU3RhdGUudWlTdGF0ZSlcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjb3JlUmVkdWNlckZhY3RvcnkgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChjb21wb3NlcnNbYWN0aW9uLnR5cGVdKSB7XG4gICAgcmV0dXJuIGNvbXBvc2Vyc1thY3Rpb24udHlwZV0oc3RhdGUsIGFjdGlvbik7XG4gIH1cbiAgcmV0dXJuIGNvbWJpbmVkKGluaXRpYWxTdGF0ZSkoc3RhdGUsIGFjdGlvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlUmVkdWNlckZhY3RvcnkoKTtcblxuLyoqXG4gKiBDb25uZWN0IHN1YnJlZHVjZXIgYG1hcFN0YXRlYCwgdXNlZCB3aXRoIGBpbmplY3RDb21wb25lbnRzYC4gTGVhcm4gbW9yZSBhdFxuICogW1JlcGxhY2UgVUkgQ29tcG9uZW50XSguLi9hZHZhbmNlZC11c2FnZXMvcmVwbGFjZS11aS1jb21wb25lbnQubWQjcGFzcy1jdXN0b20tY29tcG9uZW50LXByb3BzKVxuICpcbiAqIEBwYXJhbSB7Kn0gcmVkdXhTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbWFwU3RhdGVMZW5zID0gcmVkdXhTdGF0ZSA9PiAoe21hcFN0YXRlOiByZWR1eFN0YXRlLm1hcFN0YXRlfSk7XG5cbi8qKlxuICogQ29ubmVjdCBzdWJyZWR1Y2VyIGBtYXBTdHlsZWAsIHVzZWQgd2l0aCBgaW5qZWN0Q29tcG9uZW50c2AuIExlYXJuIG1vcmUgYXRcbiAqIFtSZXBsYWNlIFVJIENvbXBvbmVudF0oLi4vYWR2YW5jZWQtdXNhZ2VzL3JlcGxhY2UtdWktY29tcG9uZW50Lm1kI3Bhc3MtY3VzdG9tLWNvbXBvbmVudC1wcm9wcylcbiAqXG4gKiBAcGFyYW0geyp9IHJlZHV4U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcFN0eWxlTGVucyA9IHJlZHV4U3RhdGUgPT4gKHttYXBTdHlsZTogcmVkdXhTdGF0ZS5tYXBTdHlsZX0pO1xuXG4vKipcbiAqIENvbm5lY3Qgc3VicmVkdWNlciBgdmlzU3RhdGVgLCB1c2VkIHdpdGggYGluamVjdENvbXBvbmVudHNgLiBMZWFybiBtb3JlIGF0XG4gKiBbUmVwbGFjZSBVSSBDb21wb25lbnRdKC4uL2FkdmFuY2VkLXVzYWdlcy9yZXBsYWNlLXVpLWNvbXBvbmVudC5tZCNwYXNzLWN1c3RvbS1jb21wb25lbnQtcHJvcHMpXG4gKlxuICogQHBhcmFtIHsqfSByZWR1eFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZUxlbnMgPSByZWR1eFN0YXRlID0+ICh7dmlzU3RhdGU6IHJlZHV4U3RhdGUudmlzU3RhdGV9KTtcblxuLyoqXG4gKiBDb25uZWN0IHN1YnJlZHVjZXIgYHVpU3RhdGVgLCB1c2VkIHdpdGggYGluamVjdENvbXBvbmVudHNgLiBMZWFybiBtb3JlIGF0XG4gKiBbUmVwbGFjZSBVSSBDb21wb25lbnRdKC4uL2FkdmFuY2VkLXVzYWdlcy9yZXBsYWNlLXVpLWNvbXBvbmVudC5tZCNwYXNzLWN1c3RvbS1jb21wb25lbnQtcHJvcHMpXG4gKlxuICogQHBhcmFtIHsqfSByZWR1eFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1aVN0YXRlTGVucyA9IHJlZHV4U3RhdGUgPT4gKHt1aVN0YXRlOiByZWR1eFN0YXRlLnVpU3RhdGV9KTtcbiJdfQ==