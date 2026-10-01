# 🥛 Lassi Stall Sales Counter

A clean, responsive sales counter for a campus lassi stall.

## Products

- Regular Lassi — ₹20
- Special Lassi — ₹30

## Features

- Live total revenue
- Total cups sold
- Individual product counters
- Sales breakdown
- Automatic browser saving with `localStorage`
- Reset button with confirmation
- Mobile-friendly design
- No backend or database required

## Run locally

Open `index.html` in any modern browser.

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example `lassi-sales-counter`.
2. Upload `index.html`, `style.css`, and `script.js`.
3. Commit the files.
4. Open **Settings → Pages** in your repository.
5. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
6. Save.
7. GitHub will provide your website URL.

## Important

Sales are saved in the browser's local storage. This means the counter is persistent on the same browser/device, but it is **not a shared online database**. If multiple people use the counter on different phones, their counts will be separate.

To make sales sync across multiple devices, a backend/database such as Firebase or Supabase would be needed.
