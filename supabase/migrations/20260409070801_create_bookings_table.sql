/*
  # Create bookings table for The Vizag Hair Company

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text) - Customer full name
      - `phone` (text) - Customer phone number
      - `service` (text) - Selected service
      - `preferred_time` (text) - Preferred appointment time
      - `message` (text) - Optional message from customer
      - `status` (text) - Booking status: pending, confirmed, completed
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `bookings` table
    - Allow anyone to insert a booking (public form)
    - Only authenticated users (admin) can read all bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL DEFAULT '',
  preferred_time text NOT NULL DEFAULT '',
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);
