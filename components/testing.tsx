import React, { FC } from "react";

interface PostPreviewProps {
  text: string;
  title: string;
  author: string;
}

export const PostPreview: FC<PostPreviewProps> = ({ text, title, author }) => {
  return (
    <div className="max-w-xl mx-auto my-6 px-4">
      <div className="relative group transition-all duration-300 ease-in-out">
        {/* Subtle shadow effect */}
        <div
          className="absolute inset-0 bg-violet-600 rounded-xl 
          opacity-30 group-hover:opacity-50 transition-all duration-300 
          transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"
        ></div>

        {/* Card Container */}
        <div
          className="relative bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700 
          rounded-xl shadow-lg overflow-hidden 
          transition-all duration-300 
          hover:shadow-xl hover:-translate-y-2"
        >
          {/* Card Content */}
          <div className="p-6">
            {/* Title and Author */}
            <div className="mb-4">
              <h3
                className="text-xl font-bold dark:text-white mb-1 
                             transition-colors duration-300 group-hover:text-violet-600"
              >
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Published by {author}
              </p>
            </div>

            {/* Post Excerpt */}
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {text}
            </p>

            {/* Tags and Metadata */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className="px-3 py-1 text-xs font-medium 
                             bg-violet-50 text-violet-700 
                             rounded-full 
                             transition-colors 
                             group-hover:bg-violet-100"
                >
                  Family
                </span>
              </div>

              {/* Optional: Read More Link */}
              <a
                href="#"
                className="text-violet-200 hover:text-violet-400 
                           font-medium text-sm 
                           flex items-center 
                           transition-colors"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
