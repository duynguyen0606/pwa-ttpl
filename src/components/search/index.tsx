'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { apiSearchGlobal } from '@/src/api/search';

import SearchSideBar from './SearchSideBar';
import SearchPostResult from './SearchPostResult';
import SearchProcedureResult from './SearchProcedureResult';
import SearchQuestionResult from './SearchQuestionResult';
import SearchLawyerResult from './SearchLawyerResult';
import SearchGroupResult from './SearchGroupResult';

enum TypeTabs {
  ALL = 'list',
  POST = 'list_post_favorite',
  PROCEDURE = 'list_data_thutuc',
  QUESTION = 'list_cauhoi',
  LAWYER = 'list_data_luatsu',
  GROUP = 'list_data_moinguoi',
}

function SearchPage() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search');
  const [tabActive, setTabActive] = useState(TypeTabs.ALL);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (searchParams) {
      (async () => {
        const dataRes = await apiSearchGlobal({
          search_procedure: searchValue as string,
        });
        if (dataRes?.status) {
          setData(dataRes.data);
        }
      })();
    }
  }, [searchValue]);

  const renderContent = useMemo(() => {
    if (data) {
      switch (tabActive) {
        case TypeTabs.ALL:
          return <div>all</div>;
        case TypeTabs.POST:
          return <SearchPostResult listPost={data[TypeTabs.POST].result} />;
        case TypeTabs.PROCEDURE:
          return (
            <SearchProcedureResult
              listProcedure={data[TypeTabs.PROCEDURE].result}
            />
          );
        case TypeTabs.QUESTION:
          return (
            <SearchQuestionResult
              listQuestion={data[TypeTabs.QUESTION].result}
            />
          );
        case TypeTabs.LAWYER:
          return (
            <SearchLawyerResult listLawyer={data[TypeTabs.LAWYER].result} />
          );
        case TypeTabs.GROUP:
          return <SearchGroupResult listGroup={data[TypeTabs.GROUP].result} />;
      }
    }
  }, [tabActive, searchValue, data]);

    return (
        <div
            className="flex justify-between flex-wrap"
            style={{ maxWidth: 1460, margin: "auto" }}
        >
            <div style={{ width: 350 }}>
                <SearchSideBar
                    tabActive={tabActive}
                    onSetTabActive={(typeTab) => setTabActive(typeTab)}
                />
            </div>
            <div style={{ width: 600 }}>{renderContent}</div>
        </div>
    );
}

export default SearchPage;
