import { getJournalEntries } from './journalData.js';

const entrySpace = document.querySelector('.journal-previous-entries');

const renderEntries = () => {
    let entryArray=getJournalEntries();
    for (let entry of entryArray) {
        entrySpace.innerHTML += `
            <article class = 'singleEntry'>
                <h3 class="journal-entry-date">${entry.date}</h3>
                <h3 class="journal-entry-concepts">${entry.concept}</h3>
                <article class="journal-entry-body">
                    <p>${entry.entry}</p>
                    <p>I'm feeling ${entry.mood} about it</p>
                </article>
                <button>EDIT</button><button>DELETE</button>
            </article>
        `;
    }
}

renderEntries();