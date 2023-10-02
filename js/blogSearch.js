function filterByTag(tag) {
    const input = document.getElementById('searchBlog');
    input.value = tag;
    const evt = new Event('keyup');
    input.dispatchEvent(evt); 
}

function sortCardsByDataId(a, b) {
    return parseInt(a.getAttribute('data-id')) - parseInt(b.getAttribute('data-id'));
}

function filterBlogByTitle() {
    let input, filter, cards, cardContainer, title, tags, i;
    input = document.getElementById('searchBlog');
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById('blogpostCards');
    let hiddenContainer = document.getElementById('hiddenBlogpostContainer');

    let cardsInMain = Array.from(cardContainer.getElementsByClassName('col-md-4 mb-4')); 
    let cardsInHidden = Array.from(hiddenContainer.getElementsByClassName('col-md-4 mb-4'));
    cards = cardsInMain.concat(cardsInHidden);

    // Loop through all cards
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body .card-title");
        tags = cards[i].querySelector(".card-body .tags");
        if (title.innerText.toUpperCase().indexOf(filter) > -1 || tags.innerText.toUpperCase().indexOf(filter) > -1) {
            // if matches, ensure it's in the main container
            cardContainer.appendChild(cards[i]);
        } else {
            // if doesn't match, move to hidden container
            hiddenContainer.appendChild(cards[i]);
        }
    }

    let allCards = Array.from(cardContainer.getElementsByClassName('col-md-4 mb-4'));
    allCards.sort(sortCardsByDataId);

    for (i = 0; i < allCards.length; i++) {
        cardContainer.appendChild(allCards[i]);
    }
}

function restoreBlogposts() {
    let hiddenContainer, mainContainer, hiddenCards;
    hiddenContainer = document.getElementById('hiddenBlogpostContainer');
    mainContainer = document.getElementById('blogpostCards');
    hiddenCards = Array.from(hiddenContainer.getElementsByClassName('col-md-4 mb-4'));

    hiddenCards.forEach(card => {
        card.style.display = ""; // Reset any inline display styles
        mainContainer.appendChild(card);
    });
}

document.getElementById('searchBlog').addEventListener('keyup', function () {
    filterBlogByTitle(); // To re-render visible/hidden cards accordingly
});

document.getElementById('clearSearch').addEventListener('click', function() {
    document.getElementById('searchBlog').value = ''; // Clear the input
    restoreBlogposts(); // Call the restore function
    filterBlogByTitle(); // To re-render visible/hidden cards accordingly
});
