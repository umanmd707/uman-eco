/* UMAN-ECO v2.1 static-only offline caching; no tracking or network analytics. */
const VERSION='uman-eco-v2.1.3';
const RESOURCES=['./','./index.html','./assets/styles.css','./assets/app.js','./assets/tracker.js','./assets/pwa.js','./assets/mobile-nav.js','./assets/icon-192.png','./assets/icon-512.png','./manifest.webmanifest','./data/sample-workloads.csv','./data/sample-monthly-tracker.csv'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(RESOURCES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('uman-eco-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  if(req.mode==='navigate'){event.respondWith(fetch(req).catch(()=>caches.match('./index.html')));return;}
  event.respondWith(caches.match(req).then(hit=>hit||fetch(req)));
});
