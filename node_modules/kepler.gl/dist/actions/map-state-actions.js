"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSplitMap = exports.updateMap = exports.fitBounds = exports.togglePerspective = void 0;

var _reduxActions = require("redux-actions");

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

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

/**
 *
 * Toggle between 3d and 2d map.
 * @memberof mapStateActions
 * @public
 * @example
 * import {togglePerspective} from 'kepler.gl/actions';
 * this.props.dispatch(togglePerspective());
 */
var togglePerspective = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_PERSPECTIVE);
/**
 * Fit map viewport to bounds
 * @memberof mapStateActions
 * @param {Array<Number>} bounds as `[lngMin, latMin, lngMax, latMax]`
 * @public
 * @example
 * import {fitBounds} from 'kepler.gl/actions';
 * this.props.dispatch(fitBounds([-122.23, 37.127, -122.11, 37.456]));
 */

exports.togglePerspective = togglePerspective;
var fitBounds = (0, _reduxActions.createAction)(_actionTypes["default"].FIT_BOUNDS, function (bounds) {
  return bounds;
});
/**
 * Update map viewport
 * @memberof mapStateActions
 * @param {Object} viewport viewport object container one or any of these properties `width`, `height`, `latitude` `longitude`, `zoom`, `pitch`, `bearing`, `dragRotate`
 * @param {Number} [viewport.width] Width of viewport
 * @param {Number} [viewport.height] Height of viewport
 * @param {Number} [viewport.zoom] Zoom of viewport
 * @param {Number} [viewport.pitch] Camera angle in degrees (0 is straight down)
 * @param {Number} [viewport.bearing] Map rotation in degrees (0 means north is up)
 * @param {Number} [viewport.latitude] Latitude center of viewport on map in mercator projection
 * @param {Number} [viewport.longitude] Longitude Center of viewport on map in mercator projection
 * @param {boolean} [viewport.dragRotate] Whether to enable drag and rotate map into perspective viewport
 * @public
 * @example
 * import {updateMap} from 'kepler.gl/actions';
 * this.props.dispatch(updateMap({latitude: 37.75043, longitude: -122.34679, width: 800, height: 1200}));
 */

exports.fitBounds = fitBounds;
var updateMap = (0, _reduxActions.createAction)(_actionTypes["default"].UPDATE_MAP, function (viewport) {
  return viewport;
});
/**
 * Toggle between single map or split maps
 * @memberof mapStateActions
 * @param {Number} [index] index is provided, close split map at index
 * @public
 * @example
 * import {toggleSplitMap} from 'kepler.gl/actions';
 * this.props.dispatch(toggleSplitMap());
 */

