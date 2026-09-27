// ==========================================
// LOVE LUXE SHOPPER CATALOG
// ==========================================


const products = [

    // CLOTHING

    {
        name: "Classic Ribbed Top",
        category: "Clothing",
        price: 499,
        description: "Simple and versatile everyday top.",
        image: ""
    },

    {
        name: "Elegant Casual Dress",
        category: "Clothing",
        price: 899,
        description: "A clean and elegant dress for any occasion.",
        image: ""
    },

    {
        name: "Luxe Long Sleeve Blouse",
        category: "Clothing",
        price: 749,
        description: "Comfortable blouse with a simple elegant style.",
        image: ""
    },

    {
        name: "Everyday Wide Pants",
        category: "Clothing",
        price: 799,
        description: "Comfortable pants designed for everyday wear.",
        image: ""
    },


    // BODY CARE

    {
        name: "Luxe Body Lotion",
        category: "Body Care",
        price: 399,
        description: "Moisturizing body lotion for everyday care.",
        image: ""
    },

    {
        name: "Gentle Body Wash",
        category: "Body Care",
        price: 349,
        description: "A refreshing body wash for daily use.",
        image: ""
    },

    {
        name: "Body Scrub",
        category: "Body Care",
        price: 429,
        description: "Gentle body scrub for a refreshing routine.",
        image: ""
    },

    {
        name: "Hand & Body Cream",
        category: "Body Care",
        price: 299,
        description: "Lightweight cream for everyday moisturizing.",
        image: ""
    },


    // BAGS

    {
        name: "Classic Luxe Handbag",
        category: "Bags",
        price: 1299,
        description: "Elegant handbag suitable for everyday use.",
        image: ""
    },

    {
        name: "Mini Shoulder Bag",
        category: "Bags",
        price: 999,
        description: "Compact shoulder bag for your daily essentials.",
        image: ""
    },

    {
        name: "Everyday Tote Bag",
        category: "Bags",
        price: 899,
        description: "Spacious tote bag with a clean design.",
        image: ""
    },

    {
        name: "Elegant Crossbody Bag",
        category: "Bags",
        price: 1099,
        description: "Stylish crossbody bag for casual occasions.",
        image: ""
    },


    // PERFUME

    {
        name: "Luxe Bloom",
        category: "Perfume",
        price: 799,
        description: "A soft and elegant fragrance for everyday wear.",
        image: ""
    },

    {
        name: "Golden Rose",
        category: "Perfume",
        price: 899,
        description: "A warm fragrance with a graceful character.",
        image: ""
    },

    {
        name: "Midnight Luxe",
        category: "Perfume",
        price: 999,
        description: "A deeper fragrance for evening occasions.",
        image: ""
    },

    {
        name: "Fresh Aura",
        category: "Perfume",
        price: 699,
        description: "A light and refreshing fragrance.",
        image: ""
    }

];


// ==========================================
// VARIABLES
// ==========================================

let selectedCategory = "All";

let searchText = "";


const productGrid =
    document.getElementById("productGrid");

const productCount =
    document.getElementById("productCount");

const searchInput =
    document.getElementById("searchInput");

const noProducts =
    document.getElementById("noProducts");

const filterButtons =
    document.querySelectorAll(".filter-button");


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts() {

    productGrid.innerHTML = "";


    const filteredProducts =
        products.filter(function(product) {

            const categoryMatch =
                selectedCategory === "All" ||
                product.category === selectedCategory;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    )

                ||

                product.category
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );


            return categoryMatch && searchMatch;

        });


    // NO PRODUCTS

    if (filteredProducts.length === 0) {

        noProducts.style.display = "block";

        productCount.textContent =
            "No products found";

        return;

    }


    noProducts.style.display = "none";


    productCount.textContent =
        "Showing " +
        filteredProducts.length +
        " product(s)";


    // CREATE PRODUCT CARDS

    filteredProducts.forEach(
        function(product) {

            const card =
                document.createElement("div");

            card.className =
                "product-card";


            let imageHTML = "";


            if (product.image !== "") {

                imageHTML =

                    `<img
                        src="${product.image}"
                        alt="${product.name}"
                    >`;

            }

            else {

                imageHTML =

                    `<div class="image-placeholder">
                        LOVE LUXE
                    </div>`;

            }


            card.innerHTML = `

                <div class="product-image">

                    ${imageHTML}

                </div>


                <div class="product-info">

                    <div class="product-category">

                        ${product.category}

                    </div>


                    <h3 class="product-name">

                        ${product.name}

                    </h3>


                    <p class="product-description">

                        ${product.description}

                    </p>


                    <div class="product-bottom">

                        <span class="product-price">

                            ₱${product.price.toLocaleString(
                                "en-PH",
                                {
                                    minimumFractionDigits: 2
                                }
                            )}

                        </span>


                        <button
                            class="view-button"
                            onclick="viewProduct('${product.name}')">

                            VIEW

                        </button>

                    </div>

                </div>

            `;


            productGrid.appendChild(card);

        }
    );

}


// ==========================================
// CATEGORY FILTER
// ==========================================

filterButtons.forEach(

    function(button) {

        button.addEventListener(

            "click",

            function() {


                filterButtons.forEach(

                    function(btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }

                );


                button.classList.add(
                    "active"
                );


                selectedCategory =
                    button.dataset.category;


                displayProducts();

            }

        );

    }

);


// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener(

    "input",

    function() {

        searchText =
            searchInput.value.trim();

        displayProducts();

    }

);


// ==========================================
// VIEW PRODUCT
// ==========================================

function viewProduct(productName) {

    alert(

        "You selected: " +
        productName +
        "\n\nProduct details and ordering can be added here."

    );

}


// ==========================================
// SIDEBAR
// ==========================================

const shopSidebar =
    document.getElementById("shopSidebar");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");


function openSidebar() {

    shopSidebar.classList.add("open");

    sidebarOverlay.classList.add("active");

}


function closeSidebar() {

    shopSidebar.classList.remove("open");

    sidebarOverlay.classList.remove("active");

}


// CLICK OVERLAY TO CLOSE

sidebarOverlay.addEventListener(

    "click",

    function() {

        closeSidebar();

    }

);


// ==========================================
// SIDEBAR MESSAGE
// ==========================================

function showMessage(section) {

    closeSidebar();

    alert(
        section +
        " page will be added next."
    );

}


// ==========================================
// CUSTOMER NAME
// ==========================================

function displayCustomerName() {

    const customerName =
        document.getElementById("customerName");


    const currentUser =
        localStorage.getItem(
            "loveLuxeCurrentUser"
        );


    if (!currentUser) {

        customerName.textContent =
            "Customer";

        return;

    }


    try {

        const user =
            JSON.parse(currentUser);


        if (user.fullName) {

            customerName.textContent =
                user.fullName;

        }

    }

    catch (error) {

        customerName.textContent =
            "Customer";

    }

}


// ==========================================
// START
// ==========================================

displayCustomerName();

displayProducts();
