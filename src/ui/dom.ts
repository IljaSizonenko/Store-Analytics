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
    app.appendChild(title);
    app.appendChild(formContainer);
    app.append(filterContainer);
    app.append(listContainer);
    document.body.appendChild(app)
}