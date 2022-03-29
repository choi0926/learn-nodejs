/* eslint-disable no-undef */
const socket = io();

const enterContainer = document.querySelector('.enter-container');
const enterForm = enterContainer.querySelector('form');

const roomContainer = document.querySelector('.room-container');
const roomInfo = roomContainer.querySelector('h2');

enterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nicknameInput = enterForm.querySelector('input[name=nickname]');
  const roomNameInput = enterForm.querySelector('input[name=room-name]');

  const nickname = nicknameInput.value.trim();
  const roomName = roomNameInput.value.trim();

  if (nickname && roomName) {
    socket.emit('enterRoom', nickname, roomName, () => {
      roomInfo.innerText = `Room Name : ${roomName}`;

      enterContainer.hidden = true;
      roomContainer.hidden = false;
    });
  }
});

socket.on('updateRooms', (rooms) => {
  console.log(rooms);
});
