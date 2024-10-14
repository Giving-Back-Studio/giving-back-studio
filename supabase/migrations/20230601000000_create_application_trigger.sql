-- Enable the pg_net extension
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create the function that will be called by the trigger
CREATE OR REPLACE FUNCTION notify_new_application()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    net.http_post(
      url := 'https://gloncsxhljyhytajtjiw.functions.supabase.co/notifyNewApplication',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer ' || current_setting('app.settings.service_role_key') || '"}',
      body := json_build_object('record', row_to_json(NEW))::text
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
CREATE TRIGGER notify_new_application_trigger
AFTER INSERT ON applications
FOR EACH ROW
EXECUTE FUNCTION notify_new_application();