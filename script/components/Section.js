export default class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._selectorContainer = selectorContainer;
  }

  addItem(element) {
    this._selectorContainer.prepend(element);
  }

  rendererItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    })
  }
}
