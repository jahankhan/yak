# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Channel.destroy_all
ChannelUser.destroy_all
Message.destroy_all
u1 = User.create!(username: 'guest', password: 'starwars', email: 'test123@gmail.com')
u2 = User.create!(username: 'fresh prince', password: 'starwars', avatar: URI.parse('https://s3.us-east-2.amazonaws.com/jahankhan-yak-pro/users/avatars/000/000/001/original/willsmith.jpg'), email: 'fp@gmail.com' )
u3 = User.create!(username: 'mom', password: 'starwars', avatar: URI.parse('https://s3.us-east-2.amazonaws.com/jahankhan-yak-pro/users/avatars/000/000/001/original/willmom.jpg'), email: 'mom@gmail.com' )
u4 = User.create!(username: 'carlton', password: 'starwars', avatar: URI.parse('https://s3.us-east-2.amazonaws.com/jahankhan-yak-pro/users/avatars/000/000/001/original/carlton.png'), email: 'carlton@gmail.com' )
u5 = User.create!(username: 'Uncle Phil', password: 'starwars', avatar: URI.parse('https://s3.us-east-2.amazonaws.com/jahankhan-yak-pro/users/avatars/000/000/001/original/unclephil.jpg'), email: 'phil@gmail.com' )
c1 = Channel.create!(title: 'uncle phils house', dm: false)
c2 = Channel.create!(title: 'mom chat', dm: false)
c3 = Channel.create!(title: 'carlton', dm: true)

ChannelUser.create!(user_id: u2.id, channel_id: c1.id)
ChannelUser.create!(user_id: u1.id, channel_id: c1.id)
ChannelUser.create!(user_id: u4.id, channel_id: c1.id)
ChannelUser.create!(user_id: u5.id, channel_id: c1.id)

ChannelUser.create!(user_id: u3.id, channel_id: c2.id)
ChannelUser.create!(user_id: u2.id, channel_id: c2.id)

ChannelUser.create!(user_id: u2.id, channel_id: c3.id)
ChannelUser.create!(user_id: u4.id, channel_id: c3.id)
ChannelUser.create!(user_id: u1.id, channel_id: c3.id)

Message.create!(body:'Now this is a story all about how
My life got flipped turned upside down', author_id: u2.id, channel_id: c2.id, dm: false)
Message.create!(body:'And I\'d like to take a minute, just sit right there
I\'ll tell you how I became the prince of a town called Bel-Air', author_id: u2.id, channel_id: c2.id, dm: false)
Message.create!(body:'In West Philadelphia, born and raised
On the playground is where I spent most of my days', author_id: u2.id, channel_id: c2.id, dm: false)
Message.create!(body:'Chillin\' out, maxin\', relaxin\' all cool
', author_id: u2.id, channel_id: c2.id, dm: false)
Message.create!(body:'When a couple of guys who were up to no good
Started makin\' trouble in my neighborhood', author_id: u2.id, channel_id: c2.id, dm: false)
Message.create!(body:'I got in one little fight and my mom got scared
And said ', author_id: u2.id, channel_id: c2.id, dm: false)
Message.create!(body:'You\'re movin\' with your auntie and uncle in Bel-Air
', author_id: u3.id, channel_id: c2.id, dm: false)
Message.create!(body:'I begged and pleaded with her day after day
But she packed my suitcase and sent me on my way
She gave me a kiss and then she gave me my ticket', author_id: u2.id, channel_id: c2.id, dm: false)

Message.create!(body: 'WWIIIIIIIILLLLLLLLLLLLLLLLL', author_id: u5.id, channel_id: c1.id, dm: false)

Message.create!(body: 'a', author_id: u4.id, channel_id: c3.id)
