# Simple Trello Clone
This package is bootstrapped with 
 - Create React App
 - TailwindCSS
 - Prettier
 - Husky

# Installation
Follow the simple instruction
```
git clone https://github.com/choyan/myhammer-challenge
yarn
```

# Future Work
- Currently, the data is totally volatile and saved within the application state. So, after every refresh data is gone. We can save the data in the localstorage for more persistence.
- Of course, the interface isn't up to the mark. It can be much more usable if we could use some menu dropdown, so that card view doesn't look much cluttered.
- Due to the time limitation, I didn't implement any drag-and-drop feature here. It would be much more usable when we apply that functionality.
- Besides that the cards should be sortable within the column also. 
- Trello board accepts many different kind of data entry. I just implemented a simple text input and saved the data.
- Even after the card is deleted, the component for moving the card across different columns is still visible. It's an unwanted bug, which needs a fix. 
