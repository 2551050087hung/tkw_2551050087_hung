export const KEY = "web:records";
const DATA_FILE = ".data/records.json"
function docTuMay(){
    const raw = localStorage.getItem(KEY);
    if(raw === null) return null;

    try {
        const duLieu = JSON.parse(raw);
        return Array.isArray(duLieu) ? duLieu : null;
    }
    catch {
        return null;
    }
}

export function luuVaoMay(records) {
    try {
        localStorage.setItem(KEY, JSON.stringify(records));
    }
    catch (err){
        console.warn(`hông thể lưu vào localStorage: ${err.message}`, err);
    }
}
export async function downloadData() {
        const response = await fetch(DATA_FILE);
        if (!response.ok)  throw new Error(`Máy chủ trả về ${response.status}`);
        const data = await response.json();
        if(!Array.isArray(data)) throw new Error("Dữ liệu tải về không phải là 1 mảng");
        
        return data;
}

export async function loadData() {
    const existed = docTuMay();
    if(existed !== null) return existed;

    const sampleData = await downloadData();
    luuVaoMay(sampleData);;
    return sampleData;
}

export async function restoreData() {
    localStorage.removeItem(KEY);
    const sampleData = await downloadData();
    luuVaoMay(sampleData);
    return sampleData;
}