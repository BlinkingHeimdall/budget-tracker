const APP_PREFIX = 'BudgetTracker-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

self.addEventListener('install', function (e) {
    const FILE_TO_CACHE = [
        "../public/index.html",
        "../public/css/style.css",
        "../public/js/index.js"
    ];

    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache: ' + CACHE_NAME )
            return cache.addAll(FILE_TO_CACHE);
        })
    )
});