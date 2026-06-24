// sw.js
const CACHE_NAME = 'image-tool-v1';
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    return cache.addAll(['./dl_tpcl.html']); // 缓存你的页面
  }));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});