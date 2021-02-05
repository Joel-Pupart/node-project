//game variables
let score = 0;
let yscore = 0;
let oscore = 0;
let yourTurn = false;


var socket = io();

const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const userList = document.getElementById('user-list');

messageInput.focus();

messageInput.addEventListener('keydown', event => {
    if (event.key == 'Enter' && messageInput.value.trim() !== '') {
        socket.emit('chat_message', messageInput.value);
        messageInput.value = '';
    }
});

socket.on('connection', userId => {
    const item = document.createElement('li');
    item.textContent = 'User ' + userId + ' connected';
    chatMessages.appendChild(item);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on('updateUserList', userListObj => {
    userList.innerHTML = "";
    for (const userName in userListObj) {
        userList.innerHTML += `
        <div>
            <p class="user" data-socketid="${ userListObj[userName] }">${ userName }</p>
        </div>`;
    }

    const users = document.getElementsByClassName('user');

    Array.prototype.forEach.call(users, el => {
        el.addEventListener('click', e => {
            socket.emit('sendYo', { socketId: e.currentTarget.dataset.socketid });
        });
    });
});


socket.on('chat_message', msgObj => {
    const item = document.createElement('div');
    item.innerHTML = `
        <div>
            <p><b>${ msgObj.user }</b></p>
            <p>${ msgObj.message }</p>
        </div>
    `
    chatMessages.appendChild(item);
});

socket.on('reciveYo', msgObj => {
    const item = document.createElement('div');
    item.innerHTML = `
        <div>
            <p><b>${ msgObj.user }</b></p>
            <button onclick=acceptInvite("${ msgObj.socketId }") class="invite-button">${ msgObj.user } wants to play</button>
        </div>
    `
    chatMessages.appendChild(item);
});

socket.on('game_on', data => {
    yourTurn = true;
    generateGame(data.socketId);
});

function acceptInvite(id) {
    generateGame(id);
    socket.emit('invite_accepted', id);
} 

document.getElementById('logout').onclick = function() {
    location.href = '/logout';
};

function generateGame(id) {
    document.getElementById('game').innerHTML = `
        <section>
            <div>
                <span>Your Score:</span>
                <span id="yourscore">0</span>
            </div>
            <div>
                <span>Current Score:</span>
                <span id="currentscore">0
            </div>
            <div>
                <span>Opponent Score:</span>
                <span id="opponentscore">0
            </div>
            <div id="dice1">0</div>
            <div id="dice2">0</div>
            <div>
                <button onclick="rollDice('${id}')" id="roll">
                    Roll
                </button>
                <button onclick="giveoverButton('${id}')" id="giveover">
                    Give Over
                </button>
                <button onclick="exitgame('${id}')">
                    Exit Game
                </button>
            </div>
            <div id="info">
            </div>
            <div>
                <div id="chat-messages-private">
                </div>
                <div>
                    <label>
                        <input id="message-input-private" type="text" value="" placeholder="Aa" />
                    </label>
                    <button onclick="sendPrivate('${id}')">Send</button>
                </div>
            </div>
        </section>`;

        if (yourTurn == false) {
            document.getElementById("roll").disabled = true;
            document.getElementById("giveover").disabled = true;
        }
}


function rollDice(id) {
    let firstRoll = Math.floor((Math.random() * 6) + 1);
    let secondRoll = Math.floor((Math.random() * 6) + 1);
    document.getElementById("dice1").innerHTML = firstRoll;
    document.getElementById("dice2").innerHTML = secondRoll;
    
    
    if (firstRoll == 1 || secondRoll == 1) {
        score = 0;
        giveoverButton(id);
    } else {
        score += firstRoll + secondRoll;
        document.getElementById("currentscore").innerHTML = score;
    }
}

function giveoverButton(id) {
    yscore += score;
    score = 0;
    document.getElementById("currentscore").innerHTML = score;
    document.getElementById("yourscore").innerHTML = yscore;
    document.getElementById("roll").disabled = true;
    document.getElementById("giveover").disabled = true;
    socket.emit("give_over", {socketId: id, score: yscore});

    if (yscore >= 100) {
        document.getElementById("info").innerHTML = "You won!";
    } else if(oscore >= 100) {
        document.getElementById("info").innerHTML = "You lost!";
    }
}

socket.on('get_scores', obj => {
    console.log(obj);
    yourTurn = true;
    document.getElementById("roll").disabled = false;
    document.getElementById("giveover").disabled = false;
    document.getElementById("opponentscore").innerHTML = obj.score;
});

function sendPrivate(id) {
    if (document.getElementById("message-input-private").value.trim() !== '') {
        socket.emit('chat_message_private', {message: document.getElementById("message-input-private").value, socketId: id});
        const item = document.createElement('div');
        item.innerHTML = `
            <div>
                <p><b>You</b></p>
                <p>${ document.getElementById("message-input-private").value }</p>
            </div>
        `
        document.getElementById("message-input-private").value = '';
        document.getElementById("chat-messages-private").appendChild(item);
    } 
}

socket.on('chat_message_private', msgObj => {
    console.log(msgObj);
    const item = document.createElement('div');
    item.innerHTML = `
        <div>
            <p><b>${ msgObj.user }</b></p>
            <p>${ msgObj.message }</p>
        </div>
    `
    document.getElementById("chat-messages-private").appendChild(item);
});

function exitgame(id) {
    socket.emit("exit_game", {socketId: id});
    document.getElementById("game").innerHTML = "You closed the game!";
}

socket.on('exit_game', id => {
    document.getElementById("game").innerHTML = "Your opponent closed the game";
})