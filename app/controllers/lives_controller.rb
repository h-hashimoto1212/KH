class LivesController < ApplicationController

  def index
    @y2020_lives = Live.where("YEAR(date) = 2020");
  end

  def new
    @live = Live.new(params[:live]);
  end

  def create
    @live = Live.new(live_params);

    @live.save
    redirect_to action: 'main', controller: 'home'
  end

  private
    def live_params
      params.require(:live).permit(:date, :open, :start, :title, :description, :link, :image)
    end
end
