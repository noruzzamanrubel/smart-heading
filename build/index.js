/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {
  blockID: {
    type: "string",
    default: ""
  },
  text: {
    type: "string"
  },
  sub_heading_text: {
    type: "string"
  },
  tag: {
    type: "string",
    default: "h2"
  },
  sub_heading_tag: {
    type: "string",
    default: "p"
  },
  text_color: {
    type: "string"
  },
  background_color: {
    type: "string"
  },
  align: {
    type: "string",
    default: "left"
  },
  separator: {
    type: "string",
    default: "solid"
  },
  sub_heading_switcher: {
    type: "boolean",
    default: false
  },
  show_separator_switcher: {
    type: "boolean",
    default: false
  },
  seperatorPosition: {
    type: "string",
    default: "bottom"
  },
  subheadingPosition: {
    type: "string",
    default: "bottom"
  },
  fontFamily: {
    type: "string",
    default: "default"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_FAMILYS: () => (/* binding */ FONT_FAMILYS),
/* harmony export */   HEADING: () => (/* binding */ HEADING),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   SEPERATOR_STYLES: () => (/* binding */ SEPERATOR_STYLES),
/* harmony export */   SUBTITLE_MARGIN: () => (/* binding */ SUBTITLE_MARGIN),
/* harmony export */   TEXT_ALIGN: () => (/* binding */ TEXT_ALIGN),
/* harmony export */   TITLE_MARGIN: () => (/* binding */ TITLE_MARGIN),
/* harmony export */   UNIT_TYPES: () => (/* binding */ UNIT_TYPES),
/* harmony export */   WRAPPER_BG: () => (/* binding */ WRAPPER_BG),
/* harmony export */   WRAPPER_BORDER_SHADOW: () => (/* binding */ WRAPPER_BORDER_SHADOW),
/* harmony export */   WRAPPER_MARGIN: () => (/* binding */ WRAPPER_MARGIN),
/* harmony export */   WRAPPER_PADDING: () => (/* binding */ WRAPPER_PADDING),
/* harmony export */   separator_ICON_SIZE: () => (/* binding */ separator_ICON_SIZE),
/* harmony export */   separator_LINE_SIZE: () => (/* binding */ separator_LINE_SIZE),
/* harmony export */   separator_MARGIN: () => (/* binding */ separator_MARGIN),
/* harmony export */   separator_POSITION: () => (/* binding */ separator_POSITION),
/* harmony export */   separator_TYPE: () => (/* binding */ separator_TYPE),
/* harmony export */   separator_UNIT_TYPES: () => (/* binding */ separator_UNIT_TYPES),
/* harmony export */   separator_WIDTH: () => (/* binding */ separator_WIDTH),
/* harmony export */   subheading_POSITION: () => (/* binding */ subheading_POSITION)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




// the consts defined here should be unique from one another
const WRAPPER_BG = "wrprBg";
const WRAPPER_MARGIN = "wrpMargin";
const WRAPPER_PADDING = "wrpPadding";
const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
const TITLE_MARGIN = "titleMargin";
const SUBTITLE_MARGIN = "subtitleMargin";
const separator_MARGIN = "separatorMargin";
const separator_LINE_SIZE = "separatorLineSize";
const separator_ICON_SIZE = "separatorIconSize";
const separator_WIDTH = "separatorWidth";
const UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];
const separator_UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
const NORMAL_HOVER = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
const separator_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Line", "smart-heading"),
  value: "line"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", "smart-heading"),
  value: "icon"
}];
const separator_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "smart-heading"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "smart-heading"),
  value: "bottom"
}];
const subheading_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "smart-heading"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "smart-heading"),
  value: "bottom"
}];
const PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Default", "smart-heading"),
  value: "preset-0"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Preset 1", "smart-heading"),
  value: "preset-1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Preset 2", "smart-heading"),
  value: "preset-2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Preset 3", "smart-heading"),
  value: "preset-3"
}];
const TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "menu"
  })),
  value: "justify"
}];
const HEADING = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H1", "smart-heading"),
  value: "h1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H2", "smart-heading"),
  value: "h2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H3", "smart-heading"),
  value: "h3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H4", "smart-heading"),
  value: "h4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H5", "smart-heading"),
  value: "h5"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H6", "smart-heading"),
  value: "h6"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("P", "smart-heading"),
  value: "p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Div", "smart-heading"),
  value: "div"
}];
const SEPERATOR_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Solid", "smart-heading"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dashed", "smart-heading"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dotted", "smart-heading"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Double", "smart-heading"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Groove", "smart-heading"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Outset", "smart-heading"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ridge", "smart-heading"),
  value: "ridge"
}];
const FONT_FAMILYS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("ABeeZee", "smart-heading"),
  value: "ABeeZee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Abel", "smart-heading"),
  value: "Abel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Abhaya Libre", "smart-heading"),
  value: "Abhaya Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Abril Fatface", "smart-heading"),
  value: "Abril Fatface"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Abyssinica SIL", "smart-heading"),
  value: "Abyssinica SIL"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aclonica", "smart-heading"),
  value: "Aclonica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Acme", "smart-heading"),
  value: "Acme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Actor", "smart-heading"),
  value: "Actor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Adamina", "smart-heading"),
  value: "Adamina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Adobe Blank", "smart-heading"),
  value: "Adobe Blank"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Advent Pro", "smart-heading"),
  value: "Advent Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aguafina Script", "smart-heading"),
  value: "Aguafina Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Akronim", "smart-heading"),
  value: "Akronim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("aksarabaligalang", "smart-heading"),
  value: "aksarabaligalang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aladin", "smart-heading"),
  value: "Aladin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aldrich", "smart-heading"),
  value: "Aldrich"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alef", "smart-heading"),
  value: "Alef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("alefhebrew", "smart-heading"),
  value: "alefhebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alegreya", "smart-heading"),
  value: "Alegreya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alegreya Sans", "smart-heading"),
  value: "Alegreya Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alegreya Sans SC", "smart-heading"),
  value: "Alegreya Sans SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alegreya SC", "smart-heading"),
  value: "Alegreya SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aleo", "smart-heading"),
  value: "Aleo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alex Brush", "smart-heading"),
  value: "Alex Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alfa Slab One", "smart-heading"),
  value: "Alfa Slab One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alice", "smart-heading"),
  value: "Alice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alike", "smart-heading"),
  value: "Alike"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alike Angular", "smart-heading"),
  value: "Alike Angular"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Allan", "smart-heading"),
  value: "Allan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Allerta", "smart-heading"),
  value: "Allerta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Allerta Stencil", "smart-heading"),
  value: "Allerta Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Allura", "smart-heading"),
  value: "Allura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Almendra", "smart-heading"),
  value: "Almendra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Almendra Display", "smart-heading"),
  value: "Almendra Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Almendra SC", "smart-heading"),
  value: "Almendra SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Amarante", "smart-heading"),
  value: "Amarante"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Amaranth", "smart-heading"),
  value: "Amaranth"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Amatic SC", "smart-heading"),
  value: "Amatic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Amethysta", "smart-heading"),
  value: "Amethysta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Amiko", "smart-heading"),
  value: "Amiko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Amiri", "smart-heading"),
  value: "Amiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Amita", "smart-heading"),
  value: "Amita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("amstelvaralpha", "smart-heading"),
  value: "amstelvaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Anaheim", "smart-heading"),
  value: "Anaheim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Andada", "smart-heading"),
  value: "Andada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Andada SC", "smart-heading"),
  value: "Andada SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Andika", "smart-heading"),
  value: "Andika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Angkor", "smart-heading"),
  value: "Angkor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Annie Use Your Telescope", "smart-heading"),
  value: "Annie Use Your Telescope"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Anonymous Pro", "smart-heading"),
  value: "Anonymous Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Antic", "smart-heading"),
  value: "Antic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Antic Didone", "smart-heading"),
  value: "Antic Didone"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Antic Slab", "smart-heading"),
  value: "Antic Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Anton", "smart-heading"),
  value: "Anton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Antonio", "smart-heading"),
  value: "Antonio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arapey", "smart-heading"),
  value: "Arapey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arbutus", "smart-heading"),
  value: "Arbutus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arbutus Slab", "smart-heading"),
  value: "Arbutus Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Architects Daughter", "smart-heading"),
  value: "Architects Daughter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Archivo", "smart-heading"),
  value: "Archivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Archivo Black", "smart-heading"),
  value: "Archivo Black"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Archivo Narrow", "smart-heading"),
  value: "Archivo Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("archivovfbeta", "smart-heading"),
  value: "archivovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aref Ruqaa", "smart-heading"),
  value: "Aref Ruqaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arima Madurai", "smart-heading"),
  value: "Arima Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arimo", "smart-heading"),
  value: "Arimo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arizonia", "smart-heading"),
  value: "Arizonia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Armata", "smart-heading"),
  value: "Armata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arsenal", "smart-heading"),
  value: "Arsenal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Artifika", "smart-heading"),
  value: "Artifika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arvo", "smart-heading"),
  value: "Arvo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arya", "smart-heading"),
  value: "Arya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Asap", "smart-heading"),
  value: "Asap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Asap Condensed", "smart-heading"),
  value: "Asap Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("asapvfbeta", "smart-heading"),
  value: "asapvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Asar", "smart-heading"),
  value: "Asar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Asset", "smart-heading"),
  value: "Asset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Assistant", "smart-heading"),
  value: "Assistant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Astloch", "smart-heading"),
  value: "Astloch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Asul", "smart-heading"),
  value: "Asul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Athiti", "smart-heading"),
  value: "Athiti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Atomic Age", "smart-heading"),
  value: "Atomic Age"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aubrey", "smart-heading"),
  value: "Aubrey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Audiowide", "smart-heading"),
  value: "Audiowide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Autour One", "smart-heading"),
  value: "Autour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Average", "smart-heading"),
  value: "Average"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Average Sans", "smart-heading"),
  value: "Average Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Averia Gruesa Libre", "smart-heading"),
  value: "Averia Gruesa Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Averia Libre", "smart-heading"),
  value: "Averia Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Averia Sans Libre", "smart-heading"),
  value: "Averia Sans Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Averia Serif Libre", "smart-heading"),
  value: "Averia Serif Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("B612", "smart-heading"),
  value: "B612"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("B612 Mono", "smart-heading"),
  value: "B612 Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bad Script", "smart-heading"),
  value: "Bad Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bahiana", "smart-heading"),
  value: "Bahiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bahianita", "smart-heading"),
  value: "Bahianita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bai Jamjuree", "smart-heading"),
  value: "Bai Jamjuree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo", "smart-heading"),
  value: "Baloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo Bhai", "smart-heading"),
  value: "Baloo Bhai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo Bhaijaan", "smart-heading"),
  value: "Baloo Bhaijaan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo Bhaina", "smart-heading"),
  value: "Baloo Bhaina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo Chettan", "smart-heading"),
  value: "Baloo Chettan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo Da", "smart-heading"),
  value: "Baloo Da"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo Paaji", "smart-heading"),
  value: "Baloo Paaji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo Tamma", "smart-heading"),
  value: "Baloo Tamma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo Tammudu", "smart-heading"),
  value: "Baloo Tammudu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baloo Thambi", "smart-heading"),
  value: "Baloo Thambi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Balthazar", "smart-heading"),
  value: "Balthazar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bangers", "smart-heading"),
  value: "Bangers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Barlow", "smart-heading"),
  value: "Barlow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Barlow Condensed", "smart-heading"),
  value: "Barlow Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Barlow Semi Condensed", "smart-heading"),
  value: "Barlow Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Barriecito", "smart-heading"),
  value: "Barriecito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Barrio", "smart-heading"),
  value: "Barrio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Basic", "smart-heading"),
  value: "Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Battambang", "smart-heading"),
  value: "Battambang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Baumans", "smart-heading"),
  value: "Baumans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bayon", "smart-heading"),
  value: "Bayon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Belgrano", "smart-heading"),
  value: "Belgrano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bellefair", "smart-heading"),
  value: "Bellefair"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Belleza", "smart-heading"),
  value: "Belleza"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("BenchNine", "smart-heading"),
  value: "BenchNine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bentham", "smart-heading"),
  value: "Bentham"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Berkshire Swash", "smart-heading"),
  value: "Berkshire Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Beth Ellen", "smart-heading"),
  value: "Beth Ellen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bevan", "smart-heading"),
  value: "Bevan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bhavuka", "smart-heading"),
  value: "Bhavuka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bigelow Rules", "smart-heading"),
  value: "Bigelow Rules"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bigshot One", "smart-heading"),
  value: "Bigshot One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bilbo", "smart-heading"),
  value: "Bilbo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bilbo Swash Caps", "smart-heading"),
  value: "Bilbo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bio Rhyme", "smart-heading"),
  value: "Bio Rhyme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bio Rhyme Expanded", "smart-heading"),
  value: "Bio Rhyme Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Biryani", "smart-heading"),
  value: "Biryani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bitter", "smart-heading"),
  value: "Bitter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Black And White Picture", "smart-heading"),
  value: "Black And White Picture"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Black Han Sans", "smart-heading"),
  value: "Black Han Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Black Ops One", "smart-heading"),
  value: "Black Ops One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bokor", "smart-heading"),
  value: "Bokor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bonbon", "smart-heading"),
  value: "Bonbon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Boogaloo", "smart-heading"),
  value: "Boogaloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bowlby One", "smart-heading"),
  value: "Bowlby One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bowlby One SC", "smart-heading"),
  value: "Bowlby One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Brawler", "smart-heading"),
  value: "Brawler"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bree Serif", "smart-heading"),
  value: "Bree Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bruno Ace", "smart-heading"),
  value: "Bruno Ace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bruno Ace SC", "smart-heading"),
  value: "Bruno Ace SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bubblegum Sans", "smart-heading"),
  value: "Bubblegum Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bubbler One", "smart-heading"),
  value: "Bubbler One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Buda", "smart-heading"),
  value: "Buda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Buenard", "smart-heading"),
  value: "Buenard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bungee", "smart-heading"),
  value: "Bungee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bungee Hairline", "smart-heading"),
  value: "Bungee Hairline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bungee Inline", "smart-heading"),
  value: "Bungee Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bungee Outline", "smart-heading"),
  value: "Bungee Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bungee Shade", "smart-heading"),
  value: "Bungee Shade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Butcherman", "smart-heading"),
  value: "Butcherman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Butcherman Caps", "smart-heading"),
  value: "Butcherman Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Butterfly Kids", "smart-heading"),
  value: "Butterfly Kids"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cabin", "smart-heading"),
  value: "Cabin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cabin Condensed", "smart-heading"),
  value: "Cabin Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cabin Sketch", "smart-heading"),
  value: "Cabin Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("cabinvfbeta", "smart-heading"),
  value: "cabinvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Caesar Dressing", "smart-heading"),
  value: "Caesar Dressing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cagliostro", "smart-heading"),
  value: "Cagliostro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cairo", "smart-heading"),
  value: "Cairo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Calligraffitti", "smart-heading"),
  value: "Calligraffitti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cambay", "smart-heading"),
  value: "Cambay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cambo", "smart-heading"),
  value: "Cambo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Candal", "smart-heading"),
  value: "Candal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cantarell", "smart-heading"),
  value: "Cantarell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cantata One", "smart-heading"),
  value: "Cantata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cantora One", "smart-heading"),
  value: "Cantora One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Capriola", "smart-heading"),
  value: "Capriola"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cardo", "smart-heading"),
  value: "Cardo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Carme", "smart-heading"),
  value: "Carme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Carrois Gothic", "smart-heading"),
  value: "Carrois Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Carrois Gothic SC", "smart-heading"),
  value: "Carrois Gothic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Carter One", "smart-heading"),
  value: "Carter One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Catamaran", "smart-heading"),
  value: "Catamaran"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Caudex", "smart-heading"),
  value: "Caudex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Caveat", "smart-heading"),
  value: "Caveat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Caveat Brush", "smart-heading"),
  value: "Caveat Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cedarville Cursive", "smart-heading"),
  value: "Cedarville Cursive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ceviche One", "smart-heading"),
  value: "Ceviche One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chakra Petch", "smart-heading"),
  value: "Chakra Petch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Changa", "smart-heading"),
  value: "Changa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Changa One", "smart-heading"),
  value: "Changa One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chango", "smart-heading"),
  value: "Chango"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Charm", "smart-heading"),
  value: "Charm"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Charmonman", "smart-heading"),
  value: "Charmonman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chau Philomene One", "smart-heading"),
  value: "Chau Philomene One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chela One", "smart-heading"),
  value: "Chela One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chelsea Market", "smart-heading"),
  value: "Chelsea Market"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chenla", "smart-heading"),
  value: "Chenla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cherry Cream Soda", "smart-heading"),
  value: "Cherry Cream Soda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cherry Swash", "smart-heading"),
  value: "Cherry Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chewy", "smart-heading"),
  value: "Chewy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chicle", "smart-heading"),
  value: "Chicle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chilanka", "smart-heading"),
  value: "Chilanka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chivo", "smart-heading"),
  value: "Chivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Chonburi", "smart-heading"),
  value: "Chonburi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cinzel", "smart-heading"),
  value: "Cinzel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cinzel Decorative", "smart-heading"),
  value: "Cinzel Decorative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clicker Script", "smart-heading"),
  value: "Clicker Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Coda", "smart-heading"),
  value: "Coda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Coda Caption", "smart-heading"),
  value: "Coda Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Codystar", "smart-heading"),
  value: "Codystar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Coiny", "smart-heading"),
  value: "Coiny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Combo", "smart-heading"),
  value: "Combo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Comfortaa", "smart-heading"),
  value: "Comfortaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Coming Soon", "smart-heading"),
  value: "Coming Soon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Concert One", "smart-heading"),
  value: "Concert One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Condiment", "smart-heading"),
  value: "Condiment"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content", "smart-heading"),
  value: "Content"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Contrail One", "smart-heading"),
  value: "Contrail One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Convergence", "smart-heading"),
  value: "Convergence"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cookie", "smart-heading"),
  value: "Cookie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Copse", "smart-heading"),
  value: "Copse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Corben", "smart-heading"),
  value: "Corben"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cormorant", "smart-heading"),
  value: "Cormorant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cormorant Garamond", "smart-heading"),
  value: "Cormorant Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cormorant Infant", "smart-heading"),
  value: "Cormorant Infant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cormorant SC", "smart-heading"),
  value: "Cormorant SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cormorant Unicase", "smart-heading"),
  value: "Cormorant Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cormorant Upright", "smart-heading"),
  value: "Cormorant Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Courgette", "smart-heading"),
  value: "Courgette"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cousine", "smart-heading"),
  value: "Cousine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Coustard", "smart-heading"),
  value: "Coustard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Covered By Your Grace", "smart-heading"),
  value: "Covered By Your Grace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Crafty Girls", "smart-heading"),
  value: "Crafty Girls"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Creepster", "smart-heading"),
  value: "Creepster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Creepster Caps", "smart-heading"),
  value: "Creepster Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Crete Round", "smart-heading"),
  value: "Crete Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Crimson Pro", "smart-heading"),
  value: "Crimson Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Crimson Text", "smart-heading"),
  value: "Crimson Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Croissant One", "smart-heading"),
  value: "Croissant One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Crushed", "smart-heading"),
  value: "Crushed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cuprum", "smart-heading"),
  value: "Cuprum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cute Font", "smart-heading"),
  value: "Cute Font"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cutive", "smart-heading"),
  value: "Cutive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cutive Mono", "smart-heading"),
  value: "Cutive Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Damion", "smart-heading"),
  value: "Damion"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dancing Script", "smart-heading"),
  value: "Dancing Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dangrek", "smart-heading"),
  value: "Dangrek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Darker Grotesque", "smart-heading"),
  value: "Darker Grotesque"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dawning of a New Day", "smart-heading"),
  value: "Dawning of a New Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Days One", "smart-heading"),
  value: "Days One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("decovaralpha", "smart-heading"),
  value: "decovaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dekko", "smart-heading"),
  value: "Dekko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delius", "smart-heading"),
  value: "Delius"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delius Swash Caps", "smart-heading"),
  value: "Delius Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delius Unicase", "smart-heading"),
  value: "Delius Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Della Respira", "smart-heading"),
  value: "Della Respira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Denk One", "smart-heading"),
  value: "Denk One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Devonshire", "smart-heading"),
  value: "Devonshire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dhurjati", "smart-heading"),
  value: "Dhurjati"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dhyana", "smart-heading"),
  value: "Dhyana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Didact Gothic", "smart-heading"),
  value: "Didact Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Digital Numbers", "smart-heading"),
  value: "Digital Numbers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Diplomata", "smart-heading"),
  value: "Diplomata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Diplomata SC", "smart-heading"),
  value: "Diplomata SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("DM Sans", "smart-heading"),
  value: "DM Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("DM Serif Display", "smart-heading"),
  value: "DM Serif Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("DM Serif Text", "smart-heading"),
  value: "DM Serif Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Do Hyeon", "smart-heading"),
  value: "Do Hyeon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dokdo", "smart-heading"),
  value: "Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Domine", "smart-heading"),
  value: "Domine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Donegal One", "smart-heading"),
  value: "Donegal One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Doppio One", "smart-heading"),
  value: "Doppio One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dorsa", "smart-heading"),
  value: "Dorsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dosis", "smart-heading"),
  value: "Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dr Sugiyama", "smart-heading"),
  value: "Dr Sugiyama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Duru Sans", "smart-heading"),
  value: "Duru Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dynalight", "smart-heading"),
  value: "Dynalight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Eagle Lake", "smart-heading"),
  value: "Eagle Lake"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("East Sea Dokdo", "smart-heading"),
  value: "East Sea Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Eater", "smart-heading"),
  value: "Eater"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Eater Caps", "smart-heading"),
  value: "Eater Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("EB Garamond", "smart-heading"),
  value: "EB Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Economica", "smart-heading"),
  value: "Economica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Eczar", "smart-heading"),
  value: "Eczar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ek Mukta", "smart-heading"),
  value: "Ek Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("El Messiri", "smart-heading"),
  value: "El Messiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Electrolize", "smart-heading"),
  value: "Electrolize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elsie", "smart-heading"),
  value: "Elsie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elsie Swash Caps", "smart-heading"),
  value: "Elsie Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Emblema One", "smart-heading"),
  value: "Emblema One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Emilys Candy", "smart-heading"),
  value: "Emilys Candy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Encode Sans", "smart-heading"),
  value: "Encode Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Encode Sans Condensed", "smart-heading"),
  value: "Encode Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Encode Sans Expanded", "smart-heading"),
  value: "Encode Sans Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Encode Sans Semi Condensed", "smart-heading"),
  value: "Encode Sans Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Encode Sans Semi Expanded", "smart-heading"),
  value: "Encode Sans Semi Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Engagement", "smart-heading"),
  value: "Engagement"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Englebert", "smart-heading"),
  value: "Englebert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enriqueta", "smart-heading"),
  value: "Enriqueta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Erica One", "smart-heading"),
  value: "Erica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Esteban", "smart-heading"),
  value: "Esteban"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Euphoria Script", "smart-heading"),
  value: "Euphoria Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ewert", "smart-heading"),
  value: "Ewert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Exo", "smart-heading"),
  value: "Exo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Exo 2", "smart-heading"),
  value: "Exo 2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Expletus Sans", "smart-heading"),
  value: "Expletus Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fahkwang", "smart-heading"),
  value: "Fahkwang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fanwood Text", "smart-heading"),
  value: "Fanwood Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Farro", "smart-heading"),
  value: "Farro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Farsan", "smart-heading"),
  value: "Farsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fascinate", "smart-heading"),
  value: "Fascinate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fascinate Inline", "smart-heading"),
  value: "Fascinate Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Faster One", "smart-heading"),
  value: "Faster One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fasthand", "smart-heading"),
  value: "Fasthand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fauna One", "smart-heading"),
  value: "Fauna One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Faustina", "smart-heading"),
  value: "Faustina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("faustinavfbeta", "smart-heading"),
  value: "faustinavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Federant", "smart-heading"),
  value: "Federant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Federo", "smart-heading"),
  value: "Federo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Felipa", "smart-heading"),
  value: "Felipa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fenix", "smart-heading"),
  value: "Fenix"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Finger Paint", "smart-heading"),
  value: "Finger Paint"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fira Code", "smart-heading"),
  value: "Fira Code"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fira Mono", "smart-heading"),
  value: "Fira Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fira Sans", "smart-heading"),
  value: "Fira Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fira Sans Condensed", "smart-heading"),
  value: "Fira Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fira Sans Extra Condensed", "smart-heading"),
  value: "Fira Sans Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fjalla One", "smart-heading"),
  value: "Fjalla One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fjord One", "smart-heading"),
  value: "Fjord One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Flamenco", "smart-heading"),
  value: "Flamenco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Flavors", "smart-heading"),
  value: "Flavors"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fondamento", "smart-heading"),
  value: "Fondamento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fontdiner Swanky", "smart-heading"),
  value: "Fontdiner Swanky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Forum", "smart-heading"),
  value: "Forum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Francois One", "smart-heading"),
  value: "Francois One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Frank Ruhl Libre", "smart-heading"),
  value: "Frank Ruhl Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Freckle Face", "smart-heading"),
  value: "Freckle Face"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fredericka the Great", "smart-heading"),
  value: "Fredericka the Great"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fredoka One", "smart-heading"),
  value: "Fredoka One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Freehand", "smart-heading"),
  value: "Freehand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fresca", "smart-heading"),
  value: "Fresca"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Frijole", "smart-heading"),
  value: "Frijole"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fruktur", "smart-heading"),
  value: "Fruktur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fugaz One", "smart-heading"),
  value: "Fugaz One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gabriela", "smart-heading"),
  value: "Gabriela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gaegu", "smart-heading"),
  value: "Gaegu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gafata", "smart-heading"),
  value: "Gafata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Galada", "smart-heading"),
  value: "Galada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Galdeano", "smart-heading"),
  value: "Galdeano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Galindo", "smart-heading"),
  value: "Galindo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gamja Flower", "smart-heading"),
  value: "Gamja Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gayathri", "smart-heading"),
  value: "Gayathri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gemunu Libre", "smart-heading"),
  value: "Gemunu Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gentium Basic", "smart-heading"),
  value: "Gentium Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gentium Book Basic", "smart-heading"),
  value: "Gentium Book Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Geo", "smart-heading"),
  value: "Geo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Geostar", "smart-heading"),
  value: "Geostar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Geostar Fill", "smart-heading"),
  value: "Geostar Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Germania One", "smart-heading"),
  value: "Germania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("GFS Didot", "smart-heading"),
  value: "GFS Didot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("GFS Neohellenic", "smart-heading"),
  value: "GFS Neohellenic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gidugu", "smart-heading"),
  value: "Gidugu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gilda Display", "smart-heading"),
  value: "Gilda Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Give You Glory", "smart-heading"),
  value: "Give You Glory"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Glass Antiqua", "smart-heading"),
  value: "Glass Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Glegoo", "smart-heading"),
  value: "Glegoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gloria Hallelujah", "smart-heading"),
  value: "Gloria Hallelujah"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Goblin One", "smart-heading"),
  value: "Goblin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gochi Hand", "smart-heading"),
  value: "Gochi Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gorditas", "smart-heading"),
  value: "Gorditas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gothic A1", "smart-heading"),
  value: "Gothic A1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Goudy Bookletter 1911", "smart-heading"),
  value: "Goudy Bookletter 1911"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Graduate", "smart-heading"),
  value: "Graduate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Grand Hotel", "smart-heading"),
  value: "Grand Hotel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gravitas One", "smart-heading"),
  value: "Gravitas One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Great Vibes", "smart-heading"),
  value: "Great Vibes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Grenze", "smart-heading"),
  value: "Grenze"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Griffy", "smart-heading"),
  value: "Griffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gruppo", "smart-heading"),
  value: "Gruppo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gudea", "smart-heading"),
  value: "Gudea"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gugi", "smart-heading"),
  value: "Gugi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gurajada", "smart-heading"),
  value: "Gurajada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Habibi", "smart-heading"),
  value: "Habibi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Halant", "smart-heading"),
  value: "Halant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hammersmith One", "smart-heading"),
  value: "Hammersmith One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hanalei", "smart-heading"),
  value: "Hanalei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hanalei Fill", "smart-heading"),
  value: "Hanalei Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Handlee", "smart-heading"),
  value: "Handlee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("hanna", "smart-heading"),
  value: "hanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("hannari", "smart-heading"),
  value: "hannari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hanuman", "smart-heading"),
  value: "Hanuman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Happy Monkey", "smart-heading"),
  value: "Happy Monkey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Harmattan", "smart-heading"),
  value: "Harmattan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Headland One", "smart-heading"),
  value: "Headland One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heebo", "smart-heading"),
  value: "Heebo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Henny Penny", "smart-heading"),
  value: "Henny Penny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hermeneus One", "smart-heading"),
  value: "Hermeneus One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Herr Von Muellerhoff", "smart-heading"),
  value: "Herr Von Muellerhoff"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hi Melody", "smart-heading"),
  value: "Hi Melody"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hind", "smart-heading"),
  value: "Hind"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hind Colombo", "smart-heading"),
  value: "Hind Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hind Guntur", "smart-heading"),
  value: "Hind Guntur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hind Jalandhar", "smart-heading"),
  value: "Hind Jalandhar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hind Kochi", "smart-heading"),
  value: "Hind Kochi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hind Madurai", "smart-heading"),
  value: "Hind Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hind Mysuru", "smart-heading"),
  value: "Hind Mysuru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hind Siliguri", "smart-heading"),
  value: "Hind Siliguri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hind Vadodara", "smart-heading"),
  value: "Hind Vadodara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Holtwood One SC", "smart-heading"),
  value: "Holtwood One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Homemade Apple", "smart-heading"),
  value: "Homemade Apple"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Homenaje", "smart-heading"),
  value: "Homenaje"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IBM Plex Mono", "smart-heading"),
  value: "IBM Plex Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IBM Plex Sans", "smart-heading"),
  value: "IBM Plex Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IBM Plex Sans Condensed", "smart-heading"),
  value: "IBM Plex Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IBM Plex Serif", "smart-heading"),
  value: "IBM Plex Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Iceberg", "smart-heading"),
  value: "Iceberg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Iceland", "smart-heading"),
  value: "Iceland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell Double Pica", "smart-heading"),
  value: "IM Fell Double Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell Double Pica SC", "smart-heading"),
  value: "IM Fell Double Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell DW Pica", "smart-heading"),
  value: "IM Fell DW Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell DW Pica SC", "smart-heading"),
  value: "IM Fell DW Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell English", "smart-heading"),
  value: "IM Fell English"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell English SC", "smart-heading"),
  value: "IM Fell English SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell French Canon", "smart-heading"),
  value: "IM Fell French Canon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell French Canon SC", "smart-heading"),
  value: "IM Fell French Canon SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell Great Primer", "smart-heading"),
  value: "IM Fell Great Primer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("IM Fell Great Primer SC", "smart-heading"),
  value: "IM Fell Great Primer SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Imprima", "smart-heading"),
  value: "Imprima"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inconsolata", "smart-heading"),
  value: "Inconsolata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inder", "smart-heading"),
  value: "Inder"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Indie Flower", "smart-heading"),
  value: "Indie Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inika", "smart-heading"),
  value: "Inika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inknut Antiqua", "smart-heading"),
  value: "Inknut Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Irish Grover", "smart-heading"),
  value: "Irish Grover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Istok Web", "smart-heading"),
  value: "Istok Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Italiana", "smart-heading"),
  value: "Italiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Italianno", "smart-heading"),
  value: "Italianno"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Itim", "smart-heading"),
  value: "Itim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Jacques Francois", "smart-heading"),
  value: "Jacques Francois"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Jacques Francois Shadow", "smart-heading"),
  value: "Jacques Francois Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Jaldi", "smart-heading"),
  value: "Jaldi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("jejugothic", "smart-heading"),
  value: "jejugothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("jejuhallasan", "smart-heading"),
  value: "jejuhallasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("jejumyeongjo", "smart-heading"),
  value: "jejumyeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Jim Nightshade", "smart-heading"),
  value: "Jim Nightshade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Jockey One", "smart-heading"),
  value: "Jockey One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Jolly Lodger", "smart-heading"),
  value: "Jolly Lodger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Jomhuria", "smart-heading"),
  value: "Jomhuria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("jomolhari", "smart-heading"),
  value: "jomolhari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Josefin Sans", "smart-heading"),
  value: "Josefin Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Josefin Sans Std Light", "smart-heading"),
  value: "Josefin Sans Std Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Josefin Slab", "smart-heading"),
  value: "Josefin Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Joti One", "smart-heading"),
  value: "Joti One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Jua", "smart-heading"),
  value: "Jua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Judson", "smart-heading"),
  value: "Judson"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Julee", "smart-heading"),
  value: "Julee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Julius Sans One", "smart-heading"),
  value: "Julius Sans One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Junge", "smart-heading"),
  value: "Junge"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Jura", "smart-heading"),
  value: "Jura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Just Another Hand", "smart-heading"),
  value: "Just Another Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Just Me Again Down Here", "smart-heading"),
  value: "Just Me Again Down Here"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("K2D", "smart-heading"),
  value: "K2D"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kadwa", "smart-heading"),
  value: "Kadwa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kalam", "smart-heading"),
  value: "Kalam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kameron", "smart-heading"),
  value: "Kameron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kanit", "smart-heading"),
  value: "Kanit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kantumruy", "smart-heading"),
  value: "Kantumruy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Karla", "smart-heading"),
  value: "Karla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Karla Tamil Inclined", "smart-heading"),
  value: "Karla Tamil Inclined"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Karla Tamil Upright", "smart-heading"),
  value: "Karla Tamil Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Karma", "smart-heading"),
  value: "Karma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Katibeh", "smart-heading"),
  value: "Katibeh"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kaushan Script", "smart-heading"),
  value: "Kaushan Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kavivanar", "smart-heading"),
  value: "Kavivanar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kavoon", "smart-heading"),
  value: "Kavoon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kdam Thmor", "smart-heading"),
  value: "Kdam Thmor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Keania One", "smart-heading"),
  value: "Keania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kelly Slab", "smart-heading"),
  value: "Kelly Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kenia", "smart-heading"),
  value: "Kenia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Khand", "smart-heading"),
  value: "Khand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Khmer", "smart-heading"),
  value: "Khmer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Khula", "smart-heading"),
  value: "Khula"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("khyay", "smart-heading"),
  value: "khyay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kirang Haerang", "smart-heading"),
  value: "Kirang Haerang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kite One", "smart-heading"),
  value: "Kite One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Knewave", "smart-heading"),
  value: "Knewave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kodchasan", "smart-heading"),
  value: "Kodchasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("KoHo", "smart-heading"),
  value: "KoHo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("kokoro", "smart-heading"),
  value: "kokoro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("kopubbatang", "smart-heading"),
  value: "kopubbatang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kotta One", "smart-heading"),
  value: "Kotta One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Koulen", "smart-heading"),
  value: "Koulen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kranky", "smart-heading"),
  value: "Kranky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kreon", "smart-heading"),
  value: "Kreon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kristi", "smart-heading"),
  value: "Kristi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Krona One", "smart-heading"),
  value: "Krona One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Krub", "smart-heading"),
  value: "Krub"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kumar One", "smart-heading"),
  value: "Kumar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Kurale", "smart-heading"),
  value: "Kurale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("La Belle Aurore", "smart-heading"),
  value: "La Belle Aurore"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lacquer", "smart-heading"),
  value: "Lacquer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Laila", "smart-heading"),
  value: "Laila"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lakki Reddy", "smart-heading"),
  value: "Lakki Reddy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lalezar", "smart-heading"),
  value: "Lalezar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lancelot", "smart-heading"),
  value: "Lancelot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("laomuangdon", "smart-heading"),
  value: "laomuangdon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("laomuangkhong", "smart-heading"),
  value: "laomuangkhong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("laosanspro", "smart-heading"),
  value: "laosanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lateef", "smart-heading"),
  value: "Lateef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lato", "smart-heading"),
  value: "Lato"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("League Script", "smart-heading"),
  value: "League Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Leckerli One", "smart-heading"),
  value: "Leckerli One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ledger", "smart-heading"),
  value: "Ledger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lekton", "smart-heading"),
  value: "Lekton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lemon", "smart-heading"),
  value: "Lemon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lemonada", "smart-heading"),
  value: "Lemonada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Barcode 128", "smart-heading"),
  value: "Libre Barcode 128"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Barcode 128 Text", "smart-heading"),
  value: "Libre Barcode 128 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Barcode 39", "smart-heading"),
  value: "Libre Barcode 39"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Barcode 39 Extended", "smart-heading"),
  value: "Libre Barcode 39 Extended"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Barcode 39 Extended Text", "smart-heading"),
  value: "Libre Barcode 39 Extended Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Barcode 39 Text", "smart-heading"),
  value: "Libre Barcode 39 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Baskerville", "smart-heading"),
  value: "Libre Baskerville"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Caslon Display", "smart-heading"),
  value: "Libre Caslon Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Caslon Text", "smart-heading"),
  value: "Libre Caslon Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Libre Franklin", "smart-heading"),
  value: "Libre Franklin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Life Savers", "smart-heading"),
  value: "Life Savers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lilita One", "smart-heading"),
  value: "Lilita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lily Script One", "smart-heading"),
  value: "Lily Script One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Limelight", "smart-heading"),
  value: "Limelight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Linden Hill", "smart-heading"),
  value: "Linden Hill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Literata", "smart-heading"),
  value: "Literata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Liu Jian Mao Cao", "smart-heading"),
  value: "Liu Jian Mao Cao"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Livvic", "smart-heading"),
  value: "Livvic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lobster", "smart-heading"),
  value: "Lobster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lobster Two", "smart-heading"),
  value: "Lobster Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lohit Bengali", "smart-heading"),
  value: "Lohit Bengali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lohit Tamil", "smart-heading"),
  value: "Lohit Tamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("lohitdevanagari", "smart-heading"),
  value: "lohitdevanagari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Londrina Outline", "smart-heading"),
  value: "Londrina Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Londrina Shadow", "smart-heading"),
  value: "Londrina Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Londrina Sketch", "smart-heading"),
  value: "Londrina Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Londrina Solid", "smart-heading"),
  value: "Londrina Solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Long Cang", "smart-heading"),
  value: "Long Cang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lora", "smart-heading"),
  value: "Lora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Love Ya Like A Sister", "smart-heading"),
  value: "Love Ya Like A Sister"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Loved by the King", "smart-heading"),
  value: "Loved by the King"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lovers Quarrel", "smart-heading"),
  value: "Lovers Quarrel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Luckiest Guy", "smart-heading"),
  value: "Luckiest Guy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lusitana", "smart-heading"),
  value: "Lusitana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lustria", "smart-heading"),
  value: "Lustria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ma Shan Zheng", "smart-heading"),
  value: "Ma Shan Zheng"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Macondo", "smart-heading"),
  value: "Macondo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Macondo Swash Caps", "smart-heading"),
  value: "Macondo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mada", "smart-heading"),
  value: "Mada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Magra", "smart-heading"),
  value: "Magra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Maiden Orange", "smart-heading"),
  value: "Maiden Orange"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Maitree", "smart-heading"),
  value: "Maitree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Major Mono Display", "smart-heading"),
  value: "Major Mono Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mako", "smart-heading"),
  value: "Mako"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mali", "smart-heading"),
  value: "Mali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mallanna", "smart-heading"),
  value: "Mallanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mandali", "smart-heading"),
  value: "Mandali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Manjari", "smart-heading"),
  value: "Manjari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Manuale", "smart-heading"),
  value: "Manuale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Marcellus", "smart-heading"),
  value: "Marcellus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Marcellus SC", "smart-heading"),
  value: "Marcellus SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Marck Script", "smart-heading"),
  value: "Marck Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margarine", "smart-heading"),
  value: "Margarine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Marko One", "smart-heading"),
  value: "Marko One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Marmelad", "smart-heading"),
  value: "Marmelad"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Martel", "smart-heading"),
  value: "Martel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Martel Sans", "smart-heading"),
  value: "Martel Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Marvel", "smart-heading"),
  value: "Marvel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mate", "smart-heading"),
  value: "Mate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mate SC", "smart-heading"),
  value: "Mate SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Maven Pro", "smart-heading"),
  value: "Maven Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("mavenprovfbeta", "smart-heading"),
  value: "mavenprovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("McLaren", "smart-heading"),
  value: "McLaren"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Meddon", "smart-heading"),
  value: "Meddon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("MedievalSharp", "smart-heading"),
  value: "MedievalSharp"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Medula One", "smart-heading"),
  value: "Medula One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Meera Inimai", "smart-heading"),
  value: "Meera Inimai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Megrim", "smart-heading"),
  value: "Megrim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Meie Script", "smart-heading"),
  value: "Meie Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Merge One", "smart-heading"),
  value: "Merge One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Merienda", "smart-heading"),
  value: "Merienda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Merienda One", "smart-heading"),
  value: "Merienda One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Merriweather", "smart-heading"),
  value: "Merriweather"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Merriweather Sans", "smart-heading"),
  value: "Merriweather Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mervale Script", "smart-heading"),
  value: "Mervale Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Metal", "smart-heading"),
  value: "Metal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Metal Mania", "smart-heading"),
  value: "Metal Mania"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Metamorphous", "smart-heading"),
  value: "Metamorphous"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Metrophobic", "smart-heading"),
  value: "Metrophobic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Miama", "smart-heading"),
  value: "Miama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Michroma", "smart-heading"),
  value: "Michroma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Milonga", "smart-heading"),
  value: "Milonga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Miltonian", "smart-heading"),
  value: "Miltonian"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Miltonian Tattoo", "smart-heading"),
  value: "Miltonian Tattoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mina", "smart-heading"),
  value: "Mina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Miniver", "smart-heading"),
  value: "Miniver"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Miriam Libre", "smart-heading"),
  value: "Miriam Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Miss Fajardose", "smart-heading"),
  value: "Miss Fajardose"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Miss Saint Delafield", "smart-heading"),
  value: "Miss Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Modak", "smart-heading"),
  value: "Modak"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Modern Antiqua", "smart-heading"),
  value: "Modern Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Molengo", "smart-heading"),
  value: "Molengo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Molle", "smart-heading"),
  value: "Molle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Monda", "smart-heading"),
  value: "Monda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Monofett", "smart-heading"),
  value: "Monofett"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Monoton", "smart-heading"),
  value: "Monoton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Monsieur La Doulaise", "smart-heading"),
  value: "Monsieur La Doulaise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Montaga", "smart-heading"),
  value: "Montaga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Montez", "smart-heading"),
  value: "Montez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Montserrat", "smart-heading"),
  value: "Montserrat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Montserrat Alternates", "smart-heading"),
  value: "Montserrat Alternates"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Montserrat Subrayada", "smart-heading"),
  value: "Montserrat Subrayada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Moul", "smart-heading"),
  value: "Moul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Moulpali", "smart-heading"),
  value: "Moulpali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mountains of Christmas", "smart-heading"),
  value: "Mountains of Christmas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mouse Memoirs", "smart-heading"),
  value: "Mouse Memoirs"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("mplus1p", "smart-heading"),
  value: "mplus1p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mr Bedford", "smart-heading"),
  value: "Mr Bedford"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mr Bedfort", "smart-heading"),
  value: "Mr Bedfort"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mr Dafoe", "smart-heading"),
  value: "Mr Dafoe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mr De Haviland", "smart-heading"),
  value: "Mr De Haviland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mrs Saint Delafield", "smart-heading"),
  value: "Mrs Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mrs Sheppards", "smart-heading"),
  value: "Mrs Sheppards"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mukta", "smart-heading"),
  value: "Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mukta Mahee", "smart-heading"),
  value: "Mukta Mahee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mukta Malar", "smart-heading"),
  value: "Mukta Malar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mukta Vaani", "smart-heading"),
  value: "Mukta Vaani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Muli", "smart-heading"),
  value: "Muli"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("myanmarsanspro", "smart-heading"),
  value: "myanmarsanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mystery Quest", "smart-heading"),
  value: "Mystery Quest"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nanum Brush Script", "smart-heading"),
  value: "Nanum Brush Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nanum Gothic", "smart-heading"),
  value: "Nanum Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nanum Gothic Coding", "smart-heading"),
  value: "Nanum Gothic Coding"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nanum Myeongjo", "smart-heading"),
  value: "Nanum Myeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nanum Pen Script", "smart-heading"),
  value: "Nanum Pen Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("NATS", "smart-heading"),
  value: "NATS"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Neucha", "smart-heading"),
  value: "Neucha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Neuton", "smart-heading"),
  value: "Neuton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("New Rocker", "smart-heading"),
  value: "New Rocker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("News Cycle", "smart-heading"),
  value: "News Cycle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("nicomoji", "smart-heading"),
  value: "nicomoji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Niconne", "smart-heading"),
  value: "Niconne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("nikukyu", "smart-heading"),
  value: "nikukyu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Niramit", "smart-heading"),
  value: "Niramit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nixie One", "smart-heading"),
  value: "Nixie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nobile", "smart-heading"),
  value: "Nobile"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nokora", "smart-heading"),
  value: "Nokora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Norican", "smart-heading"),
  value: "Norican"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nosifer", "smart-heading"),
  value: "Nosifer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nosifer Caps", "smart-heading"),
  value: "Nosifer Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Notable", "smart-heading"),
  value: "Notable"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nothing You Could Do", "smart-heading"),
  value: "Nothing You Could Do"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Noticia Text", "smart-heading"),
  value: "Noticia Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Noto Sans", "smart-heading"),
  value: "Noto Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Noto Serif", "smart-heading"),
  value: "Noto Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("notosanstamil", "smart-heading"),
  value: "notosanstamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nova Cut", "smart-heading"),
  value: "Nova Cut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nova Flat", "smart-heading"),
  value: "Nova Flat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nova Mono", "smart-heading"),
  value: "Nova Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nova Oval", "smart-heading"),
  value: "Nova Oval"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nova Round", "smart-heading"),
  value: "Nova Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nova Script", "smart-heading"),
  value: "Nova Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nova Slim", "smart-heading"),
  value: "Nova Slim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nova Square", "smart-heading"),
  value: "Nova Square"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("NTR", "smart-heading"),
  value: "NTR"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Numans", "smart-heading"),
  value: "Numans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nunito", "smart-heading"),
  value: "Nunito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nunito Sans", "smart-heading"),
  value: "Nunito Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Odor Mean Chey", "smart-heading"),
  value: "Odor Mean Chey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Offside", "smart-heading"),
  value: "Offside"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("OFL Sorts Mill Goudy TT", "smart-heading"),
  value: "OFL Sorts Mill Goudy TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Old Standard TT", "smart-heading"),
  value: "Old Standard TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Oldenburg", "smart-heading"),
  value: "Oldenburg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Oleo Script", "smart-heading"),
  value: "Oleo Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Oleo Script Swash Caps", "smart-heading"),
  value: "Oleo Script Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open Sans", "smart-heading"),
  value: "Open Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open Sans Condensed", "smart-heading"),
  value: "Open Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("opensanshebrew", "smart-heading"),
  value: "opensanshebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("opensanshebrewcondensed", "smart-heading"),
  value: "opensanshebrewcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Oranienbaum", "smart-heading"),
  value: "Oranienbaum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Orbitron", "smart-heading"),
  value: "Orbitron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Oregano", "smart-heading"),
  value: "Oregano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Orienta", "smart-heading"),
  value: "Orienta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Original Surfer", "smart-heading"),
  value: "Original Surfer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Oswald", "smart-heading"),
  value: "Oswald"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Over the Rainbow", "smart-heading"),
  value: "Over the Rainbow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Overlock", "smart-heading"),
  value: "Overlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Overlock SC", "smart-heading"),
  value: "Overlock SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Overpass", "smart-heading"),
  value: "Overpass"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Overpass Mono", "smart-heading"),
  value: "Overpass Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ovo", "smart-heading"),
  value: "Ovo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Oxygen", "smart-heading"),
  value: "Oxygen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Oxygen Mono", "smart-heading"),
  value: "Oxygen Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pacifico", "smart-heading"),
  value: "Pacifico"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padauk", "smart-heading"),
  value: "Padauk"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Palanquin", "smart-heading"),
  value: "Palanquin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Palanquin Dark", "smart-heading"),
  value: "Palanquin Dark"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pangolin", "smart-heading"),
  value: "Pangolin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paprika", "smart-heading"),
  value: "Paprika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Parisienne", "smart-heading"),
  value: "Parisienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Passero One", "smart-heading"),
  value: "Passero One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Passion One", "smart-heading"),
  value: "Passion One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pathway Gothic One", "smart-heading"),
  value: "Pathway Gothic One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Patrick Hand", "smart-heading"),
  value: "Patrick Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Patrick Hand SC", "smart-heading"),
  value: "Patrick Hand SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pattaya", "smart-heading"),
  value: "Pattaya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Patua One", "smart-heading"),
  value: "Patua One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pavanam", "smart-heading"),
  value: "Pavanam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paytone One", "smart-heading"),
  value: "Paytone One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pecita", "smart-heading"),
  value: "Pecita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Peddana", "smart-heading"),
  value: "Peddana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Peralta", "smart-heading"),
  value: "Peralta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Permanent Marker", "smart-heading"),
  value: "Permanent Marker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Petit Formal Script", "smart-heading"),
  value: "Petit Formal Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Petrona", "smart-heading"),
  value: "Petrona"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Phetsarath", "smart-heading"),
  value: "Phetsarath"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Philosopher", "smart-heading"),
  value: "Philosopher"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Piedra", "smart-heading"),
  value: "Piedra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pinyon Script", "smart-heading"),
  value: "Pinyon Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pirata One", "smart-heading"),
  value: "Pirata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Plaster", "smart-heading"),
  value: "Plaster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Play", "smart-heading"),
  value: "Play"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Playball", "smart-heading"),
  value: "Playball"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Playfair Display", "smart-heading"),
  value: "Playfair Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Playfair Display SC", "smart-heading"),
  value: "Playfair Display SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Podkova", "smart-heading"),
  value: "Podkova"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("podkovavfbeta", "smart-heading"),
  value: "podkovavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Poetsen One", "smart-heading"),
  value: "Poetsen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Poiret One", "smart-heading"),
  value: "Poiret One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Poller One", "smart-heading"),
  value: "Poller One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Poly", "smart-heading"),
  value: "Poly"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pompiere", "smart-heading"),
  value: "Pompiere"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ponnala", "smart-heading"),
  value: "Ponnala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pontano Sans", "smart-heading"),
  value: "Pontano Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Poor Story", "smart-heading"),
  value: "Poor Story"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Poppins", "smart-heading"),
  value: "Poppins"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Port Lligat Sans", "smart-heading"),
  value: "Port Lligat Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Port Lligat Slab", "smart-heading"),
  value: "Port Lligat Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Porter Sans Block", "smart-heading"),
  value: "Porter Sans Block"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Post No Bills Colombo", "smart-heading"),
  value: "Post No Bills Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Post No Bills Jaffna", "smart-heading"),
  value: "Post No Bills Jaffna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pragati Narrow", "smart-heading"),
  value: "Pragati Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Preahvihear", "smart-heading"),
  value: "Preahvihear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Press Start 2P", "smart-heading"),
  value: "Press Start 2P"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pridi", "smart-heading"),
  value: "Pridi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Princess Sofia", "smart-heading"),
  value: "Princess Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Prociono", "smart-heading"),
  value: "Prociono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Prompt", "smart-heading"),
  value: "Prompt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Prosto One", "smart-heading"),
  value: "Prosto One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Proza Libre", "smart-heading"),
  value: "Proza Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PT Mono", "smart-heading"),
  value: "PT Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PT Sans", "smart-heading"),
  value: "PT Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PT Sans Caption", "smart-heading"),
  value: "PT Sans Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PT Sans Narrow", "smart-heading"),
  value: "PT Sans Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PT Serif", "smart-heading"),
  value: "PT Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PT Serif Caption", "smart-heading"),
  value: "PT Serif Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Puritan", "smart-heading"),
  value: "Puritan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Purple Purse", "smart-heading"),
  value: "Purple Purse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pushster", "smart-heading"),
  value: "Pushster"
}, {
  label: "Quando",
  value: "Quando"
}, {
  label: "Quantico",
  value: "Quantico"
}, {
  label: "Quattrocento",
  value: "Quattrocento"
}, {
  label: "Quattrocento Sans",
  value: "Quattrocento Sans"
}, {
  label: "Questrial",
  value: "Questrial"
}, {
  label: "Quicksand",
  value: "Quicksand"
}, {
  label: "Quintessential",
  value: "Quintessential"
}, {
  label: "Qwigley",
  value: "Qwigley"
}, {
  label: "Racing Sans One",
  value: "Racing Sans One"
}, {
  label: "Radley",
  value: "Radley"
}, {
  label: "Rajdhani",
  value: "Rajdhani"
}, {
  label: "Rakkas",
  value: "Rakkas"
}, {
  label: "Raleway",
  value: "Raleway"
}, {
  label: "Raleway Dots",
  value: "Raleway Dots"
}, {
  label: "Ramabhadra",
  value: "Ramabhadra"
}, {
  label: "Ramaraja",
  value: "Ramaraja"
}, {
  label: "Rambla",
  value: "Rambla"
}, {
  label: "Rammetto One",
  value: "Rammetto One"
}, {
  label: "Ranchers",
  value: "Ranchers"
}, {
  label: "Rancho",
  value: "Rancho"
}, {
  label: "Ranga",
  value: "Ranga"
}, {
  label: "Rasa",
  value: "Rasa"
}, {
  label: "Rationale",
  value: "Rationale"
}, {
  label: "Ravi Prakash",
  value: "Ravi Prakash"
}, {
  label: "Red Hat Display",
  value: "Red Hat Display"
}, {
  label: "Red Hat Text",
  value: "Red Hat Text"
}, {
  label: "Redacted",
  value: "Redacted"
}, {
  label: "Redacted Script",
  value: "Redacted Script"
}, {
  label: "Redressed",
  value: "Redressed"
}, {
  label: "Reem Kufi",
  value: "Reem Kufi"
}, {
  label: "Reenie Beanie",
  value: "Reenie Beanie"
}, {
  label: "Revalia",
  value: "Revalia"
}, {
  label: "Rhodium Libre",
  value: "Rhodium Libre"
}, {
  label: "Ribeye",
  value: "Ribeye"
}, {
  label: "Ribeye Marrow",
  value: "Ribeye Marrow"
}, {
  label: "Righteous",
  value: "Righteous"
}, {
  label: "Risque",
  value: "Risque"
}, {
  label: "Roboto",
  value: "Roboto"
}, {
  label: "Roboto Condensed",
  value: "Roboto Condensed"
}, {
  label: "Roboto Mono",
  value: "Roboto Mono"
}, {
  label: "Roboto Slab",
  value: "Roboto Slab"
}, {
  label: "Rochester",
  value: "Rochester"
}, {
  label: "Rock Salt",
  value: "Rock Salt"
}, {
  label: "Rokkitt",
  value: "Rokkitt"
}, {
  label: "Romanesco",
  value: "Romanesco"
}, {
  label: "Ropa Sans",
  value: "Ropa Sans"
}, {
  label: "Rosario",
  value: "Rosario"
}, {
  label: "Rosarivo",
  value: "Rosarivo"
}, {
  label: "Rouge Script",
  value: "Rouge Script"
}, {
  label: "roundedmplus1c",
  value: "roundedmplus1c"
}, {
  label: "Rozha One",
  value: "Rozha One"
}, {
  label: "Rubik",
  value: "Rubik"
}, {
  label: "Rubik Mono One",
  value: "Rubik Mono One"
}, {
  label: "Rubik One",
  value: "Rubik One"
}, {
  label: "Ruda",
  value: "Ruda"
}, {
  label: "Rufina",
  value: "Rufina"
}, {
  label: "Ruge Boogie",
  value: "Ruge Boogie"
}, {
  label: "Ruluko",
  value: "Ruluko"
}, {
  label: "Rum Raisin",
  value: "Rum Raisin"
}, {
  label: "Ruslan Display",
  value: "Ruslan Display"
}, {
  label: "Russo One",
  value: "Russo One"
}, {
  label: "Ruthie",
  value: "Ruthie"
}, {
  label: "Rye",
  value: "Rye"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sacramento", "smart-heading"),
  value: "Sacramento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sahitya", "smart-heading"),
  value: "Sahitya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sail", "smart-heading"),
  value: "Sail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Saira", "smart-heading"),
  value: "Saira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Saira Condensed", "smart-heading"),
  value: "Saira Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Saira Extra Condensed", "smart-heading"),
  value: "Saira Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Saira Semi Condensed", "smart-heading"),
  value: "Saira Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Saira Stencil One", "smart-heading"),
  value: "Saira Stencil One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Salsa", "smart-heading"),
  value: "Salsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sanchez", "smart-heading"),
  value: "Sanchez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sancreek", "smart-heading"),
  value: "Sancreek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sansation", "smart-heading"),
  value: "Sansation"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sansita", "smart-heading"),
  value: "Sansita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sansita One", "smart-heading"),
  value: "Sansita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sarabun", "smart-heading"),
  value: "Sarabun"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sarala", "smart-heading"),
  value: "Sarala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sarina", "smart-heading"),
  value: "Sarina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sarpanch", "smart-heading"),
  value: "Sarpanch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Satisfy", "smart-heading"),
  value: "Satisfy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("sawarabigothic", "smart-heading"),
  value: "sawarabigothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("sawarabimincho", "smart-heading"),
  value: "sawarabimincho"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Scada", "smart-heading"),
  value: "Scada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Scheherazade", "smart-heading"),
  value: "Scheherazade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Schoolbell", "smart-heading"),
  value: "Schoolbell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Scope One", "smart-heading"),
  value: "Scope One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Seaweed Script", "smart-heading"),
  value: "Seaweed Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Secular One", "smart-heading"),
  value: "Secular One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sedan", "smart-heading"),
  value: "Sedan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sedan SC", "smart-heading"),
  value: "Sedan SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sedgwick Ave", "smart-heading"),
  value: "Sedgwick Ave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sedgwick Ave Display", "smart-heading"),
  value: "Sedgwick Ave Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("seoulhangang", "smart-heading"),
  value: "seoulhangang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("seoulhangangcondensed", "smart-heading"),
  value: "seoulhangangcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("seoulnamsan", "smart-heading"),
  value: "seoulnamsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("seoulnamsancondensed", "smart-heading"),
  value: "seoulnamsancondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("seoulnamsanvertical", "smart-heading"),
  value: "seoulnamsanvertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sevillana", "smart-heading"),
  value: "Sevillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Seymour One", "smart-heading"),
  value: "Seymour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shadows Into Light", "smart-heading"),
  value: "Shadows Into Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shadows Into Light Two", "smart-heading"),
  value: "Shadows Into Light Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shanti", "smart-heading"),
  value: "Shanti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Share", "smart-heading"),
  value: "Share"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Share Tech", "smart-heading"),
  value: "Share Tech"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Share Tech Mono", "smart-heading"),
  value: "Share Tech Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shojumaru", "smart-heading"),
  value: "Shojumaru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Short Stack", "smart-heading"),
  value: "Short Stack"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shrikhand", "smart-heading"),
  value: "Shrikhand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Siamreap", "smart-heading"),
  value: "Siamreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Siemreap", "smart-heading"),
  value: "Siemreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sigmar One", "smart-heading"),
  value: "Sigmar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Signika", "smart-heading"),
  value: "Signika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Signika Negative", "smart-heading"),
  value: "Signika Negative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Simonetta", "smart-heading"),
  value: "Simonetta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Single Day", "smart-heading"),
  value: "Single Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sintony", "smart-heading"),
  value: "Sintony"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sirin Stencil", "smart-heading"),
  value: "Sirin Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sitara", "smart-heading"),
  value: "Sitara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Six Caps", "smart-heading"),
  value: "Six Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Skranji", "smart-heading"),
  value: "Skranji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slabo 13px", "smart-heading"),
  value: "Slabo 13px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slabo 27px", "smart-heading"),
  value: "Slabo 27px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slackey", "smart-heading"),
  value: "Slackey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Smokum", "smart-heading"),
  value: "Smokum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Smythe", "smart-heading"),
  value: "Smythe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sniglet", "smart-heading"),
  value: "Sniglet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Snippet", "smart-heading"),
  value: "Snippet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Snowburst One", "smart-heading"),
  value: "Snowburst One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sofadi One", "smart-heading"),
  value: "Sofadi One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sofia", "smart-heading"),
  value: "Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Solway", "smart-heading"),
  value: "Solway"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Song Myung", "smart-heading"),
  value: "Song Myung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sonsie One", "smart-heading"),
  value: "Sonsie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sorts Mill Goudy", "smart-heading"),
  value: "Sorts Mill Goudy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("souliyo", "smart-heading"),
  value: "souliyo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Source Code Pro", "smart-heading"),
  value: "Source Code Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Source Sans Pro", "smart-heading"),
  value: "Source Sans Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Source Serif Pro", "smart-heading"),
  value: "Source Serif Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Space Mono", "smart-heading"),
  value: "Space Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Special Elite", "smart-heading"),
  value: "Special Elite"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spectral", "smart-heading"),
  value: "Spectral"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spicy Rice", "smart-heading"),
  value: "Spicy Rice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spinnaker", "smart-heading"),
  value: "Spinnaker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spirax", "smart-heading"),
  value: "Spirax"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Squada One", "smart-heading"),
  value: "Squada One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sree Krushnadevaraya", "smart-heading"),
  value: "Sree Krushnadevaraya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sriracha", "smart-heading"),
  value: "Sriracha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Srisakdi", "smart-heading"),
  value: "Srisakdi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Staatliches", "smart-heading"),
  value: "Staatliches"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stalemate", "smart-heading"),
  value: "Stalemate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stalin One", "smart-heading"),
  value: "Stalin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stalinist One", "smart-heading"),
  value: "Stalinist One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stardos Stencil", "smart-heading"),
  value: "Stardos Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stint Ultra Condensed", "smart-heading"),
  value: "Stint Ultra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stint Ultra Expanded", "smart-heading"),
  value: "Stint Ultra Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stoke", "smart-heading"),
  value: "Stoke"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Strait", "smart-heading"),
  value: "Strait"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Strong", "smart-heading"),
  value: "Strong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stylish", "smart-heading"),
  value: "Stylish"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sue Ellen Francisco", "smart-heading"),
  value: "Sue Ellen Francisco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Suez One", "smart-heading"),
  value: "Suez One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sumana", "smart-heading"),
  value: "Sumana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sunflower", "smart-heading"),
  value: "Sunflower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sunshiney", "smart-heading"),
  value: "Sunshiney"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Supermercado One", "smart-heading"),
  value: "Supermercado One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sura", "smart-heading"),
  value: "Sura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Suranna", "smart-heading"),
  value: "Suranna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Suravaram", "smart-heading"),
  value: "Suravaram"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Suwannaphum", "smart-heading"),
  value: "Suwannaphum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Swanky and Moo Moo", "smart-heading"),
  value: "Swanky and Moo Moo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Syncopate", "smart-heading"),
  value: "Syncopate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tajawal", "smart-heading"),
  value: "Tajawal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tangerine", "smart-heading"),
  value: "Tangerine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Taprom", "smart-heading"),
  value: "Taprom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tauri", "smart-heading"),
  value: "Tauri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Taviraj", "smart-heading"),
  value: "Taviraj"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Teko", "smart-heading"),
  value: "Teko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Telex", "smart-heading"),
  value: "Telex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tenali Ramakrishna", "smart-heading"),
  value: "Tenali Ramakrishna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tenor Sans", "smart-heading"),
  value: "Tenor Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Terminal Dosis", "smart-heading"),
  value: "Terminal Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Terminal Dosis Light", "smart-heading"),
  value: "Terminal Dosis Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Me One", "smart-heading"),
  value: "Text Me One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Thabit", "smart-heading"),
  value: "Thabit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("tharlon", "smart-heading"),
  value: "tharlon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Thasadith", "smart-heading"),
  value: "Thasadith"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The Girl Next Door", "smart-heading"),
  value: "The Girl Next Door"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tienne", "smart-heading"),
  value: "Tienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tillana", "smart-heading"),
  value: "Tillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Timmana", "smart-heading"),
  value: "Timmana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tinos", "smart-heading"),
  value: "Tinos"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Titan One", "smart-heading"),
  value: "Titan One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Titillium Web", "smart-heading"),
  value: "Titillium Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Trade Winds", "smart-heading"),
  value: "Trade Winds"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Trirong", "smart-heading"),
  value: "Trirong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Trocchi", "smart-heading"),
  value: "Trocchi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Trochut", "smart-heading"),
  value: "Trochut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Trykker", "smart-heading"),
  value: "Trykker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tuffy", "smart-heading"),
  value: "Tuffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tulpen One", "smart-heading"),
  value: "Tulpen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ubuntu", "smart-heading"),
  value: "Ubuntu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ubuntu Condensed", "smart-heading"),
  value: "Ubuntu Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ubuntu Mono", "smart-heading"),
  value: "Ubuntu Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ultra", "smart-heading"),
  value: "Ultra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Uncial Antiqua", "smart-heading"),
  value: "Uncial Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Underdog", "smart-heading"),
  value: "Underdog"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Unica One", "smart-heading"),
  value: "Unica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("UnifrakturCook", "smart-heading"),
  value: "UnifrakturCook"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("UnifrakturMaguntia", "smart-heading"),
  value: "UnifrakturMaguntia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Unkempt", "smart-heading"),
  value: "Unkempt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Unlock", "smart-heading"),
  value: "Unlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Unna", "smart-heading"),
  value: "Unna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Vampiro One", "smart-heading"),
  value: "Vampiro One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Varela", "smart-heading"),
  value: "Varela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Varela Round", "smart-heading"),
  value: "Varela Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Varta", "smart-heading"),
  value: "Varta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Vast Shadow", "smart-heading"),
  value: "Vast Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Vesper Libre", "smart-heading"),
  value: "Vesper Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Vibur", "smart-heading"),
  value: "Vibur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Vidaloka", "smart-heading"),
  value: "Vidaloka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Viga", "smart-heading"),
  value: "Viga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Voces", "smart-heading"),
  value: "Voces"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Volkhov", "smart-heading"),
  value: "Volkhov"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Vollkorn", "smart-heading"),
  value: "Vollkorn"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Vollkorn SC", "smart-heading"),
  value: "Vollkorn SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Voltaire", "smart-heading"),
  value: "Voltaire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("VT323", "smart-heading"),
  value: "VT323"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Waiting for the Sunrise", "smart-heading"),
  value: "Waiting for the Sunrise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Wallpoet", "smart-heading"),
  value: "Wallpoet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Walter Turncoat", "smart-heading"),
  value: "Walter Turncoat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Warnes", "smart-heading"),
  value: "Warnes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Wellfleet", "smart-heading"),
  value: "Wellfleet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Wendy One", "smart-heading"),
  value: "Wendy One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Wire One", "smart-heading"),
  value: "Wire One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Work Sans", "smart-heading"),
  value: "Work Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yaldevi Colombo", "smart-heading"),
  value: "Yaldevi Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yanone Kaffeesatz", "smart-heading"),
  value: "Yanone Kaffeesatz"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yantramanav", "smart-heading"),
  value: "Yantramanav"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yatra One", "smart-heading"),
  value: "Yatra One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yellowtail", "smart-heading"),
  value: "Yellowtail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yeon Sung", "smart-heading"),
  value: "Yeon Sung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yeseva One", "smart-heading"),
  value: "Yeseva One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yesteryear", "smart-heading"),
  value: "Yesteryear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yinmar", "smart-heading"),
  value: "Yinmar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yrsa", "smart-heading"),
  value: "Yrsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("ZCOOL KuaiLe", "smart-heading"),
  value: "ZCOOL KuaiLe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("ZCOOL QingKe HuangYou", "smart-heading"),
  value: "ZCOOL QingKe HuangYou"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("ZCOOL XiaoWei", "smart-heading"),
  value: "ZCOOL XiaoWei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Zeyada", "smart-heading"),
  value: "Zeyada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Zhi Mang Xing", "smart-heading"),
  value: "Zhi Mang Xing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Zilla Slab Highlight", "smart-heading"),
  value: "Zilla Slab Highlight"
}];

