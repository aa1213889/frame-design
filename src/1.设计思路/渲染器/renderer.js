import { mountElement } from './mountElement.js'
import { mountComponent } from './mountComponent.js'

/*2. */
/**
 * mountElement: 挂载普通节点
 * mountComponent: 挂载组件节点
 */
export function renderer(vnode, container) {
    if (typeof vnode.tag === 'string') {
        mountElement(vnode, container)
    } else if (typeof vnode.tag === 'function') {
        mountComponent(vnode, container)
    }
}