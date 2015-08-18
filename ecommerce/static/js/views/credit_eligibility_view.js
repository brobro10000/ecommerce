define([
        'jquery',
        'underscore',
        'backbone',
        'moment'
    ],
    function ($,
              _,
              Backbone,
              moment) {
        'use strict';

        return Backbone.View.extend({

            initialize: function () {
                this.listenTo(this.collection, 'sync', this.render);
                this.collection.fetch();
            },

            render: function () {
                var deadline;

                if (this.collection.length) {
                    deadline = moment.utc(this.collection.at(0).get('deadline'));
                    $('.eligibility-details').find('.deadline-date').text(deadline.format('LL'));
                    this.toggleProviderContent(true);
                } else {
                    this.toggleProviderContent(false);
                }
            },

            toggleProviderContent: function (isEnabled) {
                // On request failure hide provider panel and show error message.
                $('.provider-panel').toggleClass('hide', !isEnabled);
                $('.error-message').toggleClass('hide', isEnabled);
            }
        });
    }
);