/***/ }),

/***/ "./src/constants/fontFamily.js":
/*!*************************************!*\
  !*** ./src/constants/fontFamily.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fontFamilyLists: () => (/* binding */ fontFamilyLists)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontsfamilyNameList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontsfamilyNameList */ "./src/constants/fontsfamilyNameList.js");



// Corrected the mapping function syntax and labels
const fontFamilyLists = _fontsfamilyNameList__WEBPACK_IMPORTED_MODULE_1__["default"].map(fontFamilyList => ({
  value: fontFamilyList,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(fontFamilyList, "start-heading")
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fontFamilyLists);

/***/ }),

/***/ "./src/constants/fontsfamilyNameList.js":
/*!**********************************************!*\
  !*** ./src/constants/fontsfamilyNameList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fontsfamilyNameList = ["Default", "Baloo", "Baloo Bhai", "Baloo Bhaijaan", "Baloo Bhaina", "Baloo Chettan", "Baloo Da", "Baloo Paaji", "Baloo Tamma", "Baloo Tammudu", "Baloo Thambi", "Balthazar", "Bangers", "Barlow", "Barlow Condensed", "Barlow Semi Condensed", "Barriecito", "Barrio", "Basic", "Battambang", "Baumans", "Bayon", "Belgrano", "Bellefair", "Belleza", "BenchNine", "Bentham", "Berkshire Swash", "Beth Ellen", "Bevan", "Bhavuka", "Bigelow Rules", "Bigshot One", "Bilbo", "Bilbo Swash Caps", "Bio Rhyme", "Bio Rhyme Expanded", "Biryani", "Bitter", "Black And White Picture", "Black Han Sans", "Black Ops One", "Bokor", "Bonbon", "Boogaloo", "Bowlby One", "Bowlby One SC", "Brawler", "Bree Serif", "Bruno Ace", "Bruno Ace SC", "Bubblegum Sans", "Bubbler One", "Buda", "Buenard", "Bungee", "Bungee Hairline", "Bungee Inline", "Bungee Outline", "Bungee Shade", "Butcherman", "Butcherman Caps", "Butterfly Kids", "Cabin", "Cabin Condensed", "Cabin Sketch", "cabinvfbeta", "Caesar Dressing", "Cagliostro", "Cairo", "Calligraffitti", "Cambay", "Cambo", "Candal", "Cantarell", "Cantata One", "Cantora One", "Capriola", "Cardo", "Carme", "Carrois Gothic", "Carrois Gothic SC", "Carter One", "Catamaran", "Caudex", "Caveat", "Caveat Brush", "Cedarville Cursive", "Ceviche One", "Chakra Petch", "Changa", "Changa One", "Chango", "Charm", "Charmonman", "Chau Philomene One", "Chela One", "Chelsea Market", "Chenla", "Cherry Cream Soda", "Cherry Swash", "Chewy", "Chicle", "Chilanka", "Chivo", "Chonburi", "Cinzel", "Cinzel Decorative", "Clicker Script", "Coda", "Coda Caption", "Codystar", "Coiny", "Combo", "Comfortaa", "Coming Soon", "Concert One", "Condiment", "Content", "Contrail One", "Convergence", "Cookie", "Copse", "Corben", "Cormorant", "Cormorant Garamond", "Cormorant Infant", "Cormorant SC", "Cormorant Unicase", "Cormorant Upright", "Courgette", "Cousine", "Coustard", "Covered By Your Grace", "Crafty Girls", "Creepster", "Creepster Caps", "Crete Round", "Crimson Pro", "Crimson Text", "Croissant One", "Crushed", "Cuprum", "Cute Font", "Cutive", "Cutive Mono", "Damion", "Dancing Script", "Dangrek", "Darker Grotesque", "Dawning of a New Day", "Days One", "decovaralpha", "Dekko", "Delius", "Delius Swash Caps", "Delius Unicase", "Della Respira", "Denk One", "Devonshire", "Dhurjati", "Dhyana", "Didact Gothic", "Digital Numbers", "Diplomata", "Diplomata SC", "DM Sans", "DM Serif Display", "DM Serif Text", "Do Hyeon", "Dokdo", "Domine", "Donegal One", "Doppio One", "Dorsa", "Dosis", "Dr Sugiyama", "Duru Sans", "Dynalight", "Eagle Lake", "East Sea Dokdo", "Eater", "Eater Caps", "EB Garamond", "Economica", "Eczar", "Ek Mukta", "El Messiri", "Electrolize", "Elsie", "Elsie Swash Caps", "Emblema One", "Emilys Candy", "Encode Sans", "Encode Sans Condensed", "Encode Sans Expanded", "Encode Sans Semi Condensed", "Encode Sans Semi Expanded", "Engagement", "Englebert", "Enriqueta", "Erica One", "Esteban", "Euphoria Script", "Ewert", "Exo", "Exo 2", "Expletus Sans", "Fahkwang", "Fanwood Text", "Farro", "Farsan", "Fascinate", "Fascinate Inline", "Faster One", "Fasthand", "Fauna One", "Faustina", "faustinavfbeta", "Federant", "Federo", "Felipa", "Fenix", "Finger Paint", "Fira Code", "Fira Mono", "Fira Sans", "Fira Sans Condensed", "Fira Sans Extra Condensed", "Fjalla One", "Fjord One", "Flamenco", "Flavors", "Fondamento", "Fontdiner Swanky", "Forum", "Francois One", "Frank Ruhl Libre", "Freckle Face", "Fredericka the Great", "Fredoka One", "Freehand", "Fresca", "Frijole", "Fruktur", "Fugaz One", "Gabriela", "Gaegu", "Gafata", "Galada", "Galdeano", "Galindo", "Gamja Flower", "Gayathri", "Gemunu Libre", "Gentium Basic", "Gentium Book Basic", "Geo", "Geostar", "Geostar Fill", "Germania One", "GFS Didot", "GFS Neohellenic", "Gidugu", "Gilda Display", "Give You Glory", "Glass Antiqua", "Glegoo", "Gloria Hallelujah", "Goblin One", "Gochi Hand", "Gorditas", "Gothic A1", "Goudy Bookletter 1911", "Graduate", "Grand Hotel", "Gravitas One", "Great Vibes", "Grenze", "Griffy", "Gruppo", "Gudea", "Gugi", "Gurajada", "Habibi", "Halant", "Hammersmith One", "Hanalei", "Hanalei Fill", "Handlee", "hanna", "hannari", "Hanuman", "Happy Monkey", "Harmattan", "Headland One", "Heebo", "Henny Penny", "Hermeneus One", "Herr Von Muellerhoff", "Hi Melody", "Hind", "Hind Colombo", "Hind Guntur", "Hind Jalandhar", "Hind Kochi", "Hind Madurai", "Hind Mysuru", "Hind Siliguri", "Hind Vadodara", "Holtwood One SC", "Homemade Apple", "Homenaje", "IBM Plex Mono", "IBM Plex Sans", "IBM Plex Sans Condensed", "IBM Plex Serif", "Iceberg", "Iceland", "IM Fell Double Pica", "IM Fell Double Pica SC", "IM Fell DW Pica", "IM Fell DW Pica SC", "IM Fell English", "IM Fell English SC", "IM Fell French Canon", "IM Fell French Canon SC", "IM Fell Great Primer", "IM Fell Great Primer SC", "Imprima", "Inconsolata", "Inder", "Indie Flower", "Inika", "Inknut Antiqua", "Irish Grover", "Istok Web", "Italiana", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jaldi", "jejugothic", "jejuhallasan", "jejumyeongjo", "Jim Nightshade", "Jockey One", "Jolly Lodger", "Jomhuria", "jomolhari", "Josefin Sans", "Josefin Sans Std Light", "Josefin Slab", "Joti One", "Jua", "Judson", "Julee", "Julius Sans One", "Junge", "Jura", "Just Another Hand", "Just Me Again Down Here", "K2D", "Kadwa", "Kalam", "Kameron", "Kanit", "Kantumruy", "Karla", "Karla Tamil Inclined", "Karla Tamil Upright", "Karma", "Katibeh", "Kaushan Script", "Kavivanar", "Kavoon", "Kdam Thmor", "Keania One", "Kelly Slab", "Kenia", "Khand", "Khmer", "Khula", "khyay", "Kirang Haerang", "Kite One", "Knewave", "Kodchasan", "KoHo", "kokoro", "kopubbatang", "Kotta One", "Koulen", "Kranky", "Kreon", "Kristi", "Krona One", "Krub", "Kumar One", "Kurale", "La Belle Aurore", "Lacquer", "Laila", "Lakki Reddy", "Lalezar", "Lancelot", "laomuangdon", "laomuangkhong", "laosanspro", "Lateef", "Lato", "League Script", "Leckerli One", "Ledger", "Lekton", "Lemon", "Lemonada", "Libre Barcode 128", "Libre Barcode 128 Text", "Libre Barcode 39", "Libre Barcode 39 Extended", "Libre Barcode 39 Extended Text", "Libre Barcode 39 Text", "Libre Baskerville", "Libre Caslon Display", "Libre Caslon Text", "Libre Franklin", "Life Savers", "Lilita One", "Lily Script One", "Limelight", "Linden Hill", "Literata", "Liu Jian Mao Cao", "Livvic", "Lobster", "Lobster Two", "Lohit Bengali", "Lohit Tamil", "lohitdevanagari", "Londrina Outline", "Londrina Shadow", "Londrina Sketch", "Londrina Solid", "Long Cang", "Lora", "Love Ya Like A Sister", "Loved by the King", "Lovers Quarrel", "Luckiest Guy", "Lusitana", "Lustria", "Ma Shan Zheng", "Macondo", "Macondo Swash Caps", "Mada", "Magra", "Maiden Orange", "Maitree", "Major Mono Display", "Mako", "Mali", "Mallanna", "Mandali", "Manjari", "Manuale", "Marcellus", "Marcellus SC", "Marck Script", "Margarine", "Marko One", "Marmelad", "Martel", "Martel Sans", "Marvel", "Mate", "Mate SC", "Maven Pro", "mavenprovfbeta", "McLaren", "Meddon", "MedievalSharp", "Medula One", "Meera Inimai", "Megrim", "Meie Script", "Merge One", "Merienda", "Merienda One", "Merriweather", "Merriweather Sans", "Mervale Script", "Metal", "Metal Mania", "Metamorphous", "Metrophobic", "Miama", "Michroma", "Milonga", "Miltonian", "Miltonian Tattoo", "Mina", "Miniver", "Miriam Libre", "Miss Fajardose", "Miss Saint Delafield", "Modak", "Modern Antiqua", "Molengo", "Molle", "Monda", "Monofett", "Monoton", "Monsieur La Doulaise", "Montaga", "Montez", "Montserrat", "Montserrat Alternates", "Montserrat Subrayada", "Moul", "Moulpali", "Mountains of Christmas", "Mouse Memoirs", "mplus1p", "Mr Bedford", "Mr Bedfort", "Mr Dafoe", "Mr De Haviland", "Mrs Saint Delafield", "Mrs Sheppards", "Mukta", "Mukta Mahee", "Mukta Malar", "Mukta Vaani", "Muli", "myanmarsanspro", "Mystery Quest", "Nanum Brush Script", "Nanum Gothic", "Nanum Gothic Coding", "Nanum Myeongjo", "Nanum Pen Script", "NATS", "Neucha", "Neuton", "New Rocker", "News Cycle", "nicomoji", "Niconne", "nikukyu", "Niramit", "Nixie One", "Nobile", "Nokora", "Norican", "Nosifer", "Nosifer Caps", "Notable", "Nothing You Could Do", "Noticia Text", "Noto Sans", "Noto Serif", "notosanstamil", "Nova Cut", "Nova Flat", "Nova Mono", "Nova Oval", "Nova Round", "Nova Script", "Nova Slim", "Nova Square", "NTR", "Numans", "Nunito", "Nunito Sans", "Odor Mean Chey", "Offside", "OFL Sorts Mill Goudy TT", "Old Standard TT", "Oldenburg", "Oleo Script", "Oleo Script Swash Caps", "Open Sans", "Open Sans Condensed", "opensanshebrew", "opensanshebrewcondensed", "Oranienbaum", "Orbitron", "Oregano", "Orienta", "Original Surfer", "Oswald", "Over the Rainbow", "Overlock", "Overlock SC", "Overpass", "Overpass Mono", "Ovo", "Oxygen", "Oxygen Mono", "Pacifico", "Padauk", "Palanquin", "Palanquin Dark", "Pangolin", "Paprika", "Parisienne", "Passero One", "Passion One", "Pathway Gothic One", "Patrick Hand", "Patrick Hand SC", "Pattaya", "Patua One", "Pavanam", "Paytone One", "Pecita", "Peddana", "Peralta", "Permanent Marker", "Petit Formal Script", "Petrona", "Phetsarath", "Philosopher", "Piedra", "Pinyon Script", "Pirata One", "Plaster", "Play", "Playball", "Playfair Display", "Playfair Display SC", "Podkova", "podkovavfbeta", "Poetsen One", "Poiret One", "Poller One", "Poly", "Pompiere", "Ponnala", "Pontano Sans", "Poor Story", "Poppins", "Port Lligat Sans", "Port Lligat Slab", "Porter Sans Block", "Post No Bills Colombo", "Post No Bills Jaffna", "Pragati Narrow", "Preahvihear", "Press Start 2P", "Pridi", "Princess Sofia", "Prociono", "Prompt", "Prosto One", "Proza Libre", "PT Mono", "PT Sans", "PT Sans Caption", "PT Sans Narrow", "PT Serif", "PT Serif Caption", "Puritan", "Purple Purse", "Pushster", "Quando", "Quantico", "Quattrocento", "Quattrocento Sans", "Questrial", "Quicksand", "Quintessential", "Qwigley", "Racing Sans One", "Radley", "Rajdhani", "Rakkas", "Raleway", "Raleway Dots", "Ramabhadra", "Ramaraja", "Rambla", "Rammetto One", "Ranchers", "Rancho", "Ranga", "Rasa", "Rationale", "Ravi Prakash", "Red Hat Display", "Red Hat Text", "Redacted", "Redacted Script", "Redressed", "Reem Kufi", "Reenie Beanie", "Revalia", "Rhodium Libre", "Ribeye", "Ribeye Marrow", "Righteous", "Risque", "Roboto", "Roboto Condensed", "Roboto Mono", "Roboto Slab", "Rochester", "Rock Salt", "Rokkitt", "Romanesco", "Ropa Sans", "Rosario", "Rosarivo", "Rouge Script", "roundedmplus1c", "Rozha One", "Rubik", "Rubik Mono One", "Rubik One", "Ruda", "Rufina", "Ruge Boogie", "Ruluko", "Rum Raisin", "Ruslan Display", "Russo One", "Ruthie", "Rye", "Sacramento", "Sahitya", "Sail", "Saira", "Saira Condensed", "Saira Extra Condensed", "Saira Semi Condensed", "Saira Stencil One", "Salsa", "Sanchez", "Sancreek", "Sansation", "Sansita", "Sansita One", "Sarabun", "Sarala", "Sarina", "Sarpanch", "Satisfy", "sawarabigothic", "sawarabimincho", "Scada", "Scheherazade", "Schoolbell", "Scope One", "Seaweed Script", "Secular One", "Sedan", "Sedan SC", "Sedgwick Ave", "Sedgwick Ave Display", "seoulhangang", "seoulhangangcondensed", "seoulnamsan", "seoulnamsancondensed", "seoulnamsanvertical", "Sevillana", "Seymour One", "Shadows Into Light", "Shadows Into Light Two", "Shanti", "Share", "Share Tech", "Share Tech Mono", "Shojumaru", "Short Stack", "Shrikhand", "Siamreap", "Siemreap", "Sigmar One", "Signika", "Signika Negative", "Simonetta", "Single Day", "Sintony", "Sirin Stencil", "Sitara", "Six Caps", "Skranji", "Slabo 13px", "Slabo 27px", "Slackey", "Smokum", "Smythe", "Sniglet", "Snippet", "Snowburst One", "Sofadi One", "Sofia", "Solway", "Song Myung", "Sonsie One", "Sorts Mill Goudy", "souliyo", "Source Code Pro", "Source Sans Pro", "Source Serif Pro", "Space Mono", "Special Elite", "Spectral", "Spicy Rice", "Spinnaker", "Spirax", "Squada One", "Sree Krushnadevaraya", "Sriracha", "Srisakdi", "Staatliches", "Stalemate", "Stalin One", "Stalinist One", "Stardos Stencil", "Stint Ultra Condensed", "Stint Ultra Expanded", "Stoke", "Strait", "Strong", "Stylish", "Sue Ellen Francisco", "Suez One", "Sumana", "Sunflower", "Sunshiney", "Supermercado One", "Sura", "Suranna", "Suravaram", "Suwannaphum", "Swanky and Moo Moo", "Syncopate", "Tajawal", "Tangerine", "Taprom", "Tauri", "Taviraj", "Teko", "Telex", "Tenali Ramakrishna", "Tenor Sans", "Terminal Dosis", "Terminal Dosis Light", "Text Me One", "Thabit", "tharlon", "Thasadith", "The Girl Next Door", "Tienne", "Tillana", "Timmana", "Tinos", "Titan One", "Titillium Web", "Trade Winds", "Trirong", "Trocchi", "Trochut", "Trykker", "Tuffy", "Tulpen One", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ultra", "Uncial Antiqua", "Underdog", "Unica One", "UnifrakturCook", "UnifrakturMaguntia", "Unkempt", "Unlock", "Unna", "Vampiro One", "Varela", "Varela Round", "Varta", "Vast Shadow", "Vesper Libre", "Vibur", "Vidaloka", "Viga", "Voces", "Volkhov", "Vollkorn", "Vollkorn SC", "Voltaire", "VT323", "Waiting for the Sunrise", "Wallpoet", "Walter Turncoat", "Warnes", "Wellfleet", "Wendy One", "Wire One", "Work Sans", "Yaldevi Colombo", "Yanone Kaffeesatz", "Yantramanav", "Yatra One", "Yellowtail", "Yeon Sung", "Yeseva One", "Yesteryear", "Yinmar", "Yrsa", "ZCOOL KuaiLe", "ZCOOL QingKe HuangYou", "ZCOOL XiaoWei", "Zeyada", "Zhi Mang Xing", "Zilla Slab Highlight"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fontsfamilyNameList);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _constants_fontFamily__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/fontFamily */ "./src/constants/fontFamily.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");





