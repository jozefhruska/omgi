import { getTemplateUrl } from './main';
import { ArticleTemplateValues, BasicTemplateValues } from './types';

describe('Main', () => {
  describe('getTemplateUrl', () => {
    it('Returns a correct URL for the "basic" template', () => {
      const values: BasicTemplateValues = {
        heading:
          'Brush a dozen oz of watermelon in one container of honey.',
        description:
          'Try heating watermelon paste tossed with gold tequila.',
        badge: 'Lettuce combines greatly with nutty caviar.',
      };

      expect(
        getTemplateUrl({
          template: 'basic',
          values,
        })
      ).toEqual(
        'https://omgi.vercel.app/api/generate/basic?badge=Lettuce%20combines%20greatly%20with%20nutty%20caviar.&description=Try%20heating%20watermelon%20paste%20tossed%20with%20gold%20tequila.&heading=Brush%20a%20dozen%20oz%20of%20watermelon%20in%20one%20container%20of%20honey.'
      );
    });

    it('Returns a correct URL for the "article" template', () => {
      const values: ArticleTemplateValues = {
        heading:
          'Brush a dozen oz of watermelon in one container of honey.',
        description:
          'Try heating watermelon paste tossed with gold tequila.',
        authorName: 'Albus Dumbledore',
        authorAvatarUrl: 'https://omgi.vercel.app/image.png',
        meta: 'Try heating chili tossed with worcestershire sauce, covered with lime.',
      };

      expect(
        getTemplateUrl({
          template: 'article',
          values,
        })
      ).toEqual(
        'https://omgi.vercel.app/api/generate/article?authorAvatarUrl=https%3A%2F%2Fomgi.vercel.app%2Fimage.png&authorName=Albus%20Dumbledore&description=Try%20heating%20watermelon%20paste%20tossed%20with%20gold%20tequila.&heading=Brush%20a%20dozen%20oz%20of%20watermelon%20in%20one%20container%20of%20honey.&meta=Try%20heating%20chili%20tossed%20with%20worcestershire%20sauce%2C%20covered%20with%20lime.'
      );
    });

    it('Removes nullish values', () => {
      const values: ArticleTemplateValues = {
        heading:
          'Brush a dozen oz of watermelon in one container of honey.',
        description:
          'Try heating watermelon paste tossed with gold tequila.',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        authorName: undefined,
        authorAvatarUrl: 'https://omgi.vercel.app/image.png',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        meta: null,
      };

      expect(
        getTemplateUrl({
          template: 'article',
          values,
        })
      ).toEqual(
        'https://omgi.vercel.app/api/generate/article?authorAvatarUrl=https%3A%2F%2Fomgi.vercel.app%2Fimage.png&description=Try%20heating%20watermelon%20paste%20tossed%20with%20gold%20tequila.&heading=Brush%20a%20dozen%20oz%20of%20watermelon%20in%20one%20container%20of%20honey.'
      );
    });
  });
});
