const $ = (id) => { return document.getElementById(id); };
window.addEventListener('load', () => {
    $("empForm").addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(`ID: ${$("id").value}`)
        console.log(`Name: ${$("name").value}`)
        console.log(`Extension: ${$("ext").value}`)
        console.log(`Email: ${$("email").value}`)
        console.log(`Department: ${$("department").value}`)
    })
});