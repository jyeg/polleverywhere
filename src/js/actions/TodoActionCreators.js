import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.IMAGES_FOUND,
      text: text
    });
  },

	fetchImages(text){
		let self = this;
		let destination =  'https://www.flickr.com/services/api/flickr.photos.search.html';
		// api call and update store using a dispatcher action.
		fetch(destination)
			.then(response => response.json())
			.then(data => {
				this.setImages(data);
			})
			.catch(e => console.log("Error", e));
	}


};
