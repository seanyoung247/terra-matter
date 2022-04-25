
/*
 * Page setup and state management
 */
(function() {
    const svgPath = 'assets/templates/svg.html';
    let graphic = null; 
    let objectCount = 0;
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
        graphic.style.setProperty('--mix', state);

        // Display state
        document.getElementById('found-display').innerText = count;
        document.getElementById('total-display').innerText = objectCount;

        // Save current state
        saveState();
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
        // Insert inline svg content into content area
        const content = document.getElementById('content');
        content.innerHTML = data;
        graphic = document.getElementById('house-svg');

        // Read in the list of interactable objects defined in the svg
        const objects = document.querySelectorAll('.object-outline,#power-station-trigger');
        objectCount = objects.length;

        // Setup user events on svg objects
        for (const object of objects) {
            object.addEventListener('click', objectClick);
        }
        // Setup initial state
        updateState(loadState());
    });
})();

/*
 * Modals
 */
(function() {
    const modal = new bootstrap.Modal(document.getElementById('info-modal'));
})();
(function() {
    const contactModal = new bootstrap.Modal(document.getElementById('contact-modal'));
})();
