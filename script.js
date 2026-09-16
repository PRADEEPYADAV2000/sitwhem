/* ============================================
   SITWHEM — Main JavaScript
   Vintage Streetwear × Fashion Editorial
   ============================================ */

/* --- Product Data --- */
const products = [
  {
    id: 1,
    name: "FILA Navy Piped Track Pants",
    brand: "FILA",
    price: 899,
    mrp: 1499,
    image: "1.jpeg",
    description: "Classic navy track pants with piped detailing. Authentic vintage piece in excellent condition.",
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["trackwear"]
  },
  {
    id: 2,
    name: "Nike Black Snap-Button Tearaway Pants",
    brand: "Nike",
    price: 1099,
    mrp: 1999,
    image: "2.jpeg",
    description: "Iconic 90s Nike tearaway pants with snap buttons down both legs. A rare collector piece.",
    sizes: ["S", "M", "L", "XL"],
    tags: ["trackwear", "sports"]
  },
  {
    id: 3,
    name: "Puma Navy Sky-Blue Stripe Track Pants",
    brand: "Puma",
    price: 999,
    mrp: 1699,
    image: "3.jpeg",
    description: "Vintage Puma track pants with distinctive triple sky-blue stripe pattern. Elasticated ankle cuffs.",
    sizes: ["XS", "S", "M", "L"],
    tags: ["trackwear"]
  },
  {
    id: 4,
    name: "Nike Navy Panel Track Pants",
    brand: "Nike",
    price: 899,
    mrp: 1499,
    image: "4.jpeg",
    description: "Navy panel design track pants with white side panel. A staple from the golden era of sportswear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["trackwear", "sports"]
  },
  {
    id: 5,
    name: "Nike Athletic Grid-Panel Track Pants",
    brand: "Nike",
    price: 999,
    mrp: 1799,
    image: "5.jpeg",
    description: "Grid-panel athletic track pants with reflective side panel. Authentic Nike Athletic Division vintage.",
    sizes: ["M", "L", "XL"],
    tags: ["trackwear", "sports"]
  },
  {
    id: 6,
    name: "Vintage Color-Block Racer Track Pants",
    brand: "Vintage",
    price: 1099,
    mrp: 1899,
    image: "6.jpeg",
    description: "Rare color-block racer pants in navy, khaki and burgundy with contrast stitching. A true statement piece.",
    sizes: ["XS", "S", "M", "L"],
    tags: ["trackwear", "vintage"]
  },
  {
    id: 7,
    name: "Nike Navy Red-Stripe Track Shorts",
    brand: "Nike",
    price: 799,
    mrp: 1299,
    image: "7.jpeg",
    description: "Vintage Nike shorts with bold red side stripe and embroidered Swoosh. Summer ready.",
    sizes: ["S", "M", "L", "XL"],
    tags: ["trackwear", "sports"]
  },
  {
    id: 8,
    name: "Jordan Training Tee",
    brand: "Jordan",
    price: 849,
    mrp: 1399,
    image: "t1.jpeg",
    description: "Authentic Jordan Brand training tee in cool grey with pink Jumpman logo. Lightweight performance fabric, vintage condition.",
    sizes: ["S", "M", "L", "XL"],
    tags: ["tshirts", "sports"]
  },
  {
    id: 9,
    name: "Nike Vintage Crewneck Sweatshirt",
    brand: "Nike",
    price: 1099,
    mrp: 1799,
    image: "t2.jpeg",
    description: "Rare Nike magenta crewneck with embroidered Swoosh. Heavy cotton fleece, faded vintage wash — a genuine 90s classic.",
    sizes: ["XS", "S", "M", "L"],
    tags: ["tshirts", "sports"]
  },
  {
    id: 10,
    name: "Carhartt Olive Sherpa Lined Jacket",
    brand: "Carhartt",
    price: 1099,
    mrp: 2499,
    image: "j1.png",
    description: "Premium Carhartt olive hooded jacket with warm sherpa lining. Full zip, cargo pockets, drawcord hem. A workwear icon reborn as streetwear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["jackets", "outdoor"]
  },
  // [AI GENERATED CODE]
  {
    id: 11,
    name: "Vintage Dark Brown Leather Jacket",
    brand: "Vintage",
    price: 1099,
    mrp: 2999,
    image: "J2.png",
    description: "Clean-cut dark brown leather moto jacket with minimal zip detail. Slim silhouette, snap pockets, full-grain leather. A timeless layer for any fit.",
    sizes: ["S", "M", "L", "XL"],
    tags: ["jackets", "leather"]
  },
  // [AI GENERATED CODE]
  {
    id: 12,
    name: "Grey Bomber Jacket",
    brand: "Vintage",
    price: 899,
    mrp: 1999,
    image: "J3.png",
    description: "Lightweight grey bomber with black ribbed collar, cuffs and hem. Dual zip pockets, clean street-ready silhouette. Easy layering for every season.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["jackets", "bomber"]
  }
];

