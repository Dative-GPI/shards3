export class Single {
  called = false;
  result: any = null;

  call<T>(fn: () => T): T {
    if (this.called) {
      return this.result;
    }

    this.called = true;
    this.result = fn();

    return this.result;
  }
}
