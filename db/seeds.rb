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
u = User.create!(username: 'test', password: 'starwars', avatar_url: 'google.com', email: 'test123@gmail.com')
u2 = User.create!(username: 'test2', password: 'starwars', avatar_url: 'google.com', email: 'test223@gmail.com' )
c1 = Channel.create!(title: 'testchannel')
c2 = Channel.create!(title: 'testchannel2')
c3 = Channel.create!(title: 'testchannel3')
ChannelUser.create!(user_id: u.id, channel_id: c1.id)
ChannelUser.create!(user_id: u.id, channel_id: c2.id)
Message.create!(body: 'whatup essai', author_id: u.id, channel_id: c1.id, dm: false)
Message.create!(body: 'my name is jeff', author_id: u.id, channel_id: c1.id, dm: true)
Message.create!(body: 'stealing hurts', author_id: u2.id, channel_id: c2.id, dm: false)