/* --- State --- */
let cart = [];
let selectedProduct = null;
let selectedSize = null;

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
  renderNewArrivals();
  renderBestSellers();
  renderTshirts();
  renderJackets();
  renderCommunity();
  setupRevealObserver();
  setupHeaderScroll();
  setupEventListeners();
});

/* ============================================
   RENDER FUNCTIONS
   ============================================ */

function renderNewArrivals() {
  const grid = document.getElementById('newArrivalsGrid');
  if (!grid) return;
  grid.innerHTML = products.slice(0, 4).map(createProductCard).join('');
}

function renderBestSellers() {
  const grid = document.getElementById('bestSellersGrid');
  if (!grid) return;
  grid.innerHTML = products.slice(4, 7).map(createProductCard).join('');
}

function renderTshirts() {
  const grid = document.getElementById('tshirtsGrid');
  if (!grid) return;
  const items = products.filter(p => p.tags.includes('tshirts'));
  grid.innerHTML = items.map(createProductCard).join('');
}

function renderJackets() {
  const grid = document.getElementById('jacketsGrid');
  if (!grid) return;
  const items = products.filter(p => p.tags.includes('jackets'));
  grid.innerHTML = items.map(createProductCard).join('');
}

function renderCommunity() {
  const grid = document.getElementById('communityGrid');
  if (!grid) return;
  const imgs = [
    { image: 't1.jpeg', name: 'Jordan Tee' },
    { image: 'j1.png',  name: 'Carhartt Jacket' },
    { image: 't2.jpeg', name: 'Nike Crewneck' },
    { image: '2.jpeg',  name: 'Nike Tearaway' },
    { image: '6.jpeg',  name: 'Vintage Colorblock' },
    { image: '4.jpeg',  name: 'Nike Panel' },
    { image: '1.jpeg',  name: 'FILA Track' },
    { image: '5.jpeg',  name: 'Nike Athletic' }
  ];
  grid.innerHTML = imgs.map(item => `
    <div class="community-tile" onclick="window.open('https://instagram.com/sitwhem.thrift','_blank')">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="community-tile-overlay">
        <div class="community-tile-icon">❤</div>
        <div class="community-tile-handle">@sitwhem.thrift</div>
      </div>
    </div>
  `).join('');
}

/* ============================================
   PRODUCT CARD
   ============================================ */

