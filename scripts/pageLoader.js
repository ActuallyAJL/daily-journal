import { JournalEntryComponent } from "./helper.js";

export const renderGreeting = () => {
    const header = document.querySelector("#journal-greeting");
    header.innerHTML = `Hello, Alex!, <br />Welcome to your private journal<br />Today's date is ${JournalEntryComponent()}<br />Tell me about your day:`;
  };