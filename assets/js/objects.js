
let issues = 0;

function incCount(obj, amt = 1) {
    obj.triggered = !obj.triggered;
    issues += obj.triggered ? amt : -amt;
}

function loadState() {
    let triggered_count = 0;
    for (const action in actions) {
        const triggered = (localStorage.getItem(action) === 'true');
        if (this.triggered) {
            triggered_count++;
            actions[action].triggered = true;
            actions[action].setGraphic();
        }
    }
    issues = triggered_count;
    return issues;
}

function saveState() {
    for (const action in actions) {
        localStorage.setItem(action, actions[action].triggered);
    }
}

const dishes = {
    triggered: false,
    setGraphic: function() {
        const dishes = document.getElementById('kitchen-dishes');
        dishes.classList.toggle('disabled');
    },
    do: function(callback) {
        incCount(this, 2);
        this.setGraphic();
        callback(issues);
        displayObjectInformation("kitchen-sink-outline")
    }
};

const cooking = {
    triggered: false,
    setGraphic: function() {},
    do: function(callback) {
        incCount(this, 2);
        callback(issues);
        displayObjectInformation("microwave-outline")
    }
};

const actions = {
    'power-station-trigger': {
        triggered: false,
        setGraphic: function() {
            const coalStation = document.getElementById('power-plant');
            const windmills = document.getElementById('windmills');
            coalStation.classList.toggle('disabled');
            windmills.classList.toggle('disabled');
        },
        do: function(callback) {
            incCount(this);
            this.setGraphic();
            callback(issues);
            displayObjectInformation("power-station-trigger")
        }
    },

    'attic-object': {
        triggered: false,
        setGraphic: function() {
            const insulation = document.getElementById('loft-insulation');
            insulation.classList.toggle('disabled');
        },
        do: function(callback) {
            incCount(this);
            this.setGraphic();
            callback(issues);
            console.log('attic clicked')
            displayObjectInformation("attic-object")
        }
    },

    // Kitchen
    "fridge-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            displayObjectInformation("fridge-outline")
        }
    },

    "kettle-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            displayObjectInformation("kettle-outline")
        }
    },

    "kitchen-tap-outline": {
        triggered: false,
        setGraphic: function() {
            const water = document.getElementById('kitchen-sink-water');
            const stream = document.getElementById('kitchen-water-line');
            water.classList.toggle('disabled');
            stream.classList.toggle('disabled');
        },
        do: function(callback) {
            incCount(this);
            this.setGraphic();
            callback(issues);
            displayObjectInformation("kitchen-tap-outline")
        }
    },

    "kitchen-sink-outline": dishes,
    "dishwasher-outline": dishes,

    "microwave-outline": cooking,
    "oven-outline": cooking,

    // Living room
    'livingroom-lights-outline': {
        triggered: false,
        setGraphic: function() {
            const blackout = document.getElementById('livingroom-blackout');
            blackout.classList.toggle('disabled');
        },
        do: function(callback) {
            incCount(this);
            this.setGraphic();
            callback(issues);
            displayObjectInformation("livingroom-lights-outline")
        }
    },

    "tv-outline": {
        triggered: false,
        setGraphic: function() {
            const tvLed = document.getElementById('power-led');
            tvLed.classList.toggle('off');
        },
        do: function(callback) {
            incCount(this);
            this.setGraphic();
            callback(issues);
            displayObjectInformation("tv-outline")
        }
    },

    // Bedroom
    'bedroom-lights-outline': {
        triggered: false,
        setGraphic: function() {
            const blackout = document.getElementById('bedroom-blackout');
            blackout.classList.toggle('disabled');
        },
        do: function(callback) {
            incCount(this);
            this.setGraphic();
            callback(issues);
            displayObjectInformation("bedroom-lights-outline")
        }
    },

    "covers-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            displayObjectInformation("covers-outline")
        }
    },

    "socket-outline": {
        triggered: false,
        setGraphic: function() {
            const charger = document.getElementById('charger');
            charger.classList.toggle('disabled');
        },
        do: function(callback) {
            incCount(this);
            this.setGraphic();
            callback(issues);
            displayObjectInformation("socket-outline")
        }
    },

    // Bathroom
    "toilet-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            displayObjectInformation("toilet-outline")
        }
    },

    "toilet-paper-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            displayObjectInformation("toilet-paper-outline")
        }
    },

    "bathroom-tap-outline": {
        triggered: false,
        setGraphic: function() {
            const water = document.getElementById('bathroom-sink-water');
            const stream = document.getElementById('bathroom-sink-water-line');
            water.classList.toggle('disabled');
            stream.classList.toggle('disabled');
        },
        do: function(callback) {
            incCount(this);
            this.setGraphic();
            callback(issues);
            displayObjectInformation("bathroom-tap-outline")
        }
    },

    "shower-outline": {
        triggered: false,
        setGraphic: function() {
            const water = document.getElementById('water-stream');
            const stream = document.getElementById('water-lines');
            water.classList.toggle('disabled');
            stream.classList.toggle('disabled');
        },
        do: function(callback) {
            incCount(this);
            this.setGraphic();
            callback(issues);
            displayObjectInformation("shower-outline")
        }
    },

    "washing-machine-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            displayObjectInformation("washing-machine-outline")
        }
    }
}

// Display the modal with the corresponding info
let objectModal = document.getElementById("object-info-modal")
let modalTitle = document.getElementById("object-name")
let modalContent = document.getElementById("object-description")
function displayObjectInformation(item) {
    fetch("assets/js/JSON/objects-info.JSON")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let objectsInfo = data;

            for (let i = 0; i < objectsInfo.length; i++) {
                if (objectsInfo[i].objectId === item) {
                    objectName = objectsInfo[i].objectName
                    objectDescription = objectsInfo[i].objectDescription
                    break
                }
            }
            console.log("in the then fucntion")
            modalTitle.innerText = objectName
            console.log(objectName)
            modalContent.innerText = objectDescription
            console.log(objectDescription)
            objectModal.classList.add("show", "d-block")
        });
}

// Close object info modal
let closeInfoModalButtons = document.querySelectorAll("[data-info-modal-dismiss]")
console.log(closeInfoModalButtons)
closeInfoModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        objectModal.classList.remove("show", "d-block");
    });
});
