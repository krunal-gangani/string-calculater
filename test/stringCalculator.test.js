import { expect } from "chai";
import add from "../stringCalculator.js";

describe("String Calculator", () => {

    /**
     * Test Case 1: Should return 0 for an empty string
     * Expected Output: 0
     */
    it("should return 0 for an empty string", () => {
        expect(add("")).to.equal(0);
    });

    /**
     * Test Case 2: A single number should return itself
     * Example Inputs: "1", "5"
     * Expected Outputs: 1, 5
     */
    it("should return the number itself for a single number", () => {
        expect(add("1")).to.equal(1);
        expect(add("5")).to.equal(5);
    });

    /**
     * Test Case 3: Two comma-separated numbers should return their sum
     * Example Input: "1,2"
     * Expected Output: 3
     */
    it("should return sum of two numbers", () => {
        expect(add("1,2")).to.equal(3);
        expect(add("10,20")).to.equal(30);
    });

    /**
     * Test Case 4: Multiple numbers should return their total sum
     * Example Input: "1,2,3,4"
     * Expected Output: 10
     */
    it("should handle multiple numbers", () => {
        expect(add("1,2,3,4")).to.equal(10);
    });

    /**
     * Test Case 5: Should support new line (`\n`) as a delimiter
     * Example Input: "1\n2,3"
     * Expected Output: 6
     */
    it("should handle new lines as delimiters", () => {
        expect(add("1\n2,3")).to.equal(6);
        expect(add("4\n5\n6")).to.equal(15);
    });

    /**
     * Test Case 6: Should support custom delimiters defined in the format "//[delimiter]\n[numbers]"
     * Example Input: "//;\n1;2"
     * Expected Output: 3
     */
    it("should support custom delimiters", () => {
        expect(add("//;\n1;2")).to.equal(3);
        expect(add("//|\n2|3|4")).to.equal(9);
    });

    /**
     * Test Case 7: Should throw an error when negative numbers are present
     * Example Input: "-1,2,-3"
     * Expected Output: Error with message "negative numbers not allowed -1,-3"
     */
    it("should throw an exception for negative numbers", () => {
        expect(() => add("-1,2,-3")).to.throw("negative numbers not allowed -1,-3");
    });

    /**
     * Test Case 8: Should throw an error for multiple negative numbers
     * Example Input: "//;\n-1;2;-3"
     * Expected Output: Error with message "negative numbers not allowed -1,-3"
     */
    it("should throw an exception for multiple negative numbers", () => {
        expect(() => add("//;\n-1;2;-3")).to.throw("negative numbers not allowed -1,-3");
    });

});
