class TodoListItem {
  static lastId = 0;

  constructor(text) {
    this.id = ++TodoListItem.lastId; // Вираховується всередині класу, не потребує валідації взагалі (через setter/getter)
    this.text = text;
  }

  // З огляду на те, що клас існує окремо від конкретного рішення і його об'єкт може бути викликаний з будь-яким значенням, зробив перевірку на рядок (не порожній)
  // (хоча, як на мене, перевірка на порожній рядок все ж зайва, але тільки в контексті цього конкретного рішення, де порожній рядок - це частина функціоналу (навішування класу .invalid))
  set text(value) {
    // Перевірка на рядок
    if (typeof value !== 'string') {
      throw new TypeError('text must be a string value');
    } else if (value.length === 0) {
      throw new RangeError('text length must be greater than 0');
    }
    this._text = value;
  }
  get text() {
    return this._text;
  }
}
