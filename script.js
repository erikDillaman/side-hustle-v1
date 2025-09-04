// SIDE HUSTLE EXPLORER - STUDENT STARTER CODE
// ============================================
// Complete the TODOs below to create a functional side hustle filtering and sorting app

// TODO 1: Import or reference the hustles array from side-hustles.js
// Hint: Make sure the side-hustles.js file is loaded before this script


// ===========================================
// BUTTON ONE FUNCTIONALITY - HIGH PAYING JOBS
// ===========================================

// TODO 2: Create a function called 'showHighPayingJobs' that:
// - Filters the hustles array to show only jobs with hourlyRate >= 18
// - Sorts the filtered results by hourlyRate in descending order (highest first)
// - Displays the top 5 results in numOne through numFive
function showHighPayingJobs() {
    // TODO 2a: Use .filter() to get hustles with hourlyRate >= 18
    const filtered = hustles.filter(hustle => hustle.hourlyRate >= 18);

    // TODO 2b: Use .sort() to arrange by hourlyRate (highest to lowest)
    const sorted = filtered.sort((a, b) => b.hourlyRate - a.hourlyRate);
    
    // TODO 2c: Take only the first 5 results using .slice(0, 5)
    const topFive = sorted.slice(0, 5);
    
    // TODO 2d: Call displayResults() function to show in DOM elements
    displayResults(topFive);
    
}

// ===========================================
// BUTTON TWO FUNCTIONALITY - LOW COST STARTUPS
// ===========================================

// TODO 3: Create a function called 'showLowCostJobs' that:
// - Filters the hustles array to show only jobs with costs <= 1
// - Sorts the filtered results by costs in ascending order (lowest first)
// - Displays the top 5 results in numOne through numFive
function showLowCostJobs() {
    // TODO 3a: Use .filter() to get hustles with costs <= 1
    const filtered = hustles.filter(hustle => hustle.costs <= 1);
    
    // TODO 3b: Use .sort() to arrange by costs (lowest to highest)
    const sorted = filtered.sort((a, b) => a.costs - b.costs);
    
    // TODO 3c: Take only the first 5 results using .slice(0, 5)
    const topFive = sorted.slice(0, 5);
    
    // TODO 3d: Call displayResults() function to show in DOM elements
    displayResults(topFive);
    
}

// ===========================================
// DISPLAY HELPER FUNCTION
// ===========================================

// TODO 4: Create a function called 'displayResults' that:
// - Takes an array of hustle objects as a parameter
// - Updates the text content of numOne through numFive with hustle information
// - Shows hustle name, hourly rate, and costs for each item
function displayResults(hustleArray) {
    // TODO 4a: Get references to DOM elements numOne through numFive
    // Hint: Use document.getElementById() for each element
    const slots = [
        document.getElementById('numOne'),
        document.getElementById('numTwo'),
        document.getElementById('numThree'),
        document.getElementById('numFour'),
        document.getElementById('numFive')
    ]
    // TODO 4b: Loop through the hustleArray (up to 5 items)
    // Hint: Use a for loop or forEach, but limit to 5 items

    
    // TODO 4c: For each hustle, create a display string with:
    // - Hustle name
    // - Hourly rate (formatted as currency)
    // - Startup costs (formatted as currency)
    // Example format: "Tutoring - $22/hr (Costs: $0)"
  
    // TODO 4d: Set the textContent of each DOM element to the formatted string
    
    // TODO 4e: If there are fewer than 5 results, clear the remaining elements
    // Hint: Set textContent to empty string for unused elements
    slots[0].textContent = hustleArray[0].name + " - $" + hustleArray[0].hourlyRate + "/hr (Costs: $" + hustleArray[0].costs + ")";
    slots[1].textContent = hustleArray[1].name + " - $" + hustleArray[1].hourlyRate + "/hr (Costs: $" + hustleArray[1].costs + ")";
    slots[2].textContent = hustleArray[2].name + " - $" + hustleArray[2].hourlyRate + "/hr (Costs: $" + hustleArray[2].costs + ")";
    slots[3].textContent = hustleArray[3].name + " - $" + hustleArray[3].hourlyRate + "/hr (Costs: $" + hustleArray[3].costs + ")";
    slots[4].textContent = hustleArray[4].name + " - $" + hustleArray[4].hourlyRate + "/hr (Costs: $" + hustleArray[4].costs + ")";  
}

// ===========================================
// EVENT LISTENERS
// ===========================================

// TODO 5: Add event listeners for the buttons
// This code should run when the page loads
document.addEventListener('DOMContentLoaded', function() {
    
    // TODO 5a: Get reference to buttonOne and add click event listener
    // When clicked, it should call showHighPayingJobs()
    const buttonOne = document.getElementById('buttonOne');
    buttonOne.addEventListener('click', showHighPayingJobs);
    // TODO 5b: Get reference to buttonTwo and add click event listener  
    // When clicked, it should call showLowCostJobs()
    const buttonTwo = document.getElementById('buttonTwo');
    buttonTwo.addEventListener('click', showLowCostJobs);
});

// ===========================================
// BONUS CHALLENGES (OPTIONAL)
// ===========================================

// TODO 6 (BONUS): Create additional filter/sort combinations:
// - Jobs that don't require transport (transportRequired === false)
// - Jobs by category (e.g., all "Digital" or "Creative" jobs)
// - Jobs with best profit margin (hourlyRate - costs)

// TODO 7 (BONUS): Enhance the display function:
// - Add category information to the display
// - Use different colors or styles for different categories
// - Add icons or emojis based on category

// TODO 8 (BONUS): Add error handling:
// - What happens if no results match the filter?
// - Display a "No results found" message in numOne

// ===========================================
// TESTING YOUR CODE
// ===========================================

// TODO 9: Test your implementation:
// 1. Open index.html in a browser
// 2. Click buttonOne - should show high paying jobs (≥$18/hr)
// 3. Click buttonTwo - should show low cost jobs (≤$1 costs)
// 4. Verify that results are properly sorted
// 5. Check that exactly 5 or fewer results are displayed

// ===========================================
// LEARNING OBJECTIVES CHECKLIST
// ===========================================

// By completing this exercise, you should understand:
// ✓ How to use .filter() to select specific array elements
// ✓ How to use .sort() to arrange array elements in order
// ✓ How to chain array methods together (.filter().sort().slice())
// ✓ How to manipulate DOM elements with JavaScript
// ✓ How to add event listeners to buttons
// ✓ How to format and display data for users
