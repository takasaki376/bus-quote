import type { FC } from "react";

/**
 * @package
 */
export const StarIcon: FC<{ className?: string }> = (props) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   // class="icon icon-tabler icon-tabler-star" width="44" height="44"
    //   className={props.className}
    //   viewBox="0 0 24 24"
    //   stroke-width="1.5"
    //   stroke="#000000"
    //   fill="none"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    // >
    //   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //   <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};
