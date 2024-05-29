// make .slot droppable and img draggable
$(document).ready(function() {
    $('.slot').droppable({
        drop: function(event, ui) {
            // get the data-seat from the incoming img's parent element
            let incomingName = ui.draggable.parent().attr('data-seat');

            //get the data-seat from the receiving img
            let receivingName = this.dataset.seat;
            
            // get the data from the local storage and update the seat position
            let incoming = JSON.parse(localStorage.getItem(`poke${incomingName}`));
            incoming.seat = receivingName;
            let receiving = JSON.parse(localStorage.getItem(`poke${receivingName}`));
            receiving.seat = incomingName;

            // Swap the data in the local storage
            localStorage.setItem(`poke${incomingName}`, JSON.stringify(receiving));
            localStorage.setItem(`poke${receivingName}`, JSON.stringify(incoming));

            // Swap the images
            setImage(incoming);
            setImage(receiving);
        }
    });

    $('.slot img').draggable({
        revert: 'invalid',
        helper: 'clone',
    });
});