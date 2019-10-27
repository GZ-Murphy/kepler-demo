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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
var identity = function identity(state) {
  return state;
};

var mergeSelectors = function mergeSelectors(parentSelector, childSelector) {
  return function (state) {
    return childSelector(parentSelector(state));
  };
};

var computeSelector = function computeSelector(props, ctx) {
  return mergeSelectors(ctx.selector ? ctx.selector : identity, props.selector ? props.selector : identity);
}; // store the parent selector in the parent context
// and return the parent component
// when a selector is passed to a container component,
// it will be stored in the context and passed down to child components,
// as well as prop to the given component


var withLocalSelector = function withLocalSelector(ParentComponent) {
  var WithConnectSelector =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(WithConnectSelector, _Component);

    function WithConnectSelector(props, ctx) {
      var _this;

      (0, _classCallCheck2["default"])(this, WithConnectSelector);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithConnectSelector).call(this, props, ctx));
      _this.selector = computeSelector(props, ctx);
      _this.id = props.id;
      return _this;
    }

    (0, _createClass2["default"])(WithConnectSelector, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          selector: this.selector,
          id: this.id
        };
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps, nextContext) {
        this.selector = computeSelector(nextProps, nextContext);
        this.id = nextProps.id;
      }
    }, {
      key: "render",
      value: function render() {
        return _react["default"].createElement(ParentComponent, (0, _extends2["default"])({}, this.props, {
          selector: this.selector
        }));
      }
    }]);
    return WithConnectSelector;
  }(_react.Component);

  WithConnectSelector.contextTypes = {
    selector: _propTypes["default"].func,
    id: _propTypes["default"].string
  };
  WithConnectSelector.childContextTypes = {
    selector: _propTypes["default"].func,
    id: _propTypes["default"].string
  };
  return WithConnectSelector;
};

