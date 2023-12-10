export default class ErrorRepository {

  constructor() {
    this.errorsMap = new Map();
  }

  addError(code, text) {
    this.errorsMap.set(code, text);
  }

  translate(code) {
    if (!Array.from(this.errorsMap.keys()).includes(code)) {
      throw new Error("Unknown error");
    }
    return this.errorsMap.get(code);
  }
}