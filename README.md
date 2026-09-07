# First Name Last Name — Living Portfolio

A responsive personal portfolio designed to work on desktop, tablet, and mobile.

## Project structure

- `index.html` — Home / landing page
- `interests.html` — Professional and technology interests
- `hobbies.html` — Personal projects and hobbies
- `travel.html` — Travel journal with collapsible regions
- `cooking.html` — Cooking journey and recipe/project entries
- `css/styles.css` — All visual styling and responsive behavior
- `js/site.js` — Mobile navigation and small site-wide behavior
- `images/` — Place your future images here
- `data/` — Reserved for future structured content if you want to move repeated content out of HTML

## First edits to make

1. Search the project for `First Name Last Name` and replace it with your name.
2. Replace `#` in the LinkedIn link in `index.html` with your real LinkedIn URL.
3. Replace the profile photo placeholder when you have your image.
4. Replace Lorem Ipsum with your real professional introduction.
5. Add your hobbies/projects.
6. Add destinations to `travel.html`.
7. Add dishes to `cooking.html`.

## Adding real images

The placeholder boxes are intentionally easy to replace.

For example, replace:

```html
<div class="placeholder-image travel-image">
  <span>Travel Photo</span>
</div>
```

with:

```html
<img class="travel-image" src="images/travel/my-trip.jpg" alt="Description of the place">
```

Keep meaningful `alt` text for accessibility.

## Travel organization

Travel uses HTML `<details>` sections, which provide native collapsible behavior.

Duplicate a `.travel-group` to create another state or country.

Duplicate a `.travel-entry` to create another destination.

Add `reverse` to alternating entries:

```html
<div class="travel-entry reverse">
```

On phones, CSS automatically removes the stagger and stacks the image and story vertically.

## Cooking entries

Duplicate `.recipe-card` whenever you add another dish.

The suggested structure is:

- Dish name
- Why you wanted to make it
- Failed attempts
- Ingredients
- Photos
- Future notes / improvements

## GitHub + Cloudflare Pages

Recommended workflow:

1. Create a GitHub repository.
2. Put these files in the repository.
3. In Cloudflare Pages, connect the GitHub repository.
4. For this static site, no build command is required.
5. Set the output/root directory to the repository root.
6. Connect your personal domain through Cloudflare.
7. Every push to the selected branch can trigger a new deployment.

Because this is a plain HTML/CSS/JavaScript site, it does not depend on a framework or build system.

## Future upgrade path

The site is deliberately simple now. If it grows significantly, content can later be moved into JSON/Markdown or a CMS without redesigning the front end.

The `data/` directory is reserved for this purpose.
