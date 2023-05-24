// Your Script here.
function rot13(encodedString) {
  // Function to decode a single character using ROT13 algorithm
  function decodeCharacter(char) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      // Decode uppercase letters
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    }
    // Return non-alphabetic characters as is
    return char;
  }

  // Split the encoded string into an array of characters
  const encodedArray = encodedString.split("");

  // Decode each character in the array
  const decodedArray = encodedArray.map(decodeCharacter);

  // Join the decoded characters back into a string
  const decodedString = decodedArray.join("");

  return decodedString;
}

// Example usage:
const encodedString = "EBG13 rknzcyr.";
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: ROT13 example.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line

  return ;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
