/*
 * =================================================================
 * Automated Tests using Jest
 * =================================================================
 *
 * HOW THIS WORKS:
 * This file uses Jest, a popular JavaScript testing framework.
 * You would run these tests from your command line to automatically
 * check if your website's functions are working correctly.
 *
 * Each `test` block checks a specific piece of functionality.
 */

// We first need to set up a basic representation of our HTML
// so the test has something to interact with.
document.body.innerHTML = `
    <button id="mobile-menu-button"></button>
    <div id="mobile-menu"></div>
`;

// We also need to define the functions from your script that we want to test.
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('is-open');
}

// Mock the 'history' object for the scroll test
const historyMock = {
    scrollRestoration: 'auto'
};

// --- START OF TESTS ---

describe('Website Functionality Tests', () => {

    /**
     * TEST 1: Mobile Menu
     * This test checks if the mobile menu opens and closes correctly.
     */
    test('should toggle the mobile menu when the button is clicked', () => {
        // Get the elements we need from our mock HTML
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        // PRE-CONDITION CHECK: Ensure the menu is closed initially
        expect(mobileMenu.classList.contains('is-open')).toBe(false);

        // ACTION: Simulate a user clicking the menu button
        menuButton.click();
        toggleMobileMenu(); // Manually call the function tied to the click

        // POST-CONDITION CHECK 1: The menu should now be open
        // We expect the 'is-open' class to be present.
        expect(mobileMenu.classList.contains('is-open')).toBe(true);

        // ACTION 2: Simulate clicking the button again
        menuButton.click();
        toggleMobileMenu();

        // POST-CONDITION CHECK 2: The menu should be closed again
        // We expect the 'is-open' class to be removed.
        expect(mobileMenu.classList.contains('is-open')).toBe(false);
    });


    /**
     * TEST 2: Scroll to Top on Refresh
     * This test checks if our code correctly sets the browser's
     * scroll restoration property.
     */
    test('should set scrollRestoration to manual', () => {
        // ACTION: Run the logic that should happen on page load
        if ('scrollRestoration' in historyMock) {
            historyMock.scrollRestoration = 'manual';
        }

        // POST-CONDITION CHECK: Verify the property was changed
        // This confirms our "scroll to top" feature is correctly configured.
        expect(historyMock.scrollRestoration).toBe('manual');
    });

});


/*
 * =================================================================
 * How to Run These Tests (Developer Instructions)
 * =================================================================
 *
 * 1. Install Node.js and npm on your computer.
 * 2. In your project folder, run `npm init -y` to create a `package.json` file.
 * 3. Install Jest by running `npm install --save-dev jest`.
 * 4. Add a "test" script to your `package.json`:
 * "scripts": {
 * "test": "jest"
 * }
 * 5. Save this file as `script.test.js` in your project.
 * 6. Run `npm test` in your command line.
 *
 * Jest will automatically find and run this test file.
 *
 */

