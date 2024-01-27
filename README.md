# Online Store Application

This is a simple online store application built with React.js, and pure CSS. The application utilizes the FakeStoreApi to fetch products, categories, and perform various cart operations.

## Project Setup

### Prerequisites
- Node.js installed
- npm or yarn installed

### Installation

1. **Clone the repository:**
   ``` 
      git clone https://github.com/mouhcineslimani/store.git
      cd store
   ```
2. **Install dependencies:**
   ```
   Copy code
   npm install
   ``` 
3. **Usage:**
- Run the development server:
   ``` 
   Copy code
   npm run dev
   Open your browser and navigate to http://localhost:3000 to view the application.
    ``` 

4. **Project Structure: **
- src/api/FakeStoreApi.js: Defines a class FakeStoreApi for interacting with the FakeStoreApi to fetch products, categories, and perform product searches.

- src/context/CartContext.js: Manages the state and logic for the shopping cart using React context and a reducer. It includes a CartProvider component and a useCart hook for accessing the cart state.

- src/hooks/usePagination.js: Provides a custom hook usePagination for handling pagination of items in the application.

- src/components: Contains React components used in the application.

5. **Cart Functionality**
The application implements a shopping cart with the following features:

Adding items to the cart.
Removing items from the cart.
Updating the quantity of items in the cart.
Total price calculation based on the items in the cart.

6. **Custom Hooks**
usePagination(itemsPerPage, itemList): Handles pagination logic for displaying a specified number of items per page.
7. **Dependencies** 
- React.js
- Pure CSS
8. **Acknowledgments**
This project uses the FakeStoreApi for fetching product data.
 