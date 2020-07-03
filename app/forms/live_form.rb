class LiveForm
  include ActiveModel::Model

  attr_accessor :title, :title_link, :description,
                :date, :open_time, :start_time, :ex_description, :place, :place_link,
                :image

  def save
    return false if invalid?

    live = Live.new(title: title, title_link: title_link, description: description)
    live.details.new(date: date, open_time: open_time, start_time: start_time, ex_description: ex_description, place: place, place_link: place_link)
    live.images.new(image: image)

    live.save
  end
end