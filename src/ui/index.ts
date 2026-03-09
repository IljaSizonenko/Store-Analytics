import { CreateBaseLayout } from "./dom.js";
import { loadState, saveState } from "./state.js";
import { renderProducts } from "./render.js";
import { Category } from "../models/Category.js";

document.addEventListener("DOMContentLoaded", () => {
    CreateBaseLayout();
    const products = loadState();
    renderProducts(products);
    const form = document.getElementById("product-form") as HTMLFormElement;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = (document.getElementById("product-name") as HTMLInputElement).value;
        const price = parseFloat((document.getElementById("product-price") as HTMLInputElement).value);
        const category = (document.getElementById("product-category") as HTMLInputElement).value as Category;
        const supplier = (document.getElementById("product-supplier") as HTMLInputElement).value;
        const specsRaw = (document.getElementById("product-specs") as HTMLInputElement).value;
        const specifications = specsRaw
            ? Object.fromEntries(specsRaw.split(",").map(pair => pair.split("=")))
            : undefined;
        const newProduct = {
            id: Date.now(),
            name,
            price,
            category,
            supplierId: parseInt(supplier),
            specifications
        };
        const searchInput = document.getElementById("search-input") as HTMLInputElement;
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query)
            );
            renderProducts(filtered)
        });
        const sortSelect = document.getElementById("sort-select") as HTMLSelectElement;
        sortSelect.addEventListener("change", () => {
            let sorted = [...products]
            switch (sortSelect.value) {
                case "name-asc":
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break
                case "name-desc":
                    sorted.sort((a, b) => b.name.localeCompare(a.name));
                    break
                case "price-asc":
                    sorted.sort((a, b) => a.price - b.price)
                    break
                case "price-desc":
                    sorted.sort((a, b) => b.price - a.price)
                    break
            }
            renderProducts(sorted)
        });
        const toggleBtn = document.getElementById("toggle-list") as HTMLButtonElement;
        const listContainer = document.getElementById("product-list")!;
        toggleBtn.addEventListener("click", () => {
            const hidden = listContainer.style.display == "none";
            listContainer.style.display == "hidden" ? "block" : "none";
            toggleBtn.textContent = hidden ? "Hide list" : "Show list";
        });
        const updated = [...products, newProduct];
        saveState(updated);
        renderProducts(updated);
    })
});