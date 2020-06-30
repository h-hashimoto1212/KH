class HomeController < ApplicationController
  def main
    @y2020_lives = Live.where("YEAR(date) = 2020").order(date: 'DESC');
  end
end
