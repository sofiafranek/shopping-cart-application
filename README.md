# The Shop Application

## Prerequisites
Set up a React application (Create React App, Next.js etc.) and configure the project so you are able to style elements your preferred way. e.g. Sass, Styled components, Tailwind CSS etc.

## Tasks

1. The shopping cart application must fetch and display products from the API endpoint https://dummyjson.com/products

2. Create a Products component that displays the available items. Show 3 products per row for large viewports and each item showing at least: Thumbnail image, Title, Price (formatted as GBP, e.g. £100.23) “Add to cart” button which adds the item to the cart

3. Create a Cart component that displays the customers chosen items, each item should display at least: Thumbnail image
Title, Plus and minus buttons and the current quantity of the item in the cart e.g. If there is a quantity of 1 item in the cart, hitting minus removes it from the cart

4. The cart should display the total price of all items added (formatted as GBP, e.g. £100.23)

Extras: Discount code can be applied at cart, search via a query, search via categories and pagination on shop items next/last page.

## Run project

Install npm packages
````
npm i
````

To run application
````
npm run dev
````
