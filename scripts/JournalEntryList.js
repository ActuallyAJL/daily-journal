import * as filter from './filters.js';
import { getPosts } from "./JournalData.js"

// DOM reference to where all entries will be rendered
const entrySpace = document.querySelector(".journal-previous-entries");

export const renderEntries = () => {
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
                  <button id='edit__${singleEntry.id}'>EDIT</button><button id='delete__${singleEntry.id}'>DELETE</button>
              </article>
              `;
        }).join(' ');
        entrySpace.innerHTML = something;
    });
  };


  export const renderEntriesByMood = (thisMood) => {
    filter.byMood(thisMood).then((entryArray) => {
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
                  <button id='edit__${singleEntry.id}'>EDIT</button><button id='delete__${singleEntry.id}'>DELETE</button>
              </article>
              `;
        }).join(' ');
        entrySpace.innerHTML = something;
    });
  };