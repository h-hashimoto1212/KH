class InquiriesController < ApplicationController
  def create
    @inquiry = Inquiry.new(inquiry_params)
    if @inquiry.save
      InquiryMailer.send_mail(@inquiry).deliver
      flash[:success] = 'お問い合わせを受け付けました'
      redirect_to root_path
    else
      render root_path
      flash[:alert] = 'お問い合わせの送信に失敗しました'
    end
  end

  private

  def inquiry_params
    params.require(:inquiry).permit(:name, :email, :message)
  end
end
