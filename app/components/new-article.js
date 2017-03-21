import Ember from 'ember';
import moment from 'moment';
var postTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle1() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        img: this.get('img'),
        time: postTime
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);
    }
  }
});
