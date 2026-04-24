import {Manager, Color} from "./Manager.js";
import {TableElement, ButtonElement, EmptyButtonElement} from "./view_element.js";

const manager = new Manager([new Color("red"), new Color("blue")]);
new ButtonElement(manager);
new EmptyButtonElement(manager);
new TableElement(manager);
new TableElement(manager);