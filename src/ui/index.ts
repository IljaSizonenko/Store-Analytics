import { CreateBaseLayout } from "./dom.js";
import { loadState } from "./state.js";
import { renderProducts } from "./render.js";

document.addEventListener("DOMContentLoaded", () => {
    CreateBaseLayout();
    const products = loadState();
    renderProducts(products)
});