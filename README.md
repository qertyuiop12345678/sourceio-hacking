# sourceio-hacking

A repository used for an experimental s0ource.io hack script.

## Fetching the script

Simply paste this snippet into your browser console:

```javascript
eval(atob("ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgocz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkuc2V0QXR0cmlidXRlKCdzcmMnLCdodHRwczovL3Jhd2Nkbi5naXRoYWNrLmNvbS94TWlrZWUxL3NvdXJjZWlvLWhhY2tpbmcvNjI5Yjc2YWY3NTliMjcwMzIzNTk5NWQ0MzNjMTU5NTU3ZGU4ZTBkNC92MS9pbmRleC5qcycpfHxzKQ=="))
```
Then enable the bot with the options in the top-right of your screen.

*The snippet contains a base64-encoded string which contains the JavaScript code to load the hack script, which is converted to normal text and evaluated.*

## Instructions

You have two options in the top-right of the screen - *Bot Enabled* and *Auto-buy Enabled*.

* *Bot Enabled* - Enable the automatic proceduces of the bot or disable.

* *Auto-buy Enabled* - Enable automatic purchase of Quantum Servers or disable.

To turn on or off either of these features, check or uncheck the check box next to the option.

## What the bot does

The s0urce.io word system uses obsfucated images of words to ensure only people can type them and text analysis devices cannot detect the word.

The problem with this system is that it is not secure - as long as you can associate image URLs with words, you can absolutely have a machine submit the word.

The bot uses a dictionary associating URLs to the appropriate word based on the words that a human enters. A dictionary has already been prepared for the bot so you shouldn't have to type in any words. However, if you come across a word that is not in the bot's dictionary, you will have to manually type it in, and the bot will "learn" it for the future.

When you enable the bot with the check-mark options, the following things change about your gameplay:

* Words will be automatically submitted by the bot, with a 0.6 second interval to prevent rate limiting.

* The bot will automatically move on to the next user at the top of your list after it has hacked one person.

* If you enable *Auto-buy*, the bot will automatically buy Quantum Servers.

# WIP

* Add a chat spam feature.

* Add smart recognition when you are at the #1 position on the leaderboard.
