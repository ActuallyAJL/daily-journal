import * as renderJournal from "./JournalEntryList.js";
import * as JournalData from "./journalData.js";
import { renderGreeting } from './pageLoader.js';

renderGreeting();
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
  }
});


document.addEventListener("change" , (event) => {
  if (event.target.id === 'filterMood') {
    const thisMood = event.target.value;
    renderJournal.renderEntriesByMood(thisMood);
  }
})
