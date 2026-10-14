[README.md](https://github.com/user-attachments/files/33448690/README.md)
# Stock Market Simulation — Trading Floor (Round 1)

A website for an 8-team stock market simulation. Each team logs in with its own secret access code and sees only its own trades. The organizer logs in on a separate page with a separate code.

All rumours and price movements are **fictional, for simulation only**.

## Pages
- `index.html` is for **teams**: the trading desk, their own portfolio (invested amounts only), and the leaderboard once results are revealed.
- `organizer.html` is for the **organizer only**: market controls, timer, team names, stock returns, every team's portfolio, and the leaderboard reveal.

## Who sees what
| | Team | Organizer |
|---|---|---|
| Own trades and invested amounts | ✅ | ✅ |
| Other teams' portfolios | ❌ never | ✅ |
| Stock price movements | ❌ never | ✅ |
| Leaderboard (team name + final value) | only after reveal | ✅ |

Firebase security rules enforce this on the server, so it can't be bypassed from the browser. No access codes are stored in this code.

## One-time setup (about 15 minutes)

### 1. Create a Firebase project
Go to https://console.firebase.google.com and click **Create a project**. Any name works. You can turn Google Analytics off.

### 2. Turn on login and add the 9 users
1. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable → Save.**
2. **Users** tab → **Add user**, nine times. Use the emails and access codes from the organizer's master PDF. **The access code is the password.**

### 3. Create the database
1. **Build → Firestore Database → Create database.** Location: **asia-south1 (Mumbai)**. Start in **production mode**.
2. **Rules** tab: delete what's there, paste everything from `firestore.rules`, and click **Publish**.

### 4. Connect the website to Firebase
1. Gear icon → **Project settings → Your apps → </>** (Web) → give it any nickname → **Register app**.
2. Copy the `firebaseConfig` values into `firebase-config.js`, replacing the `PASTE...` placeholders.

The API key in this file is meant to be public. Security comes from the rules and the access codes.

### 5. Put it on GitHub Pages
1. Create a public repository and upload `index.html`, `organizer.html`, `firebase-config.js` and `README.md`.
2. **Settings → Pages → Deploy from a branch → main → / (root) → Save.**
3. In Firebase: **Authentication → Settings → Authorized domains → Add domain**, and add `your-username.github.io`.

The site must be opened from the GitHub Pages link. It won't work if you double-click the file on your computer.

## Running the round
1. The organizer opens `…/organizer.html` and logs in with the organizer code, then renames the teams.
2. Teams open the main link and log in with their team code. All members of a team can use the same code.
3. **Open the market** → teams trade and lock → **Close the market**.
4. Paste the 20 returns from the organizer workbook, in the same order, and press **Reveal leaderboard**.
5. Press **Reveal next position** to reveal the leaderboard from 8th place to 1st.

Final portfolio = Remaining cash + Σ [Invested × (1 + Return / 100)]. Teams that don't lock trades before close hold all cash. Equal values share a rank.
