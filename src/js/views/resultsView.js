import View from './View.js';
import PreviewView from './PreviewView.js';
import icons from 'url:../../img/icons.svg';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMsg = `No recipes found for your query. Please try again!`;
  _msg = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => PreviewView.render(result, false)).join('');
  }
}

export default new resultsView();
