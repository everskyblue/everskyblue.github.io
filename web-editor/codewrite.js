import 'https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js'
import domeditor from './domeditor.js'

if (!window.$) {
    window.$ = selector => document.querySelector(selector);
}

export class CodeWrite {
    constructor(containerdom) {
        this.domeditor = domeditor.domEditor(containerdom);
    }
}