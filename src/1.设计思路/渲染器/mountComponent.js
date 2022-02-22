import { renderer } from './renderer.js'

/*4. */
export function mountComponent(vnode, container) {
    const subtree = vnode.tag()
    renderer(subtree, container)
}