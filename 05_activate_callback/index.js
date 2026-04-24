/**
 * @typedef {{color: string}} Color
 */

import {Manager} from "./manager.js";
import {Table, NavBar, Gomb} from "./viewElement.js";
import data from "./data.json" with {"type": "json"};

const manager = new Manager(data.arr);
const table = new Table(manager);
const gomb = new Gomb(manager);
const navBar = new NavBar(manager);

navBar.addViewElement("add Element", gomb);
navBar.addViewElement("table", table);

navBar.navigate("table");