import {Manager} from "./Manager.js";

export class ViewElement{
    /**
     * @type {HTMLDivElement}
     */
    #div
    /**
     * @type {Manager}
     */
    #manager

    /**
     *
     * @param {Manager} manager
     */
    constructor(manager) {
        this.#manager = manager;
        this.#div = document.createElement("div");
    }

    /**
     *
     * @param {HTMLElement} parent
     */
    appendTo(parent){
        parent.appendChild(this.#div);
    }

    /**
     *
     * @returns {Manager}
     */
    get manager(){
        return this.#manager
    }

    /**
     *
     * @returns {HTMLDivElement}
     */
    get div(){
        return this.#div
    }
}

export class TableElement extends ViewElement{
    /**
     *
     * @param {Manager} manager
     */
    constructor(manager) {
        super(manager);
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const th = document.createElement("th");
        th.innerText = "Elemek";
        thead.appendChild(th);
        table.appendChild(thead);
        table.appendChild(tbody)
        manager.renderCallback = (colorList) => {
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
                    td.innerText = color.color;
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                }
            }
        }

        this.div.appendChild(table);
        this.appendTo(document.body);
    }
}

export class ButtonElement extends ViewElement{
    /**
     * @type {HTMLButtonElement}
     */
    #button

    /**
     *
     * @param {Manager} manager
     */
    constructor(manager) {
        super(manager);

        this.#button = document.createElement("button");
        this.#button.innerText = "show elements"
        this.#button.addEventListener("click", (e) => {
            manager.getAllElement();
        })
        this.div.appendChild(this.#button);
        this.appendTo(document.body)
    }
}

export class EmptyButtonElement extends ViewElement{
    /**
     * @type {HTMLButtonElement}
     */
    #button

    /**
     *
     * @param {Manager} manager
     */
    constructor(manager) {
        super(manager);

        this.#button = document.createElement("button");
        this.#button.innerText = "show empty table"
        this.#button.addEventListener("click", (e) => {
            manager.getEmptyList();
        })
        this.div.appendChild(this.#button);
        this.appendTo(document.body)
    }
}