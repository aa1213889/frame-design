import { renderer } from './renderer.js'

/*1. */
/*基本虚拟节点*/
const vnode = {
    tag: 'ul',
    props: {
        id: 'myUl'
    },
    children: [{
        tag: 'li',
        props: {
            onClick: () => alert('hello 2333'),
            class: 'one'
        },
        children: '2333'
    }, {
        tag: 'li',
        props: {
            onClick: () => alert('hello 32222'),
            class: 'two'
        },
        children: '3222'
    }]
}
renderer(vnode, document.body)

/*组件*/
const myComponent = () => {
    return {
        tag: 'button',
        props: {
            onClick: () => alert('hello btn')
        },
        children: 'click me'
    }
}
const cVnode = {
    tag: myComponent
}

renderer(cVnode, document.body)