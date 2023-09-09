# Manager

 A task manager that can add, edit, and view tasks, to help stay organised.

# Flow:

Here is how I plan to render the app:

- Notes are stored as a JSON

- The notes will be just alphanumerical mess

- So for security, they will be decrypted on the client side using the Access Key, which has *also* been hashed, bcause I luv security <3

- Then we will use JQuery to append each note to the DOM

- Then when a note is added, the Key will be used to encrypt it on the client side, then appened to the JSON.
