/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "meh"
    },
    {
        id: 2,
        date: "07/28/2025",
        concept: "API & JSON-Server",
        entry: "We are going over APIs and JSON servers right now. I am supposed to be practicing that on my journal, but I have fallen behind. I need to catch up!",
        mood: "despondent"
    },
    {
        id: 3,
        date: "08/04/2025",
        concept: "Javascript and the Third Eye",
        entry: "I have mastered Javascript, and through it, have gained knowledge of all things. To me, reality is but a dried flower, pressed between two panes of glass, in a museum full of infinite pressed flowers.",
        mood: "ecstatic"
    },
    {
        id: 4,
        date: "08/16/2025",
        concept: "Discerning the Transmundane",
        entry: "I have achieved total enlightenment. I am now one with the singularity. I realize now that we are all part of a cosmis entity; the many and the few; the bodhisattva and the dao. The future and past ARE the present. We are the window through which all beings may bear witness to the multiverse.",
        mood: "meh"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}