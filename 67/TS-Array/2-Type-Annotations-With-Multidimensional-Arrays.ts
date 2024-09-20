/*************************************************
 * TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS *
 *************************************************/

/**
 * The `arrayOne` variable is declared as an array of numbers.
 * It can only hold numeric values, and is initialized with the values:
 * - 1, 2, 3, 4, 5
 */
let arrayOne: number[] = [1, 2, 3, 4, 5];  // Array containing numbers

/**
 * The `arrayTwo` variable is declared as an array of strings.
 * It can only hold string values, and is initialized with the values:
 * - "A", "B", "C"
 */
let arrayTwo: string[] = ["A", "B", "C"];  // Array containing strings

/**
 * The `arrayThree` variable is declared as a union type array,
 * meaning it can hold both `string` and `number` values.
 * 
 * It is initialized with a mixture of numeric and string values:
 * - 1, 2, 3, 4 (numbers)
 * - "A", "B", "C" (strings)
 */
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];  // Mixed type array
