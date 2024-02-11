"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organizationId as string, // matching folder variable [organizationId]
    });
  }, [setActive, params.organizationId]);

  // return null because this will only be used to do something with the useEffect - checking org URL and matching org to correct URL
  return null;
};
