/**
 * String Calculator function to sum numbers in a string.
 * 
 * Features:
 * - Handles an empty string (returns 0).
 * - Supports comma `,` and newline `\n` as default delimiters.
 * - Supports custom delimiters defined in the format: "//[delimiter]\n[numbers]".
 * - Throws an exception for negative numbers, listing all negative numbers found.
 *
 */
export default function add(numbers) {
    // Return 0 if input is an empty string
    if (!numbers) return 0;

    // Default delimiters: Comma `,` or New Line `\n`
    let delimiter = /,|\n/;  

    // Check if a custom delimiter is defined (format: "//[delimiter]\n[numbers]")
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

    if (customDelimiterMatch) {
        // Extract custom delimiter from the match
        let rawDelimiter = customDelimiterMatch[1];

        // Escape special regex characters (e.g., `|`, `.`, `*`, `+`, `?`, etc.)
        let escapedDelimiter = rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Create a new delimiter regex pattern
        delimiter = new RegExp(escapedDelimiter);

        // Remove the custom delimiter line from the input string
        numbers = numbers.slice(customDelimiterMatch[0].length);
    }

    // Split the numbers using the identified delimiter(s) and convert to an array of numbers
    let numArray = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    let negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        // Throw an error listing all negative numbers found
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    // Calculate and return the sum of the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
}
