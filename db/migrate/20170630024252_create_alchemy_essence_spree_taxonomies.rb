class CreateAlchemyEssenceSpreeTaxonomies < ActiveRecord::Migration[5.0]
  def change
    create_table :alchemy_essence_spree_taxonomies do |t|
      t.references :taxonomy

      t.timestamps
    end
  end
end
