CarrierWave.configure do |config|
  config.fog_provider = "fog/google"
  config.fog_credentials = {
    provider:                         'Google',
    google_storage_access_key_id:     Rails.application.credentials.gcp[:gcs_access_key_id],
    google_storage_secret_access_key: Rails.application.credentials.gcp[:gcs_secret_access_key]
  }
  config.fog_directory = Rails.application.credentials.gcp[:gcs_bucket_name]
  config.fog_public = true
end
CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/