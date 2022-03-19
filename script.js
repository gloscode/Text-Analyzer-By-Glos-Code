let check = document.querySelector(".check");
let nav = document.querySelector("nav");
let aler = document.querySelector(".al");
let form = document.querySelector(".form-check");
let label = document.querySelector(".label");
let clearBtn = document.querySelector("#btn4");
let textarea = document.querySelector("#mybox");
let div = document.querySelector(".cv");
let copyBtn = document.querySelector("#btn3");
let upperBtn = document.querySelector("#btn");
let lowerBtn = document.querySelector("#btn2");
let removeBtn = document.querySelector("#btn5");
let noBtn = document.querySelector("#btn6");
let search = document.querySelector(".search");
let navHeading = document.querySelector(".nav-heading");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let body = document.querySelector(".body");

search.addEventListener("click", (e) => {
  e.preventDefault();
});

navHeading.addEventListener("click", (e) => {
  e.preventDefault();
});

home.addEventListener("click", (e) => {
  e.preventDefault();
});

about.addEventListener("click", (e) => {
  e.preventDefault();
});

check.addEventListener("click", () => {
  if (nav.classList.contains("bg-light", "navbar-light")) {
    aler.innerHTML = `<div class="alert alert-success d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg><div>Dark mode has been enabled</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
    nav.classList.remove("bg-light", "navbar-light");
    nav.classList.add("bg-dark", "navbar-dark");
    form.style.color = "white";
    label.innerHTML = "Light mode";
    body.style.backgroundColor = "#212529";
    document.querySelector("hr").style.backgroundColor = "white";
  } else if (nav.classList.contains("bg-dark", "navbar-dark")) {
    aler.innerHTML = `<div class="alert alert-success d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg><div>Light mode has been enabled</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
    nav.classList.remove("bg-dark", "navbar-dark");
    nav.classList.add("bg-light", "navbar-light");
    form.style.color = "black";
    label.innerHTML = "Dark mode";
    body.style.backgroundColor = "white";
    document.querySelector("hr").style.backgroundColor = "black";
  }
});

clearBtn.addEventListener("click", () => {
  if (textarea.value == "") {
    aler.innerHTML = `<div class="alert alert-danger d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg><div>No text to process</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  } else if (textarea.value != "") {
    aler.innerHTML = `<div class="alert alert-success d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg><div>Text cleared</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  }
  textarea.value = "";
  div.innerHTML = "";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(textarea.value);
  div.innerHTML = "";
  if (textarea.value == "") {
    aler.innerHTML = `<div class="alert alert-danger d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg><div>No text to process</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  } else if (textarea.value != "") {
    aler.innerHTML = `<div class="alert alert-success d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg><div>Copy To Clipboard</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  }
});

upperBtn.addEventListener("click", () => {
  textarea.value = textarea.value.toUpperCase();
  div.innerHTML = "";
  if (textarea.value == "") {
    aler.innerHTML = `<div class="alert alert-danger d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg><div>No text to process</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  } else if (textarea.value != "") {
    aler.innerHTML = `<div class="alert alert-success d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg><div>Text are in uppercase</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  }
});

lowerBtn.addEventListener("click", () => {
  textarea.value = textarea.value.toLowerCase();
  div.innerHTML = "";
  if (textarea.value == "") {
    aler.innerHTML = `<div class="alert alert-danger d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg><div>No text to process</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  } else if (textarea.value != "") {
    aler.innerHTML = `<div class="alert alert-success d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg><div>Text are in lowercase</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  }
});

removeBtn.addEventListener("click", () => {
  newText = textarea.value.split(/[ ]+/);
  textarea.value = newText.join(" ");
  div.innerHTML = "";
  if (textarea.value == "") {
    aler.innerHTML = `<div class="alert alert-danger d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg><div>No text to process</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  } else if (textarea.value != "") {
    aler.innerHTML = `<div class="alert alert-success d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg><div>Extra spaces removed</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  }
});

noBtn.addEventListener("click", () => {
  if (textarea.value != "" && !textarea.value.match(/\056/gi)) {
    setTimeout(function () {
      div.innerHTML = `<hr class="my-4"><div class= "my-4">
<span class="span btn btn-primary">words:
${
  textarea.value.match(/[a-zA-Z]+/gi).length
} </span><br><span class="btn btn-primary my-1">characters: ${
        textarea.value.match(/[a-z]/gi).length
      }</span><br><span class="btn btn-primary my-1">Sentences: 0</span></div>`;
    }, 1000);
    setTimeout(function () {
      div.innerHTML = null;
    }, 3000);
  } else if (textarea.value == "" && !textarea.value.match(/\056/gi)) {
    setTimeout(function () {
      div.innerHTML = `<hr class="my-4"><div class= "my-4">
<span class="span btn btn-primary">words: 0</span><br><span class="btn btn-primary my-1">characters: 0</span><br><span class="btn btn-primary my-1">Sentences: 0</span></div>`;
    }, 1000);
    setTimeout(function () {
      div.innerHTML = null;
    }, 3000);
  } else if (textarea.value != "" && textarea.value.match(/\056/gi)) {
    setTimeout(function () {
      div.innerHTML = `<hr class="my-4"><div class= "my-4">
<span class="span btn btn-primary">words:
${
  textarea.value.match(/[a-zA-Z]+/gi).length
} </span><br><span class="btn btn-primary my-1">characters: ${
        textarea.value.match(/[a-z]/gi).length
      }</span><br><span class="btn btn-primary my-1">Sentences: ${
        textarea.value.match(/\056/gi).length
      }</span></div>`;
    }, 1000);
    setTimeout(function () {
      div.innerHTML = null;
    }, 3000);
  }

  if (textarea.value == "") {
    aler.innerHTML = `<div class="alert alert-danger d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg><div>There is no text to process</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  } else if (textarea.value != "") {
    aler.innerHTML = `<div class="alert alert-success d-flex align-items-center flex-wrap" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg><div>Processing the text</div> </div>`;
    setTimeout(function () {
      aler.innerHTML = null;
    }, 1000);
  }
});
