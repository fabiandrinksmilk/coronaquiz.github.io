/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["CoronaQuiz.css","a6feef10cd16d065c6c36432d0124911"],["CoronaQuiz.js","92434b9670529228f9dea2d6f07362f0"],["README.md","ecf273f6b7299fb1838449ec69972518"],["download/CoronaQuiz.zip","c73c9a6beb56048e3e57c19fc110e608"],["icons/android/android-launchericon-144-144.png","9c7169c84681c050ef4129179e3f1c7e"],["icons/android/android-launchericon-192-192.png","1829d3244a4790f68345fc36e3d533bd"],["icons/android/android-launchericon-48-48.png","2213dd6d9ded6e0b845f3c8ec8a78f06"],["icons/android/android-launchericon-512-512.png","71162e11a2ea6c76477c22047cc3e31f"],["icons/android/android-launchericon-72-72.png","c64427be4be2b8ca52624590c1511890"],["icons/android/android-launchericon-96-96.png","fd891c97b9f90230d996be1cf3c4cb87"],["icons/chrome/chrome-extensionmanagementpage-48-48.png","2213dd6d9ded6e0b845f3c8ec8a78f06"],["icons/chrome/chrome-favicon-16-16.png","3b2bde46e87a917c4ec254b2954b3d47"],["icons/chrome/chrome-installprocess-128-128.png","66178e0d98057e79bcbebb0f33884256"],["icons/firefox/firefox-general-128-128.png","66178e0d98057e79bcbebb0f33884256"],["icons/firefox/firefox-general-16-16.png","3b2bde46e87a917c4ec254b2954b3d47"],["icons/firefox/firefox-general-256-256.png","788aa0f522150009a7901255db9d13ac"],["icons/firefox/firefox-general-32-32.png","b11e1991998f115f55052098a86f21de"],["icons/firefox/firefox-general-48-48.png","2213dd6d9ded6e0b845f3c8ec8a78f06"],["icons/firefox/firefox-general-64-64.png","3bb174922552bb669f5629bc28a97126"],["icons/firefox/firefox-general-90-90.png","a48091c34b10b34ff9bd458947081a23"],["icons/firefox/firefox-marketplace-128-128.png","66178e0d98057e79bcbebb0f33884256"],["icons/firefox/firefox-marketplace-512-512.png","71162e11a2ea6c76477c22047cc3e31f"],["icons/msteams/msteams-192-192.png","1829d3244a4790f68345fc36e3d533bd"],["icons/msteams/msteams-silhouette-32-32.png","b11e1991998f115f55052098a86f21de"],["icons/windows/windows-smallsquare-24-24.png","390a54aba31f2f9f982a6f1bda1442ec"],["icons/windows/windows-smallsquare-30-30.png","68bf5c7200be774d846e23aa5019d31e"],["icons/windows/windows-smallsquare-42-42.png","fa23e53cc0f2bf8efe2d57fbb51a5a46"],["icons/windows/windows-smallsquare-54-54.png","aa9160df7e60b5dd9871c58fc20f60a0"],["icons/windows/windows-splashscreen-1116-540.png","504be750bd85ee6653c943318dd1b28c"],["icons/windows/windows-splashscreen-620-300.png","3888033e5101c581f9b063a3ec813ba8"],["icons/windows/windows-splashscreen-868-420.png","8b74e9a89a7e35e0b673c69f27451158"],["icons/windows/windows-squarelogo-120-120.png","ccb806f028cf3ad3755e2406a7d0f8ca"],["icons/windows/windows-squarelogo-150-150.png","c709c564435af6ec6a722555d2d06da7"],["icons/windows/windows-squarelogo-210-210.png","75fb9a5cf25abba3e08aa175de00641a"],["icons/windows/windows-squarelogo-270-270.png","96ae2ebd6bb83d4f94af5ea256370149"],["icons/windows/windows-storelogo-50-50.png","62a81375f73be04e2f92c28be4eaa3c9"],["icons/windows/windows-storelogo-70-70.png","30c4192bc10c0e5bc49d6e0eb21c0fa8"],["icons/windows/windows-storelogo-90-90.png","a48091c34b10b34ff9bd458947081a23"],["icons/windows/windowsphone-appicon-106-106.png","30426e2c3b278147f4290ff9825652f8"],["icons/windows/windowsphone-appicon-44-44.png","6ad6550476f07f6b654274e9ddc4901d"],["icons/windows/windowsphone-appicon-62-62.png","0beb0f2a87bbe6be7e2d35270c688259"],["icons/windows/windowsphone-mediumtile-150-150.png","c709c564435af6ec6a722555d2d06da7"],["icons/windows/windowsphone-mediumtile-210-210.png","75fb9a5cf25abba3e08aa175de00641a"],["icons/windows/windowsphone-mediumtile-360-360.png","89ed3be8e7d441b7d4a213c2138746c1"],["icons/windows/windowsphone-smalltile-170-170.png","2c5e045871bdb4b740d10d63d233744f"],["icons/windows/windowsphone-smalltile-71-71.png","a743ae30e8fb0931803e9df852b291cb"],["icons/windows/windowsphone-smalltile-99-99.png","2541b49e377fbcea38d8ed7c89cc90fc"],["icons/windows/windowsphone-storelogo-120-120.png","ccb806f028cf3ad3755e2406a7d0f8ca"],["icons/windows/windowsphone-storelogo-50-50.png","62a81375f73be04e2f92c28be4eaa3c9"],["icons/windows/windowsphone-storelogo-70-70.png","30c4192bc10c0e5bc49d6e0eb21c0fa8"],["icons/windows10/SplashScreen.scale-100.png","3888033e5101c581f9b063a3ec813ba8"],["icons/windows10/SplashScreen.scale-125.png","1e833952de8ef41a7f22e816e295e1f8"],["icons/windows10/SplashScreen.scale-150.png","9c5ceaa99c8ab2939d421e70d1157099"],["icons/windows10/SplashScreen.scale-200.png","8545e10816e08edf65e9b6e39da802db"],["icons/windows10/SplashScreen.scale-400.png","a12afff2012e7bdf3e6850200ca0a94b"],["icons/windows10/Square150x150Logo.scale-100.png","c709c564435af6ec6a722555d2d06da7"],["icons/windows10/Square150x150Logo.scale-125.png","ea6d7d8a6b7bd8915af7886cc586269f"],["icons/windows10/Square150x150Logo.scale-150.png","4cdda5b83a052bdc2becc05ee3605c98"],["icons/windows10/Square150x150Logo.scale-200.png","61c675ee16483dbb1aa992358829a5a7"],["icons/windows10/Square150x150Logo.scale-400.png","63240aaff0b8b80a2ff5a11a215d2e8f"],["icons/windows10/Square310x310Logo.scale-100.png","3f676acbc5a11ba0e47a1a95a4b1bec7"],["icons/windows10/Square310x310Logo.scale-125.png","5a95fb19e56f22c5a0dfda8a817a1e09"],["icons/windows10/Square310x310Logo.scale-150.png","900d05040e5f39e57b21f7507d4c0bb5"],["icons/windows10/Square310x310Logo.scale-200.png","dbca12532e476e073af61cb8dd29f692"],["icons/windows10/Square310x310Logo.scale-400.png","80bef64b04ac6742af1a8f0cb225f8c4"],["icons/windows10/Square44x44Logo.scale-100.png","6ad6550476f07f6b654274e9ddc4901d"],["icons/windows10/Square44x44Logo.scale-125.png","462d5aad394d9c2068e27627e0f540ec"],["icons/windows10/Square44x44Logo.scale-150.png","30d0bab2dcd3e9abd525ba272556a888"],["icons/windows10/Square44x44Logo.scale-200.png","467ee3ab9c69050fab15d2a578852a83"],["icons/windows10/Square44x44Logo.scale-400.png","73344987a7e8c8b5cc51c5a7a9b62bbb"],["icons/windows10/Square44x44Logo.targetsize-16.png","3b2bde46e87a917c4ec254b2954b3d47"],["icons/windows10/Square44x44Logo.targetsize-16_altform-unplated.png","3b2bde46e87a917c4ec254b2954b3d47"],["icons/windows10/Square44x44Logo.targetsize-24.png","390a54aba31f2f9f982a6f1bda1442ec"],["icons/windows10/Square44x44Logo.targetsize-24_altform-unplated.png","390a54aba31f2f9f982a6f1bda1442ec"],["icons/windows10/Square44x44Logo.targetsize-256.png","788aa0f522150009a7901255db9d13ac"],["icons/windows10/Square44x44Logo.targetsize-256_altform-unplated.png","788aa0f522150009a7901255db9d13ac"],["icons/windows10/Square44x44Logo.targetsize-32.png","b11e1991998f115f55052098a86f21de"],["icons/windows10/Square44x44Logo.targetsize-32_altform-unplated.png","b11e1991998f115f55052098a86f21de"],["icons/windows10/Square44x44Logo.targetsize-44_altform-unplated.png","6ad6550476f07f6b654274e9ddc4901d"],["icons/windows10/Square44x44Logo.targetsize-48.png","2213dd6d9ded6e0b845f3c8ec8a78f06"],["icons/windows10/Square44x44Logo.targetsize-48_altform-unplated.png","2213dd6d9ded6e0b845f3c8ec8a78f06"],["icons/windows10/Square71x71Logo.scale-100.png","a743ae30e8fb0931803e9df852b291cb"],["icons/windows10/Square71x71Logo.scale-125.png","5a62ad8a89084c50dfbebebad5fa06d9"],["icons/windows10/Square71x71Logo.scale-150.png","addde76154096cf32c45cf1cd1c810f0"],["icons/windows10/Square71x71Logo.scale-200.png","40b9abb8f13e64f67db0be2bcc8ac6a0"],["icons/windows10/Square71x71Logo.scale-400.png","1e8ed78c73b3f0baa6b724f1c488a65f"],["icons/windows10/StoreLogo.png","62a81375f73be04e2f92c28be4eaa3c9"],["icons/windows10/StoreLogo.scale-100.png","62a81375f73be04e2f92c28be4eaa3c9"],["icons/windows10/StoreLogo.scale-125.png","0ae94c15b1af805f423a4f83f1e23da1"],["icons/windows10/StoreLogo.scale-150.png","d76553ae8374a07538d41a04166e779f"],["icons/windows10/StoreLogo.scale-200.png","55ed329d600833171323615cf16961c8"],["icons/windows10/StoreLogo.scale-400.png","d7423391c0834d1a9c12d8b7833b6b11"],["icons/windows10/Wide310x150Logo.scale-100.png","fc0f257123774c5a13ea01d7e581b9d3"],["icons/windows10/Wide310x150Logo.scale-125.png","bd3a1cc6c10c90897f80d106d860a37c"],["icons/windows10/Wide310x150Logo.scale-150.png","bf2277a4078da3ae71cd1e6af0aad890"],["icons/windows10/Wide310x150Logo.scale-200.png","3888033e5101c581f9b063a3ec813ba8"],["icons/windows10/Wide310x150Logo.scale-400.png","8545e10816e08edf65e9b6e39da802db"],["index.html","7a12eefb1ce962202cad1cbb0d109525"],["manifest.json","7d09fe055ee5c7d7a875118831243e9b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







