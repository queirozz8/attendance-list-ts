"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
function Card(props) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'card', children: [(0, jsx_runtime_1.jsx)("strong", { children: props.name }), (0, jsx_runtime_1.jsx)("strong", { children: props.time })] }));
}
