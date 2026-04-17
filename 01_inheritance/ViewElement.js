export class ParentViewElementClass{
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
     * @param {string} id
     */
    constructor(id) {
        this.#id = id;
        this.#div = document.createElement("div");
        this.div.classList.add("card");
    }

    /**
     *
     * @param {HTMLElement} parent
     */
    appendTo(parent){
        if (this.#div) parent.appendChild(this.div);
    }
}

export class ChildA extends ParentViewElementClass{
    /**
     *
     * @param {string} id
     */
    constructor(id) {
        super(id);
        const idDiv = document.createElement("div");
        idDiv.innerText = `id: ${id}`;
        idDiv.classList.add("head");
        const nameDiv = document.createElement("div");
        nameDiv.innerText = `childA`
        this.div.appendChild(idDiv);
        this.div.appendChild(nameDiv);
    }
}

export class ChildB extends ParentViewElementClass{
    /**
     *
     * @param {string} id
     */
    constructor(id) {
        super(id);
        const idDiv = document.createElement("div");
        idDiv.innerText = `id: ${id}`;
        idDiv.classList.add("head");
        const nameDiv = document.createElement("div");
        nameDiv.innerText = `childB`
        this.div.appendChild(idDiv);
        this.div.appendChild(nameDiv);
    }
}