module Alchemy
  class EssenceSpreeTaxonomy < ApplicationRecord
    belongs_to :taxonomy, class_name: Spree::Taxonomy, foreign_key: :taxonomy_id
    delegate :name, to: :taxonomy, allow_nil: true

    acts_as_essence(
      ingredient_column: :taxonomy_id,
      preview_text_column: :name
    )

    def ingredient
      taxonomy
    end
  end
end
