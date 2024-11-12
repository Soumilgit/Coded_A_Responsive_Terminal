// Select DOM elements
const before = document.getElementById("before");
const liner = document.getElementById("liner");
const command = document.getElementById("typer");
const textarea = document.getElementById("texter");
const terminal = document.getElementById("terminal");

// Initialize variables
let git = 0;
let pw = false;
let pwd = false;
let commands = JSON.parse(localStorage.getItem("commands")) || [];

// Define banner content to persist across sessions
const bannerContent = [
  '<span class="index">Soumil Mukhopadhyay (SM) Not A Corp. . All knights reserved.</span>',
  "  _____   ______    __     __    _____________   ______   _        _____________ ",
  "|  ____| |  __  |  |  |   |  |  |  _       _  | |_    _| | |      |  _      _   |",
  "| |____  | |  | |  |  |   |  |  | | | | | | | |   |  |   | |      | | | | | | | |",
  "|____  | | |  | |  |  |   |  |  | | | |_| | | |   |  |   | |      | | | |_| | | |",
  "  ___| | | |__| |  |  |___|  |  | | |_____| | |  _|  |_  | |___   | | |_____| | |",
  "|______| |______|  |_________|  |_|         |_| |______| |_____|  |_|         |_|", 
  "~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];

// Store banner content in session storage
function storeBanner() {
  sessionStorage.setItem("banner", JSON.stringify(bannerContent));
}

// Load banner content from session storage and display it
function loadBanner() {
  const storedBanner = JSON.parse(sessionStorage.getItem("banner"));
  if (storedBanner) {
    loopLines(storedBanner, "", 80);
  } else {
    loopLines(bannerContent, "", 80);
    storeBanner();
  }
}

// Immediately show the banner on page load, ensuring it’s displayed consistently
loadBanner();

// Show banner if it's the first load or if banner hasn’t been shown yet
const bannerShown = sessionStorage.getItem("bannerShown");
if (!bannerShown) {
  sessionStorage.setItem("bannerShown", true);
  storeBanner();
}

// Set up the text area for user input
textarea.focus();

// Restore the last command if available but don't display it at the top of the page
if (commands.length > 0) {
  // Do not add command history to the banner, just keep it stored
  commands.forEach(cmd => {
    // Only store commands, but do not show them at the top of the page
    // addLine(`visitor@gmail.com:~$ ${cmd}`, "no-animation", 0); // This line is removed for this
  });
}

// Handle key events
window.addEventListener("keyup", enterKey);
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode === 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode === 13) {
      loopLines(secret, "color2 margin", 120);
      resetCommand();
    } else if (e.keyCode === 13) {
      addLine("Wrong password", "error", 0);
      resetCommand();
    }
  } else {
    if (e.keyCode === 13) {
      commands.push(command.innerHTML);
      localStorage.setItem("commands", JSON.stringify(commands)); // Save to localStorage
      git = commands.length;
      addLine("visitor@gmail.com:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      resetCommand();
    }
    handleArrowKeys(e);
  }
}

function resetCommand() {
  command.innerHTML = "";
  textarea.value = "";
  pw = false;
  pwd = false;
  liner.classList.remove("password");
}

function handleArrowKeys(e) {
  if (e.keyCode === 38 && git > 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode === 40 && git < commands.length) {
    git += 1;
    textarea.value = commands[git] || "";
    command.innerHTML = textarea.value;
  }
}

function commander(cmd) {
  switch (cmd) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "video":
      openLink("Opening YouTube...", youtube);
      break;
    case "portfolio":
      openLink("Opening portfolio...", portfolio);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(() => window.open('https://youtu.be/dPmZqsQNzGA?si=iM9GI1xDkxNCO51f'), 1000);
      break;
    case "socials":
      loopLines(socials, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      loopLines(commands, "color2", 80);
      break;
    case "email":
      openLink('Opening email...', email);
      break;
    case "showbanner":
      loopLines(banner, "", 80);
      sessionStorage.setItem("bannerShown", true);
      break;

      case "contributions":
        loopLines(contributions, "color2 margin", 80);
        break;
      case "experience":
        loopLines(experience, "color2 margin", 80);
        break;
      case "achievements":
        loopLines(achievements, "color2 margin", 80);
        break;
      case "education":
        loopLines(education, "color2 margin", 80);
        break;
      case "skills":
        loopLines(skills, "color2 margin", 80);
        break;
      case "philosophy":
        loopLines(philosophy, "color2 margin", 80);
        break;
      case "hobbies":
        loopLines(hobbies, "color2 margin", 80);
        break;
      case "contact":
        loopLines(contact, "color2 margin", 80);
        break;
      case "interests":
        loopLines(interests, "color2 margin", 80);
        break;
      case "goals":
        loopLines(goals, "color2 margin", 80);
        break;
      case "certifications":
        loopLines(certifications, "color2 margin", 80);
        break;
      case "values":
        loopLines(values, "color2 margin", 80);
        break;
      case "quotes":
        loopLines(quotes, "color2 margin", 80);
        break;
      case "portfolio":
        loopLines(portfolio, "color2 margin", 80);
        break;
      case "inspiration":
        loopLines(inspiration, "color2 margin", 80);
        break;
        
      // Social shortcuts
      case "youtube":
        addLine("Opening YouTube...", "color2", 80);
        newTab(youtube);
        break;
      case "twitter":
        addLine("Opening Twitter...", "color2", 0);
        newTab(twitter);
        break;
      case "linkedin":
        addLine("Opening LinkedIn...", "color2", 0);
        newTab(linkedin);
        break;
      case "instagram":
        addLine("Opening Instagram...", "color2", 0);
        newTab(instagram);
        break;
      case "github":
        addLine("Opening GitHub...", "color2", 0);
        newTab(github);
        break;
      case "resume":
        addLine("Opening resume...", "color2", 0);
        newTab(resume);
        break;

    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function openLink(text, url) {
  addLine(text, "color2", 80);
  setTimeout(() => window.open(url, "_blank"), 500);
}


function addLine(text, style, time) {
  setTimeout(() => {
    const next = document.createElement("p");
    next.innerHTML = text.replace(/  /g, "&nbsp;&nbsp;");
    next.className = style;
    before.parentNode.insertBefore(next, before);
    window.scrollTo(0, document.body.scrollHeight);
  }, time);
}

function loopLines(content, style, time) {
  content.forEach((item, index) => addLine(item, style, index * time));
}
