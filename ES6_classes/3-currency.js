export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
}

  // Getter for code
  get code() {
  return this._code;
  }

  // Setter for code
  set code(newCode) {
    if (typeof newCode !== 'string'){
      throw new TypeError('Code must be a string');
  }
  this._code = newCode;
  }

  // Getter for name
  get name() {
      return this._name;
  }

  // Setter for name
  set name(newName) {
      if (typeof newName !== 'string'){
          throw new TypeError('Name must be a string');
      }
      this._name = newName;
  }

  displayFullCurrency() {
      return `${this.name} (${this.code})`;
  }
}