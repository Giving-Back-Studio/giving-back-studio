CREATE TABLE apply (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    enterprise_name VARCHAR(255) NOT NULL,
    enterprise_purpose TEXT NOT NULL,
    challenge TEXT NOT NULL,
    growth_impact TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on the email column for faster lookups
CREATE INDEX idx_apply_email ON apply(email);

-- Add a constraint to ensure email uniqueness
ALTER TABLE apply ADD CONSTRAINT unique_email UNIQUE (email);