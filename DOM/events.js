function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert("You clicked the button!")
    }

    input.addEventListener('click', clickAlert)
};

addingEventListener();
