"use client";

import { getListArticle } from "@/src/redux/feature/postSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import { PropsWithChildren, useEffect } from "react";

function LayoutState(props: PropsWithChildren) {
  const { children } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListArticle());
  }, []);

  return (
    <div>
      {children}

      {/* phone */}
      <a 
        href="tel:0888889366" 
        className="fixed left-8 bottom-10"
      >
        <div
          className="
            flex items-center justify-center 
            h-[60px] w-[164px]
            bg-[var(--primary-color)]
          "
          style={{
            borderRadius: "5.5rem",
          }}
        >
          <img src="https://ttpl.vn/assets/images/icon/phone.png" width='35' />
          <span className="text-white ml-2">0888889366</span>
        </div>
      </a>

      {/* dmca */}
      <a
        href="https://www.dmca.com/Protection/Status.aspx?ID=7dd76e90-0606-47eb-af77-697796ce89a5&refurl=https://ttpl.vn/"
        className="fixed bottom-0 right-0"
      >
        <img
          src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=7dd76e90-0606-47eb-af77-697796ce89a5"
          alt="DMCA.com Protection Status"
          width="121"
          height="24"
        />
      </a>
    </div>
  );
}

export default LayoutState;
