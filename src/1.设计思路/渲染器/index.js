import { renderer } from './renderer.js'

const vnode = {
    tag: 'ul',
    props: {},
    children: [{
        tag: 'li',
        props: {
            onClick: () => alert('hello 2333')
        },
        children: '2333'
    }, {
        tag: 'li',
        props: {
            onClick: () => alert('hello 32222')
        },
        children: '3222'
    }]
}

renderer(vnode, document.body)