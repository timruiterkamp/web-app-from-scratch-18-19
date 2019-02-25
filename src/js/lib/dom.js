export default class DOM {
  constructor() {}

  write(type, props, ...children) {
    return { type, props, children };
  }

  create(node) {
    if (typeof node === "string") {
      return document.createTextNode(node);
    }
    const el = document.createElement(node.type);
    this.setProps(el, node.props);

    console.log(node);
    node.children
      .map(child => this.create(child))
      .forEach(el.appendChild.bind(el));
    return el;
  }

  updateElement(parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
      parent.appendChild(createElement(newNode));
    } else if (!newNode) {
      parent.removeChild(parent.childNodes[index]);
    } else if (changed(newNode, oldNode)) {
      parent.replaceChild(createElement(newNode), parent.childNodes[index]);
    } else if (newNode.type) {
      const newLength = newNode.children.length;
      const oldLength = oldNode.children.length;
      for (let i = 0; i < newLength || i < oldLength; i++) {
        updateElement(
          parent.childNodes[index],
          newNode.children[i],
          oldNode.children[i],
          i
        );
      }
    }
  }

  setProps(node, props) {
    function setProp(target, name, value) {
      target.setAttribute(name, value);
    }
    Object.keys(props).forEach(name => {
      setProp(node, name, props[name]);
    });
  }

  addEventListeners(target, props) {
    Object.keys(props).forEach(name => {
      if (setProps().isEventProp(name)) {
        target.addEventListener(helpers().extractEventName(name), props[name]);
      }
    });
  }

  helpers() {
    extractEventName = name => name.slice(2).toLowerCase();
  }
}
