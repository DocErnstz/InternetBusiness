export class UI {
  // Add a new Product
  getMessages() {
    fetch("https://makoreact.herokuapp.com/messages").then(async (response) => {
      const data = await response.json();
      const board = document.getElementById("Board");

      data.forEach((item) => {
        const element = document.createElement("div");

        element.innerHTML = `
    <div class="msg">
    <div class="profile_icon"><i class="fa fa-user"></i></div>
    <div class="profile_data">
      <div class="name">${item.name}</div>
      <div class="message_text">${item.message}</div>
    </div>
    </div>
        `;

        board.appendChild(element);
      });
    });
  }
  addMessages(msg) {
    fetch("https://makoreact.herokuapp.com/messages/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: msg.name,
        email: msg.email,
        message: msg.message,
      }),
    })
      .then(async (response) => {
        const message = await response.json();
      })
      .catch((error) => console.log(error));
  }
}
