# Flavor lightbox
![](docs/flavor-lightbox-title.png)
Yet another jQuery lightbox plugin but with taste.

## What is Flavor lightbox?

Flavor lightbox is a simple yet efficient and customizable JQuery plugin to showcase your pictures in a modal lightbox.

## What do I need to make it work?

You need to link jQuery and the flavor lightbox script at the end of your body tag.

```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="js/jquery.flavor.js"></script>
</body>
```

You also need a little stylesheet to display it nicely. Place it in the head of your html file.

```html
<link rel="stylesheet" href="css/flavor-lightbox.css">
```

## How does it work?

You need to specify the source of the full width picture in a `data-flavor-src`.

If you want to create a gallery just enclose your pictures by a parent tag with an attribute `data-flavor="myGalleryName"`

**Example**:

```html
<div data-flavor="myGallery" class="gallery">
  <div data-flavor-src="img/picture01.jpg"><img src="img/picture01_small.jpg" alt="Flavor lightbox tastes great"></div>

  <div data-flavor-src="img/picture02.jpg"><img src="img/picture02_small.jpg" alt="Test left/right arrows to navigate"></div>

  <div class="gallery__item" data-flavor-src="img/picture03.jpg"><img src="img/picture03_small.jpg" alt="You can click to navigate"></div>
  <div class="gallery__item" data-flavor-src="img/picture04.jpg"><img src="img/picture04_small.jpg" alt="Press esc and see ya!"></div>
</div>
```

To have a more precise look of how it works, go check and inspect the [flavor lightbox demo page](https://istuffs.github.io/plugin-flavor-lightbox/).

--- ----------

If you like this plugin star it, fork it, spread to the world about how awesome this plugin is.
