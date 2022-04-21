import { stringify } from 'query-string';
import { GenerateFunctionProps } from './types';
import { OMGI_API_BASE_URL } from './constants';

export const getTemplateUrl = ({
  template,
  values,
}: GenerateFunctionProps): string => {
  const params = stringify(values, {
    skipEmptyString: true,
    skipNull: true,
  });

  return `${OMGI_API_BASE_URL}/${template}?${params}`;
};
