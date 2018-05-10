# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Channel.destroy_all
User.create!(username: 'test', password: 'starwars', avatar_url: 'google.com', email: 'test123@gmail.com')
Channel.create!(title: 'testchannel')
Channel.create!(title: 'testchannel2')
