# Shop App

Shop App is a modern e-commerce platform that allows users to browse, add to cart, and purchase items seamlessly. The project is built using cutting-edge technologies with a focus on scalability and user experience.

## Features

- **Frontend**: Built using Pug templates for dynamic and scalable UI rendering.
- **Backend**: Developed with Node.js, providing robust APIs and server-side logic.
- **Database**: MongoDB is used to handle data storage efficiently, ensuring fast and reliable operations.

## Technologies Used

- **Pug**: For creating dynamic templates in the frontend.
- **Node.js**: As the backend runtime environment.
- **Express.js**: Framework for building APIs and handling requests.
- **MongoDB**: NoSQL database for storing user and product data.

## Prerequisites

- **Node.js**: v14 or later
- **MongoDB**: A running MongoDB instance

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Furkan-Demircan/shop-app.git
    cd shop-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and configure the following environment variables:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/shop-app
    ```

4. Start the application:
    ```bash
    npm start
    ```

5. Open the application in your browser:
    ```
    http://localhost:3000
    ```

## Usage

1. Users can browse the available products on the homepage.
2. Add items to the cart and proceed to checkout.
3. Admins can manage products and view sales reports.

## Folder Structure

- `views/`: Contains Pug templates for the frontend.
- `routes/`: Defines the application's API routes.
- `models/`: Contains MongoDB schemas for users, products, and orders.
- `controllers/`: Business logic for handling user requests.
- `public/`: Static assets such as CSS, images, and JavaScript files.

## Contribution

Contributions are welcome! Please open an issue to discuss your changes before making them.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to your branch (`git push origin feature/new-feature`).
5. Open a pull request (PR).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For any questions or suggestions about this project, feel free to reach out:

- **Email**: goooglenudle@gmail.com
- **GitHub**: [Furkan-Demircan](https://github.com/Furkan-Demircan)

---

Happy shopping!
