# Power Play Sports Stats Manager PWA

A free, mobile-friendly, installable scorebook with separate Hockey, Soccer, and Lacrosse stat modules. Additional sport names can be added from Settings.

## What is included
- Sport selector for Hockey, Soccer, Lacrosse, plus user-added sports
- Separate in-progress game state by sport, team, and season
- Named seasons and multiple teams
- Team-specific accent and secondary colors
- Player roster with jersey numbers and positions
- Game type, opponent, rink/field, date, start time, home/away and position
- Live scoreboard with score correction
- Goals, assists, scoring location and net location
- Shot attempts and shots on goal; goals automatically count as an attempt and shot on goal
- Hockey stats: faceoff wins, hits, blocked shots, takeaways, giveaways, plus/minus, penalty minutes, shifts and shootouts
- Soccer stats: shot attempts, shots on goal, saves, tackles, interceptions, clearances, crosses, corners and offsides
- Lacrosse stats: shot attempts, shots on goal, saves, faceoff wins, ground balls, caused turnovers, clears and takeaways
- Additional sports start with general attempts, successful attempts, saves, tackles and turnovers
- Hockey penalty logging, including minor, double minor, major, misconduct and game misconduct
- Game notes, schedule filters, saved-game review, season totals and shooting percentages
- Trend chart, CSV export, JSON backup and restore
- Offline PWA cache after first successful online load

## Data preservation and legacy soccer migration
The app continues to use IndexedDB database `eightUManagerDB` and object store `state`. On first launch, it reads the existing `app` record. For the legacy single-team record shape (`teamName`, `players`, `games`, `current`, `settings`), it first writes an untouched copy to `legacy_backup_before_sports_upgrade`, then migrates the roster, saved games, current match, team name and team colors into the new season/team structure. Migrated legacy games and the current match are labeled Soccer.

**Important:** before replacing the files on GitHub Pages, open the old app on the device containing your records and download a JSON backup. Keep that backup safe. Publish these files to the same repository and open the upgraded app in the same browser profile. Do not clear browser/site data during the upgrade. A synthetic legacy-data migration fixture is included in the development checks, but the exact original app ZIP/database was not part of this delivery, so migration should still be confirmed against a backup from your own original app before deleting or overwriting the old deployment.

## Parent-specific data
Data is stored in IndexedDB in each browser profile. Parents using separate devices or browser profiles have separate copies. There are no cloud accounts, family login, or automatic sync between parents/devices. Use JSON backup/restore to transfer data.

## Known limitations
- Google Sheets OAuth synchronization is not configured. CSV export can be imported into Google Sheets.
- Calendar import accepts public `.ics` feed URLs only when the provider allows browser CORS access. Many private calendar feeds will not work.
- Custom sport names can be added, but custom stat categories are currently a general set rather than an editable per-sport stat builder.

## Publish on GitHub Pages
1. Download and unzip this package.
2. Back up data from the old app on the device before replacing files.
3. Upload the contents of this folder to the root of the same GitHub repository.
4. In GitHub, open **Settings → Pages** and retain the current branch/root publishing configuration.
5. Wait for deployment, then reload the site. The service-worker cache is versioned as `sports-stats-v3`.
6. On iPhone, open the site in Safari and use **Share → Add to Home Screen** if needed.

## Scoring notes
- A goal counts as a goal, shot attempt, and shot on goal.
- A shot-on-goal entry counts as an attempt and a shot on goal.
- Shooting percentage = goals / shot attempts.
- Shots-on-goal percentage = shots on goal / shot attempts.
- A saved game counts as a game played for each roster player in season totals.
- Penalty minutes are recorded as assessed minutes; early-ending minors remain recorded at their assessed minutes for PIM totals.
- The shift timer tracks one player at a time.

This is a volunteer scorekeeping aid, not an official league scoring system. Confirm league-specific rules before using reports as official records.
