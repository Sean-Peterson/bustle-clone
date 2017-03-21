import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        img: this.get('img'),
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
