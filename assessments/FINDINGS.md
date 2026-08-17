## P0 - API - skill_id is empty when adding assignment and vacancy

**Issue:** at assessment_skill.rb `skill_id` is not populated.

**Solutions:**
add `before_validation` to populate `skill_id` from `skill_taxonomy.skill_label`

## P0 - API and Web - fail removing skill to assess at assessments and vacancies page

**Issue:** when admin edit assessment by removing existing skill and adding new skill. then current assessment has two skill two assess, expecting old / existing skill removed.

**Solutions:**
I prefer option 1, because decentralize the lookup load into client side:

1. mark existing skill as delete, along with new skill
2. lookup into table, if skill sent by client isn't available then insert, if available at db only then delete it

## P0 - API and Web - after interview session candidate_id is missing

**Issue:** candidate open assessment interview invitation but after session end candidate_id isn't recorded in table sessions. Neither Manual End by Candidate or Finish interview session candidate_id still null.

**Solutions:**
web sent token using websocket message and decode at api side

## P3 - Web - assessment and vacancy duplicate logic

**Issue:** assessment and vacancy duplicate logic between new and edit page

**Solutions:**
add reusable hooks useAssessment and useVacancy

## P3 - Web - assessment edit and vacancy new edit

**Issue:** Save Changes without Role title not showing error message

**Solutions:**
`register('name'` add show `error.name` message

## P3 - API - Create new admin and user on seed process

**Issue:** at seeds.rb mentioning "After seeding, use the Rails console to mint a JWT for testing:" but there's no insert or User.create.

**Solutions:**
I prefer option 1:

1. Insert both users on seed process, or
2. At very bottom of `seeds.rb` add comment to peform manual insert using console: `User.create!(email: 'admin@example.com', password: '****', role: 'admin')`

## P0 - API and Web - Signup page unavailable

Signup page is available under /web/src/pages/auth/SignupPage. Need to:

1. Add `/signup` into App.tsx
2. Implement backend

# TODO

## P3 - Web - Edit and Add shared component

**Issue:** Edit add Add has idential UI but have two separate component

**Solutions:**
Combine into AddEdit component, and separate the logic by adding either `isEdit` or `isAdd`