var _default = withLocalSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25uZWN0L3dpdGgtbG9jYWwtc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiaWRlbnRpdHkiLCJzdGF0ZSIsIm1lcmdlU2VsZWN0b3JzIiwicGFyZW50U2VsZWN0b3IiLCJjaGlsZFNlbGVjdG9yIiwiY29tcHV0ZVNlbGVjdG9yIiwicHJvcHMiLCJjdHgiLCJzZWxlY3RvciIsIndpdGhMb2NhbFNlbGVjdG9yIiwiUGFyZW50Q29tcG9uZW50IiwiV2l0aENvbm5lY3RTZWxlY3RvciIsImlkIiwibmV4dFByb3BzIiwibmV4dENvbnRleHQiLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwiY2hpbGRDb250ZXh0VHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFKO0FBQUEsQ0FBdEI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxjQUFELEVBQWlCQyxhQUFqQjtBQUFBLFNBQW1DLFVBQUFILEtBQUs7QUFBQSxXQUM3REcsYUFBYSxDQUFDRCxjQUFjLENBQUNGLEtBQUQsQ0FBZixDQURnRDtBQUFBLEdBQXhDO0FBQUEsQ0FBdkI7O0FBR0EsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFDLEdBQVI7QUFBQSxTQUN0QkwsY0FBYyxDQUNaSyxHQUFHLENBQUNDLFFBQUosR0FBZUQsR0FBRyxDQUFDQyxRQUFuQixHQUE4QlIsUUFEbEIsRUFFWk0sS0FBSyxDQUFDRSxRQUFOLEdBQWlCRixLQUFLLENBQUNFLFFBQXZCLEdBQWtDUixRQUZ0QixDQURRO0FBQUEsQ0FBeEIsQyxDQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1TLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsZUFBZSxFQUFJO0FBQUEsTUFDckNDLG1CQURxQztBQUFBO0FBQUE7QUFBQTs7QUFFekMsaUNBQVlMLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCO0FBQUE7O0FBQUE7QUFDdEIsaUlBQU1ELEtBQU4sRUFBYUMsR0FBYjtBQUVBLFlBQUtDLFFBQUwsR0FBZ0JILGVBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLENBQS9CO0FBQ0EsWUFBS0ssRUFBTCxHQUFVTixLQUFLLENBQUNNLEVBQWhCO0FBSnNCO0FBS3ZCOztBQVB3QztBQUFBO0FBQUEsd0NBU3ZCO0FBQ2hCLGVBQU87QUFDTEosVUFBQUEsUUFBUSxFQUFFLEtBQUtBLFFBRFY7QUFFTEksVUFBQUEsRUFBRSxFQUFFLEtBQUtBO0FBRkosU0FBUDtBQUlEO0FBZHdDO0FBQUE7QUFBQSxnREFnQmZDLFNBaEJlLEVBZ0JKQyxXQWhCSSxFQWdCUztBQUNoRCxhQUFLTixRQUFMLEdBQWdCSCxlQUFlLENBQUNRLFNBQUQsRUFBWUMsV0FBWixDQUEvQjtBQUNBLGFBQUtGLEVBQUwsR0FBVUMsU0FBUyxDQUFDRCxFQUFwQjtBQUNEO0FBbkJ3QztBQUFBO0FBQUEsK0JBcUJoQztBQUNQLGVBQU8sZ0NBQUMsZUFBRCxnQ0FBcUIsS0FBS04sS0FBMUI7QUFBaUMsVUFBQSxRQUFRLEVBQUUsS0FBS0U7QUFBaEQsV0FBUDtBQUNEO0FBdkJ3QztBQUFBO0FBQUEsSUFDVE8sZ0JBRFM7O0FBMEIzQ0osRUFBQUEsbUJBQW1CLENBQUNLLFlBQXBCLEdBQW1DO0FBQ2pDUixJQUFBQSxRQUFRLEVBQUVTLHNCQUFVQyxJQURhO0FBRWpDTixJQUFBQSxFQUFFLEVBQUVLLHNCQUFVRTtBQUZtQixHQUFuQztBQUtBUixFQUFBQSxtQkFBbUIsQ0FBQ1MsaUJBQXBCLEdBQXdDO0FBQ3RDWixJQUFBQSxRQUFRLEVBQUVTLHNCQUFVQyxJQURrQjtBQUV0Q04sSUFBQUEsRUFBRSxFQUFFSyxzQkFBVUU7QUFGd0IsR0FBeEM7QUFLQSxTQUFPUixtQkFBUDtBQUNELENBckNEOztlQXVDZUYsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IGlkZW50aXR5ID0gc3RhdGUgPT4gc3RhdGU7XG5cbmNvbnN0IG1lcmdlU2VsZWN0b3JzID0gKHBhcmVudFNlbGVjdG9yLCBjaGlsZFNlbGVjdG9yKSA9PiBzdGF0ZSA9PlxuICBjaGlsZFNlbGVjdG9yKHBhcmVudFNlbGVjdG9yKHN0YXRlKSk7XG5cbmNvbnN0IGNvbXB1dGVTZWxlY3RvciA9IChwcm9wcywgY3R4KSA9PlxuICBtZXJnZVNlbGVjdG9ycyhcbiAgICBjdHguc2VsZWN0b3IgPyBjdHguc2VsZWN0b3IgOiBpZGVudGl0eSxcbiAgICBwcm9wcy5zZWxlY3RvciA/IHByb3BzLnNlbGVjdG9yIDogaWRlbnRpdHlcbiAgKTtcblxuLy8gc3RvcmUgdGhlIHBhcmVudCBzZWxlY3RvciBpbiB0aGUgcGFyZW50IGNvbnRleHRcbi8vIGFuZCByZXR1cm4gdGhlIHBhcmVudCBjb21wb25lbnRcbi8vIHdoZW4gYSBzZWxlY3RvciBpcyBwYXNzZWQgdG8gYSBjb250YWluZXIgY29tcG9uZW50LFxuLy8gaXQgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIGNvbnRleHQgYW5kIHBhc3NlZCBkb3duIHRvIGNoaWxkIGNvbXBvbmVudHMsXG4vLyBhcyB3ZWxsIGFzIHByb3AgdG8gdGhlIGdpdmVuIGNvbXBvbmVudFxuY29uc3Qgd2l0aExvY2FsU2VsZWN0b3IgPSBQYXJlbnRDb21wb25lbnQgPT4ge1xuICBjbGFzcyBXaXRoQ29ubmVjdFNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY3R4KSB7XG4gICAgICBzdXBlcihwcm9wcywgY3R4KTtcblxuICAgICAgdGhpcy5zZWxlY3RvciA9IGNvbXB1dGVTZWxlY3Rvcihwcm9wcywgY3R4KTtcbiAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcbiAgICB9XG5cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogdGhpcy5zZWxlY3RvcixcbiAgICAgICAgaWQ6IHRoaXMuaWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XG4gICAgICB0aGlzLnNlbGVjdG9yID0gY29tcHV0ZVNlbGVjdG9yKG5leHRQcm9wcywgbmV4dENvbnRleHQpO1xuICAgICAgdGhpcy5pZCA9IG5leHRQcm9wcy5pZDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFBhcmVudENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gc2VsZWN0b3I9e3RoaXMuc2VsZWN0b3J9IC8+O1xuICAgIH1cbiAgfVxuXG4gIFdpdGhDb25uZWN0U2VsZWN0b3IuY29udGV4dFR5cGVzID0ge1xuICAgIHNlbGVjdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIFdpdGhDb25uZWN0U2VsZWN0b3IuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgc2VsZWN0b3I6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgcmV0dXJuIFdpdGhDb25uZWN0U2VsZWN0b3I7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTG9jYWxTZWxlY3RvcjtcbiJdfQ==