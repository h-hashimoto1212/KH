class LivesController < ApplicationController
  before_action :set_tomorrow, only: [:index]
  before_action :set_image_count, only: [:edit, :new]
  before_action :basic_auth if Rails.env.production?

  def index
    @lives = Live.eager_load(:details).order("details.date DESC")
  end

  def show
    
  end

  def new
    @live = Live.new
    @live.details.build
    @image_count.times {@live.images.build}
  end

  def create
    @live = Live.new(live_params)
    if @live.save
      flash[:success] = "投稿が保存されました【#{params[:title]}】"
      redirect_to action: 'index'
    else
      flash.now[:alert] = '保存に失敗しました'
      @live = Live.new(live_params)
      render :new
    end
  end

  def edit
    @live = Live.find(params[:id])
    i_count = @live.images.count
    (@image_count - i_count).times {@live.images.build}
  end

  def update
    @live = Live.find(params[:id])
    if @live.update(update_live_params)
      flash[:success] = "投稿が更新されました【#{params[:title]}】"
      redirect_to action: 'index'
    else
      flash.now[:alert] = '保存に失敗しました'
      @live = Live.find(update_live_params)
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
        [details_attributes:[:date, :open_time, :start_time, :ex_description, :place, :place_link]],
        [images_attributes:[:file]]
      )
    end

    def update_live_params
      params.require(:live).permit(
        :title, :title_link, :description,
        details_attributes:[:date, :open_time, :start_time, :ex_description, :place, :place_link, :_destroy, :id],
        images_attributes:[:file, :_destroy, :id]
      )
    end

    def basic_auth
      authenticate_or_request_with_http_basic do |username, password|
        username == ENV["BASIC_AUTH_USER"] && password == ENV["BASIC_AUTH_PASSWORD"]
      end
    end

    def set_image_count
      @image_count = 2
    end

    def set_tomorrow
      require "date"
      t = Date.today + 1
      @tomorrow = t.to_time
    end
end
