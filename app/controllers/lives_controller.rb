class LivesController < ApplicationController
  before_action :set_tomorrow

  def index
    @lives = Live.all
    @past_lives = @lives.where("date < ?", @tomorrow).order(date: 'DESC')
    @future_lives = @lives.where("date > ?", @tomorrow).order(:date)
  end

  def new
    @live = Live.new(params[:live])
  end

  def create
    @live = Live.new(live_params)

    if @live.save
      redirect_to action: 'main', controller: 'home'
    else
      flash.now[:alert] = 'unable to save'
      render :new
    end
  end

  def edit
    @live = Live.find(params[:id])
  end

  def update
    @live = Live.find(params[:id])
    if @live.update(live_params)
      redirect_to action: 'main', controller: 'home'
    else
      flash.now[:alert] = 'unable to save'
      render :edit
    end
  end

  def destroy
    @live = Live.find(params[:id])
    @live.destroy
    render :new
  end

  private
    def live_params
      params.require(:live).permit(:date, :open, :start, :title, :description, :link, :image, :remove_image)
    end

    def set_tomorrow
      require "date"
      t = Date.today + 1
      @tomorrow = t.to_time
    end
end
