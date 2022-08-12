import ConfirmationView from './EmailSteps/ConfirmationView';
import QueryView from './EmailSteps/QueryView';
import TemplateView from './EmailSteps/TemplateView';

export const stepDictionary = {
	0: QueryView,
	1: TemplateView,
	3: ConfirmationView,
};
