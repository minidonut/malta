"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("./theme");
var _a = require("styled-system"), color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, space = _a.space;
var size = 24;
var circleSize = size * 0.2;
var StyledRadio = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  float: left;\n  margin-right: 12px;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background-color: ", ";\n  border: solid 1px ", ";\n\n  & svg {\n    position: absolute;\n    & circle {\n      fill: ", ";\n      stroke: none;\n      r: 0;\n      transition: all .3s ease;\n    }\n  }\n"], ["\n  position: relative;\n  float: left;\n  margin-right: 12px;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background-color: ", ";\n  border: solid 1px ", ";\n\n  & svg {\n    position: absolute;\n    & circle {\n      fill: ", ";\n      stroke: none;\n      r: 0;\n      transition: all .3s ease;\n    }\n  }\n"])), size, size, theme_1.colors.white, theme_1.colors.black._20, theme_1.colors.white);
var Label = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: table-cell;\n  height: ", "px;\n  pointer-events: none;\n  vertical-align: middle;\n"], ["\n  display: table-cell;\n  height: ", "px;\n  pointer-events: none;\n  vertical-align: middle;\n"])), size + 2);
var Input = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  opacity: 0;\n\n  &:checked {\n    & ~ ", " {\n      color: ", " !important;\n    }\n    & ~ ", " {\n      background-color: ", ";\n      border-color: ", " !important;\n      & svg {\n        & circle {\n          r: ", ";\n        }\n      }\n    }\n    &:hover {\n      & ", " {\n        border-color: ", ";\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  opacity: 0;\n\n  &:checked {\n    & ~ ", " {\n      color: ", " !important;\n    }\n    & ~ ", " {\n      background-color: ", ";\n      border-color: ", " !important;\n      & svg {\n        & circle {\n          r: ", ";\n        }\n      }\n    }\n    &:hover {\n      & ", " {\n        border-color: ", ";\n      }\n    }\n  }\n"])), Label, theme_1.colors.blue.royal, StyledRadio, theme_1.colors.blue.royal, theme_1.colors.blue.royal, circleSize, StyledRadio, theme_1.colors.blue.royal);
var Wrapper = styled_components_1.default.label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n\n  user-select: none;\n  display: ", ";\n  cursor: pointer;\n  margin-bottom: 0;\n\n  &:hover {\n    & ", " {\n      border-color: ", ";\n    }\n  }\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n\n  user-select: none;\n  display: ", ";\n  cursor: pointer;\n  margin-bottom: 0;\n\n  &:hover {\n    & ", " {\n      border-color: ", ";\n    }\n  }\n"])), fontSize, fontWeight, lineHeight, space, function (props) { return props.display; }, StyledRadio, theme_1.colors.black.standard);
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedValue: undefined
        };
        _this.handleSelection = _this.handleSelection.bind(_this);
        return _this;
    }
    Radio.prototype.handleSelection = function (event) {
        var target = event.target;
        var value = target.type === "checkbox" ? target.checked : target.value;
        var name = target.name;
        this.setState({
            selectedValue: value
        });
    };
    Radio.prototype.render = function () {
        var _a = this.props, checked = _a.checked, name = _a.name, value = _a.value;
        return (React.createElement(Wrapper, __assign({}, this.props),
            React.createElement(Input, { type: "radio", name: name, value: value, defaultChecked: checked, onClick: this.handleSelection }),
            React.createElement(StyledRadio, null,
                React.createElement("svg", { width: size + "px", height: size + "px", viewBox: "0 0 " + size + " " + size },
                    React.createElement("circle", { cx: size / 2, cy: size / 2 }))),
            React.createElement(Label, null, this.props.children)));
    };
    Radio.defaultProps = {
        checked: false,
        // color
        color: "black.dark",
        // display
        display: "block",
        // fontSize
        fontSize: "h3",
        // fontWeight
        fontWeight: "regular",
        // lineHeight
        lineHeight: "1.44",
        // space
        m: 1,
    };
    return Radio;
}(React.Component));
exports.Radio = Radio;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;