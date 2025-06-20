let bookmarks = [];

function addBookmark() {
    let name = document.getElementById('siteName').value;
    let url = document.getElementById('siteURL').value;

    if (name === '' || url === '') {
        alert('Please fill all fields!');
        return;
    }

    let bookmark = { name, url };
    bookmarks.push(bookmark);
    displayBookmarks();
    clearForm();
}

function displayBookmarks() {
    let list = '';
    for (let i = 0; i < bookmarks.length; i++) {
        list += `
            <tr>
                <td>${i + 1}</td>
                <td>${bookmarks[i].name}</td>
                <td><a href="${bookmarks[i].url}" target="_blank">Visit</a></td>
                <td><button onclick="deleteBookmark(${i})">Delete</button></td>
            </tr>
        `;
    }
    document.getElementById('bookmarksList').innerHTML = list;
}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    displayBookmarks();
}

function clearForm() {
    document.getElementById('siteName').value = '';
    document.getElementById('siteURL').value = '';
}
