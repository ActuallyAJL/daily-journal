import { getPosts } from "./journalData.js";
import { JournalEntryComponent } from "./helper.js";

const entrySpace = document.querySelector(".journal-previous-entries");
const header = document.querySelector("#journal-greeting");

const renderEntries = () => {
  getPosts().then((entryArray) => {
      const something = entryArray
      .map((singleEntry) => {
        return `
            <article class = 'singleEntry'>
                <h3 class="journal-entry-date">${singleEntry.date}</h3>
                <h3 class="journal-entry-concepts">${singleEntry.concept}</h3>
                <article class="journal-entry-body">
                    <p>${singleEntry.entry}</p>
                    <p>I'm feeling ${singleEntry.mood} about it</p>
                </article>
                <button>EDIT</button><button>DELETE</button>
            </article>
            `;
      }).join(' ');
      entrySpace.innerHTML = something;
  });
};

const renderGreeting = () => {
  const greetingHTML = `Hello, Alex!, <br />Welcome to your private journal<br />Today's date is ${JournalEntryComponent()}<br />Tell me about your day:`;
  return greetingHTML;
};

header.innerHTML = renderGreeting();
renderEntries();