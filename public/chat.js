const socket = io();
const messageList = document.getElementById("messageList");

document.getElementById("sendMessage").addEventListener("click", e => {
  e.preventDefault();

  let message = document.getElementById("chatInput").value;

  socket.emit("sendMessage", message, () => {
    document.querySelector("input").value = "";
  });
});

socket.on("message", message => {
  // console.log(message);
  messageList.innerHTML += `<li>${message}</li>`;
  // document.getElementById("messageOutput").textContent = message;
});