exports.updateMap = updateMap;
var toggleSplitMap = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_SPLIT_MAP, function (index) {
  return index;
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by  `mapState` reducer.
 * They manage map viewport update, toggle between 2d and 3d map,
 * toggle between single and split maps.
 *
 * @public
 */

/* eslint-disable no-unused-vars */

exports.toggleSplitMap = toggleSplitMap;
var mapStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL21hcC1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbInRvZ2dsZVBlcnNwZWN0aXZlIiwiQWN0aW9uVHlwZXMiLCJUT0dHTEVfUEVSU1BFQ1RJVkUiLCJmaXRCb3VuZHMiLCJGSVRfQk9VTkRTIiwiYm91bmRzIiwidXBkYXRlTWFwIiwiVVBEQVRFX01BUCIsInZpZXdwb3J0IiwidG9nZ2xlU3BsaXRNYXAiLCJUT0dHTEVfU1BMSVRfTUFQIiwiaW5kZXgiLCJtYXBTdGF0ZUFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7Ozs7Ozs7OztBQVNPLElBQU1BLGlCQUFpQixHQUFHLGdDQUMvQkMsd0JBQVlDLGtCQURtQixDQUExQjtBQUlQOzs7Ozs7Ozs7OztBQVNPLElBQU1DLFNBQVMsR0FBSSxnQ0FDeEJGLHdCQUFZRyxVQURZLEVBRXhCLFVBQUFDLE1BQU07QUFBQSxTQUFJQSxNQUFKO0FBQUEsQ0FGa0IsQ0FBbkI7QUFLUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCTyxJQUFNQyxTQUFTLEdBQUcsZ0NBQ3ZCTCx3QkFBWU0sVUFEVyxFQUV2QixVQUFBQyxRQUFRO0FBQUEsU0FBSUEsUUFBSjtBQUFBLENBRmUsQ0FBbEI7QUFLUDs7Ozs7Ozs7Ozs7QUFTTyxJQUFNQyxjQUFjLEdBQUcsZ0NBQzVCUix3QkFBWVMsZ0JBRGdCLEVBRTVCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFKO0FBQUEsQ0FGdUIsQ0FBdkI7QUFLUDs7OztBQUdBOzs7Ozs7OztBQU9BOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuLyoqXG4gKlxuICogVG9nZ2xlIGJldHdlZW4gM2QgYW5kIDJkIG1hcC5cbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZUFjdGlvbnNcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge3RvZ2dsZVBlcnNwZWN0aXZlfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZVBlcnNwZWN0aXZlKCkpO1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlUGVyc3BlY3RpdmUgPSBjcmVhdGVBY3Rpb24oXG4gIEFjdGlvblR5cGVzLlRPR0dMRV9QRVJTUEVDVElWRVxuKTtcblxuLyoqXG4gKiBGaXQgbWFwIHZpZXdwb3J0IHRvIGJvdW5kc1xuICogQG1lbWJlcm9mIG1hcFN0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBib3VuZHMgYXMgYFtsbmdNaW4sIGxhdE1pbiwgbG5nTWF4LCBsYXRNYXhdYFxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7Zml0Qm91bmRzfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKGZpdEJvdW5kcyhbLTEyMi4yMywgMzcuMTI3LCAtMTIyLjExLCAzNy40NTZdKSk7XG4gKi9cbmV4cG9ydCBjb25zdCBmaXRCb3VuZHMgPSAgY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5GSVRfQk9VTkRTLFxuICBib3VuZHMgPT4gYm91bmRzXG4pO1xuXG4vKipcbiAqIFVwZGF0ZSBtYXAgdmlld3BvcnRcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSB2aWV3cG9ydCB2aWV3cG9ydCBvYmplY3QgY29udGFpbmVyIG9uZSBvciBhbnkgb2YgdGhlc2UgcHJvcGVydGllcyBgd2lkdGhgLCBgaGVpZ2h0YCwgYGxhdGl0dWRlYCBgbG9uZ2l0dWRlYCwgYHpvb21gLCBgcGl0Y2hgLCBgYmVhcmluZ2AsIGBkcmFnUm90YXRlYFxuICogQHBhcmFtIHtOdW1iZXJ9IFt2aWV3cG9ydC53aWR0aF0gV2lkdGggb2Ygdmlld3BvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdmlld3BvcnQuaGVpZ2h0XSBIZWlnaHQgb2Ygdmlld3BvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdmlld3BvcnQuem9vbV0gWm9vbSBvZiB2aWV3cG9ydFxuICogQHBhcmFtIHtOdW1iZXJ9IFt2aWV3cG9ydC5waXRjaF0gQ2FtZXJhIGFuZ2xlIGluIGRlZ3JlZXMgKDAgaXMgc3RyYWlnaHQgZG93bilcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdmlld3BvcnQuYmVhcmluZ10gTWFwIHJvdGF0aW9uIGluIGRlZ3JlZXMgKDAgbWVhbnMgbm9ydGggaXMgdXApXG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0LmxhdGl0dWRlXSBMYXRpdHVkZSBjZW50ZXIgb2Ygdmlld3BvcnQgb24gbWFwIGluIG1lcmNhdG9yIHByb2plY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBbdmlld3BvcnQubG9uZ2l0dWRlXSBMb25naXR1ZGUgQ2VudGVyIG9mIHZpZXdwb3J0IG9uIG1hcCBpbiBtZXJjYXRvciBwcm9qZWN0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt2aWV3cG9ydC5kcmFnUm90YXRlXSBXaGV0aGVyIHRvIGVuYWJsZSBkcmFnIGFuZCByb3RhdGUgbWFwIGludG8gcGVyc3BlY3RpdmUgdmlld3BvcnRcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge3VwZGF0ZU1hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xuICogdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVNYXAoe2xhdGl0dWRlOiAzNy43NTA0MywgbG9uZ2l0dWRlOiAtMTIyLjM0Njc5LCB3aWR0aDogODAwLCBoZWlnaHQ6IDEyMDB9KSk7XG4gKi9cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1hcCA9IGNyZWF0ZUFjdGlvbihcbiAgQWN0aW9uVHlwZXMuVVBEQVRFX01BUCxcbiAgdmlld3BvcnQgPT4gdmlld3BvcnRcbik7XG5cbi8qKlxuICogVG9nZ2xlIGJldHdlZW4gc2luZ2xlIG1hcCBvciBzcGxpdCBtYXBzXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XSBpbmRleCBpcyBwcm92aWRlZCwgY2xvc2Ugc3BsaXQgbWFwIGF0IGluZGV4XG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHt0b2dnbGVTcGxpdE1hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xuICogdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVTcGxpdE1hcCgpKTtcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNwbGl0TWFwID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5UT0dHTEVfU1BMSVRfTUFQLFxuICBpbmRleCA9PiBpbmRleFxuKTtcblxuLyoqXG4gKiBUaGlzIGRlY2xhcmF0aW9uIGlzIG5lZWRlZCB0byBncm91cCBhY3Rpb25zIGluIGRvY3NcbiAqL1xuLyoqXG4gKiBBY3Rpb25zIGhhbmRsZWQgbW9zdGx5IGJ5ICBgbWFwU3RhdGVgIHJlZHVjZXIuXG4gKiBUaGV5IG1hbmFnZSBtYXAgdmlld3BvcnQgdXBkYXRlLCB0b2dnbGUgYmV0d2VlbiAyZCBhbmQgM2QgbWFwLFxuICogdG9nZ2xlIGJldHdlZW4gc2luZ2xlIGFuZCBzcGxpdCBtYXBzLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IG1hcFN0YXRlQWN0aW9ucyA9IG51bGxcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiJdfQ==