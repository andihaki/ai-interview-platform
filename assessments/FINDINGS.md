## P0 - API and Web - Signup page unavailable

Signup page is available under /web/src/pages/auth/SignupPage. Need to:

1. Add `/signup` into App.tsx
2. Implement backend

## P3 - API - Create new admin and user on seed process

**Issue:** at seeds.rb mentioning "After seeding, use the Rails console to mint a JWT for testing:" but there's no insert or User.create.

**Solutions:**
I prefer option 1:

1. Insert both users on seed process, or
2. At very bottom of `seeds.rb` add comment to peform manual insert using console: `User.create!(email: 'admin@example.com', password: '****', role: 'admin')`
