# 🚀 My First Node.js HTTPS Server

A simple HTTPS server built using **Node.js core modules** (`https`, `fs`) without any frameworks.
This project demonstrates how to:

* Generate SSL certificates (self-signed for development).
* Create an HTTPS server with Node.js.
* Serve different routes (`/`, `/about`, `/contact`).
* Send both plain text and HTML responses.

---

## 📂 Project Structure

```
my-https-server/
│── server.js        # Main server file
│── about.html       # Example About page
│── package.json     # NPM config file
│── .gitignore       # Ignored files (SSL certs, node_modules)
```

---

## 🔑 SSL Certificates

For HTTPS you need a private key and certificate.
These are **not included** in the repo (for security reasons).
You can generate your own with OpenSSL:

```bash
openssl req -nodes -new -x509 -keyout key.pem -out cert.pem
```

When asked for **Common Name**, enter `localhost` (for local dev).
This will create `key.pem` and `cert.pem` in your project folder.

---

## 🛠 Installation & Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/chhaviluthra08/my-https-server.git
   cd my-https-server
   ```

2. Install dependencies (if any):

   ```bash
   npm install
   ```

3. Generate SSL certs (if not already done):

   ```bash
   openssl req -nodes -new -x509 -keyout key.pem -out cert.pem
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open in browser:

   ```
   https://localhost:3000
   ```

⚠️ Since the certificate is self-signed, your browser will show a warning.
Click **“Advanced → Proceed”** to continue.

---

## 📖 Routes

* `/` → Landing Page
* `/about` → About Page (HTML)
* Any other route → 404 Not Found

---

## 🌟 Future Improvements

* Add static file serving (CSS, images, JS).
* Use **Express.js** to simplify routing.
* Add middleware (logging, error handling).


