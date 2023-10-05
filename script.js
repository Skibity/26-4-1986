const input = document.querySelector(".input");
let isProcessRunning = false; // Flag to track if a process is running

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

document.addEventListener('keydown', async ({ code }) => {
  if (code === "Enter" && !isProcessRunning) { // Check if a process is not already running
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
    } else if (inputValue === "login") {
      // Set the flag to indicate that a process is running
      isProcessRunning = true;

      // Show "Processing, please wait..." while loading
      document.querySelector(".input").innerHTML = "";
      const processInput = write(document.querySelector(".prefix"), "Processing, please wait...", async () => {
        // Load the login page
        const response = await fetch("/login.html");
        const loginPageContent = await response.text();
        
        // Replace the current page content with the loaded login page content
        document.querySelector(".prefix").innerHTML = "";
        document.querySelector(".input").innerHTML = loginPageContent;

        // Reset the flag when the process is complete
        isProcessRunning = false;
      });
      
      processInput();
    } else {
      // Set the flag to indicate that a process is running
      isProcessRunning = true;

      document.querySelector(".input").innerHTML = "";
      document.querySelector(".input").setAttribute("contenteditable", false);

      const processInput = write(document.querySelector(".prefix"), "Processing, please wait...", () => {
        const typeResponse = write(document.querySelector(".prefix"), "C:/User/admin >", () => {
          document.querySelector(".input").setAttribute("contenteditable", true);

          // Reset the flag when the process is complete
          isProcessRunning = false;
        });
        typeResponse();
      });

      processInput();
    }
  }
});
