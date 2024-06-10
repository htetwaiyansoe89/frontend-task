import {action, makeObservable, observable} from "mobx";

class OmiseStore {
  tokens: OmiseToken[] = [];

  addToken(token: OmiseToken) {
    this.tokens.push(token);
  }

  constructor() {
    makeObservable(this, {
      tokens: observable,
      addToken: action,
    })
  }
}

export default new OmiseStore();