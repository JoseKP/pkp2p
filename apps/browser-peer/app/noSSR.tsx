import dynamic from "next/dynamic";
import React from "react";
export const NoSSRWrapper = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NoSSRWrapper), {
  ssr: false,
});
