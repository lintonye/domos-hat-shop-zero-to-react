let buttons = document.getElementsByTagName("button");

function text(title, clazz) {
  let node = document.createElement("div");
  node.classList.add(clazz);
  node.appendChild(document.createTextNode(title));
  return node;
}

let greetings = ["Hi, Domo!", "How are you?", "What's your plan for today?"];
let greetingIdx = 0;

buttons.item(0).addEventListener("click", () => {
  let conversation = document.getElementById("conversation");
  conversation.appendChild(
    text(
      greetings[greetingIdx < greetings.length ? greetingIdx++ : 0],
      "you-chat"
    )
  );
  setTimeout(() => {
    conversation.appendChild(text("I am Groot!", "domo-chat"));
  }, 1000);
});
