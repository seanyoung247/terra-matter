
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

    'livingroom-lights-outline': {
        triggered: false,
        do: function() {
            const blackout = document.getElementById('livingroom-blackout');
            blackout.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
    },

    'bedroom-lights-outline': {
        triggered: false,
        do: function() {
            const blackout = document.getElementById('bedroom-blackout');
            blackout.classList.toggle('disabled');

            this.triggered = !this.triggered;
            //TO DO: Show information dialog, increment/decrement active issue counter
        }
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
    console.log(object);
    object.addEventListener('click', objectClick);
}



/*
    Object IDs:

    attic-object - Trigger for floor space of loft
        loft-insulation - loft insulation graphic

    power-station-outline - Trigger for coal fired power station
        power-plant - coal fired station graphic
        windmills - windmill graphic
    
    kitchen:
        fridge-outline - Trigger for fridge
            fridge - fridge graphic

        kettle-outline - Trigger for kettle
            kettle - Kettle graphic

        kitchen-tap-outline - Trigger for kitchen tap
            tap - kitchen tap graphic
            kitchen-water-line, kitchen-sink-water: water graphic

        kitchen-sink-outline - Trigger for kitchen sink
            sink - graphic for sink and tap
            dishes - dirty dishes graphic
            dishwasher - dishwasher graphic

        microwave-outline - Trigger for microwave
            microwave - microwave graphic

        dishwasher-outline - Trigger for dishwasher
            dishwasher - dishwasher graphic

        oven-outline - Trigger for oven
            oven - oven graphic

    living room:
        livingroom-lights-outline - livingroom lights trigger
            livingroom-lights - livingroom lights graphics
            livingroom-blackout - graphic to make room darker when lights are off
        
        tv-outline - TV trigger
            TV - TV graphic

    bedroom:
        bedroom-lights-outline - bedroom lights trigger
            bedroom-lights - bedroom lights graphics
            bedroom-blackout - graphic to make room darker when lights are off

        covers-outline - bedroom covers trigger
        
        socket-outline - power socket trigger
            bedroom-socket - bedroom socket graphic
            charger - charger/power lead graphic

    bathroom:
        toilet-outline - toilet trigger
            toilet - toilet graphic
        
        toilet-paper-outline - toilet paper trigger
            toilet-paper - toilet paper graphic
        
        bathroom-tap-outline - bathroom tap trigger
            bathroom-tap - bathroom tap graphic
            bathroom-sink-water, bathroom-sink-water-line - water graphics
        
        shower-outline - shower trigger
            bath - bath graphic
            shower-pipe, shower-head - shower graphic
            water-stream, water-lines - shower water graphics
        
        washing-machine-outline - washing machine trigger
            washing-machine - washing machine graphic
 */