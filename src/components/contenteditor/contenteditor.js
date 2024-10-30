/**
 * Calculates the remaining chars for Meta Threads
 * Adds class "is-over" if over limit
 * Content editor component for the WordPress block.
 *
 * @param {string} post - Post content.
 * @param {Function} setAttributes - Function to set attributes.
 * @return {JSX.Element} - Element to render.
 */

import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

export default function ContentEditor( { post, setAttributes } ) {
	const onChangePost = ( newPost ) => {
		setAttributes( { post: newPost } );
	};

	return (
		<RichText
			tagName="p"
			onChange={ onChangePost }
			value={ post }
			allowedFormats={ [] }
			placeholder={ __( 'Write your post here…' ) }
		></RichText>
	);
}