/**
 * Internal depencencies
 */


// Importing only fontFamilyLists



function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    blockID,
    text,
    tag,
    text_color,
    background_color,
    align,
    separator,
    sub_heading_switcher,
    show_separator_switcher,
    sub_heading_text,
    sub_heading_tag,
    seperatorPosition,
    subheadingPosition,
    fontFamily
  } = attributes;
  setAttributes({
    blockID: "smart_headings-" + clientId.slice(0, 8)
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();

  // Define a variable to hold the separator styles based on separator

  const separatorStyles = show_separator_switcher ? {
    display: 'inline-block',
    margin: '0 0 10px 0',
    width: '12%',
    borderTop: `2px ${separator} #0170b9`,
    marginBottom: '15px'
  } : {};

  /* set default values for the style attributes */
  const elementRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.createRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!fontFamily) {
      let defaultFontFamily = window.getComputedStyle(elementRef.current).fontFamily;
      setAttributes({
        fontFamily: defaultFontFamily
      });
    }
  }, [elementRef]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sh-panel-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "sh-parent-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "general",
      title: "General",
      className: "sh-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "sh-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "sh-tab advance"
    }]
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sh-tab-controls" + tab.name
  }, tab.name === 'general' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sh-heading-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading", "smart-heading"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "smart-heading"),
    id: "smart-heading-alignment"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TEXT_ALIGN.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: key,
    onClick: () => setAttributes({
      align: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading Tag", "smart-heading"),
    id: "smart-heading-title-level"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "smart-heading-alignment sh-html-tag-buttongroup"
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.HEADING.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: key,
    onClick: () => setAttributes({
      tag: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Text", "smart-heading"),
    value: text,
    onChange: value => setAttributes({
      text: value
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sh-sub-heading-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sub Heading", "smart-heading"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Sub Heading", "smart-heading"),
    checked: sub_heading_switcher,
    onChange: value => setAttributes({
      sub_heading_switcher: value
    })
  }), sub_heading_switcher && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "smart-sub-heading-position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sub Heading Position", "smart-heading"),
    value: subheadingPosition,
    options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.subheading_POSITION,
    onChange: value => setAttributes({
      subheadingPosition: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sub Heading Tag", "smart-heading"),
    id: "sh-smart-sub-heading-tag"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "sh-smart-sub-heading-tag sh-html-tag-buttongroup"
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.HEADING.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: key,
    onClick: () => setAttributes({
      sub_heading_tag: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sub Heading Text", "smart-heading"),
    value: sub_heading_text,
    onChange: value => setAttributes({
      sub_heading_text: value
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sh-separator-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator", "smart-heading"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Separator", "smart-heading"),
    checked: show_separator_switcher,
    onChange: value => setAttributes({
      show_separator_switcher: value
    })
  }), show_separator_switcher && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "smart-separator-position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator Position", "smart-heading"),
    value: seperatorPosition,
    options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.separator_POSITION,
    onChange: value => setAttributes({
      seperatorPosition: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "smart-separator-style"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator Style", "smart-heading"),
    value: separator,
    options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.SEPERATOR_STYLES,
    onChange: value => setAttributes({
      separator: value
    })
  })))))), tab.name === "styles" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "smart-heading"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Family", "smart-heading"),
    options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FONT_FAMILYS,
    value: fontFamily,
    onChange: value => setAttributes({
      fontFamily: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-heading'),
    enableAlpha: true,
    colorSettings: [{
      value: text_color,
      onChange: value => setAttributes({
        text_color: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'smart-heading')
    }, {
      value: background_color,
      onChange: value => setAttributes({
        background_color: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'smart-heading')
    }],
    colors: [{
      name: 'White',
      color: '#ffffff'
    }, {
      name: 'Red',
      color: '#ff0000'
    }, {
      name: 'Green',
      color: '#00ff00'
    }, {
      name: 'Blue',
      color: '#0000ff'
    }, {
      name: 'Yellow',
      color: '#ffff00'
    }, {
      name: 'Orange',
      color: '#ffa500'
    }]
  }))), tab.name === "advance" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Advanced settings")))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: align,
    onChange: value => setAttributes({
      align: value
    }),
    controls: ['left', 'center', 'right', 'justify']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    id: blockID
  }, show_separator_switcher && seperatorPosition === "top" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `smart-title-separator`,
    style: {
      ...separatorStyles,
      textAlign: align
    }
  }), sub_heading_switcher && subheadingPosition === 'top' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: sub_heading_tag,
    value: sub_heading_text,
    onChange: value => setAttributes({
      sub_heading_text: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sub heading...', 'smart-heading'),
    style: {
      textAlign: align
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("link", {
    rel: "stylesheet",
    href: `https://fonts.googleapis.com/css?family=${fontFamily.replace(' ', '+')}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    ref: elementRef,
    tagName: tag,
    value: text,
    onChange: value => setAttributes({
      text: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading...', 'smart-heading'),
    style: {
      color: text_color,
      backgroundColor: background_color,
      textAlign: align,
      fontFamily: fontFamily
    }
  }), sub_heading_switcher && subheadingPosition === 'bottom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: sub_heading_tag,
    value: sub_heading_text,
    onChange: value => setAttributes({
      sub_heading_text: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sub heading...', 'smart-heading'),
    style: {
      textAlign: align
    }
  }), show_separator_switcher && seperatorPosition === "bottom" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `smart-title-separator`,
    style: {
      ...separatorStyles,
      textAlign: align
    }
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes.js */ "./src/attributes.js");



/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: _attributes_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    text,
    tag,
    text_color,
    background_color,
    align,
    separator,
    sub_heading_switcher,
    show_separator_switcher,
    sub_heading_text,
    sub_heading_tag,
    seperatorPosition,
    subheadingPosition,
    fontFamily
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  const separatorStyles = show_separator_switcher ? {
    display: 'inline-block',
    margin: '0 0 10px 0',
    width: '12%',
    borderTop: `2px ${separator} #0170b9`,
    marginBottom: '15px'
  } : {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, show_separator_switcher && seperatorPosition === "top" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      ...separatorStyles,
      textAlign: align
    }
  }), sub_heading_switcher && subheadingPosition === 'top' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: sub_heading_tag,
    value: sub_heading_text,
    style: {
      textAlign: align,
      fontFamily: fontFamily // Apply fontFamily here
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: tag,
    value: text,
    style: {
      color: text_color,
      backgroundColor: background_color,
      textAlign: align,
      fontFamily: fontFamily // Apply fontFamily here
    },
    className: "smart-heading"
  }), sub_heading_switcher && subheadingPosition === 'bottom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: sub_heading_tag,
    value: sub_heading_text,
    style: {
      textAlign: align,
      fontFamily: fontFamily // Apply fontFamily here
    }
  }), show_separator_switcher && seperatorPosition === "bottom" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      ...separatorStyles,
      textAlign: align
    }
  })));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/smart-heading","version":"0.1.0","title":"Smart Heading","category":"text","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"smart-heading","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksmart_heading"] = globalThis["webpackChunksmart_heading"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map