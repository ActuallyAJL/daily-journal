/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.

/*
You export a function that provides a version of the
raw data in the format that you want
*/

// export const getJournalEntries = () => {
//   getPosts().then((postBox) => {
//     const sortedByDate = postBox.sort(
//       (currentEntry, nextEntry) =>
//         Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     );
//     return sortedByDate;
//   });
// };

export const getPosts = () => {
  return fetch("http://localhost:8088/posts?_sort=date&_order=asc")
    .then((response) => response.json())
    ;
};
