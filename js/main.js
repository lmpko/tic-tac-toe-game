
let oldContainer = document.getElementById("container")


let drawScore = 0;
let xScore = 0;
let oScore = 0;

let win;
let markTurn = 0;
let result = false

function startGame(){

    let choosePage = document.getElementById("choosePage");
    choosePage.style.display = "none";

    let newContainer = document.createElement("div")
    newContainer.classList.add('container')
    newContainer.setAttribute("id", "newContainer")
    oldContainer.append(newContainer);

    let turn = document.createElement("div")
    turn.classList.add("turn")
    turn.setAttribute("id", "turn")
    newContainer.append(turn)

    let logo = document.createElement("div")
    logo.classList.add("logo")
    logo.setAttribute("id", "logo")
    turn.append(logo)

    let x = document.createElement("span")
    x.classList.add("x")
    x.innerText = "x"
    logo.append(x)

    let o = document.createElement("span")
    o.classList.add("o")
    o.innerText = "o"
    logo.append(o)

    let turninfo = document.createElement("div")
    turninfo.classList.add("turnInfo")
    turninfo.setAttribute("id","turnInfo")
        if (markTurn === 0){
            turninfo.innerText = "X TURN"
            turn.append(turninfo)
        }else if (markTurn === 1){
            turninfo.innerText = "O TURN"
            turn.append(turninfo)
        }


    let restart = document.createElement("div")
    restart.classList.add("restart")
    restart.innerText = "Restart"
    restart.setAttribute('id','restart');
    turn.append(restart)

    let playground = document.createElement("div")
    playground.classList.add("playground")
    newContainer.append(playground)


    for(let i = 0; i < 9; i += 1) {
        let playspace = document.createElement("input")
        playspace.classList.add("playspace");
        playspace.setAttribute("id", "b" +i)
        playspace.classList.add("empty")
        playground.append(playspace)
    }

    let score = document.createElement("div")
    score.classList.add("score")
    newContainer.append(score)

    let scorePlayer1 = document.createElement("div")
    scorePlayer1.classList.add("player1")
    scorePlayer1.innerText = "x"


    score.append(scorePlayer1)
    let showScore1 = document.createElement("div")
    showScore1.setAttribute("id","xScore")
    showScore1.innerText= xScore
    scorePlayer1.append(showScore1)


    let scoreDraw = document.createElement("div")
    scoreDraw.classList.add("draw")
    scoreDraw.innerText = "draw"
    score.append(scoreDraw)
    let showDrawScore = document.createElement("div")
    showDrawScore.setAttribute("id","drawScore")
    showDrawScore.innerText= drawScore
    scoreDraw.append(showDrawScore)

    let scorePlayer2 = document.createElement("div")
    scorePlayer2.classList.add("player2")
    scorePlayer2.innerText = "o"
    score.append(scorePlayer2)
    let showScore2 = document.createElement("div")
    showScore2.setAttribute("id","oScore")
    showScore2.innerText= oScore
    scorePlayer2.append(showScore2)

    // restart game
    if (restart.isConnected ){
        document.getElementById('restart').onclick = function (){
            let restartModalMenu = document.createElement('div')
            restartModalMenu.classList.add('restartModalMenu')
            restartModalMenu.setAttribute("id", "restartModalMenu")
            oldContainer.append(restartModalMenu)

            let restartQuestion = document.createElement('h3')
            restartQuestion.innerText = "RESTART GAME?"
            restartModalMenu.append(restartQuestion)

            let buttons = document.createElement('div')
            buttons.classList.add('buttons')
            restartModalMenu.append(buttons)

            let noRestart = document.createElement('div')
            noRestart.innerText = "No, CANCEL"
            noRestart.classList.add("cancel")
            noRestart.setAttribute('id','cancel')
            buttons.append(noRestart)

            let yesRestart = document.createElement('div')
            yesRestart.innerText = "Yes, RESTART"
            yesRestart.classList.add("restartGame")
            yesRestart.setAttribute('id','restartGame')
            buttons.append(yesRestart)

            if (buttons.isConnected){
                let hide = document.getElementById("restartModalMenu")

                document.getElementById('cancel').onclick = function (){
                    hide.remove()
                }

                document.getElementById('restartGame').onclick = function (){
                    newContainer.remove()
                    hide.remove()
                    document.getElementById("choosePage").style.display = "flex"
                    xScore = 0
                    oScore = 0
                    drawScore = 0
                    markTurn = 0;

                    let winModalMenu = document.getElementById("winModalMenu")
                    if (winModalMenu !== null){
                        winModalMenu.remove()
                    }
                }
            }
        }
    }
}

