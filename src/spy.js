export function MySpy() {
  this.calls = 0;
}

MySpy.prototype.fn = function () {
  return () => this.calls++;
}