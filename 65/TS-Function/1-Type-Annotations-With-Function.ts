/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

/**
 * Function `calculateRectangleArea` calculates the area of a rectangle.
 * It accepts two parameters:
 * - `lengthRectAngle`: A number representing the length of the rectangle.
 * - `widthOfRectAngle`: A number representing the width of the rectangle.
 * 
 * The function returns a `number` which is the calculated area.
 */
function calculateRectangleArea(
  lengthRectAngle: number,
  widthOfRectAngle: number
): number {
  return lengthRectAngle * widthOfRectAngle;  // Return the product of length and width
}

/**
 * Variables `lengthRectAngle` and `widthOfRectAngle` are declared to store
 * the length and width values, respectively.
 */
const lengthRectAngle = 5;  // Length of the rectangle
const widthOfRectAngle = 3;  // Width of the rectangle

/**
 * The `area` variable is assigned the result of calling the `calculateRectangleArea`
 * function with valid arguments for length and width.
 */
const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);  // Calculate the area

// Output the calculated area of the rectangle
console.log(`The area of the rectangle is: ${area}`);
