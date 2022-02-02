function send()
{
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    answer=parseInt(number1)*parseInt(number2);

    question_number="<h4>"+ number1+"X"+number2+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row=question_number + input_box + check_button;

    document.getElementById("output").innerHTML=row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

question_turn="input_1";
answer_turn="input_2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==answer)
   {

    if(answer_turn="input_1")
    {
        update_player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=update_player1_score;
    }
    else
    {
        update_player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=update_player2_score;
    }
   }

   if(question_turn=="input_1")
   {
       question_turn="input_2";
       document.getElementById("player_question").innerHTML="Question - "+ input_2;
   }
   else
   {
    question_turn="input_1";
    document.getElementById("player_question").innerHTML="Question - "+ input_1;
   }
}
