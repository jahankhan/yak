// # App.room = App.cable.subscriptions.create "RoomChannel",
// #   connected: ->
// #     # Called when the subscription is ready for use on the server
// #
// #   disconnected: ->
// #     # Called when the subscription has been terminated by the server
// #
// #   received: (data) ->
// #     console.log data.message.body
// #     alert data.message.body
// #     # Called when there's incoming data on the websocket for this channel
// #
// #   speak: (message) ->
// #     # @perform 'speak', message: message

// App.room = App.cable.subscriptions.create("RoomChannel", {
//     connected: function() {},
//     disconnected: function() {},
//     received: function(data) {
//       return this.props.receiveMessage(data['message']);
//     },
//     speak: function(message) {
//       return this.perform('speak', {
//         message: message
//       });
//     }
// });
