import React, { useEffect, useState, memo } from "react";

import { createPortal } from "react-dom";

const Portal = memo(({ children, portalId = "portal-root" }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    let element = document.getElementById(portalId);

    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", portalId);
      document.body.appendChild(element);
    }

    if (element instanceof HTMLDivElement) {
      setContainer(element);
    } else {
      setContainer(null);
    }

    return () => {
      if (element?.parentElement) {
        element.parentElement.removeChild(element);
      }
    };
  }, [portalId]);

  return container ? <>{createPortal(children, container)}</> : null;
});

Portal.displayName = "Portal";

export default Portal;
