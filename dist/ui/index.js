import { CreateBaseLayout } from "./dom.js";
import { loadState, saveState } from "./state.js";
import { renderProducts } from "./render.js";
CreateBaseLayout();
let products = loadState();
const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
const discountRules = JSON.parse(localStorage.getItem("discountRules") || "[]");
renderProducts(products, reviews, discountRules);
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered, reviews, discountRules);
});
const sortSelect = document.getElementById("sort-select");
sortSelect.addEventListener("change", () => {
    let sorted = [...products];
    switch (sortSelect.value) {
        case "name-asc":
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "price-asc":
            sorted.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            sorted.sort((a, b) => b.price - a.price);
            break;
    }
    renderProducts(sorted, reviews, discountRules);
});
const toggleBtn = document.getElementById("toggle-list");
const listContainer = document.getElementById("product-list");
toggleBtn.addEventListener("click", () => {
    const hidden = listContainer.style.visibility === "hidden";
    listContainer.style.visibility = hidden ? "visible" : "hidden";
    listContainer.style.height = hidden ? "auto" : "0";
    toggleBtn.textContent = hidden ? "Hide list" : "Show list";
});
const cleanBtn = document.getElementById("clean-list");
cleanBtn.addEventListener("click", () => {
    if (!confirm("Are you sure you want to clean the list?"))
        return;
    products = [];
    saveState(products);
    renderProducts(products, reviews, discountRules);
});
const form = document.getElementById("product-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("product-name").value;
    const price = parseFloat(document.getElementById("product-price").value);
    const category = document.getElementById("product-category").value;
    const supplier = document.getElementById("product-supplier").value;
    const stockRaw = document.getElementById("product-stock").value;
    const specsRaw = document.getElementById("product-specs").value;
    const specifications = specsRaw
        ? Object.fromEntries(specsRaw
            .split(",")
            .map(pair => pair.trim())
            .filter(pair => pair.includes("="))
            .map(pair => {
            const [key, value] = pair.split("=").map(s => s.trim());
            return [key, value];
        }))
        : undefined;
    const id = Date.now();
    const stock = stockRaw
        .split(",")
        .map(s => s.trim())
        .filter(s => s !== "")
        .map((quantityStr, index) => ({
        productId: id,
        warehouse: `W${index + 1}`,
        quantity: Number(quantityStr)
    }));
    const newProduct = {
        id,
        name,
        price,
        category,
        supplierId: parseInt(supplier),
        specifications,
        stock
    };
    products = [...products, newProduct];
    saveState(products);
    renderProducts(products, reviews, discountRules);
});
