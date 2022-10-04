

type seoMeta = {
  description: string;
  author: string;
  title: string;
  image: string;
  url: string;
  type: string;
  cardType: string;
  twitterCreator: string;
}

export const createSEOMeta = (data: seoMeta) => [
  { 'hid': 'description', property: 'description' ,content: data.description },
  { 'hid': 'author', property: 'author', content: data.author },
  { 'hid': 'og:title', property: 'og:title', content: data.title },
  {
    'hid': 'og:description',
    property: 'og:description',
    content: data.description,
  },
  { 'hid': 'og:image', property: 'og:image', content: data.image },
  {
    'hid': 'og:url',
    property: 'og:url',
    content: data.url,
  },
  {
    'hid': 'og:type',
    property: 'og:type',
    content: data.type
  },
  {
    'hid': 'twitter:card',
    property: 'twitter:card',
    content: data.cardType || 'summary_large_image',
  },
  {
    'hid': 'twitter:creator',
    property: 'twitter:creator',
    content: data.twitterCreator
  },
  {
    'hid': 'twitter:description',
    property: 'twitter:description',
    content: data.description
  }
]
