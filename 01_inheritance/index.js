import {ChildB, ChildA} from "./ViewElement.js";

const a = new ChildA("child");
a.appendTo(document.body);
const b = new ChildB("childB");
b.appendTo(document.body);