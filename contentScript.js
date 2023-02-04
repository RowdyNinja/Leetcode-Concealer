var divTags = document.getElementsByTagName("div");
var searchText = ["Easy", "Medium", "Hard"];

const searchDifficultyTag = () => {
  var found = "not found";
  for (var i = 0; i < divTags.length; i++) {
    if (searchText.indexOf(divTags[i].textContent) !== -1) {
      found = divTags[i];
      break;
    }
  }
  return found;
};

const handleClick = (hide) => {
  const difficultyTag = searchDifficultyTag();
  if (hide) {
    difficultyTag.style.display = "none";
  } else {
    difficultyTag.style.display = "block";
  }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handleClick(message.hide);
  sendResponse({ status: "done" });
});
