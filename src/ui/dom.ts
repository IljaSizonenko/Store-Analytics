export function CreateBaseLayout() {
    const app = document.createElement("div")
    app.id = "app";
    const title = document.createElement("h1")
    title.textContent = "Store Analytics";
    const formContainer = document.createElement("div")
    formContainer.id = "form-container";
    const filterContainer = document.createElement("div")
    filterContainer.id = "filter-container";
    const listContainer = document.createElement("div")
    listContainer.id = "product-list";
    const form = CreateProductForm()
    formContainer.appendChild(form)
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search Product";
    searchInput.id = "search-input";
    filterContainer.appendChild(searchInput);
    const sortSelect = document.createElement("select")
    sortSelect.id = "sort-select";
    const options = [
        {value: "name-asc", text: "Name A-Z"},
        {value: "name-desc", text: "Name Z-A"},
        {value: "price-asc", text: "Price increasing"},
        {value: "price-desc", text: "Price decreasing"},
    ]
    options.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o.value;
        opt.textContent = o.text;
        sortSelect.appendChild(opt);
    });
    filterContainer.appendChild(sortSelect)
    const toggleBtn = document.createElement("button")
    toggleBtn.id = "toggle-list";
    toggleBtn.textContent = "Hide list";
    filterContainer.appendChild(toggleBtn);
    app.appendChild(title);
    app.appendChild(formContainer);
    app.append(filterContainer);
    app.append(listContainer);
    document.body.appendChild(app)
}
export function CreateProductForm() {
    const form = document.createElement("form");
    form.id = "product-form";
    const nameInput = document.createElement("input")
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    nameInput.id = "product-name";
    const priceInput = document.createElement("input")
    priceInput.type = "number";
    priceInput.placeholder = "Price";
    priceInput.id = "product-price";
    const categoryInput = document.createElement("input")
    categoryInput.type = "text";
    categoryInput.placeholder = "Category";
    categoryInput.id = "product-category";
    const supplierInput = document.createElement("input")
    supplierInput.type = "text";
    supplierInput.placeholder = "Supplier";
    supplierInput.id = "product-supplier";
    const specsInput = document.createElement("input")
    specsInput.type = "text";
    specsInput.placeholder = "Specifications";
    specsInput.id = "product-specs";
    const submitBtn = document.createElement("button")
    submitBtn.type = "submit";
    submitBtn.textContent = "Add product";
    form.append(
        nameInput,
        priceInput,
        categoryInput,
        supplierInput,
        specsInput,
        submitBtn
    );
    return form
}