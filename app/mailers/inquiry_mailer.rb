class InquiryMailer < ApplicationMailer
  def send_mail(inquiry)
    @inquiry = inquiry
    mail(
      from: 'system@example.com',
      to:   Rails.application.credentials.mailform[:email_address],
      subject: 'お問い合わせ通知'
    )
  end
end
