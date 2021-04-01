// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  // each key is an event name, string
  // value is an array of callbacks. either push or create new array
  on(eventName, callback) {
    this.events[eventName]
      ? this.events[eventName].push(callback)
      : (this.events[eventName] = [callback]);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(event => {
        event();
      });
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
