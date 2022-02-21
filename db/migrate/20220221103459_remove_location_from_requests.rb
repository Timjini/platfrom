class RemoveLocationFromRequests < ActiveRecord::Migration[6.1]
  def change
    remove_column :requests, :location, :string
    remove_column :requests, :City, :string
    remove_column :requests, :Country, :string
  end
end
