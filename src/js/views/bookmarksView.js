import View from './View.js';
import PreviewView from './PreviewView.js';
import icons from 'url:../../img/icons.svg';

class bookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMsg = `No bookmarks yet. Find a nice recipe and bookmark it`;
  _msg = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(bookmark => PreviewView.render(bookmark, false))
      .join('');
  }
}

export default new bookmarksView();
