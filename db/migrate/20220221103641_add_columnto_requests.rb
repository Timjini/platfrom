class AddColumntoRequests < ActiveRecord::Migration[6.1]
  def change
    add_column :requests ,  :city, :string
    add_column :requests, :country, :string
    
  end
end
