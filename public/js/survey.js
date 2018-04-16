// Grab user input
$('#submit').on('click', function(event) {
    event.preventDefault();
    var newFriend = {
        name: $('#name')
            .val()
            .trim(),
        image: $('#image')
            .val()
            .trim(),
        scores: [
            (q1 = $('#q1').val()),
            (q2 = $('#q2').val()),
            (q3 = $('#q3').val()),
            (q4 = $('#q4').val()),
            (q5 = $('#q5').val()),
            (q6 = $('#q6').val()),
            (q7 = $('#q7').val()),
            (q8 = $('#q8').val()),
            (q9 = $('#q9').val()),
            (q10 = $('#q10').val())
        ]
    };

    // Post new friend to api
    $.post('/api/friends', newFriend, function(data) {
        // console.log("I am the data: " + data);
        //alert("You have been added to the Find-a-friend");
        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $('#matched-name').text(data.name);
        $('#match-img').attr('src', data.image);
        
        // Show the modal with the best match
        $('.match-modal').modal('toggle');
    });
});
