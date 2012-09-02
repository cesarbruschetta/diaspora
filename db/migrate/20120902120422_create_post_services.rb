class CreatePostServices < ActiveRecord::Migration
  def change
    create_table :post_services do |t|
      t.string :service, :limint => 50
      t.string :uid_post, :limint => 255
      t.text   :text 
      t.datetime :data_creation
      t.integer :user_id
      t.timestamps
    end
    add_index :post_services, :user_id
    
  end
  def self.down
    drop_table :post_services
  end
end
