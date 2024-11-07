import React from 'react';
import { AiOutlineFrown } from 'react-icons/ai';

type TProps = {
      title?: string;
      description?: string;
};

const NotFoundUi = ({
      title = 'No medical spaces available',
      description = 'Please check back later or adjust your search criteria.',
}: TProps) => {
      return (
            <div className="flex flex-col items-center justify-center  h-[50dvh] rounded-lg">
                  <AiOutlineFrown className="text-4xl text-gray-500 mb-4" />
                  <h2 className="text-lg font-semibold text-gray-600">{title}</h2>
                  <p className="text-gray-500 mt-2">{description}</p>
            </div>
      );
};

export default NotFoundUi;
