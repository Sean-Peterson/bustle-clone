import DS from 'ember-data';

export default DS.Model.extend({
  img: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  time: DS.attr()
});
