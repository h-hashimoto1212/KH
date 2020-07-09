class LiveForm
  include ActiveModel::Model
  # include ActiveModel::Attributes

  # attribute :title, :string
  # attribute :title_link, :string
  # attribute :description, :string

  # attribute :date, :datetime
  # attribute :open_time, :datetime
  # attribute :start_time, :datetime
  # attribute :ex_description, :string
  # attribute :place, :string
  # attribute :place_link, :string

  # attribute :image, :string

  # attr_accessor :live, :detail

  attr_accessor(
    :live, :title, :title_link, :description, :id,
    :details, :date, :open_time, :start_time, :ex_description, :place, :place_link,
    :images, :image
  )
  #               :date, :open_time, :start_time, :ex_description, :place, :place_link,
  #               :image

  validates :title, presence: true

  def initialize(attr = {})
    super
    unless live.nil?
      @title ||= live.title
      @title_link ||= live.title_link
      @description ||= live.description
    end
    @details ||= details
    @images ||= images


  end

  def details_attributes=(details_params)
    @details ||= []
    details_params.each do |_key,detail_params|
      @details.push(LiveForm.new(detail_params))
    end
  end

  def images_attributes=(images_params)
    @images ||= []
    images_params.each do |_key,image_params|
      @images.push(LiveForm.new(image_params))
    end
  end

  def save
    if valid?
      persist
      true
    else
      false
    end
  end

  private

  def persist
    ActiveRecord::Base.transaction do
      @live.update!({
        title: title, title_link: title_link, description: description,
        details_attributes: build_details_attributes,
        images_attributes: build_images_attributes
      })
    end

  end

  def build_details_attributes
    details.map do |detail|
      detail.as_json
    end
  end

  def build_images_attributes
    unless images.nil?
      images.map do |image|
        image.as_json
      end
    end
  end

end