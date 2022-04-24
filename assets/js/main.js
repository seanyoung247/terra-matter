const objects = document.querySelectorAll('.object-outline,#power-station-trigger');
const objectCount = objects.length;

//console.log(objects.length);
function objectClick() {
    let objId = this.id;
    //console.log(objId);
    // If there's a bound action for this object, do it now
    if (actions[objId]) {
        actions[objId].do();
    }
}
for (const object of objects) {
    //console.log(object.id);
    object.addEventListener('click', objectClick);
}
