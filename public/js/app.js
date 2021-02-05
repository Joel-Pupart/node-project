//game variables
let score = 0;
let yscore = 0;
let oscore = 0;
let yourTurn = false;

let dice1 = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 26.989 26.989" style="enable-background:new 0 0 26.989 26.989;" xml:space="preserve">
<g>
<path d="M24.842,0.615H2.146C0.959,0.615,0,1.576,0,2.76v21.469c0,1.182,0.959,2.145,2.146,2.145h22.695
   c1.186,0,2.148-0.963,2.148-2.145V2.76C26.99,1.576,26.027,0.615,24.842,0.615z M13.494,15.525c-1.531,0-2.777-1.244-2.777-2.775
   c0-1.535,1.246-2.781,2.777-2.781c1.533,0,2.777,1.246,2.777,2.781C16.271,14.281,15.027,15.525,13.494,15.525z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
let dice2 = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 26.986 26.986" style="enable-background:new 0 0 26.986 26.986;" xml:space="preserve">
<g>
<path d="M0.614,2.145V24.84c0,1.188,0.961,2.146,2.145,2.146h21.467c1.184,0,2.146-0.959,2.146-2.146V2.145
   C26.372,0.963,25.409,0,24.225,0H2.759C1.575,0,0.614,0.963,0.614,2.145z M8.778,20.82c0,1.533-1.244,2.779-2.777,2.779
   c-1.535,0-2.777-1.246-2.777-2.779c0-1.531,1.242-2.777,2.777-2.777C7.534,18.043,8.778,19.289,8.778,20.82z M23.696,5.596
   c0,1.535-1.246,2.779-2.779,2.779c-1.531,0-2.775-1.244-2.775-2.779c0-1.533,1.244-2.777,2.775-2.777
   C22.45,2.818,23.696,4.062,23.696,5.596z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
let dice3 = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 26.989 26.989" style="enable-background:new 0 0 26.989 26.989;" xml:space="preserve">
<g>
<path d="M0.616,2.148v22.695c0,1.186,0.959,2.146,2.145,2.146h21.467c1.184,0,2.146-0.961,2.146-2.146V2.148
   C26.374,0.967,25.41,0,24.227,0H2.761C1.575,0,0.616,0.967,0.616,2.148z M8.778,20.824c0,1.531-1.242,2.779-2.777,2.779
   c-1.533,0-2.777-1.248-2.777-2.779c0-1.533,1.244-2.779,2.777-2.779C7.536,18.045,8.778,19.291,8.778,20.824z M23.695,5.598
   c0,1.535-1.242,2.777-2.777,2.777c-1.533,0-2.779-1.242-2.779-2.777c0-1.533,1.246-2.777,2.779-2.777
   C22.453,2.82,23.695,4.064,23.695,5.598z M16.27,13.496c0,1.535-1.242,2.779-2.777,2.779c-1.531,0-2.777-1.244-2.777-2.779
   c0-1.533,1.246-2.777,2.777-2.777C15.028,10.719,16.27,11.963,16.27,13.496z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
let dice4 = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 26.988 26.988" style="enable-background:new 0 0 26.988 26.988;" xml:space="preserve">
<g>
<path d="M24.84,0.616H2.145C0.959,0.616,0,1.579,0,2.762v21.465c0,1.184,0.959,2.145,2.145,2.145H24.84
   c1.186,0,2.148-0.961,2.148-2.145V2.762C26.988,1.579,26.025,0.616,24.84,0.616z M6.164,8.78c-1.533,0-2.777-1.244-2.777-2.775
   c0-1.535,1.244-2.779,2.777-2.779c1.535,0,2.779,1.244,2.779,2.779C8.943,7.536,7.699,8.78,6.164,8.78z M21.164,23.62
   c-1.535,0-2.779-1.244-2.779-2.777s1.244-2.777,2.779-2.777c1.531,0,2.777,1.244,2.777,2.777S22.695,23.62,21.164,23.62z
    M21.004,8.829c-1.533,0-2.777-1.244-2.777-2.775c0-1.535,1.244-2.777,2.777-2.777s2.777,1.242,2.777,2.777
   C23.781,7.585,22.537,8.829,21.004,8.829z M6.232,23.557c-1.529,0-2.777-1.244-2.777-2.779c0-1.531,1.248-2.775,2.777-2.775
   c1.535,0,2.779,1.244,2.779,2.775C9.012,22.313,7.768,23.557,6.232,23.557z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
let dice5 = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384 384"
style="enable-background:new 0 0 384 384;" xml:space="preserve">
<g>
    <g>
        <path d="M341.333,0H42.667C19.093,0,0,19.093,0,42.667v298.667C0,364.907,19.093,384,42.667,384h298.667
