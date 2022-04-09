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
        'https://omgi.vercel.app/api/generate/basic?heading=Brush+a+dozen+oz+of+watermelon+in+one+container+of+honey.&description=Try+heating+watermelon+paste+tossed+with+gold+tequila.&badge=Lettuce+combines+greatly+with+nutty+caviar.'
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
        'https://omgi.vercel.app/api/generate/article?heading=Brush+a+dozen+oz+of+watermelon+in+one+container+of+honey.&description=Try+heating+watermelon+paste+tossed+with+gold+tequila.&authorName=Albus+Dumbledore&authorAvatarUrl=https%3A%2F%2Fomgi.vercel.app%2Fimage.png&meta=Try+heating+chili+tossed+with+worcestershire+sauce%2C+covered+with+lime.'
      );
    });
  });
});
