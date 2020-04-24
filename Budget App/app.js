// Budget Controller
var budgetController = (function() {

    var Expenses = function(id, desription, value) {
        this.id = id;
        this.description = desription;
        this.value = value;
    }
    var Income = function(id, desription, value) {
        this.id = id;
        this.description = desription;
        this.value = value;
    }

    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    };

})();

// User Interface Controller
var UIController = (function() {

    // DOMStrings object, to store classnames of add_types
    var DOMStrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn"
    };
    // Return an object
    return {
        // Function returning values of all three inputs as an object
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        // Function to make DOMStrings publicly available
        getDOMStrings: function() {
            return DOMStrings;
        }
    };

})();

// Global App Controller
var appController = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        // If add button is clicked
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        // If Enter key is pressed from the keyboard
        document.addEventListener("keypress", function(e){
            if( e.keyCode === 13 || e.which === 13 ) {
                ctrlAddItem();
            }
        });

    }

    var DOM = UICtrl.getDOMStrings();

    var ctrlAddItem = function() {
        // TODO
        // 1. Get field input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add item to the budget controller
        // 3. Add item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on UI
    }
    
    return {
        init: function() {
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);

appController.init();