import {loadData, luuVaoMay, restoreData } from "./store.js";

const state = {
    records: [],
    query: "",
    category: "all",
    status: "all",
    sortBy: "date-desc",
    loading: true,
    error: null
}
const el = {};
function buildRow(record) {
    const row = el.template.content.firstElementChild.cloneNode(true);
    row.dataset.id = record.id;
}