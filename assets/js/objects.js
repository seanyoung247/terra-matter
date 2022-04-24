
let issues = 0;

function incCount(obj, amt = 1) {
    obj.triggered = !obj.triggered;
    issues += obj.triggered ? amt : -amt;
    console.log(issues,obj.triggered);
} 

const dishes = {
    triggered: false,
    do: function(callback) {
        const dishes = document.getElementById('kitchen-dishes');
        dishes.classList.toggle('disabled');

        incCount(this, 2);
        callback(issues);
        //TO DO: Show information dialog
    }
};

const cooking = {
    triggered: false,
    do: function(callback) {
        incCount(this, 2);
        callback(issues);
        //TO DO: Show information dialog
    }
};

const actions = {
    'power-station-trigger': {
        triggered: false,
        do: function(callback) {
            const coalStation = document.getElementById('power-plant');
            const windmills = document.getElementById('windmills');
            coalStation.classList.toggle('disabled');
            windmills.classList.toggle('disabled');

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    'attic-object': {
        triggered: false,
        do: function(callback) {
            const insulation = document.getElementById('loft-insulation');
            insulation.classList.toggle('disabled');

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    // Kitchen
    "fridge-outline": {
        triggered: false,
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "kettle-outline": {
        triggered: false,
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "kitchen-tap-outline": {
        triggered: false,
        do: function(callback) {
            const water = document.getElementById('kitchen-sink-water');
            const stream = document.getElementById('kitchen-water-line');
            water.classList.toggle('disabled');
            stream.classList.toggle('disabled');

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
        do: function(callback) {
            const blackout = document.getElementById('livingroom-blackout');
            blackout.classList.toggle('disabled');

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "tv-outline": {
        triggered: false,
        do: function(callback) {
            const tvLed = document.getElementById('power-led');
            tvLed.classList.toggle('off');

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    // Bedroom
    'bedroom-lights-outline': {
        triggered: false,
        do: function(callback) {
            const blackout = document.getElementById('bedroom-blackout');
            blackout.classList.toggle('disabled');

            incCount(this);
            //TO DO: Show information dialog
        }
    },

    "covers-outline": {
        triggered: false,
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "socket-outline": {
        triggered: false,
        do: function(callback) {
            const charger = document.getElementById('charger');
            charger.classList.toggle('disabled');

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    // Bathroom
    "toilet-outline": {
        triggered: false,
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "toilet-paper-outline": {
        triggered: false,
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "bathroom-tap-outline": {
        triggered: false,
        do: function(callback) {
            const water = document.getElementById('bathroom-sink-water');
            const stream = document.getElementById('bathroom-sink-water-line');
            water.classList.toggle('disabled');
            stream.classList.toggle('disabled');

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "shower-outline": {
        triggered: false,
        do: function(callback) {
            const water = document.getElementById('water-stream');
            const stream = document.getElementById('water-lines');
            console.log(water);
            water.classList.toggle('disabled');
            stream.classList.toggle('disabled');

            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    },

    "washing-machine-outline": {
        triggered: false,
        do: function(callback) {
            incCount(this);
            callback(issues);
            //TO DO: Show information dialog
        }
    }
}
