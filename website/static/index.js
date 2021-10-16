const titleContainer = document.querySelector('.title-container');
setTimeout(()=> {titleContainer.classList.toggle('on')}, 500);


// video is loaded on page render
// toggling video view 
function playVideo() {
    const playBtn = document.querySelector('.play-button-on');
    playBtn.className = "play-button-toggle";

    const sectionOverlay = document.querySelector('.section-overlay');
    sectionOverlay.className = "section-overlay-toggle";

    const video = document.querySelector('.feature-video');
    setTimeout(() => {video.classList.toggle('show')}, 250)
}

// INTERSECTION OBSERVER
// options
const sections = document.querySelectorAll('.slide-flow');
// options must be set (even if empty) to compile
const options = {
    root: null,
    threshold: .4,
    rootMargin: "0px 0px 0px 0px"
};
// implementation
const title = document.getElementById('title');
const playButton = document.getElementById('play-btn');
const observer = new IntersectionObserver(function(sections, observer) {
    sections.forEach(entry => {
        // toggle appearance of title
        if(entry.isIntersecting && entry.target.id==('section-hero')) {
            title.className = 'title';
        } else if(entry.target.id==('section-hero') && !entry.isIntersecting){
            title.className = 'title-off';
        }

        // toggle the appearance of play button in section two
        if(entry.isIntersecting && entry.target.id==('section-video')) {
            playButton.className = 'play-button-on';
        } else if(entry.target.id==('section-video') && !entry.isIntersecting){
            playButton.className = 'play-button-off';
        }
    });
}, options);
// observe elements
sections.forEach(section => {
    observer.observe(section);
});


// SWIPER OBJECTS AND PARAMETERS
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    speed: 500,
    mousewheel: {
        releaseOnEdges: true
    },
    direction: 'vertical',
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    nested: true,
    loop: true,
    direction: "horizontal",
    speed: 1500,
    autoplay: {
        delay: 5000
    },
    spaceBetween: 50
  });

// PRODUCTS
// black shirt
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'apogee-athletic-store.myshopify.com',
        storefrontAccessToken: '33ce3d72e7286f6fa6e6a397e69f60f0',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '7329154891997',
          node: document.getElementById('product-component-1634052000875'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "button": {
          "font-family": "Montserrat, sans-serif",
          ":hover": {
            "background-color": "#e6b243"
          },
          "background-color": "#ffc64a",
          ":focus": {
            "background-color": "#e6b243"
          },
          "border-radius": "40px",
          "padding-left": "20px",
          "padding-right": "20px"
        }
      },
      "text": {
        "button": "Add to cart"
      },
      "googleFonts": [
        "Montserrat"
      ]
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-family": "Montserrat, sans-serif",
          ":hover": {
            "background-color": "#e6b243"
          },
          "background-color": "#ffc64a",
          ":focus": {
            "background-color": "#e6b243"
          },
          "border-radius": "40px",
          "padding-left": "20px",
          "padding-right": "20px"
        }
      },
      "googleFonts": [
        "Montserrat"
      ],
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-family": "Montserrat, sans-serif",
          ":hover": {
            "background-color": "#e6b243"
          },
          "background-color": "#ffc64a",
          ":focus": {
            "background-color": "#e6b243"
          },
          "border-radius": "40px"
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      },
      "googleFonts": [
        "Montserrat"
      ]
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-family": "Montserrat, sans-serif",
          "background-color": "#ffc64a",
          ":hover": {
            "background-color": "#e6b243"
          },
          ":focus": {
            "background-color": "#e6b243"
          }
        }
      },
      "googleFonts": [
        "Montserrat"
      ]
    }
  },
        });
      });
    }
  })();
// blue shirt
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'apogee-athletic-store.myshopify.com',
        storefrontAccessToken: '33ce3d72e7286f6fa6e6a397e69f60f0',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '7329155383517',
          node: document.getElementById('product-component-1634052049733'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "button": {
          "font-family": "Montserrat, sans-serif",
          ":hover": {
            "background-color": "#e6b243"
          },
          "background-color": "#ffc64a",
          ":focus": {
            "background-color": "#e6b243"
          },
          "border-radius": "40px",
          "padding-left": "20px",
          "padding-right": "20px"
        }
      },
      "text": {
        "button": "Add to cart"
      },
      "googleFonts": [
        "Montserrat"
      ]
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-family": "Montserrat, sans-serif",
          ":hover": {
            "background-color": "#e6b243"
          },
          "background-color": "#ffc64a",
          ":focus": {
            "background-color": "#e6b243"
          },
          "border-radius": "40px",
          "padding-left": "20px",
          "padding-right": "20px"
        }
      },
      "googleFonts": [
        "Montserrat"
      ],
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-family": "Montserrat, sans-serif",
          ":hover": {
            "background-color": "#e6b243"
          },
          "background-color": "#ffc64a",
          ":focus": {
            "background-color": "#e6b243"
          },
          "border-radius": "40px"
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      },
      "googleFonts": [
        "Montserrat"
      ]
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-family": "Montserrat, sans-serif",
          "background-color": "#ffc64a",
          ":hover": {
            "background-color": "#e6b243"
          },
          ":focus": {
            "background-color": "#e6b243"
          }
        }
      },
      "googleFonts": [
        "Montserrat"
      ]
    }
  },
        });
      });
    }
  })();
