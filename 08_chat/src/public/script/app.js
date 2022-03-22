/* eslint-disable no-undef */
const socket = io();

const enterContainer = document.querySelector('.enter-container');
const enterForm = enterContainer.querySelector('form');

enterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nicknameInput = enterForm.querySelector('input[name=nickname]');
  const roomNameInput = enterForm.querySelector('input[name=room-name]');

  const nickname = nicknameInput.value.trim();
  const roomName = roomNameInput.value.trim();

  console.log(nickname, roomName);
});
