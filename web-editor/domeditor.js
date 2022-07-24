
/**
 * 
 * @param {string} e tag name
 * @param {object|string} attrs attributes node
 * @returns {HTMLElement}
 */
const e = (e, attrs) => {
    const node = document.createElement(e);
    if (typeof attrs === 'string') {
        attrs = {class: attrs};
    }
    for (const key in attrs) {
        node.setAttribute(key, attrs[key]);
    }
    return node;
}

export default {
    domLineNumber() {
        const container = e('div', 'codewrite-container-linenumbers');
        const content = e('div', 'codewrite-content-linenumbers');
        container.appendChild(content);
    },
    domEditor(wrapper) {
        const container = e('div', 'codewrite-container-editor');
        const adjust_editor = e('div', 'codewrite-adjustwidth-editor');
        const content = e('div', 'codewrite-content-editor');
        adjust_editor.appendChild(content);
        container.appendChild(adjust_editor);
        wrapper.appendChild(container)
    }
}