import theme from './variables.scss';
import fonts from './media/fonts/fonts.scss';
import primaryLogo from './media/logo.png';
import secondaryLogo from './media/logo-biogen.png';
import backgroundImage from './media/background.png';

const template = {
	product: 'avonex',
};

export default {
	...fonts,
	...theme,
	template,

	primaryLogo,
	secondaryLogo,
	backgroundImage,
};
