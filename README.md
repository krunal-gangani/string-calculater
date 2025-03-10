String Calculator (TDD Kata)
A simple String Calculator implemented in JavaScript, following Test-Driven Development (TDD) principles using Mocha & Chai.

Features
✔ Returns 0 for an empty string
✔ Supports single and multiple numbers
✔ Handles commas (,) and new lines (\n) as delimiters
✔ Supports custom delimiters (e.g., "//;\n1;2" → 3)
✔ Throws an exception for negative numbers, listing all negative valu

📂 Project Structure

string-calculator
├── 📁 test                 # Test cases using Mocha & Chai
│   ├── stringCalculator.test.js
├── 📄 stringCalculator.js  # Main implementation of String Calculator
├── 📄 package.json         # Project dependencies and scripts
├── 📄 README.md            # Project documentation

Installation & Setup

1️:> Clone the Repository

git clone https://github.com/your-username/string-calculator.git

cd string-calculator

2️:> Install Dependencies

npm install

3️:> Run Tests

npx mocha test/stringCalculator.test.js

npm test
