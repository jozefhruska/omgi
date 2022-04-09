# OMGI

Generate custom Open Graph images dynamically in a matter of seconds. Choose the template you like and generate the OG image with a simple HTTP GET request.

Learn more at https://omgi.vercel.app.

## Usage

Generating an OG image from the "basic" template:

```ts
import { getTemplateUrl } from 'omgi';

getTemplateUrl({
  template: 'basic',
  values: {
    heading: '...',
    description: '...',
    badge: '...',
  }
})
```

Generating an OG image from the "article" template:

```ts
import { getTemplateUrl } from 'omgi';

getTemplateUrl({
  template: 'article',
  values: {
    heading: '...',
    description: '...',
    authorName: '...',
    authorAvatarUrl: '...',
    meta: '...',
  }
})
```