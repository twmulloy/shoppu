class CreateAlchemyEssenceSpreeTaxons < ActiveRecord::Migration[5.0]
  def change
    create_table :alchemy_essence_spree_taxons do |t|
      t.references :taxon

      t.timestamps
    end
  end
end
