# Practice and project templates

Edit `app/lib/work.ts` to update the four practice pages and the two image-led project previews. Both route templates are Server Components; `generateStaticParams` builds a page for every record.

- `/practice/[slug]` displays a practice introduction, matching project previews, links to other practices, and a contact link. With no matching projects, it displays a coming-soon state.
- `/projects/[slug]` displays a project introduction, main image, observations, image viewer, and next-project link.

The current project titles describe the supplied images; they are not confirmed project names. Categories are provisional and do not assert the studio's scope of work. Project previews are marked as previews and excluded from search indexing until the actual case studies are ready.

When replacing these with real case studies:

1. Confirm names, category assignments, descriptions, photography, and scope with the studio.
2. Update the project records. Add verified location, year, area, and credits to the data type and detail template only when supplied.
3. Replace social-media screenshots with original photography.
4. Remove the preview label and note, and remove `robots.index: false` from the project metadata once content is approved.

No invented client names, project statistics, completion dates, or testimonials are used.
