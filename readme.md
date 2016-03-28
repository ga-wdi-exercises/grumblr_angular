# Grumblr Angular

## Releases

Rather than using branches to indicate the different "steps" of creating Grumblr, we're using commits. If you check out [the commits of the solution branch](https://github.com/ga-wdi-exercises/grumblr_angular/commits/solution), you'll see what we mean.

The different steps can be downloaded via [Releases](https://github.com/ga-wdi-exercises/grumblr_angular/releases). These are usually used to *release* different versions of an app, which is why each one has a version number: 1.0.0, 1.0.1, and so on.

The starter code for the first Angular class is version 1.0.0. The solution code for the first class is 1.0.1. The solution code for the third class is 3.0.1.

You can download a release by clicking its `Source code (zip)` link. (If it doesn't expand automatically into a folder, double-click it.) The advantage of this is that each release will be downloaded into its own folder with a name like `grumblr_angular_2.0.1`.

Instead of juggling a bunch of branches in one repo, you'll instead just be able to go from folder to folder.

**Note:** The zip files do *not* include a `.git` folder, like `git clone` gives you. So if you do want to use Git inside one of the folders, you'll need to `$ git init` inside it.

## Angular Homework

To submit, open up pull request against this repository from your forked copy by Thursday 3/31 by 9:00am

### Following UI Router's Class

**Optional**

[Starter Code](https://github.com/ga-wdi-exercises/grumblr_angular/releases/tag/1.0.0)

    $ git checkout -b ui-router 1.0.0

[Solution Code](https://github.com/ga-wdi-exercises/grumblr_angular/releases/tag/1.0.1)

    $ git checkout ui-router-solution

Continue working on your local copy of `grumblr` from in-class. Complete
CRD functionality with hard-coded data. Follow [this section](https://github.com/ga-wdi-lessons/angular-routing#you-do-show-page) in the lesson plan to the end for outlined steps

### Following Factories, Services, and ngResource's Class

Continue working on your local copy of `grumblr`. Implement full CRUD for `grumbles` by replacing hard-coded data with the appropriate API calls utilizing `ngResource`

[Starter Code](https://github.com/ga-wdi-exercises/grumblr_angular/releases/tag/2.0.0)

    $ git checkout -b factory-resource 2.0.0
    
[Solution Code](https://github.com/ga-wdi-exercises/grumblr_angular/releases/tag/2.0.1)

    $ git checkout resource-solution 2.0.1

### Following Custom Directives' Class

Continue working on your local copy of `grumblr`. Replace repeated HTML and functionality with a `grumbleForm` directive. Use one form to handle both creating and updating.

[Starter Code](https://github.com/ga-wdi-exercises/grumblr_angular/releases/tag/3.0.0)

    $ git checkout -b custom-directives 3.0.0

[Solution Code](https://github.com/ga-wdi-exercises/grumblr_angular/releases/tag/3.0.1)

    $ git checkout custom-directives-solution 3.0.1
