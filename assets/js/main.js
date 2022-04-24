
const objects = document.querySelectorAll('.st274,.st275');

console.log(objects);

for (const object of objects) {
    console.log(object);
    object.addEventListener('click', function(e) {
        let objId = (this.id) ? this.id : this.parentElement.id;
        console.log(objId);
    });
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
        
        tv-outline - TV trigger
            TV - TV graphic

    bedroom:
        bedroom-lights-outline - bedroom lights trigger
            bedroom-lights - bedroom lights graphics

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