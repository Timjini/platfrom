class AddLocationtoRequest < ActiveRecord::Migration[6.1]
  def change
    add_column  :requests, :longitude, :float
    add_column :requests, :latitude, :float
    add_column :requests, :City , :string
    add_column :requests, :Country, :string
    add_column :requests, :address, :string
  end
end
