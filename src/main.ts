import { GenerateFunctionProps } from './types';
import { OMGI_API_BASE_URL } from './constants';

export const getTemplateUrl = ({
  template,
  values,
}: GenerateFunctionProps): string =>
  `${OMGI_API_BASE_URL}/${template}?${new URLSearchParams(values)}`;
