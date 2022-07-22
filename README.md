# React Dropdown

Simple component that renders a dropdown.
Do not use in PROD


## Building a dropdown component

For this task we would like you to build a reusable dropdown component from the  UI. The dropdown is initiated by clicking on the button with the "more" icon, and should reveal some additional actions for the user to interact with.

Closed state:

<img width="400" alt="image" src="https://user-images.githubusercontent.com/561506/134912453-ea7f0734-cbbd-4768-ba66-8e3aa78a357c.png">

Open state:

<img width="401" alt="image" src="https://user-images.githubusercontent.com/561506/134908637-27ed1d8f-e041-45f3-b1d6-cac54b7ebfaf.png">

The "more" icon and some colour values are included in the gist, but don't worry too much about matching the design perfectly. These have been provided to save you time in choosing colors and iconography yourself. 

### Things to consider
* Should we allow the menu to be left aligned as well as right?
* The component should be reusable, so try to think about the API you would provide to other developers
* Will it work for users who do not have a mouse?
* What if the menu items needed to be a mixture of buttons and anchor tags? 

### A note about structure
While it's entirely up to you how you approach structure we tend to prefer "composability" over "inheritance" ([source](https://reactjs.org/docs/composition-vs-inheritance.html)). You won't be marked down for choosing one over the other but we find composable components make for a great developer experience and reusability.

```
// composable
<Tile>
  <TileHeader>Header</TileHeader>
  <TileContent>My tile content...</TileContent>
  <TileFooter>
    <SecondaryButton onClick={...}>Cancel</SecondaryButton>
    <PrimaryButton onClick={...}>Done</PrimaryButton>
  </TileFooter>
<Tile>

// inheritance
<Tile
  header="Header"
  content="My tile content..."
  onCancelClick={...}
  onDoneClick={...}
/>
```