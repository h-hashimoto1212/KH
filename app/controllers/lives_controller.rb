class LivesController < ApplicationController

  def index
    @y2020_lives = Live.where("YEAR(date) = 2020")
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
end
