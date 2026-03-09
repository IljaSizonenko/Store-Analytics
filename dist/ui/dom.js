export function CreateBaseLayout() {
    const app = document.createElement("div");
    app.id = "app";
    const title = document.createElement("h1");
    title.textContent = "Store Analytics";
    const layout = document.createElement("div");
    layout.id = "layout";
    const leftPanel = document.createElement("div");
    leftPanel.id = "left-panel";
    const rightPanel = document.createElement("div");
    rightPanel.id = "right-panel";
    const form = CreateProductForm();
    leftPanel.appendChild(form);
    const controls = document.createElement("div");
    controls.id = "controls";
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search Product";
    searchInput.id = "search-input";
    const sortWrapper = document.createElement("div");
    sortWrapper.className = "sort-wrapper";
    const sortLabel = document.createElement("label");
    sortLabel.textContent = "Sort by";
    sortLabel.htmlFor = "sort-select";
    const sortSelect = document.createElement("select");
    sortSelect.id = "sort-select";
    const options = [
        { value: "name-asc", text: "Name A-Z" },
        { value: "name-desc", text: "Name Z-A" },
        { value: "price-asc", text: "Price increasing" },
        { value: "price-desc", text: "Price decreasing" },
    ];
    options.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o.value;
        opt.textContent = o.text;
        sortSelect.appendChild(opt);
    });
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggle-list";
    toggleBtn.textContent = "Hide list";
    const cleanBtn = document.createElement("button");
    cleanBtn.id = "clean-list";
    cleanBtn.textContent = "Clean list";
    const rightControls = document.createElement("div");
    rightControls.className = "right-controls";
    rightControls.appendChild(toggleBtn);
    rightControls.appendChild(cleanBtn);
    sortWrapper.appendChild(sortLabel);
    sortWrapper.appendChild(sortSelect);
    controls.appendChild(searchInput);
    controls.appendChild(sortWrapper);
    controls.appendChild(rightControls);
    const listContainer = document.createElement("div");
    listContainer.id = "product-list";
    rightPanel.appendChild(controls);
    rightPanel.appendChild(listContainer);
    layout.appendChild(leftPanel);
    layout.appendChild(rightPanel);
    app.appendChild(title);
    app.appendChild(layout);
    document.body.appendChild(app);
}
export function CreateProductForm() {
    const form = document.createElement("form");
    form.id = "product-form";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    nameInput.id = "product-name";
    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.placeholder = "Price";
    priceInput.id = "product-price";
    const categoryLabel = document.createElement("label");
    categoryLabel.textContent = "Category";
    const categorySelect = document.createElement("select");
    categorySelect.id = "product-category";
    const categories = [
        "Electronics",
        "Clothing",
        "Books",
        "Accessories"
    ];
    categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        categorySelect.appendChild(opt);
    });
    const supplierInput = document.createElement("input");
    supplierInput.type = "text";
    supplierInput.placeholder = "Supplier";
    supplierInput.id = "product-supplier";
    const specsInput = document.createElement("input");
    specsInput.type = "text";
    specsInput.placeholder = "Specifications";
    specsInput.id = "product-specs";
    const stockInput = document.createElement("input");
    stockInput.type = "text";
    stockInput.placeholder = "Stock (e.g. 1 or 1,2,3)";
    stockInput.id = "product-stock";
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add product";
    form.append(nameInput, priceInput, categoryLabel, categorySelect, supplierInput, specsInput, stockInput, submitBtn);
    return form;
}
