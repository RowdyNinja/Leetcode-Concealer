let hidden = true;

const modifyButtonContent = (hidden) => {
  if (!hidden) {
    button.innerHTML = "Show";
  } else {
    button.innerHTML = "Hide";
  }
};

const handleButtonClick = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  chrome.tabs.sendMessage(tabs[0].id, { hide: hidden }, (response) => {
    hidden = !hidden;
    modifyButtonContent(hidden);
  });
};

const button = document.getElementById("myButton");
button.onclick = handleButtonClick;
