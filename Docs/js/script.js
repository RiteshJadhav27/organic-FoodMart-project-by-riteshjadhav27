(function($) {

  "use strict";

  var initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
  }

  // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

  var initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 8,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 5,
        },
        1500: {
          slidesPerView: 8,
        },
      }
    });

    $(".products-carousel").each(function(){
      var $el_id = $(this).attr('id');

      var products_swiper = new Swiper("#"+$el_id+" .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        navigation: {
          nextEl: "#"+$el_id+" .products-carousel-next",
          prevEl: "#"+$el_id+" .products-carousel-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 5,
          },
        }
      });

    });


    // product single page
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      slidesPerView: 5,
      spaceBetween: 20,
      // autoplay: true,
      direction: "vertical",
      breakpoints: {
        0: {
          direction: "horizontal"
        },
        992: {
          direction: "vertical"
        },
      },
    });

    var large_slider = new Swiper(".product-large-slider", {
      slidesPerView: 1,
      // autoplay: true,
      spaceBetween: 0,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // input spinner
  var initProductQty = function(){

    $('.product-qty').each(function(){
      
      var $el_product = $(this);
      var quantity = 0;
      
      $el_product.find('.quantity-right-plus').click(function(e){
        e.preventDefault();
        quantity = parseInt($el_product.find('#quantity').val());
        $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
        e.preventDefault();
        quantity = parseInt($el_product.find('#quantity').val());
        if(quantity>0){
          $el_product.find('#quantity').val(quantity - 1);
        }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // document ready
  $(document).ready(function() {
    
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();

  }); // End of a document

})(jQuery);

// For user log or sign-up
// fetch('http://localhost:8000/products')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); // Display product data
//         // Dynamically update your frontend with product data
//     })
//     .catch(error => console.error('Error fetching products:', error));


// for fetch the product 
    fetch('http://localhost:8000/products')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the product data
        const productList = document.getElementById('product-list');
        data.forEach(product => {
            const item = document.createElement('div');
            item.textContent = `${product.name} - $${product.price} (Quantity: ${product.quantity})`;
            productList.appendChild(item);
        });
    })
    .catch(error => console.error('Error fetching products:', error));


    
    // Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Fetch products from the backend
  fetch('http://localhost:8000/products')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Parse JSON response
      })
      .then(products => {
          const productContainer = document.getElementById('product-list'); // Assume this is your container
          productContainer.innerHTML = ''; // Clear any existing content

          // Dynamically create product elements
          products.forEach(product => {
              const productHTML = `
                  <div class="col">
                      <div class="product-item" id="product-${product.id}">
                          <figure>
                              <a href="product-details.html?id=${product.id}" title="${product.name}">
                                  <img src="${product.image}" alt="${product.name}" class="tab-image">
                              </a>
                          </figure>
                          <div class="d-flex flex-column text-center">
                              <h3 class="fs-6 fw-normal">${product.name}</h3>
                              <div>
                                  <span class="text-dark fw-semibold">$${product.price}</span>
                              </div>
                              <div class="button-area p-3 pt-0">
                                  <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                                      Add to Cart
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
              productContainer.insertAdjacentHTML('beforeend', productHTML);
          });
      })
      .catch(error => {
          console.error('Error fetching products:', error);
      });
});
