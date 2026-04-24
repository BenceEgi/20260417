/**
 * @callback RenderCallback
 * @param {Color[]} colorList
 * @return {void}
 */

export class Manager{
    /**
     * @type {Color[]}
     */
    #colors
    /**
     * @type {RenderCallback}
     */
    #renderCallback

    /**
     *
     * @param {RenderCallback} callback
     */
    set renderCallback(callback){
        this.#renderCallback = callback;
    }

    /**
     *
     * @param {Color[]} data
     */
    constructor(data) {
        this.#colors = data;
    }

    getEmptyList(){
        this.#renderCallback([]);
    }

    getAllElement(){
        this.#renderCallback(this.#colors);
    }
}

export class Color{
    /**
     *@type {string}
     */
    color

    /**
     *
      * @param {string} color
     */
    constructor(color) {
        this.color = color;
    }
}