import { GenerateFunctionProps } from './types';
import { OMGI_API_BASE_URL } from './constants';

export const getTemplateUrl = ({
  template,
  values,
}: GenerateFunctionProps): string => {
  const params = new URLSearchParams(values);

  params.forEach((value, key) => {
    if (!value || value === 'undefined' || value === 'null') {
      params.delete(key);
    }
  });

  return `${OMGI_API_BASE_URL}/${template}?${params}`;
};
