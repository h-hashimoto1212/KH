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

  attr_accessor :title, :title_link, :description, :id,
                :date, :open_time, :start_time, :ex_description, :place, :place_link,
                :image

  validates :title, presence: true

  def initialize(params = {})
    if params[:id].present?
      @live = Live.find(params[:id])
      @detail = @live.details.first
      @imager = @live.images.first
      self.attributes = @live.attributes.except("id", "created_at", "updated_at")
      self.attributes = @detail.attributes.except("id", "live_id", "created_at", "updated_at")
      @open_time = @detail.open_time.strftime("%k:%M") if @detail.open_time.present?
      @start_time = @detail.start_time.strftime("%k:%M") if @detail.start_time.present?
      if @imager.present?
        @image = @imager.image
      end
      self.attributes = params.to_hash
    else
      super(params)
    end
    # @live = live
    # @detail = detail
    # @image = image
    # super(attr)
  end

  # def persisted?
  #   @live.nil? ? false : @live.persisted?
  # end

  def save
    if valid?
      persist
      true
    else
      false
    end
  end

  def update
    if valid?
      update_form
      true
    else
      false
    end
  end

  private

  def persist
    live = Live.create(title: title, title_link: title_link, description: description)
    live.details.create(date: date, open_time: open_time, start_time: start_time, ex_description: ex_description, place: place, place_link: place_link)
    if image.present?
      live.images.create(image: image)
    end
  end

  def update_form
    @live.update_attributes(title: title, title_link: title_link, description: description)
    @detail.update_attributes(date: date, open_time: open_time, start_time: start_time, ex_description: ex_description, place: place, place_link: place_link)
    if image.present?
      if @imager.present?
        @imager.update_attributes(image: image)
      else
        @live.images.create(image: image)
      end
    end
  end

end