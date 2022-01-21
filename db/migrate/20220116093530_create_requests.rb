class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.string :description
      t.integer :sort
      t.string :location
      t.boolean :fulfillment

      t.timestamps
    end
  end
end
