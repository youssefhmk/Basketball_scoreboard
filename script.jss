let score1=document.getElementById("score1");
let score2=document.getElementById("score2");
let value1=0;
let value2=0;
function add_team1_1()
{
value1+=1;
score1.textContent = value1.toString().padStart(2, '0');
}
function add_team1_2()
{
value1+=2;
score1.textContent = value1.toString().padStart(2, '0');
}
function add_team1_3()
{
value1+=3;
score1.textContent = value1.toString().padStart(2, '0');
}
function add_team2_1()
{
value2+=1;
score2.textContent = value2.toString().padStart(2, '0');
}
function add_team2_2()
{
value2+=2;
score2.textContent = value2.toString().padStart(2, '0');
}
function add_team2_3()
{
value2+=3;
score2.textContent = value2.toString().padStart(2, '0');
}
function reset()
{
    score1.textContent="00";
    score2.textContent="00";
    value1=0;
    value2=0;
}
