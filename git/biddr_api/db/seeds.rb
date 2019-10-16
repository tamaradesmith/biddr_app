# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Auction.destroy_all


NUM_Auction = 20

NUM_Auction.times do
   created_at = Faker::Date.backward(days: 30)
   closing = Faker::Date.forward(days: 30)
   p= Auction.create(
     title: Faker::Cannabis.strain,
     description: Faker::Cannabis.health_benefit,
     reserve: rand(500.00),
     closing: closing,
     created_at: created_at,
     updated_at: created_at
   )
  end

  puts "seeded"