class CreateGrumbles < ActiveRecord::Migration
  def change
    create_table :grumbles do |t|
      t.string :authorName
      t.text :content
      t.string :title
      t.text :photoUrl

      t.timestamps null: false
    end
  end
end
