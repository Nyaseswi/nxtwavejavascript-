'use strict'
let dataDownloaded = 90;
let hasBeenDowloaded = dataDownloaded ===100;
hasBeenDowloaded &&= 'Data download now complete....';
hasBeenDowloaded ||= 'Downloading...'
console.log(hasBeenDowloaded);
