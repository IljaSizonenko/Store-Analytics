const StorageKey = "products";
export function loadState() {
    const raw = localStorage.getItem(StorageKey);
    return raw ? JSON.parse(raw) : [];
}
export function saveState(products) {
    localStorage.setItem(StorageKey, JSON.stringify(products));
}
