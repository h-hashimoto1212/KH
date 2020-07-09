class Image < ApplicationRecord
  mount_uploader :file, ImageUploader
  belongs_to :live, optional: true
end
