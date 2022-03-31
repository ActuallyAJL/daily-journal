import * as renderJournal from "./JournalEntryList.js";
import * as JournalData from "./journalData.js";
import { renderGreeting, renderEditBox, renderPostBox } from './pageLoader.js';

renderGreeting();
renderPostBox();
renderJournal.renderEntries();


document.addEventListener("click", (event) => {
  if (event.target.id === "journalSubmit") {
    const postObj = {
      date: document.querySelector("#journalDate").value,
      concept: document.querySelector("#journalConcepts").value,
      entry: document.querySelector("#journalEntry").value,
      mood: document.querySelector("#journalMood").value,
    };
    JournalData.createPost(postObj);
    renderJournal.renderEntries();
  } else if (event.target.id === "logout") {
    logoutUser();
    console.log(getLoggedInUser());
  }
});

document.addEventListener("change" , (event) => {
  if (event.target.id === 'filterMood') {
    const thisMood = event.target.value;
    renderJournal.renderEntriesByMood(thisMood);
  }
})

document.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith("delete")) {
    const postId = event.target.id.split("__")[1];
    JournalData.deletePost(postId)
      .then(response => {
        renderJournal.renderEntries();
      })
  } else if (event.target.id.startsWith("edit")) {
    const postId = event.target.id.split("__")[1];
    JournalData.getSinglePost(postId)
      .then(response => {
        showEdit(response);
      })
  } else if (event.target.id.startsWith("journalEdit")) {
    const thisId = event.target.id.split("__")[1];
    //collect all the details into an object
    const thisDate = document.querySelector('#journalDate').value
    const thisConcept = document.querySelector('#journalConcepts').value
    const thisEntry = document.querySelector('#journalEntry').value
    const thisMood = document.querySelector('#journalMood').value
    
    const postObject = {
      concept: thisConcept,
      mood: thisMood,
      entry: thisEntry,
      date: thisDate,
      id: parseInt(thisId)
    }

    JournalData.updatePost(postObject)
      .then(response => {
        renderJournal.renderEntries();
        renderPostBox();
      })
  }
})

const showEdit = (postObj) => {
  renderEditBox(postObj);
}

const checkForUser = () => {
  if (sessionStorage.getItem("user")){
    setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
    startGiffyGram();
  }else {
    //show login/register
    console.log("showLogin")
  }
}