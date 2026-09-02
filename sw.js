const C="goal-assistant-v6.4";
const OLD=["goal-assistant-v6","goal-assistant-v6.1","goal-assistant-v6.2","goal-assistant-v6.3.1","goal-assistant-v6.4.1","goal-assistant-v6.4.2"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html","./styles.css?v=6.4","./app.js?v=6.4","./manifest.json"])).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>OLD.includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
