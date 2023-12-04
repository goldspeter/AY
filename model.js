// 1)
_pbjsGlobals;

// 2)
pbjs.adUnits;

// 3)
var adUnits = pbjs.adUnits;

// 4) get all the bidders
var bidders = [];
adUnits.forEach((rows) => {
  rows.bids.forEach((bid) => {
    bidders.push({ bidder: bid.bidder });
  });
});

// 5) unique bidders
var uniqueBidders = [...new Set(bidders.map((item) => item.bidder))];

// 6)
uniqueBidders.sort();

// 7) get prebid adUnits after the auction ends
//pbjs.getEvents().filter((a) => a.eventType == "auctionEnd");

pbjs
  .getEvents()
  .filter((a) => a.eventType == "auctionEnd")
  .forEach((au) => {
    console.log(au.args.adUnits);
  });

// if I want to list the adUnits Codes
var allAU = [];
pbjs
  .getEvents()
  .filter((a) => a.eventType == "auctionEnd")
  .forEach((auObj) => {
    auObj.args.adUnits.forEach((au) => {
      allAU.push({ adUnitCode: au.code });
    });
  });

// distinct adUnits
var uniqueAU = [...new Set(allAU.map((item) => item.adUnitCode))];

// 8) ?google_console=1

// 9)
var targeting = [];
window.googletag
  .pubads()
  .getTargetingKeys()
  .forEach(function (keys) {
    targeting.push(window.googletag.pubads().getTargeting(keys));
  });

