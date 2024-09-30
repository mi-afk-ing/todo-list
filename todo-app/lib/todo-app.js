/**
 * initial_model is a simple JavaScript Object with two keys and no methods.
 * it is used both as the "initial" model when mounting the Todo List App
 * and as the "reset" state when all todos are deleted at once.
 */
var initial_model = {
    todos: [], // empty array which we will fill shortly
    hash: "#/" // the hash in the url (for routing)
}
  
  /* module.exports is needed to run the functions using Node.js for testing! */
  /* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    model: initial_model
  }
}

/**
 * `update` transforms the `model` based on the `action`.
 * @param {String} action - the desired action to perform on the model.
 * @param {Object} model - the App's (current) model (or "state").
 * @param {String} data - data we want to "apply" to the item. e.g: item Title.
 * @return {Object} new_model - the transformed model.
 */
function update(action, model, data) {
    var new_model = JSON.parse(JSON.stringify(model));
    switch (action) {                  // action (String) determines which case
      case 'ADD':
        new_model.todos.push({
            id: model.todos.length + 1,
            title: data,
            done: false
        });
        break;
      case 'TOGGLE':
        new_model.todos.forEach(element => {
            if(element.id === data){
                element.done = !element.done;
            }
        });  
        break;    
      default:                         // if action unrecognised or undefined,
        return model;                  // return model unmodified
    }    // default? https://softwareengineering.stackexchange.com/a/201786/211301
}