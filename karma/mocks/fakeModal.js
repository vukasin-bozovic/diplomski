export var fakeModal = {
  result: {
    then: function (confirmCallback, cancelCallback) {
      this.confirmCallBack = confirmCallback;
      this.cancelCallback = cancelCallback;
      return this;
    },
    catch: function (cancelCallback) {
      this.cancelCallback = cancelCallback;
      return this;
    },
    finally: function (finallyCallback) {
      this.finallyCallback = finallyCallback;
      return this;
    }
  },
  close: function (item) {
    return {
      selectedCities: [],
      ids: []
    };
  },
  dismiss: function (item) {
    this.result.cancelCallback(item);
  },
  finally: function () {
    this.result.finallyCallback();
  }
};
