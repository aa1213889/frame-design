import { renderer } from './renderer.js'

/*3. */
export function mountElement(vnode, container) {
    const el = document.createElement(vnode.tag)
    for (const key in vnode.props) {
        if (/^on/.test(key)) {
            /*添加监听事件 */
            el.addEventListener(key.substring(2).toLowerCase(), vnode.props[key])
        } else {
            /*添加dom属性 */
            el.setAttribute(key, vnode.props[key])
        }
    }

    if (typeof vnode.children === 'string') {
        /*如果是文本节点... */
        el.appendChild(document.createTextNode(vnode.children))
    } else if (Array.isArray(vnode.children)) {
        /*该节点是数组 则继续压栈 */
        vnode.children.map(child => renderer(child, el))
    }

    container.appendChild(el)
}