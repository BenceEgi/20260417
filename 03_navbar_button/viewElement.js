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
     *
     * @returns {HTMLDivElement}
     */
    get div(){
        return this.#div
    }

    /**
     *
     * @returns {string}
     */
    get id(){
        return this.#id
    }

    /**
     *
     * @param {string} id
     */
    constructor(id) {
        this.#id = id;
        this.#div = document.createElement("div");
        this.#div.id = id;
    }

    /**
     *
     * @param {HTMLElement} parent
     */
    appendTo(parent){
        if (this.#div) parent.appendChild(this.div);
    }
}

export class ClassA extends ViewElement{
    /**
     *
     * @param {string} id
     */
    constructor(id) {
        super(id);
        this.div.innerText = this.id;
    }
}

export class ClassB extends ViewElement{
    /**
     *
     * @param {string} id
     */
    constructor(id) {
        super(id);
        this.div.innerText = this.id;
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

    /**
     *
     * @param {string} id
     */
    constructor(id) {
        super(id);
        this.#viewElementList = [];
        this.#viewContainer = document.createElement("div");
        this.#buttonBar = document.createElement("div");
        this.#buttonBar.classList.add("buttonbar");
        this.#viewContainer.innerText = "Válassz!";

        this.div.appendChild(this.#buttonBar);
        this.div.appendChild(this.#viewContainer);
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
    navigate(id){
        /**
         *
         * @type {HTMLButtonElement}
         */
        const button = this.#buttonBar.querySelector(`#button_${id}`);
        button.click();
    }
}