function createProductCard(product) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image" onclick="openModal(${product.id})">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-brand">${product.brand}</div>
      <div class="product-name" onclick="openModal(${product.id})">${product.name}</div>
      <div class="product-price">
        ₹${product.price.toLocaleString('en-IN')}
        <span style="font-size:12px;color:var(--ink-muted);text-decoration:line-through;font-weight:400;margin-left:6px">₹${product.mrp.toLocaleString('en-IN')}</span>
        <span style="font-size:10px;font-weight:700;color:var(--green);margin-left:4px">${discount}% OFF</span>
      </div>
      <div class="product-add" onclick="quickAddToCart(${product.id})">+ ADD TO CART</div>
    </div>
  `;
}

/* ============================================
   CART FUNCTIONS
   ============================================ */

function quickAddToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const size = product.sizes[0];
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, size, qty: 1 });
  }
  updateCartUI();
  showToast(`${product.name} added to cart`);
}

function addToCartFromModal() {
  if (!selectedProduct) return;
  if (!selectedSize) {
    showToast('Please select a size first');
    return;
  }
  const existing = cart.find(i => i.id === selectedProduct.id && i.size === selectedSize);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...selectedProduct, size: selectedSize, qty: 1 });
  }
  updateCartUI();
  closeModal();
  showToast(`${selectedProduct.name} added to cart`);
}

function removeFromCart(productId, size) {
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  updateCartUI();
  showToast('Item removed from cart');
}

function updateCartUI() {
  // Badge
  const badge = document.getElementById('cartBadge');
  const count = cart.reduce((s, i) => s + i.qty, 0);
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
  renderCartSidebar();
}

function renderCartSidebar() {
  const cartItemsEl = document.getElementById('cartItems');
  const shippingNote = document.getElementById('cartShipping');
  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="cart-empty">Your cart is empty.<br><br>Start adding pieces ↑</div>';
    const subtotalEl = document.getElementById('cartSubtotal');
    if (subtotalEl) subtotalEl.textContent = '₹0';
    if (shippingNote) shippingNote.style.display = 'none';
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">Size: ${item.size} &nbsp;·&nbsp; Qty: ${item.qty}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
        <div class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</div>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const subtotalEl = document.getElementById('cartSubtotal');
  if (subtotalEl) subtotalEl.textContent = '₹' + subtotal.toLocaleString('en-IN');

  if (shippingNote) {
    shippingNote.style.display = subtotal >= 1500 ? 'block' : 'none';
  }
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('active');
}

/* ============================================
   MODAL
   ============================================ */

function openModal(productId) {
  selectedProduct = products.find(p => p.id === productId);
  if (!selectedProduct) return;
  selectedSize = null;

  document.getElementById('modalImage').src = selectedProduct.image;
  document.getElementById('modalBrand').textContent = selectedProduct.brand;
  document.getElementById('modalName').textContent = selectedProduct.name;
  document.getElementById('modalPrice').textContent = `₹${selectedProduct.price.toLocaleString('en-IN')}`;
  document.getElementById('modalMRP').textContent = `₹${selectedProduct.mrp.toLocaleString('en-IN')}`;
  document.getElementById('modalDesc').textContent = selectedProduct.description;

  document.getElementById('sizeOptions').innerHTML = selectedProduct.sizes.map(size => `
    <button class="size-btn" onclick="selectSize('${size}', event)">${size}</button>
  `).join('');

  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
  selectedProduct = null;
  selectedSize = null;
}

function selectSize(size, e) {
  e.stopPropagation();
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
  e.target.classList.add('selected');
}

function shareWhatsApp() {
  if (!selectedProduct) return;
  const msg = `Hey! Check out ${selectedProduct.brand} — ${selectedProduct.name} on @sitwhem.thrift 🔥\n\nPrice: ₹${selectedProduct.price.toLocaleString('en-IN')}\n\nDM or WhatsApp to order!`;
  window.open(`https://wa.me/918828383076?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ============================================
   CHECKOUT
   ============================================ */

function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty');
    return;
  }
  document.getElementById('checkoutModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('active');
  document.body.style.overflow = '';
}

function placeOrder() {
  const utr = document.getElementById('chkUtr')?.value.trim();
  if (!utr) { showToast('Please enter UTR / Transaction ID'); return; }
  const phone = document.getElementById('chkPhone')?.value.trim();
  const name  = document.getElementById('chkName')?.value.trim();
  const orderId = 'STW-' + Date.now().toString().slice(-8).toUpperCase();

  document.getElementById('successPhone').textContent = phone;
  document.getElementById('successOrderId').textContent = 'Order ID: ' + orderId;
  document.getElementById('checkoutStep2').style.display = 'none';
  document.getElementById('checkoutSuccess').style.display = 'block';

  // Auto-send order details to WhatsApp
  const total   = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const itemList = cart.map(i => `• ${i.brand} ${i.name} (${i.size}) ×${i.qty} — ₹${(i.price * i.qty).toLocaleString('en-IN')}`).join('\n');
  const msg = `🛍️ New Sitwhem Order!\n\nOrder ID: ${orderId}\nName: ${name}\nPhone: ${phone}\n\n${itemList}\n\nTotal: ₹${total.toLocaleString('en-IN')}\nUTR: ${utr}`;
  setTimeout(() => window.open(`https://wa.me/918828383076?text=${encodeURIComponent(msg)}`, '_blank'), 600);
}

