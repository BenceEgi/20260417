/**
 * @callback RenderCallback
 * @param {Color[]} colorList
 * @return {void}
 */
export class Manager{
    /**
     * @type {Color[]}
     */
    #colorList
    /**
     * @type {RenderCallback}
     */
    #renderCallback

    /**
     *
     * @param {RenderCallback} callback
     */
    set renderCallback(callback){
        this.#renderCallback = callback
    }

    /**
     *
     * @param {Color[]} data
     */
    constructor(data) {
        this.#colorList = data;
    }

    getAllElement(){
        this.#renderCallback(this.#colorList)
    }

    /**
     *
     * @param {Color} color
     */
    addElement(color){
        this.#colorList.push(color);
    }
}
