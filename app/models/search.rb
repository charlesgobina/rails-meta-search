class Search < ApplicationRecord
  validates :term, presence: true, uniqueness: true
end
