class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :authorName
      t.text :content
      t.references :grumble, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
