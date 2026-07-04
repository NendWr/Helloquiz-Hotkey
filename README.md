# Helloquiz-Hotkey
A Hotkey for Helloquiz.app
# Helloquiz Auto-Good Hotkey

A simple Tampermonkey userscript that lets you press **Space** to instantly mark a flashcard as "good" on [Helloquiz.app](https://helloquiz.app), instead of having to click the button every time.

## What it does

Helloquiz shows four review buttons after each card: `again`, `hard`, `good`, `easy`. This script binds the **Space** key to automatically click the "good" button, speeding up review sessions for anyone who wants to move fast without reaching for the mouse.

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension (Chrome, Firefox, Edge, etc.)
2. Click on [`helloquiz-auto-good.user.js`](./helloquiz-auto-good.user.js) in this repo
3. Click the **Raw** button — Tampermonkey will detect it and prompt you to install
4. Confirm the install, then refresh Helloquiz

## Usage

While reviewing cards on Helloquiz, press **E** at any point to mark the current card as "good" and move to the next one.

## Notes

- This script works by detecting the button with `title="3"`, which corresponds to "good" in Helloquiz's current layout.
- If Helloquiz updates their site structure, this script may break. Feel free to open an issue if that happens.
