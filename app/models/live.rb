class Live < ApplicationRecord
  has_many :images, dependent: :destroy
  has_many :details, dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true, reject_if: proc { |attributes| attributes['file'].blank? }
  accepts_nested_attributes_for :details, allow_destroy: true
end
