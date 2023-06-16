// Тоглоомын бүх газарт ашиглагдах глобал хувьсагчид

// Аль тоглогч шоо шидэх вэ гэдгийг хадгална
var activePlayer;
// Хоёр тоглогчийн цуглуулсан оноонууд
var scores;
// Active тоглогчийн цуглулусан оноонууд
var roundScore;

// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод хадгалах
var diceDom = document.querySelector('.dice');
initGame();
// Тоглоомыг шинээр эхлэхэд бэлдэнэ
function initGame() {
    // Тоглогчийн ээлжийг хадгалах хувьсагч
    // Тоглогч 1 -> 0, Тоглогч  2 ->1
    activePlayer = 0;
    // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];

    // Тоглогчийн өөрийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;

    // Шооны аль талаараа буусныг хадгалах хувьсагч(1-6 дотор утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө)

    // Програм эхлэхэд бэлтгэх
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Тоглогчдын нэрийг буцааж гаргах(WINNER!!! бичгийг арилгах)

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Улаан өнгийг хэвийн болгох
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    diceDom.style = "display:none";
}

// Шоог шидэх Event Listener
document.querySelector('.btn-roll').addEventListener('click',
    function () {
        // 1-6 дотор санамсаргүй тоог гаргаж авах
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        // Шооны зургыг вэб дээр гаргаж ирнэ
        diceDom.style.display = "block";

        // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирэх
        diceDom.src = "dice-" + diceNumber + ".png";

        // Буусан тоо 1-ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
        if (diceNumber !== 1) {
            // 1-ээс ялгаатай тоо буусан тул буусан тоог тоглогчийн оноонд нэмж өгнө
            roundScore += diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        // 1 буусан тул тоглогчийн ээлжийг сольно
        else {
            switchToNextPlayer();
        }
    });

// HOLD товчны Event Listener
document.querySelector('.btn-hold').addEventListener('click', function () {
    // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө
    scores[activePlayer] += roundScore;

    // Дэлгэц дээрх оноог нь өөрчилнө
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Уг тоглогч хожсон эсэхийг(оноо нь 100-с их эсэх) шалгах
    if (scores[activePlayer] >= 10) {
        // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
    }
    else {
        // Тоглогчийн ээлжийг сольно
        switchToNextPlayer();
    }
})

// Тоглох ээлжийг дараачийн тоглогч руу шилжүүлэх
function switchToNextPlayer() {
    // Ээлжиндээ буулгасан оноог 0 болгоно
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';


    // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // Улаан цэгийг шилжүүлэх

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгоно
    diceDom.style.display = "none";
}

// NEW GAME[Шинэ тоглоом эхлүүлэх] Event Listener

document.querySelector('.btn-new').addEventListener('click', initGame);