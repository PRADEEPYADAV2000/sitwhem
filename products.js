// ================================================================
//  SITWHEM — PRODUCT CATALOGUE
//  Edit this file to add or remove products from the website.
//
//  HOW TO ADD A NEW PRODUCT:
//  ─────────────────────────────────────────────────────────────
//  1. Put your product image in this folder (same as index.html)
//  2. Scroll to the bottom of this file
//  3. Copy the template block shown at the very bottom
//  4. Paste it before the last  ];  line
//  5. Fill in each field
//  6. Add the new ID to stock.js as well  (e.g.  13: true,)
//  7. Save — product appears on the site automatically
//
//  SECTION — where the product shows up (pick exactly one):
//  ─────────────────────────────────────────────────────────────
//  "trackwear"  →  New Arrivals section (track pants, shorts)
//  "tshirts"    →  T-Shirts & Sweatshirts section
//  "jackets"    →  Jackets section
//
//  SIZES — remove any sizes that don't apply:
//  ["XS", "S", "M", "L", "XL", "XXL"]
//
//  PRICE / MRP — numbers only, no ₹ symbol
// ================================================================

const PRODUCTS = [

  // ── Product 1 ──────────────────────────────────────────────
  {
    id:          1,
    name:        "FILA Navy Piped Track Pants",
    brand:       "FILA",
    price:       899,
    mrp:         1499,
    image:       "1.jpeg",
    section:     "trackwear",
    sizes:       ["XS", "S", "M", "L", "XL"],
    description: "Classic navy track pants with piped detailing. Authentic vintage piece in excellent condition.",
  },

  // ── Product 2 ──────────────────────────────────────────────
  {
    id:          2,
    name:        "Nike Black Snap-Button Tearaway Pants",
    brand:       "Nike",
    price:       1099,
    mrp:         1999,
    image:       "2.jpeg",
    section:     "trackwear",
    sizes:       ["S", "M", "L", "XL"],
    description: "Iconic 90s Nike tearaway pants with snap buttons down both legs. A rare collector piece.",
  },

  // ── Product 3 ──────────────────────────────────────────────
  {
    id:          3,
    name:        "Puma Navy Sky-Blue Stripe Track Pants",
    brand:       "Puma",
    price:       999,
    mrp:         1699,
    image:       "3.jpeg",
    section:     "trackwear",
    sizes:       ["XS", "S", "M", "L"],
    description: "Vintage Puma track pants with distinctive triple sky-blue stripe pattern. Elasticated ankle cuffs.",
  },

  // ── Product 4 ──────────────────────────────────────────────
  {
    id:          4,
    name:        "Nike Navy Panel Track Pants",
    brand:       "Nike",
    price:       899,
    mrp:         1499,
    image:       "4.jpeg",
    section:     "trackwear",
    sizes:       ["S", "M", "L", "XL", "XXL"],
    description: "Navy panel design track pants with white side panel. A staple from the golden era of sportswear.",
  },

  // ── Product 5 ──────────────────────────────────────────────
  {
    id:          5,
    name:        "Nike Athletic Grid-Panel Track Pants",
    brand:       "Nike",
    price:       999,
    mrp:         1799,
    image:       "5.jpeg",
    section:     "trackwear",
    sizes:       ["M", "L", "XL"],
    description: "Grid-panel athletic track pants with reflective side panel. Authentic Nike Athletic Division vintage.",
  },

  // ── Product 6 ──────────────────────────────────────────────
  {
    id:          6,
    name:        "Vintage Color-Block Racer Track Pants",
    brand:       "Vintage",
    price:       1099,
    mrp:         1899,
    image:       "6.jpeg",
    section:     "trackwear",
    sizes:       ["XS", "S", "M", "L"],
    description: "Rare color-block racer pants in navy, khaki and burgundy with contrast stitching. A true statement piece.",
  },

  // ── Product 7 ──────────────────────────────────────────────
  {
    id:          7,
    name:        "Nike Navy Red-Stripe Track Shorts",
    brand:       "Nike",
    price:       799,
    mrp:         1299,
    image:       "7.jpeg",
    section:     "trackwear",
    sizes:       ["S", "M", "L", "XL"],
    description: "Vintage Nike shorts with bold red side stripe and embroidered Swoosh. Summer ready.",
  },

  // ── Product 8 ──────────────────────────────────────────────
  {
    id:          8,
    name:        "Jordan Training Tee",
    brand:       "Jordan",
    price:       849,
    mrp:         1399,
    image:       "t1.jpeg",
    section:     "tshirts",
    sizes:       ["S", "M", "L", "XL"],
    description: "Authentic Jordan Brand training tee in cool grey with pink Jumpman logo. Lightweight performance fabric, vintage condition.",
  },

  // ── Product 9 ──────────────────────────────────────────────
  {
    id:          9,
    name:        "Nike Vintage Crewneck Sweatshirt",
    brand:       "Nike",
    price:       1099,
    mrp:         1799,
    image:       "t2.jpeg",
    section:     "tshirts",
    sizes:       ["XS", "S", "M", "L"],
    description: "Rare Nike magenta crewneck with embroidered Swoosh. Heavy cotton fleece, faded vintage wash — a genuine 90s classic.",
  },

  // ── Product 10 ─────────────────────────────────────────────
  {
    id:          10,
    name:        "Carhartt Olive Sherpa Lined Jacket",
    brand:       "Carhartt",
    price:       1099,
    mrp:         2499,
    image:       "j1.png",
    section:     "jackets",
    sizes:       ["S", "M", "L", "XL", "XXL"],
    description: "Premium Carhartt olive hooded jacket with warm sherpa lining. Full zip, cargo pockets, drawcord hem. A workwear icon reborn as streetwear.",
  },

  // ── Product 11 ─────────────────────────────────────────────
  {
    id:          11,
    name:        "Vintage Dark Brown Leather Jacket",
    brand:       "Vintage",
    price:       1099,
    mrp:         2999,
    image:       "J2.png",
    section:     "jackets",
    sizes:       ["S", "M", "L", "XL"],
    description: "Clean-cut dark brown leather moto jacket with minimal zip detail. Slim silhouette, snap pockets, full-grain leather. A timeless layer for any fit.",
  },

  // ── Product 12 ─────────────────────────────────────────────
  {
    id:          12,
    name:        "Grey Bomber Jacket",
    brand:       "Vintage",
    price:       899,
    mrp:         1999,
    image:       "J3.png",
    section:     "jackets",
    sizes:       ["S", "M", "L", "XL", "XXL"],
    description: "Lightweight grey bomber with black ribbed collar, cuffs and hem. Dual zip pockets, clean street-ready silhouette. Easy layering for every season.",
  }
  // ================================================================
  //  ADD NEW PRODUCTS BELOW THIS LINE
  //  Copy the block below, paste it here, fill in your details
  // ================================================================

  // ── TEMPLATE (copy from here) ───────────────────────────────
  //
  // {
  //   id:          13,                      ← next number after last product
  //   name:        "Product Name Here",
  //   brand:       "Brand Name",
  //   price:       999,                     ← selling price, numbers only
  //   mrp:         1999,                    ← original price, numbers only
  //   image:       "filename.jpeg",         ← image file in this folder
  //   section:     "trackwear",             ← trackwear / tshirts / jackets
  //   sizes:       ["S", "M", "L", "XL"],  ← remove sizes not available
  //   description: "Write product description here.",
  // },
  //
  // ── TEMPLATE (copy to here) ────────────────────────────────

];
