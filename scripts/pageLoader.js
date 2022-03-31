import { JournalEntryComponent } from "./helper.js";

export const renderGreeting = () => {
  const header = document.querySelector("#journal-greeting");
  header.innerHTML = `Hello, Alex!, <br />Welcome to your private journal<br />Today's date is ${JournalEntryComponent()}<br />Tell me about your day:`;
};

export const renderPostBox = () => {
  document.querySelector("#entryBox").innerHTML = `
    <h3>Make a New Post</h3>
    <fieldset>
      <label for="journalDate">Date of Entry</label>
      <input type="date" name="journalDate" id="journalDate" />
    </fieldset>
    <fieldset>
      <label for="journalConcepts">Concepts Covered</label>
      <input type="text" name="journalConcepts" id="journalConcepts" />
    </fieldset>
    <fieldset>
      <label for="journalEntry">Journal Entry</label>
      <textarea rows="5" cols="50" name="journalEntry" id="journalEntry">Tell me about your day :)</textarea>
    </fieldset>
    <fieldset>
      <label for="journalMood">Mood for the Day</label>
      <select name="journalMood" id="journalMood">
        <option value=""></option>
        <option value="ecstatic">Ecstatic</option>
        <option value="despondent">Despondent</option>
        <option value="meh">Meh</option>
      </select>
    </fieldset>
    <fieldset>
      <label for="journalSubmit"></label>
      <input
        type="submit"
        value="Record Journal Entry"
        name="journalSubmit"
        id="journalSubmit"
      />
    </fieldset>
    `;
};

export const renderEditBox = (postObj) => {
  const thisMoodUpperCase =
    postObj.mood.charAt(0).toUpperCase() + postObj.mood.slice(1);
  document.querySelector("#entryBox").innerHTML = `
    <h3>Edit Post Here</h3>
    <fieldset>
    <label for="journalConcepts">Concepts Covered</label>
    <input type="text" name="journalConcepts" id="journalConcepts" value='${postObj.concept}'/>
    </fieldset>
    <fieldset>
    <label for="journalEntry">Journal Entry</label>
    <textarea rows="5" cols="50" name="journalEntry" id="journalEntry">${postObj.entry}</textarea>
    </fieldset>
    <fieldset>
    <label for="journalMood">Mood for the Day</label>
    <select name="journalMood" id="journalMood">
    <option value="${postObj.mood}">${thisMoodUpperCase}</option>
    <option value="ecstatic">Ecstatic</option>
    <option value="despondent">Despondent</option>
    <option value="meh">Meh</option>
    </select>
    </fieldset>
    <fieldset>
    <label for="journalSubmit"></label>
    <input
    type="submit"
    value="Save Changes"
    name="journalEdit__${postObj.id}"
    id="journalEdit__${postObj.id}"
    />
    </fieldset>
    <fieldset>
      <input type="hidden" name="journalDate" id="journalDate" value='${postObj.date}'/>
      <input type="hidden" name="journalId" id="journalId" value='${postObj.id}'/>
    </fieldset>
    `;
};
