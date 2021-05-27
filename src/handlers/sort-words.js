import { data } from "../data.js";
import { sortStrings } from "../logic/sort-strings.js";
import { updateList } from "../procedures/update-list.js";

/**
 * Entry point for users sorting the list of words in this app.
 * It is called each time the input selection changes.
 *
 * @param {Event} event - The event triggered by changing the input.
 */
export const handleSortWords = (event) => {
  console.log("-- handler: sort words --");

  /* -- gather user input from DOM -- */
  const howToSort = event.target.value;

  const sorted = sortStrings(data.words, howToSort);
  updateList(sorted);
};
