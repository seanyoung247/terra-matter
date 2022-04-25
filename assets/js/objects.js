
let issues = 0;

function incCount(obj, amt = 1) {
    obj.triggered = !obj.triggered;
    issues += obj.triggered ? amt : -amt;
}

function loadState() {
    let triggered_count = 0;
    for (const action in actions) {
        const triggered = (localStorage.getItem(action) === 'true');
        if (triggered) {
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
        this.setGraphic();
        incCount(this, 2);
        callback(issues);
        //TO DO: Show information dialog
    }
};

const cooking = {
    triggered: false,
    setGraphic: function() {},
    do: function(callback) {

        incCount(this, 2);
        callback(issues);
        //TO DO: Show information dialog
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
            this.setGraphic();

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    'attic-object': {
        triggered: false,
        setGraphic: function() {
            const insulation = document.getElementById('loft-insulation');
            insulation.classList.toggle('disabled');
        },
        do: function(callback) {
            this.setGraphic();

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    // Kitchen
    "fridge-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "kettle-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
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
            this.setGraphic();

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
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
            this.setGraphic();

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "tv-outline": {
        triggered: false,
        setGraphic: function() {
            const tvLed = document.getElementById('power-led');
            tvLed.classList.toggle('off');
        },
        do: function(callback) {
            this.setGraphic();
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
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
            this.setGraphic();

            incCount(this);
            //TO DO: Show information dialog
        }
    },

    "covers-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "socket-outline": {
        triggered: false,
        setGraphic: function() {
            const charger = document.getElementById('charger');
            charger.classList.toggle('disabled');
        },
        do: function(callback) {
            this.setGraphic();

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    // Bathroom
    "toilet-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "toilet-paper-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
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
            this.setGraphic();

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
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
            this.setGraphic();

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "washing-machine-outline": {
        triggered: false,
        setGraphic: function() {},
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
            displayObjectInformation("washing-machine-outline")
        }
    }
}


function getObjectInformation() {
    fetch("assets/js/JSON/objects-info.JSON")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let objectsInfo = data;
        });
}

function displayObjectInformation(item) {
    
}
