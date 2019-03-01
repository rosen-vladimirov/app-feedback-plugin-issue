const Observable = require("tns-core-modules/data/observable").Observable;
// const FeedbackPlugin = require("nativescript-feedback");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
        // const feedback = new FeedbackPlugin.Feedback();
        // feedback.show({
        //     message: `Counter has been updated to ${viewModel.counter}`
        // });
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
