"use client";

import {UnderlineNav} from "@primer/react";
import {FunctionComponent} from "react";

export default (() => {
  return (
    <UnderlineNav aria-label="asdf">
      <UnderlineNav.Item href="#">
        Guides
      </UnderlineNav.Item>
      <UnderlineNav.Item href="#">
        Articles
      </UnderlineNav.Item>
      <UnderlineNav.Item href="#" counter={4}>
        Tutorials
      </UnderlineNav.Item>
      <UnderlineNav.Item href="#" counter={2}>
        API
      </UnderlineNav.Item>
      <UnderlineNav.Item href="#">
        Tools
      </UnderlineNav.Item>
      <UnderlineNav.Item href="#">
        Changelog
      </UnderlineNav.Item>
    </UnderlineNav>
  )
}) satisfies FunctionComponent;