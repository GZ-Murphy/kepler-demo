"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("./base"));

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
var Split =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Split, _Component);

  function Split() {
    (0, _classCallCheck2["default"])(this, Split);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Split).apply(this, arguments));
  }

  (0, _createClass2["default"])(Split, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_base["default"], this.props, _react["default"].createElement("g", {
        transform: "translate(7.500000, 7.500000)"
      }, _react["default"].createElement("path", {
        d: "M19.5,47.4137931 C19.5,48.8421157 20.6192881,50 22,50 C23.3807119,50 24.5,48.8421157 24.5,47.4137931 L24.5,2.5862069 C24.5,1.15788427 23.3807119,0 22,0 C20.6192881,0 19.5,1.15788427 19.5,2.5862069 L19.5,47.4137931 Z"
      }), _react["default"].createElement("rect", {
        x: "0",
        y: "4",
        width: "44",
        height: "5",
        rx: "2.5"
      }), _react["default"].createElement("rect", {
        transform: "translate(2.500000, 24.500000) rotate(90.000000) translate(-2.500000, -24.500000) ",
        x: "-18",
        y: "22",
        width: "41",
        height: "5",
        rx: "2.5"
      }), _react["default"].createElement("rect", {
        transform: "translate(41.500000, 25.000000) rotate(90.000000) translate(-41.500000, -25.000000) ",
        x: "20.5",
        y: "22.5",
        width: "42",
        height: "5",
        rx: "2.5"
      }), _react["default"].createElement("rect", {
        x: "0",
        y: "41",
        width: "44",
        height: "5",
        rx: "2.5"
      })));
    }
  }]);
  return Split;
}(_react.Component);

exports["default"] = Split;
(0, _defineProperty2["default"])(Split, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Split, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-split'
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJTcGxpdCIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTXFCQSxLOzs7Ozs7Ozs7Ozs7NkJBV1Y7QUFDUCxhQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixFQUNFO0FBQUcsUUFBQSxTQUFTLEVBQUM7QUFBYixTQUNFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQURGLEVBRUU7QUFBTSxRQUFBLENBQUMsRUFBQyxHQUFSO0FBQVksUUFBQSxDQUFDLEVBQUMsR0FBZDtBQUFrQixRQUFBLEtBQUssRUFBQyxJQUF4QjtBQUE2QixRQUFBLE1BQU0sRUFBQyxHQUFwQztBQUF3QyxRQUFBLEVBQUUsRUFBQztBQUEzQyxRQUZGLEVBR0U7QUFDRSxRQUFBLFNBQVMsRUFBQyxvRkFEWjtBQUVFLFFBQUEsQ0FBQyxFQUFDLEtBRko7QUFHRSxRQUFBLENBQUMsRUFBQyxJQUhKO0FBSUUsUUFBQSxLQUFLLEVBQUMsSUFKUjtBQUtFLFFBQUEsTUFBTSxFQUFDLEdBTFQ7QUFNRSxRQUFBLEVBQUUsRUFBQztBQU5MLFFBSEYsRUFXRTtBQUNFLFFBQUEsU0FBUyxFQUFDLHNGQURaO0FBRUUsUUFBQSxDQUFDLEVBQUMsTUFGSjtBQUdFLFFBQUEsQ0FBQyxFQUFDLE1BSEo7QUFJRSxRQUFBLEtBQUssRUFBQyxJQUpSO0FBS0UsUUFBQSxNQUFNLEVBQUMsR0FMVDtBQU1FLFFBQUEsRUFBRSxFQUFDO0FBTkwsUUFYRixFQW1CRTtBQUFNLFFBQUEsQ0FBQyxFQUFDLEdBQVI7QUFBWSxRQUFBLENBQUMsRUFBQyxJQUFkO0FBQW1CLFFBQUEsS0FBSyxFQUFDLElBQXpCO0FBQThCLFFBQUEsTUFBTSxFQUFDLEdBQXJDO0FBQXlDLFFBQUEsRUFBRSxFQUFDO0FBQTVDLFFBbkJGLENBREYsQ0FERjtBQXlCRDs7O0VBckNnQ0MsZ0I7OztpQ0FBZEYsSyxlQUNBO0FBQ2pCO0FBQ0FHLEVBQUFBLE1BQU0sRUFBRUMsc0JBQVVDO0FBRkQsQztpQ0FEQUwsSyxrQkFNRztBQUNwQkcsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJHLEVBQUFBLG1CQUFtQixFQUFFO0FBRkQsQztBQWdDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1zcGxpdCdcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcuNTAwMDAwLCA3LjUwMDAwMClcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE5LjUsNDcuNDEzNzkzMSBDMTkuNSw0OC44NDIxMTU3IDIwLjYxOTI4ODEsNTAgMjIsNTAgQzIzLjM4MDcxMTksNTAgMjQuNSw0OC44NDIxMTU3IDI0LjUsNDcuNDEzNzkzMSBMMjQuNSwyLjU4NjIwNjkgQzI0LjUsMS4xNTc4ODQyNyAyMy4zODA3MTE5LDAgMjIsMCBDMjAuNjE5Mjg4MSwwIDE5LjUsMS4xNTc4ODQyNyAxOS41LDIuNTg2MjA2OSBMMTkuNSw0Ny40MTM3OTMxIFpcIiAvPlxuICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjRcIiB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNVwiIHJ4PVwiMi41XCIgLz5cbiAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIuNTAwMDAwLCAyNC41MDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMi41MDAwMDAsIC0yNC41MDAwMDApIFwiXG4gICAgICAgICAgICB4PVwiLTE4XCJcbiAgICAgICAgICAgIHk9XCIyMlwiXG4gICAgICAgICAgICB3aWR0aD1cIjQxXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjVcIlxuICAgICAgICAgICAgcng9XCIyLjVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MS41MDAwMDAsIDI1LjAwMDAwMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC00MS41MDAwMDAsIC0yNS4wMDAwMDApIFwiXG4gICAgICAgICAgICB4PVwiMjAuNVwiXG4gICAgICAgICAgICB5PVwiMjIuNVwiXG4gICAgICAgICAgICB3aWR0aD1cIjQyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjVcIlxuICAgICAgICAgICAgcng9XCIyLjVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNDFcIiB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNVwiIHJ4PVwiMi41XCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn07XG4iXX0=