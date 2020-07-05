class LivesController < ApplicationController
  before_action :set_tomorrow

  def index
    @lives = Live.eager_load(:details).order("details.date DESC")
    # @past_lives = @lives.where("details.date < ?", @tomorrow).order("details.date DESC")
    # @future_lives = @lives.where("details.date > ?", @tomorrow).order("details.date")
  end

  def show
    
  end

  def new
    @live_form = LiveForm.new
  end

  def create
    @live_form = LiveForm.new(live_params)

    if @live_form.save
      redirect_to action: 'index'
    else
      flash.now[:alert] = 'unable to save'
      render :new
    end
  end

  def edit
    # @live = Live.find(params[:id])
    @live_form = LiveForm.new(id: params[:id])
  end

  def update
    # @live = Live.find(params[:id])
    @live_form = LiveForm.new(live_params.merge(id: params[:id]))
    if @live_form.update
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
      params.require(:live_form).permit(
        :title, :title_link, :description,
        :date, :open_time, :start_time, :ex_description, :place, :place_link,
        :image
      )
    end

    def set_tomorrow
      require "date"
      t = Date.today + 1
      @tomorrow = t.to_time
    end
end
