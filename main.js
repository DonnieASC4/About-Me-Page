$(document).ready(setup);
var firstTime = true;

function setup() {
    
}

function first() {
    if (firstTime === true) {
        $(".MeText").append("<span id='topper'></span>");
        $(".MeText").append("<p class='dummyDescription'></p>");
        firstTime = false;
    }
}

function addTextOne() {
    first();
    $(".dummyDescription").text("Laboris dolore o cupidatat coniunctione, iis mentitum reprehenderit, incurreret varias senserit, aliquip illum mentitum probant ex minim hic de cillum voluptate se velit ex occaecat ex noster ut excepteur qui velit qui do an philosophari. Vidisse sint officia. Minim cupidatat e deserunt, a labore cernantur expetendis,  nam te praesentibus in quorum deserunt occaecat id nam nisi quibusdam deserunt te est qui relinqueret ut anim quamquam incurreret do hic do domesticarum. Probant quae ingeniis, aute officia ab excepteur, an fugiat illum varias senserit, iudicem qui singulis iis eiusmod in esse cernantur hic ab fore quem duis vidisse, senserit fore si aliquip transferrem ne non quorum quid ubi nescius. Qui fugiat arbitror. Quorum mandaremus aut cillum legam.");
    $("#topper").text("Education");
}

function addTextTwo() {
    first();
    $(".dummyDescription").text("Nostrud veniam incurreret, quem mentitum iis fidelissimae et non do concursionibus, ita ex quorum dolor quis ab laboris o nisi incididunt si culpa ingeniis mandaremus eu nam hic exquisitaque e sed tamen instituendarum. Sint probant te graviterque, velit consequat an nescius eu de enim in magna ut labore concursionibus occaecat fugiat ingeniis. Commodo fugiat ipsum consequat aliqua. Esse sed aliquip non summis o qui fore sempiternum. Commodo cillum magna eiusmod malis, cillum cupidatat qui doctrina o incurreret quo nescius si dolor exercitation officia sunt quamquam, quo aut irure labore duis est admodum e illum ingeniis, litteris quorum quamquam, expetendis transferrem ab offendit. In quid quamquam, eram nostrud a quid aute, eu o labore laborum, ubi ea summis laboris hic arbitror non quae, laboris sempiternum ubi officia ubi enim ingeniis philosophari et mandaremus transferrem a doctrina. Enim cupidatat et amet sint de ita labore o irure.");
    $("#topper").text("Hobbies");
}

function addTextThree() {
    first();
    $(".dummyDescription").text("In deserunt ad admodum. Hic expetendis ubi aliquip, esseingeniis non voluptatibus, ea quae nam sint ad offendit ubi voluptate ad voluptate duis entitum, malis laborum comprehenderit, nisi consequat laborum, anim fidelissimae doctrina nisi mandaremus. Ne occaecat eu cupidatat, senserit cillum varias deserunt cillum sed de cillum proident fidelissimae, mentitum fore eiusmod tempor. Officia se sint. Ea et malis magna anim in duis do laborum o irure. Ab ita lorem mandaremus. Probant esse cillum cernantur enim, ne sint duis sint laborum.");
    $("#topper").text("The Future");
}

function addTextFour() {
    first();
    $(".dummyDescription").text("Non laboris ad deserunt. Varias cupidatat relinqueret. Cernantur enim pariatur arbitror si officia et summis offendit te an cillum nostrud mentitum, si noster deserunt arbitror sed ita quis consequat praetermissum o offendit quae cupidatat proident, do enim ingeniis, singulis fore fabulas. Ita tamen fidelissimae, incurreret malis eram quibusdam quae. Malis si nescius aut malis, ne ubi noster multos legam. Ipsum excepteur te magna summis.");
    $("#topper").text("Work Experience");
}






















/*
//Keeps track of stuff
var hp = 100;
var gold = 0;
var numberDefeated = 0;
var firstTime = true;
$(document).ready(setup);
function setup() {
    $(".ogres").append("<h1>Welcome to Ogre Fighter v.1.0</h1>");
    //add stats
    //TODO: add stat values
    $(".ogres").append("<h3>STATS</h3><p id='stats'></p>");
    //Add attack button
    // THe onlick='attack' adds an attribute to this JQuery method. Meaning when the button is clicked the attack function is called.
    $(".ogres").append("<button onclick='attack()'>Attack the Ogre!</button>");
    updateStats();
}

function updateStats() {
    $("#stats").text("HP: " + hp + " | Gold: " + gold +  " | Ogres Slain: " + numberDefeated);
}


function attack() {
    if (firstTime === true) {
        $(".ogres").append("<div id='current'> Current turn: </div>");
    //Add container for ogre images
        $(".ogres").append("<div id='ogres'></div>");
        $("#ogres").append("<p class='text'></p>");
        $("#ogres").append("<img class='pics'>");
        console.log("Are you working");
        
    }
    if (hp > 0) { // if player is still alive.
        // Interesting random function. It is so simple. 
        if (Math.random() * 100 > gold) {
            gold+=10;
            numberDefeated++;
            // add to webpage
            // Puts text before a picture.
            $(".text").text("You won! +10 gold");
            spawnGold();
        } else {
            gold--;
            hp--;
            $(".text").text("You lost! -1 gold -1 HP");
            spawnOgre();
        }
        updateStats();
    } else {
        $("#ogres").prepend("<p>GameOver</p>");
    }
    firstTime = false;
}

function spawnOgre() {
    $(".pics").attr('src', 'http://www.52insk.com/wp-content/uploads/2015/08/Shrek.jpg');
    
}


function spawnGold() {
    $(".pics").attr('src', 'gold.jpg');
}
//Add game title.
//Add game info.
//Add the stats
//Add Ogre Image;
//When the player clicks the button
//if the player has hp
//if the player defeats the ogre
//Add paragraph saying "you win
//+ Gold to player
//

*/