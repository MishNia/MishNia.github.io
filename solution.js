//change 5 to the total number of questions
var total=8
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="You're Sirius-ly good at this!"
compliments[2]="10 points to Gryffindor! Or whichever house you're in!"
compliments[3]="You're as sharp as a Snitch in the air!"
compliments[4]="You'd give Dumbledore a run for his Galleons!"
compliments[5]="That was magical! You're a real wizard with answers!"
compliments[6]="You're as clever as a Ravenclaw's riddle!"
compliments[7]="You're on fire, like a Phoenix reborn!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Who is Harry Potter's godfather?"
choice1[1]="Remus Lupin"
choice1[2]="Albus Dumbledore"
choice1[3]="Sirius Black"
choice1[4]="Severus Snape"

question[2]="Which spell is used to disarm an opponent?"
choice2[1]="Expelliarmus"
choice2[2]="Wingardium Leviosa"
choice2[3]="Crucio"
choice2[4]="Lumos"

question[3]="What is the name of the Weasley family’s house?"
choice3[1]="The Burrow"
choice3[2]="Grimmauld Place"
choice3[3]="Shell Cottage"
choice3[4]="Malfoy Manor"

question[4]="What magical object does Harry use to see the memories of others?"
choice4[1]="The Invisibility Cloak"
choice4[2]="The Marauder's Map"
choice4[3]="The Mirror of Erised"
choice4[4]="The Pensieve"

question[5]="Who teaches Potions at Hogwarts in Harry’s first year?"
choice5[1]="Minerva McGonagall"
choice5[2]="Gilderoy Lockhart"
choice5[3]="Severus Snape"
choice5[4]="Horace Slughorn"

question[6]="What position does Harry play on his Quidditch team?"
choice6[1]="Keeper"
choice6[2]="Beater"
choice6[3]="Chaser"
choice6[4]="Seeker"

question[7]="What is the name of the three-headed dog guarding the Philosopher’s Stone?"
choice7[1]="Fang"
choice7[2]="Fluffy"
choice7[3]="Buckbeak"
choice7[4]="Crookshanks"

question[8]="What magical creature can only be seen by someone who has witnessed death?"
choice8[1]="Hippogriff"
choice8[2]="Thestral"
choice8[3]="Basilisk"
choice8[4]="Phoenix"

solution[1]="c"
solution[2]="a"
solution[3]="a"
solution[4]="d"
solution[5]="c"
solution[6]="d"
solution[7]="b"
solution[8]="b"
