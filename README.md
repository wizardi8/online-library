# Online Library

This project consists of a client-side application built with React and a server-side application built with Express.

## Available Scripts

### Client

In the `client` directory, you can run:

#### `npm run build`

Builds the client application into the `build` folder.\
The app is ready for deployment.

#### `npm run clean`

Cleans the `build` folder by removing all generated files.

---

### Server

In the `server` directory, you can run:

#### `npm start`

Starts the Express server.\
The server will listen for requests at the defined port.

#### `npm run clean`

Removes all temporary build files inside the `dist` folder.

---

## Installation

1. Clone the repository:
2. Install dependencies:

    - For the client:
      ```bash
      cd client
      npm install
      ```

    - For the server:
      ```bash
      cd server
      npm install
      ```

## Usage

1. Start the server:
   ```bash
   cd server
   npm start
   ```

2. Build the client:
   ```bash
   cd client
   npm run build
   ```

You can then serve the built client alongside the server.