var adUnitsPathMobile = [
  {
    code: "LB",
    mediaTypes: {
      banner: {
        sizeConfig: [
          {
            minViewPort: [0, 0],
            sizes: [
              [320, 50],
              [320, 100],
              [300, 50],
              [300, 100],
            ],
          },
          {
            minViewPort: [768, 0],
            sizes: [[728, 90]],
          },
          {
            minViewPort: [992, 0],
            sizes: [
              [970, 90],
              [970, 66],
              [728, 90],
            ],
          },
          {
            minViewPort: [1200, 0],
            sizes: [
              [970, 90],
              [970, 66],
              [728, 90],
            ],
          },
        ],
      },
    },
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "LB",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MA",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183591,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183587,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "bcmssp",
        params: {
          publisherId: 20709,
        },
        bidFloor: 0.5,
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282370,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1593625,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282377,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282376,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "ix",
        params: {
          siteId: "965769",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528146",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528155",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528156",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317924",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317929",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317930",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791130",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791631",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_HDX",
        },
      },
      {
        bidder: "visx",
        params: {
          uid: "928803",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438367",
          supplyId: "411982",
          adSize: "728x90",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438374",
          supplyId: "411982",
          adSize: "320x100",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438375",
          supplyId: "411982",
          adSize: "320x50",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
  {
    code: "MR",
    mediaTypes: {
      banner: {
        sizeConfig: [
          {
            minViewPort: [0, 0],
            sizes: [
              [300, 250],
              [320, 480],
            ],
          },
          {
            minViewPort: [768, 0],
            sizes: [[300, 250]],
          },
          {
            minViewPort: [992, 0],
            sizes: [[300, 250]],
          },
          {
            minViewPort: [1200, 0],
            sizes: [[300, 250]],
          },
        ],
      },
    },
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MR",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MMR",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183589,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183586,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282374,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282375,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "ix",
        params: {
          siteId: "965766",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "ix",
        params: {
          siteId: "965763",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528149",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528154",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317927",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317928",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "seedtag",
        params: {
          publisherId: "5065-0948-01",
          adUnitId: "25213583",
          placement: "inArticle",
        },
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791581",
        },
      },
      {
        bidder: "teads",
        params: {
          placementId: 95158,
          pageId: 87895,
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_300x250",
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_HDX",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "visx",
        params: {
          uid: "907057",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438369",
          supplyId: "411982",
          adSize: "300x250",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438376",
          supplyId: "411982",
          adSize: "300x250",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
  {
    code: "MR1",
    mediaTypes: {
      banner: {
        sizeConfig: [
          {
            minViewPort: [0, 0],
            sizes: [
              [300, 250],
              [320, 480],
            ],
          },
          {
            minViewPort: [768, 0],
            sizes: [[300, 250]],
          },
          {
            minViewPort: [992, 0],
            sizes: [[300, 250]],
          },
          {
            minViewPort: [1200, 0],
            sizes: [[300, 250]],
          },
        ],
      },
    },
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MR",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MMR",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183589,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183586,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282374,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282375,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "ix",
        params: {
          siteId: "965766",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "ix",
        params: {
          siteId: "965763",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528149",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528154",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317927",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317928",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791581",
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_300x250",
        },
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438369",
          supplyId: "411982",
          adSize: "300x250",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438376",
          supplyId: "411982",
          adSize: "300x250",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
  {
    code: "MR2",
    mediaTypes: {
      banner: {
        sizeConfig: [
          {
            minViewPort: [0, 0],
            sizes: [
              [300, 250],
              [320, 480],
            ],
          },
          {
            minViewPort: [768, 0],
            sizes: [[300, 250]],
          },
          {
            minViewPort: [992, 0],
            sizes: [[300, 250]],
          },
          {
            minViewPort: [1200, 0],
            sizes: [[300, 250]],
          },
        ],
      },
    },
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MR",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MMR",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183589,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183586,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282374,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282375,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "ix",
        params: {
          siteId: "965766",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "ix",
        params: {
          siteId: "965763",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528149",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528154",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317927",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317928",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791581",
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_300x250",
        },
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438369",
          supplyId: "411982",
          adSize: "300x250",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438376",
          supplyId: "411982",
          adSize: "300x250",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
  {
    code: "MR3",
    mediaTypes: {
      banner: {
        sizeConfig: [
          {
            minViewPort: [0, 0],
            sizes: [
              [300, 250],
              [320, 480],
            ],
          },
          {
            minViewPort: [768, 0],
            sizes: [[300, 250]],
          },
          {
            minViewPort: [992, 0],
            sizes: [[300, 250]],
          },
          {
            minViewPort: [1200, 0],
            sizes: [[300, 250]],
          },
        ],
      },
    },
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MR",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MMR",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183589,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183586,
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282374,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282375,
          publisherSubId: "babycenter",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "ix",
        params: {
          siteId: "965766",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "ix",
        params: {
          siteId: "965763",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528149",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "openx",
        params: {
          unit: "542528154",
          delDomain: "yourbow-d.openx.net",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317927",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317928",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791581",
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_300x250",
        },
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438369",
          supplyId: "411982",
          adSize: "300x250",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["none"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["banner"],
          },
        ],
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438376",
          supplyId: "411982",
          adSize: "300x250",
        },
        sizeConfig: [
          {
            minViewPort: [0, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [768, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [992, 0],
            relevantMediaTypes: ["banner"],
          },
          {
            minViewPort: [1200, 0],
            relevantMediaTypes: ["none"],
          },
        ],
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
];

var bidderImportMobile = [
  {
    code: "LB",
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "LB",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio",
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MA",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio-2",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183591,
        },
        name: "appnexus",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183587,
        },
        name: "appnexus-2",
      },
      {
        bidder: "bcmssp",
        params: {
          publisherId: 20709,
        },
        bidFloor: 0.5,
        name: "bcmssp",
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
        name: "conversant",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282370,
          publisherSubId: "babycenter",
        },
        name: "criteo",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1593625,
          publisherSubId: "babycenter",
        },
        name: "criteo-2",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282377,
          publisherSubId: "babycenter",
        },
        name: "criteo-3",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282376,
          publisherSubId: "babycenter",
        },
        name: "criteo-4",
      },
      {
        bidder: "ix",
        params: {
          siteId: "965769",
        },
        name: "ix",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528146",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528155",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx-2",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528156",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx-3",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317924",
        },
        name: "pubmatic",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317929",
        },
        name: "pubmatic-2",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317930",
        },
        name: "pubmatic-3",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        name: "rubicon",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        name: "rubicon-2",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        name: "rubicon-3",
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791130",
        },
        name: "sovrn",
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791631",
        },
        name: "sovrn-2",
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_HDX",
        },
        name: "triplelift",
      },
      {
        bidder: "visx",
        params: {
          uid: "928803",
        },
        name: "visx",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438367",
          supplyId: "411982",
          adSize: "728x90",
        },
        name: "yieldlab",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438374",
          supplyId: "411982",
          adSize: "320x100",
        },
        name: "yieldlab-2",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438375",
          supplyId: "411982",
          adSize: "320x50",
        },
        name: "yieldlab-3",
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
  {
    code: "MR",
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MR",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio",
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MMR",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio-2",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183589,
        },
        name: "appnexus",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183586,
        },
        name: "appnexus-2",
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
        name: "conversant",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282374,
          publisherSubId: "babycenter",
        },
        name: "criteo",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282375,
          publisherSubId: "babycenter",
        },
        name: "criteo-2",
      },
      {
        bidder: "ix",
        params: {
          siteId: "965766",
        },
        name: "ix",
      },
      {
        bidder: "ix",
        params: {
          siteId: "965763",
        },
        name: "ix-2",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528149",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528154",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx-2",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317927",
        },
        name: "pubmatic",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317928",
        },
        name: "pubmatic-2",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        name: "rubicon",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        name: "rubicon-2",
      },
      {
        bidder: "seedtag",
        params: {
          publisherId: "5065-0948-01",
          adUnitId: "25213583",
          placement: "inArticle",
        },
        name: "seedtag",
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791581",
        },
        name: "sovrn",
      },
      {
        bidder: "teads",
        params: {
          placementId: 95158,
          pageId: 87895,
        },
        name: "teads",
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_300x250",
        },
        name: "triplelift",
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_HDX",
        },
        name: "triplelift-2",
      },
      {
        bidder: "visx",
        params: {
          uid: "907057",
        },
        name: "visx",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438369",
          supplyId: "411982",
          adSize: "300x250",
        },
        name: "yieldlab",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438376",
          supplyId: "411982",
          adSize: "300x250",
        },
        name: "yieldlab-2",
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
  {
    code: "MR1",
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MR",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio",
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MMR",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio-2",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183589,
        },
        name: "appnexus",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183586,
        },
        name: "appnexus-2",
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
        name: "conversant",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282374,
          publisherSubId: "babycenter",
        },
        name: "criteo",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282375,
          publisherSubId: "babycenter",
        },
        name: "criteo-2",
      },
      {
        bidder: "ix",
        params: {
          siteId: "965766",
        },
        name: "ix",
      },
      {
        bidder: "ix",
        params: {
          siteId: "965763",
        },
        name: "ix-2",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528149",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528154",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx-2",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317927",
        },
        name: "pubmatic",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317928",
        },
        name: "pubmatic-2",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        name: "rubicon",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        name: "rubicon-2",
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791581",
        },
        name: "sovrn",
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_300x250",
        },
        name: "triplelift",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438369",
          supplyId: "411982",
          adSize: "300x250",
        },
        name: "yieldlab",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438376",
          supplyId: "411982",
          adSize: "300x250",
        },
        name: "yieldlab-2",
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
  {
    code: "MR2",
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MR",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio",
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MMR",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio-2",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183589,
        },
        name: "appnexus",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183586,
        },
        name: "appnexus-2",
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
        name: "conversant",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282374,
          publisherSubId: "babycenter",
        },
        name: "criteo",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282375,
          publisherSubId: "babycenter",
        },
        name: "criteo-2",
      },
      {
        bidder: "ix",
        params: {
          siteId: "965766",
        },
        name: "ix",
      },
      {
        bidder: "ix",
        params: {
          siteId: "965763",
        },
        name: "ix-2",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528149",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528154",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx-2",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317927",
        },
        name: "pubmatic",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317928",
        },
        name: "pubmatic-2",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        name: "rubicon",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        name: "rubicon-2",
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791581",
        },
        name: "sovrn",
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_300x250",
        },
        name: "triplelift",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438369",
          supplyId: "411982",
          adSize: "300x250",
        },
        name: "yieldlab",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438376",
          supplyId: "411982",
          adSize: "300x250",
        },
        name: "yieldlab-2",
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
  {
    code: "MR3",
    bids: [
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MR",
          environment: "desktop",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio",
      },
      {
        bidder: "adagio",
        params: {
          organizationId: "1242",
          site: "babycenter-de",
          useAdUnitCodeAsAdUnitElementId: true,
          placement: "MMR",
          environment: "mobile",
          pagetype: "article",
          category: "family-parenting",
        },
        name: "adagio-2",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183589,
        },
        name: "appnexus",
      },
      {
        bidder: "appnexus",
        params: {
          placementId: 30183586,
        },
        name: "appnexus-2",
      },
      {
        bidder: "conversant",
        params: {
          site_id: "203210",
        },
        name: "conversant",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282374,
          publisherSubId: "babycenter",
        },
        name: "criteo",
      },
      {
        bidder: "criteo",
        params: {
          zoneId: 1282375,
          publisherSubId: "babycenter",
        },
        name: "criteo-2",
      },
      {
        bidder: "ix",
        params: {
          siteId: "965766",
        },
        name: "ix",
      },
      {
        bidder: "ix",
        params: {
          siteId: "965763",
        },
        name: "ix-2",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528149",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx",
      },
      {
        bidder: "openx",
        params: {
          unit: "542528154",
          delDomain: "yourbow-d.openx.net",
        },
        name: "openx-2",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317927",
        },
        name: "pubmatic",
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "158370",
          adSlot: "3317928",
        },
        name: "pubmatic-2",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353236",
          zoneId: "1879414",
        },
        name: "rubicon",
      },
      {
        bidder: "rubicon",
        params: {
          accountId: 17046,
          siteId: "353360",
          zoneId: "1880500",
        },
        name: "rubicon-2",
      },
      {
        bidder: "sovrn",
        params: {
          tagid: "791581",
        },
        name: "sovrn",
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "BabycenterDe_300x250",
        },
        name: "triplelift",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438369",
          supplyId: "411982",
          adSize: "300x250",
        },
        name: "yieldlab",
      },
      {
        bidder: "yieldlab",
        params: {
          adslotId: "438376",
          supplyId: "411982",
          adSize: "300x250",
        },
        name: "yieldlab-2",
      },
    ],
    path: "/22894951962,4213/commonmedia/babycenter",
  },
];

// 10)
adUnits.forEach((codes) => {
  delete codes.bids;
  var code = codes.code;
});

// 11)
adUnits.forEach((codes) => {
  delete codes.mediaTypes;
  var code = codes.code;
  var bids = codes.bids;
  var conta = 1;
  codes.bids.map((unit, index, a) => {
    delete a[index].sizeConfig;
    delete a[index].userId;
    delete a[index].userIdAsEids;
    if (index > 0) {
      if (a[index].bidder == a[index - 1].bidder) {
        conta++;
        unit.name = `${unit.bidder}-${conta}`;
      } else {
        conta = 1;
        unit.name = a[index].bidder;
      }
    } else if (index == 0) {
      unit.name = a[index].bidder;
    }
  });
});