function resetCartAfterOrder() {
  cart = [];
  updateCartUI();
  document.getElementById('checkoutStep1').style.display = 'block';
  document.getElementById('checkoutStep2').style.display = 'none';
  document.getElementById('checkoutSuccess').style.display = 'none';
  document.getElementById('checkoutForm')?.reset();
  document.body.style.overflow = '';
}

function whatsappOrder() {
  if (cart.length === 0) { showToast('Your cart is empty'); return; }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const itemList = cart.map(i => `• ${i.brand} ${i.name} (${i.size}) ×${i.qty} — ₹${(i.price * i.qty).toLocaleString('en-IN')}`).join('\n');
  const msg = `Hi Sitwhem! I'd like to order:\n\n${itemList}\n\n💰 Total: ₹${total.toLocaleString('en-IN')}\n\nPlease confirm availability and payment details. Thanks!`;
  window.open(`https://wa.me/918828383076?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ============================================
   BRAND FILTER
   ============================================ */

window.filterByBrand = function (brand) {
  if (brand === 'Jordan') {
    scrollToSection('tshirts');
  } else if (brand === 'Carhartt') {
    scrollToSection('jackets');
  } else {
    scrollToSection('arrivals');
  }
  showToast(`Showing ${brand} pieces`);
};

/* ============================================
   UTILITIES
   ============================================ */

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ============================================
   SCROLL & REVEAL
   ============================================ */

function setupHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

function setupRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================
   EVENT LISTENERS
   ============================================ */

function setupEventListeners() {
  // Cart button
  document.getElementById('cartBtn')?.addEventListener('click', toggleCart);

  // Hamburger + mobile menu close
  document.getElementById('hamburgerBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('active');
  });

  document.getElementById('mobileMenuClose')?.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
  });

  // Close mobile menu when any link clicked
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('active');
    });
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      const isOpen = item.classList.contains('active');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      // Open clicked if it wasn't already open
      if (!isOpen) item.classList.add('active');
    });
  });

  // Close product modal on overlay click
  document.getElementById('productModal')?.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  // Close checkout modal on overlay click
  document.getElementById('checkoutModal')?.addEventListener('click', function (e) {
    if (e.target === this) closeCheckout();
  });

  // Checkout form — Step 1 → Step 2 (UPI)
  document.getElementById('checkoutForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    document.getElementById('chkTotalAmt').textContent = '₹' + total.toLocaleString('en-IN');
    const items = cart.map(i =>
      `${i.brand} ${i.name} (${i.size}) ×${i.qty} — ₹${(i.price * i.qty).toLocaleString('en-IN')}`
    ).join('<br>');
    document.getElementById('checkoutOrderItems').innerHTML =
      `<div style="margin-bottom:8px;font-weight:600;color:var(--ink)">Your Order</div>${items}
       <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border);font-weight:700;color:var(--ink)">Total: ₹${total.toLocaleString('en-IN')}</div>`;
    document.getElementById('checkoutStep1').style.display = 'none';
    document.getElementById('checkoutStep2').style.display = 'block';
  });

  // Newsletter
  document.getElementById('newsletterForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('You\'re in! First access drops incoming.');
    this.reset();
  });

  // Search icon — simple scroll to new arrivals
  document.getElementById('searchBtn')?.addEventListener('click', () => {
    scrollToSection('arrivals');
    showToast('Browse all pieces below ↓');
  });
}
