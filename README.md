# Sports Stats Manager

A private, single-device sports scorebook. No account, paid service, analytics, or third-party runtime dependency is required.

## Included
- Game details, scoreboard, period, notes and event log
- Editable player roster and jersey numbers
- Goal and optional assist recording
- Start/stop shift timer and manual shift entry
- Season totals across saved games
- JSON backup/restore, CSV export and printable season report
- Custom app title and team colors
- Offline cache after first successful load

## Publish free with GitHub Pages
1. On a computer, create or sign in to a free GitHub account.
2. Create a new **public** repository named `8u-soccer-manager`.
3. Upload all files in this folder to the repository root (not the ZIP file itself).
4. Open repository **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish. The URL will look like `https://YOUR-USERNAME.github.io/8u-soccer-manager/`.
7. On your iPhone, open that URL in Safari. Tap Share → Add to Home Screen → Add.

## iPhone usage
- Open the installed Home Screen icon. Visit the hosted page once while online so the offline files cache.
- Use Settings (gear) to set the team name and colors.
- Add the roster, then record game events.
- Tap **Save game** to add/update the current match in game history.
- Use **Download backup** regularly and store the JSON file in Files/iCloud Drive.
- Use **Restore backup** to replace the data on this device with a saved backup.

## Data and privacy
Game data is stored locally in IndexedDB in the browser profile on this iPhone. It is not automatically sent to a server and is not shared with coaches or parents. Clearing Safari website data, deleting the browser profile, or losing the device can erase local records. Keep backups. A backup file contains roster and game information; protect it accordingly.

## Notes / current limitations
- The app is designed for one manager on one iPhone. It does not synchronize across devices.
- The shift timer records one active player shift at a time.
- The goal button increments the home score automatically. The scoreboard's +/- controls can correct either score.
- Saved game snapshots include event-derived player statistics. The current game's live stats are included in season totals; save the game to preserve it in history.
- This is a lightweight scorekeeping aid, not an official league record system.
