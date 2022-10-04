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

var precacheConfig = [["/404.html","6e21080bc2232592f828ee8965d6754a"],["/about/index.html","60e2e857fd86dbf6e3ed13c1a8508508"],["/assets/css/main.css","e27bd37969408ec9108dddd6595695b5"],["/assets/img/favicon.jpg","cedcd8de2d422737996311d01ea2ed1c"],["/assets/img/icons/android-chrome-192x192.png","d3b2690d136bcf90b5196d5f974cb15a"],["/assets/img/icons/android-chrome-256x256.png","7d5ca651f07e4e398d841d7dab8c447b"],["/assets/img/icons/apple-touch-icon.png","7d5ca651f07e4e398d841d7dab8c447b"],["/assets/img/icons/favicon-16x16.png","215f6fd4d519b2d019189f10df6c60ef"],["/assets/img/icons/favicon-32x32.png","723a215ddcdfd5f31c130b7e45ad7588"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","2ec1a484166c27df23cde472bcac0440"],["/assets/img/posts/CompleteNet.jpg","508e8053ac02d55c12964eb286a8ff55"],["/assets/img/posts/CompleteNet_lg.jpg","508e8053ac02d55c12964eb286a8ff55"],["/assets/img/posts/CompleteNet_md.jpg","b879b9389dc50b2cfaa21637ffd9dd27"],["/assets/img/posts/CompleteNet_placehold.jpg","52d96ccf1b925d5edb096bc2a3051cc5"],["/assets/img/posts/CompleteNet_sm.jpg","a68a4eddb077bb0bcf22145d73edaac8"],["/assets/img/posts/CompleteNet_thumb.jpg","87c36f2341b664314e565025d8923d7d"],["/assets/img/posts/CompleteNet_thumb@2x.jpg","72397a05e9ce429d9cd8ea55d13b5d74"],["/assets/img/posts/CompleteNet_xs.jpg","a82fd0e4211b1ee02b07bf9f9d36f536"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/gradient_descent.jpg","03c039a9ccef98d8bfb90034178b8ce2"],["/assets/img/posts/gradient_descent_lg.jpg","03c039a9ccef98d8bfb90034178b8ce2"],["/assets/img/posts/gradient_descent_md.jpg","03c039a9ccef98d8bfb90034178b8ce2"],["/assets/img/posts/gradient_descent_placehold.jpg","20d02f787b88f436a5225336fd639e95"],["/assets/img/posts/gradient_descent_sm.jpg","03c039a9ccef98d8bfb90034178b8ce2"],["/assets/img/posts/gradient_descent_thumb.jpg","03c039a9ccef98d8bfb90034178b8ce2"],["/assets/img/posts/gradient_descent_thumb@2x.jpg","03c039a9ccef98d8bfb90034178b8ce2"],["/assets/img/posts/gradient_descent_xs.jpg","03c039a9ccef98d8bfb90034178b8ce2"],["/assets/img/posts/loss_functions.jpg","5b91aad62a2584c9c628f03314c88639"],["/assets/img/posts/loss_functions_lg.jpg","5b91aad62a2584c9c628f03314c88639"],["/assets/img/posts/loss_functions_md.jpg","5b91aad62a2584c9c628f03314c88639"],["/assets/img/posts/loss_functions_placehold.jpg","703b385868a22e91c36dc276c63549ab"],["/assets/img/posts/loss_functions_sm.jpg","5b91aad62a2584c9c628f03314c88639"],["/assets/img/posts/loss_functions_thumb.jpg","8d0acbcc36607137dc5f8566453a45d1"],["/assets/img/posts/loss_functions_thumb@2x.jpg","5b91aad62a2584c9c628f03314c88639"],["/assets/img/posts/loss_functions_xs.jpg","5b91aad62a2584c9c628f03314c88639"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","dfce227bb21e9d8f429a528ae4e1a1cc"],["/assets/img/posts/sleek_lg.jpg","dfce227bb21e9d8f429a528ae4e1a1cc"],["/assets/img/posts/sleek_md.jpg","dfce227bb21e9d8f429a528ae4e1a1cc"],["/assets/img/posts/sleek_placehold.jpg","a288781afefcefe2a4d8baf555d31e7f"],["/assets/img/posts/sleek_sm.jpg","36e285e7d615b2f3e0688103b56b97d1"],["/assets/img/posts/sleek_thumb.jpg","b325f9448c37dc4c27d94ac6531d71b7"],["/assets/img/posts/sleek_thumb@2x.jpg","dfce227bb21e9d8f429a528ae4e1a1cc"],["/assets/img/posts/sleek_xs.jpg","0fd71c9c6d1dbd1d185a179fad1d91af"],["/assets/js/bundle.js","5f987ca724e8bd80986e0b909b908bcb"],["/categories/index.html","3b30cc3924a5cb60286b4c721f09f401"],["/contact/index.html","345250333b8ca87c93a4ae0acd6290e5"],["/gradient-descent-the-algorithm-of-intelligence/index.html","034af34b21a2c8357165de15f2379fd5"],["/gulpfile.babel.js","499ef2edde6e9b4fbafcb7c6f0cbc725"],["/in-post_imgs/gradient-descent-algorithm-of-intelligence/backward_forward.png","7404f0a4e6fb1c5ddab29d7c75d65056"],["/in-post_imgs/understanding-a-complete-neural-net/full-complete-net.jpg","e63080ab6ed8b630744e40178014119e"],["/in-post_imgs/understanding-a-complete-neural-net/sample-net.jpg","35e468e345709d12e5d94b0f29e728b4"],["/in-post_imgs/understanding-ff-nn/NeuronExpl.jpg","f5eb2d01386797a59e25b73bb71618f8"],["/index.html","38eab1eb9218c91c0bd2d6f7753fad4c"],["/introduction-to-loss-functions/index.html","908d108fdd23045e372a08fa4813c489"],["/sw.js","eb001578e9a131b07c2ce04e2c19a12d"],["/understanding-a-complete-neural-net/index.html","3679975b95c07c247ec228f917e9dc6d"],["/understanding-ff-nn/index.html","dbb64e8e18ebbf83dae25f1bede8979c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







