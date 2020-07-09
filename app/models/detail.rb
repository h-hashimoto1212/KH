class Detail < ApplicationRecord
  belongs_to :live
  
  before_validation on: [:create, :update] do
    self.date = "9999-12-31" unless self.date
  end

  after_find do
    if self.date.to_s == "9999-12-31"
      self.date = nil
    end
  end

end
