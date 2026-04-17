import {NavBar, ClassA, ClassB} from "./ViewElement.js";

const A = new ClassA("classA");
const B = new ClassB("classB");

const navBar = new NavBar("navbar");
navBar.appendTo(document.body)
navBar.addViewElement("classA", A);
navBar.addViewElement("classB", B);
navBar.activate("classA");