import React from 'react';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';
// import { PUBLIC_URL } from '../../config/constants';
import withConfig from 'components/ConfigProvider/withConfig';
import Image from 'components/Image';
import withEdit from 'components/EditProvider/withEdit';
import STRINGS from 'config/localizedStrings';

const generateSectionsText = (links = {}, ICONS) => {
	let sectionsText = Object.keys(links)
		.filter(
			(sectionKey) =>
				typeof links[sectionKey] === 'object' && links[sectionKey].header
		)
		.map((key) => {
			const section = links[key];
			let heading = Object.keys(section.header)[0];
			return {
				TITLE: section.header[heading],
				LINKS: Object.keys(section.content).map((contentKey) => ({
					text: contentKey,
					link: section.content[contentKey],
				})),
			};
		});

	sectionsText = sectionsText.filter((item) => !!item);
	return sectionsText.map(({ TITLE, LINKS }) => {
		let obj = {
			TITLE,
			LINKS: LINKS.filter((link) => {
				return !!link;
			}),
		};
		return obj;
	});
};

const AppFooter = ({
	className,
	theme,
	constants = { description: '' },
	constants: { links = {} },
	icons: ICONS,
	isEditMode,
}) => {
	return (
		<div
			className={classnames(
				'app_footer-container',
				'd-flex',
				'flex-column',
				'apply_rtl',
				{ 'deep-footer': isEditMode },
				className
			)}
		>
			<div
				className={classnames(
					'footer-row-bottom',
					'd-flex',
					'justify-content-center',
					'align-center'
				)}
			>
				<div className="d-flex pt-2">
					<div className="pr-2">
						<a
							href={links.terms || '#'}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<span>{STRINGS['FOOTER.TERMS_OF_SERVICE']}</span>
							</span>
						</a>
					</div>
					<span>|</span>
					<div className="pl-2">
						<a
							href={links.privacy || '#'}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>{STRINGS['FOOTER.PRIVACY_POLICY']}</span>
						</a>
					</div>
				</div>
				<div className="px-4 mx-4" />
			</div>
		</div>
	);
};

AppFooter.defaultProps = {
	className: '',
	onChangeLanguage: () => () => {},
	activeLanguage: '',
};

export default withEdit(withConfig(AppFooter));
