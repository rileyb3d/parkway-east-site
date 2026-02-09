# Setup on this machine

One-time setup so you can run and preview the site from Cursor without touching the terminal.

---

## 1. Install Node.js (one time)

- Go to **https://nodejs.org**
- Download the **LTS** version and run the installer
- Leave **“Add to PATH”** checked → finish the install
- **Quit Cursor completely** (so it picks up Node), then reopen Cursor and open this folder

---

## 2. Install project dependencies (one time per machine)

In Cursor:

- **Terminal** → **Run Task…** → choose **“install”**  
  *(or open the terminal with* **Ctrl+`** *and run:* `npm install`)

After that you don’t need to run install again unless you pull new dependencies.

---

## 3. Run the site (every time you want to preview)

**Option A – One click**

- Press **F5** (or **Run** → **Start Debugging**)
- The dev server starts and your default browser opens to **http://localhost:3000**

**Option B – View inside Cursor**

- Press **F5** to start the server (or **Terminal** → **Run Task…** → **“dev server”**)
- **Ctrl+Shift+P** → type **“Simple Browser: Show”** → Enter
- Enter: **http://localhost:3000** (or e.g. **http://localhost:3000/projects/rockaway-retreat**)

---

## 4. Publishing (when you’re ready)

- Edits are **local only** until you push to Git
- To publish: commit in Cursor’s Source Control, then push. Vercel will deploy from the push.

---

**Summary:** Install Node once → restart Cursor → use **F5** to run and open the site. Use Simple Browser if you want the preview inside Cursor.
