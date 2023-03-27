"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Input_1 = __importDefault(require("./Input"));
const ReactRealTimeSearch = ({ data, inputClassName, ulClassName, liClassName, }) => {
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    const [filteredData, setFilteredData] = (0, react_1.useState)(data);
    (0, react_1.useEffect)(() => {
        let newData = data;
        if (searchTerm) {
            newData = newData.filter((option) => option.label.includes(searchTerm));
        }
        setFilteredData(newData);
    }, [filteredData, searchTerm]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Input_1.default, { placeholder: "Search", onChange: (e) => setSearchTerm(e.target.value), className: inputClassName }), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: ulClassName }, { children: filteredData.map((option) => ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: liClassName }, { children: option.label }), option.value))) }))] }));
};
exports.default = ReactRealTimeSearch;
//# sourceMappingURL=advancedSearch.js.map