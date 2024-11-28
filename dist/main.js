/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start.js */ \"./src/start.js\");\n\n\n\n\nconst menuButton = document.getElementById(\"menu\");\nconst startButton = document.getElementById(\"start\");\n\n\n//Speichert den DOM-Content von \"content\"\nconst content = document.querySelector('#content').innerHTML;\n\nmenuButton.addEventListener(\"click\", () => {\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.getMenu)();\n    const drinksButton = document.getElementById(\"drinks\");\n    drinksButton.addEventListener(\"click\", () => {\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.getDrinks)();\n    });\n    const mealsButton = document.getElementById(\"meals\");\n    mealsButton.addEventListener(\"click\", () => {\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.getMenu)();\n    });\n\n})\n\n\n\n\nstartButton.addEventListener(\"click\", () => {\n    ;(0,_start_js__WEBPACK_IMPORTED_MODULE_2__.getStart)();\n    document.querySelector('#content').innerHTML = content;\n})\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0I7QUFDdUI7QUFDVDs7QUFFcEM7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQU87QUFDWDtBQUNBO0FBQ0EsUUFBUSxtREFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEsaURBQU87QUFDZixLQUFLOztBQUVMLENBQUM7Ozs7O0FBS0Q7QUFDQSxJQUFJLG9EQUFRO0FBQ1o7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHtnZXRNZW51LCBnZXREcmlua3N9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7Z2V0U3RhcnR9IGZyb20gXCIuL3N0YXJ0LmpzXCI7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG5cblxuLy9TcGVpY2hlcnQgZGVuIERPTS1Db250ZW50IHZvbiBcImNvbnRlbnRcIlxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2V0TWVudSgpO1xuICAgIGNvbnN0IGRyaW5rc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJpbmtzXCIpO1xuICAgIGRyaW5rc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBnZXREcmlua3MoKTtcbiAgICB9KTtcbiAgICBjb25zdCBtZWFsc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVhbHNcIik7XG4gICAgbWVhbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZ2V0TWVudSgpO1xuICAgIH0pO1xuXG59KVxuXG5cblxuXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdldFN0YXJ0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBjb250ZW50O1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDrinks: () => (/* binding */ getDrinks),\n/* harmony export */   getMenu: () => (/* binding */ getMenu)\n/* harmony export */ });\n\nfunction getMenu() {\n\n    const deleteContainer = document.getElementById(\"content\");\n    deleteContainer.remove();\n    const contentDiv = document.createElement(\"div\");\n    contentDiv.id = \"content\";\n    contentDiv.classList.add(\"contentGridMenu\");\n    const header = document.getElementById(\"header\");\n    header.insertAdjacentElement(\"afterend\", contentDiv);\n    contentDiv.textContent =\"\";\n    document.querySelector('#content').innerHTML = `\n    <div id=\"menuTitle\">Menu</div>\n    <div id=\"menuBox\">\n        <div id=\"eatordrink\">\n            <div id=\"meals\">Meals</div>\n            <div id=\"drinks\">Drinks</div>\n        </div>\n        <div id=\"pizzaHeader\">Pizza</div>\n            <div id=\"pizzaToEat\" class=\"lastIngredient\">\n                <p id=\"pizzaTitles\">Salami</p>\n                <p id=\"ingredients\">Tomato Sauce, Cheese, Salami, Oregano, Olive Oil, Fresh Herbs <br> 11$</p>\n                <p id=\"pizzaTitles\">Margherita</p>\n                <p id=\"ingredients\">Tomato Sauce, Mozzarella, Fresh Basil Leaves, Olive Oil, Garlic <br>8$</p>\n                <p id=\"pizzaTitles\">Vegan</p>\n                <p id=\"ingredients\">Tomato Sauce, Vegan Cheese, Spinach, Olive Oil, Garlic, Herbs <br>9$</p>\n            </div>\n        <div id=\"saladHeader\">Salad</div>\n        <div id=\"pizzaToEat\">\n            <p id=\"pizzaTitles\">Caesar Salad</p>\n            <p id=\"ingredients\">Romaine Lettuce, Caesar Dressing, Croutons, Grated Parmesan Cheese, Grilled Chickem<br>6$</p>\n            <p id=\"pizzaTitles\">Mediterranean Salad</p>\n            <p id=\"ingredients\">Mixed Greens, Cherry Tomatoes, Cucumber, Kalamata Olives, Feta Cheese<br>7$</p>\n        </div>\n    </div>\n</div>`;\nconst drinksButton = document.getElementById(\"drinks\");\ndrinksButton.addEventListener(\"click\", () => {\n    getDrinks();\n});\n}\n\nfunction getDrinks() {\n\n    const deleteContainer = document.getElementById(\"content\");\n    deleteContainer.remove();\n    const contentDiv = document.createElement(\"div\");\n    contentDiv.id = \"content\";\n    contentDiv.classList.add(\"contentGridMenu\");\n    const header = document.getElementById(\"header\");\n    header.insertAdjacentElement(\"afterend\", contentDiv);\n    contentDiv.textContent =\"\";\n    console.log(\"test\");\n    document.querySelector('#content').innerHTML = `\n    <div id=\"menuTitle\">Menu</div>\n    <div id=\"menuBox\">\n        <div id=\"eatordrink\">\n            <div id=\"meals\">Meals</div>\n            <div id=\"drinks\">Drinks</div>\n        </div>\n        <div id=\"pizzaHeader\">Non-Alcoholic</div>\n            <div id=\"pizzaToEat\" class=\"lastIngredient\">\n                <p id=\"pizzaTitles\">Softdrinks</p>\n                <p id=\"ingredients\">Cola, Fanta, Sprite <br> 2$</p>\n                <p id=\"pizzaTitles\">Homemade Lemonade</p>\n                <p id=\"ingredients\">Freshly Squeezed Lemons, Mint Leaves, Lemon Slices <br>3$</p>\n                <p id=\"pizzaTitles\">Fruit Juices</p>\n                <p id=\"ingredients\">Apple, Orange, Grape <br> 2$</p>\n                <p id=\"pizzaTitles\">Water</p>\n                <p id=\"ingredients\">Still Or Sparkling<br> 1$</p>\n            </div>\n        <div id=\"saladHeader\">Alcohol</div>\n        <div id=\"pizzaToEat\">\n            <p id=\"pizzaTitles\">Beer</p>\n            <p id=\"ingredients\">Lager, Ale, Guinness<br>3$</p>\n            <p id=\"pizzaTitles\">Wine</p>\n            <p id=\"ingredients\">Merlot, Chardonnay, Champagne<br>4$</p>\n            <p id=\"pizzaTitles\">Cocktails</p>\n            <p id=\"ingredients\">Margarita, Martini, Mojito, Bloody Mary<br>7$</p>\n        </div>\n    </div>\n</div>`;\nconst mealsButton = document.getElementById(\"meals\");\nmealsButton.addEventListener(\"click\", () => {\n    getMenu();\n});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnUoKSB7XG5cbiAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgZGVsZXRlQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnREaXYuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50R3JpZE1lbnVcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGNvbnRlbnREaXYpO1xuICAgIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPVwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBpZD1cIm1lbnVUaXRsZVwiPk1lbnU8L2Rpdj5cbiAgICA8ZGl2IGlkPVwibWVudUJveFwiPlxuICAgICAgICA8ZGl2IGlkPVwiZWF0b3Jkcmlua1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lYWxzXCI+TWVhbHM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkcmlua3NcIj5Ecmlua3M8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwaXp6YUhlYWRlclwiPlBpenphPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGl6emFUb0VhdFwiIGNsYXNzPVwibGFzdEluZ3JlZGllbnRcIj5cbiAgICAgICAgICAgICAgICA8cCBpZD1cInBpenphVGl0bGVzXCI+U2FsYW1pPC9wPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwiaW5ncmVkaWVudHNcIj5Ub21hdG8gU2F1Y2UsIENoZWVzZSwgU2FsYW1pLCBPcmVnYW5vLCBPbGl2ZSBPaWwsIEZyZXNoIEhlcmJzIDxicj4gMTEkPC9wPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwicGl6emFUaXRsZXNcIj5NYXJnaGVyaXRhPC9wPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwiaW5ncmVkaWVudHNcIj5Ub21hdG8gU2F1Y2UsIE1venphcmVsbGEsIEZyZXNoIEJhc2lsIExlYXZlcywgT2xpdmUgT2lsLCBHYXJsaWMgPGJyPjgkPC9wPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwicGl6emFUaXRsZXNcIj5WZWdhbjwvcD5cbiAgICAgICAgICAgICAgICA8cCBpZD1cImluZ3JlZGllbnRzXCI+VG9tYXRvIFNhdWNlLCBWZWdhbiBDaGVlc2UsIFNwaW5hY2gsIE9saXZlIE9pbCwgR2FybGljLCBIZXJicyA8YnI+OSQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInNhbGFkSGVhZGVyXCI+U2FsYWQ8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInBpenphVG9FYXRcIj5cbiAgICAgICAgICAgIDxwIGlkPVwicGl6emFUaXRsZXNcIj5DYWVzYXIgU2FsYWQ8L3A+XG4gICAgICAgICAgICA8cCBpZD1cImluZ3JlZGllbnRzXCI+Um9tYWluZSBMZXR0dWNlLCBDYWVzYXIgRHJlc3NpbmcsIENyb3V0b25zLCBHcmF0ZWQgUGFybWVzYW4gQ2hlZXNlLCBHcmlsbGVkIENoaWNrZW08YnI+NiQ8L3A+XG4gICAgICAgICAgICA8cCBpZD1cInBpenphVGl0bGVzXCI+TWVkaXRlcnJhbmVhbiBTYWxhZDwvcD5cbiAgICAgICAgICAgIDxwIGlkPVwiaW5ncmVkaWVudHNcIj5NaXhlZCBHcmVlbnMsIENoZXJyeSBUb21hdG9lcywgQ3VjdW1iZXIsIEthbGFtYXRhIE9saXZlcywgRmV0YSBDaGVlc2U8YnI+NyQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcbmNvbnN0IGRyaW5rc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJpbmtzXCIpO1xuZHJpbmtzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2V0RHJpbmtzKCk7XG59KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERyaW5rcygpIHtcblxuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBkZWxldGVDb250YWluZXIucmVtb3ZlKCk7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudERpdi5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRHcmlkTWVudVwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgY29udGVudERpdik7XG4gICAgY29udGVudERpdi50ZXh0Q29udGVudCA9XCJcIjtcbiAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBpZD1cIm1lbnVUaXRsZVwiPk1lbnU8L2Rpdj5cbiAgICA8ZGl2IGlkPVwibWVudUJveFwiPlxuICAgICAgICA8ZGl2IGlkPVwiZWF0b3Jkcmlua1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lYWxzXCI+TWVhbHM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkcmlua3NcIj5Ecmlua3M8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwaXp6YUhlYWRlclwiPk5vbi1BbGNvaG9saWM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwaXp6YVRvRWF0XCIgY2xhc3M9XCJsYXN0SW5ncmVkaWVudFwiPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwicGl6emFUaXRsZXNcIj5Tb2Z0ZHJpbmtzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwiaW5ncmVkaWVudHNcIj5Db2xhLCBGYW50YSwgU3ByaXRlIDxicj4gMiQ8L3A+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJwaXp6YVRpdGxlc1wiPkhvbWVtYWRlIExlbW9uYWRlPC9wPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwiaW5ncmVkaWVudHNcIj5GcmVzaGx5IFNxdWVlemVkIExlbW9ucywgTWludCBMZWF2ZXMsIExlbW9uIFNsaWNlcyA8YnI+MyQ8L3A+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJwaXp6YVRpdGxlc1wiPkZydWl0IEp1aWNlczwvcD5cbiAgICAgICAgICAgICAgICA8cCBpZD1cImluZ3JlZGllbnRzXCI+QXBwbGUsIE9yYW5nZSwgR3JhcGUgPGJyPiAyJDwvcD5cbiAgICAgICAgICAgICAgICA8cCBpZD1cInBpenphVGl0bGVzXCI+V2F0ZXI8L3A+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJpbmdyZWRpZW50c1wiPlN0aWxsIE9yIFNwYXJrbGluZzxicj4gMSQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInNhbGFkSGVhZGVyXCI+QWxjb2hvbDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicGl6emFUb0VhdFwiPlxuICAgICAgICAgICAgPHAgaWQ9XCJwaXp6YVRpdGxlc1wiPkJlZXI8L3A+XG4gICAgICAgICAgICA8cCBpZD1cImluZ3JlZGllbnRzXCI+TGFnZXIsIEFsZSwgR3Vpbm5lc3M8YnI+MyQ8L3A+XG4gICAgICAgICAgICA8cCBpZD1cInBpenphVGl0bGVzXCI+V2luZTwvcD5cbiAgICAgICAgICAgIDxwIGlkPVwiaW5ncmVkaWVudHNcIj5NZXJsb3QsIENoYXJkb25uYXksIENoYW1wYWduZTxicj40JDwvcD5cbiAgICAgICAgICAgIDxwIGlkPVwicGl6emFUaXRsZXNcIj5Db2NrdGFpbHM8L3A+XG4gICAgICAgICAgICA8cCBpZD1cImluZ3JlZGllbnRzXCI+TWFyZ2FyaXRhLCBNYXJ0aW5pLCBNb2ppdG8sIEJsb29keSBNYXJ5PGJyPjckPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG5jb25zdCBtZWFsc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVhbHNcIik7XG5tZWFsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdldE1lbnUoKTtcbn0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStart: () => (/* binding */ getStart)\n/* harmony export */ });\nfunction getStart() {\n\n    const deleteContainer = document.getElementById(\"content\");\n    deleteContainer.remove();\n    const contentDiv = document.createElement(\"div\");\n    contentDiv.id = \"content\";\n    contentDiv.classList.add(\"contentGridStart\");\n    const header = document.getElementById(\"header\");\n    header.insertAdjacentElement(\"afterend\", contentDiv);\n    contentDiv.textContent =\"\";\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhcnQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3RhcnQuanM/OWRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0U3RhcnQoKSB7XG5cbiAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgZGVsZXRlQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnREaXYuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50R3JpZFN0YXJ0XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBjb250ZW50RGl2KTtcbiAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID1cIlwiO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/start.js\n");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> @font-face {\n|     font-family: 'legothictype';\n|     src: url('./Fonts/legothick-webfont.woff2') format('woff2'),");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;