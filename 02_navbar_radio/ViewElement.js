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
        if (!this.div) return
        parent.appendChild(this.div);
    }

    /**
     *
     * @param {string} id
     */
    activate(id){
        if (this.#id === id){
            this.div.classList.remove("hidden");
        }
        else {
            this.div.classList.add("hidden");
        }
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
     * @type {HTMLInputElement[]}
     */
    #buttonList

    /**
     *
     * @param {string} id
     */
    constructor(id) {
        super(id);
        this.#viewElementList = [];
        this.#buttonList = [];
    }

    /**
     *
     * @param {string} label
     * @param {ViewElement} viewElement
     */
    addViewElement(label, viewElement){
        if (!this.#viewElementList) return;
        this.#viewElementList.push(viewElement);
        viewElement.appendTo(document.body);
        const tab = document.createElement("div");
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.id = viewElement.id;
        radioButton.name
        radioButton.value = viewElement.id;
        const l = document.createElement("label");
        l.innerText = label;
        l.htmlFor = viewElement.id;
        tab.appendChild(radioButton);
        tab.appendChild(l);


        this.#buttonList.push(radioButton);
        radioButton.addEventListener("change", (e) => {
            const rButtonValue = e.target.value;
            this.activate(rButtonValue);
        })
        this.div.appendChild(tab);
    }

    activate(id) {
        for (const element of this.#viewElementList) {
            element.activate(id);
        }
        for (const button of this.#buttonList){
            button.checked = button.id === id;
        }
    }
}