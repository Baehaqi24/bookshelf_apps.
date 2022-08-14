document.addEventListener("DOMContentLoaded", function() {
    const doneBook = document.getElementById("inputBook");

    doneBook.addEventListener("submit", function(event) {
        event.preventDefault();
        addBook();
    });

    const searchBook = document.getElementById("searchBook");

    searchBook.addEventListener("submit", function(event) {
        event.preventDefault();
        searchBook();
    });

    if(isStorageExits()) {
        loadDatFromStorage();
    }
});

document.addEventListener("ondatasaved", () => {
    console.log("data berhasil disimpan");
});
document.addEventListener("ondataloaded", () => {
    refreshDataFromBook();
});

function changeText() {
    const checkBook = document.getElementById("inputBookIsComplete");
    const textDone = document.getElementById("textSubmit");

    if(checkBook.checked == true) {
        textDone.innerText = "Sudah Dibaca";
    } else {
        textDone.innerText = "belum Dibaca";
    }
};