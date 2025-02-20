"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./styles.css");
const Card_1 = require("../../components/Card/Card");
function App() {
    const [studentName, setStudentName] = (0, react_1.useState)('');
    const [students, setStudents] = (0, react_1.useState)([]);
    const [user, setUser] = (0, react_1.useState)(null);
    function handleAddStudent() {
        if (!studentName.trim())
            return;
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        };
        setStudents(prevState => [...prevState, newStudent]);
        setStudentName('');
    }
    function handleKeyDown(e) {
        if (e.key === 'Enter')
            handleAddStudent();
    }
    (0, react_1.useEffect)(() => {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch('https://api.github.com/users/queirozz8');
                const data = yield response.json();
                setUser({
                    name: data.name,
                    avatar: data.avatar_url
                });
            });
        }
        fetchData();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'container', children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Lista de Presen\u00E7a" }), (0, jsx_runtime_1.jsx)("div", { children: user ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("strong", { children: user.name }), (0, jsx_runtime_1.jsx)("img", { src: user.avatar, alt: "Foto de perfil" })] })) : ((0, jsx_runtime_1.jsx)("strong", { children: "Carregando..." })) })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Digite o nome...", onChange: e => setStudentName(e.target.value), onKeyDown: handleKeyDown, value: studentName, id: 'input' }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: handleAddStudent, children: "Adicionar" }), students.map(student => (0, jsx_runtime_1.jsx)(Card_1.Card, { name: student.name, time: student.time }, student.time))] }));
}
