class Game < ActiveRecord::Base

  has_many :columns
  has_many :categories, through: :columns

end
