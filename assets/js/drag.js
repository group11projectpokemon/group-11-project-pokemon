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

    // variables used to get the roate value and seat value
    let seat;
    let initialRotate;

    $('.slot img').draggable({
        revert: 'invalid',
        helper: 'clone',
        start: function(event, ui) {
            seat = $(this).parent().data('seat'); // assuming the 'seat' data attribute is on the draggable element
            initialRotate = eval(`initialRotate${seat}`);
          },
        drag: function(event, ui) {
            // show the return pokeball when dragging, hide the image
            $('#pokeB').removeClass('hidden');
            $(this).addClass('hidden');;
            // counter rotate the slot
            $(`#slot${seat}`).css('transform', `rotate(${-initialRotate}deg)`);

        },
        stop: function(event, ui) {
            $('#pokeB').addClass('hidden');
            $(this).removeClass('hidden');;
            // return the slot to its original rotation
            $(`#slot${seat}`).css('transform', `rotate(${initialRotate}deg)`);
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