// make .slot droppable and img draggable
$(document).ready(function() {
    $('.slot').droppable({
        drop: function(event, ui) {
            // get the data-seat from the incoming img's parent element
            let incomingSeat = ui.draggable.parent().attr('data-seat');

            //get the data-seat from the receiving img
            let receivingSeat = this.dataset.seat;
            
            // get the data from the local storage and update the seat position
            let incoming = JSON.parse(localStorage.getItem(`poke${incomingSeat}`));
            incoming.seat = receivingSeat;
            let receiving = JSON.parse(localStorage.getItem(`poke${receivingSeat}`));
            receiving.seat = incomingSeat;

            // Swap the data in the local storage
            localStorage.setItem(`poke${incomingSeat}`, JSON.stringify(receiving));
            localStorage.setItem(`poke${receivingSeat}`, JSON.stringify(incoming));

            // Swap the images
            setImage(incoming);
            setImage(receiving);

            // checks for empty log and removes the image
            if (receiving ==  0 || receiving == 1 || receiving == 2 || receiving == 3) {
                $(`#slot${incomingSeat} img`).attr('src', "");
            }
        }
    });

    $('.slot img').draggable({
        revert: 'invalid',
        helper: 'clone',
        drag: function(event, ui) {
            // show the trash can with display flex, then hide it when the image is dropped
            $('#pokeB').removeClass('hidden');
        },
        stop: function(event, ui) {
            $('#pokeB').addClass('hidden');
        }
    });

    // return pokemon (remove it)
    $(`#pokeB`).droppable({
        tolerance: 'intersect',
        over: function(event, ui) {
            $('#pokeB').addClass('over');    
        },
        out: function(event, ui) {
            $('#pokeB').removeClass('over');    
        },
        drop: function(event, ui) {
            let seatRemove = ui.draggable.parent().attr('data-seat');
            $(`#slot${seatRemove} img`).attr('src', "");
            localStorage.setItem(`poke${seatRemove}`, JSON.stringify([]));
            $('#pokeB').removeClass('over');
        }
    });


});