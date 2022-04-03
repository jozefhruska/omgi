export type Template = "basic" | "article";

export type CommonTemplateProps = {
  heading: string;
  description: string;
};

export type BasicTemplateProps = {
  badge: string;
} & CommonTemplateProps;

export type ArticleTemplateProps = {
  authorName: string;
  authorAvatarUrl: string;
  meta: string;
} & CommonTemplateProps;
