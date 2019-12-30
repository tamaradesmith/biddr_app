class CreateAuctions < ActiveRecord::Migration[6.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.float :reserve
      t.date :closing

      t.timestamps
    end
  end
end
