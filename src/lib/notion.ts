// This line make sure that the file never get imported by the client to avoid leaking your Notion Token.
import "server-only";

import { Client } from "@notionhq/client";
import React from "react";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// - React.cache
// Next.JS provide an extremely good caching system with the fetch() function but we can not benefit from it as we are using the Notion JS SDK.

// Instead we can use React.cache, a powerful method that will returns the same result if we call our function with the same parameters.

export default React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
  });
});

export const fetchPageBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children.list({ block_id: pageId }).then((res) => res.results as BlockObjectResponse[]);
});
