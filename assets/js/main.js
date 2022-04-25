
/*
 * Page setup and state management
 */
(function() {
    const svgPath = window.location.origin + '/assets/templates/svg.html';

    const graphic = document.getElementById('house-svg');
    const objects = document.querySelectorAll('.object-outline,#power-station-trigger');
    const objectCount = objects.length;
    /**
     * state is a value between 0.0 and 1.0 reflecting how many objects have been activated.
     * Where 0.0 is 0% and 1.0 is 100%.
     */
    let state = 0.0;

    /**
     * Updates state with the current number of activated objects.
     * @param {Number} count - The current number of activated objects
     */
    function updateState(count) {
        state = count / objectCount;
        console.log(state);
        graphic.style.setProperty('--mix', state);
    }

    function objectClick() {
        if (actions[this.id]) {
            actions[this.id].do(updateState);
        }
    }

    // Load SVG from template
    fetch(svgPath)
    .then(responce => responce.text())
    .then(data => {
        const content = document.getElementById('content');
        content.innerHTML = data;

        for (const object of objects) {
            object.addEventListener('click', objectClick);
        }
    });
})();

/*
 * Modals
 */
(function() {
    const modal = new bootstrap.Modal(document.getElementById('info-modal'));
})();
