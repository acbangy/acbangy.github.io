function getLastModified() {
    return document.lastModified;
}
document.addEventListener('DOMContentLoaded', () => {
    const lastUpdatedDataSpan = document.getElementById('lastUpdatedData')
    lastUpdatedDataSpan.innerHTML = getLastModified();
});