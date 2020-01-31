export class PersistanceService {
    setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    getItem(key) {
        const value = sessionStorage.getItem(key);
        if (!value)
            return null;
        return JSON.parse(value);
    }
    clear() {
        sessionStorage.clear();
    }
}
