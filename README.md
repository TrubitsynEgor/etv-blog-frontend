## TODO:

1. Refactor Form component: **_DONE_**
   I need do 2 components (widgets) LoginForm and RegisterForm.
   Transport all logic in model dir these widgets or realize all logic in the features dir,
   need to think it over, how will be better in terms of FSD pattern
   Expectation:

   - Completely clean Form component
   - All logic in the Features dir (Auth)
   - And all this combines LoginForm and RegisterForm widgets (all info will be sent via props)

2. Implement work with posts **_DONE_**

   - Create **DONE**
   - Edit **DONE**
   - Delete **DONE**
   - Get all posts **DONE**
   - Get post by ID **DONE**
     API ready for this, I need create Features dir(Posts) and realize all logic.
     Create all Entities with PostCard(for list) and PostDetails(for current post)
     All data will be sent via props Posts Widgets
     Also in the Features I need implement buttons panel with edit and delete btn

3. Add filter [New(createdAt) / Popular(viewsCount) / Tags(filter posts with this tags)]
