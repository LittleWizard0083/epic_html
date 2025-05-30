## ⚙️ CPanel Node.js Setup Instructions 
                                          - ReactRouter 7 (Remix) -

To get your application running on a **CPanel Node.js module**, follow these steps:

### 1. Locate `app.js` in your CPanel Application

When you create a Node.js application from your hosting panel (e.g. cPanel), it automatically sets up an `app.js` file as the entry point.

### 2. Replace or Rename the File

You have **two options**:

- **Option A: Copy-paste content**
  - Open the `server.js` file from this repository.
  - Copy its entire content.
  - Replace the contents of the `app.js` file in your CPanel Node.js setup with the content from `server.js`.

- **Option B: Rename `server.js` to `app.js`**
  - If you're uploading files manually, simply rename `server.js` to `app.js` before uploading to the root of your Node.js application directory.

> 🔁 This is necessary because CPanel's Node.js environment expects the entry point file to be named `app.js` by default.

### 3. Restart the Application

After updating the file:

- Go back to your CPanel Node.js App interface.
- Click **Restart** to apply the changes.
