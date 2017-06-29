var Observable = require("data/observable").Observable;

function getMessage(counter) {
  if (counter == 25) {
    return "You're off to a good start...\n" + counter + " taps made";

  } else if (counter == 50) {
    return "Almost there.. \n" + counter + " taps made";

  } else if (counter == 100) {
    return "Hooray, 100 clicks!!\n" + counter + " taps made";

  } else {
    return counter + " taps made";
  }
}

function createViewModel() {
  var viewModel = new Observable();
  viewModel.counter = 0;
  viewModel.message = getMessage(viewModel.counter);

  viewModel.onTap = function() {
    this.counter++;
    this.set("message", getMessage(this.counter));
  }

  return viewModel;
}

exports.createViewModel = createViewModel;
