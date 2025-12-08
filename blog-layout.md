# Blog Post Page Layout Spec

## Header
- Sticky or static header with site name or logo
- Navigation link: ← Back to Blog

## Featured Image
- Full-width inside content container (`max-w-4xl`)
- Height: 240px (Tailwind: `h-64`)
- Rounded corners

## Title
- Font size: `text-3xl sm:text-4xl`
- Font weight: `font-bold`
- Color: `text-gray-900`

## Description
- Font size: `text-lg`
- Color: `text-gray-700`
- Use excerpt or first paragraph

## Content
- Use Tailwind `prose` class
- Max width: `max-w-3xl`
- Padding top: `mt-6`

## Read Our Next Article
- Section title: `text-2xl font-bold text-gray-900`
- Grid layout: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Gap: `gap-6`

### Card Design
- Image: `h-40 object-cover rounded-md`
- Category: `text-xs font-semibold text-indigo-600 uppercase`
- Title: `text-lg font-medium text-gray-800 group-hover:underline`

## Footer
- Simple footer with copyright or links
