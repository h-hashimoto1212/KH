class Live < ApplicationRecord
  has_many :images, dependent: :destroy
  has_many :details, dependent: :destroy
end