C364.907,384,384,364.907,384,341.333V42.667C384,19.093,364.907,0,341.333,0z M96,320c-17.707,0-32-14.293-32-32s14.293-32,32-32
s32,14.293,32,32S113.707,320,96,320z M96,128c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S113.707,128,96,128z
M192,224c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S209.707,224,192,224z M288,320c-17.707,0-32-14.293-32-32
s14.293-32,32-32s32,14.293,32,32S305.707,320,288,320z M288,128c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32
S305.707,128,288,128z" />
    </g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
let dice6 = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 26.99 26.99" style="enable-background:new 0 0 26.99 26.99;" xml:space="preserve">
<g>
<path d="M24.844,0.616H2.146C0.96,0.616,0,1.577,0,2.761v21.467c0,1.184,0.96,2.145,2.146,2.145h22.698
   c1.182,0,2.146-0.961,2.146-2.145V2.761C26.99,1.577,26.025,0.616,24.844,0.616z M6.168,8.78c-1.533,0-2.779-1.244-2.779-2.779
   c0-1.531,1.246-2.777,2.779-2.777c1.534,0,2.777,1.246,2.777,2.777C8.945,7.536,7.702,8.78,6.168,8.78z M20.949,16.272
   c-1.535,0-2.778-1.242-2.778-2.777c0-1.533,1.243-2.777,2.778-2.777c1.533,0,2.779,1.244,2.779,2.777
   C23.729,15.03,22.482,16.272,20.949,16.272z M6.208,16.272c-1.534,0-2.777-1.242-2.777-2.777c0-1.533,1.243-2.777,2.777-2.777
   s2.777,1.244,2.777,2.777C8.985,15.03,7.742,16.272,6.208,16.272z M21.165,23.62c-1.532,0-2.778-1.244-2.778-2.777
   s1.246-2.777,2.778-2.777c1.534,0,2.778,1.244,2.778,2.777S22.699,23.62,21.165,23.62z M21.006,8.828
   c-1.533,0-2.777-1.244-2.777-2.775c0-1.533,1.244-2.777,2.777-2.777s2.777,1.244,2.777,2.777
   C23.783,7.583,22.539,8.828,21.006,8.828z M6.235,23.557c-1.533,0-2.777-1.244-2.777-2.777c0-1.535,1.244-2.777,2.777-2.777
   c1.534,0,2.779,1.242,2.779,2.777C9.015,22.313,7.77,23.557,6.235,23.557z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;


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
        <div  class="contacts">
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
    document.getElementById('private').innerHTML = `
        <div id="info"></div>
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
    `;
    document.getElementById('game').innerHTML = `
    <section class="game-container">
        <div class="score">
            <span>Your Score:</span>
            <span id="yourscore">0</span>
        </div>
        <div class="score-current">
            <div class="pig">Big Pig</div>
            <div class="score1">
                <span>Current Score:</span>
                <span id="currentscore">0</span>
            </div>
            <div class="dice">
                <div id="dice1">
                </div>
                <div id="dice2">
                </div>
            </div>
            <div>
                <button class="button" onclick="rollDice('${id}')" id="roll" style="margin:5px;">
                    Roll
                </button>
                <button class="button" onclick="giveoverButton('${id}')" id="giveover" style="margin:5px;">
                    Give Over
                </button>
                <button class="button" onclick="exitgame('${id}')" id="exit-game" style="margin:5px;">Exit game</button>
            </div>
        </div>
        <div class="score">
            <span>Opponent Score:</span>
            <span id="opponentscore">0</span>
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
    switch (firstRoll) {
        case 1:
            document.getElementById("dice1").innerHTML = dice1;
            break;
        case 2:
            document.getElementById("dice1").innerHTML = dice2;
            break;
        case 3:
            document.getElementById("dice1").innerHTML = dice3;
            break;
        case 4:
            document.getElementById("dice1").innerHTML = dice4;
            break;
        case 5:
            document.getElementById("dice1").innerHTML = dice5;
            break;
        case 6:
            document.getElementById("dice1").innerHTML = dice6;
            break;
        case 0:
            document.getElementById("dice1").innerHTML = dice1;
            break;
      }
    switch (secondRoll) {
        case 1:
            document.getElementById("dice2").innerHTML = dice1;
            break;
        case 2:
            document.getElementById("dice2").innerHTML = dice2;
            break;
        case 3:
            document.getElementById("dice2").innerHTML = dice3;
            break;
        case 4:
            document.getElementById("dice2").innerHTML = dice4;
            break;
        case 5:
            document.getElementById("dice2").innerHTML = dice5;
            break;
        case 6:
            document.getElementById("dice2").innerHTML = dice6;
            break;
        case 0:
            document.getElementById("dice2").innerHTML = dice1;
            break;
      }
    
    
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