// https://www.youtube.com/watch?v=YiQfPU8qB_c&list=PLe3J6mZBq1xUWVBMpSR2zpp8paWMJQ91b&index=2&ab_channel=JsCafe

const findPathFromChildToRoot = (child, root) => {
    let path = [];
    while (child !== root) {
        const parent = child.parentElement;
        const childrenArray = Array.from(parent.children);
        path.push(childrenArray.indexOf(child));
        child = parent;
    }
    return path;
}

const findValueAfterIteratingPathFromParent = (parent, path) => {
    while(path.length) {
        parent = parent.children[path.pop()];
    }
    return parent.innerText;
}


const domFinder = () => {
    const rootA = document.getElementById("rootA");
    const rootB = document.getElementById("rootB");
    const nodeA = document.getElementById("nodeA");

    const path = findPathFromChildToParent(nodeA, rootA);
    const value = findValueAfterIteratingPathFromParent(rootB, path);
    return value;
}

console.log("domFinder", domFinder());