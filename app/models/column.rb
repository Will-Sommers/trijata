class Column < ActiveRecord::Base
  belongs_to :game
  belongs_to :category
end
