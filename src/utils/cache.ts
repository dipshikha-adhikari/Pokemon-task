/* eslint-disable  @typescript-eslint/no-explicit-any */
export function setCache(key: string, data: any) {
    const expiryTime = 3600 * 1000 // 1 hour in milliseconds
    const record = {
        data,
        timestamp: new Date().getTime() + expiryTime,
    }
    localStorage.setItem(key, JSON.stringify(record))
}

export function getCache(key: string) {
    const record = localStorage.getItem(key)
    if (!record) {
        return null
    }
    const parsedRecord = JSON.parse(record)
    if (new Date().getTime() > parsedRecord.timestamp) {
        localStorage.removeItem(key)
        return null
    }
    return parsedRecord.data
}
