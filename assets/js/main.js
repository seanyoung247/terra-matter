
let issues = 0;
const objects = document.querySelectorAll('.object-outline,.power-station-outline');
const objectCount = objects.length;

const actions = {
    'power-station-trigger': {
        triggered: false,
        do: function() {
            const coalStation = document.getElementById('power-plant');
            const windmills = document.getElementById('windmills');
            coalStation.classList.toggle('disabled');
            windmills.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    'attic-object': {
        triggered: false,
        do: function() {
            const insulation = document.getElementById('loft-insulation');
            insulation.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    // Kitchen
    "fridge-outline": {
        triggered: false,
        do: function() {}
    },

    "kettle-outline": {
        triggered: false,
        do: function() {}
    },

    "kitchen-tap-outline": {
        triggered: false,
        do: function() {
            const water = document.getElementById('kitchen-sink-water');
            const stream = document.getElementById('kitchen-water-line');
            water.classList.toggle('disabled');
            stream.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    "kitchen-sink-outline": {
        triggered: false,
        do: function() {
            const dishes = document.getElementById('kitchen-dishes');
            dishes.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    "microwave-outline": {
        triggered: false,
        do: function() {}
    },

    "dishwasher-outline": {
        triggered: false,
        do: function() {
            const dishes = document.getElementById('kitchen-dishes');
            dishes.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    "oven-outline": {
        triggered: false,
        do: function() {}
    },

    // Living room
    'livingroom-lights-outline': {
        triggered: false,
        do: function() {
            const blackout = document.getElementById('livingroom-blackout');
            blackout.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    "tv-outline": {
        triggered: false,
        do: function() {
            const tvLed = document.getElementById('power-led');
            tvLed.classList.toggle('off');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    // Bedroom
    'bedroom-lights-outline': {
        triggered: false,
        do: function() {
            const blackout = document.getElementById('bedroom-blackout');
            blackout.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    "covers-outline": {
        triggered: false,
        do: function() {}
    },

    "socket-outline": {
        triggered: false,
        do: function() {
            const charger = document.getElementById('charger');
            charger.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    // Bathroom
    "toilet-outline": {
        triggered: false,
        do: function() {}
    },

    "toilet-paper-outline": {
        triggered: false,
        do: function() {}
    },

    "bathroom-tap-outline": {
        triggered: false,
        do: function() {
            const water = document.getElementById('bathroom-sink-water');
            const stream = document.getElementById('bathroom-sink-water-line');
            water.classList.toggle('disabled');
            stream.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    "shower-outline": {
        triggered: false,
        do: function() {
            const water = document.getElementById('water-stream');
            const stream = document.getElementById('water-lines');
            console.log(water);
            water.classList.toggle('disabled');
            stream.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    "washing-machine-outline": {
        triggered: false,
        do: function() {}
    }
}

function objectClick() {
    let objId = (this.id) ? this.id : this.parentElement.id;
    console.log(objId);
    // If there's a bound action for this object, do it now
    if (actions[objId]) {
        actions[objId].do();
    }
}
for (const object of objects) {
    object.addEventListener('click', objectClick);
}
