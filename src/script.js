const form = document.getElementById('login');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const username = document.getElementById('name').value;
    const key = document.getElementById('key').value;
    pass = hash(key);
    alert(`Name: ${username}\nAccess Key: ${key}\nHashed Key: ${pass}`);

});

function hash(key) {
    /*
    Control Flow:
    Key is converted to binary
    Binary is inverted (0 becomes 1 and 1 becomes 0)
    Inverse binary is converted back to numbers
    */
    let bin = ""
    let revBin = ""
    let addedBin = 0;
    console.log("Access Key: " + key)
    key = key.split("").reverse().join("");
    for (let i = 0; i < key.length; i++) {
        char = key[i];
        bin = bin.concat(char.charCodeAt(0).toString(2));
    }
    for (i = 0; i < bin.length; i++) {
        char = bin[i];
        if (char == 1) {
            char = "0";
        } else if (char == 0) {
            char = "1";
        }
        revBin = revBin.concat(char);
    }
    for (i = 0; i < revBin.length; i++) {
      char = revBin[i];
      if (i % 2 == 0) { // Check if for loop is even or odd
         addedBin += char; // If for loop is even then add binary
      } else {
        addedBin -= char; // Otherwise subtract
      }
    }
    addedBin = Math.abs(addedBin)
    console.log("Binary: " + bin);
    console.log("Inverted Binary: " + revBin);
    console.log("Added Binary: " + addedBin);
    return addedBin;
}