document.getElementById('cpu-btn').onclick = function(){
    startGame()


    let b0 = document.getElementById("b0")
    let b1 = document.getElementById("b1")
    let b2 = document.getElementById("b2")
    let b3 = document.getElementById("b3")
    let b4 = document.getElementById("b4")
    let b5 = document.getElementById("b5")
    let b6 = document.getElementById("b6")
    let b7 = document.getElementById("b7")
    let b8 = document.getElementById("b8")

    let playspace2 = [b0,b1,b2,b3,b4,b5,b6,b7,b8]

    let checkbox = document.getElementById("checkbox")

    if (checkbox.checked === false){
        markTurn = 0
        changeMarkTurn()
    }else if (checkbox.checked === true){
        markTurn = 1
        changeMarkTurn()
    }

    //player draw marks


    b0.onclick = function (){
        b0.disabled = true
        b0.classList.remove("empty")
        if (markTurn === 0){
            b0.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else if (markTurn === 1) {
            b0.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        const index = playspace2.indexOf(b0);
        if (index > -1) {
            playspace2.splice(index, 1);
        }
        if (playspace2.length === 0){
            checkWin()
        }else {
            cpuMove()
        }
        pushPlayspaceArray()
    }

    b1.onclick = function (){
        b1.disabled = true
        b1.classList.remove("empty")
        if (markTurn === 0){
            b1.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()

        }else if (markTurn === 1) {
            b1.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()

        }
        const index = playspace2.indexOf(b1);
        if (index > -1) {
            playspace2.splice(index, 1);
        }

        if (playspace2.length === 0){
            checkWin()
        }else{
            cpuMove()
        }
        pushPlayspaceArray()
    }

    b2.onclick = function (){
        b2.disabled = true
        b2.classList.remove("empty")
        if (markTurn === 0){
            b2.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()

        }else if (markTurn === 1) {
            b2.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()

        }
        const index = playspace2.indexOf(b2);
        if (index > -1) {
            playspace2.splice(index, 1);
        }

        if (playspace2.length === 0){
            checkWin()
        }else{
            cpuMove()
        }
        pushPlayspaceArray()
    }

    b3.onclick = function (){
        b3.disabled = true
        b3.classList.remove("empty")
        if (markTurn === 0){
            b3.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()

        }else if (markTurn === 1) {
            b3.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()

        }
        const index = playspace2.indexOf(b3);
        if (index > -1) {
            playspace2.splice(index, 1);
        }

        if (playspace2.length === 0){
            checkWin()
        }else{
            cpuMove()
        }
        pushPlayspaceArray()
    }

    b4.onclick = function (){
        b4.disabled = true
        b4.classList.remove("empty")
        if (markTurn === 0){
            b4.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()

        }else if (markTurn === 1) {
            b4.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()

        }
        const index = playspace2.indexOf(b4);
        if (index > -1) {
            playspace2.splice(index, 1);
        }

        if (playspace2.length === 0){
            checkWin()
        }else{
            cpuMove()
        }
        pushPlayspaceArray()
    }

    b5.onclick = function (){
        b5.disabled = true
        b5.classList.remove("empty")
        if (markTurn === 0){
            b5.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()

        }else if (markTurn === 1) {
            b5.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()

        }
        const index = playspace2.indexOf(b5);
        if (index > -1) {
            playspace2.splice(index, 1);
        }

        if (playspace2.length === 0){
            checkWin()
        }else{
            cpuMove()
        }
        pushPlayspaceArray()
    }

    b6.onclick = function (){
        b6.disabled = true
        b6.classList.remove("empty")
        if (markTurn === 0){
            b6.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()

        }else if (markTurn === 1) {
            b6.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()

        }

        const index = playspace2.indexOf(b6);
        if (index > -1) {
            playspace2.splice(index, 1);
        }

        if (playspace2.length === 0){
            checkWin()
        }else{
            cpuMove()
        }
        pushPlayspaceArray()
    }

    b7.onclick = function (){
        b7.disabled = true
        b7.classList.remove("empty")
        if (markTurn === 0){
            b7.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()

        }else if (markTurn === 1) {
            b7.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()

        }

        const index = playspace2.indexOf(b7);
        if (index > -1) {
            playspace2.splice(index, 1);
        }

        if (playspace2.length === 0){
            checkWin()
        }else{
            cpuMove()
        }
        pushPlayspaceArray()
    }

    b8.onclick = function (){
        b8.disabled = true
        b8.classList.remove("empty")
        if (markTurn === 0){
            b8.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()

        }else if (markTurn === 1) {
            b8.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()

        }

        const index = playspace2.indexOf(b8);
        if (index > -1) {
            playspace2.splice(index, 1);
        }

        if (playspace2.length === 0){
            checkWin()
        }else{
            cpuMove()
        }
        pushPlayspaceArray()
    }

    //cpu draw marks
    function cpuMove(){
        if (checkbox.checked === false){
            let pickCPU = playspace2[Math.floor(Math.random()*playspace2.length)];

            const index = playspace2.indexOf(pickCPU);
            if (index > -1) {
                playspace2.splice(index, 1);
            }

            pickCPU.classList.add("y-mark")
            pickCPU.disabled = true
            pickCPU.classList.remove("empty")

            markTurn = 0
            changeMarkTurn()
            if (playspace2.length !== 0){
                checkWin()
            }

        }else if (checkbox.checked === true){
            let pickCPU = playspace2[Math.floor(Math.random()*playspace2.length)];


            const index = playspace2.indexOf(pickCPU);
            if (index > -1) {
                playspace2.splice(index, 1);
            }

            pickCPU.classList.add("x-mark")
            pickCPU.disabled = true
            pickCPU.classList.remove("empty")

            markTurn = 1
            changeMarkTurn()
            if (playspace2.length !== 0){
                checkWin()
            }

        }
       pushPlayspaceArray()
    }

    function pushPlayspaceArray(){
        if (result === true){
            if (checkbox.checked === false){
                markTurn = 0
                changeMarkTurn()
            }else if (checkbox.checked === true){
                markTurn = 1
                changeMarkTurn()
            }
            playspace2.splice(0, playspace2.length);
            playspace2.push(b0,b1,b2,b3,b4,b5,b6,b7,b8)
        }
    }


}

document.getElementById('pl-btn').onclick = function(){
    startGame()
    let b0 = document.getElementById("b0")
    let b1 = document.getElementById("b1")
    let b2 = document.getElementById("b2")
    let b3 = document.getElementById("b3")
    let b4 = document.getElementById("b4")
    let b5 = document.getElementById("b5")
    let b6 = document.getElementById("b6")
    let b7 = document.getElementById("b7")
    let b8 = document.getElementById("b8")

    let playspace = [b0,b1,b2,b3,b4,b5,b6,b7,b8]
    //player draw marks

    b0.onclick = function (){
        b0.disabled = true
        b0.classList.remove("empty")
        if (markTurn === 0){
            b0.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else{
            b0.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        checkWin()
    }

    b1.onclick = function (){
        b1.disabled = true
        b1.classList.remove("empty")
        if (markTurn === 0){
            b1.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else{
            b1.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        checkWin()
    }

    b2.onclick = function (){
        b2.disabled = true
        b2.classList.remove("empty")
        if (markTurn === 0){
            b2.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else{
            b2.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        checkWin()
    }

    b3.onclick = function (){
        b3.disabled = true
        b3.classList.remove("empty")
        if (markTurn === 0){
            b3.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else{
            b3.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        checkWin()
    }

    b4.onclick = function (){
        b4.disabled = true
        b4.classList.remove("empty")
        if (markTurn === 0){
            b4.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else{
            b4.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        checkWin()
    }
    b5.onclick = function (){
        b5.disabled = true
        b5.classList.remove("empty")
        if (markTurn === 0){
            b5.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else{
            b5.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        checkWin()
    }
    b6.onclick = function (){
        b6.disabled = true
        b6.classList.remove("empty")
        if (markTurn === 0){
            b6.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else{
            b6.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        checkWin()
    }
    b7.onclick = function (){
        b7.disabled = true
        b7.classList.remove("empty")
        if (markTurn === 0){
            b7.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else{
            b7.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        checkWin()
    }
    b8.onclick = function (){
        b8.disabled = true
        b8.classList.remove("empty")
        if (markTurn === 0){
            b8.classList.add("x-mark")
            markTurn = 1
            changeMarkTurn()
        }else{
            b8.classList.add("y-mark")
            markTurn = 0
            changeMarkTurn()
        }
        checkWin()
    }

}

//check win
function checkWin(){
    if (b0.classList.contains("x-mark") && b1.classList.contains("x-mark") && b2.classList.contains("x-mark") ||
        (b3.classList.contains("x-mark") && b4.classList.contains("x-mark") && b5.classList.contains("x-mark")) ||
        (b6.classList.contains("x-mark") && b7.classList.contains("x-mark") && b8.classList.contains("x-mark")) ||
        //columns
        (b0.classList.contains("x-mark") && b3.classList.contains("x-mark") && b6.classList.contains("x-mark")) ||
        (b1.classList.contains("x-mark") && b4.classList.contains("x-mark") && b7.classList.contains("x-mark")) ||
        (b2.classList.contains("x-mark") && b5.classList.contains("x-mark") && b8.classList.contains("x-mark")) ||
        //diagonals
        (b0.classList.contains("x-mark") && b4.classList.contains("x-mark") && b8.classList.contains("x-mark")) ||
        (b2.classList.contains("x-mark") && b4.classList.contains("x-mark") && b6.classList.contains("x-mark"))
    ) {
        win = "x"
        xScore = xScore + 1
        function drawXScore(){
            let scoreNumber = document.getElementById('xScore');
            scoreNumber.innerText = xScore;
        }
        drawXScore()
        result = true
        winGame()
    }
    else if (b0.classList.contains("y-mark") && b1.classList.contains("y-mark") && b2.classList.contains("y-mark") ||
        (b3.classList.contains("y-mark") && b4.classList.contains("y-mark") && b5.classList.contains("y-mark")) ||
        (b6.classList.contains("y-mark") && b7.classList.contains("y-mark") && b8.classList.contains("y-mark")) ||
        //columns
        (b0.classList.contains("y-mark") && b3.classList.contains("y-mark") && b6.classList.contains("y-mark")) ||
        (b1.classList.contains("y-mark") && b4.classList.contains("y-mark") && b7.classList.contains("y-mark")) ||
        (b2.classList.contains("y-mark") && b5.classList.contains("y-mark") && b8.classList.contains("y-mark")) ||
        //diagonals
        (b0.classList.contains("y-mark") && b4.classList.contains("y-mark") && b8.classList.contains("y-mark")) ||
        (b2.classList.contains("y-mark") && b4.classList.contains("y-mark") && b6.classList.contains("y-mark"))
    ){
        win = "o";
        oScore = oScore + 1
        function drawOScore(){
            let scoreNumber = document.getElementById('oScore');
            scoreNumber.innerText = oScore;
        }
        drawOScore()
        result = true
        winGame()
    }
    else if ((b0.classList.contains("x-mark") || b0.classList.contains("y-mark")) &&
        (b1.classList.contains("x-mark") || b1.classList.contains("y-mark")) &&
        (b2.classList.contains("x-mark") || b2.classList.contains("y-mark")) &&
        (b3.classList.contains("x-mark") || b3.classList.contains("y-mark")) &&
        (b4.classList.contains("x-mark") || b4.classList.contains("y-mark")) &&
        (b5.classList.contains("x-mark") || b5.classList.contains("y-mark")) &&
        (b6.classList.contains("x-mark") || b6.classList.contains("y-mark")) &&
        (b7.classList.contains("x-mark") || b7.classList.contains("y-mark")) &&
        (b8.classList.contains("x-mark") || b8.classList.contains("y-mark")) ) {

        win = "draw"
        drawScore = drawScore + 1
        function drawTieScore(){
            let scoreNumber = document.getElementById('drawScore');
            scoreNumber.innerText = drawScore;
        }
        drawTieScore()
        result = true
        winGame()
    }
}


function winGame(){
    let b0 = document.getElementById("b0")
    let b1 = document.getElementById("b1")
    let b2 = document.getElementById("b2")
    let b3 = document.getElementById("b3")
    let b4 = document.getElementById("b4")
    let b5 = document.getElementById("b5")
    let b6 = document.getElementById("b6")
    let b7 = document.getElementById("b7")
    let b8 = document.getElementById("b8")

    let playspace = [b0,b1,b2,b3,b4,b5,b6,b7,b8]

    let winModalMenu = document.createElement("div")
    winModalMenu.classList.add("winModalMenu")
    winModalMenu.setAttribute("id","winModalMenu")

    let container = document.getElementById("container")

    container.append(winModalMenu)

    playspace.forEach(function(playspace){
        playspace.disabled = true;
    })

    let youWon = document.createElement("h4")
    let newGameQuestion = document.createElement('h2')
    youWon.innerText = "YOU WON!"
    winModalMenu.append(youWon)

    if (win === "x"){
        newGameQuestion.innerText = "X TAKES THE ROUND"
        newGameQuestion.style.color = "#00aaac"
        winModalMenu.append(newGameQuestion)
    }else if (win === "o"){
        newGameQuestion.innerText = "O TAKES THE ROUND"
        newGameQuestion.style.color = "#ff9900"
        winModalMenu.append(newGameQuestion)
    }else if (win === "draw"){
        youWon.innerText = "NO ONE WON!"
        newGameQuestion.innerText = "IT'S DRAW"
        winModalMenu.append(newGameQuestion)
    }



    let buttons = document.createElement('div')
    buttons.classList.add('buttons')
    winModalMenu.append(buttons)

    let quit = document.createElement('div')
    quit.innerText = "QUIT"
    quit.classList.add("cancel")
    quit.setAttribute('id','quit')
    buttons.append(quit)

    let newGame = document.createElement('div')
    newGame.innerText = "NEXT ROUND"
    newGame.classList.add("newGame")
    newGame.setAttribute('id','newGame')
    buttons.append(newGame)

    if (buttons.isConnected){

        let hide = document.getElementById("winModalMenu")
        let newContainer = document.getElementById("newContainer")

        document.getElementById('quit').onclick = function (){
            hide.remove()
            newContainer.remove()
            document.getElementById("choosePage").style.display = "flex"
            xScore = 0
            oScore = 0
            drawScore = 0
            markTurn = 0;
        }

        document.getElementById('newGame').onclick = function (){
            hide.remove()
            result = false
            playspace.forEach(function(playspace){
                playspace.disabled = false;
                playspace.classList.add("empty")
                playspace.classList.remove("x-mark")
                playspace.classList.remove("y-mark")
            })
        }
    }

}

function changeMarkTurn(){
    let mark = document.getElementById("turnInfo")
        if (markTurn === 0){
            mark.innerText = "X TURN"
        }else if (markTurn === 1){
            mark.innerText = "O TURN"
        }
}

