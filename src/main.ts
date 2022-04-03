import { ArticleTemplateProps, BasicTemplateProps } from "./types";
import { OMGI_API_BASE_URL } from "./constants";

type GetBasicTemplateUrl = (props: BasicTemplateProps) => string;

export const getBasicTemplateUrl: GetBasicTemplateUrl = ({
  heading,
  description,
  badge,
}) =>
  `${OMGI_API_BASE_URL}/basic?${new URLSearchParams({
    heading,
    description,
    badge,
  })}`;

type GetArticleTemplateUrl = (props: ArticleTemplateProps) => string;

export const getArticleTemplateUrl: GetArticleTemplateUrl = ({
  heading,
  description,
  authorName,
  authorAvatarUrl,
  meta,
}) =>
  `${OMGI_API_BASE_URL}/article?${new URLSearchParams({
    heading,
    description,
    authorName,
    authorAvatarUrl,
    meta,
  })}`;
