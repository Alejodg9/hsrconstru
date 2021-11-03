(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./Context/UseAppContext.js":
/*!**********************************!*\
  !*** ./Context/UseAppContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppProvider": () => (/* binding */ AppProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\Context\\UseAppContext.js";


const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

const useAppContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);

const AppProvider = ({
  children
}) => {
  const {
    0: lang,
    1: setLang
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ESP");

  const displayIngles = value => {
    setLang("ENG");
  };

  const displayEspañol = value => {
    setLang("ESP");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppContext.Provider, {
    value: {
      lang,
      displayIngles,
      displayEspañol
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAppContext);

/***/ }),

/***/ "./components/About/About.js":
/*!***********************************!*\
  !*** ./components/About/About.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About.module.scss */ "./components/About/About.module.scss");
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_About_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/SectionTitle/SectionTitle */ "./components/UI/SectionTitle/SectionTitle.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context_UseAppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context/UseAppContext */ "./Context/UseAppContext.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\About\\About.js";







const About = () => {
  const {
    lang
  } = (0,_Context_UseAppContext__WEBPACK_IMPORTED_MODULE_2__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_5___default().general_container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_UI_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_0__.default, {
        color: react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isBrowser ? "white" : "black",
        children: lang == "ESP" ? esp[0] : eng[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_5___default().master_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_5___default().brief),
        children: lang == "ESP" ? esp[1] : eng[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/areasDePractica",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button_primary),
            children: lang == "ESP" ? esp[3] : eng[3]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/socios",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button_primary),
            children: lang == "ESP" ? esp[2] : eng[2]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_5___default().overlay)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

const backgorund = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("svg", {
  width: "400",
  height: "675",
  viewBox: "0 0 684 675",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("path", {
    d: "M342.006 675L0 337.506L342.006 1.82432e-05L684 337.506L342.006 675Z",
    fill: "#666666",
    fillOpacity: "0.06"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 44,
  columnNumber: 2
}, undefined);

const esp = ["Nosotros", "Desarrollamos relaciones de largo plazo con nuestros clientes,\
   prestando un asesoramiento jurídico ágil y comprometido", "Socios", "Areas de Práctica"];
const eng = ["About Us", "We develop long-term relationships with our clients, providing agile and committed legal services ", "Partners", "Practice Areas"];

const fondoGris = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("svg", {
  width: "414",
  height: "507",
  viewBox: "0 0 414 507",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("path", {
    d: "M0 0H414L230.629 507H0V0Z",
    fill: "#C4C4C4",
    fillOpacity: "0.15"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 2
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 76,
  columnNumber: 20
}, undefined);

/***/ }),

/***/ "./components/ContactPeek/ContactPeek.js":
/*!***********************************************!*\
  !*** ./components/ContactPeek/ContactPeek.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContactPeek.module.scss */ "./components/ContactPeek/ContactPeek.module.scss");
/* harmony import */ var _ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UI_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/SectionTitle/SectionTitle */ "./components/UI/SectionTitle/SectionTitle.js");
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Button/Button */ "./components/UI/Button/Button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context_UseAppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Context/UseAppContext */ "./Context/UseAppContext.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\ContactPeek\\ContactPeek.js";








const About = () => {
  const {
    lang
  } = (0,_Context_UseAppContext__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().general_container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().overlay),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().image),
        src: "/ofi1.jpg",
        alt: "socio",
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_UI_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_0__.default, {
        color: "white",
        children: lang == "ESP" ? esp[0] : eng[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().master_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().brief),
        children: lang == "ESP" ? esp[1] : eng[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().brief),
        children: lang == "ESP" ? esp[2] : eng[2]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().brief),
        children: lang == "ESP" ? esp[3] : eng[3]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().button_primary),
          style: {
            color: "white",
            margin: "1rem 0"
          },
          children: lang == "ESP" ? esp[4] : eng[4]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().button_primary),
          style: {
            color: "white"
          },
          children: lang == "ESP" ? esp[6] : eng[6]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subscribe),
        style: {
          color: "white"
        },
        children: "NewsLetter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 16
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newsletter_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          className: (_ContactPeek_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newsletter),
          type: "email",
          name: "user_email",
          placeholder: lang == "ESP" ? "Ingrese su mail" : "Enter your email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: lang == "ESP" ? "Subscribimre" : "Subscribe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 16
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

const backgorund = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", {
  width: "300",
  height: "675",
  viewBox: "0 0 684 675",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("path", {
    d: "M342.006 675L0 337.506L342.006 1.82432e-05L684 337.506L342.006 675Z",
    fill: "#666666",
    fillOpacity: "0.06"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 57,
  columnNumber: 2
}, undefined);

const esp = ["Contacto", "Libertad 567, piso 5°, Ciudad Autónoma de Buenos Aires, Argentina", "+54 11 6346 2790", "contacto@hsrabogados.com", "Contacto", "Brochure Institucional", "Brochure Institucional"];
const eng = ["Contact", "Libertad 567, piso 5°, Ciudad Autónoma de Buenos Aires, Argentina", "+54 11 6346 2790", "contacto@hsrabogados.com", "Contact", "Institutional Brochure", "Institutional Brochure"];

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.module.scss */ "./components/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context_UseAppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/UseAppContext */ "./Context/UseAppContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\Footer\\Footer.js";






function Footer() {
  const {
    lang
  } = (0,_Context_UseAppContext__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: [lang == "ESP" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: "                  Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/institucional",
            children: "     La Firma"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/areasDePractica",
            children: "   Areas de Practica"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/socios",
            children: "            Socios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/novedades",
            children: "         Novedades"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/carreras",
            children: "          Carreras"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/contacto",
            children: "          Contacto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: "                  Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/institucional",
            children: "     The Firm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/areasDePractica",
            children: "   Practice Areas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/socios",
            children: "            Partners"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/novedades",
            children: "         News"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/carreras",
            children: "          Carrers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/contacto",
            children: "          Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer_social_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "https://www.instagram.com",
          children: IGLogo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "https://ar.linkedin.com/company/hang-kuchen-sporleder-rodriguez-morales-abogados?trk=public_profile_topcard-current-company",
          children: INLogo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 18
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: "HSR Abogados \xA9 2021"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

let INLogo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
  className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer_social),
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 126
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 50,
  columnNumber: 14
}, undefined);

let IGLogo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
  className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer_social),
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 126
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 51,
  columnNumber: 14
}, undefined);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\Header\\Header.js";







const Header = () => {
  const videoParentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().video_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
        children: react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile ? logo4 : logoDesktop
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().video_overlay)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        ref: videoParentRef,
        dangerouslySetInnerHTML: {
          __html: `
        <video
        width="100%"
        height="100%"
          loop
          playsinline
          muted
          autoplay
          style="position:absolute;top:0;left:0;height:100%;object-fit:cover; z-index:1;"
          preload="metadata"
          poster="./poster.png"
        >
        <source src='./intro20.mp4'type="video/mp4" />
        </video>`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bounce),
        children: arrowDown
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

let logoDesktop = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
  width: "506",
  height: "139",
  viewBox: "0 0 506 139",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M188.634 16.1217H188.734V16.2217V33.4329V33.5329H188.634H187.325H187.225V33.4329V25.2963H177.367V33.4329V33.5329H177.267H175.958H175.858V33.4329V16.2217V16.1217H175.958H177.267H177.367V16.2217V23.8666H187.225V16.2217V16.1217H187.325H188.634Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M197.576 33.4691L197.551 33.5332H197.482H196.098H195.952L196.005 33.3968L202.727 16.1852L202.752 16.1216H202.82H204.203H204.272L204.297 16.1853L210.993 33.397L211.046 33.5332H210.9H209.516H209.448L209.423 33.4691L207.767 29.1565H199.231L197.576 33.4691ZM199.802 27.7268H207.221L203.511 18.098L199.802 27.7268Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M231.041 16.1217H231.141V16.2217V33.4329V33.5329H231.041H229.88H229.827L229.797 33.4896L219.773 18.9524V33.4329V33.5329H219.673H218.364H218.264V33.4329V16.2217V16.1217H218.364H219.501H219.553L219.583 16.1648L229.631 30.7028V16.2217V16.1217H229.731H231.041Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M255.815 20.0567L255.864 20.1423L255.779 20.1927L254.618 20.8808L254.527 20.9344L254.478 20.8413C253.36 18.7133 250.975 17.305 248.291 17.305C243.8 17.305 240.705 20.6519 240.705 24.8272C240.705 29.0021 243.799 32.3494 248.389 32.3494C252.495 32.3494 254.983 29.8613 255.297 26.747H248.068H247.968V26.647V25.4173V25.3173H248.068H256.741H256.841V25.4173V26.0816C256.841 30.2957 253.605 33.8034 248.389 33.8034C242.972 33.8034 239.196 29.8002 239.196 24.8272C239.196 19.8558 242.971 15.8511 248.291 15.8511C251.537 15.8511 254.363 17.5417 255.815 20.0567Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M286.495 33.5331H286.454L286.425 33.5046L277.921 25.1879V33.4331V33.5331H277.821H276.512H276.412V33.4331V16.2219V16.1219H276.512H277.821H277.921V16.2219V24.0043L286.179 16.1495L286.208 16.1219H286.248H288.002H288.252L288.071 16.2942L279.398 24.5827L288.319 33.3618L288.493 33.5331H288.249H286.495Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M294.501 16.2217V16.1217H294.601H295.911H296.011V16.2217V27.6795C296.011 29.06 296.443 30.2249 297.266 31.0447C298.09 31.8643 299.317 32.3495 300.927 32.3495C302.55 32.3495 303.783 31.8642 304.61 31.0446C305.436 30.2248 305.868 29.06 305.868 27.6795V16.2217V16.1217H305.968H307.278H307.378V16.2217V27.6795C307.378 29.5232 306.733 31.0566 305.598 32.1287C304.465 33.2003 302.851 33.8035 300.927 33.8035C299.004 33.8035 297.396 33.2003 296.268 32.1285C295.14 31.0563 294.501 29.5229 294.501 27.6795V16.2217Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M331.83 20.1188L331.743 20.1684L330.582 20.8323L330.493 20.8832L330.444 20.7928C329.326 18.7134 326.964 17.3051 324.28 17.3051C319.79 17.3051 316.695 20.6516 316.695 24.8273C316.695 29.0031 319.79 32.3495 324.28 32.3495C326.988 32.3495 329.375 30.9169 330.493 28.7885L330.541 28.6968L330.631 28.7482L331.793 29.4121L331.878 29.4611L331.83 29.5475C330.403 32.1135 327.552 33.8035 324.28 33.8035C318.96 33.8035 315.185 29.7992 315.185 24.8273C315.185 19.8555 318.96 15.8512 324.28 15.8512C327.502 15.8512 330.328 17.4917 331.78 20.032L331.83 20.1188Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M352.452 16.1217H352.552V16.2217V33.4329V33.5329H352.452H351.142H351.042V33.4329V25.2963H341.185V33.4329V33.5329H341.085H339.775H339.675V33.4329V16.2217V16.1217H339.775H341.085H341.185V16.2217V23.8666H351.042V16.2217V16.1217H351.142H352.452Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M371.653 32.1036H371.753V32.2036V33.4329V33.5329H371.653H361.695H361.595V33.4329V16.2217V16.1217H361.695H371.53H371.63V16.2217V17.4509V17.5509H371.53H363.105V24.0387H370.912H371.012V24.1387V25.3684V25.4684H370.912H363.105V32.1036H371.653Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M392.486 16.1217H392.586V16.2217V33.4329V33.5329H392.486H391.324H391.272L391.242 33.4896L381.218 18.9524V33.4329V33.5329H381.118H379.809H379.709V33.4329V16.2217V16.1217H379.809H380.946H380.998L381.028 16.1648L391.076 30.7028V16.2217V16.1217H391.176H392.486Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M174.825 59.1845L174.8 59.1079L174.869 59.0672L176.006 58.4034L176.117 58.3386L176.153 58.4622C176.444 59.4749 177.018 60.3217 177.866 60.916C178.714 61.5107 179.842 61.8568 181.246 61.8568C182.675 61.8568 183.737 61.4921 184.44 60.8969C185.141 60.3031 185.495 59.4716 185.495 58.5145C185.495 57.5194 185.058 56.8347 184.292 56.2908C183.519 55.7418 182.415 55.3401 181.092 54.9217L181.091 54.9215C181.062 54.9121 181.033 54.9027 181.004 54.8934C179.595 54.4379 178.243 54.001 177.238 53.3105C176.724 52.9568 176.297 52.5344 176 52.0056C175.702 51.4764 175.536 50.846 175.536 50.081C175.536 48.6378 176.124 47.4543 177.088 46.6331C178.051 45.8132 179.385 45.3585 180.875 45.3585C183.762 45.3585 185.673 47.0092 186.528 49.034L186.563 49.117L186.484 49.1605L185.371 49.7749L185.273 49.8289L185.231 49.7256C184.914 48.9634 184.43 48.2356 183.724 47.6986C183.02 47.1625 182.09 46.8124 180.875 46.8124C179.696 46.8124 178.745 47.157 178.09 47.7282C177.436 48.2986 177.071 49.1005 177.071 50.0316C177.071 50.5331 177.177 50.9431 177.371 51.2893C177.565 51.6361 177.85 51.9244 178.214 52.1777C178.947 52.6872 179.989 53.0458 181.228 53.4526L181.228 53.4526C182.757 53.9557 184.205 54.4515 185.269 55.1992C186.341 55.9521 187.029 56.964 187.029 58.4898C187.029 59.9443 186.455 61.1531 185.439 61.9965C184.426 62.8385 182.981 63.3103 181.246 63.3103C177.973 63.3103 175.631 61.6674 174.825 59.1845Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M200.843 56.4757H196.371V62.9403V63.0403H196.271H194.961H194.861V62.9403V45.7291V45.6291H194.961H200.843C204.011 45.6291 206.33 47.9598 206.33 51.0645C206.33 54.1449 204.011 56.4757 200.843 56.4757ZM204.82 51.0645C204.82 48.7338 203.159 47.0584 200.843 47.0584H196.371V55.046H200.843C203.16 55.046 204.82 53.3701 204.82 51.0645Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M229.73 54.3345C229.73 50.1599 226.438 46.8123 222.219 46.8123C217.999 46.8123 214.708 50.1599 214.708 54.3345C214.708 58.5092 217.999 61.8567 222.219 61.8567C226.438 61.8567 229.73 58.5092 229.73 54.3345ZM213.198 54.3345C213.198 49.3618 217.172 45.3584 222.219 45.3584C227.265 45.3584 231.239 49.3618 231.239 54.3345C231.239 59.3073 227.265 63.3107 222.219 63.3107C217.172 63.3107 213.198 59.3073 213.198 54.3345Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M240.804 55.9834V62.9402V63.0402H240.704H239.394H239.294V62.9402V45.729V45.629H239.394H246.214C249.087 45.629 251.43 47.9596 251.43 50.8186C251.43 53.1567 249.852 55.1309 247.677 55.7726L251.91 62.8891L252 63.0402H251.824H250.317H250.259L250.23 62.9909L246.108 55.9834H240.804ZM240.804 54.5541H246.214C248.259 54.5541 249.92 52.8788 249.92 50.8186C249.92 48.7332 248.259 47.0582 246.214 47.0582H240.804V54.5541Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M268.949 61.6109H269.049V61.7109V62.9402V63.0402H268.949H259.485H259.385V62.9402V45.729V45.629H259.485H260.795H260.895V45.729V61.6109H268.949Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M286.569 61.6109H286.669V61.7109V62.9402V63.0402H286.569H276.611H276.511V62.9402V45.729V45.629H276.611H286.446H286.546V45.729V46.9582V47.0582H286.446H278.02V53.546H285.828H285.928V53.646V54.8757V54.9757H285.828H278.02V61.6109H286.569Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M294.724 63.0402H294.624V62.9402V45.729V45.629H294.724H301.224C306.055 45.629 309.478 49.541 309.478 54.3346C309.478 59.1277 306.055 63.0402 301.224 63.0402H294.724ZM307.993 54.3346C307.993 50.2983 305.236 47.0582 301.224 47.0582H296.134V61.6109H301.224C305.236 61.6109 307.993 58.3704 307.993 54.3346Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M327.591 61.6109H327.691V61.7109V62.9402V63.0402H327.591H317.633H317.533V62.9402V45.729V45.629H317.633H327.468H327.568V45.729V46.9582V47.0582H327.468H319.043V53.546H326.85H326.95V53.646V54.8757V54.9757H326.85H319.043V61.6109H327.591Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M337.157 55.9834V62.9402V63.0402H337.057H335.747H335.647V62.9402V45.729V45.629H335.747H342.567C345.439 45.629 347.783 47.9596 347.783 50.8186C347.783 53.1567 346.205 55.1309 344.03 55.7726L348.263 62.8891L348.353 63.0402H348.177H346.669H346.612L346.583 62.9909L342.461 55.9834H337.157ZM337.157 54.5541H342.567C344.612 54.5541 346.273 52.8788 346.273 50.8186C346.273 48.7332 344.611 47.0582 342.567 47.0582H337.157V54.5541Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M374.446 59.3013L371.283 55.9084L371.134 55.7605C370.492 56.277 370.22 56.9898 370.22 57.6783C370.22 58.8339 370.961 59.6946 372.716 59.6946C373.359 59.6946 373.927 59.5719 374.446 59.3013ZM378.4 63.5796L376.867 61.9324C375.656 62.7679 374.174 63.2843 372.395 63.2843C368.837 63.2843 366.217 61.3422 366.217 58.0963C366.217 56.1291 367.205 54.2855 368.985 53.1542C368.54 52.3919 368.268 51.5312 368.268 50.4247C368.268 47.5235 370.517 45.3846 373.828 45.3846C376.324 45.3846 378.449 46.6138 379.512 49.1465L376.126 51.089C375.681 49.9334 374.989 49.2202 373.878 49.2202C372.889 49.2202 372.222 49.835 372.222 50.671C372.222 51.6221 372.806 52.2591 373.563 53.085L373.581 53.1048L376.769 56.6212C377.115 55.8347 377.386 54.9246 377.584 53.9165L380.896 55.7853C380.574 56.9898 380.055 58.2685 379.314 59.3993L381.488 61.8092L378.4 63.5796Z",
    fill: "white"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M374.446 59.3013L371.283 55.9084L371.134 55.7605C370.492 56.277 370.22 56.9898 370.22 57.6783C370.22 58.8339 370.961 59.6946 372.716 59.6946C373.359 59.6946 373.927 59.5719 374.446 59.3013ZM378.4 63.5796L376.867 61.9324C375.656 62.7679 374.174 63.2843 372.395 63.2843C368.837 63.2843 366.217 61.3422 366.217 58.0963C366.217 56.1291 367.205 54.2855 368.985 53.1542C368.54 52.3919 368.268 51.5312 368.268 50.4247C368.268 47.5235 370.517 45.3846 373.828 45.3846C376.324 45.3846 378.449 46.6138 379.512 49.1465L376.126 51.089C375.681 49.9334 374.989 49.2202 373.878 49.2202C372.889 49.2202 372.222 49.835 372.222 50.671C372.222 51.6221 372.806 52.2591 373.563 53.085L373.581 53.1048L376.769 56.6212C377.115 55.8347 377.386 54.9246 377.584 53.9165L380.896 55.7853C380.574 56.9898 380.055 58.2685 379.314 59.3993L381.488 61.8092L378.4 63.5796Z",
    stroke: "white"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M177.367 85.4903V92.4475V92.5475H177.267H175.957H175.857V92.4475V75.2363V75.1363H175.957H182.778C185.65 75.1363 187.993 77.467 187.993 80.3254C187.993 82.6636 186.416 84.6374 184.24 85.2795L188.473 92.3964L188.563 92.5475H188.387H186.88H186.823L186.794 92.4982L182.671 85.4903H177.367ZM177.367 84.0615H182.778C184.822 84.0615 186.484 82.3857 186.484 80.3254C186.484 78.2405 184.822 76.5651 182.778 76.5651H177.367V84.0615Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M211.492 83.8415C211.492 79.6673 208.2 76.3193 203.981 76.3193C199.762 76.3193 196.47 79.6673 196.47 83.8415C196.47 88.0162 199.762 91.3637 203.981 91.3637C208.2 91.3637 211.492 88.0162 211.492 83.8415ZM194.96 83.8415C194.96 78.8688 198.934 74.8654 203.981 74.8654C209.027 74.8654 213.001 78.8688 213.001 83.8415C213.001 88.8147 209.027 92.8181 203.981 92.8181C198.934 92.8181 194.96 88.8147 194.96 83.8415Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M221.156 92.547H221.056V92.447V75.2363V75.1363H221.156H227.656C232.487 75.1363 235.91 79.0479 235.91 83.8414C235.91 88.635 232.487 92.547 227.656 92.547H221.156ZM234.425 83.8414C234.425 79.8056 231.668 76.5651 227.656 76.5651H222.566V91.1178H227.656C231.668 91.1178 234.425 87.8777 234.425 83.8414Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M245.474 85.4903V92.4475V92.5475H245.374H244.064H243.964V92.4475V75.2363V75.1363H244.064H250.884C253.756 75.1363 256.1 77.467 256.1 80.3254C256.1 82.6636 254.522 84.6374 252.347 85.2795L256.58 92.3964L256.67 92.5475H256.494H254.987H254.929L254.9 92.4982L250.778 85.4903H245.474ZM245.474 84.0615H250.884C252.929 84.0615 254.59 82.3857 254.59 80.3254C254.59 78.2405 252.929 76.5651 250.884 76.5651H245.474V84.0615Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M265.566 92.4475V92.5475H265.466H264.156H264.056V92.4475V75.2363V75.1363H264.156H265.466H265.566V75.2363V92.4475Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M290.238 79.071L290.287 79.1566L290.202 79.207L289.041 79.8956L288.951 79.9492L288.902 79.8561C287.783 77.7281 285.398 76.3193 282.713 76.3193C278.223 76.3193 275.128 79.6662 275.128 83.8415C275.128 88.0164 278.223 91.3637 282.812 91.3637C286.918 91.3637 289.406 88.8757 289.72 85.7614H282.491H282.391V85.6614V84.4317V84.3317H282.491H291.165H291.265V84.4317V85.0959C291.265 89.31 288.028 92.8181 282.812 92.8181C277.394 92.8181 273.619 88.8145 273.619 83.8415C273.619 78.8697 277.394 74.8654 282.713 74.8654C285.961 74.8654 288.787 76.5561 290.238 79.071Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M298.924 75.236V75.136H299.024H300.334H300.434V75.236V86.6934C300.434 88.074 300.866 89.239 301.69 90.0587C302.513 90.8782 303.74 91.3634 305.35 91.3634C306.973 91.3634 308.206 90.8781 309.033 90.0586C309.86 89.2389 310.291 88.074 310.291 86.6934V75.236V75.136H310.391H311.701H311.801V75.236V86.6934C311.801 88.5375 311.156 90.071 310.022 91.1431C308.888 92.2147 307.274 92.8178 305.35 92.8178C303.427 92.8178 301.819 92.2147 300.691 91.1429C299.563 90.0707 298.924 88.5372 298.924 86.6934V75.236Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M330.655 91.1179H330.755V91.2179V92.4471V92.5471H330.655H320.697H320.597V92.4471V75.236V75.136H320.697H330.532H330.632V75.236V76.4652V76.5652H330.532H322.107V83.0535H329.914H330.014V83.1535V84.3822V84.4822H329.914H322.107V91.1179H330.655Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M348.77 91.1179H348.87V91.2179V92.4471V92.5471H348.77H337.724H337.624V92.4471V91.2179V91.1889L337.64 91.1644L346.883 76.5652H337.971H337.871V76.4652V75.236V75.136H337.971H348.523H348.623V75.236V76.4652V76.4942L348.607 76.5187L339.363 91.1179H348.77Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M383.96 92.4471V92.5471H383.86H382.55H382.45V92.4471V77.5121L376.236 87.7779L376.207 87.8261H376.15H375.928H375.871L375.842 87.7779L369.628 77.5121V92.4471V92.5471H369.528H368.218H368.118V92.4471V75.236V75.136H368.218H369.849H369.905L369.935 75.1841L376.027 85.2223L382.119 75.1841L382.148 75.136H382.204H383.86H383.96V75.236V92.4471Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M408.547 83.8415C408.547 79.6673 405.255 76.3193 401.036 76.3193C396.816 76.3193 393.525 79.6673 393.525 83.8415C393.525 88.0162 396.816 91.3637 401.036 91.3637C405.255 91.3637 408.547 88.0162 408.547 83.8415ZM392.015 83.8415C392.015 78.8688 395.989 74.8654 401.036 74.8654C406.082 74.8654 410.056 78.8688 410.056 83.8415C410.056 88.8147 406.082 92.8181 401.036 92.8181C395.989 92.8181 392.015 88.8147 392.015 83.8415Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M419.621 85.4903V92.4475V92.5475H419.521H418.211H418.111V92.4475V75.2363V75.1363H418.211H425.031C427.903 75.1363 430.247 77.467 430.247 80.3254C430.247 82.6636 428.669 84.6374 426.494 85.2795L430.727 92.3964L430.817 92.5475H430.641H429.133H429.076L429.047 92.4982L424.925 85.4903H419.621ZM419.621 84.0615H425.031C427.076 84.0615 428.737 82.3857 428.737 80.3254C428.737 78.2405 427.076 76.5651 425.031 76.5651H419.621V84.0615Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M438 92.4833L437.976 92.5475H437.907H436.523H436.377L436.43 92.4111L443.152 75.2L443.176 75.1363H443.245H444.628H444.697L444.721 75.2001L451.418 92.4113L451.471 92.5475H451.325H449.941H449.872L449.848 92.4834L448.192 88.1708H439.656L438 92.4833ZM440.227 86.7415H447.645L443.936 77.1123L440.227 86.7415Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M468.253 91.1179H468.353V91.2179V92.4471V92.5471H468.253H458.789H458.689V92.4471V75.236V75.136H458.789H460.099H460.199V75.236V91.1179H468.253Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M485.873 91.1179H485.973V91.2179V92.4471V92.5471H485.873H475.914H475.814V92.4471V75.236V75.136H475.914H485.749H485.849V75.236V76.4652V76.5652H485.749H477.324V83.0535H485.131H485.231V83.1535V84.3822V84.4822H485.131H477.324V91.1179H485.873Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M492.895 88.6915L492.87 88.6149L492.94 88.5742L494.077 87.9104L494.188 87.8456L494.223 87.9692C494.514 88.9817 495.088 89.8284 495.936 90.4226C496.784 91.0172 497.912 91.3634 499.316 91.3634C500.746 91.3634 501.808 90.9988 502.51 90.4038C503.212 89.8101 503.565 88.9786 503.565 88.021C503.565 87.0262 503.129 86.3415 502.363 85.7976C501.589 85.2486 500.486 84.8469 499.162 84.4287L499.162 84.4285C499.133 84.4193 499.105 84.4101 499.076 84.4009C497.666 83.9453 496.313 83.5081 495.309 82.8173C494.794 82.4635 494.368 82.041 494.07 81.5122C493.773 80.983 493.607 80.3526 493.607 79.5876C493.607 78.1443 494.194 76.9608 495.159 76.1397C496.122 75.3197 497.456 74.865 498.946 74.865C501.832 74.865 503.744 76.5162 504.598 78.5406L504.633 78.6235L504.554 78.667L503.442 79.2818L503.344 79.3359L503.301 79.2327C502.985 78.4704 502.5 77.7425 501.795 77.2054C501.09 76.6692 500.161 76.319 498.946 76.319C497.766 76.319 496.815 76.6637 496.16 77.235C495.506 77.8054 495.141 78.6075 495.141 79.5386C495.141 80.0402 495.248 80.4502 495.441 80.7965C495.635 81.1433 495.92 81.4316 496.284 81.6848C497.018 82.1942 498.059 82.5526 499.298 82.9592L499.298 82.9592C500.827 83.4624 502.275 83.9585 503.34 84.7063C504.412 85.4593 505.1 86.4713 505.1 87.9968C505.1 89.4513 504.525 90.6602 503.51 91.5038C502.496 92.3458 501.051 92.8178 499.316 92.8178C496.044 92.8178 493.702 91.1739 492.895 88.6915Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M175.656 121.99L175.631 122.055H175.562H174.178H174.032L174.085 121.918L180.807 104.707L180.832 104.643H180.9H182.284H182.352L182.377 104.707L189.073 121.918L189.126 122.055H188.98H187.597H187.528L187.503 121.99L185.848 117.678H177.311L175.656 121.99ZM177.883 116.249H185.301L181.592 106.619L177.883 116.249Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M196.444 122.054H196.344V121.954V104.743V104.643H196.444H203.338C205.913 104.643 207.985 106.728 207.985 109.267C207.985 110.9 207.154 112.26 205.889 113.015C207.553 113.734 208.726 115.32 208.726 117.259C208.726 119.92 206.58 122.054 203.906 122.054H196.444ZM207.216 117.259C207.216 115.394 205.728 113.892 203.906 113.892H197.854V120.625H203.906C205.728 120.625 207.216 119.123 207.216 117.259ZM197.854 106.073V112.462H203.338C205.06 112.462 206.475 111.033 206.475 109.267C206.475 107.501 205.06 106.073 203.338 106.073H197.854Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M232.225 113.349C232.225 109.175 228.933 105.827 224.714 105.827C220.495 105.827 217.203 109.175 217.203 113.349C217.203 117.524 220.495 120.871 224.714 120.871C228.933 120.871 232.225 117.524 232.225 113.349ZM215.693 113.349C215.693 108.376 219.668 104.373 224.714 104.373C229.761 104.373 233.735 108.376 233.735 113.349C233.735 118.322 229.761 122.325 224.714 122.325C219.668 122.325 215.693 118.322 215.693 113.349Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M257.42 108.578L257.47 108.664L257.385 108.714L256.223 109.402L256.133 109.456L256.084 109.363C254.966 107.235 252.58 105.827 249.896 105.827C245.406 105.827 242.311 109.174 242.311 113.349C242.311 117.524 245.405 120.871 249.994 120.871C254.101 120.871 256.588 118.383 256.903 115.269H249.673H249.573V115.169V113.939V113.839H249.673H258.347H258.447V113.939V114.603C258.447 118.817 255.211 122.325 249.994 122.325C244.577 122.325 240.801 118.322 240.801 113.349C240.801 108.377 244.576 104.373 249.896 104.373C253.143 104.373 255.969 106.063 257.42 108.578Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M265.658 121.99L265.633 122.055H265.565H264.181H264.034L264.087 121.918L270.809 104.707L270.834 104.643H270.902H272.286H272.354L272.379 104.707L279.076 121.918L279.129 122.055H278.982H277.599H277.53L277.505 121.99L275.85 117.678H267.313L265.658 121.99ZM267.885 116.249H275.303L271.594 106.619L267.885 116.249Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M286.446 122.054H286.346V121.954V104.744V104.644H286.446H292.945C297.777 104.644 301.2 108.555 301.2 113.349C301.2 118.142 297.777 122.054 292.945 122.054H286.446ZM299.714 113.349C299.714 109.313 296.958 106.073 292.945 106.073H287.856V120.625H292.945C296.958 120.625 299.714 117.385 299.714 113.349Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M324.797 113.349C324.797 109.175 321.505 105.827 317.286 105.827C313.067 105.827 309.776 109.175 309.776 113.349C309.776 117.524 313.067 120.871 317.286 120.871C321.505 120.871 324.797 117.524 324.797 113.349ZM308.266 113.349C308.266 108.376 312.24 104.373 317.286 104.373C322.333 104.373 326.307 108.376 326.307 113.349C326.307 118.322 322.333 122.325 317.286 122.325C312.24 122.325 308.266 118.322 308.266 113.349Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M332.711 118.199L332.686 118.122L332.756 118.082L333.892 117.418L334.004 117.353L334.039 117.476C334.33 118.489 334.904 119.336 335.752 119.93C336.6 120.525 337.728 120.871 339.132 120.871C340.562 120.871 341.623 120.506 342.326 119.911C343.027 119.317 343.381 118.486 343.381 117.528C343.381 116.533 342.944 115.849 342.178 115.305C341.405 114.756 340.302 114.354 338.978 113.936L338.978 113.936C338.949 113.927 338.92 113.917 338.892 113.908C337.482 113.453 336.129 113.015 335.125 112.325C334.61 111.971 334.183 111.548 333.886 111.02C333.588 110.49 333.422 109.86 333.422 109.095C333.422 107.652 334.01 106.468 334.974 105.647C335.937 104.827 337.271 104.372 338.761 104.372C341.648 104.372 343.559 106.024 344.414 108.048L344.449 108.131L344.37 108.174L343.257 108.789L343.16 108.843L343.117 108.74C342.801 107.978 342.316 107.25 341.61 106.713C340.906 106.177 339.976 105.826 338.761 105.826C337.582 105.826 336.631 106.171 335.976 106.742C335.322 107.313 334.957 108.115 334.957 109.046C334.957 109.548 335.063 109.958 335.257 110.304C335.451 110.651 335.736 110.939 336.1 111.192C336.833 111.702 337.874 112.06 339.114 112.466L339.114 112.467C340.643 112.97 342.091 113.466 343.155 114.214C344.227 114.967 344.915 115.979 344.915 117.504C344.915 118.958 344.341 120.167 343.326 121.011C342.312 121.853 340.867 122.325 339.132 122.325C335.859 122.325 333.517 120.681 332.711 118.199Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M111.904 41.8454L99.4913 54.1958L114.872 69.5L69.8485 114.3L24.8245 69.5L69.8485 24.7008L87.0574 41.8239L99.4696 29.4739L69.8485 -2.68256e-06L0 69.5L69.8485 139L139.697 69.5L111.904 41.8454Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M111.903 41.8456L99.4695 29.4741L111.903 17.1021L124.337 29.4741L111.903 41.8456Z",
    fill: "#F9303E"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 1
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 88,
  columnNumber: 19
}, undefined);

let logo2 = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
  width: "351",
  height: "509",
  viewBox: "0 0 351 509",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M228.395 274.332L173.889 328.146L241.43 394.831L43.7212 590.035L-153.99 394.831L43.7212 199.628L119.289 274.238L173.794 220.426L43.7212 92L-263 394.831L43.7212 697.661L350.44 394.831L228.395 274.332Z",
    fill: "#666666",
    fillOpacity: "0.1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M228.409 274.359L173.807 220.453L228.409 166.545L283.009 220.453L228.409 274.359Z",
    fill: "#666666",
    fillOpacity: "0.1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M146.348 8.63604V17.7988H145.638V13.4139H140.181V17.7988H139.47V8.63604H140.181V12.7592H145.638V8.63604H146.348Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M156.512 14.8144L154.42 9.48691L152.329 14.8144H156.512ZM156.767 15.469H152.06L151.149 17.7991H150.398L154.045 8.63605H154.796L158.429 17.7991H157.678L156.767 15.469Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M169.357 8.63604V17.7988H168.727L163.189 9.9188V17.7988H162.479V8.63604H163.095L168.646 16.5161V8.63604H169.357Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M183.301 13.8853C183.301 16.0973 181.572 17.9429 178.769 17.9429C175.86 17.9429 173.835 15.8356 173.835 13.2174C173.835 10.5998 175.86 8.492 178.716 8.492C180.459 8.492 181.974 9.38234 182.751 10.7043L182.121 11.0707C181.504 9.91879 180.191 9.15958 178.716 9.15958C176.249 9.15958 174.546 10.9661 174.546 13.2174C174.546 15.469 176.249 17.2753 178.769 17.2753C181.049 17.2753 182.43 15.9009 182.577 14.1863H178.595V13.5316H183.301V13.8853Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M199.445 17.7988L194.739 13.2828V17.7988H194.028V8.63604H194.739V12.9033L199.311 8.63604H200.263L195.516 13.0866L200.397 17.7988H199.445Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M203.843 14.7359V8.63604H204.554V14.7359C204.554 16.228 205.505 17.2753 207.275 17.2753C209.058 17.2753 210.01 16.228 210.01 14.7359V8.63604H210.721V14.7359C210.721 16.673 209.34 17.9429 207.275 17.9429C205.211 17.9429 203.843 16.673 203.843 14.7359Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M215.066 13.2174C215.066 10.5995 217.09 8.492 219.946 8.492C221.676 8.492 223.191 9.35602 223.968 10.6909L223.338 11.0443C222.721 9.91879 221.421 9.15958 219.946 9.15958C217.479 9.15958 215.776 10.9659 215.776 13.2174C215.776 15.469 217.479 17.2753 219.946 17.2753C221.434 17.2753 222.748 16.5029 223.365 15.351L223.995 15.7045C223.231 17.0528 221.703 17.9429 219.946 17.9429C217.09 17.9429 215.066 15.8353 215.066 13.2174Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M235.231 8.63604V17.7988H234.52V13.4139H229.064V17.7988H228.353V8.63604H229.064V12.7592H234.52V8.63604H235.231Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M245.65 17.1444V17.7988H240.247V8.63604H245.583V9.29046H240.957V12.8509H245.248V13.5055H240.957V17.1444H245.65Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M256.953 8.63604V17.7988H256.323L250.785 9.9188V17.7988H250.075V8.63604H250.692L256.242 16.5161V8.63604H256.953Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M138.907 31.4919L139.524 31.1385C139.845 32.2382 140.797 32.9843 142.339 32.9843C143.908 32.9843 144.699 32.1987 144.699 31.1517C144.699 30.052 143.707 29.6332 142.272 29.1882C140.703 28.6907 139.295 28.2588 139.295 26.6619C139.295 25.1564 140.542 24.201 142.138 24.201C143.68 24.201 144.699 25.0648 145.155 26.1252L144.551 26.4523C144.203 25.6278 143.479 24.8686 142.138 24.8686C140.837 24.8686 140.02 25.6146 140.02 26.6356C140.02 27.7351 140.972 28.0756 142.312 28.5074C143.975 29.0441 145.423 29.5545 145.423 31.1385C145.423 32.6569 144.203 33.6516 142.339 33.6516C140.583 33.6516 139.336 32.7881 138.907 31.4919Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M155.184 27.1855C155.184 25.9156 154.259 24.9994 152.972 24.9994H150.491V29.3583H152.972C154.259 29.3583 155.184 28.4421 155.184 27.1855ZM155.895 27.1855C155.895 28.7955 154.661 30.013 152.972 30.013H150.491V33.5078H149.781V24.345H152.972C154.661 24.345 155.895 25.5622 155.895 27.1855Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M168.7 28.9262C168.7 26.6746 166.89 24.8683 164.57 24.8683C162.251 24.8683 160.441 26.6746 160.441 28.9262C160.441 31.1778 162.251 32.984 164.57 32.984C166.89 32.984 168.7 31.1778 168.7 28.9262ZM159.73 28.9262C159.73 26.3083 161.862 24.2007 164.57 24.2007C167.278 24.2007 169.41 26.3083 169.41 28.9262C169.41 31.5441 167.278 33.6516 164.57 33.6516C161.862 33.6516 159.73 31.5441 159.73 28.9262Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M174.6 29.0964H177.59C178.73 29.0964 179.655 28.1802 179.655 27.0544C179.655 25.9155 178.73 24.9993 177.59 24.9993H174.6V29.0964ZM177.563 29.7508H174.6V33.5077H173.89V24.3449H177.59C179.119 24.3449 180.365 25.5621 180.365 27.0544C180.365 28.298 179.494 29.3453 178.301 29.6594L180.634 33.5077H179.816L177.563 29.7508Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M189.925 32.8534V33.5078H184.79V24.345H185.501V32.8534H189.925Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M199.485 32.8534V33.5078H194.082V24.345H199.418V24.9994H194.793V28.5598H199.083V29.2145H194.793V32.8534H199.485Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M211.163 28.9263C211.163 26.7532 209.648 24.9993 207.436 24.9993H204.62V32.8533H207.436C209.648 32.8533 211.163 31.0992 211.163 28.9263ZM211.86 28.9263C211.86 31.4526 210.024 33.5077 207.436 33.5077H203.91V24.3449H207.436C210.024 24.3449 211.86 26.3998 211.86 28.9263Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M221.743 32.8534V33.5078H216.339V24.345H221.676V24.9994H217.05V28.5598H221.341V29.2145H217.05V32.8534H221.743Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M226.878 29.0964H229.868C231.008 29.0964 231.933 28.1802 231.933 27.0544C231.933 25.9155 231.008 24.9993 229.868 24.9993H226.878V29.0964ZM229.841 29.7508H226.878V33.5077H226.167V24.3449H229.868C231.397 24.3449 232.643 25.5621 232.643 27.0544C232.643 28.298 231.772 29.3453 230.579 29.6594L232.912 33.5077H232.094L229.841 29.7508Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M247.165 31.5705L245.449 29.7642L245.368 29.6855C245.02 29.9604 244.872 30.3399 244.872 30.7065C244.872 31.3216 245.274 31.7799 246.226 31.7799C246.575 31.7799 246.883 31.7145 247.165 31.5705V31.5705ZM249.31 33.8481L248.479 32.9712C247.822 33.416 247.017 33.6909 246.052 33.6909C244.121 33.6909 242.7 32.657 242.7 30.929C242.7 29.8817 243.236 28.9002 244.202 28.2979C243.96 27.8921 243.813 27.4339 243.813 26.8448C243.813 25.3003 245.033 24.1616 246.83 24.1616C248.184 24.1616 249.337 24.816 249.913 26.1643L248.077 27.1985C247.835 26.5833 247.46 26.2036 246.857 26.2036C246.32 26.2036 245.958 26.5309 245.958 26.9759C245.958 27.4863 246.28 27.8268 246.696 28.2716L248.425 30.1437C248.613 29.725 248.76 29.2404 248.868 28.7037L250.664 29.6986C250.49 30.3399 250.208 31.0206 249.806 31.6227L250.986 32.9056L249.31 33.8481Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M140.18 44.8053H143.17C144.31 44.8053 145.235 43.8889 145.235 42.7631C145.235 41.6244 144.31 40.7079 143.17 40.7079H140.18V44.8053ZM143.143 45.4595H140.18V49.2166H139.47V40.0538H143.17C144.699 40.0538 145.946 41.271 145.946 42.7631C145.946 44.0066 145.074 45.0537 143.881 45.3681L146.214 49.2166H145.396L143.143 45.4595Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M158.804 44.635C158.804 42.3837 156.994 40.5772 154.675 40.5772C152.355 40.5772 150.545 42.3837 150.545 44.635C150.545 46.8866 152.355 48.6929 154.675 48.6929C156.994 48.6929 158.804 46.8866 158.804 44.635ZM149.834 44.635C149.834 42.0171 151.966 39.9096 154.675 39.9096C157.383 39.9096 159.515 42.0171 159.515 44.635C159.515 47.2532 157.383 49.3607 154.675 49.3607C151.966 49.3607 149.834 47.2532 149.834 44.635Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 165,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M171.247 44.635C171.247 42.4622 169.732 40.7081 167.52 40.7081H164.704V48.562H167.52C169.732 48.562 171.247 46.8081 171.247 44.635ZM171.945 44.635C171.945 47.1615 170.108 49.2164 167.52 49.2164H163.994V40.0539H167.52C170.108 40.0539 171.945 42.1085 171.945 44.635Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M177.134 44.8053H180.123C181.263 44.8053 182.188 43.8889 182.188 42.7631C182.188 41.6244 181.263 40.7079 180.123 40.7079H177.134V44.8053ZM180.097 45.4595H177.134V49.2166H176.423V40.0538H180.123C181.652 40.0538 182.899 41.271 182.899 42.7631C182.899 44.0066 182.027 45.0537 180.834 45.3681L183.167 49.2166H182.349L180.097 45.4595Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M188.035 49.2167H187.324V40.0539H188.035V49.2167Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M201.978 45.3029C201.978 47.515 200.249 49.3607 197.447 49.3607C194.537 49.3607 192.513 47.2532 192.513 44.635C192.513 42.0171 194.537 39.9096 197.393 39.9096C199.136 39.9096 200.651 40.8 201.429 42.1219L200.799 42.4885C200.182 41.3367 198.868 40.5772 197.393 40.5772C194.926 40.5772 193.223 42.3837 193.223 44.635C193.223 46.8866 194.926 48.6929 197.447 48.6929C199.726 48.6929 201.107 47.3185 201.254 45.6039H197.272V44.9492H201.978V45.3029Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M206.243 46.1534V40.0538H206.953V46.1534C206.953 47.6457 207.905 48.6928 209.675 48.6928C211.458 48.6928 212.41 47.6457 212.41 46.1534V40.0538H213.121V46.1534C213.121 48.091 211.74 49.3606 209.675 49.3606C207.61 49.3606 206.243 48.091 206.243 46.1534Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 170,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M223.405 48.5621V49.2166H218.002V40.0538H223.338V40.7082H218.713V44.2688H223.003V44.923H218.713V48.5621H223.405Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M233.233 48.5621V49.2166H227.24V48.5621L232.308 40.7082H227.374V40.0538H233.099V40.7082L228.031 48.5621H233.233Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 172,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M252.273 49.2166H251.562V41.0748L248.089 46.7032H247.969L244.496 41.0748V49.2166H243.786V40.0538H244.671L248.023 45.4729L251.374 40.0538H252.273V49.2166Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M265.721 44.635C265.721 42.3837 263.911 40.5772 261.592 40.5772C259.272 40.5772 257.462 42.3837 257.462 44.635C257.462 46.8866 259.272 48.6929 261.592 48.6929C263.911 48.6929 265.721 46.8866 265.721 44.635ZM256.751 44.635C256.751 42.0171 258.883 39.9096 261.592 39.9096C264.3 39.9096 266.432 42.0171 266.432 44.635C266.432 47.2532 264.3 49.3607 261.592 49.3607C258.883 49.3607 256.751 47.2532 256.751 44.635Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 174,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M271.621 44.8053H274.611C275.751 44.8053 276.676 43.8889 276.676 42.7631C276.676 41.6244 275.751 40.7079 274.611 40.7079H271.621V44.8053ZM274.584 45.4595H271.621V49.2166H270.911V40.0538H274.611C276.139 40.0538 277.386 41.271 277.386 42.7631C277.386 44.0066 276.515 45.0537 275.322 45.3681L277.655 49.2166H276.837L274.584 45.4595Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M286.96 46.2322L284.868 40.9045L282.777 46.2322H286.96ZM287.215 46.8866H282.509L281.597 49.2167H280.846L284.493 40.0539H285.244L288.877 49.2167H288.127L287.215 46.8866Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M298.062 48.5621V49.2166H292.927V40.0538H293.637V48.5621H298.062Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M307.622 48.5621V49.2166H302.219V40.0538H307.555V40.7082H302.929V44.2688H307.22V44.923H302.929V48.5621H307.622Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M311.484 47.2007L312.101 46.8473C312.423 47.9467 313.374 48.6928 314.916 48.6928C316.485 48.6928 317.276 47.9077 317.276 46.8602C317.276 45.7607 316.284 45.3417 314.849 44.8969C313.281 44.3995 311.873 43.9674 311.873 42.3704C311.873 40.8649 313.12 39.9095 314.715 39.9095C316.257 39.9095 317.276 40.7735 317.732 41.8337L317.129 42.1611C316.78 41.3365 316.056 40.5771 314.715 40.5771C313.415 40.5771 312.597 41.3234 312.597 42.3444C312.597 43.4441 313.549 43.7843 314.89 44.216C316.552 44.7529 318 45.2635 318 46.8473C318 48.3657 316.78 49.3606 314.916 49.3606C313.16 49.3606 311.913 48.4966 311.484 47.2007Z",
    fill: "#666666"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M144.619 61.9411L142.527 56.6134L140.436 61.9411H144.619ZM144.874 62.5955H140.167L139.256 64.9255H138.505L142.152 55.7628H142.903L146.536 64.9255H145.785L144.874 62.5955Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M156.485 62.4255C156.485 61.4042 155.653 60.5797 154.634 60.5797H151.296V64.271H154.634C155.653 64.271 156.485 63.4465 156.485 62.4255ZM151.296 56.417V59.925H154.326C155.291 59.925 156.083 59.1397 156.083 58.1712C156.083 57.2023 155.291 56.417 154.326 56.417H151.296ZM157.195 62.4255C157.195 63.8128 156.056 64.9254 154.634 64.9254H150.585V55.7626H154.326C155.694 55.7626 156.793 56.8489 156.793 58.1712C156.793 59.061 156.311 59.7942 155.586 60.1739C156.525 60.5273 157.195 61.3779 157.195 62.4255Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M170.054 60.3439C170.054 58.0926 168.244 56.2861 165.924 56.2861C163.605 56.2861 161.795 58.0926 161.795 60.3439C161.795 62.5955 163.605 64.4018 165.924 64.4018C168.244 64.4018 170.054 62.5955 170.054 60.3439ZM161.084 60.3439C161.084 57.726 163.216 55.6185 165.924 55.6185C168.632 55.6185 170.764 57.726 170.764 60.3439C170.764 62.9621 168.632 65.0696 165.924 65.0696C163.216 65.0696 161.084 62.9621 161.084 60.3439Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M184.172 61.0115C184.172 63.2238 182.443 65.0696 179.64 65.0696C176.731 65.0696 174.707 62.962 174.707 60.3439C174.707 57.726 176.731 55.6184 179.587 55.6184C181.33 55.6184 182.845 56.5088 183.623 57.8308L182.992 58.1971C182.376 57.0455 181.062 56.286 179.587 56.286C177.12 56.286 175.417 58.0926 175.417 60.3439C175.417 62.5955 177.12 64.4018 179.64 64.4018C181.92 64.4018 183.301 63.0274 183.448 61.3127H179.466V60.6581H184.172V61.0115Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M193.451 61.9411L191.36 56.6134L189.268 61.9411H193.451ZM193.706 62.5955H189L188.088 64.9255H187.337L190.984 55.7628H191.735L195.368 64.9255H194.618L193.706 62.5955Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M206.672 60.3439C206.672 58.1711 205.157 56.4169 202.945 56.4169H200.129V64.2709H202.945C205.157 64.2709 206.672 62.517 206.672 60.3439ZM207.369 60.3439C207.369 62.8704 205.532 64.9253 202.945 64.9253H199.418V55.7628H202.945C205.532 55.7628 207.369 57.8174 207.369 60.3439Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M220.281 60.3439C220.281 58.0926 218.471 56.2861 216.152 56.2861C213.832 56.2861 212.022 58.0926 212.022 60.3439C212.022 62.5955 213.832 64.4018 216.152 64.4018C218.471 64.4018 220.281 62.5955 220.281 60.3439ZM211.312 60.3439C211.312 57.726 213.443 55.6185 216.152 55.6185C218.86 55.6185 220.992 57.726 220.992 60.3439C220.992 62.9621 218.86 65.0696 216.152 65.0696C213.443 65.0696 211.312 62.9621 211.312 60.3439Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M224.572 62.9095L225.189 62.5561C225.511 63.6556 226.463 64.4016 228.005 64.4016C229.573 64.4016 230.364 63.6163 230.364 62.569C230.364 61.4693 229.372 61.0506 227.937 60.6058C226.369 60.1083 224.961 59.6762 224.961 58.0793C224.961 56.5738 226.208 55.6184 227.803 55.6184C229.345 55.6184 230.364 56.4824 230.82 57.5426L230.217 57.8699C229.868 57.0454 229.144 56.2859 227.803 56.2859C226.503 56.2859 225.685 57.0322 225.685 58.0532C225.685 59.1529 226.637 59.4932 227.978 59.9248C229.64 60.4617 231.088 60.9724 231.088 62.5561C231.088 64.0743 229.868 65.0695 228.005 65.0695C226.248 65.0695 225.001 64.2054 224.572 62.9095Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M104.716 22.2774L97.9814 28.8525L106.327 37L81.898 60.8502L57.4691 37L81.898 13.1501L91.2351 22.2659L97.9697 15.6912L81.898 -1.38392e-06L44 37L81.898 74L119.796 37L104.716 22.2774Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 4
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M104.716 22.2775L97.9692 15.6912L104.716 9.10467L111.462 15.6912L104.716 22.2775Z",
    fill: "#F9303E"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 4
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 141,
  columnNumber: 13
}, undefined);

const logo4 = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
  width: "276",
  height: "76",
  viewBox: "0 0 276 76",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M102.722 8.76936H102.822V8.86936V18.2798V18.3798H102.722H102.009H101.909V18.2798V13.8763H96.6317V18.2798V18.3798H96.5317H95.8184H95.7184V18.2798V8.86936V8.76936H95.8184H96.5317H96.6317V8.86936V13.004H101.909V8.86936V8.76936H102.009H102.722Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 194,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M107.633 18.3157L107.609 18.38H107.54H106.786H106.64L106.693 18.2438L110.353 8.83311L110.378 8.76936H110.446H111.2H111.268L111.293 8.83322L114.94 18.2439L114.992 18.38H114.847H114.093H114.024L114 18.3157L113.109 15.987H108.523L107.633 18.3157ZM108.869 15.1146H112.777L110.823 10.0224L108.869 15.1146Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 195,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M125.814 8.76936H125.914V8.86936V18.2798V18.3798H125.814H125.182H125.129L125.1 18.3364L119.724 10.509V18.2798V18.3798H119.624H118.911H118.811V18.2798V8.86936V8.76936H118.911H119.53H119.583L119.613 8.81266L125.001 16.6407V8.86936V8.76936H125.101H125.814Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M139.345 10.9437L139.394 11.0291L139.309 11.0795L138.677 11.4557L138.586 11.5097L138.537 11.4162C137.937 10.2688 136.654 9.50705 135.208 9.50705C132.789 9.50705 131.123 11.3156 131.123 13.5746C131.123 15.833 132.788 17.6421 135.262 17.6421C136.384 17.6421 137.278 17.2961 137.909 16.7412C138.512 16.2097 138.88 15.4822 138.973 14.6696H135.087H134.987V14.5696V13.8972V13.7972H135.087H139.81H139.91V13.8972V14.2604C139.91 16.5909 138.126 18.5277 135.262 18.5277C132.286 18.5277 130.21 16.3183 130.21 13.5746C130.21 10.8321 132.285 8.62143 135.208 8.62143C136.992 8.62143 138.546 9.55431 139.345 10.9437Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M156.012 18.38H155.971L155.942 18.3514L151.389 13.8803V18.28V18.38H151.289H150.576H150.476V18.28V8.8696V8.7696H150.576H151.289H151.389V8.8696V13.0184L155.808 8.79729L155.837 8.7696H155.877H156.833H157.081L156.902 8.94176L152.213 13.4414L157.038 18.2089L157.211 18.38H156.967H156.012Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 198,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M160.326 8.86937V8.76937H160.426H161.14H161.24V8.86937V15.1341C161.24 15.8794 161.472 16.504 161.91 16.942C162.348 17.3798 163.003 17.6421 163.871 17.6421C164.746 17.6421 165.404 17.3797 165.844 16.9419C166.284 16.5039 166.516 15.8794 166.516 15.1341V8.86937V8.76937H166.616H167.33H167.43V8.86937V15.1341C167.43 16.153 167.074 17.0037 166.446 17.5995C165.819 18.1948 164.928 18.5277 163.871 18.5277C162.814 18.5277 161.927 18.1947 161.303 17.5993C160.678 17.0034 160.326 16.1527 160.326 15.1341V8.86937Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M180.712 10.9303L180.761 11.0169L180.675 11.0665L180.042 11.4295L179.953 11.4807L179.904 11.39C179.304 10.2687 178.034 9.50705 176.588 9.50705C174.169 9.50705 172.503 11.3153 172.503 13.5746C172.503 15.8338 174.169 17.6421 176.588 17.6421C178.047 17.6421 179.33 16.8673 179.931 15.7195L179.979 15.6274L180.069 15.6791L180.702 16.0421L180.787 16.0911L180.74 16.1773C179.954 17.5954 178.386 18.5277 176.588 18.5277C173.665 18.5277 171.59 16.3173 171.59 13.5746C171.59 10.8319 173.665 8.62143 176.588 8.62143C178.358 8.62143 179.913 9.52656 180.712 10.9303Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 200,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M191.929 8.76936H192.029V8.86936V18.2798V18.3798H191.929H191.216H191.116V18.2798V13.8763H185.839V18.2798V18.3798H185.739H185.026H184.926V18.2798V8.86936V8.76936H185.026H185.739H185.839V8.86936V13.004H191.116V8.86936V8.76936H191.216H191.929Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 201,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M202.385 17.5077H202.485V17.6077V18.2798V18.3798H202.385H196.962H196.862V18.2798V8.86936V8.76936H196.962H202.318H202.418V8.86936V9.54146V9.64146H202.318H197.776V13.0981H201.982H202.082V13.1981V13.8704V13.9704H201.982H197.776V17.5077H202.385Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M213.73 8.76936H213.83V8.86936V18.2798V18.3798H213.73H213.097H213.045L213.015 18.3364L207.64 10.509V18.2798V18.3798H207.54H206.827H206.727V18.2798V8.86936V8.76936H206.827H207.446H207.498L207.528 8.81266L212.917 16.6407V8.86936V8.76936H213.017H213.73Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 203,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M95.1583 32.3737L95.1336 32.2973L95.2028 32.2567L95.822 31.8937L95.9332 31.8285L95.9687 31.9525C96.1244 32.4972 96.4314 32.9511 96.8838 33.2696C97.3366 33.5883 97.9412 33.7757 98.6983 33.7757C99.4693 33.7757 100.036 33.5782 100.408 33.2617C100.779 32.9466 100.967 32.5051 100.967 31.9935C100.967 31.4663 100.738 31.1048 100.331 30.8145C99.9163 30.5191 99.322 30.3013 98.6006 30.0723L98.6 30.0721C98.5829 30.0665 98.5659 30.061 98.5488 30.0555C97.7844 29.8075 97.0424 29.5668 96.4901 29.1854C96.2056 28.9891 95.9679 28.7533 95.8017 28.4568C95.6353 28.1599 95.5435 27.8075 95.5435 27.3824C95.5435 26.5802 95.8691 25.9205 96.4045 25.4629C96.9384 25.0064 97.6758 24.755 98.4963 24.755C100.089 24.755 101.145 25.6706 101.616 26.7925L101.651 26.8752L101.573 26.9187L100.967 27.2546L100.869 27.309L100.826 27.2053C100.656 26.794 100.397 26.4034 100.02 26.1158C99.645 25.8291 99.1485 25.6406 98.4963 25.6406C97.8631 25.6406 97.3565 25.8263 97.0098 26.13C96.664 26.4329 96.4704 26.8588 96.4704 27.3554C96.4704 27.6229 96.5268 27.8394 96.628 28.0211C96.7295 28.2033 96.8792 28.3561 97.0735 28.4917C97.4662 28.7657 98.0262 28.9599 98.7028 29.1829L98.7028 29.1829C99.5339 29.4574 100.329 29.7304 100.916 30.1438C101.509 30.5625 101.893 31.1287 101.893 31.98C101.893 32.7881 101.575 33.462 101.011 33.9321C100.449 34.4008 99.6509 34.661 98.6983 34.661C96.8996 34.661 95.6043 33.753 95.1583 32.3737Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 204,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M109.37 30.924H106.98V34.4133V34.5133H106.88H106.167H106.067V34.4133V25.0029V24.9029H106.167H109.37C111.12 24.9029 112.403 26.1977 112.403 27.9201C112.403 29.6293 111.12 30.924 109.37 30.924ZM111.49 27.9201C111.49 26.6701 110.605 25.775 109.37 25.775H106.98V30.0517H109.37C110.606 30.0517 111.49 29.1562 111.49 27.9201Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 205,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M125.055 29.7081C125.055 27.45 123.282 25.6406 121.01 25.6406C118.738 25.6406 116.966 27.45 116.966 29.7081C116.966 31.9663 118.738 33.7757 121.01 33.7757C123.282 33.7757 125.055 31.9663 125.055 29.7081ZM116.052 29.7081C116.052 26.9645 118.237 24.755 121.01 24.755C123.784 24.755 125.968 26.9645 125.968 29.7081C125.968 32.4517 123.784 34.6613 121.01 34.6613C118.237 34.6613 116.052 32.4517 116.052 29.7081Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M131.176 30.6549V34.4133V34.5133H131.076H130.363H130.263V34.4133V25.0029V24.9029H130.363H134.077C135.667 24.9029 136.963 26.1977 136.963 27.7857C136.963 29.0649 136.116 30.1475 134.942 30.5208L137.218 34.3624L137.307 34.5133H137.132H136.311H136.254L136.225 34.4639L133.993 30.6549H131.176ZM131.176 29.7828H134.077C135.165 29.7828 136.05 28.8878 136.05 27.7857C136.05 26.6696 135.164 25.775 134.077 25.775H131.176V29.7828Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 207,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M146.458 33.6412H146.558V33.7412V34.4133V34.5133H146.458H141.304H141.204V34.4133V25.0029V24.9029H141.304H142.017H142.117V25.0029V33.6412H146.458Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M156.052 33.6412H156.152V33.7412V34.4133V34.5133H156.052H150.629H150.529V34.4133V25.0029V24.9029H150.629H155.985H156.085V25.0029V25.675V25.775H155.985H151.443V29.2316H155.649H155.749V29.3316V30.004V30.104H155.649H151.443V33.6412H156.052Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 209,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M160.493 34.5133H160.393V34.4133V25.0029V24.9029H160.493H164.032C166.692 24.9029 168.573 27.0659 168.573 29.7081C168.573 32.3501 166.692 34.5133 164.032 34.5133H160.493ZM167.673 29.7081C167.673 27.5215 166.188 25.775 164.032 25.775H161.306V33.6412H164.032C166.188 33.6412 167.673 31.8944 167.673 29.7081Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 210,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M178.391 33.6412H178.491V33.7412V34.4133V34.5133H178.391H172.968H172.868V34.4133V25.0029V24.9029H172.968H178.324H178.424V25.0029V25.675V25.775H178.324H173.782V29.2316H177.988H178.088V29.3316V30.004V30.104H177.988H173.782V33.6412H178.391Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 211,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M183.646 30.6549V34.4133V34.5133H183.546H182.833H182.733V34.4133V25.0029V24.9029H182.833H186.546C188.136 24.9029 189.432 26.1977 189.432 27.7857C189.432 29.0649 188.586 30.1475 187.411 30.5208L189.687 34.3624L189.777 34.5133H189.601H188.78H188.723L188.694 34.4639L186.462 30.6549H183.646ZM183.646 29.7828H186.546C187.634 29.7828 188.519 28.8878 188.519 27.7857C188.519 26.6696 187.634 25.775 186.546 25.775H183.646V29.7828Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M203.906 32.4237L202.184 30.5686L202.103 30.4878C201.753 30.7701 201.605 31.1599 201.605 31.5364C201.605 32.1682 202.009 32.6388 202.964 32.6388C203.314 32.6388 203.624 32.5717 203.906 32.4237ZM206.059 34.7629L205.225 33.8623C204.565 34.3191 203.758 34.6015 202.789 34.6015C200.852 34.6015 199.425 33.5396 199.425 31.7649C199.425 30.6893 199.963 29.6813 200.932 29.0627C200.69 28.6459 200.542 28.1753 200.542 27.5703C200.542 25.9841 201.767 24.8146 203.57 24.8146C204.929 24.8146 206.086 25.4867 206.665 26.8714L204.821 27.9335C204.579 27.3017 204.202 26.9117 203.597 26.9117C203.059 26.9117 202.695 27.2479 202.695 27.705C202.695 28.225 203.013 28.5733 203.425 29.0249L203.435 29.0357L205.171 30.9584C205.359 30.5283 205.508 30.0307 205.615 29.4795L207.419 30.5013C207.243 31.1599 206.961 31.859 206.557 32.4773L207.741 33.795L206.059 34.7629Z",
    fill: "white"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 213,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M203.906 32.4237L202.184 30.5686L202.103 30.4878C201.753 30.7701 201.605 31.1599 201.605 31.5364C201.605 32.1682 202.009 32.6388 202.964 32.6388C203.314 32.6388 203.624 32.5717 203.906 32.4237ZM206.059 34.7629L205.225 33.8623C204.565 34.3191 203.758 34.6015 202.789 34.6015C200.852 34.6015 199.425 33.5396 199.425 31.7649C199.425 30.6893 199.963 29.6813 200.932 29.0627C200.69 28.6459 200.542 28.1753 200.542 27.5703C200.542 25.9841 201.767 24.8146 203.57 24.8146C204.929 24.8146 206.086 25.4867 206.665 26.8714L204.821 27.9335C204.579 27.3017 204.202 26.9117 203.597 26.9117C203.059 26.9117 202.695 27.2479 202.695 27.705C202.695 28.225 203.013 28.5733 203.425 29.0249L203.435 29.0357L205.171 30.9584C205.359 30.5283 205.508 30.0307 205.615 29.4795L207.419 30.5013C207.243 31.1599 206.961 31.859 206.557 32.4773L207.741 33.795L206.059 34.7629Z",
    stroke: "white"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 214,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M96.6317 46.7882V50.5469V50.6469H96.5317H95.8184H95.7184V50.5469V41.1364V41.0364H95.8184H99.5323C101.122 41.0364 102.418 42.3312 102.418 43.919C102.418 45.1982 101.572 46.2806 100.397 46.6541L102.673 50.4959L102.763 50.6469H102.587H101.766H101.709L101.68 50.5974L99.4482 46.7882H96.6317ZM96.6317 45.9164H99.5323C100.62 45.9164 101.505 45.0211 101.505 43.919C101.505 42.8031 100.62 41.9083 99.5323 41.9083H96.6317V45.9164Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 215,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M115.123 45.8414C115.123 43.5835 113.35 41.7739 111.078 41.7739C108.807 41.7739 107.034 43.5835 107.034 45.8414C107.034 48.0996 108.807 49.909 111.078 49.909C113.35 49.909 115.123 48.0996 115.123 45.8414ZM106.121 45.8414C106.121 43.0978 108.305 40.8883 111.078 40.8883C113.852 40.8883 116.036 43.0978 116.036 45.8414C116.036 48.5853 113.852 50.7948 111.078 50.7948C108.305 50.7948 106.121 48.5853 106.121 45.8414Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M120.432 50.6466H120.332V50.5466V41.1364V41.0364H120.432H123.971C126.631 41.0364 128.512 43.1992 128.512 45.8414C128.512 48.4836 126.631 50.6466 123.971 50.6466H120.432ZM127.612 45.8414C127.612 43.6551 126.126 41.9083 123.971 41.9083H121.245V49.7745H123.971C126.126 49.7745 127.612 48.028 127.612 45.8414Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 217,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M133.72 46.7882V50.5469V50.6469H133.62H132.906H132.806V50.5469V41.1364V41.0364H132.906H136.62C138.209 41.0364 139.506 42.3312 139.506 43.919C139.506 45.1982 138.66 46.2806 137.485 46.6541L139.761 50.4959L139.85 50.6469H139.675H138.854H138.797L138.768 50.5974L136.536 46.7882H133.72ZM133.72 45.9164H136.62C137.708 45.9164 138.593 45.0212 138.593 43.919C138.593 42.8031 137.707 41.9083 136.62 41.9083H133.72V45.9164Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 218,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M144.661 50.5469V50.6469H144.561H143.847H143.747V50.5469V41.1364V41.0364H143.847H144.561H144.661V41.1364V50.5469Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 219,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M158.09 43.2106L158.139 43.296L158.054 43.3463L157.422 43.7228L157.331 43.7768L157.282 43.6833C156.682 42.5359 155.399 41.7739 153.953 41.7739C151.534 41.7739 149.868 43.5824 149.868 45.8414C149.868 48.0998 151.533 49.909 154.007 49.909C155.129 49.909 156.023 49.5629 156.654 49.008C157.257 48.4765 157.625 47.7491 157.718 46.9364H153.832H153.732V46.8364V46.1641V46.0641H153.832H158.555H158.655V46.1641V46.5273C158.655 48.8577 156.871 50.7948 154.007 50.7948C151.031 50.7948 148.955 48.5851 148.955 45.8414C148.955 43.0987 151.03 40.8883 153.953 40.8883C155.737 40.8883 157.291 41.8212 158.09 43.2106Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 220,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M162.735 41.1362V41.0362H162.835H163.548H163.648V41.1362V47.4007C163.648 48.1462 163.88 48.7707 164.319 49.2087C164.757 49.6465 165.412 49.9087 166.28 49.9087C167.154 49.9087 167.813 49.6464 168.253 49.2086C168.693 48.7706 168.925 48.1462 168.925 47.4007V41.1362V41.0362H169.025H169.738H169.838V41.1362V47.4007C169.838 48.4198 169.483 49.2707 168.855 49.8664C168.228 50.4617 167.337 50.7946 166.28 50.7946C165.223 50.7946 164.335 50.4617 163.711 49.8662C163.087 49.2703 162.735 48.4195 162.735 47.4007V41.1362Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M180.06 49.7745H180.16V49.8745V50.5466V50.6466H180.06H174.637H174.537V50.5466V41.1362V41.0362H174.637H179.993H180.093V41.1362V41.8083V41.9083H179.993H175.45V45.3652H179.656H179.756V45.4652V46.137V46.237H179.656H175.45V49.7745H180.06Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 222,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M189.924 49.7745H190.024V49.8745V50.5466V50.6466H189.924H183.909H183.809V50.5466V49.8745V49.8456L183.825 49.8212L188.814 41.9083H184.044H183.944V41.8083V41.1362V41.0362H184.044H189.79H189.89V41.1362V41.8083V41.8372L189.874 41.8616L184.884 49.7745H189.924Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M209.133 50.5466V50.6466H209.033H208.319H208.219V50.5466V42.5443L204.92 48.017L204.891 48.0654H204.834H204.713H204.656L204.627 48.017L201.328 42.5443V50.5466V50.6466H201.228H200.515H200.415V50.5466V41.1362V41.0362H200.515H201.403H201.459L201.488 41.0845L204.767 46.5084L208.045 41.0845L208.075 41.0362H208.131H209.033H209.133V41.1362V50.5466Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 224,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M222.43 45.8414C222.43 43.5835 220.658 41.7739 218.386 41.7739C216.114 41.7739 214.341 43.5835 214.341 45.8414C214.341 48.0996 216.114 49.909 218.386 49.909C220.658 49.909 222.43 48.0996 222.43 45.8414ZM213.428 45.8414C213.428 43.0978 215.612 40.8883 218.386 40.8883C221.159 40.8883 223.343 43.0978 223.343 45.8414C223.343 48.5853 221.159 50.7948 218.386 50.7948C215.612 50.7948 213.428 48.5853 213.428 45.8414Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 225,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M228.552 46.7882V50.5469V50.6469H228.452H227.739H227.639V50.5469V41.1364V41.0364H227.739H231.452C233.042 41.0364 234.338 42.3312 234.338 43.919C234.338 45.1982 233.492 46.2806 232.317 46.6541L234.593 50.4959L234.683 50.6469H234.507H233.686H233.629L233.6 50.5974L231.368 46.7882H228.552ZM228.552 45.9164H231.452C232.54 45.9164 233.425 45.0211 233.425 43.919C233.425 42.8031 232.54 41.9083 231.452 41.9083H228.552V45.9164Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M238.558 50.5826L238.533 50.6469H238.464H237.71H237.564L237.617 50.5106L241.278 41.1002L241.302 41.0364H241.371H242.124H242.193L242.217 41.1003L245.864 50.5107L245.917 50.6469H245.771H245.017H244.949L244.924 50.5826L244.034 48.2538H239.448L238.558 50.5826ZM239.794 47.3817H243.701L241.747 42.2892L239.794 47.3817Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 227,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M254.989 49.7745H255.089V49.8745V50.5466V50.6466H254.989H249.835H249.735V50.5466V41.1362V41.0362H249.835H250.549H250.649V41.1362V49.7745H254.989Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 228,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M264.584 49.7745H264.684V49.8745V50.5466V50.6466H264.584H259.161H259.061V50.5466V41.1362V41.0362H259.161H264.517H264.617V41.1362V41.8083V41.9083H264.517H259.974V45.3652H264.18H264.28V45.4652V46.137V46.237H264.18H259.974V49.7745H264.584Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M268.365 48.5071L268.34 48.4306L268.409 48.39L269.029 48.027L269.14 47.9618L269.175 48.0858C269.331 48.6304 269.638 49.0842 270.09 49.4027C270.543 49.7214 271.148 49.9087 271.905 49.9087C272.676 49.9087 273.243 49.7113 273.615 49.3949C273.985 49.0799 274.173 48.6384 274.173 48.1266C274.173 47.5995 273.945 47.238 273.537 46.9477C273.123 46.6523 272.529 46.4344 271.807 46.2056L271.807 46.2054C271.79 46.1999 271.773 46.1945 271.756 46.189C270.992 45.941 270.249 45.7002 269.697 45.3186C269.412 45.1222 269.175 44.8864 269.008 44.5899C268.842 44.293 268.75 43.9405 268.75 43.5155C268.75 42.7132 269.076 42.0536 269.611 41.5959C270.145 41.1395 270.883 40.888 271.703 40.888C273.295 40.888 274.352 41.8039 274.823 42.9256L274.858 43.0082L274.779 43.0517L274.174 43.3879L274.076 43.4423L274.033 43.3387C273.863 42.9274 273.603 42.5366 273.227 42.2489C272.852 41.9622 272.355 41.7737 271.703 41.7737C271.07 41.7737 270.563 41.9594 270.216 42.2632C269.871 42.5661 269.677 42.9921 269.677 43.4887C269.677 43.7563 269.733 43.9728 269.835 44.1545C269.936 44.3367 270.086 44.4895 270.28 44.6251C270.673 44.899 271.233 45.093 271.909 45.3159L271.909 45.3159C272.741 45.5906 273.536 45.8637 274.122 46.2772C274.716 46.696 275.1 47.2621 275.1 48.1133C275.1 48.9214 274.782 49.5953 274.218 50.0655C273.656 50.5343 272.858 50.7946 271.905 50.7946C270.106 50.7946 268.811 49.886 268.365 48.5071Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M95.6967 66.7159L95.6721 66.7802H95.6033H94.8496H94.7034L94.7564 66.6439L98.4168 57.2335L98.4416 57.1698H98.51H99.2634H99.3319L99.3566 57.2336L103.003 66.644L103.056 66.7802H102.91H102.157H102.088L102.063 66.7159L101.173 64.3871H96.5869L95.6967 66.7159ZM96.9329 63.515H100.84L98.8865 58.4225L96.9329 63.515Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M106.974 66.7802H106.874V66.6802V57.2697V57.1697H106.974H110.728C112.156 57.1697 113.304 58.3304 113.304 59.7434C113.304 60.6203 112.875 61.3571 112.214 61.7859C113.094 62.201 113.708 63.064 113.708 64.1127C113.708 65.5928 112.519 66.7802 111.038 66.7802H106.974ZM112.795 64.1127C112.795 63.1173 112.004 62.317 111.038 62.317H107.787V65.9081H111.038C112.004 65.9081 112.795 65.1078 112.795 64.1127ZM107.787 58.0418V61.4447H110.728C111.64 61.4447 112.391 60.6848 112.391 59.7434C112.391 58.8017 111.64 58.0418 110.728 58.0418H107.787Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 232,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M126.414 61.975C126.414 59.7171 124.641 57.9075 122.369 57.9075C120.097 57.9075 118.325 59.7171 118.325 61.975C118.325 64.2331 120.097 66.0425 122.369 66.0425C124.641 66.0425 126.414 64.2331 126.414 61.975ZM117.411 61.975C117.411 59.2314 119.595 57.0218 122.369 57.0218C125.143 57.0218 127.327 59.2314 127.327 61.975C127.327 64.7188 125.143 66.9284 122.369 66.9284C119.595 66.9284 117.411 64.7188 117.411 61.975Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 233,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M140.219 59.3441L140.268 59.4295L140.183 59.4799L139.551 59.8561L139.46 59.9101L139.411 59.8166C138.811 58.6694 137.528 57.9074 136.082 57.9074C133.663 57.9074 131.997 59.716 131.997 61.975C131.997 64.2334 133.662 66.0425 136.136 66.0425C137.258 66.0425 138.152 65.6964 138.783 65.1416C139.386 64.6101 139.754 63.8826 139.847 63.07H135.961H135.861V62.97V62.2976V62.1976H135.961H140.684H140.784V62.2976V62.6606C140.784 64.9913 139 66.9284 136.136 66.9284C133.16 66.9284 131.084 64.7186 131.084 61.975C131.084 59.2323 133.159 57.0218 136.082 57.0218C137.866 57.0218 139.42 57.9547 140.219 59.3441Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 234,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M144.708 66.7159L144.683 66.7802H144.615H143.861H143.715L143.768 66.6439L147.428 57.2335L147.453 57.1698H147.521H148.275H148.343L148.368 57.2336L152.014 66.644L152.067 66.7802H151.921H151.168H151.099L151.074 66.7159L150.184 64.3871H145.598L144.708 66.7159ZM145.944 63.515H149.851L147.898 58.4225L145.944 63.515Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 235,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M155.985 66.7802H155.885V66.6802V57.27V57.17H155.985H159.524C162.184 57.17 164.065 59.3328 164.065 61.975C164.065 64.6172 162.184 66.7802 159.524 66.7802H155.985ZM163.165 61.975C163.165 59.7886 161.68 58.0419 159.524 58.0419H156.799V65.9081H159.524C161.68 65.9081 163.165 64.1615 163.165 61.975Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M176.824 61.975C176.824 59.7171 175.051 57.9075 172.78 57.9075C170.508 57.9075 168.735 59.7171 168.735 61.975C168.735 64.2331 170.508 66.0425 172.78 66.0425C175.051 66.0425 176.824 64.2331 176.824 61.975ZM167.822 61.975C167.822 59.2314 170.006 57.0218 172.78 57.0218C175.553 57.0218 177.737 59.2314 177.737 61.975C177.737 64.7188 175.553 66.9284 172.78 66.9284C170.006 66.9284 167.822 64.7188 167.822 61.975Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 237,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M181.136 64.6406L181.111 64.5642L181.18 64.5235L181.8 64.1606L181.911 64.0954L181.946 64.2194C182.102 64.7639 182.409 65.2178 182.861 65.5362C183.314 65.8549 183.919 66.0423 184.676 66.0423C185.447 66.0423 186.013 65.8448 186.386 65.5284C186.756 65.2133 186.944 64.7718 186.944 64.2601C186.944 63.7329 186.715 63.3714 186.308 63.0812C185.894 62.7858 185.3 62.568 184.578 62.3391L184.578 62.3389C184.561 62.3335 184.544 62.328 184.527 62.3225C183.762 62.0745 183.02 61.8337 182.468 61.4522C182.183 61.2557 181.945 61.0199 181.779 60.7234C181.613 60.4265 181.521 60.0741 181.521 59.649C181.521 58.8468 181.847 58.1871 182.382 57.7295C182.916 57.273 183.653 57.0216 184.474 57.0216C186.066 57.0216 187.123 57.9375 187.594 59.0591L187.629 59.1418L187.55 59.1853L186.945 59.5215L186.846 59.5759L186.804 59.4722C186.634 59.0609 186.374 58.6702 185.998 58.3825C185.623 58.0957 185.126 57.9072 184.474 57.9072C183.841 57.9072 183.334 58.093 182.987 58.3967C182.642 58.6997 182.448 59.1256 182.448 59.6223C182.448 59.8899 182.504 60.1063 182.606 60.2881C182.707 60.4703 182.857 60.6231 183.051 60.7586C183.444 61.0326 184.004 61.2266 184.68 61.4495L184.68 61.4495C185.511 61.7242 186.307 61.9973 186.893 62.4108C187.487 62.8295 187.871 63.3957 187.871 64.2469C187.871 65.0548 187.552 65.7287 186.989 66.199C186.427 66.6678 185.629 66.9281 184.676 66.9281C182.877 66.9281 181.582 66.0196 181.136 64.6406Z",
    fill: "#AF1B26",
    stroke: "#AF1B26",
    strokeWidth: "0.2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 238,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M60.9376 22.8795L54.1784 29.6323L62.5541 38L38.0363 62.4948L13.5183 38L38.0363 13.5055L47.4075 22.8677L54.1666 16.1152L38.0363 -2.08561e-06L0 38L38.0363 76L76.0724 38L60.9376 22.8795Z",
    fill: "#AF1B26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 239,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
    d: "M60.9374 22.8796L54.1665 16.1154L60.9374 9.35083L67.7081 16.1154L60.9374 22.8796Z",
    fill: "#F9303E"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 240,
    columnNumber: 1
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 193,
  columnNumber: 15
}, undefined);

const arrowDown = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
  className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mouse_scroll),
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      className: `${(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().m_scroll_arrows)} ${(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().unu)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      className: `${(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().m_scroll_arrows)} ${(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().doi)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 245,
    columnNumber: 1
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 244,
  columnNumber: 20
}, undefined);

/***/ }),

/***/ "./components/LanguageSwitch/LanguageSwitch.js":
/*!*****************************************************!*\
  !*** ./components/LanguageSwitch/LanguageSwitch.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LanguageSwitch.module.scss */ "./components/LanguageSwitch/LanguageSwitch.module.scss");
/* harmony import */ var _LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Context_UseAppContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Context/UseAppContext */ "./Context/UseAppContext.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\LanguageSwitch\\LanguageSwitch.js";






const LanguageSwitch = () => {
  const {
    displayEspañol,
    displayIngles,
    lang
  } = (0,_Context_UseAppContext__WEBPACK_IMPORTED_MODULE_0__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
      children: lang == "ESP" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => displayIngles(),
        children: "ENG"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => displayEspañol(),
        children: "ESP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageSwitch);
/* 

const arrowDown = <svg width="25" height="55" viewBox="0 0 75 130" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M33.9789 127.554C35.9394 129.499 39.1052 129.486 41.0499 127.525L72.7401 95.5766C74.6847 93.616 74.6719 90.4502 72.7113 88.5056C70.7508 86.5609 67.585 86.5738 65.6403 88.5343L37.4713 116.933L9.07225 88.7642C7.11171 86.8196 3.94591 86.8324 2.00124 88.793C0.0565711 90.7535 0.0694397 93.9193 2.02998 95.864L33.9789 127.554ZM32 1.02032L32.5 124.025L42.5 123.984L42 0.979676L32 1.02032Z" fill="#E4E4E4" />
</svg> */

const arrowDown = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
  className: (_LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mouse_scroll),
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: `${(_LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3___default().m_scroll_arrows)} ${(_LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3___default().unu)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: `${(_LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3___default().m_scroll_arrows)} ${(_LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3___default().doi)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: `${(_LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3___default().m_scroll_arrows)} ${(_LanguageSwitch_module_scss__WEBPACK_IMPORTED_MODULE_3___default().trei)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 1
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 34,
  columnNumber: 20
}, undefined);

/***/ }),

/***/ "./components/News/News.js":
/*!*********************************!*\
  !*** ./components/News/News.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ News)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _News_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./News.module.scss */ "./components/News/News.module.scss");
/* harmony import */ var _News_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_News_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UI_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/SectionTitle/SectionTitle */ "./components/UI/SectionTitle/SectionTitle.js");
/* harmony import */ var _UI_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Card/Card */ "./components/UI/Card/Card.js");
/* harmony import */ var _Context_UseAppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Context/UseAppContext */ "./Context/UseAppContext.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\News\\News.js";









function News({
  noticias
}) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    lang
  } = (0,_Context_UseAppContext__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_News_module_scss__WEBPACK_IMPORTED_MODULE_6___default().general_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_News_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_UI_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_1__.default, {
          color: react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isBrowser ? "white" : "black",
          children: lang == "ESP" ? esp[0] : eng[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_News_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: noticias.slice(0, 4).map(noticia => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_UI_Card_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
          slug: noticia.fields.slug,
          title: lang == "ESP" ? noticia.fields.titulo : noticia.fields.tituloIngles,
          content: lang == "ESP" ? noticia.fields.brief : noticia.fields.briefIngles,
          masDetalle: true,
          noticias: noticias
        }, noticia.sys.id, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_News_module_scss__WEBPACK_IMPORTED_MODULE_6___default().overlay)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
const esp = ["Novedades"];
const eng = ["Latest News"];
const newsArray = [{
  title: "Regulacion AFIP",
  content: "Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Primis ridenPossim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu."
}, {
  title: "Regulacion AFIP",
  content: "LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Psibus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu."
}, {
  title: "Regulacion AFIP",
  content: "LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Pribus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu."
}];

/***/ }),

/***/ "./components/Referals/Referals.js":
/*!*****************************************!*\
  !*** ./components/Referals/Referals.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Carrousel.module.scss */ "./components/Referals/Carrousel.module.scss");
/* harmony import */ var _Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UI_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/SectionTitle/SectionTitle */ "./components/UI/SectionTitle/SectionTitle.js");
/* harmony import */ var _Context_UseAppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context/UseAppContext */ "./Context/UseAppContext.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\Referals\\Referals.js";










const Carrousel = () => {
  const {
    lang
  } = (0,_Context_UseAppContext__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: ["2T", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().overlay),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          src: "/ofi3.jpg",
          alt: "socio",
          layout: "fill"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title_container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: lang == "ESP" ? esp[0] : eng[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carousel_container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Carousel, {
            autoplay: true,
            draggable: true,
            autoplaySpeed: 6000,
            speed: 1000,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentStyle),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().referencia),
                children: [lang == "ESP" ? "El equipo nos propone soluciones practicas e innovadoras en sus\
							distintas areas de practico. Son muy profesionales, proactivos y\
							comprometidos. La confianza generada nos permite delegarle asuntos\
							muy variados y complejos." : "The team proposes practical and innovative solutions in their \
                     different practice areas. They are very professional, proactive and \
                     committed.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  style: {
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontStyle: "normal"
                  },
                  children: [" Presidente ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                    children: duracell
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 104
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 22
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 7
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 10
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentStyle),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().referencia),
                children: [lang == "ESP" ? "Se caracterizan por anticiparse a los hechos y mostrar un alto\
							compromiso en las necesidades de nuestro día a día. Su\
							conocimiento del negocio también facilita nuestro trabajo en un\
							mercado tan cambiante y desafiante como el argentino." : "They are characterized by anticipating the facts and showing a high \
                     commitment to the needs of our day to day. Their know how\
                   facilitates our work in the argentenean market with the implications of its intrinsic complexity.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  style: {
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontStyle: "normal"
                  },
                  children: "Director General - CMC di Ravnna"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 22
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 7
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 6
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentStyle),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().referencia),
                children: [lang == "ESP" ? "El equipo de HSR nos propone soluciones prácticas e innovadoras en sus distintas áreas de práctica" : "HSR Team proposes us practical and innovative solutions in different areas of practices", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  style: {
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontStyle: "normal"
                  },
                  children: "Director General - CMC di Ravnna"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 22
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 7
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentStyle),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().referencia),
                children: [lang == "ESP" ? "Son muy profesionales, proactivos y comprometidos" : "They are professional, proactive and committed", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  style: {
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontStyle: "normal"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                    src: "/LOGO-HSR.png",
                    width: "150px",
                    height: "45px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 22
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 7
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentStyle),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().referencia),
                children: [lang == "ESP" ? "La confianza generada nos permite delegarle asuntos muy variados y complejos" : "The generated trust allow us to delegate them many different and complex issues", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  style: {
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontStyle: "normal"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                    src: "/LOGO-HSR.png",
                    width: "150px",
                    height: "45px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 22
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 7
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentStyle),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                className: (_Carrousel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().referencia),
                children: [lang == "ESP" ? "La confianza generada nos permite delegarle asuntos muy variados y complejos" : "The generated trust allow us to delegate them many different and complex issues", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  style: {
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontStyle: "normal"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                    src: "/LOGO-HSR.png",
                    width: "150px",
                    height: "45px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 22
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 7
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 16
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 4
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carrousel);
const esp = ["Testimonios"];
const eng = ["Client Comments"];

const duracell = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "109.221",
  height: "16.063",
  viewBox: "0 0 109.221 16.063",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("g", {
    id: "Layer_2",
    "data-name": "Layer 2",
    transform: "translate(0.001 0.001)",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("g", {
      id: "tick",
      transform: "translate(-0.001 -0.001)",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("path", {
        id: "Path_111",
        "data-name": "Path 111",
        d: "M90.883.134H88.741A1.553,1.553,0,0,0,87.135,1.74V15.794H96.5l.8-2.811H90.883Zm11.779,0H100.52A1.553,1.553,0,0,0,98.914,1.74V15.794h9.5l.8-2.811H102.8V.134ZM26.234,1.74v8.3a2.918,2.918,0,0,1-3.078,3.212,2.971,2.971,0,0,1-3.078-3.212V.134H16.33V9.5c0,4.417,2.543,6.559,6.826,6.559S29.982,13.92,29.982,9.5V.134H27.841A1.633,1.633,0,0,0,26.234,1.74ZM78.3,9.1h5.354V6.291H78.3V2.945H84.86V.134H74.553V14.188a1.512,1.512,0,0,0,1.472,1.606h8.432l.8-2.811H78.3ZM60.232,8.031a7.241,7.241,0,0,0,7.5,7.763h4.149V12.983H69.6c-2.811,0-5.488-.937-5.488-4.952S66.79,3.079,69.6,3.079h2.275V.134H67.727C63.444.134,60.232,3.079,60.232,8.031ZM6.96.134H1.606A1.553,1.553,0,0,0,0,1.74V15.794H6.96a7.241,7.241,0,0,0,7.5-7.763C14.456,3.079,11.243.134,6.96.134ZM5.22,12.983H3.882v-9.9H5.22c2.811,0,5.488.937,5.488,4.952S8.031,12.983,5.22,12.983Zm102.26-9.5a1.686,1.686,0,0,0,1.74-1.74A1.767,1.767,0,0,0,107.48,0a1.686,1.686,0,0,0-1.74,1.74,1.686,1.686,0,0,0,1.74,1.74Zm0-3.078a1.338,1.338,0,0,1,1.338,1.472,1.472,1.472,0,0,1-1.338,1.472,1.338,1.338,0,0,1-1.338-1.472A1.338,1.338,0,0,1,107.48.4Z",
        transform: "translate(0.001 0.001)",
        fill: "#fff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("path", {
        id: "Path_112",
        "data-name": "Path 112",
        d: "M98.887,1.979h.4l.535.8h.268l-.535-.8a.5.5,0,0,0,.535-.535c0-.4-.268-.535-.669-.535h-.8V2.916h.268Zm0-.937h.4c.268,0,.4,0,.4.268s-.268.268-.535.268h-.4V1.042ZM43.474.105a1.874,1.874,0,0,0-2.142,1.606L36.648,15.364,33.7,10.813a4.792,4.792,0,0,0,3.614-4.952A5.822,5.822,0,0,0,31.428.105H25.806A1.553,1.553,0,0,0,24.2,1.712V15.766h3.748V2.916h2.275c3.078,0,3.614,2.008,3.614,2.945,0,2.945-2.677,3.078-4.551,3.212l3.882,6.692H40.53l.8-2.677h5.889l.8,2.677h4.149L46.954.105ZM41.868,10.679l2.409-8.031,2.409,8.031Z",
        transform: "translate(8.192 0.029)",
        fill: "#fff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 121,
  columnNumber: 16
}, undefined);

/***/ }),

/***/ "./components/UI/Button/Button.js":
/*!****************************************!*\
  !*** ./components/UI/Button/Button.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\UI\\Button\\Button.js";





const Button = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./components/UI/Card/Card.js":
/*!************************************!*\
  !*** ./components/UI/Card/Card.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card.module.scss */ "./components/UI/Card/Card.module.scss");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\UI\\Card\\Card.js";







const Card = ({
  title,
  content,
  masDetalle,
  slug,
  noticias
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const goToNoticia = () => {
    const fullPath = `/novedades/${slug}`;
    router.push(fullPath);
  };

  var maxLength = 140;
  var trimmedString = content.substr(0, maxLength);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0___default()), {
      animateIn: "animate__fadeIn",
      animateOnce: true,
      duration: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().news_bookmark)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().news_title),
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().news_content),
        children: [trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))), "..."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined), masDetalle ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().news_detail),
        onClick: goToNoticia,
        children: "MAS DETALLE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 6
      }, undefined) : ""]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./components/UI/SectionTitle/SectionTitle.js":
/*!****************************************************!*\
  !*** ./components/UI/SectionTitle/SectionTitle.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionTitle.module.scss */ "./components/UI/SectionTitle/SectionTitle.module.scss");
/* harmony import */ var _SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\components\\UI\\SectionTitle\\SectionTitle.js";





const SectionTitle = ({
  children,
  color
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().svg_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0___default()), {
        animateIn: "animate__fadeInLeft",
        animateOnce: true,
        duration: 1,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().arrow),
          children: arrow2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 10
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0___default()), {
        animateIn: "animate__fadeInRight",
        animateOnce: true,
        duration: 1.5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().arrow),
          children: arrow
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0___default()), {
      animateIn: "animate__fadeIn",
      animateOnce: true,
      duration: 3,
      children: color == "black" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: (_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title_section),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 10
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: (_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title_section2),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_0___default()), {
      animateIn: "animate__tada",
      animateOnce: false,
      duration: 3,
      offset: 200,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().square),
        children: square
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);

const square = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
  width: "13",
  height: "13",
  viewBox: "0 0 13 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("rect", {
    y: "7.5896",
    width: "9",
    height: "9",
    transform: "rotate(-47.0692 0 6.5896)",
    fill: "#F9313E" // fill="#AEA1A2"

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 58,
  columnNumber: 2
}, undefined);

const arrow = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
  width: "19",
  height: "37",
  viewBox: "0 0 19 37",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
    d: "M0.162652 36.5784L0.162652 29.0791L10.9807 17.345L0.162653 7.57912L0.162899 0.079088L17.9806 17.345L0.162652 36.5784Z",
    fill: "#AF1b27",
    fillOpacity: "0.80" // fillOpacity="1"

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 77,
  columnNumber: 2
}, undefined);

const arrow2 = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
  width: "18",
  height: "37",
  viewBox: "0 0 18 37",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
    d: "M17.9846 0.0396881L17.9512 7.53889L7.08096 19.2247L17.8553 29.0387L17.8217 36.5386L0.0810547 19.1934L17.9846 0.0396881Z",
    fill: "#AF1b27",
    fillOpacity: "0.38" // fillOpacity="1"

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 94,
  columnNumber: 2
}, undefined);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_LanguageSwitch_LanguageSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LanguageSwitch/LanguageSwitch */ "./components/LanguageSwitch/LanguageSwitch.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About/About */ "./components/About/About.js");
/* harmony import */ var _components_Referals_Referals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Referals/Referals */ "./components/Referals/Referals.js");
/* harmony import */ var _components_News_News__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/News/News */ "./components/News/News.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_ContactPeek_ContactPeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ContactPeek/ContactPeek */ "./components/ContactPeek/ContactPeek.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contentful */ "contentful");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\PROYECTOS\\12. HSR abogados 3\\hsrconstru\\pages\\index.js";










async function getStaticProps() {
  const client = (0,contentful__WEBPACK_IMPORTED_MODULE_7__.createClient)({
    space: process.env.CONTENFUL_SPACE_ID,
    accessToken: process.env.CONTENFUL_ACCESS_KEY
  });
  const res = await client.getEntries({
    content_type: 'noticia'
  });
  return {
    props: {
      noticias: res.items,
      revalidate: 10
    }
  };
}
function Home({
  noticias
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_LanguageSwitch_LanguageSwitch__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_About_About__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Referals_Referals__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_News_News__WEBPACK_IMPORTED_MODULE_4__.default, {
      noticias: noticias
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ContactPeek_ContactPeek__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/About/About.module.scss":
/*!********************************************!*\
  !*** ./components/About/About.module.scss ***!
  \********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"master_container": "About_master_container__2w6YT",
	"button_primary": "About_button_primary__1hNbf",
	"button_container": "About_button_container__22q53",
	"general_container": "About_general_container__3ngHQ",
	"title_container": "About_title_container__3u3ai",
	"brief": "About_brief__1kfdy",
	"overlay": "About_overlay__CBYGF",
	"background": "About_background__3jhHz"
};


/***/ }),

/***/ "./components/ContactPeek/ContactPeek.module.scss":
/*!********************************************************!*\
  !*** ./components/ContactPeek/ContactPeek.module.scss ***!
  \********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"master_container": "ContactPeek_master_container__1G5fW",
	"button_primary": "ContactPeek_button_primary__HO8CN",
	"button_container": "ContactPeek_button_container__qW-CA",
	"general_container": "ContactPeek_general_container__V67Bo",
	"overlay": "ContactPeek_overlay__1Tqgr",
	"title_container": "ContactPeek_title_container__Xibt0",
	"brief": "ContactPeek_brief__3JKho",
	"newsletter_container": "ContactPeek_newsletter_container__2FPPM",
	"newsletter": "ContactPeek_newsletter__3ddbE",
	"subscribe": "ContactPeek_subscribe__1JnO9"
};


/***/ }),

/***/ "./components/Footer/Footer.module.scss":
/*!**********************************************!*\
  !*** ./components/Footer/Footer.module.scss ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"master_container": "Footer_master_container__2OFZV",
	"container": "Footer_container__l2D4g",
	"button_primary": "Footer_button_primary__2i9Dv",
	"link": "Footer_link__7ccsw",
	"footer_social": "Footer_footer_social__17okI",
	"footer_social_container": "Footer_footer_social_container__6OLU_"
};


/***/ }),

/***/ "./components/Header/Header.module.scss":
/*!**********************************************!*\
  !*** ./components/Header/Header.module.scss ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"master_container": "Header_master_container__1TBf7",
	"button_primary": "Header_button_primary__IagVS",
	"video_container": "Header_video_container__3I6MZ",
	"logo": "Header_logo__1QUnI",
	"video_overlay": "Header_video_overlay__1i2jw",
	"video": "Header_video__27FjO",
	"background": "Header_background__3iyDm",
	"bounce": "Header_bounce__IFjpD",
	"mouse_scroll": "Header_mouse_scroll__aUHsQ",
	"m_scroll_arrows": "Header_m_scroll_arrows__3WWlR",
	"unu": "Header_unu__sWq_F",
	"doi": "Header_doi__3Tmfi",
	"trei": "Header_trei__x_vjA",
	"mouse-scroll": "Header_mouse-scroll__3jyna"
};


/***/ }),

/***/ "./components/LanguageSwitch/LanguageSwitch.module.scss":
/*!**************************************************************!*\
  !*** ./components/LanguageSwitch/LanguageSwitch.module.scss ***!
  \**************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"master_container": "LanguageSwitch_master_container__1S-L4",
	"button_primary": "LanguageSwitch_button_primary__1hBCo",
	"container": "LanguageSwitch_container___ExFI"
};


/***/ }),

/***/ "./components/News/News.module.scss":
/*!******************************************!*\
  !*** ./components/News/News.module.scss ***!
  \******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"master_container": "News_master_container__aimVe",
	"container": "News_container__1DNd1",
	"button_primary": "News_button_primary__1myaO",
	"general_container": "News_general_container__1Orzw",
	"title_container": "News_title_container__Ex9Ym",
	"overlay": "News_overlay__2ZRu6"
};


/***/ }),

/***/ "./components/Referals/Carrousel.module.scss":
/*!***************************************************!*\
  !*** ./components/Referals/Carrousel.module.scss ***!
  \***************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"master_container": "Carrousel_master_container__13CgE",
	"button_primary": "Carrousel_button_primary__3dACd",
	"Carrousel": "Carrousel_Carrousel__3W42T",
	"container": "Carrousel_container__1wRXS",
	"overlay": "Carrousel_overlay__2DvNC",
	"content": "Carrousel_content__1DOnJ",
	"title_container": "Carrousel_title_container__3NClJ",
	"carousel_container": "Carrousel_carousel_container__1eYgt",
	"referencia": "Carrousel_referencia__Pue2h",
	"contentStyle": "Carrousel_contentStyle__3jcVn"
};


/***/ }),

/***/ "./components/UI/Card/Card.module.scss":
/*!*********************************************!*\
  !*** ./components/UI/Card/Card.module.scss ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"master_container": "Card_master_container__56H6Y",
	"button_primary": "Card_button_primary__iBgYt",
	"container": "Card_container__2s_rE",
	"news_bookmark": "Card_news_bookmark__2023y",
	"news_title": "Card_news_title__paJJO",
	"news_content": "Card_news_content__1vIHO",
	"news_detail": "Card_news_detail__V7IQD"
};


/***/ }),

/***/ "./components/UI/SectionTitle/SectionTitle.module.scss":
/*!*************************************************************!*\
  !*** ./components/UI/SectionTitle/SectionTitle.module.scss ***!
  \*************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"master_container": "SectionTitle_master_container__rjtmP",
	"button_primary": "SectionTitle_button_primary__3cKVg",
	"container": "SectionTitle_container__3JZOg",
	"title_section": "SectionTitle_title_section__1oY7X",
	"title_section2": "SectionTitle_title_section2__3aTrd",
	"svg_container": "SectionTitle_svg_container__1Pln-",
	"arrow": "SectionTitle_arrow__16C2h",
	"square": "SectionTitle_square__3kIMd"
};


/***/ }),

/***/ "./node_modules/animate.css/animate.min.css":
/*!**************************************************!*\
  !*** ./node_modules/animate.css/animate.min.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("contentful");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-animate-on-scroll":
/*!******************************************!*\
  !*** external "react-animate-on-scroll" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-youtube");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELGVBSUMsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpELGVBS0MsOERBQUMsMERBQUQ7QUFBTSxjQUFRLEVBQUVBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQVNDLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURCxlQVVDLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRDtBQUFBLGtCQUREO0FBbUJBOzs7Ozs7Ozs7O0FDbEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLDJHQUErQzs7Ozs7Ozs7Ozs7QUNBL0MseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUM7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hzcmNvbnN0cnUvLi9Db250ZXh0L1VzZUFwcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS8uL2NvbXBvbmVudHMvQWJvdXQvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS8uL2NvbXBvbmVudHMvQ29udGFjdFBlZWsvQ29udGFjdFBlZWsuanMiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9jb21wb25lbnRzL0xhbmd1YWdlU3dpdGNoL0xhbmd1YWdlU3dpdGNoLmpzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9jb21wb25lbnRzL05ld3MvTmV3cy5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vY29tcG9uZW50cy9SZWZlcmFscy9SZWZlcmFscy5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9jb21wb25lbnRzL1VJL0NhcmQvQ2FyZC5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlLmpzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9jb21wb25lbnRzL0Fib3V0L0Fib3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9jb21wb25lbnRzL0NvbnRhY3RQZWVrL0NvbnRhY3RQZWVrLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vY29tcG9uZW50cy9MYW5ndWFnZVN3aXRjaC9MYW5ndWFnZVN3aXRjaC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vY29tcG9uZW50cy9OZXdzL05ld3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS8uL2NvbXBvbmVudHMvUmVmZXJhbHMvQ2Fycm91c2VsLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9jb21wb25lbnRzL1VJL0NhcmQvQ2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hzcmNvbnN0cnUvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1Ly4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1L2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCIiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiIiwid2VicGFjazovL2hzcmNvbnN0cnUvZXh0ZXJuYWwgXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCIiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS9leHRlcm5hbCBcInJlYWN0LXlvdXR1YmVcIiIsIndlYnBhY2s6Ly9oc3Jjb25zdHJ1L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaHNyY29uc3RydS9pZ25vcmVkfEM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcUFJPWUVDVE9TXFwxMi4gSFNSIGFib2dhZG9zIDNcXGhzcmNvbnN0cnVcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmNvbnN0IHVzZUFwcENvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KEFwcENvbnRleHQpXHJcblxyXG5leHBvcnQgY29uc3QgQXBwUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2xhbmcsIHNldExhbmddID0gdXNlU3RhdGUoXCJFU1BcIik7XHJcblxyXG4gICAgY29uc3QgZGlzcGxheUluZ2xlcyA9ICh2YWx1ZSkgPT57XHJcbiAgICAgICAgc2V0TGFuZyhcIkVOR1wiKTtcclxuXHR9XHJcbiAgICBjb25zdCBkaXNwbGF5RXNwYcOxb2wgPSAodmFsdWUpID0+e1xyXG4gICAgICAgIHNldExhbmcoXCJFU1BcIik7XHJcblx0fVxyXG5cclxuICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcblx0XHRcdFx0bGFuZyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlJbmdsZXMsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RXNwYcOxb2xcclxuICAgICAgICAgICAgfX0+e2NoaWxkcmVufTwvQXBwQ29udGV4dC5Qcm92aWRlcj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUFwcENvbnRleHQiLCJpbXBvcnQgcyBmcm9tIFwiLi9BYm91dC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi9VSS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHVzZUFwcENvbnRleHQgZnJvbSBcIi4uLy4uL0NvbnRleHQvVXNlQXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyVmlldywgTW9iaWxlVmlldywgaXNCcm93c2VyLCBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBsYW5nIH0gPSB1c2VBcHBDb250ZXh0KCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5nZW5lcmFsX2NvbnRhaW5lcn0+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy50aXRsZV9jb250YWluZXJ9PlxyXG5cdFx0XHRcdDxTZWN0aW9uVGl0bGUgY29sb3I9e2lzQnJvd3Nlcj9cIndoaXRlXCI6XCJibGFja1wifT57bGFuZyA9PSBcIkVTUFwiID8gZXNwWzBdIDogZW5nWzBdfTwvU2VjdGlvblRpdGxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3MubWFzdGVyX2NvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuYnJpZWZ9PntsYW5nID09IFwiRVNQXCIgPyBlc3BbMV0gOiBlbmdbMV19PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL3NvY2lvc1wiPiAqL31cclxuXHJcblx0XHRcdFx0XHR7LyogPExpbmsgaHJlZj1cIi9hcmVhc0RlUHJhY3RpY2FcIj4gKi99XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2FyZWFzRGVQcmFjdGljYVwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e3MuYnV0dG9uX3ByaW1hcnl9PlxyXG5cdFx0XHRcdFx0XHRcdHtsYW5nID09IFwiRVNQXCIgPyBlc3BbM10gOiBlbmdbM119XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29jaW9zXCI+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17cy5idXR0b25fcHJpbWFyeX0+XHJcblx0XHRcdFx0XHRcdFx0e2xhbmcgPT0gXCJFU1BcIiA/IGVzcFsyXSA6IGVuZ1syXX1cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Mub3ZlcmxheX0+PC9kaXY+XHJcblx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT17cy5iYWNrZ3JvdW5kfT57YmFja2dvcnVuZH08L2Rpdj4gKi99XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcblxyXG5jb25zdCBiYWNrZ29ydW5kID0gKFxyXG5cdDxzdmdcclxuXHRcdHdpZHRoPVwiNDAwXCJcclxuXHRcdGhlaWdodD1cIjY3NVwiXHJcblx0XHR2aWV3Qm94PVwiMCAwIDY4NCA2NzVcIlxyXG5cdFx0ZmlsbD1cIm5vbmVcIlxyXG5cdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcblx0PlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0zNDIuMDA2IDY3NUwwIDMzNy41MDZMMzQyLjAwNiAxLjgyNDMyZS0wNUw2ODQgMzM3LjUwNkwzNDIuMDA2IDY3NVpcIlxyXG5cdFx0XHRmaWxsPVwiIzY2NjY2NlwiXHJcblx0XHRcdGZpbGxPcGFjaXR5PVwiMC4wNlwiXHJcblx0XHQvPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG5cclxuXHJcbmNvbnN0IGVzcCA9IFtcclxuXHRcIk5vc290cm9zXCIsXHJcblx0XCJEZXNhcnJvbGxhbW9zIHJlbGFjaW9uZXMgZGUgbGFyZ28gcGxhem8gY29uIG51ZXN0cm9zIGNsaWVudGVzLFxcXHJcbiAgIHByZXN0YW5kbyB1biBhc2Vzb3JhbWllbnRvIGp1csOtZGljbyDDoWdpbCB5IGNvbXByb21ldGlkb1wiLFxyXG5cdFwiU29jaW9zXCIsXHJcblx0XCJBcmVhcyBkZSBQcsOhY3RpY2FcIixcclxuXTtcclxuXHJcbmNvbnN0IGVuZyA9IFtcclxuXHRcIkFib3V0IFVzXCIsXHJcblx0XCJXZSBkZXZlbG9wIGxvbmctdGVybSByZWxhdGlvbnNoaXBzIHdpdGggb3VyIGNsaWVudHMsIHByb3ZpZGluZyBhZ2lsZSBhbmQgY29tbWl0dGVkIGxlZ2FsIHNlcnZpY2VzIFwiLFxyXG5cdFwiUGFydG5lcnNcIixcclxuXHRcIlByYWN0aWNlIEFyZWFzXCIsXHJcbl07XHJcblxyXG5cclxuIGNvbnN0IGZvbmRvR3JpcyA9IDxzdmcgd2lkdGg9XCI0MTRcIiBoZWlnaHQ9XCI1MDdcIiB2aWV3Qm94PVwiMCAwIDQxNCA1MDdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuIDxwYXRoIGQ9XCJNMCAwSDQxNEwyMzAuNjI5IDUwN0gwVjBaXCIgZmlsbD1cIiNDNEM0QzRcIiBmaWxsT3BhY2l0eT1cIjAuMTVcIi8+XHJcbiA8L3N2Zz5cclxuIFxyXG5cclxuIiwiaW1wb3J0IHMgZnJvbSBcIi4vQ29udGFjdFBlZWsubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vVUkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHVzZUFwcENvbnRleHQgZnJvbSBcIi4uLy4uL0NvbnRleHQvVXNlQXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgbGFuZyB9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3MuZ2VuZXJhbF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5vdmVybGF5fT5cclxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17cy5pbWFnZX0gc3JjPScvb2ZpMS5qcGcnYWx0PVwic29jaW9cIiBsYXlvdXQ9XCJmaWxsXCI+PC9JbWFnZT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy50aXRsZV9jb250YWluZXJ9PlxyXG5cdFx0XHRcdDxTZWN0aW9uVGl0bGUgY29sb3I9XCJ3aGl0ZVwiPntsYW5nID09IFwiRVNQXCIgPyBlc3BbMF0gOiBlbmdbMF19PC9TZWN0aW9uVGl0bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5tYXN0ZXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYnJpZWZ9PntsYW5nID09IFwiRVNQXCIgPyBlc3BbMV0gOiBlbmdbMV19PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuYnJpZWZ9PntsYW5nID09IFwiRVNQXCIgPyBlc3BbMl0gOiBlbmdbMl19PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuYnJpZWZ9PntsYW5nID09IFwiRVNQXCIgPyBlc3BbM10gOiBlbmdbM119PC9kaXY+XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2NvbnRhY3RvXCI+ICovfVxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtzLmJ1dHRvbl9wcmltYXJ5fSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW46XCIxcmVtIDBcIn19PlxyXG5cdFx0XHRcdFx0XHRcdHtsYW5nID09IFwiRVNQXCIgPyBlc3BbNF0gOiBlbmdbNF19XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tmb250U2l6ZTpcIjEuM3JlbVwiLCBmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5Ub3A6XCIycmVtXCJ9fSBjbGFzc05hbWU9e3MuYnJpZWZ9PntsYW5nID09IFwiRVNQXCIgPyBlc3BbNV0gOiBlbmdbNV19PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0ey8qIDxMaW5rIGhyZWY9XCIvYnJvY2h1cmVcIj4gKi99XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHQ8YSAgY2xhc3NOYW1lPXtzLmJ1dHRvbl9wcmltYXJ5fSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PlxyXG5cdFx0XHRcdFx0XHRcdHtsYW5nID09IFwiRVNQXCIgPyBlc3BbNl0gOiBlbmdbNl19XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuICAgICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT17cy5zdWJzY3JpYmV9IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+XHJcblx0XHRcdFx0XHRcdFx0TmV3c0xldHRlclxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5ld3NsZXR0ZXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17cy5uZXdzbGV0dGVyfSB0eXBlPVwiZW1haWxcIiBuYW1lPVwidXNlcl9lbWFpbFwiIHBsYWNlaG9sZGVyPXtsYW5nPT1cIkVTUFwiP1wiSW5ncmVzZSBzdSBtYWlsXCI6XCJFbnRlciB5b3VyIGVtYWlsXCJ9IC8+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPntsYW5nPT1cIkVTUFwiP1wiU3Vic2NyaWJpbXJlXCI6XCJTdWJzY3JpYmVcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7LyogPGRpdj57YmFja2dvcnVuZH08L2Rpdj4gKi99XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcblxyXG5jb25zdCBiYWNrZ29ydW5kID0gKFxyXG5cdDxzdmdcclxuXHRcdHdpZHRoPVwiMzAwXCJcclxuXHRcdGhlaWdodD1cIjY3NVwiXHJcblx0XHR2aWV3Qm94PVwiMCAwIDY4NCA2NzVcIlxyXG5cdFx0ZmlsbD1cIm5vbmVcIlxyXG5cdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcblx0PlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0zNDIuMDA2IDY3NUwwIDMzNy41MDZMMzQyLjAwNiAxLjgyNDMyZS0wNUw2ODQgMzM3LjUwNkwzNDIuMDA2IDY3NVpcIlxyXG5cdFx0XHRmaWxsPVwiIzY2NjY2NlwiXHJcblx0XHRcdGZpbGxPcGFjaXR5PVwiMC4wNlwiXHJcblx0XHQvPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgZXNwID0gW1xyXG5cdFwiQ29udGFjdG9cIixcclxuXHRcIkxpYmVydGFkIDU2NywgcGlzbyA1wrAsIENpdWRhZCBBdXTDs25vbWEgZGUgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmFcIixcclxuICAgXCIrNTQgMTEgNjM0NiAyNzkwXCIsXHJcbiAgIFwiY29udGFjdG9AaHNyYWJvZ2Fkb3MuY29tXCIsXHJcblx0XCJDb250YWN0b1wiLFxyXG5cdFwiQnJvY2h1cmUgSW5zdGl0dWNpb25hbFwiLFxyXG4gICBcIkJyb2NodXJlIEluc3RpdHVjaW9uYWxcIixcclxuXTtcclxuXHJcbmNvbnN0IGVuZyA9IFtcclxuXHRcIkNvbnRhY3RcIixcclxuICAgXCJMaWJlcnRhZCA1NjcsIHBpc28gNcKwLCBDaXVkYWQgQXV0w7Nub21hIGRlIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hXCIsXHJcbiAgIFwiKzU0IDExIDYzNDYgMjc5MFwiLFxyXG4gICBcImNvbnRhY3RvQGhzcmFib2dhZG9zLmNvbVwiLFxyXG5cdFwiQ29udGFjdFwiLFxyXG5cdFwiSW5zdGl0dXRpb25hbCBCcm9jaHVyZVwiLFxyXG5cdFwiSW5zdGl0dXRpb25hbCBCcm9jaHVyZVwiLFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHVzZUFwcENvbnRleHQgZnJvbSAnLi4vLi4vQ29udGV4dC9Vc2VBcHBDb250ZXh0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIGNvbnN0IHsgbGFuZyB9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3MuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtsYW5nID09IFwiRVNQXCJcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5saW5rfT48TGluayBocmVmPVwiL1wiPiAgICAgICAgICAgICAgICAgIEhvbWU8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5saW5rfT48TGluayBocmVmPVwiL2luc3RpdHVjaW9uYWxcIj4gICAgIExhIEZpcm1hPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3MubGlua30+PExpbmsgaHJlZj1cIi9hcmVhc0RlUHJhY3RpY2FcIj4gICBBcmVhcyBkZSBQcmFjdGljYTwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NzLmxpbmt9PjxMaW5rIGhyZWY9XCIvc29jaW9zXCI+ICAgICAgICAgICAgU29jaW9zPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3MubGlua30+PExpbmsgaHJlZj1cIi9ub3ZlZGFkZXNcIj4gICAgICAgICBOb3ZlZGFkZXM8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5saW5rfT48TGluayBocmVmPVwiL2NhcnJlcmFzXCI+ICAgICAgICAgIENhcnJlcmFzPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3MubGlua30+PExpbmsgaHJlZj1cIi9jb250YWN0b1wiPiAgICAgICAgICBDb250YWN0bzwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5saW5rfT48TGluayBocmVmPVwiL1wiPiAgICAgICAgICAgICAgICAgIEhvbWU8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5saW5rfT48TGluayBocmVmPVwiL2luc3RpdHVjaW9uYWxcIj4gICAgIFRoZSBGaXJtPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3MubGlua30+PExpbmsgaHJlZj1cIi9hcmVhc0RlUHJhY3RpY2FcIj4gICBQcmFjdGljZSBBcmVhczwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NzLmxpbmt9PjxMaW5rIGhyZWY9XCIvc29jaW9zXCI+ICAgICAgICAgICAgUGFydG5lcnM8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5saW5rfT48TGluayBocmVmPVwiL25vdmVkYWRlc1wiPiAgICAgICAgIE5ld3M8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5saW5rfT48TGluayBocmVmPVwiL2NhcnJlcmFzXCI+ICAgICAgICAgIENhcnJlcnM8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5saW5rfT48TGluayBocmVmPVwiL2NvbnRhY3RvXCI+ICAgICAgICAgIENvbnRhY3Q8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgfTxkaXYgY2xhc3NOYW1lPXtzcy5mb290ZXJfc29jaWFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbVwiPntJR0xvZ299PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vYXIubGlua2VkaW4uY29tL2NvbXBhbnkvaGFuZy1rdWNoZW4tc3BvcmxlZGVyLXJvZHJpZ3Vlei1tb3JhbGVzLWFib2dhZG9zP3Ryaz1wdWJsaWNfcHJvZmlsZV90b3BjYXJkLWN1cnJlbnQtY29tcGFueVwiPntJTkxvZ299PC9MaW5rPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+SFNSIEFib2dhZG9zIMKpIDIwMjE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxubGV0IElOTG9nbyA9IDxzdmcgY2xhc3NOYW1lPXtzcy5mb290ZXJfc29jaWFsfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5elwiIC8+PC9zdmc+XHJcbmxldCBJR0xvZ28gPSA8c3ZnIGNsYXNzTmFtZT17c3MuZm9vdGVyX3NvY2lhbH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEyIDIuMTYzYzMuMjA0IDAgMy41ODQuMDEyIDQuODUuMDcgMy4yNTIuMTQ4IDQuNzcxIDEuNjkxIDQuOTE5IDQuOTE5LjA1OCAxLjI2NS4wNjkgMS42NDUuMDY5IDQuODQ5IDAgMy4yMDUtLjAxMiAzLjU4NC0uMDY5IDQuODQ5LS4xNDkgMy4yMjUtMS42NjQgNC43NzEtNC45MTkgNC45MTktMS4yNjYuMDU4LTEuNjQ0LjA3LTQuODUuMDctMy4yMDQgMC0zLjU4NC0uMDEyLTQuODQ5LS4wNy0zLjI2LS4xNDktNC43NzEtMS42OTktNC45MTktNC45Mi0uMDU4LTEuMjY1LS4wNy0xLjY0NC0uMDctNC44NDkgMC0zLjIwNC4wMTMtMy41ODMuMDctNC44NDkuMTQ5LTMuMjI3IDEuNjY0LTQuNzcxIDQuOTE5LTQuOTE5IDEuMjY2LS4wNTcgMS42NDUtLjA2OSA0Ljg0OS0uMDY5em0wLTIuMTYzYy0zLjI1OSAwLTMuNjY3LjAxNC00Ljk0Ny4wNzItNC4zNTguMi02Ljc4IDIuNjE4LTYuOTggNi45OC0uMDU5IDEuMjgxLS4wNzMgMS42ODktLjA3MyA0Ljk0OCAwIDMuMjU5LjAxNCAzLjY2OC4wNzIgNC45NDguMiA0LjM1OCAyLjYxOCA2Ljc4IDYuOTggNi45OCAxLjI4MS4wNTggMS42ODkuMDcyIDQuOTQ4LjA3MiAzLjI1OSAwIDMuNjY4LS4wMTQgNC45NDgtLjA3MiA0LjM1NC0uMiA2Ljc4Mi0yLjYxOCA2Ljk3OS02Ljk4LjA1OS0xLjI4LjA3My0xLjY4OS4wNzMtNC45NDggMC0zLjI1OS0uMDE0LTMuNjY3LS4wNzItNC45NDctLjE5Ni00LjM1NC0yLjYxNy02Ljc4LTYuOTc5LTYuOTgtMS4yODEtLjA1OS0xLjY5LS4wNzMtNC45NDktLjA3M3ptMCA1LjgzOGMtMy40MDMgMC02LjE2MiAyLjc1OS02LjE2MiA2LjE2MnMyLjc1OSA2LjE2MyA2LjE2MiA2LjE2MyA2LjE2Mi0yLjc1OSA2LjE2Mi02LjE2M2MwLTMuNDAzLTIuNzU5LTYuMTYyLTYuMTYyLTYuMTYyem0wIDEwLjE2MmMtMi4yMDkgMC00LTEuNzktNC00IDAtMi4yMDkgMS43OTEtNCA0LTRzNCAxLjc5MSA0IDRjMCAyLjIxLTEuNzkxIDQtNCA0em02LjQwNi0xMS44NDVjLS43OTYgMC0xLjQ0MS42NDUtMS40NDEgMS40NHMuNjQ1IDEuNDQgMS40NDEgMS40NGMuNzk1IDAgMS40MzktLjY0NSAxLjQzOS0xLjQ0cy0uNjQ0LTEuNDQtMS40MzktMS40NHpcIiAvPjwvc3ZnPiIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3MgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEJyb3dzZXJWaWV3LCBNb2JpbGVWaWV3LCBpc0Jyb3dzZXIsIGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICBjb25zdCB2aWRlb1BhcmVudFJlZiA9IHVzZVJlZigpO1xyXG4gICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBoZWlnaHQ6ICczOTAnLFxyXG4gICAgICB3aWR0aDogJzY0MCcsXHJcbiAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXHJcbiAgICAgICAgYXV0b3BsYXk6IDEsXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy52aWRlb19jb250YWluZXJ9PiAgICAgXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5sb2dvfT5cclxuICAgICAgICAgICAgICAge2lzTW9iaWxlXHJcbiAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgbG9nbzRcclxuICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICBsb2dvRGVza3RvcFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy52aWRlb19vdmVybGF5fT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdGdiTnltWjd2cVk/YXV0b3BsYXk9MSZtdXRlPTEmbW9kZXN0YnJhbmRpbmc9MSZhdXRvaGlkZT0xJnNob3dpbmZvPTAmY29udHJvbHM9MFwiPlxyXG4gICAgICAgICAgICAgICB7LyogPC9pZnJhbWU+ICovfVxyXG4gICAgICAgICAgICAgey8qIDx2aWRlbyBhdXRvUGxheSBsb29wIG11dGVkIGNsYXNzTmFtZT17c3MudmlkZW99ID5cclxuICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9Jy4vaW50cm8yMC5tcDQnIHR5cGU9J3ZpZGVvL21wNCcgLz5cclxuICAgICAgICAgICAgPC92aWRlbz4gKi99IFxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICByZWY9e3ZpZGVvUGFyZW50UmVmfVxyXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgIDx2aWRlb1xyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBsb29wXHJcbiAgICAgICAgICBwbGF5c2lubGluZVxyXG4gICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyOyB6LWluZGV4OjE7XCJcclxuICAgICAgICAgIHByZWxvYWQ9XCJtZXRhZGF0YVwiXHJcbiAgICAgICAgICBwb3N0ZXI9XCIuL3Bvc3Rlci5wbmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8c291cmNlIHNyYz0nLi9pbnRybzIwLm1wNCd0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICA8L3ZpZGVvPmBcclxuICAgICAgfX1cclxuICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIDxZb3VUdWJlIHZpZGVvSWQ9XCJkZUNGYUY0VFNPaz9hdXRvcGxheT0xJm11dGU9MSZtb2Rlc3RicmFuZGluZz0xJmF1dG9oaWRlPTEmc2hvd2luZm89MCZjb250cm9scz0wXCIgb3B0cz17b3B0c30gIC8+OyAqL31cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5ib3VuY2V9PlxyXG4gICAgICAgICAgIHthcnJvd0Rvd259XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICB7LyogICA8ZGl2IGNsYXNzTmFtZT17c3MuYmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgIDxoMT5TSVRJTyBXRUJERCBFTiBDT05TVFJVQ0NJT048L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3MubG9nb30+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuXHJcblxyXG5cclxuXHJcbmxldCBsb2dvRGVza3RvcCA9IDxzdmcgd2lkdGg9XCI1MDZcIiBoZWlnaHQ9XCIxMzlcIiB2aWV3Qm94PVwiMCAwIDUwNiAxMzlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuPHBhdGggZD1cIk0xODguNjM0IDE2LjEyMTdIMTg4LjczNFYxNi4yMjE3VjMzLjQzMjlWMzMuNTMyOUgxODguNjM0SDE4Ny4zMjVIMTg3LjIyNVYzMy40MzI5VjI1LjI5NjNIMTc3LjM2N1YzMy40MzI5VjMzLjUzMjlIMTc3LjI2N0gxNzUuOTU4SDE3NS44NThWMzMuNDMyOVYxNi4yMjE3VjE2LjEyMTdIMTc1Ljk1OEgxNzcuMjY3SDE3Ny4zNjdWMTYuMjIxN1YyMy44NjY2SDE4Ny4yMjVWMTYuMjIxN1YxNi4xMjE3SDE4Ny4zMjVIMTg4LjYzNFpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTE5Ny41NzYgMzMuNDY5MUwxOTcuNTUxIDMzLjUzMzJIMTk3LjQ4MkgxOTYuMDk4SDE5NS45NTJMMTk2LjAwNSAzMy4zOTY4TDIwMi43MjcgMTYuMTg1MkwyMDIuNzUyIDE2LjEyMTZIMjAyLjgySDIwNC4yMDNIMjA0LjI3MkwyMDQuMjk3IDE2LjE4NTNMMjEwLjk5MyAzMy4zOTdMMjExLjA0NiAzMy41MzMySDIxMC45SDIwOS41MTZIMjA5LjQ0OEwyMDkuNDIzIDMzLjQ2OTFMMjA3Ljc2NyAyOS4xNTY1SDE5OS4yMzFMMTk3LjU3NiAzMy40NjkxWk0xOTkuODAyIDI3LjcyNjhIMjA3LjIyMUwyMDMuNTExIDE4LjA5OEwxOTkuODAyIDI3LjcyNjhaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yMzEuMDQxIDE2LjEyMTdIMjMxLjE0MVYxNi4yMjE3VjMzLjQzMjlWMzMuNTMyOUgyMzEuMDQxSDIyOS44OEgyMjkuODI3TDIyOS43OTcgMzMuNDg5NkwyMTkuNzczIDE4Ljk1MjRWMzMuNDMyOVYzMy41MzI5SDIxOS42NzNIMjE4LjM2NEgyMTguMjY0VjMzLjQzMjlWMTYuMjIxN1YxNi4xMjE3SDIxOC4zNjRIMjE5LjUwMUgyMTkuNTUzTDIxOS41ODMgMTYuMTY0OEwyMjkuNjMxIDMwLjcwMjhWMTYuMjIxN1YxNi4xMjE3SDIyOS43MzFIMjMxLjA0MVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTI1NS44MTUgMjAuMDU2N0wyNTUuODY0IDIwLjE0MjNMMjU1Ljc3OSAyMC4xOTI3TDI1NC42MTggMjAuODgwOEwyNTQuNTI3IDIwLjkzNDRMMjU0LjQ3OCAyMC44NDEzQzI1My4zNiAxOC43MTMzIDI1MC45NzUgMTcuMzA1IDI0OC4yOTEgMTcuMzA1QzI0My44IDE3LjMwNSAyNDAuNzA1IDIwLjY1MTkgMjQwLjcwNSAyNC44MjcyQzI0MC43MDUgMjkuMDAyMSAyNDMuNzk5IDMyLjM0OTQgMjQ4LjM4OSAzMi4zNDk0QzI1Mi40OTUgMzIuMzQ5NCAyNTQuOTgzIDI5Ljg2MTMgMjU1LjI5NyAyNi43NDdIMjQ4LjA2OEgyNDcuOTY4VjI2LjY0N1YyNS40MTczVjI1LjMxNzNIMjQ4LjA2OEgyNTYuNzQxSDI1Ni44NDFWMjUuNDE3M1YyNi4wODE2QzI1Ni44NDEgMzAuMjk1NyAyNTMuNjA1IDMzLjgwMzQgMjQ4LjM4OSAzMy44MDM0QzI0Mi45NzIgMzMuODAzNCAyMzkuMTk2IDI5LjgwMDIgMjM5LjE5NiAyNC44MjcyQzIzOS4xOTYgMTkuODU1OCAyNDIuOTcxIDE1Ljg1MTEgMjQ4LjI5MSAxNS44NTExQzI1MS41MzcgMTUuODUxMSAyNTQuMzYzIDE3LjU0MTcgMjU1LjgxNSAyMC4wNTY3WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjg2LjQ5NSAzMy41MzMxSDI4Ni40NTRMMjg2LjQyNSAzMy41MDQ2TDI3Ny45MjEgMjUuMTg3OVYzMy40MzMxVjMzLjUzMzFIMjc3LjgyMUgyNzYuNTEySDI3Ni40MTJWMzMuNDMzMVYxNi4yMjE5VjE2LjEyMTlIMjc2LjUxMkgyNzcuODIxSDI3Ny45MjFWMTYuMjIxOVYyNC4wMDQzTDI4Ni4xNzkgMTYuMTQ5NUwyODYuMjA4IDE2LjEyMTlIMjg2LjI0OEgyODguMDAySDI4OC4yNTJMMjg4LjA3MSAxNi4yOTQyTDI3OS4zOTggMjQuNTgyN0wyODguMzE5IDMzLjM2MThMMjg4LjQ5MyAzMy41MzMxSDI4OC4yNDlIMjg2LjQ5NVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTI5NC41MDEgMTYuMjIxN1YxNi4xMjE3SDI5NC42MDFIMjk1LjkxMUgyOTYuMDExVjE2LjIyMTdWMjcuNjc5NUMyOTYuMDExIDI5LjA2IDI5Ni40NDMgMzAuMjI0OSAyOTcuMjY2IDMxLjA0NDdDMjk4LjA5IDMxLjg2NDMgMjk5LjMxNyAzMi4zNDk1IDMwMC45MjcgMzIuMzQ5NUMzMDIuNTUgMzIuMzQ5NSAzMDMuNzgzIDMxLjg2NDIgMzA0LjYxIDMxLjA0NDZDMzA1LjQzNiAzMC4yMjQ4IDMwNS44NjggMjkuMDYgMzA1Ljg2OCAyNy42Nzk1VjE2LjIyMTdWMTYuMTIxN0gzMDUuOTY4SDMwNy4yNzhIMzA3LjM3OFYxNi4yMjE3VjI3LjY3OTVDMzA3LjM3OCAyOS41MjMyIDMwNi43MzMgMzEuMDU2NiAzMDUuNTk4IDMyLjEyODdDMzA0LjQ2NSAzMy4yMDAzIDMwMi44NTEgMzMuODAzNSAzMDAuOTI3IDMzLjgwMzVDMjk5LjAwNCAzMy44MDM1IDI5Ny4zOTYgMzMuMjAwMyAyOTYuMjY4IDMyLjEyODVDMjk1LjE0IDMxLjA1NjMgMjk0LjUwMSAyOS41MjI5IDI5NC41MDEgMjcuNjc5NVYxNi4yMjE3WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMzMxLjgzIDIwLjExODhMMzMxLjc0MyAyMC4xNjg0TDMzMC41ODIgMjAuODMyM0wzMzAuNDkzIDIwLjg4MzJMMzMwLjQ0NCAyMC43OTI4QzMyOS4zMjYgMTguNzEzNCAzMjYuOTY0IDE3LjMwNTEgMzI0LjI4IDE3LjMwNTFDMzE5Ljc5IDE3LjMwNTEgMzE2LjY5NSAyMC42NTE2IDMxNi42OTUgMjQuODI3M0MzMTYuNjk1IDI5LjAwMzEgMzE5Ljc5IDMyLjM0OTUgMzI0LjI4IDMyLjM0OTVDMzI2Ljk4OCAzMi4zNDk1IDMyOS4zNzUgMzAuOTE2OSAzMzAuNDkzIDI4Ljc4ODVMMzMwLjU0MSAyOC42OTY4TDMzMC42MzEgMjguNzQ4MkwzMzEuNzkzIDI5LjQxMjFMMzMxLjg3OCAyOS40NjExTDMzMS44MyAyOS41NDc1QzMzMC40MDMgMzIuMTEzNSAzMjcuNTUyIDMzLjgwMzUgMzI0LjI4IDMzLjgwMzVDMzE4Ljk2IDMzLjgwMzUgMzE1LjE4NSAyOS43OTkyIDMxNS4xODUgMjQuODI3M0MzMTUuMTg1IDE5Ljg1NTUgMzE4Ljk2IDE1Ljg1MTIgMzI0LjI4IDE1Ljg1MTJDMzI3LjUwMiAxNS44NTEyIDMzMC4zMjggMTcuNDkxNyAzMzEuNzggMjAuMDMyTDMzMS44MyAyMC4xMTg4WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMzUyLjQ1MiAxNi4xMjE3SDM1Mi41NTJWMTYuMjIxN1YzMy40MzI5VjMzLjUzMjlIMzUyLjQ1MkgzNTEuMTQySDM1MS4wNDJWMzMuNDMyOVYyNS4yOTYzSDM0MS4xODVWMzMuNDMyOVYzMy41MzI5SDM0MS4wODVIMzM5Ljc3NUgzMzkuNjc1VjMzLjQzMjlWMTYuMjIxN1YxNi4xMjE3SDMzOS43NzVIMzQxLjA4NUgzNDEuMTg1VjE2LjIyMTdWMjMuODY2NkgzNTEuMDQyVjE2LjIyMTdWMTYuMTIxN0gzNTEuMTQySDM1Mi40NTJaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0zNzEuNjUzIDMyLjEwMzZIMzcxLjc1M1YzMi4yMDM2VjMzLjQzMjlWMzMuNTMyOUgzNzEuNjUzSDM2MS42OTVIMzYxLjU5NVYzMy40MzI5VjE2LjIyMTdWMTYuMTIxN0gzNjEuNjk1SDM3MS41M0gzNzEuNjNWMTYuMjIxN1YxNy40NTA5VjE3LjU1MDlIMzcxLjUzSDM2My4xMDVWMjQuMDM4N0gzNzAuOTEySDM3MS4wMTJWMjQuMTM4N1YyNS4zNjg0VjI1LjQ2ODRIMzcwLjkxMkgzNjMuMTA1VjMyLjEwMzZIMzcxLjY1M1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTM5Mi40ODYgMTYuMTIxN0gzOTIuNTg2VjE2LjIyMTdWMzMuNDMyOVYzMy41MzI5SDM5Mi40ODZIMzkxLjMyNEgzOTEuMjcyTDM5MS4yNDIgMzMuNDg5NkwzODEuMjE4IDE4Ljk1MjRWMzMuNDMyOVYzMy41MzI5SDM4MS4xMThIMzc5LjgwOUgzNzkuNzA5VjMzLjQzMjlWMTYuMjIxN1YxNi4xMjE3SDM3OS44MDlIMzgwLjk0NkgzODAuOTk4TDM4MS4wMjggMTYuMTY0OEwzOTEuMDc2IDMwLjcwMjhWMTYuMjIxN1YxNi4xMjE3SDM5MS4xNzZIMzkyLjQ4NlpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTE3NC44MjUgNTkuMTg0NUwxNzQuOCA1OS4xMDc5TDE3NC44NjkgNTkuMDY3MkwxNzYuMDA2IDU4LjQwMzRMMTc2LjExNyA1OC4zMzg2TDE3Ni4xNTMgNTguNDYyMkMxNzYuNDQ0IDU5LjQ3NDkgMTc3LjAxOCA2MC4zMjE3IDE3Ny44NjYgNjAuOTE2QzE3OC43MTQgNjEuNTEwNyAxNzkuODQyIDYxLjg1NjggMTgxLjI0NiA2MS44NTY4QzE4Mi42NzUgNjEuODU2OCAxODMuNzM3IDYxLjQ5MjEgMTg0LjQ0IDYwLjg5NjlDMTg1LjE0MSA2MC4zMDMxIDE4NS40OTUgNTkuNDcxNiAxODUuNDk1IDU4LjUxNDVDMTg1LjQ5NSA1Ny41MTk0IDE4NS4wNTggNTYuODM0NyAxODQuMjkyIDU2LjI5MDhDMTgzLjUxOSA1NS43NDE4IDE4Mi40MTUgNTUuMzQwMSAxODEuMDkyIDU0LjkyMTdMMTgxLjA5MSA1NC45MjE1QzE4MS4wNjIgNTQuOTEyMSAxODEuMDMzIDU0LjkwMjcgMTgxLjAwNCA1NC44OTM0QzE3OS41OTUgNTQuNDM3OSAxNzguMjQzIDU0LjAwMSAxNzcuMjM4IDUzLjMxMDVDMTc2LjcyNCA1Mi45NTY4IDE3Ni4yOTcgNTIuNTM0NCAxNzYgNTIuMDA1NkMxNzUuNzAyIDUxLjQ3NjQgMTc1LjUzNiA1MC44NDYgMTc1LjUzNiA1MC4wODFDMTc1LjUzNiA0OC42Mzc4IDE3Ni4xMjQgNDcuNDU0MyAxNzcuMDg4IDQ2LjYzMzFDMTc4LjA1MSA0NS44MTMyIDE3OS4zODUgNDUuMzU4NSAxODAuODc1IDQ1LjM1ODVDMTgzLjc2MiA0NS4zNTg1IDE4NS42NzMgNDcuMDA5MiAxODYuNTI4IDQ5LjAzNEwxODYuNTYzIDQ5LjExN0wxODYuNDg0IDQ5LjE2MDVMMTg1LjM3MSA0OS43NzQ5TDE4NS4yNzMgNDkuODI4OUwxODUuMjMxIDQ5LjcyNTZDMTg0LjkxNCA0OC45NjM0IDE4NC40MyA0OC4yMzU2IDE4My43MjQgNDcuNjk4NkMxODMuMDIgNDcuMTYyNSAxODIuMDkgNDYuODEyNCAxODAuODc1IDQ2LjgxMjRDMTc5LjY5NiA0Ni44MTI0IDE3OC43NDUgNDcuMTU3IDE3OC4wOSA0Ny43MjgyQzE3Ny40MzYgNDguMjk4NiAxNzcuMDcxIDQ5LjEwMDUgMTc3LjA3MSA1MC4wMzE2QzE3Ny4wNzEgNTAuNTMzMSAxNzcuMTc3IDUwLjk0MzEgMTc3LjM3MSA1MS4yODkzQzE3Ny41NjUgNTEuNjM2MSAxNzcuODUgNTEuOTI0NCAxNzguMjE0IDUyLjE3NzdDMTc4Ljk0NyA1Mi42ODcyIDE3OS45ODkgNTMuMDQ1OCAxODEuMjI4IDUzLjQ1MjZMMTgxLjIyOCA1My40NTI2QzE4Mi43NTcgNTMuOTU1NyAxODQuMjA1IDU0LjQ1MTUgMTg1LjI2OSA1NS4xOTkyQzE4Ni4zNDEgNTUuOTUyMSAxODcuMDI5IDU2Ljk2NCAxODcuMDI5IDU4LjQ4OThDMTg3LjAyOSA1OS45NDQzIDE4Ni40NTUgNjEuMTUzMSAxODUuNDM5IDYxLjk5NjVDMTg0LjQyNiA2Mi44Mzg1IDE4Mi45ODEgNjMuMzEwMyAxODEuMjQ2IDYzLjMxMDNDMTc3Ljk3MyA2My4zMTAzIDE3NS42MzEgNjEuNjY3NCAxNzQuODI1IDU5LjE4NDVaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yMDAuODQzIDU2LjQ3NTdIMTk2LjM3MVY2Mi45NDAzVjYzLjA0MDNIMTk2LjI3MUgxOTQuOTYxSDE5NC44NjFWNjIuOTQwM1Y0NS43MjkxVjQ1LjYyOTFIMTk0Ljk2MUgyMDAuODQzQzIwNC4wMTEgNDUuNjI5MSAyMDYuMzMgNDcuOTU5OCAyMDYuMzMgNTEuMDY0NUMyMDYuMzMgNTQuMTQ0OSAyMDQuMDExIDU2LjQ3NTcgMjAwLjg0MyA1Ni40NzU3Wk0yMDQuODIgNTEuMDY0NUMyMDQuODIgNDguNzMzOCAyMDMuMTU5IDQ3LjA1ODQgMjAwLjg0MyA0Ny4wNTg0SDE5Ni4zNzFWNTUuMDQ2SDIwMC44NDNDMjAzLjE2IDU1LjA0NiAyMDQuODIgNTMuMzcwMSAyMDQuODIgNTEuMDY0NVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTIyOS43MyA1NC4zMzQ1QzIyOS43MyA1MC4xNTk5IDIyNi40MzggNDYuODEyMyAyMjIuMjE5IDQ2LjgxMjNDMjE3Ljk5OSA0Ni44MTIzIDIxNC43MDggNTAuMTU5OSAyMTQuNzA4IDU0LjMzNDVDMjE0LjcwOCA1OC41MDkyIDIxNy45OTkgNjEuODU2NyAyMjIuMjE5IDYxLjg1NjdDMjI2LjQzOCA2MS44NTY3IDIyOS43MyA1OC41MDkyIDIyOS43MyA1NC4zMzQ1Wk0yMTMuMTk4IDU0LjMzNDVDMjEzLjE5OCA0OS4zNjE4IDIxNy4xNzIgNDUuMzU4NCAyMjIuMjE5IDQ1LjM1ODRDMjI3LjI2NSA0NS4zNTg0IDIzMS4yMzkgNDkuMzYxOCAyMzEuMjM5IDU0LjMzNDVDMjMxLjIzOSA1OS4zMDczIDIyNy4yNjUgNjMuMzEwNyAyMjIuMjE5IDYzLjMxMDdDMjE3LjE3MiA2My4zMTA3IDIxMy4xOTggNTkuMzA3MyAyMTMuMTk4IDU0LjMzNDVaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yNDAuODA0IDU1Ljk4MzRWNjIuOTQwMlY2My4wNDAySDI0MC43MDRIMjM5LjM5NEgyMzkuMjk0VjYyLjk0MDJWNDUuNzI5VjQ1LjYyOUgyMzkuMzk0SDI0Ni4yMTRDMjQ5LjA4NyA0NS42MjkgMjUxLjQzIDQ3Ljk1OTYgMjUxLjQzIDUwLjgxODZDMjUxLjQzIDUzLjE1NjcgMjQ5Ljg1MiA1NS4xMzA5IDI0Ny42NzcgNTUuNzcyNkwyNTEuOTEgNjIuODg5MUwyNTIgNjMuMDQwMkgyNTEuODI0SDI1MC4zMTdIMjUwLjI1OUwyNTAuMjMgNjIuOTkwOUwyNDYuMTA4IDU1Ljk4MzRIMjQwLjgwNFpNMjQwLjgwNCA1NC41NTQxSDI0Ni4yMTRDMjQ4LjI1OSA1NC41NTQxIDI0OS45MiA1Mi44Nzg4IDI0OS45MiA1MC44MTg2QzI0OS45MiA0OC43MzMyIDI0OC4yNTkgNDcuMDU4MiAyNDYuMjE0IDQ3LjA1ODJIMjQwLjgwNFY1NC41NTQxWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjY4Ljk0OSA2MS42MTA5SDI2OS4wNDlWNjEuNzEwOVY2Mi45NDAyVjYzLjA0MDJIMjY4Ljk0OUgyNTkuNDg1SDI1OS4zODVWNjIuOTQwMlY0NS43MjlWNDUuNjI5SDI1OS40ODVIMjYwLjc5NUgyNjAuODk1VjQ1LjcyOVY2MS42MTA5SDI2OC45NDlaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yODYuNTY5IDYxLjYxMDlIMjg2LjY2OVY2MS43MTA5VjYyLjk0MDJWNjMuMDQwMkgyODYuNTY5SDI3Ni42MTFIMjc2LjUxMVY2Mi45NDAyVjQ1LjcyOVY0NS42MjlIMjc2LjYxMUgyODYuNDQ2SDI4Ni41NDZWNDUuNzI5VjQ2Ljk1ODJWNDcuMDU4MkgyODYuNDQ2SDI3OC4wMlY1My41NDZIMjg1LjgyOEgyODUuOTI4VjUzLjY0NlY1NC44NzU3VjU0Ljk3NTdIMjg1LjgyOEgyNzguMDJWNjEuNjEwOUgyODYuNTY5WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjk0LjcyNCA2My4wNDAySDI5NC42MjRWNjIuOTQwMlY0NS43MjlWNDUuNjI5SDI5NC43MjRIMzAxLjIyNEMzMDYuMDU1IDQ1LjYyOSAzMDkuNDc4IDQ5LjU0MSAzMDkuNDc4IDU0LjMzNDZDMzA5LjQ3OCA1OS4xMjc3IDMwNi4wNTUgNjMuMDQwMiAzMDEuMjI0IDYzLjA0MDJIMjk0LjcyNFpNMzA3Ljk5MyA1NC4zMzQ2QzMwNy45OTMgNTAuMjk4MyAzMDUuMjM2IDQ3LjA1ODIgMzAxLjIyNCA0Ny4wNTgySDI5Ni4xMzRWNjEuNjEwOUgzMDEuMjI0QzMwNS4yMzYgNjEuNjEwOSAzMDcuOTkzIDU4LjM3MDQgMzA3Ljk5MyA1NC4zMzQ2WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMzI3LjU5MSA2MS42MTA5SDMyNy42OTFWNjEuNzEwOVY2Mi45NDAyVjYzLjA0MDJIMzI3LjU5MUgzMTcuNjMzSDMxNy41MzNWNjIuOTQwMlY0NS43MjlWNDUuNjI5SDMxNy42MzNIMzI3LjQ2OEgzMjcuNTY4VjQ1LjcyOVY0Ni45NTgyVjQ3LjA1ODJIMzI3LjQ2OEgzMTkuMDQzVjUzLjU0NkgzMjYuODVIMzI2Ljk1VjUzLjY0NlY1NC44NzU3VjU0Ljk3NTdIMzI2Ljg1SDMxOS4wNDNWNjEuNjEwOUgzMjcuNTkxWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMzM3LjE1NyA1NS45ODM0VjYyLjk0MDJWNjMuMDQwMkgzMzcuMDU3SDMzNS43NDdIMzM1LjY0N1Y2Mi45NDAyVjQ1LjcyOVY0NS42MjlIMzM1Ljc0N0gzNDIuNTY3QzM0NS40MzkgNDUuNjI5IDM0Ny43ODMgNDcuOTU5NiAzNDcuNzgzIDUwLjgxODZDMzQ3Ljc4MyA1My4xNTY3IDM0Ni4yMDUgNTUuMTMwOSAzNDQuMDMgNTUuNzcyNkwzNDguMjYzIDYyLjg4OTFMMzQ4LjM1MyA2My4wNDAySDM0OC4xNzdIMzQ2LjY2OUgzNDYuNjEyTDM0Ni41ODMgNjIuOTkwOUwzNDIuNDYxIDU1Ljk4MzRIMzM3LjE1N1pNMzM3LjE1NyA1NC41NTQxSDM0Mi41NjdDMzQ0LjYxMiA1NC41NTQxIDM0Ni4yNzMgNTIuODc4OCAzNDYuMjczIDUwLjgxODZDMzQ2LjI3MyA0OC43MzMyIDM0NC42MTEgNDcuMDU4MiAzNDIuNTY3IDQ3LjA1ODJIMzM3LjE1N1Y1NC41NTQxWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMzc0LjQ0NiA1OS4zMDEzTDM3MS4yODMgNTUuOTA4NEwzNzEuMTM0IDU1Ljc2MDVDMzcwLjQ5MiA1Ni4yNzcgMzcwLjIyIDU2Ljk4OTggMzcwLjIyIDU3LjY3ODNDMzcwLjIyIDU4LjgzMzkgMzcwLjk2MSA1OS42OTQ2IDM3Mi43MTYgNTkuNjk0NkMzNzMuMzU5IDU5LjY5NDYgMzczLjkyNyA1OS41NzE5IDM3NC40NDYgNTkuMzAxM1pNMzc4LjQgNjMuNTc5NkwzNzYuODY3IDYxLjkzMjRDMzc1LjY1NiA2Mi43Njc5IDM3NC4xNzQgNjMuMjg0MyAzNzIuMzk1IDYzLjI4NDNDMzY4LjgzNyA2My4yODQzIDM2Ni4yMTcgNjEuMzQyMiAzNjYuMjE3IDU4LjA5NjNDMzY2LjIxNyA1Ni4xMjkxIDM2Ny4yMDUgNTQuMjg1NSAzNjguOTg1IDUzLjE1NDJDMzY4LjU0IDUyLjM5MTkgMzY4LjI2OCA1MS41MzEyIDM2OC4yNjggNTAuNDI0N0MzNjguMjY4IDQ3LjUyMzUgMzcwLjUxNyA0NS4zODQ2IDM3My44MjggNDUuMzg0NkMzNzYuMzI0IDQ1LjM4NDYgMzc4LjQ0OSA0Ni42MTM4IDM3OS41MTIgNDkuMTQ2NUwzNzYuMTI2IDUxLjA4OUMzNzUuNjgxIDQ5LjkzMzQgMzc0Ljk4OSA0OS4yMjAyIDM3My44NzggNDkuMjIwMkMzNzIuODg5IDQ5LjIyMDIgMzcyLjIyMiA0OS44MzUgMzcyLjIyMiA1MC42NzFDMzcyLjIyMiA1MS42MjIxIDM3Mi44MDYgNTIuMjU5MSAzNzMuNTYzIDUzLjA4NUwzNzMuNTgxIDUzLjEwNDhMMzc2Ljc2OSA1Ni42MjEyQzM3Ny4xMTUgNTUuODM0NyAzNzcuMzg2IDU0LjkyNDYgMzc3LjU4NCA1My45MTY1TDM4MC44OTYgNTUuNzg1M0MzODAuNTc0IDU2Ljk4OTggMzgwLjA1NSA1OC4yNjg1IDM3OS4zMTQgNTkuMzk5M0wzODEuNDg4IDYxLjgwOTJMMzc4LjQgNjMuNTc5NlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbjxwYXRoIGQ9XCJNMzc0LjQ0NiA1OS4zMDEzTDM3MS4yODMgNTUuOTA4NEwzNzEuMTM0IDU1Ljc2MDVDMzcwLjQ5MiA1Ni4yNzcgMzcwLjIyIDU2Ljk4OTggMzcwLjIyIDU3LjY3ODNDMzcwLjIyIDU4LjgzMzkgMzcwLjk2MSA1OS42OTQ2IDM3Mi43MTYgNTkuNjk0NkMzNzMuMzU5IDU5LjY5NDYgMzczLjkyNyA1OS41NzE5IDM3NC40NDYgNTkuMzAxM1pNMzc4LjQgNjMuNTc5NkwzNzYuODY3IDYxLjkzMjRDMzc1LjY1NiA2Mi43Njc5IDM3NC4xNzQgNjMuMjg0MyAzNzIuMzk1IDYzLjI4NDNDMzY4LjgzNyA2My4yODQzIDM2Ni4yMTcgNjEuMzQyMiAzNjYuMjE3IDU4LjA5NjNDMzY2LjIxNyA1Ni4xMjkxIDM2Ny4yMDUgNTQuMjg1NSAzNjguOTg1IDUzLjE1NDJDMzY4LjU0IDUyLjM5MTkgMzY4LjI2OCA1MS41MzEyIDM2OC4yNjggNTAuNDI0N0MzNjguMjY4IDQ3LjUyMzUgMzcwLjUxNyA0NS4zODQ2IDM3My44MjggNDUuMzg0NkMzNzYuMzI0IDQ1LjM4NDYgMzc4LjQ0OSA0Ni42MTM4IDM3OS41MTIgNDkuMTQ2NUwzNzYuMTI2IDUxLjA4OUMzNzUuNjgxIDQ5LjkzMzQgMzc0Ljk4OSA0OS4yMjAyIDM3My44NzggNDkuMjIwMkMzNzIuODg5IDQ5LjIyMDIgMzcyLjIyMiA0OS44MzUgMzcyLjIyMiA1MC42NzFDMzcyLjIyMiA1MS42MjIxIDM3Mi44MDYgNTIuMjU5MSAzNzMuNTYzIDUzLjA4NUwzNzMuNTgxIDUzLjEwNDhMMzc2Ljc2OSA1Ni42MjEyQzM3Ny4xMTUgNTUuODM0NyAzNzcuMzg2IDU0LjkyNDYgMzc3LjU4NCA1My45MTY1TDM4MC44OTYgNTUuNzg1M0MzODAuNTc0IDU2Ljk4OTggMzgwLjA1NSA1OC4yNjg1IDM3OS4zMTQgNTkuMzk5M0wzODEuNDg4IDYxLjgwOTJMMzc4LjQgNjMuNTc5NlpcIiBzdHJva2U9XCJ3aGl0ZVwiLz5cclxuPHBhdGggZD1cIk0xNzcuMzY3IDg1LjQ5MDNWOTIuNDQ3NVY5Mi41NDc1SDE3Ny4yNjdIMTc1Ljk1N0gxNzUuODU3VjkyLjQ0NzVWNzUuMjM2M1Y3NS4xMzYzSDE3NS45NTdIMTgyLjc3OEMxODUuNjUgNzUuMTM2MyAxODcuOTkzIDc3LjQ2NyAxODcuOTkzIDgwLjMyNTRDMTg3Ljk5MyA4Mi42NjM2IDE4Ni40MTYgODQuNjM3NCAxODQuMjQgODUuMjc5NUwxODguNDczIDkyLjM5NjRMMTg4LjU2MyA5Mi41NDc1SDE4OC4zODdIMTg2Ljg4SDE4Ni44MjNMMTg2Ljc5NCA5Mi40OTgyTDE4Mi42NzEgODUuNDkwM0gxNzcuMzY3Wk0xNzcuMzY3IDg0LjA2MTVIMTgyLjc3OEMxODQuODIyIDg0LjA2MTUgMTg2LjQ4NCA4Mi4zODU3IDE4Ni40ODQgODAuMzI1NEMxODYuNDg0IDc4LjI0MDUgMTg0LjgyMiA3Ni41NjUxIDE4Mi43NzggNzYuNTY1MUgxNzcuMzY3Vjg0LjA2MTVaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yMTEuNDkyIDgzLjg0MTVDMjExLjQ5MiA3OS42NjczIDIwOC4yIDc2LjMxOTMgMjAzLjk4MSA3Ni4zMTkzQzE5OS43NjIgNzYuMzE5MyAxOTYuNDcgNzkuNjY3MyAxOTYuNDcgODMuODQxNUMxOTYuNDcgODguMDE2MiAxOTkuNzYyIDkxLjM2MzcgMjAzLjk4MSA5MS4zNjM3QzIwOC4yIDkxLjM2MzcgMjExLjQ5MiA4OC4wMTYyIDIxMS40OTIgODMuODQxNVpNMTk0Ljk2IDgzLjg0MTVDMTk0Ljk2IDc4Ljg2ODggMTk4LjkzNCA3NC44NjU0IDIwMy45ODEgNzQuODY1NEMyMDkuMDI3IDc0Ljg2NTQgMjEzLjAwMSA3OC44Njg4IDIxMy4wMDEgODMuODQxNUMyMTMuMDAxIDg4LjgxNDcgMjA5LjAyNyA5Mi44MTgxIDIwMy45ODEgOTIuODE4MUMxOTguOTM0IDkyLjgxODEgMTk0Ljk2IDg4LjgxNDcgMTk0Ljk2IDgzLjg0MTVaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yMjEuMTU2IDkyLjU0N0gyMjEuMDU2VjkyLjQ0N1Y3NS4yMzYzVjc1LjEzNjNIMjIxLjE1NkgyMjcuNjU2QzIzMi40ODcgNzUuMTM2MyAyMzUuOTEgNzkuMDQ3OSAyMzUuOTEgODMuODQxNEMyMzUuOTEgODguNjM1IDIzMi40ODcgOTIuNTQ3IDIyNy42NTYgOTIuNTQ3SDIyMS4xNTZaTTIzNC40MjUgODMuODQxNEMyMzQuNDI1IDc5LjgwNTYgMjMxLjY2OCA3Ni41NjUxIDIyNy42NTYgNzYuNTY1MUgyMjIuNTY2VjkxLjExNzhIMjI3LjY1NkMyMzEuNjY4IDkxLjExNzggMjM0LjQyNSA4Ny44Nzc3IDIzNC40MjUgODMuODQxNFpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTI0NS40NzQgODUuNDkwM1Y5Mi40NDc1VjkyLjU0NzVIMjQ1LjM3NEgyNDQuMDY0SDI0My45NjRWOTIuNDQ3NVY3NS4yMzYzVjc1LjEzNjNIMjQ0LjA2NEgyNTAuODg0QzI1My43NTYgNzUuMTM2MyAyNTYuMSA3Ny40NjcgMjU2LjEgODAuMzI1NEMyNTYuMSA4Mi42NjM2IDI1NC41MjIgODQuNjM3NCAyNTIuMzQ3IDg1LjI3OTVMMjU2LjU4IDkyLjM5NjRMMjU2LjY3IDkyLjU0NzVIMjU2LjQ5NEgyNTQuOTg3SDI1NC45MjlMMjU0LjkgOTIuNDk4MkwyNTAuNzc4IDg1LjQ5MDNIMjQ1LjQ3NFpNMjQ1LjQ3NCA4NC4wNjE1SDI1MC44ODRDMjUyLjkyOSA4NC4wNjE1IDI1NC41OSA4Mi4zODU3IDI1NC41OSA4MC4zMjU0QzI1NC41OSA3OC4yNDA1IDI1Mi45MjkgNzYuNTY1MSAyNTAuODg0IDc2LjU2NTFIMjQ1LjQ3NFY4NC4wNjE1WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjY1LjU2NiA5Mi40NDc1VjkyLjU0NzVIMjY1LjQ2NkgyNjQuMTU2SDI2NC4wNTZWOTIuNDQ3NVY3NS4yMzYzVjc1LjEzNjNIMjY0LjE1NkgyNjUuNDY2SDI2NS41NjZWNzUuMjM2M1Y5Mi40NDc1WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjkwLjIzOCA3OS4wNzFMMjkwLjI4NyA3OS4xNTY2TDI5MC4yMDIgNzkuMjA3TDI4OS4wNDEgNzkuODk1NkwyODguOTUxIDc5Ljk0OTJMMjg4LjkwMiA3OS44NTYxQzI4Ny43ODMgNzcuNzI4MSAyODUuMzk4IDc2LjMxOTMgMjgyLjcxMyA3Ni4zMTkzQzI3OC4yMjMgNzYuMzE5MyAyNzUuMTI4IDc5LjY2NjIgMjc1LjEyOCA4My44NDE1QzI3NS4xMjggODguMDE2NCAyNzguMjIzIDkxLjM2MzcgMjgyLjgxMiA5MS4zNjM3QzI4Ni45MTggOTEuMzYzNyAyODkuNDA2IDg4Ljg3NTcgMjg5LjcyIDg1Ljc2MTRIMjgyLjQ5MUgyODIuMzkxVjg1LjY2MTRWODQuNDMxN1Y4NC4zMzE3SDI4Mi40OTFIMjkxLjE2NUgyOTEuMjY1Vjg0LjQzMTdWODUuMDk1OUMyOTEuMjY1IDg5LjMxIDI4OC4wMjggOTIuODE4MSAyODIuODEyIDkyLjgxODFDMjc3LjM5NCA5Mi44MTgxIDI3My42MTkgODguODE0NSAyNzMuNjE5IDgzLjg0MTVDMjczLjYxOSA3OC44Njk3IDI3Ny4zOTQgNzQuODY1NCAyODIuNzEzIDc0Ljg2NTRDMjg1Ljk2MSA3NC44NjU0IDI4OC43ODcgNzYuNTU2MSAyOTAuMjM4IDc5LjA3MVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTI5OC45MjQgNzUuMjM2Vjc1LjEzNkgyOTkuMDI0SDMwMC4zMzRIMzAwLjQzNFY3NS4yMzZWODYuNjkzNEMzMDAuNDM0IDg4LjA3NCAzMDAuODY2IDg5LjIzOSAzMDEuNjkgOTAuMDU4N0MzMDIuNTEzIDkwLjg3ODIgMzAzLjc0IDkxLjM2MzQgMzA1LjM1IDkxLjM2MzRDMzA2Ljk3MyA5MS4zNjM0IDMwOC4yMDYgOTAuODc4MSAzMDkuMDMzIDkwLjA1ODZDMzA5Ljg2IDg5LjIzODkgMzEwLjI5MSA4OC4wNzQgMzEwLjI5MSA4Ni42OTM0Vjc1LjIzNlY3NS4xMzZIMzEwLjM5MUgzMTEuNzAxSDMxMS44MDFWNzUuMjM2Vjg2LjY5MzRDMzExLjgwMSA4OC41Mzc1IDMxMS4xNTYgOTAuMDcxIDMxMC4wMjIgOTEuMTQzMUMzMDguODg4IDkyLjIxNDcgMzA3LjI3NCA5Mi44MTc4IDMwNS4zNSA5Mi44MTc4QzMwMy40MjcgOTIuODE3OCAzMDEuODE5IDkyLjIxNDcgMzAwLjY5MSA5MS4xNDI5QzI5OS41NjMgOTAuMDcwNyAyOTguOTI0IDg4LjUzNzIgMjk4LjkyNCA4Ni42OTM0Vjc1LjIzNlpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTMzMC42NTUgOTEuMTE3OUgzMzAuNzU1VjkxLjIxNzlWOTIuNDQ3MVY5Mi41NDcxSDMzMC42NTVIMzIwLjY5N0gzMjAuNTk3VjkyLjQ0NzFWNzUuMjM2Vjc1LjEzNkgzMjAuNjk3SDMzMC41MzJIMzMwLjYzMlY3NS4yMzZWNzYuNDY1MlY3Ni41NjUySDMzMC41MzJIMzIyLjEwN1Y4My4wNTM1SDMyOS45MTRIMzMwLjAxNFY4My4xNTM1Vjg0LjM4MjJWODQuNDgyMkgzMjkuOTE0SDMyMi4xMDdWOTEuMTE3OUgzMzAuNjU1WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMzQ4Ljc3IDkxLjExNzlIMzQ4Ljg3VjkxLjIxNzlWOTIuNDQ3MVY5Mi41NDcxSDM0OC43N0gzMzcuNzI0SDMzNy42MjRWOTIuNDQ3MVY5MS4yMTc5VjkxLjE4ODlMMzM3LjY0IDkxLjE2NDRMMzQ2Ljg4MyA3Ni41NjUySDMzNy45NzFIMzM3Ljg3MVY3Ni40NjUyVjc1LjIzNlY3NS4xMzZIMzM3Ljk3MUgzNDguNTIzSDM0OC42MjNWNzUuMjM2Vjc2LjQ2NTJWNzYuNDk0MkwzNDguNjA3IDc2LjUxODdMMzM5LjM2MyA5MS4xMTc5SDM0OC43N1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTM4My45NiA5Mi40NDcxVjkyLjU0NzFIMzgzLjg2SDM4Mi41NUgzODIuNDVWOTIuNDQ3MVY3Ny41MTIxTDM3Ni4yMzYgODcuNzc3OUwzNzYuMjA3IDg3LjgyNjFIMzc2LjE1SDM3NS45MjhIMzc1Ljg3MUwzNzUuODQyIDg3Ljc3NzlMMzY5LjYyOCA3Ny41MTIxVjkyLjQ0NzFWOTIuNTQ3MUgzNjkuNTI4SDM2OC4yMThIMzY4LjExOFY5Mi40NDcxVjc1LjIzNlY3NS4xMzZIMzY4LjIxOEgzNjkuODQ5SDM2OS45MDVMMzY5LjkzNSA3NS4xODQxTDM3Ni4wMjcgODUuMjIyM0wzODIuMTE5IDc1LjE4NDFMMzgyLjE0OCA3NS4xMzZIMzgyLjIwNEgzODMuODZIMzgzLjk2Vjc1LjIzNlY5Mi40NDcxWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNNDA4LjU0NyA4My44NDE1QzQwOC41NDcgNzkuNjY3MyA0MDUuMjU1IDc2LjMxOTMgNDAxLjAzNiA3Ni4zMTkzQzM5Ni44MTYgNzYuMzE5MyAzOTMuNTI1IDc5LjY2NzMgMzkzLjUyNSA4My44NDE1QzM5My41MjUgODguMDE2MiAzOTYuODE2IDkxLjM2MzcgNDAxLjAzNiA5MS4zNjM3QzQwNS4yNTUgOTEuMzYzNyA0MDguNTQ3IDg4LjAxNjIgNDA4LjU0NyA4My44NDE1Wk0zOTIuMDE1IDgzLjg0MTVDMzkyLjAxNSA3OC44Njg4IDM5NS45ODkgNzQuODY1NCA0MDEuMDM2IDc0Ljg2NTRDNDA2LjA4MiA3NC44NjU0IDQxMC4wNTYgNzguODY4OCA0MTAuMDU2IDgzLjg0MTVDNDEwLjA1NiA4OC44MTQ3IDQwNi4wODIgOTIuODE4MSA0MDEuMDM2IDkyLjgxODFDMzk1Ljk4OSA5Mi44MTgxIDM5Mi4wMTUgODguODE0NyAzOTIuMDE1IDgzLjg0MTVaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk00MTkuNjIxIDg1LjQ5MDNWOTIuNDQ3NVY5Mi41NDc1SDQxOS41MjFINDE4LjIxMUg0MTguMTExVjkyLjQ0NzVWNzUuMjM2M1Y3NS4xMzYzSDQxOC4yMTFINDI1LjAzMUM0MjcuOTAzIDc1LjEzNjMgNDMwLjI0NyA3Ny40NjcgNDMwLjI0NyA4MC4zMjU0QzQzMC4yNDcgODIuNjYzNiA0MjguNjY5IDg0LjYzNzQgNDI2LjQ5NCA4NS4yNzk1TDQzMC43MjcgOTIuMzk2NEw0MzAuODE3IDkyLjU0NzVINDMwLjY0MUg0MjkuMTMzSDQyOS4wNzZMNDI5LjA0NyA5Mi40OTgyTDQyNC45MjUgODUuNDkwM0g0MTkuNjIxWk00MTkuNjIxIDg0LjA2MTVINDI1LjAzMUM0MjcuMDc2IDg0LjA2MTUgNDI4LjczNyA4Mi4zODU3IDQyOC43MzcgODAuMzI1NEM0MjguNzM3IDc4LjI0MDUgNDI3LjA3NiA3Ni41NjUxIDQyNS4wMzEgNzYuNTY1MUg0MTkuNjIxVjg0LjA2MTVaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk00MzggOTIuNDgzM0w0MzcuOTc2IDkyLjU0NzVINDM3LjkwN0g0MzYuNTIzSDQzNi4zNzdMNDM2LjQzIDkyLjQxMTFMNDQzLjE1MiA3NS4yTDQ0My4xNzYgNzUuMTM2M0g0NDMuMjQ1SDQ0NC42MjhINDQ0LjY5N0w0NDQuNzIxIDc1LjIwMDFMNDUxLjQxOCA5Mi40MTEzTDQ1MS40NzEgOTIuNTQ3NUg0NTEuMzI1SDQ0OS45NDFINDQ5Ljg3Mkw0NDkuODQ4IDkyLjQ4MzRMNDQ4LjE5MiA4OC4xNzA4SDQzOS42NTZMNDM4IDkyLjQ4MzNaTTQ0MC4yMjcgODYuNzQxNUg0NDcuNjQ1TDQ0My45MzYgNzcuMTEyM0w0NDAuMjI3IDg2Ljc0MTVaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk00NjguMjUzIDkxLjExNzlINDY4LjM1M1Y5MS4yMTc5VjkyLjQ0NzFWOTIuNTQ3MUg0NjguMjUzSDQ1OC43ODlINDU4LjY4OVY5Mi40NDcxVjc1LjIzNlY3NS4xMzZINDU4Ljc4OUg0NjAuMDk5SDQ2MC4xOTlWNzUuMjM2VjkxLjExNzlINDY4LjI1M1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTQ4NS44NzMgOTEuMTE3OUg0ODUuOTczVjkxLjIxNzlWOTIuNDQ3MVY5Mi41NDcxSDQ4NS44NzNINDc1LjkxNEg0NzUuODE0VjkyLjQ0NzFWNzUuMjM2Vjc1LjEzNkg0NzUuOTE0SDQ4NS43NDlINDg1Ljg0OVY3NS4yMzZWNzYuNDY1MlY3Ni41NjUySDQ4NS43NDlINDc3LjMyNFY4My4wNTM1SDQ4NS4xMzFINDg1LjIzMVY4My4xNTM1Vjg0LjM4MjJWODQuNDgyMkg0ODUuMTMxSDQ3Ny4zMjRWOTEuMTE3OUg0ODUuODczWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNNDkyLjg5NSA4OC42OTE1TDQ5Mi44NyA4OC42MTQ5TDQ5Mi45NCA4OC41NzQyTDQ5NC4wNzcgODcuOTEwNEw0OTQuMTg4IDg3Ljg0NTZMNDk0LjIyMyA4Ny45NjkyQzQ5NC41MTQgODguOTgxNyA0OTUuMDg4IDg5LjgyODQgNDk1LjkzNiA5MC40MjI2QzQ5Ni43ODQgOTEuMDE3MiA0OTcuOTEyIDkxLjM2MzQgNDk5LjMxNiA5MS4zNjM0QzUwMC43NDYgOTEuMzYzNCA1MDEuODA4IDkwLjk5ODggNTAyLjUxIDkwLjQwMzhDNTAzLjIxMiA4OS44MTAxIDUwMy41NjUgODguOTc4NiA1MDMuNTY1IDg4LjAyMUM1MDMuNTY1IDg3LjAyNjIgNTAzLjEyOSA4Ni4zNDE1IDUwMi4zNjMgODUuNzk3NkM1MDEuNTg5IDg1LjI0ODYgNTAwLjQ4NiA4NC44NDY5IDQ5OS4xNjIgODQuNDI4N0w0OTkuMTYyIDg0LjQyODVDNDk5LjEzMyA4NC40MTkzIDQ5OS4xMDUgODQuNDEwMSA0OTkuMDc2IDg0LjQwMDlDNDk3LjY2NiA4My45NDUzIDQ5Ni4zMTMgODMuNTA4MSA0OTUuMzA5IDgyLjgxNzNDNDk0Ljc5NCA4Mi40NjM1IDQ5NC4zNjggODIuMDQxIDQ5NC4wNyA4MS41MTIyQzQ5My43NzMgODAuOTgzIDQ5My42MDcgODAuMzUyNiA0OTMuNjA3IDc5LjU4NzZDNDkzLjYwNyA3OC4xNDQzIDQ5NC4xOTQgNzYuOTYwOCA0OTUuMTU5IDc2LjEzOTdDNDk2LjEyMiA3NS4zMTk3IDQ5Ny40NTYgNzQuODY1IDQ5OC45NDYgNzQuODY1QzUwMS44MzIgNzQuODY1IDUwMy43NDQgNzYuNTE2MiA1MDQuNTk4IDc4LjU0MDZMNTA0LjYzMyA3OC42MjM1TDUwNC41NTQgNzguNjY3TDUwMy40NDIgNzkuMjgxOEw1MDMuMzQ0IDc5LjMzNTlMNTAzLjMwMSA3OS4yMzI3QzUwMi45ODUgNzguNDcwNCA1MDIuNSA3Ny43NDI1IDUwMS43OTUgNzcuMjA1NEM1MDEuMDkgNzYuNjY5MiA1MDAuMTYxIDc2LjMxOSA0OTguOTQ2IDc2LjMxOUM0OTcuNzY2IDc2LjMxOSA0OTYuODE1IDc2LjY2MzcgNDk2LjE2IDc3LjIzNUM0OTUuNTA2IDc3LjgwNTQgNDk1LjE0MSA3OC42MDc1IDQ5NS4xNDEgNzkuNTM4NkM0OTUuMTQxIDgwLjA0MDIgNDk1LjI0OCA4MC40NTAyIDQ5NS40NDEgODAuNzk2NUM0OTUuNjM1IDgxLjE0MzMgNDk1LjkyIDgxLjQzMTYgNDk2LjI4NCA4MS42ODQ4QzQ5Ny4wMTggODIuMTk0MiA0OTguMDU5IDgyLjU1MjYgNDk5LjI5OCA4Mi45NTkyTDQ5OS4yOTggODIuOTU5MkM1MDAuODI3IDgzLjQ2MjQgNTAyLjI3NSA4My45NTg1IDUwMy4zNCA4NC43MDYzQzUwNC40MTIgODUuNDU5MyA1MDUuMSA4Ni40NzEzIDUwNS4xIDg3Ljk5NjhDNTA1LjEgODkuNDUxMyA1MDQuNTI1IDkwLjY2MDIgNTAzLjUxIDkxLjUwMzhDNTAyLjQ5NiA5Mi4zNDU4IDUwMS4wNTEgOTIuODE3OCA0OTkuMzE2IDkyLjgxNzhDNDk2LjA0NCA5Mi44MTc4IDQ5My43MDIgOTEuMTczOSA0OTIuODk1IDg4LjY5MTVaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xNzUuNjU2IDEyMS45OUwxNzUuNjMxIDEyMi4wNTVIMTc1LjU2MkgxNzQuMTc4SDE3NC4wMzJMMTc0LjA4NSAxMjEuOTE4TDE4MC44MDcgMTA0LjcwN0wxODAuODMyIDEwNC42NDNIMTgwLjlIMTgyLjI4NEgxODIuMzUyTDE4Mi4zNzcgMTA0LjcwN0wxODkuMDczIDEyMS45MThMMTg5LjEyNiAxMjIuMDU1SDE4OC45OEgxODcuNTk3SDE4Ny41MjhMMTg3LjUwMyAxMjEuOTlMMTg1Ljg0OCAxMTcuNjc4SDE3Ny4zMTFMMTc1LjY1NiAxMjEuOTlaTTE3Ny44ODMgMTE2LjI0OUgxODUuMzAxTDE4MS41OTIgMTA2LjYxOUwxNzcuODgzIDExNi4yNDlaXCIgZmlsbD1cIiNBRjFCMjZcIiBzdHJva2U9XCIjQUYxQjI2XCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTk2LjQ0NCAxMjIuMDU0SDE5Ni4zNDRWMTIxLjk1NFYxMDQuNzQzVjEwNC42NDNIMTk2LjQ0NEgyMDMuMzM4QzIwNS45MTMgMTA0LjY0MyAyMDcuOTg1IDEwNi43MjggMjA3Ljk4NSAxMDkuMjY3QzIwNy45ODUgMTEwLjkgMjA3LjE1NCAxMTIuMjYgMjA1Ljg4OSAxMTMuMDE1QzIwNy41NTMgMTEzLjczNCAyMDguNzI2IDExNS4zMiAyMDguNzI2IDExNy4yNTlDMjA4LjcyNiAxMTkuOTIgMjA2LjU4IDEyMi4wNTQgMjAzLjkwNiAxMjIuMDU0SDE5Ni40NDRaTTIwNy4yMTYgMTE3LjI1OUMyMDcuMjE2IDExNS4zOTQgMjA1LjcyOCAxMTMuODkyIDIwMy45MDYgMTEzLjg5MkgxOTcuODU0VjEyMC42MjVIMjAzLjkwNkMyMDUuNzI4IDEyMC42MjUgMjA3LjIxNiAxMTkuMTIzIDIwNy4yMTYgMTE3LjI1OVpNMTk3Ljg1NCAxMDYuMDczVjExMi40NjJIMjAzLjMzOEMyMDUuMDYgMTEyLjQ2MiAyMDYuNDc1IDExMS4wMzMgMjA2LjQ3NSAxMDkuMjY3QzIwNi40NzUgMTA3LjUwMSAyMDUuMDYgMTA2LjA3MyAyMDMuMzM4IDEwNi4wNzNIMTk3Ljg1NFpcIiBmaWxsPVwiI0FGMUIyNlwiIHN0cm9rZT1cIiNBRjFCMjZcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yMzIuMjI1IDExMy4zNDlDMjMyLjIyNSAxMDkuMTc1IDIyOC45MzMgMTA1LjgyNyAyMjQuNzE0IDEwNS44MjdDMjIwLjQ5NSAxMDUuODI3IDIxNy4yMDMgMTA5LjE3NSAyMTcuMjAzIDExMy4zNDlDMjE3LjIwMyAxMTcuNTI0IDIyMC40OTUgMTIwLjg3MSAyMjQuNzE0IDEyMC44NzFDMjI4LjkzMyAxMjAuODcxIDIzMi4yMjUgMTE3LjUyNCAyMzIuMjI1IDExMy4zNDlaTTIxNS42OTMgMTEzLjM0OUMyMTUuNjkzIDEwOC4zNzYgMjE5LjY2OCAxMDQuMzczIDIyNC43MTQgMTA0LjM3M0MyMjkuNzYxIDEwNC4zNzMgMjMzLjczNSAxMDguMzc2IDIzMy43MzUgMTEzLjM0OUMyMzMuNzM1IDExOC4zMjIgMjI5Ljc2MSAxMjIuMzI1IDIyNC43MTQgMTIyLjMyNUMyMTkuNjY4IDEyMi4zMjUgMjE1LjY5MyAxMTguMzIyIDIxNS42OTMgMTEzLjM0OVpcIiBmaWxsPVwiI0FGMUIyNlwiIHN0cm9rZT1cIiNBRjFCMjZcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yNTcuNDIgMTA4LjU3OEwyNTcuNDcgMTA4LjY2NEwyNTcuMzg1IDEwOC43MTRMMjU2LjIyMyAxMDkuNDAyTDI1Ni4xMzMgMTA5LjQ1NkwyNTYuMDg0IDEwOS4zNjNDMjU0Ljk2NiAxMDcuMjM1IDI1Mi41OCAxMDUuODI3IDI0OS44OTYgMTA1LjgyN0MyNDUuNDA2IDEwNS44MjcgMjQyLjMxMSAxMDkuMTc0IDI0Mi4zMTEgMTEzLjM0OUMyNDIuMzExIDExNy41MjQgMjQ1LjQwNSAxMjAuODcxIDI0OS45OTQgMTIwLjg3MUMyNTQuMTAxIDEyMC44NzEgMjU2LjU4OCAxMTguMzgzIDI1Ni45MDMgMTE1LjI2OUgyNDkuNjczSDI0OS41NzNWMTE1LjE2OVYxMTMuOTM5VjExMy44MzlIMjQ5LjY3M0gyNTguMzQ3SDI1OC40NDdWMTEzLjkzOVYxMTQuNjAzQzI1OC40NDcgMTE4LjgxNyAyNTUuMjExIDEyMi4zMjUgMjQ5Ljk5NCAxMjIuMzI1QzI0NC41NzcgMTIyLjMyNSAyNDAuODAxIDExOC4zMjIgMjQwLjgwMSAxMTMuMzQ5QzI0MC44MDEgMTA4LjM3NyAyNDQuNTc2IDEwNC4zNzMgMjQ5Ljg5NiAxMDQuMzczQzI1My4xNDMgMTA0LjM3MyAyNTUuOTY5IDEwNi4wNjMgMjU3LjQyIDEwOC41NzhaXCIgZmlsbD1cIiNBRjFCMjZcIiBzdHJva2U9XCIjQUYxQjI2XCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjY1LjY1OCAxMjEuOTlMMjY1LjYzMyAxMjIuMDU1SDI2NS41NjVIMjY0LjE4MUgyNjQuMDM0TDI2NC4wODcgMTIxLjkxOEwyNzAuODA5IDEwNC43MDdMMjcwLjgzNCAxMDQuNjQzSDI3MC45MDJIMjcyLjI4NkgyNzIuMzU0TDI3Mi4zNzkgMTA0LjcwN0wyNzkuMDc2IDEyMS45MThMMjc5LjEyOSAxMjIuMDU1SDI3OC45ODJIMjc3LjU5OUgyNzcuNTNMMjc3LjUwNSAxMjEuOTlMMjc1Ljg1IDExNy42NzhIMjY3LjMxM0wyNjUuNjU4IDEyMS45OVpNMjY3Ljg4NSAxMTYuMjQ5SDI3NS4zMDNMMjcxLjU5NCAxMDYuNjE5TDI2Ny44ODUgMTE2LjI0OVpcIiBmaWxsPVwiI0FGMUIyNlwiIHN0cm9rZT1cIiNBRjFCMjZcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yODYuNDQ2IDEyMi4wNTRIMjg2LjM0NlYxMjEuOTU0VjEwNC43NDRWMTA0LjY0NEgyODYuNDQ2SDI5Mi45NDVDMjk3Ljc3NyAxMDQuNjQ0IDMwMS4yIDEwOC41NTUgMzAxLjIgMTEzLjM0OUMzMDEuMiAxMTguMTQyIDI5Ny43NzcgMTIyLjA1NCAyOTIuOTQ1IDEyMi4wNTRIMjg2LjQ0NlpNMjk5LjcxNCAxMTMuMzQ5QzI5OS43MTQgMTA5LjMxMyAyOTYuOTU4IDEwNi4wNzMgMjkyLjk0NSAxMDYuMDczSDI4Ny44NTZWMTIwLjYyNUgyOTIuOTQ1QzI5Ni45NTggMTIwLjYyNSAyOTkuNzE0IDExNy4zODUgMjk5LjcxNCAxMTMuMzQ5WlwiIGZpbGw9XCIjQUYxQjI2XCIgc3Ryb2tlPVwiI0FGMUIyNlwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTMyNC43OTcgMTEzLjM0OUMzMjQuNzk3IDEwOS4xNzUgMzIxLjUwNSAxMDUuODI3IDMxNy4yODYgMTA1LjgyN0MzMTMuMDY3IDEwNS44MjcgMzA5Ljc3NiAxMDkuMTc1IDMwOS43NzYgMTEzLjM0OUMzMDkuNzc2IDExNy41MjQgMzEzLjA2NyAxMjAuODcxIDMxNy4yODYgMTIwLjg3MUMzMjEuNTA1IDEyMC44NzEgMzI0Ljc5NyAxMTcuNTI0IDMyNC43OTcgMTEzLjM0OVpNMzA4LjI2NiAxMTMuMzQ5QzMwOC4yNjYgMTA4LjM3NiAzMTIuMjQgMTA0LjM3MyAzMTcuMjg2IDEwNC4zNzNDMzIyLjMzMyAxMDQuMzczIDMyNi4zMDcgMTA4LjM3NiAzMjYuMzA3IDExMy4zNDlDMzI2LjMwNyAxMTguMzIyIDMyMi4zMzMgMTIyLjMyNSAzMTcuMjg2IDEyMi4zMjVDMzEyLjI0IDEyMi4zMjUgMzA4LjI2NiAxMTguMzIyIDMwOC4yNjYgMTEzLjM0OVpcIiBmaWxsPVwiI0FGMUIyNlwiIHN0cm9rZT1cIiNBRjFCMjZcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0zMzIuNzExIDExOC4xOTlMMzMyLjY4NiAxMTguMTIyTDMzMi43NTYgMTE4LjA4MkwzMzMuODkyIDExNy40MThMMzM0LjAwNCAxMTcuMzUzTDMzNC4wMzkgMTE3LjQ3NkMzMzQuMzMgMTE4LjQ4OSAzMzQuOTA0IDExOS4zMzYgMzM1Ljc1MiAxMTkuOTNDMzM2LjYgMTIwLjUyNSAzMzcuNzI4IDEyMC44NzEgMzM5LjEzMiAxMjAuODcxQzM0MC41NjIgMTIwLjg3MSAzNDEuNjIzIDEyMC41MDYgMzQyLjMyNiAxMTkuOTExQzM0My4wMjcgMTE5LjMxNyAzNDMuMzgxIDExOC40ODYgMzQzLjM4MSAxMTcuNTI4QzM0My4zODEgMTE2LjUzMyAzNDIuOTQ0IDExNS44NDkgMzQyLjE3OCAxMTUuMzA1QzM0MS40MDUgMTE0Ljc1NiAzNDAuMzAyIDExNC4zNTQgMzM4Ljk3OCAxMTMuOTM2TDMzOC45NzggMTEzLjkzNkMzMzguOTQ5IDExMy45MjcgMzM4LjkyIDExMy45MTcgMzM4Ljg5MiAxMTMuOTA4QzMzNy40ODIgMTEzLjQ1MyAzMzYuMTI5IDExMy4wMTUgMzM1LjEyNSAxMTIuMzI1QzMzNC42MSAxMTEuOTcxIDMzNC4xODMgMTExLjU0OCAzMzMuODg2IDExMS4wMkMzMzMuNTg4IDExMC40OSAzMzMuNDIyIDEwOS44NiAzMzMuNDIyIDEwOS4wOTVDMzMzLjQyMiAxMDcuNjUyIDMzNC4wMSAxMDYuNDY4IDMzNC45NzQgMTA1LjY0N0MzMzUuOTM3IDEwNC44MjcgMzM3LjI3MSAxMDQuMzcyIDMzOC43NjEgMTA0LjM3MkMzNDEuNjQ4IDEwNC4zNzIgMzQzLjU1OSAxMDYuMDI0IDM0NC40MTQgMTA4LjA0OEwzNDQuNDQ5IDEwOC4xMzFMMzQ0LjM3IDEwOC4xNzRMMzQzLjI1NyAxMDguNzg5TDM0My4xNiAxMDguODQzTDM0My4xMTcgMTA4Ljc0QzM0Mi44MDEgMTA3Ljk3OCAzNDIuMzE2IDEwNy4yNSAzNDEuNjEgMTA2LjcxM0MzNDAuOTA2IDEwNi4xNzcgMzM5Ljk3NiAxMDUuODI2IDMzOC43NjEgMTA1LjgyNkMzMzcuNTgyIDEwNS44MjYgMzM2LjYzMSAxMDYuMTcxIDMzNS45NzYgMTA2Ljc0MkMzMzUuMzIyIDEwNy4zMTMgMzM0Ljk1NyAxMDguMTE1IDMzNC45NTcgMTA5LjA0NkMzMzQuOTU3IDEwOS41NDggMzM1LjA2MyAxMDkuOTU4IDMzNS4yNTcgMTEwLjMwNEMzMzUuNDUxIDExMC42NTEgMzM1LjczNiAxMTAuOTM5IDMzNi4xIDExMS4xOTJDMzM2LjgzMyAxMTEuNzAyIDMzNy44NzQgMTEyLjA2IDMzOS4xMTQgMTEyLjQ2NkwzMzkuMTE0IDExMi40NjdDMzQwLjY0MyAxMTIuOTcgMzQyLjA5MSAxMTMuNDY2IDM0My4xNTUgMTE0LjIxNEMzNDQuMjI3IDExNC45NjcgMzQ0LjkxNSAxMTUuOTc5IDM0NC45MTUgMTE3LjUwNEMzNDQuOTE1IDExOC45NTggMzQ0LjM0MSAxMjAuMTY3IDM0My4zMjYgMTIxLjAxMUMzNDIuMzEyIDEyMS44NTMgMzQwLjg2NyAxMjIuMzI1IDMzOS4xMzIgMTIyLjMyNUMzMzUuODU5IDEyMi4zMjUgMzMzLjUxNyAxMjAuNjgxIDMzMi43MTEgMTE4LjE5OVpcIiBmaWxsPVwiI0FGMUIyNlwiIHN0cm9rZT1cIiNBRjFCMjZcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xMTEuOTA0IDQxLjg0NTRMOTkuNDkxMyA1NC4xOTU4TDExNC44NzIgNjkuNUw2OS44NDg1IDExNC4zTDI0LjgyNDUgNjkuNUw2OS44NDg1IDI0LjcwMDhMODcuMDU3NCA0MS44MjM5TDk5LjQ2OTYgMjkuNDczOUw2OS44NDg1IC0yLjY4MjU2ZS0wNkwwIDY5LjVMNjkuODQ4NSAxMzlMMTM5LjY5NyA2OS41TDExMS45MDQgNDEuODQ1NFpcIiBmaWxsPVwiI0FGMUIyNlwiLz5cclxuPHBhdGggZD1cIk0xMTEuOTAzIDQxLjg0NTZMOTkuNDY5NSAyOS40NzQxTDExMS45MDMgMTcuMTAyMUwxMjQuMzM3IDI5LjQ3NDFMMTExLjkwMyA0MS44NDU2WlwiIGZpbGw9XCIjRjkzMDNFXCIvPlxyXG48L3N2Zz5cclxuXHJcblxyXG5cclxuXHJcbmxldCBsb2dvMiA9IDxzdmcgd2lkdGg9XCIzNTFcIiBoZWlnaHQ9XCI1MDlcIiB2aWV3Qm94PVwiMCAwIDM1MSA1MDlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgPHBhdGggZD1cIk0yMjguMzk1IDI3NC4zMzJMMTczLjg4OSAzMjguMTQ2TDI0MS40MyAzOTQuODMxTDQzLjcyMTIgNTkwLjAzNUwtMTUzLjk5IDM5NC44MzFMNDMuNzIxMiAxOTkuNjI4TDExOS4yODkgMjc0LjIzOEwxNzMuNzk0IDIyMC40MjZMNDMuNzIxMiA5MkwtMjYzIDM5NC44MzFMNDMuNzIxMiA2OTcuNjYxTDM1MC40NCAzOTQuODMxTDIyOC4zOTUgMjc0LjMzMlpcIiBmaWxsPVwiIzY2NjY2NlwiIGZpbGxPcGFjaXR5PVwiMC4xXCIgLz5cclxuICAgPHBhdGggZD1cIk0yMjguNDA5IDI3NC4zNTlMMTczLjgwNyAyMjAuNDUzTDIyOC40MDkgMTY2LjU0NUwyODMuMDA5IDIyMC40NTNMMjI4LjQwOSAyNzQuMzU5WlwiIGZpbGw9XCIjNjY2NjY2XCIgZmlsbE9wYWNpdHk9XCIwLjFcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTE0Ni4zNDggOC42MzYwNFYxNy43OTg4SDE0NS42MzhWMTMuNDEzOUgxNDAuMTgxVjE3Ljc5ODhIMTM5LjQ3VjguNjM2MDRIMTQwLjE4MVYxMi43NTkySDE0NS42MzhWOC42MzYwNEgxNDYuMzQ4WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0xNTYuNTEyIDE0LjgxNDRMMTU0LjQyIDkuNDg2OTFMMTUyLjMyOSAxNC44MTQ0SDE1Ni41MTJaTTE1Ni43NjcgMTUuNDY5SDE1Mi4wNkwxNTEuMTQ5IDE3Ljc5OTFIMTUwLjM5OEwxNTQuMDQ1IDguNjM2MDVIMTU0Ljc5NkwxNTguNDI5IDE3Ljc5OTFIMTU3LjY3OEwxNTYuNzY3IDE1LjQ2OVpcIiBmaWxsPVwiIzY2NjY2NlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMTY5LjM1NyA4LjYzNjA0VjE3Ljc5ODhIMTY4LjcyN0wxNjMuMTg5IDkuOTE4OFYxNy43OTg4SDE2Mi40NzlWOC42MzYwNEgxNjMuMDk1TDE2OC42NDYgMTYuNTE2MVY4LjYzNjA0SDE2OS4zNTdaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTE4My4zMDEgMTMuODg1M0MxODMuMzAxIDE2LjA5NzMgMTgxLjU3MiAxNy45NDI5IDE3OC43NjkgMTcuOTQyOUMxNzUuODYgMTcuOTQyOSAxNzMuODM1IDE1LjgzNTYgMTczLjgzNSAxMy4yMTc0QzE3My44MzUgMTAuNTk5OCAxNzUuODYgOC40OTIgMTc4LjcxNiA4LjQ5MkMxODAuNDU5IDguNDkyIDE4MS45NzQgOS4zODIzNCAxODIuNzUxIDEwLjcwNDNMMTgyLjEyMSAxMS4wNzA3QzE4MS41MDQgOS45MTg3OSAxODAuMTkxIDkuMTU5NTggMTc4LjcxNiA5LjE1OTU4QzE3Ni4yNDkgOS4xNTk1OCAxNzQuNTQ2IDEwLjk2NjEgMTc0LjU0NiAxMy4yMTc0QzE3NC41NDYgMTUuNDY5IDE3Ni4yNDkgMTcuMjc1MyAxNzguNzY5IDE3LjI3NTNDMTgxLjA0OSAxNy4yNzUzIDE4Mi40MyAxNS45MDA5IDE4Mi41NzcgMTQuMTg2M0gxNzguNTk1VjEzLjUzMTZIMTgzLjMwMVYxMy44ODUzWlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0xOTkuNDQ1IDE3Ljc5ODhMMTk0LjczOSAxMy4yODI4VjE3Ljc5ODhIMTk0LjAyOFY4LjYzNjA0SDE5NC43MzlWMTIuOTAzM0wxOTkuMzExIDguNjM2MDRIMjAwLjI2M0wxOTUuNTE2IDEzLjA4NjZMMjAwLjM5NyAxNy43OTg4SDE5OS40NDVaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTIwMy44NDMgMTQuNzM1OVY4LjYzNjA0SDIwNC41NTRWMTQuNzM1OUMyMDQuNTU0IDE2LjIyOCAyMDUuNTA1IDE3LjI3NTMgMjA3LjI3NSAxNy4yNzUzQzIwOS4wNTggMTcuMjc1MyAyMTAuMDEgMTYuMjI4IDIxMC4wMSAxNC43MzU5VjguNjM2MDRIMjEwLjcyMVYxNC43MzU5QzIxMC43MjEgMTYuNjczIDIwOS4zNCAxNy45NDI5IDIwNy4yNzUgMTcuOTQyOUMyMDUuMjExIDE3Ljk0MjkgMjAzLjg0MyAxNi42NzMgMjAzLjg0MyAxNC43MzU5WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0yMTUuMDY2IDEzLjIxNzRDMjE1LjA2NiAxMC41OTk1IDIxNy4wOSA4LjQ5MiAyMTkuOTQ2IDguNDkyQzIyMS42NzYgOC40OTIgMjIzLjE5MSA5LjM1NjAyIDIyMy45NjggMTAuNjkwOUwyMjMuMzM4IDExLjA0NDNDMjIyLjcyMSA5LjkxODc5IDIyMS40MjEgOS4xNTk1OCAyMTkuOTQ2IDkuMTU5NThDMjE3LjQ3OSA5LjE1OTU4IDIxNS43NzYgMTAuOTY1OSAyMTUuNzc2IDEzLjIxNzRDMjE1Ljc3NiAxNS40NjkgMjE3LjQ3OSAxNy4yNzUzIDIxOS45NDYgMTcuMjc1M0MyMjEuNDM0IDE3LjI3NTMgMjIyLjc0OCAxNi41MDI5IDIyMy4zNjUgMTUuMzUxTDIyMy45OTUgMTUuNzA0NUMyMjMuMjMxIDE3LjA1MjggMjIxLjcwMyAxNy45NDI5IDIxOS45NDYgMTcuOTQyOUMyMTcuMDkgMTcuOTQyOSAyMTUuMDY2IDE1LjgzNTMgMjE1LjA2NiAxMy4yMTc0WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0yMzUuMjMxIDguNjM2MDRWMTcuNzk4OEgyMzQuNTJWMTMuNDEzOUgyMjkuMDY0VjE3Ljc5ODhIMjI4LjM1M1Y4LjYzNjA0SDIyOS4wNjRWMTIuNzU5MkgyMzQuNTJWOC42MzYwNEgyMzUuMjMxWlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0yNDUuNjUgMTcuMTQ0NFYxNy43OTg4SDI0MC4yNDdWOC42MzYwNEgyNDUuNTgzVjkuMjkwNDZIMjQwLjk1N1YxMi44NTA5SDI0NS4yNDhWMTMuNTA1NUgyNDAuOTU3VjE3LjE0NDRIMjQ1LjY1WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0yNTYuOTUzIDguNjM2MDRWMTcuNzk4OEgyNTYuMzIzTDI1MC43ODUgOS45MTg4VjE3Ljc5ODhIMjUwLjA3NVY4LjYzNjA0SDI1MC42OTJMMjU2LjI0MiAxNi41MTYxVjguNjM2MDRIMjU2Ljk1M1pcIiBmaWxsPVwiIzY2NjY2NlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMTM4LjkwNyAzMS40OTE5TDEzOS41MjQgMzEuMTM4NUMxMzkuODQ1IDMyLjIzODIgMTQwLjc5NyAzMi45ODQzIDE0Mi4zMzkgMzIuOTg0M0MxNDMuOTA4IDMyLjk4NDMgMTQ0LjY5OSAzMi4xOTg3IDE0NC42OTkgMzEuMTUxN0MxNDQuNjk5IDMwLjA1MiAxNDMuNzA3IDI5LjYzMzIgMTQyLjI3MiAyOS4xODgyQzE0MC43MDMgMjguNjkwNyAxMzkuMjk1IDI4LjI1ODggMTM5LjI5NSAyNi42NjE5QzEzOS4yOTUgMjUuMTU2NCAxNDAuNTQyIDI0LjIwMSAxNDIuMTM4IDI0LjIwMUMxNDMuNjggMjQuMjAxIDE0NC42OTkgMjUuMDY0OCAxNDUuMTU1IDI2LjEyNTJMMTQ0LjU1MSAyNi40NTIzQzE0NC4yMDMgMjUuNjI3OCAxNDMuNDc5IDI0Ljg2ODYgMTQyLjEzOCAyNC44Njg2QzE0MC44MzcgMjQuODY4NiAxNDAuMDIgMjUuNjE0NiAxNDAuMDIgMjYuNjM1NkMxNDAuMDIgMjcuNzM1MSAxNDAuOTcyIDI4LjA3NTYgMTQyLjMxMiAyOC41MDc0QzE0My45NzUgMjkuMDQ0MSAxNDUuNDIzIDI5LjU1NDUgMTQ1LjQyMyAzMS4xMzg1QzE0NS40MjMgMzIuNjU2OSAxNDQuMjAzIDMzLjY1MTYgMTQyLjMzOSAzMy42NTE2QzE0MC41ODMgMzMuNjUxNiAxMzkuMzM2IDMyLjc4ODEgMTM4LjkwNyAzMS40OTE5WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0xNTUuMTg0IDI3LjE4NTVDMTU1LjE4NCAyNS45MTU2IDE1NC4yNTkgMjQuOTk5NCAxNTIuOTcyIDI0Ljk5OTRIMTUwLjQ5MVYyOS4zNTgzSDE1Mi45NzJDMTU0LjI1OSAyOS4zNTgzIDE1NS4xODQgMjguNDQyMSAxNTUuMTg0IDI3LjE4NTVaTTE1NS44OTUgMjcuMTg1NUMxNTUuODk1IDI4Ljc5NTUgMTU0LjY2MSAzMC4wMTMgMTUyLjk3MiAzMC4wMTNIMTUwLjQ5MVYzMy41MDc4SDE0OS43ODFWMjQuMzQ1SDE1Mi45NzJDMTU0LjY2MSAyNC4zNDUgMTU1Ljg5NSAyNS41NjIyIDE1NS44OTUgMjcuMTg1NVpcIiBmaWxsPVwiIzY2NjY2NlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMTY4LjcgMjguOTI2MkMxNjguNyAyNi42NzQ2IDE2Ni44OSAyNC44NjgzIDE2NC41NyAyNC44NjgzQzE2Mi4yNTEgMjQuODY4MyAxNjAuNDQxIDI2LjY3NDYgMTYwLjQ0MSAyOC45MjYyQzE2MC40NDEgMzEuMTc3OCAxNjIuMjUxIDMyLjk4NCAxNjQuNTcgMzIuOTg0QzE2Ni44OSAzMi45ODQgMTY4LjcgMzEuMTc3OCAxNjguNyAyOC45MjYyWk0xNTkuNzMgMjguOTI2MkMxNTkuNzMgMjYuMzA4MyAxNjEuODYyIDI0LjIwMDcgMTY0LjU3IDI0LjIwMDdDMTY3LjI3OCAyNC4yMDA3IDE2OS40MSAyNi4zMDgzIDE2OS40MSAyOC45MjYyQzE2OS40MSAzMS41NDQxIDE2Ny4yNzggMzMuNjUxNiAxNjQuNTcgMzMuNjUxNkMxNjEuODYyIDMzLjY1MTYgMTU5LjczIDMxLjU0NDEgMTU5LjczIDI4LjkyNjJaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTE3NC42IDI5LjA5NjRIMTc3LjU5QzE3OC43MyAyOS4wOTY0IDE3OS42NTUgMjguMTgwMiAxNzkuNjU1IDI3LjA1NDRDMTc5LjY1NSAyNS45MTU1IDE3OC43MyAyNC45OTkzIDE3Ny41OSAyNC45OTkzSDE3NC42VjI5LjA5NjRaTTE3Ny41NjMgMjkuNzUwOEgxNzQuNlYzMy41MDc3SDE3My44OVYyNC4zNDQ5SDE3Ny41OUMxNzkuMTE5IDI0LjM0NDkgMTgwLjM2NSAyNS41NjIxIDE4MC4zNjUgMjcuMDU0NEMxODAuMzY1IDI4LjI5OCAxNzkuNDk0IDI5LjM0NTMgMTc4LjMwMSAyOS42NTk0TDE4MC42MzQgMzMuNTA3N0gxNzkuODE2TDE3Ny41NjMgMjkuNzUwOFpcIiBmaWxsPVwiIzY2NjY2NlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMTg5LjkyNSAzMi44NTM0VjMzLjUwNzhIMTg0Ljc5VjI0LjM0NUgxODUuNTAxVjMyLjg1MzRIMTg5LjkyNVpcIiBmaWxsPVwiIzY2NjY2NlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMTk5LjQ4NSAzMi44NTM0VjMzLjUwNzhIMTk0LjA4MlYyNC4zNDVIMTk5LjQxOFYyNC45OTk0SDE5NC43OTNWMjguNTU5OEgxOTkuMDgzVjI5LjIxNDVIMTk0Ljc5M1YzMi44NTM0SDE5OS40ODVaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTIxMS4xNjMgMjguOTI2M0MyMTEuMTYzIDI2Ljc1MzIgMjA5LjY0OCAyNC45OTkzIDIwNy40MzYgMjQuOTk5M0gyMDQuNjJWMzIuODUzM0gyMDcuNDM2QzIwOS42NDggMzIuODUzMyAyMTEuMTYzIDMxLjA5OTIgMjExLjE2MyAyOC45MjYzWk0yMTEuODYgMjguOTI2M0MyMTEuODYgMzEuNDUyNiAyMTAuMDI0IDMzLjUwNzcgMjA3LjQzNiAzMy41MDc3SDIwMy45MVYyNC4zNDQ5SDIwNy40MzZDMjEwLjAyNCAyNC4zNDQ5IDIxMS44NiAyNi4zOTk4IDIxMS44NiAyOC45MjYzWlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0yMjEuNzQzIDMyLjg1MzRWMzMuNTA3OEgyMTYuMzM5VjI0LjM0NUgyMjEuNjc2VjI0Ljk5OTRIMjE3LjA1VjI4LjU1OThIMjIxLjM0MVYyOS4yMTQ1SDIxNy4wNVYzMi44NTM0SDIyMS43NDNaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTIyNi44NzggMjkuMDk2NEgyMjkuODY4QzIzMS4wMDggMjkuMDk2NCAyMzEuOTMzIDI4LjE4MDIgMjMxLjkzMyAyNy4wNTQ0QzIzMS45MzMgMjUuOTE1NSAyMzEuMDA4IDI0Ljk5OTMgMjI5Ljg2OCAyNC45OTkzSDIyNi44NzhWMjkuMDk2NFpNMjI5Ljg0MSAyOS43NTA4SDIyNi44NzhWMzMuNTA3N0gyMjYuMTY3VjI0LjM0NDlIMjI5Ljg2OEMyMzEuMzk3IDI0LjM0NDkgMjMyLjY0MyAyNS41NjIxIDIzMi42NDMgMjcuMDU0NEMyMzIuNjQzIDI4LjI5OCAyMzEuNzcyIDI5LjM0NTMgMjMwLjU3OSAyOS42NTk0TDIzMi45MTIgMzMuNTA3N0gyMzIuMDk0TDIyOS44NDEgMjkuNzUwOFpcIiBmaWxsPVwiIzY2NjY2NlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMjQ3LjE2NSAzMS41NzA1TDI0NS40NDkgMjkuNzY0MkwyNDUuMzY4IDI5LjY4NTVDMjQ1LjAyIDI5Ljk2MDQgMjQ0Ljg3MiAzMC4zMzk5IDI0NC44NzIgMzAuNzA2NUMyNDQuODcyIDMxLjMyMTYgMjQ1LjI3NCAzMS43Nzk5IDI0Ni4yMjYgMzEuNzc5OUMyNDYuNTc1IDMxLjc3OTkgMjQ2Ljg4MyAzMS43MTQ1IDI0Ny4xNjUgMzEuNTcwNVYzMS41NzA1Wk0yNDkuMzEgMzMuODQ4MUwyNDguNDc5IDMyLjk3MTJDMjQ3LjgyMiAzMy40MTYgMjQ3LjAxNyAzMy42OTA5IDI0Ni4wNTIgMzMuNjkwOUMyNDQuMTIxIDMzLjY5MDkgMjQyLjcgMzIuNjU3IDI0Mi43IDMwLjkyOUMyNDIuNyAyOS44ODE3IDI0My4yMzYgMjguOTAwMiAyNDQuMjAyIDI4LjI5NzlDMjQzLjk2IDI3Ljg5MjEgMjQzLjgxMyAyNy40MzM5IDI0My44MTMgMjYuODQ0OEMyNDMuODEzIDI1LjMwMDMgMjQ1LjAzMyAyNC4xNjE2IDI0Ni44MyAyNC4xNjE2QzI0OC4xODQgMjQuMTYxNiAyNDkuMzM3IDI0LjgxNiAyNDkuOTEzIDI2LjE2NDNMMjQ4LjA3NyAyNy4xOTg1QzI0Ny44MzUgMjYuNTgzMyAyNDcuNDYgMjYuMjAzNiAyNDYuODU3IDI2LjIwMzZDMjQ2LjMyIDI2LjIwMzYgMjQ1Ljk1OCAyNi41MzA5IDI0NS45NTggMjYuOTc1OUMyNDUuOTU4IDI3LjQ4NjMgMjQ2LjI4IDI3LjgyNjggMjQ2LjY5NiAyOC4yNzE2TDI0OC40MjUgMzAuMTQzN0MyNDguNjEzIDI5LjcyNSAyNDguNzYgMjkuMjQwNCAyNDguODY4IDI4LjcwMzdMMjUwLjY2NCAyOS42OTg2QzI1MC40OSAzMC4zMzk5IDI1MC4yMDggMzEuMDIwNiAyNDkuODA2IDMxLjYyMjdMMjUwLjk4NiAzMi45MDU2TDI0OS4zMSAzMy44NDgxWlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0xNDAuMTggNDQuODA1M0gxNDMuMTdDMTQ0LjMxIDQ0LjgwNTMgMTQ1LjIzNSA0My44ODg5IDE0NS4yMzUgNDIuNzYzMUMxNDUuMjM1IDQxLjYyNDQgMTQ0LjMxIDQwLjcwNzkgMTQzLjE3IDQwLjcwNzlIMTQwLjE4VjQ0LjgwNTNaTTE0My4xNDMgNDUuNDU5NUgxNDAuMThWNDkuMjE2NkgxMzkuNDdWNDAuMDUzOEgxNDMuMTdDMTQ0LjY5OSA0MC4wNTM4IDE0NS45NDYgNDEuMjcxIDE0NS45NDYgNDIuNzYzMUMxNDUuOTQ2IDQ0LjAwNjYgMTQ1LjA3NCA0NS4wNTM3IDE0My44ODEgNDUuMzY4MUwxNDYuMjE0IDQ5LjIxNjZIMTQ1LjM5NkwxNDMuMTQzIDQ1LjQ1OTVaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTE1OC44MDQgNDQuNjM1QzE1OC44MDQgNDIuMzgzNyAxNTYuOTk0IDQwLjU3NzIgMTU0LjY3NSA0MC41NzcyQzE1Mi4zNTUgNDAuNTc3MiAxNTAuNTQ1IDQyLjM4MzcgMTUwLjU0NSA0NC42MzVDMTUwLjU0NSA0Ni44ODY2IDE1Mi4zNTUgNDguNjkyOSAxNTQuNjc1IDQ4LjY5MjlDMTU2Ljk5NCA0OC42OTI5IDE1OC44MDQgNDYuODg2NiAxNTguODA0IDQ0LjYzNVpNMTQ5LjgzNCA0NC42MzVDMTQ5LjgzNCA0Mi4wMTcxIDE1MS45NjYgMzkuOTA5NiAxNTQuNjc1IDM5LjkwOTZDMTU3LjM4MyAzOS45MDk2IDE1OS41MTUgNDIuMDE3MSAxNTkuNTE1IDQ0LjYzNUMxNTkuNTE1IDQ3LjI1MzIgMTU3LjM4MyA0OS4zNjA3IDE1NC42NzUgNDkuMzYwN0MxNTEuOTY2IDQ5LjM2MDcgMTQ5LjgzNCA0Ny4yNTMyIDE0OS44MzQgNDQuNjM1WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0xNzEuMjQ3IDQ0LjYzNUMxNzEuMjQ3IDQyLjQ2MjIgMTY5LjczMiA0MC43MDgxIDE2Ny41MiA0MC43MDgxSDE2NC43MDRWNDguNTYySDE2Ny41MkMxNjkuNzMyIDQ4LjU2MiAxNzEuMjQ3IDQ2LjgwODEgMTcxLjI0NyA0NC42MzVaTTE3MS45NDUgNDQuNjM1QzE3MS45NDUgNDcuMTYxNSAxNzAuMTA4IDQ5LjIxNjQgMTY3LjUyIDQ5LjIxNjRIMTYzLjk5NFY0MC4wNTM5SDE2Ny41MkMxNzAuMTA4IDQwLjA1MzkgMTcxLjk0NSA0Mi4xMDg1IDE3MS45NDUgNDQuNjM1WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0xNzcuMTM0IDQ0LjgwNTNIMTgwLjEyM0MxODEuMjYzIDQ0LjgwNTMgMTgyLjE4OCA0My44ODg5IDE4Mi4xODggNDIuNzYzMUMxODIuMTg4IDQxLjYyNDQgMTgxLjI2MyA0MC43MDc5IDE4MC4xMjMgNDAuNzA3OUgxNzcuMTM0VjQ0LjgwNTNaTTE4MC4wOTcgNDUuNDU5NUgxNzcuMTM0VjQ5LjIxNjZIMTc2LjQyM1Y0MC4wNTM4SDE4MC4xMjNDMTgxLjY1MiA0MC4wNTM4IDE4Mi44OTkgNDEuMjcxIDE4Mi44OTkgNDIuNzYzMUMxODIuODk5IDQ0LjAwNjYgMTgyLjAyNyA0NS4wNTM3IDE4MC44MzQgNDUuMzY4MUwxODMuMTY3IDQ5LjIxNjZIMTgyLjM0OUwxODAuMDk3IDQ1LjQ1OTVaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTE4OC4wMzUgNDkuMjE2N0gxODcuMzI0VjQwLjA1MzlIMTg4LjAzNVY0OS4yMTY3WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0yMDEuOTc4IDQ1LjMwMjlDMjAxLjk3OCA0Ny41MTUgMjAwLjI0OSA0OS4zNjA3IDE5Ny40NDcgNDkuMzYwN0MxOTQuNTM3IDQ5LjM2MDcgMTkyLjUxMyA0Ny4yNTMyIDE5Mi41MTMgNDQuNjM1QzE5Mi41MTMgNDIuMDE3MSAxOTQuNTM3IDM5LjkwOTYgMTk3LjM5MyAzOS45MDk2QzE5OS4xMzYgMzkuOTA5NiAyMDAuNjUxIDQwLjggMjAxLjQyOSA0Mi4xMjE5TDIwMC43OTkgNDIuNDg4NUMyMDAuMTgyIDQxLjMzNjcgMTk4Ljg2OCA0MC41NzcyIDE5Ny4zOTMgNDAuNTc3MkMxOTQuOTI2IDQwLjU3NzIgMTkzLjIyMyA0Mi4zODM3IDE5My4yMjMgNDQuNjM1QzE5My4yMjMgNDYuODg2NiAxOTQuOTI2IDQ4LjY5MjkgMTk3LjQ0NyA0OC42OTI5QzE5OS43MjYgNDguNjkyOSAyMDEuMTA3IDQ3LjMxODUgMjAxLjI1NCA0NS42MDM5SDE5Ny4yNzJWNDQuOTQ5MkgyMDEuOTc4VjQ1LjMwMjlaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTIwNi4yNDMgNDYuMTUzNFY0MC4wNTM4SDIwNi45NTNWNDYuMTUzNEMyMDYuOTUzIDQ3LjY0NTcgMjA3LjkwNSA0OC42OTI4IDIwOS42NzUgNDguNjkyOEMyMTEuNDU4IDQ4LjY5MjggMjEyLjQxIDQ3LjY0NTcgMjEyLjQxIDQ2LjE1MzRWNDAuMDUzOEgyMTMuMTIxVjQ2LjE1MzRDMjEzLjEyMSA0OC4wOTEgMjExLjc0IDQ5LjM2MDYgMjA5LjY3NSA0OS4zNjA2QzIwNy42MSA0OS4zNjA2IDIwNi4yNDMgNDguMDkxIDIwNi4yNDMgNDYuMTUzNFpcIiBmaWxsPVwiIzY2NjY2NlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMjIzLjQwNSA0OC41NjIxVjQ5LjIxNjZIMjE4LjAwMlY0MC4wNTM4SDIyMy4zMzhWNDAuNzA4MkgyMTguNzEzVjQ0LjI2ODhIMjIzLjAwM1Y0NC45MjNIMjE4LjcxM1Y0OC41NjIxSDIyMy40MDVaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTIzMy4yMzMgNDguNTYyMVY0OS4yMTY2SDIyNy4yNFY0OC41NjIxTDIzMi4zMDggNDAuNzA4MkgyMjcuMzc0VjQwLjA1MzhIMjMzLjA5OVY0MC43MDgyTDIyOC4wMzEgNDguNTYyMUgyMzMuMjMzWlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0yNTIuMjczIDQ5LjIxNjZIMjUxLjU2MlY0MS4wNzQ4TDI0OC4wODkgNDYuNzAzMkgyNDcuOTY5TDI0NC40OTYgNDEuMDc0OFY0OS4yMTY2SDI0My43ODZWNDAuMDUzOEgyNDQuNjcxTDI0OC4wMjMgNDUuNDcyOUwyNTEuMzc0IDQwLjA1MzhIMjUyLjI3M1Y0OS4yMTY2WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0yNjUuNzIxIDQ0LjYzNUMyNjUuNzIxIDQyLjM4MzcgMjYzLjkxMSA0MC41NzcyIDI2MS41OTIgNDAuNTc3MkMyNTkuMjcyIDQwLjU3NzIgMjU3LjQ2MiA0Mi4zODM3IDI1Ny40NjIgNDQuNjM1QzI1Ny40NjIgNDYuODg2NiAyNTkuMjcyIDQ4LjY5MjkgMjYxLjU5MiA0OC42OTI5QzI2My45MTEgNDguNjkyOSAyNjUuNzIxIDQ2Ljg4NjYgMjY1LjcyMSA0NC42MzVaTTI1Ni43NTEgNDQuNjM1QzI1Ni43NTEgNDIuMDE3MSAyNTguODgzIDM5LjkwOTYgMjYxLjU5MiAzOS45MDk2QzI2NC4zIDM5LjkwOTYgMjY2LjQzMiA0Mi4wMTcxIDI2Ni40MzIgNDQuNjM1QzI2Ni40MzIgNDcuMjUzMiAyNjQuMyA0OS4zNjA3IDI2MS41OTIgNDkuMzYwN0MyNTguODgzIDQ5LjM2MDcgMjU2Ljc1MSA0Ny4yNTMyIDI1Ni43NTEgNDQuNjM1WlwiIGZpbGw9XCIjNjY2NjY2XCIgLz5cclxuICAgPHBhdGggZD1cIk0yNzEuNjIxIDQ0LjgwNTNIMjc0LjYxMUMyNzUuNzUxIDQ0LjgwNTMgMjc2LjY3NiA0My44ODg5IDI3Ni42NzYgNDIuNzYzMUMyNzYuNjc2IDQxLjYyNDQgMjc1Ljc1MSA0MC43MDc5IDI3NC42MTEgNDAuNzA3OUgyNzEuNjIxVjQ0LjgwNTNaTTI3NC41ODQgNDUuNDU5NUgyNzEuNjIxVjQ5LjIxNjZIMjcwLjkxMVY0MC4wNTM4SDI3NC42MTFDMjc2LjEzOSA0MC4wNTM4IDI3Ny4zODYgNDEuMjcxIDI3Ny4zODYgNDIuNzYzMUMyNzcuMzg2IDQ0LjAwNjYgMjc2LjUxNSA0NS4wNTM3IDI3NS4zMjIgNDUuMzY4MUwyNzcuNjU1IDQ5LjIxNjZIMjc2LjgzN0wyNzQuNTg0IDQ1LjQ1OTVaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTI4Ni45NiA0Ni4yMzIyTDI4NC44NjggNDAuOTA0NUwyODIuNzc3IDQ2LjIzMjJIMjg2Ljk2Wk0yODcuMjE1IDQ2Ljg4NjZIMjgyLjUwOUwyODEuNTk3IDQ5LjIxNjdIMjgwLjg0NkwyODQuNDkzIDQwLjA1MzlIMjg1LjI0NEwyODguODc3IDQ5LjIxNjdIMjg4LjEyN0wyODcuMjE1IDQ2Ljg4NjZaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTI5OC4wNjIgNDguNTYyMVY0OS4yMTY2SDI5Mi45MjdWNDAuMDUzOEgyOTMuNjM3VjQ4LjU2MjFIMjk4LjA2MlpcIiBmaWxsPVwiIzY2NjY2NlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMzA3LjYyMiA0OC41NjIxVjQ5LjIxNjZIMzAyLjIxOVY0MC4wNTM4SDMwNy41NTVWNDAuNzA4MkgzMDIuOTI5VjQ0LjI2ODhIMzA3LjIyVjQ0LjkyM0gzMDIuOTI5VjQ4LjU2MjFIMzA3LjYyMlpcIiBmaWxsPVwiIzY2NjY2NlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMzExLjQ4NCA0Ny4yMDA3TDMxMi4xMDEgNDYuODQ3M0MzMTIuNDIzIDQ3Ljk0NjcgMzEzLjM3NCA0OC42OTI4IDMxNC45MTYgNDguNjkyOEMzMTYuNDg1IDQ4LjY5MjggMzE3LjI3NiA0Ny45MDc3IDMxNy4yNzYgNDYuODYwMkMzMTcuMjc2IDQ1Ljc2MDcgMzE2LjI4NCA0NS4zNDE3IDMxNC44NDkgNDQuODk2OUMzMTMuMjgxIDQ0LjM5OTUgMzExLjg3MyA0My45Njc0IDMxMS44NzMgNDIuMzcwNEMzMTEuODczIDQwLjg2NDkgMzEzLjEyIDM5LjkwOTUgMzE0LjcxNSAzOS45MDk1QzMxNi4yNTcgMzkuOTA5NSAzMTcuMjc2IDQwLjc3MzUgMzE3LjczMiA0MS44MzM3TDMxNy4xMjkgNDIuMTYxMUMzMTYuNzggNDEuMzM2NSAzMTYuMDU2IDQwLjU3NzEgMzE0LjcxNSA0MC41NzcxQzMxMy40MTUgNDAuNTc3MSAzMTIuNTk3IDQxLjMyMzQgMzEyLjU5NyA0Mi4zNDQ0QzMxMi41OTcgNDMuNDQ0MSAzMTMuNTQ5IDQzLjc4NDMgMzE0Ljg5IDQ0LjIxNkMzMTYuNTUyIDQ0Ljc1MjkgMzE4IDQ1LjI2MzUgMzE4IDQ2Ljg0NzNDMzE4IDQ4LjM2NTcgMzE2Ljc4IDQ5LjM2MDYgMzE0LjkxNiA0OS4zNjA2QzMxMy4xNiA0OS4zNjA2IDMxMS45MTMgNDguNDk2NiAzMTEuNDg0IDQ3LjIwMDdaXCIgZmlsbD1cIiM2NjY2NjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTE0NC42MTkgNjEuOTQxMUwxNDIuNTI3IDU2LjYxMzRMMTQwLjQzNiA2MS45NDExSDE0NC42MTlaTTE0NC44NzQgNjIuNTk1NUgxNDAuMTY3TDEzOS4yNTYgNjQuOTI1NUgxMzguNTA1TDE0Mi4xNTIgNTUuNzYyOEgxNDIuOTAzTDE0Ni41MzYgNjQuOTI1NUgxNDUuNzg1TDE0NC44NzQgNjIuNTk1NVpcIiBmaWxsPVwiI0FGMUIyNlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMTU2LjQ4NSA2Mi40MjU1QzE1Ni40ODUgNjEuNDA0MiAxNTUuNjUzIDYwLjU3OTcgMTU0LjYzNCA2MC41Nzk3SDE1MS4yOTZWNjQuMjcxSDE1NC42MzRDMTU1LjY1MyA2NC4yNzEgMTU2LjQ4NSA2My40NDY1IDE1Ni40ODUgNjIuNDI1NVpNMTUxLjI5NiA1Ni40MTdWNTkuOTI1SDE1NC4zMjZDMTU1LjI5MSA1OS45MjUgMTU2LjA4MyA1OS4xMzk3IDE1Ni4wODMgNTguMTcxMkMxNTYuMDgzIDU3LjIwMjMgMTU1LjI5MSA1Ni40MTcgMTU0LjMyNiA1Ni40MTdIMTUxLjI5NlpNMTU3LjE5NSA2Mi40MjU1QzE1Ny4xOTUgNjMuODEyOCAxNTYuMDU2IDY0LjkyNTQgMTU0LjYzNCA2NC45MjU0SDE1MC41ODVWNTUuNzYyNkgxNTQuMzI2QzE1NS42OTQgNTUuNzYyNiAxNTYuNzkzIDU2Ljg0ODkgMTU2Ljc5MyA1OC4xNzEyQzE1Ni43OTMgNTkuMDYxIDE1Ni4zMTEgNTkuNzk0MiAxNTUuNTg2IDYwLjE3MzlDMTU2LjUyNSA2MC41MjczIDE1Ny4xOTUgNjEuMzc3OSAxNTcuMTk1IDYyLjQyNTVaXCIgZmlsbD1cIiNBRjFCMjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTE3MC4wNTQgNjAuMzQzOUMxNzAuMDU0IDU4LjA5MjYgMTY4LjI0NCA1Ni4yODYxIDE2NS45MjQgNTYuMjg2MUMxNjMuNjA1IDU2LjI4NjEgMTYxLjc5NSA1OC4wOTI2IDE2MS43OTUgNjAuMzQzOUMxNjEuNzk1IDYyLjU5NTUgMTYzLjYwNSA2NC40MDE4IDE2NS45MjQgNjQuNDAxOEMxNjguMjQ0IDY0LjQwMTggMTcwLjA1NCA2Mi41OTU1IDE3MC4wNTQgNjAuMzQzOVpNMTYxLjA4NCA2MC4zNDM5QzE2MS4wODQgNTcuNzI2IDE2My4yMTYgNTUuNjE4NSAxNjUuOTI0IDU1LjYxODVDMTY4LjYzMiA1NS42MTg1IDE3MC43NjQgNTcuNzI2IDE3MC43NjQgNjAuMzQzOUMxNzAuNzY0IDYyLjk2MjEgMTY4LjYzMiA2NS4wNjk2IDE2NS45MjQgNjUuMDY5NkMxNjMuMjE2IDY1LjA2OTYgMTYxLjA4NCA2Mi45NjIxIDE2MS4wODQgNjAuMzQzOVpcIiBmaWxsPVwiI0FGMUIyNlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMTg0LjE3MiA2MS4wMTE1QzE4NC4xNzIgNjMuMjIzOCAxODIuNDQzIDY1LjA2OTYgMTc5LjY0IDY1LjA2OTZDMTc2LjczMSA2NS4wNjk2IDE3NC43MDcgNjIuOTYyIDE3NC43MDcgNjAuMzQzOUMxNzQuNzA3IDU3LjcyNiAxNzYuNzMxIDU1LjYxODQgMTc5LjU4NyA1NS42MTg0QzE4MS4zMyA1NS42MTg0IDE4Mi44NDUgNTYuNTA4OCAxODMuNjIzIDU3LjgzMDhMMTgyLjk5MiA1OC4xOTcxQzE4Mi4zNzYgNTcuMDQ1NSAxODEuMDYyIDU2LjI4NiAxNzkuNTg3IDU2LjI4NkMxNzcuMTIgNTYuMjg2IDE3NS40MTcgNTguMDkyNiAxNzUuNDE3IDYwLjM0MzlDMTc1LjQxNyA2Mi41OTU1IDE3Ny4xMiA2NC40MDE4IDE3OS42NCA2NC40MDE4QzE4MS45MiA2NC40MDE4IDE4My4zMDEgNjMuMDI3NCAxODMuNDQ4IDYxLjMxMjdIMTc5LjQ2NlY2MC42NTgxSDE4NC4xNzJWNjEuMDExNVpcIiBmaWxsPVwiI0FGMUIyNlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMTkzLjQ1MSA2MS45NDExTDE5MS4zNiA1Ni42MTM0TDE4OS4yNjggNjEuOTQxMUgxOTMuNDUxWk0xOTMuNzA2IDYyLjU5NTVIMTg5TDE4OC4wODggNjQuOTI1NUgxODcuMzM3TDE5MC45ODQgNTUuNzYyOEgxOTEuNzM1TDE5NS4zNjggNjQuOTI1NUgxOTQuNjE4TDE5My43MDYgNjIuNTk1NVpcIiBmaWxsPVwiI0FGMUIyNlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMjA2LjY3MiA2MC4zNDM5QzIwNi42NzIgNTguMTcxMSAyMDUuMTU3IDU2LjQxNjkgMjAyLjk0NSA1Ni40MTY5SDIwMC4xMjlWNjQuMjcwOUgyMDIuOTQ1QzIwNS4xNTcgNjQuMjcwOSAyMDYuNjcyIDYyLjUxNyAyMDYuNjcyIDYwLjM0MzlaTTIwNy4zNjkgNjAuMzQzOUMyMDcuMzY5IDYyLjg3MDQgMjA1LjUzMiA2NC45MjUzIDIwMi45NDUgNjQuOTI1M0gxOTkuNDE4VjU1Ljc2MjhIMjAyLjk0NUMyMDUuNTMyIDU1Ljc2MjggMjA3LjM2OSA1Ny44MTc0IDIwNy4zNjkgNjAuMzQzOVpcIiBmaWxsPVwiI0FGMUIyNlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMjIwLjI4MSA2MC4zNDM5QzIyMC4yODEgNTguMDkyNiAyMTguNDcxIDU2LjI4NjEgMjE2LjE1MiA1Ni4yODYxQzIxMy44MzIgNTYuMjg2MSAyMTIuMDIyIDU4LjA5MjYgMjEyLjAyMiA2MC4zNDM5QzIxMi4wMjIgNjIuNTk1NSAyMTMuODMyIDY0LjQwMTggMjE2LjE1MiA2NC40MDE4QzIxOC40NzEgNjQuNDAxOCAyMjAuMjgxIDYyLjU5NTUgMjIwLjI4MSA2MC4zNDM5Wk0yMTEuMzEyIDYwLjM0MzlDMjExLjMxMiA1Ny43MjYgMjEzLjQ0MyA1NS42MTg1IDIxNi4xNTIgNTUuNjE4NUMyMTguODYgNTUuNjE4NSAyMjAuOTkyIDU3LjcyNiAyMjAuOTkyIDYwLjM0MzlDMjIwLjk5MiA2Mi45NjIxIDIxOC44NiA2NS4wNjk2IDIxNi4xNTIgNjUuMDY5NkMyMTMuNDQzIDY1LjA2OTYgMjExLjMxMiA2Mi45NjIxIDIxMS4zMTIgNjAuMzQzOVpcIiBmaWxsPVwiI0FGMUIyNlwiIC8+XHJcbiAgIDxwYXRoIGQ9XCJNMjI0LjU3MiA2Mi45MDk1TDIyNS4xODkgNjIuNTU2MUMyMjUuNTExIDYzLjY1NTYgMjI2LjQ2MyA2NC40MDE2IDIyOC4wMDUgNjQuNDAxNkMyMjkuNTczIDY0LjQwMTYgMjMwLjM2NCA2My42MTYzIDIzMC4zNjQgNjIuNTY5QzIzMC4zNjQgNjEuNDY5MyAyMjkuMzcyIDYxLjA1MDYgMjI3LjkzNyA2MC42MDU4QzIyNi4zNjkgNjAuMTA4MyAyMjQuOTYxIDU5LjY3NjIgMjI0Ljk2MSA1OC4wNzkzQzIyNC45NjEgNTYuNTczOCAyMjYuMjA4IDU1LjYxODQgMjI3LjgwMyA1NS42MTg0QzIyOS4zNDUgNTUuNjE4NCAyMzAuMzY0IDU2LjQ4MjQgMjMwLjgyIDU3LjU0MjZMMjMwLjIxNyA1Ny44Njk5QzIyOS44NjggNTcuMDQ1NCAyMjkuMTQ0IDU2LjI4NTkgMjI3LjgwMyA1Ni4yODU5QzIyNi41MDMgNTYuMjg1OSAyMjUuNjg1IDU3LjAzMjIgMjI1LjY4NSA1OC4wNTMyQzIyNS42ODUgNTkuMTUyOSAyMjYuNjM3IDU5LjQ5MzIgMjI3Ljk3OCA1OS45MjQ4QzIyOS42NCA2MC40NjE3IDIzMS4wODggNjAuOTcyNCAyMzEuMDg4IDYyLjU1NjFDMjMxLjA4OCA2NC4wNzQzIDIyOS44NjggNjUuMDY5NSAyMjguMDA1IDY1LjA2OTVDMjI2LjI0OCA2NS4wNjk1IDIyNS4wMDEgNjQuMjA1NCAyMjQuNTcyIDYyLjkwOTVaXCIgZmlsbD1cIiNBRjFCMjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTEwNC43MTYgMjIuMjc3NEw5Ny45ODE0IDI4Ljg1MjVMMTA2LjMyNyAzN0w4MS44OTggNjAuODUwMkw1Ny40NjkxIDM3TDgxLjg5OCAxMy4xNTAxTDkxLjIzNTEgMjIuMjY1OUw5Ny45Njk3IDE1LjY5MTJMODEuODk4IC0xLjM4MzkyZS0wNkw0NCAzN0w4MS44OTggNzRMMTE5Ljc5NiAzN0wxMDQuNzE2IDIyLjI3NzRaXCIgZmlsbD1cIiNBRjFCMjZcIiAvPlxyXG4gICA8cGF0aCBkPVwiTTEwNC43MTYgMjIuMjc3NUw5Ny45NjkyIDE1LjY5MTJMMTA0LjcxNiA5LjEwNDY3TDExMS40NjIgMTUuNjkxMkwxMDQuNzE2IDIyLjI3NzVaXCIgZmlsbD1cIiNGOTMwM0VcIiAvPlxyXG48L3N2Zz5cclxuXHJcblxyXG5jb25zdCBsb2dvNCA9IDxzdmcgd2lkdGg9XCIyNzZcIiBoZWlnaHQ9XCI3NlwiIHZpZXdCb3g9XCIwIDAgMjc2IDc2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNMTAyLjcyMiA4Ljc2OTM2SDEwMi44MjJWOC44NjkzNlYxOC4yNzk4VjE4LjM3OThIMTAyLjcyMkgxMDIuMDA5SDEwMS45MDlWMTguMjc5OFYxMy44NzYzSDk2LjYzMTdWMTguMjc5OFYxOC4zNzk4SDk2LjUzMTdIOTUuODE4NEg5NS43MTg0VjE4LjI3OThWOC44NjkzNlY4Ljc2OTM2SDk1LjgxODRIOTYuNTMxN0g5Ni42MzE3VjguODY5MzZWMTMuMDA0SDEwMS45MDlWOC44NjkzNlY4Ljc2OTM2SDEwMi4wMDlIMTAyLjcyMlpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTEwNy42MzMgMTguMzE1N0wxMDcuNjA5IDE4LjM4SDEwNy41NEgxMDYuNzg2SDEwNi42NEwxMDYuNjkzIDE4LjI0MzhMMTEwLjM1MyA4LjgzMzExTDExMC4zNzggOC43NjkzNkgxMTAuNDQ2SDExMS4ySDExMS4yNjhMMTExLjI5MyA4LjgzMzIyTDExNC45NCAxOC4yNDM5TDExNC45OTIgMTguMzhIMTE0Ljg0N0gxMTQuMDkzSDExNC4wMjRMMTE0IDE4LjMxNTdMMTEzLjEwOSAxNS45ODdIMTA4LjUyM0wxMDcuNjMzIDE4LjMxNTdaTTEwOC44NjkgMTUuMTE0NkgxMTIuNzc3TDExMC44MjMgMTAuMDIyNEwxMDguODY5IDE1LjExNDZaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xMjUuODE0IDguNzY5MzZIMTI1LjkxNFY4Ljg2OTM2VjE4LjI3OThWMTguMzc5OEgxMjUuODE0SDEyNS4xODJIMTI1LjEyOUwxMjUuMSAxOC4zMzY0TDExOS43MjQgMTAuNTA5VjE4LjI3OThWMTguMzc5OEgxMTkuNjI0SDExOC45MTFIMTE4LjgxMVYxOC4yNzk4VjguODY5MzZWOC43NjkzNkgxMTguOTExSDExOS41M0gxMTkuNTgzTDExOS42MTMgOC44MTI2NkwxMjUuMDAxIDE2LjY0MDdWOC44NjkzNlY4Ljc2OTM2SDEyNS4xMDFIMTI1LjgxNFpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTEzOS4zNDUgMTAuOTQzN0wxMzkuMzk0IDExLjAyOTFMMTM5LjMwOSAxMS4wNzk1TDEzOC42NzcgMTEuNDU1N0wxMzguNTg2IDExLjUwOTdMMTM4LjUzNyAxMS40MTYyQzEzNy45MzcgMTAuMjY4OCAxMzYuNjU0IDkuNTA3MDUgMTM1LjIwOCA5LjUwNzA1QzEzMi43ODkgOS41MDcwNSAxMzEuMTIzIDExLjMxNTYgMTMxLjEyMyAxMy41NzQ2QzEzMS4xMjMgMTUuODMzIDEzMi43ODggMTcuNjQyMSAxMzUuMjYyIDE3LjY0MjFDMTM2LjM4NCAxNy42NDIxIDEzNy4yNzggMTcuMjk2MSAxMzcuOTA5IDE2Ljc0MTJDMTM4LjUxMiAxNi4yMDk3IDEzOC44OCAxNS40ODIyIDEzOC45NzMgMTQuNjY5NkgxMzUuMDg3SDEzNC45ODdWMTQuNTY5NlYxMy44OTcyVjEzLjc5NzJIMTM1LjA4N0gxMzkuODFIMTM5LjkxVjEzLjg5NzJWMTQuMjYwNEMxMzkuOTEgMTYuNTkwOSAxMzguMTI2IDE4LjUyNzcgMTM1LjI2MiAxOC41Mjc3QzEzMi4yODYgMTguNTI3NyAxMzAuMjEgMTYuMzE4MyAxMzAuMjEgMTMuNTc0NkMxMzAuMjEgMTAuODMyMSAxMzIuMjg1IDguNjIxNDMgMTM1LjIwOCA4LjYyMTQzQzEzNi45OTIgOC42MjE0MyAxMzguNTQ2IDkuNTU0MzEgMTM5LjM0NSAxMC45NDM3WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTU2LjAxMiAxOC4zOEgxNTUuOTcxTDE1NS45NDIgMTguMzUxNEwxNTEuMzg5IDEzLjg4MDNWMTguMjhWMTguMzhIMTUxLjI4OUgxNTAuNTc2SDE1MC40NzZWMTguMjhWOC44Njk2VjguNzY5NkgxNTAuNTc2SDE1MS4yODlIMTUxLjM4OVY4Ljg2OTZWMTMuMDE4NEwxNTUuODA4IDguNzk3MjlMMTU1LjgzNyA4Ljc2OTZIMTU1Ljg3N0gxNTYuODMzSDE1Ny4wODFMMTU2LjkwMiA4Ljk0MTc2TDE1Mi4yMTMgMTMuNDQxNEwxNTcuMDM4IDE4LjIwODlMMTU3LjIxMSAxOC4zOEgxNTYuOTY3SDE1Ni4wMTJaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xNjAuMzI2IDguODY5MzdWOC43NjkzN0gxNjAuNDI2SDE2MS4xNEgxNjEuMjRWOC44NjkzN1YxNS4xMzQxQzE2MS4yNCAxNS44Nzk0IDE2MS40NzIgMTYuNTA0IDE2MS45MSAxNi45NDJDMTYyLjM0OCAxNy4zNzk4IDE2My4wMDMgMTcuNjQyMSAxNjMuODcxIDE3LjY0MjFDMTY0Ljc0NiAxNy42NDIxIDE2NS40MDQgMTcuMzc5NyAxNjUuODQ0IDE2Ljk0MTlDMTY2LjI4NCAxNi41MDM5IDE2Ni41MTYgMTUuODc5NCAxNjYuNTE2IDE1LjEzNDFWOC44NjkzN1Y4Ljc2OTM3SDE2Ni42MTZIMTY3LjMzSDE2Ny40M1Y4Ljg2OTM3VjE1LjEzNDFDMTY3LjQzIDE2LjE1MyAxNjcuMDc0IDE3LjAwMzcgMTY2LjQ0NiAxNy41OTk1QzE2NS44MTkgMTguMTk0OCAxNjQuOTI4IDE4LjUyNzcgMTYzLjg3MSAxOC41Mjc3QzE2Mi44MTQgMTguNTI3NyAxNjEuOTI3IDE4LjE5NDcgMTYxLjMwMyAxNy41OTkzQzE2MC42NzggMTcuMDAzNCAxNjAuMzI2IDE2LjE1MjcgMTYwLjMyNiAxNS4xMzQxVjguODY5MzdaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xODAuNzEyIDEwLjkzMDNMMTgwLjc2MSAxMS4wMTY5TDE4MC42NzUgMTEuMDY2NUwxODAuMDQyIDExLjQyOTVMMTc5Ljk1MyAxMS40ODA3TDE3OS45MDQgMTEuMzlDMTc5LjMwNCAxMC4yNjg3IDE3OC4wMzQgOS41MDcwNSAxNzYuNTg4IDkuNTA3MDVDMTc0LjE2OSA5LjUwNzA1IDE3Mi41MDMgMTEuMzE1MyAxNzIuNTAzIDEzLjU3NDZDMTcyLjUwMyAxNS44MzM4IDE3NC4xNjkgMTcuNjQyMSAxNzYuNTg4IDE3LjY0MjFDMTc4LjA0NyAxNy42NDIxIDE3OS4zMyAxNi44NjczIDE3OS45MzEgMTUuNzE5NUwxNzkuOTc5IDE1LjYyNzRMMTgwLjA2OSAxNS42NzkxTDE4MC43MDIgMTYuMDQyMUwxODAuNzg3IDE2LjA5MTFMMTgwLjc0IDE2LjE3NzNDMTc5Ljk1NCAxNy41OTU0IDE3OC4zODYgMTguNTI3NyAxNzYuNTg4IDE4LjUyNzdDMTczLjY2NSAxOC41Mjc3IDE3MS41OSAxNi4zMTczIDE3MS41OSAxMy41NzQ2QzE3MS41OSAxMC44MzE5IDE3My42NjUgOC42MjE0MyAxNzYuNTg4IDguNjIxNDNDMTc4LjM1OCA4LjYyMTQzIDE3OS45MTMgOS41MjY1NiAxODAuNzEyIDEwLjkzMDNaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xOTEuOTI5IDguNzY5MzZIMTkyLjAyOVY4Ljg2OTM2VjE4LjI3OThWMTguMzc5OEgxOTEuOTI5SDE5MS4yMTZIMTkxLjExNlYxOC4yNzk4VjEzLjg3NjNIMTg1LjgzOVYxOC4yNzk4VjE4LjM3OThIMTg1LjczOUgxODUuMDI2SDE4NC45MjZWMTguMjc5OFY4Ljg2OTM2VjguNzY5MzZIMTg1LjAyNkgxODUuNzM5SDE4NS44MzlWOC44NjkzNlYxMy4wMDRIMTkxLjExNlY4Ljg2OTM2VjguNzY5MzZIMTkxLjIxNkgxOTEuOTI5WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjAyLjM4NSAxNy41MDc3SDIwMi40ODVWMTcuNjA3N1YxOC4yNzk4VjE4LjM3OThIMjAyLjM4NUgxOTYuOTYySDE5Ni44NjJWMTguMjc5OFY4Ljg2OTM2VjguNzY5MzZIMTk2Ljk2MkgyMDIuMzE4SDIwMi40MThWOC44NjkzNlY5LjU0MTQ2VjkuNjQxNDZIMjAyLjMxOEgxOTcuNzc2VjEzLjA5ODFIMjAxLjk4MkgyMDIuMDgyVjEzLjE5ODFWMTMuODcwNFYxMy45NzA0SDIwMS45ODJIMTk3Ljc3NlYxNy41MDc3SDIwMi4zODVaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yMTMuNzMgOC43NjkzNkgyMTMuODNWOC44NjkzNlYxOC4yNzk4VjE4LjM3OThIMjEzLjczSDIxMy4wOTdIMjEzLjA0NUwyMTMuMDE1IDE4LjMzNjRMMjA3LjY0IDEwLjUwOVYxOC4yNzk4VjE4LjM3OThIMjA3LjU0SDIwNi44MjdIMjA2LjcyN1YxOC4yNzk4VjguODY5MzZWOC43NjkzNkgyMDYuODI3SDIwNy40NDZIMjA3LjQ5OEwyMDcuNTI4IDguODEyNjZMMjEyLjkxNyAxNi42NDA3VjguODY5MzZWOC43NjkzNkgyMTMuMDE3SDIxMy43M1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTk1LjE1ODMgMzIuMzczN0w5NS4xMzM2IDMyLjI5NzNMOTUuMjAyOCAzMi4yNTY3TDk1LjgyMiAzMS44OTM3TDk1LjkzMzIgMzEuODI4NUw5NS45Njg3IDMxLjk1MjVDOTYuMTI0NCAzMi40OTcyIDk2LjQzMTQgMzIuOTUxMSA5Ni44ODM4IDMzLjI2OTZDOTcuMzM2NiAzMy41ODgzIDk3Ljk0MTIgMzMuNzc1NyA5OC42OTgzIDMzLjc3NTdDOTkuNDY5MyAzMy43NzU3IDEwMC4wMzYgMzMuNTc4MiAxMDAuNDA4IDMzLjI2MTdDMTAwLjc3OSAzMi45NDY2IDEwMC45NjcgMzIuNTA1MSAxMDAuOTY3IDMxLjk5MzVDMTAwLjk2NyAzMS40NjYzIDEwMC43MzggMzEuMTA0OCAxMDAuMzMxIDMwLjgxNDVDOTkuOTE2MyAzMC41MTkxIDk5LjMyMiAzMC4zMDEzIDk4LjYwMDYgMzAuMDcyM0w5OC42IDMwLjA3MjFDOTguNTgyOSAzMC4wNjY1IDk4LjU2NTkgMzAuMDYxIDk4LjU0ODggMzAuMDU1NUM5Ny43ODQ0IDI5LjgwNzUgOTcuMDQyNCAyOS41NjY4IDk2LjQ5MDEgMjkuMTg1NEM5Ni4yMDU2IDI4Ljk4OTEgOTUuOTY3OSAyOC43NTMzIDk1LjgwMTcgMjguNDU2OEM5NS42MzUzIDI4LjE1OTkgOTUuNTQzNSAyNy44MDc1IDk1LjU0MzUgMjcuMzgyNEM5NS41NDM1IDI2LjU4MDIgOTUuODY5MSAyNS45MjA1IDk2LjQwNDUgMjUuNDYyOUM5Ni45Mzg0IDI1LjAwNjQgOTcuNjc1OCAyNC43NTUgOTguNDk2MyAyNC43NTVDMTAwLjA4OSAyNC43NTUgMTAxLjE0NSAyNS42NzA2IDEwMS42MTYgMjYuNzkyNUwxMDEuNjUxIDI2Ljg3NTJMMTAxLjU3MyAyNi45MTg3TDEwMC45NjcgMjcuMjU0NkwxMDAuODY5IDI3LjMwOUwxMDAuODI2IDI3LjIwNTNDMTAwLjY1NiAyNi43OTQgMTAwLjM5NyAyNi40MDM0IDEwMC4wMiAyNi4xMTU4Qzk5LjY0NSAyNS44MjkxIDk5LjE0ODUgMjUuNjQwNiA5OC40OTYzIDI1LjY0MDZDOTcuODYzMSAyNS42NDA2IDk3LjM1NjUgMjUuODI2MyA5Ny4wMDk4IDI2LjEzQzk2LjY2NCAyNi40MzI5IDk2LjQ3MDQgMjYuODU4OCA5Ni40NzA0IDI3LjM1NTRDOTYuNDcwNCAyNy42MjI5IDk2LjUyNjggMjcuODM5NCA5Ni42MjggMjguMDIxMUM5Ni43Mjk1IDI4LjIwMzMgOTYuODc5MiAyOC4zNTYxIDk3LjA3MzUgMjguNDkxN0M5Ny40NjYyIDI4Ljc2NTcgOTguMDI2MiAyOC45NTk5IDk4LjcwMjggMjkuMTgyOUw5OC43MDI4IDI5LjE4MjlDOTkuNTMzOSAyOS40NTc0IDEwMC4zMjkgMjkuNzMwNCAxMDAuOTE2IDMwLjE0MzhDMTAxLjUwOSAzMC41NjI1IDEwMS44OTMgMzEuMTI4NyAxMDEuODkzIDMxLjk4QzEwMS44OTMgMzIuNzg4MSAxMDEuNTc1IDMzLjQ2MiAxMDEuMDExIDMzLjkzMjFDMTAwLjQ0OSAzNC40MDA4IDk5LjY1MDkgMzQuNjYxIDk4LjY5ODMgMzQuNjYxQzk2Ljg5OTYgMzQuNjYxIDk1LjYwNDMgMzMuNzUzIDk1LjE1ODMgMzIuMzczN1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTEwOS4zNyAzMC45MjRIMTA2Ljk4VjM0LjQxMzNWMzQuNTEzM0gxMDYuODhIMTA2LjE2N0gxMDYuMDY3VjM0LjQxMzNWMjUuMDAyOVYyNC45MDI5SDEwNi4xNjdIMTA5LjM3QzExMS4xMiAyNC45MDI5IDExMi40MDMgMjYuMTk3NyAxMTIuNDAzIDI3LjkyMDFDMTEyLjQwMyAyOS42MjkzIDExMS4xMiAzMC45MjQgMTA5LjM3IDMwLjkyNFpNMTExLjQ5IDI3LjkyMDFDMTExLjQ5IDI2LjY3MDEgMTEwLjYwNSAyNS43NzUgMTA5LjM3IDI1Ljc3NUgxMDYuOThWMzAuMDUxN0gxMDkuMzdDMTEwLjYwNiAzMC4wNTE3IDExMS40OSAyOS4xNTYyIDExMS40OSAyNy45MjAxWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTI1LjA1NSAyOS43MDgxQzEyNS4wNTUgMjcuNDUgMTIzLjI4MiAyNS42NDA2IDEyMS4wMSAyNS42NDA2QzExOC43MzggMjUuNjQwNiAxMTYuOTY2IDI3LjQ1IDExNi45NjYgMjkuNzA4MUMxMTYuOTY2IDMxLjk2NjMgMTE4LjczOCAzMy43NzU3IDEyMS4wMSAzMy43NzU3QzEyMy4yODIgMzMuNzc1NyAxMjUuMDU1IDMxLjk2NjMgMTI1LjA1NSAyOS43MDgxWk0xMTYuMDUyIDI5LjcwODFDMTE2LjA1MiAyNi45NjQ1IDExOC4yMzcgMjQuNzU1IDEyMS4wMSAyNC43NTVDMTIzLjc4NCAyNC43NTUgMTI1Ljk2OCAyNi45NjQ1IDEyNS45NjggMjkuNzA4MUMxMjUuOTY4IDMyLjQ1MTcgMTIzLjc4NCAzNC42NjEzIDEyMS4wMSAzNC42NjEzQzExOC4yMzcgMzQuNjYxMyAxMTYuMDUyIDMyLjQ1MTcgMTE2LjA1MiAyOS43MDgxWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTMxLjE3NiAzMC42NTQ5VjM0LjQxMzNWMzQuNTEzM0gxMzEuMDc2SDEzMC4zNjNIMTMwLjI2M1YzNC40MTMzVjI1LjAwMjlWMjQuOTAyOUgxMzAuMzYzSDEzNC4wNzdDMTM1LjY2NyAyNC45MDI5IDEzNi45NjMgMjYuMTk3NyAxMzYuOTYzIDI3Ljc4NTdDMTM2Ljk2MyAyOS4wNjQ5IDEzNi4xMTYgMzAuMTQ3NSAxMzQuOTQyIDMwLjUyMDhMMTM3LjIxOCAzNC4zNjI0TDEzNy4zMDcgMzQuNTEzM0gxMzcuMTMySDEzNi4zMTFIMTM2LjI1NEwxMzYuMjI1IDM0LjQ2MzlMMTMzLjk5MyAzMC42NTQ5SDEzMS4xNzZaTTEzMS4xNzYgMjkuNzgyOEgxMzQuMDc3QzEzNS4xNjUgMjkuNzgyOCAxMzYuMDUgMjguODg3OCAxMzYuMDUgMjcuNzg1N0MxMzYuMDUgMjYuNjY5NiAxMzUuMTY0IDI1Ljc3NSAxMzQuMDc3IDI1Ljc3NUgxMzEuMTc2VjI5Ljc4MjhaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xNDYuNDU4IDMzLjY0MTJIMTQ2LjU1OFYzMy43NDEyVjM0LjQxMzNWMzQuNTEzM0gxNDYuNDU4SDE0MS4zMDRIMTQxLjIwNFYzNC40MTMzVjI1LjAwMjlWMjQuOTAyOUgxNDEuMzA0SDE0Mi4wMTdIMTQyLjExN1YyNS4wMDI5VjMzLjY0MTJIMTQ2LjQ1OFpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTE1Ni4wNTIgMzMuNjQxMkgxNTYuMTUyVjMzLjc0MTJWMzQuNDEzM1YzNC41MTMzSDE1Ni4wNTJIMTUwLjYyOUgxNTAuNTI5VjM0LjQxMzNWMjUuMDAyOVYyNC45MDI5SDE1MC42MjlIMTU1Ljk4NUgxNTYuMDg1VjI1LjAwMjlWMjUuNjc1VjI1Ljc3NUgxNTUuOTg1SDE1MS40NDNWMjkuMjMxNkgxNTUuNjQ5SDE1NS43NDlWMjkuMzMxNlYzMC4wMDRWMzAuMTA0SDE1NS42NDlIMTUxLjQ0M1YzMy42NDEySDE1Ni4wNTJaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xNjAuNDkzIDM0LjUxMzNIMTYwLjM5M1YzNC40MTMzVjI1LjAwMjlWMjQuOTAyOUgxNjAuNDkzSDE2NC4wMzJDMTY2LjY5MiAyNC45MDI5IDE2OC41NzMgMjcuMDY1OSAxNjguNTczIDI5LjcwODFDMTY4LjU3MyAzMi4zNTAxIDE2Ni42OTIgMzQuNTEzMyAxNjQuMDMyIDM0LjUxMzNIMTYwLjQ5M1pNMTY3LjY3MyAyOS43MDgxQzE2Ny42NzMgMjcuNTIxNSAxNjYuMTg4IDI1Ljc3NSAxNjQuMDMyIDI1Ljc3NUgxNjEuMzA2VjMzLjY0MTJIMTY0LjAzMkMxNjYuMTg4IDMzLjY0MTIgMTY3LjY3MyAzMS44OTQ0IDE2Ny42NzMgMjkuNzA4MVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTE3OC4zOTEgMzMuNjQxMkgxNzguNDkxVjMzLjc0MTJWMzQuNDEzM1YzNC41MTMzSDE3OC4zOTFIMTcyLjk2OEgxNzIuODY4VjM0LjQxMzNWMjUuMDAyOVYyNC45MDI5SDE3Mi45NjhIMTc4LjMyNEgxNzguNDI0VjI1LjAwMjlWMjUuNjc1VjI1Ljc3NUgxNzguMzI0SDE3My43ODJWMjkuMjMxNkgxNzcuOTg4SDE3OC4wODhWMjkuMzMxNlYzMC4wMDRWMzAuMTA0SDE3Ny45ODhIMTczLjc4MlYzMy42NDEySDE3OC4zOTFaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xODMuNjQ2IDMwLjY1NDlWMzQuNDEzM1YzNC41MTMzSDE4My41NDZIMTgyLjgzM0gxODIuNzMzVjM0LjQxMzNWMjUuMDAyOVYyNC45MDI5SDE4Mi44MzNIMTg2LjU0NkMxODguMTM2IDI0LjkwMjkgMTg5LjQzMiAyNi4xOTc3IDE4OS40MzIgMjcuNzg1N0MxODkuNDMyIDI5LjA2NDkgMTg4LjU4NiAzMC4xNDc1IDE4Ny40MTEgMzAuNTIwOEwxODkuNjg3IDM0LjM2MjRMMTg5Ljc3NyAzNC41MTMzSDE4OS42MDFIMTg4Ljc4SDE4OC43MjNMMTg4LjY5NCAzNC40NjM5TDE4Ni40NjIgMzAuNjU0OUgxODMuNjQ2Wk0xODMuNjQ2IDI5Ljc4MjhIMTg2LjU0NkMxODcuNjM0IDI5Ljc4MjggMTg4LjUxOSAyOC44ODc4IDE4OC41MTkgMjcuNzg1N0MxODguNTE5IDI2LjY2OTYgMTg3LjYzNCAyNS43NzUgMTg2LjU0NiAyNS43NzVIMTgzLjY0NlYyOS43ODI4WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjAzLjkwNiAzMi40MjM3TDIwMi4xODQgMzAuNTY4NkwyMDIuMTAzIDMwLjQ4NzhDMjAxLjc1MyAzMC43NzAxIDIwMS42MDUgMzEuMTU5OSAyMDEuNjA1IDMxLjUzNjRDMjAxLjYwNSAzMi4xNjgyIDIwMi4wMDkgMzIuNjM4OCAyMDIuOTY0IDMyLjYzODhDMjAzLjMxNCAzMi42Mzg4IDIwMy42MjQgMzIuNTcxNyAyMDMuOTA2IDMyLjQyMzdaTTIwNi4wNTkgMzQuNzYyOUwyMDUuMjI1IDMzLjg2MjNDMjA0LjU2NSAzNC4zMTkxIDIwMy43NTggMzQuNjAxNSAyMDIuNzg5IDM0LjYwMTVDMjAwLjg1MiAzNC42MDE1IDE5OS40MjUgMzMuNTM5NiAxOTkuNDI1IDMxLjc2NDlDMTk5LjQyNSAzMC42ODkzIDE5OS45NjMgMjkuNjgxMyAyMDAuOTMyIDI5LjA2MjdDMjAwLjY5IDI4LjY0NTkgMjAwLjU0MiAyOC4xNzUzIDIwMC41NDIgMjcuNTcwM0MyMDAuNTQyIDI1Ljk4NDEgMjAxLjc2NyAyNC44MTQ2IDIwMy41NyAyNC44MTQ2QzIwNC45MjkgMjQuODE0NiAyMDYuMDg2IDI1LjQ4NjcgMjA2LjY2NSAyNi44NzE0TDIwNC44MjEgMjcuOTMzNUMyMDQuNTc5IDI3LjMwMTcgMjA0LjIwMiAyNi45MTE3IDIwMy41OTcgMjYuOTExN0MyMDMuMDU5IDI2LjkxMTcgMjAyLjY5NSAyNy4yNDc5IDIwMi42OTUgMjcuNzA1QzIwMi42OTUgMjguMjI1IDIwMy4wMTMgMjguNTczMyAyMDMuNDI1IDI5LjAyNDlMMjAzLjQzNSAyOS4wMzU3TDIwNS4xNzEgMzAuOTU4NEMyMDUuMzU5IDMwLjUyODMgMjA1LjUwOCAzMC4wMzA3IDIwNS42MTUgMjkuNDc5NUwyMDcuNDE5IDMwLjUwMTNDMjA3LjI0MyAzMS4xNTk5IDIwNi45NjEgMzEuODU5IDIwNi41NTcgMzIuNDc3M0wyMDcuNzQxIDMzLjc5NUwyMDYuMDU5IDM0Ljc2MjlaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG48cGF0aCBkPVwiTTIwMy45MDYgMzIuNDIzN0wyMDIuMTg0IDMwLjU2ODZMMjAyLjEwMyAzMC40ODc4QzIwMS43NTMgMzAuNzcwMSAyMDEuNjA1IDMxLjE1OTkgMjAxLjYwNSAzMS41MzY0QzIwMS42MDUgMzIuMTY4MiAyMDIuMDA5IDMyLjYzODggMjAyLjk2NCAzMi42Mzg4QzIwMy4zMTQgMzIuNjM4OCAyMDMuNjI0IDMyLjU3MTcgMjAzLjkwNiAzMi40MjM3Wk0yMDYuMDU5IDM0Ljc2MjlMMjA1LjIyNSAzMy44NjIzQzIwNC41NjUgMzQuMzE5MSAyMDMuNzU4IDM0LjYwMTUgMjAyLjc4OSAzNC42MDE1QzIwMC44NTIgMzQuNjAxNSAxOTkuNDI1IDMzLjUzOTYgMTk5LjQyNSAzMS43NjQ5QzE5OS40MjUgMzAuNjg5MyAxOTkuOTYzIDI5LjY4MTMgMjAwLjkzMiAyOS4wNjI3QzIwMC42OSAyOC42NDU5IDIwMC41NDIgMjguMTc1MyAyMDAuNTQyIDI3LjU3MDNDMjAwLjU0MiAyNS45ODQxIDIwMS43NjcgMjQuODE0NiAyMDMuNTcgMjQuODE0NkMyMDQuOTI5IDI0LjgxNDYgMjA2LjA4NiAyNS40ODY3IDIwNi42NjUgMjYuODcxNEwyMDQuODIxIDI3LjkzMzVDMjA0LjU3OSAyNy4zMDE3IDIwNC4yMDIgMjYuOTExNyAyMDMuNTk3IDI2LjkxMTdDMjAzLjA1OSAyNi45MTE3IDIwMi42OTUgMjcuMjQ3OSAyMDIuNjk1IDI3LjcwNUMyMDIuNjk1IDI4LjIyNSAyMDMuMDEzIDI4LjU3MzMgMjAzLjQyNSAyOS4wMjQ5TDIwMy40MzUgMjkuMDM1N0wyMDUuMTcxIDMwLjk1ODRDMjA1LjM1OSAzMC41MjgzIDIwNS41MDggMzAuMDMwNyAyMDUuNjE1IDI5LjQ3OTVMMjA3LjQxOSAzMC41MDEzQzIwNy4yNDMgMzEuMTU5OSAyMDYuOTYxIDMxLjg1OSAyMDYuNTU3IDMyLjQ3NzNMMjA3Ljc0MSAzMy43OTVMMjA2LjA1OSAzNC43NjI5WlwiIHN0cm9rZT1cIndoaXRlXCIvPlxyXG48cGF0aCBkPVwiTTk2LjYzMTcgNDYuNzg4MlY1MC41NDY5VjUwLjY0NjlIOTYuNTMxN0g5NS44MTg0SDk1LjcxODRWNTAuNTQ2OVY0MS4xMzY0VjQxLjAzNjRIOTUuODE4NEg5OS41MzIzQzEwMS4xMjIgNDEuMDM2NCAxMDIuNDE4IDQyLjMzMTIgMTAyLjQxOCA0My45MTlDMTAyLjQxOCA0NS4xOTgyIDEwMS41NzIgNDYuMjgwNiAxMDAuMzk3IDQ2LjY1NDFMMTAyLjY3MyA1MC40OTU5TDEwMi43NjMgNTAuNjQ2OUgxMDIuNTg3SDEwMS43NjZIMTAxLjcwOUwxMDEuNjggNTAuNTk3NEw5OS40NDgyIDQ2Ljc4ODJIOTYuNjMxN1pNOTYuNjMxNyA0NS45MTY0SDk5LjUzMjNDMTAwLjYyIDQ1LjkxNjQgMTAxLjUwNSA0NS4wMjExIDEwMS41MDUgNDMuOTE5QzEwMS41MDUgNDIuODAzMSAxMDAuNjIgNDEuOTA4MyA5OS41MzIzIDQxLjkwODNIOTYuNjMxN1Y0NS45MTY0WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTE1LjEyMyA0NS44NDE0QzExNS4xMjMgNDMuNTgzNSAxMTMuMzUgNDEuNzczOSAxMTEuMDc4IDQxLjc3MzlDMTA4LjgwNyA0MS43NzM5IDEwNy4wMzQgNDMuNTgzNSAxMDcuMDM0IDQ1Ljg0MTRDMTA3LjAzNCA0OC4wOTk2IDEwOC44MDcgNDkuOTA5IDExMS4wNzggNDkuOTA5QzExMy4zNSA0OS45MDkgMTE1LjEyMyA0OC4wOTk2IDExNS4xMjMgNDUuODQxNFpNMTA2LjEyMSA0NS44NDE0QzEwNi4xMjEgNDMuMDk3OCAxMDguMzA1IDQwLjg4ODMgMTExLjA3OCA0MC44ODgzQzExMy44NTIgNDAuODg4MyAxMTYuMDM2IDQzLjA5NzggMTE2LjAzNiA0NS44NDE0QzExNi4wMzYgNDguNTg1MyAxMTMuODUyIDUwLjc5NDggMTExLjA3OCA1MC43OTQ4QzEwOC4zMDUgNTAuNzk0OCAxMDYuMTIxIDQ4LjU4NTMgMTA2LjEyMSA0NS44NDE0WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTIwLjQzMiA1MC42NDY2SDEyMC4zMzJWNTAuNTQ2NlY0MS4xMzY0VjQxLjAzNjRIMTIwLjQzMkgxMjMuOTcxQzEyNi42MzEgNDEuMDM2NCAxMjguNTEyIDQzLjE5OTIgMTI4LjUxMiA0NS44NDE0QzEyOC41MTIgNDguNDgzNiAxMjYuNjMxIDUwLjY0NjYgMTIzLjk3MSA1MC42NDY2SDEyMC40MzJaTTEyNy42MTIgNDUuODQxNEMxMjcuNjEyIDQzLjY1NTEgMTI2LjEyNiA0MS45MDgzIDEyMy45NzEgNDEuOTA4M0gxMjEuMjQ1VjQ5Ljc3NDVIMTIzLjk3MUMxMjYuMTI2IDQ5Ljc3NDUgMTI3LjYxMiA0OC4wMjggMTI3LjYxMiA0NS44NDE0WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTMzLjcyIDQ2Ljc4ODJWNTAuNTQ2OVY1MC42NDY5SDEzMy42MkgxMzIuOTA2SDEzMi44MDZWNTAuNTQ2OVY0MS4xMzY0VjQxLjAzNjRIMTMyLjkwNkgxMzYuNjJDMTM4LjIwOSA0MS4wMzY0IDEzOS41MDYgNDIuMzMxMiAxMzkuNTA2IDQzLjkxOUMxMzkuNTA2IDQ1LjE5ODIgMTM4LjY2IDQ2LjI4MDYgMTM3LjQ4NSA0Ni42NTQxTDEzOS43NjEgNTAuNDk1OUwxMzkuODUgNTAuNjQ2OUgxMzkuNjc1SDEzOC44NTRIMTM4Ljc5N0wxMzguNzY4IDUwLjU5NzRMMTM2LjUzNiA0Ni43ODgySDEzMy43MlpNMTMzLjcyIDQ1LjkxNjRIMTM2LjYyQzEzNy43MDggNDUuOTE2NCAxMzguNTkzIDQ1LjAyMTIgMTM4LjU5MyA0My45MTlDMTM4LjU5MyA0Mi44MDMxIDEzNy43MDcgNDEuOTA4MyAxMzYuNjIgNDEuOTA4M0gxMzMuNzJWNDUuOTE2NFpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTE0NC42NjEgNTAuNTQ2OVY1MC42NDY5SDE0NC41NjFIMTQzLjg0N0gxNDMuNzQ3VjUwLjU0NjlWNDEuMTM2NFY0MS4wMzY0SDE0My44NDdIMTQ0LjU2MUgxNDQuNjYxVjQxLjEzNjRWNTAuNTQ2OVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTE1OC4wOSA0My4yMTA2TDE1OC4xMzkgNDMuMjk2TDE1OC4wNTQgNDMuMzQ2M0wxNTcuNDIyIDQzLjcyMjhMMTU3LjMzMSA0My43NzY4TDE1Ny4yODIgNDMuNjgzM0MxNTYuNjgyIDQyLjUzNTkgMTU1LjM5OSA0MS43NzM5IDE1My45NTMgNDEuNzczOUMxNTEuNTM0IDQxLjc3MzkgMTQ5Ljg2OCA0My41ODI0IDE0OS44NjggNDUuODQxNEMxNDkuODY4IDQ4LjA5OTggMTUxLjUzMyA0OS45MDkgMTU0LjAwNyA0OS45MDlDMTU1LjEyOSA0OS45MDkgMTU2LjAyMyA0OS41NjI5IDE1Ni42NTQgNDkuMDA4QzE1Ny4yNTcgNDguNDc2NSAxNTcuNjI1IDQ3Ljc0OTEgMTU3LjcxOCA0Ni45MzY0SDE1My44MzJIMTUzLjczMlY0Ni44MzY0VjQ2LjE2NDFWNDYuMDY0MUgxNTMuODMySDE1OC41NTVIMTU4LjY1NVY0Ni4xNjQxVjQ2LjUyNzNDMTU4LjY1NSA0OC44NTc3IDE1Ni44NzEgNTAuNzk0OCAxNTQuMDA3IDUwLjc5NDhDMTUxLjAzMSA1MC43OTQ4IDE0OC45NTUgNDguNTg1MSAxNDguOTU1IDQ1Ljg0MTRDMTQ4Ljk1NSA0My4wOTg3IDE1MS4wMyA0MC44ODgzIDE1My45NTMgNDAuODg4M0MxNTUuNzM3IDQwLjg4ODMgMTU3LjI5MSA0MS44MjEyIDE1OC4wOSA0My4yMTA2WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTYyLjczNSA0MS4xMzYyVjQxLjAzNjJIMTYyLjgzNUgxNjMuNTQ4SDE2My42NDhWNDEuMTM2MlY0Ny40MDA3QzE2My42NDggNDguMTQ2MiAxNjMuODggNDguNzcwNyAxNjQuMzE5IDQ5LjIwODdDMTY0Ljc1NyA0OS42NDY1IDE2NS40MTIgNDkuOTA4NyAxNjYuMjggNDkuOTA4N0MxNjcuMTU0IDQ5LjkwODcgMTY3LjgxMyA0OS42NDY0IDE2OC4yNTMgNDkuMjA4NkMxNjguNjkzIDQ4Ljc3MDYgMTY4LjkyNSA0OC4xNDYyIDE2OC45MjUgNDcuNDAwN1Y0MS4xMzYyVjQxLjAzNjJIMTY5LjAyNUgxNjkuNzM4SDE2OS44MzhWNDEuMTM2MlY0Ny40MDA3QzE2OS44MzggNDguNDE5OCAxNjkuNDgzIDQ5LjI3MDcgMTY4Ljg1NSA0OS44NjY0QzE2OC4yMjggNTAuNDYxNyAxNjcuMzM3IDUwLjc5NDYgMTY2LjI4IDUwLjc5NDZDMTY1LjIyMyA1MC43OTQ2IDE2NC4zMzUgNTAuNDYxNyAxNjMuNzExIDQ5Ljg2NjJDMTYzLjA4NyA0OS4yNzAzIDE2Mi43MzUgNDguNDE5NSAxNjIuNzM1IDQ3LjQwMDdWNDEuMTM2MlpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTE4MC4wNiA0OS43NzQ1SDE4MC4xNlY0OS44NzQ1VjUwLjU0NjZWNTAuNjQ2NkgxODAuMDZIMTc0LjYzN0gxNzQuNTM3VjUwLjU0NjZWNDEuMTM2MlY0MS4wMzYySDE3NC42MzdIMTc5Ljk5M0gxODAuMDkzVjQxLjEzNjJWNDEuODA4M1Y0MS45MDgzSDE3OS45OTNIMTc1LjQ1VjQ1LjM2NTJIMTc5LjY1NkgxNzkuNzU2VjQ1LjQ2NTJWNDYuMTM3VjQ2LjIzN0gxNzkuNjU2SDE3NS40NVY0OS43NzQ1SDE4MC4wNlpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTE4OS45MjQgNDkuNzc0NUgxOTAuMDI0VjQ5Ljg3NDVWNTAuNTQ2NlY1MC42NDY2SDE4OS45MjRIMTgzLjkwOUgxODMuODA5VjUwLjU0NjZWNDkuODc0NVY0OS44NDU2TDE4My44MjUgNDkuODIxMkwxODguODE0IDQxLjkwODNIMTg0LjA0NEgxODMuOTQ0VjQxLjgwODNWNDEuMTM2MlY0MS4wMzYySDE4NC4wNDRIMTg5Ljc5SDE4OS44OVY0MS4xMzYyVjQxLjgwODNWNDEuODM3MkwxODkuODc0IDQxLjg2MTZMMTg0Ljg4NCA0OS43NzQ1SDE4OS45MjRaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yMDkuMTMzIDUwLjU0NjZWNTAuNjQ2NkgyMDkuMDMzSDIwOC4zMTlIMjA4LjIxOVY1MC41NDY2VjQyLjU0NDNMMjA0LjkyIDQ4LjAxN0wyMDQuODkxIDQ4LjA2NTRIMjA0LjgzNEgyMDQuNzEzSDIwNC42NTZMMjA0LjYyNyA0OC4wMTdMMjAxLjMyOCA0Mi41NDQzVjUwLjU0NjZWNTAuNjQ2NkgyMDEuMjI4SDIwMC41MTVIMjAwLjQxNVY1MC41NDY2VjQxLjEzNjJWNDEuMDM2MkgyMDAuNTE1SDIwMS40MDNIMjAxLjQ1OUwyMDEuNDg4IDQxLjA4NDVMMjA0Ljc2NyA0Ni41MDg0TDIwOC4wNDUgNDEuMDg0NUwyMDguMDc1IDQxLjAzNjJIMjA4LjEzMUgyMDkuMDMzSDIwOS4xMzNWNDEuMTM2MlY1MC41NDY2WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjIyLjQzIDQ1Ljg0MTRDMjIyLjQzIDQzLjU4MzUgMjIwLjY1OCA0MS43NzM5IDIxOC4zODYgNDEuNzczOUMyMTYuMTE0IDQxLjc3MzkgMjE0LjM0MSA0My41ODM1IDIxNC4zNDEgNDUuODQxNEMyMTQuMzQxIDQ4LjA5OTYgMjE2LjExNCA0OS45MDkgMjE4LjM4NiA0OS45MDlDMjIwLjY1OCA0OS45MDkgMjIyLjQzIDQ4LjA5OTYgMjIyLjQzIDQ1Ljg0MTRaTTIxMy40MjggNDUuODQxNEMyMTMuNDI4IDQzLjA5NzggMjE1LjYxMiA0MC44ODgzIDIxOC4zODYgNDAuODg4M0MyMjEuMTU5IDQwLjg4ODMgMjIzLjM0MyA0My4wOTc4IDIyMy4zNDMgNDUuODQxNEMyMjMuMzQzIDQ4LjU4NTMgMjIxLjE1OSA1MC43OTQ4IDIxOC4zODYgNTAuNzk0OEMyMTUuNjEyIDUwLjc5NDggMjEzLjQyOCA0OC41ODUzIDIxMy40MjggNDUuODQxNFpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTIyOC41NTIgNDYuNzg4MlY1MC41NDY5VjUwLjY0NjlIMjI4LjQ1MkgyMjcuNzM5SDIyNy42MzlWNTAuNTQ2OVY0MS4xMzY0VjQxLjAzNjRIMjI3LjczOUgyMzEuNDUyQzIzMy4wNDIgNDEuMDM2NCAyMzQuMzM4IDQyLjMzMTIgMjM0LjMzOCA0My45MTlDMjM0LjMzOCA0NS4xOTgyIDIzMy40OTIgNDYuMjgwNiAyMzIuMzE3IDQ2LjY1NDFMMjM0LjU5MyA1MC40OTU5TDIzNC42ODMgNTAuNjQ2OUgyMzQuNTA3SDIzMy42ODZIMjMzLjYyOUwyMzMuNiA1MC41OTc0TDIzMS4zNjggNDYuNzg4MkgyMjguNTUyWk0yMjguNTUyIDQ1LjkxNjRIMjMxLjQ1MkMyMzIuNTQgNDUuOTE2NCAyMzMuNDI1IDQ1LjAyMTEgMjMzLjQyNSA0My45MTlDMjMzLjQyNSA0Mi44MDMxIDIzMi41NCA0MS45MDgzIDIzMS40NTIgNDEuOTA4M0gyMjguNTUyVjQ1LjkxNjRaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0yMzguNTU4IDUwLjU4MjZMMjM4LjUzMyA1MC42NDY5SDIzOC40NjRIMjM3LjcxSDIzNy41NjRMMjM3LjYxNyA1MC41MTA2TDI0MS4yNzggNDEuMTAwMkwyNDEuMzAyIDQxLjAzNjRIMjQxLjM3MUgyNDIuMTI0SDI0Mi4xOTNMMjQyLjIxNyA0MS4xMDAzTDI0NS44NjQgNTAuNTEwN0wyNDUuOTE3IDUwLjY0NjlIMjQ1Ljc3MUgyNDUuMDE3SDI0NC45NDlMMjQ0LjkyNCA1MC41ODI2TDI0NC4wMzQgNDguMjUzOEgyMzkuNDQ4TDIzOC41NTggNTAuNTgyNlpNMjM5Ljc5NCA0Ny4zODE3SDI0My43MDFMMjQxLjc0NyA0Mi4yODkyTDIzOS43OTQgNDcuMzgxN1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTI1NC45ODkgNDkuNzc0NUgyNTUuMDg5VjQ5Ljg3NDVWNTAuNTQ2NlY1MC42NDY2SDI1NC45ODlIMjQ5LjgzNUgyNDkuNzM1VjUwLjU0NjZWNDEuMTM2MlY0MS4wMzYySDI0OS44MzVIMjUwLjU0OUgyNTAuNjQ5VjQxLjEzNjJWNDkuNzc0NUgyNTQuOTg5WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjY0LjU4NCA0OS43NzQ1SDI2NC42ODRWNDkuODc0NVY1MC41NDY2VjUwLjY0NjZIMjY0LjU4NEgyNTkuMTYxSDI1OS4wNjFWNTAuNTQ2NlY0MS4xMzYyVjQxLjAzNjJIMjU5LjE2MUgyNjQuNTE3SDI2NC42MTdWNDEuMTM2MlY0MS44MDgzVjQxLjkwODNIMjY0LjUxN0gyNTkuOTc0VjQ1LjM2NTJIMjY0LjE4SDI2NC4yOFY0NS40NjUyVjQ2LjEzN1Y0Ni4yMzdIMjY0LjE4SDI1OS45NzRWNDkuNzc0NUgyNjQuNTg0WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMjY4LjM2NSA0OC41MDcxTDI2OC4zNCA0OC40MzA2TDI2OC40MDkgNDguMzlMMjY5LjAyOSA0OC4wMjdMMjY5LjE0IDQ3Ljk2MThMMjY5LjE3NSA0OC4wODU4QzI2OS4zMzEgNDguNjMwNCAyNjkuNjM4IDQ5LjA4NDIgMjcwLjA5IDQ5LjQwMjdDMjcwLjU0MyA0OS43MjE0IDI3MS4xNDggNDkuOTA4NyAyNzEuOTA1IDQ5LjkwODdDMjcyLjY3NiA0OS45MDg3IDI3My4yNDMgNDkuNzExMyAyNzMuNjE1IDQ5LjM5NDlDMjczLjk4NSA0OS4wNzk5IDI3NC4xNzMgNDguNjM4NCAyNzQuMTczIDQ4LjEyNjZDMjc0LjE3MyA0Ny41OTk1IDI3My45NDUgNDcuMjM4IDI3My41MzcgNDYuOTQ3N0MyNzMuMTIzIDQ2LjY1MjMgMjcyLjUyOSA0Ni40MzQ0IDI3MS44MDcgNDYuMjA1NkwyNzEuODA3IDQ2LjIwNTRDMjcxLjc5IDQ2LjE5OTkgMjcxLjc3MyA0Ni4xOTQ1IDI3MS43NTYgNDYuMTg5QzI3MC45OTIgNDUuOTQxIDI3MC4yNDkgNDUuNzAwMiAyNjkuNjk3IDQ1LjMxODZDMjY5LjQxMiA0NS4xMjIyIDI2OS4xNzUgNDQuODg2NCAyNjkuMDA4IDQ0LjU4OTlDMjY4Ljg0MiA0NC4yOTMgMjY4Ljc1IDQzLjk0MDUgMjY4Ljc1IDQzLjUxNTVDMjY4Ljc1IDQyLjcxMzIgMjY5LjA3NiA0Mi4wNTM2IDI2OS42MTEgNDEuNTk1OUMyNzAuMTQ1IDQxLjEzOTUgMjcwLjg4MyA0MC44ODggMjcxLjcwMyA0MC44ODhDMjczLjI5NSA0MC44ODggMjc0LjM1MiA0MS44MDM5IDI3NC44MjMgNDIuOTI1NkwyNzQuODU4IDQzLjAwODJMMjc0Ljc3OSA0My4wNTE3TDI3NC4xNzQgNDMuMzg3OUwyNzQuMDc2IDQzLjQ0MjNMMjc0LjAzMyA0My4zMzg3QzI3My44NjMgNDIuOTI3NCAyNzMuNjAzIDQyLjUzNjYgMjczLjIyNyA0Mi4yNDg5QzI3Mi44NTIgNDEuOTYyMiAyNzIuMzU1IDQxLjc3MzcgMjcxLjcwMyA0MS43NzM3QzI3MS4wNyA0MS43NzM3IDI3MC41NjMgNDEuOTU5NCAyNzAuMjE2IDQyLjI2MzJDMjY5Ljg3MSA0Mi41NjYxIDI2OS42NzcgNDIuOTkyMSAyNjkuNjc3IDQzLjQ4ODdDMjY5LjY3NyA0My43NTYzIDI2OS43MzMgNDMuOTcyOCAyNjkuODM1IDQ0LjE1NDVDMjY5LjkzNiA0NC4zMzY3IDI3MC4wODYgNDQuNDg5NSAyNzAuMjggNDQuNjI1MUMyNzAuNjczIDQ0Ljg5OSAyNzEuMjMzIDQ1LjA5MyAyNzEuOTA5IDQ1LjMxNTlMMjcxLjkwOSA0NS4zMTU5QzI3Mi43NDEgNDUuNTkwNiAyNzMuNTM2IDQ1Ljg2MzcgMjc0LjEyMiA0Ni4yNzcyQzI3NC43MTYgNDYuNjk2IDI3NS4xIDQ3LjI2MjEgMjc1LjEgNDguMTEzM0MyNzUuMSA0OC45MjE0IDI3NC43ODIgNDkuNTk1MyAyNzQuMjE4IDUwLjA2NTVDMjczLjY1NiA1MC41MzQzIDI3Mi44NTggNTAuNzk0NiAyNzEuOTA1IDUwLjc5NDZDMjcwLjEwNiA1MC43OTQ2IDI2OC44MTEgNDkuODg2IDI2OC4zNjUgNDguNTA3MVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTk1LjY5NjcgNjYuNzE1OUw5NS42NzIxIDY2Ljc4MDJIOTUuNjAzM0g5NC44NDk2SDk0LjcwMzRMOTQuNzU2NCA2Ni42NDM5TDk4LjQxNjggNTcuMjMzNUw5OC40NDE2IDU3LjE2OThIOTguNTFIOTkuMjYzNEg5OS4zMzE5TDk5LjM1NjYgNTcuMjMzNkwxMDMuMDAzIDY2LjY0NEwxMDMuMDU2IDY2Ljc4MDJIMTAyLjkxSDEwMi4xNTdIMTAyLjA4OEwxMDIuMDYzIDY2LjcxNTlMMTAxLjE3MyA2NC4zODcxSDk2LjU4NjlMOTUuNjk2NyA2Ni43MTU5Wk05Ni45MzI5IDYzLjUxNUgxMDAuODRMOTguODg2NSA1OC40MjI1TDk2LjkzMjkgNjMuNTE1WlwiIGZpbGw9XCIjQUYxQjI2XCIgc3Ryb2tlPVwiI0FGMUIyNlwiIHN0cm9rZVdpZHRoPVwiMC4yXCIvPlxyXG48cGF0aCBkPVwiTTEwNi45NzQgNjYuNzgwMkgxMDYuODc0VjY2LjY4MDJWNTcuMjY5N1Y1Ny4xNjk3SDEwNi45NzRIMTEwLjcyOEMxMTIuMTU2IDU3LjE2OTcgMTEzLjMwNCA1OC4zMzA0IDExMy4zMDQgNTkuNzQzNEMxMTMuMzA0IDYwLjYyMDMgMTEyLjg3NSA2MS4zNTcxIDExMi4yMTQgNjEuNzg1OUMxMTMuMDk0IDYyLjIwMSAxMTMuNzA4IDYzLjA2NCAxMTMuNzA4IDY0LjExMjdDMTEzLjcwOCA2NS41OTI4IDExMi41MTkgNjYuNzgwMiAxMTEuMDM4IDY2Ljc4MDJIMTA2Ljk3NFpNMTEyLjc5NSA2NC4xMTI3QzExMi43OTUgNjMuMTE3MyAxMTIuMDA0IDYyLjMxNyAxMTEuMDM4IDYyLjMxN0gxMDcuNzg3VjY1LjkwODFIMTExLjAzOEMxMTIuMDA0IDY1LjkwODEgMTEyLjc5NSA2NS4xMDc4IDExMi43OTUgNjQuMTEyN1pNMTA3Ljc4NyA1OC4wNDE4VjYxLjQ0NDdIMTEwLjcyOEMxMTEuNjQgNjEuNDQ0NyAxMTIuMzkxIDYwLjY4NDggMTEyLjM5MSA1OS43NDM0QzExMi4zOTEgNTguODAxNyAxMTEuNjQgNTguMDQxOCAxMTAuNzI4IDU4LjA0MThIMTA3Ljc4N1pcIiBmaWxsPVwiI0FGMUIyNlwiIHN0cm9rZT1cIiNBRjFCMjZcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xMjYuNDE0IDYxLjk3NUMxMjYuNDE0IDU5LjcxNzEgMTI0LjY0MSA1Ny45MDc1IDEyMi4zNjkgNTcuOTA3NUMxMjAuMDk3IDU3LjkwNzUgMTE4LjMyNSA1OS43MTcxIDExOC4zMjUgNjEuOTc1QzExOC4zMjUgNjQuMjMzMSAxMjAuMDk3IDY2LjA0MjUgMTIyLjM2OSA2Ni4wNDI1QzEyNC42NDEgNjYuMDQyNSAxMjYuNDE0IDY0LjIzMzEgMTI2LjQxNCA2MS45NzVaTTExNy40MTEgNjEuOTc1QzExNy40MTEgNTkuMjMxNCAxMTkuNTk1IDU3LjAyMTggMTIyLjM2OSA1Ny4wMjE4QzEyNS4xNDMgNTcuMDIxOCAxMjcuMzI3IDU5LjIzMTQgMTI3LjMyNyA2MS45NzVDMTI3LjMyNyA2NC43MTg4IDEyNS4xNDMgNjYuOTI4NCAxMjIuMzY5IDY2LjkyODRDMTE5LjU5NSA2Ni45Mjg0IDExNy40MTEgNjQuNzE4OCAxMTcuNDExIDYxLjk3NVpcIiBmaWxsPVwiI0FGMUIyNlwiIHN0cm9rZT1cIiNBRjFCMjZcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xNDAuMjE5IDU5LjM0NDFMMTQwLjI2OCA1OS40Mjk1TDE0MC4xODMgNTkuNDc5OUwxMzkuNTUxIDU5Ljg1NjFMMTM5LjQ2IDU5LjkxMDFMMTM5LjQxMSA1OS44MTY2QzEzOC44MTEgNTguNjY5NCAxMzcuNTI4IDU3LjkwNzQgMTM2LjA4MiA1Ny45MDc0QzEzMy42NjMgNTcuOTA3NCAxMzEuOTk3IDU5LjcxNiAxMzEuOTk3IDYxLjk3NUMxMzEuOTk3IDY0LjIzMzQgMTMzLjY2MiA2Ni4wNDI1IDEzNi4xMzYgNjYuMDQyNUMxMzcuMjU4IDY2LjA0MjUgMTM4LjE1MiA2NS42OTY0IDEzOC43ODMgNjUuMTQxNkMxMzkuMzg2IDY0LjYxMDEgMTM5Ljc1NCA2My44ODI2IDEzOS44NDcgNjMuMDdIMTM1Ljk2MUgxMzUuODYxVjYyLjk3VjYyLjI5NzZWNjIuMTk3NkgxMzUuOTYxSDE0MC42ODRIMTQwLjc4NFY2Mi4yOTc2VjYyLjY2MDZDMTQwLjc4NCA2NC45OTEzIDEzOSA2Ni45Mjg0IDEzNi4xMzYgNjYuOTI4NEMxMzMuMTYgNjYuOTI4NCAxMzEuMDg0IDY0LjcxODYgMTMxLjA4NCA2MS45NzVDMTMxLjA4NCA1OS4yMzIzIDEzMy4xNTkgNTcuMDIxOCAxMzYuMDgyIDU3LjAyMThDMTM3Ljg2NiA1Ny4wMjE4IDEzOS40MiA1Ny45NTQ3IDE0MC4yMTkgNTkuMzQ0MVpcIiBmaWxsPVwiI0FGMUIyNlwiIHN0cm9rZT1cIiNBRjFCMjZcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xNDQuNzA4IDY2LjcxNTlMMTQ0LjY4MyA2Ni43ODAySDE0NC42MTVIMTQzLjg2MUgxNDMuNzE1TDE0My43NjggNjYuNjQzOUwxNDcuNDI4IDU3LjIzMzVMMTQ3LjQ1MyA1Ny4xNjk4SDE0Ny41MjFIMTQ4LjI3NUgxNDguMzQzTDE0OC4zNjggNTcuMjMzNkwxNTIuMDE0IDY2LjY0NEwxNTIuMDY3IDY2Ljc4MDJIMTUxLjkyMUgxNTEuMTY4SDE1MS4wOTlMMTUxLjA3NCA2Ni43MTU5TDE1MC4xODQgNjQuMzg3MUgxNDUuNTk4TDE0NC43MDggNjYuNzE1OVpNMTQ1Ljk0NCA2My41MTVIMTQ5Ljg1MUwxNDcuODk4IDU4LjQyMjVMMTQ1Ljk0NCA2My41MTVaXCIgZmlsbD1cIiNBRjFCMjZcIiBzdHJva2U9XCIjQUYxQjI2XCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTU1Ljk4NSA2Ni43ODAySDE1NS44ODVWNjYuNjgwMlY1Ny4yN1Y1Ny4xN0gxNTUuOTg1SDE1OS41MjRDMTYyLjE4NCA1Ny4xNyAxNjQuMDY1IDU5LjMzMjggMTY0LjA2NSA2MS45NzVDMTY0LjA2NSA2NC42MTcyIDE2Mi4xODQgNjYuNzgwMiAxNTkuNTI0IDY2Ljc4MDJIMTU1Ljk4NVpNMTYzLjE2NSA2MS45NzVDMTYzLjE2NSA1OS43ODg2IDE2MS42OCA1OC4wNDE5IDE1OS41MjQgNTguMDQxOUgxNTYuNzk5VjY1LjkwODFIMTU5LjUyNEMxNjEuNjggNjUuOTA4MSAxNjMuMTY1IDY0LjE2MTUgMTYzLjE2NSA2MS45NzVaXCIgZmlsbD1cIiNBRjFCMjZcIiBzdHJva2U9XCIjQUYxQjI2XCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNMTc2LjgyNCA2MS45NzVDMTc2LjgyNCA1OS43MTcxIDE3NS4wNTEgNTcuOTA3NSAxNzIuNzggNTcuOTA3NUMxNzAuNTA4IDU3LjkwNzUgMTY4LjczNSA1OS43MTcxIDE2OC43MzUgNjEuOTc1QzE2OC43MzUgNjQuMjMzMSAxNzAuNTA4IDY2LjA0MjUgMTcyLjc4IDY2LjA0MjVDMTc1LjA1MSA2Ni4wNDI1IDE3Ni44MjQgNjQuMjMzMSAxNzYuODI0IDYxLjk3NVpNMTY3LjgyMiA2MS45NzVDMTY3LjgyMiA1OS4yMzE0IDE3MC4wMDYgNTcuMDIxOCAxNzIuNzggNTcuMDIxOEMxNzUuNTUzIDU3LjAyMTggMTc3LjczNyA1OS4yMzE0IDE3Ny43MzcgNjEuOTc1QzE3Ny43MzcgNjQuNzE4OCAxNzUuNTUzIDY2LjkyODQgMTcyLjc4IDY2LjkyODRDMTcwLjAwNiA2Ni45Mjg0IDE2Ny44MjIgNjQuNzE4OCAxNjcuODIyIDYxLjk3NVpcIiBmaWxsPVwiI0FGMUIyNlwiIHN0cm9rZT1cIiNBRjFCMjZcIiBzdHJva2VXaWR0aD1cIjAuMlwiLz5cclxuPHBhdGggZD1cIk0xODEuMTM2IDY0LjY0MDZMMTgxLjExMSA2NC41NjQyTDE4MS4xOCA2NC41MjM1TDE4MS44IDY0LjE2MDZMMTgxLjkxMSA2NC4wOTU0TDE4MS45NDYgNjQuMjE5NEMxODIuMTAyIDY0Ljc2MzkgMTgyLjQwOSA2NS4yMTc4IDE4Mi44NjEgNjUuNTM2MkMxODMuMzE0IDY1Ljg1NDkgMTgzLjkxOSA2Ni4wNDIzIDE4NC42NzYgNjYuMDQyM0MxODUuNDQ3IDY2LjA0MjMgMTg2LjAxMyA2NS44NDQ4IDE4Ni4zODYgNjUuNTI4NEMxODYuNzU2IDY1LjIxMzMgMTg2Ljk0NCA2NC43NzE4IDE4Ni45NDQgNjQuMjYwMUMxODYuOTQ0IDYzLjczMjkgMTg2LjcxNSA2My4zNzE0IDE4Ni4zMDggNjMuMDgxMkMxODUuODk0IDYyLjc4NTggMTg1LjMgNjIuNTY4IDE4NC41NzggNjIuMzM5MUwxODQuNTc4IDYyLjMzODlDMTg0LjU2MSA2Mi4zMzM1IDE4NC41NDQgNjIuMzI4IDE4NC41MjcgNjIuMzIyNUMxODMuNzYyIDYyLjA3NDUgMTgzLjAyIDYxLjgzMzcgMTgyLjQ2OCA2MS40NTIyQzE4Mi4xODMgNjEuMjU1NyAxODEuOTQ1IDYxLjAxOTkgMTgxLjc3OSA2MC43MjM0QzE4MS42MTMgNjAuNDI2NSAxODEuNTIxIDYwLjA3NDEgMTgxLjUyMSA1OS42NDlDMTgxLjUyMSA1OC44NDY4IDE4MS44NDcgNTguMTg3MSAxODIuMzgyIDU3LjcyOTVDMTgyLjkxNiA1Ny4yNzMgMTgzLjY1MyA1Ny4wMjE2IDE4NC40NzQgNTcuMDIxNkMxODYuMDY2IDU3LjAyMTYgMTg3LjEyMyA1Ny45Mzc1IDE4Ny41OTQgNTkuMDU5MUwxODcuNjI5IDU5LjE0MThMMTg3LjU1IDU5LjE4NTNMMTg2Ljk0NSA1OS41MjE1TDE4Ni44NDYgNTkuNTc1OUwxODYuODA0IDU5LjQ3MjJDMTg2LjYzNCA1OS4wNjA5IDE4Ni4zNzQgNTguNjcwMiAxODUuOTk4IDU4LjM4MjVDMTg1LjYyMyA1OC4wOTU3IDE4NS4xMjYgNTcuOTA3MiAxODQuNDc0IDU3LjkwNzJDMTgzLjg0MSA1Ny45MDcyIDE4My4zMzQgNTguMDkzIDE4Mi45ODcgNTguMzk2N0MxODIuNjQyIDU4LjY5OTcgMTgyLjQ0OCA1OS4xMjU2IDE4Mi40NDggNTkuNjIyM0MxODIuNDQ4IDU5Ljg4OTkgMTgyLjUwNCA2MC4xMDYzIDE4Mi42MDYgNjAuMjg4MUMxODIuNzA3IDYwLjQ3MDMgMTgyLjg1NyA2MC42MjMxIDE4My4wNTEgNjAuNzU4NkMxODMuNDQ0IDYxLjAzMjYgMTg0LjAwNCA2MS4yMjY2IDE4NC42OCA2MS40NDk1TDE4NC42OCA2MS40NDk1QzE4NS41MTEgNjEuNzI0MiAxODYuMzA3IDYxLjk5NzMgMTg2Ljg5MyA2Mi40MTA4QzE4Ny40ODcgNjIuODI5NSAxODcuODcxIDYzLjM5NTcgMTg3Ljg3MSA2NC4yNDY5QzE4Ny44NzEgNjUuMDU0OCAxODcuNTUyIDY1LjcyODcgMTg2Ljk4OSA2Ni4xOTlDMTg2LjQyNyA2Ni42Njc4IDE4NS42MjkgNjYuOTI4MSAxODQuNjc2IDY2LjkyODFDMTgyLjg3NyA2Ni45MjgxIDE4MS41ODIgNjYuMDE5NiAxODEuMTM2IDY0LjY0MDZaXCIgZmlsbD1cIiNBRjFCMjZcIiBzdHJva2U9XCIjQUYxQjI2XCIgc3Ryb2tlV2lkdGg9XCIwLjJcIi8+XHJcbjxwYXRoIGQ9XCJNNjAuOTM3NiAyMi44Nzk1TDU0LjE3ODQgMjkuNjMyM0w2Mi41NTQxIDM4TDM4LjAzNjMgNjIuNDk0OEwxMy41MTgzIDM4TDM4LjAzNjMgMTMuNTA1NUw0Ny40MDc1IDIyLjg2NzdMNTQuMTY2NiAxNi4xMTUyTDM4LjAzNjMgLTIuMDg1NjFlLTA2TDAgMzhMMzguMDM2MyA3Nkw3Ni4wNzI0IDM4TDYwLjkzNzYgMjIuODc5NVpcIiBmaWxsPVwiI0FGMUIyNlwiLz5cclxuPHBhdGggZD1cIk02MC45Mzc0IDIyLjg3OTZMNTQuMTY2NSAxNi4xMTU0TDYwLjkzNzQgOS4zNTA4M0w2Ny43MDgxIDE2LjExNTRMNjAuOTM3NCAyMi44Nzk2WlwiIGZpbGw9XCIjRjkzMDNFXCIvPlxyXG48L3N2Zz5cclxuXHJcblxyXG5jb25zdCBhcnJvd0Rvd24gPSAgPGRpdiBjbGFzc05hbWU9e3NzLm1vdXNlX3Njcm9sbH0+XHJcbjxkaXY+XHJcbiAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3MubV9zY3JvbGxfYXJyb3dzfSAke3NzLnVudX1gfT48L3NwYW4+XHJcbiAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3MubV9zY3JvbGxfYXJyb3dzfSAke3NzLmRvaX1gfT48L3NwYW4+XHJcbiAgIHsvKiA8c3BhbiBjbGFzc05hbWU9e2Ake3NzLm1fc2Nyb2xsX2Fycm93c30gJHtzcy50cmVpfWB9Pjwvc3Bhbj4gKi99XHJcbjwvZGl2PlxyXG48L2Rpdj4iLCJpbXBvcnQgc3MgZnJvbSAnLi9MYW5ndWFnZVN3aXRjaC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHVzZUFwcENvbnRleHQgZnJvbSAnLi4vLi4vQ29udGV4dC9Vc2VBcHBDb250ZXh0JztcclxuaW1wb3J0IHsgQnJvd3NlclZpZXcsIE1vYmlsZVZpZXcsIGlzQnJvd3NlciwgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuXHJcbmNvbnN0IExhbmd1YWdlU3dpdGNoID0gKCkgPT4ge1xyXG4gICBjb25zdCB7ICBkaXNwbGF5RXNwYcOxb2wsIGRpc3BsYXlJbmdsZXMsIGxhbmd9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG5cclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5jb250YWluZXJ9PlxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhbmc9PVwiRVNQXCJcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BsYXlJbmdsZXMoKX0+RU5HPC9idXR0b24+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwbGF5RXNwYcOxb2woKX0+RVNQPC9idXR0b24+XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Lz5cclxuICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VTd2l0Y2hcclxuLyogXHJcblxyXG5jb25zdCBhcnJvd0Rvd24gPSA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCI1NVwiIHZpZXdCb3g9XCIwIDAgNzUgMTMwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgIDxwYXRoIGQ9XCJNMzMuOTc4OSAxMjcuNTU0QzM1LjkzOTQgMTI5LjQ5OSAzOS4xMDUyIDEyOS40ODYgNDEuMDQ5OSAxMjcuNTI1TDcyLjc0MDEgOTUuNTc2NkM3NC42ODQ3IDkzLjYxNiA3NC42NzE5IDkwLjQ1MDIgNzIuNzExMyA4OC41MDU2QzcwLjc1MDggODYuNTYwOSA2Ny41ODUgODYuNTczOCA2NS42NDAzIDg4LjUzNDNMMzcuNDcxMyAxMTYuOTMzTDkuMDcyMjUgODguNzY0MkM3LjExMTcxIDg2LjgxOTYgMy45NDU5MSA4Ni44MzI0IDIuMDAxMjQgODguNzkzQzAuMDU2NTcxMSA5MC43NTM1IDAuMDY5NDM5NyA5My45MTkzIDIuMDI5OTggOTUuODY0TDMzLjk3ODkgMTI3LjU1NFpNMzIgMS4wMjAzMkwzMi41IDEyNC4wMjVMNDIuNSAxMjMuOTg0TDQyIDAuOTc5Njc2TDMyIDEuMDIwMzJaXCIgZmlsbD1cIiNFNEU0RTRcIiAvPlxyXG48L3N2Zz4gKi9cclxuXHJcblxyXG5jb25zdCBhcnJvd0Rvd24gPSAgPGRpdiBjbGFzc05hbWU9e3NzLm1vdXNlX3Njcm9sbH0+XHJcbjxkaXY+XHJcbiAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3MubV9zY3JvbGxfYXJyb3dzfSAke3NzLnVudX1gfT48L3NwYW4+XHJcbiAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3MubV9zY3JvbGxfYXJyb3dzfSAke3NzLmRvaX1gfT48L3NwYW4+XHJcbiAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3MubV9zY3JvbGxfYXJyb3dzfSAke3NzLnRyZWl9YH0+PC9zcGFuPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9OZXdzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4uL1VJL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGVcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL1VJL0NhcmQvQ2FyZFwiO1xyXG5pbXBvcnQgdXNlQXBwQ29udGV4dCBmcm9tIFwiLi4vLi4vQ29udGV4dC9Vc2VBcHBDb250ZXh0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJWaWV3LCBNb2JpbGVWaWV3LCBpc0Jyb3dzZXIsIGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKHsgbm90aWNpYXMgfSkge1xyXG5cclxuXHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3QgeyBsYW5nIH0gPSB1c2VBcHBDb250ZXh0KCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5nZW5lcmFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgIFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy50aXRsZV9jb250YWluZXJ9PlxyXG5cdFx0XHRcdDxTZWN0aW9uVGl0bGUgY29sb3I9e2lzQnJvd3Nlcj9cIndoaXRlXCI6XCJibGFja1wifT57bGFuZyA9PSBcIkVTUFwiID8gZXNwWzBdIDogZW5nWzBdfTwvU2VjdGlvblRpdGxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cclxuXHRcdFx0XHR7bm90aWNpYXMuc2xpY2UoMCwgNCkubWFwKChub3RpY2lhKSA9PiAoXHJcblx0XHRcdFx0XHQ8Q2FyZFxyXG5cdFx0XHRcdFx0XHRrZXk9e25vdGljaWEuc3lzLmlkfVxyXG5cdFx0XHRcdFx0XHRzbHVnPXtub3RpY2lhLmZpZWxkcy5zbHVnfVxyXG5cdFx0XHRcdFx0XHR0aXRsZT17bGFuZyA9PSBcIkVTUFwiPyAgICAgIG5vdGljaWEuZmllbGRzLnRpdHVsbzogbm90aWNpYS5maWVsZHMudGl0dWxvSW5nbGVzfVxyXG5cdFx0XHRcdFx0XHRjb250ZW50PXtsYW5nID09IFwiRVNQXCIgPyAgIG5vdGljaWEuZmllbGRzLmJyaWVmIDogbm90aWNpYS5maWVsZHMuYnJpZWZJbmdsZXN9XHJcblx0XHRcdFx0XHRcdG1hc0RldGFsbGU9e3RydWV9XHJcblx0XHRcdFx0XHRcdG5vdGljaWFzPXtub3RpY2lhc31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5vdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICBcclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuXHJcbmNvbnN0IGVzcCA9IFtcIk5vdmVkYWRlc1wiXTtcclxuXHJcbmNvbnN0IGVuZyA9IFtcIkxhdGVzdCBOZXdzXCJdO1xyXG5cclxuY29uc3QgbmV3c0FycmF5ID0gW1xyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlJlZ3VsYWNpb24gQUZJUFwiLFxyXG5cdFx0Y29udGVudDpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgcHJvIGV4IG1vZG8gdmVuaWFtIGNvbXBsZWN0aXR1ciwgYWQgc2VkIGFsaWkgZW5pbSBleHBsaWNhcmkuIFByaW1pcyByaWRlblBvc3NpbSBxdW9kc2kgZ3ViZXJncmVuIHBybyBjdS4gRmFjZXIgbWFuZGFtdXMgZXUgdmlzLCBwcm8gaXVkaWNvIHJlZ2lvbmUgcHJvZGVzc2V0IGN1LlwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiUmVndWxhY2lvbiBBRklQXCIsXHJcblx0XHRjb250ZW50OlxyXG5cdFx0XHRcIkxPUkVNIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBwcm8gZXggbW9kbyB2ZW5pYW0gY29tcGxlY3RpdHVyLCBhZCBzZWQgYWxpaSBlbmltIGV4cGxpY2FyaS4gUHNpYnVzIHNlYS4gUG9zc2ltIHF1b2RzaSBndWJlcmdyZW4gcHJvIGN1LiBGYWNlciBtYW5kYW11cyBldSB2aXMsIHBybyBpdWRpY28gcmVnaW9uZSBwcm9kZXNzZXQgY3UuXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJSZWd1bGFjaW9uIEFGSVBcIixcclxuXHRcdGNvbnRlbnQ6XHJcblx0XHRcdFwiTE9SRU0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHBybyBleCBtb2RvIHZlbmlhbSBjb21wbGVjdGl0dXIsIGFkIHNlZCBhbGlpIGVuaW0gZXhwbGljYXJpLiBQcmlidXMgc2VhLiBQb3NzaW0gcXVvZHNpIGd1YmVyZ3JlbiBwcm8gY3UuIEZhY2VyIG1hbmRhbXVzIGV1IHZpcywgcHJvIGl1ZGljbyByZWdpb25lIHByb2Rlc3NldCBjdS5cIixcclxuXHR9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9DYXJyb3VzZWwubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vVUkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZVwiO1xyXG5pbXBvcnQgdXNlQXBwQ29udGV4dCBmcm9tICcuLi8uLi9Db250ZXh0L1VzZUFwcENvbnRleHQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBDYXJyb3VzZWwgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IHsgbGFuZyB9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG5cdHJldHVybiAoPD4yVFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3NzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5vdmVybGF5fT5cclxuICAgICAgPEltYWdlICBzcmM9Jy9vZmkzLmpwZydhbHQ9XCJzb2Npb1wiIGxheW91dD1cImZpbGxcIj48L0ltYWdlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3NzLmNvbnRlbnR9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3NzLnRpdGxlX2NvbnRhaW5lcn0+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGU+e2xhbmcgPT0gXCJFU1BcIiA/IGVzcFswXSA6IGVuZ1swXX08L1NlY3Rpb25UaXRsZT5cclxuPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5jYXJvdXNlbF9jb250YWluZXJ9PlxyXG5cdFx0XHQ8Q2Fyb3VzZWwgYXV0b3BsYXkgZHJhZ2dhYmxlPXt0cnVlfSBhdXRvcGxheVNwZWVkPXs2MDAwfSBzcGVlZD17MTAwMH0+XHJcblx0XHRcdFxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NzLmNvbnRlbnRTdHlsZX0+IFxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3NzLnJlZmVyZW5jaWF9PlxyXG4gICAgICAgICAgICAgICAgICB7bGFuZz09XCJFU1BcIj8gXCJFbCBlcXVpcG8gbm9zIHByb3BvbmUgc29sdWNpb25lcyBwcmFjdGljYXMgZSBpbm5vdmFkb3JhcyBlbiBzdXNcXFxyXG5cdFx0XHRcdFx0XHRcdGRpc3RpbnRhcyBhcmVhcyBkZSBwcmFjdGljby4gU29uIG11eSBwcm9mZXNpb25hbGVzLCBwcm9hY3Rpdm9zIHlcXFxyXG5cdFx0XHRcdFx0XHRcdGNvbXByb21ldGlkb3MuIExhIGNvbmZpYW56YSBnZW5lcmFkYSBub3MgcGVybWl0ZSBkZWxlZ2FybGUgYXN1bnRvc1xcXHJcblx0XHRcdFx0XHRcdFx0bXV5IHZhcmlhZG9zIHkgY29tcGxlam9zLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgXCJUaGUgdGVhbSBwcm9wb3NlcyBwcmFjdGljYWwgYW5kIGlubm92YXRpdmUgc29sdXRpb25zIGluIHRoZWlyIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgIGRpZmZlcmVudCBwcmFjdGljZSBhcmVhcy4gVGhleSBhcmUgdmVyeSBwcm9mZXNzaW9uYWwsIHByb2FjdGl2ZSBhbmQgXFxcclxuICAgICAgICAgICAgICAgICAgICAgY29tbWl0dGVkLlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5Ub3A6IFwiMXJlbVwiLCBmb250U3R5bGU6XCJub3JtYWxcIn19PiBQcmVzaWRlbnRlIDxzcGFuPntkdXJhY2VsbH08L3NwYW4+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3NzLmNvbnRlbnRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3MucmVmZXJlbmNpYX0+XHJcbiAgICAgICAgICAgICAgICAgIHtsYW5nPT1cIkVTUFwiPyBcIlNlIGNhcmFjdGVyaXphbiBwb3IgYW50aWNpcGFyc2UgYSBsb3MgaGVjaG9zIHkgbW9zdHJhciB1biBhbHRvXFxcclxuXHRcdFx0XHRcdFx0XHRjb21wcm9taXNvIGVuIGxhcyBuZWNlc2lkYWRlcyBkZSBudWVzdHJvIGTDrWEgYSBkw61hLiBTdVxcXHJcblx0XHRcdFx0XHRcdFx0Y29ub2NpbWllbnRvIGRlbCBuZWdvY2lvIHRhbWJpw6luIGZhY2lsaXRhIG51ZXN0cm8gdHJhYmFqbyBlbiB1blxcXHJcblx0XHRcdFx0XHRcdFx0bWVyY2FkbyB0YW4gY2FtYmlhbnRlIHkgZGVzYWZpYW50ZSBjb21vIGVsIGFyZ2VudGluby5cIlxyXG4gICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgIFwiVGhleSBhcmUgY2hhcmFjdGVyaXplZCBieSBhbnRpY2lwYXRpbmcgdGhlIGZhY3RzIGFuZCBzaG93aW5nIGEgaGlnaCBcXFxyXG4gICAgICAgICAgICAgICAgICAgICBjb21taXRtZW50IHRvIHRoZSBuZWVkcyBvZiBvdXIgZGF5IHRvIGRheS4gVGhlaXIga25vdyBob3dcXFxyXG4gICAgICAgICAgICAgICAgICAgZmFjaWxpdGF0ZXMgb3VyIHdvcmsgaW4gdGhlIGFyZ2VudGVuZWFuIG1hcmtldCB3aXRoIHRoZSBpbXBsaWNhdGlvbnMgb2YgaXRzIGludHJpbnNpYyBjb21wbGV4aXR5LlwiIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5Ub3A6XCIxcmVtXCIsIGZvbnRTdHlsZTpcIm5vcm1hbFwifX0+RGlyZWN0b3IgR2VuZXJhbCAtIENNQyBkaSBSYXZubmE8L3A+XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NzLmNvbnRlbnRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3MucmVmZXJlbmNpYX0+XHJcbiAgICAgICAgICAgICAgICAgIHtsYW5nPT1cIkVTUFwiPyBcIkVsIGVxdWlwbyBkZSBIU1Igbm9zIHByb3BvbmUgc29sdWNpb25lcyBwcsOhY3RpY2FzIGUgaW5ub3ZhZG9yYXMgZW4gc3VzIGRpc3RpbnRhcyDDoXJlYXMgZGUgcHLDoWN0aWNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICBcIkhTUiBUZWFtIHByb3Bvc2VzIHVzIHByYWN0aWNhbCBhbmQgaW5ub3ZhdGl2ZSBzb2x1dGlvbnMgaW4gZGlmZmVyZW50IGFyZWFzIG9mIHByYWN0aWNlc1wiIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5Ub3A6XCIxcmVtXCIsIGZvbnRTdHlsZTpcIm5vcm1hbFwifX0+RGlyZWN0b3IgR2VuZXJhbCAtIENNQyBkaSBSYXZubmE8L3A+XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3MuY29udGVudFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzcy5yZWZlcmVuY2lhfT5cclxuICAgICAgICAgICAgICAgICAge2xhbmc9PVwiRVNQXCI/IFwiU29uIG11eSBwcm9mZXNpb25hbGVzLCBwcm9hY3Rpdm9zIHkgY29tcHJvbWV0aWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIDpcIlRoZXkgYXJlIHByb2Zlc3Npb25hbCwgcHJvYWN0aXZlIGFuZCBjb21taXR0ZWRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5Ub3A6XCIxcmVtXCIsIGZvbnRTdHlsZTpcIm5vcm1hbFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvTE9HTy1IU1IucG5nXCIgd2lkdGg9XCIxNTBweFwiIGhlaWdodD1cIjQ1cHhcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NzLmNvbnRlbnRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3MucmVmZXJlbmNpYX0+XHJcbiAgICAgICAgICAgICAgICAgIHtsYW5nPT1cIkVTUFwiPyBcIkxhIGNvbmZpYW56YSBnZW5lcmFkYSBub3MgcGVybWl0ZSBkZWxlZ2FybGUgYXN1bnRvcyBtdXkgdmFyaWFkb3MgeSBjb21wbGVqb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICA6XCJUaGUgZ2VuZXJhdGVkIHRydXN0IGFsbG93IHVzIHRvIGRlbGVnYXRlIHRoZW0gbWFueSBkaWZmZXJlbnQgYW5kIGNvbXBsZXggaXNzdWVzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDpcImJvbGRcIiwgbWFyZ2luVG9wOlwiMXJlbVwiLCBmb250U3R5bGU6XCJub3JtYWxcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL0xPR08tSFNSLnBuZ1wiIHdpZHRoPVwiMTUwcHhcIiBoZWlnaHQ9XCI0NXB4XCI+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzcy5jb250ZW50U3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3NzLnJlZmVyZW5jaWF9PlxyXG4gICAgICAgICAgICAgICAgICB7bGFuZz09XCJFU1BcIj8gXCJMYSBjb25maWFuemEgZ2VuZXJhZGEgbm9zIHBlcm1pdGUgZGVsZWdhcmxlIGFzdW50b3MgbXV5IHZhcmlhZG9zIHkgY29tcGxlam9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgOlwiVGhlIGdlbmVyYXRlZCB0cnVzdCBhbGxvdyB1cyB0byBkZWxlZ2F0ZSB0aGVtIG1hbnkgZGlmZmVyZW50IGFuZCBjb21wbGV4IGlzc3Vlc1wifVxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCIsIG1hcmdpblRvcDpcIjFyZW1cIiwgZm9udFN0eWxlOlwibm9ybWFsXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9MT0dPLUhTUi5wbmdcIiB3aWR0aD1cIjE1MHB4XCIgaGVpZ2h0PVwiNDVweFwiPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8L0Nhcm91c2VsPlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHQ8Lz4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fycm91c2VsO1xyXG5cclxuY29uc3QgZXNwID0gW1xyXG4gICBcIlRlc3RpbW9uaW9zXCJcclxuXVxyXG5cclxuY29uc3QgZW5nID0gW1xyXG4gICBcIkNsaWVudCBDb21tZW50c1wiXHJcbl1cclxuXHJcbmNvbnN0IGR1cmFjZWxsPTxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTA5LjIyMVwiIGhlaWdodD1cIjE2LjA2M1wiIHZpZXdCb3g9XCIwIDAgMTA5LjIyMSAxNi4wNjNcIj5cclxuICA8ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAxIDAuMDAxKVwiPlxyXG4gICAgPGcgaWQ9XCJ0aWNrXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0wLjAwMSAtMC4wMDEpXCI+XHJcbiAgICAgIDxwYXRoIGlkPVwiUGF0aF8xMTFcIiBkYXRhLW5hbWU9XCJQYXRoIDExMVwiIGQ9XCJNOTAuODgzLjEzNEg4OC43NDFBMS41NTMsMS41NTMsMCwwLDAsODcuMTM1LDEuNzRWMTUuNzk0SDk2LjVsLjgtMi44MTFIOTAuODgzWm0xMS43NzksMEgxMDAuNTJBMS41NTMsMS41NTMsMCwwLDAsOTguOTE0LDEuNzRWMTUuNzk0aDkuNWwuOC0yLjgxMUgxMDIuOFYuMTM0Wk0yNi4yMzQsMS43NHY4LjNhMi45MTgsMi45MTgsMCwwLDEtMy4wNzgsMy4yMTIsMi45NzEsMi45NzEsMCwwLDEtMy4wNzgtMy4yMTJWLjEzNEgxNi4zM1Y5LjVjMCw0LjQxNywyLjU0Myw2LjU1OSw2LjgyNiw2LjU1OVMyOS45ODIsMTMuOTIsMjkuOTgyLDkuNVYuMTM0SDI3Ljg0MUExLjYzMywxLjYzMywwLDAsMCwyNi4yMzQsMS43NFpNNzguMyw5LjFoNS4zNTRWNi4yOTFINzguM1YyLjk0NUg4NC44NlYuMTM0SDc0LjU1M1YxNC4xODhhMS41MTIsMS41MTIsMCwwLDAsMS40NzIsMS42MDZoOC40MzJsLjgtMi44MTFINzguM1pNNjAuMjMyLDguMDMxYTcuMjQxLDcuMjQxLDAsMCwwLDcuNSw3Ljc2M2g0LjE0OVYxMi45ODNINjkuNmMtMi44MTEsMC01LjQ4OC0uOTM3LTUuNDg4LTQuOTUyUzY2Ljc5LDMuMDc5LDY5LjYsMy4wNzloMi4yNzVWLjEzNEg2Ny43MjdDNjMuNDQ0LjEzNCw2MC4yMzIsMy4wNzksNjAuMjMyLDguMDMxWk02Ljk2LjEzNEgxLjYwNkExLjU1MywxLjU1MywwLDAsMCwwLDEuNzRWMTUuNzk0SDYuOTZhNy4yNDEsNy4yNDEsMCwwLDAsNy41LTcuNzYzQzE0LjQ1NiwzLjA3OSwxMS4yNDMuMTM0LDYuOTYuMTM0Wk01LjIyLDEyLjk4M0gzLjg4MnYtOS45SDUuMjJjMi44MTEsMCw1LjQ4OC45MzcsNS40ODgsNC45NTJTOC4wMzEsMTIuOTgzLDUuMjIsMTIuOTgzWm0xMDIuMjYtOS41YTEuNjg2LDEuNjg2LDAsMCwwLDEuNzQtMS43NEExLjc2NywxLjc2NywwLDAsMCwxMDcuNDgsMGExLjY4NiwxLjY4NiwwLDAsMC0xLjc0LDEuNzQsMS42ODYsMS42ODYsMCwwLDAsMS43NCwxLjc0Wm0wLTMuMDc4YTEuMzM4LDEuMzM4LDAsMCwxLDEuMzM4LDEuNDcyLDEuNDcyLDEuNDcyLDAsMCwxLTEuMzM4LDEuNDcyLDEuMzM4LDEuMzM4LDAsMCwxLTEuMzM4LTEuNDcyQTEuMzM4LDEuMzM4LDAsMCwxLDEwNy40OC40WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMSAwLjAwMSlcIiBmaWxsPVwiI2ZmZlwiLz5cclxuICAgICAgPHBhdGggaWQ9XCJQYXRoXzExMlwiIGRhdGEtbmFtZT1cIlBhdGggMTEyXCIgZD1cIk05OC44ODcsMS45NzloLjRsLjUzNS44aC4yNjhsLS41MzUtLjhhLjUuNSwwLDAsMCwuNTM1LS41MzVjMC0uNC0uMjY4LS41MzUtLjY2OS0uNTM1aC0uOFYyLjkxNmguMjY4Wm0wLS45MzdoLjRjLjI2OCwwLC40LDAsLjQuMjY4cy0uMjY4LjI2OC0uNTM1LjI2OGgtLjRWMS4wNDJaTTQzLjQ3NC4xMDVhMS44NzQsMS44NzQsMCwwLDAtMi4xNDIsMS42MDZMMzYuNjQ4LDE1LjM2NCwzMy43LDEwLjgxM2E0Ljc5Miw0Ljc5MiwwLDAsMCwzLjYxNC00Ljk1MkE1LjgyMiw1LjgyMiwwLDAsMCwzMS40MjguMTA1SDI1LjgwNkExLjU1MywxLjU1MywwLDAsMCwyNC4yLDEuNzEyVjE1Ljc2NmgzLjc0OFYyLjkxNmgyLjI3NWMzLjA3OCwwLDMuNjE0LDIuMDA4LDMuNjE0LDIuOTQ1LDAsMi45NDUtMi42NzcsMy4wNzgtNC41NTEsMy4yMTJsMy44ODIsNi42OTJINDAuNTNsLjgtMi42NzdoNS44ODlsLjgsMi42NzdoNC4xNDlMNDYuOTU0LjEwNVpNNDEuODY4LDEwLjY3OWwyLjQwOS04LjAzMSwyLjQwOSw4LjAzMVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOC4xOTIgMC4wMjkpXCIgZmlsbD1cIiNmZmZcIi8+XHJcbiAgICA8L2c+XHJcbiAgPC9nPlxyXG48L3N2Zz5cclxuXHJcbiIsImltcG9ydCBzIGZyb20gXCIuL0J1dHRvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiO1xyXG5pbXBvcnQgXCJhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuICBcclxuXHRcdDxhID5cclxuICAgICAgICAgIFxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcbiAgICBcclxuXHRcdDwvYT5cclxuXHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHMgZnJvbSBcIi4vQ2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiO1xyXG5pbXBvcnQgXCJhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoeyB0aXRsZSwgY29udGVudCwgbWFzRGV0YWxsZSwgc2x1Zywgbm90aWNpYXMgfSkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGdvVG9Ob3RpY2lhID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgZnVsbFBhdGggPSBgL25vdmVkYWRlcy8ke3NsdWd9YDtcclxuXHRcdHJvdXRlci5wdXNoKGZ1bGxQYXRoKTtcclxuXHR9O1xyXG5cclxuICAgdmFyIG1heExlbmd0aCA9IDE0MFxyXG4gICB2YXIgdHJpbW1lZFN0cmluZyA9IGNvbnRlbnQuc3Vic3RyKDAsIG1heExlbmd0aCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxyXG5cdFx0XHQ8U2Nyb2xsQW5pbWF0aW9uXHJcblx0XHRcdFx0YW5pbWF0ZUluPVwiYW5pbWF0ZV9fZmFkZUluXCJcclxuXHRcdFx0XHRhbmltYXRlT25jZT17dHJ1ZX1cclxuXHRcdFx0XHRkdXJhdGlvbj17MX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLm5ld3NfYm9va21hcmt9PjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLm5ld3NfdGl0bGV9Pnt0aXRsZX08L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5uZXdzX2NvbnRlbnR9Pnt0cmltbWVkU3RyaW5nLnN1YnN0cigwLCBNYXRoLm1pbih0cmltbWVkU3RyaW5nLmxlbmd0aCwgdHJpbW1lZFN0cmluZy5sYXN0SW5kZXhPZihcIiBcIikpKX0uLi48L2Rpdj5cclxuXHRcdFx0XHR7bWFzRGV0YWxsZSA/IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLm5ld3NfZGV0YWlsfSBvbkNsaWNrPXtnb1RvTm90aWNpYX0+XHJcblx0XHRcdFx0XHRcdE1BUyBERVRBTExFXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XCJcIlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBzIGZyb20gXCIuL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiO1xyXG5pbXBvcnQgXCJhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3NcIjtcclxuXHJcbmNvbnN0IFNlY3Rpb25UaXRsZSA9ICh7IGNoaWxkcmVuLCBjb2xvciB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XHJcbiAgICAgIFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5zdmdfY29udGFpbmVyfT5cclxuICAgICAgICAgPFNjcm9sbEFuaW1hdGlvblxyXG5cdFx0XHRcdFx0YW5pbWF0ZUluPVwiYW5pbWF0ZV9fZmFkZUluTGVmdFwiXHJcblx0XHRcdFx0XHRhbmltYXRlT25jZT17dHJ1ZX1cclxuXHRcdFx0XHRcdGR1cmF0aW9uPXsxfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmFycm93fT57YXJyb3cyfTwvZGl2PlxyXG5cdFx0XHRcdDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cdFx0XHRcdDxTY3JvbGxBbmltYXRpb25cclxuXHRcdFx0XHRcdGFuaW1hdGVJbj1cImFuaW1hdGVfX2ZhZGVJblJpZ2h0XCJcclxuXHRcdFx0XHRcdGFuaW1hdGVPbmNlPXt0cnVlfVxyXG5cdFx0XHRcdFx0ZHVyYXRpb249ezEuNX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5hcnJvd30+e2Fycm93fTwvZGl2PlxyXG5cdFx0XHRcdDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTY3JvbGxBbmltYXRpb25cclxuXHRcdFx0XHRhbmltYXRlSW49XCJhbmltYXRlX19mYWRlSW5cIlxyXG5cdFx0XHRcdGFuaW1hdGVPbmNlPXt0cnVlfVxyXG5cdFx0XHRcdGR1cmF0aW9uPXszfVxyXG5cdFx0XHQ+XHJcbiAgICAgICAgIHtjb2xvcj09XCJibGFja1wiP1xyXG4gICAgICAgICA8aDIgY2xhc3NOYW1lPXtzLnRpdGxlX3NlY3Rpb259PntjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgOlxyXG4gICAgICAgICA8aDIgY2xhc3NOYW1lPXtzLnRpdGxlX3NlY3Rpb24yfT57Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgIH1cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9TY3JvbGxBbmltYXRpb24+XHJcblxyXG4gICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uXHJcblx0XHRcdFx0XHRhbmltYXRlSW49XCJhbmltYXRlX190YWRhXCJcclxuXHRcdFx0XHRcdGFuaW1hdGVPbmNlPXtmYWxzZX1cclxuXHRcdFx0XHRcdGR1cmF0aW9uPXszfVxyXG5cdFx0XHRcdFx0b2Zmc2V0PXsyMDB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3Muc3F1YXJlfT57c3F1YXJlfTwvZGl2PlxyXG5cdFx0XHRcdDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cdFxyXG5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVGl0bGU7XHJcblxyXG5jb25zdCBzcXVhcmUgPSAoXHJcblx0PHN2Z1xyXG5cdFx0d2lkdGg9XCIxM1wiXHJcblx0XHRoZWlnaHQ9XCIxM1wiXHJcblx0XHR2aWV3Qm94PVwiMCAwIDEzIDEzXCJcclxuXHRcdGZpbGw9XCJub25lXCJcclxuXHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG5cdD5cclxuXHRcdDxyZWN0XHJcblx0XHRcdHk9XCI3LjU4OTZcIlxyXG5cdFx0XHR3aWR0aD1cIjlcIlxyXG5cdFx0XHRoZWlnaHQ9XCI5XCJcclxuXHRcdFx0dHJhbnNmb3JtPVwicm90YXRlKC00Ny4wNjkyIDAgNi41ODk2KVwiXHJcblx0XHRcdGZpbGw9XCIjRjkzMTNFXCJcclxuICAgICAgICAgLy8gZmlsbD1cIiNBRUExQTJcIlxyXG5cdFx0Lz5cclxuXHQ8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IGFycm93ID0gKFxyXG5cdDxzdmdcclxuXHRcdHdpZHRoPVwiMTlcIlxyXG5cdFx0aGVpZ2h0PVwiMzdcIlxyXG5cdFx0dmlld0JveD1cIjAgMCAxOSAzN1wiXHJcblx0XHRmaWxsPVwibm9uZVwiXHJcblx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuXHQ+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTAuMTYyNjUyIDM2LjU3ODRMMC4xNjI2NTIgMjkuMDc5MUwxMC45ODA3IDE3LjM0NUwwLjE2MjY1MyA3LjU3OTEyTDAuMTYyODk5IDAuMDc5MDg4TDE3Ljk4MDYgMTcuMzQ1TDAuMTYyNjUyIDM2LjU3ODRaXCJcclxuICAgICAgICAgZmlsbD1cIiNBRjFiMjdcIlxyXG5cdFx0XHRmaWxsT3BhY2l0eT1cIjAuODBcIlxyXG5cdFx0XHQvLyBmaWxsT3BhY2l0eT1cIjFcIlxyXG5cdFx0Lz5cclxuXHQ8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IGFycm93MiA9IChcclxuXHQ8c3ZnXHJcblx0XHR3aWR0aD1cIjE4XCJcclxuXHRcdGhlaWdodD1cIjM3XCJcclxuXHRcdHZpZXdCb3g9XCIwIDAgMTggMzdcIlxyXG5cdFx0ZmlsbD1cIm5vbmVcIlxyXG5cdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcblx0PlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xNy45ODQ2IDAuMDM5Njg4MUwxNy45NTEyIDcuNTM4ODlMNy4wODA5NiAxOS4yMjQ3TDE3Ljg1NTMgMjkuMDM4N0wxNy44MjE3IDM2LjUzODZMMC4wODEwNTQ3IDE5LjE5MzRMMTcuOTg0NiAwLjAzOTY4ODFaXCJcclxuXHRcdFx0ZmlsbD1cIiNBRjFiMjdcIlxyXG5cdFx0XHRmaWxsT3BhY2l0eT1cIjAuMzhcIlxyXG5cdFx0XHQvLyBmaWxsT3BhY2l0eT1cIjFcIlxyXG5cdFx0Lz5cclxuXHQ8L3N2Zz5cclxuKTtcclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXHJcbmltcG9ydCBMYW5ndWFnZVN3aXRjaCBmcm9tICcuLi9jb21wb25lbnRzL0xhbmd1YWdlU3dpdGNoL0xhbmd1YWdlU3dpdGNoJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dC9BYm91dCdcclxuaW1wb3J0IFJlZmVyYWxzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVmZXJhbHMvUmVmZXJhbHMnXHJcbmltcG9ydCBOZXdzIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3cy9OZXdzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcclxuaW1wb3J0IENvbnRhY3RQZWVrIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdFBlZWsvQ29udGFjdFBlZWsnO1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdjb250ZW50ZnVsJ1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHJcblx0Y29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuXHRcdHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5GVUxfU1BBQ0VfSUQsXHJcblx0XHRhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVORlVMX0FDQ0VTU19LRVksXHJcblx0fSlcclxuXHRjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ25vdGljaWEnIH0pXHJcbiBcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG5vdGljaWFzOiByZXMuaXRlbXMsXHJcbiAgICAgICAgIHJldmFsaWRhdGU6MTBcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtub3RpY2lhc30pIHtcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdDxMYW5ndWFnZVN3aXRjaCAvPlxyXG5cdFx0XHQ8QWJvdXQgLz5cclxuXHRcdFx0PFJlZmVyYWxzLz5cclxuXHRcdFx0PE5ld3Mgbm90aWNpYXM9e25vdGljaWFzfSAvPlxyXG5cdFx0XHR7LyogPENsaWVudHMgLz4gKi99XHJcbiAgICAgICAgIHsvKiA8TG9nb3MvPiAqL31cclxuXHRcdFx0ey8qIDxDb250YWN0IC8+ICovfVxyXG5cdFx0XHQ8Q29udGFjdFBlZWsgLz5cclxuXHRcdFx0PEZvb3RlciAvPlxyXG5cclxuXHRcdFxyXG5cclxuXHJcblxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYXN0ZXJfY29udGFpbmVyXCI6IFwiQWJvdXRfbWFzdGVyX2NvbnRhaW5lcl9fMnc2WVRcIixcblx0XCJidXR0b25fcHJpbWFyeVwiOiBcIkFib3V0X2J1dHRvbl9wcmltYXJ5X18xaE5iZlwiLFxuXHRcImJ1dHRvbl9jb250YWluZXJcIjogXCJBYm91dF9idXR0b25fY29udGFpbmVyX18yMnE1M1wiLFxuXHRcImdlbmVyYWxfY29udGFpbmVyXCI6IFwiQWJvdXRfZ2VuZXJhbF9jb250YWluZXJfXzNuZ0hRXCIsXG5cdFwidGl0bGVfY29udGFpbmVyXCI6IFwiQWJvdXRfdGl0bGVfY29udGFpbmVyX18zdTNhaVwiLFxuXHRcImJyaWVmXCI6IFwiQWJvdXRfYnJpZWZfXzFrZmR5XCIsXG5cdFwib3ZlcmxheVwiOiBcIkFib3V0X292ZXJsYXlfX0NCWUdGXCIsXG5cdFwiYmFja2dyb3VuZFwiOiBcIkFib3V0X2JhY2tncm91bmRfXzNqaEh6XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYXN0ZXJfY29udGFpbmVyXCI6IFwiQ29udGFjdFBlZWtfbWFzdGVyX2NvbnRhaW5lcl9fMUc1ZldcIixcblx0XCJidXR0b25fcHJpbWFyeVwiOiBcIkNvbnRhY3RQZWVrX2J1dHRvbl9wcmltYXJ5X19ITzhDTlwiLFxuXHRcImJ1dHRvbl9jb250YWluZXJcIjogXCJDb250YWN0UGVla19idXR0b25fY29udGFpbmVyX19xVy1DQVwiLFxuXHRcImdlbmVyYWxfY29udGFpbmVyXCI6IFwiQ29udGFjdFBlZWtfZ2VuZXJhbF9jb250YWluZXJfX1Y2N0JvXCIsXG5cdFwib3ZlcmxheVwiOiBcIkNvbnRhY3RQZWVrX292ZXJsYXlfXzFUcWdyXCIsXG5cdFwidGl0bGVfY29udGFpbmVyXCI6IFwiQ29udGFjdFBlZWtfdGl0bGVfY29udGFpbmVyX19YaWJ0MFwiLFxuXHRcImJyaWVmXCI6IFwiQ29udGFjdFBlZWtfYnJpZWZfXzNKS2hvXCIsXG5cdFwibmV3c2xldHRlcl9jb250YWluZXJcIjogXCJDb250YWN0UGVla19uZXdzbGV0dGVyX2NvbnRhaW5lcl9fMkZQUE1cIixcblx0XCJuZXdzbGV0dGVyXCI6IFwiQ29udGFjdFBlZWtfbmV3c2xldHRlcl9fM2RkYkVcIixcblx0XCJzdWJzY3JpYmVcIjogXCJDb250YWN0UGVla19zdWJzY3JpYmVfXzFKbk85XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYXN0ZXJfY29udGFpbmVyXCI6IFwiRm9vdGVyX21hc3Rlcl9jb250YWluZXJfXzJPRlpWXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRm9vdGVyX2NvbnRhaW5lcl9fbDJENGdcIixcblx0XCJidXR0b25fcHJpbWFyeVwiOiBcIkZvb3Rlcl9idXR0b25fcHJpbWFyeV9fMmk5RHZcIixcblx0XCJsaW5rXCI6IFwiRm9vdGVyX2xpbmtfXzdjY3N3XCIsXG5cdFwiZm9vdGVyX3NvY2lhbFwiOiBcIkZvb3Rlcl9mb290ZXJfc29jaWFsX18xN29rSVwiLFxuXHRcImZvb3Rlcl9zb2NpYWxfY29udGFpbmVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9zb2NpYWxfY29udGFpbmVyX182T0xVX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFzdGVyX2NvbnRhaW5lclwiOiBcIkhlYWRlcl9tYXN0ZXJfY29udGFpbmVyX18xVEJmN1wiLFxuXHRcImJ1dHRvbl9wcmltYXJ5XCI6IFwiSGVhZGVyX2J1dHRvbl9wcmltYXJ5X19JYWdWU1wiLFxuXHRcInZpZGVvX2NvbnRhaW5lclwiOiBcIkhlYWRlcl92aWRlb19jb250YWluZXJfXzNJNk1aXCIsXG5cdFwibG9nb1wiOiBcIkhlYWRlcl9sb2dvX18xUVVuSVwiLFxuXHRcInZpZGVvX292ZXJsYXlcIjogXCJIZWFkZXJfdmlkZW9fb3ZlcmxheV9fMWkyandcIixcblx0XCJ2aWRlb1wiOiBcIkhlYWRlcl92aWRlb19fMjdGak9cIixcblx0XCJiYWNrZ3JvdW5kXCI6IFwiSGVhZGVyX2JhY2tncm91bmRfXzNpeURtXCIsXG5cdFwiYm91bmNlXCI6IFwiSGVhZGVyX2JvdW5jZV9fSUZqcERcIixcblx0XCJtb3VzZV9zY3JvbGxcIjogXCJIZWFkZXJfbW91c2Vfc2Nyb2xsX19hVUhzUVwiLFxuXHRcIm1fc2Nyb2xsX2Fycm93c1wiOiBcIkhlYWRlcl9tX3Njcm9sbF9hcnJvd3NfXzNXV2xSXCIsXG5cdFwidW51XCI6IFwiSGVhZGVyX3VudV9fc1dxX0ZcIixcblx0XCJkb2lcIjogXCJIZWFkZXJfZG9pX18zVG1maVwiLFxuXHRcInRyZWlcIjogXCJIZWFkZXJfdHJlaV9feF92akFcIixcblx0XCJtb3VzZS1zY3JvbGxcIjogXCJIZWFkZXJfbW91c2Utc2Nyb2xsX18zanluYVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFzdGVyX2NvbnRhaW5lclwiOiBcIkxhbmd1YWdlU3dpdGNoX21hc3Rlcl9jb250YWluZXJfXzFTLUw0XCIsXG5cdFwiYnV0dG9uX3ByaW1hcnlcIjogXCJMYW5ndWFnZVN3aXRjaF9idXR0b25fcHJpbWFyeV9fMWhCQ29cIixcblx0XCJjb250YWluZXJcIjogXCJMYW5ndWFnZVN3aXRjaF9jb250YWluZXJfX19FeEZJXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYXN0ZXJfY29udGFpbmVyXCI6IFwiTmV3c19tYXN0ZXJfY29udGFpbmVyX19haW1WZVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIk5ld3NfY29udGFpbmVyX18xRE5kMVwiLFxuXHRcImJ1dHRvbl9wcmltYXJ5XCI6IFwiTmV3c19idXR0b25fcHJpbWFyeV9fMW15YU9cIixcblx0XCJnZW5lcmFsX2NvbnRhaW5lclwiOiBcIk5ld3NfZ2VuZXJhbF9jb250YWluZXJfXzFPcnp3XCIsXG5cdFwidGl0bGVfY29udGFpbmVyXCI6IFwiTmV3c190aXRsZV9jb250YWluZXJfX0V4OVltXCIsXG5cdFwib3ZlcmxheVwiOiBcIk5ld3Nfb3ZlcmxheV9fMlpSdTZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1hc3Rlcl9jb250YWluZXJcIjogXCJDYXJyb3VzZWxfbWFzdGVyX2NvbnRhaW5lcl9fMTNDZ0VcIixcblx0XCJidXR0b25fcHJpbWFyeVwiOiBcIkNhcnJvdXNlbF9idXR0b25fcHJpbWFyeV9fM2RBQ2RcIixcblx0XCJDYXJyb3VzZWxcIjogXCJDYXJyb3VzZWxfQ2Fycm91c2VsX18zVzQyVFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkNhcnJvdXNlbF9jb250YWluZXJfXzF3UlhTXCIsXG5cdFwib3ZlcmxheVwiOiBcIkNhcnJvdXNlbF9vdmVybGF5X18yRHZOQ1wiLFxuXHRcImNvbnRlbnRcIjogXCJDYXJyb3VzZWxfY29udGVudF9fMURPbkpcIixcblx0XCJ0aXRsZV9jb250YWluZXJcIjogXCJDYXJyb3VzZWxfdGl0bGVfY29udGFpbmVyX18zTkNsSlwiLFxuXHRcImNhcm91c2VsX2NvbnRhaW5lclwiOiBcIkNhcnJvdXNlbF9jYXJvdXNlbF9jb250YWluZXJfXzFlWWd0XCIsXG5cdFwicmVmZXJlbmNpYVwiOiBcIkNhcnJvdXNlbF9yZWZlcmVuY2lhX19QdWUyaFwiLFxuXHRcImNvbnRlbnRTdHlsZVwiOiBcIkNhcnJvdXNlbF9jb250ZW50U3R5bGVfXzNqY1ZuXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYXN0ZXJfY29udGFpbmVyXCI6IFwiQ2FyZF9tYXN0ZXJfY29udGFpbmVyX181Nkg2WVwiLFxuXHRcImJ1dHRvbl9wcmltYXJ5XCI6IFwiQ2FyZF9idXR0b25fcHJpbWFyeV9faUJnWXRcIixcblx0XCJjb250YWluZXJcIjogXCJDYXJkX2NvbnRhaW5lcl9fMnNfckVcIixcblx0XCJuZXdzX2Jvb2ttYXJrXCI6IFwiQ2FyZF9uZXdzX2Jvb2ttYXJrX18yMDIzeVwiLFxuXHRcIm5ld3NfdGl0bGVcIjogXCJDYXJkX25ld3NfdGl0bGVfX3BhSkpPXCIsXG5cdFwibmV3c19jb250ZW50XCI6IFwiQ2FyZF9uZXdzX2NvbnRlbnRfXzF2SUhPXCIsXG5cdFwibmV3c19kZXRhaWxcIjogXCJDYXJkX25ld3NfZGV0YWlsX19WN0lRRFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFzdGVyX2NvbnRhaW5lclwiOiBcIlNlY3Rpb25UaXRsZV9tYXN0ZXJfY29udGFpbmVyX19yanRtUFwiLFxuXHRcImJ1dHRvbl9wcmltYXJ5XCI6IFwiU2VjdGlvblRpdGxlX2J1dHRvbl9wcmltYXJ5X18zY0tWZ1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIlNlY3Rpb25UaXRsZV9jb250YWluZXJfXzNKWk9nXCIsXG5cdFwidGl0bGVfc2VjdGlvblwiOiBcIlNlY3Rpb25UaXRsZV90aXRsZV9zZWN0aW9uX18xb1k3WFwiLFxuXHRcInRpdGxlX3NlY3Rpb24yXCI6IFwiU2VjdGlvblRpdGxlX3RpdGxlX3NlY3Rpb24yX18zYVRyZFwiLFxuXHRcInN2Z19jb250YWluZXJcIjogXCJTZWN0aW9uVGl0bGVfc3ZnX2NvbnRhaW5lcl9fMVBsbi1cIixcblx0XCJhcnJvd1wiOiBcIlNlY3Rpb25UaXRsZV9hcnJvd19fMTZDMmhcIixcblx0XCJzcXVhcmVcIjogXCJTZWN0aW9uVGl0bGVfc3F1YXJlX18za0lNZFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGV2aWNlLWRldGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC15b3V0dWJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQXBwQ29udGV4dCIsInVzZUFwcENvbnRleHQiLCJBcHBQcm92aWRlciIsImNoaWxkcmVuIiwibGFuZyIsInNldExhbmciLCJkaXNwbGF5SW5nbGVzIiwidmFsdWUiLCJkaXNwbGF5RXNwYcOxb2wiLCJzIiwiU2VjdGlvblRpdGxlIiwiTGluayIsIkJyb3dzZXJWaWV3IiwiTW9iaWxlVmlldyIsImlzQnJvd3NlciIsImlzTW9iaWxlIiwiQWJvdXQiLCJnZW5lcmFsX2NvbnRhaW5lciIsInRpdGxlX2NvbnRhaW5lciIsImVzcCIsImVuZyIsIm1hc3Rlcl9jb250YWluZXIiLCJicmllZiIsImJ1dHRvbl9jb250YWluZXIiLCJidXR0b25fcHJpbWFyeSIsIm92ZXJsYXkiLCJiYWNrZ29ydW5kIiwiZm9uZG9HcmlzIiwiQnV0dG9uIiwiSW1hZ2UiLCJpbWFnZSIsImNvbG9yIiwibWFyZ2luIiwic3Vic2NyaWJlIiwibmV3c2xldHRlcl9jb250YWluZXIiLCJuZXdzbGV0dGVyIiwic3MiLCJGb290ZXIiLCJjb250YWluZXIiLCJsaW5rIiwiZm9vdGVyX3NvY2lhbF9jb250YWluZXIiLCJJR0xvZ28iLCJJTkxvZ28iLCJmb290ZXJfc29jaWFsIiwidXNlUmVmIiwiWW91VHViZSIsIkhlYWRlciIsInZpZGVvUGFyZW50UmVmIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwidmlkZW9fY29udGFpbmVyIiwibG9nbyIsImxvZ280IiwibG9nb0Rlc2t0b3AiLCJ2aWRlb19vdmVybGF5IiwiX19odG1sIiwiYm91bmNlIiwiYXJyb3dEb3duIiwibG9nbzIiLCJtb3VzZV9zY3JvbGwiLCJtX3Njcm9sbF9hcnJvd3MiLCJ1bnUiLCJkb2kiLCJMYW5ndWFnZVN3aXRjaCIsInRyZWkiLCJDYXJkIiwiTmV3cyIsIm5vdGljaWFzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzbGljZSIsIm1hcCIsIm5vdGljaWEiLCJmaWVsZHMiLCJzbHVnIiwidGl0dWxvIiwidGl0dWxvSW5nbGVzIiwiYnJpZWZJbmdsZXMiLCJzeXMiLCJpZCIsIm5ld3NBcnJheSIsInRpdGxlIiwiY29udGVudCIsIkNhcm91c2VsIiwiQ2Fycm91c2VsIiwiY2Fyb3VzZWxfY29udGFpbmVyIiwiY29udGVudFN0eWxlIiwicmVmZXJlbmNpYSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Ub3AiLCJmb250U3R5bGUiLCJkdXJhY2VsbCIsIlNjcm9sbEFuaW1hdGlvbiIsInVzZVJvdXRlciIsIm1hc0RldGFsbGUiLCJyb3V0ZXIiLCJnb1RvTm90aWNpYSIsImZ1bGxQYXRoIiwicHVzaCIsIm1heExlbmd0aCIsInRyaW1tZWRTdHJpbmciLCJzdWJzdHIiLCJuZXdzX2Jvb2ttYXJrIiwibmV3c190aXRsZSIsIm5ld3NfY29udGVudCIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJsYXN0SW5kZXhPZiIsIm5ld3NfZGV0YWlsIiwic3ZnX2NvbnRhaW5lciIsImFycm93IiwiYXJyb3cyIiwidGl0bGVfc2VjdGlvbiIsInRpdGxlX3NlY3Rpb24yIiwic3F1YXJlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZGVmYXVsdCIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwid2lkdGhzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwid2FybiIsInBvc2l0aW9uIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInVybCIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiY3VycmVudCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlJlZmVyYWxzIiwiQ29udGFjdFBlZWsiLCJjcmVhdGVDbGllbnQiLCJnZXRTdGF0aWNQcm9wcyIsImNsaWVudCIsInNwYWNlIiwiQ09OVEVORlVMX1NQQUNFX0lEIiwiYWNjZXNzVG9rZW4iLCJDT05URU5GVUxfQUNDRVNTX0tFWSIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJpdGVtcyIsInJldmFsaWRhdGUiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==