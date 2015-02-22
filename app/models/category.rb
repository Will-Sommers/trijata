class Category < ActiveRecord::Base
  has_many :games
  has_many :categories, through: :columns
end
