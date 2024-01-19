export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Building cannot be instantiated directly');
    }

    this._sqft = sqft;

    // Check if evacuationWarningMessage method is implemented in subclass
    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
