(function (React, designSystem) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var ImageUpload = function ImageUpload(props) {
    var _useState = React.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        files = _useState2[0],
        setFiles = _useState2[1];

    var property = props.property,
        onChange = props.onChange,
        record = props.record;
    record.params[property.name];

    var handleDropZoneChange = function handleDropZoneChange(files1) {
      onChange(property.name, [].concat(_toConsumableArray(files), _toConsumableArray(files1)));
    };

    React.useEffect(function () {
      var uploadedPhoto = Object.entries(record.params).map(function (ss) {
        if (ss[0].includes("images")) {
          return ss[1];
        }
      }).filter(function (s1) {
        return s1 !== null && s1 !== undefined;
      });
      setFiles(uploadedPhoto);
    }, []);

    var toggleItem = function toggleItem(item) {
      var as = files.filter(function (s) {
        return s !== item;
      });
      setFiles(as);
      onChange(property.name, _toConsumableArray(as));
    };

    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      marginBottom: "xxl"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Label, null, property.label), /*#__PURE__*/React__default["default"].createElement(designSystem.DropZone, {
      multiple: true,
      onChange: handleDropZoneChange
    }), " ", files && files.map(function (item) {
      return /*#__PURE__*/React__default["default"].createElement(designSystem.DropZoneItem, {
        onRemove: function onRemove() {
          return toggleItem(item);
        },
        filename: item,
        src: "/api".concat(item)
      });
    }), " ");
  };

  AdminBro.UserComponents = {};
  AdminBro.UserComponents.Component1 = ImageUpload;

})(React, AdminBroDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9hcGkvY29tcG9uZW50cy9pbWFnZVVwbG9hZC5qc3giLCIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyb3Bab25lLCBCb3gsIExhYmVsLCBEcm9wWm9uZUl0ZW0gfSBmcm9tIFwiQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtXCI7XG5cbmNvbnN0IEltYWdlVXBsb2FkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB7IHByb3BlcnR5LCBvbkNoYW5nZSwgcmVjb3JkIH0gPSBwcm9wcztcblxuICBjb25zdCBwaG90b1RvVXBsb2FkID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5uYW1lXTtcblxuICBjb25zdCBoYW5kbGVEcm9wWm9uZUNoYW5nZSA9IChmaWxlczEpID0+IHtcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBbLi4uZmlsZXMsIC4uLmZpbGVzMV0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBsb2FkZWRQaG90byA9IE9iamVjdC5lbnRyaWVzKHJlY29yZC5wYXJhbXMpXG4gICAgICAubWFwKChzcykgPT4ge1xuICAgICAgICBpZiAoc3NbMF0uaW5jbHVkZXMoXCJpbWFnZXNcIikpIHtcbiAgICAgICAgICByZXR1cm4gc3NbMV07XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChzMSkgPT4gczEgIT09IG51bGwgJiYgczEgIT09IHVuZGVmaW5lZCk7XG4gICAgc2V0RmlsZXModXBsb2FkZWRQaG90byk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBhcyA9IGZpbGVzLmZpbHRlcigocykgPT4ge1xuICAgICAgcmV0dXJuIHMgIT09IGl0ZW07XG4gICAgfSk7XG4gICAgc2V0RmlsZXMoYXMpO1xuICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIFsuLi5hc10pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXJnaW5Cb3R0b209XCJ4eGxcIj5cbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgIDxEcm9wWm9uZSBtdWx0aXBsZSBvbkNoYW5nZT17aGFuZGxlRHJvcFpvbmVDaGFuZ2V9IC8+e1wiIFwifVxuICAgICAge2ZpbGVzICYmXG4gICAgICAgIGZpbGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RHJvcFpvbmVJdGVtXG4gICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB0b2dnbGVJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICBmaWxlbmFtZT17aXRlbX1cbiAgICAgICAgICAgICAgc3JjPXtgL2FwaSR7aXRlbX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX17XCIgXCJ9XG4gICAgICB7fVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VVcGxvYWQ7XG4iLCJBZG1pbkJyby5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgQ29tcG9uZW50MSBmcm9tICcuLi9hcGkvY29tcG9uZW50cy9pbWFnZVVwbG9hZCdcbkFkbWluQnJvLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDEgPSBDb21wb25lbnQxIl0sIm5hbWVzIjpbIkltYWdlVXBsb2FkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImZpbGVzIiwic2V0RmlsZXMiLCJwcm9wZXJ0eSIsIm9uQ2hhbmdlIiwicmVjb3JkIiwicGFyYW1zIiwibmFtZSIsImhhbmRsZURyb3Bab25lQ2hhbmdlIiwiZmlsZXMxIiwidXNlRWZmZWN0IiwidXBsb2FkZWRQaG90byIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJzcyIsImluY2x1ZGVzIiwiZmlsdGVyIiwiczEiLCJ1bmRlZmluZWQiLCJ0b2dnbGVJdGVtIiwiaXRlbSIsImFzIiwicyIsIlJlYWN0IiwiQm94IiwiTGFiZWwiLCJsYWJlbCIsIkRyb3Bab25lIiwiRHJvcFpvbmVJdGVtIiwiQWRtaW5Ccm8iLCJVc2VyQ29tcG9uZW50cyIsIkNvbXBvbmVudDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFHQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7RUFDN0Isa0JBQTBCQyxjQUFRLENBQUMsRUFBRCxDQUFsQztFQUFBO0VBQUEsTUFBT0MsS0FBUDtFQUFBLE1BQWNDLFFBQWQ7O0VBQ0EsTUFBUUMsUUFBUixHQUF1Q0osS0FBdkMsQ0FBUUksUUFBUjtFQUFBLE1BQWtCQyxRQUFsQixHQUF1Q0wsS0FBdkMsQ0FBa0JLLFFBQWxCO0VBQUEsTUFBNEJDLE1BQTVCLEdBQXVDTixLQUF2QyxDQUE0Qk0sTUFBNUI7RUFFQSxFQUFzQkEsTUFBTSxDQUFDQyxNQUFQLENBQWNILFFBQVEsQ0FBQ0ksSUFBdkI7O0VBRXRCLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsTUFBRCxFQUFZO0VBQ3ZDTCxJQUFBQSxRQUFRLENBQUNELFFBQVEsQ0FBQ0ksSUFBViwrQkFBb0JOLEtBQXBCLHNCQUE4QlEsTUFBOUIsR0FBUjtFQUNELEdBRkQ7O0VBSUFDLEVBQUFBLGVBQVMsQ0FBQyxZQUFNO0VBQ2QsUUFBTUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZVIsTUFBTSxDQUFDQyxNQUF0QixFQUNuQlEsR0FEbUIsQ0FDZixVQUFDQyxFQUFELEVBQVE7RUFDWCxVQUFJQSxFQUFFLENBQUMsQ0FBRCxDQUFGLENBQU1DLFFBQU4sQ0FBZSxRQUFmLENBQUosRUFBOEI7RUFDNUIsZUFBT0QsRUFBRSxDQUFDLENBQUQsQ0FBVDtFQUNEO0VBQ0YsS0FMbUIsRUFNbkJFLE1BTm1CLENBTVosVUFBQ0MsRUFBRDtFQUFBLGFBQVFBLEVBQUUsS0FBSyxJQUFQLElBQWVBLEVBQUUsS0FBS0MsU0FBOUI7RUFBQSxLQU5ZLENBQXRCO0VBT0FqQixJQUFBQSxRQUFRLENBQUNTLGFBQUQsQ0FBUjtFQUNELEdBVFEsRUFTTixFQVRNLENBQVQ7O0VBV0EsTUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0VBQzNCLFFBQU1DLEVBQUUsR0FBR3JCLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYSxVQUFDTSxDQUFELEVBQU87RUFDN0IsYUFBT0EsQ0FBQyxLQUFLRixJQUFiO0VBQ0QsS0FGVSxDQUFYO0VBR0FuQixJQUFBQSxRQUFRLENBQUNvQixFQUFELENBQVI7RUFDQWxCLElBQUFBLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDSSxJQUFWLHFCQUFvQmUsRUFBcEIsRUFBUjtFQUNELEdBTkQ7O0VBUUEsc0JBQ0VFLHdDQUFDQyxnQkFBRDtFQUFLLElBQUEsWUFBWSxFQUFDO0VBQWxCLGtCQUNFRCx3Q0FBQ0Usa0JBQUQsUUFBUXZCLFFBQVEsQ0FBQ3dCLEtBQWpCLENBREYsZUFFRUgsd0NBQUNJLHFCQUFEO0VBQVUsSUFBQSxRQUFRLE1BQWxCO0VBQW1CLElBQUEsUUFBUSxFQUFFcEI7RUFBN0IsSUFGRixFQUV3RCxHQUZ4RCxFQUdHUCxLQUFLLElBQ0pBLEtBQUssQ0FBQ2EsR0FBTixDQUFVLFVBQUNPLElBQUQsRUFBVTtFQUNsQix3QkFDRUcsd0NBQUNLLHlCQUFEO0VBQ0UsTUFBQSxRQUFRLEVBQUU7RUFBQSxlQUFNVCxVQUFVLENBQUNDLElBQUQsQ0FBaEI7RUFBQSxPQURaO0VBRUUsTUFBQSxRQUFRLEVBQUVBLElBRlo7RUFHRSxNQUFBLEdBQUcsZ0JBQVNBLElBQVQ7RUFITCxNQURGO0VBT0QsR0FSRCxDQUpKLEVBWVEsR0FaUixDQURGO0VBaUJELENBOUNEOztFQ0hBUyxRQUFRLENBQUNDLGNBQVQsR0FBMEIsRUFBMUI7RUFFQUQsUUFBUSxDQUFDQyxjQUFULENBQXdCQyxVQUF4QixHQUFxQ0EsV0FBckM7Ozs7OzsifQ==
