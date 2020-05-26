$(document).ready(function(){
    // gsap.registerPlugin(Draggable);

    $('#Start_Stop').click(function(){
        $('#Record').toggleClass('record-spin');
        $('#Arm').toggleClass('move-arm');
        $('#Axis').toggleClass('axis-spin');
        $('#VolumeKnob').toggleClass('up-volume');
        $('#ONOFFColor').toggleClass('onblue');
        $('#on-color').toggleClass('knobblue');
        $('#level1').toggleClass('oneblue');
        $('#level2').toggleClass('twoblue');
        $('#level3').toggleClass('threeblue');
        $('#level4').toggleClass('fourblue');
        $('#level5').toggleClass('fiveblue');
        $('#level6').toggleClass('sixblue');
        $('#level7').toggleClass('sevenblue');
        $('#level8').toggleClass('eightblue');
        $('#level9').toggleClass('nineblue');
    });
    $('#Reverse').click(function(){
        $('#Record').toggleClass('reverse-record');
        $('#Axis').toggleClass('reverse-axis');
    })

    Draggable.create("#dragKnob", { type:"y", bounds:"#VolumeSpace"

    });



});
