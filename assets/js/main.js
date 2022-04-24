
const objects = document.querySelectorAll('.st274,.st275');

console.log(objects);

for (const object of objects) {
    console.log(object);
    object.addEventListener('click', function(e) {
        let objId = (this.id) ? this.id : this.parentElement.id;
        console.log(objId);
    });
}
