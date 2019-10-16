# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Auction.destroy_all
Bid.destroy_all
User.destroy_all


NUM_Auction = 30
NUM_USERS = 15

PASSWORD = "hudson"

admin = User.create(
    first_name: "Aurora",
    last_name: "Smith",
    email: "aurora@aurora.com",
    password: PASSWORD
)

NUM_USERS.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
        User.create(
            first_name: first_name,
            last_name: last_name,
            email: "#{first_name}.#{last_name}@example.com",
            password: PASSWORD
          )
        end
        

users = User.all

NUM_Auction.times do
   created_at = Faker::Date.backward(days: 30)
   closing = Faker::Date.forward(days: 30)
   a= Auction.create(
     title: Faker::Cannabis.strain,
     description: Faker::Cannabis.health_benefit,
     reserve: rand(500.00),
     closing: closing,
     created_at: created_at,
     updated_at: created_at,
     user: users.sample
   )
   if a.valid?
    a.bids = rand(0..5).times.map do
      Bid.new(
        bid:  rand(10..5000),
        user: users.sample
      )
    end
  end
end

  puts "password: #{PASSWORD}"
  puts "admin user = #{admin.email}"