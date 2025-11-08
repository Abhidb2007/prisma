-- AlterTable
-- This migration adds the city column. Since it may already exist in some databases,
-- we use IF NOT EXISTS pattern for safety.
DO \$\$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'User' AND column_name = 'city'
    ) THEN
        ALTER TABLE "User" ADD COLUMN "city" TEXT;
    END IF;
END \$\$;
