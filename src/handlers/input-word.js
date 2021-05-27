import { data } from "../data.js";
import { isWord } from "../logic/is-word.js";
import { sortStrings } from "../logic/sort-strings.js";
import { updateList } from "../procedures/update-list.js";

// DOM elements
const warnings = document.getElementById("warnings");
/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const handleInputWord = (event) => {
  /* -- entry point for adding or removing a word -- */
  // debugger;
  console.log("-- handler: input word --");

  /* -- check the target -- */
  if (event.target.type !== "button") {
    return;
  }
  /* -- gather user input from DOM -- */
  const text = event.target.form.text.value;
  const action = event.target.value;
  if (action === "add") warnings.innerHTML = "";
  // send an error if word don't contain only letters
  if (action === "add") {
    if (!isWord(text)) {
      warnings.innerHTML = `Your input: "${text}" must contain only letters`;
      return;
    }
    data.words.push(text);
  }
  if (action === "remove") {
    if (!data.words.includes(text)) {
      warnings.innerHTML = `"${text}" is not in the list`;
      return;
    }
    data.words.splice(data.words.indexOf(text), 1);
  }
  const sorted = sortStrings(data.words, data.sort);
  updateList(sorted);
};
