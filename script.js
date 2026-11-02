// The lesson content (provided, same pattern as your Assignment 6 array)
const steps = [
  {
    title: "Be specific",
    description:
      'Point to one exact moment in the work. "The second example made this click" helps more than "Nice job."',
  },
  {
    title: "Focus on the work",
    description:
      'Describe what the work does, not who the person is. "This paragraph buries the main idea" gives them something to change.',
  },
  {
    title: "Suggest a next step",
    description:
      'Finish with one action they can take. "Try opening with your conclusion" tells them where to start.',
  },
];

// STEP 1: Name the state (no code, just the plan)
// What does the page remember? How many steps are completed
// What does it start at? 0
// What changes it? Clicking on the button
// What does the user see? The count and the content changing

// STEP 2: Check the connection
console.log("javascript is connected");
// STEP 3: Create the state
let completedSteps = 0; //let: this value changes
const totalSteps = 3; //const: this value stays the same
// STEP 4: Change the state

// STEP 5: Find the elements on the page and show the state
const document.getElementById("complete-button");
const progressText = document.getElementById("progress-text");

//completeSteps Calcs
completeButton.addEventListener("click", () => {
  if (completedSteps < totalSteps) {
    completedSteps = completedSteps + 1;
  }

  //updat the progress text
  progressText.textContent = "progress text updated!";

});
// STEP 6: Run the code when the button is clicked

// STEP 7: Read the state and decide how to respond

// STEP 8: Break it on purpose

// STEP 9: Fix it
