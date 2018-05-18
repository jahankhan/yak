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
u2 = User.create!(username: 'fresh prince', password: 'starwars', email: 'fp@gmail.com' )
u3 = User.create!(username: 'mom', password: 'starwars', email: 'mom@gmail.com' )
u4 = User.create!(username: 'carlton', password: 'starwars', email: 'carlton@gmail.com' )
c1 = Channel.create!(title: 'uncle phils house', dm: false)
c2 = Channel.create!(title: 'mom chat', dm: false)
c3 = Channel.create!(title: 'carlton', dm: true)

ChannelUser.create!(user_id: u2.id, channel_id: c1.id)
ChannelUser.create!(user_id: u1.id, channel_id: c1.id)
ChannelUser.create!(user_id: u4.id, channel_id: c1.id)

ChannelUser.create!(user_id: u3.id, channel_id: c2.id)
ChannelUser.create!(user_id: u2.id, channel_id: c2.id)

ChannelUser.create!(user_id: u2.id, channel_id: c3.id)
ChannelUser.create!(user_id: u4.id, channel_id: c3.id)
