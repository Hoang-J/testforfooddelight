fetch("https://food-delight-server-oz217hjjx-hoang-js-projects.vercel.app/menu?all=")
    .then((response) => response.json())
    .then(response => console.log(response));



    // Response {
    //     [Symbol(state)]: {
    //       aborted: false,
    //       rangeRequested: false,
    //       timingAllowPassed: true,
    //       requestIncludesCredentials: true,
    //       type: 'default',
    //       status: 401,
    //       timingInfo: {
    //         startTime: 34.166208,
    //         redirectStartTime: 0,
    //         redirectEndTime: 0,
    //         postRedirectStartTime: 34.166208,
    //         finalServiceWorkerStartTime: 0,
    //         finalNetworkResponseStartTime: 185.797375,
    //         finalNetworkRequestStartTime: 141.40275,
    //         endTime: 0,
    //         encodedBodySize: 0,
    //         decodedBodySize: 0,
    //         finalConnectionTimingInfo: [Object]
    //       },
    //       cacheState: '',
    //       statusText: 'Unauthorized',
    //       headersList: HeadersList {
    //         cookies: [Array],
    //         [Symbol(headers map)]: [Map],
    //         [Symbol(headers map sorted)]: null
    //       },
    //       urlList: [ URL {} ],
    //       body: { stream: undefined }
    //     },
    //     [Symbol(realm)]: null,
    //     [Symbol(headers)]: HeadersList {
    //       cookies: [
    //         '_vercel_sso_nonce=mXBatxXGGv4pBZvcSOWLc1Rw; Max-Age=3600; Path=/; Secure; HttpOnly; SameSite=Lax'
    //       ],
    //       [Symbol(headers map)]: Map(11) {
    //         'cache-control' => [Object],
    //         'connection' => [Object],
    //         'content-length' => [Object],
    //         'content-type' => [Object],
    //         'date' => [Object],
    //         'server' => [Object],
    //         'set-cookie' => [Object],
    //         'strict-transport-security' => [Object],
    //         'x-frame-options' => [Object],
    //         'x-robots-tag' => [Object],
    //         'x-vercel-id' => [Object]
    //       },
    //       [Symbol(headers map sorted)]: null
    //     }
    //   }