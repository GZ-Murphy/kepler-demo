"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _document = _interopRequireDefault(require("global/document"));

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
function nope() {}

var MouseEventHandler =
/*#__PURE__*/
function () {
  function MouseEventHandler(_ref) {
    var _this = this;

    var _ref$vertical = _ref.vertical,
        vertical = _ref$vertical === void 0 ? false : _ref$vertical,
        _ref$valueListener = _ref.valueListener,
        valueListener = _ref$valueListener === void 0 ? nope : _ref$valueListener,
        _ref$toggleMouseOver = _ref.toggleMouseOver,
        toggleMouseOver = _ref$toggleMouseOver === void 0 ? nope : _ref$toggleMouseOver;
    (0, _classCallCheck2["default"])(this, MouseEventHandler);
    (0, _defineProperty2["default"])(this, "handleMouseDown", function (e) {
      _document["default"].addEventListener('mouseup', _this._mouseup);

      _document["default"].addEventListener('mousemove', _this._mousemove);

      _this._prev = _this._getMousePos(e);

      _this._toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "_mouseup", function () {
      _document["default"].removeEventListener('mouseup', _this._mouseup);

      _document["default"].removeEventListener('mousemove', _this._mousemove);

      _this._toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "_mousemove", function (e) {
      e.preventDefault();

      var delta = _this._getMouseDelta(e);

      _this._prev = _this._getMousePos(e);

      _this._valueListener(delta);
    });
    (0, _defineProperty2["default"])(this, "handleTouchStart", function (e) {
      _document["default"].addEventListener('touchend', _this._touchend);

      _document["default"].addEventListener('touchmove', _this._touchmove);

      _this._prev = _this._getTouchPosition(e);

      _this._toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "_touchmove", function (e) {
      var delta = _this._getTouchPosition(e) - _this._prev;

      _this._prev = _this._getTouchPosition(e);

      _this.props._valueListener(delta);
    });
    (0, _defineProperty2["default"])(this, "_touchend", function () {
      _document["default"].removeEventListener('touchend', _this._touchend);

      _document["default"].removeEventListener('touchmove', _this._touchmove);

      _this._toggleMouseOver();
    });
    this._vertical = vertical;
    this._valueListener = valueListener;
    this._toggleMouseOver = toggleMouseOver;
    this._prev = 0;
  }

  (0, _createClass2["default"])(MouseEventHandler, [{
    key: "_getMousePos",
    value: function _getMousePos(e) {
      return this._vertical ? e.clientY : e.pageX;
    }
  }, {
    key: "_getTouchPosition",
    value: function _getTouchPosition(e) {
      return this._vertical ? e.touches[0].clientY : e.touches[0].pageX;
    }
  }, {
    key: "_getMouseDelta",
    value: function _getMouseDelta(e) {
      // movementX might not be supported in some browser
      // https://stackoverflow.com/questions/41774726/mouseevent-movementx-property-apparently-not-supported-in-internet-explorer
      var mouseCoord = this._vertical ? e.movementY : e.movementX;

      var clientCoord = this._getMousePos(e);

      var delta = mouseCoord === 0 ? clientCoord - this._prev : mouseCoord;
      return delta;
    }
  }]);
  return MouseEventHandler;
}();

exports["default"] = MouseEventHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvbW91c2UtZXZlbnQuanMiXSwibmFtZXMiOlsibm9wZSIsIk1vdXNlRXZlbnRIYW5kbGVyIiwidmVydGljYWwiLCJ2YWx1ZUxpc3RlbmVyIiwidG9nZ2xlTW91c2VPdmVyIiwiZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9tb3VzZXVwIiwiX21vdXNlbW92ZSIsIl9wcmV2IiwiX2dldE1vdXNlUG9zIiwiX3RvZ2dsZU1vdXNlT3ZlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRlbHRhIiwiX2dldE1vdXNlRGVsdGEiLCJfdmFsdWVMaXN0ZW5lciIsIl90b3VjaGVuZCIsIl90b3VjaG1vdmUiLCJfZ2V0VG91Y2hQb3NpdGlvbiIsInByb3BzIiwiX3ZlcnRpY2FsIiwiY2xpZW50WSIsInBhZ2VYIiwidG91Y2hlcyIsIm1vdXNlQ29vcmQiLCJtb3ZlbWVudFkiLCJtb3ZlbWVudFgiLCJjbGllbnRDb29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTs7SUFFR0MsaUI7OztBQUNuQixtQ0FJRztBQUFBOztBQUFBLDZCQUhEQyxRQUdDO0FBQUEsUUFIREEsUUFHQyw4QkFIVSxLQUdWO0FBQUEsa0NBRkRDLGFBRUM7QUFBQSxRQUZEQSxhQUVDLG1DQUZlSCxJQUVmO0FBQUEsb0NBRERJLGVBQ0M7QUFBQSxRQUREQSxlQUNDLHFDQURpQkosSUFDakI7QUFBQTtBQUFBLDhEQVFlLFVBQUNLLENBQUQsRUFBTztBQUN2QkMsMkJBQVNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUksQ0FBQ0MsUUFBMUM7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RDtBQUVBLGFBQU9YLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG5mdW5jdGlvbiBub3BlKCkge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgdmVydGljYWwgPSBmYWxzZSxcbiAgICB2YWx1ZUxpc3RlbmVyID0gbm9wZSxcbiAgICB0b2dnbGVNb3VzZU92ZXIgPSBub3BlXG4gIH0pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHZlcnRpY2FsO1xuICAgIHRoaXMuX3ZhbHVlTGlzdGVuZXIgPSB2YWx1ZUxpc3RlbmVyO1xuICAgIHRoaXMuX3RvZ2dsZU1vdXNlT3ZlciA9IHRvZ2dsZU1vdXNlT3ZlcjtcblxuICAgIHRoaXMuX3ByZXYgPSAwO1xuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fbW91c2V1cCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW91c2Vtb3ZlKTtcbiAgICB0aGlzLl9wcmV2ID0gdGhpcy5fZ2V0TW91c2VQb3MoZSk7XG4gICAgdGhpcy5fdG9nZ2xlTW91c2VPdmVyKCk7XG4gIH07XG5cbiAgX2dldE1vdXNlUG9zKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWwgPyBlLmNsaWVudFkgOiBlLnBhZ2VYO1xuICB9XG4gIF9nZXRUb3VjaFBvc2l0aW9uKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWwgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgfVxuXG4gIF9nZXRNb3VzZURlbHRhKGUpIHtcblxuICAgIC8vIG1vdmVtZW50WCBtaWdodCBub3QgYmUgc3VwcG9ydGVkIGluIHNvbWUgYnJvd3NlclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxNzc0NzI2L21vdXNlZXZlbnQtbW92ZW1lbnR4LXByb3BlcnR5LWFwcGFyZW50bHktbm90LXN1cHBvcnRlZC1pbi1pbnRlcm5ldC1leHBsb3JlclxuICAgIGNvbnN0IG1vdXNlQ29vcmQgPSB0aGlzLl92ZXJ0aWNhbCA/IGUubW92ZW1lbnRZIDogZS5tb3ZlbWVudFg7XG4gICAgY29uc3QgY2xpZW50Q29vcmQgPSB0aGlzLl9nZXRNb3VzZVBvcyhlKVxuXG4gICAgY29uc3QgZGVsdGEgPSBtb3VzZUNvb3JkID09PSAwID8gY2xpZW50Q29vcmQgLSB0aGlzLl9wcmV2IDogbW91c2VDb29yZDtcblxuICAgIHJldHVybiBkZWx0YTtcbiAgfTtcblxuICBfbW91c2V1cCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fbW91c2V1cCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW91c2Vtb3ZlKTtcbiAgICB0aGlzLl90b2dnbGVNb3VzZU92ZXIoKTtcbiAgfTtcblxuICBfbW91c2Vtb3ZlID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLl9nZXRNb3VzZURlbHRhKGUpO1xuICAgIHRoaXMuX3ByZXYgPSB0aGlzLl9nZXRNb3VzZVBvcyhlKTtcblxuICAgIHRoaXMuX3ZhbHVlTGlzdGVuZXIoZGVsdGEpO1xuICB9O1xuXG4gIGhhbmRsZVRvdWNoU3RhcnQgPSBlID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX3RvdWNoZW5kKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl90b3VjaG1vdmUpO1xuICAgIHRoaXMuX3ByZXYgPSB0aGlzLl9nZXRUb3VjaFBvc2l0aW9uKGUpO1xuICAgIHRoaXMuX3RvZ2dsZU1vdXNlT3ZlcigpO1xuICB9O1xuXG4gIF90b3VjaG1vdmUgPSBlID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHRoaXMuX2dldFRvdWNoUG9zaXRpb24oZSkgLSB0aGlzLl9wcmV2O1xuICAgIHRoaXMuX3ByZXYgPSB0aGlzLl9nZXRUb3VjaFBvc2l0aW9uKGUpO1xuICAgIHRoaXMucHJvcHMuX3ZhbHVlTGlzdGVuZXIoZGVsdGEpO1xuICB9O1xuXG4gIF90b3VjaGVuZCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX3RvdWNoZW5kKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl90b3VjaG1vdmUpO1xuICAgIHRoaXMuX3RvZ2dsZU1vdXNlT3ZlcigpO1xuICB9O1xufVxuIl19