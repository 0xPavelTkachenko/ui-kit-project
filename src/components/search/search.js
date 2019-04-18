class Search {
  constructor(root, id) {
    this._$root = $(root);
    this._id = id;

    setInterval(this._watchFailedState.bind(this), 100);
  }

  toString() {
    return `{"class": "Search", "id": "${this._id}"}`;
  }

  _watchFailedState() {
    const $search = this._$root;
    const $input = $search.find('.search__input');
    const placeholder = $input.attr('data-placeholder') || '';
    const notFoundMessage = $input.attr('data-not-found-message') || '';

    if ($search.hasClass('search_failed')) {
      $input.attr('placeholder', notFoundMessage);
    } else {
      $input.attr('placeholder', placeholder);
    }
  }
}

const $searches = $('.js-search');

$searches.each(function createSearch(id) {
  new Search(this, id);
});

export default Search;
