import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function Question({
  user,
  type,
  title,
  description,
  create_at,
}: {
  user?: any;
  type: any;
  title: string;
  description: string;
  create_at?: string,
}) {
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
      query: "(max-width: 600px)",
  });
  useEffect(() => {
      setIsMobileClient(isMobileUI);
  }, [isMobileUI]);
  return (
      <div>
          {user && (
              <div className="flex items-center flex-wrap mb-3">
                  <Image
                      className="w-9 h-9 rounded-full object-cover"
                      src={
                          user?.img ||
                          "https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                      }
                      alt="avatar user"
                      width={36}
                      height={36}
                  />
                  <div className="ml-3">
                      <Link
                          href={`${isMobileClient ? '/mobile' : ''}/user/${user?.id}`}
                          className="text-[#444] font-bold"
                      >
                          {user?.name}
                      </Link>
                      <p className="text-xs text-[#979797]">{create_at}</p>
                  </div>
              </div>
          )}
          <div>
              <h2 className="text-[#8A8A8A] font-medium">{type}</h2>
              <p
                  className={`text-base font-semibold text-[#4A433F] ${
                      user ? "my-2" : "my-1"
                  }`}
              >
                  {title}
              </p>
              <p className="italic text-[#4A433F]">{description}</p>
          </div>
      </div>
  );
}

export default Question;
