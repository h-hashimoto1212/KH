class HomeController < ApplicationController
  before_action :set_tomorrow

  def main
    # @y2020_lives = Live.where("YEAR(date) = 2020").order(date: 'DESC');
    @lives = Live.eager_load(:details)
    @past_lives = @lives.where("details.date < ?", @tomorrow).order("details.date DESC")
    @future_lives = @lives.where("details.date > ?", @tomorrow).order("details.date")
  end

  def set_tomorrow
    require "date"
    t = Date.today + 1
    @tomorrow = t.to_time
  end
end
