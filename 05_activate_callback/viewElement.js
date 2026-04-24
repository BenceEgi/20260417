import {Manager} from "./manager.js";

/**
 * @callback ActivateCallback
 * @return {void}
 */

export class ViewElement{
    /**
     * @type {string}
     */
    #id
    /**
     * @type {HTMLDivElement}
     */
    #div
    /**
     * @type {ActivateCallback}
     */
    #activateCallback

    /**
     *
     * @param {ActivateCallback} callback
     */
    set activateCallback(callback){
        this.#activateCallback = callback
    }

    /**
     *
     * @return {HTMLDivElement}
     */
    get div(){
        return this.#div
    }

    /**
     *
     * @return {string}
     */
    get id(){
        return this.#id
    }

    /**
     * @type {string}
     * @param id
     */
    constructor(id) {
        this.#id = id;
        this.#div = document.createElement("div");
    }

    /**
     *
      * @param {HTMLElement} parent
     */
    appendTo(parent){
        parent.appendChild(this.div);
    }

    navigate(){
        if (this.#activateCallback) this.#activateCallback();
    }
}

export class Table extends ViewElement{
    /**
     * @type {Manager}
     */
    #manager

    /**
     *
     * @param {Manager} manager
     */
    constructor(manager) {
        super("table");
        this.#manager = manager;

        this.activateCallback = () => {
            console.log("call");
            this.#manager.getAllElement();
        }

        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const th = document.createElement("th");
        th.innerText = "Elemek";
        thead.appendChild(th);
        table.appendChild(thead);
        table.appendChild(tbody)
        this.div.appendChild(table);
        this.#manager.renderCallback = (colorList) => {
            tbody.innerHTML = "";
            if (!colorList) {
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerText = "empty";
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
            else {
                for (const color of colorList){
                    const tr = document.createElement("tr");
                    const td = document.createElement("td");
                    td.innerText = color.szin;
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                }
            }
        }
    }
}

export class Gomb extends ViewElement{
    /**
     * @type {Manager}
     */
    #manager

    constructor(manager) {
        super("gomb")
        this.#manager = manager;

        const button = document.createElement("button");
        button.innerText = "add new  Element";
        button.addEventListener("click", (e) => {
            this.#manager.addElement({szin: "okker"});
        });
        this.div.appendChild(button);
        this.appendTo(document.body);
    }
}

export class NavBar extends ViewElement{
    /**
     * @type {ViewElement[]}
     */
    #viewElementList

    /**
     * @type {HTMLDivElement}
     */
    #buttonBar

    /**
     * @type {HTMLDivElement}
     */
    #viewContainer

    constructor() {
        super("navbar");
        this.#viewElementList = [];
        this.#buttonBar = document.createElement("div");
        this.#buttonBar.classList.add("buttonbar");
        this.#viewContainer = document.createElement("div");
        this.div.appendChild(this.#buttonBar);
        this.div.appendChild(this.#viewContainer);
        this.appendTo(document.body);
    }

    /**
     *
     * @param {string} label
     * @param {ViewElement} viewElement
     */
    addViewElement(label, viewElement){
        this.#viewElementList.push(viewElement);
        const button = document.createElement("button");
        button.id = `button_${viewElement.id}`;
        button.innerText = label;
        button.addEventListener("click", (e) => {
            this.#viewContainer.innerHTML = "";
            viewElement.appendTo(this.#viewContainer);
            console.log(viewElement.id);
            this.navigate(viewElement.id);
            this.#buttonBar
                .querySelectorAll('[id^="button_"]')
                .forEach((button) => {button.classList.remove("active")});
            e.target.classList.add("active");
        })

        this.#buttonBar.appendChild(button);
    }

    /**
     *
     * @param {string} id
     */
    navigate(id) {
        for (const element of this.#viewElementList){
            if (element.id === id){
                element.navigate()
            }
        }

        /**
         *
         * @type {HTMLButtonElement}
         */
        const button = this.#buttonBar.querySelector(`#button_${id}`);
        if (button) button.click();
    }
}