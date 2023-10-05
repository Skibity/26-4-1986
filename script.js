const input = document.querySelector(".input");

input.focus();
window.addEventListener("click", () => input.focus())

function getInputValue() {
  return document.querySelector(".input").innerHTML;
}

function write(el, text, cb) {
  let index = 0;
  el.innerHTML = "";

  return function append() {
    if (index >= text.length) {
      cb();
      return
    }
    setTimeout(() => {
      el.innerHTML = el.innerHTML.concat(text[index])
      index++;
      append()
    }, Math.floor(Math.random() * (300 - 100 + 1) + 100))
  }
}

document.addEventListener('keydown', ({ code }) => {
  if (code === "Enter") {
    const inputValue = getInputValue().trim().toLowerCase();

    if (inputValue === "--help" || inputValue === "-h") {
      document.querySelector(".input").innerHTML = "";
      document.querySelector(".input").innerHTML = `
        <table>
          <tr>
            <th>Command</th>
            <th>Options</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>--h</td>
            <td>-</td>
            <td>Display all commands</td>
          </tr>
        </table>
      `;
      return;
    } else if (inputValue === "1986") {
      window.location.href = "/login.html"; // Redirect to the login subpage
      return;
    }

    document.querySelector(".input").innerHTML = "";
    document.querySelector(".input").setAttribute("contenteditable", false);

    const processInput = write(document.querySelector(".prefix"), "Processing, please wait...", () => {
      const typeResponse = write(document.querySelector(".prefix"), "C:/User/admin >", () => {
        document.querySelector(".input").setAttribute("contenteditable", true);
      });
      typeResponse();
    });

    processInput();
  }
});
