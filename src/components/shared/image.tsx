import { IKImage } from 'imagekitio-react';
import { IKImageProps } from 'imagekitio-react/dist/types/components/IKImage/combinedProps';

const urlEndpoint = 'https://ik.imagekit.io/zz4wn4evfn/foundry-web';

const Image = (props: IKImageProps) => {
	return (
		<IKImage
			urlEndpoint={urlEndpoint}
			{...props}
			loading="lazy"
			lqip={{ active: true, quality: 20, blur: 10 }}
		/>
	);
};

export default Image;
