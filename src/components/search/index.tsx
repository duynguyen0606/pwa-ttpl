'use client';
import { useSearchParams } from 'next/navigation';
import SearchSideBar from './SearchSideBar';
import { useEffect, useMemo, useState } from 'react';
import SearchPostResult from './SearchPostResult';
import SearchProcedureResult from './SearchProcedureResult';
import SearchQuestionResult from './SearchQuestionResult';
import { apiSearchGlobal } from '@/src/api/search';

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
  }, [searchParams]);

  const renderContent = useMemo(() => {
    if (data) {
      switch (tabActive) {
        case TypeTabs.ALL:
          return <div>all</div>;
        case TypeTabs.POST:
          return <SearchPostResult listPost={data[TypeTabs.POST].result} />;
        case TypeTabs.PROCEDURE:
          return <SearchProcedureResult />;
        case TypeTabs.QUESTION:
          return <SearchQuestionResult />;
        case TypeTabs.LAWYER:
          return <SearchQuestionResult />;
        case TypeTabs.GROUP:
          return <SearchQuestionResult />;
      }
    }
  }, [tabActive, searchParams, data]);

  return (
    <div>
      <SearchSideBar
        tabActive={tabActive}
        onSetTabActive={(typeTab) => setTabActive(typeTab)}
      />
      {renderContent}
    </div>
  );
}

export default SearchPage;
