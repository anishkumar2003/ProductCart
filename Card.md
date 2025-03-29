🛒 Shopping Cart with Context API
🔹 Project Description:
Build a simple shopping cart system where users can:
✅ View a list of products.
✅ Add/remove products from the cart.
✅ View the cart summary (total items & price).
✅ Change product quantity inside the cart.

🔹 Key Concepts You'll Learn:
✅ Global state management with Context API (cart items, total price, etc.).
✅ Updating and consuming context in multiple components (Cart, ProductList, etc.).
✅ Efficient state updates using useReducer() (optional, but recommended).

🔹 Suggested Components:
📌 ProductList.js – Displays available products with "Add to Cart" button.
📌 Cart.js – Displays selected items, total price, and "Remove" buttons.
📌 CartProvider.js – Context API setup to manage cart state.
📌 Navbar.js – Shows cart count dynamically.


🛒 Shopping Cart using Context API
📌 Project Overview
We will create a shopping cart system where users can:
✅ View a list of products.
✅ Add products to the cart.
✅ Remove products from the cart.
✅ Update the quantity of items in the cart.
✅ View the total price of items in the cart.

🛠️ Tech Stack
React.js (Functional Components, Hooks)
Context API (to manage cart state)
CSS / Tailwind CSS (for styling)
📂 Folder Structure
pgsql
Copy
Edit
shopping-cart/
│── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ProductList.js
│   │   ├── Cart.js
│   │   ├── ProductCard.js
│   ├── context/
│   │   ├── CartContext.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css (if needed)
│── public/
│── package.json
🚀 Step-by-Step Implementation
1️⃣ Create the Context API (CartContext.js)
This will hold the cart state and provide functions to update it.

Tasks:
✅ Define the cart state.
✅ Implement functions for addToCart, removeFromCart, updateQuantity.
✅ Provide the context to all components.

2️⃣ Create Navbar.js (Shows Cart Count)
This component will:
✅ Show the total number of items in the cart.
✅ Display a cart icon with the count.

3️⃣ Create ProductList.js (Displays Products)
This component will:
✅ Fetch or display a hardcoded list of products.
✅ Use ProductCard.js for each product.
✅ Call addToCart when "Add to Cart" is clicked.

4️⃣ Create ProductCard.js (Individual Product Display)
This component will:
✅ Display product image, name, price.
✅ Include an "Add to Cart" button.

5️⃣ Create Cart.js (Displays Cart Items & Total Price)
This component will:
✅ Show the list of products added to the cart.
✅ Allow users to increase/decrease quantity.
✅ Remove items from the cart.
✅ Show total price dynamically.

🔄 How Components Interact
1️⃣ ProductList.js gets product data and allows users to add items to the cart.
2️⃣ CartContext.js manages the cart state globally.
3️⃣ Navbar.js shows the cart count dynamically.
4️⃣ Cart.js displays all added products and allows modification.

🔥 Bonus Features (Optional)
✅ Persist cart items in local storage (so items don’t disappear on page refresh).
✅ Add a checkout button that clears the cart.
✅ Use useReducer() instead of useState() for more structured state management.