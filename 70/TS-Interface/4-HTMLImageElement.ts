/********************
 * HTMLIMAGEELEMENT *
 ********************/

/**
 * This example demonstrates the use of `HTMLImageElement` to create an image 
 * element dynamically in JavaScript, but it is noted that this specific example 
 * may not work as expected in certain environments (like TypeScript execution context).
 * 
 * Steps:
 * - Create an `img` element using `document.createElement`.
 * - Set the `src` and `alt` attributes of the image.
 * - Check if the image is already fully loaded by using the `complete` property.
 * - If not loaded, listen for the `load` event to ensure the dimensions can be logged.
 */

// Dynamically create an image element and cast it to `HTMLImageElement`
const imgElement: HTMLImageElement = document.createElement("img");

// Set the image source (the file 'image.jpg' should be available in the project)
imgElement.src = "image.jpg"; // Assigns the source URL for the image

// Set the alt attribute for accessibility
imgElement.alt = "My Image";  // Descriptive alt text for the image

/**
 * Check if the image has already finished loading.
 * If yes, log the natural dimensions of the image.
 */
if (imgElement.complete) {
    // If the image is complete, log the natural width and height
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    /**
     * If the image is not yet loaded, add an event listener
     * that waits for the `load` event and then logs the dimensions.
     */
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}
