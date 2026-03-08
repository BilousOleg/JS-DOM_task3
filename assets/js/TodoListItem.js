class TodoListItem {
  static lastId = 0;

  constructor(text) {
    this.id = ++TodoListItem.lastId;
    this.text = text;
  }
}
