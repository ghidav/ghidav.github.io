function filterByTag(tag) {
    const input = document.getElementById('searchInput');
    input.value = tag;
    const event = new Event('keyup');
    input.dispatchEvent(event); // Manually dispatch the event
}

document.getElementById('searchInput').addEventListener('keyup', function() {
    let input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('reviewsTable');
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td');
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                    break;
                } else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }
});

document.getElementById('clearSearch').addEventListener('click', function() {
    const input = document.getElementById('searchInput');
    input.value = ''; // Clear the input
    const event = new Event('keyup');
    input.dispatchEvent(event); // Manually dispatch the event
});