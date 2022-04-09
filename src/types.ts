export type Template = 'basic' | 'article';

export type CommonTemplateValues = {
  heading: string;
  description: string;
};

export type BasicTemplateValues = {
  badge: string;
} & CommonTemplateValues;

export type ArticleTemplateValues = {
  authorName: string;
  authorAvatarUrl: string;
  meta: string;
} & CommonTemplateValues;

export type GenerateFunctionProps =
  | {
      template: Extract<Template, 'basic'>;
      values: BasicTemplateValues;
    }
  | {
      template: Extract<Template, 'article'>;
      values: ArticleTemplateValues;
    };
