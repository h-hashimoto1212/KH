class LivesController < ApplicationController
  before_action :set_tomorrow, only: [:index]

  def index
    @lives = Live.eager_load(:details).order("details.date DESC")
    # @past_lives = @lives.where("details.date < ?", @tomorrow).order("details.date DESC")
    # @future_lives = @lives.where("details.date > ?", @tomorrow).order("details.date")
  end

  def show
    
  end

  def new
    @live = Live.new
    @live.details.build
    @live.images.build
  end

  def create
    @live = Live.new(live_params)
    if @live.save
      redirect_to action: 'index'
    else
      flash.now[:alert] = 'unable to save'
      render :new
    end
  end

  def edit
    @live = Live.find(params[:id])
    if @live.images.nil?
      @live.images.build
    end
  end

  def update
    @live = Live.find(params[:id])
    if @live_form.update(update_live_params)
      redirect_to action: 'index'
    else
      flash.now[:alert] = 'unable to save'
      render :edit
    end
  end

  def destroy
    @live = Live.find(params[:id])
    @live.destroy
    redirect_to action: 'index'
  end

  private
    def live_params
      params.require(:live).permit(
        :title, :title_link, :description,
        details_attributes:[:date, :open_time, :start_time, :ex_description, :place, :place_link],
        images_attributes:[:file]
      )
    end

    def update_live_params
      params.require(:live).permit(
        :title, :title_link, :description,
        details_attributes:[:date, :open_time, :start_time, :ex_description, :place, :place_link, :id, :_destroy],
        images_attributes:[:file, :id, :_destroy]
      )
    end

    def set_tomorrow
      require "date"
      t = Date.today + 1
      @tomorrow = t.to_time
    end
end
