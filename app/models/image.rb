class Image < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :live, optional: true
end
